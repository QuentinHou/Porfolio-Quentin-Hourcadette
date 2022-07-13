/*! For license information please see main.59687ddd.js.LICENSE.txt */
!(function () {
  var e = {
      998: function (e, t, n) {
        "use strict";
        var r = n(458),
          i = { "text/plain": "Text", "text/html": "Url", default: "Text" };
        e.exports = function (e, t) {
          var n,
            a,
            o,
            l,
            u,
            s,
            c = !1;
          t || (t = {}), (n = t.debug || !1);
          try {
            if (
              ((o = r()),
              (l = document.createRange()),
              (u = document.getSelection()),
              ((s = document.createElement("span")).textContent = e),
              (s.style.all = "unset"),
              (s.style.position = "fixed"),
              (s.style.top = 0),
              (s.style.clip = "rect(0, 0, 0, 0)"),
              (s.style.whiteSpace = "pre"),
              (s.style.webkitUserSelect = "text"),
              (s.style.MozUserSelect = "text"),
              (s.style.msUserSelect = "text"),
              (s.style.userSelect = "text"),
              s.addEventListener("copy", function (r) {
                if ((r.stopPropagation(), t.format))
                  if (
                    (r.preventDefault(), "undefined" === typeof r.clipboardData)
                  ) {
                    n && console.warn("unable to use e.clipboardData"),
                      n && console.warn("trying IE specific stuff"),
                      window.clipboardData.clearData();
                    var a = i[t.format] || i.default;
                    window.clipboardData.setData(a, e);
                  } else
                    r.clipboardData.clearData(),
                      r.clipboardData.setData(t.format, e);
                t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
              }),
              document.body.appendChild(s),
              l.selectNodeContents(s),
              u.addRange(l),
              !document.execCommand("copy"))
            )
              throw new Error("copy command was unsuccessful");
            c = !0;
          } catch (f) {
            n && console.error("unable to copy using execCommand: ", f),
              n && console.warn("trying IE specific stuff");
            try {
              window.clipboardData.setData(t.format || "text", e),
                t.onCopy && t.onCopy(window.clipboardData),
                (c = !0);
            } catch (f) {
              n && console.error("unable to copy using clipboardData: ", f),
                n && console.error("falling back to prompt"),
                (a = (function (e) {
                  var t =
                    (/mac os x/i.test(navigator.userAgent)
                      ? "\u2318"
                      : "Ctrl") + "+C";
                  return e.replace(/#{\s*key\s*}/g, t);
                })(
                  "message" in t
                    ? t.message
                    : "Copy to clipboard: #{key}, Enter"
                )),
                window.prompt(a, e);
            }
          } finally {
            u &&
              ("function" == typeof u.removeRange
                ? u.removeRange(l)
                : u.removeAllRanges()),
              s && document.body.removeChild(s),
              o();
          }
          return c;
        };
      },
      568: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
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
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CopyToClipboard = void 0);
        var i = l(n(791)),
          a = l(n(998)),
          o = ["text", "onCopy", "options", "children"];
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
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
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  y(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function c(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]));
          }
          return i;
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function p(e, t) {
          return (
            (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            p(e, t)
          );
        }
        function h(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = g(e);
            if (t) {
              var i = g(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return v(this, n);
          };
        }
        function v(e, t) {
          if (t && ("object" === r(t) || "function" === typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return m(e);
        }
        function m(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function g(e) {
          return (
            (g = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            g(e)
          );
        }
        function y(e, t, n) {
          return (
            t in e
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
        var b = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && p(e, t);
          })(u, e);
          var t,
            n,
            r,
            l = h(u);
          function u() {
            var e;
            f(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              y(
                m((e = l.call.apply(l, [this].concat(n)))),
                "onClick",
                function (t) {
                  var n = e.props,
                    r = n.text,
                    o = n.onCopy,
                    l = n.children,
                    u = n.options,
                    s = i.default.Children.only(l),
                    c = (0, a.default)(r, u);
                  o && o(r, c),
                    s &&
                      s.props &&
                      "function" === typeof s.props.onClick &&
                      s.props.onClick(t);
                }
              ),
              e
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.text, e.onCopy, e.options, e.children),
                    n = c(e, o),
                    r = i.default.Children.only(t);
                  return i.default.cloneElement(
                    r,
                    s(s({}, n), {}, { onClick: this.onClick })
                  );
                },
              },
            ]) && d(t.prototype, n),
            r && d(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            u
          );
        })(i.default.PureComponent);
        (t.CopyToClipboard = b),
          y(b, "defaultProps", { onCopy: void 0, options: void 0 });
      },
      29: function (e, t, n) {
        "use strict";
        var r = n(568).CopyToClipboard;
        (r.CopyToClipboard = r), (e.exports = r);
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = m.hasOwnProperty(t) ? m[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          A = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var N = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          V = Object.assign;
        function z(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function I(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var i = s.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l])) {
                        var u = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case L:
              return "Suspense";
            case A:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
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
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
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
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
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
        function Y(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ae(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = wi(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Le() {}
        var Ae = !1;
        function _e(e, t, n) {
          if (Ae) return e(t, n);
          Ae = !0;
          try {
            return je(e, t, n);
          } finally {
            (Ae = !1), (null !== Se || null !== Ee) && (Le(), Te());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wi(n);
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
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ne = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Ne = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Ne = !1;
          }
        function Me(e, t, n, r, i, a, o, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ve = null,
          ze = !1,
          Fe = null,
          Ie = {
            onError: function (e) {
              (De = !0), (Ve = e);
            },
          };
        function Ue(e, t, n, r, i, a, o, l, u) {
          (De = !1), (Ve = null), Me.apply(Ie, arguments);
        }
        function Be(e) {
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
        function We(e) {
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
        function He(e) {
          if (Be(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return He(i), e;
                    if (o === r) return He(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var l = !1, u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = i.unstable_scheduleCallback,
          Qe = i.unstable_cancelCallback,
          Ye = i.unstable_shouldYield,
          Xe = i.unstable_requestPaint,
          Ke = i.unstable_now,
          Ze = i.unstable_getCurrentPriorityLevel,
          Je = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~i;
            0 !== l ? (r = ft(l)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          Et,
          Ct,
          Pt = !1,
          Tt = [],
          jt = null,
          Lt = null,
          At = null,
          _t = new Map(),
          Ot = new Map(),
          Nt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              At = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Vt(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
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
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          zt(e) && n.delete(t);
        }
        function It() {
          (Pt = !1),
            null !== jt && zt(jt) && (jt = null),
            null !== Lt && zt(Lt) && (Lt = null),
            null !== At && zt(At) && (At = null),
            _t.forEach(Ft),
            Ot.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, It)));
        }
        function Bt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Tt.length) {
            Ut(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== Lt && Ut(Lt, e),
              null !== At && Ut(At, e),
              _t.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Nt.length;
            n++
          )
            (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn; )
            Vt(n), null === n.blockedOn && Nt.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var i = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = i), (Wt.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          var i = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = i), (Wt.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var i = Yt(e, t, n, r);
            if (null === i) Hr(e, t, r, Qt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (jt = Dt(jt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Lt = Dt(Lt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (At = Dt(At, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return _t.set(a, Dt(_t.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Ot.set(a, Dt(Ot.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && wt(a),
                  null === (a = Yt(e, t, n, r)) && Hr(e, t, r, Qt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = yi((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Xt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            i = "value" in Kt ? Kt.value : Kt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Jt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = V({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = V({}, fn, {
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
            getModifierState: Cn,
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
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(V({}, pn, { dataTransfer: 0 })),
          mn = an(V({}, fn, { relatedTarget: 0 })),
          gn = an(
            V({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = V({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(V({}, sn, { data: 0 })),
          wn = {
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
          kn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = V({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Pn),
          jn = an(
            V({}, pn, {
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
          Ln = an(
            V({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          An = an(
            V({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = V({}, pn, {
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
          }),
          On = an(_n),
          Nn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Mn,
          Vn = c && (!Rn || (Mn && 8 < Mn && 11 >= Mn)),
          zn = String.fromCharCode(32),
          Fn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
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
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Pe(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          qn = null;
        function Qn(e) {
          zr(e, 0);
        }
        function Yn(e) {
          if (q(xi(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (qn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            $n(t, qn, e, we(e)), _e(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Yn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
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
            var i = n[r];
            if (!f.call(t, i) || !lr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
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
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
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
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
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
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = Cr("animationend"),
          Tr = Cr("animationiteration"),
          jr = Cr("animationstart"),
          Lr = Cr("transitionend"),
          Ar = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Ar.set(e, t), u(t, [e]);
        }
        for (var Nr = 0; Nr < _r.length; Nr++) {
          var Rr = _r[Nr];
          Or(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Or(Pr, "onAnimationEnd"),
          Or(Tr, "onAnimationIteration"),
          Or(jr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Lr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Vr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, l, u, s) {
              if ((Ue.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = Ve;
                (De = !1), (Ve = null), ze || ((ze = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && i.isPropagationStopped()))
                    break e;
                  Vr(i, l, s), (a = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (l = r[o]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && i.isPropagationStopped())
                  )
                    break e;
                  Vr(i, l, s), (a = u);
                }
            }
          }
          if (ze) throw ((e = Fe), (ze = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var i = $t;
              break;
            case 4:
              i = Gt;
              break;
            default:
              i = qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ne ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === i ||
                        (8 === u.nodeType && u.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = yi(l))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = a,
              i = we(n),
              o = [];
            e: {
              var l = Ar.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
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
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Pr:
                  case Tr:
                  case jr:
                    u = gn;
                    break;
                  case Lr:
                    u = An;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Oe(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!yi(s) && !s[hi])) &&
                  (u || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? yi(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : xi(u)),
                  (p = null == s ? l : xi(s)),
                  ((l = new c(v, h + "leave", u, n, i)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  yi(i) === r &&
                    (((c = new c(d, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Qr(o, l, u, c, !1),
                  null !== s && null !== f && Qr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? xi(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Xn;
              else if (Hn(l))
                if (Kn) m = or;
                else {
                  m = ir;
                  var g = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ar);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? xi(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Vn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (y = en())
                    : ((Zt = "value" in (Kt = i) ? Kt.value : Kt.textContent),
                      (Bn = !0))),
                0 < (g = Gr(r, b)).length &&
                  ((b = new xn(b, e, null, n, i)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Rn && In(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Bn = !1), e)
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
                          return Vn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((i = new xn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            zr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Oe(e, n)) && r.unshift($r(e, a, i)),
              null != (a = Oe(e, t)) && r.push($r(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              i
                ? null != (u = Oe(n, a)) && o.unshift($r(n, u, l))
                : i || (null != (u = Oe(n, a)) && o.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(li);
                }
              : ri;
        function li(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ui(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Bt(t);
        }
        function si(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
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
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          mi = "__reactListeners$" + fi,
          gi = "__reactHandles$" + fi;
        function yi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wi(e) {
          return e[pi] || null;
        }
        var ki = [],
          Si = -1;
        function Ei(e) {
          return { current: e };
        }
        function Ci(e) {
          0 > Si || ((e.current = ki[Si]), (ki[Si] = null), Si--);
        }
        function Pi(e, t) {
          Si++, (ki[Si] = e.current), (e.current = t);
        }
        var Ti = {},
          ji = Ei(Ti),
          Li = Ei(!1),
          Ai = Ti;
        function _i(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ti;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Oi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ni() {
          Ci(Li), Ci(ji);
        }
        function Ri(e, t, n) {
          if (ji.current !== Ti) throw Error(a(168));
          Pi(ji, t), Pi(Li, n);
        }
        function Mi(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, W(e) || "Unknown", i));
          return V({}, n, r);
        }
        function Di(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ti),
            (Ai = ji.current),
            Pi(ji, e),
            Pi(Li, Li.current),
            !0
          );
        }
        function Vi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Mi(e, t, Ai)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ci(Li),
              Ci(ji),
              Pi(ji, e))
            : Ci(Li),
            Pi(Li, n);
        }
        var zi = null,
          Fi = !1,
          Ii = !1;
        function Ui(e) {
          null === zi ? (zi = [e]) : zi.push(e);
        }
        function Bi() {
          if (!Ii && null !== zi) {
            Ii = !0;
            var e = 0,
              t = bt;
            try {
              var n = zi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (zi = null), (Fi = !1);
            } catch (i) {
              throw (null !== zi && (zi = zi.slice(e + 1)), qe(Je, Bi), i);
            } finally {
              (bt = t), (Ii = !1);
            }
          }
          return null;
        }
        var Wi = [],
          Hi = 0,
          $i = null,
          Gi = 0,
          qi = [],
          Qi = 0,
          Yi = null,
          Xi = 1,
          Ki = "";
        function Zi(e, t) {
          (Wi[Hi++] = Gi), (Wi[Hi++] = $i), ($i = e), (Gi = t);
        }
        function Ji(e, t, n) {
          (qi[Qi++] = Xi), (qi[Qi++] = Ki), (qi[Qi++] = Yi), (Yi = e);
          var r = Xi;
          e = Ki;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Xi = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Ki = a + e);
          } else (Xi = (1 << a) | (n << i) | r), (Ki = e);
        }
        function ea(e) {
          null !== e.return && (Zi(e, 1), Ji(e, 1, 0));
        }
        function ta(e) {
          for (; e === $i; )
            ($i = Wi[--Hi]), (Wi[Hi] = null), (Gi = Wi[--Hi]), (Wi[Hi] = null);
          for (; e === Yi; )
            (Yi = qi[--Qi]),
              (qi[Qi] = null),
              (Ki = qi[--Qi]),
              (qi[Qi] = null),
              (Xi = qi[--Qi]),
              (qi[Qi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = _s(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = si(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yi ? { id: Xi, overflow: Ki } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = _s(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sa(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = si(n.nextSibling);
                var r = na;
                t && la(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (ua(e)) throw (da(), Error(a(418)));
            for (; t; ) oa(e, t), (t = si(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = si(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? si(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var e = ra; e; ) e = si(e.nextSibling);
        }
        function pa() {
          (ra = na = null), (ia = !1);
        }
        function ha(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var va = x.ReactCurrentBatchConfig;
        function ma(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ga = Ei(null),
          ya = null,
          ba = null,
          xa = null;
        function wa() {
          xa = ba = ya = null;
        }
        function ka(e) {
          var t = ga.current;
          Ci(ga), (e._currentValue = t);
        }
        function Sa(e, t, n) {
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
        function Ea(e, t) {
          (ya = e),
            (xa = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Ca(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ba)
            ) {
              if (null === ya) throw Error(a(308));
              (ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return t;
        }
        var Pa = null;
        function Ta(e) {
          null === Pa ? (Pa = [e]) : Pa.push(e);
        }
        function ja(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Ta(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Aa = !1;
        function _a(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Oa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Na(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ra(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & ju))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              La(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Ta(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function Ma(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Da(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Va(e, t, n, r) {
          var i = e.updateQueue;
          Aa = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === o ? (a = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = s = u = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = V({}, f, d);
                      break e;
                    case 2:
                      Aa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (i.baseState = u),
              (i.firstBaseUpdate = s),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (Du |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function za(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Fa = new r.Component().refs;
        function Ia(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ua = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              i = ts(e),
              a = Na(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ra(e, a, i)) && (ns(t, e, i, r), Ma(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              i = ts(e),
              a = Na(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ra(e, a, i)) && (ns(t, e, i, r), Ma(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              i = Na(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Ra(e, i, r)) && (ns(t, e, r, n), Ma(t, e, r));
          },
        };
        function Ba(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(i, a);
        }
        function Wa(e, t, n) {
          var r = !1,
            i = Ti,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ca(a))
              : ((i = Oi(t) ? Ai : ji.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? _i(e, i)
                  : Ti)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ua),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ha(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = Fa), _a(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ca(a))
            : ((a = Oi(t) ? Ai : ji.current), (i.context = _i(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ia(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Ua.enqueueReplaceState(i, i.state, null),
              Va(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Ga(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === Fa && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Qa(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
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
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Ns(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Vs(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === O &&
                    Qa(a) === t.type))
              ? (((r = i(t, n.props)).ref = Ga(e, t, n)), (r.return = e), r)
              : (((r = Rs(n.type, n.key, n.props, null, e.mode, r)).ref = Ga(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zs(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Vs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Rs(t.type, t.key, t.props, null, e.mode, n)).ref = Ga(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = zs(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t;
              qa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? s(e, t, n, r) : null;
                case k:
                  return n.key === i ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== i ? null : f(e, t, n, r, null);
              qa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              qa(t, r);
            }
            return null;
          }
          function v(i, a, l, u) {
            for (
              var s = null, c = null, f = a, v = (a = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(i, f, l[v], u);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(i, f),
                (a = o(g, a, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === l.length) return n(i, f), ia && Zi(i, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(i, l[v], u)) &&
                  ((a = o(f, a, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ia && Zi(i, v), s;
            }
            for (f = r(i, f); v < l.length; v++)
              null !== (m = h(f, i, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (a = o(m, a, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Zi(i, v),
              s
            );
          }
          function m(i, l, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (
              var f = (c = null), v = l, m = (l = 0), g = null, y = u.next();
              null !== v && !y.done;
              m++, y = u.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(i, v, y.value, s);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (l = o(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(i, v), ia && Zi(i, m), c;
            if (null === v) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(i, y.value, s)) &&
                  ((l = o(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ia && Zi(i, m), c;
            }
            for (v = r(i, v); !y.done; m++, y = u.next())
              null !== (y = h(v, i, m, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Zi(i, m),
              c
            );
          }
          return function e(r, a, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === O &&
                            Qa(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = Ga(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((a = Ms(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = a))
                      : (((u = Rs(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ga(r, a, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = zs(o, r.mode, u)).return = r), (r = a);
                  }
                  return l(r);
                case O:
                  return e(r, a, (c = o._init)(o._payload), u);
              }
              if (te(o)) return v(r, a, o, u);
              if (M(o)) return m(r, a, o, u);
              qa(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Vs(o, r.mode, u)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Xa = Ya(!0),
          Ka = Ya(!1),
          Za = {},
          Ja = Ei(Za),
          eo = Ei(Za),
          to = Ei(Za);
        function no(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function ro(e, t) {
          switch ((Pi(to, t), Pi(eo, e), Pi(Ja, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ci(Ja), Pi(Ja, t);
        }
        function io() {
          Ci(Ja), Ci(eo), Ci(to);
        }
        function ao(e) {
          no(to.current);
          var t = no(Ja.current),
            n = ue(t, e.type);
          t !== n && (Pi(eo, e), Pi(Ja, n));
        }
        function oo(e) {
          eo.current === e && (Ci(Ja), Ci(eo));
        }
        var lo = Ei(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
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
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          go = null,
          yo = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function ko() {
          throw Error(a(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, i, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (go = mo = null),
                (t.updateQueue = null),
                (fo.current = sl),
                (e = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (go = mo = vo = null),
            (yo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Co() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Po() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function To() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (mo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function jo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Lo(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = mo,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var l = i.next;
              (i.next = o.next), (o.next = l);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (vo.lanes |= f),
                  (Du |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (vo.lanes |= o), (Du |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ao(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== i);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function _o() {}
        function Oo(e, t) {
          var n = vo,
            r = To(),
            i = t(),
            o = !lr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (xl = !0)),
            (r = r.queue),
            Ho(Mo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, Ro.bind(null, n, r, i, t), void 0, null),
              null === Lu)
            )
              throw Error(a(349));
            0 !== (30 & ho) || No(n, t, i);
          }
          return i;
        }
        function No(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ro(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && Vo(e);
        }
        function Mo(e, t, n) {
          return n(function () {
            Do(t) && Vo(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vo(e) {
          var t = La(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function zo(e) {
          var t = Po();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Fo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Io() {
          return To().memoizedState;
        }
        function Uo(e, t, n, r) {
          var i = Po();
          (vo.flags |= e),
            (i.memoizedState = Fo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var i = To();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((a = o.destroy), null !== r && So(r, o.deps)))
              return void (i.memoizedState = Fo(t, n, a, r));
          }
          (vo.flags |= e), (i.memoizedState = Fo(1 | t, n, a, r));
        }
        function Wo(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Bo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Bo(4, 2, e, t);
        }
        function Go(e, t) {
          return Bo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Yo() {}
        function Xo(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return To().memoizedState;
        }
        function tl(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            il(t, n);
          else if (null !== (n = ja(e, t, n, r))) {
            ns(n, e, r, es()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ts(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) il(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((i.next = i), Ta(t))
                      : ((i.next = u.next), (u.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (s) {}
            null !== (n = ja(e, t, i, r)) &&
              (ns(n, e, r, (i = es())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function il(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Ca,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ca,
            useCallback: function (e, t) {
              return (Po().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ca,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Po();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Po();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Po().memoizedState = e);
            },
            useState: zo,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (Po().memoizedState = e);
            },
            useTransition: function () {
              var e = zo(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Po().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                i = Po();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Lu)) throw Error(a(349));
                0 !== (30 & ho) || No(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Wo(Mo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Fo(9, Ro.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Po(),
                t = Lu.identifierPrefix;
              if (ia) {
                var n = Ki;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xi & ~(1 << (32 - ot(Xi) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ca,
            useCallback: Xo,
            useContext: Ca,
            useEffect: Ho,
            useImperativeHandle: Qo,
            useInsertionEffect: $o,
            useLayoutEffect: Go,
            useMemo: Ko,
            useReducer: Lo,
            useRef: Io,
            useState: function () {
              return Lo(jo);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Zo(To(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [Lo(jo)[0], To().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: Oo,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ca,
            useCallback: Xo,
            useContext: Ca,
            useEffect: Ho,
            useImperativeHandle: Qo,
            useInsertionEffect: $o,
            useLayoutEffect: Go,
            useMemo: Ko,
            useReducer: Ao,
            useRef: Io,
            useState: function () {
              return Ao(jo);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var t = To();
              return null === mo
                ? (t.memoizedState = e)
                : Zo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Ao(jo)[0], To().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: Oo,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Na(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hu || ((Hu = !0), ($u = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Na(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Gu ? (Gu = new Set([this])) : Gu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Na(-1, 1)).tag = 2), Ra(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Ka(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function kl(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Ea(t, i),
            (r = Eo(e, t, n, r, a, i)),
            (n = Co()),
            null === e || xl
              ? (ia && n && ea(t), (t.flags |= 1), wl(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Hl(e, t, i))
          );
        }
        function Sl(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Os(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rs(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), El(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Hl(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Ns(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Hl(e, t, i);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Tl(e, t, n, r, i);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pi(Nu, Ou),
                (Ou |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pi(Nu, Ou),
                  (Ou |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Pi(Nu, Ou),
                (Ou |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pi(Nu, Ou),
              (Ou |= r);
          return wl(e, t, i, n), t.child;
        }
        function Pl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tl(e, t, n, r, i) {
          var a = Oi(n) ? Ai : ji.current;
          return (
            (a = _i(t, a)),
            Ea(t, i),
            (n = Eo(e, t, n, r, a, i)),
            (r = Co()),
            null === e || xl
              ? (ia && r && ea(t), (t.flags |= 1), wl(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Hl(e, t, i))
          );
        }
        function jl(e, t, n, r, i) {
          if (Oi(n)) {
            var a = !0;
            Di(t);
          } else a = !1;
          if ((Ea(t, i), null === t.stateNode))
            Wl(e, t), Wa(t, n, r), $a(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Ca(s))
              : (s = _i(t, (s = Oi(n) ? Ai : ji.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Ha(t, o, r, s)),
              (Aa = !1);
            var d = t.memoizedState;
            (o.state = d),
              Va(t, r, o, i),
              (u = t.memoizedState),
              l !== r || d !== u || Li.current || Aa
                ? ("function" === typeof c &&
                    (Ia(t, n, c, r), (u = t.memoizedState)),
                  (l = Aa || Ba(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Oa(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : ma(t.type, l)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Ca(u))
                : (u = _i(t, (u = Oi(n) ? Ai : ji.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Ha(t, o, r, u)),
              (Aa = !1),
              (d = t.memoizedState),
              (o.state = d),
              Va(t, r, o, i);
            var h = t.memoizedState;
            l !== f || d !== h || Li.current || Aa
              ? ("function" === typeof p &&
                  (Ia(t, n, p, r), (h = t.memoizedState)),
                (s = Aa || Ba(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ll(e, t, n, r, a, i);
        }
        function Ll(e, t, n, r, i, a) {
          Pl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Vi(t, n, !1), Hl(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = r.state),
            i && Vi(t, n, !0),
            t.child
          );
        }
        function Al(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ri(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function _l(e, t, n, r, i) {
          return pa(), ha(i), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Ol,
          Nl,
          Rl,
          Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Vl(e, t, n) {
          var r,
            i = t.pendingProps,
            o = lo.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Pi(lo, 1 & o),
            null === e)
          )
            return (
              sa(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = i.children),
                  (e = i.fallback),
                  l
                    ? ((i = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Ds(u, i, 0, null)),
                      (e = Ms(e, i, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Ml),
                      e)
                    : zl(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = Ds(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Ms(o, i, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Ml),
                    o);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Fl(e, t, l, (r = fl((o = Error(a(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), xl || u)) {
                if (null !== (r = Lu)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), La(e, i), ns(r, e, i, -1));
                }
                return vs(), Fl(e, t, l, (r = fl(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ts.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = si(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((qi[Qi++] = Xi),
                    (qi[Qi++] = Ki),
                    (qi[Qi++] = Yi),
                    (Xi = e.id),
                    (Ki = e.overflow),
                    (Yi = t)),
                  ((t = zl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, i, r, o, n);
          if (l) {
            (l = i.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: i.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = s),
                  (t.deletions = null))
                : ((i = Ns(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Ns(r, l))
                : ((l = Ms(l, u, n, null)).flags |= 2),
              (l.return = t),
              (i.return = t),
              (i.sibling = l),
              (t.child = i),
              (i = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ml),
              i
            );
          }
          return (
            (e = (l = e.child).sibling),
            (i = Ns(l, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function zl(e, t) {
          return (
            ((t = Ds(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && ha(r),
            Xa(t, e.child, null, n),
            ((e = zl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Il(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sa(e.return, t, n);
        }
        function Ul(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Bl(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Il(e, n, t);
                else if (19 === e.tag) Il(e, n, t);
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
          if ((Pi(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Ul(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === uo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Ul(t, !0, n, null, a);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ns((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ns(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $l(e, t) {
          if (!ia)
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
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return Oi(t.type) && Ni(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                io(),
                Ci(Li),
                Ci(ji),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (os(aa), (aa = null)))),
                Gl(t),
                null
              );
            case 5:
              oo(t);
              var i = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Nl(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = no(Ja.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Mr.length; i++) Fr(Mr[i], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      X(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Fr("invalid", r);
                  }
                  for (var u in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (i = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (i = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), J(r, o, !0);
                      break;
                    case "textarea":
                      G(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    Ol(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Mr.length; i++) Fr(Mr[i], e);
                        i = r;
                        break;
                      case "source":
                        Fr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (i = r);
                        break;
                      case "details":
                        Fr("toggle", e), (i = r);
                        break;
                      case "input":
                        X(e, r), (i = Y(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = V({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, i), (s = i)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        G(e), J(e, r, !1);
                        break;
                      case "textarea":
                        G(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Rl(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = no(to.current)), no(Ja.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (Ci(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  da(), pa(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[di] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (o = !1);
                } else null !== aa && (os(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === Ru && (Ru = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                io(), null === e && Br(t.stateNode.containerInfo), Gl(t), null
              );
            case 10:
              return ka(t.type._context), Gl(t), null;
            case 19:
              if ((Ci(lo), null === (o = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) $l(o, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            $l(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pi(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Bu &&
                    ((t.flags |= 128),
                    (r = !0),
                    $l(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $l(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !ia)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $l(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = lo.current),
                  Pi(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ou) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Oi(t.type) && Ni(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                io(),
                Ci(Li),
                Ci(ji),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ci(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ci(lo), null;
            case 4:
              return io(), null;
            case 10:
              return ka(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ol = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Nl = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), no(Ja.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = Y(e, i)), (r = Y(e, r)), (o = []);
                  break;
                case "select":
                  (i = V({}, i, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var u = i[c];
                    for (a in u)
                      u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (s && s.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in s)
                        s.hasOwnProperty(a) &&
                          u[a] !== s[a] &&
                          (n || (n = {}), (n[a] = s[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Fr("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Rl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && eu(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function iu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function au(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), au(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[vi],
              delete t[mi],
              delete t[gi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || Jl(n, t);
            case 6:
              var r = cu,
                i = fu;
              (cu = null),
                du(e, t, n),
                (fu = i),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ui(e.parentNode, n)
                      : 1 === e.nodeType && ui(e, n),
                    Bt(e))
                  : ui(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (i = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      eu(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (Jl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Es(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  du(e, t, n),
                  (Xl = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl()),
              t.forEach(function (t) {
                var r = js.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(a(160));
                pu(o, l, i), (cu = null), (fu = !1);
                var s = i.alternate;
                null !== s && (s.return = null), (i.return = null);
              } catch (c) {
                Es(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  Es(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 1:
              vu(t, e), gu(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                gu(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      K(i, o),
                      be(u, l);
                    var c = be(u, o);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(i, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[pi] = o;
                  } catch (m) {
                    Es(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (m) {
                  Es(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Es(e, e.return, m);
                }
              break;
            case 4:
            default:
              vu(t, e), gu(e);
              break;
            case 13:
              vu(t, e),
                gu(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Uu = Ke())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || f), vu(t, e), (Xl = c))
                  : vu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Es(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (i = d.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Es(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    su(e, lu(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, lu(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Es(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Zl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var i = Zl,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Yl;
              if (!o) {
                var l = i.alternate,
                  u = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var s = Xl;
                if (((Yl = o), (Xl = u) && !s))
                  for (Zl = i; null !== Zl; )
                    (u = (o = Zl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ku(i)
                        : null !== u
                        ? ((u.return = o), (Zl = u))
                        : ku(i);
                for (; null !== a; ) (Zl = a), bu(a, t, n), (a = a.sibling);
                (Zl = i), (Yl = l), (Xl = s);
              }
              xu(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Zl = a))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ma(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && za(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        za(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Xl || (512 & t.flags && iu(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function wu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, i, u);
                    }
                  }
                  var a = t.return;
                  try {
                    iu(t);
                  } catch (u) {
                    Es(t, a, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    iu(t);
                  } catch (u) {
                    Es(t, o, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Su,
          Eu = Math.ceil,
          Cu = x.ReactCurrentDispatcher,
          Pu = x.ReactCurrentOwner,
          Tu = x.ReactCurrentBatchConfig,
          ju = 0,
          Lu = null,
          Au = null,
          _u = 0,
          Ou = 0,
          Nu = Ei(0),
          Ru = 0,
          Mu = null,
          Du = 0,
          Vu = 0,
          zu = 0,
          Fu = null,
          Iu = null,
          Uu = 0,
          Bu = 1 / 0,
          Wu = null,
          Hu = !1,
          $u = null,
          Gu = null,
          qu = !1,
          Qu = null,
          Yu = 0,
          Xu = 0,
          Ku = null,
          Zu = -1,
          Ju = 0;
        function es() {
          return 0 !== (6 & ju) ? Ke() : -1 !== Zu ? Zu : (Zu = Ke());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & ju) && 0 !== _u
            ? _u & -_u
            : null !== va.transition
            ? (0 === Ju && (Ju = vt()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Ku = null), Error(a(185)));
          gt(e, n, r),
            (0 !== (2 & ju) && e === Lu) ||
              (e === Lu && (0 === (2 & ju) && (Vu |= n), 4 === Ru && ls(e, _u)),
              rs(e, r),
              1 === n &&
                0 === ju &&
                0 === (1 & t.mode) &&
                ((Bu = Ke() + 500), Fi && Bi()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                l = 1 << o,
                u = i[o];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (i[o] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Lu ? _u : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fi = !0), Ui(e);
                  })(us.bind(null, e))
                : Ui(us.bind(null, e)),
                oi(function () {
                  0 === (6 & ju) && Bi();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, is.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function is(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & ju))) throw Error(a(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Lu ? _u : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
          else {
            t = r;
            var i = ju;
            ju |= 2;
            var o = hs();
            for (
              (Lu === e && _u === t) ||
              ((Wu = null), (Bu = Ke() + 500), ds(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            wa(),
              (Cu.current = o),
              (ju = i),
              null !== Au ? (t = 0) : ((Lu = null), (_u = 0), (t = Ru));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = as(e, i))),
              1 === t)
            )
              throw ((n = Mu), ds(e, 0), ls(e, r), rs(e, Ke()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(a(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
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
                  })(i) &&
                  (2 === (t = ms(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = as(e, o))),
                  1 === t))
              )
                throw ((n = Mu), ds(e, 0), ls(e, r), rs(e, Ke()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ws(e, Iu, Wu);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Uu + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(ws.bind(null, e, Iu, Wu), t);
                    break;
                  }
                  ws(e, Iu, Wu);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > i && (i = l), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(ws.bind(null, e, Iu, Wu), r);
                    break;
                  }
                  ws(e, Iu, Wu);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return rs(e, Ke()), e.callbackNode === n ? is.bind(null, e) : null;
        }
        function as(e, t) {
          var n = Fu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = ms(e, t)) && ((t = Iu), (Iu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Iu ? (Iu = e) : Iu.push.apply(Iu, e);
        }
        function ls(e, t) {
          for (
            t &= ~zu,
              t &= ~Vu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & ju)) throw Error(a(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Ke()), null;
          var n = ms(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = as(e, r)));
          }
          if (1 === n) throw ((n = Mu), ds(e, 0), ls(e, t), rs(e, Ke()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Iu, Wu),
            rs(e, Ke()),
            null
          );
        }
        function ss(e, t) {
          var n = ju;
          ju |= 1;
          try {
            return e(t);
          } finally {
            0 === (ju = n) && ((Bu = Ke() + 500), Fi && Bi());
          }
        }
        function cs(e) {
          null !== Qu && 0 === Qu.tag && 0 === (6 & ju) && ks();
          var t = ju;
          ju |= 1;
          var n = Tu.transition,
            r = bt;
          try {
            if (((Tu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Tu.transition = n), 0 === (6 & (ju = t)) && Bi();
          }
        }
        function fs() {
          (Ou = Nu.current), Ci(Nu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Au))
            for (n = Au.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ni();
                  break;
                case 3:
                  io(), Ci(Li), Ci(ji), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  Ci(lo);
                  break;
                case 10:
                  ka(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Lu = e),
            (Au = e = Ns(e.current, null)),
            (_u = Ou = t),
            (Ru = 0),
            (Mu = null),
            (zu = Vu = Du = 0),
            (Iu = Fu = null),
            null !== Pa)
          ) {
            for (t = 0; t < Pa.length; t++)
              if (null !== (r = (n = Pa[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Pa = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Au;
            try {
              if ((wa(), (fo.current = ol), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = mo = vo = null),
                (bo = !1),
                (xo = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Ru = 1), (Mu = t), (Au = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = _u),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, u, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), vs();
                    break e;
                  }
                  s = Error(a(426));
                } else if (ia && 1 & u.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, u, 0, t),
                      ha(cl(s, u));
                    break e;
                  }
                }
                (o = s = cl(s, u)),
                  4 !== Ru && (Ru = 2),
                  null === Fu ? (Fu = [o]) : Fu.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Da(o, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gu || !Gu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Da(o, vl(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xs(n);
            } catch (x) {
              (t = x), Au === n && null !== n && (Au = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = ol), null === e ? ol : e;
        }
        function vs() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === Lu ||
              (0 === (268435455 & Du) && 0 === (268435455 & Vu)) ||
              ls(Lu, _u);
        }
        function ms(e, t) {
          var n = ju;
          ju |= 2;
          var r = hs();
          for ((Lu === e && _u === t) || ((Wu = null), ds(e, t)); ; )
            try {
              gs();
              break;
            } catch (i) {
              ps(e, i);
            }
          if ((wa(), (ju = n), (Cu.current = r), null !== Au))
            throw Error(a(261));
          return (Lu = null), (_u = 0), Ru;
        }
        function gs() {
          for (; null !== Au; ) bs(Au);
        }
        function ys() {
          for (; null !== Au && !Ye(); ) bs(Au);
        }
        function bs(e) {
          var t = Su(e.alternate, e, Ou);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Au = t),
            (Pu.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Ou))) return void (Au = n);
            } else {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Au = n);
              if (null === e) return (Ru = 6), void (Au = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Au = t);
            Au = t = e;
          } while (null !== t);
          0 === Ru && (Ru = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            i = Tu.transition;
          try {
            (Tu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Qu);
                if (0 !== (6 & ju)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Lu && ((Au = Lu = null), (_u = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ls(tt, function () {
                      return ks(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Tu.transition), (Tu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = ju;
                  (ju |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ei = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (u = l + i),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (u = l),
                                    p === o && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : ma(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Es(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(ti),
                    (Ht = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    yu(n, e, i),
                    Xe(),
                    (ju = u),
                    (bt = l),
                    (Tu.transition = o);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Qu = e), (Yu = i)),
                  0 === (o = e.pendingLanes) && (Gu = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((i = t[n]).value, {
                      componentStack: i.stack,
                      digest: i.digest,
                    });
                if (Hu) throw ((Hu = !1), (e = $u), ($u = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && ks(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Ku
                      ? Xu++
                      : ((Xu = 0), (Ku = e))
                    : (Xu = 0),
                  Bi();
              })(e, t, n, r);
          } finally {
            (Tu.transition = i), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Qu) {
            var e = xt(Yu),
              t = Tu.transition,
              n = bt;
            try {
              if (((Tu.transition = null), (bt = 16 > e ? 16 : e), null === Qu))
                var r = !1;
              else {
                if (((e = Qu), (Qu = null), (Yu = 0), 0 !== (6 & ju)))
                  throw Error(a(331));
                var i = ju;
                for (ju |= 4, Zl = e.current; null !== Zl; ) {
                  var o = Zl,
                    l = o.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((au(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Zl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (o = Zl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zl = y);
                        break e;
                      }
                      Zl = o.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Zl = x);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          Es(u, u.return, k);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Zl = w);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((ju = i),
                  Bi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Tu.transition = t);
            }
          }
          return !1;
        }
        function Ss(e, t, n) {
          (e = Ra(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) Ss(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gu || !Gu.has(r)))
                ) {
                  (t = Ra(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (_u & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & _u) === _u && 500 > Ke() - Uu)
                ? ds(e, 0)
                : (zu |= n)),
            rs(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = La(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function Ts(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function js(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Ps(e, n);
        }
        function Ls(e, t) {
          return qe(e, t);
        }
        function As(e, t, n, r) {
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
            (this.ref = null),
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
        function _s(e, t, n, r) {
          return new As(e, t, n, r);
        }
        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ns(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _s(e.tag, t, e.key, e.mode)).elementType =
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
            (n.flags = 14680064 & e.flags),
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
            n
          );
        }
        function Rs(e, t, n, r, i, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Os(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Ms(n.children, i, o, t);
              case E:
                (l = 8), (i |= 8);
                break;
              case C:
                return (
                  ((e = _s(12, n, t, 2 | i)).elementType = C), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = _s(13, n, t, i)).elementType = L), (e.lanes = o), e
                );
              case A:
                return (
                  ((e = _s(19, n, t, i)).elementType = A), (e.lanes = o), e
                );
              case N:
                return Ds(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case j:
                      l = 11;
                      break e;
                    case _:
                      l = 14;
                      break e;
                    case O:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = _s(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ms(e, t, n, r) {
          return ((e = _s(7, e, r, t)).lanes = n), e;
        }
        function Ds(e, t, n, r) {
          return (
            ((e = _s(22, e, r, t)).elementType = N),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Vs(e, t, n) {
          return ((e = _s(6, e, null, t)).lanes = n), e;
        }
        function zs(e, t, n) {
          return (
            ((t = _s(
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
        function Fs(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Is(e, t, n, r, i, a, o, l, u) {
          return (
            (e = new Fs(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = _s(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            _a(a),
            e
          );
        }
        function Us(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bs(e) {
          if (!e) return Ti;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oi(n)) return Mi(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, i, a, o, l, u) {
          return (
            ((e = Is(n, r, !0, e, 0, a, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((a = Na((r = es()), (i = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ra(n, a, i),
            (e.current.lanes = i),
            gt(e, i, r),
            rs(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var i = t.current,
            a = es(),
            o = ts(i);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Na(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ra(i, t, o)) && (ns(e, i, o, a), Ma(e, i, o)),
            o
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Gs(e, t), (e = e.alternate) && Gs(e, t);
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Li.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Al(t), pa();
                        break;
                      case 5:
                        ao(t);
                        break;
                      case 1:
                        Oi(t.type) && Di(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Pi(ga, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pi(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Vl(e, t, n)
                            : (Pi(lo, 1 & lo.current),
                              null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        Pi(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Pi(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ia && 0 !== (1048576 & t.flags) && Ji(t, Gi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var i = _i(t, ji.current);
              Ea(t, n), (i = Eo(null, t, r, e, i, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oi(r) ? ((o = !0), Di(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    _a(t),
                    (i.updater = Ua),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    $a(t, r, e, n),
                    (t = Ll(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    wl(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Os(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ma(r, e)),
                  i)
                ) {
                  case 0:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, ma(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Tl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                jl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 3:
              e: {
                if ((Al(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Oa(e, t),
                  Va(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = _l(e, t, r, n, (i = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = _l(e, t, r, n, (i = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = si(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Ka(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === i)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ao(t),
                null === e && sa(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Pl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && sa(t), null;
            case 13:
              return Vl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                kl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = i.value),
                  Pi(ga, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === i.children && !Li.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        l = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Na(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Sa(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Sa(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Ea(t, n),
                (r = r((i = Ca(i)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ma((r = t.type), t.pendingProps)),
                Sl(e, t, r, (i = ma(r.type, i)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ma(r, i)),
                Wl(e, t),
                (t.tag = 1),
                Oi(r) ? ((e = !0), Di(t)) : (e = !1),
                Ea(t, n),
                Wa(t, r, i),
                $a(t, r, i, n),
                Ll(null, t, r, !0, e, n)
              );
            case 19:
              return Bl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ks(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = $s(o);
                l.call(e);
              };
            }
            Hs(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $s(o);
                    a.call(e);
                  };
                }
                var o = Ws(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = o),
                  (e[hi] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = Is(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[hi] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, i, r);
          return $s(o);
        }
        (Xs.prototype.render = Ys.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hs(e, t, null, null);
          }),
          (Xs.prototype.unmount = Ys.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Xs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Nt.length && 0 !== t && t < Nt[n].priority;
                n++
              );
              Nt.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Ke()),
                    0 === (6 & ju) && ((Bu = Ke() + 500), Bi()));
                }
                break;
              case 13:
                cs(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = La(e, t);
              if (null !== n) ns(n, e, t, es());
              qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = wi(r);
                      if (!i) throw Error(a(90));
                      q(r), Z(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = ss),
          (Le = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, wi, Pe, Te, ss],
          },
          nc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (at = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ks(t)) throw Error(a(200));
            return Us(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ks(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Is(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Ys(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ks(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              l = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, i, 0, o, l)),
              (e[hi] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Xs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
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
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var i,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, i) && !E.hasOwnProperty(i) && (a[i] = t[i]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (i in (u = e.defaultProps)) void 0 === a[i] && (a[i] = u[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function j(e, t) {
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
        function L(e, t, i, a, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === a ? "." + j(u, 0) : a),
              w(o)
                ? ((i = ""),
                  null != e && (i = e.replace(T, "$&/") + "/"),
                  L(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (P(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + j((l = e[s]), s);
              u += L(l, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += L((l = l.value), t, i, (c = a + j(l, s++)), o);
          else if ("object" === l)
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
          return u;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function _(e) {
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
        var O = { current: null },
          N = { transition: null },
          R = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: N,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
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
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (i[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) i.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              i.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: l,
            };
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
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: _,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > a(u, n))
                s < i && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < i && 0 > a(c, n))) break e;
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
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(s)) (v = !0), N(k);
            else {
              var t = r(c);
              null !== t && R(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), y(P), (P = -1)), (h = !0);
          var a = p;
          try {
            for (
              x(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !L()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var l = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && i(s),
                  x(n);
              } else i(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          T = 5,
          j = -1;
        function L() {
          return !(t.unstable_now() - j < T);
        }
        function A() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(A);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var _ = new MessageChannel(),
            O = _.port2;
          (_.port1.onmessage = A),
            (S = function () {
              O.postMessage(null);
            });
        } else
          S = function () {
            g(A, 0);
          };
        function N(e) {
          (C = e), E || ((E = !0), S());
        }
        function R(e, n) {
          P = g(function () {
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
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), N(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
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
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
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
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (y(P), (P = -1)) : (m = !0), R(w, a - o)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), N(k))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
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
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      458: function (e) {
        e.exports = function () {
          var e = document.getSelection();
          if (!e.rangeCount) return function () {};
          for (
            var t = document.activeElement, n = [], r = 0;
            r < e.rangeCount;
            r++
          )
            n.push(e.getRangeAt(r));
          switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              t.blur();
              break;
            default:
              t = null;
          }
          return (
            e.removeAllRanges(),
            function () {
              "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount ||
                  n.forEach(function (t) {
                    e.addRange(t);
                  }),
                t && t.focus();
            }
          );
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  !(function () {
    "use strict";
    var e,
      t = n(791),
      r = n(250);
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function a(e, t) {
      if (e) {
        if ("string" === typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? i(e, t)
            : void 0
        );
      }
    }
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              i,
              a = [],
              o = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (a.push(r.value), !t || a.length !== t);
                o = !0
              );
            } catch (u) {
              (l = !0), (i = u);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (l) throw i;
              }
            }
            return a;
          }
        })(e, t) ||
        a(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function l() {
      return (
        (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        l.apply(this, arguments)
      );
    }
    !(function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(e || (e = {}));
    var u = function (e) {
      return e;
    };
    var s = "beforeunload",
      c = "popstate";
    function f(e) {
      e.preventDefault(), (e.returnValue = "");
    }
    function d() {
      var e = [];
      return {
        get length() {
          return e.length;
        },
        push: function (t) {
          return (
            e.push(t),
            function () {
              e = e.filter(function (e) {
                return e !== t;
              });
            }
          );
        },
        call: function (t) {
          e.forEach(function (e) {
            return e && e(t);
          });
        },
      };
    }
    function p() {
      return Math.random().toString(36).substr(2, 8);
    }
    function h(e) {
      var t = e.pathname,
        n = void 0 === t ? "/" : t,
        r = e.search,
        i = void 0 === r ? "" : r,
        a = e.hash,
        o = void 0 === a ? "" : a;
      return (
        i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
        o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
        n
      );
    }
    function v(e) {
      var t = {};
      if (e) {
        var n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        var r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
          e && (t.pathname = e);
      }
      return t;
    }
    var m = (0, t.createContext)(null);
    var g = (0, t.createContext)(null);
    var y = (0, t.createContext)({ outlet: null, matches: [] });
    function b(e, t) {
      if (!e) throw new Error(t);
    }
    function x(e, t, n) {
      void 0 === n && (n = "/");
      var r = j(("string" === typeof t ? v(t) : t).pathname || "/", n);
      if (null == r) return null;
      var i = w(e);
      !(function (e) {
        e.sort(function (e, t) {
          return e.score !== t.score
            ? t.score - e.score
            : (function (e, t) {
                var n =
                  e.length === t.length &&
                  e.slice(0, -1).every(function (e, n) {
                    return e === t[n];
                  });
                return n ? e[e.length - 1] - t[t.length - 1] : 0;
              })(
                e.routesMeta.map(function (e) {
                  return e.childrenIndex;
                }),
                t.routesMeta.map(function (e) {
                  return e.childrenIndex;
                })
              );
        });
      })(i);
      for (var a = null, o = 0; null == a && o < i.length; ++o) a = C(i[o], r);
      return a;
    }
    function w(e, t, n, r) {
      return (
        void 0 === t && (t = []),
        void 0 === n && (n = []),
        void 0 === r && (r = ""),
        e.forEach(function (e, i) {
          var a = {
            relativePath: e.path || "",
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e,
          };
          a.relativePath.startsWith("/") &&
            (a.relativePath.startsWith(r) || b(!1),
            (a.relativePath = a.relativePath.slice(r.length)));
          var o = L([r, a.relativePath]),
            l = n.concat(a);
          e.children &&
            e.children.length > 0 &&
            (!0 === e.index && b(!1), w(e.children, t, l, o)),
            (null != e.path || e.index) &&
              t.push({ path: o, score: E(o, e.index), routesMeta: l });
        }),
        t
      );
    }
    var k = /^:\w+$/,
      S = function (e) {
        return "*" === e;
      };
    function E(e, t) {
      var n = e.split("/"),
        r = n.length;
      return (
        n.some(S) && (r += -2),
        t && (r += 2),
        n
          .filter(function (e) {
            return !S(e);
          })
          .reduce(function (e, t) {
            return e + (k.test(t) ? 3 : "" === t ? 1 : 10);
          }, r)
      );
    }
    function C(e, t) {
      for (
        var n = e.routesMeta, r = {}, i = "/", a = [], o = 0;
        o < n.length;
        ++o
      ) {
        var l = n[o],
          u = o === n.length - 1,
          s = "/" === i ? t : t.slice(i.length) || "/",
          c = P(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
            s
          );
        if (!c) return null;
        Object.assign(r, c.params);
        var f = l.route;
        a.push({
          params: r,
          pathname: L([i, c.pathname]),
          pathnameBase: A(L([i, c.pathnameBase])),
          route: f,
        }),
          "/" !== c.pathnameBase && (i = L([i, c.pathnameBase]));
      }
      return a;
    }
    function P(e, t) {
      "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
      var n = (function (e, t, n) {
          void 0 === t && (t = !1);
          void 0 === n && (n = !0);
          var r = [],
            i =
              "^" +
              e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/:(\w+)/g, function (e, t) {
                  return r.push(t), "([^\\/]+)";
                });
          e.endsWith("*")
            ? (r.push("*"),
              (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : (i += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
          return [new RegExp(i, t ? void 0 : "i"), r];
        })(e.path, e.caseSensitive, e.end),
        r = o(n, 2),
        i = r[0],
        a = r[1],
        l = t.match(i);
      if (!l) return null;
      var u = l[0],
        s = u.replace(/(.)\/+$/, "$1"),
        c = l.slice(1);
      return {
        params: a.reduce(function (e, t, n) {
          if ("*" === t) {
            var r = c[n] || "";
            s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
          }
          return (
            (e[t] = (function (e, t) {
              try {
                return decodeURIComponent(e);
              } catch (n) {
                return e;
              }
            })(c[n] || "")),
            e
          );
        }, {}),
        pathname: u,
        pathnameBase: s,
        pattern: e,
      };
    }
    function T(e, t, n) {
      var r,
        i = "string" === typeof e ? v(e) : e,
        a = "" === e || "" === i.pathname ? "/" : i.pathname;
      if (null == a) r = n;
      else {
        var o = t.length - 1;
        if (a.startsWith("..")) {
          for (var l = a.split("/"); ".." === l[0]; ) l.shift(), (o -= 1);
          i.pathname = l.join("/");
        }
        r = o >= 0 ? t[o] : "/";
      }
      var u = (function (e, t) {
        void 0 === t && (t = "/");
        var n = "string" === typeof e ? v(e) : e,
          r = n.pathname,
          i = n.search,
          a = void 0 === i ? "" : i,
          o = n.hash,
          l = void 0 === o ? "" : o,
          u = r
            ? r.startsWith("/")
              ? r
              : (function (e, t) {
                  var n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach(function (e) {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(r, t)
            : t;
        return { pathname: u, search: _(a), hash: O(l) };
      })(i, r);
      return (
        a &&
          "/" !== a &&
          a.endsWith("/") &&
          !u.pathname.endsWith("/") &&
          (u.pathname += "/"),
        u
      );
    }
    function j(e, t) {
      if ("/" === t) return e;
      if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
      var n = e.charAt(t.length);
      return n && "/" !== n ? null : e.slice(t.length) || "/";
    }
    var L = function (e) {
        return e.join("/").replace(/\/\/+/g, "/");
      },
      A = function (e) {
        return e.replace(/\/+$/, "").replace(/^\/*/, "/");
      },
      _ = function (e) {
        return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
      },
      O = function (e) {
        return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
      };
    function N(e) {
      R() || b(!1);
      var n = (0, t.useContext)(m),
        r = n.basename,
        i = n.navigator,
        a = V(e),
        o = a.hash,
        l = a.pathname,
        u = a.search,
        s = l;
      if ("/" !== r) {
        var c = (function (e) {
            return "" === e || "" === e.pathname
              ? "/"
              : "string" === typeof e
              ? v(e).pathname
              : e.pathname;
          })(e),
          f = null != c && c.endsWith("/");
        s = "/" === l ? r + (f ? "/" : "") : L([r, l]);
      }
      return i.createHref({ pathname: s, search: u, hash: o });
    }
    function R() {
      return null != (0, t.useContext)(g);
    }
    function M() {
      return R() || b(!1), (0, t.useContext)(g).location;
    }
    function D() {
      R() || b(!1);
      var e = (0, t.useContext)(m),
        n = e.basename,
        r = e.navigator,
        i = (0, t.useContext)(y).matches,
        a = M().pathname,
        o = JSON.stringify(
          i.map(function (e) {
            return e.pathnameBase;
          })
        ),
        l = (0, t.useRef)(!1);
      return (
        (0, t.useEffect)(function () {
          l.current = !0;
        }),
        (0, t.useCallback)(
          function (e, t) {
            if ((void 0 === t && (t = {}), l.current))
              if ("number" !== typeof e) {
                var i = T(e, JSON.parse(o), a);
                "/" !== n && (i.pathname = L([n, i.pathname])),
                  (t.replace ? r.replace : r.push)(i, t.state);
              } else r.go(e);
          },
          [n, r, o, a]
        )
      );
    }
    function V(e) {
      var n = (0, t.useContext)(y).matches,
        r = M().pathname,
        i = JSON.stringify(
          n.map(function (e) {
            return e.pathnameBase;
          })
        );
      return (0, t.useMemo)(
        function () {
          return T(e, JSON.parse(i), r);
        },
        [e, i, r]
      );
    }
    function z(e, n) {
      return (
        void 0 === n && (n = []),
        null == e
          ? null
          : e.reduceRight(function (r, i, a) {
              return (0,
              t.createElement)(y.Provider, { children: void 0 !== i.route.element ? i.route.element : r, value: { outlet: r, matches: n.concat(e.slice(0, a + 1)) } });
            }, null)
      );
    }
    function F(e) {
      b(!1);
    }
    function I(n) {
      var r = n.basename,
        i = void 0 === r ? "/" : r,
        a = n.children,
        o = void 0 === a ? null : a,
        l = n.location,
        u = n.navigationType,
        s = void 0 === u ? e.Pop : u,
        c = n.navigator,
        f = n.static,
        d = void 0 !== f && f;
      R() && b(!1);
      var p = A(i),
        h = (0, t.useMemo)(
          function () {
            return { basename: p, navigator: c, static: d };
          },
          [p, c, d]
        );
      "string" === typeof l && (l = v(l));
      var y = l,
        x = y.pathname,
        w = void 0 === x ? "/" : x,
        k = y.search,
        S = void 0 === k ? "" : k,
        E = y.hash,
        C = void 0 === E ? "" : E,
        P = y.state,
        T = void 0 === P ? null : P,
        L = y.key,
        _ = void 0 === L ? "default" : L,
        O = (0, t.useMemo)(
          function () {
            var e = j(w, p);
            return null == e
              ? null
              : { pathname: e, search: S, hash: C, state: T, key: _ };
          },
          [p, w, S, C, T, _]
        );
      return null == O
        ? null
        : (0, t.createElement)(
            m.Provider,
            { value: h },
            (0, t.createElement)(g.Provider, {
              children: o,
              value: { location: O, navigationType: s },
            })
          );
    }
    function U(e) {
      var n = e.children,
        r = e.location;
      return (function (e, n) {
        R() || b(!1);
        var r,
          i = (0, t.useContext)(y).matches,
          a = i[i.length - 1],
          o = a ? a.params : {},
          l = (a && a.pathname, a ? a.pathnameBase : "/"),
          u = (a && a.route, M());
        if (n) {
          var s,
            c = "string" === typeof n ? v(n) : n;
          "/" === l ||
            (null == (s = c.pathname) ? void 0 : s.startsWith(l)) ||
            b(!1),
            (r = c);
        } else r = u;
        var f = r.pathname || "/",
          d = x(e, { pathname: "/" === l ? f : f.slice(l.length) || "/" });
        return z(
          d &&
            d.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, o, e.params),
                pathname: L([l, e.pathname]),
                pathnameBase:
                  "/" === e.pathnameBase ? l : L([l, e.pathnameBase]),
              });
            }),
          i
        );
      })(B(n), r);
    }
    function B(e) {
      var n = [];
      return (
        t.Children.forEach(e, function (e) {
          if ((0, t.isValidElement)(e))
            if (e.type !== t.Fragment) {
              e.type !== F && b(!1);
              var r = {
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                index: e.props.index,
                path: e.props.path,
              };
              e.props.children && (r.children = B(e.props.children)), n.push(r);
            } else n.push.apply(n, B(e.props.children));
        }),
        n
      );
    }
    function W() {
      return (
        (W =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        W.apply(this, arguments)
      );
    }
    function H(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    }
    var $ = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      G = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
      ];
    function q(n) {
      var r = n.basename,
        i = n.children,
        a = n.window,
        m = (0, t.useRef)();
      null == m.current &&
        (m.current = (function (t) {
          void 0 === t && (t = {});
          var n = t.window,
            r = void 0 === n ? document.defaultView : n,
            i = r.history;
          function a() {
            var e = r.location,
              t = e.pathname,
              n = e.search,
              a = e.hash,
              o = i.state || {};
            return [
              o.idx,
              u({
                pathname: t,
                search: n,
                hash: a,
                state: o.usr || null,
                key: o.key || "default",
              }),
            ];
          }
          var o = null;
          r.addEventListener(c, function () {
            if (o) w.call(o), (o = null);
            else {
              var t = e.Pop,
                n = a(),
                r = n[0],
                i = n[1];
              if (w.length) {
                if (null != r) {
                  var l = y - r;
                  l &&
                    ((o = {
                      action: t,
                      location: i,
                      retry: function () {
                        T(-1 * l);
                      },
                    }),
                    T(l));
                }
              } else P(t);
            }
          });
          var m = e.Pop,
            g = a(),
            y = g[0],
            b = g[1],
            x = d(),
            w = d();
          function k(e) {
            return "string" === typeof e ? e : h(e);
          }
          function S(e, t) {
            return (
              void 0 === t && (t = null),
              u(
                l(
                  { pathname: b.pathname, hash: "", search: "" },
                  "string" === typeof e ? v(e) : e,
                  { state: t, key: p() }
                )
              )
            );
          }
          function E(e, t) {
            return [{ usr: e.state, key: e.key, idx: t }, k(e)];
          }
          function C(e, t, n) {
            return (
              !w.length || (w.call({ action: e, location: t, retry: n }), !1)
            );
          }
          function P(e) {
            m = e;
            var t = a();
            (y = t[0]), (b = t[1]), x.call({ action: m, location: b });
          }
          function T(e) {
            i.go(e);
          }
          null == y &&
            ((y = 0), i.replaceState(l({}, i.state, { idx: y }), ""));
          var j = {
            get action() {
              return m;
            },
            get location() {
              return b;
            },
            createHref: k,
            push: function t(n, a) {
              var o = e.Push,
                l = S(n, a);
              if (
                C(o, l, function () {
                  t(n, a);
                })
              ) {
                var u = E(l, y + 1),
                  s = u[0],
                  c = u[1];
                try {
                  i.pushState(s, "", c);
                } catch (f) {
                  r.location.assign(c);
                }
                P(o);
              }
            },
            replace: function t(n, r) {
              var a = e.Replace,
                o = S(n, r);
              if (
                C(a, o, function () {
                  t(n, r);
                })
              ) {
                var l = E(o, y),
                  u = l[0],
                  s = l[1];
                i.replaceState(u, "", s), P(a);
              }
            },
            go: T,
            back: function () {
              T(-1);
            },
            forward: function () {
              T(1);
            },
            listen: function (e) {
              return x.push(e);
            },
            block: function (e) {
              var t = w.push(e);
              return (
                1 === w.length && r.addEventListener(s, f),
                function () {
                  t(), w.length || r.removeEventListener(s, f);
                }
              );
            },
          };
          return j;
        })({ window: a }));
      var g = m.current,
        y = o((0, t.useState)({ action: g.action, location: g.location }), 2),
        b = y[0],
        x = y[1];
      return (
        (0, t.useLayoutEffect)(
          function () {
            return g.listen(x);
          },
          [g]
        ),
        (0, t.createElement)(I, {
          basename: r,
          children: i,
          location: b.location,
          navigationType: b.action,
          navigator: g,
        })
      );
    }
    var Q = (0, t.forwardRef)(function (e, n) {
      var r = e.onClick,
        i = e.reloadDocument,
        a = e.replace,
        o = void 0 !== a && a,
        l = e.state,
        u = e.target,
        s = e.to,
        c = H(e, $),
        f = N(s),
        d = (function (e, n) {
          var r = void 0 === n ? {} : n,
            i = r.target,
            a = r.replace,
            o = r.state,
            l = D(),
            u = M(),
            s = V(e);
          return (0, t.useCallback)(
            function (t) {
              if (
                0 === t.button &&
                (!i || "_self" === i) &&
                !(function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(t)
              ) {
                t.preventDefault();
                var n = !!a || h(u) === h(s);
                l(e, { replace: n, state: o });
              }
            },
            [u, l, s, a, o, i, e]
          );
        })(s, { replace: o, state: l, target: u });
      return (0, t.createElement)(
        "a",
        W({}, c, {
          href: f,
          onClick: function (e) {
            r && r(e), e.defaultPrevented || i || d(e);
          },
          ref: n,
          target: u,
        })
      );
    });
    var Y = (0, t.forwardRef)(function (e, n) {
      var r = e["aria-current"],
        i = void 0 === r ? "page" : r,
        a = e.caseSensitive,
        o = void 0 !== a && a,
        l = e.className,
        u = void 0 === l ? "" : l,
        s = e.end,
        c = void 0 !== s && s,
        f = e.style,
        d = e.to,
        p = e.children,
        h = H(e, G),
        v = M(),
        m = V(d),
        g = v.pathname,
        y = m.pathname;
      o || ((g = g.toLowerCase()), (y = y.toLowerCase()));
      var b,
        x = g === y || (!c && g.startsWith(y) && "/" === g.charAt(y.length)),
        w = x ? i : void 0;
      b =
        "function" === typeof u
          ? u({ isActive: x })
          : [u, x ? "active" : null].filter(Boolean).join(" ");
      var k = "function" === typeof f ? f({ isActive: x }) : f;
      return (0,
      t.createElement)(Q, W({}, h, { "aria-current": w, className: b, ref: n, style: k, to: d }), "function" === typeof p ? p({ isActive: x }) : p);
    });
    function X(e) {
      return (
        (X =
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
        X(e)
      );
    }
    function K() {
      K = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        a = r.asyncIterator || "@@asyncIterator",
        o = r.toStringTag || "@@toStringTag";
      function l(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        l({}, "");
      } catch (P) {
        l = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function u(e, t, n, r) {
        var i = t && t.prototype instanceof f ? t : f,
          a = Object.create(i.prototype),
          o = new S(r || []);
        return (
          (a._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, a) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw a;
                return C();
              }
              for (n.method = i, n.arg = a; ; ) {
                var o = n.delegate;
                if (o) {
                  var l = x(o, n);
                  if (l) {
                    if (l === c) continue;
                    return l;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var u = s(e, t, n);
                if ("normal" === u.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), u.arg === c)
                  )
                    continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(e, n, o)),
          a
        );
      }
      function s(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (P) {
          return { type: "throw", arg: P };
        }
      }
      e.wrap = u;
      var c = {};
      function f() {}
      function d() {}
      function p() {}
      var h = {};
      l(h, i, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(E([])));
      m && m !== t && n.call(m, i) && (h = m);
      var g = (p.prototype = f.prototype = Object.create(h));
      function y(e) {
        ["next", "throw", "return"].forEach(function (t) {
          l(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        function r(i, a, o, l) {
          var u = s(e[i], e, a);
          if ("throw" !== u.type) {
            var c = u.arg,
              f = c.value;
            return f && "object" == X(f) && n.call(f, "__await")
              ? t.resolve(f.__await).then(
                  function (e) {
                    r("next", e, o, l);
                  },
                  function (e) {
                    r("throw", e, o, l);
                  }
                )
              : t.resolve(f).then(
                  function (e) {
                    (c.value = e), o(c);
                  },
                  function (e) {
                    return r("throw", e, o, l);
                  }
                );
          }
          l(u.arg);
        }
        var i;
        this._invoke = function (e, n) {
          function a() {
            return new t(function (t, i) {
              r(e, n, t, i);
            });
          }
          return (i = i ? i.then(a, a) : a());
        };
      }
      function x(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              x(e, t),
              "throw" === t.method)
            )
              return c;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return c;
        }
        var r = s(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              c)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            c);
      }
      function w(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function k(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function S(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(w, this),
          this.reset(!0);
      }
      function E(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              a = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = p),
        l(g, "constructor", p),
        l(p, "constructor", d),
        (d.displayName = l(p, o, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, p)
              : ((e.__proto__ = p), l(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(b.prototype),
        l(b.prototype, a, function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, i, a) {
          void 0 === a && (a = Promise);
          var o = new b(u(t, n, r, i), a);
          return e.isGeneratorFunction(n)
            ? o
            : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
        }),
        y(g),
        l(g, o, "Generator"),
        l(g, i, function () {
          return this;
        }),
        l(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = E),
        (S.prototype = {
          constructor: S,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(k),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (o.type = "throw"),
                (o.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                o = a.completion;
              if ("root" === a.tryLoc) return r("end");
              if (a.tryLoc <= this.prev) {
                var l = n.call(a, "catchLoc"),
                  u = n.call(a, "finallyLoc");
                if (l && u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var a = i;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), c)
                : this.complete(o)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              c
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), k(n), c;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  k(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: E(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              c
            );
          },
        }),
        e
      );
    }
    function Z(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function J(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ee(e, t, n) {
      return (
        t && J(e.prototype, t),
        n && J(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function te(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return i(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        a(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ne(e, t, n) {
      var r = Math.random() * (t - e) + e;
      if (n)
        switch (n) {
          case "floor":
            return Math.floor(r);
          case "round":
            return Math.round(r);
          case "ceil":
            return Math.ceil(r);
        }
      return r;
    }
    var re = function (e) {
      return e.splice(ne(0, e.length, "floor"), 1).length > 0;
    };
    var ie = function (e) {
      return new Promise(function (t) {
        return setTimeout(function () {
          return t(e);
        }, e);
      });
    };
    function ae(e, t) {
      return (function n() {
        return e() ? t().then(n) : Promise.resolve();
      })();
    }
    var oe = function (e, t) {
        return new Array(t).fill(e);
      },
      le = function (e, t) {
        e.classList.remove(t), e.offsetWidth, e.classList.add(t);
      };
    function ue(e) {
      var t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return "number" === typeof e
        ? e
        : ne.apply(void 0, te(e).concat([t ? "round" : void 0]));
    }
    var se = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.5;
        return Math.random() < e;
      },
      ce = function (e) {
        return { value: e };
      },
      fe = function (e) {
        return te(e).map(ce);
      },
      de = function (e) {
        return ["\t", "\n", "\r", "\f", "\v", "", " "].includes(e);
      },
      pe =
        "(&(?:[a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});)|(<style.+?>.+?</style>|<script.+?>.+?</script>|<(?:!|/?[a-zA-Z]+).*?/?>)",
      he =
        /(&(?:[a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});)|.\w+,*\.*"*\s?|\s+|\S+/gi;
    function ve(e) {
      var t = new RegExp(pe, "g");
      return e.replace(t, "");
    }
    var me =
        "\u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034a\u034b\u034c\u034d\u034e \u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f\u034f\u0489",
      ge = {
        default: {
          steps: [1, 8],
          interval: [60, 170],
          delay: [0, 2e3],
          changeChance: 0.6,
          ghostChance: 0.2,
          maxGhosts: 0.2,
          oneAtATime: 0,
          glyphs:
            "ABCD\u0110EFGHIJKLMNOPQRSTUVWXYZabcd\u0111efghijklmnopqrstuvwxyz\u0104\u0105\u0106\u0107\u017b\u017c\u0179\u017a\u0143\u0144\xf3\u0141\u0142\u0410\u0411\u0412\u0413\u0490\u0414\u0402\u0415\u0401\u0404\u0416\u0417\u0405\u0418\u0406\u0407\u0419\u0408\u041a\u041b\u0409\u041c\u041d\u040a\u041e\u041f\u0420\u0421\u0422\u040b\u0423\u040e\u0424\u0425\u0426\u0427\u040f\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0491\u0434\u0452\u0435\u0451\u0454\u0436\u0437\u0455\u0438\u0456\u0457\u0439\u0458\u043a\u043b\u0459\u043c\u043d\u045a\u043e\u043f\u0440\u0441\u0442\u045b\u0443\u045e\u0444\u0445\u0446\u0447\u045f\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u03ac\u0386\u03ad\u0388\u03ad\u0389\u03af\u03ca\u0390\u038a\u03cc\u038c\u03cd\u03b0\u03cb\u038e\u03ab\u038f\u0102\xc2\xca\xd4\u01a0\u01af\u0103\xe2\xea\xf4\u01a1\u01b0\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e0a\u4e0b\u5de6\u53f3\u4e2d\u5927\u5c0f\u6708\u65e5\u5e74\u65e9\u6728\u6797\u5c71\u5ddd\u571f\u7a7a\u7530\u5929\u751f\u82b1\u8349\u866b\u72ac\u4eba\u540d\u5973\u7537\u5b50\u76ee\u8033\u53e3\u624b\u8db3\u898b\u97f3\u529b\u6c17\u5186\u5165\u51fa\u7acb\u4f11\u5148\u5915\u672c\u6587\u5b57\u5b66\u6821\u6751\u753a\u68ee\u6b63\u6c34\u706b\u7389\u738b\u77f3\u7af9\u7cf8\u8c9d\u8eca\u91d1\u96e8\u8d64\u9752\u767d\u6570\u591a\u5c11\u4e07\u534a\u5f62\u592a\u7d30\u5e83\u9577\u70b9\u4e38\u4ea4\u5149\u89d2\u8a08\u76f4\u7dda\u77e2\u5f31\u5f37\u9ad8\u540c\u89aa\u6bcd\u7236\u59c9\u5144\u5f1f\u59b9\u81ea\u53cb\u4f53\u6bdb\u982d\u9854\u9996\u5fc3\u6642\u66dc\u671d\u663c\u591c\u5206\u9031\u6625\u590f\u79cb\u51ac\u4eca\u65b0\u53e4\u9593\u65b9\u5317\u5357\u6771\u897f\u9060\u8fd1\u524d\u5f8c\u5185\u5916\u5834\u5730\u56fd\u5712\u8c37\u91ce\u539f\u91cc\u5e02\u4eac\u98a8\u96ea\u96f2\u6c60\u6d77\u5ca9\u661f\u5ba4\u6238\u5bb6\u5bfa\u901a\u9580\u9053\u8a71\u8a00\u7b54\u58f0\u805e\u8a9e\u8aad\u66f8\u8a18\u7d19\u753b\u7d75\u56f3\u5de5\u6559\u6674\u601d\u8003\u77e5\u624d\u7406\u7b97\u4f5c\u5143\u98df\u8089\u99ac\u725b\u9b5a\u9ce5\u7fbd\u9cf4\u9ea6\u7c73\u8336\u8272\u9ec4\u9ed2\u6765\u884c\u5e30\u6b69\u8d70\u6b62\u6d3b\u5e97\u8cb7\u58f2\u5348\u6c7d\u5f13\u56de\u4f1a\u7d44\u8239\u660e\u793e\u5207\u96fb\u6bce\u5408\u5f53\u53f0\u697d\u516c\u5f15\u79d1\u6b4c\u5200\u756a\u7528\u4f55\u0102\xc2\xca\xd4\u01a0\u01af\u0103\xe2\xea\xf4\u01a1\u01b01234567890\u2018?\u2019\u201c!\u201d(%)[#]{@}/\\&<-+\xf7\xd7=>$\u20ac\xa3\xa5\xa2:;,.*\u2022\xb0\xb7\u2026\xb1\u2020\u2021\xe6\xab\xbb\xa6\xaf\u2014\u2013~\u02dc\xa8_\xf8\xde\xbf\u25ac\u25ad\u25ae\u25af\u2510\u2514\u255b\u2591\u2592\u2593\u25cb\u203c\u2047\u2048\u2049\u203d\u2134\u2135\u2136\u2137\u2138\u2132\u212e\u212f\u2141\u2142\u2143\u2144\u20a0\u20a1\u20a2\u20a3\u20a4\u20a5\u20a6\u20a7\u20a8\u20a9\u20aa\u20ab\u20ac\u20ad\u20ae\u20af\u20b0\u20b1\u20b2\u20b3\u20b4\u20b5\u20b6\u20b7\u20b8\u20b9\u20ba\u20bb\u20bc\u20bd\u20be\u20bf          " +
            me,
          glyphsFromText: !1,
          fillSpace: !0,
          mode: "matching",
          html: !1,
          letterize: !1,
          endless: !1,
          fps: 60,
        },
        nier: {
          maxGhosts: 0,
          ghostChance: 0,
          changeChance: 0.8,
          steps: 3,
          interval: 10,
          delay: 0,
          oneAtATime: 1,
          glyphs:
            "\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e0a\u4e0b\u5de6\u53f3\u4e2d\u5927\u5c0f\u6708\u65e5\u5e74\u65e9\u6728\u6797\u5c71\u5ddd\u571f\u7a7a\u7530\u5929\u751f\u82b1\u8349\u866b\u72ac\u4eba\u540d\u5973\u7537\u5b50\u76ee\u8033\u53e3\u624b\u8db3\u898b\u97f3\u529b\u6c17\u5186\u5165\u51fa\u7acb\u4f11\u5148\u5915\u672c\u6587\u5b57\u5b66\u6821\u6751\u753a\u68ee\u6b63\u6c34\u706b\u7389\u738b\u77f3\u7af9\u7cf8\u8c9d\u8eca\u91d1\u96e8\u8d64\u9752\u767d\u6570\u591a\u5c11\u4e07\u534a\u5f62\u592a\u7d30\u5e83\u9577\u70b9\u4e38\u4ea4\u5149\u89d2\u8a08\u76f4\u7dda\u77e2\u5f31\u5f37\u9ad8\u540c\u89aa\u6bcd\u7236\u59c9\u5144\u5f1f\u59b9\u81ea\u53cb\u4f53\u6bdb\u982d\u9854\u9996\u5fc3\u6642\u66dc\u671d\u663c\u591c\u5206\u9031\u6625\u590f\u79cb\u51ac\u4eca\u65b0\u53e4\u9593\u65b9\u5317\u5357\u6771\u897f\u9060\u8fd1\u524d\u5f8c\u5185\u5916\u5834\u5730\u56fd\u5712\u8c37\u91ce\u539f\u91cc\u5e02\u4eac\u98a8\u96ea\u96f2\u6c60\u6d77\u5ca9\u661f\u5ba4\u6238\u5bb6\u5bfa\u901a\u9580\u9053\u8a71\u8a00\u7b54\u58f0\u805e\u8a9e\u8aad\u66f8\u8a18\u7d19\u753b\u7d75\u56f3\u5de5\u6559\u6674\u601d\u8003\u77e5\u624d\u7406\u7b97\u4f5c\u5143\u98df\u8089\u99ac\u725b\u9b5a\u9ce5\u7fbd\u9cf4\u9ea6\u7c73\u8336\u8272\u9ec4\u9ed2\u6765\u884c\u5e30\u6b69\u8d70\u6b62\u6d3b\u5e97\u8cb7\u58f2\u5348\u6c7d\u5f13\u56de\u4f1a\u7d44\u8239\u660e\u793e\u5207\u96fb\u6bce\u5408\u5f53\u53f0\u697d\u516c\u5f15\u79d1\u6b4c\u5200\u756a\u7528\u4f55",
          fillSpace: !1,
          glyphsFromText: !0,
          mode: "clear",
        },
        typewriter: {
          interval: [50, 150],
          delay: 0,
          steps: 0,
          changeChance: 0,
          maxGhosts: 0,
          oneAtATime: 1,
          glyphs: "",
          glyphsFromText: !1,
          fillSpace: !1,
          mode: "erase_smart",
        },
        terminal: {
          interval: [25, 30],
          delay: [0, 0],
          steps: 0,
          changeChance: 0.5,
          maxGhosts: 0,
          oneAtATime: 1,
          glyphs: "",
          fillSpace: !1,
          glyphsFromText: !1,
          mode: "clear",
        },
        zalgo: {
          delay: [0, 3e3],
          interval: [10, 35],
          steps: [0, 30],
          maxGhosts: 4.6,
          changeChance: 0.5,
          ghostChance: 0.7,
          glyphs: me,
          glyphsFromText: !0,
          fillSpace: !1,
        },
        neo: {
          interval: [30, 100],
          delay: [0, 1300],
          steps: [4, 7],
          maxGhosts: 0,
          ghostChance: 0,
          changeChance: 1,
          glyphs: "!<>-_\\/[]{}\u2014=+*^?#________",
          mode: "normal",
        },
        encrypted: {
          interval: [50, 90],
          delay: [0, 1300],
          steps: [5, 8],
          maxGhosts: 0,
          ghostChance: 0,
          changeChance: 1,
          glyphs: "1234567890QWERTYUIOPASDFGHJKLZXCVBNM#$%",
          fillSpace: !1,
          mode: "normal",
        },
        bitbybit: {
          interval: [35, 65],
          delay: 180,
          steps: 1,
          maxGhosts: 1,
          ghostChance: 0.1,
          changeChance: 0.7,
          oneAtATime: "word",
          glyphs: "",
          glyphsFromText: !0,
          fillSpace: !1,
          mode: "erase",
        },
        cosmic: {
          steps: [0, 1],
          interval: 30,
          delay: [400, 2400],
          ghostChance: 0,
          changeChance: 0.3,
          maxGhosts: 0,
          glyphs: "QWERTYUIOPASDFGHJKLZXCVBNM",
          glyphsFromText: !1,
          fillSpace: !0,
          mode: "erase",
        },
      },
      ye = (function () {
        function e(t, n) {
          Z(this, e), (this.writer = t), this.set(n);
        }
        return (
          ee(e, [
            {
              key: "set",
              value: function (e) {
                (this.options = Object.assign(
                  Object.assign({}, ge.default),
                  this.parseOptions(e)
                )),
                  this.updateInternal();
              },
            },
            {
              key: "extend",
              value: function (e) {
                (this.options = Object.assign(
                  Object.assign({}, this.options),
                  this.parseOptions(e)
                )),
                  this.updateInternal();
              },
            },
            {
              key: "parseOptions",
              value: function (e) {
                var t;
                return e
                  ? "string" === typeof e
                    ? null !== (t = ge[e]) && void 0 !== t
                      ? t
                      : {}
                    : e
                  : {};
              },
            },
            {
              key: "updateInternal",
              value: function () {
                var e,
                  t = this.options;
                (this.glyphs =
                  "string" === typeof (e = t.glyphs)
                    ? e
                    : e.length
                    ? e.join("")
                    : Array.from(e).join("")),
                  this.setCharset(),
                  (this.space = t.fillSpace ? " " : ""),
                  Number.isInteger(t.oneAtATime)
                    ? (this.oneAtATime = t.oneAtATime)
                    : "word" === t.oneAtATime
                    ? (this.oneAtATime = "word")
                    : (this.oneAtATime = t.oneAtATime ? 1 : 0);
              },
            },
            {
              key: "setCharset",
              value: function () {
                var e = this.writer,
                  t = this.glyphs;
                this.glyphsFromText &&
                  (t += (function (e) {
                    var t = "string" === typeof e,
                      n = [];
                    return (
                      new Set(e).forEach(function (e) {
                        return n.push(e);
                      }),
                      t ? n.join("") : n
                    );
                  })(
                    e.previousString + (this.html ? ve(e.goalText) : e.goalText)
                  )),
                  (this.charset = te(t).filter(function (e) {
                    return !["\t", "\n", "\r", "\f", "\v"].includes(e);
                  })),
                  this.setMaxGhosts();
              },
            },
            {
              key: "setMaxGhosts",
              value: function () {
                var e = this.writer.charTable,
                  t = this.options.maxGhosts;
                Number.isInteger(t) && (this.maxGhosts = t);
                var n = e.filter(function (e) {
                  return "tag" !== e.specialType;
                }).length;
                this.maxGhosts = Math.round((n || 20) * t);
              },
            },
            {
              key: "getGlyph",
              value: function (e) {
                var t = this.options;
                return t.genGlyph
                  ? t.genGlyph(e, this.baseGetGlyph)
                  : this.baseGetGlyph();
              },
            },
            {
              key: "baseGetGlyph",
              value: function () {
                var e, t;
                return null !==
                  (e = (t = this.charset)[ne(0, t.length, "floor")]) &&
                  void 0 !== e
                  ? e
                  : "";
              },
            },
            {
              key: "steps",
              get: function () {
                return ue(this.options.steps);
              },
            },
            {
              key: "getInterval",
              value: function (e) {
                var t = this.options,
                  n = this.baseGetInterval;
                return t.genInterval
                  ? t.genInterval(e, n.bind(this, e))
                  : n.call(this, e);
              },
            },
            {
              key: "baseGetInterval",
              value: function (e) {
                var t = ue(this.options.interval);
                return "whitespace" === e.specialType && (t /= 1.8), t;
              },
            },
            {
              key: "getDelay",
              value: function (e) {
                var t = this.options;
                return t.genDelay
                  ? t.genDelay(e, this.baseGetDelay)
                  : this.baseGetDelay();
              },
            },
            {
              key: "baseGetDelay",
              value: function () {
                return ue(this.options.delay);
              },
            },
            {
              key: "mode",
              get: function () {
                return this.options.mode;
              },
            },
            {
              key: "html",
              get: function () {
                return this.options.html;
              },
            },
            {
              key: "endless",
              get: function () {
                return this.options.endless;
              },
            },
            {
              key: "fps",
              get: function () {
                return this.options.fps;
              },
            },
            {
              key: "letterize",
              get: function () {
                return this.options.letterize;
              },
            },
            {
              key: "ghostChance",
              get: function () {
                return this.options.ghostChance;
              },
            },
            {
              key: "changeChance",
              get: function () {
                return this.options.changeChance;
              },
            },
            {
              key: "glyphsFromText",
              get: function () {
                return this.options.glyphsFromText;
              },
            },
          ]),
          e
        );
      })(),
      be = (function () {
        function e(t) {
          Z(this, e),
            (this.nGhosts = 0),
            (this.progress = {
              percent: 0,
              done: 0,
              todo: 0,
              increase: function () {
                this.done++, (this.percent = this.done / this.todo);
              },
              reset: function (e) {
                (this.percent = 0), (this.done = 0), (this.todo = e);
              },
              finish: function () {
                (this.done = this.todo), (this.percent = 1);
              },
            }),
            (this.isTyping = !1),
            (this.isPaused = !1),
            (this.finished = !0),
            (this.erasing = !1),
            (this.writer = t),
            (this.maxGhosts = this.writer.options.maxGhosts);
        }
        return (
          ee(e, [
            {
              key: "ghostsInLimit",
              get: function () {
                return this.nGhosts < this.maxGhosts;
              },
            },
            {
              key: "play",
              value: function () {
                (this.isTyping = !0),
                  (this.isPaused = !1),
                  (this.finished = !1),
                  this.addClass(),
                  this.erasing && this.addClass("gw-erasing"),
                  (this.maxGhosts = this.writer.options.maxGhosts),
                  this.writer.animator.run(),
                  this.writer.emiter.callback(
                    "start",
                    this.writer.goalText,
                    this.writer.writerData
                  );
              },
            },
            {
              key: "pause",
              value: function () {
                (this.isTyping = !1),
                  (this.isPaused = !0),
                  this.removeClasses();
              },
            },
            {
              key: "finish",
              value: function () {
                this.progress.finish(),
                  (this.isTyping = !1),
                  (this.finished = !0),
                  this.removeClasses();
              },
            },
            {
              key: "addClass",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "gw-writing";
                le(this.writer.htmlElement, e);
              },
            },
            {
              key: "removeClasses",
              value: function () {
                this.writer.htmlElement.classList.remove(
                  "gw-writing",
                  "gw-erasing"
                );
              },
            },
          ]),
          e
        );
      })(),
      xe = (function () {
        function e(t) {
          Z(this, e),
            (this.callbacks = { start: [], step: [], finish: [] }),
            (this.writer = t);
        }
        return (
          ee(e, [
            {
              key: "addCallback",
              value: function (e, t) {
                this.callbacks[e].push(t);
              },
            },
            {
              key: "removeCallback",
              value: function (e, t) {
                var n = this.callbacks[e],
                  r = n.indexOf(t);
                return -1 !== r && (n.splice(r, 1), !0);
              },
            },
            {
              key: "callback",
              value: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.callbacks[e].forEach(function (e) {
                  return e.apply(void 0, n);
                });
              },
            },
            {
              key: "call",
              value: function (e) {
                var t = this.writer;
                t.updateString();
                var n = t.writerData,
                  r = t.string;
                if (
                  (t.options.letterize &&
                    t.htmlElement.setAttribute(
                      "data-gw-string",
                      t.options.html ? ve(r) : r
                    ),
                  "step" === e)
                )
                  return this.callback("step", r, n);
                t.state.finish(),
                  t.state.erasing ||
                    (this.callback("finish", r, n), this.emitEvent());
              },
            },
            {
              key: "emitEvent",
              value: function () {
                var e = this.writer,
                  t = e.htmlElement,
                  n = e.writerData;
                "undefined" !== typeof CustomEvent &&
                  t.dispatchEvent(
                    new CustomEvent("gw-finished", { detail: n })
                  );
              },
            },
          ]),
          e
        );
      })(),
      we = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      ke = (function () {
        function e(t, n, r) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            a = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 ? arguments[5] : void 0;
          Z(this, e),
            (this.ghosts = [[], []]),
            (this.stop = !1),
            (this.afterGlitchChance = 0),
            (this.writer = t);
          var l = t.options;
          (this.index = o),
            (this.l = n),
            (this.gl = r),
            (this.specialType = a),
            (this.ghosts[0] = te(i)),
            (this.writer.state.nGhosts += i.length),
            (this.stepsLeft = l.steps),
            "tag" === a
              ? (this.stepsLeft = 0)
              : de(r) && (this.specialType = "whitespace"),
            (this.afterGlitchChance = (l.ghostChance + l.changeChance) / 3.7),
            t.options.letterize &&
              ((this.els = {
                ghostsBeforeEl: document.createElement("span"),
                letterEl: document.createElement("span"),
                ghostsAfterEl: document.createElement("span"),
              }),
              (this.els.ghostsBeforeEl.className = "gw-ghosts"),
              (this.els.ghostsAfterEl.className = "gw-ghosts"),
              (this.els.letterEl.className = "gw-letter"));
        }
        return (
          ee(e, [
            {
              key: "string",
              get: function () {
                var e = this.l,
                  t = this.ghosts;
                return t[0].join("") + e + t[1].join("");
              },
            },
            {
              key: "finished",
              get: function () {
                var e = this.l,
                  t = this.gl,
                  n = this.ghosts;
                return (
                  (e === t && 0 === n[0].length && 0 === n[1].length) ||
                  "tag" === this.specialType
                );
              },
            },
            {
              key: "writeToElement",
              value: function () {
                if (this.els) {
                  var e = this.els,
                    t = e.ghostsBeforeEl,
                    n = e.ghostsAfterEl,
                    r = e.letterEl,
                    i = e.charEl;
                  (r.innerHTML = this.l),
                    (t.textContent = this.ghosts[0].join("")),
                    (n.textContent = this.ghosts[1].join("")),
                    i && le(i, "gw-changed");
                }
              },
            },
            {
              key: "spanElement",
              set: function (e) {
                this.els && ((this.els.charEl = e), this.appendChildren());
              },
            },
            {
              key: "appendChildren",
              value: function () {
                var e, t;
                null ===
                  (t =
                    null === (e = this.els) || void 0 === e
                      ? void 0
                      : e.charEl) ||
                  void 0 === t ||
                  t.append(
                    this.els.ghostsBeforeEl,
                    this.els.letterEl,
                    this.els.ghostsAfterEl
                  ),
                  this.writeToElement();
              },
            },
            {
              key: "type",
              value: function () {
                var e, t, n;
                return we(
                  this,
                  void 0,
                  void 0,
                  K().mark(function r() {
                    var i,
                      a,
                      o,
                      l,
                      u,
                      s = this;
                    return K().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (
                                ((i = this.writer),
                                (a = i.options),
                                (o = i.state),
                                (l = i.emiter),
                                "tag" !== this.specialType)
                              ) {
                                r.next = 6;
                                break;
                              }
                              return (
                                (this.l = this.gl),
                                l.call("step"),
                                o.progress.increase(),
                                r.abrupt("return", !0)
                              );
                            case 6:
                              return (
                                (u = function () {
                                  return we(
                                    s,
                                    void 0,
                                    void 0,
                                    K().mark(function e() {
                                      var t;
                                      return K().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  ie(a.getInterval(this))
                                                );
                                              case 2:
                                                (t = this.string),
                                                  this.step(),
                                                  t !== this.string &&
                                                    (l.call("step"),
                                                    this.writeToElement()),
                                                  !a.endless &&
                                                    this.stepsLeft--;
                                              case 6:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        this
                                      );
                                    })
                                  );
                                }),
                                (r.next = 9),
                                ie(a.getDelay(this))
                              );
                            case 9:
                              return (
                                (r.next = 11),
                                ae(function () {
                                  return (
                                    (!s.finished || a.endless) &&
                                    !o.isPaused &&
                                    !s.stop
                                  );
                                }, u)
                              );
                            case 11:
                              return (
                                this.finished &&
                                  (o.progress.increase(),
                                  null ===
                                    (t =
                                      null === (e = this.els) || void 0 === e
                                        ? void 0
                                        : e.charEl) ||
                                    void 0 === t ||
                                    t.classList.add("gw-finished"),
                                  null === (n = this.els) ||
                                    void 0 === n ||
                                    n.letterEl.classList.remove("gw-glitched")),
                                r.abrupt("return", this.finished)
                              );
                            case 13:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "step",
              value: function () {
                var e,
                  t,
                  n = this.writer;
                if (
                  (this.stepsLeft > 0 && this.l !== this.gl) ||
                  (se(this.afterGlitchChance) &&
                    "whitespace" !== this.specialType) ||
                  n.options.endless
                ) {
                  var r = n.options,
                    i = r.ghostChance,
                    a = r.changeChance;
                  se(i) &&
                    (n.state.ghostsInLimit
                      ? this.addGhost()
                      : this.removeGhost()),
                    se(a) &&
                      (null === (e = this.els) ||
                        void 0 === e ||
                        e.letterEl.classList.add("gw-glitched"),
                      (this.l = n.options.getGlyph(this)));
                } else
                  this.finished ||
                    (null === (t = this.els) ||
                      void 0 === t ||
                      t.letterEl.classList.remove("gw-glitched"),
                    (this.l = this.gl),
                    this.removeGhost());
              },
            },
            {
              key: "addGhost",
              value: function () {
                var e = this.writer,
                  t = this.ghosts,
                  n = e.options.getGlyph(this);
                e.state.nGhosts++, se() ? Se(t[0], n) : Se(t[1], n);
              },
            },
            {
              key: "removeGhost",
              value: function () {
                var e = this.writer,
                  t = this.ghosts;
                (se() && t[0].length > 0 ? re(t[0]) : re(t[1])) &&
                  e.state.nGhosts--;
              },
            },
          ]),
          e
        );
      })();
    function Se(e, t) {
      var n = e.length;
      e.splice(ne(0, n, "floor"), 0, t);
    }
    function Ee() {
      var e = this.charTable,
        t = this.options,
        n =
          "clear" === t.mode && this.state.finished ? "" : this.previousString;
      e.forEach(function (e) {
        return (e.stop = !0);
      }),
        (this.charTable = []),
        "matching" === t.mode ? Ce.call(this, n) : Pe.call(this, n);
    }
    function Ce(e) {
      var t = this,
        n = Math.min(Math.ceil(this.options.maxGhosts / 2), 5),
        r = Te.call(this, e),
        i = -1;
      r.forEach(function (r, a) {
        if ((i++, "tag" === r.type)) return i--, void je.call(t, a, "", r);
        var o = "" !== r.value ? e.indexOf(r.value, i) : -1;
        if (-1 !== o && o - i <= n) {
          var l = e.substring(i, o);
          je.call(t, a, r.value, r, l), (i = o);
        } else je.call(t, a, e[i], r);
      }),
        Le(this.charTable, r.length);
    }
    function Pe(e) {
      var t = this,
        n = Te.call(this, e),
        r = -1;
      n.forEach(function (n, i) {
        if ((r++, "tag" === n.type)) return r--, void je.call(t, i, "", n);
        je.call(t, i, e[r], n);
      }),
        Le(this.charTable, n.length);
    }
    function Te(e) {
      var t = this.options,
        n = this.goalText,
        r = t.html
          ? (function (e) {
              for (
                var t, n = new RegExp(pe, "gi"), r = [], i = 0;
                (t = n.exec(e));

              ) {
                var a = t.index,
                  o = n.lastIndex,
                  l = e.slice(i, a);
                (i = o), l && r.push.apply(r, te(fe(l)));
                var u = {
                  value: t[0],
                  type: void 0 !== t[1] ? "html_entity" : "tag",
                };
                r.push(u);
              }
              return e.length > i && r.push.apply(r, te(fe(e.slice(i)))), r;
            })(n)
          : fe(n),
        i = Math.max(0, e.length - r.length);
      if (t.oneAtATime) return r.concat(fe(oe("", i)));
      var a = Math.ceil(i / 2),
        o = Math.floor(i / 2);
      return fe(oe("", a)).concat(r, fe(oe("", o)));
    }
    function je(e, t, n, r) {
      var i = this.charTable,
        a = this.options;
      i.push(
        new ke(
          this,
          null !== t && void 0 !== t ? t : "",
          n.value || a.space,
          r,
          n.type,
          e
        )
      );
    }
    function Le(e, t) {
      e.splice(t, e.length - t);
    }
    function Ae() {
      if (this.options.letterize) {
        var e = this.charTable
          .map(function (e) {
            var t = e.specialType,
              n = e.gl;
            return "tag" === t ? n : '<span class="gw-char"></span>';
          })
          .join("");
        this.htmlElement.innerHTML = e;
        var t = this.htmlElement.querySelectorAll("span.gw-char"),
          n = 0;
        this.charTable.forEach(function (e) {
          "tag" !== e.specialType && ((e.spanElement = t[n]), n++);
        });
      }
    }
    var _e = function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, a) {
        function o(e) {
          try {
            u(r.next(e));
          } catch (t) {
            a(t);
          }
        }
        function l(e) {
          try {
            u(r.throw(e));
          } catch (t) {
            a(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(o, l);
        }
        u((r = r.apply(e, t || [])).next());
      });
    };
    function Oe(e) {
      var t,
        n = this,
        r = this.charTable,
        i = this.state,
        a = [],
        o = r.filter(function (e, t) {
          return (
            "tag" !== e.specialType &&
            "html_entity" !== e.specialType &&
            (a.push(t), !0)
          );
        });
      t = o
        .map(function (e) {
          return e.gl;
        })
        .join("")
        .match(he);
      var l = [],
        u = -1,
        s = -1,
        c = -1,
        f = function () {
          return l[l.length - 1];
        };
      null === t ||
        void 0 === t ||
        t.forEach(function (e) {
          l.push([]),
            te(e).forEach(function () {
              if ((u++, (s = a[u]), ++c !== s)) {
                for (var e = c; e < s; e++) f().push(r[e]);
                c = s;
              }
              f().push(r[s]);
            });
        }),
        l.length || l.push([]);
      for (var d = s + 1; d < r.length; d++) f().push(r[d]);
      l.reverse();
      var p = !0,
        h = !1,
        v = function () {
          return _e(
            n,
            void 0,
            void 0,
            K().mark(function e() {
              var t, n, r;
              return K().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((n = l.pop())) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", (h = !0));
                    case 3:
                      return (
                        (r = n.map(function (e) {
                          return e.type();
                        })),
                        (e.next = 6),
                        Promise.all(r)
                      );
                    case 6:
                      if (
                        ((e.t1 = t =
                          e.sent.every(function (e) {
                            return e;
                          })),
                        (e.t0 = null !== e.t1),
                        !e.t0)
                      ) {
                        e.next = 10;
                        break;
                      }
                      e.t0 = void 0 !== t;
                    case 10:
                      if (!e.t0) {
                        e.next = 14;
                        break;
                      }
                      (e.t2 = t), (e.next = 15);
                      break;
                    case 14:
                      e.t2 = !1;
                    case 15:
                      p = e.t2;
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        };
      e.push(
        _e(
          n,
          void 0,
          void 0,
          K().mark(function e() {
            return K().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      ae(function () {
                        return !h && p && !i.isPaused;
                      }, v)
                    );
                  case 2:
                    return e.abrupt("return", h && p && !i.isPaused);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )
      );
    }
    var Ne = function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, a) {
        function o(e) {
          try {
            u(r.next(e));
          } catch (t) {
            a(t);
          }
        }
        function l(e) {
          try {
            u(r.throw(e));
          } catch (t) {
            a(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(o, l);
        }
        u((r = r.apply(e, t || [])).next());
      });
    };
    function Re(e, t) {
      for (
        var n,
          r = this,
          i = this.charTable,
          a = this.state,
          o = this.options,
          l =
            null !== (n = null === t || void 0 === t ? void 0 : t.reverse) &&
            void 0 !== n &&
            n
              ? te(i)
              : te(i).reverse(),
          u = 0;
        u < o.oneAtATime;
        u++
      )
        e.push(
          Ne(
            r,
            void 0,
            void 0,
            K().mark(function e() {
              var t,
                n,
                r,
                i = this;
              return K().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = !0),
                        (n = !1),
                        (r = function () {
                          return Ne(
                            i,
                            void 0,
                            void 0,
                            K().mark(function e() {
                              var r, i;
                              return K().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if ((i = l.pop())) {
                                        e.next = 5;
                                        break;
                                      }
                                      (n = !0), (e.next = 17);
                                      break;
                                    case 5:
                                      return (e.next = 7), i.type();
                                    case 7:
                                      if (
                                        ((e.t1 = r = e.sent),
                                        (e.t0 = null !== e.t1),
                                        !e.t0)
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      e.t0 = void 0 !== r;
                                    case 11:
                                      if (!e.t0) {
                                        e.next = 15;
                                        break;
                                      }
                                      (e.t2 = r), (e.next = 16);
                                      break;
                                    case 15:
                                      e.t2 = !1;
                                    case 16:
                                      t = e.t2;
                                    case 17:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                        }),
                        (e.next = 4),
                        ae(function () {
                          return !n && t && !a.isPaused;
                        }, r)
                      );
                    case 4:
                      return e.abrupt("return", n && t && !a.isPaused);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        );
    }
    var Me = (function () {
        function e(t) {
          Z(this, e),
            (this.last = 0),
            (this.rate = 16),
            (this.running = !1),
            (this.writer = t);
        }
        return (
          ee(e, [
            {
              key: "run",
              value: function () {
                this.running ||
                  this.writer.options.letterize ||
                  ((this.rate = Math.floor(1e3 / this.writer.options.fps)),
                  (this.running = !0),
                  requestAnimationFrame(this.frame.bind(this)));
              },
            },
            {
              key: "frame",
              value: function (e) {
                return this.writer.state.isTyping
                  ? (this.last || (this.last = e),
                    e - this.last < this.rate ||
                      (this.animate.call(this), (this.last = e)),
                    requestAnimationFrame(this.frame.bind(this)))
                  : (this.animate.call(this), (this.running = !1));
              },
            },
            {
              key: "animate",
              value: function () {
                var e = this.writer,
                  t = e.htmlElement,
                  n = e.string;
                this.writer.options.html
                  ? (t.innerHTML = n)
                  : (t.textContent = n),
                  t.setAttribute(
                    "data-gw-string",
                    this.writer.options.html ? ve(n) : n
                  );
              },
            },
          ]),
          e
        );
      })(),
      De = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ve = (function () {
        function e(t, n) {
          var r,
            i = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 800,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (Z(this, e),
          (this.isStopped = !1),
          (this.isLooping = !1),
          (this.loopInterval = 0),
          (this.index = -1),
          (this.writer = t),
          (this.interval = a),
          Array.isArray(n))
            ? (this.texts = n)
            : ((r = "object" === typeof n ? n : document.querySelector(n)),
              (this.texts = []),
              null === r ||
                void 0 === r ||
                r.childNodes.forEach(function (e) {
                  var t = e.tagName,
                    n = e.innerHTML;
                  "P" === t && void 0 !== n && i.texts.push(n);
                }));
          "boolean" === typeof o
            ? (this.isLooping = o)
            : "function" === typeof o
            ? (this.endCallback = o)
            : ((this.isLooping = !0), (this.loopInterval = o)),
            this.loop();
        }
        return (
          ee(e, [
            {
              key: "stop",
              value: function () {
                this.isStopped = !0;
              },
            },
            {
              key: "resume",
              value: function () {
                this.index--,
                  (this.isStopped = !1),
                  (this.writer.state.isPaused = !1),
                  this.loop();
              },
            },
            {
              key: "loop",
              value: function () {
                var e;
                return De(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    var n;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.texts.length) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              if (
                                (this.index++,
                                !(this.index >= this.texts.length))
                              ) {
                                t.next = 11;
                                break;
                              }
                              if (!this.isLooping) {
                                t.next = 10;
                                break;
                              }
                              return (t.next = 7), ie(this.loopInterval);
                            case 7:
                              (this.index = 0), (t.next = 11);
                              break;
                            case 10:
                              return t.abrupt(
                                "return",
                                null === (e = this.endCallback) || void 0 === e
                                  ? void 0
                                  : e.call(
                                      this,
                                      this.writer.string,
                                      this.writer.getWriterData(
                                        "SUCCESS",
                                        "The queue has reached it's end."
                                      )
                                    )
                              );
                            case 11:
                              if (
                                !this.isStopped &&
                                !this.writer.state.isPaused
                              ) {
                                t.next = 13;
                                break;
                              }
                              return t.abrupt("return");
                            case 13:
                              return (
                                (t.next = 15),
                                this.writer.manageWriting(
                                  this.texts[this.index]
                                )
                              );
                            case 15:
                              if (
                                "SUCCESS" ===
                                  (null === (n = t.sent) || void 0 === n
                                    ? void 0
                                    : n.status) &&
                                !this.writer.state.isPaused
                              ) {
                                t.next = 18;
                                break;
                              }
                              return t.abrupt("return");
                            case 18:
                              return (t.next = 20), ie(this.interval);
                            case 20:
                              this.loop();
                            case 21:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
          ]),
          e
        );
      })(),
      ze = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Fe = (function () {
        function e(t, n, r) {
          var i;
          Z(this, e),
            (this.charTable = []),
            (this.goalText = ""),
            (this.lastText = ""),
            (this.string = ""),
            (this.htmlElement = t
              ? "string" === typeof t
                ? null !== (i = document.querySelector(t)) && void 0 !== i
                  ? i
                  : document.createElement("span")
                : t
              : document.createElement("span")),
            (this.htmlElement.$writer = this),
            (this.options = new ye(this, n)),
            (this.state = new be(this)),
            (this.emiter = new xe(this)),
            r && this.emiter.addCallback("finish", r),
            (this.animator = new Me(this)),
            (this.string = this.previousString);
        }
        return (
          ee(e, [
            {
              key: "updateString",
              value: function () {
                this.string = this.charTable
                  .map(function (e) {
                    return e.string;
                  })
                  .join("");
              },
            },
            {
              key: "previousString",
              get: function () {
                var e = this.htmlElement.textContent;
                return (
                  "string" !== typeof e &&
                    (e = this.options.html ? ve(this.string) : this.string),
                  (e = e.trim())
                );
              },
            },
            {
              key: "writerData",
              get: function () {
                var e = this.options,
                  t = this.state;
                return {
                  string: this.string,
                  writer: this,
                  options: e,
                  state: t,
                };
              },
            },
            {
              key: "write",
              value: function (e) {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.queue &&
                                  (this.queue.stop(), delete this.queue),
                                t.abrupt("return", this.manageWriting(e))
                              );
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "queueWrite",
              value: function (e, t, n) {
                this.queue && (this.queue.stop(), delete this.queue),
                  (this.queue = new Ve(this, e, t, n));
              },
            },
            {
              key: "add",
              value: function (e) {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    var n;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = this.previousString),
                                t.abrupt("return", this.write(n + e))
                              );
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "remove",
              value: function (e) {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    var n, r;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = this.previousString),
                                (r = Array.from(n)).splice(-e),
                                t.abrupt("return", this.write(r.join("")))
                              );
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "play",
              value: function () {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function e() {
                    return K().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.state.isPaused) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                this.getWriterData(
                                  "ERROR",
                                  "The writer isn't paused."
                                )
                              );
                            case 2:
                              if (!this.queue) {
                                e.next = 5;
                                break;
                              }
                              return (
                                this.queue.resume(),
                                e.abrupt(
                                  "return",
                                  this.getWriterData(
                                    "SUCCESS",
                                    "The queue was resumed"
                                  )
                                )
                              );
                            case 5:
                              return e.abrupt(
                                "return",
                                this.manageWriting(null)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "pause",
              value: function () {
                this.state.pause();
              },
            },
            {
              key: "endless",
              value: function (e) {
                this.options.extend({ endless: e });
              },
            },
            {
              key: "addCallback",
              value: function (e, t) {
                return this.emiter.addCallback(e, t), this;
              },
            },
            {
              key: "removeCallback",
              value: function (e, t) {
                return this.emiter.removeCallback(e, t), this;
              },
            },
            {
              key: "manageWriting",
              value: function (e) {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    var n;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (null !== e && (this.lastText = e),
                                !["erase_smart", "erase"].includes(
                                  this.options.mode
                                ) ||
                                  (!this.state.finished && !this.state.erasing))
                              ) {
                                t.next = 10;
                                break;
                              }
                              return (
                                (this.state.erasing = !0),
                                (n = this.genGoalStringToErase(this.lastText)),
                                this.preparePropertiesBeforeWrite(n),
                                (t.next = 7),
                                this.playChT({
                                  reverse: 0 !== this.options.oneAtATime,
                                })
                              );
                            case 7:
                              if (this.state.finished) {
                                t.next = 9;
                                break;
                              }
                              return t.abrupt(
                                "return",
                                this.getWriterData(
                                  "ERROR",
                                  "Erasing did not finish."
                                )
                              );
                            case 9:
                              this.state.erasing = !1;
                            case 10:
                              return (
                                this.preparePropertiesBeforeWrite(
                                  this.lastText
                                ),
                                this.pause(),
                                t.abrupt("return", this.playChT())
                              );
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "preparePropertiesBeforeWrite",
              value: function (e) {
                (this.goalText = e),
                  (this.state.nGhosts = 0),
                  this.options.setCharset(),
                  Ee.call(this),
                  this.state.progress.reset(this.charTable.length),
                  Ae.call(this);
              },
            },
            {
              key: "playChT",
              value: function (e) {
                return ze(
                  this,
                  void 0,
                  void 0,
                  K().mark(function t() {
                    var n, r, i, a, o;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = []),
                                (r = this.charTable),
                                (i = this.state),
                                (a = this.options),
                                !i.isTyping)
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt(
                                "return",
                                this.getWriterData(
                                  "ERROR",
                                  "The writer is already typing."
                                )
                              );
                            case 3:
                              return (
                                i.play(),
                                a.oneAtATime > 0
                                  ? Re.call(this, n, e)
                                  : "word" === a.oneAtATime
                                  ? Oe.call(this, n)
                                  : r.forEach(function (e) {
                                      return n.push(e.type());
                                    }),
                                (t.prev = 5),
                                (t.next = 8),
                                Promise.all(n)
                              );
                            case 8:
                              return (
                                (o = t.sent.every(function (e) {
                                  return e;
                                })),
                                t.abrupt("return", this.returnResult(o))
                              );
                            case 12:
                              return (
                                (t.prev = 12),
                                (t.t0 = t.catch(5)),
                                t.abrupt(
                                  "return",
                                  this.getWriterData(
                                    "ERROR",
                                    "Writer encountered an error.",
                                    t.t0
                                  )
                                )
                              );
                            case 15:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[5, 12]]
                    );
                  })
                );
              },
            },
            {
              key: "returnResult",
              value: function (e) {
                return (
                  e ? this.emiter.call("finish") : this.emiter.call("step"),
                  e
                    ? this.getWriterData(
                        "SUCCESS",
                        "The writer finished typing."
                      )
                    : this.getWriterData(
                        "ERROR",
                        "Writer failed to finish typing."
                      )
                );
              },
            },
            {
              key: "getWriterData",
              value: function (e, t, n) {
                var r = this.writerData;
                return Object.assign(Object.assign({}, r), {
                  status: e,
                  message: t,
                  error: n,
                });
              },
            },
            {
              key: "genGoalStringToErase",
              value: function (e) {
                var t,
                  n = this.previousString,
                  r = "";
                if ("erase_smart" === this.options.mode)
                  for (var i = 0; i < e.length; i++) {
                    var a = e[i],
                      o = null !== (t = n[i]) && void 0 !== t ? t : "";
                    if (a !== o) break;
                    r += o;
                  }
                var l = Math.max(e.length - r.length, 0);
                return (
                  l > 0 &&
                    " " === this.options.space &&
                    (r = r.padEnd(l + r.length, " ")),
                  r
                );
              },
            },
          ]),
          e
        );
      })();
    var Ie = n(184),
      Ue = function () {
        return (
          (0, t.useEffect)(function () {
            var e = document.getElementById("text-target");
            new Fe(e).queueWrite(
              ["D\xe9veloppeur", "Cr\xe9atif", "Curieux"],
              4e3,
              !0
            );
          }, []),
          (0, Ie.jsx)("span", {
            className: "dynamic-text",
            children: (0, Ie.jsx)("span", { id: "text-target" }),
          })
        );
      },
      Be = function () {
        return (
          (0, t.useEffect)(function () {
            var e = document.querySelector(".cursor");
            window.addEventListener("mousemove", function (t) {
              (e.style.top = t.y + "px"), (e.style.left = t.x + "px");
            }),
              document.querySelectorAll(".hover").forEach(function (t) {
                t.addEventListener("mouseover", function () {
                  e.classList.add("hovered");
                }),
                  t.addEventListener("mouseleave", function () {
                    (e.style.transition = "0.3s ease-out"),
                      e.classList.remove("hovered");
                  });
              });
          }, []),
          (0, Ie.jsx)("span", { className: "cursor" })
        );
      },
      We = function () {
        return (0, Ie.jsx)("div", {
          className: "navigation",
          children: (0, Ie.jsxs)("ul", {
            children: [
              (0, Ie.jsx)(Y, {
                to: "/",
                className: function (e) {
                  return e.isActive ? "nav-active hover" : "hover";
                },
                children: (0, Ie.jsx)("li", { children: "Accueil" }),
              }),
              (0, Ie.jsxs)("li", {
                className: "nav-portfolio",
                children: [
                  "Portfolio",
                  (0, Ie.jsxs)("ul", {
                    className: "nav-projects",
                    children: [
                      (0, Ie.jsx)(Y, {
                        to: "/projet-1",
                        className: function (e) {
                          return e.isActive ? "nav-active hover" : "hover";
                        },
                        children: (0, Ie.jsx)("li", { children: "Projet 1" }),
                      }),
                      (0, Ie.jsx)(Y, {
                        to: "/projet-2",
                        className: function (e) {
                          return e.isActive ? "nav-active hover" : "hover";
                        },
                        children: (0, Ie.jsx)("li", { children: "Projet 2" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Ie.jsx)(Y, {
                to: "/contact",
                className: function (e) {
                  return e.isActive ? "nav-active hover" : "hover";
                },
                children: (0, Ie.jsx)("li", { children: "Contact" }),
              }),
            ],
          }),
        });
      },
      He = function () {
        var e = function () {
          document.querySelectorAll(".social-network a").forEach(function (e) {
            e.addEventListener("mouseover", function (t) {
              e.style.transform = "translate("
                .concat(t.offsetX - 20, "px, ")
                .concat(t.offsetY - 13, "px)");
            }),
              e.addEventListener("mouseleave", function () {
                e.style.transform = "";
              });
          });
        };
        return (0, Ie.jsx)("div", {
          className: "social-network",
          children: (0, Ie.jsxs)("ul", {
            className: "content",
            children: [
              (0, Ie.jsx)("a", {
                href: "https://www.linkedin.com/in/quentin-hourcadette-72619421a/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover",
                onMouseOver: e,
                children: (0, Ie.jsx)("li", {
                  children: (0, Ie.jsx)("i", { className: "fab fa-linkedin" }),
                }),
              }),
              (0, Ie.jsx)("a", {
                href: "https://titter.com/Byak00",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover",
                onMouseOver: e,
                children: (0, Ie.jsx)("li", {
                  children: (0, Ie.jsx)("i", { className: "fab fa-twitter" }),
                }),
              }),
              (0, Ie.jsx)("a", {
                href: "https://github.com/QuentinHou",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover",
                onMouseOver: e,
                children: (0, Ie.jsx)("li", {
                  children: (0, Ie.jsx)("i", { className: "fab fa-github" }),
                }),
              }),
            ],
          }),
        });
      },
      $e = function (e) {
        return (0, Ie.jsxs)("div", {
          className: "scroll-bottom",
          children: [
            e.left &&
              (0, Ie.jsx)(Y, {
                to: e.left,
                className: "left hover",
                children: (0, Ie.jsx)("span", { children: "\u276c" }),
              }),
            e.right &&
              (0, Ie.jsx)(Y, {
                to: e.right,
                className: "right hover",
                children: (0, Ie.jsx)("span", { children: "\u276d" }),
              }),
          ],
        });
      },
      Ge = function (e, t) {
        return (
          (Ge =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          Ge(e, t)
        );
      };
    function qe(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Class extends value " + String(t) + " is not a constructor or null"
        );
      function n() {
        this.constructor = e;
      }
      Ge(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var Qe = function () {
      return (
        (Qe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        Qe.apply(this, arguments)
      );
    };
    function Ye(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    Object.create;
    function Xe(e) {
      var t = "function" === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" === typeof e.length)
        return {
          next: function () {
            return (
              e && r >= e.length && (e = void 0),
              { value: e && e[r++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function Ke(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        a = n.call(e),
        o = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
          o.push(r.value);
      } catch (l) {
        i = { error: l };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function Ze(e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, a = t.length; i < a; i++)
          (!r && i in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
      return e.concat(r || Array.prototype.slice.call(t));
    }
    Object.create;
    var Je = function (e) {
        return {
          isEnabled: function (t) {
            return e.some(function (e) {
              return !!t[e];
            });
          },
        };
      },
      et = {
        measureLayout: Je(["layout", "layoutId", "drag"]),
        animation: Je([
          "animate",
          "exit",
          "variants",
          "whileHover",
          "whileTap",
          "whileFocus",
          "whileDrag",
          "whileInView",
        ]),
        exit: Je(["exit"]),
        drag: Je(["drag", "dragControls"]),
        focus: Je(["whileFocus"]),
        hover: Je(["whileHover", "onHoverStart", "onHoverEnd"]),
        tap: Je(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
        pan: Je(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
        inView: Je(["whileInView", "onViewportEnter", "onViewportLeave"]),
      };
    var tt = (0, t.createContext)({ strict: !1 }),
      nt = Object.keys(et),
      rt = nt.length;
    var it = (0, t.createContext)({
        transformPagePoint: function (e) {
          return e;
        },
        isStatic: !1,
        reducedMotion: "never",
      }),
      at = (0, t.createContext)({});
    var ot = (0, t.createContext)(null),
      lt = "undefined" !== typeof document,
      ut = lt ? t.useLayoutEffect : t.useEffect,
      st = { current: null },
      ct = !1;
    function ft() {
      return (
        !ct &&
          (function () {
            if (((ct = !0), lt))
              if (window.matchMedia) {
                var e = window.matchMedia("(prefers-reduced-motion)"),
                  t = function () {
                    return (st.current = e.matches);
                  };
                e.addListener(t), t();
              } else st.current = !1;
          })(),
        Ke((0, t.useState)(st.current), 1)[0]
      );
    }
    function dt(e, n, r, i) {
      var a = (0, t.useContext)(tt),
        o = (0, t.useContext)(at).visualElement,
        l = (0, t.useContext)(ot),
        u = (function () {
          var e = ft(),
            n = (0, t.useContext)(it).reducedMotion;
          return "never" !== n && ("always" === n || e);
        })(),
        s = (0, t.useRef)(void 0);
      i || (i = a.renderer),
        !s.current &&
          i &&
          (s.current = i(e, {
            visualState: n,
            parent: o,
            props: r,
            presenceId: null === l || void 0 === l ? void 0 : l.id,
            blockInitialAnimation:
              !1 === (null === l || void 0 === l ? void 0 : l.initial),
            shouldReduceMotion: u,
          }));
      var c = s.current;
      return (
        ut(function () {
          null === c || void 0 === c || c.syncRender();
        }),
        (0, t.useEffect)(function () {
          var e;
          null ===
            (e = null === c || void 0 === c ? void 0 : c.animationState) ||
            void 0 === e ||
            e.animateChanges();
        }),
        ut(function () {
          return function () {
            return null === c || void 0 === c ? void 0 : c.notifyUnmount();
          };
        }, []),
        c
      );
    }
    function pt(e) {
      return (
        "object" === typeof e &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    function ht(e) {
      return Array.isArray(e);
    }
    function vt(e) {
      return "string" === typeof e || ht(e);
    }
    function mt(e, t, n, r, i) {
      var a;
      return (
        void 0 === r && (r = {}),
        void 0 === i && (i = {}),
        "function" === typeof t &&
          (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
        "string" === typeof t &&
          (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
        "function" === typeof t &&
          (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
        t
      );
    }
    function gt(e, t, n) {
      var r = e.getProps();
      return mt(
        r,
        t,
        null !== n && void 0 !== n ? n : r.custom,
        (function (e) {
          var t = {};
          return (
            e.forEachValue(function (e, n) {
              return (t[n] = e.get());
            }),
            t
          );
        })(e),
        (function (e) {
          var t = {};
          return (
            e.forEachValue(function (e, n) {
              return (t[n] = e.getVelocity());
            }),
            t
          );
        })(e)
      );
    }
    function yt(e) {
      var t;
      return (
        "function" ===
          typeof (null === (t = e.animate) || void 0 === t
            ? void 0
            : t.start) ||
        vt(e.initial) ||
        vt(e.animate) ||
        vt(e.whileHover) ||
        vt(e.whileDrag) ||
        vt(e.whileTap) ||
        vt(e.whileFocus) ||
        vt(e.exit)
      );
    }
    function bt(e) {
      return Boolean(yt(e) || e.variants);
    }
    function xt(e) {
      var n = (function (e, t) {
          if (yt(e)) {
            var n = e.initial,
              r = e.animate;
            return {
              initial: !1 === n || vt(n) ? n : void 0,
              animate: vt(r) ? r : void 0,
            };
          }
          return !1 !== e.inherit ? t : {};
        })(e, (0, t.useContext)(at)),
        r = n.initial,
        i = n.animate;
      return (0, t.useMemo)(
        function () {
          return { initial: r, animate: i };
        },
        [wt(r), wt(i)]
      );
    }
    function wt(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    function kt(e) {
      var n = (0, t.useRef)(null);
      return null === n.current && (n.current = e()), n.current;
    }
    var St = (1 / 60) * 1e3,
      Et =
        "undefined" !== typeof performance
          ? function () {
              return performance.now();
            }
          : function () {
              return Date.now();
            },
      Ct =
        "undefined" !== typeof window
          ? function (e) {
              return window.requestAnimationFrame(e);
            }
          : function (e) {
              return setTimeout(function () {
                return e(Et());
              }, St);
            };
    var Pt = !0,
      Tt = !1,
      jt = !1,
      Lt = { delta: 0, timestamp: 0 },
      At = ["read", "update", "preRender", "render", "postRender"],
      _t = At.reduce(function (e, t) {
        return (
          (e[t] = (function (e) {
            var t = [],
              n = [],
              r = 0,
              i = !1,
              a = !1,
              o = new WeakSet(),
              l = {
                schedule: function (e) {
                  var a =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2] &&
                      i,
                    l = a ? t : n;
                  return (
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1] &&
                      o.add(e),
                    -1 === l.indexOf(e) &&
                      (l.push(e), a && i && (r = t.length)),
                    e
                  );
                },
                cancel: function (e) {
                  var t = n.indexOf(e);
                  -1 !== t && n.splice(t, 1), o.delete(e);
                },
                process: function (u) {
                  if (i) a = !0;
                  else {
                    i = !0;
                    var s = [n, t];
                    if (((t = s[0]), ((n = s[1]).length = 0), (r = t.length)))
                      for (var c = 0; c < r; c++) {
                        var f = t[c];
                        f(u), o.has(f) && (l.schedule(f), e());
                      }
                    (i = !1), a && ((a = !1), l.process(u));
                  }
                },
              };
            return l;
          })(function () {
            return (Tt = !0);
          })),
          e
        );
      }, {}),
      Ot = At.reduce(function (e, t) {
        var n = _t[t];
        return (
          (e[t] = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return Tt || Vt(), n.schedule(e, t, r);
          }),
          e
        );
      }, {}),
      Nt = At.reduce(function (e, t) {
        return (e[t] = _t[t].cancel), e;
      }, {}),
      Rt = At.reduce(function (e, t) {
        return (
          (e[t] = function () {
            return _t[t].process(Lt);
          }),
          e
        );
      }, {}),
      Mt = function (e) {
        return _t[e].process(Lt);
      },
      Dt = function e(t) {
        (Tt = !1),
          (Lt.delta = Pt ? St : Math.max(Math.min(t - Lt.timestamp, 40), 1)),
          (Lt.timestamp = t),
          (jt = !0),
          At.forEach(Mt),
          (jt = !1),
          Tt && ((Pt = !1), Ct(e));
      },
      Vt = function () {
        (Tt = !0), (Pt = !0), jt || Ct(Dt);
      },
      zt = function () {
        return Lt;
      },
      Ft = Ot,
      It = function (e, t, n) {
        return -n * e + n * t + e;
      };
    function Ut(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    function Bt(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function Wt(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    var Ht = (function () {
        function e() {
          this.subscriptions = [];
        }
        return (
          (e.prototype.add = function (e) {
            var t = this;
            return (
              Bt(this.subscriptions, e),
              function () {
                return Wt(t.subscriptions, e);
              }
            );
          }),
          (e.prototype.notify = function (e, t, n) {
            var r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](e, t, n);
              else
                for (var i = 0; i < r; i++) {
                  var a = this.subscriptions[i];
                  a && a(e, t, n);
                }
          }),
          (e.prototype.getSize = function () {
            return this.subscriptions.length;
          }),
          (e.prototype.clear = function () {
            this.subscriptions.length = 0;
          }),
          e
        );
      })(),
      $t = (function () {
        function e(e) {
          var t,
            n = this;
          (this.version = "6.3.13"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.updateSubscribers = new Ht()),
            (this.velocityUpdateSubscribers = new Ht()),
            (this.renderSubscribers = new Ht()),
            (this.canTrackVelocity = !1),
            (this.updateAndNotify = function (e, t) {
              void 0 === t && (t = !0), (n.prev = n.current), (n.current = e);
              var r = zt(),
                i = r.delta,
                a = r.timestamp;
              n.lastUpdated !== a &&
                ((n.timeDelta = i),
                (n.lastUpdated = a),
                Ft.postRender(n.scheduleVelocityCheck)),
                n.prev !== n.current && n.updateSubscribers.notify(n.current),
                n.velocityUpdateSubscribers.getSize() &&
                  n.velocityUpdateSubscribers.notify(n.getVelocity()),
                t && n.renderSubscribers.notify(n.current);
            }),
            (this.scheduleVelocityCheck = function () {
              return Ft.postRender(n.velocityCheck);
            }),
            (this.velocityCheck = function (e) {
              e.timestamp !== n.lastUpdated &&
                ((n.prev = n.current),
                n.velocityUpdateSubscribers.notify(n.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity =
              ((t = this.current), !isNaN(parseFloat(t))));
        }
        return (
          (e.prototype.onChange = function (e) {
            return this.updateSubscribers.add(e);
          }),
          (e.prototype.clearListeners = function () {
            this.updateSubscribers.clear();
          }),
          (e.prototype.onRenderRequest = function (e) {
            return e(this.get()), this.renderSubscribers.add(e);
          }),
          (e.prototype.attach = function (e) {
            this.passiveEffect = e;
          }),
          (e.prototype.set = function (e, t) {
            void 0 === t && (t = !0),
              t && this.passiveEffect
                ? this.passiveEffect(e, this.updateAndNotify)
                : this.updateAndNotify(e, t);
          }),
          (e.prototype.get = function () {
            return this.current;
          }),
          (e.prototype.getPrevious = function () {
            return this.prev;
          }),
          (e.prototype.getVelocity = function () {
            return this.canTrackVelocity
              ? Ut(
                  parseFloat(this.current) - parseFloat(this.prev),
                  this.timeDelta
                )
              : 0;
          }),
          (e.prototype.start = function (e) {
            var t = this;
            return (
              this.stop(),
              new Promise(function (n) {
                (t.hasAnimated = !0), (t.stopAnimation = e(n));
              }).then(function () {
                return t.clearAnimation();
              })
            );
          }),
          (e.prototype.stop = function () {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation();
          }),
          (e.prototype.isAnimating = function () {
            return !!this.stopAnimation;
          }),
          (e.prototype.clearAnimation = function () {
            this.stopAnimation = null;
          }),
          (e.prototype.destroy = function () {
            this.updateSubscribers.clear(),
              this.renderSubscribers.clear(),
              this.stop();
          }),
          e
        );
      })();
    function Gt(e) {
      return new $t(e);
    }
    var qt = function (e) {
        return Boolean(null !== e && "object" === typeof e && e.getVelocity);
      },
      Qt = function (e, t, n) {
        return Math.min(Math.max(n, e), t);
      },
      Yt = 0.001;
    function Xt(e) {
      var t,
        n,
        r = e.duration,
        i = void 0 === r ? 800 : r,
        a = e.bounce,
        o = void 0 === a ? 0.25 : a,
        l = e.velocity,
        u = void 0 === l ? 0 : l,
        s = e.mass,
        c = void 0 === s ? 1 : s,
        f = 1 - o;
      (f = Qt(0.05, 1, f)),
        (i = Qt(0.01, 10, i / 1e3)),
        f < 1
          ? ((t = function (e) {
              var t = e * f,
                n = t * i,
                r = t - u,
                a = Kt(e, f),
                o = Math.exp(-n);
              return Yt - (r / a) * o;
            }),
            (n = function (e) {
              var n = e * f * i,
                r = n * u + u,
                a = Math.pow(f, 2) * Math.pow(e, 2) * i,
                o = Math.exp(-n),
                l = Kt(Math.pow(e, 2), f);
              return ((-t(e) + Yt > 0 ? -1 : 1) * ((r - a) * o)) / l;
            }))
          : ((t = function (e) {
              return Math.exp(-e * i) * ((e - u) * i + 1) - 0.001;
            }),
            (n = function (e) {
              return Math.exp(-e * i) * (i * i * (u - e));
            }));
      var d = (function (e, t, n) {
        for (var r = n, i = 1; i < 12; i++) r -= e(r) / t(r);
        return r;
      })(t, n, 5 / i);
      if (((i *= 1e3), isNaN(d)))
        return { stiffness: 100, damping: 10, duration: i };
      var p = Math.pow(d, 2) * c;
      return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: i };
    }
    function Kt(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    var Zt = ["duration", "bounce"],
      Jt = ["stiffness", "damping", "mass"];
    function en(e, t) {
      return t.some(function (t) {
        return void 0 !== e[t];
      });
    }
    function tn(e) {
      var t = e.from,
        n = void 0 === t ? 0 : t,
        r = e.to,
        i = void 0 === r ? 1 : r,
        a = e.restSpeed,
        o = void 0 === a ? 2 : a,
        l = e.restDelta,
        u = Ye(e, ["from", "to", "restSpeed", "restDelta"]),
        s = { done: !1, value: n },
        c = (function (e) {
          var t = Object.assign(
            {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
            },
            e
          );
          if (!en(e, Jt) && en(e, Zt)) {
            var n = Xt(e);
            (t = Object.assign(Object.assign(Object.assign({}, t), n), {
              velocity: 0,
              mass: 1,
            })).isResolvedFromDuration = !0;
          }
          return t;
        })(u),
        f = c.stiffness,
        d = c.damping,
        p = c.mass,
        h = c.velocity,
        v = c.duration,
        m = c.isResolvedFromDuration,
        g = nn,
        y = nn;
      function b() {
        var e = h ? -h / 1e3 : 0,
          t = i - n,
          r = d / (2 * Math.sqrt(f * p)),
          a = Math.sqrt(f / p) / 1e3;
        if (
          (void 0 === l && (l = Math.min(Math.abs(i - n) / 100, 0.4)), r < 1)
        ) {
          var o = Kt(a, r);
          (g = function (n) {
            var l = Math.exp(-r * a * n);
            return (
              i -
              l *
                (((e + r * a * t) / o) * Math.sin(o * n) + t * Math.cos(o * n))
            );
          }),
            (y = function (n) {
              var i = Math.exp(-r * a * n);
              return (
                r *
                  a *
                  i *
                  ((Math.sin(o * n) * (e + r * a * t)) / o +
                    t * Math.cos(o * n)) -
                i *
                  (Math.cos(o * n) * (e + r * a * t) - o * t * Math.sin(o * n))
              );
            });
        } else if (1 === r)
          g = function (n) {
            return i - Math.exp(-a * n) * (t + (e + a * t) * n);
          };
        else {
          var u = a * Math.sqrt(r * r - 1);
          g = function (n) {
            var o = Math.exp(-r * a * n),
              l = Math.min(u * n, 300);
            return (
              i -
              (o * ((e + r * a * t) * Math.sinh(l) + u * t * Math.cosh(l))) / u
            );
          };
        }
      }
      return (
        b(),
        {
          next: function (e) {
            var t = g(e);
            if (m) s.done = e >= v;
            else {
              var n = 1e3 * y(e),
                r = Math.abs(n) <= o,
                a = Math.abs(i - t) <= l;
              s.done = r && a;
            }
            return (s.value = s.done ? i : t), s;
          },
          flipTarget: function () {
            h = -h;
            var e = [i, n];
            (n = e[0]), (i = e[1]), b();
          },
        }
      );
    }
    tn.needsInterpolation = function (e, t) {
      return "string" === typeof e || "string" === typeof t;
    };
    var nn = function (e) {
        return 0;
      },
      rn = function (e, t, n) {
        var r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      },
      an = function (e, t) {
        return function (n) {
          return Math.max(Math.min(n, t), e);
        };
      },
      on = function (e) {
        return e % 1 ? Number(e.toFixed(5)) : e;
      },
      ln = /(-)?([\d]*\.?[\d])+/g,
      un =
        /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
      sn =
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
    function cn(e) {
      return "string" === typeof e;
    }
    var fn = {
        test: function (e) {
          return "number" === typeof e;
        },
        parse: parseFloat,
        transform: function (e) {
          return e;
        },
      },
      dn = Object.assign(Object.assign({}, fn), { transform: an(0, 1) }),
      pn = Object.assign(Object.assign({}, fn), { default: 1 });
    function hn(e, t, n) {
      return (
        t in e
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
    var vn = function (e, t) {
        return function (n) {
          return Boolean(
            (cn(n) && sn.test(n) && n.startsWith(e)) ||
              (t && Object.prototype.hasOwnProperty.call(n, t))
          );
        };
      },
      mn = function (e, t, n) {
        return function (r) {
          var i;
          if (!cn(r)) return r;
          var a = o(r.match(ln), 4),
            l = a[0],
            u = a[1],
            s = a[2],
            c = a[3];
          return (
            hn((i = {}), e, parseFloat(l)),
            hn(i, t, parseFloat(u)),
            hn(i, n, parseFloat(s)),
            hn(i, "alpha", void 0 !== c ? parseFloat(c) : 1),
            i
          );
        };
      },
      gn = an(0, 255),
      yn = Object.assign(Object.assign({}, fn), {
        transform: function (e) {
          return Math.round(gn(e));
        },
      }),
      bn = {
        test: vn("rgb", "red"),
        parse: mn("red", "green", "blue"),
        transform: function (e) {
          var t = e.red,
            n = e.green,
            r = e.blue,
            i = e.alpha,
            a = void 0 === i ? 1 : i;
          return (
            "rgba(" +
            yn.transform(t) +
            ", " +
            yn.transform(n) +
            ", " +
            yn.transform(r) +
            ", " +
            on(dn.transform(a)) +
            ")"
          );
        },
      };
    var xn = {
        test: vn("#"),
        parse: function (e) {
          var t = "",
            n = "",
            r = "",
            i = "";
          return (
            e.length > 5
              ? ((t = e.substr(1, 2)),
                (n = e.substr(3, 2)),
                (r = e.substr(5, 2)),
                (i = e.substr(7, 2)))
              : ((t = e.substr(1, 1)),
                (n = e.substr(2, 1)),
                (r = e.substr(3, 1)),
                (i = e.substr(4, 1)),
                (t += t),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: bn.transform,
      },
      wn = function (e) {
        return {
          test: function (t) {
            return cn(t) && t.endsWith(e) && 1 === t.split(" ").length;
          },
          parse: parseFloat,
          transform: function (t) {
            return "".concat(t).concat(e);
          },
        };
      },
      kn = wn("deg"),
      Sn = wn("%"),
      En = wn("px"),
      Cn = wn("vh"),
      Pn = wn("vw"),
      Tn = Object.assign(Object.assign({}, Sn), {
        parse: function (e) {
          return Sn.parse(e) / 100;
        },
        transform: function (e) {
          return Sn.transform(100 * e);
        },
      }),
      jn = {
        test: vn("hsl", "hue"),
        parse: mn("hue", "saturation", "lightness"),
        transform: function (e) {
          var t = e.hue,
            n = e.saturation,
            r = e.lightness,
            i = e.alpha,
            a = void 0 === i ? 1 : i;
          return (
            "hsla(" +
            Math.round(t) +
            ", " +
            Sn.transform(on(n)) +
            ", " +
            Sn.transform(on(r)) +
            ", " +
            on(dn.transform(a)) +
            ")"
          );
        },
      };
    function Ln(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + 6 * (t - e) * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
      );
    }
    function An(e) {
      var t = e.hue,
        n = e.saturation,
        r = e.lightness,
        i = e.alpha;
      (t /= 360), (r /= 100);
      var a = 0,
        o = 0,
        l = 0;
      if ((n /= 100)) {
        var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
          s = 2 * r - u;
        (a = Ln(s, u, t + 1 / 3)), (o = Ln(s, u, t)), (l = Ln(s, u, t - 1 / 3));
      } else a = o = l = r;
      return {
        red: Math.round(255 * a),
        green: Math.round(255 * o),
        blue: Math.round(255 * l),
        alpha: i,
      };
    }
    var _n = function (e, t, n) {
        var r = e * e,
          i = t * t;
        return Math.sqrt(Math.max(0, n * (i - r) + r));
      },
      On = [xn, bn, jn],
      Nn = function (e) {
        return On.find(function (t) {
          return t.test(e);
        });
      },
      Rn = function (e) {
        return "'".concat(
          e,
          "' is not an animatable color. Use the equivalent color code instead."
        );
      },
      Mn = function (e, t) {
        var n = Nn(e),
          r = Nn(t);
        Rn(e), Rn(t);
        var i = n.parse(e),
          a = r.parse(t);
        n === jn && ((i = An(i)), (n = bn)),
          r === jn && ((a = An(a)), (r = bn));
        var o = Object.assign({}, i);
        return function (e) {
          for (var t in o) "alpha" !== t && (o[t] = _n(i[t], a[t], e));
          return (o.alpha = It(i.alpha, a.alpha, e)), n.transform(o);
        };
      },
      Dn = {
        test: function (e) {
          return bn.test(e) || xn.test(e) || jn.test(e);
        },
        parse: function (e) {
          return bn.test(e)
            ? bn.parse(e)
            : jn.test(e)
            ? jn.parse(e)
            : xn.parse(e);
        },
        transform: function (e) {
          return cn(e)
            ? e
            : e.hasOwnProperty("red")
            ? bn.transform(e)
            : jn.transform(e);
        },
      },
      Vn = "${c}",
      zn = "${n}";
    function Fn(e) {
      "number" === typeof e && (e = "".concat(e));
      var t = [],
        n = 0,
        r = e.match(un);
      r &&
        ((n = r.length),
        (e = e.replace(un, Vn)),
        t.push.apply(t, te(r.map(Dn.parse))));
      var i = e.match(ln);
      return (
        i && ((e = e.replace(ln, zn)), t.push.apply(t, te(i.map(fn.parse)))),
        { values: t, numColors: n, tokenised: e }
      );
    }
    function In(e) {
      return Fn(e).values;
    }
    function Un(e) {
      var t = Fn(e),
        n = t.values,
        r = t.numColors,
        i = t.tokenised,
        a = n.length;
      return function (e) {
        for (var t = i, n = 0; n < a; n++)
          t = t.replace(n < r ? Vn : zn, n < r ? Dn.transform(e[n]) : on(e[n]));
        return t;
      };
    }
    var Bn = function (e) {
      return "number" === typeof e ? 0 : e;
    };
    var Wn = {
        test: function (e) {
          var t, n, r, i;
          return (
            isNaN(e) &&
            cn(e) &&
            (null !==
              (n =
                null === (t = e.match(ln)) || void 0 === t
                  ? void 0
                  : t.length) && void 0 !== n
              ? n
              : 0) +
              (null !==
                (i =
                  null === (r = e.match(un)) || void 0 === r
                    ? void 0
                    : r.length) && void 0 !== i
                ? i
                : 0) >
              0
          );
        },
        parse: In,
        createTransformer: Un,
        getAnimatableNone: function (e) {
          var t = In(e);
          return Un(e)(t.map(Bn));
        },
      },
      Hn = function (e) {
        return "number" === typeof e;
      },
      $n = function (e, t) {
        return function (n) {
          return t(e(n));
        };
      },
      Gn = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.reduce($n);
      };
    function qn(e, t) {
      return Hn(e)
        ? function (n) {
            return It(e, t, n);
          }
        : Dn.test(e)
        ? Mn(e, t)
        : Kn(e, t);
    }
    var Qn = function (e, t) {
        var n = te(e),
          r = n.length,
          i = e.map(function (e, n) {
            return qn(e, t[n]);
          });
        return function (e) {
          for (var t = 0; t < r; t++) n[t] = i[t](e);
          return n;
        };
      },
      Yn = function (e, t) {
        var n = Object.assign(Object.assign({}, e), t),
          r = {};
        for (var i in n)
          void 0 !== e[i] && void 0 !== t[i] && (r[i] = qn(e[i], t[i]));
        return function (e) {
          for (var t in r) n[t] = r[t](e);
          return n;
        };
      };
    function Xn(e) {
      for (
        var t = Wn.parse(e), n = t.length, r = 0, i = 0, a = 0, o = 0;
        o < n;
        o++
      )
        r || "number" === typeof t[o] ? r++ : void 0 !== t[o].hue ? a++ : i++;
      return { parsed: t, numNumbers: r, numRGB: i, numHSL: a };
    }
    var Kn = function (e, t) {
        var n = Wn.createTransformer(t),
          r = Xn(e),
          i = Xn(t);
        return r.numHSL === i.numHSL &&
          r.numRGB === i.numRGB &&
          r.numNumbers >= i.numNumbers
          ? Gn(Qn(r.parsed, i.parsed), n)
          : ("Complex values '"
              .concat(e, "' and '")
              .concat(
                t,
                "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
              ),
            function (n) {
              return "".concat(n > 0 ? t : e);
            });
      },
      Zn = function (e, t) {
        return function (n) {
          return It(e, t, n);
        };
      };
    function Jn(e, t, n) {
      for (
        var r,
          i = [],
          a =
            n ||
            ("number" === typeof (r = e[0])
              ? Zn
              : "string" === typeof r
              ? Dn.test(r)
                ? Mn
                : Kn
              : Array.isArray(r)
              ? Qn
              : "object" === typeof r
              ? Yn
              : void 0),
          o = e.length - 1,
          l = 0;
        l < o;
        l++
      ) {
        var u = a(e[l], e[l + 1]);
        if (t) {
          var s = Array.isArray(t) ? t[l] : t;
          u = Gn(s, u);
        }
        i.push(u);
      }
      return i;
    }
    function er(e, t) {
      var n = o(e, 2),
        r = n[0],
        i = n[1],
        a = o(t, 1)[0];
      return function (e) {
        return a(rn(r, i, e));
      };
    }
    function tr(e, t) {
      var n = e.length,
        r = n - 1;
      return function (i) {
        var a = 0,
          o = !1;
        if ((i <= e[0] ? (o = !0) : i >= e[r] && ((a = r - 1), (o = !0)), !o)) {
          for (var l = 1; l < n && !(e[l] > i || l === r); l++);
          a = l - 1;
        }
        var u = rn(e[a], e[a + 1], i);
        return t[a](u);
      };
    }
    function nr(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.clamp,
        i = void 0 === r || r,
        a = n.ease,
        o = n.mixer,
        l = e.length;
      t.length,
        !a || !Array.isArray(a) || a.length,
        e[0] > e[l - 1] &&
          ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
      var u = Jn(t, a, o),
        s = 2 === l ? er(e, u) : tr(e, u);
      return i
        ? function (t) {
            return s(Qt(e[0], e[l - 1], t));
          }
        : s;
    }
    var rr,
      ir = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      ar = function (e) {
        return function (t) {
          return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
        };
      },
      or = function (e) {
        return function (t) {
          return t * t * ((e + 1) * t - e);
        };
      },
      lr = function (e) {
        return e;
      },
      ur =
        ((rr = 2),
        function (e) {
          return Math.pow(e, rr);
        }),
      sr = ir(ur),
      cr = ar(ur),
      fr = function (e) {
        return 1 - Math.sin(Math.acos(e));
      },
      dr = ir(fr),
      pr = ar(dr),
      hr = or(1.525),
      vr = ir(hr),
      mr = ar(hr),
      gr = (function (e) {
        var t = or(e);
        return function (e) {
          return (e *= 2) < 1
            ? 0.5 * t(e)
            : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
        };
      })(1.525),
      yr = function (e) {
        if (1 === e || 0 === e) return e;
        var t = e * e;
        return e < 0.36363636363636365
          ? 7.5625 * t
          : e < 0.7272727272727273
          ? 9.075 * t - 9.9 * e + 3.4
          : e < 0.9
          ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
          : 10.8 * e * e - 20.52 * e + 10.72;
      },
      br = ir(yr);
    function xr(e, t) {
      return e
        .map(function () {
          return t || cr;
        })
        .splice(0, e.length - 1);
    }
    function wr(e) {
      var t = e.from,
        n = void 0 === t ? 0 : t,
        r = e.to,
        i = void 0 === r ? 1 : r,
        a = e.ease,
        o = e.offset,
        l = e.duration,
        u = void 0 === l ? 300 : l,
        s = { done: !1, value: n },
        c = Array.isArray(i) ? i : [n, i],
        f = (function (e, t) {
          return e.map(function (e) {
            return e * t;
          });
        })(
          o && o.length === c.length
            ? o
            : (function (e) {
                var t = e.length;
                return e.map(function (e, n) {
                  return 0 !== n ? n / (t - 1) : 0;
                });
              })(c),
          u
        );
      function d() {
        return nr(f, c, { ease: Array.isArray(a) ? a : xr(c, a) });
      }
      var p = d();
      return {
        next: function (e) {
          return (s.value = p(e)), (s.done = e >= u), s;
        },
        flipTarget: function () {
          c.reverse(), (p = d());
        },
      };
    }
    var kr = {
      keyframes: wr,
      spring: tn,
      decay: function (e) {
        var t = e.velocity,
          n = void 0 === t ? 0 : t,
          r = e.from,
          i = void 0 === r ? 0 : r,
          a = e.power,
          o = void 0 === a ? 0.8 : a,
          l = e.timeConstant,
          u = void 0 === l ? 350 : l,
          s = e.restDelta,
          c = void 0 === s ? 0.5 : s,
          f = e.modifyTarget,
          d = { done: !1, value: i },
          p = o * n,
          h = i + p,
          v = void 0 === f ? h : f(h);
        return (
          v !== h && (p = v - i),
          {
            next: function (e) {
              var t = -p * Math.exp(-e / u);
              return (
                (d.done = !(t > c || t < -c)), (d.value = d.done ? v : v + t), d
              );
            },
            flipTarget: function () {},
          }
        );
      },
    };
    function Sr(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return e - t - n;
    }
    var Er = function (e) {
      var t = function (t) {
        var n = t.delta;
        return e(n);
      };
      return {
        start: function () {
          return Ft.update(t, !0);
        },
        stop: function () {
          return Nt.update(t);
        },
      };
    };
    function Cr(e) {
      var t,
        n,
        r,
        i,
        a,
        o = e.from,
        l = e.autoplay,
        u = void 0 === l || l,
        s = e.driver,
        c = void 0 === s ? Er : s,
        f = e.elapsed,
        d = void 0 === f ? 0 : f,
        p = e.repeat,
        h = void 0 === p ? 0 : p,
        v = e.repeatType,
        m = void 0 === v ? "loop" : v,
        g = e.repeatDelay,
        y = void 0 === g ? 0 : g,
        b = e.onPlay,
        x = e.onStop,
        w = e.onComplete,
        k = e.onRepeat,
        S = e.onUpdate,
        E = Ye(e, [
          "from",
          "autoplay",
          "driver",
          "elapsed",
          "repeat",
          "repeatType",
          "repeatDelay",
          "onPlay",
          "onStop",
          "onComplete",
          "onRepeat",
          "onUpdate",
        ]),
        C = E.to,
        P = 0,
        T = E.duration,
        j = !1,
        L = !0,
        A = (function (e) {
          if (Array.isArray(e.to)) return wr;
          if (kr[e.type]) return kr[e.type];
          var t = new Set(Object.keys(e));
          return t.has("ease") || (t.has("duration") && !t.has("dampingRatio"))
            ? wr
            : t.has("dampingRatio") ||
              t.has("stiffness") ||
              t.has("mass") ||
              t.has("damping") ||
              t.has("restSpeed") ||
              t.has("restDelta")
            ? tn
            : wr;
        })(E);
      (null === (n = (t = A).needsInterpolation) || void 0 === n
        ? void 0
        : n.call(t, o, C)) &&
        ((a = nr([0, 100], [o, C], { clamp: !1 })), (o = 0), (C = 100));
      var _ = A(Object.assign(Object.assign({}, E), { from: o, to: C }));
      function O() {
        P++,
          "reverse" === m
            ? (d = (function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                return arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  !arguments[3]
                  ? t - (e - t) + n
                  : Sr(t + -e, t, n);
              })(d, T, y, (L = P % 2 === 0)))
            : ((d = Sr(d, T, y)), "mirror" === m && _.flipTarget()),
          (j = !1),
          k && k();
      }
      function N(e) {
        if ((L || (e = -e), (d += e), !j)) {
          var t = _.next(Math.max(0, d));
          (i = t.value), a && (i = a(i)), (j = L ? t.done : d <= 0);
        }
        null === S || void 0 === S || S(i),
          j &&
            (0 === P && ((null !== T && void 0 !== T) || (T = d)),
            P < h
              ? (function (e, t, n, r) {
                  return r ? e >= t + n : e <= -n;
                })(d, T, y, L) && O()
              : (r.stop(), w && w()));
      }
      return (
        u && (null === b || void 0 === b || b(), (r = c(N)).start()),
        {
          stop: function () {
            null === x || void 0 === x || x(), r.stop();
          },
        }
      );
    }
    var Pr = function (e) {
        return 1e3 * e;
      },
      Tr = function (e, t) {
        return 1 - 3 * t + 3 * e;
      },
      jr = function (e, t) {
        return 3 * t - 6 * e;
      },
      Lr = function (e) {
        return 3 * e;
      },
      Ar = function (e, t, n) {
        return ((Tr(t, n) * e + jr(t, n)) * e + Lr(t)) * e;
      },
      _r = function (e, t, n) {
        return 3 * Tr(t, n) * e * e + 2 * jr(t, n) * e + Lr(t);
      };
    var Or = 0.1;
    function Nr(e, t, n, r) {
      if (e === t && n === r) return lr;
      for (var i = new Float32Array(11), a = 0; a < 11; ++a)
        i[a] = Ar(a * Or, e, n);
      function o(t) {
        for (var r = 0, a = 1; 10 !== a && i[a] <= t; ++a) r += Or;
        --a;
        var o = r + ((t - i[a]) / (i[a + 1] - i[a])) * Or,
          l = _r(o, e, n);
        return l >= 0.001
          ? (function (e, t, n, r) {
              for (var i = 0; i < 8; ++i) {
                var a = _r(t, n, r);
                if (0 === a) return t;
                t -= (Ar(t, n, r) - e) / a;
              }
              return t;
            })(t, o, e, n)
          : 0 === l
          ? o
          : (function (e, t, n, r, i) {
              var a,
                o,
                l = 0;
              do {
                (a = Ar((o = t + (n - t) / 2), r, i) - e) > 0
                  ? (n = o)
                  : (t = o);
              } while (Math.abs(a) > 1e-7 && ++l < 10);
              return o;
            })(t, r, r + Or, e, n);
      }
      return function (e) {
        return 0 === e || 1 === e ? e : Ar(o(e), t, r);
      };
    }
    var Rr = {
        linear: lr,
        easeIn: ur,
        easeInOut: cr,
        easeOut: sr,
        circIn: fr,
        circInOut: pr,
        circOut: dr,
        backIn: hr,
        backInOut: mr,
        backOut: vr,
        anticipate: gr,
        bounceIn: br,
        bounceInOut: function (e) {
          return e < 0.5
            ? 0.5 * (1 - yr(1 - 2 * e))
            : 0.5 * yr(2 * e - 1) + 0.5;
        },
        bounceOut: yr,
      },
      Mr = function (e) {
        if (Array.isArray(e)) {
          e.length;
          var t = Ke(e, 4);
          return Nr(t[0], t[1], t[2], t[3]);
        }
        return "string" === typeof e
          ? ("Invalid easing type '".concat(e, "'"), Rr[e])
          : e;
      },
      Dr = function (e, t) {
        return (
          "zIndex" !== e &&
          (!("number" !== typeof t && !Array.isArray(t)) ||
            !("string" !== typeof t || !Wn.test(t) || t.startsWith("url(")))
        );
      },
      Vr = function (e) {
        return Array.isArray(e);
      },
      zr = function () {
        return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
      },
      Fr = function (e) {
        return {
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        };
      },
      Ir = function () {
        return { type: "keyframes", ease: "linear", duration: 0.3 };
      },
      Ur = function (e) {
        return { type: "keyframes", duration: 0.8, values: e };
      },
      Br = {
        x: zr,
        y: zr,
        z: zr,
        rotate: zr,
        rotateX: zr,
        rotateY: zr,
        rotateZ: zr,
        scaleX: Fr,
        scaleY: Fr,
        scale: Fr,
        opacity: Ir,
        backgroundColor: Ir,
        color: Ir,
        default: Fr,
      },
      Wr = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function Hr(e) {
      var t = o(e.slice(0, -1).split("("), 2),
        n = t[0],
        r = t[1];
      if ("drop-shadow" === n) return e;
      var i = o(r.match(ln) || [], 1)[0];
      if (!i) return e;
      var a = r.replace(i, ""),
        l = Wr.has(n) ? 1 : 0;
      return i !== r && (l *= 100), n + "(" + l + a + ")";
    }
    var $r = /([a-z-]*)\(.*?\)/g,
      Gr = Object.assign(Object.assign({}, Wn), {
        getAnimatableNone: function (e) {
          var t = e.match($r);
          return t ? t.map(Hr).join(" ") : e;
        },
      }),
      qr = Qe(Qe({}, fn), { transform: Math.round }),
      Qr = {
        borderWidth: En,
        borderTopWidth: En,
        borderRightWidth: En,
        borderBottomWidth: En,
        borderLeftWidth: En,
        borderRadius: En,
        radius: En,
        borderTopLeftRadius: En,
        borderTopRightRadius: En,
        borderBottomRightRadius: En,
        borderBottomLeftRadius: En,
        width: En,
        maxWidth: En,
        height: En,
        maxHeight: En,
        size: En,
        top: En,
        right: En,
        bottom: En,
        left: En,
        padding: En,
        paddingTop: En,
        paddingRight: En,
        paddingBottom: En,
        paddingLeft: En,
        margin: En,
        marginTop: En,
        marginRight: En,
        marginBottom: En,
        marginLeft: En,
        rotate: kn,
        rotateX: kn,
        rotateY: kn,
        rotateZ: kn,
        scale: pn,
        scaleX: pn,
        scaleY: pn,
        scaleZ: pn,
        skew: kn,
        skewX: kn,
        skewY: kn,
        distance: En,
        translateX: En,
        translateY: En,
        translateZ: En,
        x: En,
        y: En,
        z: En,
        perspective: En,
        transformPerspective: En,
        opacity: dn,
        originX: Tn,
        originY: Tn,
        originZ: En,
        zIndex: qr,
        fillOpacity: dn,
        strokeOpacity: dn,
        numOctaves: qr,
      },
      Yr = Qe(Qe({}, Qr), {
        color: Dn,
        backgroundColor: Dn,
        outlineColor: Dn,
        fill: Dn,
        stroke: Dn,
        borderColor: Dn,
        borderTopColor: Dn,
        borderRightColor: Dn,
        borderBottomColor: Dn,
        borderLeftColor: Dn,
        filter: Gr,
        WebkitFilter: Gr,
      }),
      Xr = function (e) {
        return Yr[e];
      };
    function Kr(e, t) {
      var n,
        r = Xr(e);
      return (
        r !== Gr && (r = Wn),
        null === (n = r.getAnimatableNone) || void 0 === n
          ? void 0
          : n.call(r, t)
      );
    }
    var Zr = !1,
      Jr = function (e) {
        return Vr(e) ? e[e.length - 1] || 0 : e;
      };
    function ei(e) {
      var t = e.ease,
        n = e.times,
        r = e.yoyo,
        i = e.flip,
        a = e.loop,
        o = Ye(e, ["ease", "times", "yoyo", "flip", "loop"]),
        l = Qe({}, o);
      return (
        n && (l.offset = n),
        o.duration && (l.duration = Pr(o.duration)),
        o.repeatDelay && (l.repeatDelay = Pr(o.repeatDelay)),
        t &&
          (l.ease = (function (e) {
            return Array.isArray(e) && "number" !== typeof e[0];
          })(t)
            ? t.map(Mr)
            : Mr(t)),
        "tween" === o.type && (l.type = "keyframes"),
        (r || a || i) &&
          (!0,
          r
            ? (l.repeatType = "reverse")
            : a
            ? (l.repeatType = "loop")
            : i && (l.repeatType = "mirror"),
          (l.repeat = a || r || i || o.repeat)),
        "spring" !== o.type && (l.type = "keyframes"),
        l
      );
    }
    function ti(e, t, n) {
      var r;
      return (
        Array.isArray(t.to) &&
          ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
        (function (e) {
          Array.isArray(e.to) &&
            null === e.to[0] &&
            ((e.to = Ze([], Ke(e.to), !1)), (e.to[0] = e.from));
        })(t),
        (function (e) {
          e.when,
            e.delay,
            e.delayChildren,
            e.staggerChildren,
            e.staggerDirection,
            e.repeat,
            e.repeatType,
            e.repeatDelay,
            e.from;
          var t = Ye(e, [
            "when",
            "delay",
            "delayChildren",
            "staggerChildren",
            "staggerDirection",
            "repeat",
            "repeatType",
            "repeatDelay",
            "from",
          ]);
          return !!Object.keys(t).length;
        })(e) ||
          (e = Qe(
            Qe({}, e),
            (function (e, t) {
              var n;
              return (
                (n = Vr(t) ? Ur : Br[e] || Br.default), Qe({ to: t }, n(t))
              );
            })(n, t.to)
          )),
        Qe(Qe({}, t), ei(e))
      );
    }
    function ni(e, t, n, r, i) {
      var a,
        o = ai(r, e),
        l = null !== (a = o.from) && void 0 !== a ? a : t.get(),
        u = Dr(e, n);
      "none" === l && u && "string" === typeof n
        ? (l = Kr(e, n))
        : ri(l) && "string" === typeof n
        ? (l = ii(n))
        : !Array.isArray(n) && ri(n) && "string" === typeof l && (n = ii(l));
      var s = Dr(e, l);
      return (
        "You are trying to animate "
          .concat(e, ' from "')
          .concat(l, '" to "')
          .concat(n, '". ')
          .concat(
            l,
            " is not an animatable value - to enable this animation set "
          )
          .concat(l, " to a value animatable to ")
          .concat(n, " via the `style` property."),
        s && u && !1 !== o.type
          ? function () {
              var r = {
                from: l,
                to: n,
                velocity: t.getVelocity(),
                onComplete: i,
                onUpdate: function (e) {
                  return t.set(e);
                },
              };
              return "inertia" === o.type || "decay" === o.type
                ? (function (e) {
                    var t,
                      n = e.from,
                      r = void 0 === n ? 0 : n,
                      i = e.velocity,
                      a = void 0 === i ? 0 : i,
                      o = e.min,
                      l = e.max,
                      u = e.power,
                      s = void 0 === u ? 0.8 : u,
                      c = e.timeConstant,
                      f = void 0 === c ? 750 : c,
                      d = e.bounceStiffness,
                      p = void 0 === d ? 500 : d,
                      h = e.bounceDamping,
                      v = void 0 === h ? 10 : h,
                      m = e.restDelta,
                      g = void 0 === m ? 1 : m,
                      y = e.modifyTarget,
                      b = e.driver,
                      x = e.onUpdate,
                      w = e.onComplete,
                      k = e.onStop;
                    function S(e) {
                      return (void 0 !== o && e < o) || (void 0 !== l && e > l);
                    }
                    function E(e) {
                      return void 0 === o
                        ? l
                        : void 0 === l || Math.abs(o - e) < Math.abs(l - e)
                        ? o
                        : l;
                    }
                    function C(e) {
                      null === t || void 0 === t || t.stop(),
                        (t = Cr(
                          Object.assign(Object.assign({}, e), {
                            driver: b,
                            onUpdate: function (t) {
                              var n;
                              null === x || void 0 === x || x(t),
                                null === (n = e.onUpdate) ||
                                  void 0 === n ||
                                  n.call(e, t);
                            },
                            onComplete: w,
                            onStop: k,
                          })
                        ));
                    }
                    function P(e) {
                      C(
                        Object.assign(
                          {
                            type: "spring",
                            stiffness: p,
                            damping: v,
                            restDelta: g,
                          },
                          e
                        )
                      );
                    }
                    if (S(r)) P({ from: r, velocity: a, to: E(r) });
                    else {
                      var T = s * a + r;
                      "undefined" !== typeof y && (T = y(T));
                      var j,
                        L,
                        A = E(T),
                        _ = A === o ? -1 : 1;
                      C({
                        type: "decay",
                        from: r,
                        velocity: a,
                        timeConstant: f,
                        power: s,
                        restDelta: g,
                        modifyTarget: y,
                        onUpdate: S(T)
                          ? function (e) {
                              (j = L),
                                (L = e),
                                (a = Ut(e - j, zt().delta)),
                                ((1 === _ && e > A) || (-1 === _ && e < A)) &&
                                  P({ from: e, to: A, velocity: a });
                            }
                          : void 0,
                      });
                    }
                    return {
                      stop: function () {
                        return null === t || void 0 === t ? void 0 : t.stop();
                      },
                    };
                  })(Qe(Qe({}, r), o))
                : Cr(
                    Qe(Qe({}, ti(o, r, e)), {
                      onUpdate: function (e) {
                        var t;
                        r.onUpdate(e),
                          null === (t = o.onUpdate) ||
                            void 0 === t ||
                            t.call(o, e);
                      },
                      onComplete: function () {
                        var e;
                        r.onComplete(),
                          null === (e = o.onComplete) ||
                            void 0 === e ||
                            e.call(o);
                      },
                    })
                  );
            }
          : function () {
              var e,
                r,
                a = Jr(n);
              return (
                t.set(a),
                i(),
                null ===
                  (e = null === o || void 0 === o ? void 0 : o.onUpdate) ||
                  void 0 === e ||
                  e.call(o, a),
                null ===
                  (r = null === o || void 0 === o ? void 0 : o.onComplete) ||
                  void 0 === r ||
                  r.call(o),
                { stop: function () {} }
              );
            }
      );
    }
    function ri(e) {
      return (
        0 === e ||
        ("string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" "))
      );
    }
    function ii(e) {
      return "number" === typeof e ? 0 : Kr("", e);
    }
    function ai(e, t) {
      return e[t] || e.default || e;
    }
    function oi(e, t, n, r) {
      return (
        void 0 === r && (r = {}),
        Zr && (r = { type: !1 }),
        t.start(function (i) {
          var a,
            o,
            l = ni(e, t, n, r, i),
            u = (function (e, t) {
              var n, r;
              return null !==
                (r =
                  null !== (n = (ai(e, t) || {}).delay) && void 0 !== n
                    ? n
                    : e.delay) && void 0 !== r
                ? r
                : 0;
            })(r, e),
            s = function () {
              return (o = l());
            };
          return (
            u ? (a = window.setTimeout(s, Pr(u))) : s(),
            function () {
              clearTimeout(a), null === o || void 0 === o || o.stop();
            }
          );
        })
      );
    }
    var li = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      ui = li.length,
      si = function (e) {
        return "string" === typeof e ? parseFloat(e) : e;
      },
      ci = function (e) {
        return "number" === typeof e || En.test(e);
      };
    function fi(e, t) {
      var n;
      return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
    }
    var di = hi(0, 0.5, dr),
      pi = hi(0.5, 0.95, lr);
    function hi(e, t, n) {
      return function (r) {
        return r < e ? 0 : r > t ? 1 : n(rn(e, t, r));
      };
    }
    function vi(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function mi(e, t) {
      vi(e.x, t.x), vi(e.y, t.y);
    }
    function gi(e) {
      return void 0 === e || 1 === e;
    }
    function yi(e) {
      var t = e.scale,
        n = e.scaleX,
        r = e.scaleY;
      return !gi(t) || !gi(n) || !gi(r);
    }
    function bi(e) {
      return (
        yi(e) || xi(e.x) || xi(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
      );
    }
    function xi(e) {
      return e && "0%" !== e;
    }
    function wi(e, t, n) {
      return n + t * (e - n);
    }
    function ki(e, t, n, r, i) {
      return void 0 !== i && (e = wi(e, i, r)), wi(e, n, r) + t;
    }
    function Si(e, t, n, r, i) {
      void 0 === t && (t = 0),
        void 0 === n && (n = 1),
        (e.min = ki(e.min, t, n, r, i)),
        (e.max = ki(e.max, t, n, r, i));
    }
    function Ei(e, t) {
      var n = t.x,
        r = t.y;
      Si(e.x, n.translate, n.scale, n.originPoint),
        Si(e.y, r.translate, r.scale, r.originPoint);
    }
    function Ci(e, t) {
      (e.min = e.min + t), (e.max = e.max + t);
    }
    function Pi(e, t, n) {
      var r = Ke(n, 3),
        i = r[0],
        a = r[1],
        o = r[2],
        l = void 0 !== t[o] ? t[o] : 0.5,
        u = It(e.min, e.max, l);
      Si(e, t[i], t[a], u, t.scale);
    }
    var Ti = ["x", "scaleX", "originX"],
      ji = ["y", "scaleY", "originY"];
    function Li(e, t) {
      Pi(e.x, t, Ti), Pi(e.y, t, ji);
    }
    var Ai = function (e) {
        return e.hasOwnProperty("x") && e.hasOwnProperty("y");
      },
      _i = function (e) {
        return Ai(e) && e.hasOwnProperty("z");
      },
      Oi = function (e, t) {
        return Math.abs(e - t);
      };
    function Ni(e, t) {
      if (Hn(e) && Hn(t)) return Oi(e, t);
      if (Ai(e) && Ai(t)) {
        var n = Oi(e.x, t.x),
          r = Oi(e.y, t.y),
          i = _i(e) && _i(t) ? Oi(e.z, t.z) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
      }
    }
    function Ri(e) {
      return e.max - e.min;
    }
    function Mi(e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = 0.01), Ni(e, t) < n;
    }
    function Di(e, t, n, r) {
      void 0 === r && (r = 0.5),
        (e.origin = r),
        (e.originPoint = It(t.min, t.max, e.origin)),
        (e.scale = Ri(n) / Ri(t)),
        (Mi(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = It(n.min, n.max, e.origin) - e.originPoint),
        (Mi(e.translate) || isNaN(e.translate)) && (e.translate = 0);
    }
    function Vi(e, t, n, r) {
      Di(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
        Di(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
    }
    function zi(e, t, n) {
      (e.min = n.min + t.min), (e.max = e.min + Ri(t));
    }
    function Fi(e, t, n) {
      (e.min = t.min - n.min), (e.max = e.min + Ri(t));
    }
    function Ii(e, t, n) {
      Fi(e.x, t.x, n.x), Fi(e.y, t.y, n.y);
    }
    function Ui(e, t, n, r, i) {
      return (
        (e = wi((e -= t), 1 / n, r)), void 0 !== i && (e = wi(e, 1 / i, r)), e
      );
    }
    function Bi(e, t, n, r, i) {
      var a = Ke(n, 3),
        o = a[0],
        l = a[1],
        u = a[2];
      !(function (e, t, n, r, i, a, o) {
        if (
          (void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          void 0 === r && (r = 0.5),
          void 0 === a && (a = e),
          void 0 === o && (o = e),
          Sn.test(t) &&
            ((t = parseFloat(t)), (t = It(o.min, o.max, t / 100) - o.min)),
          "number" === typeof t)
        ) {
          var l = It(a.min, a.max, r);
          e === a && (l -= t),
            (e.min = Ui(e.min, t, n, l, i)),
            (e.max = Ui(e.max, t, n, l, i));
        }
      })(e, t[o], t[l], t[u], t.scale, r, i);
    }
    var Wi = ["x", "scaleX", "originX"],
      Hi = ["y", "scaleY", "originY"];
    function $i(e, t, n, r) {
      Bi(
        e.x,
        t,
        Wi,
        null === n || void 0 === n ? void 0 : n.x,
        null === r || void 0 === r ? void 0 : r.x
      ),
        Bi(
          e.y,
          t,
          Hi,
          null === n || void 0 === n ? void 0 : n.y,
          null === r || void 0 === r ? void 0 : r.y
        );
    }
    function Gi(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function qi(e) {
      return Gi(e.x) && Gi(e.y);
    }
    function Qi(e, t) {
      return (
        e.x.min === t.x.min &&
        e.x.max === t.x.max &&
        e.y.min === t.y.min &&
        e.y.max === t.y.max
      );
    }
    var Yi = (function () {
        function e() {
          this.members = [];
        }
        return (
          (e.prototype.add = function (e) {
            Bt(this.members, e), e.scheduleRender();
          }),
          (e.prototype.remove = function (e) {
            if (
              (Wt(this.members, e),
              e === this.prevLead && (this.prevLead = void 0),
              e === this.lead)
            ) {
              var t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }),
          (e.prototype.relegate = function (e) {
            var t,
              n = this.members.findIndex(function (t) {
                return e === t;
              });
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var i = this.members[r];
              if (!1 !== i.isPresent) {
                t = i;
                break;
              }
            }
            return !!t && (this.promote(t), !0);
          }),
          (e.prototype.promote = function (e, t) {
            var n,
              r = this.lead;
            e !== r &&
              ((this.prevLead = r),
              (this.lead = e),
              e.show(),
              r &&
                (r.instance && r.scheduleRender(),
                e.scheduleRender(),
                (e.resumeFrom = r),
                t && (e.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                  ((e.snapshot = r.snapshot),
                  (e.snapshot.latestValues =
                    r.animationValues || r.latestValues),
                  (e.snapshot.isShared = !0)),
                (null === (n = e.root) || void 0 === n
                  ? void 0
                  : n.isUpdating) && (e.isLayoutDirty = !0),
                !1 === e.options.crossfade && r.hide()));
          }),
          (e.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (e) {
              var t, n, r, i, a;
              null === (n = (t = e.options).onExitComplete) ||
                void 0 === n ||
                n.call(t),
                null ===
                  (a =
                    null === (r = e.resumingFrom) || void 0 === r
                      ? void 0
                      : (i = r.options).onExitComplete) ||
                  void 0 === a ||
                  a.call(i);
            });
          }),
          (e.prototype.scheduleRender = function () {
            this.members.forEach(function (e) {
              e.instance && e.scheduleRender(!1);
            });
          }),
          (e.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          e
        );
      })(),
      Xi = {};
    function Ki(e, t, n) {
      var r = e.x.translate / t.x,
        i = e.y.translate / t.y,
        a = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
      if (((a += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n)) {
        var o = n.rotate,
          l = n.rotateX,
          u = n.rotateY;
        o && (a += "rotate(".concat(o, "deg) ")),
          l && (a += "rotateX(".concat(l, "deg) ")),
          u && (a += "rotateY(".concat(u, "deg) "));
      }
      var s = e.x.scale * t.x,
        c = e.y.scale * t.y;
      return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
        (a += "scale(".concat(s, ", ").concat(c, ")"))
        ? "none"
        : a;
    }
    function Zi(e) {
      return [e("x"), e("y")];
    }
    var Ji = ["", "X", "Y", "Z"],
      ea = ["transformPerspective", "x", "y", "z"];
    function ta(e, t) {
      return ea.indexOf(e) - ea.indexOf(t);
    }
    ["translate", "scale", "rotate", "skew"].forEach(function (e) {
      return Ji.forEach(function (t) {
        return ea.push(e + t);
      });
    });
    var na = new Set(ea);
    function ra(e) {
      return na.has(e);
    }
    var ia = new Set(["originX", "originY", "originZ"]);
    function aa(e) {
      return ia.has(e);
    }
    var oa = function (e, t) {
        return e.depth - t.depth;
      },
      la = (function () {
        function e() {
          (this.children = []), (this.isDirty = !1);
        }
        return (
          (e.prototype.add = function (e) {
            Bt(this.children, e), (this.isDirty = !0);
          }),
          (e.prototype.remove = function (e) {
            Wt(this.children, e), (this.isDirty = !0);
          }),
          (e.prototype.forEach = function (e) {
            this.isDirty && this.children.sort(oa),
              (this.isDirty = !1),
              this.children.forEach(e);
          }),
          e
        );
      })();
    function ua(e) {
      var t,
        n = qt(e) ? e.get() : e;
      return (
        (t = n),
        Boolean(t && "object" === typeof t && t.mix && t.toValue)
          ? n.toValue()
          : n
      );
    }
    var sa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    function ca(e) {
      var t = e.attachResizeListener,
        n = e.defaultParent,
        r = e.measureScroll,
        i = e.resetTransform;
      return (function () {
        function e(e, t, r) {
          var i = this;
          void 0 === t && (t = {}),
            void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.potentialNodes = new Map()),
            (this.checkUpdateFailed = function () {
              i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
            }),
            (this.updateProjection = function () {
              i.nodes.forEach(ga), i.nodes.forEach(ya);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.id = e),
            (this.latestValues = t),
            (this.root = r ? r.root || r : this),
            (this.path = r ? Ze(Ze([], Ke(r.path), !1), [r], !1) : []),
            (this.parent = r),
            (this.depth = r ? r.depth + 1 : 0),
            e && this.root.registerPotentialNode(e, this);
          for (var a = 0; a < this.path.length; a++)
            this.path[a].shouldResetTransform = !0;
          this.root === this && (this.nodes = new la());
        }
        return (
          (e.prototype.addEventListener = function (e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new Ht()),
              this.eventHandlers.get(e).add(t)
            );
          }),
          (e.prototype.notifyListeners = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var r = this.eventHandlers.get(e);
            null === r || void 0 === r || r.notify.apply(r, Ze([], Ke(t), !1));
          }),
          (e.prototype.hasListeners = function (e) {
            return this.eventHandlers.has(e);
          }),
          (e.prototype.registerPotentialNode = function (e, t) {
            this.potentialNodes.set(e, t);
          }),
          (e.prototype.mount = function (e, n) {
            var r,
              i = this;
            if ((void 0 === n && (n = !1), !this.instance)) {
              (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
                (this.instance = e);
              var a = this.options,
                o = a.layoutId,
                l = a.layout,
                u = a.visualElement;
              if (
                (u && !u.getInstance() && u.mount(e),
                this.root.nodes.add(this),
                null === (r = this.parent) ||
                  void 0 === r ||
                  r.children.add(this),
                this.id && this.root.potentialNodes.delete(this.id),
                n && (l || o) && (this.isLayoutDirty = !0),
                t)
              ) {
                var s,
                  c = function () {
                    return (i.root.updateBlockedByResize = !1);
                  };
                t(e, function () {
                  (i.root.updateBlockedByResize = !0),
                    clearTimeout(s),
                    (s = window.setTimeout(c, 250)),
                    sa.hasAnimatedSinceResize &&
                      ((sa.hasAnimatedSinceResize = !1), i.nodes.forEach(ma));
                });
              }
              o && this.root.registerSharedNode(o, this),
                !1 !== this.options.animate &&
                  u &&
                  (o || l) &&
                  this.addEventListener("didUpdate", function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      l = e.delta,
                      s = e.hasLayoutChanged,
                      c = e.hasRelativeTargetChanged,
                      f = e.layout;
                    if (i.isTreeAnimationBlocked())
                      return (
                        (i.target = void 0), void (i.relativeTarget = void 0)
                      );
                    var d =
                        null !==
                          (n =
                            null !== (t = i.options.transition) && void 0 !== t
                              ? t
                              : u.getDefaultTransition()) && void 0 !== n
                          ? n
                          : Ea,
                      p = u.getProps(),
                      h = p.onLayoutAnimationStart,
                      v = p.onLayoutAnimationComplete,
                      m = !i.targetLayout || !Qi(i.targetLayout, f) || c,
                      g = !s && c;
                    if (
                      (null === (r = i.resumeFrom) || void 0 === r
                        ? void 0
                        : r.instance) ||
                      g ||
                      (s && (m || !i.currentAnimation))
                    ) {
                      i.resumeFrom &&
                        ((i.resumingFrom = i.resumeFrom),
                        (i.resumingFrom.resumingFrom = void 0)),
                        i.setAnimationOrigin(l, g);
                      var y = Qe(Qe({}, ai(d, "layout")), {
                        onPlay: h,
                        onComplete: v,
                      });
                      u.shouldReduceMotion && ((y.delay = 0), (y.type = !1)),
                        i.startAnimation(y);
                    } else s || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (o = (a = i.options).onExitComplete) || void 0 === o || o.call(a));
                    i.targetLayout = f;
                  });
            }
          }),
          (e.prototype.unmount = function () {
            var e, t;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (e = this.getStack()) || void 0 === e || e.remove(this),
              null === (t = this.parent) ||
                void 0 === t ||
                t.children.delete(this),
              (this.instance = void 0),
              Nt.preRender(this.updateProjection);
          }),
          (e.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = !0;
          }),
          (e.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = !1;
          }),
          (e.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }),
          (e.prototype.isTreeAnimationBlocked = function () {
            var e;
            return (
              this.isAnimationBlocked ||
              (null === (e = this.parent) || void 0 === e
                ? void 0
                : e.isTreeAnimationBlocked()) ||
              !1
            );
          }),
          (e.prototype.startUpdate = function () {
            var e;
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              null === (e = this.nodes) || void 0 === e || e.forEach(ba));
          }),
          (e.prototype.willUpdate = function (e) {
            var t, n, r;
            if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
              null === (n = (t = this.options).onExitComplete) ||
                void 0 === n ||
                n.call(t);
            else if (
              (!this.root.isUpdating && this.root.startUpdate(),
              !this.isLayoutDirty)
            ) {
              this.isLayoutDirty = !0;
              for (var i = 0; i < this.path.length; i++) {
                var a = this.path[i];
                (a.shouldResetTransform = !0), a.updateScroll();
              }
              var o = this.options,
                l = o.layoutId,
                u = o.layout;
              if (void 0 !== l || u) {
                var s =
                  null === (r = this.options.visualElement) || void 0 === r
                    ? void 0
                    : r.getProps().transformTemplate;
                (this.prevTransformTemplateValue =
                  null === s || void 0 === s
                    ? void 0
                    : s(this.latestValues, "")),
                  this.updateSnapshot(),
                  e && this.notifyListeners("willUpdate");
              }
            }
          }),
          (e.prototype.didUpdate = function () {
            if (this.isUpdateBlocked())
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(ha)
              );
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(Ca), this.potentialNodes.clear()),
              this.nodes.forEach(va),
              this.nodes.forEach(fa),
              this.nodes.forEach(da),
              this.clearAllSnapshots(),
              Rt.update(),
              Rt.preRender(),
              Rt.render());
          }),
          (e.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(pa), this.sharedNodes.forEach(xa);
          }),
          (e.prototype.scheduleUpdateProjection = function () {
            Ft.preRender(this.updateProjection, !1, !0);
          }),
          (e.prototype.scheduleCheckAfterUnmount = function () {
            var e = this;
            Ft.postRender(function () {
              e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed();
            });
          }),
          (e.prototype.updateSnapshot = function () {
            if (!this.snapshot && this.instance) {
              var e = this.measure(),
                t = this.removeTransform(this.removeElementScroll(e));
              Ta(t),
                (this.snapshot = { measured: e, layout: t, latestValues: {} });
            }
          }),
          (e.prototype.updateLayout = function () {
            var e;
            if (
              this.instance &&
              (this.updateScroll(),
              (this.options.alwaysMeasureLayout && this.isLead()) ||
                this.isLayoutDirty)
            ) {
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (var t = 0; t < this.path.length; t++) {
                  this.path[t].updateScroll();
                }
              var n = this.measure();
              Ta(n);
              var r = this.layout;
              (this.layout = {
                measured: n,
                actual: this.removeElementScroll(n),
              }),
                (this.layoutCorrected = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.actual),
                null === (e = this.options.visualElement) ||
                  void 0 === e ||
                  e.notifyLayoutMeasure(
                    this.layout.actual,
                    null === r || void 0 === r ? void 0 : r.actual
                  );
            }
          }),
          (e.prototype.updateScroll = function () {
            this.options.layoutScroll &&
              this.instance &&
              (this.scroll = r(this.instance));
          }),
          (e.prototype.resetTransform = function () {
            var e;
            if (i) {
              var t = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !qi(this.projectionDelta),
                r =
                  null === (e = this.options.visualElement) || void 0 === e
                    ? void 0
                    : e.getProps().transformTemplate,
                a =
                  null === r || void 0 === r
                    ? void 0
                    : r(this.latestValues, ""),
                o = a !== this.prevTransformTemplateValue;
              t &&
                (n || bi(this.latestValues) || o) &&
                (i(this.instance, a),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
            }
          }),
          (e.prototype.measure = function () {
            var e = this.options.visualElement;
            if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            var t = e.measureViewportBox(),
              n = this.root.scroll;
            return n && (Ci(t.x, n.x), Ci(t.y, n.y)), t;
          }),
          (e.prototype.removeElementScroll = function (e) {
            var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            mi(t, e);
            for (var n = 0; n < this.path.length; n++) {
              var r = this.path[n],
                i = r.scroll,
                a = r.options;
              r !== this.root &&
                i &&
                a.layoutScroll &&
                (Ci(t.x, i.x), Ci(t.y, i.y));
            }
            return t;
          }),
          (e.prototype.applyTransform = function (e, t) {
            void 0 === t && (t = !1);
            var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            mi(n, e);
            for (var r = 0; r < this.path.length; r++) {
              var i = this.path[r];
              !t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                Li(n, { x: -i.scroll.x, y: -i.scroll.y }),
                bi(i.latestValues) && Li(n, i.latestValues);
            }
            return bi(this.latestValues) && Li(n, this.latestValues), n;
          }),
          (e.prototype.removeTransform = function (e) {
            var t,
              n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            mi(n, e);
            for (var r = 0; r < this.path.length; r++) {
              var i = this.path[r];
              if (i.instance && bi(i.latestValues)) {
                yi(i.latestValues) && i.updateSnapshot();
                var a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                mi(a, i.measure()),
                  $i(
                    n,
                    i.latestValues,
                    null === (t = i.snapshot) || void 0 === t
                      ? void 0
                      : t.layout,
                    a
                  );
              }
            }
            return bi(this.latestValues) && $i(n, this.latestValues), n;
          }),
          (e.prototype.setTargetDelta = function (e) {
            (this.targetDelta = e), this.root.scheduleUpdateProjection();
          }),
          (e.prototype.setOptions = function (e) {
            var t;
            this.options = Qe(Qe(Qe({}, this.options), e), {
              crossfade: null === (t = e.crossfade) || void 0 === t || t,
            });
          }),
          (e.prototype.clearMeasurements = function () {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }),
          (e.prototype.resolveTargetDelta = function () {
            var e,
              t,
              n,
              r,
              i = this.options,
              a = i.layout,
              o = i.layoutId;
            this.layout &&
              (a || o) &&
              (this.targetDelta ||
                this.relativeTarget ||
                ((this.relativeParent = this.getClosestProjectingParent()),
                this.relativeParent &&
                  this.relativeParent.layout &&
                  ((this.relativeTarget = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.relativeTargetOrigin = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  Ii(
                    this.relativeTargetOrigin,
                    this.layout.actual,
                    this.relativeParent.layout.actual
                  ),
                  mi(this.relativeTarget, this.relativeTargetOrigin))),
              (this.relativeTarget || this.targetDelta) &&
                (this.target ||
                  ((this.target = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.targetWithTransforms = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  })),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                (null === (e = this.relativeParent) || void 0 === e
                  ? void 0
                  : e.target)
                  ? ((t = this.target),
                    (n = this.relativeTarget),
                    (r = this.relativeParent.target),
                    zi(t.x, n.x, r.x),
                    zi(t.y, n.y, r.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(this.layout.actual))
                      : mi(this.target, this.layout.actual),
                    Ei(this.target, this.targetDelta))
                  : mi(this.target, this.layout.actual),
                this.attemptToResolveRelativeTarget &&
                  ((this.attemptToResolveRelativeTarget = !1),
                  (this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    Boolean(this.relativeParent.resumingFrom) ===
                      Boolean(this.resumingFrom) &&
                    !this.relativeParent.options.layoutScroll &&
                    this.relativeParent.target &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Ii(
                      this.relativeTargetOrigin,
                      this.target,
                      this.relativeParent.target
                    ),
                    mi(this.relativeTarget, this.relativeTargetOrigin)))));
          }),
          (e.prototype.getClosestProjectingParent = function () {
            if (this.parent && !bi(this.parent.latestValues))
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }),
          (e.prototype.calcProjection = function () {
            var e,
              t = this.options,
              n = t.layout,
              r = t.layoutId;
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              this.layout && (n || r))
            ) {
              var i = this.getLead();
              mi(this.layoutCorrected, this.layout.actual),
                (function (e, t, n, r) {
                  var i, a;
                  void 0 === r && (r = !1);
                  var o = n.length;
                  if (o) {
                    var l, u;
                    t.x = t.y = 1;
                    for (var s = 0; s < o; s++)
                      (u = (l = n[s]).projectionDelta),
                        "contents" !==
                          (null ===
                            (a =
                              null === (i = l.instance) || void 0 === i
                                ? void 0
                                : i.style) || void 0 === a
                            ? void 0
                            : a.display) &&
                          (r &&
                            l.options.layoutScroll &&
                            l.scroll &&
                            l !== l.root &&
                            Li(e, { x: -l.scroll.x, y: -l.scroll.y }),
                          u &&
                            ((t.x *= u.x.scale), (t.y *= u.y.scale), Ei(e, u)),
                          r && bi(l.latestValues) && Li(e, l.latestValues));
                  }
                })(
                  this.layoutCorrected,
                  this.treeScale,
                  this.path,
                  Boolean(this.resumingFrom) || this !== i
                );
              var a = i.target;
              if (a) {
                this.projectionDelta ||
                  ((this.projectionDelta = {
                    x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  }),
                  (this.projectionDeltaWithTransform = {
                    x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  }));
                var o = this.treeScale.x,
                  l = this.treeScale.y,
                  u = this.projectionTransform;
                Vi(
                  this.projectionDelta,
                  this.layoutCorrected,
                  a,
                  this.latestValues
                ),
                  (this.projectionTransform = Ki(
                    this.projectionDelta,
                    this.treeScale
                  )),
                  (this.projectionTransform === u &&
                    this.treeScale.x === o &&
                    this.treeScale.y === l) ||
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", a));
              }
            }
          }),
          (e.prototype.hide = function () {
            this.isVisible = !1;
          }),
          (e.prototype.show = function () {
            this.isVisible = !0;
          }),
          (e.prototype.scheduleRender = function (e) {
            var t, n, r;
            void 0 === e && (e = !0),
              null === (n = (t = this.options).scheduleRender) ||
                void 0 === n ||
                n.call(t),
              e &&
                (null === (r = this.getStack()) ||
                  void 0 === r ||
                  r.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }),
          (e.prototype.setAnimationOrigin = function (e, t) {
            var n,
              r = this;
            void 0 === t && (t = !1);
            var i = this.snapshot,
              a = (null === i || void 0 === i ? void 0 : i.latestValues) || {},
              o = Qe({}, this.latestValues),
              l = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              };
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
              s = null === i || void 0 === i ? void 0 : i.isShared,
              c =
                ((null === (n = this.getStack()) || void 0 === n
                  ? void 0
                  : n.members.length) || 0) <= 1,
              f = Boolean(
                s && !c && !0 === this.options.crossfade && !this.path.some(Sa)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = function (t) {
                var n,
                  i,
                  d,
                  p,
                  h,
                  v = t / 1e3;
                wa(l.x, e.x, v),
                  wa(l.y, e.y, v),
                  r.setTargetDelta(l),
                  r.relativeTarget &&
                    r.relativeTargetOrigin &&
                    r.layout &&
                    (null === (n = r.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (Ii(u, r.layout.actual, r.relativeParent.layout.actual),
                    (i = r.relativeTarget),
                    (d = r.relativeTargetOrigin),
                    (p = u),
                    (h = v),
                    ka(i.x, d.x, p.x, h),
                    ka(i.y, d.y, p.y, h)),
                  s &&
                    ((r.animationValues = o),
                    (function (e, t, n, r, i, a) {
                      var o, l, u, s;
                      i
                        ? ((e.opacity = It(
                            0,
                            null !== (o = n.opacity) && void 0 !== o ? o : 1,
                            di(r)
                          )),
                          (e.opacityExit = It(
                            null !== (l = t.opacity) && void 0 !== l ? l : 1,
                            0,
                            pi(r)
                          )))
                        : a &&
                          (e.opacity = It(
                            null !== (u = t.opacity) && void 0 !== u ? u : 1,
                            null !== (s = n.opacity) && void 0 !== s ? s : 1,
                            r
                          ));
                      for (var c = 0; c < ui; c++) {
                        var f = "border".concat(li[c], "Radius"),
                          d = fi(t, f),
                          p = fi(n, f);
                        (void 0 === d && void 0 === p) ||
                          (d || (d = 0),
                          p || (p = 0),
                          0 === d || 0 === p || ci(d) === ci(p)
                            ? ((e[f] = Math.max(It(si(d), si(p), r), 0)),
                              (Sn.test(p) || Sn.test(d)) && (e[f] += "%"))
                            : (e[f] = p));
                      }
                      (t.rotate || n.rotate) &&
                        (e.rotate = It(t.rotate || 0, n.rotate || 0, r));
                    })(o, a, r.latestValues, v, f, c)),
                  r.root.scheduleUpdateProjection(),
                  r.scheduleRender(),
                  (r.animationProgress = v);
              }),
              this.mixTargetDelta(0);
          }),
          (e.prototype.startAnimation = function (e) {
            var t,
              n,
              r = this;
            this.notifyListeners("animationStart"),
              null === (t = this.currentAnimation) || void 0 === t || t.stop(),
              this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
              this.pendingAnimation &&
                (Nt.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Ft.update(function () {
                (sa.hasAnimatedSinceResize = !0),
                  (r.currentAnimation = (function (e, t, n) {
                    void 0 === n && (n = {});
                    var r = qt(e) ? e : Gt(e);
                    return (
                      oi("", r, t, n),
                      {
                        stop: function () {
                          return r.stop();
                        },
                        isAnimating: function () {
                          return r.isAnimating();
                        },
                      }
                    );
                  })(
                    0,
                    1e3,
                    Qe(Qe({}, e), {
                      onUpdate: function (t) {
                        var n;
                        r.mixTargetDelta(t),
                          null === (n = e.onUpdate) ||
                            void 0 === n ||
                            n.call(e, t);
                      },
                      onComplete: function () {
                        var t;
                        null === (t = e.onComplete) ||
                          void 0 === t ||
                          t.call(e),
                          r.completeAnimation();
                      },
                    })
                  )),
                  r.resumingFrom &&
                    (r.resumingFrom.currentAnimation = r.currentAnimation),
                  (r.pendingAnimation = void 0);
              }));
          }),
          (e.prototype.completeAnimation = function () {
            var e;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (e = this.getStack()) ||
                void 0 === e ||
                e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }),
          (e.prototype.finishAnimation = function () {
            var e;
            this.currentAnimation &&
              (null === (e = this.mixTargetDelta) ||
                void 0 === e ||
                e.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }),
          (e.prototype.applyTransformsToTarget = function () {
            var e = this.getLead(),
              t = e.targetWithTransforms,
              n = e.target,
              r = e.layout,
              i = e.latestValues;
            t &&
              n &&
              r &&
              (mi(t, n),
              Li(t, i),
              Vi(
                this.projectionDeltaWithTransform,
                this.layoutCorrected,
                t,
                i
              ));
          }),
          (e.prototype.registerSharedNode = function (e, t) {
            var n, r, i;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Yi()),
              this.sharedNodes.get(e).add(t),
              t.promote({
                transition:
                  null === (n = t.options.initialPromotionConfig) ||
                  void 0 === n
                    ? void 0
                    : n.transition,
                preserveFollowOpacity:
                  null ===
                    (i =
                      null === (r = t.options.initialPromotionConfig) ||
                      void 0 === r
                        ? void 0
                        : r.shouldPreserveFollowOpacity) || void 0 === i
                    ? void 0
                    : i.call(r, t),
              });
          }),
          (e.prototype.isLead = function () {
            var e = this.getStack();
            return !e || e.lead === this;
          }),
          (e.prototype.getLead = function () {
            var e;
            return (
              (this.options.layoutId &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }),
          (e.prototype.getPrevLead = function () {
            var e;
            return this.options.layoutId
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }),
          (e.prototype.getStack = function () {
            var e = this.options.layoutId;
            if (e) return this.root.sharedNodes.get(e);
          }),
          (e.prototype.promote = function (e) {
            var t = void 0 === e ? {} : e,
              n = t.needsReset,
              r = t.transition,
              i = t.preserveFollowOpacity,
              a = this.getStack();
            a && a.promote(this, i),
              n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              r && this.setOptions({ transition: r });
          }),
          (e.prototype.relegate = function () {
            var e = this.getStack();
            return !!e && e.relegate(this);
          }),
          (e.prototype.resetRotation = function () {
            var e = this.options.visualElement;
            if (e) {
              for (var t = !1, n = {}, r = 0; r < Ji.length; r++) {
                var i = "rotate" + Ji[r];
                e.getStaticValue(i) &&
                  ((t = !0),
                  (n[i] = e.getStaticValue(i)),
                  e.setStaticValue(i, 0));
              }
              if (t) {
                for (var i in (null === e || void 0 === e || e.syncRender(), n))
                  e.setStaticValue(i, n[i]);
                e.scheduleRender();
              }
            }
          }),
          (e.prototype.getProjectionStyles = function (e) {
            var t, n, r, i, a, o;
            void 0 === e && (e = {});
            var l = {};
            if (!this.instance || this.isSVG) return l;
            if (!this.isVisible) return { visibility: "hidden" };
            l.visibility = "";
            var u =
              null === (t = this.options.visualElement) || void 0 === t
                ? void 0
                : t.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (l.opacity = ""),
                (l.pointerEvents = ua(e.pointerEvents) || ""),
                (l.transform = u ? u(this.latestValues, "") : "none"),
                l
              );
            var s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              var c = {};
              return (
                this.options.layoutId &&
                  ((c.opacity =
                    null !== (n = this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1),
                  (c.pointerEvents = ua(e.pointerEvents) || "")),
                this.hasProjected &&
                  !bi(this.latestValues) &&
                  ((c.transform = u ? u({}, "") : "none"),
                  (this.hasProjected = !1)),
                c
              );
            }
            var f = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (l.transform = Ki(
                this.projectionDeltaWithTransform,
                this.treeScale,
                f
              )),
              u && (l.transform = u(f, l.transform));
            var d = this.projectionDelta,
              p = d.x,
              h = d.y;
            for (var v in ((l.transformOrigin = ""
              .concat(100 * p.origin, "% ")
              .concat(100 * h.origin, "% 0")),
            s.animationValues
              ? (l.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (r = f.opacity) && void 0 !== r
                            ? r
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : f.opacityExit)
              : (l.opacity =
                  s === this
                    ? null !== (a = f.opacity) && void 0 !== a
                      ? a
                      : ""
                    : null !== (o = f.opacityExit) && void 0 !== o
                    ? o
                    : 0),
            Xi))
              if (void 0 !== f[v]) {
                var m = Xi[v],
                  g = m.correct,
                  y = m.applyTo,
                  b = g(f[v], s);
                if (y) for (var x = y.length, w = 0; w < x; w++) l[y[w]] = b;
                else l[v] = b;
              }
            return (
              this.options.layoutId &&
                (l.pointerEvents =
                  s === this ? ua(e.pointerEvents) || "" : "none"),
              l
            );
          }),
          (e.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = void 0;
          }),
          (e.prototype.resetTree = function () {
            this.root.nodes.forEach(function (e) {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(ha),
              this.root.sharedNodes.clear();
          }),
          e
        );
      })();
    }
    function fa(e) {
      e.updateLayout();
    }
    function da(e) {
      var t,
        n,
        r,
        i,
        a =
          null !==
            (n =
              null === (t = e.resumeFrom) || void 0 === t
                ? void 0
                : t.snapshot) && void 0 !== n
            ? n
            : e.snapshot;
      if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
        var o = e.layout,
          l = o.actual,
          u = o.measured;
        "size" === e.options.animationType
          ? Zi(function (e) {
              var t = a.isShared ? a.measured[e] : a.layout[e],
                n = Ri(t);
              (t.min = l[e].min), (t.max = t.min + n);
            })
          : "position" === e.options.animationType &&
            Zi(function (e) {
              var t = a.isShared ? a.measured[e] : a.layout[e],
                n = Ri(l[e]);
              t.max = t.min + n;
            });
        var s = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        };
        Vi(s, l, a.layout);
        var c = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        };
        a.isShared
          ? Vi(c, e.applyTransform(u, !0), a.measured)
          : Vi(c, l, a.layout);
        var f = !qi(s),
          d = !1;
        if (
          !e.resumeFrom &&
          ((e.relativeParent = e.getClosestProjectingParent()),
          e.relativeParent && !e.relativeParent.resumeFrom)
        ) {
          var p = e.relativeParent,
            h = p.snapshot,
            v = p.layout;
          if (h && v) {
            var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Ii(m, a.layout, h.layout);
            var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Ii(g, l, v.actual), Qi(m, g) || (d = !0);
          }
        }
        e.notifyListeners("didUpdate", {
          layout: l,
          snapshot: a,
          delta: c,
          layoutDelta: s,
          hasLayoutChanged: f,
          hasRelativeTargetChanged: d,
        });
      } else
        e.isLead() &&
          (null === (i = (r = e.options).onExitComplete) ||
            void 0 === i ||
            i.call(r));
      e.options.transition = void 0;
    }
    function pa(e) {
      e.clearSnapshot();
    }
    function ha(e) {
      e.clearMeasurements();
    }
    function va(e) {
      var t = e.options.visualElement;
      (null === t || void 0 === t
        ? void 0
        : t.getProps().onBeforeLayoutMeasure) && t.notifyBeforeLayoutMeasure(),
        e.resetTransform();
    }
    function ma(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0);
    }
    function ga(e) {
      e.resolveTargetDelta();
    }
    function ya(e) {
      e.calcProjection();
    }
    function ba(e) {
      e.resetRotation();
    }
    function xa(e) {
      e.removeLeadSnapshot();
    }
    function wa(e, t, n) {
      (e.translate = It(t.translate, 0, n)),
        (e.scale = It(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function ka(e, t, n, r) {
      (e.min = It(t.min, n.min, r)), (e.max = It(t.max, n.max, r));
    }
    function Sa(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    var Ea = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
    function Ca(e, t) {
      for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
        if (Boolean(e.path[r].instance)) {
          n = e.path[r];
          break;
        }
      var i = (n && n !== e.root ? n.instance : document).querySelector(
        '[data-projection-id="'.concat(t, '"]')
      );
      i && e.mount(i, !0);
    }
    function Pa(e) {
      (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
    }
    function Ta(e) {
      Pa(e.x), Pa(e.y);
    }
    var ja = 1;
    var La = (0, t.createContext)({}),
      Aa = (0, t.createContext)({});
    var _a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        qe(t, e),
        (t.prototype.getSnapshotBeforeUpdate = function () {
          return this.updateProps(), null;
        }),
        (t.prototype.componentDidUpdate = function () {}),
        (t.prototype.updateProps = function () {
          var e = this.props,
            t = e.visualElement,
            n = e.props;
          t && t.setProps(n);
        }),
        (t.prototype.render = function () {
          return this.props.children;
        }),
        t
      );
    })(t.Component);
    function Oa(e) {
      var n = e.preloadedFeatures,
        r = e.createVisualElement,
        i = e.projectionNodeConstructor,
        a = e.useRender,
        o = e.useVisualState,
        l = e.Component;
      return (
        n &&
          (function (e) {
            for (var t in e)
              null !== e[t] &&
                ("projectionNodeConstructor" === t
                  ? (et.projectionNodeConstructor = e[t])
                  : (et[t].Component = e[t]));
          })(n),
        (0, t.forwardRef)(function (e, n) {
          var u = (function (e) {
            var n,
              r = e.layoutId,
              i =
                null === (n = (0, t.useContext)(La)) || void 0 === n
                  ? void 0
                  : n.id;
            return i && void 0 !== r ? i + "-" + r : r;
          })(e);
          e = Qe(Qe({}, e), { layoutId: u });
          var s = (0, t.useContext)(it),
            c = null,
            f = xt(e),
            d = s.isStatic
              ? void 0
              : kt(function () {
                  if (sa.hasEverUpdated) return ja++;
                }),
            p = o(e, s.isStatic);
          return (
            !s.isStatic &&
              lt &&
              ((f.visualElement = dt(l, p, Qe(Qe({}, s), e), r)),
              (function (e, n, r, i) {
                var a,
                  o = n.layoutId,
                  l = n.layout,
                  u = n.drag,
                  s = n.dragConstraints,
                  c = n.layoutScroll,
                  f = (0, t.useContext)(Aa);
                i &&
                  r &&
                  !(null === r || void 0 === r ? void 0 : r.projection) &&
                  ((r.projection = new i(
                    e,
                    r.getLatestValues(),
                    null === (a = r.parent) || void 0 === a
                      ? void 0
                      : a.projection
                  )),
                  r.projection.setOptions({
                    layoutId: o,
                    layout: l,
                    alwaysMeasureLayout: Boolean(u) || (s && pt(s)),
                    visualElement: r,
                    scheduleRender: function () {
                      return r.scheduleRender();
                    },
                    animationType: "string" === typeof l ? l : "both",
                    initialPromotionConfig: f,
                    layoutScroll: c,
                  }));
              })(d, e, f.visualElement, i || et.projectionNodeConstructor),
              (c = (function (e, n, r) {
                var i = [];
                if (((0, t.useContext)(tt), !n)) return null;
                for (var a = 0; a < rt; a++) {
                  var o = nt[a],
                    l = et[o],
                    u = l.isEnabled,
                    s = l.Component;
                  u(e) &&
                    s &&
                    i.push(
                      t.createElement(
                        s,
                        Qe({ key: o }, e, { visualElement: n })
                      )
                    );
                }
                return i;
              })(e, f.visualElement))),
            t.createElement(
              _a,
              { visualElement: f.visualElement, props: Qe(Qe({}, s), e) },
              c,
              t.createElement(
                at.Provider,
                { value: f },
                a(
                  l,
                  e,
                  d,
                  (function (e, n, r) {
                    return (0, t.useCallback)(
                      function (t) {
                        var i;
                        t &&
                          (null === (i = e.mount) ||
                            void 0 === i ||
                            i.call(e, t)),
                          n && (t ? n.mount(t) : n.unmount()),
                          r &&
                            ("function" === typeof r
                              ? r(t)
                              : pt(r) && (r.current = t));
                      },
                      [n]
                    );
                  })(p, f.visualElement, n),
                  p,
                  s.isStatic,
                  f.visualElement
                )
              )
            )
          );
        })
      );
    }
    function Na(e) {
      function t(t, n) {
        return void 0 === n && (n = {}), Oa(e(t, n));
      }
      if ("undefined" === typeof Proxy) return t;
      var n = new Map();
      return new Proxy(t, {
        get: function (e, r) {
          return n.has(r) || n.set(r, t(r)), n.get(r);
        },
      });
    }
    var Ra = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "svg",
      "switch",
      "symbol",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function Ma(e) {
      return (
        "string" === typeof e &&
        !e.includes("-") &&
        !!(Ra.indexOf(e) > -1 || /[A-Z]/.test(e))
      );
    }
    function Da(e, t) {
      var n = t.layout,
        r = t.layoutId;
      return (
        ra(e) || aa(e) || ((n || void 0 !== r) && (!!Xi[e] || "opacity" === e))
      );
    }
    var Va = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    };
    function za(e) {
      return e.startsWith("--");
    }
    var Fa = function (e, t) {
      return t && "number" === typeof e ? t.transform(e) : e;
    };
    function Ia(e, t, n, r) {
      var i,
        a = e.style,
        o = e.vars,
        l = e.transform,
        u = e.transformKeys,
        s = e.transformOrigin;
      u.length = 0;
      var c = !1,
        f = !1,
        d = !0;
      for (var p in t) {
        var h = t[p];
        if (za(p)) o[p] = h;
        else {
          var v = Qr[p],
            m = Fa(h, v);
          if (ra(p)) {
            if (((c = !0), (l[p] = m), u.push(p), !d)) continue;
            h !== (null !== (i = v.default) && void 0 !== i ? i : 0) &&
              (d = !1);
          } else aa(p) ? ((s[p] = m), (f = !0)) : (a[p] = m);
        }
      }
      c
        ? (a.transform = (function (e, t, n, r) {
            var i = e.transform,
              a = e.transformKeys,
              o = t.enableHardwareAcceleration,
              l = void 0 === o || o,
              u = t.allowTransformNone,
              s = void 0 === u || u,
              c = "";
            a.sort(ta);
            for (var f = !1, d = a.length, p = 0; p < d; p++) {
              var h = a[p];
              (c += "".concat(Va[h] || h, "(").concat(i[h], ") ")),
                "z" === h && (f = !0);
            }
            return (
              !f && l ? (c += "translateZ(0)") : (c = c.trim()),
              r ? (c = r(i, n ? "" : c)) : s && n && (c = "none"),
              c
            );
          })(e, n, d, r))
        : r
        ? (a.transform = r({}, ""))
        : !t.transform && a.transform && (a.transform = "none"),
        f &&
          (a.transformOrigin = (function (e) {
            var t = e.originX,
              n = void 0 === t ? "50%" : t,
              r = e.originY,
              i = void 0 === r ? "50%" : r,
              a = e.originZ,
              o = void 0 === a ? 0 : a;
            return "".concat(n, " ").concat(i, " ").concat(o);
          })(s));
    }
    var Ua = function () {
      return {
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      };
    };
    function Ba(e, t, n) {
      for (var r in t) qt(t[r]) || Da(r, n) || (e[r] = t[r]);
    }
    function Wa(e, n, r) {
      var i = {};
      return (
        Ba(i, e.style || {}, e),
        Object.assign(
          i,
          (function (e, n, r) {
            var i = e.transformTemplate;
            return (0, t.useMemo)(
              function () {
                var e = {
                  style: {},
                  transform: {},
                  transformKeys: [],
                  transformOrigin: {},
                  vars: {},
                };
                Ia(e, n, { enableHardwareAcceleration: !r }, i);
                var t = e.style;
                return Qe(Qe({}, e.vars), t);
              },
              [n]
            );
          })(e, n, r)
        ),
        e.transformValues && (i = e.transformValues(i)),
        i
      );
    }
    function Ha(e, t, n) {
      var r = {},
        i = Wa(e, t, n);
      return (
        Boolean(e.drag) &&
          !1 !== e.dragListener &&
          ((r.draggable = !1),
          (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
          (i.touchAction =
            !0 === e.drag
              ? "none"
              : "pan-".concat("x" === e.drag ? "y" : "x"))),
        (r.style = i),
        r
      );
    }
    var $a = new Set([
      "initial",
      "animate",
      "exit",
      "style",
      "variants",
      "transition",
      "transformTemplate",
      "transformValues",
      "custom",
      "inherit",
      "layout",
      "layoutId",
      "layoutDependency",
      "onLayoutAnimationStart",
      "onLayoutAnimationComplete",
      "onLayoutMeasure",
      "onBeforeLayoutMeasure",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "drag",
      "dragControls",
      "dragListener",
      "dragConstraints",
      "dragDirectionLock",
      "dragSnapToOrigin",
      "_dragX",
      "_dragY",
      "dragElastic",
      "dragMomentum",
      "dragPropagation",
      "dragTransition",
      "whileDrag",
      "onPan",
      "onPanStart",
      "onPanEnd",
      "onPanSessionStart",
      "onTap",
      "onTapStart",
      "onTapCancel",
      "onHoverStart",
      "onHoverEnd",
      "whileFocus",
      "whileTap",
      "whileHover",
      "whileInView",
      "onViewportEnter",
      "onViewportLeave",
      "viewport",
      "layoutScroll",
    ]);
    function Ga(e) {
      return $a.has(e);
    }
    var qa,
      Qa = function (e) {
        return !Ga(e);
      };
    try {
      (qa = require("@emotion/is-prop-valid").default) &&
        (Qa = function (e) {
          return e.startsWith("on") ? !Ga(e) : qa(e);
        });
    } catch (Bu) {}
    function Ya(e, t, n) {
      return "string" === typeof e ? e : En.transform(t + n * e);
    }
    var Xa = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      Ka = { offset: "strokeDashoffset", array: "strokeDasharray" };
    function Za(e, t, n, r) {
      var i = t.attrX,
        a = t.attrY,
        o = t.originX,
        l = t.originY,
        u = t.pathLength,
        s = t.pathSpacing,
        c = void 0 === s ? 1 : s,
        f = t.pathOffset,
        d = void 0 === f ? 0 : f;
      Ia(
        e,
        Ye(t, [
          "attrX",
          "attrY",
          "originX",
          "originY",
          "pathLength",
          "pathSpacing",
          "pathOffset",
        ]),
        n,
        r
      ),
        (e.attrs = e.style),
        (e.style = {});
      var p = e.attrs,
        h = e.style,
        v = e.dimensions;
      p.transform && (v && (h.transform = p.transform), delete p.transform),
        v &&
          (void 0 !== o || void 0 !== l || h.transform) &&
          (h.transformOrigin = (function (e, t, n) {
            var r = Ya(t, e.x, e.width),
              i = Ya(n, e.y, e.height);
            return "".concat(r, " ").concat(i);
          })(v, void 0 !== o ? o : 0.5, void 0 !== l ? l : 0.5)),
        void 0 !== i && (p.x = i),
        void 0 !== a && (p.y = a),
        void 0 !== u &&
          (function (e, t, n, r, i) {
            void 0 === n && (n = 1),
              void 0 === r && (r = 0),
              void 0 === i && (i = !0),
              (e.pathLength = 1);
            var a = i ? Xa : Ka;
            e[a.offset] = En.transform(-r);
            var o = En.transform(t),
              l = En.transform(n);
            e[a.array] = "".concat(o, " ").concat(l);
          })(p, u, c, d, !1);
    }
    var Ja = function () {
      return Qe(
        Qe(
          {},
          {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
          }
        ),
        { attrs: {} }
      );
    };
    function eo(e, n) {
      var r = (0, t.useMemo)(
        function () {
          var t = Ja();
          return (
            Za(t, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
            Qe(Qe({}, t.attrs), { style: Qe({}, t.style) })
          );
        },
        [n]
      );
      if (e.style) {
        var i = {};
        Ba(i, e.style, e), (r.style = Qe(Qe({}, i), r.style));
      }
      return r;
    }
    function to(e) {
      void 0 === e && (e = !1);
      return function (n, r, i, a, o, l) {
        var u = o.latestValues,
          s = (Ma(n) ? eo : Ha)(r, u, l),
          c = (function (e, t, n) {
            var r = {};
            for (var i in e)
              (Qa(i) ||
                (!0 === n && Ga(i)) ||
                (!t && !Ga(i)) ||
                (e.draggable && i.startsWith("onDrag"))) &&
                (r[i] = e[i]);
            return r;
          })(r, "string" === typeof n, e),
          f = Qe(Qe(Qe({}, c), s), { ref: a });
        return i && (f["data-projection-id"] = i), (0, t.createElement)(n, f);
      };
    }
    var no = /([a-z])([A-Z])/g,
      ro = function (e) {
        return e.replace(no, "$1-$2").toLowerCase();
      };
    function io(e, t, n, r) {
      var i = t.style,
        a = t.vars;
      for (var o in (Object.assign(e.style, i, r && r.getProjectionStyles(n)),
      a))
        e.style.setProperty(o, a[o]);
    }
    var ao = new Set([
      "baseFrequency",
      "diffuseConstant",
      "kernelMatrix",
      "kernelUnitLength",
      "keySplines",
      "keyTimes",
      "limitingConeAngle",
      "markerHeight",
      "markerWidth",
      "numOctaves",
      "targetX",
      "targetY",
      "surfaceScale",
      "specularConstant",
      "specularExponent",
      "stdDeviation",
      "tableValues",
      "viewBox",
      "gradientTransform",
      "pathLength",
    ]);
    function oo(e, t, n, r) {
      for (var i in (io(e, t, void 0, r), t.attrs))
        e.setAttribute(ao.has(i) ? i : ro(i), t.attrs[i]);
    }
    function lo(e) {
      var t = e.style,
        n = {};
      for (var r in t) (qt(t[r]) || Da(r, e)) && (n[r] = t[r]);
      return n;
    }
    function uo(e) {
      var t = lo(e);
      for (var n in e) {
        if (qt(e[n]))
          t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
      }
      return t;
    }
    function so(e) {
      return "object" === typeof e && "function" === typeof e.start;
    }
    function co(e, t, n, r) {
      var i = e.scrapeMotionValuesFromProps,
        a = e.createRenderState,
        o = e.onMount,
        l = { latestValues: po(t, n, r, i), renderState: a() };
      return (
        o &&
          (l.mount = function (e) {
            return o(t, e, l);
          }),
        l
      );
    }
    var fo = function (e) {
      return function (n, r) {
        var i = (0, t.useContext)(at),
          a = (0, t.useContext)(ot);
        return r
          ? co(e, n, i, a)
          : kt(function () {
              return co(e, n, i, a);
            });
      };
    };
    function po(e, t, n, r) {
      var i = {},
        a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
        o = r(e);
      for (var l in o) i[l] = ua(o[l]);
      var u = e.initial,
        s = e.animate,
        c = yt(e),
        f = bt(e);
      t &&
        f &&
        !c &&
        !1 !== e.inherit &&
        ((null !== u && void 0 !== u) || (u = t.initial),
        (null !== s && void 0 !== s) || (s = t.animate));
      var d = a || !1 === u,
        p = d ? s : u;
      p &&
        "boolean" !== typeof p &&
        !so(p) &&
        (Array.isArray(p) ? p : [p]).forEach(function (t) {
          var n = mt(e, t);
          if (n) {
            var r = n.transitionEnd;
            n.transition;
            var a = Ye(n, ["transitionEnd", "transition"]);
            for (var o in a) {
              var l = a[o];
              if (Array.isArray(l)) l = l[d ? l.length - 1 : 0];
              null !== l && (i[o] = l);
            }
            for (var o in r) i[o] = r[o];
          }
        });
      return i;
    }
    var ho,
      vo = {
        useVisualState: fo({
          scrapeMotionValuesFromProps: uo,
          createRenderState: Ja,
          onMount: function (e, t, n) {
            var r = n.renderState,
              i = n.latestValues;
            try {
              r.dimensions =
                "function" === typeof t.getBBox
                  ? t.getBBox()
                  : t.getBoundingClientRect();
            } catch (a) {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            Za(r, i, { enableHardwareAcceleration: !1 }, e.transformTemplate),
              oo(t, r);
          },
        }),
      },
      mo = {
        useVisualState: fo({
          scrapeMotionValuesFromProps: lo,
          createRenderState: Ua,
        }),
      };
    function go(e, t, n, r) {
      return (
        void 0 === r && (r = { passive: !0 }),
        e.addEventListener(t, n, r),
        function () {
          return e.removeEventListener(t, n);
        }
      );
    }
    function yo(e, n, r, i) {
      (0, t.useEffect)(
        function () {
          var t = e.current;
          if (r && t) return go(t, n, r, i);
        },
        [e, n, r, i]
      );
    }
    function bo(e) {
      return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
        ? !("mouse" !== e.pointerType)
        : e instanceof MouseEvent;
    }
    function xo(e) {
      return !!e.touches;
    }
    !(function (e) {
      (e.Animate = "animate"),
        (e.Hover = "whileHover"),
        (e.Tap = "whileTap"),
        (e.Drag = "whileDrag"),
        (e.Focus = "whileFocus"),
        (e.InView = "whileInView"),
        (e.Exit = "exit");
    })(ho || (ho = {}));
    var wo = { pageX: 0, pageY: 0 };
    function ko(e, t) {
      void 0 === t && (t = "page");
      var n = e.touches[0] || e.changedTouches[0] || wo;
      return { x: n[t + "X"], y: n[t + "Y"] };
    }
    function So(e, t) {
      return void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
    }
    function Eo(e, t) {
      return (
        void 0 === t && (t = "page"), { point: xo(e) ? ko(e, t) : So(e, t) }
      );
    }
    var Co = function (e, t) {
        void 0 === t && (t = !1);
        var n,
          r = function (t) {
            return e(t, Eo(t));
          };
        return t
          ? ((n = r),
            function (e) {
              var t = e instanceof MouseEvent;
              (!t || (t && 0 === e.button)) && n(e);
            })
          : r;
      },
      Po = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave",
      },
      To = {
        pointerdown: "touchstart",
        pointermove: "touchmove",
        pointerup: "touchend",
        pointercancel: "touchcancel",
      };
    function jo(e) {
      return lt && null === window.onpointerdown
        ? e
        : lt && null === window.ontouchstart
        ? To[e]
        : lt && null === window.onmousedown
        ? Po[e]
        : e;
    }
    function Lo(e, t, n, r) {
      return go(e, jo(t), Co(n, "pointerdown" === t), r);
    }
    function Ao(e, t, n, r) {
      return yo(e, jo(t), n && Co(n, "pointerdown" === t), r);
    }
    function _o(e) {
      var t = null;
      return function () {
        return (
          null === t &&
          ((t = e),
          function () {
            t = null;
          })
        );
      };
    }
    var Oo = _o("dragHorizontal"),
      No = _o("dragVertical");
    function Ro(e) {
      var t = !1;
      if ("y" === e) t = No();
      else if ("x" === e) t = Oo();
      else {
        var n = Oo(),
          r = No();
        n && r
          ? (t = function () {
              n(), r();
            })
          : (n && n(), r && r());
      }
      return t;
    }
    function Mo() {
      var e = Ro(!0);
      return !e || (e(), !1);
    }
    function Do(e, t, n) {
      return function (r, i) {
        var a;
        bo(r) &&
          !Mo() &&
          (null === (a = e.animationState) ||
            void 0 === a ||
            a.setActive(ho.Hover, t),
          null === n || void 0 === n || n(r, i));
      };
    }
    var Vo = function e(t, n) {
      return !!n && (t === n || e(t, n.parentElement));
    };
    function zo(e) {
      return (0, t.useEffect)(function () {
        return function () {
          return e();
        };
      }, []);
    }
    new Set();
    var Fo = new WeakMap(),
      Io = new WeakMap(),
      Uo = function (e) {
        var t;
        null === (t = Fo.get(e.target)) || void 0 === t || t(e);
      },
      Bo = function (e) {
        e.forEach(Uo);
      };
    function Wo(e, t, n) {
      var r = (function (e) {
        var t = e.root,
          n = Ye(e, ["root"]),
          r = t || document;
        Io.has(r) || Io.set(r, {});
        var i = Io.get(r),
          a = JSON.stringify(n);
        return (
          i[a] || (i[a] = new IntersectionObserver(Bo, Qe({ root: t }, n))),
          i[a]
        );
      })(t);
      return (
        Fo.set(e, n),
        r.observe(e),
        function () {
          Fo.delete(e), r.unobserve(e);
        }
      );
    }
    var Ho = { some: 0, all: 1 };
    function $o(e, n, r, i) {
      var a = i.root,
        o = i.margin,
        l = i.amount,
        u = void 0 === l ? "some" : l,
        s = i.once;
      (0, t.useEffect)(
        function () {
          if (e) {
            var t = {
              root: null === a || void 0 === a ? void 0 : a.current,
              rootMargin: o,
              threshold: "number" === typeof u ? u : Ho[u],
            };
            return Wo(r.getInstance(), t, function (e) {
              var t,
                i = e.isIntersecting;
              if (
                n.isInView !== i &&
                ((n.isInView = i), !s || i || !n.hasEnteredView)
              ) {
                i && (n.hasEnteredView = !0),
                  null === (t = r.animationState) ||
                    void 0 === t ||
                    t.setActive(ho.InView, i);
                var a = r.getProps(),
                  o = i ? a.onViewportEnter : a.onViewportLeave;
                null === o || void 0 === o || o(e);
              }
            });
          }
        },
        [e, a, o, u]
      );
    }
    function Go(e, n, r, i) {
      var a = i.fallback,
        o = void 0 === a || a;
      (0, t.useEffect)(
        function () {
          e &&
            o &&
            requestAnimationFrame(function () {
              var e;
              n.hasEnteredView = !0;
              var t = r.getProps().onViewportEnter;
              null === t || void 0 === t || t(null),
                null === (e = r.animationState) ||
                  void 0 === e ||
                  e.setActive(ho.InView, !0);
            });
        },
        [e]
      );
    }
    var qo = function (e) {
        return function (t) {
          return e(t), null;
        };
      },
      Qo = {
        inView: qo(function (e) {
          var n = e.visualElement,
            r = e.whileInView,
            i = e.onViewportEnter,
            a = e.onViewportLeave,
            o = e.viewport,
            l = void 0 === o ? {} : o,
            u = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
            s = Boolean(r || i || a);
          l.once && u.current.hasEnteredView && (s = !1),
            ("undefined" === typeof IntersectionObserver ? Go : $o)(
              s,
              u.current,
              n,
              l
            );
        }),
        tap: qo(function (e) {
          var n = e.onTap,
            r = e.onTapStart,
            i = e.onTapCancel,
            a = e.whileTap,
            o = e.visualElement,
            l = n || r || i || a,
            u = (0, t.useRef)(!1),
            s = (0, t.useRef)(null),
            c = { passive: !(r || n || i || v) };
          function f() {
            var e;
            null === (e = s.current) || void 0 === e || e.call(s),
              (s.current = null);
          }
          function d() {
            var e;
            return (
              f(),
              (u.current = !1),
              null === (e = o.animationState) ||
                void 0 === e ||
                e.setActive(ho.Tap, !1),
              !Mo()
            );
          }
          function p(e, t) {
            d() &&
              (Vo(o.getInstance(), e.target)
                ? null === n || void 0 === n || n(e, t)
                : null === i || void 0 === i || i(e, t));
          }
          function h(e, t) {
            d() && (null === i || void 0 === i || i(e, t));
          }
          function v(e, t) {
            var n;
            f(),
              u.current ||
                ((u.current = !0),
                (s.current = Gn(
                  Lo(window, "pointerup", p, c),
                  Lo(window, "pointercancel", h, c)
                )),
                null === (n = o.animationState) ||
                  void 0 === n ||
                  n.setActive(ho.Tap, !0),
                null === r || void 0 === r || r(e, t));
          }
          Ao(o, "pointerdown", l ? v : void 0, c), zo(f);
        }),
        focus: qo(function (e) {
          var t = e.whileFocus,
            n = e.visualElement;
          yo(
            n,
            "focus",
            t
              ? function () {
                  var e;
                  null === (e = n.animationState) ||
                    void 0 === e ||
                    e.setActive(ho.Focus, !0);
                }
              : void 0
          ),
            yo(
              n,
              "blur",
              t
                ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(ho.Focus, !1);
                  }
                : void 0
            );
        }),
        hover: qo(function (e) {
          var t = e.onHoverStart,
            n = e.onHoverEnd,
            r = e.whileHover,
            i = e.visualElement;
          Ao(i, "pointerenter", t || r ? Do(i, !0, t) : void 0, {
            passive: !t,
          }),
            Ao(i, "pointerleave", n || r ? Do(i, !1, n) : void 0, {
              passive: !n,
            });
        }),
      },
      Yo = 0,
      Xo = function () {
        return Yo++;
      },
      Ko = function () {
        return kt(Xo);
      };
    function Zo() {
      var e = (0, t.useContext)(ot);
      if (null === e) return [!0, null];
      var n = e.isPresent,
        r = e.onExitComplete,
        i = e.register,
        a = Ko();
      (0, t.useEffect)(function () {
        return i(a);
      }, []);
      return !n && r
        ? [
            !1,
            function () {
              return null === r || void 0 === r ? void 0 : r(a);
            },
          ]
        : [!0];
    }
    function Jo(e, t) {
      if (!Array.isArray(t)) return !1;
      var n = t.length;
      if (n !== e.length) return !1;
      for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    var el = function (e) {
        return /^0[^.\s]+$/.test(e);
      },
      tl = function (e) {
        return function (t) {
          return t.test(e);
        };
      },
      nl = [
        fn,
        En,
        Sn,
        kn,
        Pn,
        Cn,
        {
          test: function (e) {
            return "auto" === e;
          },
          parse: function (e) {
            return e;
          },
        },
      ],
      rl = function (e) {
        return nl.find(tl(e));
      },
      il = Ze(Ze([], Ke(nl), !1), [Dn, Wn], !1),
      al = function (e) {
        return il.find(tl(e));
      };
    function ol(e, t, n) {
      e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gt(n));
    }
    function ll(e, t) {
      var n = gt(e, t),
        r = n ? e.makeTargetAnimatable(n, !1) : {},
        i = r.transitionEnd,
        a = void 0 === i ? {} : i;
      r.transition;
      var o = Ye(r, ["transitionEnd", "transition"]);
      for (var l in (o = Qe(Qe({}, o), a))) {
        ol(e, l, Jr(o[l]));
      }
    }
    function ul(e, t) {
      if (t) return (t[e] || t.default || t).from;
    }
    function sl(e, t, n) {
      var r;
      void 0 === n && (n = {});
      var i = gt(e, t, n.custom),
        a = (i || {}).transition,
        o = void 0 === a ? e.getDefaultTransition() || {} : a;
      n.transitionOverride && (o = n.transitionOverride);
      var l = i
          ? function () {
              return cl(e, i, n);
            }
          : function () {
              return Promise.resolve();
            },
        u = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size)
          ? function (r) {
              void 0 === r && (r = 0);
              var i = o.delayChildren,
                a = void 0 === i ? 0 : i,
                l = o.staggerChildren,
                u = o.staggerDirection;
              return (function (e, t, n, r, i, a) {
                void 0 === n && (n = 0);
                void 0 === r && (r = 0);
                void 0 === i && (i = 1);
                var o = [],
                  l = (e.variantChildren.size - 1) * r,
                  u =
                    1 === i
                      ? function (e) {
                          return void 0 === e && (e = 0), e * r;
                        }
                      : function (e) {
                          return void 0 === e && (e = 0), l - e * r;
                        };
                return (
                  Array.from(e.variantChildren)
                    .sort(fl)
                    .forEach(function (e, r) {
                      o.push(
                        sl(e, t, Qe(Qe({}, a), { delay: n + u(r) })).then(
                          function () {
                            return e.notifyAnimationComplete(t);
                          }
                        )
                      );
                    }),
                  Promise.all(o)
                );
              })(e, t, a + r, l, u, n);
            }
          : function () {
              return Promise.resolve();
            },
        s = o.when;
      if (s) {
        var c = Ke("beforeChildren" === s ? [l, u] : [u, l], 2),
          f = c[0],
          d = c[1];
        return f().then(d);
      }
      return Promise.all([l(), u(n.delay)]);
    }
    function cl(e, t, n) {
      var r,
        i = void 0 === n ? {} : n,
        a = i.delay,
        o = void 0 === a ? 0 : a,
        l = i.transitionOverride,
        u = i.type,
        s = e.makeTargetAnimatable(t),
        c = s.transition,
        f = void 0 === c ? e.getDefaultTransition() : c,
        d = s.transitionEnd,
        p = Ye(s, ["transition", "transitionEnd"]);
      l && (f = l);
      var h = [],
        v =
          u &&
          (null === (r = e.animationState) || void 0 === r
            ? void 0
            : r.getState()[u]);
      for (var m in p) {
        var g = e.getValue(m),
          y = p[m];
        if (!(!g || void 0 === y || (v && dl(v, m)))) {
          var b = Qe({ delay: o }, f);
          e.shouldReduceMotion &&
            ra(m) &&
            (b = Qe(Qe({}, b), { type: !1, delay: 0 }));
          var x = oi(m, g, y, b);
          h.push(x);
        }
      }
      return Promise.all(h).then(function () {
        d && ll(e, d);
      });
    }
    function fl(e, t) {
      return e.sortNodePosition(t);
    }
    function dl(e, t) {
      var n = e.protectedKeys,
        r = e.needsAnimating,
        i = n.hasOwnProperty(t) && !0 !== r[t];
      return (r[t] = !1), i;
    }
    var pl = [
        ho.Animate,
        ho.InView,
        ho.Focus,
        ho.Hover,
        ho.Tap,
        ho.Drag,
        ho.Exit,
      ],
      hl = Ze([], Ke(pl), !1).reverse(),
      vl = pl.length;
    function ml(e) {
      return function (t) {
        return Promise.all(
          t.map(function (t) {
            var n = t.animation,
              r = t.options;
            return (function (e, t, n) {
              var r;
              if (
                (void 0 === n && (n = {}),
                e.notifyAnimationStart(t),
                Array.isArray(t))
              ) {
                var i = t.map(function (t) {
                  return sl(e, t, n);
                });
                r = Promise.all(i);
              } else if ("string" === typeof t) r = sl(e, t, n);
              else {
                var a = "function" === typeof t ? gt(e, t, n.custom) : t;
                r = cl(e, a, n);
              }
              return r.then(function () {
                return e.notifyAnimationComplete(t);
              });
            })(e, n, r);
          })
        );
      };
    }
    function gl(e) {
      var t = ml(e),
        n = (function () {
          var e;
          return (
            ((e = {})[ho.Animate] = yl(!0)),
            (e[ho.InView] = yl()),
            (e[ho.Hover] = yl()),
            (e[ho.Tap] = yl()),
            (e[ho.Drag] = yl()),
            (e[ho.Focus] = yl()),
            (e[ho.Exit] = yl()),
            e
          );
        })(),
        r = {},
        i = !0,
        a = function (t, n) {
          var r = gt(e, n);
          if (r) {
            r.transition;
            var i = r.transitionEnd,
              a = Ye(r, ["transition", "transitionEnd"]);
            t = Qe(Qe(Qe({}, t), a), i);
          }
          return t;
        };
      function o(o, l) {
        for (
          var u,
            s = e.getProps(),
            c = e.getVariantContext(!0) || {},
            f = [],
            d = new Set(),
            p = {},
            h = 1 / 0,
            v = function (t) {
              var r = hl[t],
                v = n[r],
                m = null !== (u = s[r]) && void 0 !== u ? u : c[r],
                g = vt(m),
                y = r === l ? v.isActive : null;
              !1 === y && (h = t);
              var b = m === c[r] && m !== s[r] && g;
              if (
                (b && i && e.manuallyAnimateOnMount && (b = !1),
                (v.protectedKeys = Qe({}, p)),
                (!v.isActive && null === y) ||
                  (!m && !v.prevProp) ||
                  so(m) ||
                  "boolean" === typeof m)
              )
                return "continue";
              var x = (function (e, t) {
                  if ("string" === typeof t) return t !== e;
                  if (ht(t)) return !Jo(t, e);
                  return !1;
                })(v.prevProp, m),
                w = x || (r === l && v.isActive && !b && g) || (t > h && g),
                k = Array.isArray(m) ? m : [m],
                S = k.reduce(a, {});
              !1 === y && (S = {});
              var E = v.prevResolvedValues,
                C = void 0 === E ? {} : E,
                P = Qe(Qe({}, C), S),
                T = function (e) {
                  (w = !0), d.delete(e), (v.needsAnimating[e] = !0);
                };
              for (var j in P) {
                var L = S[j],
                  A = C[j];
                p.hasOwnProperty(j) ||
                  (L !== A
                    ? Vr(L) && Vr(A)
                      ? !Jo(L, A) || x
                        ? T(j)
                        : (v.protectedKeys[j] = !0)
                      : void 0 !== L
                      ? T(j)
                      : d.add(j)
                    : void 0 !== L && d.has(j)
                    ? T(j)
                    : (v.protectedKeys[j] = !0));
              }
              (v.prevProp = m),
                (v.prevResolvedValues = S),
                v.isActive && (p = Qe(Qe({}, p), S)),
                i && e.blockInitialAnimation && (w = !1),
                w &&
                  !b &&
                  f.push.apply(
                    f,
                    Ze(
                      [],
                      Ke(
                        k.map(function (e) {
                          return { animation: e, options: Qe({ type: r }, o) };
                        })
                      ),
                      !1
                    )
                  );
            },
            m = 0;
          m < vl;
          m++
        )
          v(m);
        if (((r = Qe({}, p)), d.size)) {
          var g = {};
          d.forEach(function (t) {
            var n = e.getBaseTarget(t);
            void 0 !== n && (g[t] = n);
          }),
            f.push({ animation: g });
        }
        var y = Boolean(f.length);
        return (
          i && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
          (i = !1),
          y ? t(f) : Promise.resolve()
        );
      }
      return {
        isAnimated: function (e) {
          return void 0 !== r[e];
        },
        animateChanges: o,
        setActive: function (t, r, i) {
          var a;
          if (n[t].isActive === r) return Promise.resolve();
          null === (a = e.variantChildren) ||
            void 0 === a ||
            a.forEach(function (e) {
              var n;
              return null === (n = e.animationState) || void 0 === n
                ? void 0
                : n.setActive(t, r);
            }),
            (n[t].isActive = r);
          var l = o(i, t);
          for (var u in n) n[u].protectedKeys = {};
          return l;
        },
        setAnimateFunction: function (n) {
          t = n(e);
        },
        getState: function () {
          return n;
        },
      };
    }
    function yl(e) {
      return (
        void 0 === e && (e = !1),
        {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        }
      );
    }
    var bl = {
        animation: qo(function (e) {
          var n = e.visualElement,
            r = e.animate;
          n.animationState || (n.animationState = gl(n)),
            so(r) &&
              (0, t.useEffect)(
                function () {
                  return r.subscribe(n);
                },
                [r]
              );
        }),
        exit: qo(function (e) {
          var n = e.custom,
            r = e.visualElement,
            i = Ke(Zo(), 2),
            a = i[0],
            o = i[1],
            l = (0, t.useContext)(ot);
          (0, t.useEffect)(
            function () {
              var e, t;
              r.isPresent = a;
              var i =
                null === (e = r.animationState) || void 0 === e
                  ? void 0
                  : e.setActive(ho.Exit, !a, {
                      custom:
                        null !==
                          (t =
                            null === l || void 0 === l ? void 0 : l.custom) &&
                        void 0 !== t
                          ? t
                          : n,
                    });
              !a && (null === i || void 0 === i || i.then(o));
            },
            [a]
          );
        }),
      },
      xl = (function () {
        function e(e, t, n) {
          var r = this,
            i = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = Sl(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = Ni(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var i = e.point,
                    a = zt().timestamp;
                  r.history.push(Qe(Qe({}, i), { timestamp: a }));
                  var o = r.handlers,
                    l = o.onStart,
                    u = o.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = wl(t, r.transformPagePoint)),
                bo(e) && 0 === e.buttons
                  ? r.handlePointerUp(e, t)
                  : Ft.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              r.end();
              var n = r.handlers,
                i = n.onEnd,
                a = n.onSessionEnd,
                o = Sl(wl(t, r.transformPagePoint), r.history);
              r.startEvent && i && i(e, o), a && a(e, o);
            }),
            !(xo(e) && e.touches.length > 1))
          ) {
            (this.handlers = t), (this.transformPagePoint = i);
            var a = wl(Eo(e), this.transformPagePoint),
              o = a.point,
              l = zt().timestamp;
            this.history = [Qe(Qe({}, o), { timestamp: l })];
            var u = t.onSessionStart;
            u && u(e, Sl(a, this.history)),
              (this.removeListeners = Gn(
                Lo(window, "pointermove", this.handlePointerMove),
                Lo(window, "pointerup", this.handlePointerUp),
                Lo(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (e.prototype.updateHandlers = function (e) {
            this.handlers = e;
          }),
          (e.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              Nt.update(this.updatePoint);
          }),
          e
        );
      })();
    function wl(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function kl(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function Sl(e, t) {
      var n = e.point;
      return {
        point: n,
        delta: kl(n, Cl(t)),
        offset: kl(n, El(t)),
        velocity: Pl(t, 0.1),
      };
    }
    function El(e) {
      return e[0];
    }
    function Cl(e) {
      return e[e.length - 1];
    }
    function Pl(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      for (
        var n = e.length - 1, r = null, i = Cl(e);
        n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Pr(t)));

      )
        n--;
      if (!r) return { x: 0, y: 0 };
      var a = (i.timestamp - r.timestamp) / 1e3;
      if (0 === a) return { x: 0, y: 0 };
      var o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
      return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
    }
    function Tl(e, t, n) {
      return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
      };
    }
    function jl(e, t) {
      var n,
        r = t.min - e.min,
        i = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min &&
          ((r = (n = Ke([i, r], 2))[0]), (i = n[1])),
        { min: r, max: i }
      );
    }
    var Ll = 0.35;
    function Al(e, t, n) {
      return { min: _l(e, t), max: _l(e, n) };
    }
    function _l(e, t) {
      var n;
      return "number" === typeof e
        ? e
        : null !== (n = e[t]) && void 0 !== n
        ? n
        : 0;
    }
    function Ol(e) {
      var t = e.top;
      return { x: { min: e.left, max: e.right }, y: { min: t, max: e.bottom } };
    }
    function Nl(e, t) {
      return Ol(
        (function (e, t) {
          if (!t) return e;
          var n = t({ x: e.left, y: e.top }),
            r = t({ x: e.right, y: e.bottom });
          return { top: n.y, left: n.x, bottom: r.y, right: r.x };
        })(e.getBoundingClientRect(), t)
      );
    }
    var Rl = new WeakMap(),
      Ml = (function () {
        function e(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (this.visualElement = e);
        }
        return (
          (e.prototype.start = function (e, t) {
            var n = this,
              r = (void 0 === t ? {} : t).snapToCursor,
              i = void 0 !== r && r;
            if (!1 !== this.visualElement.isPresent) {
              this.panSession = new xl(
                e,
                {
                  onSessionStart: function (e) {
                    n.stopAnimation(), i && n.snapToCursor(Eo(e, "page").point);
                  },
                  onStart: function (e, t) {
                    var r,
                      i = n.getProps(),
                      a = i.drag,
                      o = i.dragPropagation,
                      l = i.onDragStart;
                    (!a ||
                      o ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = Ro(a)),
                      n.openGlobalLock)) &&
                      ((n.isDragging = !0),
                      (n.currentDirection = null),
                      n.resolveConstraints(),
                      n.visualElement.projection &&
                        ((n.visualElement.projection.isAnimationBlocked = !0),
                        (n.visualElement.projection.target = void 0)),
                      Zi(function (e) {
                        var t,
                          r,
                          i = n.getAxisMotionValue(e).get() || 0;
                        if (Sn.test(i)) {
                          var a =
                            null ===
                              (r =
                                null === (t = n.visualElement.projection) ||
                                void 0 === t
                                  ? void 0
                                  : t.layout) || void 0 === r
                              ? void 0
                              : r.actual[e];
                          if (a) i = Ri(a) * (parseFloat(i) / 100);
                        }
                        n.originPoint[e] = i;
                      }),
                      null === l || void 0 === l || l(e, t),
                      null === (r = n.visualElement.animationState) ||
                        void 0 === r ||
                        r.setActive(ho.Drag, !0));
                  },
                  onMove: function (e, t) {
                    var r = n.getProps(),
                      i = r.dragPropagation,
                      a = r.dragDirectionLock,
                      o = r.onDirectionLock,
                      l = r.onDrag;
                    if (i || n.openGlobalLock) {
                      var u = t.offset;
                      if (a && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (e, t) {
                            void 0 === t && (t = 10);
                            var n = null;
                            Math.abs(e.y) > t
                              ? (n = "y")
                              : Math.abs(e.x) > t && (n = "x");
                            return n;
                          })(u)),
                          void (
                            null !== n.currentDirection &&
                            (null === o ||
                              void 0 === o ||
                              o(n.currentDirection))
                          )
                        );
                      n.updateAxis("x", t.point, u),
                        n.updateAxis("y", t.point, u),
                        n.visualElement.syncRender(),
                        null === l || void 0 === l || l(e, t);
                    }
                  },
                  onSessionEnd: function (e, t) {
                    return n.stop(e, t);
                  },
                },
                {
                  transformPagePoint:
                    this.visualElement.getTransformPagePoint(),
                }
              );
            }
          }),
          (e.prototype.stop = function (e, t) {
            var n = this.isDragging;
            if ((this.cancel(), n)) {
              var r = t.velocity;
              this.startAnimation(r);
              var i = this.getProps().onDragEnd;
              null === i || void 0 === i || i(e, t);
            }
          }),
          (e.prototype.cancel = function () {
            var e, t;
            (this.isDragging = !1),
              this.visualElement.projection &&
                (this.visualElement.projection.isAnimationBlocked = !1),
              null === (e = this.panSession) || void 0 === e || e.end(),
              (this.panSession = void 0),
              !this.getProps().dragPropagation &&
                this.openGlobalLock &&
                (this.openGlobalLock(), (this.openGlobalLock = null)),
              null === (t = this.visualElement.animationState) ||
                void 0 === t ||
                t.setActive(ho.Drag, !1);
          }),
          (e.prototype.updateAxis = function (e, t, n) {
            var r = this.getProps().drag;
            if (n && Dl(e, r, this.currentDirection)) {
              var i = this.getAxisMotionValue(e),
                a = this.originPoint[e] + n[e];
              this.constraints &&
                this.constraints[e] &&
                (a = (function (e, t, n) {
                  var r = t.min,
                    i = t.max;
                  return (
                    void 0 !== r && e < r
                      ? (e = n ? It(r, e, n.min) : Math.max(e, r))
                      : void 0 !== i &&
                        e > i &&
                        (e = n ? It(i, e, n.max) : Math.min(e, i)),
                    e
                  );
                })(a, this.constraints[e], this.elastic[e])),
                i.set(a);
            }
          }),
          (e.prototype.resolveConstraints = function () {
            var e = this,
              t = this.getProps(),
              n = t.dragConstraints,
              r = t.dragElastic,
              i = (this.visualElement.projection || {}).layout,
              a = this.constraints;
            n && pt(n)
              ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
              : (this.constraints =
                  !(!n || !i) &&
                  (function (e, t) {
                    var n = t.top,
                      r = t.left,
                      i = t.bottom,
                      a = t.right;
                    return { x: Tl(e.x, r, a), y: Tl(e.y, n, i) };
                  })(i.actual, n)),
              (this.elastic = (function (e) {
                return (
                  void 0 === e && (e = Ll),
                  !1 === e ? (e = 0) : !0 === e && (e = Ll),
                  { x: Al(e, "left", "right"), y: Al(e, "top", "bottom") }
                );
              })(r)),
              a !== this.constraints &&
                i &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                Zi(function (t) {
                  e.getAxisMotionValue(t) &&
                    (e.constraints[t] = (function (e, t) {
                      var n = {};
                      return (
                        void 0 !== t.min && (n.min = t.min - e.min),
                        void 0 !== t.max && (n.max = t.max - e.min),
                        n
                      );
                    })(i.actual[t], e.constraints[t]));
                });
          }),
          (e.prototype.resolveRefConstraints = function () {
            var e = this.getProps(),
              t = e.dragConstraints,
              n = e.onMeasureDragConstraints;
            if (!t || !pt(t)) return !1;
            var r = t.current,
              i = this.visualElement.projection;
            if (!i || !i.layout) return !1;
            var a = (function (e, t, n) {
                var r = Nl(e, n),
                  i = t.scroll;
                return i && (Ci(r.x, i.x), Ci(r.y, i.y)), r;
              })(r, i.root, this.visualElement.getTransformPagePoint()),
              o = (function (e, t) {
                return { x: jl(e.x, t.x), y: jl(e.y, t.y) };
              })(i.layout.actual, a);
            if (n) {
              var l = n(
                (function (e) {
                  var t = e.x,
                    n = e.y;
                  return {
                    top: n.min,
                    right: t.max,
                    bottom: n.max,
                    left: t.min,
                  };
                })(o)
              );
              (this.hasMutatedConstraints = !!l), l && (o = Ol(l));
            }
            return o;
          }),
          (e.prototype.startAnimation = function (e) {
            var t = this,
              n = this.getProps(),
              r = n.drag,
              i = n.dragMomentum,
              a = n.dragElastic,
              o = n.dragTransition,
              l = n.dragSnapToOrigin,
              u = n.onDragTransitionEnd,
              s = this.constraints || {},
              c = Zi(function (n) {
                var u;
                if (Dl(n, r, t.currentDirection)) {
                  var c =
                    null !== (u = null === s || void 0 === s ? void 0 : s[n]) &&
                    void 0 !== u
                      ? u
                      : {};
                  l && (c = { min: 0, max: 0 });
                  var f = a ? 200 : 1e6,
                    d = a ? 40 : 1e7,
                    p = Qe(
                      Qe(
                        {
                          type: "inertia",
                          velocity: i ? e[n] : 0,
                          bounceStiffness: f,
                          bounceDamping: d,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        o
                      ),
                      c
                    );
                  return t.startAxisValueAnimation(n, p);
                }
              });
            return Promise.all(c).then(u);
          }),
          (e.prototype.startAxisValueAnimation = function (e, t) {
            return oi(e, this.getAxisMotionValue(e), 0, t);
          }),
          (e.prototype.stopAnimation = function () {
            var e = this;
            Zi(function (t) {
              return e.getAxisMotionValue(t).stop();
            });
          }),
          (e.prototype.getAxisMotionValue = function (e) {
            var t,
              n,
              r = "_drag" + e.toUpperCase(),
              i = this.visualElement.getProps()[r];
            return (
              i ||
              this.visualElement.getValue(
                e,
                null !==
                  (n =
                    null === (t = this.visualElement.getProps().initial) ||
                    void 0 === t
                      ? void 0
                      : t[e]) && void 0 !== n
                  ? n
                  : 0
              )
            );
          }),
          (e.prototype.snapToCursor = function (e) {
            var t = this;
            Zi(function (n) {
              if (Dl(n, t.getProps().drag, t.currentDirection)) {
                var r = t.visualElement.projection,
                  i = t.getAxisMotionValue(n);
                if (r && r.layout) {
                  var a = r.layout.actual[n],
                    o = a.min,
                    l = a.max;
                  i.set(e[n] - It(o, l, 0.5));
                }
              }
            });
          }),
          (e.prototype.scalePositionWithinConstraints = function () {
            var e,
              t = this,
              n = this.getProps(),
              r = n.drag,
              i = n.dragConstraints,
              a = this.visualElement.projection;
            if (pt(i) && a && this.constraints) {
              this.stopAnimation();
              var o = { x: 0, y: 0 };
              Zi(function (e) {
                var n = t.getAxisMotionValue(e);
                if (n) {
                  var r = n.get();
                  o[e] = (function (e, t) {
                    var n = 0.5,
                      r = Ri(e),
                      i = Ri(t);
                    return (
                      i > r
                        ? (n = rn(t.min, t.max - r, e.min))
                        : r > i && (n = rn(e.min, e.max - i, t.min)),
                      Qt(0, 1, n)
                    );
                  })({ min: r, max: r }, t.constraints[e]);
                }
              });
              var l = this.visualElement.getProps().transformTemplate;
              (this.visualElement.getInstance().style.transform = l
                ? l({}, "")
                : "none"),
                null === (e = a.root) || void 0 === e || e.updateScroll(),
                a.updateLayout(),
                this.resolveConstraints(),
                Zi(function (e) {
                  if (Dl(e, r, null)) {
                    var n = t.getAxisMotionValue(e),
                      i = t.constraints[e],
                      a = i.min,
                      l = i.max;
                    n.set(It(a, l, o[e]));
                  }
                });
            }
          }),
          (e.prototype.addListeners = function () {
            var e,
              t = this;
            Rl.set(this.visualElement, this);
            var n = Lo(
                this.visualElement.getInstance(),
                "pointerdown",
                function (e) {
                  var n = t.getProps(),
                    r = n.drag,
                    i = n.dragListener;
                  r && (void 0 === i || i) && t.start(e);
                }
              ),
              r = function () {
                pt(t.getProps().dragConstraints) &&
                  (t.constraints = t.resolveRefConstraints());
              },
              i = this.visualElement.projection,
              a = i.addEventListener("measure", r);
            i &&
              !i.layout &&
              (null === (e = i.root) || void 0 === e || e.updateScroll(),
              i.updateLayout()),
              r();
            var o = go(window, "resize", function () {
              return t.scalePositionWithinConstraints();
            });
            return (
              i.addEventListener("didUpdate", function (e) {
                var n = e.delta,
                  r = e.hasLayoutChanged;
                t.isDragging &&
                  r &&
                  (Zi(function (e) {
                    var r = t.getAxisMotionValue(e);
                    r &&
                      ((t.originPoint[e] += n[e].translate),
                      r.set(r.get() + n[e].translate));
                  }),
                  t.visualElement.syncRender());
              }),
              function () {
                o(), n(), a();
              }
            );
          }),
          (e.prototype.getProps = function () {
            var e = this.visualElement.getProps(),
              t = e.drag,
              n = void 0 !== t && t,
              r = e.dragDirectionLock,
              i = void 0 !== r && r,
              a = e.dragPropagation,
              o = void 0 !== a && a,
              l = e.dragConstraints,
              u = void 0 !== l && l,
              s = e.dragElastic,
              c = void 0 === s ? Ll : s,
              f = e.dragMomentum,
              d = void 0 === f || f;
            return Qe(Qe({}, e), {
              drag: n,
              dragDirectionLock: i,
              dragPropagation: o,
              dragConstraints: u,
              dragElastic: c,
              dragMomentum: d,
            });
          }),
          e
        );
      })();
    function Dl(e, t, n) {
      return (!0 === t || t === e) && (null === n || n === e);
    }
    var Vl = {
        pan: qo(function (e) {
          var n = e.onPan,
            r = e.onPanStart,
            i = e.onPanEnd,
            a = e.onPanSessionStart,
            o = e.visualElement,
            l = n || r || i || a,
            u = (0, t.useRef)(null),
            s = (0, t.useContext)(it).transformPagePoint,
            c = {
              onSessionStart: a,
              onStart: r,
              onMove: n,
              onEnd: function (e, t) {
                (u.current = null), i && i(e, t);
              },
            };
          (0, t.useEffect)(function () {
            null !== u.current && u.current.updateHandlers(c);
          }),
            Ao(
              o,
              "pointerdown",
              l &&
                function (e) {
                  u.current = new xl(e, c, { transformPagePoint: s });
                }
            ),
            zo(function () {
              return u.current && u.current.end();
            });
        }),
        drag: qo(function (e) {
          var n = e.dragControls,
            r = e.visualElement,
            i = kt(function () {
              return new Ml(r);
            });
          (0, t.useEffect)(
            function () {
              return n && n.subscribe(i);
            },
            [i, n]
          ),
            (0, t.useEffect)(
              function () {
                return i.addListeners();
              },
              [i]
            );
        }),
      },
      zl = [
        "LayoutMeasure",
        "BeforeLayoutMeasure",
        "LayoutUpdate",
        "ViewportBoxUpdate",
        "Update",
        "Render",
        "AnimationComplete",
        "LayoutAnimationComplete",
        "AnimationStart",
        "LayoutAnimationStart",
        "SetAxisTarget",
        "Unmount",
      ];
    var Fl = function (e) {
        var t = e.treeType,
          n = void 0 === t ? "" : t,
          r = e.build,
          i = e.getBaseTarget,
          a = e.makeTargetAnimatable,
          o = e.measureViewportBox,
          l = e.render,
          u = e.readValueFromInstance,
          s = e.removeValueFromRenderState,
          c = e.sortNodePosition,
          f = e.scrapeMotionValuesFromProps;
        return function (e, t) {
          var d = e.parent,
            p = e.props,
            h = e.presenceId,
            v = e.blockInitialAnimation,
            m = e.visualState,
            g = e.shouldReduceMotion;
          void 0 === t && (t = {});
          var y,
            b,
            x = !1,
            w = m.latestValues,
            k = m.renderState,
            S = (function () {
              var e = zl.map(function () {
                  return new Ht();
                }),
                t = {},
                n = {
                  clearAllListeners: function () {
                    return e.forEach(function (e) {
                      return e.clear();
                    });
                  },
                  updatePropListeners: function (e) {
                    zl.forEach(function (r) {
                      var i,
                        a = "on" + r,
                        o = e[a];
                      null === (i = t[r]) || void 0 === i || i.call(t),
                        o && (t[r] = n[a](o));
                    });
                  },
                };
              return (
                e.forEach(function (e, t) {
                  (n["on" + zl[t]] = function (t) {
                    return e.add(t);
                  }),
                    (n["notify" + zl[t]] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return e.notify.apply(e, Ze([], Ke(t), !1));
                    });
                }),
                n
              );
            })(),
            E = new Map(),
            C = new Map(),
            P = {},
            T = Qe({}, w);
          function j() {
            y && x && (L(), l(y, k, p.style, V.projection));
          }
          function L() {
            r(V, k, w, t, p);
          }
          function A() {
            S.notifyUpdate(w);
          }
          function _(e, t) {
            var n = t.onChange(function (t) {
                (w[e] = t), p.onUpdate && Ft.update(A, !1, !0);
              }),
              r = t.onRenderRequest(V.scheduleRender);
            C.set(e, function () {
              n(), r();
            });
          }
          var O = f(p);
          for (var N in O) {
            var R = O[N];
            void 0 !== w[N] && qt(R) && R.set(w[N], !1);
          }
          var M = yt(p),
            D = bt(p),
            V = Qe(
              Qe(
                {
                  treeType: n,
                  current: null,
                  depth: d ? d.depth + 1 : 0,
                  parent: d,
                  children: new Set(),
                  presenceId: h,
                  shouldReduceMotion: g,
                  variantChildren: D ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === d || void 0 === d ? void 0 : d.isMounted()
                  ),
                  blockInitialAnimation: v,
                  isMounted: function () {
                    return Boolean(y);
                  },
                  mount: function (e) {
                    (x = !0),
                      (y = V.current = e),
                      V.projection && V.projection.mount(e),
                      D &&
                        d &&
                        !M &&
                        (b =
                          null === d || void 0 === d
                            ? void 0
                            : d.addVariantChild(V)),
                      E.forEach(function (e, t) {
                        return _(t, e);
                      }),
                      null === d || void 0 === d || d.children.add(V),
                      V.setProps(p);
                  },
                  unmount: function () {
                    var e;
                    null === (e = V.projection) || void 0 === e || e.unmount(),
                      Nt.update(A),
                      Nt.render(j),
                      C.forEach(function (e) {
                        return e();
                      }),
                      null === b || void 0 === b || b(),
                      null === d || void 0 === d || d.children.delete(V),
                      S.clearAllListeners(),
                      (y = void 0),
                      (x = !1);
                  },
                  addVariantChild: function (e) {
                    var t,
                      n = V.getClosestVariantNode();
                    if (n)
                      return (
                        null === (t = n.variantChildren) ||
                          void 0 === t ||
                          t.add(e),
                        function () {
                          return n.variantChildren.delete(e);
                        }
                      );
                  },
                  sortNodePosition: function (e) {
                    return c && n === e.treeType
                      ? c(V.getInstance(), e.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return D
                      ? V
                      : null === d || void 0 === d
                      ? void 0
                      : d.getClosestVariantNode();
                  },
                  getLayoutId: function () {
                    return p.layoutId;
                  },
                  getInstance: function () {
                    return y;
                  },
                  getStaticValue: function (e) {
                    return w[e];
                  },
                  setStaticValue: function (e, t) {
                    return (w[e] = t);
                  },
                  getLatestValues: function () {
                    return w;
                  },
                  setVisibility: function (e) {
                    V.isVisible !== e &&
                      ((V.isVisible = e), V.scheduleRender());
                  },
                  makeTargetAnimatable: function (e, t) {
                    return void 0 === t && (t = !0), a(V, e, p, t);
                  },
                  measureViewportBox: function () {
                    return o(y, p);
                  },
                  addValue: function (e, t) {
                    V.hasValue(e) && V.removeValue(e),
                      E.set(e, t),
                      (w[e] = t.get()),
                      _(e, t);
                  },
                  removeValue: function (e) {
                    var t;
                    E.delete(e),
                      null === (t = C.get(e)) || void 0 === t || t(),
                      C.delete(e),
                      delete w[e],
                      s(e, k);
                  },
                  hasValue: function (e) {
                    return E.has(e);
                  },
                  getValue: function (e, t) {
                    var n = E.get(e);
                    return (
                      void 0 === n &&
                        void 0 !== t &&
                        ((n = Gt(t)), V.addValue(e, n)),
                      n
                    );
                  },
                  forEachValue: function (e) {
                    return E.forEach(e);
                  },
                  readValue: function (e) {
                    var n;
                    return null !== (n = w[e]) && void 0 !== n ? n : u(y, e, t);
                  },
                  setBaseTarget: function (e, t) {
                    T[e] = t;
                  },
                  getBaseTarget: function (e) {
                    if (i) {
                      var t = i(p, e);
                      if (void 0 !== t && !qt(t)) return t;
                    }
                    return T[e];
                  },
                },
                S
              ),
              {
                build: function () {
                  return L(), k;
                },
                scheduleRender: function () {
                  Ft.render(j, !1, !0);
                },
                syncRender: j,
                setProps: function (e) {
                  (e.transformTemplate || p.transformTemplate) &&
                    V.scheduleRender(),
                    (p = e),
                    S.updatePropListeners(e),
                    (P = (function (e, t, n) {
                      var r;
                      for (var i in t) {
                        var a = t[i],
                          o = n[i];
                        if (qt(a)) e.addValue(i, a);
                        else if (qt(o)) e.addValue(i, Gt(a));
                        else if (o !== a)
                          if (e.hasValue(i)) {
                            var l = e.getValue(i);
                            !l.hasAnimated && l.set(a);
                          } else
                            e.addValue(
                              i,
                              Gt(
                                null !== (r = e.getStaticValue(i)) &&
                                  void 0 !== r
                                  ? r
                                  : a
                              )
                            );
                      }
                      for (var i in n) void 0 === t[i] && e.removeValue(i);
                      return t;
                    })(V, f(p), P));
                },
                getProps: function () {
                  return p;
                },
                getVariant: function (e) {
                  var t;
                  return null === (t = p.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
                getDefaultTransition: function () {
                  return p.transition;
                },
                getTransformPagePoint: function () {
                  return p.transformPagePoint;
                },
                getVariantContext: function (e) {
                  if ((void 0 === e && (e = !1), e))
                    return null === d || void 0 === d
                      ? void 0
                      : d.getVariantContext();
                  if (!M) {
                    var t =
                      (null === d || void 0 === d
                        ? void 0
                        : d.getVariantContext()) || {};
                    return void 0 !== p.initial && (t.initial = p.initial), t;
                  }
                  for (var n = {}, r = 0; r < Ul; r++) {
                    var i = Il[r],
                      a = p[i];
                    (vt(a) || !1 === a) && (n[i] = a);
                  }
                  return n;
                },
              }
            );
          return V;
        };
      },
      Il = Ze(["initial"], Ke(pl), !1),
      Ul = Il.length;
    function Bl(e) {
      return "string" === typeof e && e.startsWith("var(--");
    }
    var Wl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function Hl(e, t, n) {
      void 0 === n && (n = 1),
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        );
      var r = Ke(
          (function (e) {
            var t = Wl.exec(e);
            if (!t) return [,];
            var n = Ke(t, 3);
            return [n[1], n[2]];
          })(e),
          2
        ),
        i = r[0],
        a = r[1];
      if (i) {
        var o = window.getComputedStyle(t).getPropertyValue(i);
        return o ? o.trim() : Bl(a) ? Hl(a, t, n + 1) : a;
      }
    }
    var $l,
      Gl = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        "x",
        "y",
      ]),
      ql = function (e) {
        return Gl.has(e);
      },
      Ql = function (e, t) {
        e.set(t, !1), e.set(t);
      },
      Yl = function (e) {
        return e === fn || e === En;
      };
    !(function (e) {
      (e.width = "width"),
        (e.height = "height"),
        (e.left = "left"),
        (e.right = "right"),
        (e.top = "top"),
        (e.bottom = "bottom");
    })($l || ($l = {}));
    var Xl = function (e, t) {
        return parseFloat(e.split(", ")[t]);
      },
      Kl = function (e, t) {
        return function (n, r) {
          var i = r.transform;
          if ("none" === i || !i) return 0;
          var a = i.match(/^matrix3d\((.+)\)$/);
          if (a) return Xl(a[1], t);
          var o = i.match(/^matrix\((.+)\)$/);
          return o ? Xl(o[1], e) : 0;
        };
      },
      Zl = new Set(["x", "y", "z"]),
      Jl = ea.filter(function (e) {
        return !Zl.has(e);
      });
    var eu = {
        width: function (e, t) {
          var n = e.x,
            r = t.paddingLeft,
            i = void 0 === r ? "0" : r,
            a = t.paddingRight,
            o = void 0 === a ? "0" : a;
          return n.max - n.min - parseFloat(i) - parseFloat(o);
        },
        height: function (e, t) {
          var n = e.y,
            r = t.paddingTop,
            i = void 0 === r ? "0" : r,
            a = t.paddingBottom,
            o = void 0 === a ? "0" : a;
          return n.max - n.min - parseFloat(i) - parseFloat(o);
        },
        top: function (e, t) {
          var n = t.top;
          return parseFloat(n);
        },
        left: function (e, t) {
          var n = t.left;
          return parseFloat(n);
        },
        bottom: function (e, t) {
          var n = e.y,
            r = t.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right: function (e, t) {
          var n = e.x,
            r = t.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: Kl(4, 13),
        y: Kl(5, 14),
      },
      tu = function (e, t, n, r) {
        void 0 === n && (n = {}),
          void 0 === r && (r = {}),
          (t = Qe({}, t)),
          (r = Qe({}, r));
        var i = Object.keys(t).filter(ql),
          a = [],
          o = !1,
          l = [];
        if (
          (i.forEach(function (i) {
            var u = e.getValue(i);
            if (e.hasValue(i)) {
              var s,
                c = n[i],
                f = rl(c),
                d = t[i];
              if (Vr(d)) {
                var p = d.length,
                  h = null === d[0] ? 1 : 0;
                (c = d[h]), (f = rl(c));
                for (var v = h; v < p; v++)
                  s ? rl(d[v]) : (s = rl(d[v])) === f || (Yl(f) && Yl(s));
              } else s = rl(d);
              if (f !== s)
                if (Yl(f) && Yl(s)) {
                  var m = u.get();
                  "string" === typeof m && u.set(parseFloat(m)),
                    "string" === typeof d
                      ? (t[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        s === En &&
                        (t[i] = d.map(parseFloat));
                } else
                  (null === f || void 0 === f ? void 0 : f.transform) &&
                  (null === s || void 0 === s ? void 0 : s.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? u.set(s.transform(c))
                      : (t[i] = f.transform(d))
                    : (o ||
                        ((a = (function (e) {
                          var t = [];
                          return (
                            Jl.forEach(function (n) {
                              var r = e.getValue(n);
                              void 0 !== r &&
                                (t.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.syncRender(),
                            t
                          );
                        })(e)),
                        (o = !0)),
                      l.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                      Ql(u, d));
            }
          }),
          l.length)
        ) {
          var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
            s = (function (e, t, n) {
              var r = t.measureViewportBox(),
                i = t.getInstance(),
                a = getComputedStyle(i),
                o = a.display,
                l = {};
              "none" === o && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  l[e] = eu[e](r, a);
                }),
                t.syncRender();
              var u = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  Ql(r, l[n]), (e[n] = eu[n](u, a));
                }),
                e
              );
            })(t, e, l);
          return (
            a.length &&
              a.forEach(function (t) {
                var n = Ke(t, 2),
                  r = n[0],
                  i = n[1];
                e.getValue(r).set(i);
              }),
            e.syncRender(),
            null !== u && window.scrollTo({ top: u }),
            { target: s, transitionEnd: r }
          );
        }
        return { target: t, transitionEnd: r };
      };
    function nu(e, t, n, r) {
      return (function (e) {
        return Object.keys(e).some(ql);
      })(t)
        ? tu(e, t, n, r)
        : { target: t, transitionEnd: r };
    }
    var ru = function (e, t, n, r) {
      var i = (function (e, t, n) {
        var r,
          i = Ye(t, []),
          a = e.getInstance();
        if (!(a instanceof Element)) return { target: i, transitionEnd: n };
        for (var o in (n && (n = Qe({}, n)),
        e.forEachValue(function (e) {
          var t = e.get();
          if (Bl(t)) {
            var n = Hl(t, a);
            n && e.set(n);
          }
        }),
        i)) {
          var l = i[o];
          if (Bl(l)) {
            var u = Hl(l, a);
            u &&
              ((i[o] = u),
              n && ((null !== (r = n[o]) && void 0 !== r) || (n[o] = l)));
          }
        }
        return { target: i, transitionEnd: n };
      })(e, t, r);
      return nu(e, (t = i.target), n, (r = i.transitionEnd));
    };
    var iu = {
        treeType: "dom",
        readValueFromInstance: function (e, t) {
          if (ra(t)) {
            var n = Xr(t);
            return (n && n.default) || 0;
          }
          var r,
            i = ((r = e), window.getComputedStyle(r));
          return (za(t) ? i.getPropertyValue(t) : i[t]) || 0;
        },
        sortNodePosition: function (e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        },
        getBaseTarget: function (e, t) {
          var n;
          return null === (n = e.style) || void 0 === n ? void 0 : n[t];
        },
        measureViewportBox: function (e, t) {
          return Nl(e, t.transformPagePoint);
        },
        resetTransform: function (e, t, n) {
          var r = n.transformTemplate;
          (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
        },
        restoreTransform: function (e, t) {
          e.style.transform = t.style.transform;
        },
        removeValueFromRenderState: function (e, t) {
          var n = t.vars,
            r = t.style;
          delete n[e], delete r[e];
        },
        makeTargetAnimatable: function (e, t, n, r) {
          var i = n.transformValues;
          void 0 === r && (r = !0);
          var a = t.transition,
            o = t.transitionEnd,
            l = Ye(t, ["transition", "transitionEnd"]),
            u = (function (e, t, n) {
              var r,
                i,
                a = {};
              for (var o in e)
                a[o] =
                  null !== (r = ul(o, t)) && void 0 !== r
                    ? r
                    : null === (i = n.getValue(o)) || void 0 === i
                    ? void 0
                    : i.get();
              return a;
            })(l, a || {}, e);
          if ((i && (o && (o = i(o)), l && (l = i(l)), u && (u = i(u))), r)) {
            !(function (e, t, n) {
              var r,
                i,
                a,
                o,
                l = Object.keys(t).filter(function (t) {
                  return !e.hasValue(t);
                }),
                u = l.length;
              if (u)
                for (var s = 0; s < u; s++) {
                  var c = l[s],
                    f = t[c],
                    d = null;
                  Array.isArray(f) && (d = f[0]),
                    null === d &&
                      (d =
                        null !==
                          (i =
                            null !== (r = n[c]) && void 0 !== r
                              ? r
                              : e.readValue(c)) && void 0 !== i
                          ? i
                          : t[c]),
                    void 0 !== d &&
                      null !== d &&
                      ("string" === typeof d &&
                      (/^\-?\d*\.?\d+$/.test(d) || el(d))
                        ? (d = parseFloat(d))
                        : !al(d) && Wn.test(f) && (d = Kr(c, f)),
                      e.addValue(c, Gt(d)),
                      (null !== (a = (o = n)[c]) && void 0 !== a) || (o[c] = d),
                      e.setBaseTarget(c, d));
                }
            })(e, l, u);
            var s = ru(e, l, u, o);
            (o = s.transitionEnd), (l = s.target);
          }
          return Qe({ transition: a, transitionEnd: o }, l);
        },
        scrapeMotionValuesFromProps: lo,
        build: function (e, t, n, r, i) {
          void 0 !== e.isVisible &&
            (t.style.visibility = e.isVisible ? "visible" : "hidden"),
            Ia(t, n, r, i.transformTemplate);
        },
        render: io,
      },
      au = Fl(iu),
      ou = Fl(
        Qe(Qe({}, iu), {
          getBaseTarget: function (e, t) {
            return e[t];
          },
          readValueFromInstance: function (e, t) {
            var n;
            return ra(t)
              ? (null === (n = Xr(t)) || void 0 === n ? void 0 : n.default) || 0
              : ((t = ao.has(t) ? t : ro(t)), e.getAttribute(t));
          },
          scrapeMotionValuesFromProps: uo,
          build: function (e, t, n, r, i) {
            Za(t, n, r, i.transformTemplate);
          },
          render: oo,
        })
      ),
      lu = function (e, t) {
        return Ma(e)
          ? ou(t, { enableHardwareAcceleration: !1 })
          : au(t, { enableHardwareAcceleration: !0 });
      };
    function uu(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    var su = {
        correct: function (e, t) {
          if (!t.target) return e;
          if ("string" === typeof e) {
            if (!En.test(e)) return e;
            e = parseFloat(e);
          }
          var n = uu(e, t.target.x),
            r = uu(e, t.target.y);
          return "".concat(n, "% ").concat(r, "%");
        },
      },
      cu = "_$css",
      fu = {
        correct: function (e, t) {
          var n = t.treeScale,
            r = t.projectionDelta,
            i = e,
            a = e.includes("var("),
            o = [];
          a &&
            (e = e.replace(Wl, function (e) {
              return o.push(e), cu;
            }));
          var l = Wn.parse(e);
          if (l.length > 5) return i;
          var u = Wn.createTransformer(e),
            s = "number" !== typeof l[0] ? 1 : 0,
            c = r.x.scale * n.x,
            f = r.y.scale * n.y;
          (l[0 + s] /= c), (l[1 + s] /= f);
          var d = It(c, f, 0.5);
          "number" === typeof l[2 + s] && (l[2 + s] /= d),
            "number" === typeof l[3 + s] && (l[3 + s] /= d);
          var p = u(l);
          if (a) {
            var h = 0;
            p = p.replace(cu, function () {
              var e = o[h];
              return h++, e;
            });
          }
          return p;
        },
      },
      du = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          qe(t, e),
          (t.prototype.componentDidMount = function () {
            var e,
              t = this,
              n = this.props,
              r = n.visualElement,
              i = n.layoutGroup,
              a = n.switchLayoutGroup,
              o = n.layoutId,
              l = r.projection;
            (e = pu),
              Object.assign(Xi, e),
              l &&
                ((null === i || void 0 === i ? void 0 : i.group) &&
                  i.group.add(l),
                (null === a || void 0 === a ? void 0 : a.register) &&
                  o &&
                  a.register(l),
                l.root.didUpdate(),
                l.addEventListener("animationComplete", function () {
                  t.safeToRemove();
                }),
                l.setOptions(
                  Qe(Qe({}, l.options), {
                    onExitComplete: function () {
                      return t.safeToRemove();
                    },
                  })
                )),
              (sa.hasEverUpdated = !0);
          }),
          (t.prototype.getSnapshotBeforeUpdate = function (e) {
            var t = this,
              n = this.props,
              r = n.layoutDependency,
              i = n.visualElement,
              a = n.drag,
              o = n.isPresent,
              l = i.projection;
            return l
              ? ((l.isPresent = o),
                a || e.layoutDependency !== r || void 0 === r
                  ? l.willUpdate()
                  : this.safeToRemove(),
                e.isPresent !== o &&
                  (o
                    ? l.promote()
                    : l.relegate() ||
                      Ft.postRender(function () {
                        var e;
                        (null === (e = l.getStack()) || void 0 === e
                          ? void 0
                          : e.members.length) || t.safeToRemove();
                      })),
                null)
              : null;
          }),
          (t.prototype.componentDidUpdate = function () {
            var e = this.props.visualElement.projection;
            e &&
              (e.root.didUpdate(),
              !e.currentAnimation && e.isLead() && this.safeToRemove());
          }),
          (t.prototype.componentWillUnmount = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.layoutGroup,
              r = e.switchLayoutGroup,
              i = t.projection;
            i &&
              (i.scheduleCheckAfterUnmount(),
              (null === n || void 0 === n ? void 0 : n.group) &&
                n.group.remove(i),
              (null === r || void 0 === r ? void 0 : r.deregister) &&
                r.deregister(i));
          }),
          (t.prototype.safeToRemove = function () {
            var e = this.props.safeToRemove;
            null === e || void 0 === e || e();
          }),
          (t.prototype.render = function () {
            return null;
          }),
          t
        );
      })(t.Component);
    var pu = {
        borderRadius: Qe(Qe({}, su), {
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        }),
        borderTopLeftRadius: su,
        borderTopRightRadius: su,
        borderBottomLeftRadius: su,
        borderBottomRightRadius: su,
        boxShadow: fu,
      },
      hu = {
        measureLayout: function (e) {
          var n = Ke(Zo(), 2),
            r = n[0],
            i = n[1],
            a = (0, t.useContext)(La);
          return t.createElement(
            du,
            Qe({}, e, {
              layoutGroup: a,
              switchLayoutGroup: (0, t.useContext)(Aa),
              isPresent: r,
              safeToRemove: i,
            })
          );
        },
      },
      vu = ca({
        attachResizeListener: function (e, t) {
          return go(e, "resize", t);
        },
        measureScroll: function () {
          return {
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          };
        },
      }),
      mu = { current: void 0 },
      gu = ca({
        measureScroll: function (e) {
          return { x: e.scrollLeft, y: e.scrollTop };
        },
        defaultParent: function () {
          if (!mu.current) {
            var e = new vu(0, {});
            e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (mu.current = e);
          }
          return mu.current;
        },
        resetTransform: function (e, t) {
          e.style.transform = null !== t && void 0 !== t ? t : "none";
        },
      }),
      yu = Qe(Qe(Qe(Qe({}, bl), Qo), Vl), hu),
      bu = Na(function (e, t) {
        return (function (e, t, n, r, i) {
          var a = t.forwardMotionProps,
            o = void 0 !== a && a,
            l = Ma(e) ? vo : mo;
          return Qe(Qe({}, l), {
            preloadedFeatures: n,
            useRender: to(o),
            createVisualElement: r,
            projectionNodeConstructor: i,
            Component: e,
          });
        })(e, t, yu, lu, gu);
      });
    var xu = function () {
        return (0, Ie.jsxs)("div", {
          children: [
            (0, Ie.jsx)(Be, {}),
            (0, Ie.jsxs)(bu.div, {
              className: "home",
              initial: "initial",
              animate: "visible",
              exit: "exit",
              variants: {
                initial: { opacity: 0, transition: { duration: 0.8 }, x: 100 },
                visible: { opacity: 1, x: 0 },
                exit: { opacity: 0, transition: { duration: 0.3 }, x: -100 },
              },
              children: [
                (0, Ie.jsx)(We, {}),
                (0, Ie.jsx)(He, {}),
                (0, Ie.jsx)("div", {
                  className: "home-main",
                  children: (0, Ie.jsxs)("div", {
                    className: "main-content",
                    children: [
                      (0, Ie.jsx)(bu.h1, {
                        drag: !0,
                        onDragEnd: !0,
                        dragConstraints: {
                          left: -250,
                          right: 950,
                          top: -200,
                          bottom: 250,
                        },
                        children: "Quentin Hourcadette",
                      }),
                      (0, Ie.jsx)("h2", { children: (0, Ie.jsx)(Ue, {}) }),
                    ],
                  }),
                }),
                (0, Ie.jsx)($e, { right: "/projet-1" }),
              ],
            }),
          ],
        });
      },
      wu = function () {
        return (0, Ie.jsx)("span", { className: "logo", children: "QH" });
      },
      ku = [
        {
          id: 1,
          title: "Crypto App",
          date: "Juin 2022",
          languages: ["React", "Redux", "Sass"],
          infos:
            "Single Page Application utilisant des Api issus de CoinGecko et permetttant d'optenir en temps r\xe9el les informations sur toutes les cryptomonnaies.",
          img: "./assets/img/projet-1.jpg",
          link: "https://crypto-app-prod.vercel.app/",
        },
        {
          id: 2,
          title: "Ecommerce Project",
          date: "Juillet 2022",
          languages: ["Next.js", "Css", "Sanity", "Stripe"],
          infos:
            "Application d'Ecommerce utilisant Sanity comme syst\xe8me de base de donn\xe9e de produit, ainsi que Stripe pour la gestion des paiements.",
          img: "./assets/img/projet-2.jpg",
          link: "https://ecommerce-project-wheat.vercel.app/",
        },
      ],
      Su = function (e) {
        var n = e.projectNumber,
          r = o((0, t.useState)(ku[n]), 1)[0],
          i = o((0, t.useState)(), 2),
          a = i[0],
          l = i[1],
          u = o((0, t.useState)(), 2),
          s = u[0],
          c = u[1],
          f = o((0, t.useState)(), 2),
          d = f[0],
          p = f[1];
        (0, t.useEffect)(function () {
          l(Math.floor(200 * Math.random() + 700) + "px"),
            c(Math.floor(200 * Math.random() + 150) + "px"),
            p("scale(" + (Math.random() + 0.7) + ")");
        }, []);
        var h = {
          initial: {
            opacity: 0,
            x: Math.floor(350 * Math.random() * (Math.random() > 0.4 ? 1 : -1)),
            y: Math.floor(120 * Math.random() * (Math.random() > 0.4 ? 1 : -1)),
          },
          visible: { opacity: 1, x: 0, y: 0 },
        };
        return (0, Ie.jsxs)(bu.div, {
          className: "project-main",
          initial: "initial",
          animate: "visible",
          exit: "exit",
          transition: { ease: [0.03, 0.87, 0.73, 0.9], duration: 0.6 },
          variants: {
            initial: { opacity: 0, transition: { duration: 0.5 }, x: 200 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0.4, transition: { duration: 0.35 }, x: -800 },
          },
          children: [
            (0, Ie.jsxs)("div", {
              className: "project-content",
              children: [
                (0, Ie.jsx)("h1", { children: r.title }),
                (0, Ie.jsx)("p", { children: r.date }),
                (0, Ie.jsx)("ul", {
                  className: "languages",
                  children: r.languages.map(function (e) {
                    return (0, Ie.jsx)("li", { children: e }, e);
                  }),
                }),
              ],
            }),
            (0, Ie.jsxs)(bu.div, {
              initial: "initial",
              animate: "visible",
              variants: h,
              transition: { duration: 1.2 },
              className: "img-content",
              children: [
                (0, Ie.jsxs)("div", {
                  className: "img-container hover",
                  children: [
                    (0, Ie.jsxs)("span", {
                      children: [
                        (0, Ie.jsx)("h3", { children: r.title }),
                        (0, Ie.jsx)("p", { children: r.infos }),
                      ],
                    }),
                    (0, Ie.jsx)("img", {
                      src: r.img,
                      alt: r.title,
                      className: "img",
                    }),
                  ],
                }),
                (0, Ie.jsx)("div", {
                  className: "button-container",
                  children: (0, Ie.jsx)("a", {
                    href: r.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover",
                    children: (0, Ie.jsx)("span", {
                      className: "button",
                      children: "voir le site",
                    }),
                  }),
                }),
              ],
            }),
            (0, Ie.jsx)("span", {
              className: "random-circle",
              style: { left: a, top: s, transform: d },
            }),
          ],
        });
      },
      Eu = function () {
        return (0, Ie.jsxs)("main", {
          children: [
            (0, Ie.jsx)(Be, {}),
            (0, Ie.jsxs)("div", {
              className: "project",
              children: [
                (0, Ie.jsx)(We, {}),
                (0, Ie.jsx)(wu, {}),
                (0, Ie.jsx)(Su, { projectNumber: 0 }),
                (0, Ie.jsx)($e, { left: "/", right: "/projet-2" }),
              ],
            }),
          ],
        });
      },
      Cu = function () {
        return (0, Ie.jsxs)("main", {
          children: [
            (0, Ie.jsx)(Be, {}),
            (0, Ie.jsxs)("div", {
              className: "project",
              children: [
                (0, Ie.jsx)(We, {}),
                (0, Ie.jsx)(wu, {}),
                (0, Ie.jsx)(Su, { projectNumber: 1 }),
                (0, Ie.jsx)($e, { left: "/projet-1", right: "/Contact" }),
              ],
            }),
          ],
        });
      },
      Pu = { _origin: "https://api.emailjs.com" },
      Tu = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "https://api.emailjs.com";
        (Pu._userID = e), (Pu._origin = t);
      },
      ju = function (e, t, n) {
        if (!e)
          throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!t)
          throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n)
          throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0;
      },
      Lu = ee(function e(t) {
        Z(this, e), (this.status = t.status), (this.text = t.responseText);
      }),
      Au = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return new Promise(function (r, i) {
          var a = new XMLHttpRequest();
          a.addEventListener("load", function (e) {
            var t = e.target,
              n = new Lu(t);
            200 === n.status || "OK" === n.text ? r(n) : i(n);
          }),
            a.addEventListener("error", function (e) {
              var t = e.target;
              i(new Lu(t));
            }),
            a.open("POST", Pu._origin + e, !0),
            Object.keys(n).forEach(function (e) {
              a.setRequestHeader(e, n[e]);
            }),
            a.send(t);
        });
      },
      _u = function (e, t, n, r) {
        var i = r || Pu._userID,
          a = (function (e) {
            var t;
            if (
              !(t = "string" === typeof e ? document.querySelector(e) : e) ||
              "FORM" !== t.nodeName
            )
              throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
            return t;
          })(n);
        ju(i, e, t);
        var o = new FormData(a);
        return (
          o.append("lib_version", "3.6.2"),
          o.append("service_id", e),
          o.append("template_id", t),
          o.append("user_id", i),
          Au("/api/v1.0/email/send-form", o)
        );
      };
    Tu("jQZxwbKy7ojzSfyW1");
    var Ou = function () {
        var e = (0, t.useRef)();
        return (0, Ie.jsxs)("div", {
          className: "form-container",
          children: [
            (0, Ie.jsx)("h2", { children: "Contactez-moi" }),
            (0, Ie.jsxs)("form", {
              ref: e,
              onSubmit: function (t) {
                t.preventDefault();
                var n = document.querySelector(".form-message");
                _u(
                  "service_78f9xrv",
                  "template_in5wtyl",
                  e.current,
                  "jQZxwbKy7ojzSfyW1"
                ).then(
                  function (t) {
                    console.log(t.text),
                      e.current.reset(),
                      (n.innerHTML =
                        "<p class='success'> Message envoy\xe9 ! </p>"),
                      setTimeout(function () {
                        n.innerHTML = "";
                      }, 2500);
                  },
                  function (e) {
                    console.log(e.text),
                      (n.innerHTML =
                        "<p class='error'> Une erreur s'est produite, veuillez r\xe9essayer ! </p>"),
                      setTimeout(function () {
                        n.innerHTML = "";
                      }, 2500);
                  }
                );
              },
              className: "form-content",
              children: [
                (0, Ie.jsx)("label", { children: "Votre nom" }),
                (0, Ie.jsx)("input", {
                  type: "text",
                  name: "name",
                  required: !0,
                  autoComplete: "off",
                  id: "name",
                }),
                (0, Ie.jsx)("label", { children: "Votre email" }),
                (0, Ie.jsx)("input", {
                  type: "email",
                  name: "email",
                  required: !0,
                  autoComplete: "off",
                  id: "email",
                }),
                (0, Ie.jsx)("label", { children: "Votre message" }),
                (0, Ie.jsx)("textarea", { name: "message", id: "mess" }),
                (0, Ie.jsx)("input", {
                  type: "submit",
                  value: "Envoyer",
                  className: "hover button",
                }),
              ],
            }),
            (0, Ie.jsx)("div", { className: "form-message" }),
          ],
        });
      },
      Nu = n(29),
      Ru = function () {
        return (0, Ie.jsxs)("main", {
          children: [
            (0, Ie.jsx)(Be, {}),
            (0, Ie.jsxs)(bu.div, {
              className: "contact",
              initial: "out",
              animate: "in",
              exit: "out",
              variants: {
                in: { opacity: 1, x: 0 },
                out: { opacity: 0, x: 200 },
              },
              transition: { duration: 0.5 },
              children: [
                (0, Ie.jsx)(We, {}),
                (0, Ie.jsx)(wu, {}),
                (0, Ie.jsx)(Ou, {}),
                (0, Ie.jsxs)("div", {
                  className: "contact-infos",
                  children: [
                    (0, Ie.jsx)("div", {
                      className: "address",
                      children: (0, Ie.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, Ie.jsx)("h4", { children: "Adresse" }),
                          (0, Ie.jsx)("p", {
                            children: "4bis rue paul Doumer",
                          }),
                          (0, Ie.jsx)("p", { children: "64 000 Pau" }),
                        ],
                      }),
                    }),
                    (0, Ie.jsx)("div", {
                      className: "phone",
                      children: (0, Ie.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, Ie.jsx)("h4", { children: "T\xe9l\xe9phone" }),
                          (0, Ie.jsx)(Nu.CopyToClipboard, {
                            text: "0630997800",
                            className: "hover",
                            children: (0, Ie.jsx)("p", {
                              style: { cursor: "pointer" },
                              className: "clipboard",
                              onClick: function () {
                                return alert("T\xe9l\xe9phone Copi\xe9!");
                              },
                              children: "06 30 99 78 00",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Ie.jsx)("div", {
                      className: "email",
                      children: (0, Ie.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, Ie.jsx)("h4", { children: "Email" }),
                          (0, Ie.jsx)(Nu.CopyToClipboard, {
                            text: "quentinhou.pro@gmail.com",
                            className: "hover",
                            children: (0, Ie.jsx)("p", {
                              style: { cursor: "pointer" },
                              className: "clipboard",
                              onClick: function () {
                                return alert("Email copi\xe9 !");
                              },
                              children: "quentinhou.pro@gmail.com",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Ie.jsx)(He, {}),
                  ],
                }),
                (0, Ie.jsx)($e, { left: "/projet-2" }),
              ],
            }),
          ],
        });
      },
      Mu = function () {
        return (0, Ie.jsx)("div", {
          className: "notFound",
          children: (0, Ie.jsxs)("div", {
            className: "notFound-content",
            children: [
              (0, Ie.jsx)("h2", { children: "Erreur 404" }),
              (0, Ie.jsx)(Y, {
                to: "/",
                children: (0, Ie.jsxs)("h3", {
                  children: [
                    "Retour \xe0 l'accueil ",
                    (0, Ie.jsx)("i", { className: "fas fa-home" }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    function Du() {
      var e = (0, t.useRef)(!1);
      return (
        ut(function () {
          return (
            (e.current = !0),
            function () {
              e.current = !1;
            }
          );
        }, []),
        e
      );
    }
    var Vu = function (e) {
      var n = e.children,
        r = e.initial,
        i = e.isPresent,
        a = e.onExitComplete,
        o = e.custom,
        l = e.presenceAffectsLayout,
        u = kt(zu),
        s = Ko(),
        c = (0, t.useMemo)(
          function () {
            return {
              id: s,
              initial: r,
              isPresent: i,
              custom: o,
              onExitComplete: function (e) {
                var t, n;
                u.set(e, !0);
                try {
                  for (
                    var r = Xe(u.values()), i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    if (!i.value) return;
                  }
                } catch (o) {
                  t = { error: o };
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                null === a || void 0 === a || a();
              },
              register: function (e) {
                return (
                  u.set(e, !1),
                  function () {
                    return u.delete(e);
                  }
                );
              },
            };
          },
          l ? void 0 : [i]
        );
      return (
        (0, t.useMemo)(
          function () {
            u.forEach(function (e, t) {
              return u.set(t, !1);
            });
          },
          [i]
        ),
        t.useEffect(
          function () {
            !i && !u.size && (null === a || void 0 === a || a());
          },
          [i]
        ),
        t.createElement(ot.Provider, { value: c }, n)
      );
    };
    function zu() {
      return new Map();
    }
    var Fu = function (e) {
      return e.key || "";
    };
    var Iu = function (e) {
        var n = e.children,
          r = e.custom,
          i = e.initial,
          a = void 0 === i || i,
          o = e.onExitComplete,
          l = e.exitBeforeEnter,
          u = e.presenceAffectsLayout,
          s = void 0 === u || u,
          c = Ke(
            (function () {
              var e = Du(),
                n = Ke((0, t.useState)(0), 2),
                r = n[0],
                i = n[1],
                a = (0, t.useCallback)(
                  function () {
                    e.current && i(r + 1);
                  },
                  [r]
                );
              return [
                (0, t.useCallback)(
                  function () {
                    return Ft.postRender(a);
                  },
                  [a]
                ),
                r,
              ];
            })(),
            1
          ),
          f = c[0],
          d = (0, t.useContext)(La).forceRender;
        d && (f = d);
        var p = Du(),
          h = (function (e) {
            var n = [];
            return (
              t.Children.forEach(e, function (e) {
                (0, t.isValidElement)(e) && n.push(e);
              }),
              n
            );
          })(n),
          v = h,
          m = new Set(),
          g = (0, t.useRef)(v),
          y = (0, t.useRef)(new Map()).current,
          b = (0, t.useRef)(!0);
        if (
          (ut(function () {
            (b.current = !1),
              (function (e, t) {
                e.forEach(function (e) {
                  var n = Fu(e);
                  t.set(n, e);
                });
              })(h, y),
              (g.current = v);
          }),
          zo(function () {
            (b.current = !0), y.clear(), m.clear();
          }),
          b.current)
        )
          return t.createElement(
            t.Fragment,
            null,
            v.map(function (e) {
              return t.createElement(
                Vu,
                {
                  key: Fu(e),
                  isPresent: !0,
                  initial: !!a && void 0,
                  presenceAffectsLayout: s,
                },
                e
              );
            })
          );
        v = Ze([], Ke(v), !1);
        for (
          var x = g.current.map(Fu), w = h.map(Fu), k = x.length, S = 0;
          S < k;
          S++
        ) {
          var E = x[S];
          -1 === w.indexOf(E) && m.add(E);
        }
        return (
          l && m.size && (v = []),
          m.forEach(function (e) {
            if (-1 === w.indexOf(e)) {
              var n = y.get(e);
              if (n) {
                var i = x.indexOf(e);
                v.splice(
                  i,
                  0,
                  t.createElement(
                    Vu,
                    {
                      key: Fu(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        y.delete(e), m.delete(e);
                        var t = g.current.findIndex(function (t) {
                          return t.key === e;
                        });
                        if ((g.current.splice(t, 1), !m.size)) {
                          if (((g.current = h), !1 === p.current)) return;
                          f(), o && o();
                        }
                      },
                      custom: r,
                      presenceAffectsLayout: s,
                    },
                    n
                  )
                );
              }
            }
          }),
          (v = v.map(function (e) {
            var n = e.key;
            return m.has(n)
              ? e
              : t.createElement(
                  Vu,
                  { key: Fu(e), isPresent: !0, presenceAffectsLayout: s },
                  e
                );
          })),
          t.createElement(
            t.Fragment,
            null,
            m.size
              ? v
              : v.map(function (e) {
                  return (0, t.cloneElement)(e);
                })
          )
        );
      },
      Uu = function () {
        return (0, Ie.jsx)(q, {
          children: (0, Ie.jsx)(Iu, {
            children: (0, Ie.jsxs)(U, {
              children: [
                (0, Ie.jsx)(F, { path: "/", element: (0, Ie.jsx)(xu, {}) }),
                (0, Ie.jsx)(F, {
                  path: "/projet-1",
                  element: (0, Ie.jsx)(Eu, {}),
                }),
                (0, Ie.jsx)(F, {
                  path: "/projet-2",
                  element: (0, Ie.jsx)(Cu, {}),
                }),
                (0, Ie.jsx)(F, {
                  path: "/contact",
                  element: (0, Ie.jsx)(Ru, {}),
                }),
                (0, Ie.jsx)(F, { path: "*", element: (0, Ie.jsx)(Mu, {}) }),
              ],
            }),
          }),
        });
      };
    r.createRoot(document.getElementById("root")).render(
      (0, Ie.jsx)(t.StrictMode, { children: (0, Ie.jsx)(Uu, {}) })
    );
  })();
})();
//# sourceMappingURL=main.59687ddd.js.map
