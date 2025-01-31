(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && a(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
function Wf(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var To = { exports: {} },
  Kr = {},
  Lo = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var of;
function _h() {
  if (of) return ne;
  of = 1;
  var l = Symbol.for("react.element"),
    u = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    w = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    P = Symbol.iterator;
  function N(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (P && S[P]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    $ = {};
  function j(S, z, ee) {
    (this.props = S),
      (this.context = z),
      (this.refs = $),
      (this.updater = ee || L);
  }
  (j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (S, z) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, z, "setState");
    }),
    (j.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function I() {}
  I.prototype = j.prototype;
  function W(S, z, ee) {
    (this.props = S),
      (this.context = z),
      (this.refs = $),
      (this.updater = ee || L);
  }
  var F = (W.prototype = new I());
  (F.constructor = W), T(F, j.prototype), (F.isPureReactComponent = !0);
  var Q = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    te = { current: null },
    le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(S, z, ee) {
    var re,
      oe = {},
      se = null,
      de = null;
    if (z != null)
      for (re in (z.ref !== void 0 && (de = z.ref),
      z.key !== void 0 && (se = "" + z.key),
      z))
        J.call(z, re) && !le.hasOwnProperty(re) && (oe[re] = z[re]);
    var ce = arguments.length - 2;
    if (ce === 1) oe.children = ee;
    else if (1 < ce) {
      for (var ge = Array(ce), qe = 0; qe < ce; qe++)
        ge[qe] = arguments[qe + 2];
      oe.children = ge;
    }
    if (S && S.defaultProps)
      for (re in ((ce = S.defaultProps), ce))
        oe[re] === void 0 && (oe[re] = ce[re]);
    return {
      $$typeof: l,
      type: S,
      key: se,
      ref: de,
      props: oe,
      _owner: te.current,
    };
  }
  function he(S, z) {
    return {
      $$typeof: l,
      type: S.type,
      key: z,
      ref: S.ref,
      props: S.props,
      _owner: S._owner,
    };
  }
  function Pe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === l;
  }
  function rt(S) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (ee) {
        return z[ee];
      })
    );
  }
  var wt = /\/+/g;
  function Xe(S, z) {
    return typeof S == "object" && S !== null && S.key != null
      ? rt("" + S.key)
      : z.toString(36);
  }
  function ct(S, z, ee, re, oe) {
    var se = typeof S;
    (se === "undefined" || se === "boolean") && (S = null);
    var de = !1;
    if (S === null) de = !0;
    else
      switch (se) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case l:
            case u:
              de = !0;
          }
      }
    if (de)
      return (
        (de = S),
        (oe = oe(de)),
        (S = re === "" ? "." + Xe(de, 0) : re),
        Q(oe)
          ? ((ee = ""),
            S != null && (ee = S.replace(wt, "$&/") + "/"),
            ct(oe, z, ee, "", function (qe) {
              return qe;
            }))
          : oe != null &&
            (Pe(oe) &&
              (oe = he(
                oe,
                ee +
                  (!oe.key || (de && de.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(wt, "$&/") + "/") +
                  S,
              )),
            z.push(oe)),
        1
      );
    if (((de = 0), (re = re === "" ? "." : re + ":"), Q(S)))
      for (var ce = 0; ce < S.length; ce++) {
        se = S[ce];
        var ge = re + Xe(se, ce);
        de += ct(se, z, ee, ge, oe);
      }
    else if (((ge = N(S)), typeof ge == "function"))
      for (S = ge.call(S), ce = 0; !(se = S.next()).done; )
        (se = se.value),
          (ge = re + Xe(se, ce++)),
          (de += ct(se, z, ee, ge, oe));
    else if (se === "object")
      throw (
        ((z = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return de;
  }
  function St(S, z, ee) {
    if (S == null) return S;
    var re = [],
      oe = 0;
    return (
      ct(S, re, "", "", function (se) {
        return z.call(ee, se, oe++);
      }),
      re
    );
  }
  function He(S) {
    if (S._status === -1) {
      var z = S._result;
      (z = z()),
        z.then(
          function (ee) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = ee));
          },
          function (ee) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = ee));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = z));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var _e = { current: null },
    U = { transition: null },
    Z = {
      ReactCurrentDispatcher: _e,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: te,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ne.Children = {
      map: St,
      forEach: function (S, z, ee) {
        St(
          S,
          function () {
            z.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (S) {
        var z = 0;
        return (
          St(S, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (S) {
        return (
          St(S, function (z) {
            return z;
          }) || []
        );
      },
      only: function (S) {
        if (!Pe(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (ne.Component = j),
    (ne.Fragment = o),
    (ne.Profiler = c),
    (ne.PureComponent = W),
    (ne.StrictMode = a),
    (ne.Suspense = m),
    (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (ne.act = V),
    (ne.cloneElement = function (S, z, ee) {
      if (S == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            S +
            ".",
        );
      var re = T({}, S.props),
        oe = S.key,
        se = S.ref,
        de = S._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((se = z.ref), (de = te.current)),
          z.key !== void 0 && (oe = "" + z.key),
          S.type && S.type.defaultProps)
        )
          var ce = S.type.defaultProps;
        for (ge in z)
          J.call(z, ge) &&
            !le.hasOwnProperty(ge) &&
            (re[ge] = z[ge] === void 0 && ce !== void 0 ? ce[ge] : z[ge]);
      }
      var ge = arguments.length - 2;
      if (ge === 1) re.children = ee;
      else if (1 < ge) {
        ce = Array(ge);
        for (var qe = 0; qe < ge; qe++) ce[qe] = arguments[qe + 2];
        re.children = ce;
      }
      return {
        $$typeof: l,
        type: S.type,
        key: oe,
        ref: se,
        props: re,
        _owner: de,
      };
    }),
    (ne.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (S.Provider = { $$typeof: d, _context: S }),
        (S.Consumer = S)
      );
    }),
    (ne.createElement = ie),
    (ne.createFactory = function (S) {
      var z = ie.bind(null, S);
      return (z.type = S), z;
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (S) {
      return { $$typeof: y, render: S };
    }),
    (ne.isValidElement = Pe),
    (ne.lazy = function (S) {
      return { $$typeof: k, _payload: { _status: -1, _result: S }, _init: He };
    }),
    (ne.memo = function (S, z) {
      return { $$typeof: w, type: S, compare: z === void 0 ? null : z };
    }),
    (ne.startTransition = function (S) {
      var z = U.transition;
      U.transition = {};
      try {
        S();
      } finally {
        U.transition = z;
      }
    }),
    (ne.unstable_act = V),
    (ne.useCallback = function (S, z) {
      return _e.current.useCallback(S, z);
    }),
    (ne.useContext = function (S) {
      return _e.current.useContext(S);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (S) {
      return _e.current.useDeferredValue(S);
    }),
    (ne.useEffect = function (S, z) {
      return _e.current.useEffect(S, z);
    }),
    (ne.useId = function () {
      return _e.current.useId();
    }),
    (ne.useImperativeHandle = function (S, z, ee) {
      return _e.current.useImperativeHandle(S, z, ee);
    }),
    (ne.useInsertionEffect = function (S, z) {
      return _e.current.useInsertionEffect(S, z);
    }),
    (ne.useLayoutEffect = function (S, z) {
      return _e.current.useLayoutEffect(S, z);
    }),
    (ne.useMemo = function (S, z) {
      return _e.current.useMemo(S, z);
    }),
    (ne.useReducer = function (S, z, ee) {
      return _e.current.useReducer(S, z, ee);
    }),
    (ne.useRef = function (S) {
      return _e.current.useRef(S);
    }),
    (ne.useState = function (S) {
      return _e.current.useState(S);
    }),
    (ne.useSyncExternalStore = function (S, z, ee) {
      return _e.current.useSyncExternalStore(S, z, ee);
    }),
    (ne.useTransition = function () {
      return _e.current.useTransition();
    }),
    (ne.version = "18.3.1"),
    ne
  );
}
var sf;
function ji() {
  return sf || ((sf = 1), (Lo.exports = _h())), Lo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af;
function kh() {
  if (af) return Kr;
  af = 1;
  var l = ji(),
    u = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(y, m, w) {
    var k,
      P = {},
      N = null,
      L = null;
    w !== void 0 && (N = "" + w),
      m.key !== void 0 && (N = "" + m.key),
      m.ref !== void 0 && (L = m.ref);
    for (k in m) a.call(m, k) && !d.hasOwnProperty(k) && (P[k] = m[k]);
    if (y && y.defaultProps)
      for (k in ((m = y.defaultProps), m)) P[k] === void 0 && (P[k] = m[k]);
    return {
      $$typeof: u,
      type: y,
      key: N,
      ref: L,
      props: P,
      _owner: c.current,
    };
  }
  return (Kr.Fragment = o), (Kr.jsx = h), (Kr.jsxs = h), Kr;
}
var cf;
function Ch() {
  return cf || ((cf = 1), (To.exports = kh())), To.exports;
}
var E = Ch(),
  R = ji();
const an = Wf(R);
var mi = {},
  Oo = { exports: {} },
  Ge = {},
  zo = { exports: {} },
  Do = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff;
function Eh() {
  return (
    ff ||
      ((ff = 1),
      (function (l) {
        function u(U, Z) {
          var V = U.length;
          U.push(Z);
          e: for (; 0 < V; ) {
            var S = (V - 1) >>> 1,
              z = U[S];
            if (0 < c(z, Z)) (U[S] = Z), (U[V] = z), (V = S);
            else break e;
          }
        }
        function o(U) {
          return U.length === 0 ? null : U[0];
        }
        function a(U) {
          if (U.length === 0) return null;
          var Z = U[0],
            V = U.pop();
          if (V !== Z) {
            U[0] = V;
            e: for (var S = 0, z = U.length, ee = z >>> 1; S < ee; ) {
              var re = 2 * (S + 1) - 1,
                oe = U[re],
                se = re + 1,
                de = U[se];
              if (0 > c(oe, V))
                se < z && 0 > c(de, oe)
                  ? ((U[S] = de), (U[se] = V), (S = se))
                  : ((U[S] = oe), (U[re] = V), (S = re));
              else if (se < z && 0 > c(de, V))
                (U[S] = de), (U[se] = V), (S = se);
              else break e;
            }
          }
          return Z;
        }
        function c(U, Z) {
          var V = U.sortIndex - Z.sortIndex;
          return V !== 0 ? V : U.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          l.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          l.unstable_now = function () {
            return h.now() - y;
          };
        }
        var m = [],
          w = [],
          k = 1,
          P = null,
          N = 3,
          L = !1,
          T = !1,
          $ = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function F(U) {
          for (var Z = o(w); Z !== null; ) {
            if (Z.callback === null) a(w);
            else if (Z.startTime <= U)
              a(w), (Z.sortIndex = Z.expirationTime), u(m, Z);
            else break;
            Z = o(w);
          }
        }
        function Q(U) {
          if ((($ = !1), F(U), !T))
            if (o(m) !== null) (T = !0), He(J);
            else {
              var Z = o(w);
              Z !== null && _e(Q, Z.startTime - U);
            }
        }
        function J(U, Z) {
          (T = !1), $ && (($ = !1), I(ie), (ie = -1)), (L = !0);
          var V = N;
          try {
            for (
              F(Z), P = o(m);
              P !== null && (!(P.expirationTime > Z) || (U && !rt()));

            ) {
              var S = P.callback;
              if (typeof S == "function") {
                (P.callback = null), (N = P.priorityLevel);
                var z = S(P.expirationTime <= Z);
                (Z = l.unstable_now()),
                  typeof z == "function"
                    ? (P.callback = z)
                    : P === o(m) && a(m),
                  F(Z);
              } else a(m);
              P = o(m);
            }
            if (P !== null) var ee = !0;
            else {
              var re = o(w);
              re !== null && _e(Q, re.startTime - Z), (ee = !1);
            }
            return ee;
          } finally {
            (P = null), (N = V), (L = !1);
          }
        }
        var te = !1,
          le = null,
          ie = -1,
          he = 5,
          Pe = -1;
        function rt() {
          return !(l.unstable_now() - Pe < he);
        }
        function wt() {
          if (le !== null) {
            var U = l.unstable_now();
            Pe = U;
            var Z = !0;
            try {
              Z = le(!0, U);
            } finally {
              Z ? Xe() : ((te = !1), (le = null));
            }
          } else te = !1;
        }
        var Xe;
        if (typeof W == "function")
          Xe = function () {
            W(wt);
          };
        else if (typeof MessageChannel < "u") {
          var ct = new MessageChannel(),
            St = ct.port2;
          (ct.port1.onmessage = wt),
            (Xe = function () {
              St.postMessage(null);
            });
        } else
          Xe = function () {
            j(wt, 0);
          };
        function He(U) {
          (le = U), te || ((te = !0), Xe());
        }
        function _e(U, Z) {
          ie = j(function () {
            U(l.unstable_now());
          }, Z);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            T || L || ((T = !0), He(J));
          }),
          (l.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (he = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (l.unstable_next = function (U) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = N;
            }
            var V = N;
            N = Z;
            try {
              return U();
            } finally {
              N = V;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (U, Z) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var V = N;
            N = U;
            try {
              return Z();
            } finally {
              N = V;
            }
          }),
          (l.unstable_scheduleCallback = function (U, Z, V) {
            var S = l.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? S + V : S))
                : (V = S),
              U)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = V + z),
              (U = {
                id: k++,
                callback: Z,
                priorityLevel: U,
                startTime: V,
                expirationTime: z,
                sortIndex: -1,
              }),
              V > S
                ? ((U.sortIndex = V),
                  u(w, U),
                  o(m) === null &&
                    U === o(w) &&
                    ($ ? (I(ie), (ie = -1)) : ($ = !0), _e(Q, V - S)))
                : ((U.sortIndex = z), u(m, U), T || L || ((T = !0), He(J))),
              U
            );
          }),
          (l.unstable_shouldYield = rt),
          (l.unstable_wrapCallback = function (U) {
            var Z = N;
            return function () {
              var V = N;
              N = Z;
              try {
                return U.apply(this, arguments);
              } finally {
                N = V;
              }
            };
          });
      })(Do)),
    Do
  );
}
var df;
function Ph() {
  return df || ((df = 1), (zo.exports = Eh())), zo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function Rh() {
  if (pf) return Ge;
  pf = 1;
  var l = ji(),
    u = Ph();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
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
  var a = new Set(),
    c = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var y = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    w =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    k = {},
    P = {};
  function N(e) {
    return m.call(P, e)
      ? !0
      : m.call(k, e)
        ? !1
        : w.test(e)
          ? (P[e] = !0)
          : ((k[e] = !0), !1);
  }
  function L(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || L(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, i, s, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = f);
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      j[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      j[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        j[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      j[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        j[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      j[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      j[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      j[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      j[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, W);
      j[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, W);
        j[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, W);
      j[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      j[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      j[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function F(e, t, n, r) {
    var i = j.hasOwnProperty(t) ? j[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, i, r) && (n = null),
      r || i === null
        ? N(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Q = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    J = Symbol.for("react.element"),
    te = Symbol.for("react.portal"),
    le = Symbol.for("react.fragment"),
    ie = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    rt = Symbol.for("react.context"),
    wt = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    St = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    _e = Symbol.for("react.offscreen"),
    U = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (U && e[U]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    S;
  function z(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = (t && t[1]) || "";
      }
    return (
      `
` +
      S +
      e
    );
  }
  var ee = !1;
  function re(e, t) {
    if (!e || ee) return "";
    ee = !0;
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
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (C) {
            var r = C;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (C) {
            r = C;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          r = C;
        }
        e();
      }
    } catch (C) {
      if (C && r && typeof C.stack == "string") {
        for (
          var i = C.stack.split(`
`),
            s = r.stack.split(`
`),
            f = i.length - 1,
            p = s.length - 1;
          1 <= f && 0 <= p && i[f] !== s[p];

        )
          p--;
        for (; 1 <= f && 0 <= p; f--, p--)
          if (i[f] !== s[p]) {
            if (f !== 1 || p !== 1)
              do
                if ((f--, p--, 0 > p || i[f] !== s[p])) {
                  var g =
                    `
` + i[f].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", e.displayName)),
                    g
                  );
                }
              while (1 <= f && 0 <= p);
            break;
          }
      }
    } finally {
      (ee = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function oe(e) {
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
        return (e = re(e.type, !1)), e;
      case 11:
        return (e = re(e.type.render, !1)), e;
      case 1:
        return (e = re(e.type, !0)), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case le:
        return "Fragment";
      case te:
        return "Portal";
      case he:
        return "Profiler";
      case ie:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ct:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case rt:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case wt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case St:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || "Memo"
          );
        case He:
          (t = e._payload), (e = e._init);
          try {
            return se(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
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
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
        return se(t);
      case 8:
        return t === ie ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ge(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qe(e) {
    var t = ge(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            (r = "" + f), s.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (f) {
            r = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function il(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function ds(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ge(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ul(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mi(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ps(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function hs(e, t) {
    (t = t.checked), t != null && F(e, "checked", t, !1);
  }
  function Fi(e, t) {
    hs(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ai(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ai(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ai(e, t, n) {
    (t !== "number" || ul(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var or = Array.isArray;
  function Tn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $i(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ys(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (or(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function gs(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ws(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ui(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ws(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var ol,
    Ss = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ol = ol || document.createElement("div"),
            ol.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ol.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ar = {
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
    Rd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ar).forEach(function (e) {
    Rd.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
    });
  });
  function xs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function _s(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = xs(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Nd = V(
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
    },
  );
  function Bi(e, t) {
    if (t) {
      if (Nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Hi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
  var Wi = null;
  function Vi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Qi = null,
    Ln = null,
    On = null;
  function ks(e) {
    if ((e = Lr(e))) {
      if (typeof Qi != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = Tl(t)), Qi(e.stateNode, e.type, t));
    }
  }
  function Cs(e) {
    Ln ? (On ? On.push(e) : (On = [e])) : (Ln = e);
  }
  function Es() {
    if (Ln) {
      var e = Ln,
        t = On;
      if (((On = Ln = null), ks(e), t)) for (e = 0; e < t.length; e++) ks(t[e]);
    }
  }
  function Ps(e, t) {
    return e(t);
  }
  function Rs() {}
  var Ki = !1;
  function Ns(e, t, n) {
    if (Ki) return e(t, n);
    Ki = !0;
    try {
      return Ps(e, t, n);
    } finally {
      (Ki = !1), (Ln !== null || On !== null) && (Rs(), Es());
    }
  }
  function cr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Tl(n);
    if (r === null) return null;
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
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Yi = !1;
  if (y)
    try {
      var fr = {};
      Object.defineProperty(fr, "passive", {
        get: function () {
          Yi = !0;
        },
      }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr);
    } catch {
      Yi = !1;
    }
  function jd(e, t, n, r, i, s, f, p, g) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (D) {
      this.onError(D);
    }
  }
  var dr = !1,
    sl = null,
    al = !1,
    Gi = null,
    Td = {
      onError: function (e) {
        (dr = !0), (sl = e);
      },
    };
  function Ld(e, t, n, r, i, s, f, p, g) {
    (dr = !1), (sl = null), jd.apply(Td, arguments);
  }
  function Od(e, t, n, r, i, s, f, p, g) {
    if ((Ld.apply(this, arguments), dr)) {
      if (dr) {
        var C = sl;
        (dr = !1), (sl = null);
      } else throw Error(o(198));
      al || ((al = !0), (Gi = C));
    }
  }
  function dn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function js(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ts(e) {
    if (dn(e) !== e) throw Error(o(188));
  }
  function zd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = dn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return Ts(i), e;
          if (s === r) return Ts(i), t;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) (n = i), (r = s);
      else {
        for (var f = !1, p = i.child; p; ) {
          if (p === n) {
            (f = !0), (n = i), (r = s);
            break;
          }
          if (p === r) {
            (f = !0), (r = i), (n = s);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = s.child; p; ) {
            if (p === n) {
              (f = !0), (n = s), (r = i);
              break;
            }
            if (p === r) {
              (f = !0), (r = s), (n = i);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ls(e) {
    return (e = zd(e)), e !== null ? Os(e) : null;
  }
  function Os(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Os(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zs = u.unstable_scheduleCallback,
    Ds = u.unstable_cancelCallback,
    Dd = u.unstable_shouldYield,
    Id = u.unstable_requestPaint,
    Ce = u.unstable_now,
    Md = u.unstable_getCurrentPriorityLevel,
    Xi = u.unstable_ImmediatePriority,
    Is = u.unstable_UserBlockingPriority,
    cl = u.unstable_NormalPriority,
    Fd = u.unstable_LowPriority,
    Ms = u.unstable_IdlePriority,
    fl = null,
    xt = null;
  function Ad(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function")
      try {
        xt.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : Bd,
    $d = Math.log,
    Ud = Math.LN2;
  function Bd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - (($d(e) / Ud) | 0)) | 0;
  }
  var dl = 64,
    pl = 4194304;
  function pr(e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
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
  function hl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var p = f & ~i;
      p !== 0 ? (r = pr(p)) : ((s &= f), s !== 0 && (r = pr(s)));
    } else (f = n & ~i), f !== 0 ? (r = pr(f)) : s !== 0 && (r = pr(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function Hd(e, t) {
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
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var f = 31 - ft(s),
        p = 1 << f,
        g = i[f];
      g === -1
        ? (!(p & n) || p & r) && (i[f] = Hd(p, t))
        : g <= t && (e.expiredLanes |= p),
        (s &= ~p);
    }
  }
  function qi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Fs() {
    var e = dl;
    return (dl <<= 1), !(dl & 4194240) && (dl = 64), e;
  }
  function Ji(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function Vd(e, t) {
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
      var i = 31 - ft(n),
        s = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
    }
  }
  function Zi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var fe = 0;
  function As(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var $s,
    bi,
    Us,
    Bs,
    Hs,
    eu = !1,
    ml = [],
    Bt = null,
    Ht = null,
    Wt = null,
    mr = new Map(),
    yr = new Map(),
    Vt = [],
    Qd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ws(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Wt = null;
        break;
      case "pointerover":
      case "pointerout":
        mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yr.delete(t.pointerId);
    }
  }
  function gr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = Lr(t)), t !== null && bi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Kd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Bt = gr(Bt, e, t, n, r, i)), !0;
      case "dragenter":
        return (Ht = gr(Ht, e, t, n, r, i)), !0;
      case "mouseover":
        return (Wt = gr(Wt, e, t, n, r, i)), !0;
      case "pointerover":
        var s = i.pointerId;
        return mr.set(s, gr(mr.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (s = i.pointerId), yr.set(s, gr(yr.get(s) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Vs(e) {
    var t = pn(e.target);
    if (t !== null) {
      var n = dn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = js(n)), t !== null)) {
            (e.blockedOn = t),
              Hs(e.priority, function () {
                Us(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function yl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Wi = r), n.target.dispatchEvent(r), (Wi = null);
      } else return (t = Lr(n)), t !== null && bi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Qs(e, t, n) {
    yl(e) && n.delete(t);
  }
  function Yd() {
    (eu = !1),
      Bt !== null && yl(Bt) && (Bt = null),
      Ht !== null && yl(Ht) && (Ht = null),
      Wt !== null && yl(Wt) && (Wt = null),
      mr.forEach(Qs),
      yr.forEach(Qs);
  }
  function vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      eu ||
        ((eu = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Yd)));
  }
  function wr(e) {
    function t(i) {
      return vr(i, e);
    }
    if (0 < ml.length) {
      vr(ml[0], e);
      for (var n = 1; n < ml.length; n++) {
        var r = ml[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bt !== null && vr(Bt, e),
        Ht !== null && vr(Ht, e),
        Wt !== null && vr(Wt, e),
        mr.forEach(t),
        yr.forEach(t),
        n = 0;
      n < Vt.length;
      n++
    )
      (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
      Vs(n), n.blockedOn === null && Vt.shift();
  }
  var zn = Q.ReactCurrentBatchConfig,
    gl = !0;
  function Gd(e, t, n, r) {
    var i = fe,
      s = zn.transition;
    zn.transition = null;
    try {
      (fe = 1), tu(e, t, n, r);
    } finally {
      (fe = i), (zn.transition = s);
    }
  }
  function Xd(e, t, n, r) {
    var i = fe,
      s = zn.transition;
    zn.transition = null;
    try {
      (fe = 4), tu(e, t, n, r);
    } finally {
      (fe = i), (zn.transition = s);
    }
  }
  function tu(e, t, n, r) {
    if (gl) {
      var i = nu(e, t, n, r);
      if (i === null) wu(e, t, r, vl, n), Ws(e, r);
      else if (Kd(i, e, t, n, r)) r.stopPropagation();
      else if ((Ws(e, r), t & 4 && -1 < Qd.indexOf(e))) {
        for (; i !== null; ) {
          var s = Lr(i);
          if (
            (s !== null && $s(s),
            (s = nu(e, t, n, r)),
            s === null && wu(e, t, r, vl, n),
            s === i)
          )
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else wu(e, t, r, null, n);
    }
  }
  var vl = null;
  function nu(e, t, n, r) {
    if (((vl = null), (e = Vi(r)), (e = pn(e)), e !== null))
      if (((t = dn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = js(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (vl = e), null;
  }
  function Ks(e) {
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
        switch (Md()) {
          case Xi:
            return 1;
          case Is:
            return 4;
          case cl:
          case Fd:
            return 16;
          case Ms:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qt = null,
    ru = null,
    wl = null;
  function Ys() {
    if (wl) return wl;
    var e,
      t = ru,
      n = t.length,
      r,
      i = "value" in Qt ? Qt.value : Qt.textContent,
      s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === i[s - r]; r++);
    return (wl = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Sl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xl() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function Je(e) {
    function t(n, r, i, s, f) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(s) : s[p]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? xl
          : Gs),
        (this.isPropagationStopped = Gs),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = xl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = xl));
        },
        persist: function () {},
        isPersistent: xl,
      }),
      t
    );
  }
  var Dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    lu = Je(Dn),
    Sr = V({}, Dn, { view: 0, detail: 0 }),
    qd = Je(Sr),
    iu,
    uu,
    xr,
    _l = V({}, Sr, {
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
      getModifierState: su,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== xr &&
              (xr && e.type === "mousemove"
                ? ((iu = e.screenX - xr.screenX), (uu = e.screenY - xr.screenY))
                : (uu = iu = 0),
              (xr = e)),
            iu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uu;
      },
    }),
    Xs = Je(_l),
    Jd = V({}, _l, { dataTransfer: 0 }),
    Zd = Je(Jd),
    bd = V({}, Sr, { relatedTarget: 0 }),
    ou = Je(bd),
    ep = V({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tp = Je(ep),
    np = V({}, Dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    rp = Je(np),
    lp = V({}, Dn, { data: 0 }),
    qs = Je(lp),
    ip = {
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
    up = {
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
    op = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = op[e])
        ? !!t[e]
        : !1;
  }
  function su() {
    return sp;
  }
  var ap = V({}, Sr, {
      key: function (e) {
        if (e.key) {
          var t = ip[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? up[e.keyCode] || "Unidentified"
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
      getModifierState: su,
      charCode: function (e) {
        return e.type === "keypress" ? Sl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Sl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    cp = Je(ap),
    fp = V({}, _l, {
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
    }),
    Js = Je(fp),
    dp = V({}, Sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: su,
    }),
    pp = Je(dp),
    hp = V({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mp = Je(hp),
    yp = V({}, _l, {
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
    gp = Je(yp),
    vp = [9, 13, 27, 32],
    au = y && "CompositionEvent" in window,
    _r = null;
  y && "documentMode" in document && (_r = document.documentMode);
  var wp = y && "TextEvent" in window && !_r,
    Zs = y && (!au || (_r && 8 < _r && 11 >= _r)),
    bs = " ",
    ea = !1;
  function ta(e, t) {
    switch (e) {
      case "keyup":
        return vp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function na(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var In = !1;
  function Sp(e, t) {
    switch (e) {
      case "compositionend":
        return na(t);
      case "keypress":
        return t.which !== 32 ? null : ((ea = !0), bs);
      case "textInput":
        return (e = t.data), e === bs && ea ? null : e;
      default:
        return null;
    }
  }
  function xp(e, t) {
    if (In)
      return e === "compositionend" || (!au && ta(e, t))
        ? ((e = Ys()), (wl = ru = Qt = null), (In = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _p = {
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
  function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_p[e.type] : t === "textarea";
  }
  function la(e, t, n, r) {
    Cs(r),
      (t = Rl(t, "onChange")),
      0 < t.length &&
        ((n = new lu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var kr = null,
    Cr = null;
  function kp(e) {
    _a(e, 0);
  }
  function kl(e) {
    var t = Un(e);
    if (ds(t)) return e;
  }
  function Cp(e, t) {
    if (e === "change") return t;
  }
  var ia = !1;
  if (y) {
    var cu;
    if (y) {
      var fu = "oninput" in document;
      if (!fu) {
        var ua = document.createElement("div");
        ua.setAttribute("oninput", "return;"),
          (fu = typeof ua.oninput == "function");
      }
      cu = fu;
    } else cu = !1;
    ia = cu && (!document.documentMode || 9 < document.documentMode);
  }
  function oa() {
    kr && (kr.detachEvent("onpropertychange", sa), (Cr = kr = null));
  }
  function sa(e) {
    if (e.propertyName === "value" && kl(Cr)) {
      var t = [];
      la(t, Cr, e, Vi(e)), Ns(kp, t);
    }
  }
  function Ep(e, t, n) {
    e === "focusin"
      ? (oa(), (kr = t), (Cr = n), kr.attachEvent("onpropertychange", sa))
      : e === "focusout" && oa();
  }
  function Pp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return kl(Cr);
  }
  function Rp(e, t) {
    if (e === "click") return kl(t);
  }
  function Np(e, t) {
    if (e === "input" || e === "change") return kl(t);
  }
  function jp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == "function" ? Object.is : jp;
  function Er(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!m.call(t, i) || !dt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function aa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ca(e, t) {
    var n = aa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = aa(n);
    }
  }
  function fa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fa(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function da() {
    for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ul(e.document);
    }
    return t;
  }
  function du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Tp(e) {
    var t = da(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      fa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && du(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          (r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = ca(n, s));
          var f = ca(n, r);
          i &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Lp = y && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    pu = null,
    Pr = null,
    hu = !1;
  function pa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu ||
      Mn == null ||
      Mn !== ul(r) ||
      ((r = Mn),
      "selectionStart" in r && du(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Pr && Er(Pr, r)) ||
        ((Pr = r),
        (r = Rl(pu, "onSelect")),
        0 < r.length &&
          ((t = new lu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Mn))));
  }
  function Cl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Fn = {
      animationend: Cl("Animation", "AnimationEnd"),
      animationiteration: Cl("Animation", "AnimationIteration"),
      animationstart: Cl("Animation", "AnimationStart"),
      transitionend: Cl("Transition", "TransitionEnd"),
    },
    mu = {},
    ha = {};
  y &&
    ((ha = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fn.animationend.animation,
      delete Fn.animationiteration.animation,
      delete Fn.animationstart.animation),
    "TransitionEvent" in window || delete Fn.transitionend.transition);
  function El(e) {
    if (mu[e]) return mu[e];
    if (!Fn[e]) return e;
    var t = Fn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ha) return (mu[e] = t[n]);
    return e;
  }
  var ma = El("animationend"),
    ya = El("animationiteration"),
    ga = El("animationstart"),
    va = El("transitionend"),
    wa = new Map(),
    Sa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Kt(e, t) {
    wa.set(e, t), d(t, [e]);
  }
  for (var yu = 0; yu < Sa.length; yu++) {
    var gu = Sa[yu],
      Op = gu.toLowerCase(),
      zp = gu[0].toUpperCase() + gu.slice(1);
    Kt(Op, "on" + zp);
  }
  Kt(ma, "onAnimationEnd"),
    Kt(ya, "onAnimationIteration"),
    Kt(ga, "onAnimationStart"),
    Kt("dblclick", "onDoubleClick"),
    Kt("focusin", "onFocus"),
    Kt("focusout", "onBlur"),
    Kt(va, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Rr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Dp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Rr),
    );
  function xa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Od(r, t, void 0, e), (e.currentTarget = null);
  }
  function _a(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var p = r[f],
              g = p.instance,
              C = p.currentTarget;
            if (((p = p.listener), g !== s && i.isPropagationStopped()))
              break e;
            xa(i, p, C), (s = g);
          }
        else
          for (f = 0; f < r.length; f++) {
            if (
              ((p = r[f]),
              (g = p.instance),
              (C = p.currentTarget),
              (p = p.listener),
              g !== s && i.isPropagationStopped())
            )
              break e;
            xa(i, p, C), (s = g);
          }
      }
    }
    if (al) throw ((e = Gi), (al = !1), (Gi = null), e);
  }
  function me(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function vu(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var Pl = "_reactListening" + Math.random().toString(36).slice(2);
  function Nr(e) {
    if (!e[Pl]) {
      (e[Pl] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Dp.has(n) || vu(n, !1, e), vu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Pl] || ((t[Pl] = !0), vu("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Ks(t)) {
      case 1:
        var i = Gd;
        break;
      case 4:
        i = Xd;
        break;
      default:
        i = tu;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Yi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function wu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var p = r.stateNode.containerInfo;
          if (p === i || (p.nodeType === 8 && p.parentNode === i)) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var g = f.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = f.stateNode.containerInfo),
                g === i || (g.nodeType === 8 && g.parentNode === i))
              )
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = pn(p)), f === null)) return;
            if (((g = f.tag), g === 5 || g === 6)) {
              r = s = f;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    Ns(function () {
      var C = s,
        D = Vi(n),
        M = [];
      e: {
        var O = wa.get(e);
        if (O !== void 0) {
          var B = lu,
            K = e;
          switch (e) {
            case "keypress":
              if (Sl(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = cp;
              break;
            case "focusin":
              (K = "focus"), (B = ou);
              break;
            case "focusout":
              (K = "blur"), (B = ou);
              break;
            case "beforeblur":
            case "afterblur":
              B = ou;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Xs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Zd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = pp;
              break;
            case ma:
            case ya:
            case ga:
              B = tp;
              break;
            case va:
              B = mp;
              break;
            case "scroll":
              B = qd;
              break;
            case "wheel":
              B = gp;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = rp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Js;
          }
          var Y = (t & 4) !== 0,
            Ee = !Y && e === "scroll",
            x = Y ? (O !== null ? O + "Capture" : null) : O;
          Y = [];
          for (var v = C, _; v !== null; ) {
            _ = v;
            var A = _.stateNode;
            if (
              (_.tag === 5 &&
                A !== null &&
                ((_ = A),
                x !== null &&
                  ((A = cr(v, x)), A != null && Y.push(jr(v, A, _)))),
              Ee)
            )
              break;
            v = v.return;
          }
          0 < Y.length &&
            ((O = new B(O, K, null, n, D)), M.push({ event: O, listeners: Y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            O &&
              n !== Wi &&
              (K = n.relatedTarget || n.fromElement) &&
              (pn(K) || K[Nt]))
          )
            break e;
          if (
            (B || O) &&
            ((O =
              D.window === D
                ? D
                : (O = D.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            B
              ? ((K = n.relatedTarget || n.toElement),
                (B = C),
                (K = K ? pn(K) : null),
                K !== null &&
                  ((Ee = dn(K)), K !== Ee || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((B = null), (K = C)),
            B !== K)
          ) {
            if (
              ((Y = Xs),
              (A = "onMouseLeave"),
              (x = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Y = Js),
                (A = "onPointerLeave"),
                (x = "onPointerEnter"),
                (v = "pointer")),
              (Ee = B == null ? O : Un(B)),
              (_ = K == null ? O : Un(K)),
              (O = new Y(A, v + "leave", B, n, D)),
              (O.target = Ee),
              (O.relatedTarget = _),
              (A = null),
              pn(D) === C &&
                ((Y = new Y(x, v + "enter", K, n, D)),
                (Y.target = _),
                (Y.relatedTarget = Ee),
                (A = Y)),
              (Ee = A),
              B && K)
            )
              t: {
                for (Y = B, x = K, v = 0, _ = Y; _; _ = An(_)) v++;
                for (_ = 0, A = x; A; A = An(A)) _++;
                for (; 0 < v - _; ) (Y = An(Y)), v--;
                for (; 0 < _ - v; ) (x = An(x)), _--;
                for (; v--; ) {
                  if (Y === x || (x !== null && Y === x.alternate)) break t;
                  (Y = An(Y)), (x = An(x));
                }
                Y = null;
              }
            else Y = null;
            B !== null && Ca(M, O, B, Y, !1),
              K !== null && Ee !== null && Ca(M, Ee, K, Y, !0);
          }
        }
        e: {
          if (
            ((O = C ? Un(C) : window),
            (B = O.nodeName && O.nodeName.toLowerCase()),
            B === "select" || (B === "input" && O.type === "file"))
          )
            var G = Cp;
          else if (ra(O))
            if (ia) G = Np;
            else {
              G = Pp;
              var X = Ep;
            }
          else
            (B = O.nodeName) &&
              B.toLowerCase() === "input" &&
              (O.type === "checkbox" || O.type === "radio") &&
              (G = Rp);
          if (G && (G = G(e, C))) {
            la(M, G, n, D);
            break e;
          }
          X && X(e, O, C),
            e === "focusout" &&
              (X = O._wrapperState) &&
              X.controlled &&
              O.type === "number" &&
              Ai(O, "number", O.value);
        }
        switch (((X = C ? Un(C) : window), e)) {
          case "focusin":
            (ra(X) || X.contentEditable === "true") &&
              ((Mn = X), (pu = C), (Pr = null));
            break;
          case "focusout":
            Pr = pu = Mn = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (hu = !1), pa(M, n, D);
            break;
          case "selectionchange":
            if (Lp) break;
          case "keydown":
          case "keyup":
            pa(M, n, D);
        }
        var q;
        if (au)
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
          In
            ? ta(e, n) && (b = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (b = "onCompositionStart");
        b &&
          (Zs &&
            n.locale !== "ko" &&
            (In || b !== "onCompositionStart"
              ? b === "onCompositionEnd" && In && (q = Ys())
              : ((Qt = D),
                (ru = "value" in Qt ? Qt.value : Qt.textContent),
                (In = !0))),
          (X = Rl(C, b)),
          0 < X.length &&
            ((b = new qs(b, e, null, n, D)),
            M.push({ event: b, listeners: X }),
            q ? (b.data = q) : ((q = na(n)), q !== null && (b.data = q)))),
          (q = wp ? Sp(e, n) : xp(e, n)) &&
            ((C = Rl(C, "onBeforeInput")),
            0 < C.length &&
              ((D = new qs("onBeforeInput", "beforeinput", null, n, D)),
              M.push({ event: D, listeners: C }),
              (D.data = q)));
      }
      _a(M, t);
    });
  }
  function jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = cr(e, n)),
        s != null && r.unshift(jr(e, s, i)),
        (s = cr(e, t)),
        s != null && r.push(jr(e, s, i))),
        (e = e.return);
    }
    return r;
  }
  function An(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ca(e, t, n, r, i) {
    for (var s = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n,
        g = p.alternate,
        C = p.stateNode;
      if (g !== null && g === r) break;
      p.tag === 5 &&
        C !== null &&
        ((p = C),
        i
          ? ((g = cr(n, s)), g != null && f.unshift(jr(n, g, p)))
          : i || ((g = cr(n, s)), g != null && f.push(jr(n, g, p)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Ip = /\r\n?/g,
    Mp = /\u0000|\uFFFD/g;
  function Ea(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ip,
        `
`,
      )
      .replace(Mp, "");
  }
  function Nl(e, t, n) {
    if (((t = Ea(t)), Ea(e) !== t && n)) throw Error(o(425));
  }
  function jl() {}
  var Su = null,
    xu = null;
  function _u(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ku = typeof setTimeout == "function" ? setTimeout : void 0,
    Fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pa = typeof Promise == "function" ? Promise : void 0,
    Ap =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pa < "u"
          ? function (e) {
              return Pa.resolve(null).then(e).catch($p);
            }
          : ku;
  function $p(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cu(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), wr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    wr(t);
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ra(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var $n = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + $n,
    Tr = "__reactProps$" + $n,
    Nt = "__reactContainer$" + $n,
    Eu = "__reactEvents$" + $n,
    Up = "__reactListeners$" + $n,
    Bp = "__reactHandles$" + $n;
  function pn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[_t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ra(e); e !== null; ) {
            if ((n = e[_t])) return n;
            e = Ra(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Lr(e) {
    return (
      (e = e[_t] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Tl(e) {
    return e[Tr] || null;
  }
  var Pu = [],
    Bn = -1;
  function Gt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Bn || ((e.current = Pu[Bn]), (Pu[Bn] = null), Bn--);
  }
  function pe(e, t) {
    Bn++, (Pu[Bn] = e.current), (e.current = t);
  }
  var Xt = {},
    Me = Gt(Xt),
    We = Gt(!1),
    hn = Xt;
  function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ll() {
    ye(We), ye(Me);
  }
  function Na(e, t, n) {
    if (Me.current !== Xt) throw Error(o(168));
    pe(Me, t), pe(We, n);
  }
  function ja(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, de(e) || "Unknown", i));
    return V({}, n, r);
  }
  function Ol(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Xt),
      (hn = Me.current),
      pe(Me, e),
      pe(We, We.current),
      !0
    );
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n
      ? ((e = ja(e, t, hn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(We),
        ye(Me),
        pe(Me, e))
      : ye(We),
      pe(We, n);
  }
  var jt = null,
    zl = !1,
    Ru = !1;
  function La(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function Hp(e) {
    (zl = !0), La(e);
  }
  function qt() {
    if (!Ru && jt !== null) {
      Ru = !0;
      var e = 0,
        t = fe;
      try {
        var n = jt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (jt = null), (zl = !1);
      } catch (i) {
        throw (jt !== null && (jt = jt.slice(e + 1)), zs(Xi, qt), i);
      } finally {
        (fe = t), (Ru = !1);
      }
    }
    return null;
  }
  var Wn = [],
    Vn = 0,
    Dl = null,
    Il = 0,
    lt = [],
    it = 0,
    mn = null,
    Tt = 1,
    Lt = "";
  function yn(e, t) {
    (Wn[Vn++] = Il), (Wn[Vn++] = Dl), (Dl = e), (Il = t);
  }
  function Oa(e, t, n) {
    (lt[it++] = Tt), (lt[it++] = Lt), (lt[it++] = mn), (mn = e);
    var r = Tt;
    e = Lt;
    var i = 32 - ft(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - ft(t) + i;
    if (30 < s) {
      var f = i - (i % 5);
      (s = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (i -= f),
        (Tt = (1 << (32 - ft(t) + i)) | (n << i) | r),
        (Lt = s + e);
    } else (Tt = (1 << s) | (n << i) | r), (Lt = e);
  }
  function Nu(e) {
    e.return !== null && (yn(e, 1), Oa(e, 1, 0));
  }
  function ju(e) {
    for (; e === Dl; )
      (Dl = Wn[--Vn]), (Wn[Vn] = null), (Il = Wn[--Vn]), (Wn[Vn] = null);
    for (; e === mn; )
      (mn = lt[--it]),
        (lt[it] = null),
        (Lt = lt[--it]),
        (lt[it] = null),
        (Tt = lt[--it]),
        (lt[it] = null);
  }
  var Ze = null,
    be = null,
    ve = !1,
    pt = null;
  function za(e, t) {
    var n = at(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Da(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ze = e), (be = Yt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ze = e), (be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = mn !== null ? { id: Tt, overflow: Lt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = at(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ze = e),
              (be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lu(e) {
    if (ve) {
      var t = be;
      if (t) {
        var n = t;
        if (!Da(e, t)) {
          if (Tu(e)) throw Error(o(418));
          t = Yt(n.nextSibling);
          var r = Ze;
          t && Da(e, t)
            ? za(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e));
        }
      } else {
        if (Tu(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e);
      }
    }
  }
  function Ia(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ze = e;
  }
  function Ml(e) {
    if (e !== Ze) return !1;
    if (!ve) return Ia(e), (ve = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !_u(e.type, e.memoizedProps))),
      t && (t = be))
    ) {
      if (Tu(e)) throw (Ma(), Error(o(418)));
      for (; t; ) za(e, t), (t = Yt(t.nextSibling));
    }
    if ((Ia(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = Ze ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    for (var e = be; e; ) e = Yt(e.nextSibling);
  }
  function Qn() {
    (be = Ze = null), (ve = !1);
  }
  function Ou(e) {
    pt === null ? (pt = [e]) : pt.push(e);
  }
  var Wp = Q.ReactCurrentBatchConfig;
  function Or(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (f) {
              var p = i.refs;
              f === null ? delete p[s] : (p[s] = f);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Fl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Fa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Aa(e) {
    function t(x, v) {
      if (e) {
        var _ = x.deletions;
        _ === null ? ((x.deletions = [v]), (x.flags |= 16)) : _.push(v);
      }
    }
    function n(x, v) {
      if (!e) return null;
      for (; v !== null; ) t(x, v), (v = v.sibling);
      return null;
    }
    function r(x, v) {
      for (x = new Map(); v !== null; )
        v.key !== null ? x.set(v.key, v) : x.set(v.index, v), (v = v.sibling);
      return x;
    }
    function i(x, v) {
      return (x = ln(x, v)), (x.index = 0), (x.sibling = null), x;
    }
    function s(x, v, _) {
      return (
        (x.index = _),
        e
          ? ((_ = x.alternate),
            _ !== null
              ? ((_ = _.index), _ < v ? ((x.flags |= 2), v) : _)
              : ((x.flags |= 2), v))
          : ((x.flags |= 1048576), v)
      );
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, v, _, A) {
      return v === null || v.tag !== 6
        ? ((v = Co(_, x.mode, A)), (v.return = x), v)
        : ((v = i(v, _)), (v.return = x), v);
    }
    function g(x, v, _, A) {
      var G = _.type;
      return G === le
        ? D(x, v, _.props.children, A, _.key)
        : v !== null &&
            (v.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === He &&
                Fa(G) === v.type))
          ? ((A = i(v, _.props)), (A.ref = Or(x, v, _)), (A.return = x), A)
          : ((A = oi(_.type, _.key, _.props, null, x.mode, A)),
            (A.ref = Or(x, v, _)),
            (A.return = x),
            A);
    }
    function C(x, v, _, A) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== _.containerInfo ||
        v.stateNode.implementation !== _.implementation
        ? ((v = Eo(_, x.mode, A)), (v.return = x), v)
        : ((v = i(v, _.children || [])), (v.return = x), v);
    }
    function D(x, v, _, A, G) {
      return v === null || v.tag !== 7
        ? ((v = Cn(_, x.mode, A, G)), (v.return = x), v)
        : ((v = i(v, _)), (v.return = x), v);
    }
    function M(x, v, _) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return (v = Co("" + v, x.mode, _)), (v.return = x), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return (
              (_ = oi(v.type, v.key, v.props, null, x.mode, _)),
              (_.ref = Or(x, null, v)),
              (_.return = x),
              _
            );
          case te:
            return (v = Eo(v, x.mode, _)), (v.return = x), v;
          case He:
            var A = v._init;
            return M(x, A(v._payload), _);
        }
        if (or(v) || Z(v))
          return (v = Cn(v, x.mode, _, null)), (v.return = x), v;
        Fl(x, v);
      }
      return null;
    }
    function O(x, v, _, A) {
      var G = v !== null ? v.key : null;
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return G !== null ? null : p(x, v, "" + _, A);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case J:
            return _.key === G ? g(x, v, _, A) : null;
          case te:
            return _.key === G ? C(x, v, _, A) : null;
          case He:
            return (G = _._init), O(x, v, G(_._payload), A);
        }
        if (or(_) || Z(_)) return G !== null ? null : D(x, v, _, A, null);
        Fl(x, _);
      }
      return null;
    }
    function B(x, v, _, A, G) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (x = x.get(_) || null), p(v, x, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case J:
            return (
              (x = x.get(A.key === null ? _ : A.key) || null), g(v, x, A, G)
            );
          case te:
            return (
              (x = x.get(A.key === null ? _ : A.key) || null), C(v, x, A, G)
            );
          case He:
            var X = A._init;
            return B(x, v, _, X(A._payload), G);
        }
        if (or(A) || Z(A)) return (x = x.get(_) || null), D(v, x, A, G, null);
        Fl(v, A);
      }
      return null;
    }
    function K(x, v, _, A) {
      for (
        var G = null, X = null, q = v, b = (v = 0), Oe = null;
        q !== null && b < _.length;
        b++
      ) {
        q.index > b ? ((Oe = q), (q = null)) : (Oe = q.sibling);
        var ae = O(x, q, _[b], A);
        if (ae === null) {
          q === null && (q = Oe);
          break;
        }
        e && q && ae.alternate === null && t(x, q),
          (v = s(ae, v, b)),
          X === null ? (G = ae) : (X.sibling = ae),
          (X = ae),
          (q = Oe);
      }
      if (b === _.length) return n(x, q), ve && yn(x, b), G;
      if (q === null) {
        for (; b < _.length; b++)
          (q = M(x, _[b], A)),
            q !== null &&
              ((v = s(q, v, b)),
              X === null ? (G = q) : (X.sibling = q),
              (X = q));
        return ve && yn(x, b), G;
      }
      for (q = r(x, q); b < _.length; b++)
        (Oe = B(q, x, b, _[b], A)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              q.delete(Oe.key === null ? b : Oe.key),
            (v = s(Oe, v, b)),
            X === null ? (G = Oe) : (X.sibling = Oe),
            (X = Oe));
      return (
        e &&
          q.forEach(function (un) {
            return t(x, un);
          }),
        ve && yn(x, b),
        G
      );
    }
    function Y(x, v, _, A) {
      var G = Z(_);
      if (typeof G != "function") throw Error(o(150));
      if (((_ = G.call(_)), _ == null)) throw Error(o(151));
      for (
        var X = (G = null), q = v, b = (v = 0), Oe = null, ae = _.next();
        q !== null && !ae.done;
        b++, ae = _.next()
      ) {
        q.index > b ? ((Oe = q), (q = null)) : (Oe = q.sibling);
        var un = O(x, q, ae.value, A);
        if (un === null) {
          q === null && (q = Oe);
          break;
        }
        e && q && un.alternate === null && t(x, q),
          (v = s(un, v, b)),
          X === null ? (G = un) : (X.sibling = un),
          (X = un),
          (q = Oe);
      }
      if (ae.done) return n(x, q), ve && yn(x, b), G;
      if (q === null) {
        for (; !ae.done; b++, ae = _.next())
          (ae = M(x, ae.value, A)),
            ae !== null &&
              ((v = s(ae, v, b)),
              X === null ? (G = ae) : (X.sibling = ae),
              (X = ae));
        return ve && yn(x, b), G;
      }
      for (q = r(x, q); !ae.done; b++, ae = _.next())
        (ae = B(q, x, b, ae.value, A)),
          ae !== null &&
            (e &&
              ae.alternate !== null &&
              q.delete(ae.key === null ? b : ae.key),
            (v = s(ae, v, b)),
            X === null ? (G = ae) : (X.sibling = ae),
            (X = ae));
      return (
        e &&
          q.forEach(function (xh) {
            return t(x, xh);
          }),
        ve && yn(x, b),
        G
      );
    }
    function Ee(x, v, _, A) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === le &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case J:
            e: {
              for (var G = _.key, X = v; X !== null; ) {
                if (X.key === G) {
                  if (((G = _.type), G === le)) {
                    if (X.tag === 7) {
                      n(x, X.sibling),
                        (v = i(X, _.props.children)),
                        (v.return = x),
                        (x = v);
                      break e;
                    }
                  } else if (
                    X.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === He &&
                      Fa(G) === X.type)
                  ) {
                    n(x, X.sibling),
                      (v = i(X, _.props)),
                      (v.ref = Or(x, X, _)),
                      (v.return = x),
                      (x = v);
                    break e;
                  }
                  n(x, X);
                  break;
                } else t(x, X);
                X = X.sibling;
              }
              _.type === le
                ? ((v = Cn(_.props.children, x.mode, A, _.key)),
                  (v.return = x),
                  (x = v))
                : ((A = oi(_.type, _.key, _.props, null, x.mode, A)),
                  (A.ref = Or(x, v, _)),
                  (A.return = x),
                  (x = A));
            }
            return f(x);
          case te:
            e: {
              for (X = _.key; v !== null; ) {
                if (v.key === X)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === _.containerInfo &&
                    v.stateNode.implementation === _.implementation
                  ) {
                    n(x, v.sibling),
                      (v = i(v, _.children || [])),
                      (v.return = x),
                      (x = v);
                    break e;
                  } else {
                    n(x, v);
                    break;
                  }
                else t(x, v);
                v = v.sibling;
              }
              (v = Eo(_, x.mode, A)), (v.return = x), (x = v);
            }
            return f(x);
          case He:
            return (X = _._init), Ee(x, v, X(_._payload), A);
        }
        if (or(_)) return K(x, v, _, A);
        if (Z(_)) return Y(x, v, _, A);
        Fl(x, _);
      }
      return (typeof _ == "string" && _ !== "") || typeof _ == "number"
        ? ((_ = "" + _),
          v !== null && v.tag === 6
            ? (n(x, v.sibling), (v = i(v, _)), (v.return = x), (x = v))
            : (n(x, v), (v = Co(_, x.mode, A)), (v.return = x), (x = v)),
          f(x))
        : n(x, v);
    }
    return Ee;
  }
  var Kn = Aa(!0),
    $a = Aa(!1),
    Al = Gt(null),
    $l = null,
    Yn = null,
    zu = null;
  function Du() {
    zu = Yn = $l = null;
  }
  function Iu(e) {
    var t = Al.current;
    ye(Al), (e._currentValue = t);
  }
  function Mu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Gn(e, t) {
    ($l = e),
      (zu = Yn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Qe = !0), (e.firstContext = null));
  }
  function ut(e) {
    var t = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
        if ($l === null) throw Error(o(308));
        (Yn = e), ($l.dependencies = { lanes: 0, firstContext: e });
      } else Yn = Yn.next = e;
    return t;
  }
  var gn = null;
  function Fu(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function Ua(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Fu(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      Ot(e, r)
    );
  }
  function Ot(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jt = !1;
  function Au(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ba(e, t) {
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
  function zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ue & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        Ot(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Fu(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      Ot(e, n)
    );
  }
  function Ul(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
    }
  }
  function Ha(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (i = s = f) : (s = s.next = f), (n = n.next);
        } while (n !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Bl(e, t, n, r) {
    var i = e.updateQueue;
    Jt = !1;
    var s = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var g = p,
        C = g.next;
      (g.next = null), f === null ? (s = C) : (f.next = C), (f = g);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (p = D.lastBaseUpdate),
        p !== f &&
          (p === null ? (D.firstBaseUpdate = C) : (p.next = C),
          (D.lastBaseUpdate = g)));
    }
    if (s !== null) {
      var M = i.baseState;
      (f = 0), (D = C = g = null), (p = s);
      do {
        var O = p.lane,
          B = p.eventTime;
        if ((r & O) === O) {
          D !== null &&
            (D = D.next =
              {
                eventTime: B,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var K = e,
              Y = p;
            switch (((O = t), (B = n), Y.tag)) {
              case 1:
                if (((K = Y.payload), typeof K == "function")) {
                  M = K.call(B, M, O);
                  break e;
                }
                M = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Y.payload),
                  (O = typeof K == "function" ? K.call(B, M, O) : K),
                  O == null)
                )
                  break e;
                M = V({}, M, O);
                break e;
              case 2:
                Jt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (O = i.effects),
            O === null ? (i.effects = [p]) : O.push(p));
        } else
          (B = {
            eventTime: B,
            lane: O,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            D === null ? ((C = D = B), (g = M)) : (D = D.next = B),
            (f |= O);
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break;
          (O = p),
            (p = O.next),
            (O.next = null),
            (i.lastBaseUpdate = O),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (D === null && (g = M),
        (i.baseState = g),
        (i.firstBaseUpdate = C),
        (i.lastBaseUpdate = D),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (f |= i.lane), (i = i.next);
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (Sn |= f), (e.lanes = f), (e.memoizedState = M);
    }
  }
  function Wa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(o(191, i));
          i.call(r);
        }
      }
  }
  var zr = {},
    kt = Gt(zr),
    Dr = Gt(zr),
    Ir = Gt(zr);
  function vn(e) {
    if (e === zr) throw Error(o(174));
    return e;
  }
  function $u(e, t) {
    switch ((pe(Ir, t), pe(Dr, e), pe(kt, zr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ui(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ui(t, e));
    }
    ye(kt), pe(kt, t);
  }
  function Xn() {
    ye(kt), ye(Dr), ye(Ir);
  }
  function Va(e) {
    vn(Ir.current);
    var t = vn(kt.current),
      n = Ui(t, e.type);
    t !== n && (pe(Dr, e), pe(kt, n));
  }
  function Uu(e) {
    Dr.current === e && (ye(kt), ye(Dr));
  }
  var we = Gt(0);
  function Hl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Bu = [];
  function Hu() {
    for (var e = 0; e < Bu.length; e++)
      Bu[e]._workInProgressVersionPrimary = null;
    Bu.length = 0;
  }
  var Wl = Q.ReactCurrentDispatcher,
    Wu = Q.ReactCurrentBatchConfig,
    wn = 0,
    Se = null,
    Ne = null,
    Te = null,
    Vl = !1,
    Mr = !1,
    Fr = 0,
    Vp = 0;
  function Fe() {
    throw Error(o(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Qu(e, t, n, r, i, s) {
    if (
      ((wn = s),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Wl.current = e === null || e.memoizedState === null ? Gp : Xp),
      (e = n(r, i)),
      Mr)
    ) {
      s = 0;
      do {
        if (((Mr = !1), (Fr = 0), 25 <= s)) throw Error(o(301));
        (s += 1),
          (Te = Ne = null),
          (t.updateQueue = null),
          (Wl.current = qp),
          (e = n(r, i));
      } while (Mr);
    }
    if (
      ((Wl.current = Yl),
      (t = Ne !== null && Ne.next !== null),
      (wn = 0),
      (Te = Ne = Se = null),
      (Vl = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Ku() {
    var e = Fr !== 0;
    return (Fr = 0), e;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Te === null ? (Se.memoizedState = Te = e) : (Te = Te.next = e), Te;
  }
  function ot() {
    if (Ne === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Te === null ? Se.memoizedState : Te.next;
    if (t !== null) (Te = t), (Ne = e);
    else {
      if (e === null) throw Error(o(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        Te === null ? (Se.memoizedState = Te = e) : (Te = Te.next = e);
    }
    return Te;
  }
  function Ar(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yu(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = Ne,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var f = i.next;
        (i.next = s.next), (s.next = f);
      }
      (r.baseQueue = i = s), (n.pending = null);
    }
    if (i !== null) {
      (s = i.next), (r = r.baseState);
      var p = (f = null),
        g = null,
        C = s;
      do {
        var D = C.lane;
        if ((wn & D) === D)
          g !== null &&
            (g = g.next =
              {
                lane: 0,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
            (r = C.hasEagerState ? C.eagerState : e(r, C.action));
        else {
          var M = {
            lane: D,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          g === null ? ((p = g = M), (f = r)) : (g = g.next = M),
            (Se.lanes |= D),
            (Sn |= D);
        }
        C = C.next;
      } while (C !== null && C !== s);
      g === null ? (f = r) : (g.next = p),
        dt(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = g),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (s = i.lane), (Se.lanes |= s), (Sn |= s), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Gu(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = (i = i.next);
      do (s = e(s, f.action)), (f = f.next);
      while (f !== i);
      dt(s, t.memoizedState) || (Qe = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function Qa() {}
  function Ka(e, t) {
    var n = Se,
      r = ot(),
      i = t(),
      s = !dt(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (Qe = !0)),
      (r = r.queue),
      Xu(Xa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Te !== null && Te.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        $r(9, Ga.bind(null, n, r, i, t), void 0, null),
        Le === null)
      )
        throw Error(o(349));
      wn & 30 || Ya(n, t, i);
    }
    return i;
  }
  function Ya(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ga(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), qa(t) && Ja(e);
  }
  function Xa(e, t, n) {
    return n(function () {
      qa(t) && Ja(e);
    });
  }
  function qa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function Ja(e) {
    var t = Ot(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Za(e) {
    var t = Ct();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Yp.bind(null, Se, e)),
      [t.memoizedState, e]
    );
  }
  function $r(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ba() {
    return ot().memoizedState;
  }
  function Ql(e, t, n, r) {
    var i = Ct();
    (Se.flags |= e),
      (i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Kl(e, t, n, r) {
    var i = ot();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ne !== null) {
      var f = Ne.memoizedState;
      if (((s = f.destroy), r !== null && Vu(r, f.deps))) {
        i.memoizedState = $r(t, n, s, r);
        return;
      }
    }
    (Se.flags |= e), (i.memoizedState = $r(1 | t, n, s, r));
  }
  function ec(e, t) {
    return Ql(8390656, 8, e, t);
  }
  function Xu(e, t) {
    return Kl(2048, 8, e, t);
  }
  function tc(e, t) {
    return Kl(4, 2, e, t);
  }
  function nc(e, t) {
    return Kl(4, 4, e, t);
  }
  function rc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function lc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Kl(4, 4, rc.bind(null, t, e), n)
    );
  }
  function qu() {}
  function ic(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function uc(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function oc(e, t, n) {
    return wn & 21
      ? (dt(n, t) ||
          ((n = Fs()), (Se.lanes |= n), (Sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
  }
  function Qp(e, t) {
    var n = fe;
    (fe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Wu.transition;
    Wu.transition = {};
    try {
      e(!1), t();
    } finally {
      (fe = n), (Wu.transition = r);
    }
  }
  function sc() {
    return ot().memoizedState;
  }
  function Kp(e, t, n) {
    var r = nn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ac(e))
    )
      cc(t, n);
    else if (((n = Ua(e, t, n, r)), n !== null)) {
      var i = Be();
      gt(n, e, r, i), fc(n, t, r);
    }
  }
  function Yp(e, t, n) {
    var r = nn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ac(e)) cc(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var f = t.lastRenderedState,
            p = s(f, n);
          if (((i.hasEagerState = !0), (i.eagerState = p), dt(p, f))) {
            var g = t.interleaved;
            g === null
              ? ((i.next = i), Fu(t))
              : ((i.next = g.next), (g.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ua(e, t, i, r)),
        n !== null && ((i = Be()), gt(n, e, r, i), fc(n, t, r));
    }
  }
  function ac(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function cc(e, t) {
    Mr = Vl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function fc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
    }
  }
  var Yl = {
      readContext: ut,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    Gp = {
      readContext: ut,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ut,
      useEffect: ec,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ql(4194308, 4, rc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ql(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ql(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
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
          (e = e.dispatch = Kp.bind(null, Se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Za,
      useDebugValue: qu,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = Za(!1),
          t = e[0];
        return (e = Qp.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Se,
          i = Ct();
        if (ve) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), Le === null)) throw Error(o(349));
          wn & 30 || Ya(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          ec(Xa.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          $r(9, Ga.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = Le.identifierPrefix;
        if (ve) {
          var n = Lt,
            r = Tt;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Vp++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Xp = {
      readContext: ut,
      useCallback: ic,
      useContext: ut,
      useEffect: Xu,
      useImperativeHandle: lc,
      useInsertionEffect: tc,
      useLayoutEffect: nc,
      useMemo: uc,
      useReducer: Yu,
      useRef: ba,
      useState: function () {
        return Yu(Ar);
      },
      useDebugValue: qu,
      useDeferredValue: function (e) {
        var t = ot();
        return oc(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = Yu(Ar)[0],
          t = ot().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: sc,
      unstable_isNewReconciler: !1,
    },
    qp = {
      readContext: ut,
      useCallback: ic,
      useContext: ut,
      useEffect: Xu,
      useImperativeHandle: lc,
      useInsertionEffect: tc,
      useLayoutEffect: nc,
      useMemo: uc,
      useReducer: Gu,
      useRef: ba,
      useState: function () {
        return Gu(Ar);
      },
      useDebugValue: qu,
      useDeferredValue: function (e) {
        var t = ot();
        return Ne === null ? (t.memoizedState = e) : oc(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = Gu(Ar)[0],
          t = ot().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: sc,
      unstable_isNewReconciler: !1,
    };
  function ht(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ju(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? dn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        i = nn(e),
        s = zt(r, i);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = Zt(e, s, i)),
        t !== null && (gt(t, e, i, r), Ul(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        i = nn(e),
        s = zt(r, i);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Zt(e, s, i)),
        t !== null && (gt(t, e, i, r), Ul(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Be(),
        r = nn(e),
        i = zt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Zt(e, i, r)),
        t !== null && (gt(t, e, r, n), Ul(t, e, r));
    },
  };
  function dc(e, t, n, r, i, s, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Er(n, r) || !Er(i, s)
          : !0
    );
  }
  function pc(e, t, n) {
    var r = !1,
      i = Xt,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = ut(s))
        : ((i = Ve(t) ? hn : Me.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Hn(e, i) : Xt)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Gl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function hc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
  }
  function Zu(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Au(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (i.context = ut(s))
      : ((s = Ve(t) ? hn : Me.current), (i.context = Hn(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (Ju(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Gl.enqueueReplaceState(i, i.state, null),
        Bl(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function qn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += oe(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function bu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function eo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Jp = typeof WeakMap == "function" ? WeakMap : Map;
  function mc(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        ti || ((ti = !0), (yo = r)), eo(e, t);
      }),
      n
    );
  }
  function yc(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          eo(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          eo(e, t),
            typeof r != "function" &&
              (en === null ? (en = new Set([this])) : en.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : "",
          });
        }),
      n
    );
  }
  function gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Jp();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = fh.bind(null, e, t, n)), t.then(e, e));
  }
  function vc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wc(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = zt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Zp = Q.ReactCurrentOwner,
    Qe = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? $a(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function Sc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      Gn(t, i),
      (r = Qu(e, t, n, r, s, i)),
      (n = Ku()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Dt(e, t, i))
        : (ve && n && Nu(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
    );
  }
  function xc(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !ko(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), _c(e, t, s, r, i))
        : ((e = oi(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & i))) {
      var f = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Er), n(f, r) && e.ref === t.ref)
      )
        return Dt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = ln(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function _c(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Er(s, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          e.flags & 131072 && (Qe = !0);
        else return (t.lanes = e.lanes), Dt(e, t, i);
    }
    return to(e, t, n, r, i);
  }
  function kc(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          pe(Zn, et),
          (et |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            pe(Zn, et),
            (et |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          pe(Zn, et),
          (et |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        pe(Zn, et),
        (et |= r);
    return Ue(e, t, i, n), t.child;
  }
  function Cc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function to(e, t, n, r, i) {
    var s = Ve(n) ? hn : Me.current;
    return (
      (s = Hn(t, s)),
      Gn(t, i),
      (n = Qu(e, t, n, r, s, i)),
      (r = Ku()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Dt(e, t, i))
        : (ve && r && Nu(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
    );
  }
  function Ec(e, t, n, r, i) {
    if (Ve(n)) {
      var s = !0;
      Ol(t);
    } else s = !1;
    if ((Gn(t, i), t.stateNode === null))
      ql(e, t), pc(t, n, r), Zu(t, n, r, i), (r = !0);
    else if (e === null) {
      var f = t.stateNode,
        p = t.memoizedProps;
      f.props = p;
      var g = f.context,
        C = n.contextType;
      typeof C == "object" && C !== null
        ? (C = ut(C))
        : ((C = Ve(n) ? hn : Me.current), (C = Hn(t, C)));
      var D = n.getDerivedStateFromProps,
        M =
          typeof D == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function";
      M ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((p !== r || g !== C) && hc(t, f, r, C)),
        (Jt = !1);
      var O = t.memoizedState;
      (f.state = O),
        Bl(t, r, f, i),
        (g = t.memoizedState),
        p !== r || O !== g || We.current || Jt
          ? (typeof D == "function" && (Ju(t, n, D, r), (g = t.memoizedState)),
            (p = Jt || dc(t, n, p, r, O, g, C))
              ? (M ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = g)),
            (f.props = r),
            (f.state = g),
            (f.context = C),
            (r = p))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (f = t.stateNode),
        Ba(e, t),
        (p = t.memoizedProps),
        (C = t.type === t.elementType ? p : ht(t.type, p)),
        (f.props = C),
        (M = t.pendingProps),
        (O = f.context),
        (g = n.contextType),
        typeof g == "object" && g !== null
          ? (g = ut(g))
          : ((g = Ve(n) ? hn : Me.current), (g = Hn(t, g)));
      var B = n.getDerivedStateFromProps;
      (D =
        typeof B == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function") ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((p !== M || O !== g) && hc(t, f, r, g)),
        (Jt = !1),
        (O = t.memoizedState),
        (f.state = O),
        Bl(t, r, f, i);
      var K = t.memoizedState;
      p !== M || O !== K || We.current || Jt
        ? (typeof B == "function" && (Ju(t, n, B, r), (K = t.memoizedState)),
          (C = Jt || dc(t, n, C, r, O, K, g) || !1)
            ? (D ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(r, K, g),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, K, g)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (f.props = r),
          (f.state = K),
          (f.context = g),
          (r = C))
        : (typeof f.componentDidUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return no(e, t, n, r, s, i);
  }
  function no(e, t, n, r, i, s) {
    Cc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return i && Ta(t, n, !1), Dt(e, t, s);
    (r = t.stateNode), (Zp.current = t);
    var p =
      f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = Kn(t, e.child, null, s)), (t.child = Kn(t, null, p, s)))
        : Ue(e, t, p, s),
      (t.memoizedState = r.state),
      i && Ta(t, n, !0),
      t.child
    );
  }
  function Pc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Na(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Na(e, t.context, !1),
      $u(e, t.containerInfo);
  }
  function Rc(e, t, n, r, i) {
    return Qn(), Ou(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
  }
  var ro = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nc(e, t, n) {
    var r = t.pendingProps,
      i = we.current,
      s = !1,
      f = (t.flags & 128) !== 0,
      p;
    if (
      ((p = f) ||
        (p = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      p
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      pe(we, i & 1),
      e === null)
    )
      return (
        Lu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((f = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (f = { mode: "hidden", children: f }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = f))
                  : (s = si(f, r, 0, null)),
                (e = Cn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = lo(n)),
                (t.memoizedState = ro),
                e)
              : io(t, f))
      );
    if (((i = e.memoizedState), i !== null && ((p = i.dehydrated), p !== null)))
      return bp(e, t, f, r, p, i, n);
    if (s) {
      (s = r.fallback), (f = t.mode), (i = e.child), (p = i.sibling);
      var g = { mode: "hidden", children: r.children };
      return (
        !(f & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = g),
            (t.deletions = null))
          : ((r = ln(i, g)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        p !== null ? (s = ln(p, s)) : ((s = Cn(s, f, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? lo(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (s.memoizedState = f),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = ro),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = ln(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function io(e, t) {
    return (
      (t = si({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xl(e, t, n, r) {
    return (
      r !== null && Ou(r),
      Kn(t, e.child, null, n),
      (e = io(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bp(e, t, n, r, i, s, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = bu(Error(o(422)))), Xl(e, t, f, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (i = t.mode),
            (r = si({ mode: "visible", children: r.children }, i, 0, null)),
            (s = Cn(s, i, f, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            t.mode & 1 && Kn(t, e.child, null, f),
            (t.child.memoizedState = lo(f)),
            (t.memoizedState = ro),
            s);
    if (!(t.mode & 1)) return Xl(e, t, f, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (s = Error(o(419))), (r = bu(s, r, void 0)), Xl(e, t, f, r)
      );
    }
    if (((p = (f & e.childLanes) !== 0), Qe || p)) {
      if (((r = Le), r !== null)) {
        switch (f & -f) {
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
        (i = i & (r.suspendedLanes | f) ? 0 : i),
          i !== 0 &&
            i !== s.retryLane &&
            ((s.retryLane = i), Ot(e, i), gt(r, e, i, -1));
      }
      return _o(), (r = bu(Error(o(421)))), Xl(e, t, f, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = dh.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (be = Yt(i.nextSibling)),
        (Ze = t),
        (ve = !0),
        (pt = null),
        e !== null &&
          ((lt[it++] = Tt),
          (lt[it++] = Lt),
          (lt[it++] = mn),
          (Tt = e.id),
          (Lt = e.overflow),
          (mn = t)),
        (t = io(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mu(e.return, t, n);
  }
  function uo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function Tc(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((Ue(e, t, r.children, n), (r = we.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
          else if (e.tag === 19) jc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((pe(we, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Hl(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            uo(t, !1, i, n, s);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Hl(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          uo(t, !0, n, null, s);
          break;
        case "together":
          uo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ql(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = ln(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function eh(e, t, n) {
    switch (t.tag) {
      case 3:
        Pc(t), Qn();
        break;
      case 5:
        Va(t);
        break;
      case 1:
        Ve(t.type) && Ol(t);
        break;
      case 4:
        $u(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        pe(Al, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (pe(we, we.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Nc(e, t, n)
              : (pe(we, we.current & 1),
                (e = Dt(e, t, n)),
                e !== null ? e.sibling : null);
        pe(we, we.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Tc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          pe(we, we.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), kc(e, t, n);
    }
    return Dt(e, t, n);
  }
  var Lc, oo, Oc, zc;
  (Lc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (oo = function () {}),
    (Oc = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), vn(kt.current);
        var s = null;
        switch (n) {
          case "input":
            (i = Mi(e, i)), (r = Mi(e, r)), (s = []);
            break;
          case "select":
            (i = V({}, i, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (s = []);
            break;
          case "textarea":
            (i = $i(e, i)), (r = $i(e, r)), (s = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = jl);
        }
        Bi(n, r);
        var f;
        n = null;
        for (C in i)
          if (!r.hasOwnProperty(C) && i.hasOwnProperty(C) && i[C] != null)
            if (C === "style") {
              var p = i[C];
              for (f in p) p.hasOwnProperty(f) && (n || (n = {}), (n[f] = ""));
            } else
              C !== "dangerouslySetInnerHTML" &&
                C !== "children" &&
                C !== "suppressContentEditableWarning" &&
                C !== "suppressHydrationWarning" &&
                C !== "autoFocus" &&
                (c.hasOwnProperty(C)
                  ? s || (s = [])
                  : (s = s || []).push(C, null));
        for (C in r) {
          var g = r[C];
          if (
            ((p = i != null ? i[C] : void 0),
            r.hasOwnProperty(C) && g !== p && (g != null || p != null))
          )
            if (C === "style")
              if (p) {
                for (f in p)
                  !p.hasOwnProperty(f) ||
                    (g && g.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ""));
                for (f in g)
                  g.hasOwnProperty(f) &&
                    p[f] !== g[f] &&
                    (n || (n = {}), (n[f] = g[f]));
              } else n || (s || (s = []), s.push(C, n)), (n = g);
            else
              C === "dangerouslySetInnerHTML"
                ? ((g = g ? g.__html : void 0),
                  (p = p ? p.__html : void 0),
                  g != null && p !== g && (s = s || []).push(C, g))
                : C === "children"
                  ? (typeof g != "string" && typeof g != "number") ||
                    (s = s || []).push(C, "" + g)
                  : C !== "suppressContentEditableWarning" &&
                    C !== "suppressHydrationWarning" &&
                    (c.hasOwnProperty(C)
                      ? (g != null && C === "onScroll" && me("scroll", e),
                        s || p === g || (s = []))
                      : (s = s || []).push(C, g));
        }
        n && (s = s || []).push("style", n);
        var C = s;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (zc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Ur(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function th(e, t, n) {
    var r = t.pendingProps;
    switch ((ju(t), t.tag)) {
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
        return Ae(t), null;
      case 1:
        return Ve(t.type) && Ll(), Ae(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Xn(),
          ye(We),
          ye(Me),
          Hu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ml(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), pt !== null && (wo(pt), (pt = null)))),
          oo(e, t),
          Ae(t),
          null
        );
      case 5:
        Uu(t);
        var i = vn(Ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Oc(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Ae(t), null;
          }
          if (((e = vn(kt.current)), Ml(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[_t] = t), (r[Tr] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                me("cancel", r), me("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rr.length; i++) me(Rr[i], r);
                break;
              case "source":
                me("error", r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", r), me("load", r);
                break;
              case "details":
                me("toggle", r);
                break;
              case "input":
                ps(r, s), me("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  me("invalid", r);
                break;
              case "textarea":
                ys(r, s), me("invalid", r);
            }
            Bi(n, s), (i = null);
            for (var f in s)
              if (s.hasOwnProperty(f)) {
                var p = s[f];
                f === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (s.suppressHydrationWarning !== !0 &&
                        Nl(r.textContent, p, e),
                      (i = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (s.suppressHydrationWarning !== !0 &&
                        Nl(r.textContent, p, e),
                      (i = ["children", "" + p]))
                  : c.hasOwnProperty(f) &&
                    p != null &&
                    f === "onScroll" &&
                    me("scroll", r);
              }
            switch (n) {
              case "input":
                il(r), ms(r, s, !0);
                break;
              case "textarea":
                il(r), vs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = jl);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (f = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ws(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = f.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = f.createElement(n, { is: r.is }))
                    : ((e = f.createElement(n)),
                      n === "select" &&
                        ((f = e),
                        r.multiple
                          ? (f.multiple = !0)
                          : r.size && (f.size = r.size)))
                : (e = f.createElementNS(e, n)),
              (e[_t] = t),
              (e[Tr] = r),
              Lc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = Hi(n, r)), n)) {
                case "dialog":
                  me("cancel", e), me("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  me("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Rr.length; i++) me(Rr[i], e);
                  i = r;
                  break;
                case "source":
                  me("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  me("error", e), me("load", e), (i = r);
                  break;
                case "details":
                  me("toggle", e), (i = r);
                  break;
                case "input":
                  ps(e, r), (i = Mi(e, r)), me("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = V({}, r, { value: void 0 })),
                    me("invalid", e);
                  break;
                case "textarea":
                  ys(e, r), (i = $i(e, r)), me("invalid", e);
                  break;
                default:
                  i = r;
              }
              Bi(n, i), (p = i);
              for (s in p)
                if (p.hasOwnProperty(s)) {
                  var g = p[s];
                  s === "style"
                    ? _s(e, g)
                    : s === "dangerouslySetInnerHTML"
                      ? ((g = g ? g.__html : void 0), g != null && Ss(e, g))
                      : s === "children"
                        ? typeof g == "string"
                          ? (n !== "textarea" || g !== "") && sr(e, g)
                          : typeof g == "number" && sr(e, "" + g)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (c.hasOwnProperty(s)
                            ? g != null && s === "onScroll" && me("scroll", e)
                            : g != null && F(e, s, g, f));
                }
              switch (n) {
                case "input":
                  il(e), ms(e, r, !1);
                  break;
                case "textarea":
                  il(e), vs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Tn(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        Tn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = jl);
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
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null) zc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = vn(Ir.current)), vn(kt.current), Ml(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[_t] = t),
              (s = r.nodeValue !== n) && ((e = Ze), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Nl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Nl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[_t] = t),
              (t.stateNode = r);
        }
        return Ae(t), null;
      case 13:
        if (
          (ye(we),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && be !== null && t.mode & 1 && !(t.flags & 128))
            Ma(), Qn(), (t.flags |= 98560), (s = !1);
          else if (((s = Ml(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[_t] = t;
            } else
              Qn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ae(t), (s = !1);
          } else pt !== null && (wo(pt), (pt = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || we.current & 1 ? je === 0 && (je = 3) : _o())),
            t.updateQueue !== null && (t.flags |= 4),
            Ae(t),
            null);
      case 4:
        return (
          Xn(),
          oo(e, t),
          e === null && Nr(t.stateNode.containerInfo),
          Ae(t),
          null
        );
      case 10:
        return Iu(t.type._context), Ae(t), null;
      case 17:
        return Ve(t.type) && Ll(), Ae(t), null;
      case 19:
        if ((ye(we), (s = t.memoizedState), s === null)) return Ae(t), null;
        if (((r = (t.flags & 128) !== 0), (f = s.rendering), f === null))
          if (r) Ur(s, !1);
          else {
            if (je !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = Hl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Ur(s, !1),
                      r = f.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (f = s.alternate),
                      f === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = f.childLanes),
                          (s.lanes = f.lanes),
                          (s.child = f.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = f.memoizedProps),
                          (s.memoizedState = f.memoizedState),
                          (s.updateQueue = f.updateQueue),
                          (s.type = f.type),
                          (e = f.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return pe(we, (we.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Ce() > bn &&
              ((t.flags |= 128), (r = !0), Ur(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Hl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ur(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !f.alternate &&
                  !ve)
              )
                return Ae(t), null;
            } else
              2 * Ce() - s.renderingStartTime > bn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Ur(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = s.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (s.last = f));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = we.current),
            pe(we, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ae(t), null);
      case 22:
      case 23:
        return (
          xo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? et & 1073741824 &&
              (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ae(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function nh(e, t) {
    switch ((ju(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && Ll(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xn(),
          ye(We),
          ye(Me),
          Hu(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Uu(t), null;
      case 13:
        if (
          (ye(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Qn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ye(we), null;
      case 4:
        return Xn(), null;
      case 10:
        return Iu(t.type._context), null;
      case 22:
      case 23:
        return xo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jl = !1,
    $e = !1,
    rh = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function Jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
        }
      else n.current = null;
  }
  function so(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var Dc = !1;
  function lh(e, t) {
    if (((Su = gl), (e = da()), du(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              p = -1,
              g = -1,
              C = 0,
              D = 0,
              M = e,
              O = null;
            t: for (;;) {
              for (
                var B;
                M !== n || (i !== 0 && M.nodeType !== 3) || (p = f + i),
                  M !== s || (r !== 0 && M.nodeType !== 3) || (g = f + r),
                  M.nodeType === 3 && (f += M.nodeValue.length),
                  (B = M.firstChild) !== null;

              )
                (O = M), (M = B);
              for (;;) {
                if (M === e) break t;
                if (
                  (O === n && ++C === i && (p = f),
                  O === s && ++D === r && (g = f),
                  (B = M.nextSibling) !== null)
                )
                  break;
                (M = O), (O = M.parentNode);
              }
              M = B;
            }
            n = p === -1 || g === -1 ? null : { start: p, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      xu = { focusedElem: e, selectionRange: n }, gl = !1, H = t;
      H !== null;

    )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (H = e);
      else
        for (; H !== null; ) {
          t = H;
          try {
            var K = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var Y = K.memoizedProps,
                      Ee = K.memoizedState,
                      x = t.stateNode,
                      v = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : ht(t.type, Y),
                        Ee,
                      );
                    x.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var _ = t.stateNode.containerInfo;
                  _.nodeType === 1
                    ? (_.textContent = "")
                    : _.nodeType === 9 &&
                      _.documentElement &&
                      _.removeChild(_.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (A) {
            ke(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (H = e);
            break;
          }
          H = t.return;
        }
    return (K = Dc), (Dc = !1), K;
  }
  function Br(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          (i.destroy = void 0), s !== void 0 && so(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Zl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
  function ao(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ic(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ic(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[_t],
          delete t[Tr],
          delete t[Eu],
          delete t[Up],
          delete t[Bp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Mc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function co(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = jl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (co(e, t, n), e = e.sibling; e !== null; )
        co(e, t, n), (e = e.sibling);
  }
  function fo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (fo(e, t, n), e = e.sibling; e !== null; )
        fo(e, t, n), (e = e.sibling);
  }
  var ze = null,
    mt = !1;
  function bt(e, t, n) {
    for (n = n.child; n !== null; ) Ac(e, t, n), (n = n.sibling);
  }
  function Ac(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(fl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || Jn(n, t);
      case 6:
        var r = ze,
          i = mt;
        (ze = null),
          bt(e, t, n),
          (ze = r),
          (mt = i),
          ze !== null &&
            (mt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (mt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? Cu(e.parentNode, n)
                : e.nodeType === 1 && Cu(e, n),
              wr(e))
            : Cu(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (i = mt),
          (ze = n.stateNode.containerInfo),
          (mt = !0),
          bt(e, t, n),
          (ze = r),
          (mt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var s = i,
              f = s.destroy;
            (s = s.tag),
              f !== void 0 && (s & 2 || s & 4) && so(n, t, f),
              (i = i.next);
          } while (i !== r);
        }
        bt(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (Jn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            ke(n, t, p);
          }
        bt(e, t, n);
        break;
      case 21:
        bt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), bt(e, t, n), ($e = r))
          : bt(e, t, n);
        break;
      default:
        bt(e, t, n);
    }
  }
  function $c(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new rh()),
        t.forEach(function (r) {
          var i = ph.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e,
            f = t,
            p = f;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (ze = p.stateNode), (mt = !1);
                break e;
              case 3:
                (ze = p.stateNode.containerInfo), (mt = !0);
                break e;
              case 4:
                (ze = p.stateNode.containerInfo), (mt = !0);
                break e;
            }
            p = p.return;
          }
          if (ze === null) throw Error(o(160));
          Ac(s, f, i), (ze = null), (mt = !1);
          var g = i.alternate;
          g !== null && (g.return = null), (i.return = null);
        } catch (C) {
          ke(i, t, C);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Uc(t, e), (t = t.sibling);
  }
  function Uc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yt(t, e), Et(e), r & 4)) {
          try {
            Br(3, e, e.return), Zl(3, e);
          } catch (Y) {
            ke(e, e.return, Y);
          }
          try {
            Br(5, e, e.return);
          } catch (Y) {
            ke(e, e.return, Y);
          }
        }
        break;
      case 1:
        yt(t, e), Et(e), r & 512 && n !== null && Jn(n, n.return);
        break;
      case 5:
        if (
          (yt(t, e),
          Et(e),
          r & 512 && n !== null && Jn(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            sr(i, "");
          } catch (Y) {
            ke(e, e.return, Y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            f = n !== null ? n.memoizedProps : s,
            p = e.type,
            g = e.updateQueue;
          if (((e.updateQueue = null), g !== null))
            try {
              p === "input" && s.type === "radio" && s.name != null && hs(i, s),
                Hi(p, f);
              var C = Hi(p, s);
              for (f = 0; f < g.length; f += 2) {
                var D = g[f],
                  M = g[f + 1];
                D === "style"
                  ? _s(i, M)
                  : D === "dangerouslySetInnerHTML"
                    ? Ss(i, M)
                    : D === "children"
                      ? sr(i, M)
                      : F(i, D, M, C);
              }
              switch (p) {
                case "input":
                  Fi(i, s);
                  break;
                case "textarea":
                  gs(i, s);
                  break;
                case "select":
                  var O = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var B = s.value;
                  B != null
                    ? Tn(i, !!s.multiple, B, !1)
                    : O !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Tn(i, !!s.multiple, s.defaultValue, !0)
                        : Tn(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[Tr] = s;
            } catch (Y) {
              ke(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((yt(t, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (i = e.stateNode), (s = e.memoizedProps);
          try {
            i.nodeValue = s;
          } catch (Y) {
            ke(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          (yt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            wr(t.containerInfo);
          } catch (Y) {
            ke(e, e.return, Y);
          }
        break;
      case 4:
        yt(t, e), Et(e);
        break;
      case 13:
        yt(t, e),
          Et(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (mo = Ce())),
          r & 4 && $c(e);
        break;
      case 22:
        if (
          ((D = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (C = $e) || D), yt(t, e), ($e = C)) : yt(t, e),
          Et(e),
          r & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null),
            (e.stateNode.isHidden = C) && !D && e.mode & 1)
          )
            for (H = e, D = e.child; D !== null; ) {
              for (M = H = D; H !== null; ) {
                switch (((O = H), (B = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Br(4, O, O.return);
                    break;
                  case 1:
                    Jn(O, O.return);
                    var K = O.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      (r = O), (n = O.return);
                      try {
                        (t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (Y) {
                        ke(r, n, Y);
                      }
                    }
                    break;
                  case 5:
                    Jn(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Wc(M);
                      continue;
                    }
                }
                B !== null ? ((B.return = O), (H = B)) : Wc(M);
              }
              D = D.sibling;
            }
          e: for (D = null, M = e; ; ) {
            if (M.tag === 5) {
              if (D === null) {
                D = M;
                try {
                  (i = M.stateNode),
                    C
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((p = M.stateNode),
                        (g = M.memoizedProps.style),
                        (f =
                          g != null && g.hasOwnProperty("display")
                            ? g.display
                            : null),
                        (p.style.display = xs("display", f)));
                } catch (Y) {
                  ke(e, e.return, Y);
                }
              }
            } else if (M.tag === 6) {
              if (D === null)
                try {
                  M.stateNode.nodeValue = C ? "" : M.memoizedProps;
                } catch (Y) {
                  ke(e, e.return, Y);
                }
            } else if (
              ((M.tag !== 22 && M.tag !== 23) ||
                M.memoizedState === null ||
                M === e) &&
              M.child !== null
            ) {
              (M.child.return = M), (M = M.child);
              continue;
            }
            if (M === e) break e;
            for (; M.sibling === null; ) {
              if (M.return === null || M.return === e) break e;
              D === M && (D = null), (M = M.return);
            }
            D === M && (D = null),
              (M.sibling.return = M.return),
              (M = M.sibling);
          }
        }
        break;
      case 19:
        yt(t, e), Et(e), r & 4 && $c(e);
        break;
      case 21:
        break;
      default:
        yt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Mc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (sr(i, ""), (r.flags &= -33));
            var s = Fc(e);
            fo(e, s, i);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo,
              p = Fc(e);
            co(e, p, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        ke(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ih(e, t, n) {
    (H = e), Bc(e);
  }
  function Bc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var i = H,
        s = i.child;
      if (i.tag === 22 && r) {
        var f = i.memoizedState !== null || Jl;
        if (!f) {
          var p = i.alternate,
            g = (p !== null && p.memoizedState !== null) || $e;
          p = Jl;
          var C = $e;
          if (((Jl = f), ($e = g) && !C))
            for (H = i; H !== null; )
              (f = H),
                (g = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? Vc(i)
                  : g !== null
                    ? ((g.return = f), (H = g))
                    : Vc(i);
          for (; s !== null; ) (H = s), Bc(s), (s = s.sibling);
          (H = i), (Jl = p), ($e = C);
        }
        Hc(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (H = s)) : Hc(e);
    }
  }
  function Hc(e) {
    for (; H !== null; ) {
      var t = H;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || Zl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && Wa(t, s, r);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Wa(t, f, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var C = t.alternate;
                  if (C !== null) {
                    var D = C.memoizedState;
                    if (D !== null) {
                      var M = D.dehydrated;
                      M !== null && wr(M);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          $e || (t.flags & 512 && ao(t));
        } catch (O) {
          ke(t, t.return, O);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function Wc(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function Vc(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zl(4, t);
            } catch (g) {
              ke(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                ke(t, i, g);
              }
            }
            var s = t.return;
            try {
              ao(t);
            } catch (g) {
              ke(t, s, g);
            }
            break;
          case 5:
            var f = t.return;
            try {
              ao(t);
            } catch (g) {
              ke(t, f, g);
            }
        }
      } catch (g) {
        ke(t, t.return, g);
      }
      if (t === e) {
        H = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (H = p);
        break;
      }
      H = t.return;
    }
  }
  var uh = Math.ceil,
    bl = Q.ReactCurrentDispatcher,
    po = Q.ReactCurrentOwner,
    st = Q.ReactCurrentBatchConfig,
    ue = 0,
    Le = null,
    Re = null,
    De = 0,
    et = 0,
    Zn = Gt(0),
    je = 0,
    Hr = null,
    Sn = 0,
    ei = 0,
    ho = 0,
    Wr = null,
    Ke = null,
    mo = 0,
    bn = 1 / 0,
    It = null,
    ti = !1,
    yo = null,
    en = null,
    ni = !1,
    tn = null,
    ri = 0,
    Vr = 0,
    go = null,
    li = -1,
    ii = 0;
  function Be() {
    return ue & 6 ? Ce() : li !== -1 ? li : (li = Ce());
  }
  function nn(e) {
    return e.mode & 1
      ? ue & 2 && De !== 0
        ? De & -De
        : Wp.transition !== null
          ? (ii === 0 && (ii = Fs()), ii)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ks(e.type))),
            e)
      : 1;
  }
  function gt(e, t, n, r) {
    if (50 < Vr) throw ((Vr = 0), (go = null), Error(o(185)));
    hr(e, n, r),
      (!(ue & 2) || e !== Le) &&
        (e === Le && (!(ue & 2) && (ei |= n), je === 4 && rn(e, De)),
        Ye(e, r),
        n === 1 &&
          ue === 0 &&
          !(t.mode & 1) &&
          ((bn = Ce() + 500), zl && qt()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    Wd(e, t);
    var r = hl(e, e === Le ? De : 0);
    if (r === 0)
      n !== null && Ds(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ds(n), t === 1))
        e.tag === 0 ? Hp(Kc.bind(null, e)) : La(Kc.bind(null, e)),
          Ap(function () {
            !(ue & 6) && qt();
          }),
          (n = null);
      else {
        switch (As(r)) {
          case 1:
            n = Xi;
            break;
          case 4:
            n = Is;
            break;
          case 16:
            n = cl;
            break;
          case 536870912:
            n = Ms;
            break;
          default:
            n = cl;
        }
        n = ef(n, Qc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Qc(e, t) {
    if (((li = -1), (ii = 0), ue & 6)) throw Error(o(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = hl(e, e === Le ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ui(e, r);
    else {
      t = r;
      var i = ue;
      ue |= 2;
      var s = Gc();
      (Le !== e || De !== t) && ((It = null), (bn = Ce() + 500), _n(e, t));
      do
        try {
          ah();
          break;
        } catch (p) {
          Yc(e, p);
        }
      while (!0);
      Du(),
        (bl.current = s),
        (ue = i),
        Re !== null ? (t = 0) : ((Le = null), (De = 0), (t = je));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = qi(e)), i !== 0 && ((r = i), (t = vo(e, i)))),
        t === 1)
      )
        throw ((n = Hr), _n(e, 0), rn(e, r), Ye(e, Ce()), n);
      if (t === 6) rn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !oh(i) &&
            ((t = ui(e, r)),
            t === 2 && ((s = qi(e)), s !== 0 && ((r = s), (t = vo(e, s)))),
            t === 1))
        )
          throw ((n = Hr), _n(e, 0), rn(e, r), Ye(e, Ce()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            kn(e, Ke, It);
            break;
          case 3:
            if (
              (rn(e, r),
              (r & 130023424) === r && ((t = mo + 500 - Ce()), 10 < t))
            ) {
              if (hl(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Be(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = ku(kn.bind(null, e, Ke, It), t);
              break;
            }
            kn(e, Ke, It);
            break;
          case 4:
            if ((rn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var f = 31 - ft(r);
              (s = 1 << f), (f = t[f]), f > i && (i = f), (r &= ~s);
            }
            if (
              ((r = i),
              (r = Ce() - r),
              (r =
                (120 > r
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
                            : 1960 * uh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ku(kn.bind(null, e, Ke, It), r);
              break;
            }
            kn(e, Ke, It);
            break;
          case 5:
            kn(e, Ke, It);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ye(e, Ce()), e.callbackNode === n ? Qc.bind(null, e) : null;
  }
  function vo(e, t) {
    var n = Wr;
    return (
      e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
      (e = ui(e, t)),
      e !== 2 && ((t = Ke), (Ke = n), t !== null && wo(t)),
      e
    );
  }
  function wo(e) {
    Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
  }
  function oh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!dt(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function rn(e, t) {
    for (
      t &= ~ho,
        t &= ~ei,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Kc(e) {
    if (ue & 6) throw Error(o(327));
    er();
    var t = hl(e, 0);
    if (!(t & 1)) return Ye(e, Ce()), null;
    var n = ui(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = qi(e);
      r !== 0 && ((t = r), (n = vo(e, r)));
    }
    if (n === 1) throw ((n = Hr), _n(e, 0), rn(e, t), Ye(e, Ce()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kn(e, Ke, It),
      Ye(e, Ce()),
      null
    );
  }
  function So(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      (ue = n), ue === 0 && ((bn = Ce() + 500), zl && qt());
    }
  }
  function xn(e) {
    tn !== null && tn.tag === 0 && !(ue & 6) && er();
    var t = ue;
    ue |= 1;
    var n = st.transition,
      r = fe;
    try {
      if (((st.transition = null), (fe = 1), e)) return e();
    } finally {
      (fe = r), (st.transition = n), (ue = t), !(ue & 6) && qt();
    }
  }
  function xo() {
    (et = Zn.current), ye(Zn);
  }
  function _n(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), Re !== null))
      for (n = Re.return; n !== null; ) {
        var r = n;
        switch ((ju(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Ll();
            break;
          case 3:
            Xn(), ye(We), ye(Me), Hu();
            break;
          case 5:
            Uu(r);
            break;
          case 4:
            Xn();
            break;
          case 13:
            ye(we);
            break;
          case 19:
            ye(we);
            break;
          case 10:
            Iu(r.type._context);
            break;
          case 22:
          case 23:
            xo();
        }
        n = n.return;
      }
    if (
      ((Le = e),
      (Re = e = ln(e.current, null)),
      (De = et = t),
      (je = 0),
      (Hr = null),
      (ho = ei = Sn = 0),
      (Ke = Wr = null),
      gn !== null)
    ) {
      for (t = 0; t < gn.length; t++)
        if (((n = gn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var f = s.next;
            (s.next = i), (r.next = f);
          }
          n.pending = r;
        }
      gn = null;
    }
    return e;
  }
  function Yc(e, t) {
    do {
      var n = Re;
      try {
        if ((Du(), (Wl.current = Yl), Vl)) {
          for (var r = Se.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Vl = !1;
        }
        if (
          ((wn = 0),
          (Te = Ne = Se = null),
          (Mr = !1),
          (Fr = 0),
          (po.current = null),
          n === null || n.return === null)
        ) {
          (je = 1), (Hr = t), (Re = null);
          break;
        }
        e: {
          var s = e,
            f = n.return,
            p = n,
            g = t;
          if (
            ((t = De),
            (p.flags |= 32768),
            g !== null && typeof g == "object" && typeof g.then == "function")
          ) {
            var C = g,
              D = p,
              M = D.tag;
            if (!(D.mode & 1) && (M === 0 || M === 11 || M === 15)) {
              var O = D.alternate;
              O
                ? ((D.updateQueue = O.updateQueue),
                  (D.memoizedState = O.memoizedState),
                  (D.lanes = O.lanes))
                : ((D.updateQueue = null), (D.memoizedState = null));
            }
            var B = vc(f);
            if (B !== null) {
              (B.flags &= -257),
                wc(B, f, p, s, t),
                B.mode & 1 && gc(s, C, t),
                (t = B),
                (g = C);
              var K = t.updateQueue;
              if (K === null) {
                var Y = new Set();
                Y.add(g), (t.updateQueue = Y);
              } else K.add(g);
              break e;
            } else {
              if (!(t & 1)) {
                gc(s, C, t), _o();
                break e;
              }
              g = Error(o(426));
            }
          } else if (ve && p.mode & 1) {
            var Ee = vc(f);
            if (Ee !== null) {
              !(Ee.flags & 65536) && (Ee.flags |= 256),
                wc(Ee, f, p, s, t),
                Ou(qn(g, p));
              break e;
            }
          }
          (s = g = qn(g, p)),
            je !== 4 && (je = 2),
            Wr === null ? (Wr = [s]) : Wr.push(s),
            (s = f);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = mc(s, g, t);
                Ha(s, x);
                break e;
              case 1:
                p = g;
                var v = s.type,
                  _ = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof v.getDerivedStateFromError == "function" ||
                    (_ !== null &&
                      typeof _.componentDidCatch == "function" &&
                      (en === null || !en.has(_))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var A = yc(s, p, t);
                  Ha(s, A);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        qc(n);
      } catch (G) {
        (t = G), Re === n && n !== null && (Re = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gc() {
    var e = bl.current;
    return (bl.current = Yl), e === null ? Yl : e;
  }
  function _o() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
      Le === null || (!(Sn & 268435455) && !(ei & 268435455)) || rn(Le, De);
  }
  function ui(e, t) {
    var n = ue;
    ue |= 2;
    var r = Gc();
    (Le !== e || De !== t) && ((It = null), _n(e, t));
    do
      try {
        sh();
        break;
      } catch (i) {
        Yc(e, i);
      }
    while (!0);
    if ((Du(), (ue = n), (bl.current = r), Re !== null)) throw Error(o(261));
    return (Le = null), (De = 0), je;
  }
  function sh() {
    for (; Re !== null; ) Xc(Re);
  }
  function ah() {
    for (; Re !== null && !Dd(); ) Xc(Re);
  }
  function Xc(e) {
    var t = bc(e.alternate, e, et);
    (e.memoizedProps = e.pendingProps),
      t === null ? qc(e) : (Re = t),
      (po.current = null);
  }
  function qc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = nh(n, t)), n !== null)) {
          (n.flags &= 32767), (Re = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (je = 6), (Re = null);
          return;
        }
      } else if (((n = th(n, t, et)), n !== null)) {
        Re = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function kn(e, t, n) {
    var r = fe,
      i = st.transition;
    try {
      (st.transition = null), (fe = 1), ch(e, t, n, r);
    } finally {
      (st.transition = i), (fe = r);
    }
    return null;
  }
  function ch(e, t, n, r) {
    do er();
    while (tn !== null);
    if (ue & 6) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (Vd(e, s),
      e === Le && ((Re = Le = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ni ||
        ((ni = !0),
        ef(cl, function () {
          return er(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = st.transition), (st.transition = null);
      var f = fe;
      fe = 1;
      var p = ue;
      (ue |= 4),
        (po.current = null),
        lh(e, n),
        Uc(n, e),
        Tp(xu),
        (gl = !!Su),
        (xu = Su = null),
        (e.current = n),
        ih(n),
        Id(),
        (ue = p),
        (fe = f),
        (st.transition = s);
    } else e.current = n;
    if (
      (ni && ((ni = !1), (tn = e), (ri = i)),
      (s = e.pendingLanes),
      s === 0 && (en = null),
      Ad(n.stateNode),
      Ye(e, Ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ti) throw ((ti = !1), (e = yo), (yo = null), e);
    return (
      ri & 1 && e.tag !== 0 && er(),
      (s = e.pendingLanes),
      s & 1 ? (e === go ? Vr++ : ((Vr = 0), (go = e))) : (Vr = 0),
      qt(),
      null
    );
  }
  function er() {
    if (tn !== null) {
      var e = As(ri),
        t = st.transition,
        n = fe;
      try {
        if (((st.transition = null), (fe = 16 > e ? 16 : e), tn === null))
          var r = !1;
        else {
          if (((e = tn), (tn = null), (ri = 0), ue & 6)) throw Error(o(331));
          var i = ue;
          for (ue |= 4, H = e.current; H !== null; ) {
            var s = H,
              f = s.child;
            if (H.flags & 16) {
              var p = s.deletions;
              if (p !== null) {
                for (var g = 0; g < p.length; g++) {
                  var C = p[g];
                  for (H = C; H !== null; ) {
                    var D = H;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Br(8, D, s);
                    }
                    var M = D.child;
                    if (M !== null) (M.return = D), (H = M);
                    else
                      for (; H !== null; ) {
                        D = H;
                        var O = D.sibling,
                          B = D.return;
                        if ((Ic(D), D === C)) {
                          H = null;
                          break;
                        }
                        if (O !== null) {
                          (O.return = B), (H = O);
                          break;
                        }
                        H = B;
                      }
                  }
                }
                var K = s.alternate;
                if (K !== null) {
                  var Y = K.child;
                  if (Y !== null) {
                    K.child = null;
                    do {
                      var Ee = Y.sibling;
                      (Y.sibling = null), (Y = Ee);
                    } while (Y !== null);
                  }
                }
                H = s;
              }
            }
            if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (H = f);
            else
              e: for (; H !== null; ) {
                if (((s = H), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(9, s, s.return);
                  }
                var x = s.sibling;
                if (x !== null) {
                  (x.return = s.return), (H = x);
                  break e;
                }
                H = s.return;
              }
          }
          var v = e.current;
          for (H = v; H !== null; ) {
            f = H;
            var _ = f.child;
            if (f.subtreeFlags & 2064 && _ !== null) (_.return = f), (H = _);
            else
              e: for (f = v; H !== null; ) {
                if (((p = H), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zl(9, p);
                    }
                  } catch (G) {
                    ke(p, p.return, G);
                  }
                if (p === f) {
                  H = null;
                  break e;
                }
                var A = p.sibling;
                if (A !== null) {
                  (A.return = p.return), (H = A);
                  break e;
                }
                H = p.return;
              }
          }
          if (
            ((ue = i),
            qt(),
            xt && typeof xt.onPostCommitFiberRoot == "function")
          )
            try {
              xt.onPostCommitFiberRoot(fl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (fe = n), (st.transition = t);
      }
    }
    return !1;
  }
  function Jc(e, t, n) {
    (t = qn(n, t)),
      (t = mc(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Be()),
      e !== null && (hr(e, 1, t), Ye(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) Jc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (en === null || !en.has(r)))
          ) {
            (e = qn(n, e)),
              (e = yc(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = Be()),
              t !== null && (hr(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function fh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Le === e &&
        (De & n) === n &&
        (je === 4 || (je === 3 && (De & 130023424) === De && 500 > Ce() - mo)
          ? _n(e, 0)
          : (ho |= n)),
      Ye(e, t);
  }
  function Zc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = pl), (pl <<= 1), !(pl & 130023424) && (pl = 4194304))
        : (t = 1));
    var n = Be();
    (e = Ot(e, t)), e !== null && (hr(e, t, n), Ye(e, n));
  }
  function dh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Zc(e, n);
  }
  function ph(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), Zc(e, n);
  }
  var bc;
  bc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) Qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), eh(e, t, n);
        Qe = !!(e.flags & 131072);
      }
    else (Qe = !1), ve && t.flags & 1048576 && Oa(t, Il, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ql(e, t), (e = t.pendingProps);
        var i = Hn(t, Me.current);
        Gn(t, n), (i = Qu(null, t, r, e, i, n));
        var s = Ku();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((s = !0), Ol(t)) : (s = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Au(t),
              (i.updater = Gl),
              (t.stateNode = i),
              (i._reactInternals = t),
              Zu(t, r, e, n),
              (t = no(null, t, r, !0, s, n)))
            : ((t.tag = 0), ve && s && Nu(t), Ue(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ql(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = mh(r)),
            (e = ht(r, e)),
            i)
          ) {
            case 0:
              t = to(null, t, r, e, n);
              break e;
            case 1:
              t = Ec(null, t, r, e, n);
              break e;
            case 11:
              t = Sc(null, t, r, e, n);
              break e;
            case 14:
              t = xc(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(o(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : ht(r, i)),
          to(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : ht(r, i)),
          Ec(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Pc(t), e === null)) throw Error(o(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            Ba(e, t),
            Bl(t, r, null, n);
          var f = t.memoizedState;
          if (((r = f.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (i = qn(Error(o(423)), t)), (t = Rc(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = qn(Error(o(424)), t)), (t = Rc(e, t, r, n, i));
              break e;
            } else
              for (
                be = Yt(t.stateNode.containerInfo.firstChild),
                  Ze = t,
                  ve = !0,
                  pt = null,
                  n = $a(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Qn(), r === i)) {
              t = Dt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Va(t),
          e === null && Lu(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (f = i.children),
          _u(r, i) ? (f = null) : s !== null && _u(r, s) && (t.flags |= 32),
          Cc(e, t),
          Ue(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && Lu(t), null;
      case 13:
        return Nc(e, t, n);
      case 4:
        return (
          $u(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Kn(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : ht(r, i)),
          Sc(e, t, r, i, n)
        );
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (f = i.value),
            pe(Al, r._currentValue),
            (r._currentValue = f),
            s !== null)
          )
            if (dt(s.value, f)) {
              if (s.children === i.children && !We.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var p = s.dependencies;
                if (p !== null) {
                  f = s.child;
                  for (var g = p.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (s.tag === 1) {
                        (g = zt(-1, n & -n)), (g.tag = 2);
                        var C = s.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var D = C.pending;
                          D === null
                            ? (g.next = g)
                            : ((g.next = D.next), (D.next = g)),
                            (C.pending = g);
                        }
                      }
                      (s.lanes |= n),
                        (g = s.alternate),
                        g !== null && (g.lanes |= n),
                        Mu(s.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    g = g.next;
                  }
                } else if (s.tag === 10) f = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((f = s.return), f === null)) throw Error(o(341));
                  (f.lanes |= n),
                    (p = f.alternate),
                    p !== null && (p.lanes |= n),
                    Mu(f, n, t),
                    (f = s.sibling);
                } else f = s.child;
                if (f !== null) f.return = s;
                else
                  for (f = s; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((s = f.sibling), s !== null)) {
                      (s.return = f.return), (f = s);
                      break;
                    }
                    f = f.return;
                  }
                s = f;
              }
          Ue(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Gn(t, n),
          (i = ut(i)),
          (r = r(i)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = ht(r, t.pendingProps)),
          (i = ht(r.type, i)),
          xc(e, t, r, i, n)
        );
      case 15:
        return _c(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : ht(r, i)),
          ql(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), Ol(t)) : (e = !1),
          Gn(t, n),
          pc(t, r, i),
          Zu(t, r, i, n),
          no(null, t, r, !0, e, n)
        );
      case 19:
        return Tc(e, t, n);
      case 22:
        return kc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function ef(e, t) {
    return zs(e, t);
  }
  function hh(e, t, n, r) {
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
  function at(e, t, n, r) {
    return new hh(e, t, n, r);
  }
  function ko(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function mh(e) {
    if (typeof e == "function") return ko(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === wt)) return 11;
      if (e === St) return 14;
    }
    return 2;
  }
  function ln(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = at(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function oi(e, t, n, r, i, s) {
    var f = 2;
    if (((r = e), typeof e == "function")) ko(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else
      e: switch (e) {
        case le:
          return Cn(n.children, i, s, t);
        case ie:
          (f = 8), (i |= 8);
          break;
        case he:
          return (
            (e = at(12, n, t, i | 2)), (e.elementType = he), (e.lanes = s), e
          );
        case Xe:
          return (e = at(13, n, t, i)), (e.elementType = Xe), (e.lanes = s), e;
        case ct:
          return (e = at(19, n, t, i)), (e.elementType = ct), (e.lanes = s), e;
        case _e:
          return si(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                f = 10;
                break e;
              case rt:
                f = 9;
                break e;
              case wt:
                f = 11;
                break e;
              case St:
                f = 14;
                break e;
              case He:
                (f = 16), (r = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = at(f, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function Cn(e, t, n, r) {
    return (e = at(7, e, r, t)), (e.lanes = n), e;
  }
  function si(e, t, n, r) {
    return (
      (e = at(22, e, r, t)),
      (e.elementType = _e),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Co(e, t, n) {
    return (e = at(6, e, null, t)), (e.lanes = n), e;
  }
  function Eo(e, t, n) {
    return (
      (t = at(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function yh(e, t, n, r, i) {
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
      (this.eventTimes = Ji(0)),
      (this.expirationTimes = Ji(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ji(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Po(e, t, n, r, i, s, f, p, g) {
    return (
      (e = new yh(e, t, n, p, g)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = at(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Au(s),
      e
    );
  }
  function gh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: te,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function tf(e) {
    if (!e) return Xt;
    e = e._reactInternals;
    e: {
      if (dn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return ja(e, n, t);
    }
    return t;
  }
  function nf(e, t, n, r, i, s, f, p, g) {
    return (
      (e = Po(n, r, !0, e, i, s, f, p, g)),
      (e.context = tf(null)),
      (n = e.current),
      (r = Be()),
      (i = nn(n)),
      (s = zt(r, i)),
      (s.callback = t ?? null),
      Zt(n, s, i),
      (e.current.lanes = i),
      hr(e, i, r),
      Ye(e, r),
      e
    );
  }
  function ai(e, t, n, r) {
    var i = t.current,
      s = Be(),
      f = nn(i);
    return (
      (n = tf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(s, f)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Zt(i, t, f)),
      e !== null && (gt(e, i, f, s), Ul(e, i, f)),
      f
    );
  }
  function ci(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ro(e, t) {
    rf(e, t), (e = e.alternate) && rf(e, t);
  }
  var lf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function No(e) {
    this._internalRoot = e;
  }
  (fi.prototype.render = No.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      ai(e, t, null, null);
    }),
    (fi.prototype.unmount = No.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          xn(function () {
            ai(null, e, null, null);
          }),
            (t[Nt] = null);
        }
      });
  function fi(e) {
    this._internalRoot = e;
  }
  fi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
      Vt.splice(n, 0, e), n === 0 && Vs(e);
    }
  };
  function jo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function di(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function uf() {}
  function vh(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var C = ci(f);
          s.call(C);
        };
      }
      var f = nf(t, r, e, 0, null, !1, !1, "", uf);
      return (
        (e._reactRootContainer = f),
        (e[Nt] = f.current),
        Nr(e.nodeType === 8 ? e.parentNode : e),
        xn(),
        f
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var C = ci(g);
        p.call(C);
      };
    }
    var g = Po(e, 0, !1, null, null, !1, !1, "", uf);
    return (
      (e._reactRootContainer = g),
      (e[Nt] = g.current),
      Nr(e.nodeType === 8 ? e.parentNode : e),
      xn(function () {
        ai(t, g, n, r);
      }),
      g
    );
  }
  function pi(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var f = s;
      if (typeof i == "function") {
        var p = i;
        i = function () {
          var g = ci(f);
          p.call(g);
        };
      }
      ai(t, f, e, i);
    } else f = vh(n, t, e, i, r);
    return ci(f);
  }
  ($s = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 &&
            (Zi(t, n | 1), Ye(t, Ce()), !(ue & 6) && ((bn = Ce() + 500), qt()));
        }
        break;
      case 13:
        xn(function () {
          var r = Ot(e, 1);
          if (r !== null) {
            var i = Be();
            gt(r, e, 1, i);
          }
        }),
          Ro(e, 1);
    }
  }),
    (bi = function (e) {
      if (e.tag === 13) {
        var t = Ot(e, 134217728);
        if (t !== null) {
          var n = Be();
          gt(t, e, 134217728, n);
        }
        Ro(e, 134217728);
      }
    }),
    (Us = function (e) {
      if (e.tag === 13) {
        var t = nn(e),
          n = Ot(e, t);
        if (n !== null) {
          var r = Be();
          gt(n, e, t, r);
        }
        Ro(e, t);
      }
    }),
    (Bs = function () {
      return fe;
    }),
    (Hs = function (e, t) {
      var n = fe;
      try {
        return (fe = e), t();
      } finally {
        fe = n;
      }
    }),
    (Qi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Fi(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = Tl(r);
                if (!i) throw Error(o(90));
                ds(r), Fi(r, i);
              }
            }
          }
          break;
        case "textarea":
          gs(e, n);
          break;
        case "select":
          (t = n.value), t != null && Tn(e, !!n.multiple, t, !1);
      }
    }),
    (Ps = So),
    (Rs = xn);
  var wh = { usingClientEntryPoint: !1, Events: [Lr, Un, Tl, Cs, Es, So] },
    Qr = {
      findFiberByHostInstance: pn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Sh = {
      bundleType: Qr.bundleType,
      version: Qr.version,
      rendererPackageName: Qr.rendererPackageName,
      rendererConfig: Qr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ls(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Qr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
      try {
        (fl = hi.inject(Sh)), (xt = hi);
      } catch {}
  }
  return (
    (Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh),
    (Ge.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jo(t)) throw Error(o(200));
      return gh(e, t, null, n);
    }),
    (Ge.createRoot = function (e, t) {
      if (!jo(e)) throw Error(o(299));
      var n = !1,
        r = "",
        i = lf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Po(e, 1, !1, null, null, n, !1, r, i)),
        (e[Nt] = t.current),
        Nr(e.nodeType === 8 ? e.parentNode : e),
        new No(t)
      );
    }),
    (Ge.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Ls(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ge.flushSync = function (e) {
      return xn(e);
    }),
    (Ge.hydrate = function (e, t, n) {
      if (!di(t)) throw Error(o(200));
      return pi(null, e, t, !0, n);
    }),
    (Ge.hydrateRoot = function (e, t, n) {
      if (!jo(e)) throw Error(o(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        s = "",
        f = lf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = nf(t, null, e, 1, n ?? null, i, !1, s, f)),
        (e[Nt] = t.current),
        Nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new fi(t);
    }),
    (Ge.render = function (e, t, n) {
      if (!di(t)) throw Error(o(200));
      return pi(null, e, t, !1, n);
    }),
    (Ge.unmountComponentAtNode = function (e) {
      if (!di(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (xn(function () {
            pi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Nt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ge.unstable_batchedUpdates = So),
    (Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!di(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return pi(e, t, n, !1, r);
    }),
    (Ge.version = "18.3.1-next-f1338f8080-20240426"),
    Ge
  );
}
var hf;
function Nh() {
  if (hf) return Oo.exports;
  hf = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (u) {
        console.error(u);
      }
  }
  return l(), (Oo.exports = Rh()), Oo.exports;
}
var mf;
function jh() {
  if (mf) return mi;
  mf = 1;
  var l = Nh();
  return (mi.createRoot = l.createRoot), (mi.hydrateRoot = l.hydrateRoot), mi;
}
var Th = jh();
const Lh = Wf(Th);
var Io = { exports: {} },
  Mo = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf;
function Oh() {
  if (yf) return Mo;
  yf = 1;
  var l = ji();
  function u(m, w) {
    return (m === w && (m !== 0 || 1 / m === 1 / w)) || (m !== m && w !== w);
  }
  var o = typeof Object.is == "function" ? Object.is : u,
    a = l.useSyncExternalStore,
    c = l.useRef,
    d = l.useEffect,
    h = l.useMemo,
    y = l.useDebugValue;
  return (
    (Mo.useSyncExternalStoreWithSelector = function (m, w, k, P, N) {
      var L = c(null);
      if (L.current === null) {
        var T = { hasValue: !1, value: null };
        L.current = T;
      } else T = L.current;
      L = h(
        function () {
          function j(J) {
            if (!I) {
              if (((I = !0), (W = J), (J = P(J)), N !== void 0 && T.hasValue)) {
                var te = T.value;
                if (N(te, J)) return (F = te);
              }
              return (F = J);
            }
            if (((te = F), o(W, J))) return te;
            var le = P(J);
            return N !== void 0 && N(te, le)
              ? ((W = J), te)
              : ((W = J), (F = le));
          }
          var I = !1,
            W,
            F,
            Q = k === void 0 ? null : k;
          return [
            function () {
              return j(w());
            },
            Q === null
              ? void 0
              : function () {
                  return j(Q());
                },
          ];
        },
        [w, k, P, N],
      );
      var $ = a(m, L[0], L[1]);
      return (
        d(
          function () {
            (T.hasValue = !0), (T.value = $);
          },
          [$],
        ),
        y($),
        $
      );
    }),
    Mo
  );
}
var gf;
function zh() {
  return gf || ((gf = 1), (Io.exports = Oh())), Io.exports;
}
var Dh = zh();
function Ih(l) {
  l();
}
function Mh() {
  let l = null,
    u = null;
  return {
    clear() {
      (l = null), (u = null);
    },
    notify() {
      Ih(() => {
        let o = l;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let a = l;
      for (; a; ) o.push(a), (a = a.next);
      return o;
    },
    subscribe(o) {
      let a = !0;
      const c = (u = { callback: o, next: null, prev: u });
      return (
        c.prev ? (c.prev.next = c) : (l = c),
        function () {
          !a ||
            l === null ||
            ((a = !1),
            c.next ? (c.next.prev = c.prev) : (u = c.prev),
            c.prev ? (c.prev.next = c.next) : (l = c.next));
        }
      );
    },
  };
}
var vf = { notify() {}, get: () => [] };
function Fh(l, u) {
  let o,
    a = vf,
    c = 0,
    d = !1;
  function h($) {
    k();
    const j = a.subscribe($);
    let I = !1;
    return () => {
      I || ((I = !0), j(), P());
    };
  }
  function y() {
    a.notify();
  }
  function m() {
    T.onStateChange && T.onStateChange();
  }
  function w() {
    return d;
  }
  function k() {
    c++, o || ((o = l.subscribe(m)), (a = Mh()));
  }
  function P() {
    c--, o && c === 0 && (o(), (o = void 0), a.clear(), (a = vf));
  }
  function N() {
    d || ((d = !0), k());
  }
  function L() {
    d && ((d = !1), P());
  }
  const T = {
    addNestedSub: h,
    notifyNestedSubs: y,
    handleChangeWrapper: m,
    isSubscribed: w,
    trySubscribe: N,
    tryUnsubscribe: L,
    getListeners: () => a,
  };
  return T;
}
var Ah = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $h = Ah(),
  Uh = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Bh = Uh(),
  Hh = () => ($h || Bh ? R.useLayoutEffect : R.useEffect),
  Wh = Hh(),
  Fo = Symbol.for("react-redux-context"),
  Ao = typeof globalThis < "u" ? globalThis : {};
function Vh() {
  if (!R.createContext) return {};
  const l = Ao[Fo] ?? (Ao[Fo] = new Map());
  let u = l.get(R.createContext);
  return u || ((u = R.createContext(null)), l.set(R.createContext, u)), u;
}
var cn = Vh();
function Qh(l) {
  const { children: u, context: o, serverState: a, store: c } = l,
    d = R.useMemo(() => {
      const m = Fh(c);
      return {
        store: c,
        subscription: m,
        getServerState: a ? () => a : void 0,
      };
    }, [c, a]),
    h = R.useMemo(() => c.getState(), [c]);
  Wh(() => {
    const { subscription: m } = d;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      h !== c.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [d, h]);
  const y = o || cn;
  return R.createElement(y.Provider, { value: d }, u);
}
var Kh = Qh;
function bo(l = cn) {
  return function () {
    return R.useContext(l);
  };
}
var Vf = bo();
function Qf(l = cn) {
  const u = l === cn ? Vf : bo(l),
    o = () => {
      const { store: a } = u();
      return a;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var Yh = Qf();
function Gh(l = cn) {
  const u = l === cn ? Yh : Qf(l),
    o = () => u().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var Kf = Gh(),
  Xh = (l, u) => l === u;
function qh(l = cn) {
  const u = l === cn ? Vf : bo(l),
    o = (a, c = {}) => {
      const { equalityFn: d = Xh } =
          typeof c == "function" ? { equalityFn: c } : c,
        h = u(),
        { store: y, subscription: m, getServerState: w } = h;
      R.useRef(!0);
      const k = R.useCallback(
          {
            [a.name](N) {
              return a(N);
            },
          }[a.name],
          [a],
        ),
        P = Dh.useSyncExternalStoreWithSelector(
          m.addNestedSub,
          y.getState,
          w || y.getState,
          k,
          d,
        );
      return R.useDebugValue(P), P;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var es = qh();
function Ie(l) {
  return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
var Jh = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  wf = Jh,
  $o = () => Math.random().toString(36).substring(7).split("").join("."),
  Zh = {
    INIT: `@@redux/INIT${$o()}`,
    REPLACE: `@@redux/REPLACE${$o()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$o()}`,
  },
  Si = Zh;
function ts(l) {
  if (typeof l != "object" || l === null) return !1;
  let u = l;
  for (; Object.getPrototypeOf(u) !== null; ) u = Object.getPrototypeOf(u);
  return Object.getPrototypeOf(l) === u || Object.getPrototypeOf(l) === null;
}
function Yf(l, u, o) {
  if (typeof l != "function") throw new Error(Ie(2));
  if (
    (typeof u == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ie(0));
  if (
    (typeof u == "function" && typeof o > "u" && ((o = u), (u = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(Ie(1));
    return o(Yf)(l, u);
  }
  let a = l,
    c = u,
    d = new Map(),
    h = d,
    y = 0,
    m = !1;
  function w() {
    h === d &&
      ((h = new Map()),
      d.forEach((j, I) => {
        h.set(I, j);
      }));
  }
  function k() {
    if (m) throw new Error(Ie(3));
    return c;
  }
  function P(j) {
    if (typeof j != "function") throw new Error(Ie(4));
    if (m) throw new Error(Ie(5));
    let I = !0;
    w();
    const W = y++;
    return (
      h.set(W, j),
      function () {
        if (I) {
          if (m) throw new Error(Ie(6));
          (I = !1), w(), h.delete(W), (d = null);
        }
      }
    );
  }
  function N(j) {
    if (!ts(j)) throw new Error(Ie(7));
    if (typeof j.type > "u") throw new Error(Ie(8));
    if (typeof j.type != "string") throw new Error(Ie(17));
    if (m) throw new Error(Ie(9));
    try {
      (m = !0), (c = a(c, j));
    } finally {
      m = !1;
    }
    return (
      (d = h).forEach((W) => {
        W();
      }),
      j
    );
  }
  function L(j) {
    if (typeof j != "function") throw new Error(Ie(10));
    (a = j), N({ type: Si.REPLACE });
  }
  function T() {
    const j = P;
    return {
      subscribe(I) {
        if (typeof I != "object" || I === null) throw new Error(Ie(11));
        function W() {
          const Q = I;
          Q.next && Q.next(k());
        }
        return W(), { unsubscribe: j(W) };
      },
      [wf]() {
        return this;
      },
    };
  }
  return (
    N({ type: Si.INIT }),
    { dispatch: N, subscribe: P, getState: k, replaceReducer: L, [wf]: T }
  );
}
function bh(l) {
  Object.keys(l).forEach((u) => {
    const o = l[u];
    if (typeof o(void 0, { type: Si.INIT }) > "u") throw new Error(Ie(12));
    if (typeof o(void 0, { type: Si.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ie(13));
  });
}
function em(l) {
  const u = Object.keys(l),
    o = {};
  for (let d = 0; d < u.length; d++) {
    const h = u[d];
    typeof l[h] == "function" && (o[h] = l[h]);
  }
  const a = Object.keys(o);
  let c;
  try {
    bh(o);
  } catch (d) {
    c = d;
  }
  return function (h = {}, y) {
    if (c) throw c;
    let m = !1;
    const w = {};
    for (let k = 0; k < a.length; k++) {
      const P = a[k],
        N = o[P],
        L = h[P],
        T = N(L, y);
      if (typeof T > "u") throw (y && y.type, new Error(Ie(14)));
      (w[P] = T), (m = m || T !== L);
    }
    return (m = m || a.length !== Object.keys(h).length), m ? w : h;
  };
}
function xi(...l) {
  return l.length === 0
    ? (u) => u
    : l.length === 1
      ? l[0]
      : l.reduce(
          (u, o) =>
            (...a) =>
              u(o(...a)),
        );
}
function tm(...l) {
  return (u) => (o, a) => {
    const c = u(o, a);
    let d = () => {
      throw new Error(Ie(15));
    };
    const h = { getState: c.getState, dispatch: (m, ...w) => d(m, ...w) },
      y = l.map((m) => m(h));
    return (d = xi(...y)(c.dispatch)), { ...c, dispatch: d };
  };
}
function nm(l) {
  return ts(l) && "type" in l && typeof l.type == "string";
}
var Gf = Symbol.for("immer-nothing"),
  Sf = Symbol.for("immer-draftable"),
  tt = Symbol.for("immer-state");
function vt(l, ...u) {
  throw new Error(
    `[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var nr = Object.getPrototypeOf;
function Rn(l) {
  return !!l && !!l[tt];
}
function $t(l) {
  var u;
  return l
    ? Xf(l) ||
        Array.isArray(l) ||
        !!l[Sf] ||
        !!((u = l.constructor) != null && u[Sf]) ||
        Li(l) ||
        Oi(l)
    : !1;
}
var rm = Object.prototype.constructor.toString();
function Xf(l) {
  if (!l || typeof l != "object") return !1;
  const u = nr(l);
  if (u === null) return !0;
  const o = Object.hasOwnProperty.call(u, "constructor") && u.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === rm;
}
function _i(l, u) {
  Ti(l) === 0
    ? Reflect.ownKeys(l).forEach((o) => {
        u(o, l[o], l);
      })
    : l.forEach((o, a) => u(a, o, l));
}
function Ti(l) {
  const u = l[tt];
  return u ? u.type_ : Array.isArray(l) ? 1 : Li(l) ? 2 : Oi(l) ? 3 : 0;
}
function Qo(l, u) {
  return Ti(l) === 2 ? l.has(u) : Object.prototype.hasOwnProperty.call(l, u);
}
function qf(l, u, o) {
  const a = Ti(l);
  a === 2 ? l.set(u, o) : a === 3 ? l.add(o) : (l[u] = o);
}
function lm(l, u) {
  return l === u ? l !== 0 || 1 / l === 1 / u : l !== l && u !== u;
}
function Li(l) {
  return l instanceof Map;
}
function Oi(l) {
  return l instanceof Set;
}
function En(l) {
  return l.copy_ || l.base_;
}
function Ko(l, u) {
  if (Li(l)) return new Map(l);
  if (Oi(l)) return new Set(l);
  if (Array.isArray(l)) return Array.prototype.slice.call(l);
  const o = Xf(l);
  if (u === !0 || (u === "class_only" && !o)) {
    const a = Object.getOwnPropertyDescriptors(l);
    delete a[tt];
    let c = Reflect.ownKeys(a);
    for (let d = 0; d < c.length; d++) {
      const h = c[d],
        y = a[h];
      y.writable === !1 && ((y.writable = !0), (y.configurable = !0)),
        (y.get || y.set) &&
          (a[h] = {
            configurable: !0,
            writable: !0,
            enumerable: y.enumerable,
            value: l[h],
          });
    }
    return Object.create(nr(l), a);
  } else {
    const a = nr(l);
    if (a !== null && o) return { ...l };
    const c = Object.create(a);
    return Object.assign(c, l);
  }
}
function ns(l, u = !1) {
  return (
    zi(l) ||
      Rn(l) ||
      !$t(l) ||
      (Ti(l) > 1 && (l.set = l.add = l.clear = l.delete = im),
      Object.freeze(l),
      u && Object.entries(l).forEach(([o, a]) => ns(a, !0))),
    l
  );
}
function im() {
  vt(2);
}
function zi(l) {
  return Object.isFrozen(l);
}
var um = {};
function Nn(l) {
  const u = um[l];
  return u || vt(0, l), u;
}
var Zr;
function Jf() {
  return Zr;
}
function om(l, u) {
  return {
    drafts_: [],
    parent_: l,
    immer_: u,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function xf(l, u) {
  u &&
    (Nn("Patches"),
    (l.patches_ = []),
    (l.inversePatches_ = []),
    (l.patchListener_ = u));
}
function Yo(l) {
  Go(l), l.drafts_.forEach(sm), (l.drafts_ = null);
}
function Go(l) {
  l === Zr && (Zr = l.parent_);
}
function _f(l) {
  return (Zr = om(Zr, l));
}
function sm(l) {
  const u = l[tt];
  u.type_ === 0 || u.type_ === 1 ? u.revoke_() : (u.revoked_ = !0);
}
function kf(l, u) {
  u.unfinalizedDrafts_ = u.drafts_.length;
  const o = u.drafts_[0];
  return (
    l !== void 0 && l !== o
      ? (o[tt].modified_ && (Yo(u), vt(4)),
        $t(l) && ((l = ki(u, l)), u.parent_ || Ci(u, l)),
        u.patches_ &&
          Nn("Patches").generateReplacementPatches_(
            o[tt].base_,
            l,
            u.patches_,
            u.inversePatches_,
          ))
      : (l = ki(u, o, [])),
    Yo(u),
    u.patches_ && u.patchListener_(u.patches_, u.inversePatches_),
    l !== Gf ? l : void 0
  );
}
function ki(l, u, o) {
  if (zi(u)) return u;
  const a = u[tt];
  if (!a) return _i(u, (c, d) => Cf(l, a, u, c, d, o)), u;
  if (a.scope_ !== l) return u;
  if (!a.modified_) return Ci(l, a.base_, !0), a.base_;
  if (!a.finalized_) {
    (a.finalized_ = !0), a.scope_.unfinalizedDrafts_--;
    const c = a.copy_;
    let d = c,
      h = !1;
    a.type_ === 3 && ((d = new Set(c)), c.clear(), (h = !0)),
      _i(d, (y, m) => Cf(l, a, c, y, m, o, h)),
      Ci(l, c, !1),
      o &&
        l.patches_ &&
        Nn("Patches").generatePatches_(a, o, l.patches_, l.inversePatches_);
  }
  return a.copy_;
}
function Cf(l, u, o, a, c, d, h) {
  if (Rn(c)) {
    const y =
        d && u && u.type_ !== 3 && !Qo(u.assigned_, a) ? d.concat(a) : void 0,
      m = ki(l, c, y);
    if ((qf(o, a, m), Rn(m))) l.canAutoFreeze_ = !1;
    else return;
  } else h && o.add(c);
  if ($t(c) && !zi(c)) {
    if (!l.immer_.autoFreeze_ && l.unfinalizedDrafts_ < 1) return;
    ki(l, c),
      (!u || !u.scope_.parent_) &&
        typeof a != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, a) &&
        Ci(l, c);
  }
}
function Ci(l, u, o = !1) {
  !l.parent_ && l.immer_.autoFreeze_ && l.canAutoFreeze_ && ns(u, o);
}
function am(l, u) {
  const o = Array.isArray(l),
    a = {
      type_: o ? 1 : 0,
      scope_: u ? u.scope_ : Jf(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: u,
      base_: l,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let c = a,
    d = rs;
  o && ((c = [a]), (d = br));
  const { revoke: h, proxy: y } = Proxy.revocable(c, d);
  return (a.draft_ = y), (a.revoke_ = h), y;
}
var rs = {
    get(l, u) {
      if (u === tt) return l;
      const o = En(l);
      if (!Qo(o, u)) return cm(l, o, u);
      const a = o[u];
      return l.finalized_ || !$t(a)
        ? a
        : a === Uo(l.base_, u)
          ? (Bo(l), (l.copy_[u] = qo(a, l)))
          : a;
    },
    has(l, u) {
      return u in En(l);
    },
    ownKeys(l) {
      return Reflect.ownKeys(En(l));
    },
    set(l, u, o) {
      const a = Zf(En(l), u);
      if (a != null && a.set) return a.set.call(l.draft_, o), !0;
      if (!l.modified_) {
        const c = Uo(En(l), u),
          d = c == null ? void 0 : c[tt];
        if (d && d.base_ === o)
          return (l.copy_[u] = o), (l.assigned_[u] = !1), !0;
        if (lm(o, c) && (o !== void 0 || Qo(l.base_, u))) return !0;
        Bo(l), Xo(l);
      }
      return (
        (l.copy_[u] === o && (o !== void 0 || u in l.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(l.copy_[u])) ||
          ((l.copy_[u] = o), (l.assigned_[u] = !0)),
        !0
      );
    },
    deleteProperty(l, u) {
      return (
        Uo(l.base_, u) !== void 0 || u in l.base_
          ? ((l.assigned_[u] = !1), Bo(l), Xo(l))
          : delete l.assigned_[u],
        l.copy_ && delete l.copy_[u],
        !0
      );
    },
    getOwnPropertyDescriptor(l, u) {
      const o = En(l),
        a = Reflect.getOwnPropertyDescriptor(o, u);
      return (
        a && {
          writable: !0,
          configurable: l.type_ !== 1 || u !== "length",
          enumerable: a.enumerable,
          value: o[u],
        }
      );
    },
    defineProperty() {
      vt(11);
    },
    getPrototypeOf(l) {
      return nr(l.base_);
    },
    setPrototypeOf() {
      vt(12);
    },
  },
  br = {};
_i(rs, (l, u) => {
  br[l] = function () {
    return (arguments[0] = arguments[0][0]), u.apply(this, arguments);
  };
});
br.deleteProperty = function (l, u) {
  return br.set.call(this, l, u, void 0);
};
br.set = function (l, u, o) {
  return rs.set.call(this, l[0], u, o, l[0]);
};
function Uo(l, u) {
  const o = l[tt];
  return (o ? En(o) : l)[u];
}
function cm(l, u, o) {
  var c;
  const a = Zf(u, o);
  return a
    ? "value" in a
      ? a.value
      : (c = a.get) == null
        ? void 0
        : c.call(l.draft_)
    : void 0;
}
function Zf(l, u) {
  if (!(u in l)) return;
  let o = nr(l);
  for (; o; ) {
    const a = Object.getOwnPropertyDescriptor(o, u);
    if (a) return a;
    o = nr(o);
  }
}
function Xo(l) {
  l.modified_ || ((l.modified_ = !0), l.parent_ && Xo(l.parent_));
}
function Bo(l) {
  l.copy_ || (l.copy_ = Ko(l.base_, l.scope_.immer_.useStrictShallowCopy_));
}
var fm = class {
  constructor(l) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (u, o, a) => {
        if (typeof u == "function" && typeof o != "function") {
          const d = o;
          o = u;
          const h = this;
          return function (m = d, ...w) {
            return h.produce(m, (k) => o.call(this, k, ...w));
          };
        }
        typeof o != "function" && vt(6),
          a !== void 0 && typeof a != "function" && vt(7);
        let c;
        if ($t(u)) {
          const d = _f(this),
            h = qo(u, void 0);
          let y = !0;
          try {
            (c = o(h)), (y = !1);
          } finally {
            y ? Yo(d) : Go(d);
          }
          return xf(d, a), kf(c, d);
        } else if (!u || typeof u != "object") {
          if (
            ((c = o(u)),
            c === void 0 && (c = u),
            c === Gf && (c = void 0),
            this.autoFreeze_ && ns(c, !0),
            a)
          ) {
            const d = [],
              h = [];
            Nn("Patches").generateReplacementPatches_(u, c, d, h), a(d, h);
          }
          return c;
        } else vt(1, u);
      }),
      (this.produceWithPatches = (u, o) => {
        if (typeof u == "function")
          return (h, ...y) => this.produceWithPatches(h, (m) => u(m, ...y));
        let a, c;
        return [
          this.produce(u, o, (h, y) => {
            (a = h), (c = y);
          }),
          a,
          c,
        ];
      }),
      typeof (l == null ? void 0 : l.autoFreeze) == "boolean" &&
        this.setAutoFreeze(l.autoFreeze),
      typeof (l == null ? void 0 : l.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(l.useStrictShallowCopy);
  }
  createDraft(l) {
    $t(l) || vt(8), Rn(l) && (l = dm(l));
    const u = _f(this),
      o = qo(l, void 0);
    return (o[tt].isManual_ = !0), Go(u), o;
  }
  finishDraft(l, u) {
    const o = l && l[tt];
    (!o || !o.isManual_) && vt(9);
    const { scope_: a } = o;
    return xf(a, u), kf(void 0, a);
  }
  setAutoFreeze(l) {
    this.autoFreeze_ = l;
  }
  setUseStrictShallowCopy(l) {
    this.useStrictShallowCopy_ = l;
  }
  applyPatches(l, u) {
    let o;
    for (o = u.length - 1; o >= 0; o--) {
      const c = u[o];
      if (c.path.length === 0 && c.op === "replace") {
        l = c.value;
        break;
      }
    }
    o > -1 && (u = u.slice(o + 1));
    const a = Nn("Patches").applyPatches_;
    return Rn(l) ? a(l, u) : this.produce(l, (c) => a(c, u));
  }
};
function qo(l, u) {
  const o = Li(l)
    ? Nn("MapSet").proxyMap_(l, u)
    : Oi(l)
      ? Nn("MapSet").proxySet_(l, u)
      : am(l, u);
  return (u ? u.scope_ : Jf()).drafts_.push(o), o;
}
function dm(l) {
  return Rn(l) || vt(10, l), bf(l);
}
function bf(l) {
  if (!$t(l) || zi(l)) return l;
  const u = l[tt];
  let o;
  if (u) {
    if (!u.modified_) return u.base_;
    (u.finalized_ = !0), (o = Ko(l, u.scope_.immer_.useStrictShallowCopy_));
  } else o = Ko(l, !0);
  return (
    _i(o, (a, c) => {
      qf(o, a, bf(c));
    }),
    u && (u.finalized_ = !1),
    o
  );
}
var nt = new fm(),
  ed = nt.produce;
nt.produceWithPatches.bind(nt);
nt.setAutoFreeze.bind(nt);
nt.setUseStrictShallowCopy.bind(nt);
nt.applyPatches.bind(nt);
nt.createDraft.bind(nt);
nt.finishDraft.bind(nt);
function td(l) {
  return ({ dispatch: o, getState: a }) =>
    (c) =>
    (d) =>
      typeof d == "function" ? d(o, a, l) : c(d);
}
var pm = td(),
  hm = td,
  mm =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? xi
              : xi.apply(null, arguments);
        };
function Ef(l, u) {
  function o(...a) {
    if (u) {
      let c = u(...a);
      if (!c) throw new Error(Ft(0));
      return {
        type: l,
        payload: c.payload,
        ...("meta" in c && { meta: c.meta }),
        ...("error" in c && { error: c.error }),
      };
    }
    return { type: l, payload: a[0] };
  }
  return (
    (o.toString = () => `${l}`),
    (o.type = l),
    (o.match = (a) => nm(a) && a.type === l),
    o
  );
}
var nd = class Jr extends Array {
  constructor(...u) {
    super(...u), Object.setPrototypeOf(this, Jr.prototype);
  }
  static get [Symbol.species]() {
    return Jr;
  }
  concat(...u) {
    return super.concat.apply(this, u);
  }
  prepend(...u) {
    return u.length === 1 && Array.isArray(u[0])
      ? new Jr(...u[0].concat(this))
      : new Jr(...u.concat(this));
  }
};
function Pf(l) {
  return $t(l) ? ed(l, () => {}) : l;
}
function Rf(l, u, o) {
  return l.has(u) ? l.get(u) : l.set(u, o(u)).get(u);
}
function ym(l) {
  return typeof l == "boolean";
}
var gm = () =>
    function (u) {
      const {
        thunk: o = !0,
        immutableCheck: a = !0,
        serializableCheck: c = !0,
        actionCreatorCheck: d = !0,
      } = u ?? {};
      let h = new nd();
      return o && (ym(o) ? h.push(pm) : h.push(hm(o.extraArgument))), h;
    },
  vm = "RTK_autoBatch",
  Nf = (l) => (u) => {
    setTimeout(u, l);
  },
  wm =
    (l = { type: "raf" }) =>
    (u) =>
    (...o) => {
      const a = u(...o);
      let c = !0,
        d = !1,
        h = !1;
      const y = new Set(),
        m =
          l.type === "tick"
            ? queueMicrotask
            : l.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Nf(10)
              : l.type === "callback"
                ? l.queueNotification
                : Nf(l.timeout),
        w = () => {
          (h = !1), d && ((d = !1), y.forEach((k) => k()));
        };
      return Object.assign({}, a, {
        subscribe(k) {
          const P = () => c && k(),
            N = a.subscribe(P);
          return (
            y.add(k),
            () => {
              N(), y.delete(k);
            }
          );
        },
        dispatch(k) {
          var P;
          try {
            return (
              (c = !((P = k == null ? void 0 : k.meta) != null && P[vm])),
              (d = !c),
              d && (h || ((h = !0), m(w))),
              a.dispatch(k)
            );
          } finally {
            c = !0;
          }
        },
      });
    },
  Sm = (l) =>
    function (o) {
      const { autoBatch: a = !0 } = o ?? {};
      let c = new nd(l);
      return a && c.push(wm(typeof a == "object" ? a : void 0)), c;
    };
function xm(l) {
  const u = gm(),
    {
      reducer: o = void 0,
      middleware: a,
      devTools: c = !0,
      preloadedState: d = void 0,
      enhancers: h = void 0,
    } = l;
  let y;
  if (typeof o == "function") y = o;
  else if (ts(o)) y = em(o);
  else throw new Error(Ft(1));
  let m;
  typeof a == "function" ? (m = a(u)) : (m = u());
  let w = xi;
  c && (w = mm({ trace: !1, ...(typeof c == "object" && c) }));
  const k = tm(...m),
    P = Sm(k);
  let N = typeof h == "function" ? h(P) : P();
  const L = w(...N);
  return Yf(y, d, L);
}
function rd(l) {
  const u = {},
    o = [];
  let a;
  const c = {
    addCase(d, h) {
      const y = typeof d == "string" ? d : d.type;
      if (!y) throw new Error(Ft(28));
      if (y in u) throw new Error(Ft(29));
      return (u[y] = h), c;
    },
    addMatcher(d, h) {
      return o.push({ matcher: d, reducer: h }), c;
    },
    addDefaultCase(d) {
      return (a = d), c;
    },
  };
  return l(c), [u, o, a];
}
function _m(l) {
  return typeof l == "function";
}
function km(l, u) {
  let [o, a, c] = rd(u),
    d;
  if (_m(l)) d = () => Pf(l());
  else {
    const y = Pf(l);
    d = () => y;
  }
  function h(y = d(), m) {
    let w = [
      o[m.type],
      ...a.filter(({ matcher: k }) => k(m)).map(({ reducer: k }) => k),
    ];
    return (
      w.filter((k) => !!k).length === 0 && (w = [c]),
      w.reduce((k, P) => {
        if (P)
          if (Rn(k)) {
            const L = P(k, m);
            return L === void 0 ? k : L;
          } else {
            if ($t(k)) return ed(k, (N) => P(N, m));
            {
              const N = P(k, m);
              if (N === void 0) {
                if (k === null) return k;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return N;
            }
          }
        return k;
      }, y)
    );
  }
  return (h.getInitialState = d), h;
}
var Cm = Symbol.for("rtk-slice-createasyncthunk");
function Em(l, u) {
  return `${l}/${u}`;
}
function Pm({ creators: l } = {}) {
  var o;
  const u = (o = l == null ? void 0 : l.asyncThunk) == null ? void 0 : o[Cm];
  return function (c) {
    const { name: d, reducerPath: h = d } = c;
    if (!d) throw new Error(Ft(11));
    const y =
        (typeof c.reducers == "function" ? c.reducers(jm()) : c.reducers) || {},
      m = Object.keys(y),
      w = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      k = {
        addCase(F, Q) {
          const J = typeof F == "string" ? F : F.type;
          if (!J) throw new Error(Ft(12));
          if (J in w.sliceCaseReducersByType) throw new Error(Ft(13));
          return (w.sliceCaseReducersByType[J] = Q), k;
        },
        addMatcher(F, Q) {
          return w.sliceMatchers.push({ matcher: F, reducer: Q }), k;
        },
        exposeAction(F, Q) {
          return (w.actionCreators[F] = Q), k;
        },
        exposeCaseReducer(F, Q) {
          return (w.sliceCaseReducersByName[F] = Q), k;
        },
      };
    m.forEach((F) => {
      const Q = y[F],
        J = {
          reducerName: F,
          type: Em(d, F),
          createNotation: typeof c.reducers == "function",
        };
      Lm(Q) ? zm(J, Q, k, u) : Tm(J, Q, k);
    });
    function P() {
      const [F = {}, Q = [], J = void 0] =
          typeof c.extraReducers == "function"
            ? rd(c.extraReducers)
            : [c.extraReducers],
        te = { ...F, ...w.sliceCaseReducersByType };
      return km(c.initialState, (le) => {
        for (let ie in te) le.addCase(ie, te[ie]);
        for (let ie of w.sliceMatchers) le.addMatcher(ie.matcher, ie.reducer);
        for (let ie of Q) le.addMatcher(ie.matcher, ie.reducer);
        J && le.addDefaultCase(J);
      });
    }
    const N = (F) => F,
      L = new Map();
    let T;
    function $(F, Q) {
      return T || (T = P()), T(F, Q);
    }
    function j() {
      return T || (T = P()), T.getInitialState();
    }
    function I(F, Q = !1) {
      function J(le) {
        let ie = le[F];
        return typeof ie > "u" && Q && (ie = j()), ie;
      }
      function te(le = N) {
        const ie = Rf(L, Q, () => new WeakMap());
        return Rf(ie, le, () => {
          const he = {};
          for (const [Pe, rt] of Object.entries(c.selectors ?? {}))
            he[Pe] = Rm(rt, le, j, Q);
          return he;
        });
      }
      return {
        reducerPath: F,
        getSelectors: te,
        get selectors() {
          return te(J);
        },
        selectSlice: J,
      };
    }
    const W = {
      name: d,
      reducer: $,
      actions: w.actionCreators,
      caseReducers: w.sliceCaseReducersByName,
      getInitialState: j,
      ...I(h),
      injectInto(F, { reducerPath: Q, ...J } = {}) {
        const te = Q ?? h;
        return (
          F.inject({ reducerPath: te, reducer: $ }, J), { ...W, ...I(te, !0) }
        );
      },
    };
    return W;
  };
}
function Rm(l, u, o, a) {
  function c(d, ...h) {
    let y = u(d);
    return typeof y > "u" && a && (y = o()), l(y, ...h);
  }
  return (c.unwrapped = l), c;
}
var Nm = Pm();
function jm() {
  function l(u, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: u, ...o };
  }
  return (
    (l.withTypes = () => l),
    {
      reducer(u) {
        return Object.assign(
          {
            [u.name](...o) {
              return u(...o);
            },
          }[u.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(u, o) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: u,
          reducer: o,
        };
      },
      asyncThunk: l,
    }
  );
}
function Tm({ type: l, reducerName: u, createNotation: o }, a, c) {
  let d, h;
  if ("reducer" in a) {
    if (o && !Om(a)) throw new Error(Ft(17));
    (d = a.reducer), (h = a.prepare);
  } else d = a;
  c.addCase(l, d)
    .exposeCaseReducer(u, d)
    .exposeAction(u, h ? Ef(l, h) : Ef(l));
}
function Lm(l) {
  return l._reducerDefinitionType === "asyncThunk";
}
function Om(l) {
  return l._reducerDefinitionType === "reducerWithPrepare";
}
function zm({ type: l, reducerName: u }, o, a, c) {
  if (!c) throw new Error(Ft(18));
  const {
      payloadCreator: d,
      fulfilled: h,
      pending: y,
      rejected: m,
      settled: w,
      options: k,
    } = o,
    P = c(l, d, k);
  a.exposeAction(u, P),
    h && a.addCase(P.fulfilled, h),
    y && a.addCase(P.pending, y),
    m && a.addCase(P.rejected, m),
    w && a.addMatcher(P.settled, w),
    a.exposeCaseReducer(u, {
      fulfilled: h || yi,
      pending: y || yi,
      rejected: m || yi,
      settled: w || yi,
    });
}
function yi() {}
function Ft(l) {
  return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
const Dm = { items: [] },
  ld = Nm({
    name: "cart",
    initialState: Dm,
    reducers: {
      addToCart: (l, u) => {
        const o = l.items.findIndex((a) => a.id === u.payload.id);
        o >= 0
          ? (l.items[o].quantity += 1)
          : l.items.push({ ...u.payload, quantity: 1 });
      },
      removeFromCart: (l, u) => {
        l.items = l.items.filter((o) => o.id !== u.payload);
      },
      clearCart: (l) => {
        l.items = [];
      },
    },
  }),
  { addToCart: jf, removeFromCart: id, clearCart: yv } = ld.actions,
  Im = ld.reducer,
  Mm = xm({ reducer: { cart: Im } });
var Yr = {},
  Tf;
function Fm() {
  if (Tf) return Yr;
  (Tf = 1),
    Object.defineProperty(Yr, "__esModule", { value: !0 }),
    (Yr.parse = h),
    (Yr.serialize = w);
  const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    u = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    a = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    d = (() => {
      const N = function () {};
      return (N.prototype = Object.create(null)), N;
    })();
  function h(N, L) {
    const T = new d(),
      $ = N.length;
    if ($ < 2) return T;
    const j = (L == null ? void 0 : L.decode) || k;
    let I = 0;
    do {
      const W = N.indexOf("=", I);
      if (W === -1) break;
      const F = N.indexOf(";", I),
        Q = F === -1 ? $ : F;
      if (W > Q) {
        I = N.lastIndexOf(";", W - 1) + 1;
        continue;
      }
      const J = y(N, I, W),
        te = m(N, W, J),
        le = N.slice(J, te);
      if (T[le] === void 0) {
        let ie = y(N, W + 1, Q),
          he = m(N, Q, ie);
        const Pe = j(N.slice(ie, he));
        T[le] = Pe;
      }
      I = Q + 1;
    } while (I < $);
    return T;
  }
  function y(N, L, T) {
    do {
      const $ = N.charCodeAt(L);
      if ($ !== 32 && $ !== 9) return L;
    } while (++L < T);
    return T;
  }
  function m(N, L, T) {
    for (; L > T; ) {
      const $ = N.charCodeAt(--L);
      if ($ !== 32 && $ !== 9) return L + 1;
    }
    return T;
  }
  function w(N, L, T) {
    const $ = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!l.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
    const j = $(L);
    if (!u.test(j)) throw new TypeError(`argument val is invalid: ${L}`);
    let I = N + "=" + j;
    if (!T) return I;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      I += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!o.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      I += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!a.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      I += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!P(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      I += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (I += "; HttpOnly"),
      T.secure && (I += "; Secure"),
      T.partitioned && (I += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          I += "; Priority=Low";
          break;
        case "medium":
          I += "; Priority=Medium";
          break;
        case "high":
          I += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          I += "; SameSite=Strict";
          break;
        case "lax":
          I += "; SameSite=Lax";
          break;
        case "none":
          I += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return I;
  }
  function k(N) {
    if (N.indexOf("%") === -1) return N;
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  function P(N) {
    return c.call(N) === "[object Date]";
  }
  return Yr;
}
Fm();
/**
 * react-router v7.1.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lf = "popstate";
function Am(l = {}) {
  function u(a, c) {
    let { pathname: d, search: h, hash: y } = a.location;
    return Jo(
      "",
      { pathname: d, search: h, hash: y },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default",
    );
  }
  function o(a, c) {
    return typeof c == "string" ? c : el(c);
  }
  return Um(u, o, null, l);
}
function xe(l, u) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(u);
}
function Pt(l, u) {
  if (!l) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function $m() {
  return Math.random().toString(36).substring(2, 10);
}
function Of(l, u) {
  return { usr: l.state, key: l.key, idx: u };
}
function Jo(l, u, o = null, a) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? rr(u) : u),
    state: o,
    key: (u && u.key) || a || $m(),
  };
}
function el({ pathname: l = "/", search: u = "", hash: o = "" }) {
  return (
    u && u !== "?" && (l += u.charAt(0) === "?" ? u : "?" + u),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
  );
}
function rr(l) {
  let u = {};
  if (l) {
    let o = l.indexOf("#");
    o >= 0 && ((u.hash = l.substring(o)), (l = l.substring(0, o)));
    let a = l.indexOf("?");
    a >= 0 && ((u.search = l.substring(a)), (l = l.substring(0, a))),
      l && (u.pathname = l);
  }
  return u;
}
function Um(l, u, o, a = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = a,
    h = c.history,
    y = "POP",
    m = null,
    w = k();
  w == null && ((w = 0), h.replaceState({ ...h.state, idx: w }, ""));
  function k() {
    return (h.state || { idx: null }).idx;
  }
  function P() {
    y = "POP";
    let j = k(),
      I = j == null ? null : j - w;
    (w = j), m && m({ action: y, location: $.location, delta: I });
  }
  function N(j, I) {
    y = "PUSH";
    let W = Jo($.location, j, I);
    w = k() + 1;
    let F = Of(W, w),
      Q = $.createHref(W);
    try {
      h.pushState(F, "", Q);
    } catch (J) {
      if (J instanceof DOMException && J.name === "DataCloneError") throw J;
      c.location.assign(Q);
    }
    d && m && m({ action: y, location: $.location, delta: 1 });
  }
  function L(j, I) {
    y = "REPLACE";
    let W = Jo($.location, j, I);
    w = k();
    let F = Of(W, w),
      Q = $.createHref(W);
    h.replaceState(F, "", Q),
      d && m && m({ action: y, location: $.location, delta: 0 });
  }
  function T(j) {
    let I = c.location.origin !== "null" ? c.location.origin : c.location.href,
      W = typeof j == "string" ? j : el(j);
    return (
      (W = W.replace(/ $/, "%20")),
      xe(
        I,
        `No window.location.(origin|href) available to create URL for href: ${W}`,
      ),
      new URL(W, I)
    );
  }
  let $ = {
    get action() {
      return y;
    },
    get location() {
      return l(c, h);
    },
    listen(j) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(Lf, P),
        (m = j),
        () => {
          c.removeEventListener(Lf, P), (m = null);
        }
      );
    },
    createHref(j) {
      return u(c, j);
    },
    createURL: T,
    encodeLocation(j) {
      let I = T(j);
      return { pathname: I.pathname, search: I.search, hash: I.hash };
    },
    push: N,
    replace: L,
    go(j) {
      return h.go(j);
    },
  };
  return $;
}
function ud(l, u, o = "/") {
  return Bm(l, u, o, !1);
}
function Bm(l, u, o, a) {
  let c = typeof u == "string" ? rr(u) : u,
    d = fn(c.pathname || "/", o);
  if (d == null) return null;
  let h = od(l);
  Hm(h);
  let y = null;
  for (let m = 0; y == null && m < h.length; ++m) {
    let w = bm(d);
    y = Jm(h[m], w, a);
  }
  return y;
}
function od(l, u = [], o = [], a = "") {
  let c = (d, h, y) => {
    let m = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    m.relativePath.startsWith("/") &&
      (xe(
        m.relativePath.startsWith(a),
        `Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (m.relativePath = m.relativePath.slice(a.length)));
    let w = At([a, m.relativePath]),
      k = o.concat(m);
    d.children &&
      d.children.length > 0 &&
      (xe(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${w}".`,
      ),
      od(d.children, u, k, w)),
      !(d.path == null && !d.index) &&
        u.push({ path: w, score: Xm(w, d.index), routesMeta: k });
  };
  return (
    l.forEach((d, h) => {
      var y;
      if (d.path === "" || !((y = d.path) != null && y.includes("?"))) c(d, h);
      else for (let m of sd(d.path)) c(d, h, m);
    }),
    u
  );
}
function sd(l) {
  let u = l.split("/");
  if (u.length === 0) return [];
  let [o, ...a] = u,
    c = o.endsWith("?"),
    d = o.replace(/\?$/, "");
  if (a.length === 0) return c ? [d, ""] : [d];
  let h = sd(a.join("/")),
    y = [];
  return (
    y.push(...h.map((m) => (m === "" ? d : [d, m].join("/")))),
    c && y.push(...h),
    y.map((m) => (l.startsWith("/") && m === "" ? "/" : m))
  );
}
function Hm(l) {
  l.sort((u, o) =>
    u.score !== o.score
      ? o.score - u.score
      : qm(
          u.routesMeta.map((a) => a.childrenIndex),
          o.routesMeta.map((a) => a.childrenIndex),
        ),
  );
}
var Wm = /^:[\w-]+$/,
  Vm = 3,
  Qm = 2,
  Km = 1,
  Ym = 10,
  Gm = -2,
  zf = (l) => l === "*";
function Xm(l, u) {
  let o = l.split("/"),
    a = o.length;
  return (
    o.some(zf) && (a += Gm),
    u && (a += Qm),
    o
      .filter((c) => !zf(c))
      .reduce((c, d) => c + (Wm.test(d) ? Vm : d === "" ? Km : Ym), a)
  );
}
function qm(l, u) {
  return l.length === u.length && l.slice(0, -1).every((a, c) => a === u[c])
    ? l[l.length - 1] - u[u.length - 1]
    : 0;
}
function Jm(l, u, o = !1) {
  let { routesMeta: a } = l,
    c = {},
    d = "/",
    h = [];
  for (let y = 0; y < a.length; ++y) {
    let m = a[y],
      w = y === a.length - 1,
      k = d === "/" ? u : u.slice(d.length) || "/",
      P = Ei(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: w },
        k,
      ),
      N = m.route;
    if (
      (!P &&
        w &&
        o &&
        !a[a.length - 1].route.index &&
        (P = Ei(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          k,
        )),
      !P)
    )
      return null;
    Object.assign(c, P.params),
      h.push({
        params: c,
        pathname: At([d, P.pathname]),
        pathnameBase: ry(At([d, P.pathnameBase])),
        route: N,
      }),
      P.pathnameBase !== "/" && (d = At([d, P.pathnameBase]));
  }
  return h;
}
function Ei(l, u) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [o, a] = Zm(l.path, l.caseSensitive, l.end),
    c = u.match(o);
  if (!c) return null;
  let d = c[0],
    h = d.replace(/(.)\/+$/, "$1"),
    y = c.slice(1);
  return {
    params: a.reduce((w, { paramName: k, isOptional: P }, N) => {
      if (k === "*") {
        let T = y[N] || "";
        h = d.slice(0, d.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const L = y[N];
      return (
        P && !L ? (w[k] = void 0) : (w[k] = (L || "").replace(/%2F/g, "/")), w
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: l,
  };
}
function Zm(l, u = !1, o = !0) {
  Pt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
  );
  let a = [],
    c =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, y, m) => (
            a.push({ paramName: y, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    l.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (c += "\\/*$")
        : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, u ? void 0 : "i"), a]
  );
}
function bm(l) {
  try {
    return l
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      Pt(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`,
      ),
      l
    );
  }
}
function fn(l, u) {
  if (u === "/") return l;
  if (!l.toLowerCase().startsWith(u.toLowerCase())) return null;
  let o = u.endsWith("/") ? u.length - 1 : u.length,
    a = l.charAt(o);
  return a && a !== "/" ? null : l.slice(o) || "/";
}
function ey(l, u = "/") {
  let {
    pathname: o,
    search: a = "",
    hash: c = "",
  } = typeof l == "string" ? rr(l) : l;
  return {
    pathname: o ? (o.startsWith("/") ? o : ty(o, u)) : u,
    search: ly(a),
    hash: iy(c),
  };
}
function ty(l, u) {
  let o = u.replace(/\/+$/, "").split("/");
  return (
    l.split("/").forEach((c) => {
      c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Ho(l, u, o, a) {
  return `Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ny(l) {
  return l.filter(
    (u, o) => o === 0 || (u.route.path && u.route.path.length > 0),
  );
}
function ad(l) {
  let u = ny(l);
  return u.map((o, a) => (a === u.length - 1 ? o.pathname : o.pathnameBase));
}
function cd(l, u, o, a = !1) {
  let c;
  typeof l == "string"
    ? (c = rr(l))
    : ((c = { ...l }),
      xe(
        !c.pathname || !c.pathname.includes("?"),
        Ho("?", "pathname", "search", c),
      ),
      xe(
        !c.pathname || !c.pathname.includes("#"),
        Ho("#", "pathname", "hash", c),
      ),
      xe(!c.search || !c.search.includes("#"), Ho("#", "search", "hash", c)));
  let d = l === "" || c.pathname === "",
    h = d ? "/" : c.pathname,
    y;
  if (h == null) y = o;
  else {
    let P = u.length - 1;
    if (!a && h.startsWith("..")) {
      let N = h.split("/");
      for (; N[0] === ".."; ) N.shift(), (P -= 1);
      c.pathname = N.join("/");
    }
    y = P >= 0 ? u[P] : "/";
  }
  let m = ey(c, y),
    w = h && h !== "/" && h.endsWith("/"),
    k = (d || h === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (w || k) && (m.pathname += "/"), m;
}
var At = (l) => l.join("/").replace(/\/\/+/g, "/"),
  ry = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ly = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  iy = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l);
function uy(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
var fd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(fd);
var oy = ["GET", ...fd];
new Set(oy);
var lr = R.createContext(null);
lr.displayName = "DataRouter";
var Di = R.createContext(null);
Di.displayName = "DataRouterState";
var dd = R.createContext({ isTransitioning: !1 });
dd.displayName = "ViewTransition";
var sy = R.createContext(new Map());
sy.displayName = "Fetchers";
var ay = R.createContext(null);
ay.displayName = "Await";
var Rt = R.createContext(null);
Rt.displayName = "Navigation";
var nl = R.createContext(null);
nl.displayName = "Location";
var Ut = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ut.displayName = "Route";
var ls = R.createContext(null);
ls.displayName = "RouteError";
function cy(l, { relative: u } = {}) {
  xe(
    rl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: o, navigator: a } = R.useContext(Rt),
    { hash: c, pathname: d, search: h } = ll(l, { relative: u }),
    y = d;
  return (
    o !== "/" && (y = d === "/" ? o : At([o, d])),
    a.createHref({ pathname: y, search: h, hash: c })
  );
}
function rl() {
  return R.useContext(nl) != null;
}
function jn() {
  return (
    xe(
      rl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    R.useContext(nl).location
  );
}
var pd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hd(l) {
  R.useContext(Rt).static || R.useLayoutEffect(l);
}
function is() {
  let { isDataRoute: l } = R.useContext(Ut);
  return l ? ky() : fy();
}
function fy() {
  xe(
    rl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let l = R.useContext(lr),
    { basename: u, navigator: o } = R.useContext(Rt),
    { matches: a } = R.useContext(Ut),
    { pathname: c } = jn(),
    d = JSON.stringify(ad(a)),
    h = R.useRef(!1);
  return (
    hd(() => {
      h.current = !0;
    }),
    R.useCallback(
      (m, w = {}) => {
        if ((Pt(h.current, pd), !h.current)) return;
        if (typeof m == "number") {
          o.go(m);
          return;
        }
        let k = cd(m, JSON.parse(d), c, w.relative === "path");
        l == null &&
          u !== "/" &&
          (k.pathname = k.pathname === "/" ? u : At([u, k.pathname])),
          (w.replace ? o.replace : o.push)(k, w.state, w);
      },
      [u, o, d, c, l],
    )
  );
}
R.createContext(null);
function ll(l, { relative: u } = {}) {
  let { matches: o } = R.useContext(Ut),
    { pathname: a } = jn(),
    c = JSON.stringify(ad(o));
  return R.useMemo(() => cd(l, JSON.parse(c), a, u === "path"), [l, c, a, u]);
}
function dy(l, u) {
  return md(l, u);
}
function md(l, u, o, a) {
  var W;
  xe(
    rl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c, static: d } = R.useContext(Rt),
    { matches: h } = R.useContext(Ut),
    y = h[h.length - 1],
    m = y ? y.params : {},
    w = y ? y.pathname : "/",
    k = y ? y.pathnameBase : "/",
    P = y && y.route;
  {
    let F = (P && P.path) || "";
    yd(
      w,
      !P || F.endsWith("*") || F.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F === "/" ? "*" : `${F}/*`}">.`,
    );
  }
  let N = jn(),
    L;
  if (u) {
    let F = typeof u == "string" ? rr(u) : u;
    xe(
      k === "/" || ((W = F.pathname) == null ? void 0 : W.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${F.pathname}" was given in the \`location\` prop.`,
    ),
      (L = F);
  } else L = N;
  let T = L.pathname || "/",
    $ = T;
  if (k !== "/") {
    let F = k.replace(/^\//, "").split("/");
    $ = "/" + T.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let j =
    !d && o && o.matches && o.matches.length > 0
      ? o.matches
      : ud(l, { pathname: $ });
  Pt(
    P || j != null,
    `No routes matched location "${L.pathname}${L.search}${L.hash}" `,
  ),
    Pt(
      j == null ||
        j[j.length - 1].route.element !== void 0 ||
        j[j.length - 1].route.Component !== void 0 ||
        j[j.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let I = gy(
    j &&
      j.map((F) =>
        Object.assign({}, F, {
          params: Object.assign({}, m, F.params),
          pathname: At([
            k,
            c.encodeLocation
              ? c.encodeLocation(F.pathname).pathname
              : F.pathname,
          ]),
          pathnameBase:
            F.pathnameBase === "/"
              ? k
              : At([
                  k,
                  c.encodeLocation
                    ? c.encodeLocation(F.pathnameBase).pathname
                    : F.pathnameBase,
                ]),
        }),
      ),
    h,
    o,
    a,
  );
  return u && I
    ? R.createElement(
        nl.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...L,
            },
            navigationType: "POP",
          },
        },
        I,
      )
    : I;
}
function py() {
  let l = _y(),
    u = uy(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    o = l instanceof Error ? l.stack : null,
    a = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: a },
    d = { padding: "2px 4px", backgroundColor: a },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (h = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: d }, "errorElement"),
        " prop on your route.",
      ),
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, u),
      o ? R.createElement("pre", { style: c }, o) : null,
      h,
    )
  );
}
var hy = R.createElement(py, null),
  my = class extends R.Component {
    constructor(l) {
      super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        });
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, u) {
      return u.location !== l.location ||
        (u.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : u.error,
            location: u.location,
            revalidation: l.revalidation || u.revalidation,
          };
    }
    componentDidCatch(l, u) {
      console.error(
        "React Router caught the following error during render",
        l,
        u,
      );
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            Ut.Provider,
            { value: this.props.routeContext },
            R.createElement(ls.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function yy({ routeContext: l, match: u, children: o }) {
  let a = R.useContext(lr);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = u.route.id),
    R.createElement(Ut.Provider, { value: l }, o)
  );
}
function gy(l, u = [], o = null, a = null) {
  if (l == null) {
    if (!o) return null;
    if (o.errors) l = o.matches;
    else if (u.length === 0 && !o.initialized && o.matches.length > 0)
      l = o.matches;
    else return null;
  }
  let c = l,
    d = o == null ? void 0 : o.errors;
  if (d != null) {
    let m = c.findIndex(
      (w) => w.route.id && (d == null ? void 0 : d[w.route.id]) !== void 0,
    );
    xe(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, m + 1)));
  }
  let h = !1,
    y = -1;
  if (o)
    for (let m = 0; m < c.length; m++) {
      let w = c[m];
      if (
        ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (y = m),
        w.route.id)
      ) {
        let { loaderData: k, errors: P } = o,
          N =
            w.route.loader &&
            !k.hasOwnProperty(w.route.id) &&
            (!P || P[w.route.id] === void 0);
        if (w.route.lazy || N) {
          (h = !0), y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((m, w, k) => {
    let P,
      N = !1,
      L = null,
      T = null;
    o &&
      ((P = d && w.route.id ? d[w.route.id] : void 0),
      (L = w.route.errorElement || hy),
      h &&
        (y < 0 && k === 0
          ? (yd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (N = !0),
            (T = null))
          : y === k &&
            ((N = !0), (T = w.route.hydrateFallbackElement || null))));
    let $ = u.concat(c.slice(0, k + 1)),
      j = () => {
        let I;
        return (
          P
            ? (I = L)
            : N
              ? (I = T)
              : w.route.Component
                ? (I = R.createElement(w.route.Component, null))
                : w.route.element
                  ? (I = w.route.element)
                  : (I = m),
          R.createElement(yy, {
            match: w,
            routeContext: { outlet: m, matches: $, isDataRoute: o != null },
            children: I,
          })
        );
      };
    return o && (w.route.ErrorBoundary || w.route.errorElement || k === 0)
      ? R.createElement(my, {
          location: o.location,
          revalidation: o.revalidation,
          component: L,
          error: P,
          children: j(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : j();
  }, null);
}
function us(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vy(l) {
  let u = R.useContext(lr);
  return xe(u, us(l)), u;
}
function wy(l) {
  let u = R.useContext(Di);
  return xe(u, us(l)), u;
}
function Sy(l) {
  let u = R.useContext(Ut);
  return xe(u, us(l)), u;
}
function os(l) {
  let u = Sy(l),
    o = u.matches[u.matches.length - 1];
  return (
    xe(
      o.route.id,
      `${l} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function xy() {
  return os("useRouteId");
}
function _y() {
  var a;
  let l = R.useContext(ls),
    u = wy("useRouteError"),
    o = os("useRouteError");
  return l !== void 0 ? l : (a = u.errors) == null ? void 0 : a[o];
}
function ky() {
  let { router: l } = vy("useNavigate"),
    u = os("useNavigate"),
    o = R.useRef(!1);
  return (
    hd(() => {
      o.current = !0;
    }),
    R.useCallback(
      async (c, d = {}) => {
        Pt(o.current, pd),
          o.current &&
            (typeof c == "number"
              ? l.navigate(c)
              : await l.navigate(c, { fromRouteId: u, ...d }));
      },
      [l, u],
    )
  );
}
var Df = {};
function yd(l, u, o) {
  !u && !Df[l] && ((Df[l] = !0), Pt(!1, o));
}
R.memo(Cy);
function Cy({ routes: l, future: u, state: o }) {
  return md(l, void 0, o, u);
}
function Pn(l) {
  xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Ey({
  basename: l = "/",
  children: u = null,
  location: o,
  navigationType: a = "POP",
  navigator: c,
  static: d = !1,
}) {
  xe(
    !rl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let h = l.replace(/^\/*/, "/"),
    y = R.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: {} }),
      [h, c, d],
    );
  typeof o == "string" && (o = rr(o));
  let {
      pathname: m = "/",
      search: w = "",
      hash: k = "",
      state: P = null,
      key: N = "default",
    } = o,
    L = R.useMemo(() => {
      let T = fn(m, h);
      return T == null
        ? null
        : {
            location: { pathname: T, search: w, hash: k, state: P, key: N },
            navigationType: a,
          };
    }, [h, m, w, k, P, N, a]);
  return (
    Pt(
      L != null,
      `<Router basename="${h}"> is not able to match the URL "${m}${w}${k}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    L == null
      ? null
      : R.createElement(
          Rt.Provider,
          { value: y },
          R.createElement(nl.Provider, { children: u, value: L }),
        )
  );
}
function Py({ children: l, location: u }) {
  return dy(Zo(l), u);
}
function Zo(l, u = []) {
  let o = [];
  return (
    R.Children.forEach(l, (a, c) => {
      if (!R.isValidElement(a)) return;
      let d = [...u, c];
      if (a.type === R.Fragment) {
        o.push.apply(o, Zo(a.props.children, d));
        return;
      }
      xe(
        a.type === Pn,
        `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        xe(
          !a.props.index || !a.props.children,
          "An index route cannot have child routes.",
        );
      let h = {
        id: a.props.id || d.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        hydrateFallbackElement: a.props.hydrateFallbackElement,
        HydrateFallback: a.props.HydrateFallback,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.hasErrorBoundary === !0 ||
          a.props.ErrorBoundary != null ||
          a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (h.children = Zo(a.props.children, d)), o.push(h);
    }),
    o
  );
}
var vi = "get",
  wi = "application/x-www-form-urlencoded";
function Ii(l) {
  return l != null && typeof l.tagName == "string";
}
function Ry(l) {
  return Ii(l) && l.tagName.toLowerCase() === "button";
}
function Ny(l) {
  return Ii(l) && l.tagName.toLowerCase() === "form";
}
function jy(l) {
  return Ii(l) && l.tagName.toLowerCase() === "input";
}
function Ty(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Ly(l, u) {
  return l.button === 0 && (!u || u === "_self") && !Ty(l);
}
var gi = null;
function Oy() {
  if (gi === null)
    try {
      new FormData(document.createElement("form"), 0), (gi = !1);
    } catch {
      gi = !0;
    }
  return gi;
}
var zy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Wo(l) {
  return l != null && !zy.has(l)
    ? (Pt(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wi}"`,
      ),
      null)
    : l;
}
function Dy(l, u) {
  let o, a, c, d, h;
  if (Ny(l)) {
    let y = l.getAttribute("action");
    (a = y ? fn(y, u) : null),
      (o = l.getAttribute("method") || vi),
      (c = Wo(l.getAttribute("enctype")) || wi),
      (d = new FormData(l));
  } else if (Ry(l) || (jy(l) && (l.type === "submit" || l.type === "image"))) {
    let y = l.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = l.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((a = m ? fn(m, u) : null),
      (o = l.getAttribute("formmethod") || y.getAttribute("method") || vi),
      (c =
        Wo(l.getAttribute("formenctype")) ||
        Wo(y.getAttribute("enctype")) ||
        wi),
      (d = new FormData(y, l)),
      !Oy())
    ) {
      let { name: w, type: k, value: P } = l;
      if (k === "image") {
        let N = w ? `${w}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else w && d.append(w, P);
    }
  } else {
    if (Ii(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (o = vi), (a = null), (c = wi), (h = l);
  }
  return (
    d && c === "text/plain" && ((h = d), (d = void 0)),
    { action: a, method: o.toLowerCase(), encType: c, formData: d, body: h }
  );
}
function ss(l, u) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(u);
}
async function Iy(l, u) {
  if (l.id in u) return u[l.id];
  try {
    let o = await import(l.module);
    return (u[l.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function My(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function Fy(l, u, o) {
  let a = await Promise.all(
    l.map(async (c) => {
      let d = u.routes[c.route.id];
      if (d) {
        let h = await Iy(d, o);
        return h.links ? h.links() : [];
      }
      return [];
    }),
  );
  return By(
    a
      .flat(1)
      .filter(My)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" },
      ),
  );
}
function If(l, u, o, a, c, d) {
  let h = (m, w) => (o[w] ? m.route.id !== o[w].route.id : !0),
    y = (m, w) => {
      var k;
      return (
        o[w].pathname !== m.pathname ||
        (((k = o[w].route.path) == null ? void 0 : k.endsWith("*")) &&
          o[w].params["*"] !== m.params["*"])
      );
    };
  return d === "assets"
    ? u.filter((m, w) => h(m, w) || y(m, w))
    : d === "data"
      ? u.filter((m, w) => {
          var P;
          let k = a.routes[m.route.id];
          if (!k || !k.hasLoader) return !1;
          if (h(m, w) || y(m, w)) return !0;
          if (m.route.shouldRevalidate) {
            let N = m.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin,
              ),
              currentParams: ((P = o[0]) == null ? void 0 : P.params) || {},
              nextUrl: new URL(l, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof N == "boolean") return N;
          }
          return !0;
        })
      : [];
}
function Ay(l, u) {
  return $y(
    l
      .map((o) => {
        let a = u.routes[o.route.id];
        if (!a) return [];
        let c = [a.module];
        return a.imports && (c = c.concat(a.imports)), c;
      })
      .flat(1),
  );
}
function $y(l) {
  return [...new Set(l)];
}
function Uy(l) {
  let u = {},
    o = Object.keys(l).sort();
  for (let a of o) u[a] = l[a];
  return u;
}
function By(l, u) {
  let o = new Set();
  return (
    new Set(u),
    l.reduce((a, c) => {
      let d = JSON.stringify(Uy(c));
      return o.has(d) || (o.add(d), a.push({ key: d, link: c })), a;
    }, [])
  );
}
function Hy(l) {
  let u =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : l;
  return (
    u.pathname === "/"
      ? (u.pathname = "_root.data")
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
    u
  );
}
function Wy() {
  let l = R.useContext(lr);
  return (
    ss(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    l
  );
}
function Vy() {
  let l = R.useContext(Di);
  return (
    ss(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    l
  );
}
var as = R.createContext(void 0);
as.displayName = "FrameworkContext";
function gd() {
  let l = R.useContext(as);
  return (
    ss(l, "You must render this element inside a <HydratedRouter> element"), l
  );
}
function Qy(l, u) {
  let o = R.useContext(as),
    [a, c] = R.useState(!1),
    [d, h] = R.useState(!1),
    {
      onFocus: y,
      onBlur: m,
      onMouseEnter: w,
      onMouseLeave: k,
      onTouchStart: P,
    } = u,
    N = R.useRef(null);
  R.useEffect(() => {
    if ((l === "render" && h(!0), l === "viewport")) {
      let $ = (I) => {
          I.forEach((W) => {
            h(W.isIntersecting);
          });
        },
        j = new IntersectionObserver($, { threshold: 0.5 });
      return (
        N.current && j.observe(N.current),
        () => {
          j.disconnect();
        }
      );
    }
  }, [l]),
    R.useEffect(() => {
      if (a) {
        let $ = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [a]);
  let L = () => {
      c(!0);
    },
    T = () => {
      c(!1), h(!1);
    };
  return o
    ? l !== "intent"
      ? [d, N, {}]
      : [
          d,
          N,
          {
            onFocus: Gr(y, L),
            onBlur: Gr(m, T),
            onMouseEnter: Gr(w, L),
            onMouseLeave: Gr(k, T),
            onTouchStart: Gr(P, L),
          },
        ]
    : [!1, N, {}];
}
function Gr(l, u) {
  return (o) => {
    l && l(o), o.defaultPrevented || u(o);
  };
}
function Ky({ page: l, ...u }) {
  let { router: o } = Wy(),
    a = R.useMemo(() => ud(o.routes, l, o.basename), [o.routes, l, o.basename]);
  return a ? R.createElement(Gy, { page: l, matches: a, ...u }) : null;
}
function Yy(l) {
  let { manifest: u, routeModules: o } = gd(),
    [a, c] = R.useState([]);
  return (
    R.useEffect(() => {
      let d = !1;
      return (
        Fy(l, u, o).then((h) => {
          d || c(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [l, u, o]),
    a
  );
}
function Gy({ page: l, matches: u, ...o }) {
  let a = jn(),
    { manifest: c, routeModules: d } = gd(),
    { loaderData: h, matches: y } = Vy(),
    m = R.useMemo(() => If(l, u, y, c, a, "data"), [l, u, y, c, a]),
    w = R.useMemo(() => If(l, u, y, c, a, "assets"), [l, u, y, c, a]),
    k = R.useMemo(() => {
      if (l === a.pathname + a.search + a.hash) return [];
      let L = new Set(),
        T = !1;
      if (
        (u.forEach((j) => {
          var W;
          let I = c.routes[j.route.id];
          !I ||
            !I.hasLoader ||
            ((!m.some((F) => F.route.id === j.route.id) &&
              j.route.id in h &&
              (W = d[j.route.id]) != null &&
              W.shouldRevalidate) ||
            I.hasClientLoader
              ? (T = !0)
              : L.add(j.route.id));
        }),
        L.size === 0)
      )
        return [];
      let $ = Hy(l);
      return (
        T &&
          L.size > 0 &&
          $.searchParams.set(
            "_routes",
            u
              .filter((j) => L.has(j.route.id))
              .map((j) => j.route.id)
              .join(","),
          ),
        [$.pathname + $.search]
      );
    }, [h, a, c, m, u, l, d]),
    P = R.useMemo(() => Ay(w, c), [w, c]),
    N = Yy(w);
  return R.createElement(
    R.Fragment,
    null,
    k.map((L) =>
      R.createElement("link", {
        key: L,
        rel: "prefetch",
        as: "fetch",
        href: L,
        ...o,
      }),
    ),
    P.map((L) =>
      R.createElement("link", { key: L, rel: "modulepreload", href: L, ...o }),
    ),
    N.map(({ key: L, link: T }) => R.createElement("link", { key: L, ...T })),
  );
}
function Xy(...l) {
  return (u) => {
    l.forEach((o) => {
      typeof o == "function" ? o(u) : o != null && (o.current = u);
    });
  };
}
var vd =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  vd && (window.__reactRouterVersion = "7.1.4");
} catch {}
function qy({ basename: l, children: u, window: o }) {
  let a = R.useRef();
  a.current == null && (a.current = Am({ window: o, v5Compat: !0 }));
  let c = a.current,
    [d, h] = R.useState({ action: c.action, location: c.location }),
    y = R.useCallback(
      (m) => {
        R.startTransition(() => h(m));
      },
      [h],
    );
  return (
    R.useLayoutEffect(() => c.listen(y), [c, y]),
    R.createElement(Ey, {
      basename: l,
      children: u,
      location: d.location,
      navigationType: d.action,
      navigator: c,
    })
  );
}
var wd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mt = R.forwardRef(function (
    {
      onClick: u,
      discover: o = "render",
      prefetch: a = "none",
      relative: c,
      reloadDocument: d,
      replace: h,
      state: y,
      target: m,
      to: w,
      preventScrollReset: k,
      viewTransition: P,
      ...N
    },
    L,
  ) {
    let { basename: T } = R.useContext(Rt),
      $ = typeof w == "string" && wd.test(w),
      j,
      I = !1;
    if (typeof w == "string" && $ && ((j = w), vd))
      try {
        let he = new URL(window.location.href),
          Pe = w.startsWith("//") ? new URL(he.protocol + w) : new URL(w),
          rt = fn(Pe.pathname, T);
        Pe.origin === he.origin && rt != null
          ? (w = rt + Pe.search + Pe.hash)
          : (I = !0);
      } catch {
        Pt(
          !1,
          `<Link to="${w}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let W = cy(w, { relative: c }),
      [F, Q, J] = Qy(a, N),
      te = eg(w, {
        replace: h,
        state: y,
        target: m,
        preventScrollReset: k,
        relative: c,
        viewTransition: P,
      });
    function le(he) {
      u && u(he), he.defaultPrevented || te(he);
    }
    let ie = R.createElement("a", {
      ...N,
      ...J,
      href: j || W,
      onClick: I || d ? u : le,
      ref: Xy(L, Q),
      target: m,
      "data-discover": !$ && o === "render" ? "true" : void 0,
    });
    return F && !$
      ? R.createElement(R.Fragment, null, ie, R.createElement(Ky, { page: W }))
      : ie;
  });
Mt.displayName = "Link";
var Jy = R.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: c = !1,
    style: d,
    to: h,
    viewTransition: y,
    children: m,
    ...w
  },
  k,
) {
  let P = ll(h, { relative: w.relative }),
    N = jn(),
    L = R.useContext(Di),
    { navigator: T, basename: $ } = R.useContext(Rt),
    j = L != null && ig(P) && y === !0,
    I = T.encodeLocation ? T.encodeLocation(P).pathname : P.pathname,
    W = N.pathname,
    F =
      L && L.navigation && L.navigation.location
        ? L.navigation.location.pathname
        : null;
  o ||
    ((W = W.toLowerCase()),
    (F = F ? F.toLowerCase() : null),
    (I = I.toLowerCase())),
    F && $ && (F = fn(F, $) || F);
  const Q = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let J = W === I || (!c && W.startsWith(I) && W.charAt(Q) === "/"),
    te =
      F != null &&
      (F === I || (!c && F.startsWith(I) && F.charAt(I.length) === "/")),
    le = { isActive: J, isPending: te, isTransitioning: j },
    ie = J ? u : void 0,
    he;
  typeof a == "function"
    ? (he = a(le))
    : (he = [
        a,
        J ? "active" : null,
        te ? "pending" : null,
        j ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pe = typeof d == "function" ? d(le) : d;
  return R.createElement(
    Mt,
    {
      ...w,
      "aria-current": ie,
      className: he,
      ref: k,
      style: Pe,
      to: h,
      viewTransition: y,
    },
    typeof m == "function" ? m(le) : m,
  );
});
Jy.displayName = "NavLink";
var Zy = R.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: u,
      navigate: o,
      reloadDocument: a,
      replace: c,
      state: d,
      method: h = vi,
      action: y,
      onSubmit: m,
      relative: w,
      preventScrollReset: k,
      viewTransition: P,
      ...N
    },
    L,
  ) => {
    let T = rg(),
      $ = lg(y, { relative: w }),
      j = h.toLowerCase() === "get" ? "get" : "post",
      I = typeof y == "string" && wd.test(y),
      W = (F) => {
        if ((m && m(F), F.defaultPrevented)) return;
        F.preventDefault();
        let Q = F.nativeEvent.submitter,
          J = (Q == null ? void 0 : Q.getAttribute("formmethod")) || h;
        T(Q || F.currentTarget, {
          fetcherKey: u,
          method: J,
          navigate: o,
          replace: c,
          state: d,
          relative: w,
          preventScrollReset: k,
          viewTransition: P,
        });
      };
    return R.createElement("form", {
      ref: L,
      method: j,
      action: $,
      onSubmit: a ? m : W,
      ...N,
      "data-discover": !I && l === "render" ? "true" : void 0,
    });
  },
);
Zy.displayName = "Form";
function by(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sd(l) {
  let u = R.useContext(lr);
  return xe(u, by(l)), u;
}
function eg(
  l,
  {
    target: u,
    replace: o,
    state: a,
    preventScrollReset: c,
    relative: d,
    viewTransition: h,
  } = {},
) {
  let y = is(),
    m = jn(),
    w = ll(l, { relative: d });
  return R.useCallback(
    (k) => {
      if (Ly(k, u)) {
        k.preventDefault();
        let P = o !== void 0 ? o : el(m) === el(w);
        y(l, {
          replace: P,
          state: a,
          preventScrollReset: c,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [m, y, w, o, a, u, l, c, d, h],
  );
}
var tg = 0,
  ng = () => `__${String(++tg)}__`;
function rg() {
  let { router: l } = Sd("useSubmit"),
    { basename: u } = R.useContext(Rt),
    o = xy();
  return R.useCallback(
    async (a, c = {}) => {
      let { action: d, method: h, encType: y, formData: m, body: w } = Dy(a, u);
      if (c.navigate === !1) {
        let k = c.fetcherKey || ng();
        await l.fetch(k, o, c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: w,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          flushSync: c.flushSync,
        });
      } else
        await l.navigate(c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: w,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          replace: c.replace,
          state: c.state,
          fromRouteId: o,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [l, u, o],
  );
}
function lg(l, { relative: u } = {}) {
  let { basename: o } = R.useContext(Rt),
    a = R.useContext(Ut);
  xe(a, "useFormAction must be used inside a RouteContext");
  let [c] = a.matches.slice(-1),
    d = { ...ll(l || ".", { relative: u }) },
    h = jn();
  if (l == null) {
    d.search = h.search;
    let y = new URLSearchParams(d.search),
      m = y.getAll("index");
    if (m.some((k) => k === "")) {
      y.delete("index"),
        m.filter((P) => P).forEach((P) => y.append("index", P));
      let k = y.toString();
      d.search = k ? `?${k}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (d.pathname = d.pathname === "/" ? o : At([o, d.pathname])),
    el(d)
  );
}
function ig(l, u = {}) {
  let o = R.useContext(dd);
  xe(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: a } = Sd("useViewTransitionState"),
    c = ll(l, { relative: u.relative });
  if (!o.isTransitioning) return !1;
  let d = fn(o.currentLocation.pathname, a) || o.currentLocation.pathname,
    h = fn(o.nextLocation.pathname, a) || o.nextLocation.pathname;
  return Ei(c.pathname, h) != null || Ei(c.pathname, d) != null;
}
new TextEncoder();
const ug = "_header_1r9jb_2",
  og = "_logo_1r9jb_13",
  sg = "_nav_1r9jb_21",
  ag = "_open_1r9jb_57",
  cg = "_hamburger_1r9jb_82",
  fg = "_bar_1r9jb_91",
  on = { header: ug, logo: og, nav: sg, open: ag, hamburger: cg, bar: fg };
function ir() {
  const [l, u] = R.useState(!1),
    o = () => {
      u(!l);
    };
  return E.jsxs("header", {
    className: on.header,
    children: [
      E.jsx("div", {
        className: on.logo,
        children: E.jsx(Mt, { to: "/", children: "Douglas & Mari" }),
      }),
      E.jsx("nav", {
        className: `${on.nav} ${l ? on.open : ""}`,
        children: E.jsxs("ul", {
          children: [
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/",
                onClick: () => u(!1),
                children: "Início",
              }),
            }),
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/noivos",
                onClick: () => u(!1),
                children: "Noivos",
              }),
            }),
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/padrinhos",
                onClick: () => u(!1),
                children: "Padrinhos",
              }),
            }),
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/presenca",
                onClick: () => u(!1),
                children: "Confirmar presença",
              }),
            }),
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/presentes",
                onClick: () => u(!1),
                children: "Lista de presentes",
              }),
            }),
            E.jsx("li", {
              children: E.jsx(Mt, {
                to: "/carrinho",
                onClick: () => u(!1),
                children: "Carrinho",
              }),
            }),
          ],
        }),
      }),
      E.jsxs("button", {
        className: on.hamburger,
        onClick: o,
        children: [
          E.jsx("div", { className: on.bar }),
          E.jsx("div", { className: on.bar }),
          E.jsx("div", { className: on.bar }),
        ],
      }),
    ],
  });
}
const dg = 864e5,
  pg = 6e4,
  hg = 36e5,
  Mf = Symbol.for("constructDateFrom");
function xd(l, u) {
  return typeof l == "function"
    ? l(u)
    : l && typeof l == "object" && Mf in l
      ? l[Mf](u)
      : l instanceof Date
        ? new l.constructor(u)
        : new Date(u);
}
function Pi(l, u) {
  return xd(l, l);
}
function Ff(l) {
  const u = Pi(l),
    o = new Date(
      Date.UTC(
        u.getFullYear(),
        u.getMonth(),
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds(),
        u.getMilliseconds(),
      ),
    );
  return o.setUTCFullYear(u.getFullYear()), +l - +o;
}
function cs(l, ...u) {
  const o = xd.bind(
    null,
    u.find((a) => typeof a == "object"),
  );
  return u.map(o);
}
function Af(l, u) {
  const o = Pi(l);
  return o.setHours(0, 0, 0, 0), o;
}
function mg(l, u, o) {
  const [a, c] = cs(o == null ? void 0 : o.in, l, u),
    d = Af(a),
    h = Af(c),
    y = +d - Ff(d),
    m = +h - Ff(h);
  return Math.round((y - m) / dg);
}
function yg(l, u, o) {
  const [a, c] = cs(o == null ? void 0 : o.in, l, u),
    d = $f(a, c),
    h = Math.abs(mg(a, c));
  a.setDate(a.getDate() - d * h);
  const y = +($f(a, c) === -d),
    m = d * (h - y);
  return m === 0 ? 0 : m;
}
function $f(l, u) {
  const o =
    l.getFullYear() - u.getFullYear() ||
    l.getMonth() - u.getMonth() ||
    l.getDate() - u.getDate() ||
    l.getHours() - u.getHours() ||
    l.getMinutes() - u.getMinutes() ||
    l.getSeconds() - u.getSeconds() ||
    l.getMilliseconds() - u.getMilliseconds();
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function fs(l) {
  return (u) => {
    const a = (l ? Math[l] : Math.trunc)(u);
    return a === 0 ? 0 : a;
  };
}
function gg(l, u, o) {
  const [a, c] = cs(o == null ? void 0 : o.in, l, u),
    d = (+a - +c) / hg;
  return fs(o == null ? void 0 : o.roundingMethod)(d);
}
function _d(l, u) {
  return +Pi(l) - +Pi(u);
}
function vg(l, u, o) {
  const a = _d(l, u) / pg;
  return fs(o == null ? void 0 : o.roundingMethod)(a);
}
function wg(l, u, o) {
  const a = _d(l, u) / 1e3;
  return fs(o == null ? void 0 : o.roundingMethod)(a);
}
const Sg = "_countdown_39ofx_1",
  xg = "_countdownTimer_39ofx_17",
  _g = "_countdownItem_39ofx_24",
  tr = { countdown: Sg, countdownTimer: xg, countdownItem: _g };
function kg() {
  const [l, u] = R.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isWeddingDay: !1,
  });
  return (
    R.useEffect(() => {
      const o = new Date("2025-08-02T00:00:00"),
        a = () => {
          const d = new Date(),
            h = d >= o;
          u(
            h
              ? { days: 0, hours: 0, minutes: 0, seconds: 0, isWeddingDay: !0 }
              : {
                  days: yg(o, d),
                  hours: gg(o, d) % 24,
                  minutes: vg(o, d) % 60,
                  seconds: wg(o, d) % 60,
                  isWeddingDay: !1,
                },
          );
        },
        c = setInterval(a, 1e3);
      return a(), () => clearInterval(c);
    }, []),
    E.jsxs("section", {
      className: tr.countdown,
      children: [
        E.jsx("h2", { children: "Contagem Regressiva ⏳" }),
        l.isWeddingDay
          ? E.jsx("p", { children: "O grande dia chegou! 🎉" })
          : E.jsxs("div", {
              className: tr.countdownTimer,
              children: [
                E.jsxs("div", {
                  className: tr.countdownItem,
                  children: [
                    E.jsx("span", { children: l.days }),
                    E.jsx("p", { children: "Dias" }),
                  ],
                }),
                E.jsxs("div", {
                  className: tr.countdownItem,
                  children: [
                    E.jsx("span", { children: l.hours }),
                    E.jsx("p", { children: "Horas" }),
                  ],
                }),
                E.jsxs("div", {
                  className: tr.countdownItem,
                  children: [
                    E.jsx("span", { children: l.minutes }),
                    E.jsx("p", { children: "Minutos" }),
                  ],
                }),
                E.jsxs("div", {
                  className: tr.countdownItem,
                  children: [
                    E.jsx("span", { children: l.seconds }),
                    E.jsx("p", { children: "Segundos" }),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
const Cg = "_footer_m8e2q_1",
  Eg = { footer: Cg };
function ur() {
  return E.jsx("footer", {
    className: Eg.footer,
    children: E.jsx("p", { children: "Com amor, Mari e Douglas ❤️" }),
  });
}
function Pg() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsxs("main", {
        children: [
          E.jsxs("section", {
            children: [
              E.jsx("h2", {
                children: "Seja bem-vindo ao nosso site de casamento!",
              }),
              E.jsx("p", {
                children:
                  "Estamos muito felizes em compartilhar esse momento especial com vocês.",
              }),
            ],
          }),
          E.jsx(kg, {}),
        ],
      }),
      E.jsx(ur, {}),
    ],
  });
}
function Rg() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsx("main", {
        children: E.jsxs("section", {
          children: [
            E.jsx("h2", { children: "Nossa História" }),
            E.jsx("p", {
              children:
                "Aqui você pode contar a história de como se conheceram e momentos especiais do casal.",
            }),
          ],
        }),
      }),
      E.jsx(ur, {}),
    ],
  });
}
function Ng() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsx("main", {
        children: E.jsxs("section", {
          children: [
            E.jsx("h2", { children: "Nossos Padrinhos" }),
            E.jsx("p", {
              children:
                "Aqui você pode adicionar fotos e descrições dos padrinhos e madrinhas do casamento.",
            }),
          ],
        }),
      }),
      E.jsx(ur, {}),
    ],
  });
}
const tl = { _origin: "https://api.emailjs.com" },
  jg = (l, u = "https://api.emailjs.com") => {
    (tl._userID = l), (tl._origin = u);
  },
  kd = (l, u, o) => {
    if (!l)
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!u)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!o)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Uf {
  constructor(u) {
    (this.status = u.status), (this.text = u.responseText);
  }
}
const Cd = (l, u, o = {}) =>
    new Promise((a, c) => {
      const d = new XMLHttpRequest();
      d.addEventListener("load", ({ target: h }) => {
        const y = new Uf(h);
        y.status === 200 || y.text === "OK" ? a(y) : c(y);
      }),
        d.addEventListener("error", ({ target: h }) => {
          c(new Uf(h));
        }),
        d.open("POST", tl._origin + l, !0),
        Object.keys(o).forEach((h) => {
          d.setRequestHeader(h, o[h]);
        }),
        d.send(u);
    }),
  Tg = (l, u, o, a) => {
    const c = a || tl._userID;
    return (
      kd(c, l, u),
      Cd(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.2.0",
          user_id: c,
          service_id: l,
          template_id: u,
          template_params: o,
        }),
        { "Content-type": "application/json" },
      )
    );
  },
  Lg = (l) => {
    let u;
    if (
      (typeof l == "string" ? (u = document.querySelector(l)) : (u = l),
      !u || u.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return u;
  },
  Og = (l, u, o, a) => {
    const c = a || tl._userID,
      d = Lg(o);
    kd(c, l, u);
    const h = new FormData(d);
    return (
      h.append("lib_version", "3.2.0"),
      h.append("service_id", l),
      h.append("template_id", u),
      h.append("user_id", c),
      Cd("/api/v1.0/email/send-form", h)
    );
  },
  zg = { init: jg, send: Tg, sendForm: Og },
  Dg = "_rsvpContainer_1v6hv_1",
  Ig = "_successMessage_1v6hv_17",
  Mg = "_rsvpForm_1v6hv_23",
  Fg = "_radioGroup_1v6hv_52",
  Xr = { rsvpContainer: Dg, successMessage: Ig, rsvpForm: Mg, radioGroup: Fg };
function Ag() {
  const [l, u] = R.useState(""),
    [o, a] = R.useState("yes"),
    [c, d] = R.useState("0"),
    [h, y] = R.useState(""),
    [m, w] = R.useState(!1),
    k = (P) => {
      P.preventDefault();
      const N = { name: l, attendance: o, guests: c, message: h };
      zg.send("service_regttel", "template_wipqf2a", N, "holHoqVevUZaCLF2s")
        .then(() => {
          w(!0);
        })
        .catch((L) => console.error("Erro:", L));
    };
  return E.jsxs("div", {
    className: Xr.rsvpContainer,
    children: [
      E.jsx("h2", { children: "Confirme sua Presença" }),
      m
        ? E.jsx("p", {
            className: Xr.successMessage,
            children: "Obrigado por confirmar sua presença!",
          })
        : E.jsxs("form", {
            className: Xr.rsvpForm,
            onSubmit: k,
            children: [
              E.jsx("label", { children: "Nome Completo" }),
              E.jsx("input", {
                className: Xr.input,
                type: "text",
                placeholder: "Seu nome",
                value: l,
                onChange: (P) => u(P.target.value),
                required: !0,
              }),
              E.jsx("label", { children: "Você irá comparecer?" }),
              E.jsxs("div", {
                className: Xr.radioGroup,
                children: [
                  E.jsxs("label", {
                    children: [
                      E.jsx("input", {
                        type: "radio",
                        name: "attendance",
                        value: "yes",
                        checked: o === "yes",
                        onChange: (P) => a(P.target.value),
                      }),
                      " Sim",
                    ],
                  }),
                  E.jsxs("label", {
                    children: [
                      E.jsx("input", {
                        type: "radio",
                        name: "attendance",
                        value: "no",
                        checked: o === "no",
                        onChange: (P) => a(P.target.value),
                      }),
                      " Não",
                    ],
                  }),
                ],
              }),
              o === "yes" &&
                E.jsxs(E.Fragment, {
                  children: [
                    E.jsx("label", { children: "Quantidade de Acompanhantes" }),
                    E.jsx("input", {
                      type: "number",
                      min: "0",
                      placeholder: "Número de acompanhantes",
                      value: c,
                      onChange: (P) => d(P.target.value),
                      required: !0,
                    }),
                  ],
                }),
              E.jsx("label", { children: "Mensagem (opcional)" }),
              E.jsx("textarea", {
                placeholder: "Deixe uma mensagem para os noivos",
                value: h,
                onChange: (P) => y(P.target.value),
              }),
              E.jsx("button", { type: "submit", children: "Confirmar" }),
            ],
          }),
    ],
  });
}
function $g() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsx("main", { children: E.jsx(Ag, {}) }),
      E.jsx(ur, {}),
    ],
  });
}
const Ug = "_giftList_10j7y_1",
  Bg = "_giftItem_10j7y_11",
  Hg = "_giftImage_10j7y_26",
  Wg = "_buttonContainer_10j7y_33",
  Vg = "_buyNow_10j7y_39",
  Qg = "_addedToCart_10j7y_56",
  Kg = "_removeButton_10j7y_65",
  sn = {
    giftList: Ug,
    giftItem: Bg,
    giftImage: Hg,
    buttonContainer: Wg,
    buyNow: Vg,
    addedToCart: Qg,
    removeButton: Kg,
  };
function Yg() {
  const l = Kf(),
    u = is(),
    o = es((y) => y.cart.items),
    a = [
      {
        id: "1",
        name: "Jogo de Panelas",
        price: 150,
        image: "/images/panela.jpg",
        quantity: 1,
      },
      {
        id: "2",
        name: "Conjunto de Copos",
        price: 50,
        image: "/images/copos.jpg",
        quantity: 1,
      },
      {
        id: "3",
        name: "Cafeteira Elétrica",
        price: 250,
        image: "/images/cafeteira.jpg",
        quantity: 1,
      },
      {
        id: "4",
        name: "Micro-ondas",
        price: 500,
        image: "/images/microwave.jpg",
        quantity: 1,
      },
      {
        id: "5",
        name: "Aspirador de Pó",
        price: 350,
        image: "/images/aspirador.jpg",
        quantity: 1,
      },
    ],
    c = (y) => {
      l(jf(y));
    },
    d = (y) => {
      l(id(y));
    },
    h = (y) => {
      l(jf(y)), u("/carrinho");
    };
  return E.jsx(E.Fragment, {
    children: E.jsx("div", {
      className: sn.giftList,
      children: a.map((y) => {
        const m = o.some((w) => w.id === y.id);
        return E.jsxs(
          "div",
          {
            className: `${sn.giftItem} ${m ? sn.addedToCart : ""}`,
            children: [
              E.jsx("img", {
                src: y.image,
                alt: y.name,
                className: sn.giftImage,
              }),
              E.jsx("h3", { children: y.name }),
              E.jsxs("p", { children: ["R$ ", y.price.toFixed(2)] }),
              E.jsxs("div", {
                className: sn.buttonContainer,
                children: [
                  m
                    ? E.jsx("button", {
                        className: sn.removeButton,
                        onClick: () => d(y.id),
                        children: "Adicionado",
                      })
                    : E.jsx("button", {
                        className: sn.buyNow,
                        onClick: () => c(y),
                        children: "Adicionar ao carrinho",
                      }),
                  E.jsx("button", {
                    className: sn.buyNow,
                    onClick: () => h(y),
                    children: "Comprar",
                  }),
                ],
              }),
            ],
          },
          y.id,
        );
      }),
    }),
  });
}
var Ed = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Bf = an.createContext && an.createContext(Ed),
  Gg = ["attr", "size", "title"];
function Xg(l, u) {
  if (l == null) return {};
  var o = qg(l, u),
    a,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(l);
    for (c = 0; c < d.length; c++)
      (a = d[c]),
        !(u.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(l, a) &&
          (o[a] = l[a]);
  }
  return o;
}
function qg(l, u) {
  if (l == null) return {};
  var o = {};
  for (var a in l)
    if (Object.prototype.hasOwnProperty.call(l, a)) {
      if (u.indexOf(a) >= 0) continue;
      o[a] = l[a];
    }
  return o;
}
function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (l) {
          for (var u = 1; u < arguments.length; u++) {
            var o = arguments[u];
            for (var a in o)
              Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a]);
          }
          return l;
        }),
    Ri.apply(this, arguments)
  );
}
function Hf(l, u) {
  var o = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(l);
    u &&
      (a = a.filter(function (c) {
        return Object.getOwnPropertyDescriptor(l, c).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function Ni(l) {
  for (var u = 1; u < arguments.length; u++) {
    var o = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? Hf(Object(o), !0).forEach(function (a) {
          Jg(l, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
        : Hf(Object(o)).forEach(function (a) {
            Object.defineProperty(l, a, Object.getOwnPropertyDescriptor(o, a));
          });
  }
  return l;
}
function Jg(l, u, o) {
  return (
    (u = Zg(u)),
    u in l
      ? Object.defineProperty(l, u, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (l[u] = o),
    l
  );
}
function Zg(l) {
  var u = bg(l, "string");
  return typeof u == "symbol" ? u : u + "";
}
function bg(l, u) {
  if (typeof l != "object" || !l) return l;
  var o = l[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(l, u || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(l);
}
function Pd(l) {
  return (
    l &&
    l.map((u, o) =>
      an.createElement(u.tag, Ni({ key: o }, u.attr), Pd(u.child)),
    )
  );
}
function ev(l) {
  return (u) =>
    an.createElement(tv, Ri({ attr: Ni({}, l.attr) }, u), Pd(l.child));
}
function tv(l) {
  var u = (o) => {
    var { attr: a, size: c, title: d } = l,
      h = Xg(l, Gg),
      y = c || o.size || "1em",
      m;
    return (
      o.className && (m = o.className),
      l.className && (m = (m ? m + " " : "") + l.className),
      an.createElement(
        "svg",
        Ri(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          o.attr,
          a,
          h,
          {
            className: m,
            style: Ni(Ni({ color: l.color || o.color }, o.style), l.style),
            height: y,
            width: y,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        d && an.createElement("title", null, d),
        l.children,
      )
    );
  };
  return Bf !== void 0
    ? an.createElement(Bf.Consumer, null, (o) => u(o))
    : u(Ed);
}
function nv(l) {
  return ev({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z",
        },
        child: [],
      },
    ],
  })(l);
}
const rv = "_cartIcon_1ylnb_1",
  lv = "_cartIconSvg_1ylnb_23",
  iv = "_cartCount_1ylnb_28",
  Vo = { cartIcon: rv, cartIconSvg: lv, cartCount: iv };
function uv() {
  const l = is(),
    o = es((c) => c.cart.items).reduce((c, d) => c + d.quantity, 0),
    a = () => {
      l("/carrinho");
    };
  return E.jsxs("div", {
    className: Vo.cartIcon,
    onClick: a,
    children: [
      E.jsx(nv, { className: Vo.cartIconSvg }),
      o > 0 && E.jsx("span", { className: Vo.cartCount, children: o }),
    ],
  });
}
function ov() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsxs("main", {
        children: [
          E.jsx("h2", { children: "Lista de Presentes" }),
          E.jsx(Yg, {}),
          E.jsx(uv, {}),
        ],
      }),
      E.jsx(ur, {}),
    ],
  });
}
const sv = "_cartContainer_1stno_1",
  av = "_cartList_1stno_7",
  cv = "_cartItem_1stno_12",
  fv = "_itemImage_1stno_19",
  dv = "_itemDetails_1stno_27",
  qr = {
    cartContainer: sv,
    cartList: av,
    cartItem: cv,
    itemImage: fv,
    itemDetails: dv,
  };
function pv() {
  const l = es((o) => o.cart.items),
    u = Kf();
  return E.jsxs("div", {
    className: qr.cartContainer,
    children: [
      E.jsx("h2", { children: "Seu Carrinho" }),
      l.length === 0
        ? E.jsx("p", { children: "O carrinho está vazio." })
        : E.jsx("ul", {
            className: qr.cartList,
            children: l.map((o) =>
              E.jsxs(
                "li",
                {
                  className: qr.cartItem,
                  children: [
                    E.jsx("img", {
                      src: o.image,
                      alt: o.name,
                      className: qr.itemImage,
                    }),
                    E.jsxs("div", {
                      className: qr.itemDetails,
                      children: [
                        E.jsx("h3", { children: o.name }),
                        E.jsxs("p", { children: ["R$ ", o.price.toFixed(2)] }),
                        E.jsx("button", {
                          onClick: () => u(id(o.id)),
                          children: "Remover",
                        }),
                      ],
                    }),
                  ],
                },
                o.id,
              ),
            ),
          }),
    ],
  });
}
function hv() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(ir, {}),
      E.jsx("main", {
        children: E.jsx("section", { children: E.jsx(pv, {}) }),
      }),
      E.jsx(ur, {}),
    ],
  });
}
function mv() {
  return E.jsx(qy, {
    children: E.jsxs(Py, {
      children: [
        E.jsx(Pn, { path: "/", element: E.jsx(Pg, {}) }),
        E.jsx(Pn, { path: "/noivos", element: E.jsx(Rg, {}) }),
        E.jsx(Pn, { path: "/padrinhos", element: E.jsx(Ng, {}) }),
        E.jsx(Pn, { path: "/presenca", element: E.jsx($g, {}) }),
        E.jsx(Pn, { path: "/presentes", element: E.jsx(ov, {}) }),
        E.jsx(Pn, { path: "/carrinho", element: E.jsx(hv, {}) }),
      ],
    }),
  });
}
Lh.createRoot(document.getElementById("root")).render(
  E.jsx(an.StrictMode, {
    children: E.jsx(Kh, { store: Mm, children: E.jsx(mv, {}) }),
  }),
);
