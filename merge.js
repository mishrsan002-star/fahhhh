(function() {
  'use strict';

  const defaultConfig = {
    files: [],
    basePath: '',
    debug: false
  };

  // Merge user config with defaults
  const config = Object.assign({}, defaultConfig, window.fileMergerConfig || {});
  window.mergedFiles = window.mergedFiles || {};
  const mergeStatus = {};

  function log(...args) {
    if (config.debug) console.log('[FileMerger]', ...args);
  }

  function error(...args) {
    console.error('[FileMerger]', ...args);
  }

  // Helper to clean URLs for matching
  function normalizeUrl(url) {
    try {
      const urlStr = typeof url === 'string' ? url : url.toString();
      // Remove query parameters and decode
      return decodeURIComponent(urlStr.split('?')[0]);
    } catch (e) {
      return url;
    }
  }

  // improved matching logic to handle <base> tags
  function urlsMatch(url1, url2) {
    const norm1 = normalizeUrl(url1);
    const norm2 = normalizeUrl(url2);

    if (norm1 === norm2) return true;
    if (norm1.endsWith(norm2) || norm2.endsWith(norm1)) return true;

    // Check if basenames match (e.g. "Build/game.data" matches "game.data")
    const base1 = norm1.split('/').pop();
    const base2 = norm2.split('/').pop();
    return base1 === base2;
  }

  async function mergeSplitFiles(filePath, numParts) {
    try {
      const parts = [];
      // Construct part URLs (e.g., file.data.part1)
      for (let i = 1; i <= numParts; i++) {
        parts.push(`${filePath}.part${i}`);
      }

      log(`Merging ${filePath} from ${numParts} parts...`);

      // Fetch all parts in parallel
      const responses = await Promise.all(
        parts.map(part => window.originalFetch(part))
      );

      // Check for errors
      for (let i = 0; i < responses.length; i++) {
        if (!responses[i].ok) {
          throw new Error(`Failed to load ${parts[i]}: ${responses[i].status}`);
        }
      }

      // Combine buffers
      const buffers = await Promise.all(responses.map(r => r.arrayBuffer()));
      const totalSize = buffers.reduce((sum, buf) => sum + buf.byteLength, 0);
      const mergedArray = new Uint8Array(totalSize);

      let offset = 0;
      for (const buffer of buffers) {
        mergedArray.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
      }

      log(`✅ ${filePath} merged successfully: ${totalSize} bytes`);
      return mergedArray.buffer;
    } catch (err) {
      error(`Failed to merge ${filePath}:`, err);
      throw err;
    }
  }

  function shouldInterceptFile(url) {
    const urlStr = normalizeUrl(url);

    // Never intercept the .part files themselves
    if (urlStr.includes('.part')) {
      return null;
    }

    for (const file of config.files) {
      const fileName = file.name;
      const fullPath = config.basePath ? `${config.basePath}${fileName}` : fileName;

      // If the requested URL matches one of our configured files
      if (urlsMatch(urlStr, fileName) || urlsMatch(urlStr, fullPath)) {
        // FIX: We return the filename IMMEDIATELY.
        // We do NOT wait for status === 'ready' here.
        // The fetch/XHR overrides will handle the waiting.
        return fileName;
      }
    }

    return null;
  }

  function getMergedFile(filename) {
    if (window.mergedFiles[filename]) return window.mergedFiles[filename];

    // fallback search
    for (const [key, value] of Object.entries(window.mergedFiles)) {
      if (urlsMatch(key, filename)) return value;
    }
    return null;
  }

  // --- Overriding window.fetch ---
  if (!window.originalFetch) {
    window.originalFetch = window.fetch;
  }

  window.fetch = function(url, ...args) {
    const filename = shouldInterceptFile(url);

    if (filename) {
      log('Intercepting fetch for:', filename);

      return new Promise((resolve, reject) => {
        // Increased timeout to 60s for slow connections
        const maxWait = 60000; 
        const startTime = Date.now();

        const checkData = setInterval(() => {
          const buffer = getMergedFile(filename);

          if (buffer) {
            clearInterval(checkData);
            log('✅ Serving merged file via fetch:', filename);

            const contentType = filename.endsWith('.wasm') ? 'application/wasm' : 'application/octet-stream';

            resolve(new Response(buffer, {
              status: 200,
              statusText: 'OK',
              headers: {
                'Content-Type': contentType,
                'Content-Length': buffer.byteLength.toString()
              }
            }));
          } else if (Date.now() - startTime > maxWait) {
            clearInterval(checkData);
            reject(new Error(`Timeout waiting for merged file: ${filename}`));
          }
          else if (mergeStatus[filename] === 'failed') {
             clearInterval(checkData);
             reject(new Error(`Merge failed for file: ${filename}`));
          }
        }, 50); // Check every 50ms
      });
    }

    return window.originalFetch.call(this, url, ...args);
  };

  // --- Overriding XMLHttpRequest ---
  if (!window.OriginalXMLHttpRequest) {
    window.OriginalXMLHttpRequest = window.XMLHttpRequest;
  }

  window.XMLHttpRequest = function(options) {
    const xhr = new window.OriginalXMLHttpRequest(options);
    const originalOpen = xhr.open;
    const originalSend = xhr.send;
    let requestUrl = '';

    xhr.open = function(method, url, ...args) {
      requestUrl = url;
      return originalOpen.call(this, method, url, ...args);
    };

    xhr.send = function(...args) {
      const filename = shouldInterceptFile(requestUrl);

      if (filename) {
        log('Intercepting XHR for:', filename);

        const waitForMerge = () => {
          const buffer = getMergedFile(filename);

          if (buffer) {
            log('✅ Serving merged file via XHR:', filename);

            // Emulate a successful XHR response
            Object.defineProperties(xhr, {
              status: { value: 200 },
              statusText: { value: 'OK' },
              response: { value: buffer },
              responseType: { value: 'arraybuffer' },
              readyState: { value: 4 }
            });

            // Trigger events
            setTimeout(() => {
              if (xhr.onreadystatechange) xhr.onreadystatechange();
              if (xhr.onload) xhr.onload({ type: 'load', target: xhr });
            }, 1);

          } else if (mergeStatus[filename] === 'failed') {
             if (xhr.onerror) xhr.onerror(new Error("Merge Failed"));
          } else {
            // Keep waiting
            setTimeout(waitForMerge, 50);
          }
        };

        waitForMerge();
        return;
      }

      return originalSend.call(this, ...args);
    };

    return xhr;
  };

  // --- Initialize Merging ---
  async function autoMergeFiles() {
    if (!config.files || config.files.length === 0) return;

    try {
      log('Starting merge for', config.files.length, 'files...');

      const mergePromises = config.files.map(file => {
        // Account for base path
        const fullPath = config.basePath ? `${config.basePath}${file.name}` : file.name;
        mergeStatus[file.name] = 'merging';

        return mergeSplitFiles(fullPath, file.parts)
          .then(buffer => {
            // Store under multiple keys to ensure matching works
            window.mergedFiles[file.name] = buffer;
            window.mergedFiles[fullPath] = buffer;
            mergeStatus[file.name] = 'ready';
            return { name: file.name, size: buffer.byteLength };
          })
          .catch(err => {
            mergeStatus[file.name] = 'failed';
            error(`Failed to merge ${file.name}`, err);
            throw err;
          });
      });

      await Promise.all(mergePromises);
      log('🎉 All files merged successfully!');
      
    } catch (err) {
      error('❌ Error during auto-merge:', err);
    }
  }

  // Start immediately
  autoMergeFiles();

})();