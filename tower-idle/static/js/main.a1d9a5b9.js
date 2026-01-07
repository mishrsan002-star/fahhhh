/*! For license information please see main.a1d9a5b9.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      85: (e, t, n) => {
        var r = n(340),
          o = n(950),
          a = n(119);
        function l(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function u(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function s(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (u(e) !== e) throw Error(l(188));
        }
        function f(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = f(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var d = Object.assign,
          p = Symbol.for("react.element"),
          m = Symbol.for("react.transitional.element"),
          h = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          y = Symbol.for("react.strict_mode"),
          v = Symbol.for("react.profiler"),
          b = Symbol.for("react.provider"),
          w = Symbol.for("react.consumer"),
          S = Symbol.for("react.context"),
          k = Symbol.for("react.forward_ref"),
          E = Symbol.for("react.suspense"),
          C = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var x = Symbol.for("react.activity");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var T = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var A = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var N = Symbol.for("react.client.reference");
        function _(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === N ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case v:
              return "Profiler";
            case y:
              return "StrictMode";
            case E:
              return "Suspense";
            case C:
              return "SuspenseList";
            case x:
              return "Activity";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case h:
                return "Portal";
              case S:
                return (e.displayName || "Context") + ".Provider";
              case w:
                return (e._context.displayName || "Context") + ".Consumer";
              case k:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : _(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return _(e(t));
                } catch (n) {}
            }
          return null;
        }
        var R = Array.isArray,
          L = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          z = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          D = { pending: !1, data: null, method: null, action: null },
          j = [],
          U = -1;
        function F(e) {
          return { current: e };
        }
        function M(e) {
          0 > U || ((e.current = j[U]), (j[U] = null), U--);
        }
        function V(e, t) {
          U++, (j[U] = e.current), (e.current = t);
        }
        var W = F(null),
          H = F(null),
          B = F(null),
          G = F(null);
        function Z(e, t) {
          switch ((V(B, t), V(H, e), V(W, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? of(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = af((t = of(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          M(W), V(W, e);
        }
        function q() {
          M(W), M(H), M(B);
        }
        function X(e) {
          null !== e.memoizedState && V(G, e);
          var t = W.current,
            n = af(t, e.type);
          t !== n && (V(H, e), V(W, n));
        }
        function K(e) {
          H.current === e && (M(W), M(H)),
            G.current === e && (M(G), (Kf._currentValue = D));
        }
        var Q = Object.prototype.hasOwnProperty,
          Y = r.unstable_scheduleCallback,
          J = r.unstable_cancelCallback,
          $ = r.unstable_shouldYield,
          ee = r.unstable_requestPaint,
          te = r.unstable_now,
          ne = r.unstable_getCurrentPriorityLevel,
          re = r.unstable_ImmediatePriority,
          oe = r.unstable_UserBlockingPriority,
          ae = r.unstable_NormalPriority,
          le = r.unstable_LowPriority,
          ie = r.unstable_IdlePriority,
          ue = r.log,
          se = r.unstable_setDisableYieldValue,
          ce = null,
          fe = null;
        function de(e) {
          if (
            ("function" === typeof ue && se(e),
            fe && "function" === typeof fe.setStrictMode)
          )
            try {
              fe.setStrictMode(ce, e);
            } catch (t) {}
        }
        var pe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((me(e) / he) | 0)) | 0;
              },
          me = Math.log,
          he = Math.LN2;
        var ge = 256,
          ye = 4194304;
        function ve(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function be(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var o = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          e = e.warmLanes;
          var i = 134217727 & r;
          return (
            0 !== i
              ? 0 !== (r = i & ~a)
                ? (o = ve(r))
                : 0 !== (l &= i)
                ? (o = ve(l))
                : n || (0 !== (n = i & ~e) && (o = ve(n)))
              : 0 !== (i = r & ~a)
              ? (o = ve(i))
              : 0 !== l
              ? (o = ve(l))
              : n || (0 !== (n = r & ~e) && (o = ve(n))),
            0 === o
              ? 0
              : 0 !== t &&
                t !== o &&
                0 === (t & a) &&
                ((a = o & -o) >= (n = t & -t) ||
                  (32 === a && 0 !== (4194048 & n)))
              ? t
              : o
          );
        }
        function we(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Se(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ke() {
          var e = ge;
          return 0 === (4194048 & (ge <<= 1)) && (ge = 256), e;
        }
        function Ee() {
          var e = ye;
          return 0 === (62914560 & (ye <<= 1)) && (ye = 4194304), e;
        }
        function Ce(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ie(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Pe(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - pe(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194090 & n));
        }
        function xe(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - pe(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        function Te(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Ae(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Oe() {
          var e = z.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : cd(e.type);
        }
        var Ne = Math.random().toString(36).slice(2),
          _e = "__reactFiber$" + Ne,
          Re = "__reactProps$" + Ne,
          Le = "__reactContainer$" + Ne,
          ze = "__reactEvents$" + Ne,
          De = "__reactListeners$" + Ne,
          je = "__reactHandles$" + Ne,
          Ue = "__reactResources$" + Ne,
          Fe = "__reactMarker$" + Ne;
        function Me(e) {
          delete e[_e], delete e[Re], delete e[ze], delete e[De], delete e[je];
        }
        function Ve(e) {
          var t = e[_e];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Le] || n[_e])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = wf(e); null !== e; ) {
                  if ((n = e[_e])) return n;
                  e = wf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function We(e) {
          if ((e = e[_e] || e[Le])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function He(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(l(33));
        }
        function Be(e) {
          var t = e[Ue];
          return (
            t ||
              (t = e[Ue] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Ge(e) {
          e[Fe] = !0;
        }
        var Ze = new Set(),
          qe = {};
        function Xe(e, t) {
          Ke(e, t), Ke(e + "Capture", t);
        }
        function Ke(e, t) {
          for (qe[e] = t, e = 0; e < t.length; e++) Ze.add(t[e]);
        }
        var Qe,
          Ye,
          Je = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          $e = {},
          et = {};
        function tt(e, t, n) {
          if (
            ((o = t),
            Q.call(et, o) ||
              (!Q.call($e, o) &&
                (Je.test(o) ? (et[o] = !0) : (($e[o] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var o;
        }
        function nt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function rt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function ot(e) {
          if (void 0 === Qe)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (Qe = (t && t[1]) || ""),
                (Ye =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + Qe + e + Ye;
        }
        var at = !1;
        function lt(e, t) {
          if (!e || at) return "";
          at = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (o) {
                        var r = o;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (a) {
                        r = a;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (l) {
                      r = l;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (i) {
                  if (i && r && "string" === typeof i.stack)
                    return [i.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            o &&
              o.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              l = a[0],
              i = a[1];
            if (l && i) {
              var u = l.split("\n"),
                s = i.split("\n");
              for (
                o = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                o < s.length && !s[o].includes("DetermineComponentFrameRoot");

              )
                o++;
              if (r === u.length || o === s.length)
                for (
                  r = u.length - 1, o = s.length - 1;
                  1 <= r && 0 <= o && u[r] !== s[o];

                )
                  o--;
              for (; 1 <= r && 0 <= o; r--, o--)
                if (u[r] !== s[o]) {
                  if (1 !== r || 1 !== o)
                    do {
                      if ((r--, 0 > --o || u[r] !== s[o])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= o);
                  break;
                }
            }
          } finally {
            (at = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? ot(n) : "";
        }
        function it(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return ot(e.type);
            case 16:
              return ot("Lazy");
            case 13:
              return ot("Suspense");
            case 19:
              return ot("SuspenseList");
            case 0:
            case 15:
              return lt(e.type, !1);
            case 11:
              return lt(e.type.render, !1);
            case 1:
              return lt(e.type, !0);
            case 31:
              return ot("Activity");
            default:
              return "";
          }
        }
        function ut(e) {
          try {
            var t = "";
            do {
              (t += it(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ft(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function dt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var mt = /[\n"\\]/g;
        function ht(e) {
          return e.replace(mt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, o, a, l, i) {
          (e.name = ""),
            null != l &&
            "function" !== typeof l &&
            "symbol" !== typeof l &&
            "boolean" !== typeof l
              ? (e.type = l)
              : e.removeAttribute("type"),
            null != t
              ? "number" === l
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== l && "reset" !== l) || e.removeAttribute("value"),
            null != t
              ? vt(e, l, st(t))
              : null != n
              ? vt(e, l, st(n))
              : null != r && e.removeAttribute("value"),
            null == o && null != a && (e.defaultChecked = !!a),
            null != o &&
              (e.checked =
                o && "function" !== typeof o && "symbol" !== typeof o),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.name = "" + st(i))
              : e.removeAttribute("name");
        }
        function yt(e, t, n, r, o, a, l, i) {
          if (
            (null != a &&
              "function" !== typeof a &&
              "symbol" !== typeof a &&
              "boolean" !== typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : o) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != l &&
              "function" !== typeof l &&
              "symbol" !== typeof l &&
              "boolean" !== typeof l &&
              (e.name = l);
        }
        function vt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + st(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function St(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(l(92));
              if (R(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function kt(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Et = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Ct(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || Et.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function It(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(l(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var o in t)
              (r = t[o]), t.hasOwnProperty(o) && n[o] !== r && Ct(e, o, r);
          } else for (var a in t) t.hasOwnProperty(a) && Ct(e, a, t[a]);
        }
        function Pt(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Tt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function At(e) {
          return Tt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Ot = null;
        function Nt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _t = null,
          Rt = null;
        function Lt(e) {
          var t = We(e);
          if (t && (e = t.stateNode)) {
            var n = e[Re] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + ht("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = r[Re] || null;
                      if (!o) throw Error(l(90));
                      gt(
                        r,
                        o.value,
                        o.defaultValue,
                        o.defaultValue,
                        o.checked,
                        o.defaultChecked,
                        o.type,
                        o.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && dt(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var zt = !1;
        function Dt(e, t, n) {
          if (zt) return e(t, n);
          zt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((zt = !1),
              (null !== _t || null !== Rt) &&
                (Vs(), _t && ((t = _t), (e = Rt), (Rt = _t = null), Lt(t), e)))
            )
              for (t = 0; t < e.length; t++) Lt(e[t]);
          }
        }
        function jt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Re] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Ut = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          Ft = !1;
        if (Ut)
          try {
            var Mt = {};
            Object.defineProperty(Mt, "passive", {
              get: function () {
                Ft = !0;
              },
            }),
              window.addEventListener("test", Mt, Mt),
              window.removeEventListener("test", Mt, Mt);
          } catch (Ld) {
            Ft = !1;
          }
        var Vt = null,
          Wt = null,
          Ht = null;
        function Bt() {
          if (Ht) return Ht;
          var e,
            t,
            n = Wt,
            r = n.length,
            o = "value" in Vt ? Vt.value : Vt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
          return (Ht = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Gt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Zt() {
          return !0;
        }
        function qt() {
          return !1;
        }
        function Xt(e) {
          function t(t, n, r, o, a) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? Zt
                : qt),
              (this.isPropagationStopped = qt),
              this
            );
          }
          return (
            d(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Zt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Zt));
              },
              persist: function () {},
              isPersistent: Zt,
            }),
            t
          );
        }
        var Kt,
          Qt,
          Yt,
          Jt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          $t = Xt(Jt),
          en = d({}, Jt, { view: 0, detail: 0 }),
          tn = Xt(en),
          nn = d({}, en, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Yt &&
                    (Yt && "mousemove" === e.type
                      ? ((Kt = e.screenX - Yt.screenX),
                        (Qt = e.screenY - Yt.screenY))
                      : (Qt = Kt = 0),
                    (Yt = e)),
                  Kt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Qt;
            },
          }),
          rn = Xt(nn),
          on = Xt(d({}, nn, { dataTransfer: 0 })),
          an = Xt(d({}, en, { relatedTarget: 0 })),
          ln = Xt(
            d({}, Jt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          un = Xt(
            d({}, Jt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          sn = Xt(d({}, Jt, { data: 0 })),
          cn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          fn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          dn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = dn[e]) && !!t[e];
        }
        function mn() {
          return pn;
        }
        var hn = Xt(
            d({}, en, {
              key: function (e) {
                if (e.key) {
                  var t = cn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Gt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? fn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: mn,
              charCode: function (e) {
                return "keypress" === e.type ? Gt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Gt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          gn = Xt(
            d({}, nn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          yn = Xt(
            d({}, en, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: mn,
            })
          ),
          vn = Xt(
            d({}, Jt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = Xt(
            d({}, nn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          wn = Xt(d({}, Jt, { newState: 0, oldState: 0 })),
          Sn = [9, 13, 27, 32],
          kn = Ut && "CompositionEvent" in window,
          En = null;
        Ut && "documentMode" in document && (En = document.documentMode);
        var Cn = Ut && "TextEvent" in window && !En,
          In = Ut && (!kn || (En && 8 < En && 11 >= En)),
          Pn = String.fromCharCode(32),
          xn = !1;
        function Tn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Sn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function An(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var On = !1;
        var Nn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function _n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Nn[e.type] : "textarea" === t;
        }
        function Rn(e, t, n, r) {
          _t ? (Rt ? Rt.push(r) : (Rt = [r])) : (_t = r),
            0 < (t = Bc(t, "onChange")).length &&
              ((n = new $t("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Ln = null,
          zn = null;
        function Dn(e) {
          Dc(e, 0);
        }
        function jn(e) {
          if (dt(He(e))) return e;
        }
        function Un(e, t) {
          if ("change" === e) return t;
        }
        var Fn = !1;
        if (Ut) {
          var Mn;
          if (Ut) {
            var Vn = "oninput" in document;
            if (!Vn) {
              var Wn = document.createElement("div");
              Wn.setAttribute("oninput", "return;"),
                (Vn = "function" === typeof Wn.oninput);
            }
            Mn = Vn;
          } else Mn = !1;
          Fn = Mn && (!document.documentMode || 9 < document.documentMode);
        }
        function Hn() {
          Ln && (Ln.detachEvent("onpropertychange", Bn), (zn = Ln = null));
        }
        function Bn(e) {
          if ("value" === e.propertyName && jn(zn)) {
            var t = [];
            Rn(t, zn, e, Nt(e)), Dt(Dn, t);
          }
        }
        function Gn(e, t, n) {
          "focusin" === e
            ? (Hn(), (zn = n), (Ln = t).attachEvent("onpropertychange", Bn))
            : "focusout" === e && Hn();
        }
        function Zn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return jn(zn);
        }
        function qn(e, t) {
          if ("click" === e) return jn(t);
        }
        function Xn(e, t) {
          if ("input" === e || "change" === e) return jn(t);
        }
        var Kn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Qn(e, t) {
          if (Kn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!Q.call(t, o) || !Kn(e[o], t[o])) return !1;
          }
          return !0;
        }
        function Yn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Jn(e, t) {
          var n,
            r = Yn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Yn(r);
          }
        }
        function $n(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? $n(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function er(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function tr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var nr =
            Ut && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          or = null,
          ar = null,
          lr = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          lr ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && tr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (ar && Qn(ar, r)) ||
              ((ar = r),
              0 < (r = Bc(or, "onSelect")).length &&
                ((t = new $t("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          cr = {},
          fr = {};
        function dr(e) {
          if (cr[e]) return cr[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in fr) return (cr[e] = n[t]);
          return e;
        }
        Ut &&
          ((fr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var pr = dr("animationend"),
          mr = dr("animationiteration"),
          hr = dr("animationstart"),
          gr = dr("transitionrun"),
          yr = dr("transitionstart"),
          vr = dr("transitioncancel"),
          br = dr("transitionend"),
          wr = new Map(),
          Sr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function kr(e, t) {
          wr.set(e, t), Xe(t, [e]);
        }
        Sr.push("scrollEnd");
        var Er = new WeakMap();
        function Cr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Er.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: ut(t) }), Er.set(e, t), t);
          }
          return { value: e, source: t, stack: ut(t) };
        }
        var Ir = [],
          Pr = 0,
          xr = 0;
        function Tr() {
          for (var e = Pr, t = (xr = Pr = 0); t < e; ) {
            var n = Ir[t];
            Ir[t++] = null;
            var r = Ir[t];
            Ir[t++] = null;
            var o = Ir[t];
            Ir[t++] = null;
            var a = Ir[t];
            if (((Ir[t++] = null), null !== r && null !== o)) {
              var l = r.pending;
              null === l ? (o.next = o) : ((o.next = l.next), (l.next = o)),
                (r.pending = o);
            }
            0 !== a && _r(n, o, a);
          }
        }
        function Ar(e, t, n, r) {
          (Ir[Pr++] = e),
            (Ir[Pr++] = t),
            (Ir[Pr++] = n),
            (Ir[Pr++] = r),
            (xr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Or(e, t, n, r) {
          return Ar(e, t, n, r), Rr(e);
        }
        function Nr(e, t) {
          return Ar(e, null, null, t), Rr(e);
        }
        function _r(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var o = !1, a = e.return; null !== a; )
            (a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (o = !0)),
              (e = a),
              (a = a.return);
          return 3 === e.tag
            ? ((a = e.stateNode),
              o &&
                null !== t &&
                ((o = 31 - pe(n)),
                null === (r = (e = a.hiddenUpdates)[o])
                  ? (e[o] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              a)
            : null;
        }
        function Rr(e) {
          if (50 < _s) throw ((_s = 0), (Rs = null), Error(l(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {};
        function zr(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Dr(e, t, n, r) {
          return new zr(e, t, n, r);
        }
        function jr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ur(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Dr(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Fr(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Mr(e, t, n, r, o, a) {
          var i = 0;
          if (((r = e), "function" === typeof e)) jr(e) && (i = 1);
          else if ("string" === typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, W.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case x:
                return (
                  ((e = Dr(31, n, t, o)).elementType = x), (e.lanes = a), e
                );
              case g:
                return Vr(n.children, o, a, t);
              case y:
                (i = 8), (o |= 24);
                break;
              case v:
                return (
                  ((e = Dr(12, n, t, 2 | o)).elementType = v), (e.lanes = a), e
                );
              case E:
                return (
                  ((e = Dr(13, n, t, o)).elementType = E), (e.lanes = a), e
                );
              case C:
                return (
                  ((e = Dr(19, n, t, o)).elementType = C), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case b:
                    case S:
                      i = 10;
                      break e;
                    case w:
                      i = 9;
                      break e;
                    case k:
                      i = 11;
                      break e;
                    case I:
                      i = 14;
                      break e;
                    case P:
                      (i = 16), (r = null);
                      break e;
                  }
                (i = 29),
                  (n = Error(l(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Dr(i, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Vr(e, t, n, r) {
          return ((e = Dr(7, e, r, t)).lanes = n), e;
        }
        function Wr(e, t, n) {
          return ((e = Dr(6, e, null, t)).lanes = n), e;
        }
        function Hr(e, t, n) {
          return (
            ((t = Dr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var Br = [],
          Gr = 0,
          Zr = null,
          qr = 0,
          Xr = [],
          Kr = 0,
          Qr = null,
          Yr = 1,
          Jr = "";
        function $r(e, t) {
          (Br[Gr++] = qr), (Br[Gr++] = Zr), (Zr = e), (qr = t);
        }
        function eo(e, t, n) {
          (Xr[Kr++] = Yr), (Xr[Kr++] = Jr), (Xr[Kr++] = Qr), (Qr = e);
          var r = Yr;
          e = Jr;
          var o = 32 - pe(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - pe(t) + o;
          if (30 < a) {
            var l = o - (o % 5);
            (a = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (o -= l),
              (Yr = (1 << (32 - pe(t) + o)) | (n << o) | r),
              (Jr = a + e);
          } else (Yr = (1 << a) | (n << o) | r), (Jr = e);
        }
        function to(e) {
          null !== e.return && ($r(e, 1), eo(e, 1, 0));
        }
        function no(e) {
          for (; e === Zr; )
            (Zr = Br[--Gr]), (Br[Gr] = null), (qr = Br[--Gr]), (Br[Gr] = null);
          for (; e === Qr; )
            (Qr = Xr[--Kr]),
              (Xr[Kr] = null),
              (Jr = Xr[--Kr]),
              (Xr[Kr] = null),
              (Yr = Xr[--Kr]),
              (Xr[Kr] = null);
        }
        var ro = null,
          oo = null,
          ao = !1,
          lo = null,
          io = !1,
          uo = Error(l(519));
        function so(e) {
          throw (go(Cr(Error(l(418, "")), e)), uo);
        }
        function co(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[_e] = e), (t[Re] = r), n)) {
            case "dialog":
              jc("cancel", t), jc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              jc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Lc.length; n++) jc(Lc[n], t);
              break;
            case "source":
              jc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              jc("error", t), jc("load", t);
              break;
            case "details":
              jc("toggle", t);
              break;
            case "input":
              jc("invalid", t),
                yt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                ft(t);
              break;
            case "select":
              jc("invalid", t);
              break;
            case "textarea":
              jc("invalid", t),
                St(t, r.value, r.defaultValue, r.children),
                ft(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Qc(t.textContent, n)
            ? (null != r.popover && (jc("beforetoggle", t), jc("toggle", t)),
              null != r.onScroll && jc("scroll", t),
              null != r.onScrollEnd && jc("scrollend", t),
              null != r.onClick && (t.onclick = Yc),
              (t = !0))
            : (t = !1),
            t || so(e);
        }
        function fo(e) {
          for (ro = e.return; ro; )
            switch (ro.tag) {
              case 5:
              case 13:
                return void (io = !1);
              case 27:
              case 3:
                return void (io = !0);
              default:
                ro = ro.return;
            }
        }
        function po(e) {
          if (e !== ro) return !1;
          if (!ao) return fo(e), (ao = !0), !1;
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  lf(e.type, e.memoizedProps)),
              (t = !t)),
            t && oo && so(e),
            fo(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      oo = vf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              oo = null;
            }
          } else
            27 === n
              ? ((n = oo),
                mf(e.type) ? ((e = bf), (bf = null), (oo = e)) : (oo = n))
              : (oo = ro ? vf(e.stateNode.nextSibling) : null);
          return !0;
        }
        function mo() {
          (oo = ro = null), (ao = !1);
        }
        function ho() {
          var e = lo;
          return (
            null !== e &&
              (null === bs ? (bs = e) : bs.push.apply(bs, e), (lo = null)),
            e
          );
        }
        function go(e) {
          null === lo ? (lo = [e]) : lo.push(e);
        }
        var yo = F(null),
          vo = null,
          bo = null;
        function wo(e, t, n) {
          V(yo, t._currentValue), (t._currentValue = n);
        }
        function So(e) {
          (e._currentValue = yo.current), M(yo);
        }
        function ko(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t, n, r) {
          var o = e.child;
          for (null !== o && (o.return = e); null !== o; ) {
            var a = o.dependencies;
            if (null !== a) {
              var i = o.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var u = a;
                a = o;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    (a.lanes |= n),
                      null !== (u = a.alternate) && (u.lanes |= n),
                      ko(a.return, n, e),
                      r || (i = null);
                    break e;
                  }
                a = u.next;
              }
            } else if (18 === o.tag) {
              if (null === (i = o.return)) throw Error(l(341));
              (i.lanes |= n),
                null !== (a = i.alternate) && (a.lanes |= n),
                ko(i, n, e),
                (i = null);
            } else i = o.child;
            if (null !== i) i.return = o;
            else
              for (i = o; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (o = i.sibling)) {
                  (o.return = i.return), (i = o);
                  break;
                }
                i = i.return;
              }
            o = i;
          }
        }
        function Co(e, t, n, r) {
          e = null;
          for (var o = t, a = !1; null !== o; ) {
            if (!a)
              if (0 !== (524288 & o.flags)) a = !0;
              else if (0 !== (262144 & o.flags)) break;
            if (10 === o.tag) {
              var i = o.alternate;
              if (null === i) throw Error(l(387));
              if (null !== (i = i.memoizedProps)) {
                var u = o.type;
                Kn(o.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (o === G.current) {
              if (null === (i = o.alternate)) throw Error(l(387));
              i.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
                (null !== e ? e.push(Kf) : (e = [Kf]));
            }
            o = o.return;
          }
          null !== e && Eo(t, e, n, r), (t.flags |= 262144);
        }
        function Io(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Po(e) {
          (vo = e),
            (bo = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function xo(e) {
          return Ao(vo, e);
        }
        function To(e, t) {
          return null === vo && Po(e), Ao(e, t);
        }
        function Ao(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === bo)
          ) {
            if (null === e) throw Error(l(308));
            (bo = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else bo = bo.next = t;
          return n;
        }
        var Oo =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          No = r.unstable_scheduleCallback,
          _o = r.unstable_NormalPriority,
          Ro = {
            $$typeof: S,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Lo() {
          return { controller: new Oo(), data: new Map(), refCount: 0 };
        }
        function zo(e) {
          e.refCount--,
            0 === e.refCount &&
              No(_o, function () {
                e.controller.abort();
              });
        }
        var Do = null,
          jo = 0,
          Uo = 0,
          Fo = null;
        function Mo() {
          if (0 === --jo && null !== Do) {
            null !== Fo && (Fo.status = "fulfilled");
            var e = Do;
            (Do = null), (Uo = 0), (Fo = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Vo = L.S;
        L.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Do) {
                var n = (Do = []);
                (jo = 0),
                  (Uo = Ac()),
                  (Fo = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              jo++, t.then(Mo, Mo);
            })(0, t),
            null !== Vo && Vo(e, t);
        };
        var Wo = F(null);
        function Ho() {
          var e = Wo.current;
          return null !== e ? e : rs.pooledCache;
        }
        function Bo(e, t) {
          V(Wo, null === t ? Wo.current : t.pool);
        }
        function Go() {
          var e = Ho();
          return null === e ? null : { parent: Ro._currentValue, pool: e };
        }
        var Zo = Error(l(460)),
          qo = Error(l(474)),
          Xo = Error(l(542)),
          Ko = { then: function () {} };
        function Qo(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function Yo() {}
        function Jo(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Yo, Yo), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (ta((e = t.reason)), e);
            default:
              if ("string" === typeof t.status) t.then(Yo, Yo);
              else {
                if (null !== (e = rs) && 100 < e.shellSuspendCounter)
                  throw Error(l(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (ta((e = t.reason)), e);
              }
              throw (($o = t), Zo);
          }
        }
        var $o = null;
        function ea() {
          if (null === $o) throw Error(l(459));
          var e = $o;
          return ($o = null), e;
        }
        function ta(e) {
          if (e === Zo || e === Xo) throw Error(l(483));
        }
        var na = !1;
        function ra(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function oa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function aa(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function la(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & ns))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              (t = Rr(e)),
              _r(e, null, n),
              t
            );
          }
          return Ar(e, r, t, n), Rr(e);
        }
        function ia(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194048 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), xe(e, n);
          }
        }
        function ua(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === a ? (o = a = l) : (a = a.next = l), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var sa = !1;
        function ca() {
          if (sa) {
            if (null !== Fo) throw Fo;
          }
        }
        function fa(e, t, n, r) {
          sa = !1;
          var o = e.updateQueue;
          na = !1;
          var a = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            i = o.shared.pending;
          if (null !== i) {
            o.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (a = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = o.baseState;
            for (l = 0, c = s = u = null, i = a; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (as & p) === p : (r & p) === p) {
                0 !== p && p === Uo && (sa = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var h = e,
                    g = i;
                  p = t;
                  var y = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" === typeof (h = g.payload)) {
                        f = h.call(y, f, p);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (h = g.payload)
                              ? h.call(y, f, p)
                              : h) ||
                        void 0 === p
                      )
                        break e;
                      f = d({}, f, p);
                      break e;
                    case 2:
                      na = !0;
                  }
                }
                null !== (p = i.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = o.callbacks) ? (o.callbacks = [p]) : m.push(p));
              } else
                (m = {
                  lane: p,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = m), (u = f)) : (c = c.next = m),
                  (l |= p);
              if (null === (i = i.next)) {
                if (null === (i = o.shared.pending)) break;
                (i = (m = i).next),
                  (m.next = null),
                  (o.lastBaseUpdate = m),
                  (o.shared.pending = null);
              }
            }
            null === c && (u = f),
              (o.baseState = u),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = c),
              null === a && (o.shared.lanes = 0),
              (ps |= l),
              (e.lanes = l),
              (e.memoizedState = f);
          }
        }
        function da(e, t) {
          if ("function" !== typeof e) throw Error(l(191, e));
          e.call(t);
        }
        function pa(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) da(n[e], t);
        }
        var ma = F(null),
          ha = F(0);
        function ga(e, t) {
          V(ha, (e = fs)), V(ma, t), (fs = e | t.baseLanes);
        }
        function ya() {
          V(ha, fs), V(ma, ma.current);
        }
        function va() {
          (fs = ha.current), M(ma), M(ha);
        }
        var ba = 0,
          wa = null,
          Sa = null,
          ka = null,
          Ea = !1,
          Ca = !1,
          Ia = !1,
          Pa = 0,
          xa = 0,
          Ta = null,
          Aa = 0;
        function Oa() {
          throw Error(l(321));
        }
        function Na(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Kn(e[n], t[n])) return !1;
          return !0;
        }
        function _a(e, t, n, r, o, a) {
          return (
            (ba = a),
            (wa = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (L.H = null === e || null === e.memoizedState ? Zl : ql),
            (Ia = !1),
            (a = n(r, o)),
            (Ia = !1),
            Ca && (a = La(t, n, r, o)),
            Ra(e),
            a
          );
        }
        function Ra(e) {
          L.H = Gl;
          var t = null !== Sa && null !== Sa.next;
          if (
            ((ba = 0),
            (ka = Sa = wa = null),
            (Ea = !1),
            (xa = 0),
            (Ta = null),
            t)
          )
            throw Error(l(300));
          null === e ||
            xi ||
            (null !== (e = e.dependencies) && Io(e) && (xi = !0));
        }
        function La(e, t, n, r) {
          wa = e;
          var o = 0;
          do {
            if ((Ca && (Ta = null), (xa = 0), (Ca = !1), 25 <= o))
              throw Error(l(301));
            if (((o += 1), (ka = Sa = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              (a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0);
            }
            (L.H = Xl), (a = t(n, r));
          } while (Ca);
          return a;
        }
        function za() {
          var e = L.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? Va(t) : t),
            (e = e.useState()[0]),
            (null !== Sa ? Sa.memoizedState : null) !== e && (wa.flags |= 1024),
            t
          );
        }
        function Da() {
          var e = 0 !== Pa;
          return (Pa = 0), e;
        }
        function ja(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function Ua(e) {
          if (Ea) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            Ea = !1;
          }
          (ba = 0),
            (ka = Sa = wa = null),
            (Ca = !1),
            (xa = Pa = 0),
            (Ta = null);
        }
        function Fa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ka ? (wa.memoizedState = ka = e) : (ka = ka.next = e), ka
          );
        }
        function Ma() {
          if (null === Sa) {
            var e = wa.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Sa.next;
          var t = null === ka ? wa.memoizedState : ka.next;
          if (null !== t) (ka = t), (Sa = e);
          else {
            if (null === e) {
              if (null === wa.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            (e = {
              memoizedState: (Sa = e).memoizedState,
              baseState: Sa.baseState,
              baseQueue: Sa.baseQueue,
              queue: Sa.queue,
              next: null,
            }),
              null === ka ? (wa.memoizedState = ka = e) : (ka = ka.next = e);
          }
          return ka;
        }
        function Va(e) {
          var t = xa;
          return (
            (xa += 1),
            null === Ta && (Ta = []),
            (e = Jo(Ta, e, t)),
            (t = wa),
            null === (null === ka ? t.memoizedState : ka.next) &&
              ((t = t.alternate),
              (L.H = null === t || null === t.memoizedState ? Zl : ql)),
            e
          );
        }
        function Wa(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return Va(e);
            if (e.$$typeof === S) return xo(e);
          }
          throw Error(l(438, String(e)));
        }
        function Ha(e) {
          var t = null,
            n = wa.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = wa.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (wa.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = T;
          return t.index++, n;
        }
        function Ba(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ga(e) {
          return Za(Ma(), Sa, e);
        }
        function Za(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(l(311));
          r.lastRenderedReducer = n;
          var o = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== o) {
              var i = o.next;
              (o.next = a.next), (a.next = i);
            }
            (t.baseQueue = o = a), (r.pending = null);
          }
          if (((a = e.baseState), null === o)) e.memoizedState = a;
          else {
            var u = (i = null),
              s = null,
              c = (t = o.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (as & d) === d : (ba & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Uo && (f = !0);
                else {
                  if ((ba & p) === p) {
                    (c = c.next), p === Uo && (f = !0);
                    continue;
                  }
                  (d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (i = a)) : (s = s.next = d),
                    (wa.lanes |= p),
                    (ps |= p);
                }
                (d = c.action),
                  Ia && n(a, d),
                  (a = c.hasEagerState ? c.eagerState : n(a, d));
              } else
                (p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = a)) : (s = s.next = p),
                  (wa.lanes |= d),
                  (ps |= d);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === s ? (i = a) : (s.next = u),
              !Kn(a, e.memoizedState) && ((xi = !0), f && null !== (n = Fo)))
            )
              throw n;
            (e.memoizedState = a),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = a);
          }
          return null === o && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function qa(e) {
          var t = Ma(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var i = (o = o.next);
            do {
              (a = e(a, i.action)), (i = i.next);
            } while (i !== o);
            Kn(a, t.memoizedState) || (xi = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Xa(e, t, n) {
          var r = wa,
            o = Ma(),
            a = ao;
          if (a) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Kn((Sa || o).memoizedState, n);
          if (
            (i && ((o.memoizedState = n), (xi = !0)),
            (o = o.queue),
            yl(2048, 8, Ya.bind(null, r, o, e), [e]),
            o.getSnapshot !== t ||
              i ||
              (null !== ka && 1 & ka.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              ml(
                9,
                { destroy: void 0, resource: void 0 },
                Qa.bind(null, r, o, n, t),
                null
              ),
              null === rs)
            )
              throw Error(l(349));
            a || 0 !== (124 & ba) || Ka(r, t, n);
          }
          return n;
        }
        function Ka(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = wa.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (wa.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Qa(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ja(t) && $a(e);
        }
        function Ya(e, t, n) {
          return n(function () {
            Ja(t) && $a(e);
          });
        }
        function Ja(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Kn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function $a(e) {
          var t = Nr(e, 2);
          null !== t && Ds(t, e, 2);
        }
        function el(e) {
          var t = Fa();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), Ia)) {
              de(!0);
              try {
                n();
              } finally {
                de(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ba,
              lastRenderedState: e,
            }),
            t
          );
        }
        function tl(e, t, n, r) {
          return (e.baseState = n), Za(e, Sa, "function" === typeof r ? r : Ba);
        }
        function nl(e, t, n, r, o) {
          if (Wl(e)) throw Error(l(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: o,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            null !== L.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending)
                ? ((a.next = t.pending = a), rl(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
          }
        }
        function rl(e, t) {
          var n = t.action,
            r = t.payload,
            o = e.state;
          if (t.isTransition) {
            var a = L.T,
              l = {};
            L.T = l;
            try {
              var i = n(o, r),
                u = L.S;
              null !== u && u(l, i), ol(e, t, i);
            } catch (s) {
              ll(e, t, s);
            } finally {
              L.T = a;
            }
          } else
            try {
              ol(e, t, (a = n(o, r)));
            } catch (c) {
              ll(e, t, c);
            }
        }
        function ol(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  al(e, t, n);
                },
                function (n) {
                  return ll(e, t, n);
                }
              )
            : al(e, t, n);
        }
        function al(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            il(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), rl(e, n)));
        }
        function ll(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), il(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function il(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function ul(e, t) {
          return t;
        }
        function sl(e, t) {
          if (ao) {
            var n = rs.formState;
            if (null !== n) {
              e: {
                var r = wa;
                if (ao) {
                  if (oo) {
                    t: {
                      for (var o = oo, a = io; 8 !== o.nodeType; ) {
                        if (!a) {
                          o = null;
                          break t;
                        }
                        if (null === (o = vf(o.nextSibling))) {
                          o = null;
                          break t;
                        }
                      }
                      o = "F!" === (a = o.data) || "F" === a ? o : null;
                    }
                    if (o) {
                      (oo = vf(o.nextSibling)), (r = "F!" === o.data);
                      break e;
                    }
                  }
                  so(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = Fa()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ul,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = Fl.bind(null, wa, r)),
            (r.dispatch = n),
            (r = el(!1)),
            (a = Vl.bind(null, wa, !1, r.queue)),
            (o = { state: t, dispatch: null, action: e, pending: null }),
            ((r = Fa()).queue = o),
            (n = nl.bind(null, wa, o, a, n)),
            (o.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function cl(e) {
          return fl(Ma(), Sa, e);
        }
        function fl(e, t, n) {
          if (
            ((t = Za(e, t, ul)[0]),
            (e = Ga(Ba)[0]),
            "object" === typeof t && null !== t && "function" === typeof t.then)
          )
            try {
              var r = Va(t);
            } catch (l) {
              if (l === Zo) throw Xo;
              throw l;
            }
          else r = t;
          var o = (t = Ma()).queue,
            a = o.dispatch;
          return (
            n !== t.memoizedState &&
              ((wa.flags |= 2048),
              ml(
                9,
                { destroy: void 0, resource: void 0 },
                dl.bind(null, o, n),
                null
              )),
            [r, a, e]
          );
        }
        function dl(e, t) {
          e.action = t;
        }
        function pl(e) {
          var t = Ma(),
            n = Sa;
          if (null !== n) return fl(t, n, e);
          Ma(), (t = t.memoizedState);
          var r = (n = Ma()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function ml(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = wa.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (wa.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function hl() {
          return Ma().memoizedState;
        }
        function gl(e, t, n, r) {
          var o = Fa();
          (r = void 0 === r ? null : r),
            (wa.flags |= e),
            (o.memoizedState = ml(
              1 | t,
              { destroy: void 0, resource: void 0 },
              n,
              r
            ));
        }
        function yl(e, t, n, r) {
          var o = Ma();
          r = void 0 === r ? null : r;
          var a = o.memoizedState.inst;
          null !== Sa && null !== r && Na(r, Sa.memoizedState.deps)
            ? (o.memoizedState = ml(t, a, n, r))
            : ((wa.flags |= e), (o.memoizedState = ml(1 | t, a, n, r)));
        }
        function vl(e, t) {
          gl(8390656, 8, e, t);
        }
        function bl(e, t) {
          yl(2048, 8, e, t);
        }
        function wl(e, t) {
          return yl(4, 2, e, t);
        }
        function Sl(e, t) {
          return yl(4, 4, e, t);
        }
        function kl(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function El(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            yl(4, 4, kl.bind(null, t, e), n);
        }
        function Cl() {}
        function Il(e, t) {
          var n = Ma();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Na(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Pl(e, t) {
          var n = Ma();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Na(t, r[1])) return r[0];
          if (((r = e()), Ia)) {
            de(!0);
            try {
              e();
            } finally {
              de(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function xl(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & ba)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = zs()),
              (wa.lanes |= e),
              (ps |= e),
              n);
        }
        function Tl(e, t, n, r) {
          return Kn(n, t)
            ? n
            : null !== ma.current
            ? ((e = xl(e, n, r)), Kn(e, t) || (xi = !0), e)
            : 0 === (42 & ba)
            ? ((xi = !0), (e.memoizedState = n))
            : ((e = zs()), (wa.lanes |= e), (ps |= e), t);
        }
        function Al(e, t, n, r, o) {
          var a = z.p;
          z.p = 0 !== a && 8 > a ? a : 8;
          var l = L.T,
            i = {};
          (L.T = i), Vl(e, !1, t, n);
          try {
            var u = o(),
              s = L.S;
            if (
              (null !== s && s(i, u),
              null !== u &&
                "object" === typeof u &&
                "function" === typeof u.then)
            )
              Ml(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(u, r),
                Ls()
              );
            else Ml(e, t, r, Ls());
          } catch (c) {
            Ml(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Ls()
            );
          } finally {
            (z.p = a), (L.T = l);
          }
        }
        function Ol() {}
        function Nl(e, t, n, r) {
          if (5 !== e.tag) throw Error(l(476));
          var o = _l(e).queue;
          Al(
            e,
            o,
            t,
            D,
            null === n
              ? Ol
              : function () {
                  return Rl(e), n(r);
                }
          );
        }
        function _l(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: D,
              baseState: D,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ba,
                lastRenderedState: D,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ba,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function Rl(e) {
          Ml(e, _l(e).next.queue, {}, Ls());
        }
        function Ll() {
          return xo(Kf);
        }
        function zl() {
          return Ma().memoizedState;
        }
        function Dl() {
          return Ma().memoizedState;
        }
        function jl(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Ls(),
                  r = la(t, (e = aa(n)), n);
                return (
                  null !== r && (Ds(r, t, n), ia(r, t, n)),
                  (t = { cache: Lo() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function Ul(e, t, n) {
          var r = Ls();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Wl(e)
              ? Hl(t, n)
              : null !== (n = Or(e, t, n, r)) && (Ds(n, e, r), Bl(n, t, r));
        }
        function Fl(e, t, n) {
          Ml(e, t, n, Ls());
        }
        function Ml(e, t, n, r) {
          var o = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (Wl(e)) Hl(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = a(l, n);
                if (((o.hasEagerState = !0), (o.eagerState = i), Kn(i, l)))
                  return Ar(e, t, o, 0), null === rs && Tr(), !1;
              } catch (u) {}
            if (null !== (n = Or(e, t, o, r)))
              return Ds(n, e, r), Bl(n, t, r), !0;
          }
          return !1;
        }
        function Vl(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Ac(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Wl(e))
          ) {
            if (t) throw Error(l(479));
          } else null !== (t = Or(e, n, r, 2)) && Ds(t, e, 2);
        }
        function Wl(e) {
          var t = e.alternate;
          return e === wa || (null !== t && t === wa);
        }
        function Hl(e, t) {
          Ca = Ea = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Bl(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), xe(e, n);
          }
        }
        var Gl = {
            readContext: xo,
            use: Wa,
            useCallback: Oa,
            useContext: Oa,
            useEffect: Oa,
            useImperativeHandle: Oa,
            useLayoutEffect: Oa,
            useInsertionEffect: Oa,
            useMemo: Oa,
            useReducer: Oa,
            useRef: Oa,
            useState: Oa,
            useDebugValue: Oa,
            useDeferredValue: Oa,
            useTransition: Oa,
            useSyncExternalStore: Oa,
            useId: Oa,
            useHostTransitionStatus: Oa,
            useFormState: Oa,
            useActionState: Oa,
            useOptimistic: Oa,
            useMemoCache: Oa,
            useCacheRefresh: Oa,
          },
          Zl = {
            readContext: xo,
            use: Wa,
            useCallback: function (e, t) {
              return (Fa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xo,
            useEffect: vl,
            useImperativeHandle: function (e, t, n) {
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                gl(4194308, 4, kl.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return gl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              gl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Fa();
              t = void 0 === t ? null : t;
              var r = e();
              if (Ia) {
                de(!0);
                try {
                  e();
                } finally {
                  de(!1);
                }
              }
              return (n.memoizedState = [r, t]), r;
            },
            useReducer: function (e, t, n) {
              var r = Fa();
              if (void 0 !== n) {
                var o = n(t);
                if (Ia) {
                  de(!0);
                  try {
                    n(t);
                  } finally {
                    de(!1);
                  }
                }
              } else o = t;
              return (
                (r.memoizedState = r.baseState = o),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: o,
                }),
                (r.queue = e),
                (e = e.dispatch = Ul.bind(null, wa, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Fa().memoizedState = e);
            },
            useState: function (e) {
              var t = (e = el(e)).queue,
                n = Fl.bind(null, wa, t);
              return (t.dispatch = n), [e.memoizedState, n];
            },
            useDebugValue: Cl,
            useDeferredValue: function (e, t) {
              return xl(Fa(), e, t);
            },
            useTransition: function () {
              var e = el(!1);
              return (
                (e = Al.bind(null, wa, e.queue, !0, !1)),
                (Fa().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var r = wa,
                o = Fa();
              if (ao) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === rs)) throw Error(l(349));
                0 !== (124 & as) || Ka(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                vl(Ya.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                ml(
                  9,
                  { destroy: void 0, resource: void 0 },
                  Qa.bind(null, r, a, n, t),
                  null
                ),
                n
              );
            },
            useId: function () {
              var e = Fa(),
                t = rs.identifierPrefix;
              if (ao) {
                var n = Jr;
                (t =
                  "\xab" +
                  t +
                  "R" +
                  (n = (Yr & ~(1 << (32 - pe(Yr) - 1))).toString(32) + n)),
                  0 < (n = Pa++) && (t += "H" + n.toString(32)),
                  (t += "\xbb");
              } else t = "\xab" + t + "r" + (n = Aa++).toString(32) + "\xbb";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: Ll,
            useFormState: sl,
            useActionState: sl,
            useOptimistic: function (e) {
              var t = Fa();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = Vl.bind(null, wa, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: Ha,
            useCacheRefresh: function () {
              return (Fa().memoizedState = jl.bind(null, wa));
            },
          },
          ql = {
            readContext: xo,
            use: Wa,
            useCallback: Il,
            useContext: xo,
            useEffect: bl,
            useImperativeHandle: El,
            useInsertionEffect: wl,
            useLayoutEffect: Sl,
            useMemo: Pl,
            useReducer: Ga,
            useRef: hl,
            useState: function () {
              return Ga(Ba);
            },
            useDebugValue: Cl,
            useDeferredValue: function (e, t) {
              return Tl(Ma(), Sa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Ga(Ba)[0],
                t = Ma().memoizedState;
              return ["boolean" === typeof e ? e : Va(e), t];
            },
            useSyncExternalStore: Xa,
            useId: zl,
            useHostTransitionStatus: Ll,
            useFormState: cl,
            useActionState: cl,
            useOptimistic: function (e, t) {
              return tl(Ma(), 0, e, t);
            },
            useMemoCache: Ha,
            useCacheRefresh: Dl,
          },
          Xl = {
            readContext: xo,
            use: Wa,
            useCallback: Il,
            useContext: xo,
            useEffect: bl,
            useImperativeHandle: El,
            useInsertionEffect: wl,
            useLayoutEffect: Sl,
            useMemo: Pl,
            useReducer: qa,
            useRef: hl,
            useState: function () {
              return qa(Ba);
            },
            useDebugValue: Cl,
            useDeferredValue: function (e, t) {
              var n = Ma();
              return null === Sa ? xl(n, e, t) : Tl(n, Sa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = qa(Ba)[0],
                t = Ma().memoizedState;
              return ["boolean" === typeof e ? e : Va(e), t];
            },
            useSyncExternalStore: Xa,
            useId: zl,
            useHostTransitionStatus: Ll,
            useFormState: pl,
            useActionState: pl,
            useOptimistic: function (e, t) {
              var n = Ma();
              return null !== Sa
                ? tl(n, 0, e, t)
                : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: Ha,
            useCacheRefresh: Dl,
          },
          Kl = null,
          Ql = 0;
        function Yl(e) {
          var t = Ql;
          return (Ql += 1), null === Kl && (Kl = []), Jo(Kl, e, t);
        }
        function Jl(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function $l(e, t) {
          if (t.$$typeof === p) throw Error(l(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ei(e) {
          return (0, e._init)(e._payload);
        }
        function ti(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function o(e, t) {
            return ((e = Ur(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 67108866), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Wr(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === g
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === P &&
                    ei(a) === t.type))
              ? (Jl((t = o(t, n.props)), n), (t.return = e), t)
              : (Jl((t = Mr(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Hr(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Vr(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Wr("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    Jl((n = Mr(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case h:
                  return ((t = Hr(t, e.mode, n)).return = e), t;
                case P:
                  return d(e, (t = (0, t._init)(t._payload)), n);
              }
              if (R(t) || O(t))
                return ((t = Vr(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return d(e, Yl(t), n);
              if (t.$$typeof === S) return d(e, To(e, t), n);
              $l(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return n.key === o ? s(e, t, n, r) : null;
                case h:
                  return n.key === o ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (n = (o = n._init)(n._payload)), r);
              }
              if (R(n) || O(n)) return null !== o ? null : f(e, t, n, r, null);
              if ("function" === typeof n.then) return p(e, t, Yl(n), r);
              if (n.$$typeof === S) return p(e, t, To(e, n), r);
              $l(e, n);
            }
            return null;
          }
          function y(e, t, n, r, o) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case h:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case P:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), o);
              }
              if (R(r) || O(r)) return f(t, (e = e.get(n) || null), r, o, null);
              if ("function" === typeof r.then) return y(e, t, n, Yl(r), o);
              if (r.$$typeof === S) return y(e, t, n, To(t, r), o);
              $l(t, r);
            }
            return null;
          }
          function v(u, s, c, f) {
            if (
              ("object" === typeof c &&
                null !== c &&
                c.type === g &&
                null === c.key &&
                (c = c.props.children),
              "object" === typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case m:
                  e: {
                    for (var b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if ((b = c.type) === g) {
                          if (7 === s.tag) {
                            n(u, s.sibling),
                              ((f = o(s, c.props.children)).return = u),
                              (u = f);
                            break e;
                          }
                        } else if (
                          s.elementType === b ||
                          ("object" === typeof b &&
                            null !== b &&
                            b.$$typeof === P &&
                            ei(b) === s.type)
                        ) {
                          n(u, s.sibling),
                            Jl((f = o(s, c.props)), c),
                            (f.return = u),
                            (u = f);
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      t(u, s), (s = s.sibling);
                    }
                    c.type === g
                      ? (((f = Vr(c.props.children, u.mode, f, c.key)).return =
                          u),
                        (u = f))
                      : (Jl(
                          (f = Mr(c.type, c.key, c.props, null, u.mode, f)),
                          c
                        ),
                        (f.return = u),
                        (u = f));
                  }
                  return i(u);
                case h:
                  e: {
                    for (b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === c.containerInfo &&
                          s.stateNode.implementation === c.implementation
                        ) {
                          n(u, s.sibling),
                            ((f = o(s, c.children || [])).return = u),
                            (u = f);
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      t(u, s), (s = s.sibling);
                    }
                    ((f = Hr(c, u.mode, f)).return = u), (u = f);
                  }
                  return i(u);
                case P:
                  return v(u, s, (c = (b = c._init)(c._payload)), f);
              }
              if (R(c))
                return (function (o, l, i, u) {
                  for (
                    var s = null, c = null, f = l, m = (l = 0), h = null;
                    null !== f && m < i.length;
                    m++
                  ) {
                    f.index > m ? ((h = f), (f = null)) : (h = f.sibling);
                    var g = p(o, f, i[m], u);
                    if (null === g) {
                      null === f && (f = h);
                      break;
                    }
                    e && f && null === g.alternate && t(o, f),
                      (l = a(g, l, m)),
                      null === c ? (s = g) : (c.sibling = g),
                      (c = g),
                      (f = h);
                  }
                  if (m === i.length) return n(o, f), ao && $r(o, m), s;
                  if (null === f) {
                    for (; m < i.length; m++)
                      null !== (f = d(o, i[m], u)) &&
                        ((l = a(f, l, m)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return ao && $r(o, m), s;
                  }
                  for (f = r(f); m < i.length; m++)
                    null !== (h = y(f, o, m, i[m], u)) &&
                      (e &&
                        null !== h.alternate &&
                        f.delete(null === h.key ? m : h.key),
                      (l = a(h, l, m)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(o, e);
                      }),
                    ao && $r(o, m),
                    s
                  );
                })(u, s, c, f);
              if (O(c)) {
                if ("function" !== typeof (b = O(c))) throw Error(l(150));
                return (function (o, i, u, s) {
                  if (null == u) throw Error(l(151));
                  for (
                    var c = null,
                      f = null,
                      m = i,
                      h = (i = 0),
                      g = null,
                      v = u.next();
                    null !== m && !v.done;
                    h++, v = u.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(o, m, v.value, s);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    e && m && null === b.alternate && t(o, m),
                      (i = a(b, i, h)),
                      null === f ? (c = b) : (f.sibling = b),
                      (f = b),
                      (m = g);
                  }
                  if (v.done) return n(o, m), ao && $r(o, h), c;
                  if (null === m) {
                    for (; !v.done; h++, v = u.next())
                      null !== (v = d(o, v.value, s)) &&
                        ((i = a(v, i, h)),
                        null === f ? (c = v) : (f.sibling = v),
                        (f = v));
                    return ao && $r(o, h), c;
                  }
                  for (m = r(m); !v.done; h++, v = u.next())
                    null !== (v = y(m, o, h, v.value, s)) &&
                      (e &&
                        null !== v.alternate &&
                        m.delete(null === v.key ? h : v.key),
                      (i = a(v, i, h)),
                      null === f ? (c = v) : (f.sibling = v),
                      (f = v));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(o, e);
                      }),
                    ao && $r(o, h),
                    c
                  );
                })(u, s, (c = b.call(c)), f);
              }
              if ("function" === typeof c.then) return v(u, s, Yl(c), f);
              if (c.$$typeof === S) return v(u, s, To(u, c), f);
              $l(u, c);
            }
            return ("string" === typeof c && "" !== c) ||
              "number" === typeof c ||
              "bigint" === typeof c
              ? ((c = "" + c),
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((f = o(s, c)).return = u), (u = f))
                  : (n(u, s), ((f = Wr(c, u.mode, f)).return = u), (u = f)),
                i(u))
              : n(u, s);
          }
          return function (e, t, n, r) {
            try {
              Ql = 0;
              var o = v(e, t, n, r);
              return (Kl = null), o;
            } catch (l) {
              if (l === Zo || l === Xo) throw l;
              var a = Dr(29, l, null, e.mode);
              return (a.lanes = r), (a.return = e), a;
            }
          };
        }
        var ni = ti(!0),
          ri = ti(!1),
          oi = F(null),
          ai = null;
        function li(e) {
          var t = e.alternate;
          V(ci, 1 & ci.current),
            V(oi, e),
            null === ai &&
              (null === t || null !== ma.current || null !== t.memoizedState) &&
              (ai = e);
        }
        function ii(e) {
          if (22 === e.tag) {
            if ((V(ci, ci.current), V(oi, e), null === ai)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (ai = e);
            }
          } else ui();
        }
        function ui() {
          V(ci, ci.current), V(oi, oi.current);
        }
        function si(e) {
          M(oi), ai === e && (ai = null), M(ci);
        }
        var ci = F(0);
        function fi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || "$?" === n.data || yf(n))
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function di(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : d({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var pi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              o = aa(r);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = la(e, o, r)) && (Ds(t, e, r), ia(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              o = aa(r);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = la(e, o, r)) && (Ds(t, e, r), ia(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ls(),
              r = aa(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = la(e, r, n)) && (Ds(t, e, n), ia(t, e, n));
          },
        };
        function mi(e, t, n, r, o, a, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Qn(n, r) ||
                !Qn(o, a);
        }
        function hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && pi.enqueueReplaceState(t, t.state, null);
        }
        function gi(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var o in (n === t && (n = d({}, n)), e))
              void 0 === n[o] && (n[o] = e[o]);
          return n;
        }
        var yi =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function vi(e) {
          yi(e);
        }
        function bi(e) {
          console.error(e);
        }
        function wi(e) {
          yi(e);
        }
        function Si(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function ki(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Ei(e, t, n) {
          return (
            ((n = aa(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Si(e, t);
            }),
            n
          );
        }
        function Ci(e) {
          return ((e = aa(e)).tag = 3), e;
        }
        function Ii(e, t, n, r) {
          var o = n.type.getDerivedStateFromError;
          if ("function" === typeof o) {
            var a = r.value;
            (e.payload = function () {
              return o(a);
            }),
              (e.callback = function () {
                ki(t, n, r);
              });
          }
          var l = n.stateNode;
          null !== l &&
            "function" === typeof l.componentDidCatch &&
            (e.callback = function () {
              ki(t, n, r),
                "function" !== typeof o &&
                  (null === Cs ? (Cs = new Set([this])) : Cs.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Pi = Error(l(461)),
          xi = !1;
        function Ti(e, t, n, r) {
          t.child = null === e ? ri(t, null, n, r) : ni(t, e.child, n, r);
        }
        function Ai(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var l = {};
            for (var i in r) "ref" !== i && (l[i] = r[i]);
          } else l = r;
          return (
            Po(t),
            (r = _a(e, t, n, l, a, o)),
            (i = Da()),
            null === e || xi
              ? (ao && i && to(t), (t.flags |= 1), Ti(e, t, r, o), t.child)
              : (ja(e, t, o), Ki(e, t, o))
          );
        }
        function Oi(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              jr(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = Mr(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ni(e, t, a, r, o));
          }
          if (((a = e.child), !Qi(e, o))) {
            var l = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Qn)(l, r) &&
              e.ref === t.ref
            )
              return Ki(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Ur(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ni(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Qn(a, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = a), !Qi(e, o)))
                return (t.lanes = e.lanes), Ki(e, t, o);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return zi(e, t, n, r, o);
        }
        function _i(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (o = t.child = e.child, a = 0; null !== o; )
                  (a = a | o.lanes | o.childLanes), (o = o.sibling);
                t.childLanes = a & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Ri(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Ri(e, t, null !== a ? a.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Bo(0, null !== a ? a.cachePool : null),
              null !== a ? ga(t, a) : ya(),
              ii(t);
          } else
            null !== a
              ? (Bo(0, a.cachePool), ga(t, a), ui(), (t.memoizedState = null))
              : (null !== e && Bo(0, null), ya(), ui());
          return Ti(e, t, o, n), t.child;
        }
        function Ri(e, t, n, r) {
          var o = Ho();
          return (
            (o = null === o ? null : { parent: Ro._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && Bo(0, null),
            ya(),
            ii(t),
            null !== e && Co(e, t, r, !0),
            null
          );
        }
        function Li(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(l(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function zi(e, t, n, r, o) {
          return (
            Po(t),
            (n = _a(e, t, n, r, void 0, o)),
            (r = Da()),
            null === e || xi
              ? (ao && r && to(t), (t.flags |= 1), Ti(e, t, n, o), t.child)
              : (ja(e, t, o), Ki(e, t, o))
          );
        }
        function Di(e, t, n, r, o, a) {
          return (
            Po(t),
            (t.updateQueue = null),
            (n = La(t, r, n, o)),
            Ra(e),
            (r = Da()),
            null === e || xi
              ? (ao && r && to(t), (t.flags |= 1), Ti(e, t, n, a), t.child)
              : (ja(e, t, a), Ki(e, t, a))
          );
        }
        function ji(e, t, n, r, o) {
          if ((Po(t), null === t.stateNode)) {
            var a = Lr,
              l = n.contextType;
            "object" === typeof l && null !== l && (a = xo(l)),
              (a = new n(r, a)),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = pi),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              ra(t),
              (l = n.contextType),
              (a.context = "object" === typeof l && null !== l ? xo(l) : Lr),
              (a.state = t.memoizedState),
              "function" === typeof (l = n.getDerivedStateFromProps) &&
                (di(t, n, l, r), (a.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof a.getSnapshotBeforeUpdate ||
                ("function" !== typeof a.UNSAFE_componentWillMount &&
                  "function" !== typeof a.componentWillMount) ||
                ((l = a.state),
                "function" === typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                l !== a.state && pi.enqueueReplaceState(a, a.state, null),
                fa(t, r, a, o),
                ca(),
                (a.state = t.memoizedState)),
              "function" === typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            a = t.stateNode;
            var i = t.memoizedProps,
              u = gi(n, i);
            a.props = u;
            var s = a.context,
              c = n.contextType;
            (l = Lr), "object" === typeof c && null !== c && (l = xo(c));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof a.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((i || s !== l) && hi(t, a, r, l)),
              (na = !1);
            var d = t.memoizedState;
            (a.state = d),
              fa(t, r, a, o),
              ca(),
              (s = t.memoizedState),
              i || d !== s || na
                ? ("function" === typeof f &&
                    (di(t, n, f, r), (s = t.memoizedState)),
                  (u = na || mi(t, n, u, r, d, s, l))
                    ? (c ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = l),
                  (r = u))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              oa(e, t),
              (c = gi(n, (l = t.memoizedProps))),
              (a.props = c),
              (f = t.pendingProps),
              (d = a.context),
              (s = n.contextType),
              (u = Lr),
              "object" === typeof s && null !== s && (u = xo(s)),
              (s =
                "function" === typeof (i = n.getDerivedStateFromProps) ||
                "function" === typeof a.getSnapshotBeforeUpdate) ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((l !== f || d !== u) && hi(t, a, r, u)),
              (na = !1),
              (d = t.memoizedState),
              (a.state = d),
              fa(t, r, a, o),
              ca();
            var p = t.memoizedState;
            l !== f ||
            d !== p ||
            na ||
            (null !== e && null !== e.dependencies && Io(e.dependencies))
              ? ("function" === typeof i &&
                  (di(t, n, i, r), (p = t.memoizedState)),
                (c =
                  na ||
                  mi(t, n, c, r, d, p, u) ||
                  (null !== e && null !== e.dependencies && Io(e.dependencies)))
                  ? (s ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, u),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = u),
                (r = c))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Li(e, t),
            (r = 0 !== (128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ni(t, e.child, null, o)),
                    (t.child = ni(t, null, n, o)))
                  : Ti(e, t, n, o),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = Ki(e, t, o)),
            e
          );
        }
        function Ui(e, t, n, r) {
          return mo(), (t.flags |= 256), Ti(e, t, n, r), t.child;
        }
        var Fi = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Mi(e) {
          return { baseLanes: e, cachePool: Go() };
        }
        function Vi(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= gs), e;
        }
        function Wi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & ci.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (ao) {
              if ((a ? li(t) : ui(), ao)) {
                var u,
                  s = oo;
                if ((u = s)) {
                  e: {
                    for (u = s, s = io; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = vf(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext:
                          null !== Qr ? { id: Yr, overflow: Jr } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      ((u = Dr(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (ro = t),
                      (oo = null),
                      (u = !0))
                    : (u = !1);
                }
                u || so(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                return yf(s) ? (t.lanes = 32) : (t.lanes = 536870912), null;
              si(t);
            }
            return (
              (s = o.children),
              (o = o.fallback),
              a
                ? (ui(),
                  (s = Bi({ mode: "hidden", children: s }, (a = t.mode))),
                  (o = Vr(o, a, n, null)),
                  (s.return = t),
                  (o.return = t),
                  (s.sibling = o),
                  (t.child = s),
                  ((a = t.child).memoizedState = Mi(n)),
                  (a.childLanes = Vi(e, r, n)),
                  (t.memoizedState = Fi),
                  o)
                : (li(t), Hi(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (li(t), (t.flags &= -257), (t = Gi(e, t, n)))
                : null !== t.memoizedState
                ? (ui(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (ui(),
                  (a = o.fallback),
                  (s = t.mode),
                  (o = Bi({ mode: "visible", children: o.children }, s)),
                  ((a = Vr(a, s, n, null)).flags |= 2),
                  (o.return = t),
                  (a.return = t),
                  (o.sibling = a),
                  (t.child = o),
                  ni(t, e.child, null, n),
                  ((o = t.child).memoizedState = Mi(n)),
                  (o.childLanes = Vi(e, r, n)),
                  (t.memoizedState = Fi),
                  (t = a));
            else if ((li(t), yf(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((o = Error(l(419))).stack = ""),
                (o.digest = r),
                go({ value: o, source: null, stack: null }),
                (t = Gi(e, t, n));
            } else if (
              (xi || Co(e, t, n, !1), (r = 0 !== (n & e.childLanes)), xi || r)
            ) {
              if (
                null !== (r = rs) &&
                0 !==
                  (o =
                    0 !==
                    ((o = 0 !== (42 & (o = n & -n)) ? 1 : Te(o)) &
                      (r.suspendedLanes | n))
                      ? 0
                      : o) &&
                o !== u.retryLane
              )
                throw ((u.retryLane = o), Nr(e, o), Ds(r, e, o), Pi);
              "$?" === s.data || qs(), (t = Gi(e, t, n));
            } else
              "$?" === s.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (oo = vf(s.nextSibling)),
                  (ro = t),
                  (ao = !0),
                  (lo = null),
                  (io = !1),
                  null !== e &&
                    ((Xr[Kr++] = Yr),
                    (Xr[Kr++] = Jr),
                    (Xr[Kr++] = Qr),
                    (Yr = e.id),
                    (Jr = e.overflow),
                    (Qr = t)),
                  ((t = Hi(t, o.children)).flags |= 4096));
            return t;
          }
          return a
            ? (ui(),
              (a = o.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((o = Ur(u, {
                mode: "hidden",
                children: o.children,
              })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c
                ? (a = Ur(c, a))
                : ((a = Vr(a, s, n, null)).flags |= 2),
              (a.return = t),
              (o.return = t),
              (o.sibling = a),
              (t.child = o),
              (o = a),
              (a = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Mi(n))
                : (null !== (u = s.cachePool)
                    ? ((c = Ro._currentValue),
                      (u = u.parent !== c ? { parent: c, pool: c } : u))
                    : (u = Go()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
              (a.memoizedState = s),
              (a.childLanes = Vi(e, r, n)),
              (t.memoizedState = Fi),
              o)
            : (li(t),
              (e = (n = e.child).sibling),
              ((n = Ur(n, { mode: "visible", children: o.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Hi(e, t) {
          return (
            ((t = Bi({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function Bi(e, t) {
          return (
            ((e = Dr(22, e, null, t)).lanes = 0),
            (e.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
            e
          );
        }
        function Gi(e, t, n) {
          return (
            ni(t, e.child, null, n),
            ((e = Hi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Zi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ko(e.return, t, n);
        }
        function qi(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Xi(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Ti(e, t, r.children, n), 0 !== (2 & (r = ci.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Zi(e, n, t);
                else if (19 === e.tag) Zi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((V(ci, r), o)) {
            case "forwards":
              for (n = t.child, o = null; null !== n; )
                null !== (e = n.alternate) && null === fi(e) && (o = n),
                  (n = n.sibling);
              null === (n = o)
                ? ((o = t.child), (t.child = null))
                : ((o = n.sibling), (n.sibling = null)),
                qi(t, !1, o, n, a);
              break;
            case "backwards":
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === fi(e)) {
                  t.child = o;
                  break;
                }
                (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              qi(t, !0, n, null, a);
              break;
            case "together":
              qi(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Ki(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (ps |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Co(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ur((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ur(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Io(e))
          );
        }
        function Yi(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) xi = !0;
            else {
              if (!Qi(e, n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Z(t, t.stateNode.containerInfo),
                          wo(0, Ro, e.memoizedState.cache),
                          mo();
                        break;
                      case 27:
                      case 5:
                        X(t);
                        break;
                      case 4:
                        Z(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        wo(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (li(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Wi(e, t, n)
                            : (li(t),
                              null !== (e = Ki(e, t, n)) ? e.sibling : null);
                        li(t);
                        break;
                      case 19:
                        var o = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Co(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          o)
                        ) {
                          if (r) return Xi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          V(ci, ci.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _i(e, t, n);
                      case 24:
                        wo(0, Ro, e.memoizedState.cache);
                    }
                    return Ki(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), ao && 0 !== (1048576 & t.flags) && eo(t, qr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  o = r._init;
                if (
                  ((r = o(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((o = r.$$typeof) === k) {
                      (t.tag = 11), (t = Ai(null, t, r, e, n));
                      break e;
                    }
                    if (o === I) {
                      (t.tag = 14), (t = Oi(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = _(r) || r), Error(l(306, t, "")));
                }
                jr(r)
                  ? ((e = gi(r, e)), (t.tag = 1), (t = ji(null, t, r, e, n)))
                  : ((t.tag = 0), (t = zi(null, t, r, e, n)));
              }
              return t;
            case 0:
              return zi(e, t, t.type, t.pendingProps, n);
            case 1:
              return ji(e, t, (r = t.type), (o = gi(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((Z(t, t.stateNode.containerInfo), null === e))
                  throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                (o = a.element), oa(e, t), fa(t, r, null, n);
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  wo(0, Ro, r),
                  r !== a.cache && Eo(t, [Ro], n, !0),
                  ca(),
                  (r = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: r, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Ui(e, t, r, n);
                    break e;
                  }
                  if (r !== o) {
                    go((o = Cr(Error(l(424)), t))), (t = Ui(e, t, r, n));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType)
                    e = e.body;
                  else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                  for (
                    oo = vf(e.firstChild),
                      ro = t,
                      ao = !0,
                      lo = null,
                      io = !0,
                      n = ri(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mo(), r === o)) {
                    t = Ki(e, t, n);
                    break e;
                  }
                  Ti(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Li(e, t),
                null === e
                  ? (n = Af(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : ao ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = rf(B.current).createElement(n))[_e] = t),
                      (r[Re] = e),
                      ef(r, n, e),
                      Ge(r),
                      (t.stateNode = r))
                  : (t.memoizedState = Af(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                X(t),
                null === e &&
                  ao &&
                  ((r = t.stateNode = Sf(t.type, t.pendingProps, B.current)),
                  (ro = t),
                  (io = !0),
                  (o = oo),
                  mf(t.type) ? ((bf = o), (oo = vf(r.firstChild))) : (oo = o)),
                Ti(e, t, t.pendingProps.children, n),
                Li(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  ao &&
                  ((o = r = oo) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var o = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Fe])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== o.rel ||
                                  e.getAttribute("href") !==
                                    (null == o.href || "" === o.href
                                      ? null
                                      : o.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == o.crossOrigin
                                      ? null
                                      : o.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == o.title ? null : o.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == o.src ? null : o.src) ||
                                    e.getAttribute("type") !==
                                      (null == o.type ? null : o.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == o.crossOrigin
                                        ? null
                                        : o.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == o.name ? null : "" + o.name;
                          if (
                            "hidden" === o.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = vf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, io))
                      ? ((t.stateNode = r),
                        (ro = t),
                        (oo = vf(r.firstChild)),
                        (io = !1),
                        (o = !0))
                      : (o = !1)),
                  o || so(t)),
                X(t),
                (o = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = a.children),
                lf(o, a)
                  ? (r = null)
                  : null !== i && lf(o, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((o = _a(e, t, za, null, null, n)), (Kf._currentValue = o)),
                Li(e, t),
                Ti(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  ao &&
                  ((e = n = oo) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = vf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, io))
                      ? ((t.stateNode = n), (ro = t), (oo = null), (e = !0))
                      : (e = !1)),
                  e || so(t)),
                null
              );
            case 13:
              return Wi(e, t, n);
            case 4:
              return (
                Z(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ni(t, null, r, n)) : Ti(e, t, r, n),
                t.child
              );
            case 11:
              return Ai(e, t, t.type, t.pendingProps, n);
            case 7:
              return Ti(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ti(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                wo(0, t.type, r.value),
                Ti(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (o = t.type._context),
                (r = t.pendingProps.children),
                Po(t),
                (r = r((o = xo(o)))),
                (t.flags |= 1),
                Ti(e, t, r, n),
                t.child
              );
            case 14:
              return Oi(e, t, t.type, t.pendingProps, n);
            case 15:
              return Ni(e, t, t.type, t.pendingProps, n);
            case 19:
              return Xi(e, t, n);
            case 31:
              return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e
                  ? (((n = Bi(r, n)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n))
                  : (((n = Ur(e.child, r)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n)),
                t
              );
            case 22:
              return _i(e, t, n);
            case 24:
              return (
                Po(t),
                (r = xo(Ro)),
                null === e
                  ? (null === (o = Ho()) &&
                      ((o = rs),
                      (a = Lo()),
                      (o.pooledCache = a),
                      a.refCount++,
                      null !== a && (o.pooledCacheLanes |= n),
                      (o = a)),
                    (t.memoizedState = { parent: r, cache: o }),
                    ra(t),
                    wo(0, Ro, o))
                  : (0 !== (e.lanes & n) &&
                      (oa(e, t), fa(t, null, null, n), ca()),
                    (o = e.memoizedState),
                    (a = t.memoizedState),
                    o.parent !== r
                      ? ((o = { parent: r, cache: r }),
                        (t.memoizedState = o),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = o),
                        wo(0, Ro, r))
                      : ((r = a.cache),
                        wo(0, Ro, r),
                        r !== o.cache && Eo(t, [Ro], n, !0))),
                Ti(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(l(156, t.tag));
        }
        function Ji(e) {
          e.flags |= 4;
        }
        function $i(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Wf(t))) {
            if (
              null !== (t = oi.current) &&
              ((4194048 & as) === as
                ? null !== ai
                : ((62914560 & as) !== as && 0 === (536870912 & as)) ||
                  t !== ai)
            )
              throw (($o = Ko), qo);
            e.flags |= 8192;
          }
        }
        function eu(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Ee() : 536870912),
              (e.lanes |= t),
              (ys |= t));
        }
        function tu(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function nu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 65011712 & o.subtreeFlags),
                (r |= 65011712 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ru(e, t, n) {
          var r = t.pendingProps;
          switch ((no(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return nu(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                So(Ro),
                q(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (po(t)
                    ? Ji(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), ho())),
                nu(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Ji(t),
                    null !== n
                      ? (nu(t), $i(t, n))
                      : (nu(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Ji(t), nu(t), $i(t, n))
                    : (nu(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Ji(t),
                    nu(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              K(t), (n = B.current);
              var o = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Ji(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return nu(t), null;
                }
                (e = W.current),
                  po(t) ? co(t) : ((e = Sf(o, r, n)), (t.stateNode = e), Ji(t));
              }
              return nu(t), null;
            case 5:
              if ((K(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Ji(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return nu(t), null;
                }
                if (((e = W.current), po(t))) co(t);
                else {
                  switch (((o = rf(B.current)), e)) {
                    case 1:
                      e = o.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = o.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = o.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = o.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = o.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? o.createElement("select", { is: r.is })
                              : o.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? o.createElement(n, { is: r.is })
                              : o.createElement(n);
                      }
                  }
                  (e[_e] = t), (e[Re] = r);
                  e: for (o = t.child; null !== o; ) {
                    if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
                    else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                      (o.child.return = o), (o = o.child);
                      continue;
                    }
                    if (o === t) break e;
                    for (; null === o.sibling; ) {
                      if (null === o.return || o.return === t) break e;
                      o = o.return;
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((ef(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Ji(t);
                }
              }
              return nu(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Ji(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((e = B.current), po(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (o = ro))
                  )
                    switch (o.tag) {
                      case 27:
                      case 5:
                        r = o.memoizedProps;
                    }
                  (e[_e] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Qc(e.nodeValue, n)
                    )) || so(t);
                } else
                  ((e = rf(e).createTextNode(r))[_e] = t), (t.stateNode = e);
              }
              return nu(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((o = po(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[_e] = t;
                  } else
                    mo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  nu(t), (o = !1);
                } else
                  (o = ho()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = o),
                    (o = !0);
                if (!o) return 256 & t.flags ? (si(t), t) : (si(t), null);
              }
              if ((si(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (o = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (o = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (a = r.memoizedState.cachePool.pool),
                  a !== o && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                eu(t, t.updateQueue),
                nu(t),
                null
              );
            case 4:
              return (
                q(), null === e && Mc(t.stateNode.containerInfo), nu(t), null
              );
            case 10:
              return So(t.type), nu(t), null;
            case 19:
              if ((M(ci), null === (o = t.memoizedState))) return nu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (a = o.rendering)))
                if (r) tu(o, !1);
                else {
                  if (0 !== ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = fi(e))) {
                        for (
                          t.flags |= 128,
                            tu(o, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            eu(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Fr(n, e), (n = n.sibling);
                        return V(ci, (1 & ci.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    te() > ks &&
                    ((t.flags |= 128),
                    (r = !0),
                    tu(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = fi(a))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      eu(t, e),
                      tu(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !a.alternate &&
                        !ao)
                    )
                      return nu(t), null;
                  } else
                    2 * te() - o.renderingStartTime > ks &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      tu(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = o.last) ? (e.sibling = a) : (t.child = a),
                    (o.last = a));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = te()),
                  (t.sibling = null),
                  (e = ci.current),
                  V(ci, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (nu(t), null);
            case 22:
            case 23:
              return (
                si(t),
                va(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (nu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : nu(t),
                null !== (n = t.updateQueue) && eu(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && M(Wo),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                So(Ro),
                nu(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function ou(e, t) {
          switch ((no(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                So(Ro),
                q(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return K(t), null;
            case 13:
              if (
                (si(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                mo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return M(ci), null;
            case 4:
              return q(), null;
            case 10:
              return So(t.type), null;
            case 22:
            case 23:
              return (
                si(t),
                va(),
                null !== e && M(Wo),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return So(Ro), null;
            default:
              return null;
          }
        }
        function au(e, t) {
          switch ((no(t), t.tag)) {
            case 3:
              So(Ro), q();
              break;
            case 26:
            case 27:
            case 5:
              K(t);
              break;
            case 4:
              q();
              break;
            case 13:
              si(t);
              break;
            case 19:
              M(ci);
              break;
            case 10:
              So(t.type);
              break;
            case 22:
            case 23:
              si(t), va(), null !== e && M(Wo);
              break;
            case 24:
              So(Ro);
          }
        }
        function lu(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var o = r.next;
              n = o;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    l = n.inst;
                  (r = a()), (l.destroy = r);
                }
                n = n.next;
              } while (n !== o);
            }
          } catch (i) {
            cc(t, t.return, i);
          }
        }
        function iu(e, t, n) {
          try {
            var r = t.updateQueue,
              o = null !== r ? r.lastEffect : null;
            if (null !== o) {
              var a = o.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var l = r.inst,
                    i = l.destroy;
                  if (void 0 !== i) {
                    (l.destroy = void 0), (o = t);
                    var u = n,
                      s = i;
                    try {
                      s();
                    } catch (c) {
                      cc(o, u, c);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (c) {
            cc(t, t.return, c);
          }
        }
        function uu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              pa(t, n);
            } catch (r) {
              cc(e, e.return, r);
            }
          }
        }
        function su(e, t, n) {
          (n.props = gi(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            cc(e, t, r);
          }
        }
        function cu(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (o) {
            cc(e, t, o);
          }
        }
        function fu(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (o) {
                cc(e, t, o);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (a) {
                cc(e, t, a);
              }
            else n.current = null;
        }
        function du(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (o) {
            cc(e, e.return, o);
          }
        }
        function pu(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var o = null,
                    a = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (m in n) {
                    var d = n[m];
                    if (n.hasOwnProperty(m) && null != d)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = d;
                        default:
                          r.hasOwnProperty(m) || Jc(e, t, m, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var m = r[p];
                    if (
                      ((d = n[p]),
                      r.hasOwnProperty(p) && (null != m || null != d))
                    )
                      switch (p) {
                        case "type":
                          a = m;
                          break;
                        case "name":
                          o = m;
                          break;
                        case "checked":
                          c = m;
                          break;
                        case "defaultChecked":
                          f = m;
                          break;
                        case "value":
                          i = m;
                          break;
                        case "defaultValue":
                          u = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(l(137, t));
                          break;
                        default:
                          m !== d && Jc(e, t, p, m, r, d);
                      }
                  }
                  return void gt(e, i, u, s, c, f, a, o);
                case "select":
                  for (a in ((m = i = u = p = null), n))
                    if (((s = n[a]), n.hasOwnProperty(a) && null != s))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          m = s;
                        default:
                          r.hasOwnProperty(a) || Jc(e, t, a, null, r, s);
                      }
                  for (o in r)
                    if (
                      ((a = r[o]),
                      (s = n[o]),
                      r.hasOwnProperty(o) && (null != a || null != s))
                    )
                      switch (o) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          u = a;
                          break;
                        case "multiple":
                          i = a;
                        default:
                          a !== s && Jc(e, t, o, a, r, s);
                      }
                  return (
                    (t = u),
                    (n = i),
                    (r = m),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((m = p = null), n))
                    if (
                      ((o = n[u]),
                      n.hasOwnProperty(u) && null != o && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Jc(e, t, u, null, r, o);
                      }
                  for (i in r)
                    if (
                      ((o = r[i]),
                      (a = n[i]),
                      r.hasOwnProperty(i) && (null != o || null != a))
                    )
                      switch (i) {
                        case "value":
                          p = o;
                          break;
                        case "defaultValue":
                          m = o;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != o) throw Error(l(91));
                          break;
                        default:
                          o !== a && Jc(e, t, i, o, r, a);
                      }
                  return void wt(e, p, m);
                case "option":
                  for (var h in n)
                    if (
                      ((p = n[h]),
                      n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h))
                    )
                      if ("selected" === h) e.selected = !1;
                      else Jc(e, t, h, null, r, p);
                  for (s in r)
                    if (
                      ((p = r[s]),
                      (m = n[s]),
                      r.hasOwnProperty(s) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      if ("selected" === s)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Jc(e, t, s, p, r, m);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Jc(e, t, g, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (m = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(l(137, t));
                          break;
                        default:
                          Jc(e, t, c, p, r, m);
                      }
                  return;
                default:
                  if (Pt(t)) {
                    for (var y in n)
                      (p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          $c(e, t, y, void 0, r, p);
                    for (f in r)
                      (p = r[f]),
                        (m = n[f]),
                        !r.hasOwnProperty(f) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          $c(e, t, f, p, r, m);
                    return;
                  }
              }
              for (var v in n)
                (p = n[v]),
                  n.hasOwnProperty(v) &&
                    null != p &&
                    !r.hasOwnProperty(v) &&
                    Jc(e, t, v, null, r, p);
              for (d in r)
                (p = r[d]),
                  (m = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === m ||
                    (null == p && null == m) ||
                    Jc(e, t, d, p, r, m);
            })(r, e.type, n, t),
              (r[Re] = t);
          } catch (o) {
            cc(e, e.return, o);
          }
        }
        function mu(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && mf(e.type)) ||
            4 === e.tag
          );
        }
        function hu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || mu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (27 === e.tag && mf(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function gu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                    ? n.ownerDocument.body
                    : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Yc));
          else if (
            4 !== r &&
            (27 === r && mf(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (gu(e, t, n), e = e.sibling; null !== e; )
              gu(e, t, n), (e = e.sibling);
        }
        function yu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (
            4 !== r &&
            (27 === r && mf(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (yu(e, t, n), e = e.sibling; null !== e; )
              yu(e, t, n), (e = e.sibling);
        }
        function vu(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, o = t.attributes; o.length; )
              t.removeAttributeNode(o[0]);
            ef(t, r, n), (t[_e] = e), (t[Re] = n);
          } catch (a) {
            cc(e, e.return, a);
          }
        }
        var bu = !1,
          wu = !1,
          Su = !1,
          ku = "function" === typeof WeakSet ? WeakSet : Set,
          Eu = null;
        function Cu(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ju(e, n), 4 & r && lu(5, n);
              break;
            case 1:
              if ((ju(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (l) {
                    cc(n, n.return, l);
                  }
                else {
                  var o = gi(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      o,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (i) {
                    cc(n, n.return, i);
                  }
                }
              64 & r && uu(n), 512 & r && cu(n, n.return);
              break;
            case 3:
              if ((ju(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  pa(e, t);
                } catch (l) {
                  cc(n, n.return, l);
                }
              }
              break;
            case 27:
              null === t && 4 & r && vu(n);
            case 26:
            case 5:
              ju(e, n),
                null === t && 4 & r && du(n),
                512 & r && cu(n, n.return);
              break;
            case 12:
              ju(e, n);
              break;
            case 13:
              ju(e, n),
                4 & r && Ou(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$?" !== e.data || "complete" === n.readyState) t();
                    else {
                      var r = function () {
                        t(), n.removeEventListener("DOMContentLoaded", r);
                      };
                      n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r);
                    }
                  })(e, (n = mc.bind(null, n)));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || bu)) {
                (t = (null !== t && null !== t.memoizedState) || wu), (o = bu);
                var a = wu;
                (bu = r),
                  (wu = t) && !a
                    ? Fu(e, n, 0 !== (8772 & n.subtreeFlags))
                    : ju(e, n),
                  (bu = o),
                  (wu = a);
              }
              break;
            case 30:
              break;
            default:
              ju(e, n);
          }
        }
        function Iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), Iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Me(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var Pu = null,
          xu = !1;
        function Tu(e, t, n) {
          for (n = n.child; null !== n; ) Au(e, t, n), (n = n.sibling);
        }
        function Au(e, t, n) {
          if (fe && "function" === typeof fe.onCommitFiberUnmount)
            try {
              fe.onCommitFiberUnmount(ce, n);
            } catch (a) {}
          switch (n.tag) {
            case 26:
              wu || fu(n, t),
                Tu(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              wu || fu(n, t);
              var r = Pu,
                o = xu;
              mf(n.type) && ((Pu = n.stateNode), (xu = !1)),
                Tu(e, t, n),
                kf(n.stateNode),
                (Pu = r),
                (xu = o);
              break;
            case 5:
              wu || fu(n, t);
            case 6:
              if (
                ((r = Pu),
                (o = xu),
                (Pu = null),
                Tu(e, t, n),
                (xu = o),
                null !== (Pu = r))
              )
                if (xu)
                  try {
                    (9 === Pu.nodeType
                      ? Pu.body
                      : "HTML" === Pu.nodeName
                      ? Pu.ownerDocument.body
                      : Pu
                    ).removeChild(n.stateNode);
                  } catch (l) {
                    cc(n, t, l);
                  }
                else
                  try {
                    Pu.removeChild(n.stateNode);
                  } catch (l) {
                    cc(n, t, l);
                  }
              break;
            case 18:
              null !== Pu &&
                (xu
                  ? (hf(
                      9 === (e = Pu).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                      n.stateNode
                    ),
                    Td(e))
                  : hf(Pu, n.stateNode));
              break;
            case 4:
              (r = Pu),
                (o = xu),
                (Pu = n.stateNode.containerInfo),
                (xu = !0),
                Tu(e, t, n),
                (Pu = r),
                (xu = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              wu || iu(2, n, t), wu || iu(4, n, t), Tu(e, t, n);
              break;
            case 1:
              wu ||
                (fu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  su(n, t, r)),
                Tu(e, t, n);
              break;
            case 21:
              Tu(e, t, n);
              break;
            case 22:
              (wu = (r = wu) || null !== n.memoizedState),
                Tu(e, t, n),
                (wu = r);
              break;
            default:
              Tu(e, t, n);
          }
        }
        function Ou(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              Td(e);
            } catch (n) {
              cc(t, t.return, n);
            }
        }
        function Nu(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new ku()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new ku()),
                  t
                );
              default:
                throw Error(l(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = hc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function _u(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r],
                a = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                    if (mf(u.type)) {
                      (Pu = u.stateNode), (xu = !1);
                      break e;
                    }
                    break;
                  case 5:
                    (Pu = u.stateNode), (xu = !1);
                    break e;
                  case 3:
                  case 4:
                    (Pu = u.stateNode.containerInfo), (xu = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === Pu) throw Error(l(160));
              Au(a, i, o),
                (Pu = null),
                (xu = !1),
                null !== (a = o.alternate) && (a.return = null),
                (o.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Lu(t, e), (t = t.sibling);
        }
        var Ru = null;
        function Lu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              _u(t, e),
                zu(e),
                4 & r && (iu(3, e, e.return), lu(3, e), iu(5, e, e.return));
              break;
            case 1:
              _u(t, e),
                zu(e),
                512 & r && (wu || null === n || fu(n, n.return)),
                64 & r &&
                  bu &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var o = Ru;
              if (
                (_u(t, e),
                zu(e),
                512 & r && (wu || null === n || fu(n, n.return)),
                4 & r)
              ) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (o = o.ownerDocument || o);
                        t: switch (r) {
                          case "title":
                            (!(a = o.getElementsByTagName("title")[0]) ||
                              a[Fe] ||
                              a[_e] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = o.createElement(r)),
                              o.head.insertBefore(
                                a,
                                o.querySelector("head > title")
                              )),
                              ef(a, r, n),
                              (a[_e] = e),
                              Ge(a),
                              (r = a);
                            break e;
                          case "link":
                            var i = Mf("link", "href", o).get(
                              r + (n.href || "")
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (a = i[u]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  a.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  a.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            ef((a = o.createElement(r)), r, n),
                              o.head.appendChild(a);
                            break;
                          case "meta":
                            if (
                              (i = Mf("meta", "content", o).get(
                                r + (n.content || "")
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (a = i[u]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  a.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  a.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            ef((a = o.createElement(r)), r, n),
                              o.head.appendChild(a);
                            break;
                          default:
                            throw Error(l(468, r));
                        }
                        (a[_e] = e), Ge(a), (r = a);
                      }
                      e.stateNode = r;
                    } else Vf(o, e.type, e.stateNode);
                  else e.stateNode = zf(o, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r
                        ? Vf(o, e.type, e.stateNode)
                        : zf(o, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      pu(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              _u(t, e),
                zu(e),
                512 & r && (wu || null === n || fu(n, n.return)),
                null !== n && 4 & r && pu(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (
                (_u(t, e),
                zu(e),
                512 & r && (wu || null === n || fu(n, n.return)),
                32 & e.flags)
              ) {
                o = e.stateNode;
                try {
                  kt(o, "");
                } catch (m) {
                  cc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                pu(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o),
                1024 & r && (Su = !0);
              break;
            case 6:
              if ((_u(t, e), zu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  cc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Ff = null),
                (o = Ru),
                (Ru = If(t.containerInfo)),
                _u(t, e),
                (Ru = o),
                zu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Td(t.containerInfo);
                } catch (m) {
                  cc(e, e.return, m);
                }
              Su && ((Su = !1), Du(e));
              break;
            case 4:
              (r = Ru),
                (Ru = If(e.stateNode.containerInfo)),
                _u(t, e),
                zu(e),
                (Ru = r);
              break;
            case 12:
            default:
              _u(t, e), zu(e);
              break;
            case 13:
              _u(t, e),
                zu(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (Ss = te()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Nu(e, r));
              break;
            case 22:
              o = null !== e.memoizedState;
              var s = null !== n && null !== n.memoizedState,
                c = bu,
                f = wu;
              if (
                ((bu = c || o),
                (wu = f || s),
                _u(t, e),
                (wu = f),
                (bu = c),
                zu(e),
                8192 & r)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
                    o && (null === n || s || bu || wu || Uu(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      s = n = t;
                      try {
                        if (((a = s.stateNode), o))
                          "function" === typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          u = s.stateNode;
                          var d = s.memoizedProps.style,
                            p =
                              void 0 !== d &&
                              null !== d &&
                              d.hasOwnProperty("display")
                                ? d.display
                                : null;
                          u.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (m) {
                        cc(s, s.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      s = t;
                      try {
                        s.stateNode.nodeValue = o ? "" : s.memoizedProps;
                      } catch (m) {
                        cc(s, s.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), Nu(e, n));
              break;
            case 19:
              _u(t, e),
                zu(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Nu(e, r));
            case 30:
            case 21:
          }
        }
        function zu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (mu(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(l(160));
              switch (n.tag) {
                case 27:
                  var o = n.stateNode;
                  yu(e, hu(e), o);
                  break;
                case 5:
                  var a = n.stateNode;
                  32 & n.flags && (kt(a, ""), (n.flags &= -33)),
                    yu(e, hu(e), a);
                  break;
                case 3:
                case 4:
                  var i = n.stateNode.containerInfo;
                  gu(e, hu(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (u) {
              cc(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Du(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              Du(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function ju(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              Cu(e, t.alternate, t), (t = t.sibling);
        }
        function Uu(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                iu(4, t, t.return), Uu(t);
                break;
              case 1:
                fu(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  su(t, t.return, n),
                  Uu(t);
                break;
              case 27:
                kf(t.stateNode);
              case 26:
              case 5:
                fu(t, t.return), Uu(t);
                break;
              case 22:
                null === t.memoizedState && Uu(t);
                break;
              default:
                Uu(t);
            }
            e = e.sibling;
          }
        }
        function Fu(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              o = e,
              a = t,
              l = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Fu(o, a, n), lu(4, a);
                break;
              case 1:
                if (
                  (Fu(o, a, n),
                  "function" ===
                    typeof (o = (r = a).stateNode).componentDidMount)
                )
                  try {
                    o.componentDidMount();
                  } catch (s) {
                    cc(r, r.return, s);
                  }
                if (null !== (o = (r = a).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = o.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        o.shared.hiddenCallbacks = null, o = 0;
                        o < u.length;
                        o++
                      )
                        da(u[o], i);
                  } catch (s) {
                    cc(r, r.return, s);
                  }
                }
                n && 64 & l && uu(a), cu(a, a.return);
                break;
              case 27:
                vu(a);
              case 26:
              case 5:
                Fu(o, a, n), n && null === r && 4 & l && du(a), cu(a, a.return);
                break;
              case 12:
                Fu(o, a, n);
                break;
              case 13:
                Fu(o, a, n), n && 4 & l && Ou(o, a);
                break;
              case 22:
                null === a.memoizedState && Fu(o, a, n), cu(a, a.return);
                break;
              case 30:
                break;
              default:
                Fu(o, a, n);
            }
            t = t.sibling;
          }
        }
        function Mu(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && zo(n));
        }
        function Vu(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && zo(e));
        }
        function Wu(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Hu(e, t, n, r), (t = t.sibling);
        }
        function Hu(e, t, n, r) {
          var o = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Wu(e, t, n, r), 2048 & o && lu(9, t);
              break;
            case 1:
            case 13:
            default:
              Wu(e, t, n, r);
              break;
            case 3:
              Wu(e, t, n, r),
                2048 & o &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && zo(e)));
              break;
            case 12:
              if (2048 & o) {
                Wu(e, t, n, r), (e = t.stateNode);
                try {
                  var a = t.memoizedProps,
                    l = a.id,
                    i = a.onPostCommit;
                  "function" === typeof i &&
                    i(
                      l,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (u) {
                  cc(t, t.return, u);
                }
              } else Wu(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (a = t.stateNode),
                (l = t.alternate),
                null !== t.memoizedState
                  ? 2 & a._visibility
                    ? Wu(e, t, n, r)
                    : Gu(e, t)
                  : 2 & a._visibility
                  ? Wu(e, t, n, r)
                  : ((a._visibility |= 2),
                    Bu(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & o && Mu(l, t);
              break;
            case 24:
              Wu(e, t, n, r), 2048 & o && Vu(t.alternate, t);
          }
        }
        function Bu(e, t, n, r, o) {
          for (
            o = o && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var a = e,
              l = t,
              i = n,
              u = r,
              s = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                Bu(a, l, i, u, o), lu(8, l);
                break;
              case 23:
                break;
              case 22:
                var c = l.stateNode;
                null !== l.memoizedState
                  ? 2 & c._visibility
                    ? Bu(a, l, i, u, o)
                    : Gu(a, l)
                  : ((c._visibility |= 2), Bu(a, l, i, u, o)),
                  o && 2048 & s && Mu(l.alternate, l);
                break;
              case 24:
                Bu(a, l, i, u, o), o && 2048 & s && Vu(l.alternate, l);
                break;
              default:
                Bu(a, l, i, u, o);
            }
            t = t.sibling;
          }
        }
        function Gu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                o = r.flags;
              switch (r.tag) {
                case 22:
                  Gu(n, r), 2048 & o && Mu(r.alternate, r);
                  break;
                case 24:
                  Gu(n, r), 2048 & o && Vu(r.alternate, r);
                  break;
                default:
                  Gu(n, r);
              }
              t = t.sibling;
            }
        }
        var Zu = 8192;
        function qu(e) {
          if (e.subtreeFlags & Zu)
            for (e = e.child; null !== e; ) Xu(e), (e = e.sibling);
        }
        function Xu(e) {
          switch (e.tag) {
            case 26:
              qu(e),
                e.flags & Zu &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Hf) throw Error(l(475));
                    var r = Hf;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var o = Of(n.href),
                          a = e.querySelector(Nf(o));
                        if (a)
                          return (
                            null !== (e = a._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Gf.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void Ge(a)
                          );
                        (a = e.ownerDocument || e),
                          (n = _f(n)),
                          (o = Ef.get(o)) && jf(n, o),
                          Ge((a = a.createElement("link")));
                        var i = a;
                        (i._p = new Promise(function (e, t) {
                          (i.onload = e), (i.onerror = t);
                        })),
                          ef(a, "link", n),
                          (t.instance = a);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Gf.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(Ru, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              qu(e);
              break;
            case 3:
            case 4:
              var t = Ru;
              (Ru = If(e.stateNode.containerInfo)), qu(e), (Ru = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = Zu), (Zu = 16777216), qu(e), (Zu = t))
                  : qu(e));
          }
        }
        function Ku(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Qu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (Eu = r), $u(r, e);
              }
            Ku(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) Yu(e), (e = e.sibling);
        }
        function Yu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Qu(e), 2048 & e.flags && iu(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Qu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), Ju(e))
                : Qu(e);
          }
        }
        function Ju(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (Eu = r), $u(r, e);
              }
            Ku(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                iu(8, t, t.return), Ju(t);
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), Ju(t));
                break;
              default:
                Ju(t);
            }
            e = e.sibling;
          }
        }
        function $u(e, t) {
          for (; null !== Eu; ) {
            var n = Eu;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                iu(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                zo(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (Eu = r);
            else
              e: for (n = e; null !== Eu; ) {
                var o = (r = Eu).sibling,
                  a = r.return;
                if ((Iu(r), r === n)) {
                  Eu = null;
                  break e;
                }
                if (null !== o) {
                  (o.return = a), (Eu = o);
                  break e;
                }
                Eu = a;
              }
          }
        }
        var es = {
            getCacheForType: function (e) {
              var t = xo(Ro),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          ts = "function" === typeof WeakMap ? WeakMap : Map,
          ns = 0,
          rs = null,
          os = null,
          as = 0,
          ls = 0,
          is = null,
          us = !1,
          ss = !1,
          cs = !1,
          fs = 0,
          ds = 0,
          ps = 0,
          ms = 0,
          hs = 0,
          gs = 0,
          ys = 0,
          vs = null,
          bs = null,
          ws = !1,
          Ss = 0,
          ks = 1 / 0,
          Es = null,
          Cs = null,
          Is = 0,
          Ps = null,
          xs = null,
          Ts = 0,
          As = 0,
          Os = null,
          Ns = null,
          _s = 0,
          Rs = null;
        function Ls() {
          if (0 !== (2 & ns) && 0 !== as) return as & -as;
          if (null !== L.T) {
            return 0 !== Uo ? Uo : Ac();
          }
          return Oe();
        }
        function zs() {
          0 === gs && (gs = 0 === (536870912 & as) || ao ? ke() : 536870912);
          var e = oi.current;
          return null !== e && (e.flags |= 32), gs;
        }
        function Ds(e, t, n) {
          ((e !== rs || (2 !== ls && 9 !== ls)) &&
            null === e.cancelPendingCommit) ||
            (Hs(e, 0), Ms(e, as, gs, !1)),
            Ie(e, n),
            (0 !== (2 & ns) && e === rs) ||
              (e === rs &&
                (0 === (2 & ns) && (ms |= n), 4 === ds && Ms(e, as, gs, !1)),
              kc(e));
        }
        function js(e, t, n) {
          if (0 !== (6 & ns)) throw Error(l(327));
          for (
            var r =
                (!n && 0 === (124 & t) && 0 === (t & e.expiredLanes)) ||
                we(e, t),
              o = r
                ? (function (e, t) {
                    var n = ns;
                    ns |= 2;
                    var r = Gs(),
                      o = Zs();
                    rs !== e || as !== t
                      ? ((Es = null), (ks = te() + 500), Hs(e, t))
                      : (ss = we(e, t));
                    e: for (;;)
                      try {
                        if (0 !== ls && null !== os) {
                          t = os;
                          var a = is;
                          t: switch (ls) {
                            case 1:
                              (ls = 0), (is = null), $s(e, t, a, 1);
                              break;
                            case 2:
                            case 9:
                              if (Qo(a)) {
                                (ls = 0), (is = null), Js(t);
                                break;
                              }
                              (t = function () {
                                (2 !== ls && 9 !== ls) || rs !== e || (ls = 7),
                                  kc(e);
                              }),
                                a.then(t, t);
                              break e;
                            case 3:
                              ls = 7;
                              break e;
                            case 4:
                              ls = 5;
                              break e;
                            case 7:
                              Qo(a)
                                ? ((ls = 0), (is = null), Js(t))
                                : ((ls = 0), (is = null), $s(e, t, a, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (os.tag) {
                                case 26:
                                  i = os.memoizedState;
                                case 5:
                                case 27:
                                  var u = os;
                                  if (!i || Wf(i)) {
                                    (ls = 0), (is = null);
                                    var s = u.sibling;
                                    if (null !== s) os = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((os = c), ec(c))
                                        : (os = null);
                                    }
                                    break t;
                                  }
                              }
                              (ls = 0), (is = null), $s(e, t, a, 5);
                              break;
                            case 6:
                              (ls = 0), (is = null), $s(e, t, a, 6);
                              break;
                            case 8:
                              Ws(), (ds = 6);
                              break e;
                            default:
                              throw Error(l(462));
                          }
                        }
                        Qs();
                        break;
                      } catch (f) {
                        Bs(e, f);
                      }
                    return (
                      (bo = vo = null),
                      (L.H = r),
                      (L.A = o),
                      (ns = n),
                      null !== os ? 0 : ((rs = null), (as = 0), Tr(), ds)
                    );
                  })(e, t)
                : Xs(e, t, !0),
              a = r;
            ;

          ) {
            if (0 === o) {
              ss && !r && Ms(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !a || Fs(n))) {
              if (2 === o) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var i = 0;
                else
                  i =
                    0 !== (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                      ? 536870912
                      : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var u = e;
                    o = vs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && (Hs(u, i).flags |= 256), 2 !== (i = Xs(u, i, !1)))
                    ) {
                      if (cs && !s) {
                        (u.errorRecoveryDisabledLanes |= a), (ms |= a), (o = 4);
                        break e;
                      }
                      (a = bs),
                        (bs = o),
                        null !== a &&
                          (null === bs ? (bs = a) : bs.push.apply(bs, a));
                    }
                    o = i;
                  }
                  if (((a = !1), 2 !== o)) continue;
                }
              }
              if (1 === o) {
                Hs(e, 0), Ms(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), (a = o))) {
                  case 0:
                  case 1:
                    throw Error(l(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Ms(r, t, gs, !us);
                    break e;
                  case 2:
                    bs = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (o = Ss + 300 - te())) {
                  if ((Ms(r, t, gs, !us), 0 !== be(r, 0, !0))) break e;
                  r.timeoutHandle = sf(
                    Us.bind(
                      null,
                      r,
                      n,
                      bs,
                      Es,
                      ws,
                      t,
                      gs,
                      ms,
                      ys,
                      us,
                      a,
                      2,
                      -0,
                      0
                    ),
                    o
                  );
                } else Us(r, n, bs, Es, ws, t, gs, ms, ys, us, a, 0, -0, 0);
              }
              break;
            }
            (o = Xs(e, t, !1)), (a = !1);
          }
          kc(e);
        }
        function Us(e, t, n, r, o, a, i, u, s, c, f, d, p, m) {
          if (
            ((e.timeoutHandle = -1),
            (8192 & (d = t.subtreeFlags) || 16785408 === (16785408 & d)) &&
              ((Hf = { stylesheets: null, count: 0, unsuspend: Bf }),
              Xu(t),
              null !==
                (d = (function () {
                  if (null === Hf) throw Error(l(475));
                  var e = Hf;
                  return (
                    e.stylesheets && 0 === e.count && qf(e, e.stylesheets),
                    0 < e.count
                      ? function (t) {
                          var n = setTimeout(function () {
                            if (
                              (e.stylesheets && qf(e, e.stylesheets),
                              e.unsuspend)
                            ) {
                              var t = e.unsuspend;
                              (e.unsuspend = null), t();
                            }
                          }, 6e4);
                          return (
                            (e.unsuspend = t),
                            function () {
                              (e.unsuspend = null), clearTimeout(n);
                            }
                          );
                        }
                      : null
                  );
                })())))
          )
            return (
              (e.cancelPendingCommit = d(
                nc.bind(null, e, t, a, n, r, o, i, u, s, f, 1, p, m)
              )),
              void Ms(e, a, i, !c)
            );
          nc(e, t, a, n, r, o, i, u, s);
        }
        function Fs(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var o = n[r],
                  a = o.getSnapshot;
                o = o.value;
                try {
                  if (!Kn(a(), o)) return !1;
                } catch (l) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Ms(e, t, n, r) {
          (t &= ~hs),
            (t &= ~ms),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var o = t; 0 < o; ) {
            var a = 31 - pe(o),
              l = 1 << a;
            (r[a] = -1), (o &= ~l);
          }
          0 !== n && Pe(e, n, t);
        }
        function Vs() {
          return 0 !== (6 & ns) || (Ec(0, !1), !1);
        }
        function Ws() {
          if (null !== os) {
            if (0 === ls) var e = os.return;
            else
              (bo = vo = null), Ua((e = os)), (Kl = null), (Ql = 0), (e = os);
            for (; null !== e; ) au(e.alternate, e), (e = e.return);
            os = null;
          }
        }
        function Hs(e, t) {
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), cf(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Ws(),
            (rs = e),
            (os = n = Ur(e.current, null)),
            (as = t),
            (ls = 0),
            (is = null),
            (us = !1),
            (ss = we(e, t)),
            (cs = !1),
            (ys = gs = hs = ms = ps = ds = 0),
            (bs = vs = null),
            (ws = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var o = 31 - pe(r),
                a = 1 << o;
              (t |= e[o]), (r &= ~a);
            }
          return (fs = t), Tr(), n;
        }
        function Bs(e, t) {
          (wa = null),
            (L.H = Gl),
            t === Zo || t === Xo
              ? ((t = ea()), (ls = 3))
              : t === qo
              ? ((t = ea()), (ls = 4))
              : (ls =
                  t === Pi
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (is = t),
            null === os && ((ds = 1), Si(e, Cr(t, e.current)));
        }
        function Gs() {
          var e = L.H;
          return (L.H = Gl), null === e ? Gl : e;
        }
        function Zs() {
          var e = L.A;
          return (L.A = es), e;
        }
        function qs() {
          (ds = 4),
            us || ((4194048 & as) !== as && null !== oi.current) || (ss = !0),
            (0 === (134217727 & ps) && 0 === (134217727 & ms)) ||
              null === rs ||
              Ms(rs, as, gs, !1);
        }
        function Xs(e, t, n) {
          var r = ns;
          ns |= 2;
          var o = Gs(),
            a = Zs();
          (rs === e && as === t) || ((Es = null), Hs(e, t)), (t = !1);
          var l = ds;
          e: for (;;)
            try {
              if (0 !== ls && null !== os) {
                var i = os,
                  u = is;
                switch (ls) {
                  case 8:
                    Ws(), (l = 6);
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === oi.current && (t = !0);
                    var s = ls;
                    if (((ls = 0), (is = null), $s(e, i, u, s), n && ss)) {
                      l = 0;
                      break e;
                    }
                    break;
                  default:
                    (s = ls), (ls = 0), (is = null), $s(e, i, u, s);
                }
              }
              Ks(), (l = ds);
              break;
            } catch (c) {
              Bs(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (bo = vo = null),
            (ns = r),
            (L.H = o),
            (L.A = a),
            null === os && ((rs = null), (as = 0), Tr()),
            l
          );
        }
        function Ks() {
          for (; null !== os; ) Ys(os);
        }
        function Qs() {
          for (; null !== os && !$(); ) Ys(os);
        }
        function Ys(e) {
          var t = Yi(e.alternate, e, fs);
          (e.memoizedProps = e.pendingProps), null === t ? ec(e) : (os = t);
        }
        function Js(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Di(n, t, t.pendingProps, t.type, void 0, as);
              break;
            case 11:
              t = Di(n, t, t.pendingProps, t.type.render, t.ref, as);
              break;
            case 5:
              Ua(t);
            default:
              au(n, t), (t = Yi(n, (t = os = Fr(t, fs)), fs));
          }
          (e.memoizedProps = e.pendingProps), null === t ? ec(e) : (os = t);
        }
        function $s(e, t, n, r) {
          (bo = vo = null), Ua(t), (Kl = null), (Ql = 0);
          var o = t.return;
          try {
            if (
              (function (e, t, n, r, o) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Co(t, n, o, !0),
                    null !== (n = oi.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === ai
                            ? qs()
                            : null === n.alternate && 0 === ds && (ds = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = o),
                          r === Ko
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              fc(e, r, o)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === Ko
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              fc(e, r, o)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return fc(e, r, o), qs(), !1;
                }
                if (ao)
                  return (
                    null !== (t = oi.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = o),
                        r !== uo &&
                          go(Cr((e = Error(l(422), { cause: r })), n)))
                      : (r !== uo &&
                          go(Cr((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (o &= -o),
                        (e.lanes |= o),
                        (r = Cr(r, n)),
                        ua(e, (o = Ei(e.stateNode, r, o))),
                        4 !== ds && (ds = 2)),
                    !1
                  );
                var a = Error(l(520), { cause: r });
                if (
                  ((a = Cr(a, n)),
                  null === vs ? (vs = [a]) : vs.push(a),
                  4 !== ds && (ds = 2),
                  null === t)
                )
                  return !0;
                (r = Cr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = o & -o),
                        (n.lanes |= e),
                        ua(n, (e = Ei(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== a &&
                              "function" === typeof a.componentDidCatch &&
                              (null === Cs || !Cs.has(a)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (o &= -o),
                          (n.lanes |= o),
                          Ii((o = Ci(o)), e, n, r),
                          ua(n, o),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, o, t, n, as)
            )
              return (ds = 1), Si(e, Cr(n, e.current)), void (os = null);
          } catch (a) {
            if (null !== o) throw ((os = o), a);
            return (ds = 1), Si(e, Cr(n, e.current)), void (os = null);
          }
          32768 & t.flags
            ? (ao || 1 === r
                ? (e = !0)
                : ss || 0 !== (536870912 & as)
                ? (e = !1)
                : ((us = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                    null !== (r = oi.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              tc(t, e))
            : ec(t);
        }
        function ec(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void tc(t, us);
            e = t.return;
            var n = ru(t.alternate, t, fs);
            if (null !== n) return void (os = n);
            if (null !== (t = t.sibling)) return void (os = t);
            os = t = e;
          } while (null !== t);
          0 === ds && (ds = 5);
        }
        function tc(e, t) {
          do {
            var n = ou(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (os = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (os = e);
            os = e = n;
          } while (null !== e);
          (ds = 6), (os = null);
        }
        function nc(e, t, n, r, o, a, i, u, s) {
          e.cancelPendingCommit = null;
          do {
            ic();
          } while (0 !== Is);
          if (0 !== (6 & ns)) throw Error(l(327));
          if (null !== t) {
            if (t === e.current) throw Error(l(177));
            if (
              ((a = t.lanes | t.childLanes),
              (function (e, t, n, r, o, a) {
                var l = e.pendingLanes;
                (e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0);
                var i = e.entanglements,
                  u = e.expirationTimes,
                  s = e.hiddenUpdates;
                for (n = l & ~n; 0 < n; ) {
                  var c = 31 - pe(n),
                    f = 1 << c;
                  (i[c] = 0), (u[c] = -1);
                  var d = s[c];
                  if (null !== d)
                    for (s[c] = null, c = 0; c < d.length; c++) {
                      var p = d[c];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~f;
                }
                0 !== r && Pe(e, r, 0),
                  0 !== a &&
                    0 === o &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= a & ~(l & ~t));
              })(e, n, (a |= xr), i, u, s),
              e === rs && ((os = rs = null), (as = 0)),
              (xs = t),
              (Ps = e),
              (Ts = n),
              (As = a),
              (Os = o),
              (Ns = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  Y(ae, function () {
                    return uc(), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              (r = L.T),
                (L.T = null),
                (o = z.p),
                (z.p = 2),
                (i = ns),
                (ns |= 4);
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (tf = rd), tr((e = er(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var o = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, a.nodeType;
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var i = 0,
                            u = -1,
                            s = -1,
                            c = 0,
                            f = 0,
                            d = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var m;
                              d !== n ||
                                (0 !== o && 3 !== d.nodeType) ||
                                (u = i + o),
                                d !== a ||
                                  (0 !== r && 3 !== d.nodeType) ||
                                  (s = i + r),
                                3 === d.nodeType && (i += d.nodeValue.length),
                                null !== (m = d.firstChild);

                            )
                              (p = d), (d = m);
                            for (;;) {
                              if (d === e) break t;
                              if (
                                (p === n && ++c === o && (u = i),
                                p === a && ++f === r && (s = i),
                                null !== (m = d.nextSibling))
                              )
                                break;
                              p = (d = p).parentNode;
                            }
                            d = m;
                          }
                          n =
                            -1 === u || -1 === s ? null : { start: u, end: s };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    nf = { focusedElem: e, selectionRange: n }, rd = !1, Eu = t;
                    null !== Eu;

                  )
                    if (
                      ((e = (t = Eu).child),
                      0 !== (1024 & t.subtreeFlags) && null !== e)
                    )
                      (e.return = t), (Eu = e);
                    else
                      for (; null !== Eu; ) {
                        switch (
                          ((a = (t = Eu).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== a) {
                              (e = void 0),
                                (n = t),
                                (o = a.memoizedProps),
                                (a = a.memoizedState),
                                (r = n.stateNode);
                              try {
                                var h = gi(n.type, o, (n.elementType, n.type));
                                (e = r.getSnapshotBeforeUpdate(h, a)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e);
                              } catch (y) {
                                cc(n, n.return, y);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                gf(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    gf(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(l(163));
                        }
                        if (null !== (e = t.sibling)) {
                          (e.return = t.return), (Eu = e);
                          break;
                        }
                        Eu = t.return;
                      }
                })(e, t);
              } finally {
                (ns = i), (z.p = o), (L.T = r);
              }
            }
            (Is = 1), rc(), oc(), ac();
          }
        }
        function rc() {
          if (1 === Is) {
            Is = 0;
            var e = Ps,
              t = xs,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              (n = L.T), (L.T = null);
              var r = z.p;
              z.p = 2;
              var o = ns;
              ns |= 4;
              try {
                Lu(t, e);
                var a = nf,
                  l = er(e.containerInfo),
                  i = a.focusedElem,
                  u = a.selectionRange;
                if (
                  l !== i &&
                  i &&
                  i.ownerDocument &&
                  $n(i.ownerDocument.documentElement, i)
                ) {
                  if (null !== u && tr(i)) {
                    var s = u.start,
                      c = u.end;
                    if ((void 0 === c && (c = s), "selectionStart" in i))
                      (i.selectionStart = s),
                        (i.selectionEnd = Math.min(c, i.value.length));
                    else {
                      var f = i.ownerDocument || document,
                        d = (f && f.defaultView) || window;
                      if (d.getSelection) {
                        var p = d.getSelection(),
                          m = i.textContent.length,
                          h = Math.min(u.start, m),
                          g = void 0 === u.end ? h : Math.min(u.end, m);
                        !p.extend && h > g && ((l = g), (g = h), (h = l));
                        var y = Jn(i, h),
                          v = Jn(i, g);
                        if (
                          y &&
                          v &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== y.node ||
                            p.anchorOffset !== y.offset ||
                            p.focusNode !== v.node ||
                            p.focusOffset !== v.offset)
                        ) {
                          var b = f.createRange();
                          b.setStart(y.node, y.offset),
                            p.removeAllRanges(),
                            h > g
                              ? (p.addRange(b), p.extend(v.node, v.offset))
                              : (b.setEnd(v.node, v.offset), p.addRange(b));
                        }
                      }
                    }
                  }
                  for (f = [], p = i; (p = p.parentNode); )
                    1 === p.nodeType &&
                      f.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for (
                    "function" === typeof i.focus && i.focus(), i = 0;
                    i < f.length;
                    i++
                  ) {
                    var w = f[i];
                    (w.element.scrollLeft = w.left),
                      (w.element.scrollTop = w.top);
                  }
                }
                (rd = !!tf), (nf = tf = null);
              } finally {
                (ns = o), (z.p = r), (L.T = n);
              }
            }
            (e.current = t), (Is = 2);
          }
        }
        function oc() {
          if (2 === Is) {
            Is = 0;
            var e = Ps,
              t = xs,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              (n = L.T), (L.T = null);
              var r = z.p;
              z.p = 2;
              var o = ns;
              ns |= 4;
              try {
                Cu(e, t.alternate, t);
              } finally {
                (ns = o), (z.p = r), (L.T = n);
              }
            }
            Is = 3;
          }
        }
        function ac() {
          if (4 === Is || 3 === Is) {
            (Is = 0), ee();
            var e = Ps,
              t = xs,
              n = Ts,
              r = Ns;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
              ? (Is = 5)
              : ((Is = 0), (xs = Ps = null), lc(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (
              (0 === o && (Cs = null),
              Ae(n),
              (t = t.stateNode),
              fe && "function" === typeof fe.onCommitFiberRoot)
            )
              try {
                fe.onCommitFiberRoot(
                  ce,
                  t,
                  void 0,
                  128 === (128 & t.current.flags)
                );
              } catch (u) {}
            if (null !== r) {
              (t = L.T), (o = z.p), (z.p = 2), (L.T = null);
              try {
                for (var a = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  a(i.value, { componentStack: i.stack });
                }
              } finally {
                (L.T = t), (z.p = o);
              }
            }
            0 !== (3 & Ts) && ic(),
              kc(e),
              (o = e.pendingLanes),
              0 !== (4194090 & n) && 0 !== (42 & o)
                ? e === Rs
                  ? _s++
                  : ((_s = 0), (Rs = e))
                : (_s = 0),
              Ec(0, !1);
          }
        }
        function lc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), zo(t));
        }
        function ic(e) {
          return rc(), oc(), ac(), uc();
        }
        function uc() {
          if (5 !== Is) return !1;
          var e = Ps,
            t = As;
          As = 0;
          var n = Ae(Ts),
            r = L.T,
            o = z.p;
          try {
            (z.p = 32 > n ? 32 : n), (L.T = null), (n = Os), (Os = null);
            var a = Ps,
              i = Ts;
            if (((Is = 0), (xs = Ps = null), (Ts = 0), 0 !== (6 & ns)))
              throw Error(l(331));
            var u = ns;
            if (
              ((ns |= 4),
              Yu(a.current),
              Hu(a, a.current, i, n),
              (ns = u),
              Ec(0, !1),
              fe && "function" === typeof fe.onPostCommitFiberRoot)
            )
              try {
                fe.onPostCommitFiberRoot(ce, a);
              } catch (s) {}
            return !0;
          } finally {
            (z.p = o), (L.T = r), lc(e, t);
          }
        }
        function sc(e, t, n) {
          (t = Cr(n, t)),
            null !== (e = la(e, (t = Ei(e.stateNode, t, 2)), 2)) &&
              (Ie(e, 2), kc(e));
        }
        function cc(e, t, n) {
          if (3 === e.tag) sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Cs || !Cs.has(r)))
                ) {
                  (e = Cr(n, e)),
                    null !== (r = la(t, (n = Ci(2)), 2)) &&
                      (Ii(n, r, t, e), Ie(r, 2), kc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function fc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ts();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) ||
            ((cs = !0), o.add(n), (e = dc.bind(null, e, t, n)), t.then(e, e));
        }
        function dc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            rs === e &&
              (as & n) === n &&
              (4 === ds ||
              (3 === ds && (62914560 & as) === as && 300 > te() - Ss)
                ? 0 === (2 & ns) && Hs(e, 0)
                : (hs |= n),
              ys === as && (ys = 0)),
            kc(e);
        }
        function pc(e, t) {
          0 === t && (t = Ee()), null !== (e = Nr(e, t)) && (Ie(e, t), kc(e));
        }
        function mc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), pc(e, n);
        }
        function hc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), pc(e, n);
        }
        var gc = null,
          yc = null,
          vc = !1,
          bc = !1,
          wc = !1,
          Sc = 0;
        function kc(e) {
          e !== yc &&
            null === e.next &&
            (null === yc ? (gc = yc = e) : (yc = yc.next = e)),
            (bc = !0),
            vc ||
              ((vc = !0),
              df(function () {
                0 !== (6 & ns) ? Y(re, Cc) : Ic();
              }));
        }
        function Ec(e, t) {
          if (!wc && bc) {
            wc = !0;
            do {
              for (var n = !1, r = gc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var o = r.pendingLanes;
                    if (0 === o) var a = 0;
                    else {
                      var l = r.suspendedLanes,
                        i = r.pingedLanes;
                      (a = (1 << (31 - pe(42 | e) + 1)) - 1),
                        (a =
                          201326741 & (a &= o & ~(l & ~i))
                            ? (201326741 & a) | 1
                            : a
                            ? 2 | a
                            : 0);
                    }
                    0 !== a && ((n = !0), Tc(r, a));
                  } else
                    (a = as),
                      0 ===
                        (3 &
                          (a = be(
                            r,
                            r === rs ? a : 0,
                            null !== r.cancelPendingCommit ||
                              -1 !== r.timeoutHandle
                          ))) ||
                        we(r, a) ||
                        ((n = !0), Tc(r, a));
                r = r.next;
              }
            } while (n);
            wc = !1;
          }
        }
        function Cc() {
          Ic();
        }
        function Ic() {
          bc = vc = !1;
          var e = 0;
          0 !== Sc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== uf && ((uf = e), !0);
              return (uf = null), !1;
            })() && (e = Sc),
            (Sc = 0));
          for (var t = te(), n = null, r = gc; null !== r; ) {
            var o = r.next,
              a = Pc(r, t);
            0 === a
              ? ((r.next = null),
                null === n ? (gc = o) : (n.next = o),
                null === o && (yc = n))
              : ((n = r), (0 !== e || 0 !== (3 & a)) && (bc = !0)),
              (r = o);
          }
          Ec(e, !1);
        }
        function Pc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              o = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;

          ) {
            var l = 31 - pe(a),
              i = 1 << l,
              u = o[l];
            -1 === u
              ? (0 !== (i & n) && 0 === (i & r)) || (o[l] = Se(i, t))
              : u <= t && (e.expiredLanes |= i),
              (a &= ~i);
          }
          if (
            ((n = as),
            (n = be(
              e,
              e === (t = rs) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === ls || 9 === ls)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && J(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || we(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && J(r), Ae(n))) {
              case 2:
              case 8:
                n = oe;
                break;
              case 32:
              default:
                n = ae;
                break;
              case 268435456:
                n = ie;
            }
            return (
              (r = xc.bind(null, e)),
              (n = Y(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && J(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function xc(e, t) {
          if (0 !== Is && 5 !== Is)
            return (e.callbackNode = null), (e.callbackPriority = 0), null;
          var n = e.callbackNode;
          if (ic() && e.callbackNode !== n) return null;
          var r = as;
          return 0 ===
            (r = be(
              e,
              e === rs ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            ))
            ? null
            : (js(e, r, t),
              Pc(e, te()),
              null != e.callbackNode && e.callbackNode === n
                ? xc.bind(null, e)
                : null);
        }
        function Tc(e, t) {
          if (ic()) return null;
          js(e, t, !0);
        }
        function Ac() {
          return 0 === Sc && (Sc = ke()), Sc;
        }
        function Oc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : At("" + e);
        }
        function Nc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var _c = 0; _c < Sr.length; _c++) {
          var Rc = Sr[_c];
          kr(Rc.toLowerCase(), "on" + (Rc[0].toUpperCase() + Rc.slice(1)));
        }
        kr(pr, "onAnimationEnd"),
          kr(mr, "onAnimationIteration"),
          kr(hr, "onAnimationStart"),
          kr("dblclick", "onDoubleClick"),
          kr("focusin", "onFocus"),
          kr("focusout", "onBlur"),
          kr(gr, "onTransitionRun"),
          kr(yr, "onTransitionStart"),
          kr(vr, "onTransitionCancel"),
          kr(br, "onTransitionEnd"),
          Ke("onMouseEnter", ["mouseout", "mouseover"]),
          Ke("onMouseLeave", ["mouseout", "mouseover"]),
          Ke("onPointerEnter", ["pointerout", "pointerover"]),
          Ke("onPointerLeave", ["pointerout", "pointerover"]),
          Xe(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          Xe(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          Xe("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          Xe(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Xe(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Xe(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Lc)
          );
        function Dc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  (a = i), (o.currentTarget = s);
                  try {
                    a(o);
                  } catch (c) {
                    yi(c);
                  }
                  (o.currentTarget = null), (a = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  (a = i), (o.currentTarget = s);
                  try {
                    a(o);
                  } catch (c) {
                    yi(c);
                  }
                  (o.currentTarget = null), (a = u);
                }
            }
          }
        }
        function jc(e, t) {
          var n = t[ze];
          void 0 === n && (n = t[ze] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vc(t, e, 2, !1), n.add(r));
        }
        function Uc(e, t, n) {
          var r = 0;
          t && (r |= 4), Vc(n, e, r, t);
        }
        var Fc = "_reactListening" + Math.random().toString(36).slice(2);
        function Mc(e) {
          if (!e[Fc]) {
            (e[Fc] = !0),
              Ze.forEach(function (t) {
                "selectionchange" !== t &&
                  (zc.has(t) || Uc(t, !1, e), Uc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fc] || ((t[Fc] = !0), Uc("selectionchange", !1, t));
          }
        }
        function Vc(e, t, n, r) {
          switch (cd(t)) {
            case 2:
              var o = od;
              break;
            case 8:
              o = ad;
              break;
            default:
              o = ld;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ft ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Wc(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === o) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if ((3 === s || 4 === s) && l.stateNode.containerInfo === o)
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = Ve(i))) return;
                  if (5 === (s = l.tag) || 6 === s || 26 === s || 27 === s) {
                    r = a = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Dt(function () {
            var r = a,
              o = Nt(n),
              l = [];
            e: {
              var i = wr.get(e);
              if (void 0 !== i) {
                var s = $t,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Gt(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = hn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = an);
                    break;
                  case "focusout":
                    (c = "blur"), (s = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = rn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = on;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = yn;
                    break;
                  case pr:
                  case mr:
                  case hr:
                    s = ln;
                    break;
                  case br:
                    s = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    s = tn;
                    break;
                  case "wheel":
                    s = bn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = un;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = gn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    s = wn;
                }
                var f = 0 !== (4 & t),
                  d = !f && ("scroll" === e || "scrollend" === e),
                  p = f ? (null !== i ? i + "Capture" : null) : i;
                f = [];
                for (var m, h = r; null !== h; ) {
                  var g = h;
                  if (
                    ((m = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === m ||
                      null === p ||
                      (null != (g = jt(h, p)) && f.push(Hc(h, g, m))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < f.length &&
                  ((i = new s(i, c, null, n, o)),
                  l.push({ event: i, listeners: f }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === Ot ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Ve(c) && !c[Le])) &&
                  (s || i) &&
                  ((i =
                    o.window === o
                      ? o
                      : (i = o.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? Ve(c)
                          : null) &&
                        ((d = u(c)),
                        (f = c.tag),
                        c !== d || (5 !== f && 27 !== f && 6 !== f)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((f = rn),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((f = gn),
                    (g = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? i : He(s)),
                  (m = null == c ? i : He(c)),
                  ((i = new f(g, h + "leave", s, n, o)).target = d),
                  (i.relatedTarget = m),
                  (g = null),
                  Ve(o) === r &&
                    (((f = new f(p, h + "enter", c, n, o)).target = m),
                    (f.relatedTarget = d),
                    (g = f)),
                  (d = g),
                  s && c)
                )
                  e: {
                    for (p = c, h = 0, m = f = s; m; m = Gc(m)) h++;
                    for (m = 0, g = p; g; g = Gc(g)) m++;
                    for (; 0 < h - m; ) (f = Gc(f)), h--;
                    for (; 0 < m - h; ) (p = Gc(p)), m--;
                    for (; h--; ) {
                      if (f === p || (null !== p && f === p.alternate)) break e;
                      (f = Gc(f)), (p = Gc(p));
                    }
                    f = null;
                  }
                else f = null;
                null !== s && Zc(l, i, s, f, !1),
                  null !== c && null !== d && Zc(l, d, c, f, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = r ? He(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var y = Un;
              else if (_n(i))
                if (Fn) y = Xn;
                else {
                  y = Zn;
                  var v = Gn;
                }
              else
                !(s = i.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== i.type && "radio" !== i.type)
                  ? r && Pt(r.elementType) && (y = Un)
                  : (y = qn);
              switch (
                (y && (y = y(e, r))
                  ? Rn(l, y, n, o)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      r &&
                      "number" === i.type &&
                      null != r.memoizedProps.value &&
                      vt(i, "number", i.value)),
                (v = r ? He(r) : window),
                e)
              ) {
                case "focusin":
                  (_n(v) || "true" === v.contentEditable) &&
                    ((rr = v), (or = r), (ar = null));
                  break;
                case "focusout":
                  ar = or = rr = null;
                  break;
                case "mousedown":
                  lr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (lr = !1), ir(l, n, o);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  ir(l, n, o);
              }
              var b;
              if (kn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                On
                  ? Tn(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (w = "onCompositionStart");
              w &&
                (In &&
                  "ko" !== n.locale &&
                  (On || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && On && (b = Bt())
                    : ((Wt = "value" in (Vt = o) ? Vt.value : Vt.textContent),
                      (On = !0))),
                0 < (v = Bc(r, w)).length &&
                  ((w = new sn(w, e, null, n, o)),
                  l.push({ event: w, listeners: v }),
                  b ? (w.data = b) : null !== (b = An(n)) && (w.data = b))),
                (b = Cn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return An(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((xn = !0), Pn);
                        case "textInput":
                          return (e = t.data) === Pn && xn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (On)
                        return "compositionend" === e || (!kn && Tn(e, t))
                          ? ((e = Bt()), (Ht = Wt = Vt = null), (On = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = Bc(r, "onBeforeInput")).length &&
                  ((v = new sn("onBeforeInput", "beforeinput", null, n, o)),
                  l.push({ event: v, listeners: w }),
                  (v.data = b)),
                (function (e, t, n, r, o) {
                  if ("submit" === t && n && n.stateNode === o) {
                    var a = Oc((o[Re] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[Re] || null)
                          ? Oc(t.formAction)
                          : l.getAttribute("formAction")) &&
                      ((a = t), (l = null));
                    var i = new $t("action", "action", null, r, o);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Sc) {
                                var e = l ? Nc(o, l) : new FormData(o);
                                Nl(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof a &&
                                (i.preventDefault(),
                                (e = l ? Nc(o, l) : new FormData(o)),
                                Nl(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  a,
                                  e
                                ));
                          },
                          currentTarget: o,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, o);
            }
            Dc(l, t);
          });
        }
        function Hc(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Bc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            if (
              ((5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
                null === a ||
                (null != (o = jt(e, n)) && r.unshift(Hc(e, o, a)),
                null != (o = jt(e, t)) && r.push(Hc(e, o, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function Gc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Zc(e, t, n, r, o) {
          for (var a = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            (5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              o
                ? null != (s = jt(n, a)) && l.unshift(Hc(n, s, u))
                : o || (null != (s = jt(n, a)) && l.push(Hc(n, s, u)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var qc = /\r\n?/g,
          Xc = /\u0000|\uFFFD/g;
        function Kc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qc, "\n")
            .replace(Xc, "");
        }
        function Qc(e, t) {
          return (t = Kc(t)), Kc(e) === t;
        }
        function Yc() {}
        function Jc(e, t, n, r, o, a) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || kt(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  kt(e, "" + r);
              break;
            case "className":
              nt(e, "class", r);
              break;
            case "tabIndex":
              nt(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              nt(e, n, r);
              break;
            case "style":
              It(e, r, a);
              break;
            case "data":
              if ("object" !== t) {
                nt(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = At("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof a &&
                  ("formAction" === n
                    ? ("input" !== t && Jc(e, t, "name", o.name, o, null),
                      Jc(e, t, "formEncType", o.formEncType, o, null),
                      Jc(e, t, "formMethod", o.formMethod, o, null),
                      Jc(e, t, "formTarget", o.formTarget, o, null))
                    : (Jc(e, t, "encType", o.encType, o, null),
                      Jc(e, t, "method", o.method, o, null),
                      Jc(e, t, "target", o.target, o, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = At("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Yc);
              break;
            case "onScroll":
              null != r && jc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && jc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = At("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              jc("beforetoggle", e), jc("toggle", e), tt(e, "popover", r);
              break;
            case "xlinkActuate":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              tt(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                tt(e, (n = xt.get(n) || n), r);
          }
        }
        function $c(e, t, n, r, o, a) {
          switch (n) {
            case "style":
              It(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? kt(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  kt(e, "" + r);
              break;
            case "onScroll":
              null != r && jc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && jc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Yc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              qe.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((o = n.endsWith("Capture")),
                (t = n.slice(2, o ? n.length - 7 : void 0)),
                "function" ===
                  typeof (a = null != (a = e[Re] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, o),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : tt(e, n, r)
                  : ("function" !== typeof a &&
                      null !== a &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, o)));
          }
        }
        function ef(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              jc("error", e), jc("load", e);
              var r,
                o = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        o = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                      default:
                        Jc(e, t, r, i, n, null);
                    }
                }
              return (
                a && Jc(e, t, "srcSet", n.srcSet, n, null),
                void (o && Jc(e, t, "src", n.src, n, null))
              );
            case "input":
              jc("invalid", e);
              var u = (r = i = a = null),
                s = null,
                c = null;
              for (o in n)
                if (n.hasOwnProperty(o)) {
                  var f = n[o];
                  if (null != f)
                    switch (o) {
                      case "name":
                        a = f;
                        break;
                      case "type":
                        i = f;
                        break;
                      case "checked":
                        s = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        u = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(l(137, t));
                        break;
                      default:
                        Jc(e, t, o, f, n, null);
                    }
                }
              return yt(e, r, u, s, c, i, a, !1), void ft(e);
            case "select":
              for (a in (jc("invalid", e), (o = i = r = null), n))
                if (n.hasOwnProperty(a) && null != (u = n[a]))
                  switch (a) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      o = u;
                    default:
                      Jc(e, t, a, u, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!o),
                void (null != t
                  ? bt(e, !!o, t, !1)
                  : null != n && bt(e, !!o, n, !0))
              );
            case "textarea":
              for (i in (jc("invalid", e), (r = a = o = null), n))
                if (n.hasOwnProperty(i) && null != (u = n[i]))
                  switch (i) {
                    case "value":
                      o = u;
                      break;
                    case "defaultValue":
                      a = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(l(91));
                      break;
                    default:
                      Jc(e, t, i, u, n, null);
                  }
              return St(e, o, a, r), void ft(e);
            case "option":
              for (s in n)
                if (n.hasOwnProperty(s) && null != (o = n[s]))
                  if ("selected" === s)
                    e.selected =
                      o && "function" !== typeof o && "symbol" !== typeof o;
                  else Jc(e, t, s, o, n, null);
              return;
            case "dialog":
              jc("beforetoggle", e),
                jc("toggle", e),
                jc("cancel", e),
                jc("close", e);
              break;
            case "iframe":
            case "object":
              jc("load", e);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Lc.length; o++) jc(Lc[o], e);
              break;
            case "image":
              jc("error", e), jc("load", e);
              break;
            case "details":
              jc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              jc("error", e), jc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (o = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      Jc(e, t, c, o, n, null);
                  }
              return;
            default:
              if (Pt(t)) {
                for (f in n)
                  n.hasOwnProperty(f) &&
                    void 0 !== (o = n[f]) &&
                    $c(e, t, f, o, n, void 0);
                return;
              }
          }
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (o = n[u]) &&
              Jc(e, t, u, o, n, null);
        }
        var tf = null,
          nf = null;
        function rf(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function of(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function af(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function lf(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var uf = null;
        var sf = "function" === typeof setTimeout ? setTimeout : void 0,
          cf = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ff = "function" === typeof Promise ? Promise : void 0,
          df =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ff
              ? function (e) {
                  return ff.resolve(null).then(e).catch(pf);
                }
              : sf;
        function pf(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function mf(e) {
          return "head" === e;
        }
        function hf(e, t) {
          var n = t,
            r = 0,
            o = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 < r && 8 > r) {
                  n = r;
                  var l = e.ownerDocument;
                  if (
                    (1 & n && kf(l.documentElement), 2 & n && kf(l.body), 4 & n)
                  )
                    for (kf((n = l.head)), l = n.firstChild; l; ) {
                      var i = l.nextSibling,
                        u = l.nodeName;
                      l[Fe] ||
                        "SCRIPT" === u ||
                        "STYLE" === u ||
                        ("LINK" === u &&
                          "stylesheet" === l.rel.toLowerCase()) ||
                        n.removeChild(l),
                        (l = i);
                    }
                }
                if (0 === o) return e.removeChild(a), void Td(t);
                o--;
              } else
                "$" === n || "$?" === n || "$!" === n
                  ? o++
                  : (r = n.charCodeAt(0) - 48);
            else r = 0;
            n = a;
          } while (n);
          Td(t);
        }
        function gf(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                gf(n), Me(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function yf(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "complete" === e.ownerDocument.readyState)
          );
        }
        function vf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        var bf = null;
        function wf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function Sf(e, t, n) {
          switch (((t = rf(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(l(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(l(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(l(454));
              return e;
            default:
              throw Error(l(451));
          }
        }
        function kf(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Me(e);
        }
        var Ef = new Map(),
          Cf = new Set();
        function If(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
            ? e
            : e.ownerDocument;
        }
        var Pf = z.d;
        z.d = {
          f: function () {
            var e = Pf.f(),
              t = Vs();
            return e || t;
          },
          r: function (e) {
            var t = We(e);
            null !== t && 5 === t.tag && "form" === t.type ? Rl(t) : Pf.r(e);
          },
          D: function (e) {
            Pf.D(e), Tf("dns-prefetch", e, null);
          },
          C: function (e, t) {
            Pf.C(e, t), Tf("preconnect", e, t);
          },
          L: function (e, t, n) {
            Pf.L(e, t, n);
            var r = xf;
            if (r && e && t) {
              var o = 'link[rel="preload"][as="' + ht(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((o += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (o += '[imagesizes="' + ht(n.imageSizes) + '"]'))
                : (o += '[href="' + ht(e) + '"]');
              var a = o;
              switch (t) {
                case "style":
                  a = Of(e);
                  break;
                case "script":
                  a = Rf(e);
              }
              Ef.has(a) ||
                ((e = d(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                Ef.set(a, e),
                null !== r.querySelector(o) ||
                  ("style" === t && r.querySelector(Nf(a))) ||
                  ("script" === t && r.querySelector(Lf(a))) ||
                  (ef((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Pf.m(e, t);
            var n = xf;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                o =
                  'link[rel="modulepreload"][as="' +
                  ht(r) +
                  '"][href="' +
                  ht(e) +
                  '"]',
                a = o;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = Rf(e);
              }
              if (
                !Ef.has(a) &&
                ((e = d({ rel: "modulepreload", href: e }, t)),
                Ef.set(a, e),
                null === n.querySelector(o))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Lf(a))) return;
                }
                ef((r = n.createElement("link")), "link", e),
                  Ge(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            Pf.X(e, t);
            var n = xf;
            if (n && e) {
              var r = Be(n).hoistableScripts,
                o = Rf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Lf(o))) ||
                  ((e = d({ src: e, async: !0 }, t)),
                  (t = Ef.get(o)) && Uf(e, t),
                  Ge((a = n.createElement("script"))),
                  ef(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
          S: function (e, t, n) {
            Pf.S(e, t, n);
            var r = xf;
            if (r && e) {
              var o = Be(r).hoistableStyles,
                a = Of(e);
              t = t || "default";
              var l = o.get(a);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(Nf(a)))) i.loading = 5;
                else {
                  (e = d(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = Ef.get(a)) && jf(e, n);
                  var u = (l = r.createElement("link"));
                  Ge(u),
                    ef(u, "link", e),
                    (u._p = new Promise(function (e, t) {
                      (u.onload = e), (u.onerror = t);
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    Df(l, t, r);
                }
                (l = { type: "stylesheet", instance: l, count: 1, state: i }),
                  o.set(a, l);
              }
            }
          },
          M: function (e, t) {
            Pf.M(e, t);
            var n = xf;
            if (n && e) {
              var r = Be(n).hoistableScripts,
                o = Rf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Lf(o))) ||
                  ((e = d({ src: e, async: !0, type: "module" }, t)),
                  (t = Ef.get(o)) && Uf(e, t),
                  Ge((a = n.createElement("script"))),
                  ef(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
        };
        var xf = "undefined" === typeof document ? null : document;
        function Tf(e, t, n) {
          var r = xf;
          if (r && "string" === typeof t && t) {
            var o = ht(t);
            (o = 'link[rel="' + e + '"][href="' + o + '"]'),
              "string" === typeof n && (o += '[crossorigin="' + n + '"]'),
              Cf.has(o) ||
                (Cf.add(o),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(o) &&
                  (ef((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
          }
        }
        function Af(e, t, n, r) {
          var o,
            a,
            i,
            u,
            s = (s = B.current) ? If(s) : null;
          if (!s) throw Error(l(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = Of(n.href)),
                  (r = (n = Be(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = Of(n.href);
                var c = Be(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(Nf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    Ef.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Ef.set(e, n),
                      c ||
                        ((o = s),
                        (a = e),
                        (i = n),
                        (u = f.state),
                        o.querySelector(
                          'link[rel="preload"][as="style"][' + a + "]"
                        )
                          ? (u.loading = 1)
                          : ((a = o.createElement("link")),
                            (u.preload = a),
                            a.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            a.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            ef(a, "link", i),
                            Ge(a),
                            o.head.appendChild(a))))),
                  t && null === r)
                )
                  throw Error(l(528, ""));
                return f;
              }
              if (t && null !== r) throw Error(l(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = Rf(n)),
                    (r = (n = Be(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(l(444, e));
          }
        }
        function Of(e) {
          return 'href="' + ht(e) + '"';
        }
        function Nf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function _f(e) {
          return d({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Rf(e) {
          return '[src="' + ht(e) + '"]';
        }
        function Lf(e) {
          return "script[async]" + e;
        }
        function zf(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + ht(n.href) + '"]'
                );
                if (r) return (t.instance = r), Ge(r), r;
                var o = d({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Ge((r = (e.ownerDocument || e).createElement("style"))),
                  ef(r, "style", o),
                  Df(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                o = Of(n.href);
                var a = e.querySelector(Nf(o));
                if (a)
                  return (t.state.loading |= 4), (t.instance = a), Ge(a), a;
                (r = _f(n)),
                  (o = Ef.get(o)) && jf(r, o),
                  Ge((a = (e.ownerDocument || e).createElement("link")));
                var i = a;
                return (
                  (i._p = new Promise(function (e, t) {
                    (i.onload = e), (i.onerror = t);
                  })),
                  ef(a, "link", r),
                  (t.state.loading |= 4),
                  Df(a, n.precedence, e),
                  (t.instance = a)
                );
              case "script":
                return (
                  (a = Rf(n.src)),
                  (o = e.querySelector(Lf(a)))
                    ? ((t.instance = o), Ge(o), o)
                    : ((r = n),
                      (o = Ef.get(a)) && Uf((r = d({}, n)), o),
                      Ge(
                        (o = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      ef(o, "link", r),
                      e.head.appendChild(o),
                      (t.instance = o))
                );
              case "void":
                return null;
              default:
                throw Error(l(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Df(r, n.precedence, e));
          return t.instance;
        }
        function Df(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              o = r.length ? r[r.length - 1] : null,
              a = o,
              l = 0;
            l < r.length;
            l++
          ) {
            var i = r[l];
            if (i.dataset.precedence === t) a = i;
            else if (a !== o) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function jf(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Uf(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Ff = null;
        function Mf(e, t, n) {
          if (null === Ff) {
            var r = new Map(),
              o = (Ff = new Map());
            o.set(n, r);
          } else (r = (o = Ff).get(n)) || ((r = new Map()), o.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), o = 0;
            o < n.length;
            o++
          ) {
            var a = n[o];
            if (
              !(
                a[Fe] ||
                a[_e] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var l = a.getAttribute(t) || "";
              l = e + l;
              var i = r.get(l);
              i ? i.push(a) : r.set(l, [a]);
            }
          }
          return r;
        }
        function Vf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Wf(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Hf = null;
        function Bf() {}
        function Gf() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) qf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Zf = null;
        function qf(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Zf = new Map()),
              t.forEach(Xf, e),
              (Zf = null),
              Gf.call(e));
        }
        function Xf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Zf.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Zf.set(e, n);
              for (
                var o = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  a = 0;
                a < o.length;
                a++
              ) {
                var l = o[a];
                ("LINK" !== l.nodeName &&
                  "not all" === l.getAttribute("media")) ||
                  (n.set(l.dataset.precedence, l), (r = l));
              }
              r && n.set(null, r);
            }
            (l = (o = t.instance).getAttribute("data-precedence")),
              (a = n.get(l) || r) === r && n.set(null, o),
              n.set(l, o),
              this.count++,
              (r = Gf.bind(this)),
              o.addEventListener("load", r),
              o.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(o, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    o,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Kf = {
          $$typeof: S,
          Provider: null,
          Consumer: null,
          _currentValue: D,
          _currentValue2: D,
          _threadCount: 0,
        };
        function Qf(e, t, n, r, o, a, l, i) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Ce(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ce(0)),
            (this.hiddenUpdates = Ce(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = o),
            (this.onCaughtError = a),
            (this.onRecoverableError = l),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = i),
            (this.incompleteTransitions = new Map());
        }
        function Yf(e, t, n, r, o, a, l, i, u, s, c, f) {
          return (
            (e = new Qf(e, t, n, l, i, u, s, f)),
            (t = 1),
            !0 === a && (t |= 24),
            (a = Dr(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (t = Lo()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
            ra(a),
            e
          );
        }
        function Jf(e) {
          return e ? (e = Lr) : Lr;
        }
        function $f(e, t, n, r, o, a) {
          (o = Jf(o)),
            null === r.context ? (r.context = o) : (r.pendingContext = o),
            ((r = aa(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = la(e, r, t)) && (Ds(n, 0, t), ia(n, e, t));
        }
        function ed(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function td(e, t) {
          ed(e, t), (e = e.alternate) && ed(e, t);
        }
        function nd(e) {
          if (13 === e.tag) {
            var t = Nr(e, 67108864);
            null !== t && Ds(t, 0, 67108864), td(e, 67108864);
          }
        }
        var rd = !0;
        function od(e, t, n, r) {
          var o = L.T;
          L.T = null;
          var a = z.p;
          try {
            (z.p = 2), ld(e, t, n, r);
          } finally {
            (z.p = a), (L.T = o);
          }
        }
        function ad(e, t, n, r) {
          var o = L.T;
          L.T = null;
          var a = z.p;
          try {
            (z.p = 8), ld(e, t, n, r);
          } finally {
            (z.p = a), (L.T = o);
          }
        }
        function ld(e, t, n, r) {
          if (rd) {
            var o = id(r);
            if (null === o) Wc(e, t, r, ud, n), bd(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (dd = wd(dd, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (pd = wd(pd, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (md = wd(md, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return hd.set(a, wd(hd.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      gd.set(a, wd(gd.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((bd(e, r), 4 & t && -1 < vd.indexOf(e))) {
              for (; null !== o; ) {
                var a = We(o);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var l = ve(a.pendingLanes);
                        if (0 !== l) {
                          var i = a;
                          for (
                            i.pendingLanes |= 2, i.entangledLanes |= 2;
                            l;

                          ) {
                            var u = 1 << (31 - pe(l));
                            (i.entanglements[1] |= u), (l &= ~u);
                          }
                          kc(a),
                            0 === (6 & ns) && ((ks = te() + 500), Ec(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (i = Nr(a, 2)) && Ds(i, 0, 2), Vs(), td(a, 2);
                  }
                if ((null === (a = id(r)) && Wc(e, t, r, ud, n), a === o))
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Wc(e, t, r, null, n);
          }
        }
        function id(e) {
          return sd((e = Nt(e)));
        }
        var ud = null;
        function sd(e) {
          if (((ud = null), null !== (e = Ve(e)))) {
            var t = u(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = s(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (ud = e), null;
        }
        function cd(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ne()) {
                case re:
                  return 2;
                case oe:
                  return 8;
                case ae:
                case le:
                  return 32;
                case ie:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var fd = !1,
          dd = null,
          pd = null,
          md = null,
          hd = new Map(),
          gd = new Map(),
          yd = [],
          vd =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function bd(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              dd = null;
              break;
            case "dragenter":
            case "dragleave":
              pd = null;
              break;
            case "mouseover":
            case "mouseout":
              md = null;
              break;
            case "pointerover":
            case "pointerout":
              hd.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              gd.delete(t.pointerId);
          }
        }
        function wd(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = We(t)) && nd(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Sd(e) {
          var t = Ve(e.target);
          if (null !== t) {
            var n = u(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = z.p;
                      try {
                        return (z.p = e), t();
                      } finally {
                        z.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Ls();
                        e = Te(e);
                        var t = Nr(n, e);
                        null !== t && Ds(t, 0, e), td(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function kd(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = id(e.nativeEvent);
            if (null !== n)
              return null !== (t = We(n)) && nd(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Ot = r), n.target.dispatchEvent(r), (Ot = null), t.shift();
          }
          return !0;
        }
        function Ed(e, t, n) {
          kd(e) && n.delete(t);
        }
        function Cd() {
          (fd = !1),
            null !== dd && kd(dd) && (dd = null),
            null !== pd && kd(pd) && (pd = null),
            null !== md && kd(md) && (md = null),
            hd.forEach(Ed),
            gd.forEach(Ed);
        }
        function Id(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            fd ||
              ((fd = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Cd)));
        }
        var Pd = null;
        function xd(e) {
          Pd !== e &&
            ((Pd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Pd === e && (Pd = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  o = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === sd(r || n)) continue;
                  break;
                }
                var a = We(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  Nl(
                    a,
                    { pending: !0, data: o, method: n.method, action: r },
                    r,
                    o
                  ));
              }
            }));
        }
        function Td(e) {
          function t(t) {
            return Id(t, e);
          }
          null !== dd && Id(dd, e),
            null !== pd && Id(pd, e),
            null !== md && Id(md, e),
            hd.forEach(t),
            gd.forEach(t);
          for (var n = 0; n < yd.length; n++) {
            var r = yd[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < yd.length && null === (n = yd[0]).blockedOn; )
            Sd(n), null === n.blockedOn && yd.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var o = n[r],
                a = n[r + 1],
                l = o[Re] || null;
              if ("function" === typeof a) l || xd(n);
              else if (l) {
                var i = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((o = a), (l = a[Re] || null))) i = l.formAction;
                  else if (null !== sd(o)) continue;
                } else i = l.action;
                "function" === typeof i
                  ? (n[r + 1] = i)
                  : (n.splice(r, 3), (r -= 3)),
                  xd(n);
              }
            }
        }
        function Ad(e) {
          this._internalRoot = e;
        }
        function Od(e) {
          this._internalRoot = e;
        }
        (Od.prototype.render = Ad.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            $f(t.current, Ls(), e, t, null, null);
          }),
          (Od.prototype.unmount = Ad.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                $f(e.current, 2, null, e, null, null), Vs(), (t[Le] = null);
              }
            }),
          (Od.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Oe();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < yd.length && 0 !== t && t < yd[n].priority;
                n++
              );
              yd.splice(n, 0, e), 0 === n && Sd(e);
            }
          });
        var Nd = o.version;
        if ("19.1.1" !== Nd) throw Error(l(527, Nd, "19.1.1"));
        z.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(l(188));
            throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = u(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return c(o), e;
                    if (a === r) return c(o), t;
                    a = a.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var i = !1, s = o.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = o), (r = a);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = o), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = a.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = a), (r = o);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = a), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode)
          );
        };
        var _d = {
          bundleType: 0,
          version: "19.1.1",
          rendererPackageName: "react-dom",
          currentDispatcherRef: L,
          reconcilerVersion: "19.1.1",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Rd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Rd.isDisabled && Rd.supportsFiber)
            try {
              (ce = Rd.inject(_d)), (fe = Rd);
            } catch (zd) {}
        }
        (t.createRoot = function (e, t) {
          if (!i(e)) throw Error(l(299));
          var n = !1,
            r = "",
            o = vi,
            a = bi,
            u = wi;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
              void 0 !== t.onCaughtError && (a = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Yf(e, 1, !1, null, 0, n, r, o, a, u, 0, null)),
            (e[Le] = t.current),
            Mc(e),
            new Ad(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!i(e)) throw Error(l(299));
            var r = !1,
              o = "",
              a = vi,
              u = bi,
              s = wi,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
                void 0 !== n.onCaughtError && (u = n.onCaughtError),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = Yf(e, 1, !0, t, 0, r, o, a, u, s, 0, c)).context =
                Jf(null)),
              (n = t.current),
              ((o = aa((r = Te((r = Ls()))))).callback = null),
              la(n, o, r),
              (n = r),
              (t.current.lanes = n),
              Ie(t, n),
              kc(t),
              (e[Le] = t.current),
              Mc(e),
              new Od(t)
            );
          }),
          (t.version = "19.1.1");
      },
      119: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(863));
      },
      142: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useUnityMetricsInfo = void 0);
        var r = n(950);
        t.useUnityMetricsInfo = function (e, t) {
          var n = (0, r.useState)({}),
            o = n[0],
            a = n[1];
          return (
            (0, r.useEffect)(
              function () {
                var n = setInterval(function () {
                  var t = e();
                  "undefined" !== typeof t && a(t);
                }, t.interval || 1e3);
                return function () {
                  clearInterval(n);
                };
              },
              [e, t.interval]
            ),
            o
          );
        };
      },
      143: (e, t, n) => {
        n.d(t, { G: () => r });
        let r = () => ({
          emit(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            for (let o = this.events[e] || [], a = 0, l = o.length; a < l; a++)
              o[a](...n);
          },
          events: {},
          on(e, t) {
            var n;
            return (
              ((n = this.events)[e] || (n[e] = [])).push(t),
              () => {
                var n;
                this.events[e] =
                  null === (n = this.events[e]) || void 0 === n
                    ? void 0
                    : n.filter((e) => t !== e);
              }
            );
          },
        });
      },
      169: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useUnityLoader = void 0);
        var r = n(950),
          o = n(446);
        t.useUnityLoader = function (e) {
          var t = (0, r.useState)("Loading"),
            n = t[0],
            a = t[1];
          return (
            (0, r.useEffect)(
              function () {
                if (!1 !== o.isBrowserEnvironment) {
                  if (null !== e) {
                    var t = window.document.querySelector(
                      'script[src="'.concat(e, '"]')
                    );
                    null === t
                      ? (((t = window.document.createElement("script")).type =
                          "text/javascript"),
                        (t.src = e),
                        (t.async = !0),
                        t.setAttribute("data-status", "loading"),
                        window.document.body.appendChild(t),
                        t.addEventListener("load", function () {
                          return null === t || void 0 === t
                            ? void 0
                            : t.setAttribute("data-status", "loaded");
                        }),
                        t.addEventListener("error", function () {
                          return null === t || void 0 === t
                            ? void 0
                            : t.setAttribute("data-status", "error");
                        }))
                      : a(
                          "loaded" === t.getAttribute("data-status")
                            ? "Loaded"
                            : "Error"
                        );
                    var n = function (e) {
                      return a("load" === e.type ? "Loaded" : "Error");
                    };
                    return (
                      t.addEventListener("load", n),
                      t.addEventListener("error", n),
                      function () {
                        null !== t &&
                          (t.removeEventListener("load", n),
                          t.removeEventListener("error", n),
                          t.remove());
                      }
                    );
                  }
                  a("Idle");
                }
              },
              [e]
            ),
            n
          );
        };
      },
      340: (e, t, n) => {
        e.exports = n(487);
      },
      352: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(85));
      },
      414: (e, t, n) => {
        e.exports = n(916);
      },
      423: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, a) {
                function l(e) {
                  try {
                    u(r.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function i(e) {
                  try {
                    u(r.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(l, i);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                },
                l = Object.create(
                  ("function" === typeof Iterator ? Iterator : Object).prototype
                );
              return (
                (l.next = i(0)),
                (l.throw = i(1)),
                (l.return = i(2)),
                "function" === typeof Symbol &&
                  (l[Symbol.iterator] = function () {
                    return this;
                  }),
                l
              );
              function i(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; l && ((l = 0), i[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i;
                            break;
                          case 4:
                            return a.label++, { value: i[1], done: !1 };
                          case 5:
                            a.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(o =
                                (o = a.trys).length > 0 && o[o.length - 1]) &&
                              (6 === i[0] || 2 === i[0])
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = i);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(i);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = t.call(e, a);
                      } catch (u) {
                        (i = [6, u]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Unity = void 0);
        var a = n(950),
          l = n(688),
          i = n(169),
          u = (0, a.forwardRef)(function (e, t) {
            var n = (0, a.useState)(null),
              u = n[0],
              s = n[1],
              c = (0, a.useState)(null),
              f = c[0],
              d = c[1],
              p = (0, l.useCanvasIdentifier)(e.id),
              m = p[0],
              h = p[1],
              g = (0, i.useUnityLoader)(e.unityProvider.loaderUrl),
              y = (0, a.useCallback)(
                function (t) {
                  e.unityProvider.setLoadingProgression(t),
                    1 === t && e.unityProvider.setIsLoaded(!0);
                },
                [e.unityProvider]
              );
            return (
              (0, a.useEffect)(
                function () {
                  return (
                    r(void 0, void 0, void 0, function () {
                      var t, n, r, a, l;
                      return o(this, function (o) {
                        switch (o.label) {
                          case 0:
                            if (!u || f || "Loaded" !== g) return [2];
                            console.log(
                              "React Unity WebGL: Initializing Unity instance..."
                            ),
                              e.unityProvider.setUnityInstance(null),
                              d(null),
                              e.unityProvider.setLoadingProgression(0),
                              null ===
                                (l = (a = e.unityProvider).setIsLoaded) ||
                                void 0 === l ||
                                l.call(a, !1),
                              e.unityProvider.setInitialisationError(void 0),
                              h(),
                              (t = {
                                companyName: e.unityProvider.companyName,
                                productName: e.unityProvider.productName,
                                productVersion: e.unityProvider.productVersion,
                                dataUrl: e.unityProvider.dataUrl,
                                frameworkUrl: e.unityProvider.frameworkUrl,
                                codeUrl: e.unityProvider.codeUrl,
                                workerUrl: e.unityProvider.workerUrl,
                                memoryUrl: e.unityProvider.memoryUrl,
                                symbolsUrl: e.unityProvider.symbolsUrl,
                                streamingAssetsUrl:
                                  e.unityProvider.streamingAssetsUrl,
                                devicePixelRatio: e.devicePixelRatio,
                                webglContextAttributes:
                                  e.unityProvider.webglContextAttributes,
                                cacheControl: e.unityProvider.cacheControl,
                                autoSyncPersistentDataPath:
                                  e.unityProvider.autoSyncPersistentDataPath,
                                matchWebGLToCanvasSize:
                                  e.matchWebGLToCanvasSize,
                                disabledCanvasEvents: e.disabledCanvasEvents,
                              }),
                              Object.keys(t).forEach(function (e) {
                                (null !== t[e] && void 0 !== t[e]) ||
                                  delete t[e];
                              }),
                              (o.label = 1);
                          case 1:
                            return (
                              o.trys.push([1, 3, , 4]),
                              [4, window.createUnityInstance(u, t, y)]
                            );
                          case 2:
                            return (
                              (n = o.sent()),
                              d(n),
                              e.unityProvider.setUnityInstance(n),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (r = o.sent()),
                              console.error(
                                "React Unity WebGL: Error initializing Unity instance:",
                                r
                              ),
                              e.unityProvider.setInitialisationError(r),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    }),
                    function () {
                      r(void 0, void 0, void 0, function () {
                        var t, n, r;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              return f && u
                                ? (console.log(
                                    "React Unity WebGL: Detaching Unity instance..."
                                  ),
                                  e.unityProvider.setUnityInstance(null),
                                  d(null),
                                  e.unityProvider.setLoadingProgression(0),
                                  null ===
                                    (r = (n = e.unityProvider).setIsLoaded) ||
                                    void 0 === r ||
                                    r.call(n, !1),
                                  e.unityProvider.setInitialisationError(
                                    void 0
                                  ),
                                  ((t = document.createElement("canvas")).id =
                                    u.id),
                                  t.setAttribute(
                                    "react-unity-webgl-role",
                                    "cleanup"
                                  ),
                                  (t.style.display = "none"),
                                  document.body.appendChild(t),
                                  (f.Module.canvas = t),
                                  d(null),
                                  [4, f.Quit()])
                                : [2];
                            case 1:
                              return (
                                o.sent(), document.body.removeChild(t), [2]
                              );
                          }
                        });
                      });
                    }
                  );
                },
                [u, f, g, e.unityProvider]
              ),
              (0, a.useImperativeHandle)(t, function () {
                return u;
              }),
              (0, a.createElement)("canvas", {
                ref: s,
                id: m,
                style: e.style,
                className: e.className,
                tabIndex: e.tabIndex,
              })
            );
          });
        t.Unity = u;
      },
      446: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBrowserEnvironment = void 0),
          (t.isBrowserEnvironment =
            "undefined" !== typeof window && "undefined" !== typeof document);
      },
      487: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > a(u, n))
                s < o && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          y = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          w = "undefined" !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), S(e), !h))
            if (null !== r(s)) (h = !0), C || ((C = !0), E());
            else {
              var t = r(c);
              null !== t && _(k, t.startTime - e);
            }
        }
        var E,
          C = !1,
          I = -1,
          P = 5,
          x = -1;
        function T() {
          return !!y || !(t.unstable_now() - x < P);
        }
        function A() {
          if (((y = !1), C)) {
            var e = t.unstable_now();
            x = e;
            var n = !0;
            try {
              e: {
                (h = !1), g && ((g = !1), b(I), (I = -1)), (m = !0);
                var a = p;
                try {
                  t: {
                    for (
                      S(e), d = r(s);
                      null !== d && !(d.expirationTime > e && T());

                    ) {
                      var l = d.callback;
                      if ("function" === typeof l) {
                        (d.callback = null), (p = d.priorityLevel);
                        var i = l(d.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof i)) {
                          (d.callback = i), S(e), (n = !0);
                          break t;
                        }
                        d === r(s) && o(s), S(e);
                      } else o(s);
                      d = r(s);
                    }
                    if (null !== d) n = !0;
                    else {
                      var u = r(c);
                      null !== u && _(k, u.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (d = null), (p = a), (m = !1);
                }
                n = void 0;
              }
            } finally {
              n ? E() : (C = !1);
            }
          }
        }
        if ("function" === typeof w)
          E = function () {
            w(A);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            N = O.port2;
          (O.port1.onmessage = A),
            (E = function () {
              N.postMessage(null);
            });
        } else
          E = function () {
            v(A, 0);
          };
        function _(e, n) {
          I = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            y = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? l + a : l)
                : (a = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (b(I), (I = -1)) : (g = !0), _(k, a - l)))
                : ((e.sortIndex = i),
                  n(s, e),
                  h || m || ((h = !0), C || ((C = !0), E()))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      504: (e, t, n) => {
        n.d(t, { A: () => u });
        var r = n(950),
          o = n(641),
          a = n(532),
          l = n(609),
          i = n(569);
        const u = function () {
          const [e, t] = (0, r.useState)(!1),
            [n, u] = (0, r.useState)(!1),
            [s, c] = (0, r.useState)(!1),
            [f, d] = (0, r.useState)([]),
            p = (0, r.useRef)(null),
            { updateVideoPlacementMap: m } = (0, a.$)(),
            h = (0, r.useCallback)(
              (e, t) => {
                m(e, t);
              },
              [m]
            ),
            g = (0, o.T)(),
            y = (0, r.useCallback)(
              (e) =>
                Array.from(f)
                  .filter((t) => t.placementId === e)
                  .pop(),
              [f]
            ),
            { init: v } = (0, i.X6)();
          (0, r.useEffect)(() => {
            e &&
              v &&
              v(
                (e) =>
                  window.CrazyGames.SDK.user
                    .getUser()
                    .then(
                      (t) => (
                        console.log(
                          "Get user result shouldLogin:".concat(e.shouldLogin),
                          t,
                          !t && e.shouldLogin
                        ),
                        !t && e.shouldLogin
                          ? window.CrazyGames.SDK.user
                              .showAuthPrompt()
                              .then((e) => {
                                if (!e) throw Error("failed to login");
                              })
                          : Promise.resolve()
                      )
                    )
                    .then(() => {
                      if ("local" !== window.CrazyGames.SDK.environment)
                        return window.CrazyGames.SDK.user.getXsollaUserToken();
                      if (
                        {
                          NODE_ENV: "production",
                          PUBLIC_URL: ".",
                          WDS_SOCKET_HOST: void 0,
                          WDS_SOCKET_PATH: void 0,
                          WDS_SOCKET_PORT: void 0,
                          FAST_REFRESH: !0,
                          REACT_APP_SDK_ADAPTER: "crazygames",
                          REACT_APP_CONFIG_JSON:
                            "ewogICJidWlsZE5hbWUiOiAibWFnZXRvd2VyIiwKICAibmFtZSI6ICJNYWdlIFRvd2VyIElkbGUgRGVmZW5zZSIsCiAgInZlcnNpb24iOiAiMS4wLjQ4Zjc2MmNhIiwKICAicGxhdGZvcm0iOiAiY3JhenlnYW1lcyIsCiAgInVuaXR5R2FtZUNvbmZpZyI6IHsKICAgICJsb2FkZXJTY3JpcHRVcmwiOiAiLi9hc3NldHMvTWFnZVRvd2VyLjQ4Zjc2MmNhLmxvYWRlci5qcyIsCiAgICAiZGF0YVVybCI6ICIuL2Fzc2V0cy9NYWdlVG93ZXIuNDhmNzYyY2EuZGF0YS5iciIsCiAgICAiZnJhbWV3b3JrVXJsIjogIi4vYXNzZXRzL01hZ2VUb3dlci40OGY3NjJjYS5mcmFtZXdvcmsuanMuYnIiLAogICAgImNvZGVVcmwiOiAiLi9hc3NldHMvTWFnZVRvd2VyLjQ4Zjc2MmNhLndhc20uYnIiLAogICAgInN0cmVhbWluZ0Fzc2V0c1VybCI6ICJTdHJlYW1pbmdBc3NldHMiLAogICAgImZsYWdzIjogWwogICAgICAibm9fc2lkZXBhbmVsIgogICAgXQogIH0sCiAgImdhQ29uZmlnIjogewogICAgImdhbWVLZXkiOiAiMzZmZTAxNzJhNGY4NGNmNGI2ZWUwNTg4MTIwYzY2ZGMiLAogICAgInNlY3JldEtleSI6ICI3MTI0ZWY1Yzk5ZDUzODZkZmEzMjhmNWZmYjIxY2RjZWFhNGZlMTAxIgogIH0sCiAgInZpZGVvQ29uZmlnIjogWwogICAgeyAicGxhY2VtZW50SWQiOiAibGV2ZWxfdXBfeDMiLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiaWFwX2ZyZWVfZ2VtIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImdhbWVfZW5kX3NvdWxzIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogInF1ZXN0X3JlZnJlc2giLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiZ2FtZV9zdGFydF9jbGljayIsICJ0eXBlIjogImludGVyc3RpdGlhbCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAibWFpbl9tZW51X2NoZXN0IiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImdhbWVwbGF5X2NoZXN0IiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImJvc3NfcmVyb2xsIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogIm1pbmluZ19waWNrIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogIm1hcmtldF9mcmVlX3Nsb3QiLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiZXZlbnRfZnJlZSIsICJ0eXBlIjogInJld2FyZGVkIn0KICBdLAogICJ4c29sbGEiOiB7CiAgICAicHJvamVjdElkIjogIjI5NTU2OSIsCiAgICAic2FuZGJveCI6IGZhbHNlCiAgfQp9Cg==",
                          REACT_APP_GAME_VERSION: "48f762ca",
                          REACT_APP_SITE_DESCRIPTION: "Mage Tower Idle Defense",
                          REACT_APP_VERSION: "a3be6eb4",
                          REACT_APP_SITE_TITLE: "Mage Tower Idle Defense",
                        }.REACT_APP_XSOLLA_USER_TOKEN
                      )
                        return Promise.resolve(
                          {
                            NODE_ENV: "production",
                            PUBLIC_URL: ".",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                            REACT_APP_SDK_ADAPTER: "crazygames",
                            REACT_APP_CONFIG_JSON:
                              "ewogICJidWlsZE5hbWUiOiAibWFnZXRvd2VyIiwKICAibmFtZSI6ICJNYWdlIFRvd2VyIElkbGUgRGVmZW5zZSIsCiAgInZlcnNpb24iOiAiMS4wLjQ4Zjc2MmNhIiwKICAicGxhdGZvcm0iOiAiY3JhenlnYW1lcyIsCiAgInVuaXR5R2FtZUNvbmZpZyI6IHsKICAgICJsb2FkZXJTY3JpcHRVcmwiOiAiLi9hc3NldHMvTWFnZVRvd2VyLjQ4Zjc2MmNhLmxvYWRlci5qcyIsCiAgICAiZGF0YVVybCI6ICIuL2Fzc2V0cy9NYWdlVG93ZXIuNDhmNzYyY2EuZGF0YS5iciIsCiAgICAiZnJhbWV3b3JrVXJsIjogIi4vYXNzZXRzL01hZ2VUb3dlci40OGY3NjJjYS5mcmFtZXdvcmsuanMuYnIiLAogICAgImNvZGVVcmwiOiAiLi9hc3NldHMvTWFnZVRvd2VyLjQ4Zjc2MmNhLndhc20uYnIiLAogICAgInN0cmVhbWluZ0Fzc2V0c1VybCI6ICJTdHJlYW1pbmdBc3NldHMiLAogICAgImZsYWdzIjogWwogICAgICAibm9fc2lkZXBhbmVsIgogICAgXQogIH0sCiAgImdhQ29uZmlnIjogewogICAgImdhbWVLZXkiOiAiMzZmZTAxNzJhNGY4NGNmNGI2ZWUwNTg4MTIwYzY2ZGMiLAogICAgInNlY3JldEtleSI6ICI3MTI0ZWY1Yzk5ZDUzODZkZmEzMjhmNWZmYjIxY2RjZWFhNGZlMTAxIgogIH0sCiAgInZpZGVvQ29uZmlnIjogWwogICAgeyAicGxhY2VtZW50SWQiOiAibGV2ZWxfdXBfeDMiLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiaWFwX2ZyZWVfZ2VtIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImdhbWVfZW5kX3NvdWxzIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogInF1ZXN0X3JlZnJlc2giLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiZ2FtZV9zdGFydF9jbGljayIsICJ0eXBlIjogImludGVyc3RpdGlhbCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAibWFpbl9tZW51X2NoZXN0IiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImdhbWVwbGF5X2NoZXN0IiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogImJvc3NfcmVyb2xsIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogIm1pbmluZ19waWNrIiwgInR5cGUiOiAicmV3YXJkZWQifSwKICAgIHsgInBsYWNlbWVudElkIjogIm1hcmtldF9mcmVlX3Nsb3QiLCAidHlwZSI6ICJyZXdhcmRlZCJ9LAogICAgeyAicGxhY2VtZW50SWQiOiAiZXZlbnRfZnJlZSIsICJ0eXBlIjogInJld2FyZGVkIn0KICBdLAogICJ4c29sbGEiOiB7CiAgICAicHJvamVjdElkIjogIjI5NTU2OSIsCiAgICAic2FuZGJveCI6IGZhbHNlCiAgfQp9Cg==",
                            REACT_APP_GAME_VERSION: "48f762ca",
                            REACT_APP_SITE_DESCRIPTION:
                              "Mage Tower Idle Defense",
                            REACT_APP_VERSION: "a3be6eb4",
                            REACT_APP_SITE_TITLE: "Mage Tower Idle Defense",
                          }.REACT_APP_XSOLLA_USER_TOKEN
                        );
                      throw Error("no user xsolla token available");
                    }),
                (e) => {
                  window.CrazyGames.SDK.analytics.trackOrder("xsolla", e);
                }
              );
          }, [e, v]),
            (0, r.useEffect)(() => {
              if (e)
                return (
                  console.log("initing storage interface"),
                  (window._jbsStorageBridge = {
                    clear: () => {
                      window.CrazyGames.SDK.data.clear();
                    },
                    getItem: (e) => window.CrazyGames.SDK.data.getItem(e),
                    removeItem: (e) => {
                      window.CrazyGames.SDK.data.removeItem(e);
                    },
                    setItem: (e, t) => {
                      window.CrazyGames.SDK.data.setItem(e, t);
                    },
                  }),
                  () => {
                    console.log("reseting storage interface"),
                      (window._jbsStorageBridge = {
                        clear: () => {
                          localStorage.clear();
                        },
                        getItem: (e) => localStorage.getItem(e),
                        removeItem: (e) => {
                          localStorage.removeItem(e);
                        },
                        setItem: (e, t) => {
                          localStorage.setItem(e, t);
                        },
                      });
                  }
                );
            }, [e]),
            (0, r.useEffect)(() => {
              e && console.log("crazy-games-adapter: inited");
            }, [e]);
          const { setDeviceType: b } = (0, l.$)();
          (0, r.useEffect)(() => {
            var t;
            if (!e) return;
            const n = window.CrazyGames.SDK.user.systemInfo;
            var r, o;
            null !== n &&
              void 0 !== n &&
              null !== (t = n.device) &&
              void 0 !== t &&
              t.type &&
              (console.log(
                "Got device type:",
                null === n ||
                  void 0 === n ||
                  null === (r = n.device) ||
                  void 0 === r
                  ? void 0
                  : r.type
              ),
              b(
                null === n ||
                  void 0 === n ||
                  null === (o = n.device) ||
                  void 0 === o
                  ? void 0
                  : o.type
              ));
          }, [e, b]),
            (0, r.useEffect)(() => {
              e &&
                (console.log("videoConfig Update..."),
                f.forEach((e) => {
                  h(e.placementId, {
                    isPlayable: !0,
                    isRewarded: "rewarded" === e.type,
                    placementId: e.placementId,
                    isPlaying: !1,
                    isLoading: !1,
                  }),
                    g.emit("onVideoStateChanged", e.placementId, !0);
                }));
            }, [h, e, g, f]);
          const w = (0, r.useCallback)(
              (e) => {
                g.emit("onVideoRequested", e);
              },
              [g]
            ),
            S = (0, r.useCallback)(
              (e) => {
                g.emit("onVideoStart", e);
              },
              [g]
            ),
            k = (0, r.useCallback)(
              (e, t, n) => {
                g.emit("onVideoFinished", e, t, n);
              },
              [g]
            ),
            E = (0, r.useCallback)(
              (e) => {
                const t = y(e);
                if (!t)
                  return (
                    console.log("".concat(e, ":>adError no placement")),
                    void k(e, !1, !1)
                  );
                const n =
                  "rewarded" === (r = t.type)
                    ? "rewarded"
                    : "interstitial" === r
                    ? "midgame"
                    : null;
                var r;
                if (!n)
                  return (
                    console.log(
                      ""
                        .concat(e, ":>adError ")
                        .concat(t.type, " unknown video type")
                    ),
                    void k(e, !1, !1)
                  );
                const o = "rewarded" === t.type;
                console.log(
                  ""
                    .concat(e, ":>Requesting type:")
                    .concat(t.type, " --\x3e type:")
                    .concat(n)
                ),
                  w(e),
                  window.CrazyGames.SDK.ad.requestAd(n, {
                    adError: (n) => {
                      console.log("".concat(e, ":>adError ").concat(n)),
                        k(t.placementId, o, !1);
                    },
                    adFinished: () => {
                      console.log("".concat(e, ":>adFinished")), 
                        k(t.placementId, o, !0);
                    },
                    adStarted: () => {
                      console.log("".concat(e, ":>adStarted")),
                        S(t.placementId);
                    },
                  });
              },
              [k, S, w, y]
            );
          (0, r.useEffect)(() => {
            let r = !0;
            if (n && !e) {
              (async () => {
                console.log("SDK.init..."),
                  await window.CrazyGames.SDK.init(),
                  console.log(
                    "SDK.init detected environment: ".concat(
                      window.CrazyGames.SDK.environment
                    )
                  ),
                  console.log("SDK.init... done"),
                  r && t(!0);
              })();
            }
            return () => {
              r = !1;
            };
          }, [n, e]);
          const C = (0, r.useCallback)(() => {
            console.log("SDK loaded"), u(!0);
          }, []);
          (0, r.useEffect)(() => {
            if (!s) return;
            const e = "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@cd4f4dfa410ede318dd4248ff5ffa94083249cd8/toy-rider/cg-sdk.js#L4";
            if (document.querySelector('script[src="'.concat(e, '"]'))) return;
            const t = document.createElement("script");
            return (
              (t.src = e),
              (t.onload = C),
              (t.async = !0),
              document.body.appendChild(t),
              () => {
                document.body.removeChild(t);
              }
            );
          }, [s, C]);
          const I = (0, r.useCallback)(() => {
              console.log("onGameplayStart"),
                window.CrazyGames.SDK.game.gameplayStart();
            }, []),
            P = (0, r.useCallback)(() => {
              console.log("onGameplayStop"),
                window.CrazyGames.SDK.game.gameplayStop();
            }, []),
            x = (0, r.useCallback)(() => {
              console.log("onLoadingStart"),
                window.CrazyGames.SDK.game.loadingStart();
            }, []),
            T = (0, r.useCallback)(() => {
              console.log("onLoadingStop"),
                window.CrazyGames.SDK.game.loadingStop();
            }, []),
            A = (0, r.useCallback)(() => {
              console.log("onHappytime"),
                window.CrazyGames.SDK.game.happytime();
            }, []);
          (0, r.useEffect)(() => {
            e && p.current && (console.log("is SDK Loaded"), p.current());
          }, [p, e]);
          const O = (0, r.useCallback)(
            (e, t) => {
              s || ((p.current = t), d(e), c(!0));
            },
            [s]
          );
          return {
            onPlayVideo: E,
            onGameplayStart: I,
            onGameplayStop: P,
            onLoadingStop: T,
            onLoadingStart: x,
            onHappyTime: A,
            onInit: O,
          };
        };
      },
      532: (e, t, n) => {
        n.d(t, { O: () => i, $: () => u });
        var r = n(950),
          o = n(641);
        var a = n(414);
        const l = (0, r.createContext)({}),
          i = (e) => {
            let { children: t } = e;
            const n = (function () {
              const [e, t] = (0, r.useState)(() => new Map()),
                n = (0, o.T)(),
                a = (0, r.useCallback)((e, n) => {
                  t((t) => new Map(t.set(e, n)));
                }, []),
                l = (0, r.useCallback)((e, n) => {
                  t((t) => {
                    const r = t.get(e);
                    return r ? ((r.isLoading = n), new Map(t.set(e, r))) : t;
                  });
                }, []),
                i = (0, r.useCallback)((e, n) => {
                  t((t) => {
                    const r = t.get(e);
                    return r ? ((r.isPlayable = n), new Map(t.set(e, r))) : t;
                  });
                }, []),
                u = (0, r.useCallback)((e, n) => {
                  t((t) => {
                    const r = t.get(e);
                    return r ? ((r.isPlaying = n), new Map(t.set(e, r))) : t;
                  });
                }, []);
              return (
                (0, r.useEffect)(
                  () =>
                    n.on("onVideoStateChanged", (e, t) => {
                      i(e, t);
                    }),
                  [n, i]
                ),
                (0, r.useEffect)(
                  () =>
                    n.on("onVideoRequested", (e) => {
                      l(e, !0);
                    }),
                  [n, l]
                ),
                (0, r.useEffect)(
                  () =>
                    n.on("onVideoStart", (e) => {
                      u(e, !0), l(e, !1);
                    }),
                  [n, u, l]
                ),
                (0, r.useEffect)(
                  () =>
                    n.on("onVideoFinished", (e) => {
                      u(e, !1);
                    }),
                  [n, u]
                ),
                (0, r.useEffect)(() => {
                  n.emit("onVideoStatesChanged", Array.from(e.values()));
                }, [n, e]),
                {
                  updateVideoPlacementMap: a,
                  getState: (0, r.useCallback)(
                    () => Array.from(e.values()),
                    [e]
                  ),
                }
              );
            })();
            return (0, a.jsx)(l.Provider, { value: n, children: t });
          },
          u = () => (0, r.useContext)(l);
      },
      569: (e, t, n) => {
        n.d(t, { ST: () => Zt, X6: () => qt });
        var r = {};
        n.r(r),
          n.d(r, {
            hasBrowserEnv: () => he,
            hasStandardBrowserEnv: () => ye,
            hasStandardBrowserWebWorkerEnv: () => ve,
            navigator: () => ge,
            origin: () => be,
          });
        var o = n(950);
        function a(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const { toString: l } = Object.prototype,
          { getPrototypeOf: i } = Object,
          { iterator: u, toStringTag: s } = Symbol,
          c =
            ((f = Object.create(null)),
            (e) => {
              const t = l.call(e);
              return f[t] || (f[t] = t.slice(8, -1).toLowerCase());
            });
        var f;
        const d = (e) => ((e = e.toLowerCase()), (t) => c(t) === e),
          p = (e) => (t) => typeof t === e,
          { isArray: m } = Array,
          h = p("undefined");
        function g(e) {
          return (
            null !== e &&
            !h(e) &&
            null !== e.constructor &&
            !h(e.constructor) &&
            b(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        }
        const y = d("ArrayBuffer");
        const v = p("string"),
          b = p("function"),
          w = p("number"),
          S = (e) => null !== e && "object" === typeof e,
          k = (e) => {
            if ("object" !== c(e)) return !1;
            const t = i(e);
            return (
              (null === t ||
                t === Object.prototype ||
                null === Object.getPrototypeOf(t)) &&
              !(s in e) &&
              !(u in e)
            );
          },
          E = d("Date"),
          C = d("File"),
          I = d("Blob"),
          P = d("FileList"),
          x = d("URLSearchParams"),
          [T, A, O, N] = [
            "ReadableStream",
            "Request",
            "Response",
            "Headers",
          ].map(d);
        function _(e, t) {
          let n,
            r,
            { allOwnKeys: o = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (null !== e && "undefined" !== typeof e)
            if (("object" !== typeof e && (e = [e]), m(e)))
              for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else {
              if (g(e)) return;
              const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
                a = r.length;
              let l;
              for (n = 0; n < a; n++) (l = r[n]), t.call(null, e[l], l, e);
            }
        }
        function R(e, t) {
          if (g(e)) return null;
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const L =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof self
              ? self
              : "undefined" !== typeof window
              ? window
              : global,
          z = (e) => !h(e) && e !== L;
        const D =
          ((j = "undefined" !== typeof Uint8Array && i(Uint8Array)),
          (e) => j && e instanceof j);
        var j;
        const U = d("HTMLFormElement"),
          F = ((e) => {
            let { hasOwnProperty: t } = e;
            return (e, n) => t.call(e, n);
          })(Object.prototype),
          M = d("RegExp"),
          V = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            _(n, (n, o) => {
              let a;
              !1 !== (a = t(n, o, e)) && (r[o] = a || n);
            }),
              Object.defineProperties(e, r);
          };
        const W = d("AsyncFunction"),
          H = ((e, t) => {
            return e
              ? setImmediate
              : t
              ? ((n = "axios@".concat(Math.random())),
                (r = []),
                L.addEventListener(
                  "message",
                  (e) => {
                    let { source: t, data: o } = e;
                    t === L && o === n && r.length && r.shift()();
                  },
                  !1
                ),
                (e) => {
                  r.push(e), L.postMessage(n, "*");
                })
              : (e) => setTimeout(e);
            var n, r;
          })("function" === typeof setImmediate, b(L.postMessage)),
          B =
            "undefined" !== typeof queueMicrotask
              ? queueMicrotask.bind(L)
              : ("undefined" !== typeof process && process.nextTick) || H,
          G = {
            isArray: m,
            isArrayBuffer: y,
            isBuffer: g,
            isFormData: (e) => {
              let t;
              return (
                e &&
                (("function" === typeof FormData && e instanceof FormData) ||
                  (b(e.append) &&
                    ("formdata" === (t = c(e)) ||
                      ("object" === t &&
                        b(e.toString) &&
                        "[object FormData]" === e.toString()))))
              );
            },
            isArrayBufferView: function (e) {
              let t;
              return (
                (t =
                  "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e && e.buffer && y(e.buffer)),
                t
              );
            },
            isString: v,
            isNumber: w,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: S,
            isPlainObject: k,
            isEmptyObject: (e) => {
              if (!S(e) || g(e)) return !1;
              try {
                return (
                  0 === Object.keys(e).length &&
                  Object.getPrototypeOf(e) === Object.prototype
                );
              } catch (t) {
                return !1;
              }
            },
            isReadableStream: T,
            isRequest: A,
            isResponse: O,
            isHeaders: N,
            isUndefined: h,
            isDate: E,
            isFile: C,
            isBlob: I,
            isRegExp: M,
            isFunction: b,
            isStream: (e) => S(e) && b(e.pipe),
            isURLSearchParams: x,
            isTypedArray: D,
            isFileList: P,
            forEach: _,
            merge: function e() {
              const { caseless: t, skipUndefined: n } = (z(this) && this) || {},
                r = {},
                o = (o, a) => {
                  const l = (t && R(r, a)) || a;
                  k(r[l]) && k(o)
                    ? (r[l] = e(r[l], o))
                    : k(o)
                    ? (r[l] = e({}, o))
                    : m(o)
                    ? (r[l] = o.slice())
                    : (n && h(o)) || (r[l] = o);
                };
              for (let a = 0, l = arguments.length; a < l; a++)
                arguments[a] && _(arguments[a], o);
              return r;
            },
            extend: function (e, t, n) {
              let { allOwnKeys: r } =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              return (
                _(
                  t,
                  (t, r) => {
                    n && b(t) ? (e[r] = a(t, n)) : (e[r] = t);
                  },
                  { allOwnKeys: r }
                ),
                e
              );
            },
            trim: (e) =>
              e.trim
                ? e.trim()
                : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
              (e.prototype = Object.create(t.prototype, r)),
                (e.prototype.constructor = e),
                Object.defineProperty(e, "super", { value: t.prototype }),
                n && Object.assign(e.prototype, n);
            },
            toFlatObject: (e, t, n, r) => {
              let o, a, l;
              const u = {};
              if (((t = t || {}), null == e)) return t;
              do {
                for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
                  (l = o[a]),
                    (r && !r(l, e, t)) || u[l] || ((t[l] = e[l]), (u[l] = !0));
                e = !1 !== n && i(e);
              } while (e && (!n || n(e, t)) && e !== Object.prototype);
              return t;
            },
            kindOf: c,
            kindOfTest: d,
            endsWith: (e, t, n) => {
              (e = String(e)),
                (void 0 === n || n > e.length) && (n = e.length),
                (n -= t.length);
              const r = e.indexOf(t, n);
              return -1 !== r && r === n;
            },
            toArray: (e) => {
              if (!e) return null;
              if (m(e)) return e;
              let t = e.length;
              if (!w(t)) return null;
              const n = new Array(t);
              for (; t-- > 0; ) n[t] = e[t];
              return n;
            },
            forEachEntry: (e, t) => {
              const n = (e && e[u]).call(e);
              let r;
              for (; (r = n.next()) && !r.done; ) {
                const n = r.value;
                t.call(e, n[0], n[1]);
              }
            },
            matchAll: (e, t) => {
              let n;
              const r = [];
              for (; null !== (n = e.exec(t)); ) r.push(n);
              return r;
            },
            isHTMLForm: U,
            hasOwnProperty: F,
            hasOwnProp: F,
            reduceDescriptors: V,
            freezeMethods: (e) => {
              V(e, (t, n) => {
                if (b(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                  return !1;
                const r = e[n];
                b(r) &&
                  ((t.enumerable = !1),
                  "writable" in t
                    ? (t.writable = !1)
                    : t.set ||
                      (t.set = () => {
                        throw Error(
                          "Can not rewrite read-only method '" + n + "'"
                        );
                      }));
              });
            },
            toObjectSet: (e, t) => {
              const n = {},
                r = (e) => {
                  e.forEach((e) => {
                    n[e] = !0;
                  });
                };
              return m(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: (e) =>
              e
                .toLowerCase()
                .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                  return t.toUpperCase() + n;
                }),
            noop: () => {},
            toFiniteNumber: (e, t) =>
              null != e && Number.isFinite((e = +e)) ? e : t,
            findKey: R,
            global: L,
            isContextDefined: z,
            isSpecCompliantForm: function (e) {
              return !!(e && b(e.append) && "FormData" === e[s] && e[u]);
            },
            toJSONObject: (e) => {
              const t = new Array(10),
                n = (e, r) => {
                  if (S(e)) {
                    if (t.indexOf(e) >= 0) return;
                    if (g(e)) return e;
                    if (!("toJSON" in e)) {
                      t[r] = e;
                      const o = m(e) ? [] : {};
                      return (
                        _(e, (e, t) => {
                          const a = n(e, r + 1);
                          !h(a) && (o[t] = a);
                        }),
                        (t[r] = void 0),
                        o
                      );
                    }
                  }
                  return e;
                };
              return n(e, 0);
            },
            isAsyncFn: W,
            isThenable: (e) => e && (S(e) || b(e)) && b(e.then) && b(e.catch),
            setImmediate: H,
            asap: B,
            isIterable: (e) => null != e && b(e[u]),
          };
        function Z(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o &&
              ((this.response = o), (this.status = o.status ? o.status : null));
        }
        G.inherits(Z, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: G.toJSONObject(this.config),
              code: this.code,
              status: this.status,
            };
          },
        });
        const q = Z.prototype,
          X = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          X[e] = { value: e };
        }),
          Object.defineProperties(Z, X),
          Object.defineProperty(q, "isAxiosError", { value: !0 }),
          (Z.from = (e, t, n, r, o, a) => {
            const l = Object.create(q);
            G.toFlatObject(
              e,
              l,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            );
            const i = e && e.message ? e.message : "Error",
              u = null == t && e ? e.code : t;
            return (
              Z.call(l, i, u, n, r, o),
              e &&
                null == l.cause &&
                Object.defineProperty(l, "cause", {
                  value: e,
                  configurable: !0,
                }),
              (l.name = (e && e.name) || "Error"),
              a && Object.assign(l, a),
              l
            );
          });
        const K = Z;
        function Q(e) {
          return G.isPlainObject(e) || G.isArray(e);
        }
        function Y(e) {
          return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function J(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = Y(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        const $ = G.toFlatObject(G, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        const ee = function (e, t, n) {
          if (!G.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const r = (n = G.toFlatObject(
              n,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !G.isUndefined(t[e]);
              }
            )).metaTokens,
            o = n.visitor || s,
            a = n.dots,
            l = n.indexes,
            i =
              (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
              G.isSpecCompliantForm(t);
          if (!G.isFunction(o))
            throw new TypeError("visitor must be a function");
          function u(e) {
            if (null === e) return "";
            if (G.isDate(e)) return e.toISOString();
            if (G.isBoolean(e)) return e.toString();
            if (!i && G.isBlob(e))
              throw new K("Blob is not supported. Use a Buffer instead.");
            return G.isArrayBuffer(e) || G.isTypedArray(e)
              ? i && "function" === typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          function s(e, n, o) {
            let i = e;
            if (e && !o && "object" === typeof e)
              if (G.endsWith(n, "{}"))
                (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (G.isArray(e) &&
                  (function (e) {
                    return G.isArray(e) && !e.some(Q);
                  })(e)) ||
                ((G.isFileList(e) || G.endsWith(n, "[]")) && (i = G.toArray(e)))
              )
                return (
                  (n = Y(n)),
                  i.forEach(function (e, r) {
                    !G.isUndefined(e) &&
                      null !== e &&
                      t.append(
                        !0 === l ? J([n], r, a) : null === l ? n : n + "[]",
                        u(e)
                      );
                  }),
                  !1
                );
            return !!Q(e) || (t.append(J(o, n, a), u(e)), !1);
          }
          const c = [],
            f = Object.assign($, {
              defaultVisitor: s,
              convertValue: u,
              isVisitable: Q,
            });
          if (!G.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function e(n, r) {
              if (!G.isUndefined(n)) {
                if (-1 !== c.indexOf(n))
                  throw Error("Circular reference detected in " + r.join("."));
                c.push(n),
                  G.forEach(n, function (n, a) {
                    !0 ===
                      (!(G.isUndefined(n) || null === n) &&
                        o.call(t, n, G.isString(a) ? a.trim() : a, r, f)) &&
                      e(n, r ? r.concat(a) : [a]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        };
        function te(e) {
          const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'()~]|%20|%00/g,
            function (e) {
              return t[e];
            }
          );
        }
        function ne(e, t) {
          (this._pairs = []), e && ee(e, this, t);
        }
        const re = ne.prototype;
        (re.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (re.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, te);
                }
              : te;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        const oe = ne;
        function ae(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+");
        }
        function le(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || ae;
          G.isFunction(n) && (n = { serialize: n });
          const o = n && n.serialize;
          let a;
          if (
            ((a = o
              ? o(t, n)
              : G.isURLSearchParams(t)
              ? t.toString()
              : new oe(t, n).toString(r)),
            a)
          ) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
          }
          return e;
        }
        const ie = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              G.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          ue = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          };
        function se(e) {
          return (
            (se =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            se(e)
          );
        }
        function ce(e) {
          var t = (function (e, t) {
            if ("object" != se(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != se(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == se(t) ? t : t + "";
        }
        function fe(e, t, n) {
          return (
            (t = ce(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function de(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function pe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? de(Object(n), !0).forEach(function (t) {
                  fe(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : de(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const me = {
            isBrowser: !0,
            classes: {
              URLSearchParams:
                "undefined" !== typeof URLSearchParams ? URLSearchParams : oe,
              FormData: "undefined" !== typeof FormData ? FormData : null,
              Blob: "undefined" !== typeof Blob ? Blob : null,
            },
            protocols: ["http", "https", "file", "blob", "url", "data"],
          },
          he = "undefined" !== typeof window && "undefined" !== typeof document,
          ge = ("object" === typeof navigator && navigator) || void 0,
          ye =
            he &&
            (!ge ||
              ["ReactNative", "NativeScript", "NS"].indexOf(ge.product) < 0),
          ve =
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          be = (he && window.location.href) || "http://localhost",
          we = pe(pe({}, r), me);
        const Se = function (e) {
          function t(e, n, r, o) {
            let a = e[o++];
            if ("__proto__" === a) return !0;
            const l = Number.isFinite(+a),
              i = o >= e.length;
            if (((a = !a && G.isArray(r) ? r.length : a), i))
              return G.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !l;
            (r[a] && G.isObject(r[a])) || (r[a] = []);
            return (
              t(e, n, r[a], o) &&
                G.isArray(r[a]) &&
                (r[a] = (function (e) {
                  const t = {},
                    n = Object.keys(e);
                  let r;
                  const o = n.length;
                  let a;
                  for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
                  return t;
                })(r[a])),
              !l
            );
          }
          if (G.isFormData(e) && G.isFunction(e.entries)) {
            const n = {};
            return (
              G.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return G.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                      "[]" === e[0] ? "" : e[1] || e[0]
                    );
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        };
        const ke = {
          transitional: ue,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (e, t) {
              const n = t.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                o = G.isObject(e);
              o && G.isHTMLForm(e) && (e = new FormData(e));
              if (G.isFormData(e)) return r ? JSON.stringify(Se(e)) : e;
              if (
                G.isArrayBuffer(e) ||
                G.isBuffer(e) ||
                G.isStream(e) ||
                G.isFile(e) ||
                G.isBlob(e) ||
                G.isReadableStream(e)
              )
                return e;
              if (G.isArrayBufferView(e)) return e.buffer;
              if (G.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              let a;
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (e, t) {
                    return ee(
                      e,
                      new we.classes.URLSearchParams(),
                      pe(
                        {
                          visitor: function (e, t, n, r) {
                            return we.isNode && G.isBuffer(e)
                              ? (this.append(t, e.toString("base64")), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          },
                        },
                        t
                      )
                    );
                  })(e, this.formSerializer).toString();
                if (
                  (a = G.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  const t = this.env && this.env.FormData;
                  return ee(
                    a ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return o || r
                ? (t.setContentType("application/json", !1),
                  (function (e, t, n) {
                    if (G.isString(e))
                      try {
                        return (t || JSON.parse)(e), G.trim(e);
                      } catch (r) {
                        if ("SyntaxError" !== r.name) throw r;
                      }
                    return (n || JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              const t = this.transitional || ke.transitional,
                n = t && t.forcedJSONParsing,
                r = "json" === this.responseType;
              if (G.isResponse(e) || G.isReadableStream(e)) return e;
              if (e && G.isString(e) && ((n && !this.responseType) || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                  return JSON.parse(e, this.parseReviver);
                } catch (o) {
                  if (n) {
                    if ("SyntaxError" === o.name)
                      throw K.from(
                        o,
                        K.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw o;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: we.classes.FormData, Blob: we.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
        G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
          ke.headers[e] = {};
        });
        const Ee = ke,
          Ce = G.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          Ie = Symbol("internals");
        function Pe(e) {
          return e && String(e).trim().toLowerCase();
        }
        function xe(e) {
          return !1 === e || null == e
            ? e
            : G.isArray(e)
            ? e.map(xe)
            : String(e);
        }
        function Te(e, t, n, r, o) {
          return G.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n),
              G.isString(t)
                ? G.isString(r)
                  ? -1 !== t.indexOf(r)
                  : G.isRegExp(r)
                  ? r.test(t)
                  : void 0
                : void 0);
        }
        class Ae {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = Pe(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const a = G.findKey(r, o);
              (!a ||
                void 0 === r[a] ||
                !0 === n ||
                (void 0 === n && !1 !== r[a])) &&
                (r[a || t] = xe(e));
            }
            const a = (e, t) => G.forEach(e, (e, n) => o(e, n, t));
            if (G.isPlainObject(e) || e instanceof this.constructor) a(e, t);
            else if (
              G.isString(e) &&
              (e = e.trim()) &&
              !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
            )
              a(
                ((e) => {
                  const t = {};
                  let n, r, o;
                  return (
                    e &&
                      e.split("\n").forEach(function (e) {
                        (o = e.indexOf(":")),
                          (n = e.substring(0, o).trim().toLowerCase()),
                          (r = e.substring(o + 1).trim()),
                          !n ||
                            (t[n] && Ce[n]) ||
                            ("set-cookie" === n
                              ? t[n]
                                ? t[n].push(r)
                                : (t[n] = [r])
                              : (t[n] = t[n] ? t[n] + ", " + r : r));
                      }),
                    t
                  );
                })(e),
                t
              );
            else if (G.isObject(e) && G.isIterable(e)) {
              let n,
                r,
                o = {};
              for (const t of e) {
                if (!G.isArray(t))
                  throw TypeError(
                    "Object iterator must return a key-value pair"
                  );
                o[(r = t[0])] = (n = o[r])
                  ? G.isArray(n)
                    ? [...n, t[1]]
                    : [n, t[1]]
                  : t[1];
              }
              a(o, t);
            } else null != e && o(t, e, n);
            return this;
          }
          get(e, t) {
            if ((e = Pe(e))) {
              const n = G.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t)
                  return (function (e) {
                    const t = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                    return t;
                  })(e);
                if (G.isFunction(t)) return t.call(this, e, n);
                if (G.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = Pe(e))) {
              const n = G.findKey(this, e);
              return !(
                !n ||
                void 0 === this[n] ||
                (t && !Te(0, this[n], n, t))
              );
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = Pe(e))) {
                const o = G.findKey(n, e);
                !o || (t && !Te(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return G.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const o = t[n];
              (e && !Te(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              G.forEach(this, (r, o) => {
                const a = G.findKey(n, o);
                if (a) return (t[a] = xe(r)), void delete t[o];
                const l = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (e, t, n) => t.toUpperCase() + n
                        );
                    })(o)
                  : String(o).trim();
                l !== o && delete t[o], (t[l] = xe(r)), (n[l] = !0);
              }),
              this
            );
          }
          concat() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return this.constructor.concat(this, ...t);
          }
          toJSON(e) {
            const t = Object.create(null);
            return (
              G.forEach(this, (n, r) => {
                null != n &&
                  !1 !== n &&
                  (t[r] = e && G.isArray(n) ? n.join(", ") : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map((e) => {
                let [t, n] = e;
                return t + ": " + n;
              })
              .join("\n");
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e) {
            const t = new this(e);
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return r.forEach((e) => t.set(e)), t;
          }
          static accessor(e) {
            const t = (this[Ie] = this[Ie] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = Pe(e);
              t[r] ||
                (!(function (e, t) {
                  const n = G.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, o) {
                        return this[r].call(this, t, e, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return G.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        Ae.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          G.reduceDescriptors(Ae.prototype, (e, t) => {
            let { value: n } = e,
              r = t[0].toUpperCase() + t.slice(1);
            return {
              get: () => n,
              set(e) {
                this[r] = e;
              },
            };
          }),
          G.freezeMethods(Ae);
        const Oe = Ae;
        function Ne(e, t) {
          const n = this || Ee,
            r = t || n,
            o = Oe.from(r.headers);
          let a = r.data;
          return (
            G.forEach(e, function (e) {
              a = e.call(n, a, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            a
          );
        }
        function _e(e) {
          return !(!e || !e.__CANCEL__);
        }
        function Re(e, t, n) {
          K.call(this, null == e ? "canceled" : e, K.ERR_CANCELED, t, n),
            (this.name = "CanceledError");
        }
        G.inherits(Re, K, { __CANCEL__: !0 });
        const Le = Re;
        function ze(e, t, n) {
          const r = n.config.validateStatus;
          n.status && r && !r(n.status)
            ? t(
                new K(
                  "Request failed with status code " + n.status,
                  [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][
                    Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
                )
              )
            : e(n);
        }
        const De = function (e, t) {
          e = e || 10;
          const n = new Array(e),
            r = new Array(e);
          let o,
            a = 0,
            l = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (i) {
              const u = Date.now(),
                s = r[l];
              o || (o = u), (n[a] = i), (r[a] = u);
              let c = l,
                f = 0;
              for (; c !== a; ) (f += n[c++]), (c %= e);
              if (((a = (a + 1) % e), a === l && (l = (l + 1) % e), u - o < t))
                return;
              const d = s && u - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          );
        };
        const je = function (e, t) {
            let n,
              r,
              o = 0,
              a = 1e3 / t;
            const l = function (t) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Date.now();
              (o = a), (n = null), r && (clearTimeout(r), (r = null)), e(...t);
            };
            return [
              function () {
                const e = Date.now(),
                  t = e - o;
                for (
                  var i = arguments.length, u = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  u[s] = arguments[s];
                t >= a
                  ? l(u, e)
                  : ((n = u),
                    r ||
                      (r = setTimeout(() => {
                        (r = null), l(n);
                      }, a - t)));
              },
              () => n && l(n),
            ];
          },
          Ue = function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 3,
              r = 0;
            const o = De(50, 250);
            return je((n) => {
              const a = n.loaded,
                l = n.lengthComputable ? n.total : void 0,
                i = a - r,
                u = o(i);
              r = a;
              e({
                loaded: a,
                total: l,
                progress: l ? a / l : void 0,
                bytes: i,
                rate: u || void 0,
                estimated: u && l && a <= l ? (l - a) / u : void 0,
                event: n,
                lengthComputable: null != l,
                [t ? "download" : "upload"]: !0,
              });
            }, n);
          },
          Fe = (e, t) => {
            const n = null != e;
            return [
              (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
              t[1],
            ];
          },
          Me = (e) =>
            function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return G.asap(() => e(...n));
            },
          Ve = we.hasStandardBrowserEnv
            ? ((e, t) => (n) => (
                (n = new URL(n, we.origin)),
                e.protocol === n.protocol &&
                  e.host === n.host &&
                  (t || e.port === n.port)
              ))(
                new URL(we.origin),
                we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)
              )
            : () => !0,
          We = we.hasStandardBrowserEnv
            ? {
                write(e, t, n, r, o, a, l) {
                  if ("undefined" === typeof document) return;
                  const i = ["".concat(e, "=").concat(encodeURIComponent(t))];
                  G.isNumber(n) &&
                    i.push("expires=".concat(new Date(n).toUTCString())),
                    G.isString(r) && i.push("path=".concat(r)),
                    G.isString(o) && i.push("domain=".concat(o)),
                    !0 === a && i.push("secure"),
                    G.isString(l) && i.push("SameSite=".concat(l)),
                    (document.cookie = i.join("; "));
                },
                read(e) {
                  if ("undefined" === typeof document) return null;
                  const t = document.cookie.match(
                    new RegExp("(?:^|; )" + e + "=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[1]) : null;
                },
                remove(e) {
                  this.write(e, "", Date.now() - 864e5, "/");
                },
              }
            : { write() {}, read: () => null, remove() {} };
        function He(e, t, n) {
          let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
          return e && (r || 0 == n)
            ? (function (e, t) {
                return t
                  ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                  : e;
              })(e, t)
            : t;
        }
        const Be = (e) => (e instanceof Oe ? pe({}, e) : e);
        function Ge(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n, r) {
            return G.isPlainObject(e) && G.isPlainObject(t)
              ? G.merge.call({ caseless: r }, e, t)
              : G.isPlainObject(t)
              ? G.merge({}, t)
              : G.isArray(t)
              ? t.slice()
              : t;
          }
          function o(e, t, n, o) {
            return G.isUndefined(t)
              ? G.isUndefined(e)
                ? void 0
                : r(void 0, e, 0, o)
              : r(e, t, 0, o);
          }
          function a(e, t) {
            if (!G.isUndefined(t)) return r(void 0, t);
          }
          function l(e, t) {
            return G.isUndefined(t)
              ? G.isUndefined(e)
                ? void 0
                : r(void 0, e)
              : r(void 0, t);
          }
          function i(n, o, a) {
            return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
          }
          const u = {
            url: a,
            method: a,
            data: a,
            baseURL: l,
            transformRequest: l,
            transformResponse: l,
            paramsSerializer: l,
            timeout: l,
            timeoutMessage: l,
            withCredentials: l,
            withXSRFToken: l,
            adapter: l,
            responseType: l,
            xsrfCookieName: l,
            xsrfHeaderName: l,
            onUploadProgress: l,
            onDownloadProgress: l,
            decompress: l,
            maxContentLength: l,
            maxBodyLength: l,
            beforeRedirect: l,
            transport: l,
            httpAgent: l,
            httpsAgent: l,
            cancelToken: l,
            socketPath: l,
            responseEncoding: l,
            validateStatus: i,
            headers: (e, t, n) => o(Be(e), Be(t), 0, !0),
          };
          return (
            G.forEach(Object.keys(pe(pe({}, e), t)), function (r) {
              const a = u[r] || o,
                l = a(e[r], t[r], r);
              (G.isUndefined(l) && a !== i) || (n[r] = l);
            }),
            n
          );
        }
        const Ze = (e) => {
            const t = Ge({}, e);
            let {
              data: n,
              withXSRFToken: r,
              xsrfHeaderName: o,
              xsrfCookieName: a,
              headers: l,
              auth: i,
            } = t;
            if (
              ((t.headers = l = Oe.from(l)),
              (t.url = le(
                He(t.baseURL, t.url, t.allowAbsoluteUrls),
                e.params,
                e.paramsSerializer
              )),
              i &&
                l.set(
                  "Authorization",
                  "Basic " +
                    btoa(
                      (i.username || "") +
                        ":" +
                        (i.password
                          ? unescape(encodeURIComponent(i.password))
                          : "")
                    )
                ),
              G.isFormData(n))
            )
              if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
                l.setContentType(void 0);
              else if (G.isFunction(n.getHeaders)) {
                const e = n.getHeaders(),
                  t = ["content-type", "content-length"];
                Object.entries(e).forEach((e) => {
                  let [n, r] = e;
                  t.includes(n.toLowerCase()) && l.set(n, r);
                });
              }
            if (
              we.hasStandardBrowserEnv &&
              (r && G.isFunction(r) && (r = r(t)), r || (!1 !== r && Ve(t.url)))
            ) {
              const e = o && a && We.read(a);
              e && l.set(o, e);
            }
            return t;
          },
          qe =
            "undefined" !== typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                const r = Ze(e);
                let o = r.data;
                const a = Oe.from(r.headers).normalize();
                let l,
                  i,
                  u,
                  s,
                  c,
                  {
                    responseType: f,
                    onUploadProgress: d,
                    onDownloadProgress: p,
                  } = r;
                function m() {
                  s && s(),
                    c && c(),
                    r.cancelToken && r.cancelToken.unsubscribe(l),
                    r.signal && r.signal.removeEventListener("abort", l);
                }
                let h = new XMLHttpRequest();
                function g() {
                  if (!h) return;
                  const r = Oe.from(
                    "getAllResponseHeaders" in h && h.getAllResponseHeaders()
                  );
                  ze(
                    function (e) {
                      t(e), m();
                    },
                    function (e) {
                      n(e), m();
                    },
                    {
                      data:
                        f && "text" !== f && "json" !== f
                          ? h.response
                          : h.responseText,
                      status: h.status,
                      statusText: h.statusText,
                      headers: r,
                      config: e,
                      request: h,
                    }
                  ),
                    (h = null);
                }
                h.open(r.method.toUpperCase(), r.url, !0),
                  (h.timeout = r.timeout),
                  "onloadend" in h
                    ? (h.onloadend = g)
                    : (h.onreadystatechange = function () {
                        h &&
                          4 === h.readyState &&
                          (0 !== h.status ||
                            (h.responseURL &&
                              0 === h.responseURL.indexOf("file:"))) &&
                          setTimeout(g);
                      }),
                  (h.onabort = function () {
                    h &&
                      (n(new K("Request aborted", K.ECONNABORTED, e, h)),
                      (h = null));
                  }),
                  (h.onerror = function (t) {
                    const r = t && t.message ? t.message : "Network Error",
                      o = new K(r, K.ERR_NETWORK, e, h);
                    (o.event = t || null), n(o), (h = null);
                  }),
                  (h.ontimeout = function () {
                    let t = r.timeout
                      ? "timeout of " + r.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const o = r.transitional || ue;
                    r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                      n(
                        new K(
                          t,
                          o.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
                          e,
                          h
                        )
                      ),
                      (h = null);
                  }),
                  void 0 === o && a.setContentType(null),
                  "setRequestHeader" in h &&
                    G.forEach(a.toJSON(), function (e, t) {
                      h.setRequestHeader(t, e);
                    }),
                  G.isUndefined(r.withCredentials) ||
                    (h.withCredentials = !!r.withCredentials),
                  f && "json" !== f && (h.responseType = r.responseType),
                  p &&
                    (([u, c] = Ue(p, !0)), h.addEventListener("progress", u)),
                  d &&
                    h.upload &&
                    (([i, s] = Ue(d)),
                    h.upload.addEventListener("progress", i),
                    h.upload.addEventListener("loadend", s)),
                  (r.cancelToken || r.signal) &&
                    ((l = (t) => {
                      h &&
                        (n(!t || t.type ? new Le(null, e, h) : t),
                        h.abort(),
                        (h = null));
                    }),
                    r.cancelToken && r.cancelToken.subscribe(l),
                    r.signal &&
                      (r.signal.aborted
                        ? l()
                        : r.signal.addEventListener("abort", l)));
                const y = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(r.url);
                y && -1 === we.protocols.indexOf(y)
                  ? n(
                      new K(
                        "Unsupported protocol " + y + ":",
                        K.ERR_BAD_REQUEST,
                        e
                      )
                    )
                  : h.send(o || null);
              });
            },
          Xe = (e, t) => {
            const { length: n } = (e = e ? e.filter(Boolean) : []);
            if (t || n) {
              let n,
                r = new AbortController();
              const o = function (e) {
                if (!n) {
                  (n = !0), l();
                  const t = e instanceof Error ? e : this.reason;
                  r.abort(
                    t instanceof K
                      ? t
                      : new Le(t instanceof Error ? t.message : t)
                  );
                }
              };
              let a =
                t &&
                setTimeout(() => {
                  (a = null),
                    o(
                      new K(
                        "timeout ".concat(t, " of ms exceeded"),
                        K.ETIMEDOUT
                      )
                    );
                }, t);
              const l = () => {
                e &&
                  (a && clearTimeout(a),
                  (a = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(o)
                      : e.removeEventListener("abort", o);
                  }),
                  (e = null));
              };
              e.forEach((e) => e.addEventListener("abort", o));
              const { signal: i } = r;
              return (i.unsubscribe = () => G.asap(l)), i;
            }
          };
        function Ke(e, t) {
          (this.v = e), (this.k = t);
        }
        function Qe(e) {
          return function () {
            return new Ye(e.apply(this, arguments));
          };
        }
        function Ye(e) {
          var t, n;
          function r(t, n) {
            try {
              var a = e[t](n),
                l = a.value,
                i = l instanceof Ke;
              Promise.resolve(i ? l.v : l).then(
                function (n) {
                  if (i) {
                    var u = "return" === t ? "return" : "next";
                    if (!l.k || n.done) return r(u, n);
                    n = e[u](n).value;
                  }
                  o(a.done ? "return" : "normal", n);
                },
                function (e) {
                  r("throw", e);
                }
              );
            } catch (e) {
              o("throw", e);
            }
          }
          function o(e, o) {
            switch (e) {
              case "return":
                t.resolve({ value: o, done: !0 });
                break;
              case "throw":
                t.reject(o);
                break;
              default:
                t.resolve({ value: o, done: !1 });
            }
            (t = t.next) ? r(t.key, t.arg) : (n = null);
          }
          (this._invoke = function (e, o) {
            return new Promise(function (a, l) {
              var i = { key: e, arg: o, resolve: a, reject: l, next: null };
              n ? (n = n.next = i) : ((t = n = i), r(e, o));
            });
          }),
            "function" != typeof e.return && (this.return = void 0);
        }
        function Je(e) {
          return new Ke(e, 0);
        }
        function $e(e) {
          var t = {},
            n = !1;
          function r(t, r) {
            return (
              (n = !0),
              (r = new Promise(function (n) {
                n(e[t](r));
              })),
              { done: !1, value: new Ke(r, 1) }
            );
          }
          return (
            (t[
              ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"
            ] = function () {
              return this;
            }),
            (t.next = function (e) {
              return n ? ((n = !1), e) : r("next", e);
            }),
            "function" == typeof e.throw &&
              (t.throw = function (e) {
                if (n) throw ((n = !1), e);
                return r("throw", e);
              }),
            "function" == typeof e.return &&
              (t.return = function (e) {
                return n ? ((n = !1), e) : r("return", e);
              }),
            t
          );
        }
        function et(e) {
          var t,
            n,
            r,
            o = 2;
          for (
            "undefined" != typeof Symbol &&
            ((n = Symbol.asyncIterator), (r = Symbol.iterator));
            o--;

          ) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new tt(t.call(e));
            (n = "@@asyncIterator"), (r = "@@iterator");
          }
          throw new TypeError("Object is not async iterable");
        }
        function tt(e) {
          function t(e) {
            if (Object(e) !== e)
              return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function (e) {
              return { value: e, done: t };
            });
          }
          return (
            (tt = function (e) {
              (this.s = e), (this.n = e.next);
            }),
            (tt.prototype = {
              s: null,
              n: null,
              next: function () {
                return t(this.n.apply(this.s, arguments));
              },
              return: function (e) {
                var n = this.s.return;
                return void 0 === n
                  ? Promise.resolve({ value: e, done: !0 })
                  : t(n.apply(this.s, arguments));
              },
              throw: function (e) {
                var n = this.s.return;
                return void 0 === n
                  ? Promise.reject(e)
                  : t(n.apply(this.s, arguments));
              },
            }),
            new tt(e)
          );
        }
        (Ye.prototype[
          ("function" == typeof Symbol && Symbol.asyncIterator) ||
            "@@asyncIterator"
        ] = function () {
          return this;
        }),
          (Ye.prototype.next = function (e) {
            return this._invoke("next", e);
          }),
          (Ye.prototype.throw = function (e) {
            return this._invoke("throw", e);
          }),
          (Ye.prototype.return = function (e) {
            return this._invoke("return", e);
          });
        const nt = function* (e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void (yield e);
            let r,
              o = 0;
            for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
          },
          rt = (function () {
            var e = Qe(function* (e, t) {
              var n,
                r = !1,
                o = !1;
              try {
                for (
                  var a, l = et(ot(e));
                  (r = !(a = yield Je(l.next())).done);
                  r = !1
                ) {
                  const e = a.value;
                  yield* $e(et(nt(e, t)));
                }
              } catch (i) {
                (o = !0), (n = i);
              } finally {
                try {
                  r && null != l.return && (yield Je(l.return()));
                } finally {
                  if (o) throw n;
                }
              }
            });
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          ot = (function () {
            var e = Qe(function* (e) {
              if (e[Symbol.asyncIterator]) return void (yield* $e(et(e)));
              const t = e.getReader();
              try {
                for (;;) {
                  const { done: e, value: n } = yield Je(t.read());
                  if (e) break;
                  yield n;
                }
              } finally {
                yield Je(t.cancel());
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          at = (e, t, n, r) => {
            const o = rt(e, t);
            let a,
              l = 0,
              i = (e) => {
                a || ((a = !0), r && r(e));
              };
            return new ReadableStream(
              {
                async pull(e) {
                  try {
                    const { done: t, value: r } = await o.next();
                    if (t) return i(), void e.close();
                    let a = r.byteLength;
                    if (n) {
                      let e = (l += a);
                      n(e);
                    }
                    e.enqueue(new Uint8Array(r));
                  } catch (t) {
                    throw (i(t), t);
                  }
                },
                cancel: (e) => (i(e), o.return()),
              },
              { highWaterMark: 2 }
            );
          },
          { isFunction: lt } = G,
          it = ((e) => {
            let { Request: t, Response: n } = e;
            return { Request: t, Response: n };
          })(G.global),
          { ReadableStream: ut, TextEncoder: st } = G.global,
          ct = function (e) {
            try {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              return !!e(...n);
            } catch (o) {
              return !1;
            }
          },
          ft = (e) => {
            e = G.merge.call({ skipUndefined: !0 }, it, e);
            const { fetch: t, Request: n, Response: r } = e,
              o = t ? lt(t) : "function" === typeof fetch,
              a = lt(n),
              l = lt(r);
            if (!o) return !1;
            const i = o && lt(ut),
              u =
                o &&
                ("function" === typeof st
                  ? ((s = new st()), (e) => s.encode(e))
                  : async (e) => new Uint8Array(await new n(e).arrayBuffer()));
            var s;
            const c =
                a &&
                i &&
                ct(() => {
                  let e = !1;
                  const t = new n(we.origin, {
                    body: new ut(),
                    method: "POST",
                    get duplex() {
                      return (e = !0), "half";
                    },
                  }).headers.has("Content-Type");
                  return e && !t;
                }),
              f = l && i && ct(() => G.isReadableStream(new r("").body)),
              d = { stream: f && ((e) => e.body) };
            o &&
              ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(
                (e) => {
                  !d[e] &&
                    (d[e] = (t, n) => {
                      let r = t && t[e];
                      if (r) return r.call(t);
                      throw new K(
                        "Response type '".concat(e, "' is not supported"),
                        K.ERR_NOT_SUPPORT,
                        n
                      );
                    });
                }
              );
            const p = async (e, t) => {
              const r = G.toFiniteNumber(e.getContentLength());
              return null == r
                ? (async (e) => {
                    if (null == e) return 0;
                    if (G.isBlob(e)) return e.size;
                    if (G.isSpecCompliantForm(e)) {
                      const t = new n(we.origin, { method: "POST", body: e });
                      return (await t.arrayBuffer()).byteLength;
                    }
                    return G.isArrayBufferView(e) || G.isArrayBuffer(e)
                      ? e.byteLength
                      : (G.isURLSearchParams(e) && (e += ""),
                        G.isString(e) ? (await u(e)).byteLength : void 0);
                  })(t)
                : r;
            };
            return async (e) => {
              let {
                  url: o,
                  method: l,
                  data: i,
                  signal: u,
                  cancelToken: s,
                  timeout: m,
                  onDownloadProgress: h,
                  onUploadProgress: g,
                  responseType: y,
                  headers: v,
                  withCredentials: b = "same-origin",
                  fetchOptions: w,
                } = Ze(e),
                S = t || fetch;
              y = y ? (y + "").toLowerCase() : "text";
              let k = Xe([u, s && s.toAbortSignal()], m),
                E = null;
              const C =
                k &&
                k.unsubscribe &&
                (() => {
                  k.unsubscribe();
                });
              let I;
              try {
                if (
                  g &&
                  c &&
                  "get" !== l &&
                  "head" !== l &&
                  0 !== (I = await p(v, i))
                ) {
                  let e,
                    t = new n(o, { method: "POST", body: i, duplex: "half" });
                  if (
                    (G.isFormData(i) &&
                      (e = t.headers.get("content-type")) &&
                      v.setContentType(e),
                    t.body)
                  ) {
                    const [e, n] = Fe(I, Ue(Me(g)));
                    i = at(t.body, 65536, e, n);
                  }
                }
                G.isString(b) || (b = b ? "include" : "omit");
                const t = a && "credentials" in n.prototype,
                  u = pe(
                    pe({}, w),
                    {},
                    {
                      signal: k,
                      method: l.toUpperCase(),
                      headers: v.normalize().toJSON(),
                      body: i,
                      duplex: "half",
                      credentials: t ? b : void 0,
                    }
                  );
                E = a && new n(o, u);
                let s = await (a ? S(E, w) : S(o, u));
                const m = f && ("stream" === y || "response" === y);
                if (f && (h || (m && C))) {
                  const e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = s[t];
                  });
                  const t = G.toFiniteNumber(s.headers.get("content-length")),
                    [n, o] = (h && Fe(t, Ue(Me(h), !0))) || [];
                  s = new r(
                    at(s.body, 65536, n, () => {
                      o && o(), C && C();
                    }),
                    e
                  );
                }
                y = y || "text";
                let P = await d[G.findKey(d, y) || "text"](s, e);
                return (
                  !m && C && C(),
                  await new Promise((t, n) => {
                    ze(t, n, {
                      data: P,
                      headers: Oe.from(s.headers),
                      status: s.status,
                      statusText: s.statusText,
                      config: e,
                      request: E,
                    });
                  })
                );
              } catch (P) {
                if (
                  (C && C(),
                  P &&
                    "TypeError" === P.name &&
                    /Load failed|fetch/i.test(P.message))
                )
                  throw Object.assign(
                    new K("Network Error", K.ERR_NETWORK, e, E),
                    { cause: P.cause || P }
                  );
                throw K.from(P, P && P.code, e, E);
              }
            };
          },
          dt = new Map(),
          pt = (e) => {
            let t = (e && e.env) || {};
            const { fetch: n, Request: r, Response: o } = t,
              a = [r, o, n];
            let l,
              i,
              u = a.length,
              s = dt;
            for (; u--; )
              (l = a[u]),
                (i = s.get(l)),
                void 0 === i && s.set(l, (i = u ? new Map() : ft(t))),
                (s = i);
            return i;
          },
          mt = (pt(), { http: null, xhr: qe, fetch: { get: pt } });
        G.forEach(mt, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (n) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        const ht = (e) => "- ".concat(e),
          gt = (e) => G.isFunction(e) || null === e || !1 === e;
        const yt = {
          getAdapter: function (e, t) {
            e = G.isArray(e) ? e : [e];
            const { length: n } = e;
            let r, o;
            const a = {};
            for (let l = 0; l < n; l++) {
              let n;
              if (
                ((r = e[l]),
                (o = r),
                !gt(r) &&
                  ((o = mt[(n = String(r)).toLowerCase()]), void 0 === o))
              )
                throw new K("Unknown adapter '".concat(n, "'"));
              if (o && (G.isFunction(o) || (o = o.get(t)))) break;
              a[n || "#" + l] = o;
            }
            if (!o) {
              const e = Object.entries(a).map((e) => {
                let [t, n] = e;
                return (
                  "adapter ".concat(t, " ") +
                  (!1 === n
                    ? "is not supported by the environment"
                    : "is not available in the build")
                );
              });
              let t = n
                ? e.length > 1
                  ? "since :\n" + e.map(ht).join("\n")
                  : " " + ht(e[0])
                : "as no adapter specified";
              throw new K(
                "There is no suitable adapter to dispatch the request " + t,
                "ERR_NOT_SUPPORT"
              );
            }
            return o;
          },
          adapters: mt,
        };
        function vt(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new Le(null, e);
        }
        function bt(e) {
          vt(e),
            (e.headers = Oe.from(e.headers)),
            (e.data = Ne.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1);
          return yt
            .getAdapter(
              e.adapter || Ee.adapter,
              e
            )(e)
            .then(
              function (t) {
                return (
                  vt(e),
                  (t.data = Ne.call(e, e.transformResponse, t)),
                  (t.headers = Oe.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  _e(t) ||
                    (vt(e),
                    t &&
                      t.response &&
                      ((t.response.data = Ne.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = Oe.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            );
        }
        const wt = "1.13.2",
          St = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (e, t) => {
            St[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        const kt = {};
        (St.transitional = function (e, t, n) {
          function r(e, t) {
            return (
              "[Axios v" +
              wt +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return (n, o, a) => {
            if (!1 === e)
              throw new K(
                r(o, " has been removed" + (t ? " in " + t : "")),
                K.ERR_DEPRECATED
              );
            return (
              t &&
                !kt[o] &&
                ((kt[o] = !0),
                console.warn(
                  r(
                    o,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, o, a)
            );
          };
        }),
          (St.spelling = function (e) {
            return (t, n) => (
              console.warn(
                "".concat(n, " is likely a misspelling of ").concat(e)
              ),
              !0
            );
          });
        const Et = {
            assertOptions: function (e, t, n) {
              if ("object" !== typeof e)
                throw new K(
                  "options must be an object",
                  K.ERR_BAD_OPTION_VALUE
                );
              const r = Object.keys(e);
              let o = r.length;
              for (; o-- > 0; ) {
                const a = r[o],
                  l = t[a];
                if (l) {
                  const t = e[a],
                    n = void 0 === t || l(t, a, e);
                  if (!0 !== n)
                    throw new K(
                      "option " + a + " must be " + n,
                      K.ERR_BAD_OPTION_VALUE
                    );
                  continue;
                }
                if (!0 !== n)
                  throw new K("Unknown option " + a, K.ERR_BAD_OPTION);
              }
            },
            validators: St,
          },
          Ct = Et.validators;
        class It {
          constructor(e) {
            (this.defaults = e || {}),
              (this.interceptors = { request: new ie(), response: new ie() });
          }
          async request(e, t) {
            try {
              return await this._request(e, t);
            } catch (n) {
              if (n instanceof Error) {
                let e = {};
                Error.captureStackTrace
                  ? Error.captureStackTrace(e)
                  : (e = new Error());
                const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                try {
                  n.stack
                    ? t &&
                      !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                      (n.stack += "\n" + t)
                    : (n.stack = t);
                } catch (r) {}
              }
              throw n;
            }
          }
          _request(e, t) {
            "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              (t = Ge(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            void 0 !== n &&
              Et.assertOptions(
                n,
                {
                  silentJSONParsing: Ct.transitional(Ct.boolean),
                  forcedJSONParsing: Ct.transitional(Ct.boolean),
                  clarifyTimeoutError: Ct.transitional(Ct.boolean),
                },
                !1
              ),
              null != r &&
                (G.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : Et.assertOptions(
                      r,
                      { encode: Ct.function, serialize: Ct.function },
                      !0
                    )),
              void 0 !== t.allowAbsoluteUrls ||
                (void 0 !== this.defaults.allowAbsoluteUrls
                  ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                  : (t.allowAbsoluteUrls = !0)),
              Et.assertOptions(
                t,
                {
                  baseUrl: Ct.spelling("baseURL"),
                  withXsrfToken: Ct.spelling("withXSRFToken"),
                },
                !0
              ),
              (t.method = (
                t.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase());
            let a = o && G.merge(o.common, o[t.method]);
            o &&
              G.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (e) => {
                  delete o[e];
                }
              ),
              (t.headers = Oe.concat(a, o));
            const l = [];
            let i = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((i = i && e.synchronous), l.unshift(e.fulfilled, e.rejected));
            });
            const u = [];
            let s;
            this.interceptors.response.forEach(function (e) {
              u.push(e.fulfilled, e.rejected);
            });
            let c,
              f = 0;
            if (!i) {
              const e = [bt.bind(this), void 0];
              for (
                e.unshift(...l),
                  e.push(...u),
                  c = e.length,
                  s = Promise.resolve(t);
                f < c;

              )
                s = s.then(e[f++], e[f++]);
              return s;
            }
            c = l.length;
            let d = t;
            for (; f < c; ) {
              const e = l[f++],
                t = l[f++];
              try {
                d = e(d);
              } catch (p) {
                t.call(this, p);
                break;
              }
            }
            try {
              s = bt.call(this, d);
            } catch (p) {
              return Promise.reject(p);
            }
            for (f = 0, c = u.length; f < c; ) s = s.then(u[f++], u[f++]);
            return s;
          }
          getUri(e) {
            return le(
              He(
                (e = Ge(this.defaults, e)).baseURL,
                e.url,
                e.allowAbsoluteUrls
              ),
              e.params,
              e.paramsSerializer
            );
          }
        }
        G.forEach(["delete", "get", "head", "options"], function (e) {
          It.prototype[e] = function (t, n) {
            return this.request(
              Ge(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
          G.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Ge(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (It.prototype[e] = t()), (It.prototype[e + "Form"] = t(!0));
          });
        const Pt = It;
        class xt {
          constructor(e) {
            if ("function" !== typeof e)
              throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then((e) => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0; ) n._listeners[t](e);
              n._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
                }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              e(function (e, r, o) {
                n.reason || ((n.reason = new Le(e, r, o)), t(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          toAbortSignal() {
            const e = new AbortController(),
              t = (t) => {
                e.abort(t);
              };
            return (
              this.subscribe(t),
              (e.signal.unsubscribe = () => this.unsubscribe(t)),
              e.signal
            );
          }
          static source() {
            let e;
            return {
              token: new xt(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        const Tt = xt;
        const At = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
          WebServerIsDown: 521,
          ConnectionTimedOut: 522,
          OriginIsUnreachable: 523,
          TimeoutOccurred: 524,
          SslHandshakeFailed: 525,
          InvalidSslCertificate: 526,
        };
        Object.entries(At).forEach((e) => {
          let [t, n] = e;
          At[n] = t;
        });
        const Ot = At;
        const Nt = (function e(t) {
          const n = new Pt(t),
            r = a(Pt.prototype.request, n);
          return (
            G.extend(r, Pt.prototype, n, { allOwnKeys: !0 }),
            G.extend(r, n, null, { allOwnKeys: !0 }),
            (r.create = function (n) {
              return e(Ge(t, n));
            }),
            r
          );
        })(Ee);
        (Nt.Axios = Pt),
          (Nt.CanceledError = Le),
          (Nt.CancelToken = Tt),
          (Nt.isCancel = _e),
          (Nt.VERSION = wt),
          (Nt.toFormData = ee),
          (Nt.AxiosError = K),
          (Nt.Cancel = Nt.CanceledError),
          (Nt.all = function (e) {
            return Promise.all(e);
          }),
          (Nt.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Nt.isAxiosError = function (e) {
            return G.isObject(e) && !0 === e.isAxiosError;
          }),
          (Nt.mergeConfig = Ge),
          (Nt.AxiosHeaders = Oe),
          (Nt.formToJSON = (e) => Se(G.isHTMLForm(e) ? new FormData(e) : e)),
          (Nt.getAdapter = yt.getAdapter),
          (Nt.HttpStatusCode = Ot),
          (Nt.default = Nt);
        const _t = Nt,
          Rt = (e, t) =>
            _t.create({
              baseURL: e,
              timeout: 1e4,
              headers: { Authorization: t && "Bearer ".concat(t) },
            });
        class Lt {
          constructor(e, t, n) {
            (this.projectId = void 0),
              (this.baseUrl = void 0),
              (this.sandbox = void 0),
              (this.projectId = e),
              (this.baseUrl = t),
              (this.sandbox = n);
          }
          async createPaymentsToken(e, t) {
            let { item_sku: n, data: r } = t;
            return e().then((e) => {
              console.log("create payments token", e, n);
              const t = "https://store.xsolla.com/api";
              return Rt(t, e)
                .post(
                  ""
                    .concat(t, "/v2/project/")
                    .concat(this.projectId, "/payment/item/")
                    .concat(n),
                  r
                )
                .then((e) => e.data);
            });
          }
          async getVirtualItems() {
            return Rt("https://store.xsolla.com/api")
              .get(
                ""
                  .concat(this.baseUrl, "/v2/project/")
                  .concat(this.projectId, "/items")
              )
              .then((e) => e.data);
          }
          async getInventory(e) {
            return e().then((e) =>
              Rt("https://store.xsolla.com/api", e)
                .get(
                  ""
                    .concat(this.baseUrl, "/v2/project/")
                    .concat(this.projectId, "/user/inventory/items")
                )
                .then((e) => e.data)
            );
          }
          async consumeItem(e, t, n) {
            return e().then((e) =>
              Rt("https://store.xsolla.com/api", e)
                .post(
                  ""
                    .concat(this.baseUrl, "/v2/project/")
                    .concat(this.projectId, "/user/inventory/item/consume"),
                  { sku: t, quantity: n }
                )
                .then((e) => e.data)
            );
          }
          async getOrderInfo(e, t) {
            return e().then((e) =>
              Rt("https://store.xsolla.com/api", e)
                .get(
                  ""
                    .concat(this.baseUrl, "/v2/project/")
                    .concat(this.projectId, "/order/")
                    .concat(t)
                )
                .then((e) => e.data)
                .catch((e) => console.error(e))
            );
          }
        }
        function zt(e) {
          var t;
          return null !==
            (t = e
              .filter((e) => "map_as_sku" === e.external_id)
              .flatMap((e) => e.values)
              .map((e) => e.external_id)
              .at(0)) && void 0 !== t
            ? t
            : null;
        }
        function Dt(e) {
          var t;
          const n = zt(e.attributes);
          return null === (t = e.content) || void 0 === t
            ? void 0
            : t
                .filter((e) => e.sku === n)
                .map((e) => e.quantity)
                .at(0);
        }
        function jt(e, t) {
          if ("virtual_good" === e) {
            if ("non_consumable" === t) return "durable";
            if ("consumable" === t) return "consumable";
          } else if ("virtual_currency" === e) return "consumable";
          return null;
        }
        function Ut(e) {
          return "virtual_currency_package" === e ? "consumable" : null;
        }
        var Ft = n(143);
        class Mt {
          constructor(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : (e) => e,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            (this.handlers = {}),
              (this.options = void 0),
              (this.xsollaService = void 0),
              (this.userTokenGetter = void 0),
              (this.skuMapper = void 0),
              (this.options = r),
              (this.xsollaService = e),
              (this.userTokenGetter = t),
              (this.skuMapper = n),
              this.registerHandlers();
          }
          registerHandlers() {
            const e = window.XPayStationWidget.eventTypes;
            (this.handlers = {
              INIT: this.wrapHandler(
                e.INIT,
                (e, t) => this.onInit(e, t),
                "INIT"
              ),
              OPEN: this.wrapHandler(e.OPEN, this.options.onOpen, "OPEN"),
              LOAD: this.wrapHandler(e.LOAD, this.options.onLoad, "LOAD"),
              CLOSE: this.wrapHandler(
                e.CLOSE,
                this.options.onClose,
                "CLOSE",
                !0
              ),
              STATUS: this.wrapHandler(
                e.STATUS,
                this.options.onStatus,
                "STATUS"
              ),
              STATUS_INVOICE: this.wrapHandler(
                e.STATUS_INVOICE,
                this.options.onStatusInvoice,
                "STATUS_INVOICE"
              ),
              STATUS_DELIVERING: this.wrapHandler(
                e.STATUS_DELIVERING,
                this.options.onStatusDelivering,
                "STATUS_DELIVERING"
              ),
              STATUS_DONE: this.wrapHandler(
                e.STATUS_DONE,
                this.options.onStatusDone,
                "STATUS_DONE"
              ),
              STATUS_TROUBLED: this.wrapHandler(
                e.STATUS_TROUBLED,
                this.options.onStatusTroubled,
                "STATUS_TROUBLED"
              ),
              USER_COUNTRY: this.wrapHandler(
                e.USER_COUNTRY,
                this.options.onUserCountry,
                "USER_COUNTRY"
              ),
              FCP: this.wrapHandler(e.FCP, this.options.onFCP, "FCP"),
              ERROR: this.wrapHandler(e.ERROR, this.options.onError, "ERROR"),
            }),
              Object.entries(this.handlers).forEach((e) => {
                let [t, n] = e;
                const r = window.XPayStationWidget.eventTypes[t];
                r && n && window.XPayStationWidget.on(r, n);
              });
          }
          wrapHandler(e, t, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (e, n) => {
              t && t(e, n), r && this.cleanup();
            };
          }
          cleanup() {
            Object.entries(this.handlers).forEach((e) => {
              let [t, n] = e;
              const r = window.XPayStationWidget.eventTypes[t];
              r && n && window.XPayStationWidget.off(r, n);
            }),
              (this.handlers = {});
          }
          purchase(e, t, n) {
            const r = this;
            this.xsollaService
              .createPaymentsToken(this.userTokenGetter, {
                item_sku: this.skuMapper(e),
                data: { sandbox: t },
              })
              .then((e) => {
                if (!e) throw new Error("tokens response is null");
                n(e.order_id),
                  window.XPayStationWidget.init({
                    access_token: e.token,
                    sandbox: t,
                    iframeOnly: !0,
                  });
              })
              .catch((e) => {
                var t, n;
                (console.error("Error happened", e),
                null !== (t = r.options) && void 0 !== t && t.onError) &&
                  (null === (n = r.options) ||
                    void 0 === n ||
                    n.onError({}, {}));
              });
          }
          onInit(e, t) {
            this.options && this.options.onInit && this.options.onInit(e, t),
              window.XPayStationWidget.open();
          }
        }
        let Vt = (function (e) {
          return (
            (e[(e.OPENED = 0)] = "OPENED"), (e[(e.CLOSED = 1)] = "CLOSED"), e
          );
        })({});
        const Wt = function (e, t) {
            const n = new Map();
            if (!e) return n;
            if (!t) return n;
            return (
              Array.from(
                new Set([...Array.from(e.keys()), ...Array.from(t.keys())])
              ).forEach((r) => {
                n.set(
                  r,
                  (function (e, t) {
                    var n, r, o, a;
                    if (!e && !t)
                      throw Error(
                        "both iap Product and iap inv state are null"
                      );
                    return {
                      offerToken:
                        null !==
                          (n =
                            null === t || void 0 === t
                              ? void 0
                              : t.offerToken) && void 0 !== n
                          ? n
                          : null === e || void 0 === e
                          ? void 0
                          : e.offerToken,
                      storeId:
                        null !==
                          (r =
                            null === t || void 0 === t ? void 0 : t.storeId) &&
                        void 0 !== r
                          ? r
                          : null === e || void 0 === e
                          ? void 0
                          : e.storeId,
                      type:
                        null !==
                          (o = null === t || void 0 === t ? void 0 : t.type) &&
                        void 0 !== o
                          ? o
                          : null === e || void 0 === e
                          ? void 0
                          : e.type,
                      quantity:
                        null !==
                          (a =
                            null === t || void 0 === t ? void 0 : t.quantity) &&
                        void 0 !== a
                          ? a
                          : 0,
                    };
                  })(e.get(r), t.get(r))
                );
              }),
              n
            );
          },
          Ht = function (e) {
            var t;
            const [n, r] = (0, o.useState)(!1),
              [a, l] = (0, o.useState)(!1),
              [i, u] = (0, o.useState)(!1),
              [s, c] = (0, o.useState)(!1),
              [f, d] = (0, o.useState)(!1),
              p = (0, o.useRef)(null),
              m = (0, o.useRef)(() => {}),
              h = (0, o.useRef)((e) => e),
              [g] = (0, o.useState)((0, Ft.G)()),
              [y, v] = (0, o.useState)(new Map()),
              [b, w] = (0, o.useState)(new Map()),
              S = (0, o.useRef)(null),
              [k, E] = (0, o.useState)(),
              [C, I] = (0, o.useState)(null),
              P = (0, o.useRef)(null),
              x = (0, o.useRef)(null),
              T = (0, o.useRef)(
                new Lt(
                  null !==
                    (t = null === e || void 0 === e ? void 0 : e.projectId) &&
                  void 0 !== t
                    ? t
                    : "",
                  "https://store.xsolla.com/api",
                  ((e) => {
                    var t;
                    return (
                      null !==
                        (t = null === e || void 0 === e ? void 0 : e.sandbox) &&
                      void 0 !== t &&
                      t
                    );
                  })(e)
                )
              );
            (0, o.useEffect)(() => {
              s && console.log("SDK.Xsolla: SDK loaded");
            }, [s]);
            const A = (0, o.useCallback)(() => {
              c(!0);
            }, []);
            (0, o.useEffect)(() => {
              if (!n) return;
              console.log("SDK.Xsolla: loading script...");
              const e =
                "https://cdn.xsolla.net/payments-bucket-prod/embed/1.5.1/widget.min.js";
              if (document.querySelector('script[src="'.concat(e, '"]')))
                return;
              const t = document.createElement("script");
              return (
                (t.src = e),
                (t.onload = A),
                (t.async = !0),
                document.body.appendChild(t),
                () => {
                  document.body.removeChild(t);
                }
              );
            }, [n, A]);
            const O = (0, o.useCallback)(
              (e, t, n, r) => {
                g.emit("onPurchased", {
                  success: t,
                  offerToken: e,
                  transactionToken: n,
                  currentQuantity: r,
                  status: t ? "succeeded" : "failed",
                  storeId: e,
                });
              },
              [g]
            );
            (0, o.useEffect)(() => {
              y &&
                (h.current = (e) => {
                  var t, n;
                  return null !==
                    (t =
                      null === (n = y.get(e)) || void 0 === n
                        ? void 0
                        : n.originalOfferToken) && void 0 !== t
                    ? t
                    : e;
                });
            }, [y]),
              (0, o.useEffect)(() => {
                if (k !== Vt.OPENED) {
                  var e;
                  if (C)
                    O(
                      C.itemSku,
                      C.success,
                      C.tId,
                      null !== (e = C.quantity) && void 0 !== e ? e : 0
                    );
                  I(null);
                }
              }, [k, C, O]);
            const N = (0, o.useCallback)(
              (e, t) => {
                if (!s) return;
                if (!p.current) return;
                if (S.current)
                  return S.current.cleanup(), void (S.current = null);
                I(null), (P.current = null);
                const n = function (n, r) {
                    console.log("SDK.Xsolla: status-troubled"),
                      I({ tId: t, success: !1, itemSku: e, storeId: e }),
                      m.current &&
                        P.current &&
                        T.current
                          .getOrderInfo(() => _({ shouldLogin: !1 }), P.current)
                          .then((e) => {
                            m.current(e);
                          })
                          .catch((e) =>
                            console.error("Failed to fetch order info", e)
                          );
                  },
                  r = function (n, r) {
                    E(Vt.CLOSED),
                      I(
                        (n) =>
                          n || { tId: t, success: !1, itemSku: e, storeId: e }
                      ),
                      console.log("SDK.Xsolla: cleaning up XpayStationManager"),
                      S.current && (S.current.cleanup(), (S.current = null));
                  };
                (S.current = new Mt(
                  T.current,
                  () => _({ shouldLogin: !0 }),
                  h.current,
                  {
                    onInit: (e, t) => E(Vt.OPENED),
                    onClose: r,
                    onError: function (e, t) {
                      r(), n();
                    },
                    onStatusDone: function (n, r) {
                      console.log("SDK.Xsolla: status-done"),
                        x.current &&
                          (x.current().then((n) => {
                            var r;
                            w(n);
                            const o = n.get(e),
                              a =
                                null !==
                                  (r =
                                    null === o || void 0 === o
                                      ? void 0
                                      : o.quantity) && void 0 !== r
                                  ? r
                                  : 0;
                            I({
                              errorMessage: void 0,
                              tId: t,
                              quantity: a,
                              success: !0,
                              itemSku: e,
                              storeId:
                                null === o || void 0 === o ? void 0 : o.storeId,
                            });
                          }),
                          m.current &&
                            P.current &&
                            T.current
                              .getOrderInfo(
                                () => _({ shouldLogin: !1 }),
                                P.current
                              )
                              .then((e) => {
                                m.current(e);
                              })
                              .catch((e) =>
                                console.error("Failed to fetch order info", e)
                              ));
                    },
                    onStatusTroubled: n,
                  }
                )),
                  S.current.purchase(e, T.current.sandbox, (e) => {
                    P.current = e;
                  });
              },
              [s]
            );
            (0, o.useEffect)(
              () => () => {
                S.current && (S.current.cleanup(), (S.current = null));
              },
              []
            );
            const _ = (e) => {
                if (!p.current) throw Error("user token getter not inited!");
                return p.current(e);
              },
              R = (0, o.useCallback)(
                () =>
                  T.current.getVirtualItems().then((e) => {
                    if (e) {
                      const t = new Map();
                      e.items
                        .map((e) => {
                          var t, n, r, o, a, l;
                          return {
                            formattedPrice:
                              ((a = parseFloat(e.price.amount)),
                              (l = e.price.currency),
                              new Intl.NumberFormat(navigator.language, {
                                style: "currency",
                                currency: l,
                              }).format(a)),
                            amount:
                              null !== (t = Dt(e)) && void 0 !== t ? t : 1,
                            offerToken:
                              null !== (n = zt(e.attributes)) && void 0 !== n
                                ? n
                                : e.sku,
                            originalOfferToken: e.sku,
                            storeId: "".concat(e.item_id),
                            iconUrl: e.image_url,
                            description:
                              null !== (r = e.description) && void 0 !== r
                                ? r
                                : "",
                            type:
                              null !== (o = jt(e.type, e.virtual_item_type)) &&
                              void 0 !== o
                                ? o
                                : Ut(e.bundle_type),
                          };
                        })
                        .forEach((e, n) => {
                          t.set(e.offerToken, e);
                        }),
                        v(t),
                        u(!0);
                    }
                  }),
                []
              ),
              L = (0, o.useCallback)(
                () =>
                  T.current
                    .getInventory(() => _({ shouldLogin: !1 }))
                    .then((e) => {
                      if (e) {
                        const t = new Map();
                        return (
                          e.items
                            .map((e) => {
                              var t;
                              return {
                                offerToken: e.sku,
                                storeId: "".concat(e.item_id),
                                type: jt(e.type, e.virtual_item_type),
                                quantity:
                                  null !== (t = e.quantity) && void 0 !== t
                                    ? t
                                    : e.remaining_uses,
                              };
                            })
                            .filter((e) => e.offerToken && e.quantity && e.type)
                            .forEach((e, n) => {
                              t.set(e.offerToken, e);
                            }),
                          t
                        );
                      }
                      return new Map();
                    }),
                []
              );
            (0, o.useEffect)(() => {
              x.current = L;
            }, [L]);
            const z = (0, o.useCallback)(
                (e, t, n, r) => {
                  const o = y.get(e);
                  L()
                    .then((a) => {
                      var l;
                      w(a),
                        g.emit("onConsume", {
                          success: r,
                          offerToken: e,
                          storeId:
                            null !==
                              (l =
                                null === o || void 0 === o
                                  ? void 0
                                  : o.storeId) && void 0 !== l
                              ? l
                              : e,
                          status: r ? "success" : "failed",
                          errorMessage: r ? void 0 : "failed",
                          transactionToken: t,
                        }),
                        console.log("SDK.Xsolla: iap consumed ", e, t, n);
                    })
                    .catch((a) => {
                      var l;
                      g.emit("onConsume", {
                        success: r,
                        offerToken: e,
                        storeId:
                          null !==
                            (l =
                              null === o || void 0 === o
                                ? void 0
                                : o.storeId) && void 0 !== l
                            ? l
                            : e,
                        status: r ? "success" : "failed",
                        errorMessage: r ? void 0 : a,
                        transactionToken: t,
                      }),
                        console.log("SDK.Xsolla: iap consume failed", e, t, n);
                    });
                },
                [g, y, L]
              ),
              D = (0, o.useCallback)(
                (e, t, n) => {
                  var r;
                  "consumable" ===
                  (null === b ||
                  void 0 === b ||
                  null === (r = b.get(e)) ||
                  void 0 === r
                    ? void 0
                    : r.type)
                    ? T.current
                        .consumeItem(() => _({ shouldLogin: !1 }), e, n)
                        .then((r) => z(e, t, n, !0))
                        .catch((r) => {
                          z(e, t, n, !1),
                            console.error(
                              "SDK.Xsolla: Error occurred during consume item",
                              e,
                              t,
                              n,
                              r
                            );
                        })
                    : z(e, t, n, !0);
                },
                [z, b]
              );
            (0, o.useEffect)(() => {
              s &&
                f &&
                (console.log("SDK.Xsolla: fetching virtual items..."),
                R().finally(() => {}),
                console.log("SDK.Xsolla: fetching virtual inventory..."),
                L()
                  .then((e) => {
                    e && w(e), l(!0);
                  })
                  .catch((e) => {
                    console.error(
                      "SDK.Xsolla: Error occurred during loading user inventory"
                    );
                  }));
            }, [f, s, R, L]);
            const j = (0, o.useCallback)((e, t) => {
              (p.current = e),
                (m.current = t),
                console.log("SDK.Xsolla: initing xsolla adapter"),
                d(!0),
                r(!0);
            }, []);
            return {
              init: j,
              iapPurchase: (e, t) => {
                N(e, t);
              },
              iapConsume: (e, t, n) => {
                D(e, t, n);
              },
              storeProducts: y,
              inventoryState: Wt(y, b),
              initCompleted: i && a,
              iapDialogOpened: k === Vt.OPENED,
              eventBus: g,
            };
          };
        var Bt = n(414);
        const Gt = (0, o.createContext)({}),
          Zt = (e) => {
            let { children: t, xsollaConfig: n } = e;
            const r = Ht(n);
            return (0, Bt.jsx)(Gt.Provider, { value: r, children: t });
          },
          qt = () => (0, o.useContext)(Gt);
      },
      609: (e, t, n) => {
        n.d(t, { $: () => i, C: () => l });
        var r = n(950),
          o = n(414);
        const a = (0, r.createContext)({}),
          l = (e) => {
            let { children: t } = e;
            const [n, l] = (0, r.useState)(null),
              i = {
                setDeviceType: l,
                getDeviceType: (0, r.useCallback)(() => n, [n]),
                deviceType: n,
              };
            return (
              (0, r.useEffect)(() => {
                console.log("New device type set", n);
              }, [n]),
              (0, o.jsx)(a.Provider, { value: i, children: t })
            );
          },
          i = () => (0, r.useContext)(a);
      },
      641: (e, t, n) => {
        n.d(t, { T: () => u, m: () => i });
        var r = n(950),
          o = n(143),
          a = n(414);
        const l = (0, r.createContext)({}),
          i = (e) => {
            let { children: t } = e;
            const [n] = (0, r.useState)((0, o.G)());
            return (0, a.jsx)(l.Provider, { value: n, children: t });
          },
          u = () => (0, r.useContext)(l);
      },
      688: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useCanvasIdentifier = void 0);
        var r = n(950),
          o = 0,
          a = "react-unity-webgl-canvas";
        t.useCanvasIdentifier = function (e) {
          var t = (0, r.useState)(0),
            n = t[0],
            l = t[1],
            i = (0, r.useCallback)(function () {
              l(function (e) {
                return e + 1;
              });
            }, []);
          return void 0 !== e
            ? [e, i]
            : [
                (0, r.useMemo)(
                  function () {
                    return [a, o].join("-");
                  },
                  [n]
                ),
                i,
              ];
        };
      },
      754: (e, t, n) => {
        t.sT = t.G9 = void 0;
        var r = n(423);
        Object.defineProperty(t, "G9", {
          enumerable: !0,
          get: function () {
            return r.Unity;
          },
        });
        var o = n(943);
        Object.defineProperty(t, "sT", {
          enumerable: !0,
          get: function () {
            return o.useUnityContext;
          },
        });
        var a = n(142);
      },
      863: (e, t, n) => {
        var r = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var l = {
            d: {
              f: a,
              r: function () {
                throw Error(o(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal");
        var u =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(o(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = l.p;
            try {
              if (((u.T = null), (l.p = 2), e)) return e();
            } finally {
              (u.T = t), (l.p = n), l.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              l.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && l.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                o = "string" === typeof t.integrity ? t.integrity : void 0,
                a =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? l.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: o, fetchPriority: a }
                  )
                : "script" === n &&
                  l.d.X(e, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  l.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && l.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              l.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                l.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else l.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            l.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = "19.1.1");
      },
      916: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function o(e, t, r) {
          var o = null;
          if (
            (void 0 !== r && (o = "" + r),
            void 0 !== t.key && (o = "" + t.key),
            "key" in t)
          )
            for (var a in ((r = {}), t)) "key" !== a && (r[a] = t[a]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: o,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (t.Fragment = r), (t.jsx = o), (t.jsxs = o);
      },
      943: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useUnityContext = void 0);
        var r = n(950),
          o = n(960);
        t.useUnityContext = function (e) {
          var t = (0, r.useState)(null),
            n = t[0],
            a = t[1],
            l = (0, r.useState)(0),
            i = l[0],
            u = l[1],
            s = (0, r.useState)(!1),
            c = s[0],
            f = s[1],
            d = (0, r.useState)(),
            p = d[0],
            m = d[1],
            h = (0, o.useEventSystem)(),
            g = (0, r.useRef)({
              companyName: e.companyName,
              productName: e.productName,
              productVersion: e.productVersion,
              codeUrl: e.codeUrl,
              dataUrl: e.dataUrl,
              frameworkUrl: e.frameworkUrl,
              loaderUrl: e.loaderUrl,
              memoryUrl: e.memoryUrl,
              symbolsUrl: e.symbolsUrl,
              streamingAssetsUrl: e.streamingAssetsUrl,
              workerUrl: e.workerUrl,
              webglContextAttributes: e.webglContextAttributes,
              cacheControl: e.cacheControl,
              autoSyncPersistentDataPath: e.autoSyncPersistentDataPath,
              setUnityInstance: a,
              setLoadingProgression: u,
              setIsLoaded: f,
              setInitialisationError: m,
            }),
            y = (0, r.useCallback)(
              function (e) {
                return null === n || void 0 === n
                  ? void 0
                  : n.SetFullscreen(e ? 1 : 0);
              },
              [n]
            ),
            v = (0, r.useCallback)(
              function () {
                var e;
                return null ===
                  (e = null === n || void 0 === n ? void 0 : n.Module.canvas) ||
                  void 0 === e
                  ? void 0
                  : e.requestPointerLock();
              },
              [n]
            ),
            b = (0, r.useCallback)(
              function (e, t, r) {
                return null === n || void 0 === n
                  ? void 0
                  : n.SendMessage(e, t, r);
              },
              [n]
            ),
            w = (0, r.useCallback)(
              function (e, t) {
                var r;
                return null ===
                  (r = null === n || void 0 === n ? void 0 : n.Module.canvas) ||
                  void 0 === r
                  ? void 0
                  : r.toDataURL(e, t);
              },
              [n]
            ),
            S = (0, r.useCallback)(
              function () {
                var e;
                return null !==
                  (e = null === n || void 0 === n ? void 0 : n.Quit()) &&
                  void 0 !== e
                  ? e
                  : Promise.reject();
              },
              [n]
            ),
            k = (0, r.useCallback)(
              function () {
                var e;
                return null ===
                  (e =
                    null === n || void 0 === n ? void 0 : n.GetMetricsInfo) ||
                  void 0 === e
                  ? void 0
                  : e.call(n);
              },
              [n]
            );
          return {
            unityProvider: g.current,
            loadingProgression: i,
            isLoaded: c,
            initialisationError: p,
            requestFullscreen: y,
            requestPointerLock: v,
            sendMessage: b,
            takeScreenshot: w,
            unload: S,
            getMetricsInfo: k,
            addEventListener: h.addEventListener,
            removeEventListener: h.removeEventListener,
            UNSAFE__unityInstance: n,
          };
        };
      },
      950: (e, t, n) => {
        e.exports = n(983);
      },
      960: function (e, t, n) {
        var r =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, a = t.length; o < a; o++)
                (!r && o in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, o)),
                  (r[o] = t[o]));
            return e.concat(r || Array.prototype.slice.call(t));
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useEventSystem = void 0);
        var o = n(950),
          a = n(446),
          l = [];
        !0 === a.isBrowserEnvironment &&
          (window.dispatchReactUnityEvent = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var o = void 0;
            return (
              l.forEach(function (n) {
                o = n.apply(void 0, r([e], t, !1));
              }),
              o
            );
          });
        t.useEventSystem = function () {
          var e = (0, o.useRef)([]),
            t = (0, o.useCallback)(
              function (t, n) {
                e.current = r(
                  r([], e.current, !0),
                  [{ eventName: t, callback: n }],
                  !1
                );
              },
              [e]
            ),
            n = (0, o.useCallback)(
              function (t, n) {
                e.current = e.current.filter(function (e) {
                  return e.eventName !== t && e.callback !== n;
                });
              },
              [e]
            ),
            a = (0, o.useCallback)(
              function (t) {
                for (var n = [], r = 1; r < arguments.length; r++)
                  n[r - 1] = arguments[r];
                var o = e.current.find(function (e) {
                  return e.eventName === t;
                });
                if ("undefined" !== typeof o) return o.callback.apply(o, n);
              },
              [e]
            );
          return (
            (0, o.useEffect)(
              function () {
                return (
                  l.push(a),
                  function () {
                    l.splice(l.indexOf(a), 1);
                  }
                );
              },
              [a]
            ),
            { addEventListener: t, removeEventListener: n }
          );
        };
      },
      983: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), h(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = { H: null, A: null, T: null, S: null, V: null },
          E = Object.prototype.hasOwnProperty;
        function C(e, t, r, o, a, l) {
          return (
            (r = l.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: l,
            }
          );
        }
        function I(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function x(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T() {}
        function A(e, t, o, a, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return A((c = e._init)(e._payload), t, o, a, l);
                }
            }
          if (c)
            return (
              (l = l(e)),
              (c = "" === a ? "." + x(e, 0) : a),
              S(l)
                ? ((o = ""),
                  null != c && (o = c.replace(P, "$&/") + "/"),
                  A(l, t, o, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (I(l) &&
                    ((u = l),
                    (s =
                      o +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(P, "$&/") + "/") +
                      c),
                    (l = C(u.type, s, void 0, 0, 0, u.props))),
                  t.push(l)),
              1
            );
          c = 0;
          var f,
            m = "" === a ? "." : a + ":";
          if (S(e))
            for (var h = 0; h < e.length; h++)
              c += A((a = e[h]), t, o, (i = m + x(a, h)), l);
          else if (
            "function" ===
            typeof (h =
              null === (f = e) || "object" !== typeof f
                ? null
                : "function" === typeof (f = (p && f[p]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = h.call(e), h = 0; !(a = e.next()).done; )
              c += A((a = a.value), t, o, (i = m + x(a, h++)), l);
          else if ("object" === i) {
            if ("function" === typeof e.then)
              return A(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(T, T)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                o,
                a,
                l
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            A(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function R() {}
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!I(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            k),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return k.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = h({}, e.props),
              o = e.key;
            if (null != t)
              for (a in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (o = "" + t.key),
              t))
                !E.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var l = Array(a), i = 0; i < a; i++) l[i] = arguments[i + 2];
              r.children = l;
            }
            return C(e.type, o, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              o = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                E.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (o[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
              for (var i = Array(l), u = 0; u < l; u++) i[u] = arguments[u + 2];
              o.children = i;
            }
            if (e && e.defaultProps)
              for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
            return C(e, a, void 0, 0, 0, o);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = I),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = k.T,
              n = {};
            k.T = n;
            try {
              var r = e(),
                o = k.S;
              null !== o && o(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(R, _);
            } catch (a) {
              _(a);
            } finally {
              k.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return k.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return k.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return k.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return k.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return k.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return k.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t, n) {
            var r = k.H;
            if ("function" === typeof n)
              throw Error(
                "useEffect CRUD overload is not enabled in this build of React."
              );
            return r.useEffect(e, t);
          }),
          (t.useId = function () {
            return k.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return k.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return k.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return k.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return k.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return k.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return k.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return k.H.useRef(e);
          }),
          (t.useState = function (e) {
            return k.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return k.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return k.H.useTransition();
          }),
          (t.version = "19.1.1");
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = n(950),
    o = n(352),
    a = n(754),
    l = n(641),
    i = n(532);
  let u;
  u = n(504).A;
  const s = u;
  var c = n(414);
  const f = (0, r.createContext)({}),
    d = (e) => {
      let { children: t, videoConfig: n, onSdkInited: o } = e;
      const a = s(),
        [l, i] = (0, r.useState)(!1),
        [u, d] = (0, r.useState)(!1),
        p = (0, r.useCallback)(() => {
          a.onInit(n, () => {
            i(!1), d(!0);
          });
        }, [a, n]);
      return (
        (0, r.useEffect)(() => {
          o(u);
        }, [o, u]),
        (0, r.useEffect)(() => {
          u || l || (i(!0), p());
        }, [p, u, l]),
        (0, c.jsx)(f.Provider, {
          value: { sdkAdapterHandle: a },
          children: u ? t : null,
        })
      );
    };
  var p = n(569);
  let m = (function (e) {
    return (e[(e.add = 0)] = "add"), (e[(e.remove = 1)] = "remove"), e;
  })({});
  const h = function (e) {
    let {
      unityConfig: t,
      version: n,
      title: o,
      publisher: u,
      onGameLoaded: s,
      onGameReady: d,
      onGameBegan: h,
      onGameLoadingProgress: g,
    } = e;
    const [y, v] = (0, r.useState)(!1),
      [b, w] = (0, r.useState)(!1),
      [S, k] = (0, r.useState)(!0),
      [E, C] = (0, r.useState)(!1),
      [I, P] = (0, r.useState)(!1),
      x = (0, r.useRef)(null),
      [T, A] = (0, r.useReducer)(
        (e, t) =>
          e.some((e) => t.overlayId === e) || t.action !== m.add
            ? e.some((e) => t.overlayId === e) && t.action === m.remove
              ? e.filter((e) => e !== t.overlayId)
              : e
            : [...e, t.overlayId],
        [],
        () => []
      ),
      O = (function () {
        const [e, t] = (0, r.useState)(!document.hidden);
        return (
          (0, r.useEffect)(() => {
            const e = () => {
              t(!document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", e),
              () => {
                document.removeEventListener("visibilitychange", e);
              }
            );
          }, []),
          e
        );
      })(),
      N = (0, l.T)(),
      { getState: _ } = (0, i.$)(),
      { sdkAdapterHandle: R } = (0, r.useContext)(f),
      {
        storeProducts: L,
        inventoryState: z,
        iapPurchase: D,
        iapConsume: j,
        iapDialogOpened: U,
        initCompleted: F,
        eventBus: M,
      } = (0, p.X6)(),
      {
        unityProvider: V,
        isLoaded: W,
        loadingProgression: H,
        addEventListener: B,
        removeEventListener: G,
        sendMessage: Z,
      } = (0, a.sT)({
        loaderUrl: t.loaderScriptUrl,
        dataUrl: t.dataUrl,
        frameworkUrl: t.frameworkUrl,
        codeUrl: t.codeUrl,
        productVersion: n,
        productName: o,
        companyName: u,
      });
    (0, r.useEffect)(() => {
      g(H);
    }, [H, g]),
      (0, r.useEffect)(() => {
        console.log("Active overlays", JSON.stringify(T)),
          T.length > 0 ? w(!0) : w(!1);
      }, [T]);
    const q = (0, r.useCallback)(() => {
      v(!0);
    }, []);
    (0, r.useEffect)(
      () => (
        B("GameInited", q),
        () => {
          G("GameInited", q);
        }
      ),
      [B, G, q]
    );
    const X = (0, r.useMemo)(() => R.onLoadingStart, [R.onLoadingStart]),
      K = (0, r.useMemo)(() => R.onLoadingStop, [R.onLoadingStop]);
    (0, r.useEffect)(() => {
      y && (S ? X() : K());
    }, [S, y, X, K]);
    const Q = (0, r.useMemo)(() => R.onGameplayStart, [R.onGameplayStart]),
      Y = (0, r.useMemo)(() => R.onGameplayStop, [R]),
      J = (0, r.useMemo)(() => R.onHappyTime, [R]);
    (0, r.useEffect)(
      () => (
        B("OnHappyTime", J),
        () => {
          G("OnHappyTime", J);
        }
      ),
      [B, G, J]
    ),
      (0, r.useEffect)(() => {
        y && (E ? Q() : Y());
      }, [y, E, Q, Y]);
    const $ = (0, r.useCallback)(() => {
        k(!0);
      }, []),
      ee = (0, r.useCallback)(() => {
        k(!1);
      }, []);
    (0, r.useEffect)(
      () => (
        B("GameLoadingStart", $),
        () => {
          G("GameLoadingStart", $);
        }
      ),
      [B, G, $]
    ),
      (0, r.useEffect)(
        () => (
          B("GameLoadingStop", ee),
          () => {
            G("GameLoadingStop", ee);
          }
        ),
        [B, G, ee]
      );
    const te = (0, r.useCallback)(() => {
        C(!0);
      }, []),
      ne = (0, r.useCallback)(() => {
        C(!1);
      }, []);
    (0, r.useEffect)(
      () => (
        B("GameplayStart", te),
        () => {
          G("GameplayStart", te);
        }
      ),
      [B, G, te]
    ),
      (0, r.useEffect)(
        () => (
          B("GameplayStop", ne),
          () => {
            G("GameplayStop", ne);
          }
        ),
        [B, G, ne]
      );
    const re = (0, r.useCallback)(
      function (e, t) {
        console.log("sending ".concat(e, ":"), t),
          Z("GuestController", e, t ? JSON.stringify(t) : void 0);
      },
      [Z]
    );
    (0, r.useEffect)(() => {
      y &&
        (I
          ? (console.log("PauseGuest"), re("PauseGuest", {}))
          : (console.log("ResumeGuest"), re("ResumeGuest", {})));
    }, [y, I, re]),
      (0, r.useEffect)(() => {
        console.log("PageVisibility changed", O);
      }, [O]),
      (0, r.useEffect)(() => {
        y && P(!(!b && O && !U));
      }, [y, re, b, O, U]),
      (0, r.useEffect)(() => {
        y &&
          _().forEach((e) => {
            re("AdStateChanged", {
              placementId: e.placementId,
              state: e.isPlayable,
            });
          });
      }, [y, _, re]),
      (0, r.useEffect)(() => {
        if (y)
          return N.on("onVideoStatesChanged", (e) => {
            e.forEach((e) => {
              re("AdStateChanged", {
                placementId: e.placementId,
                state: e.isPlayable,
              });
            });
          });
      }, [y, N, re]),
      (0, r.useEffect)(() => {
        if (!y) return;
        const e = N.on("onVideoRequested", (e) => {
            A({ overlayId: "video:".concat(e), action: m.add });
          }),
          t = N.on("onVideoStart", (e) => {
            A({ overlayId: "video:".concat(e), action: m.add });
          }),
          n = N.on("onVideoFinished", (e, t, n) => {
            A({ overlayId: "video:".concat(e), action: m.remove }),
              re("AdRewardReceived", {
                placementId: e,
                rewardReceived: n,
                hasReward: t,
              });
          });
        return () => {
          e(), t(), n();
        };
      }, [y, N, re]),
      (0, r.useEffect)(() => {
        var e;
        y &&
          L &&
          re("IapProducts", {
            products: Array.from(
              null !== (e = null === L || void 0 === L ? void 0 : L.values()) &&
                void 0 !== e
                ? e
                : []
            ),
          });
      }, [y, L, re, F]),
      (0, r.useEffect)(() => {
        var e;
        y &&
          z &&
          F &&
          re("IapInventoryState", {
            inventory: Array.from(
              null !== (e = null === z || void 0 === z ? void 0 : z.values()) &&
                void 0 !== e
                ? e
                : []
            ),
          });
      }, [y, z, re, F]),
      (0, r.useEffect)(
        () =>
          M.on("onPurchased", (e) => {
            re("IapPurchased", {
              transactionToken: e.transactionToken,
              storeId: e.storeId,
              offerToken: e.offerToken,
              success: e.success,
              status: e.status,
              errorMessage: e.errorMessage,
              currentQuantity: e.currentQuantity,
            });
          }),
        [M, re]
      );
    const oe = (0, r.useCallback)(
      (e) => {
        R.onPlayVideo(e);
      },
      [R]
    );
    (0, r.useEffect)(
      () => (
        B("AdPlay", oe),
        () => {
          G("AdPlay", oe);
        }
      ),
      [B, G, oe]
    ),
      (0, r.useEffect)(() => {
        y &&
          re("ControllerConfigUpdated", {
            debug: t.flags.includes("debug"),
            flags: t.flags,
          });
      }, [y, t.flags, re]);
    const ae = (0, r.useCallback)(
      (e) => {
        const t = JSON.parse(e).offerToken,
          n = JSON.parse(e).transactionToken;
        console.log("Purchase", t, n), D(t, n);
      },
      [D]
    );
    (0, r.useEffect)(
      () => (
        B("IapPurchase", ae),
        () => {
          G("IapPurchase", ae);
        }
      ),
      [B, G, ae]
    );
    const le = (0, r.useCallback)(
      (e) => {
        const t = JSON.parse(e),
          n = t.offerToken,
          r = t.transactionToken,
          o = t.quantity;
        j(n, r, o), console.log("Consume", n, r, o);
      },
      [j]
    );
    return (
      (0, r.useEffect)(
        () => (
          B("IapConsume", le),
          () => {
            G("IapConsume", le);
          }
        ),
        [B, G, le]
      ),
      (0, r.useEffect)(() => {
        y && console.log("Game inited:", y);
      }, [y]),
      (0, r.useEffect)(() => {
        d(W && y);
      }, [W, y, d]),
      (0, r.useEffect)(() => {
        s(W);
      }, [W, s]),
      (0, r.useEffect)(() => {
        h(!0);
      }, [h]),
      (0, c.jsx)(c.Fragment, {
        children: (0, c.jsx)(a.G9, {
          className: "unity",
          matchWebGLToCanvasSize: !0,
          unityProvider: V,
          style: { outline: "none", width: "100%", height: "100%" },
          ref: x,
        }),
      })
    );
  };
  const g = function (e) {
    let { shouldDisplayLoading: t, loaderRatio: n } = e;
    return (0, c.jsx)(c.Fragment, {
      children:
        t &&
        (0, c.jsx)("div", {
          className: "loading-overlay",
          children: (0, c.jsxs)("div", {
            className: "custom-loader",
            children: [
              (0, c.jsx)("div", {
                className: "loading-text",
                children: "LOADING ...",
              }),
              (0, c.jsx)("div", {
                className: "loading-bar-container",
                children: (0, c.jsx)("div", { className: "loading-bar-fill" }),
              }),
            ],
          }),
        }),
    });
  };
  var y = n(609);
  const v = (0, r.createContext)(void 0),
    b = (e) => {
      var t;
      let { options: n, children: o } = e;
      const a = (0, r.useRef)({
          serverTimeAtSync: 0,
          perfNowAtSync: 0,
          driftThresholdMs:
            null !== (t = n.driftThresholdMs) && void 0 !== t ? t : 5e3,
          initialized: !1,
        }),
        [l, i] = (0, r.useState)(0);
      async function u() {
        const e = performance.now(),
          t = await fetch(n.url, { cache: "no-store" }),
          r = await t.text();
        let o;
        if ((console.log("Got time: ".concat(r)), "number" === typeof r)) o = r;
        else {
          if ("string" !== typeof r)
            throw new Error("Invalid server time format");
          o = parseInt(r);
        }
        const l = performance.now(),
          u = l - e;
        (a.current.serverTimeAtSync = o + u / 2),
          (a.current.perfNowAtSync = l),
          (a.current.initialized = !0),
          i((e) => e + 1);
      }
      function s() {
        if (!a.current.initialized)
          throw new Error("ServerClock not initialized");
        return (
          a.current.serverTimeAtSync +
          (performance.now() - a.current.perfNowAtSync)
        );
      }
      return (
        (0, r.useEffect)(() => {
          let e, t;
          return (
            (async (r) => {
              await u(),
                (e = window.setInterval(() => {
                  const e =
                    a.current.serverTimeAtSync +
                    (performance.now() - a.current.perfNowAtSync);
                  Math.abs(e - s()) > a.current.driftThresholdMs && u();
                }, 2e3)),
                (t = window.setInterval(
                  () => u(),
                  null !== (r = n.updateIntervalMs) && void 0 !== r ? r : 6e5
                ));
            })(),
            () => {
              clearInterval(e), clearInterval(t);
            }
          );
        }, [n.url]),
        (0, c.jsx)(v.Provider, {
          value: { now: s, initialized: a.current.initialized },
          children: o,
        })
      );
    };
  const w = function () {
    var e;
    const t = window.gameConfig,
      n = (0, y.$)(),
      { now: o } = (function () {
        const e = (0, r.useContext)(v);
        if (!e)
          throw new Error(
            "serverClockProvider must be used within ServerClockProvider"
          );
        return e;
      })();
    (0, r.useEffect)(() => {
      window.getInfo = () =>
        JSON.stringify({ platform: t.platform, deviceType: n.getDeviceType() });
    }, [t.platform, n]),
      (0, r.useEffect)(() => {
        window._jbsSt = o
          ? () => {
              try {
                const e = new Date(o()).toISOString();
                if (e) return e;
              } catch (e) {
                console.error("failed to get time", e);
              }
              return new Date().toISOString();
            }
          : () => new Date().toISOString();
      }, [o]),
      (0, r.useEffect)(
        () => (
          (window.getGAKeys = (e) =>
            JSON.stringify({
              gameKey: t.gaConfig.gameKey,
              secretKey: t.gaConfig.secretKey,
            })),
          () => {
            delete window.getGAKeys;
          }
        ),
        []
      );
    const [a, u] = (0, r.useState)(!1),
      [s, f] = (0, r.useState)(0),
      [m, b] = (0, r.useState)(!1),
      w = (0, r.useCallback)((e) => {
        u(e);
      }, []),
      S = (0, r.useCallback)((e) => {}, []),
      k = (0, r.useCallback)((e) => {}, []),
      E = (0, r.useCallback)((e) => {
        b(!0);
      }, []),
      C = (0, r.useCallback)((e) => {
        f(e);
      }, []);
    return (0, c.jsx)("div", {
      className: "App",
      children: (0, c.jsx)(l.m, {
        children: (0, c.jsx)(i.O, {
          children: (0, c.jsxs)("div", {
            className: "container",
            children: [
              (0, c.jsx)(g, {
                shouldDisplayLoading: !a,
                loaderRatio: (m ? 0.1 : 0) + 0.9 * s,
              }),
              (0, c.jsx)(p.ST, {
                xsollaConfig: t.xsolla,
                children: (0, c.jsx)(d, {
                  videoConfig:
                    null !== (e = t.videoConfig) && void 0 !== e ? e : [],
                  onSdkInited: E,
                  children: (0, c.jsx)(h, {
                    unityConfig: t.unityGameConfig,
                    version: t.version,
                    publisher: "Jelly Beans Studios",
                    title: t.name,
                    onGameLoaded: w,
                    onGameReady: S,
                    onGameBegan: k,
                    onGameLoadingProgress: C,
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  };
  o.createRoot(document.getElementById("root")).render(
    (0, c.jsx)(r.StrictMode, {
      children: (0, c.jsx)(y.C, {
        children: (0, c.jsx)(b, {
          options: {
            url: "https://time.api.jellybeansstudios.com/api/v1/time/epoch/now",
            updateIntervalMs: 6e5,
          },
          children: (0, c.jsx)(w, {}),
        }),
      }),
    })
  );
})();
