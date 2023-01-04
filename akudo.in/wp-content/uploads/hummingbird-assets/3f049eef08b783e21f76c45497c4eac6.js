/**handles:sp-wcs-swiper-js**/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function i(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function e(e, t, a) {
    return t && i(e.prototype, t), a && i(e, a), e;
  }
  function a() {
    return (a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t],
            i;
          for (i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  function s(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function r(t, a) {
    void 0 === t && (t = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach(function (e) {
        void 0 === t[e]
          ? (t[e] = a[e])
          : s(a[e]) && s(t[e]) && 0 < Object.keys(a[e]).length && r(t[e], a[e]);
      });
  }
  var t = {
    body: {},
    addEventListener: function e() {},
    removeEventListener: function e() {},
    activeElement: { blur: function e() {}, nodeName: "" },
    querySelector: function e() {
      return null;
    },
    querySelectorAll: function e() {
      return [];
    },
    getElementById: function e() {
      return null;
    },
    createEvent: function e() {
      return { initEvent: function e() {} };
    },
    createElement: function e() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function e() {},
        getElementsByTagName: function e() {
          return [];
        },
      };
    },
    createElementNS: function e() {
      return {};
    },
    importNode: function e() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function y() {
    var e = "undefined" != typeof document ? document : {};
    return r(e, t), e;
  }
  var n = {
    document: t,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function e() {},
      pushState: function e() {},
      go: function e() {},
      back: function e() {},
    },
    CustomEvent: function e() {
      return this;
    },
    addEventListener: function e() {},
    removeEventListener: function e() {},
    getComputedStyle: function e() {
      return {
        getPropertyValue: function e() {
          return "";
        },
      };
    },
    Image: function e() {},
    Date: function e() {},
    screen: {},
    setTimeout: function e() {},
    clearTimeout: function e() {},
    matchMedia: function e() {
      return {};
    },
    requestAnimationFrame: function e(t) {
      return "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame: function e(t) {
      "undefined" != typeof setTimeout && clearTimeout(t);
    },
  };
  function E() {
    var e = "undefined" != typeof window ? window : {};
    return r(e, n), e;
  }
  function o(e, t) {
    (e.prototype = Object.create(t.prototype)),
      ((e.prototype.constructor = e).__proto__ = t);
  }
  function l(e) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function e(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function e(t, a) {
        return (t.__proto__ = a), t;
      })(e, t);
  }
  function p() {
    if (
      "undefined" != typeof Reflect &&
      Reflect.construct &&
      !Reflect.construct.sham
    ) {
      if ("function" == typeof Proxy) return 1;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          1
        );
      } catch (e) {
        return;
      }
    }
  }
  function c(e, t, a) {
    return (c = p()
      ? Reflect.construct
      : function e(t, a, i) {
          var s = [null];
          s.push.apply(s, a);
          var r,
            s = new (Function.bind.apply(t, s))();
          return i && d(s, i.prototype), s;
        }).apply(null, arguments);
  }
  function u(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
  }
  function h(e) {
    var i = "function" == typeof Map ? new Map() : void 0;
    return (h = function e(t) {
      if (null === t || !u(t)) return t;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== i) {
        if (i.has(t)) return i.get(t);
        i.set(t, a);
      }
      function a() {
        return c(t, arguments, l(this).constructor);
      }
      return (
        (a.prototype = Object.create(t.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(a, t)
      );
    })(e);
  }
  function v(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function m(e) {
    var a = e.__proto__;
    Object.defineProperty(e, "__proto__", {
      get: function e() {
        return a;
      },
      set: function e(t) {
        a.__proto__ = t;
      },
    });
  }
  var f = (o(b, (g = h(Array))), b),
    g;
  function b(e) {
    var e,
      e = g.call.apply(g, [this].concat(e)) || this;
    return m(v(e)), e;
  }
  function w(e) {
    var t = [];
    return (
      (e = void 0 === e ? [] : e).forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, w(e)) : t.push(e);
      }),
      t
    );
  }
  function x(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function T(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  function S(e, t) {
    if ("string" != typeof e) return [e];
    for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1)
      a.push(i[s]);
    return a;
  }
  function M(e, t) {
    var a = E(),
      i = y(),
      s = [];
    if (!t && e instanceof f) return e;
    if (!e) return new f(s);
    if ("string" == typeof e) {
      var r = e.trim();
      if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
        var n = "div";
        0 === r.indexOf("<li") && (n = "ul"),
          0 === r.indexOf("<tr") && (n = "tbody"),
          (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (n = "tr"),
          0 === r.indexOf("<tbody") && (n = "table"),
          0 === r.indexOf("<option") && (n = "select");
        var o = i.createElement(n);
        o.innerHTML = r;
        for (var l = 0; l < o.childNodes.length; l += 1)
          s.push(o.childNodes[l]);
      } else s = S(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof f) return e;
      s = e;
    }
    return new f(T(s));
  }
  function C() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = w(
      t.map(function (e) {
        return e.split(" ");
      })
    );
    return (
      this.forEach(function (e) {
        var e;
        (e = e.classList).add.apply(e, i);
      }),
      this
    );
  }
  function z() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = w(
      t.map(function (e) {
        return e.split(" ");
      })
    );
    return (
      this.forEach(function (e) {
        var e;
        (e = e.classList).remove.apply(e, i);
      }),
      this
    );
  }
  function P() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = w(
      t.map(function (e) {
        return e.split(" ");
      })
    );
    this.forEach(function (t) {
      i.forEach(function (e) {
        t.classList.toggle(e);
      });
    });
  }
  function k() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = w(
      t.map(function (e) {
        return e.split(" ");
      })
    );
    return (
      0 <
      x(this, function (t) {
        return (
          0 <
          i.filter(function (e) {
            return t.classList.contains(e);
          }).length
        );
      }).length
    );
  }
  function $(e, t) {
    if (1 === arguments.length && "string" == typeof e)
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (var a = 0; a < this.length; a += 1)
      if (2 === arguments.length) this[a].setAttribute(e, t);
      else for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
    return this;
  }
  function L(e) {
    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function I(e) {
    for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function O(e) {
    for (var t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
    return this;
  }
  function A() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = t[0],
      r = t[1],
      n = t[2],
      s = t[3];
    function o(e) {
      var t = e.target;
      if (t) {
        var a = e.target.dom7EventData || [];
        if ((a.indexOf(e) < 0 && a.unshift(e), M(t).is(r))) n.apply(t, a);
        else
          for (var i = M(t).parents(), s = 0; s < i.length; s += 1)
            M(i[s]).is(r) && n.apply(i[s], a);
      }
    }
    function l(e) {
      var t = (e && e.target && e.target.dom7EventData) || [];
      t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
    }
    "function" == typeof t[1] &&
      ((i = t[0]), (n = t[1]), (s = t[2]), (r = void 0));
    for (var s = s || !1, d = i.split(" "), p, c = 0; c < this.length; c += 1) {
      var u = this[c];
      if (r)
        for (p = 0; p < d.length; p += 1) {
          var h = d[p];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}),
            u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
            u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }),
            u.addEventListener(h, o, s);
        }
      else
        for (p = 0; p < d.length; p += 1) {
          var v = d[p];
          u.dom7Listeners || (u.dom7Listeners = {}),
            u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
            u.dom7Listeners[v].push({ listener: n, proxyListener: l }),
            u.addEventListener(v, l, s);
        }
    }
    return this;
  }
  function D() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    var i = t[0],
      s = t[1],
      r = t[2],
      n = t[3];
    "function" == typeof t[1] &&
      ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0));
    for (var n = n || !1, o = i.split(" "), l = 0; l < o.length; l += 1)
      for (var d = o[l], p = 0; p < this.length; p += 1) {
        var c = this[p],
          u = void 0;
        if (
          (!s && c.dom7Listeners
            ? (u = c.dom7Listeners[d])
            : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
          u && u.length)
        )
          for (var h = u.length - 1; 0 <= h; --h) {
            var v = u[h];
            ((!r || v.listener !== r) &&
              !(
                r &&
                v.listener &&
                v.listener.dom7proxy &&
                v.listener.dom7proxy === r
              ) &&
              r) ||
              (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
          }
      }
    return this;
  }
  function N() {
    for (var e = E(), t = arguments.length, a = new Array(t), i = 0; i < t; i++)
      a[i] = arguments[i];
    for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
      for (var o = s[n], l = 0; l < this.length; l += 1) {
        var d = this[l],
          p;
        e.CustomEvent &&
          ((p = new e.CustomEvent(o, {
            detail: r,
            bubbles: !0,
            cancelable: !0,
          })),
          (d.dom7EventData = a.filter(function (e, t) {
            return 0 < t;
          })),
          d.dispatchEvent(p),
          (d.dom7EventData = []),
          delete d.dom7EventData);
      }
    return this;
  }
  function G(t) {
    var a = this;
    function i(e) {
      e.target === this && (t.call(this, e), a.off("transitionend", i));
    }
    return t && a.on("transitionend", i), this;
  }
  function B(e) {
    if (0 < this.length) {
      if (e) {
        var e = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(e.getPropertyValue("margin-right")) +
          parseFloat(e.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function H(e) {
    if (0 < this.length) {
      if (e) {
        var e = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(e.getPropertyValue("margin-top")) +
          parseFloat(e.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function X() {
    if (0 < this.length) {
      var e = E(),
        t = y(),
        a = this[0],
        i = a.getBoundingClientRect(),
        s = t.body,
        r = a.clientTop || s.clientTop || 0,
        t = a.clientLeft || s.clientLeft || 0,
        s = a === e ? e.scrollY : a.scrollTop,
        a = a === e ? e.scrollX : a.scrollLeft;
      return { top: i.top + s - r, left: i.left + a - t };
    }
    return null;
  }
  function R() {
    var e = E();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function Y(e, t) {
    var a = E(),
      i;
    if (1 === arguments.length) {
      if ("string" != typeof e) {
        for (i = 0; i < this.length; i += 1)
          for (var s in e) this[i].style[s] = e[s];
        return this;
      }
      if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e);
    }
    if (2 !== arguments.length || "string" != typeof e) return this;
    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
    return this;
  }
  function V(a) {
    return (
      a &&
        this.forEach(function (e, t) {
          a.apply(e, [e, t]);
        }),
      this
    );
  }
  function W(e) {
    var t;
    return M(x(this, e));
  }
  function F(e) {
    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function _(e) {
    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function q(e) {
    var t = E(),
      a = y(),
      i = this[0],
      s,
      r;
    if (!i || void 0 === e) return !1;
    if ("string" == typeof e) {
      if (i.matches) return i.matches(e);
      if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
      if (i.msMatchesSelector) return i.msMatchesSelector(e);
      for (s = M(e), r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
      return !1;
    }
    if (e === a) return i === a;
    if (e === t) return i === t;
    if (e.nodeType || e instanceof f) {
      for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
        if (s[r] === i) return !0;
      return !1;
    }
    return !1;
  }
  function j() {
    var e = this[0],
      t;
    if (e) {
      for (t = 0; null !== (e = e.previousSibling); )
        1 === e.nodeType && (t += 1);
      return t;
    }
  }
  function U(e) {
    if (void 0 === e) return this;
    var t = this.length;
    if (t - 1 < e) return M([]);
    if (e < 0) {
      var t = t + e;
      return t < 0 ? M([]) : M([this[t]]);
    }
    return M([this[e]]);
  }
  function K() {
    for (var e, t = y(), a = 0; a < arguments.length; a += 1)
      for (
        var e = a < 0 || arguments.length <= a ? void 0 : arguments[a], i = 0;
        i < this.length;
        i += 1
      )
        if ("string" == typeof e) {
          var s = t.createElement("div");
          for (s.innerHTML = e; s.firstChild; )
            this[i].appendChild(s.firstChild);
        } else if (e instanceof f)
          for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
        else this[i].appendChild(e);
    return this;
  }
  function Z(e) {
    for (var t = y(), a, i, a = 0; a < this.length; a += 1)
      if ("string" == typeof e) {
        var s = t.createElement("div");
        for (s.innerHTML = e, i = s.childNodes.length - 1; 0 <= i; --i)
          this[a].insertBefore(s.childNodes[i], this[a].childNodes[0]);
      } else if (e instanceof f)
        for (i = 0; i < e.length; i += 1)
          this[a].insertBefore(e[i], this[a].childNodes[0]);
      else this[a].insertBefore(e, this[a].childNodes[0]);
    return this;
  }
  function J(e) {
    return 0 < this.length
      ? e
        ? this[0].nextElementSibling && M(this[0].nextElementSibling).is(e)
          ? M([this[0].nextElementSibling])
          : M([])
        : this[0].nextElementSibling
        ? M([this[0].nextElementSibling])
        : M([])
      : M([]);
  }
  function Q(e) {
    var t = [],
      a = this[0];
    if (!a) return M([]);
    for (; a.nextElementSibling; ) {
      var i = a.nextElementSibling;
      (!e || M(i).is(e)) && t.push(i), (a = i);
    }
    return M(t);
  }
  function ee(e) {
    if (0 < this.length) {
      var t = this[0];
      return e
        ? t.previousElementSibling && M(t.previousElementSibling).is(e)
          ? M([t.previousElementSibling])
          : M([])
        : t.previousElementSibling
        ? M([t.previousElementSibling])
        : M([]);
    }
    return M([]);
  }
  function te(e) {
    var t = [],
      a = this[0];
    if (!a) return M([]);
    for (; a.previousElementSibling; ) {
      var i = a.previousElementSibling;
      (!e || M(i).is(e)) && t.push(i), (a = i);
    }
    return M(t);
  }
  function ae(e) {
    for (var t = [], a = 0; a < this.length; a += 1)
      null === this[a].parentNode ||
        (e && !M(this[a].parentNode).is(e)) ||
        t.push(this[a].parentNode);
    return M(t);
  }
  function ie(e) {
    for (var t = [], a = 0; a < this.length; a += 1)
      for (var i = this[a].parentNode; i; )
        (e && !M(i).is(e)) || t.push(i), (i = i.parentNode);
    return M(t);
  }
  function se(e) {
    var t = this;
    return void 0 === e ? M([]) : t.is(e) ? t : t.parents(e).eq(0);
  }
  function re(t) {
    for (var e = [], a = 0; a < this.length; a += 1) {
      try {
        var i = this[a].querySelectorAll(t);
      } catch (e) {
        console.log(t);
      }
      for (var s = 0; s < i.length; s += 1) e.push(i[s]);
    }
    return M(e);
  }
  function ne(e) {
    for (var t = [], a = 0; a < this.length; a += 1)
      for (var i = this[a].children, s = 0; s < i.length; s += 1)
        (e && !M(i[s]).is(e)) || t.push(i[s]);
    return M(t);
  }
  function oe() {
    for (var e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  M.fn = f.prototype;
  var le = {
      addClass: C,
      removeClass: z,
      hasClass: k,
      toggleClass: P,
      attr: $,
      removeAttr: L,
      transform: I,
      transition: O,
      on: A,
      off: D,
      trigger: N,
      transitionEnd: G,
      outerWidth: B,
      outerHeight: H,
      styles: R,
      offset: X,
      css: Y,
      each: V,
      html: F,
      text: _,
      is: q,
      index: j,
      eq: U,
      append: K,
      prepend: Z,
      next: J,
      nextAll: Q,
      prev: ee,
      prevAll: te,
      parent: ae,
      parents: ie,
      closest: se,
      find: re,
      children: ne,
      filter: W,
      remove: oe,
    },
    de,
    pe,
    ce;
  function ue(e) {
    var t = e;
    Object.keys(t).forEach(function (e) {
      try {
        t[e] = null;
      } catch (e) {}
      try {
        delete t[e];
      } catch (e) {}
    });
  }
  function he(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function ve() {
    return Date.now();
  }
  function me(e) {
    var t = E(),
      a;
    return (a =
      (a =
        !(a = t.getComputedStyle ? t.getComputedStyle(e, null) : a) &&
        e.currentStyle
          ? e.currentStyle
          : a) || e.style);
  }
  function fe(e, t) {
    void 0 === t && (t = "x");
    var a = E(),
      i,
      s,
      r,
      e = me(e);
    return (
      a.WebKitCSSMatrix
        ? (6 < (s = e.transform || e.webkitTransform).split(",").length &&
            (s = s
              .split(", ")
              .map(function (e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
        : (i = (r =
            e.MozTransform ||
            e.OTransform ||
            e.MsTransform ||
            e.msTransform ||
            e.transform ||
            e
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (s = a.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      (s =
        "y" === t
          ? a.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])
          : s) || 0
    );
  }
  function ge(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function be(e) {
    for (
      var t = Object(arguments.length <= 0 ? void 0 : e),
        a = ["__proto__", "constructor", "prototype"],
        i = 1;
      i < arguments.length;
      i += 1
    ) {
      var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s)
        for (
          var r = Object.keys(Object(s)).filter(function (e) {
              return a.indexOf(e) < 0;
            }),
            n = 0,
            o = r.length;
          n < o;
          n += 1
        ) {
          var l = r[n],
            d = Object.getOwnPropertyDescriptor(s, l);
          void 0 !== d &&
            d.enumerable &&
            (ge(t[l]) && ge(s[l])
              ? s[l].__swiper__
                ? (t[l] = s[l])
                : be(t[l], s[l])
              : !ge(t[l]) && ge(s[l])
              ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : be(t[l], s[l]))
              : (t[l] = s[l]));
        }
    }
    return t;
  }
  function we(a, i) {
    Object.keys(i).forEach(function (t) {
      ge(i[t]) &&
        Object.keys(i[t]).forEach(function (e) {
          "function" == typeof i[t][e] && (i[t][e] = i[t][e].bind(a));
        }),
        (a[t] = i[t]);
    });
  }
  function ye(e) {
    return (
      "." +
      (e = void 0 === e ? "" : e)
        .trim()
        .replace(/([\.:\/])/g, "\\$1")
        .replace(/ /g, ".")
    );
  }
  function Ee() {
    var i = E(),
      e = y();
    return {
      touch: !!(
        "ontouchstart" in i ||
        (i.DocumentTouch && e instanceof i.DocumentTouch)
      ),
      pointerEvents:
        !!i.PointerEvent &&
        "maxTouchPoints" in i.navigator &&
        0 <= i.navigator.maxTouchPoints,
      observer: (function e() {
        return "MutationObserver" in i || "WebkitMutationObserver" in i;
      })(),
      passiveListener: (function e() {
        var t = !1;
        try {
          var a = Object.defineProperty({}, "passive", {
            get: function e() {
              t = !0;
            },
          });
          i.addEventListener("testPassiveListener", null, a);
        } catch (e) {}
        return t;
      })(),
      gestures: (function e() {
        return "ongesturestart" in i;
      })(),
    };
  }
  function xe() {
    return (de = de || Ee());
  }
  function Te(e) {
    var t,
      a = (void 0 === e ? {} : e).userAgent,
      i = xe(),
      s = E(),
      r = s.navigator.platform,
      n = a || s.navigator.userAgent,
      o = { ios: !1, android: !1 },
      l = s.screen.width,
      d = s.screen.height,
      p = n.match(/(Android);?[\s\/]+([\d.]+)?/),
      c = n.match(/(iPad).*OS\s([\d_]+)/),
      e = n.match(/(iPod)(.*OS\s([\d_]+))?/),
      a = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      s = "Win32" === r,
      r = "MacIntel" === r,
      u;
    return (
      !c &&
        r &&
        i.touch &&
        0 <=
          [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810",
          ].indexOf(l + "x" + d) &&
        ((c = (c = n.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
        (r = !1)),
      p && !s && ((o.os = "android"), (o.android = !0)),
      (c || a || e) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function Se(e) {
    return void 0 === e && (e = {}), (pe = pe || Te(e));
  }
  function Ce() {
    var t = E();
    function e() {
      var e = t.navigator.userAgent.toLowerCase();
      return (
        0 <= e.indexOf("safari") &&
        e.indexOf("chrome") < 0 &&
        e.indexOf("android") < 0
      );
    }
    return {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari: e(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    };
  }
  function Me() {
    return (ce = ce || Ce());
  }
  Object.keys(le).forEach(function (e) {
    Object.defineProperty(M.fn, e, { value: le[e], writable: !0 });
  });
  var ze = function e() {
      var t;
      return void 0 !== E().ResizeObserver;
    },
    Pe = {
      name: "resize",
      create: function e() {
        var r = this;
        be(r, {
          resize: {
            observer: null,
            createObserver: function e() {
              r &&
                !r.destroyed &&
                r.initialized &&
                ((r.resize.observer = new ResizeObserver(function (e) {
                  var t = r.width,
                    a = r.height,
                    i = t,
                    s = a;
                  e.forEach(function (e) {
                    var t = e.contentBoxSize,
                      a = e.contentRect,
                      e = e.target;
                    (e && e !== r.el) ||
                      ((i = a ? a.width : (t[0] || t).inlineSize),
                      (s = a ? a.height : (t[0] || t).blockSize));
                  }),
                    (i === t && s === a) || r.resize.resizeHandler();
                })),
                r.resize.observer.observe(r.el));
            },
            removeObserver: function e() {
              r.resize.observer &&
                r.resize.observer.unobserve &&
                r.el &&
                (r.resize.observer.unobserve(r.el), (r.resize.observer = null));
            },
            resizeHandler: function e() {
              r &&
                !r.destroyed &&
                r.initialized &&
                (r.emit("beforeResize"), r.emit("resize"));
            },
            orientationChangeHandler: function e() {
              r && !r.destroyed && r.initialized && r.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function e(t) {
          var a = E();
          t.params.resizeObserver && ze()
            ? t.resize.createObserver()
            : (a.addEventListener("resize", t.resize.resizeHandler),
              a.addEventListener(
                "orientationchange",
                t.resize.orientationChangeHandler
              ));
        },
        destroy: function e(t) {
          var a = E();
          t.resize.removeObserver(),
            a.removeEventListener("resize", t.resize.resizeHandler),
            a.removeEventListener(
              "orientationchange",
              t.resize.orientationChangeHandler
            );
        },
      },
    },
    ke = {
      attach: function e(t, a) {
        void 0 === a && (a = {});
        var i = E(),
          s = this,
          r,
          n = new (i.MutationObserver || i.WebkitMutationObserver)(function (
            t
          ) {
            var e;
            1 !== t.length
              ? ((e = function e() {
                  s.emit("observerUpdate", t[0]);
                }),
                i.requestAnimationFrame
                  ? i.requestAnimationFrame(e)
                  : i.setTimeout(e, 0))
              : s.emit("observerUpdate", t[0]);
          });
        n.observe(t, {
          attributes: void 0 === a.attributes || a.attributes,
          childList: void 0 === a.childList || a.childList,
          characterData: void 0 === a.characterData || a.characterData,
        }),
          s.observer.observers.push(n);
      },
      init: function e() {
        var t = this;
        if (t.support.observer && t.params.observer) {
          if (t.params.observeParents)
            for (var a = t.$el.parents(), i = 0; i < a.length; i += 1)
              t.observer.attach(a[i]);
          t.observer.attach(t.$el[0], {
            childList: t.params.observeSlideChildren,
          }),
            t.observer.attach(t.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function e() {
        var t = this;
        t.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (t.observer.observers = []);
      },
    },
    $e = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function e() {
        var t;
        we(this, { observer: a({}, ke, { observers: [] }) });
      },
      on: {
        init: function e(t) {
          t.observer.init();
        },
        destroy: function e(t) {
          t.observer.destroy();
        },
      },
    },
    Le,
    Ie,
    Oe,
    Ae,
    De,
    Ne,
    Ge,
    Be,
    He;
  function Xe() {
    var e = this,
      t,
      a,
      i = e.$el,
      t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth,
      a =
        void 0 !== e.params.height && null !== e.params.height
          ? e.params.height
          : i[0].clientHeight;
    (0 === t && e.isHorizontal()) ||
      (0 === a && e.isVertical()) ||
      ((t =
        t -
        parseInt(i.css("padding-left") || 0, 10) -
        parseInt(i.css("padding-right") || 0, 10)),
      (a =
        a -
        parseInt(i.css("padding-top") || 0, 10) -
        parseInt(i.css("padding-bottom") || 0, 10)),
      be(e, {
        width: (t = Number.isNaN(t) ? 0 : t),
        height: (a = Number.isNaN(a) ? 0 : a),
        size: e.isHorizontal() ? t : a,
      }));
  }
  function Re() {
    var a = this,
      i = function e(t) {
        return a.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      },
      e = function e(t, a) {
        return parseFloat(t.getPropertyValue(i(a)) || 0);
      },
      s = a.params,
      t = a.$wrapperEl,
      r = a.size,
      n = a.rtlTranslate,
      o = a.wrongRTL,
      l = a.virtual && s.virtual.enabled,
      d = (l ? a.virtual : a).slides.length,
      p = t.children("." + a.params.slideClass),
      c = (l ? a.virtual.slides : p).length,
      u = [],
      h = [],
      v = [];
    function m(e, t) {
      return !s.cssMode || t !== p.length - 1;
    }
    var f = s.slidesOffsetBefore;
    "function" == typeof f && (f = s.slidesOffsetBefore.call(a));
    var g = s.slidesOffsetAfter;
    "function" == typeof g && (g = s.slidesOffsetAfter.call(a));
    var b = a.snapGrid.length,
      l = a.slidesGrid.length,
      w = s.spaceBetween,
      y = -f,
      E = 0,
      x = 0,
      T,
      S;
    if (void 0 !== r) {
      "string" == typeof w &&
        0 <= w.indexOf("%") &&
        (w = (parseFloat(w.replace("%", "")) / 100) * r),
        (a.virtualSize = -w),
        n
          ? p.css({ marginLeft: "", marginTop: "" })
          : p.css({ marginRight: "", marginBottom: "" }),
        1 < s.slidesPerColumn &&
          ((T =
            Math.floor(c / s.slidesPerColumn) === c / a.params.slidesPerColumn
              ? c
              : Math.ceil(c / s.slidesPerColumn) * s.slidesPerColumn),
          "auto" !== s.slidesPerView &&
            "row" === s.slidesPerColumnFill &&
            (T = Math.max(T, s.slidesPerView * s.slidesPerColumn)));
      for (
        var C = s.slidesPerColumn,
          M = T / C,
          z = Math.floor(c / s.slidesPerColumn),
          P = 0,
          k,
          o,
          $,
          n,
          $,
          L,
          I,
          u,
          O,
          A;
        P < c;
        P += 1
      ) {
        S = 0;
        var D = p.eq(P),
          N,
          G,
          B,
          H,
          X,
          R,
          B,
          G,
          N,
          Y,
          V,
          W,
          X,
          R,
          H,
          N,
          G,
          B,
          Y,
          B,
          F,
          S;
        1 < s.slidesPerColumn &&
          ((B = G = N = void 0),
          "row" === s.slidesPerColumnFill && 1 < s.slidesPerGroup
            ? ((H = Math.floor(P / (s.slidesPerGroup * s.slidesPerColumn))),
              (X = P - s.slidesPerColumn * s.slidesPerGroup * H),
              (R =
                0 === H
                  ? s.slidesPerGroup
                  : Math.min(
                      Math.ceil((c - H * C * s.slidesPerGroup) / C),
                      s.slidesPerGroup
                    )),
              (G = X - (B = Math.floor(X / R)) * R + H * s.slidesPerGroup),
              D.css({
                "-webkit-box-ordinal-group": (N = G + (B * T) / C),
                "-moz-box-ordinal-group": N,
                "-ms-flex-order": N,
                "-webkit-order": N,
                order: N,
              }))
            : "column" === s.slidesPerColumnFill
            ? ((B = P - (G = Math.floor(P / C)) * C),
              (z < G || (G === z && B === C - 1)) &&
                C <= (B += 1) &&
                ((B = 0), (G += 1)))
            : (G = P - (B = Math.floor(P / M)) * M),
          D.css(
            i("margin-top"),
            0 !== B && s.spaceBetween && s.spaceBetween + "px"
          )),
          "none" !== D.css("display") &&
            ("auto" === s.slidesPerView
              ? ((Y = getComputedStyle(D[0])),
                (V = D[0].style.transform),
                (W = D[0].style.webkitTransform),
                V && (D[0].style.transform = "none"),
                W && (D[0].style.webkitTransform = "none"),
                (S = s.roundLengths
                  ? a.isHorizontal()
                    ? D.outerWidth(!0)
                    : D.outerHeight(!0)
                  : ((X = e(Y, "width")),
                    (R = e(Y, "padding-left")),
                    (H = e(Y, "padding-right")),
                    (N = e(Y, "margin-left")),
                    (G = e(Y, "margin-right")),
                    (B = Y.getPropertyValue("box-sizing")) && "border-box" === B
                      ? X + N + G
                      : ((B = (Y = D[0]).clientWidth),
                        X + R + H + N + G + (Y.offsetWidth - B)))),
                V && (D[0].style.transform = V),
                W && (D[0].style.webkitTransform = W),
                s.roundLengths && (S = Math.floor(S)))
              : ((S = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                s.roundLengths && (S = Math.floor(S)),
                p[P] && (p[P].style[i("width")] = S + "px")),
            p[P] && (p[P].swiperSlideSize = S),
            v.push(S),
            s.centeredSlides
              ? ((y = y + S / 2 + E / 2 + w),
                0 === E && 0 !== P && (y = y - r / 2 - w),
                0 === P && (y = y - r / 2 - w),
                Math.abs(y) < 0.001 && (y = 0),
                s.roundLengths && (y = Math.floor(y)),
                x % s.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (s.roundLengths && (y = Math.floor(y)),
                (x - Math.min(a.params.slidesPerGroupSkip, x)) %
                  a.params.slidesPerGroup ==
                  0 && u.push(y),
                h.push(y),
                (y = y + S + w)),
            (a.virtualSize += S + w),
            (E = S),
            (x += 1));
      }
      if (
        ((a.virtualSize = Math.max(a.virtualSize, r) + g),
        n &&
          o &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          t.css({ width: a.virtualSize + s.spaceBetween + "px" }),
        s.setWrapperSize &&
          t.css(
            (((o = {})[i("width")] = a.virtualSize + s.spaceBetween + "px"), o)
          ),
        1 < s.slidesPerColumn)
      )
        if (
          ((a.virtualSize = (S + s.spaceBetween) * T),
          (a.virtualSize =
            Math.ceil(a.virtualSize / s.slidesPerColumn) - s.spaceBetween),
          t.css(
            ((($ = {})[i("width")] = a.virtualSize + s.spaceBetween + "px"), $)
          ),
          s.centeredSlides)
        ) {
          for (var k = [], _ = 0; _ < u.length; _ += 1) {
            var q = u[_];
            s.roundLengths && (q = Math.floor(q)),
              u[_] < a.virtualSize + u[0] && k.push(q);
          }
          u = k;
        }
      if (!s.centeredSlides) {
        k = [];
        for (var j = 0; j < u.length; j += 1) {
          var U = u[j];
          s.roundLengths && (U = Math.floor(U)),
            u[j] <= a.virtualSize - r && k.push(U);
        }
        (u = k),
          1 < Math.floor(a.virtualSize - r) - Math.floor(u[u.length - 1]) &&
            u.push(a.virtualSize - r);
      }
      0 === u.length && (u = [0]),
        0 !== s.spaceBetween &&
          (($ = a.isHorizontal() && n ? "marginLeft" : i("marginRight")),
          p.filter(m).css((((n = {})[$] = w + "px"), n))),
        s.centeredSlides &&
          s.centeredSlidesBounds &&
          ((L = 0),
          v.forEach(function (e) {
            L += e + (s.spaceBetween || 0);
          }),
          (I = (L -= s.spaceBetween) - r),
          (u = u.map(function (e) {
            return e < 0 ? -f : I < e ? I + g : e;
          }))),
        s.centerInsufficientSlides &&
          ((O = 0),
          v.forEach(function (e) {
            O += e + (s.spaceBetween || 0);
          }),
          (O -= s.spaceBetween) < r &&
            ((A = (r - O) / 2),
            u.forEach(function (e, t) {
              u[t] = e - A;
            }),
            h.forEach(function (e, t) {
              h[t] = e + A;
            }))),
        be(a, { slides: p, snapGrid: u, slidesGrid: h, slidesSizesGrid: v }),
        c !== d && a.emit("slidesLengthChange"),
        u.length !== b &&
          (a.params.watchOverflow && a.checkOverflow(),
          a.emit("snapGridLengthChange")),
        h.length !== l && a.emit("slidesGridLengthChange"),
        (s.watchSlidesProgress || s.watchSlidesVisibility) &&
          a.updateSlidesOffset();
    }
  }
  function Ye(e) {
    var t = this,
      a = [],
      i = 0,
      s,
      r,
      i;
    if (
      ("number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed),
      "auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
    )
      if (t.params.centeredSlides)
        t.visibleSlides.each(function (e) {
          a.push(e);
        });
      else
        for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
          var n = t.activeIndex + s;
          if (n > t.slides.length) break;
          a.push(t.slides.eq(n)[0]);
        }
    else a.push(t.slides.eq(t.activeIndex)[0]);
    for (s = 0; s < a.length; s += 1) {
      void 0 !== a[s] && (i = i < (r = a[s].offsetHeight) ? r : i);
    }
    i && t.$wrapperEl.css("height", i + "px");
  }
  function Ve() {
    for (var e = this, t = e.slides, a = 0; a < t.length; a += 1)
      t[a].swiperSlideOffset = e.isHorizontal()
        ? t[a].offsetLeft
        : t[a].offsetTop;
  }
  function We(e) {
    void 0 === e && (e = (this && this.translate) || 0);
    var t = this,
      a = t.params,
      i = t.slides,
      s = t.rtlTranslate;
    if (0 !== i.length) {
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      var r = s ? e : -e;
      i.removeClass(a.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (var n = 0; n < i.length; n += 1) {
        var o = i[n],
          l =
            (r +
              (a.centeredSlides ? t.minTranslate() : 0) -
              o.swiperSlideOffset) /
            (o.swiperSlideSize + a.spaceBetween),
          d,
          p,
          c;
        (a.watchSlidesVisibility || (a.centeredSlides && a.autoHeight)) &&
          ((p = (d = -(r - o.swiperSlideOffset)) + t.slidesSizesGrid[n]),
          ((0 <= d && d < t.size - 1) ||
            (1 < p && p <= t.size) ||
            (d <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(n),
            i.eq(n).addClass(a.slideVisibleClass))),
          (o.progress = s ? -l : l);
      }
      t.visibleSlides = M(t.visibleSlides);
    }
  }
  function Fe(e) {
    var t = this,
      a;
    void 0 === e &&
      ((a = t.rtlTranslate ? -1 : 1),
      (e = (t && t.translate && t.translate * a) || 0));
    var i = t.params,
      s = t.maxTranslate() - t.minTranslate(),
      r = t.progress,
      n = t.isBeginning,
      o,
      l = n,
      a = (o = t.isEnd),
      o =
        0 == s
          ? (n = !(r = 0))
          : ((n = (r = (e - t.minTranslate()) / s) <= 0), 1 <= r);
    be(t, { progress: r, isBeginning: n, isEnd: o }),
      (i.watchSlidesProgress ||
        i.watchSlidesVisibility ||
        (i.centeredSlides && i.autoHeight)) &&
        t.updateSlidesProgress(e),
      n && !l && t.emit("reachBeginning toEdge"),
      o && !a && t.emit("reachEnd toEdge"),
      ((l && !n) || (a && !o)) && t.emit("fromEdge"),
      t.emit("progress", r);
  }
  function _e() {
    var e = this,
      t = e.slides,
      a = e.params,
      i = e.$wrapperEl,
      s = e.activeIndex,
      r = e.realIndex,
      n = e.virtual && a.virtual.enabled,
      s;
    t.removeClass(
      a.slideActiveClass +
        " " +
        a.slideNextClass +
        " " +
        a.slidePrevClass +
        " " +
        a.slideDuplicateActiveClass +
        " " +
        a.slideDuplicateNextClass +
        " " +
        a.slideDuplicatePrevClass
    ),
      (s = n
        ? e.$wrapperEl.find(
            "." + a.slideClass + '[data-swiper-slide-index="' + s + '"]'
          )
        : t.eq(s)).addClass(a.slideActiveClass),
      a.loop &&
        (s.hasClass(a.slideDuplicateClass)
          ? i.children(
              "." +
                a.slideClass +
                ":not(." +
                a.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                r +
                '"]'
            )
          : i.children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                r +
                '"]'
            )
        ).addClass(a.slideDuplicateActiveClass);
    var r = s
      .nextAll("." + a.slideClass)
      .eq(0)
      .addClass(a.slideNextClass);
    a.loop && 0 === r.length && (r = t.eq(0)).addClass(a.slideNextClass);
    var s = s
      .prevAll("." + a.slideClass)
      .eq(0)
      .addClass(a.slidePrevClass);
    a.loop && 0 === s.length && (s = t.eq(-1)).addClass(a.slidePrevClass),
      a.loop &&
        ((r.hasClass(a.slideDuplicateClass)
          ? i.children(
              "." +
                a.slideClass +
                ":not(." +
                a.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                r.attr("data-swiper-slide-index") +
                '"]'
            )
          : i.children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                r.attr("data-swiper-slide-index") +
                '"]'
            )
        ).addClass(a.slideDuplicateNextClass),
        (s.hasClass(a.slideDuplicateClass)
          ? i.children(
              "." +
                a.slideClass +
                ":not(." +
                a.slideDuplicateClass +
                ')[data-swiper-slide-index="' +
                s.attr("data-swiper-slide-index") +
                '"]'
            )
          : i.children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                '[data-swiper-slide-index="' +
                s.attr("data-swiper-slide-index") +
                '"]'
            )
        ).addClass(a.slideDuplicatePrevClass)),
      e.emitSlidesClasses();
  }
  function qe(e) {
    var t = this,
      a = t.rtlTranslate ? t.translate : -t.translate,
      i = t.slidesGrid,
      s = t.snapGrid,
      r = t.params,
      n = t.activeIndex,
      o = t.realIndex,
      l = t.snapIndex,
      d = e,
      r,
      e,
      r,
      s;
    if (void 0 === d) {
      for (var p = 0; p < i.length; p += 1)
        void 0 !== i[p + 1]
          ? a >= i[p] && a < i[p + 1] - (i[p + 1] - i[p]) / 2
            ? (d = p)
            : a >= i[p] && a < i[p + 1] && (d = p + 1)
          : a >= i[p] && (d = p);
      r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
    }
    (r =
      0 <= s.indexOf(a)
        ? s.indexOf(a)
        : (e = Math.min(r.slidesPerGroupSkip, d)) +
          Math.floor((d - e) / r.slidesPerGroup)) >= s.length &&
      (r = s.length - 1),
      d !== n
        ? ((s = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          )),
          be(t, {
            snapIndex: r,
            realIndex: s,
            previousIndex: n,
            activeIndex: d,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== s && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange"))
        : r !== l && ((t.snapIndex = r), t.emit("snapIndexChange"));
  }
  function je(e) {
    var t = this,
      a = t.params,
      i = M(e.target).closest("." + a.slideClass)[0],
      s = !1,
      r;
    if (i)
      for (var n = 0; n < t.slides.length; n += 1)
        if (t.slides[n] === i) {
          (s = !0), (r = n);
          break;
        }
    if (!i || !s)
      return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
    (t.clickedSlide = i),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(M(i).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = r),
      a.slideToClickedSlide &&
        void 0 !== t.clickedIndex &&
        t.clickedIndex !== t.activeIndex &&
        t.slideToClickedSlide();
  }
  function Ue(e) {
    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
    var t = this,
      a = t.params,
      i = t.rtlTranslate,
      s = t.translate,
      t = t.$wrapperEl;
    if (a.virtualTranslate) return i ? -s : s;
    if (a.cssMode) return s;
    var e = fe(t[0], e);
    return (e = i ? -e : e) || 0;
  }
  function Ke(e, t) {
    var a = this,
      i = a.rtlTranslate,
      s = a.params,
      r = a.$wrapperEl,
      n = a.wrapperEl,
      o = a.progress,
      l = 0,
      d = 0,
      p = 0,
      c;
    a.isHorizontal() ? (l = i ? -e : e) : (d = e),
      s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
      s.cssMode
        ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal()
            ? -l
            : -d)
        : s.virtualTranslate ||
          r.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
      (a.previousTranslate = a.translate),
      (a.translate = a.isHorizontal() ? l : d);
    var d = a.maxTranslate() - a.minTranslate(),
      c;
    (c = 0 == d ? 0 : (e - a.minTranslate()) / d) !== o && a.updateProgress(e),
      a.emit("setTranslate", a.translate, t);
  }
  function Ze() {
    return -this.snapGrid[0];
  }
  function Je() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Qe(e, t, a, i, s) {
    void 0 === e && (e = 0),
      void 0 === t && (t = this.params.speed),
      void 0 === a && (a = !0),
      void 0 === i && (i = !0);
    var r = this,
      n = r.params,
      o = r.wrapperEl;
    if (r.animating && n.preventInteractionOnTransition) return !1;
    var l = r.minTranslate(),
      d = r.maxTranslate(),
      d,
      d = i && l < e ? l : i && e < d ? d : e;
    if ((r.updateProgress(d), n.cssMode)) {
      var e = r.isHorizontal(),
        n;
      return (
        0 !== t && o.scrollTo
          ? o.scrollTo(
              (((n = {})[e ? "left" : "top"] = -d), (n.behavior = "smooth"), n)
            )
          : (o[e ? "scrollLeft" : "scrollTop"] = -d),
        !0
      );
    }
    return (
      0 === t
        ? (r.setTransition(0),
          r.setTranslate(d),
          a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd")))
        : (r.setTransition(t),
          r.setTranslate(d),
          a &&
            (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")),
          r.animating ||
            ((r.animating = !0),
            r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function e(t) {
                r &&
                  !r.destroyed &&
                  t.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  a && r.emit("transitionEnd"));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onTranslateToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  function et(e, t) {
    var a = this;
    a.params.cssMode || a.$wrapperEl.transition(e),
      a.emit("setTransition", e, t);
  }
  function tt(e, t) {
    void 0 === e && (e = !0);
    var a = this,
      i = a.activeIndex,
      s = a.params,
      r = a.previousIndex,
      t,
      t;
    s.cssMode ||
      (s.autoHeight && a.updateAutoHeight(),
      (t = (t = t) || (r < i ? "next" : i < r ? "prev" : "reset")),
      a.emit("transitionStart"),
      e &&
        i !== r &&
        ("reset" !== t
          ? (a.emit("slideChangeTransitionStart"),
            "next" === t
              ? a.emit("slideNextTransitionStart")
              : a.emit("slidePrevTransitionStart"))
          : a.emit("slideResetTransitionStart")));
  }
  function at(e, t) {
    void 0 === e && (e = !0);
    var a = this,
      i = a.activeIndex,
      s = a.previousIndex,
      r = a.params,
      t,
      t;
    (a.animating = !1),
      r.cssMode ||
        (a.setTransition(0),
        (t = (t = t) || (s < i ? "next" : i < s ? "prev" : "reset")),
        a.emit("transitionEnd"),
        e &&
          i !== s &&
          ("reset" !== t
            ? (a.emit("slideChangeTransitionEnd"),
              "next" === t
                ? a.emit("slideNextTransitionEnd")
                : a.emit("slidePrevTransitionEnd"))
            : a.emit("slideResetTransitionEnd")));
  }
  function it(e, t, a, i) {
    if (
      (void 0 === t && (t = this.params.speed),
      void 0 === a && (a = !0),
      "number" != typeof (e = void 0 === e ? 0 : e) && "string" != typeof e)
    )
      throw new Error(
        "The 'index' argument cannot have type other than 'number' or 'string'. [" +
          typeof e +
          "] given."
      );
    if ("string" == typeof e) {
      var s = parseInt(e, 10),
        r;
      if (!isFinite(s))
        throw new Error(
          "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
            e +
            "] given."
        );
      e = s;
    }
    var n = this,
      o = e;
    o < 0 && (o = 0);
    var l = n.params,
      d = n.snapGrid,
      p = n.slidesGrid,
      c = n.previousIndex,
      u = n.activeIndex,
      h = n.rtlTranslate,
      s = n.wrapperEl;
    if (n.animating && l.preventInteractionOnTransition) return !1;
    var e = Math.min(n.params.slidesPerGroupSkip, o),
      e = e + Math.floor((o - e) / n.params.slidesPerGroup);
    e >= d.length && (e = d.length - 1),
      (u || l.initialSlide || 0) === (c || 0) &&
        a &&
        n.emit("beforeSlideChangeStart");
    var v = -d[e],
      m;
    if ((n.updateProgress(v), l.normalizeSlideIndex))
      for (var f = 0; f < p.length; f += 1) {
        var g = -Math.floor(100 * v),
          b = Math.floor(100 * p[f]),
          w = Math.floor(100 * p[f + 1]);
        void 0 !== p[f + 1]
          ? b <= g && g < w - (w - b) / 2
            ? (o = f)
            : b <= g && g < w && (o = f + 1)
          : b <= g && (o = f);
      }
    if (n.initialized && o !== u) {
      if (!n.allowSlideNext && v < n.translate && v < n.minTranslate())
        return !1;
      if (
        !n.allowSlidePrev &&
        v > n.translate &&
        v > n.maxTranslate() &&
        (u || 0) !== o
      )
        return !1;
    }
    if (
      ((m = u < o ? "next" : o < u ? "prev" : "reset"),
      (h && -v === n.translate) || (!h && v === n.translate))
    )
      return (
        n.updateActiveIndex(o),
        l.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        "slide" !== l.effect && n.setTranslate(v),
        "reset" !== m && (n.transitionStart(a, m), n.transitionEnd(a, m)),
        !1
      );
    if (l.cssMode) {
      var u = n.isHorizontal(),
        l = -v,
        h;
      return (
        h && (l = s.scrollWidth - s.offsetWidth - l),
        0 !== t && s.scrollTo
          ? s.scrollTo(
              (((h = {})[u ? "left" : "top"] = l), (h.behavior = "smooth"), h)
            )
          : (s[u ? "scrollLeft" : "scrollTop"] = l),
        !0
      );
    }
    return (
      0 === t
        ? (n.setTransition(0),
          n.setTranslate(v),
          n.updateActiveIndex(o),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, i),
          n.transitionStart(a, m),
          n.transitionEnd(a, m))
        : (n.setTransition(t),
          n.setTranslate(v),
          n.updateActiveIndex(o),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, i),
          n.transitionStart(a, m),
          n.animating ||
            ((n.animating = !0),
            n.onSlideToWrapperTransitionEnd ||
              (n.onSlideToWrapperTransitionEnd = function e(t) {
                n &&
                  !n.destroyed &&
                  t.target === this &&
                  (n.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(a, m));
              }),
            n.$wrapperEl[0].addEventListener(
              "transitionend",
              n.onSlideToWrapperTransitionEnd
            ),
            n.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              n.onSlideToWrapperTransitionEnd
            ))),
      !0
    );
  }
  function st(e, t, a, i) {
    void 0 === t && (t = this.params.speed);
    var s = this,
      e = (e = void 0 === e ? 0 : e);
    return (
      s.params.loop && (e += s.loopedSlides),
      s.slideTo(e, t, (a = void 0 === a ? !0 : a), i)
    );
  }
  function rt(e, t, a) {
    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
    var i = this,
      s = i.params,
      r = i.animating,
      n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
    if (s.loop) {
      if (r && s.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    return i.slideTo(i.activeIndex + n, e, t, a);
  }
  function nt(e, t, a) {
    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
    var i = this,
      s = i.params,
      r = i.animating,
      n = i.snapGrid,
      o = i.slidesGrid,
      l = i.rtlTranslate,
      d;
    if (s.loop) {
      if (r && s.loopPreventsSlide) return !1;
      i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    function p(e) {
      return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
    }
    var c = p(l ? i.translate : -i.translate),
      l = n.map(p);
    n[l.indexOf(c)];
    var u = n[l.indexOf(c) - 1],
      h;
    return (
      void 0 === u &&
        s.cssMode &&
        n.forEach(function (e) {
          !u && e <= c && (u = e);
        }),
      void 0 !== u && (h = o.indexOf(u)) < 0 && (h = i.activeIndex - 1),
      i.slideTo(h, e, t, a)
    );
  }
  function ot(e, t, a) {
    void 0 === e && (e = this.params.speed);
    var i = this;
    return i.slideTo(i.activeIndex, e, (t = void 0 === t ? !0 : t), a);
  }
  function lt(e, t, a, i) {
    void 0 === e && (e = this.params.speed),
      void 0 === t && (t = !0),
      void 0 === i && (i = 0.5);
    var s = this,
      r = s.activeIndex,
      n = Math.min(s.params.slidesPerGroupSkip, r),
      o = n + Math.floor((r - n) / s.params.slidesPerGroup),
      l = s.rtlTranslate ? s.translate : -s.translate,
      n,
      d,
      l,
      p;
    return (
      l >= s.snapGrid[o]
        ? ((n = s.snapGrid[o]),
          (s.snapGrid[o + 1] - n) * i < l - n && (r += s.params.slidesPerGroup))
        : l - (l = s.snapGrid[o - 1]) <= (s.snapGrid[o] - l) * i &&
          (r -= s.params.slidesPerGroup),
      (r = Math.max(r, 0)),
      (r = Math.min(r, s.slidesGrid.length - 1)),
      s.slideTo(r, e, t, a)
    );
  }
  function dt() {
    var e = this,
      t = e.params,
      a = e.$wrapperEl,
      i =
        "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
      s = e.clickedIndex,
      r;
    t.loop
      ? e.animating ||
        ((r = parseInt(M(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
        t.centeredSlides
          ? s < e.loopedSlides - i / 2 ||
            s > e.slides.length - e.loopedSlides + i / 2
            ? (e.loopFix(),
              (s = a
                .children(
                  "." +
                    t.slideClass +
                    '[data-swiper-slide-index="' +
                    r +
                    '"]:not(.' +
                    t.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              he(function () {
                e.slideTo(s);
              }))
            : e.slideTo(s)
          : s > e.slides.length - i
          ? (e.loopFix(),
            (s = a
              .children(
                "." +
                  t.slideClass +
                  '[data-swiper-slide-index="' +
                  r +
                  '"]:not(.' +
                  t.slideDuplicateClass +
                  ")"
              )
              .eq(0)
              .index()),
            he(function () {
              e.slideTo(s);
            }))
          : e.slideTo(s))
      : e.slideTo(s);
  }
  function pt() {
    var i = this,
      e = y(),
      t = i.params,
      a = i.$wrapperEl;
    a.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
    var s = a.children("." + t.slideClass);
    if (t.loopFillGroupWithBlank) {
      var r = t.slidesPerGroup - (s.length % t.slidesPerGroup);
      if (r !== t.slidesPerGroup) {
        for (var n = 0; n < r; n += 1) {
          var o = M(e.createElement("div")).addClass(
            t.slideClass + " " + t.slideBlankClass
          );
          a.append(o);
        }
        s = a.children("." + t.slideClass);
      }
    }
    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
      (i.loopedSlides = Math.ceil(
        parseFloat(t.loopedSlides || t.slidesPerView, 10)
      )),
      (i.loopedSlides += t.loopAdditionalSlides),
      i.loopedSlides > s.length && (i.loopedSlides = s.length);
    var l = [],
      d = [];
    s.each(function (e, t) {
      var a = M(e);
      t < i.loopedSlides && d.push(e),
        t < s.length && t >= s.length - i.loopedSlides && l.push(e),
        a.attr("data-swiper-slide-index", t);
    });
    for (var p = 0; p < d.length; p += 1)
      a.append(M(d[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
    for (var c = l.length - 1; 0 <= c; --c)
      a.prepend(M(l[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
  }
  function ct() {
    var e = this;
    e.emit("beforeLoopFix");
    var t = e.activeIndex,
      a = e.slides,
      i = e.loopedSlides,
      s = e.allowSlidePrev,
      r = e.allowSlideNext,
      n = e.snapGrid,
      o = e.rtlTranslate,
      l;
    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
    var d,
      n = -n[t] - e.getTranslate(),
      p,
      l,
      c;
    t < i
      ? ((l = a.length - 3 * i + t),
        e.slideTo((l += i), 0, !1, !0) &&
          0 != n &&
          e.setTranslate((o ? -e.translate : e.translate) - n))
      : t >= a.length - i &&
        ((l = -a.length + t + i),
        e.slideTo((l += i), 0, !1, !0) &&
          0 != n &&
          e.setTranslate((o ? -e.translate : e.translate) - n)),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = r),
      e.emit("loopFix");
  }
  function ut() {
    var e = this,
      t = e.$wrapperEl,
      a = e.params,
      e = e.slides;
    t
      .children(
        "." +
          a.slideClass +
          "." +
          a.slideDuplicateClass +
          ",." +
          a.slideClass +
          "." +
          a.slideBlankClass
      )
      .remove(),
      e.removeAttr("data-swiper-slide-index");
  }
  function ht(e) {
    var t = this,
      t;
    t.support.touch ||
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (((t = t.el).style.cursor = "move"),
      (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
      (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
      (t.style.cursor = e ? "grabbing" : "grab"));
  }
  function vt() {
    var e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.el.style.cursor = "");
  }
  function mt(e) {
    var t = this,
      a = t.$wrapperEl,
      i = t.params;
    if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
      for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
    else a.append(e);
    i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update();
  }
  function ft(e) {
    var t = this,
      a = t.params,
      i = t.$wrapperEl,
      s = t.activeIndex;
    a.loop && t.loopDestroy();
    var r = s + 1;
    if ("object" == typeof e && "length" in e) {
      for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
      r = s + e.length;
    } else i.prepend(e);
    a.loop && t.loopCreate(),
      (a.observer && t.support.observer) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function gt(e, t) {
    var a = this,
      i = a.$wrapperEl,
      s = a.params,
      r,
      n = a.activeIndex;
    s.loop &&
      ((n -= a.loopedSlides),
      a.loopDestroy(),
      (a.slides = i.children("." + s.slideClass)));
    var o = a.slides.length;
    if (e <= 0) a.prependSlide(t);
    else if (o <= e) a.appendSlide(t);
    else {
      for (var l = e < n ? n + 1 : n, d = [], p = o - 1; e <= p; --p) {
        var c = a.slides.eq(p);
        c.remove(), d.unshift(c);
      }
      if ("object" == typeof t && "length" in t) {
        for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
        l = e < n ? n + t.length : n;
      } else i.append(t);
      for (var h = 0; h < d.length; h += 1) i.append(d[h]);
      s.loop && a.loopCreate(),
        (s.observer && a.support.observer) || a.update(),
        s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
    }
  }
  function bt(e) {
    var t = this,
      a = t.params,
      i = t.$wrapperEl,
      s,
      r = t.activeIndex;
    a.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = i.children("." + a.slideClass)));
    var n = r,
      o;
    if ("object" == typeof e && "length" in e) {
      for (var l = 0; l < e.length; l += 1)
        (o = e[l]), t.slides[o] && t.slides.eq(o).remove(), o < n && --n;
      n = Math.max(n, 0);
    } else t.slides[(o = e)] && t.slides.eq(o).remove(), o < n && --n, (n = Math.max(n, 0));
    a.loop && t.loopCreate(),
      (a.observer && t.support.observer) || t.update(),
      a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function wt() {
    for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
    e.removeSlide(t);
  }
  function yt(e) {
    var t = this,
      a = y(),
      i = E(),
      s = t.touchEventsData,
      r = t.params,
      n = t.touches;
    if (!t.animating || !r.preventInteractionOnTransition) {
      var o = e,
        l = M((o = o.originalEvent ? o.originalEvent : o).target),
        d;
      if ("wrapper" !== r.touchEventsTarget || l.closest(t.wrapperEl).length)
        if (
          ((s.isTouchEvent = "touchstart" === o.type),
          s.isTouchEvent || !("which" in o) || 3 !== o.which)
        )
          if (!(!s.isTouchEvent && "button" in o && 0 < o.button))
            if (!s.isTouched || !s.isMoved)
              if (
                (!!r.noSwipingClass &&
                  "" !== r.noSwipingClass &&
                  o.target &&
                  o.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (l = M(e.path[0])),
                r.noSwiping &&
                  l.closest(r.noSwipingSelector || "." + r.noSwipingClass)[0])
              )
                t.allowClick = !0;
              else if (!r.swipeHandler || l.closest(r.swipeHandler)[0]) {
                (n.currentX = (
                  "touchstart" === o.type ? o.targetTouches[0] : o
                ).pageX),
                  (n.currentY = (
                    "touchstart" === o.type ? o.targetTouches[0] : o
                  ).pageY);
                var p = n.currentX,
                  c = n.currentY,
                  u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                  h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold,
                  c,
                  c;
                if (u && (p <= h || p >= i.innerWidth - h)) {
                  if ("prevent" !== u) return;
                  e.preventDefault();
                }
                be(s, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                  (n.startX = p),
                  (n.startY = c),
                  (s.touchStartTime = ve()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  0 < r.threshold && (s.allowThresholdMove = !1),
                  "touchstart" !== o.type &&
                    ((c = !0),
                    l.is(s.formElements) && (c = !1),
                    a.activeElement &&
                      M(a.activeElement).is(s.formElements) &&
                      a.activeElement !== l[0] &&
                      a.activeElement.blur(),
                    (c = c && t.allowTouchMove && r.touchStartPreventDefault),
                    (!r.touchStartForcePreventDefault && !c) ||
                      l[0].isContentEditable ||
                      o.preventDefault()),
                  t.emit("touchStart", o);
              }
    }
  }
  function Et(e) {
    var t = y(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      r = a.touches,
      n = a.rtlTranslate,
      o = e;
    if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "touchmove" === o.type) {
        var l =
            "touchmove" === o.type &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]),
          e = ("touchmove" === o.type ? l : o).pageX,
          l = ("touchmove" === o.type ? l : o).pageY;
        if (o.preventedByNestedSwiper)
          return (r.startX = e), void (r.startY = l);
        if (!a.allowTouchMove)
          return (
            (a.allowClick = !1),
            void (
              i.isTouched &&
              (be(r, { startX: e, startY: l, currentX: e, currentY: l }),
              (i.touchStartTime = ve()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (
              (l < r.startY && a.translate <= a.maxTranslate()) ||
              (l > r.startY && a.translate >= a.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (e < r.startX && a.translate <= a.maxTranslate()) ||
            (e > r.startX && a.translate >= a.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          o.target === t.activeElement &&
          M(o.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (a.allowClick = !1);
        if (
          (i.allowTouchCallbacks && a.emit("touchMove", o),
          !(o.targetTouches && 1 < o.targetTouches.length))
        ) {
          (r.currentX = e), (r.currentY = l);
          var t = r.currentX - r.startX,
            e = r.currentY - r.startY,
            l;
          if (
            !(
              a.params.threshold &&
              Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) < a.params.threshold
            )
          )
            if (
              (void 0 === i.isScrolling &&
                ((a.isHorizontal() && r.currentY === r.startY) ||
                (a.isVertical() && r.currentX === r.startX)
                  ? (i.isScrolling = !1)
                  : 25 <= t * t + e * e &&
                    ((l =
                      (180 * Math.atan2(Math.abs(e), Math.abs(t))) / Math.PI),
                    (i.isScrolling = a.isHorizontal()
                      ? l > s.touchAngle
                      : 90 - l > s.touchAngle))),
              i.isScrolling && a.emit("touchMoveOpposite", o),
              void 0 === i.startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (a.allowClick = !1),
                !s.cssMode && o.cancelable && o.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                i.isMoved ||
                  (s.loop && a.loopFix(),
                  (i.startTranslate = a.getTranslate()),
                  a.setTransition(0),
                  a.animating &&
                    a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                    a.setGrabCursor(!0),
                  a.emit("sliderFirstMove", o)),
                a.emit("sliderMove", o),
                (i.isMoved = !0);
              var t = a.isHorizontal() ? t : e;
              (r.diff = t),
                (t *= s.touchRatio),
                (a.swipeDirection = 0 < (t = n ? -t : t) ? "prev" : "next"),
                (i.currentTranslate = t + i.startTranslate);
              var e = !0,
                n = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (n = 0),
                0 < t && i.currentTranslate > a.minTranslate()
                  ? ((e = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.minTranslate() -
                        1 +
                        Math.pow(-a.minTranslate() + i.startTranslate + t, n)))
                  : t < 0 &&
                    i.currentTranslate < a.maxTranslate() &&
                    ((e = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.maxTranslate() +
                        1 -
                        Math.pow(a.maxTranslate() - i.startTranslate - t, n))),
                e && (o.preventedByNestedSwiper = !0),
                !a.allowSlideNext &&
                  "next" === a.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !a.allowSlidePrev &&
                  "prev" === a.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                a.allowSlidePrev ||
                  a.allowSlideNext ||
                  (i.currentTranslate = i.startTranslate),
                0 < s.threshold)
              ) {
                if (!(Math.abs(t) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = a.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  );
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (a.updateActiveIndex(), a.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[a.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: r[a.isHorizontal() ? "currentX" : "currentY"],
                    time: ve(),
                  })),
                a.updateProgress(i.currentTranslate),
                a.setTranslate(i.currentTranslate));
            }
        }
      }
    } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
  }
  function xt(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      o = t.slidesGrid,
      l = t.snapGrid,
      d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      a.allowTouchCallbacks && t.emit("touchEnd", d),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    )
      return (
        a.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (a.isMoved = !1),
        void (a.startMoving = !1)
      );
    i.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var p = ve(),
      e = p - a.touchStartTime,
      c,
      u,
      h,
      v,
      h;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(d),
        t.emit("tap click", d),
        e < 300 &&
          p - a.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d)),
      (a.lastClickTime = ve()),
      he(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !a.isTouched ||
        !a.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
    if (
      ((a.isTouched = !1),
      (a.isMoved = !1),
      (a.startMoving = !1),
      (c = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -a.currentTranslate),
      !i.cssMode)
    )
      if (i.freeMode)
        if (c < -t.minTranslate()) t.slideTo(t.activeIndex);
        else if (c > -t.maxTranslate())
          t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1);
        else {
          if (i.freeModeMomentum) {
            1 < a.velocities.length
              ? ((u = a.velocities.pop()),
                (h = a.velocities.pop()),
                (v = u.position - h.position),
                (h = u.time - h.time),
                (t.velocity = v / h),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (150 < h || 300 < ve() - u.time) && (t.velocity = 0))
              : (t.velocity = 0),
              (t.velocity *= i.freeModeMomentumVelocityRatio),
              (a.velocities.length = 0);
            var v = 1e3 * i.freeModeMomentumRatio,
              h = t.velocity * v,
              m = t.translate + h;
            r && (m = -m);
            var u = !1,
              f,
              h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio,
              g,
              g,
              r,
              v;
            if (m < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (m + t.maxTranslate() < -h && (m = t.maxTranslate() - h),
                  (f = t.maxTranslate()),
                  (a.allowMomentumBounce = u = !0))
                : (m = t.maxTranslate()),
                i.loop && i.centeredSlides && (g = !0);
            else if (m > t.minTranslate())
              i.freeModeMomentumBounce
                ? (m - t.minTranslate() > h && (m = t.minTranslate() + h),
                  (f = t.minTranslate()),
                  (a.allowMomentumBounce = u = !0))
                : (m = t.minTranslate()),
                i.loop && i.centeredSlides && (g = !0);
            else if (i.freeModeSticky) {
              for (var b, w = 0; w < l.length; w += 1)
                if (l[w] > -m) {
                  b = w;
                  break;
                }
              m = -(m =
                Math.abs(l[b] - m) < Math.abs(l[b - 1] - m) ||
                "next" === t.swipeDirection
                  ? l[b]
                  : l[b - 1]);
            }
            if (
              (g &&
                t.once("transitionEnd", function () {
                  t.loopFix();
                }),
              0 !== t.velocity)
            )
              (v = r
                ? Math.abs((-m - t.translate) / t.velocity)
                : Math.abs((m - t.translate) / t.velocity)),
                i.freeModeSticky &&
                  (v =
                    (g = Math.abs((r ? -m : m) - t.translate)) <
                    (r = t.slidesSizesGrid[t.activeIndex])
                      ? i.speed
                      : g < 2 * r
                      ? 1.5 * i.speed
                      : 2.5 * i.speed);
            else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && u
              ? (t.updateProgress(f),
                t.setTransition(v),
                t.setTranslate(m),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                n.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    a.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(i.speed),
                    setTimeout(function () {
                      t.setTranslate(f),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(m),
                t.setTransition(v),
                t.setTranslate(m),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(m)),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else {
            if (i.freeModeSticky) return void t.slideToClosest();
            i.freeMode && t.emit("_freeModeNoMomentumRelease");
          }
          (!i.freeModeMomentum || e >= i.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        }
      else {
        for (
          var y = 0, E = t.slidesSizesGrid[0], x = 0;
          x < o.length;
          x += x < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          var T = x < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[x + T]
            ? c >= o[x] && c < o[x + T] && (E = o[(y = x) + T] - o[x])
            : c >= o[x] && ((y = x), (E = o[o.length - 1] - o[o.length - 2]));
        }
        var u = (c - o[y]) / E,
          v = y < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup,
          S;
        e > i.longSwipesMs
          ? i.longSwipes
            ? ("next" === t.swipeDirection &&
                (u >= i.longSwipesRatio ? t.slideTo(y + v) : t.slideTo(y)),
              "prev" === t.swipeDirection &&
                (u > 1 - i.longSwipesRatio ? t.slideTo(y + v) : t.slideTo(y)))
            : t.slideTo(t.activeIndex)
          : i.shortSwipes
          ? t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
            ? d.target === t.navigation.nextEl
              ? t.slideTo(y + v)
              : t.slideTo(y)
            : ("next" === t.swipeDirection && t.slideTo(y + v),
              "prev" === t.swipeDirection && t.slideTo(y))
          : t.slideTo(t.activeIndex);
      }
  }
  function Tt() {
    var e = this,
      t = e.params,
      a = e.el,
      i,
      s,
      a;
    (a && 0 === a.offsetWidth) ||
      (t.breakpoints && e.setBreakpoint(),
      (i = e.allowSlideNext),
      (s = e.allowSlidePrev),
      (a = e.snapGrid),
      (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow());
  }
  function St(e) {
    var t = this;
    t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function Ct() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate,
      i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = a
            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
            : -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    var t = e.maxTranslate() - e.minTranslate(),
      i;
    (i = 0 == t ? 0 : (e.translate - e.minTranslate()) / t) !== e.progress &&
      e.updateProgress(a ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  var Mt = !1,
    zt,
    Pt,
    kt,
    $t;
  function Lt() {}
  function It() {
    var e = this,
      t = y(),
      a = e.params,
      i = e.touchEvents,
      s = e.el,
      r = e.wrapperEl,
      n = e.device,
      o = e.support;
    (e.onTouchStart = yt.bind(e)),
      (e.onTouchMove = Et.bind(e)),
      (e.onTouchEnd = xt.bind(e)),
      a.cssMode && (e.onScroll = Ct.bind(e)),
      (e.onClick = St.bind(e));
    var l = !!a.nested,
      d;
    !o.touch && o.pointerEvents
      ? (s.addEventListener(i.start, e.onTouchStart, !1),
        t.addEventListener(i.move, e.onTouchMove, l),
        t.addEventListener(i.end, e.onTouchEnd, !1))
      : (o.touch &&
          ((d = !(
            "touchstart" !== i.start ||
            !o.passiveListener ||
            !a.passiveListeners
          ) && { passive: !0, capture: !1 }),
          s.addEventListener(i.start, e.onTouchStart, d),
          s.addEventListener(
            i.move,
            e.onTouchMove,
            o.passiveListener ? { passive: !1, capture: l } : l
          ),
          s.addEventListener(i.end, e.onTouchEnd, d),
          i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, d),
          Mt || (t.addEventListener("touchstart", Lt), (Mt = !0))),
        ((a.simulateTouch && !n.ios && !n.android) ||
          (a.simulateTouch && !o.touch && n.ios)) &&
          (s.addEventListener("mousedown", e.onTouchStart, !1),
          t.addEventListener("mousemove", e.onTouchMove, l),
          t.addEventListener("mouseup", e.onTouchEnd, !1))),
      (a.preventClicks || a.preventClicksPropagation) &&
        s.addEventListener("click", e.onClick, !0),
      a.cssMode && r.addEventListener("scroll", e.onScroll),
      a.updateOnWindowResize
        ? e.on(
            n.ios || n.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Tt,
            !0
          )
        : e.on("observerUpdate", Tt, !0);
  }
  function Ot() {
    var e = this,
      t = y(),
      a = e.params,
      i = e.touchEvents,
      s = e.el,
      r = e.wrapperEl,
      n = e.device,
      o = e.support,
      l = !!a.nested,
      d;
    !o.touch && o.pointerEvents
      ? (s.removeEventListener(i.start, e.onTouchStart, !1),
        t.removeEventListener(i.move, e.onTouchMove, l),
        t.removeEventListener(i.end, e.onTouchEnd, !1))
      : (o.touch &&
          ((d = !(
            "onTouchStart" !== i.start ||
            !o.passiveListener ||
            !a.passiveListeners
          ) && { passive: !0, capture: !1 }),
          s.removeEventListener(i.start, e.onTouchStart, d),
          s.removeEventListener(i.move, e.onTouchMove, l),
          s.removeEventListener(i.end, e.onTouchEnd, d),
          i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, d)),
        ((a.simulateTouch && !n.ios && !n.android) ||
          (a.simulateTouch && !o.touch && n.ios)) &&
          (s.removeEventListener("mousedown", e.onTouchStart, !1),
          t.removeEventListener("mousemove", e.onTouchMove, l),
          t.removeEventListener("mouseup", e.onTouchEnd, !1))),
      (a.preventClicks || a.preventClicksPropagation) &&
        s.removeEventListener("click", e.onClick, !0),
      a.cssMode && r.removeEventListener("scroll", e.onScroll),
      e.off(
        n.ios || n.android
          ? "resize orientationchange observerUpdate"
          : "resize observerUpdate",
        Tt
      );
  }
  function At() {
    var e = this,
      t = e.activeIndex,
      a = e.initialized,
      i = e.loopedSlides,
      s = void 0 === i ? 0 : i,
      r = e.params,
      n = e.$el,
      o = r.breakpoints,
      l,
      d,
      p,
      i,
      o,
      n,
      r;
    !o ||
      (o && 0 === Object.keys(o).length) ||
      ((l = e.getBreakpoint(o, e.params.breakpointsBase, e.el)) &&
        e.currentBreakpoint !== l &&
        ((d = l in o ? o[l] : void 0) &&
          [
            "slidesPerView",
            "spaceBetween",
            "slidesPerGroup",
            "slidesPerGroupSkip",
            "slidesPerColumn",
          ].forEach(function (e) {
            var t = d[e];
            void 0 !== t &&
              (d[e] =
                "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                  ? "slidesPerView" === e
                    ? parseFloat(t)
                    : parseInt(t, 10)
                  : "auto");
          }),
        (p = d || e.originalParams),
        (i = 1 < r.slidesPerColumn),
        (o = 1 < p.slidesPerColumn),
        i && !o
          ? (n.removeClass(
              r.containerModifierClass +
                "multirow " +
                r.containerModifierClass +
                "multirow-column"
            ),
            e.emitContainerClasses())
          : !i &&
            o &&
            (n.addClass(r.containerModifierClass + "multirow"),
            "column" === p.slidesPerColumnFill &&
              n.addClass(r.containerModifierClass + "multirow-column"),
            e.emitContainerClasses()),
        (n = p.direction && p.direction !== r.direction),
        (r = r.loop && (p.slidesPerView !== r.slidesPerView || n)),
        n && a && e.changeDirection(),
        be(e.params, p),
        be(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
        (e.currentBreakpoint = l),
        e.emit("_beforeBreakpoint", p),
        r &&
          a &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - s + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", p)));
  }
  function Dt(e, t, a) {
    if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
      var i = !1,
        s = E(),
        r = "window" === t ? s.innerWidth : a.clientWidth,
        n = "window" === t ? s.innerHeight : a.clientHeight,
        o = Object.keys(e).map(function (e) {
          if ("string" != typeof e || 0 !== e.indexOf("@"))
            return { value: e, point: e };
          var t = parseFloat(e.substr(1)),
            a;
          return { value: n * t, point: e };
        });
      o.sort(function (e, t) {
        return parseInt(e.value, 10) - parseInt(t.value, 10);
      });
      for (var l = 0; l < o.length; l += 1) {
        var d = o[l],
          p = d.point,
          c;
        d.value <= r && (i = p);
      }
      return i || "max";
    }
  }
  function Nt(e, a) {
    var i = [];
    return (
      e.forEach(function (t) {
        "object" == typeof t
          ? Object.keys(t).forEach(function (e) {
              t[e] && i.push(a + e);
            })
          : "string" == typeof t && i.push(a + t);
      }),
      i
    );
  }
  function Gt() {
    var e = this,
      t = e.classNames,
      a = e.params,
      i = e.rtl,
      s = e.$el,
      r = e.device,
      n = e.support,
      a = Nt(
        [
          "initialized",
          a.direction,
          { "pointer-events": n.pointerEvents && !n.touch },
          { "free-mode": a.freeMode },
          { autoheight: a.autoHeight },
          { rtl: i },
          { multirow: 1 < a.slidesPerColumn },
          {
            "multirow-column":
              1 < a.slidesPerColumn && "column" === a.slidesPerColumnFill,
          },
          { android: r.android },
          { ios: r.ios },
          { "css-mode": a.cssMode },
        ],
        a.containerModifierClass
      );
    t.push.apply(t, a),
      s.addClass([].concat(t).join(" ")),
      e.emitContainerClasses();
  }
  function Bt() {
    var e = this,
      t = e.$el,
      a = e.classNames;
    t.removeClass(a.join(" ")), e.emitContainerClasses();
  }
  function Ht(e, t, a, i, s, r) {
    var n = E(),
      n,
      o;
    function l() {
      r && r();
    }
    !(M(e).parent("picture")[0] || (e.complete && s)) && t
      ? (((n = new n.Image()).onload = l),
        (n.onerror = l),
        i && (n.sizes = i),
        a && (n.srcset = a),
        t && (n.src = t))
      : l();
  }
  function Xt() {
    var e = this;
    function t() {
      null != e &&
        e &&
        !e.destroyed &&
        (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length &&
          (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
    }
    e.imagesToLoad = e.$el.find("img");
    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
      var i = e.imagesToLoad[a];
      e.loadImage(
        i,
        i.currentSrc || i.getAttribute("src"),
        i.srcset || i.getAttribute("srcset"),
        i.sizes || i.getAttribute("sizes"),
        !0,
        t
      );
    }
  }
  function Rt() {
    var e = this,
      t = e.params,
      a = e.isLocked,
      i =
        0 < e.slides.length &&
        t.slidesOffsetBefore +
          t.spaceBetween * (e.slides.length - 1) +
          e.slides[0].offsetWidth * e.slides.length;
    t.slidesOffsetBefore && t.slidesOffsetAfter && i
      ? (e.isLocked = i <= e.size)
      : (e.isLocked = 1 === e.snapGrid.length),
      (e.allowSlideNext = !e.isLocked),
      (e.allowSlidePrev = !e.isLocked),
      a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
      a &&
        a !== e.isLocked &&
        ((e.isEnd = !1), e.navigation && e.navigation.update());
  }
  var Yt,
    Vt = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    Wt = {
      modular: {
        useParams: function e(t) {
          var a = this;
          a.modules &&
            Object.keys(a.modules).forEach(function (e) {
              var e = a.modules[e];
              e.params && be(t, e.params);
            });
        },
        useModules: function e(a) {
          void 0 === a && (a = {});
          var i = this;
          i.modules &&
            Object.keys(i.modules).forEach(function (e) {
              var t = i.modules[e],
                e = a[e] || {};
              t.on &&
                i.on &&
                Object.keys(t.on).forEach(function (e) {
                  i.on(e, t.on[e]);
                }),
                t.create && t.create.bind(i)(e);
            });
        },
      },
      eventsEmitter: {
        on: function e(t, a, i) {
          var s = this;
          if ("function" != typeof a) return s;
          var r = i ? "unshift" : "push";
          return (
            t.split(" ").forEach(function (e) {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][r](a);
            }),
            s
          );
        },
        once: function e(i, s, t) {
          var r = this;
          return "function" != typeof s
            ? r
            : ((n.__emitterProxy = s), r.on(i, n, t));
          function n() {
            r.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
              t[a] = arguments[a];
            s.apply(r, t);
          }
        },
        onAny: function e(t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var a = a ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[a](t), i
          );
        },
        offAny: function e(t) {
          var a = this;
          if (!a.eventsAnyListeners) return a;
          var t = a.eventsAnyListeners.indexOf(t);
          return 0 <= t && a.eventsAnyListeners.splice(t, 1), a;
        },
        off: function e(t, i) {
          var s = this;
          return (
            s.eventsListeners &&
              t.split(" ").forEach(function (a) {
                void 0 === i
                  ? (s.eventsListeners[a] = [])
                  : s.eventsListeners[a] &&
                    s.eventsListeners[a].forEach(function (e, t) {
                      (e === i ||
                        (e.__emitterProxy && e.__emitterProxy === i)) &&
                        s.eventsListeners[a].splice(t, 1);
                    });
              }),
            s
          );
        },
        emit: function e() {
          var a = this,
            t,
            i,
            s;
          if (!a.eventsListeners) return a;
          for (var r = arguments.length, n = new Array(r), o = 0, l; o < r; o++)
            n[o] = arguments[o];
          return (
            (s =
              "string" == typeof n[0] || Array.isArray(n[0])
                ? ((t = n[0]), (i = n.slice(1, n.length)), a)
                : ((t = n[0].events), (i = n[0].data), n[0].context || a)),
            i.unshift(s),
            (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
              a.eventsAnyListeners &&
                a.eventsAnyListeners.length &&
                a.eventsAnyListeners.forEach(function (e) {
                  e.apply(s, [t].concat(i));
                }),
                a.eventsListeners &&
                  a.eventsListeners[t] &&
                  a.eventsListeners[t].forEach(function (e) {
                    e.apply(s, i);
                  });
            }),
            a
          );
        },
      },
      update: {
        updateSize: Xe,
        updateSlides: Re,
        updateAutoHeight: Ye,
        updateSlidesOffset: Ve,
        updateSlidesProgress: We,
        updateProgress: Fe,
        updateSlidesClasses: _e,
        updateActiveIndex: qe,
        updateClickedSlide: je,
      },
      translate: {
        getTranslate: Ue,
        setTranslate: Ke,
        minTranslate: Ze,
        maxTranslate: Je,
        translateTo: Qe,
      },
      transition: { setTransition: et, transitionStart: tt, transitionEnd: at },
      slide: {
        slideTo: it,
        slideToLoop: st,
        slideNext: rt,
        slidePrev: nt,
        slideReset: ot,
        slideToClosest: lt,
        slideToClickedSlide: dt,
      },
      loop: { loopCreate: pt, loopFix: ct, loopDestroy: ut },
      grabCursor: { setGrabCursor: ht, unsetGrabCursor: vt },
      manipulation: {
        appendSlide: mt,
        prependSlide: ft,
        addSlide: gt,
        removeSlide: bt,
        removeAllSlides: wt,
      },
      events: { attachEvents: It, detachEvents: Ot },
      breakpoints: { setBreakpoint: At, getBreakpoint: Dt },
      checkOverflow: { checkOverflow: Rt },
      classes: { addClasses: Gt, removeClasses: Bt },
      images: { loadImage: Ht, preloadImages: Xt },
    },
    Ft = {},
    _t =
      (((qt = jt.prototype).setProgress = function e(t, a) {
        var i = this;
        t = Math.min(Math.max(t, 0), 1);
        var s = i.minTranslate(),
          r = i.maxTranslate(),
          n;
        i.translateTo((r - s) * t + s, void 0 === a ? 0 : a),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }),
      (qt.emitContainerClasses = function e() {
        var t = this,
          a;
        t.params._emitClasses &&
          t.el &&
          ((a = t.el.className.split(" ").filter(function (e) {
            return (
              0 === e.indexOf("swiper-container") ||
              0 === e.indexOf(t.params.containerModifierClass)
            );
          })),
          t.emit("_containerClasses", a.join(" ")));
      }),
      (qt.getSlideClasses = function e(t) {
        var a = this;
        return t.className
          .split(" ")
          .filter(function (e) {
            return (
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(a.params.slideClass)
            );
          })
          .join(" ");
      }),
      (qt.emitSlidesClasses = function e() {
        var a = this,
          i;
        a.params._emitClasses &&
          a.el &&
          ((i = []),
          a.slides.each(function (e) {
            var t = a.getSlideClasses(e);
            i.push({ slideEl: e, classNames: t }), a.emit("_slideClass", e, t);
          }),
          a.emit("_slideClasses", i));
      }),
      (qt.slidesPerViewDynamic = function e() {
        var t = this,
          a = t.params,
          i = t.slides,
          s = t.slidesGrid,
          r = t.size,
          n = t.activeIndex,
          o = 1;
        if (a.centeredSlides) {
          for (var l = i[n].swiperSlideSize, d, p = n + 1; p < i.length; p += 1)
            i[p] &&
              !d &&
              ((o += 1), r < (l += i[p].swiperSlideSize) && (d = !0));
          for (var c = n - 1; 0 <= c; --c)
            i[c] &&
              !d &&
              ((o += 1), r < (l += i[c].swiperSlideSize) && (d = !0));
        } else
          for (var u = n + 1; u < i.length; u += 1) s[u] - s[n] < r && (o += 1);
        return o;
      }),
      (qt.update = function e() {
        var t = this,
          a,
          i,
          s;
        function r() {
          var e = t.rtlTranslate ? -1 * t.translate : t.translate,
            e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        t &&
          !t.destroyed &&
          ((a = t.snapGrid),
          (i = t.params).breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode
            ? (r(), t.params.autoHeight && t.updateAutoHeight())
            : (s =
                ("auto" === t.params.slidesPerView ||
                  1 < t.params.slidesPerView) &&
                t.isEnd &&
                !t.params.centeredSlides
                  ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                  : t.slideTo(t.activeIndex, 0, !1, !0)) || r(),
          i.watchOverflow && a !== t.snapGrid && t.checkOverflow(),
          t.emit("update"));
      }),
      (qt.changeDirection = function e(t, a) {
        void 0 === a && (a = !0);
        var i = this,
          s = i.params.direction;
        return (
          (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s ||
            ("horizontal" !== t && "vertical" !== t) ||
            (i.$el
              .removeClass("" + i.params.containerModifierClass + s)
              .addClass("" + i.params.containerModifierClass + t),
            i.emitContainerClasses(),
            (i.params.direction = t),
            i.slides.each(function (e) {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            i.emit("changeDirection"),
            a && i.update()),
          i
        );
      }),
      (qt.mount = function e(t) {
        var a = this;
        if (a.mounted) return !0;
        var i = M(t || a.params.el),
          s;
        return (
          !!(t = i[0]) &&
          ((t.swiper = a),
          t && t.shadowRoot && t.shadowRoot.querySelector
            ? ((s = M(
                t.shadowRoot.querySelector("." + a.params.wrapperClass)
              )).children = function (e) {
                return i.children(e);
              })
            : (s = i.children("." + a.params.wrapperClass)),
          be(a, {
            $el: i,
            el: t,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === a.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0)
        );
      }),
      (qt.init = function e(t) {
        var a = this,
          i;
        return (
          a.initialized ||
            !1 === a.mount(t) ||
            (a.emit("beforeInit"),
            a.params.breakpoints && a.setBreakpoint(),
            a.addClasses(),
            a.params.loop && a.loopCreate(),
            a.updateSize(),
            a.updateSlides(),
            a.params.watchOverflow && a.checkOverflow(),
            a.params.grabCursor && a.setGrabCursor(),
            a.params.preloadImages && a.preloadImages(),
            a.params.loop
              ? a.slideTo(
                  a.params.initialSlide + a.loopedSlides,
                  0,
                  a.params.runCallbacksOnInit
                )
              : a.slideTo(
                  a.params.initialSlide,
                  0,
                  a.params.runCallbacksOnInit
                ),
            a.attachEvents(),
            (a.initialized = !0),
            a.emit("init"),
            a.emit("afterInit")),
          a
        );
      }),
      (qt.destroy = function e(t, a) {
        void 0 === t && (t = !0), void 0 === a && (a = !0);
        var i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          o = i.slides;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            a &&
              (i.removeClasses(),
              r.removeAttr("style"),
              n.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function (e) {
              i.off(e);
            }),
            !1 !== t && ((i.$el[0].swiper = null), ue(i)),
            (i.destroyed = !0)),
          null
        );
      }),
      (jt.extendDefaults = function e(t) {
        be(Ft, t);
      }),
      (jt.installModule = function e(t) {
        jt.prototype.modules || (jt.prototype.modules = {});
        var a = t.name || Object.keys(jt.prototype.modules).length + "_" + ve();
        jt.prototype.modules[a] = t;
      }),
      (jt.use = function e(t) {
        return (
          Array.isArray(t)
            ? t.forEach(function (e) {
                return jt.installModule(e);
              })
            : jt.installModule(t),
          jt
        );
      }),
      e(jt, null, [
        {
          key: "extendedDefaults",
          get: function e() {
            return Ft;
          },
        },
        {
          key: "defaults",
          get: function e() {
            return Vt;
          },
        },
      ]),
      jt),
    qt;
  function jt() {
    for (var e, a, t = arguments.length, i = new Array(t), s = 0; s < t; s++)
      i[s] = arguments[s];
    if (
      ((a = be(
        {},
        (a =
          (a =
            1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? i[0]
              : ((e = i[0]), i[1])) || {})
      )),
      e && !a.el && (a.el = e),
      a.el && 1 < M(a.el).length)
    ) {
      var r = [];
      return (
        M(a.el).each(function (e) {
          var e = be({}, a, { el: e });
          r.push(new jt(e));
        }),
        r
      );
    }
    var n = this;
    (n.__swiper__ = !0),
      (n.support = xe()),
      (n.device = Se({ userAgent: a.userAgent })),
      (n.browser = Me()),
      (n.eventsListeners = {}),
      (n.eventsAnyListeners = []),
      void 0 === n.modules && (n.modules = {}),
      Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e],
          e,
          t;
        t.params &&
          ((e = Object.keys(t.params)[0]),
          "object" == typeof (t = t.params[e]) &&
            null !== t &&
            e in a &&
            "enabled" in t &&
            (!0 === a[e] && (a[e] = { enabled: !0 }),
            "object" != typeof a[e] || "enabled" in a[e] || (a[e].enabled = !0),
            a[e] || (a[e] = { enabled: !1 })));
      });
    var o = be({}, Vt);
    return (
      n.useParams(o),
      (n.params = be({}, o, Ft, a)),
      (n.originalParams = be({}, n.params)),
      (n.passedParams = be({}, a)),
      n.params &&
        n.params.on &&
        Object.keys(n.params.on).forEach(function (e) {
          n.on(e, n.params.on[e]);
        }),
      n.params && n.params.onAny && n.onAny(n.params.onAny),
      (n.$ = M),
      be(n, {
        el: e,
        classNames: [],
        slides: M(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function e() {
          return "horizontal" === n.params.direction;
        },
        isVertical: function e() {
          return "vertical" === n.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEvents: (function e() {
          var t = ["touchstart", "touchmove", "touchend", "touchcancel"],
            a = ["mousedown", "mousemove", "mouseup"];
          return (
            n.support.pointerEvents &&
              (a = ["pointerdown", "pointermove", "pointerup"]),
            (n.touchEventsTouch = {
              start: t[0],
              move: t[1],
              end: t[2],
              cancel: t[3],
            }),
            (n.touchEventsDesktop = { start: a[0], move: a[1], end: a[2] }),
            n.support.touch || !n.params.simulateTouch
              ? n.touchEventsTouch
              : n.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video, label",
          lastClickTime: ve(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      n.useModules(),
      n.emit("_swiper"),
      n.params.init && n.init(),
      n
    );
  }
  Object.keys(Wt).forEach(function (t) {
    Object.keys(Wt[t]).forEach(function (e) {
      _t.prototype[e] = Wt[t][e];
    });
  }),
    _t.use([Pe, $e]);
  var Ut = {
      update: function e(t) {
        var a = this,
          i = a.params,
          s = i.slidesPerView,
          r = i.slidesPerGroup,
          n = i.centeredSlides,
          o = a.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          p = a.virtual,
          c = p.from,
          u = p.to,
          h = p.slides,
          v = p.slidesGrid,
          m = p.renderSlide,
          i = p.offset;
        a.updateActiveIndex();
        var o = a.activeIndex || 0,
          p,
          f,
          l,
          p = a.rtlTranslate ? "right" : a.isHorizontal() ? "left" : "top",
          l = n
            ? ((f = Math.floor(s / 2) + r + d), Math.floor(s / 2) + r + l)
            : ((f = s + (r - 1) + d), r + l),
          g = Math.max((o || 0) - l, 0),
          b = Math.min((o || 0) + f, h.length - 1),
          f = (a.slidesGrid[g] || 0) - (a.slidesGrid[0] || 0);
        function w() {
          a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.lazy && a.params.lazy.enabled && a.lazy.load();
        }
        if (
          (be(a.virtual, {
            from: g,
            to: b,
            offset: f,
            slidesGrid: a.slidesGrid,
          }),
          c === g && u === b && !t)
        )
          return (
            a.slidesGrid !== v && f !== i && a.slides.css(p, f + "px"),
            void a.updateProgress()
          );
        if (a.params.virtual.renderExternal)
          return (
            a.params.virtual.renderExternal.call(a, {
              offset: f,
              from: g,
              to: b,
              slides: (function e() {
                for (var t = [], a = g; a <= b; a += 1) t.push(h[a]);
                return t;
              })(),
            }),
            void (a.params.virtual.renderExternalUpdate && w())
          );
        var y = [],
          E = [];
        if (t) a.$wrapperEl.find("." + a.params.slideClass).remove();
        else
          for (var x = c; x <= u; x += 1)
            (x < g || b < x) &&
              a.$wrapperEl
                .find(
                  "." +
                    a.params.slideClass +
                    '[data-swiper-slide-index="' +
                    x +
                    '"]'
                )
                .remove();
        for (var T = 0; T < h.length; T += 1)
          g <= T &&
            T <= b &&
            (void 0 === u || t
              ? E.push(T)
              : (u < T && E.push(T), T < c && y.push(T)));
        E.forEach(function (e) {
          a.$wrapperEl.append(m(h[e], e));
        }),
          y
            .sort(function (e, t) {
              return t - e;
            })
            .forEach(function (e) {
              a.$wrapperEl.prepend(m(h[e], e));
            }),
          a.$wrapperEl.children(".swiper-slide").css(p, f + "px"),
          w();
      },
      renderSlide: function e(t, a) {
        var i = this,
          s = i.params.virtual;
        if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
        var t = s.renderSlide
          ? M(s.renderSlide.call(i, t, a))
          : M(
              '<div class="' +
                i.params.slideClass +
                '" data-swiper-slide-index="' +
                a +
                '">' +
                t +
                "</div>"
            );
        return (
          t.attr("data-swiper-slide-index") ||
            t.attr("data-swiper-slide-index", a),
          s.cache && (i.virtual.cache[a] = t),
          t
        );
      },
      appendSlide: function e(t) {
        var a = this;
        if ("object" == typeof t && "length" in t)
          for (var i = 0; i < t.length; i += 1)
            t[i] && a.virtual.slides.push(t[i]);
        else a.virtual.slides.push(t);
        a.virtual.update(!0);
      },
      prependSlide: function e(t) {
        var a = this,
          i = a.activeIndex,
          s = i + 1,
          r = 1,
          n,
          o;
        if (Array.isArray(t)) {
          for (var l = 0; l < t.length; l += 1)
            t[l] && a.virtual.slides.unshift(t[l]);
          (s = i + t.length), (r = t.length);
        } else a.virtual.slides.unshift(t);
        a.params.virtual.cache &&
          ((n = a.virtual.cache),
          (o = {}),
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (o[parseInt(e, 10) + r] = t);
          }),
          (a.virtual.cache = o)),
          a.virtual.update(!0),
          a.slideTo(s, 0);
      },
      removeSlide: function e(t) {
        var a = this;
        if (null != t) {
          var i = a.activeIndex;
          if (Array.isArray(t))
            for (var s = t.length - 1; 0 <= s; --s)
              a.virtual.slides.splice(t[s], 1),
                a.params.virtual.cache && delete a.virtual.cache[t[s]],
                t[s] < i && --i,
                (i = Math.max(i, 0));
          else
            a.virtual.slides.splice(t, 1),
              a.params.virtual.cache && delete a.virtual.cache[t],
              t < i && --i,
              (i = Math.max(i, 0));
          a.virtual.update(!0), a.slideTo(i, 0);
        }
      },
      removeAllSlides: function e() {
        var t = this;
        (t.virtual.slides = []),
          t.params.virtual.cache && (t.virtual.cache = {}),
          t.virtual.update(!0),
          t.slideTo(0, 0);
      },
    },
    Pe = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function e() {
        var t = this;
        we(t, {
          virtual: a({}, Ut, { slides: t.params.virtual.slides, cache: {} }),
        });
      },
      on: {
        beforeInit: function e(t) {
          var a;
          t.params.virtual.enabled &&
            (t.classNames.push(t.params.containerModifierClass + "virtual"),
            be(t.params, (a = { watchSlidesProgress: !0 })),
            be(t.originalParams, a),
            t.params.initialSlide || t.virtual.update());
        },
        setTranslate: function e(t) {
          t.params.virtual.enabled && t.virtual.update();
        },
      },
    },
    Kt = {
      handle: function e(t) {
        var a = this,
          i = E(),
          s = y(),
          r = a.rtlTranslate,
          n = t,
          o = (n = n.originalEvent ? n.originalEvent : n).keyCode || n.charCode,
          l = a.params.keyboard.pageUpDown,
          d = l && 33 === o,
          p = l && 34 === o,
          c = 37 === o,
          u = 39 === o,
          h = 38 === o,
          t = 40 === o;
        if (
          !a.allowSlideNext &&
          ((a.isHorizontal() && u) || (a.isVertical() && t) || p)
        )
          return !1;
        if (
          !a.allowSlidePrev &&
          ((a.isHorizontal() && c) || (a.isVertical() && h) || d)
        )
          return !1;
        if (
          !(
            n.shiftKey ||
            n.altKey ||
            n.ctrlKey ||
            n.metaKey ||
            (s.activeElement &&
              s.activeElement.nodeName &&
              ("input" === s.activeElement.nodeName.toLowerCase() ||
                "textarea" === s.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            a.params.keyboard.onlyInViewport &&
            (d || p || c || u || h || t)
          ) {
            var v = !1;
            if (
              0 < a.$el.parents("." + a.params.slideClass).length &&
              0 === a.$el.parents("." + a.params.slideActiveClass).length
            )
              return;
            var l = a.$el,
              s = l[0].clientWidth,
              l = l[0].clientHeight,
              m = i.innerWidth,
              f = i.innerHeight,
              i = a.$el.offset();
            r && (i.left -= a.$el[0].scrollLeft);
            for (
              var g = [
                  [i.left, i.top],
                  [i.left + s, i.top],
                  [i.left, i.top + l],
                  [i.left + s, i.top + l],
                ],
                b = 0;
              b < g.length;
              b += 1
            ) {
              var w = g[b];
              0 <= w[0] &&
                w[0] <= m &&
                0 <= w[1] &&
                w[1] <= f &&
                ((0 === w[0] && 0 === w[1]) || (v = !0));
            }
            if (!v) return;
          }
          a.isHorizontal()
            ? ((d || p || c || u) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (((p || u) && !r) || ((d || c) && r)) && a.slideNext(),
              (((d || c) && !r) || ((p || u) && r)) && a.slidePrev())
            : ((d || p || h || t) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (p || t) && a.slideNext(),
              (d || h) && a.slidePrev()),
            a.emit("keyPress", o);
        }
      },
      enable: function e() {
        var t = this,
          a = y();
        t.keyboard.enabled ||
          (M(a).on("keydown", t.keyboard.handle), (t.keyboard.enabled = !0));
      },
      disable: function e() {
        var t = this,
          a = y();
        t.keyboard.enabled &&
          (M(a).off("keydown", t.keyboard.handle), (t.keyboard.enabled = !1));
      },
    },
    $e = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function e() {
        var t;
        we(this, { keyboard: a({ enabled: !1 }, Kt) });
      },
      on: {
        init: function e(t) {
          t.params.keyboard.enabled && t.keyboard.enable();
        },
        destroy: function e(t) {
          t.keyboard.enabled && t.keyboard.disable();
        },
      },
    };
  function Zt() {
    var e = y(),
      t = "onwheel",
      a = t in e,
      i;
    return (
      a ||
        ((i = e.createElement("div")).setAttribute(t, "return;"),
        (a = "function" == typeof i[t])),
      (a =
        !a &&
        e.implementation &&
        e.implementation.hasFeature &&
        !0 !== e.implementation.hasFeature("", "")
          ? e.implementation.hasFeature("Events.wheel", "3.0")
          : a)
    );
  }
  var Jt = {
      lastScrollTime: ve(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function e() {
        var t;
        return -1 < E().navigator.userAgent.indexOf("firefox")
          ? "DOMMouseScroll"
          : Zt()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function e(t) {
        var a = 10,
          i = 40,
          s = 800,
          r = 0,
          n = 0,
          o = 0,
          l = 0;
        return (
          "detail" in t && (n = t.detail),
          "wheelDelta" in t && (n = -t.wheelDelta / 120),
          "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120),
          "wheelDeltaX" in t && (r = -t.wheelDeltaX / 120),
          "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((r = n), (n = 0)),
          (o = 10 * r),
          (l = 10 * n),
          "deltaY" in t && (l = t.deltaY),
          "deltaX" in t && (o = t.deltaX),
          t.shiftKey && !o && ((o = l), (l = 0)),
          (o || l) &&
            t.deltaMode &&
            (1 === t.deltaMode ? ((o *= 40), (l *= 40)) : ((o *= s), (l *= s))),
          {
            spinX: (r = o && !r ? (o < 1 ? -1 : 1) : r),
            spinY: (n = l && !n ? (l < 1 ? -1 : 1) : n),
            pixelX: o,
            pixelY: l,
          }
        );
      },
      handleMouseEnter: function e() {
        var t;
        this.mouseEntered = !0;
      },
      handleMouseLeave: function e() {
        var t;
        this.mouseEntered = !1;
      },
      handle: function e(t) {
        var a = t,
          i = !0,
          s = this,
          r = s.params.mousewheel;
        s.params.cssMode && a.preventDefault();
        var n = s.$el;
        if (
          ("container" !== s.params.mousewheel.eventsTarget &&
            (n = M(s.params.mousewheel.eventsTarget)),
          !s.mouseEntered && !n[0].contains(a.target) && !r.releaseOnEdges)
        )
          return !0;
        a.originalEvent && (a = a.originalEvent);
        var o = 0,
          l = s.rtlTranslate ? -1 : 1,
          n = Jt.normalize(a);
        if (r.forceToAxis)
          if (s.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            o = -n.pixelX * l;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            o = -n.pixelY;
          }
        else
          o =
            Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * l : -n.pixelY;
        if (0 === o) return !0;
        r.invert && (o = -o);
        var l = s.getTranslate() + o * r.sensitivity;
        if (
          ((l = l >= s.minTranslate() ? s.minTranslate() : l) <=
            s.maxTranslate() && (l = s.maxTranslate()),
          (i =
            !!s.params.loop ||
            !(l === s.minTranslate() || l === s.maxTranslate())) &&
            s.params.nested &&
            a.stopPropagation(),
          s.params.freeMode)
        ) {
          var d = { time: ve(), delta: Math.abs(o), direction: Math.sign(o) },
            n = s.mousewheel.lastEventBeforeSnap,
            l =
              n &&
              d.time < n.time + 500 &&
              d.delta <= n.delta &&
              d.direction === n.direction;
          if (!l) {
            (s.mousewheel.lastEventBeforeSnap = void 0),
              s.params.loop && s.loopFix();
            var p = s.getTranslate() + o * r.sensitivity,
              n = s.isBeginning,
              r = s.isEnd,
              c,
              n,
              r,
              u;
            if (
              ((p = p >= s.minTranslate() ? s.minTranslate() : p) <=
                s.maxTranslate() && (p = s.maxTranslate()),
              s.setTransition(0),
              s.setTranslate(p),
              s.updateProgress(),
              s.updateActiveIndex(),
              s.updateSlidesClasses(),
              ((!n && s.isBeginning) || (!r && s.isEnd)) &&
                s.updateSlidesClasses(),
              s.params.freeModeSticky &&
                (clearTimeout(s.mousewheel.timeout),
                (s.mousewheel.timeout = void 0),
                15 <= (c = s.mousewheel.recentWheelEvents).length && c.shift(),
                (n = c.length ? c[c.length - 1] : void 0),
                (r = c[0]),
                c.push(d),
                n && (d.delta > n.delta || d.direction !== n.direction)
                  ? c.splice(0)
                  : 15 <= c.length &&
                    d.time - r.time < 500 &&
                    1 <= r.delta - d.delta &&
                    d.delta <= 6 &&
                    ((u = 0 < o ? 0.8 : 0.2),
                    (s.mousewheel.lastEventBeforeSnap = d),
                    c.splice(0),
                    (s.mousewheel.timeout = he(function () {
                      s.slideToClosest(s.params.speed, !0, void 0, u);
                    }, 0))),
                s.mousewheel.timeout ||
                  (s.mousewheel.timeout = he(function () {
                    var e = 0.5;
                    (s.mousewheel.lastEventBeforeSnap = d),
                      c.splice(0),
                      s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                  }, 500))),
              l || s.emit("scroll", a),
              s.params.autoplay &&
                s.params.autoplayDisableOnInteraction &&
                s.autoplay.stop(),
              p === s.minTranslate() || p === s.maxTranslate())
            )
              return !0;
          }
        } else {
          var p = {
              time: ve(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: t,
            },
            o = s.mousewheel.recentWheelEvents;
          2 <= o.length && o.shift();
          var t = o.length ? o[o.length - 1] : void 0;
          if (
            (o.push(p),
            (!t ||
              p.direction !== t.direction ||
              p.delta > t.delta ||
              p.time > t.time + 150) &&
              s.mousewheel.animateSlider(p),
            s.mousewheel.releaseScroll(p))
          )
            return !0;
        }
        return a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1;
      },
      animateSlider: function e(t) {
        var a = this,
          i = E();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            t.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            ve() - a.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((6 <= t.delta && ve() - a.mousewheel.lastScrollTime < 60) ||
            (t.direction < 0
              ? (a.isEnd && !a.params.loop) ||
                a.animating ||
                (a.slideNext(), a.emit("scroll", t.raw))
              : (a.isBeginning && !a.params.loop) ||
                a.animating ||
                (a.slidePrev(), a.emit("scroll", t.raw)),
            (a.mousewheel.lastScrollTime = new i.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function e(t) {
        var a = this,
          i = a.params.mousewheel;
        if (t.direction < 0) {
          if (a.isEnd && !a.params.loop && i.releaseOnEdges) return !0;
        } else if (a.isBeginning && !a.params.loop && i.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function e() {
        var t = this,
          a = Jt.event();
        if (t.params.cssMode)
          return t.wrapperEl.removeEventListener(a, t.mousewheel.handle), !0;
        if (!a) return !1;
        if (t.mousewheel.enabled) return !1;
        var i = t.$el;
        return (
          (i =
            "container" !== t.params.mousewheel.eventsTarget
              ? M(t.params.mousewheel.eventsTarget)
              : i).on("mouseenter", t.mousewheel.handleMouseEnter),
          i.on("mouseleave", t.mousewheel.handleMouseLeave),
          i.on(a, t.mousewheel.handle),
          (t.mousewheel.enabled = !0)
        );
      },
      disable: function e() {
        var t = this,
          a = Jt.event();
        if (t.params.cssMode)
          return t.wrapperEl.addEventListener(a, t.mousewheel.handle), !0;
        if (!a) return !1;
        if (!t.mousewheel.enabled) return !1;
        var i = t.$el;
        return (
          (i =
            "container" !== t.params.mousewheel.eventsTarget
              ? M(t.params.mousewheel.eventsTarget)
              : i).off(a, t.mousewheel.handle),
          !(t.mousewheel.enabled = !1)
        );
      },
    },
    Qt,
    ea = {
      toggleEl: function e(t, a) {
        t[a ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = a);
      },
      update: function e() {
        var t = this,
          a = t.params.navigation,
          i = t.navigation.toggleEl,
          s,
          r,
          s;
        t.params.loop ||
          ((r = (s = t.navigation).$nextEl),
          (s = s.$prevEl) &&
            0 < s.length &&
            (t.isBeginning ? i(s, !0) : i(s, !1),
            s[
              t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"
            ](a.lockClass)),
          r &&
            0 < r.length &&
            (t.isEnd ? i(r, !0) : i(r, !1),
            r[
              t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"
            ](a.lockClass)));
      },
      onPrevClick: function e(t) {
        var a = this;
        t.preventDefault(), (a.isBeginning && !a.params.loop) || a.slidePrev();
      },
      onNextClick: function e(t) {
        var a = this;
        t.preventDefault(), (a.isEnd && !a.params.loop) || a.slideNext();
      },
      init: function e() {
        var t = this,
          a = t.params.navigation,
          i,
          s;
        (a.nextEl || a.prevEl) &&
          (a.nextEl &&
            ((i = M(a.nextEl)),
            t.params.uniqueNavElements &&
              "string" == typeof a.nextEl &&
              1 < i.length &&
              1 === t.$el.find(a.nextEl).length &&
              (i = t.$el.find(a.nextEl))),
          a.prevEl &&
            ((s = M(a.prevEl)),
            t.params.uniqueNavElements &&
              "string" == typeof a.prevEl &&
              1 < s.length &&
              1 === t.$el.find(a.prevEl).length &&
              (s = t.$el.find(a.prevEl))),
          i && 0 < i.length && i.on("click", t.navigation.onNextClick),
          s && 0 < s.length && s.on("click", t.navigation.onPrevClick),
          be(t.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: s,
            prevEl: s && s[0],
          }));
      },
      destroy: function e() {
        var t = this,
          a = t.navigation,
          i = a.$nextEl,
          a = a.$prevEl;
        i &&
          i.length &&
          (i.off("click", t.navigation.onNextClick),
          i.removeClass(t.params.navigation.disabledClass)),
          a &&
            a.length &&
            (a.off("click", t.navigation.onPrevClick),
            a.removeClass(t.params.navigation.disabledClass));
      },
    },
    ta,
    aa = {
      update: function e() {
        var t = this,
          a = t.rtl,
          i = t.params.pagination;
        if (
          i.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var s = (t.virtual && t.params.virtual.enabled ? t.virtual : t).slides
              .length,
            r = t.pagination.$el,
            n,
            o = t.params.loop
              ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length,
            l,
            l,
            a,
            d,
            p;
          if (
            (t.params.loop
              ? ((n = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )) >
                  s - 1 - 2 * t.loopedSlides && (n -= s - 2 * t.loopedSlides),
                o - 1 < n && (n -= o),
                n < 0 && "bullets" !== t.params.paginationType && (n = o + n))
              : (n = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === i.type &&
              t.pagination.bullets &&
              0 < t.pagination.bullets.length)
          ) {
            var c = t.pagination.bullets,
              u,
              h,
              l,
              d,
              p,
              d;
            if (
              (i.dynamicBullets &&
                ((t.pagination.bulletSize = c
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
                ),
                1 < i.dynamicMainBullets &&
                  void 0 !== t.previousIndex &&
                  ((t.pagination.dynamicBulletIndex += n - t.previousIndex),
                  t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                    ? (t.pagination.dynamicBulletIndex =
                        i.dynamicMainBullets - 1)
                    : t.pagination.dynamicBulletIndex < 0 &&
                      (t.pagination.dynamicBulletIndex = 0)),
                (u = n - t.pagination.dynamicBulletIndex),
                (l =
                  ((h = u + (Math.min(c.length, i.dynamicMainBullets) - 1)) +
                    u) /
                  2)),
              c.removeClass(
                i.bulletActiveClass +
                  " " +
                  i.bulletActiveClass +
                  "-next " +
                  i.bulletActiveClass +
                  "-next-next " +
                  i.bulletActiveClass +
                  "-prev " +
                  i.bulletActiveClass +
                  "-prev-prev " +
                  i.bulletActiveClass +
                  "-main"
              ),
              1 < r.length)
            )
              c.each(function (e) {
                var t = M(e),
                  e = t.index();
                e === n && t.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (u <= e &&
                      e <= h &&
                      t.addClass(i.bulletActiveClass + "-main"),
                    e === u &&
                      t
                        .prev()
                        .addClass(i.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(i.bulletActiveClass + "-prev-prev"),
                    e === h &&
                      t
                        .next()
                        .addClass(i.bulletActiveClass + "-next")
                        .next()
                        .addClass(i.bulletActiveClass + "-next-next"));
              });
            else {
              var v = c.eq(n),
                m = v.index();
              if ((v.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                for (var s = c.eq(u), v = c.eq(h), f = u; f <= h; f += 1)
                  c.eq(f).addClass(i.bulletActiveClass + "-main");
                if (t.params.loop)
                  if (m >= c.length - i.dynamicMainBullets) {
                    for (var g = i.dynamicMainBullets; 0 <= g; --g)
                      c.eq(c.length - g).addClass(
                        i.bulletActiveClass + "-main"
                      );
                    c.eq(c.length - i.dynamicMainBullets - 1).addClass(
                      i.bulletActiveClass + "-prev"
                    );
                  } else
                    s
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(i.bulletActiveClass + "-next")
                        .next()
                        .addClass(i.bulletActiveClass + "-next-next");
                else
                  s
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next");
              }
            }
            i.dynamicBullets &&
              ((d = Math.min(c.length, i.dynamicMainBullets + 4)),
              (p =
                (t.pagination.bulletSize * d - t.pagination.bulletSize) / 2 -
                l * t.pagination.bulletSize),
              (d = a ? "right" : "left"),
              c.css(t.isHorizontal() ? d : "top", p + "px"));
          }
          "fraction" === i.type &&
            (r.find(ye(i.currentClass)).text(i.formatFractionCurrent(n + 1)),
            r.find(ye(i.totalClass)).text(i.formatFractionTotal(o))),
            "progressbar" === i.type &&
              ((l = i.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical"),
              (a = (n + 1) / o),
              (p = d = 1),
              "horizontal" === l ? (d = a) : (p = a),
              r
                .find(ye(i.progressbarFillClass))
                .transform(
                  "translate3d(0,0,0) scaleX(" + d + ") scaleY(" + p + ")"
                )
                .transition(t.params.speed)),
            "custom" === i.type && i.renderCustom
              ? (r.html(i.renderCustom(t, n + 1, o)),
                t.emit("paginationRender", r[0]))
              : t.emit("paginationUpdate", r[0]),
            r[
              t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"
            ](i.lockClass);
        }
      },
      render: function e() {
        var t = this,
          a = t.params.pagination;
        if (
          a.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var i = (t.virtual && t.params.virtual.enabled ? t.virtual : t).slides
              .length,
            s = t.pagination.$el,
            r = "";
          if ("bullets" === a.type) {
            var n = t.params.loop
              ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && !t.params.loop && i < n && (n = i);
            for (var o = 0; o < n; o += 1)
              a.renderBullet
                ? (r += a.renderBullet.call(t, o, a.bulletClass))
                : (r +=
                    "<" +
                    a.bulletElement +
                    ' class="' +
                    a.bulletClass +
                    '"></' +
                    a.bulletElement +
                    ">");
            s.html(r), (t.pagination.bullets = s.find(ye(a.bulletClass)));
          }
          "fraction" === a.type &&
            ((r = a.renderFraction
              ? a.renderFraction.call(t, a.currentClass, a.totalClass)
              : '<span class="' +
                a.currentClass +
                '"></span> / <span class="' +
                a.totalClass +
                '"></span>'),
            s.html(r)),
            "progressbar" === a.type &&
              ((r = a.renderProgressbar
                ? a.renderProgressbar.call(t, a.progressbarFillClass)
                : '<span class="' + a.progressbarFillClass + '"></span>'),
              s.html(r)),
            "custom" !== a.type &&
              t.emit("paginationRender", t.pagination.$el[0]);
        }
      },
      init: function e() {
        var a = this,
          t = a.params.pagination,
          i;
        !t.el ||
          (0 !== (i = M(t.el)).length &&
            (a.params.uniqueNavElements &&
              "string" == typeof t.el &&
              1 < i.length &&
              (i = a.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (a.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", ye(t.bulletClass), function e(t) {
                t.preventDefault();
                var t = M(this).index() * a.params.slidesPerGroup;
                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
              }),
            be(a.pagination, { $el: i, el: i[0] })));
      },
      destroy: function e() {
        var t = this,
          a = t.params.pagination,
          i;
        a.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length &&
          ((i = t.pagination.$el).removeClass(a.hiddenClass),
          i.removeClass(a.modifierClass + a.type),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass(a.bulletActiveClass),
          a.clickable && i.off("click", ye(a.bulletClass)));
      },
    },
    ia,
    sa = {
      setTranslate: function e() {
        var t = this,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          a,
          s;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          ((a = t.scrollbar),
          (i = t.rtlTranslate),
          (s = t.progress),
          (r = a.dragSize),
          (n = a.trackSize),
          (o = a.$dragEl),
          (l = a.$el),
          (d = t.params.scrollbar),
          (s = (n - (a = r)) * s),
          i
            ? 0 < (s = -s)
              ? ((a = r - s), (s = 0))
              : n < -s + r && (a = n + s)
            : s < 0
            ? ((a = r + s), (s = 0))
            : n < s + r && (a = n - s),
          t.isHorizontal()
            ? (o.transform("translate3d(" + s + "px, 0, 0)"),
              (o[0].style.width = a + "px"))
            : (o.transform("translate3d(0px, " + s + "px, 0)"),
              (o[0].style.height = a + "px")),
          d.hide &&
            (clearTimeout(t.scrollbar.timeout),
            (l[0].style.opacity = 1),
            (t.scrollbar.timeout = setTimeout(function () {
              (l[0].style.opacity = 0), l.transition(400);
            }, 1e3))));
      },
      setTransition: function e(t) {
        var a = this;
        a.params.scrollbar.el &&
          a.scrollbar.el &&
          a.scrollbar.$dragEl.transition(t);
      },
      updateSize: function e() {
        var t = this,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          l;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          ((i = (a = t.scrollbar).$dragEl),
          (s = a.$el),
          (i[0].style.width = ""),
          (i[0].style.height = ""),
          (r = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
          (o = (n = t.size / t.virtualSize) * (r / t.size)),
          (l =
            "auto" === t.params.scrollbar.dragSize
              ? r * n
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (i[0].style.width = l + "px")
            : (i[0].style.height = l + "px"),
          (s[0].style.display = 1 <= n ? "none" : ""),
          t.params.scrollbar.hide && (s[0].style.opacity = 0),
          be(a, { trackSize: r, divider: n, moveDivider: o, dragSize: l }),
          a.$el[
            t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"
          ](t.params.scrollbar.lockClass));
      },
      getPointerPosition: function e(t) {
        var a;
        return this.isHorizontal()
          ? ("touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0]
              : t
            ).clientX
          : ("touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0]
              : t
            ).clientY;
      },
      setDragPosition: function e(t) {
        var a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize,
          l = i.dragStartPos,
          n,
          n =
            (i.getPointerPosition(t) -
              r.offset()[a.isHorizontal() ? "left" : "top"] -
              (null !== l ? l : n / 2)) /
            (o - n);
        (n = Math.max(Math.min(n, 1), 0)), s && (n = 1 - n);
        var n = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * n;
        a.updateProgress(n),
          a.setTranslate(n),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function e(t) {
        var a = this,
          i = a.params.scrollbar,
          s = a.scrollbar,
          r = a.$wrapperEl,
          n = s.$el,
          o = s.$dragEl;
        (a.scrollbar.isTouched = !0),
          (a.scrollbar.dragStartPos =
            t.target === o[0] || t.target === o
              ? s.getPointerPosition(t) -
                t.target.getBoundingClientRect()[
                  a.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          r.transition(100),
          o.transition(100),
          s.setDragPosition(t),
          clearTimeout(a.scrollbar.dragTimeout),
          n.transition(0),
          i.hide && n.css("opacity", 1),
          a.params.cssMode && a.$wrapperEl.css("scroll-snap-type", "none"),
          a.emit("scrollbarDragStart", t);
      },
      onDragMove: function e(t) {
        var a = this,
          i = a.scrollbar,
          s = a.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        a.scrollbar.isTouched &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          i.setDragPosition(t),
          s.transition(0),
          r.transition(0),
          n.transition(0),
          a.emit("scrollbarDragMove", t));
      },
      onDragEnd: function e(t) {
        var a = this,
          i = a.params.scrollbar,
          s = a.scrollbar,
          r = a.$wrapperEl,
          n = s.$el;
        a.scrollbar.isTouched &&
          ((a.scrollbar.isTouched = !1),
          a.params.cssMode &&
            (a.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          i.hide &&
            (clearTimeout(a.scrollbar.dragTimeout),
            (a.scrollbar.dragTimeout = he(function () {
              n.css("opacity", 0), n.transition(400);
            }, 1e3))),
          a.emit("scrollbarDragEnd", t),
          i.snapOnRelease && a.slideToClosest());
      },
      enableDraggable: function e() {
        var t = this,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          i,
          n;
        t.params.scrollbar.el &&
          ((a = y()),
          (i = t.scrollbar),
          (s = t.touchEventsTouch),
          (r = t.touchEventsDesktop),
          (n = t.params),
          (o = t.support),
          (d = i.$el[0]),
          (i = !(!o.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          }),
          (n = !(!o.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          }),
          d &&
            (o.touch
              ? (d.addEventListener(s.start, t.scrollbar.onDragStart, i),
                d.addEventListener(s.move, t.scrollbar.onDragMove, i),
                d.addEventListener(s.end, t.scrollbar.onDragEnd, n))
              : (d.addEventListener(r.start, t.scrollbar.onDragStart, i),
                a.addEventListener(r.move, t.scrollbar.onDragMove, i),
                a.addEventListener(r.end, t.scrollbar.onDragEnd, n))));
      },
      disableDraggable: function e() {
        var t = this,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          i,
          n;
        t.params.scrollbar.el &&
          ((a = y()),
          (i = t.scrollbar),
          (s = t.touchEventsTouch),
          (r = t.touchEventsDesktop),
          (n = t.params),
          (o = t.support),
          (d = i.$el[0]),
          (i = !(!o.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          }),
          (n = !(!o.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          }),
          d &&
            (o.touch
              ? (d.removeEventListener(s.start, t.scrollbar.onDragStart, i),
                d.removeEventListener(s.move, t.scrollbar.onDragMove, i),
                d.removeEventListener(s.end, t.scrollbar.onDragEnd, n))
              : (d.removeEventListener(r.start, t.scrollbar.onDragStart, i),
                a.removeEventListener(r.move, t.scrollbar.onDragMove, i),
                a.removeEventListener(r.end, t.scrollbar.onDragEnd, n))));
      },
      init: function e() {
        var t = this,
          a,
          i,
          s,
          r,
          i;
        t.params.scrollbar.el &&
          ((a = t.scrollbar),
          (i = t.$el),
          (r = M((s = t.params.scrollbar).el)),
          0 ===
            (i = (r =
              t.params.uniqueNavElements &&
              "string" == typeof s.el &&
              1 < r.length &&
              1 === i.find(s.el).length
                ? i.find(s.el)
                : r).find("." + t.params.scrollbar.dragClass)).length &&
            ((i = M(
              '<div class="' + t.params.scrollbar.dragClass + '"></div>'
            )),
            r.append(i)),
          be(a, { $el: r, el: r[0], $dragEl: i, dragEl: i[0] }),
          s.draggable && a.enableDraggable());
      },
      destroy: function e() {
        var t;
        this.scrollbar.disableDraggable();
      },
    },
    ra,
    na = {
      setTransform: function e(t, a) {
        var i = this,
          s = i.rtl,
          r = M(t),
          n = s ? -1 : 1,
          o = r.attr("data-swiper-parallax") || "0",
          l = r.attr("data-swiper-parallax-x"),
          d = r.attr("data-swiper-parallax-y"),
          t = r.attr("data-swiper-parallax-scale"),
          s = r.attr("data-swiper-parallax-opacity"),
          s,
          a;
        l || d
          ? ((l = l || "0"), (d = d || "0"))
          : i.isHorizontal()
          ? ((l = o), (d = "0"))
          : ((d = o), (l = "0")),
          (l =
            0 <= l.indexOf("%")
              ? parseInt(l, 10) * a * n + "%"
              : l * a * n + "px"),
          (d = 0 <= d.indexOf("%") ? parseInt(d, 10) * a + "%" : d * a + "px"),
          null != s &&
            ((s = s - (s - 1) * (1 - Math.abs(a))), (r[0].style.opacity = s)),
          null == t
            ? r.transform("translate3d(" + l + ", " + d + ", 0px)")
            : ((a = t - (t - 1) * (1 - Math.abs(a))),
              r.transform(
                "translate3d(" + l + ", " + d + ", 0px) scale(" + a + ")"
              ));
      },
      setTranslate: function e() {
        var i = this,
          t = i.$el,
          a = i.slides,
          s = i.progress,
          r = i.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (e) {
            i.parallax.setTransform(e, s);
          }),
          a.each(function (e, t) {
            var a = e.progress;
            1 < i.params.slidesPerGroup &&
              "auto" !== i.params.slidesPerView &&
              (a += Math.ceil(t / 2) - s * (r.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              M(e)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (e) {
                  i.parallax.setTransform(e, a);
                });
          });
      },
      setTransition: function e(a) {
        var t, i;
        void 0 === a && (a = this.params.speed),
          this.$el
            .find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (e) {
              var t = M(e),
                e = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
              t.transition((e = 0 === a ? 0 : e));
            });
      },
    },
    oa,
    la = {
      getDistanceBetweenTouches: function e(t) {
        if (t.targetTouches.length < 2) return 1;
        var a = t.targetTouches[0].pageX,
          i = t.targetTouches[0].pageY,
          s = t.targetTouches[1].pageX,
          t = t.targetTouches[1].pageY,
          r;
        return Math.sqrt(Math.pow(s - a, 2) + Math.pow(t - i, 2));
      },
      onGestureStart: function e(t) {
        var a = this,
          i = a.support,
          s = a.params.zoom,
          r = a.zoom,
          n = r.gesture;
        if (
          ((r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1), !i.gestures)
        ) {
          if (
            "touchstart" !== t.type ||
            ("touchstart" === t.type && t.targetTouches.length < 2)
          )
            return;
          (r.fakeGestureTouched = !0),
            (n.scaleStart = la.getDistanceBetweenTouches(t));
        }
        (n.$slideEl && n.$slideEl.length) ||
        ((n.$slideEl = M(t.target).closest("." + a.params.slideClass)),
        0 === n.$slideEl.length && (n.$slideEl = a.slides.eq(a.activeIndex)),
        (n.$imageEl = n.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (n.$imageWrapEl = n.$imageEl.parent("." + s.containerClass)),
        (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
        0 !== n.$imageWrapEl.length)
          ? (n.$imageEl && n.$imageEl.transition(0), (a.zoom.isScaling = !0))
          : (n.$imageEl = void 0);
      },
      onGestureChange: function e(t) {
        var a = this,
          i = a.support,
          s = a.params.zoom,
          r = a.zoom,
          a = r.gesture;
        if (!i.gestures) {
          if (
            "touchmove" !== t.type ||
            ("touchmove" === t.type && t.targetTouches.length < 2)
          )
            return;
          (r.fakeGestureMoved = !0),
            (a.scaleMove = la.getDistanceBetweenTouches(t));
        }
        a.$imageEl && 0 !== a.$imageEl.length
          ? (i.gestures
              ? (r.scale = t.scale * r.currentScale)
              : (r.scale = (a.scaleMove / a.scaleStart) * r.currentScale),
            r.scale > a.maxRatio &&
              (r.scale =
                a.maxRatio - 1 + Math.pow(r.scale - a.maxRatio + 1, 0.5)),
            r.scale < s.minRatio &&
              (r.scale =
                s.minRatio + 1 - Math.pow(s.minRatio - r.scale + 1, 0.5)),
            a.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")"))
          : "gesturechange" === t.type && r.onGestureStart(t);
      },
      onGestureEnd: function e(t) {
        var a = this,
          i = a.device,
          s = a.support,
          r = a.params.zoom,
          n = a.zoom,
          o = n.gesture;
        if (!s.gestures) {
          if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
          if (
            "touchend" !== t.type ||
            ("touchend" === t.type && t.changedTouches.length < 2 && !i.android)
          )
            return;
          (n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1);
        }
        o.$imageEl &&
          0 !== o.$imageEl.length &&
          ((n.scale = Math.max(Math.min(n.scale, o.maxRatio), r.minRatio)),
          o.$imageEl
            .transition(a.params.speed)
            .transform("translate3d(0,0,0) scale(" + n.scale + ")"),
          (n.currentScale = n.scale),
          (n.isScaling = !1),
          1 === n.scale && (o.$slideEl = void 0));
      },
      onTouchStart: function e(t) {
        var a = this,
          i = a.device,
          s = a.zoom,
          a = s.gesture,
          s = s.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (s.isTouched ||
            (i.android && t.cancelable && t.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x = (
              "touchstart" === t.type ? t.targetTouches[0] : t
            ).pageX),
            (s.touchesStart.y = (
              "touchstart" === t.type ? t.targetTouches[0] : t
            ).pageY)));
      },
      onTouchMove: function e(t) {
        var a = this,
          i = a.zoom,
          s = i.gesture,
          r = i.image,
          n = i.velocity;
        if (
          s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((a.allowClick = !1), r.isTouched && s.$slideEl)
        ) {
          r.isMoved ||
            ((r.width = s.$imageEl[0].offsetWidth),
            (r.height = s.$imageEl[0].offsetHeight),
            (r.startX = fe(s.$imageWrapEl[0], "x") || 0),
            (r.startY = fe(s.$imageWrapEl[0], "y") || 0),
            (s.slideWidth = s.$slideEl[0].offsetWidth),
            (s.slideHeight = s.$slideEl[0].offsetHeight),
            s.$imageWrapEl.transition(0),
            a.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
          var o = r.width * i.scale,
            l = r.height * i.scale;
          if (!(o < s.slideWidth && l < s.slideHeight)) {
            if (
              ((r.minX = Math.min(s.slideWidth / 2 - o / 2, 0)),
              (r.maxX = -r.minX),
              (r.minY = Math.min(s.slideHeight / 2 - l / 2, 0)),
              (r.maxY = -r.minY),
              (r.touchesCurrent.x = (
                "touchmove" === t.type ? t.targetTouches[0] : t
              ).pageX),
              (r.touchesCurrent.y = (
                "touchmove" === t.type ? t.targetTouches[0] : t
              ).pageY),
              !r.isMoved && !i.isScaling)
            ) {
              if (
                a.isHorizontal() &&
                ((Math.floor(r.minX) === Math.floor(r.startX) &&
                  r.touchesCurrent.x < r.touchesStart.x) ||
                  (Math.floor(r.maxX) === Math.floor(r.startX) &&
                    r.touchesCurrent.x > r.touchesStart.x))
              )
                return void (r.isTouched = !1);
              if (
                !a.isHorizontal() &&
                ((Math.floor(r.minY) === Math.floor(r.startY) &&
                  r.touchesCurrent.y < r.touchesStart.y) ||
                  (Math.floor(r.maxY) === Math.floor(r.startY) &&
                    r.touchesCurrent.y > r.touchesStart.y))
              )
                return void (r.isTouched = !1);
            }
            t.cancelable && t.preventDefault(),
              t.stopPropagation(),
              (r.isMoved = !0),
              (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
              (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
              r.currentX < r.minX &&
                (r.currentX =
                  r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
              r.currentX > r.maxX &&
                (r.currentX =
                  r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
              r.currentY < r.minY &&
                (r.currentY =
                  r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
              r.currentY > r.maxY &&
                (r.currentY =
                  r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
              n.prevPositionX || (n.prevPositionX = r.touchesCurrent.x),
              n.prevPositionY || (n.prevPositionY = r.touchesCurrent.y),
              n.prevTime || (n.prevTime = Date.now()),
              (n.x =
                (r.touchesCurrent.x - n.prevPositionX) /
                (Date.now() - n.prevTime) /
                2),
              (n.y =
                (r.touchesCurrent.y - n.prevPositionY) /
                (Date.now() - n.prevTime) /
                2),
              Math.abs(r.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
              Math.abs(r.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
              (n.prevPositionX = r.touchesCurrent.x),
              (n.prevPositionY = r.touchesCurrent.y),
              (n.prevTime = Date.now()),
              s.$imageWrapEl.transform(
                "translate3d(" + r.currentX + "px, " + r.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function e() {
        var t,
          a = this.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length) {
          if (!s.isTouched || !s.isMoved)
            return (s.isTouched = !1), void (s.isMoved = !1);
          (s.isTouched = !1), (s.isMoved = !1);
          var n = 300,
            o = 300,
            l = r.x * n,
            d = s.currentX + l,
            l = r.y * o,
            l = s.currentY + l;
          0 !== r.x && (n = Math.abs((d - s.currentX) / r.x)),
            0 !== r.y && (o = Math.abs((l - s.currentY) / r.y));
          var o = Math.max(n, o);
          (s.currentX = d), (s.currentY = l);
          var l = s.width * a.scale,
            a = s.height * a.scale;
          (s.minX = Math.min(i.slideWidth / 2 - l / 2, 0)),
            (s.maxX = -s.minX),
            (s.minY = Math.min(i.slideHeight / 2 - a / 2, 0)),
            (s.maxY = -s.minY),
            (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
            (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
            i.$imageWrapEl
              .transition(o)
              .transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function e() {
        var t = this,
          a = t.zoom,
          i = a.gesture;
        i.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (i.$imageEl && i.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          i.$imageWrapEl && i.$imageWrapEl.transform("translate3d(0,0,0)"),
          (a.scale = 1),
          (a.currentScale = 1),
          (i.$slideEl = void 0),
          (i.$imageEl = void 0),
          (i.$imageWrapEl = void 0));
      },
      toggle: function e(t) {
        var a,
          i = this.zoom;
        i.scale && 1 !== i.scale ? i.out() : i.in(t);
      },
      in: function e(t) {
        var a = this,
          i = E(),
          s = a.zoom,
          r = a.params.zoom,
          n = s.gesture,
          o = s.image,
          l,
          o,
          d,
          p,
          c,
          u,
          c,
          u,
          i,
          o,
          i,
          o,
          i,
          t,
          o,
          o,
          r,
          t;
        n.$slideEl ||
          (a.params.virtual && a.params.virtual.enabled && a.virtual
            ? (n.$slideEl = a.$wrapperEl.children(
                "." + a.params.slideActiveClass
              ))
            : (n.$slideEl = a.slides.eq(a.activeIndex)),
          (n.$imageEl = n.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (n.$imageWrapEl = n.$imageEl.parent("." + r.containerClass))),
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            (n.$slideEl.addClass("" + r.zoomedSlideClass),
            (o =
              void 0 === o.touchesStart.x && t
                ? ((l = ("touchend" === t.type ? t.changedTouches[0] : t)
                    .pageX),
                  ("touchend" === t.type ? t.changedTouches[0] : t).pageY)
                : ((l = o.touchesStart.x), o.touchesStart.y)),
            (s.scale = n.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
            (s.currentScale =
              n.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
            t
              ? ((r = n.$slideEl[0].offsetWidth),
                (t = n.$slideEl[0].offsetHeight),
                (c = (d = n.$slideEl.offset().left + i.scrollX) + r / 2 - l),
                (u = (p = n.$slideEl.offset().top + i.scrollY) + t / 2 - o),
                (i = n.$imageEl[0].offsetWidth),
                (o = n.$imageEl[0].offsetHeight),
                (i = i * s.scale),
                (o = o * s.scale),
                (i = Math.min(r / 2 - i / 2, 0)),
                (t = Math.min(t / 2 - o / 2, 0)),
                (o = -i) < (c = (c = c * s.scale) < i ? i : c) && (c = o),
                (o = -t) < (u = (u = u * s.scale) < t ? t : u) && (u = o))
              : (u = c = 0),
            n.$imageWrapEl
              .transition(300)
              .transform("translate3d(" + c + "px, " + u + "px,0)"),
            n.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + s.scale + ")"));
      },
      out: function e() {
        var t = this,
          a = t.zoom,
          i = t.params.zoom,
          s = a.gesture;
        s.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (s.$slideEl = t.$wrapperEl.children(
                "." + t.params.slideActiveClass
              ))
            : (s.$slideEl = t.slides.eq(t.activeIndex)),
          (s.$imageEl = s.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((a.scale = 1),
            (a.currentScale = 1),
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            (s.$slideEl = void 0));
      },
      toggleGestures: function e(t) {
        var a = this,
          i = a.zoom,
          s = i.slideSelector,
          r = i.passiveListener;
        a.$wrapperEl[t]("gesturestart", s, i.onGestureStart, r),
          a.$wrapperEl[t]("gesturechange", s, i.onGestureChange, r),
          a.$wrapperEl[t]("gestureend", s, i.onGestureEnd, r);
      },
      enableGestures: function e() {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function e() {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function e() {
        var t = this,
          a = t.support,
          i = t.zoom,
          s,
          r,
          n;
        i.enabled ||
          ((i.enabled = !0),
          (s = !(
            "touchstart" !== t.touchEvents.start ||
            !a.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 }),
          (r = !a.passiveListener || { passive: !1, capture: !0 }),
          (n = "." + t.params.slideClass),
          (t.zoom.passiveListener = s),
          (t.zoom.slideSelector = n),
          a.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, t.zoom.enableGestures, s),
              t.$wrapperEl.on(t.touchEvents.end, t.zoom.disableGestures, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.on(t.touchEvents.start, n, i.onGestureStart, s),
              t.$wrapperEl.on(t.touchEvents.move, n, i.onGestureChange, r),
              t.$wrapperEl.on(t.touchEvents.end, n, i.onGestureEnd, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, n, i.onGestureEnd, s)),
          t.$wrapperEl.on(
            t.touchEvents.move,
            "." + t.params.zoom.containerClass,
            i.onTouchMove,
            r
          ));
      },
      disable: function e() {
        var t = this,
          a = t.zoom,
          i,
          s,
          r,
          n;
        a.enabled &&
          ((i = t.support),
          (t.zoom.enabled = !1),
          (s = !(
            "touchstart" !== t.touchEvents.start ||
            !i.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 }),
          (r = !i.passiveListener || { passive: !1, capture: !0 }),
          (n = "." + t.params.slideClass),
          i.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, t.zoom.enableGestures, s),
              t.$wrapperEl.off(t.touchEvents.end, t.zoom.disableGestures, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, n, a.onGestureStart, s),
              t.$wrapperEl.off(t.touchEvents.move, n, a.onGestureChange, r),
              t.$wrapperEl.off(t.touchEvents.end, n, a.onGestureEnd, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, n, a.onGestureEnd, s)),
          t.$wrapperEl.off(
            t.touchEvents.move,
            "." + t.params.zoom.containerClass,
            a.onTouchMove,
            r
          ));
      },
    },
    da,
    pa = {
      loadInSlide: function e(t, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy,
          a,
          c,
          t;
        void 0 !== t &&
          0 !== d.slides.length &&
          ((t = (c =
            d.virtual && d.params.virtual.enabled
              ? d.$wrapperEl.children(
                  "." +
                    d.params.slideClass +
                    '[data-swiper-slide-index="' +
                    t +
                    '"]'
                )
              : d.slides.eq(t)).find(
            "." +
              p.elementClass +
              ":not(." +
              p.loadedClass +
              "):not(." +
              p.loadingClass +
              ")"
          )),
          !c.hasClass(p.elementClass) ||
            c.hasClass(p.loadedClass) ||
            c.hasClass(p.loadingClass) ||
            t.push(c[0]),
          0 !== t.length &&
            t.each(function (e) {
              var a = M(e);
              a.addClass(p.loadingClass);
              var i = a.attr("data-background"),
                s = a.attr("data-src"),
                r = a.attr("data-srcset"),
                n = a.attr("data-sizes"),
                o = a.parent("picture");
              d.loadImage(a[0], s || i, r, n, !1, function () {
                var e, t, e;
                null == d ||
                  !d ||
                  (d && !d.params) ||
                  d.destroyed ||
                  (i
                    ? (a.css("background-image", 'url("' + i + '")'),
                      a.removeAttr("data-background"))
                    : (r && (a.attr("srcset", r), a.removeAttr("data-srcset")),
                      n && (a.attr("sizes", n), a.removeAttr("data-sizes")),
                      o.length &&
                        o.children("source").each(function (e) {
                          var e = M(e);
                          e.attr("data-srcset") &&
                            (e.attr("srcset", e.attr("data-srcset")),
                            e.removeAttr("data-srcset"));
                        }),
                      s && (a.attr("src", s), a.removeAttr("data-src"))),
                  a.addClass(p.loadedClass).removeClass(p.loadingClass),
                  c.find("." + p.preloaderClass).remove(),
                  d.params.loop &&
                    l &&
                    ((e = c.attr("data-swiper-slide-index")),
                    c.hasClass(d.params.slideDuplicateClass)
                      ? ((t = d.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            d.params.slideDuplicateClass +
                            ")"
                        )),
                        d.lazy.loadInSlide(t.index(), !1))
                      : ((e = d.$wrapperEl.children(
                          "." +
                            d.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        )),
                        d.lazy.loadInSlide(e.index(), !1))),
                  d.emit("lazyImageReady", c[0], a[0]),
                  d.params.autoHeight && d.updateAutoHeight());
              }),
                d.emit("lazyImageLoad", c[0], a[0]);
            }));
      },
      load: function e() {
        var t = this,
          a = t.$wrapperEl,
          i = t.params,
          s = t.slides,
          r = t.activeIndex,
          n = t.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (
              a.children(
                "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return 1;
          } else if (s[e]) return 1;
        }
        function p(e) {
          return n ? M(e).attr("data-swiper-slide-index") : M(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0),
          t.params.watchSlidesVisibility)
        )
          a.children("." + i.slideVisibleClass).each(function (e) {
            var e = n ? M(e).attr("data-swiper-slide-index") : M(e).index();
            t.lazy.loadInSlide(e);
          });
        else if (1 < l)
          for (var c = r; c < r + l; c += 1) d(c) && t.lazy.loadInSlide(c);
        else t.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (1 < l || (o.loadPrevNextAmount && 1 < o.loadPrevNextAmount)) {
            for (
              var u = o.loadPrevNextAmount,
                o = l,
                h = Math.min(r + o + Math.max(u, o), s.length),
                u = Math.max(r - Math.max(o, u), 0),
                v = r + l;
              v < h;
              v += 1
            )
              d(v) && t.lazy.loadInSlide(v);
            for (var m = u; m < r; m += 1) d(m) && t.lazy.loadInSlide(m);
          } else {
            var u = a.children("." + i.slideNextClass);
            0 < u.length && t.lazy.loadInSlide(p(u));
            var u = a.children("." + i.slidePrevClass);
            0 < u.length && t.lazy.loadInSlide(p(u));
          }
      },
      checkInViewOnLoad: function e() {
        var t = E(),
          a = this;
        if (a && !a.destroyed) {
          var i = a.params.lazy.scrollingElement
              ? M(a.params.lazy.scrollingElement)
              : M(t),
            s = i[0] === t,
            r = s ? t.innerWidth : i[0].offsetWidth,
            n = s ? t.innerHeight : i[0].offsetHeight,
            t = a.$el.offset(),
            o,
            l = !1;
          a.rtlTranslate && (t.left -= a.$el[0].scrollLeft);
          for (
            var d = [
                [t.left, t.top],
                [t.left + a.width, t.top],
                [t.left, t.top + a.height],
                [t.left + a.width, t.top + a.height],
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            var c = d[p];
            0 <= c[0] &&
              c[0] <= r &&
              0 <= c[1] &&
              c[1] <= n &&
              ((0 === c[0] && 0 === c[1]) || (l = !0));
          }
          l
            ? (a.lazy.load(), i.off("scroll", a.lazy.checkInViewOnLoad))
            : a.lazy.scrollHandlerAttached ||
              ((a.lazy.scrollHandlerAttached = !0),
              i.on("scroll", a.lazy.checkInViewOnLoad));
        }
      },
    },
    ca,
    ua = {
      LinearSpline: function e(t, a) {
        var i = (function e() {
            var a, i, s;
            return function (e, t) {
              for (i = -1, a = e.length; 1 < a - i; )
                e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
              return a;
            };
          })(),
          s,
          r;
        return (
          (this.x = t),
          (this.y = a),
          (this.lastIndex = t.length - 1),
          (this.interpolate = function e(t) {
            return t
              ? ((r = i(this.x, t)),
                (s = r - 1),
                ((t - this.x[s]) * (this.y[r] - this.y[s])) /
                  (this.x[r] - this.x[s]) +
                  this.y[s])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function e(t) {
        var a = this;
        a.controller.spline ||
          (a.controller.spline = a.params.loop
            ? new ua.LinearSpline(a.slidesGrid, t.slidesGrid)
            : new ua.LinearSpline(a.snapGrid, t.snapGrid));
      },
      setTranslate: function e(t, a) {
        var i = this,
          s = i.controller.control,
          r,
          n,
          o = i.constructor;
        function l(e) {
          var t = i.rtlTranslate ? -i.translate : i.translate;
          "slide" === i.params.controller.by &&
            (i.controller.getInterpolateFunction(e),
            (n = -i.controller.spline.interpolate(-t))),
            (n && "container" !== i.params.controller.by) ||
              ((r =
                (e.maxTranslate() - e.minTranslate()) /
                (i.maxTranslate() - i.minTranslate())),
              (n = (t - i.minTranslate()) * r + e.minTranslate())),
            i.params.controller.inverse && (n = e.maxTranslate() - n),
            e.updateProgress(n),
            e.setTranslate(n, i),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(s))
          for (var d = 0; d < s.length; d += 1)
            s[d] !== a && s[d] instanceof o && l(s[d]);
        else s instanceof o && a !== s && l(s);
      },
      setTransition: function e(t, a) {
        var i = this,
          s = i.constructor,
          r = i.controller.control,
          n;
        function o(e) {
          e.setTransition(t, i),
            0 !== t &&
              (e.transitionStart(),
              e.params.autoHeight &&
                he(function () {
                  e.updateAutoHeight();
                }),
              e.$wrapperEl.transitionEnd(function () {
                r &&
                  (e.params.loop &&
                    "slide" === i.params.controller.by &&
                    e.loopFix(),
                  e.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (n = 0; n < r.length; n += 1)
            r[n] !== a && r[n] instanceof s && o(r[n]);
        else r instanceof s && a !== r && o(r);
      },
    },
    ha,
    va = {
      getRandomNumber: function e(t) {
        var a = function e() {
          return Math.round(16 * Math.random()).toString(16);
        };
        return "x".repeat((t = void 0 === t ? 16 : t)).replace(/x/g, a);
      },
      makeElFocusable: function e(t) {
        return t.attr("tabIndex", "0"), t;
      },
      makeElNotFocusable: function e(t) {
        return t.attr("tabIndex", "-1"), t;
      },
      addElRole: function e(t, a) {
        return t.attr("role", a), t;
      },
      addElRoleDescription: function e(t, a) {
        return t.attr("aria-roledescription", a), t;
      },
      addElControls: function e(t, a) {
        return t.attr("aria-controls", a), t;
      },
      addElLabel: function e(t, a) {
        return t.attr("aria-label", a), t;
      },
      addElId: function e(t, a) {
        return t.attr("id", a), t;
      },
      addElLive: function e(t, a) {
        return t.attr("aria-live", a), t;
      },
      disableEl: function e(t) {
        return t.attr("aria-disabled", !0), t;
      },
      enableEl: function e(t) {
        return t.attr("aria-disabled", !1), t;
      },
      onEnterOrSpaceKey: function e(t) {
        var a, i, t;
        (13 !== t.keyCode && 32 !== t.keyCode) ||
          ((i = (a = this).params.a11y),
          (t = M(t.target)),
          a.navigation &&
            a.navigation.$nextEl &&
            t.is(a.navigation.$nextEl) &&
            ((a.isEnd && !a.params.loop) || a.slideNext(),
            a.isEnd
              ? a.a11y.notify(i.lastSlideMessage)
              : a.a11y.notify(i.nextSlideMessage)),
          a.navigation &&
            a.navigation.$prevEl &&
            t.is(a.navigation.$prevEl) &&
            ((a.isBeginning && !a.params.loop) || a.slidePrev(),
            a.isBeginning
              ? a.a11y.notify(i.firstSlideMessage)
              : a.a11y.notify(i.prevSlideMessage)),
          a.pagination &&
            t.is(ye(a.params.pagination.bulletClass)) &&
            t[0].click());
      },
      notify: function e(t) {
        var a,
          i = this.a11y.liveRegion;
        0 !== i.length && (i.html(""), i.html(t));
      },
      updateNavigation: function e() {
        var t = this,
          a,
          i,
          a;
        !t.params.loop &&
          t.navigation &&
          ((i = (a = t.navigation).$nextEl),
          (a = a.$prevEl) &&
            0 < a.length &&
            (t.isBeginning
              ? (t.a11y.disableEl(a), t.a11y.makeElNotFocusable(a))
              : (t.a11y.enableEl(a), t.a11y.makeElFocusable(a))),
          i &&
            0 < i.length &&
            (t.isEnd
              ? (t.a11y.disableEl(i), t.a11y.makeElNotFocusable(i))
              : (t.a11y.enableEl(i), t.a11y.makeElFocusable(i))));
      },
      updatePagination: function e() {
        var t = this,
          a = t.params.a11y;
        t.pagination &&
          t.params.pagination.clickable &&
          t.pagination.bullets &&
          t.pagination.bullets.length &&
          t.pagination.bullets.each(function (e) {
            var e = M(e);
            t.a11y.makeElFocusable(e),
              t.params.pagination.renderBullet ||
                (t.a11y.addElRole(e, "button"),
                t.a11y.addElLabel(
                  e,
                  a.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    e.index() + 1
                  )
                ));
          });
      },
      init: function e() {
        var a = this,
          i = a.params.a11y;
        a.$el.append(a.a11y.liveRegion);
        var t = a.$el;
        i.containerRoleDescriptionMessage &&
          a.a11y.addElRoleDescription(t, i.containerRoleDescriptionMessage),
          i.containerMessage && a.a11y.addElLabel(t, i.containerMessage);
        var s = a.$wrapperEl,
          r = s.attr("id") || "swiper-wrapper-" + a.a11y.getRandomNumber(16),
          t,
          n,
          o;
        a.a11y.addElId(s, r),
          (t =
            a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite"),
          a.a11y.addElLive(s, t),
          i.itemRoleDescriptionMessage &&
            a.a11y.addElRoleDescription(
              M(a.slides),
              i.itemRoleDescriptionMessage
            ),
          a.a11y.addElRole(M(a.slides), "group"),
          a.slides.each(function (e) {
            var t = M(e),
              e = i.slideLabelMessage
                .replace(/\{\{index\}\}/, t.index() + 1)
                .replace(/\{\{slidesLength\}\}/, a.slides.length);
            a.a11y.addElLabel(t, e);
          }),
          a.navigation && a.navigation.$nextEl && (n = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (o = a.navigation.$prevEl),
          n &&
            n.length &&
            (a.a11y.makeElFocusable(n),
            "BUTTON" !== n[0].tagName &&
              (a.a11y.addElRole(n, "button"),
              n.on("keydown", a.a11y.onEnterOrSpaceKey)),
            a.a11y.addElLabel(n, i.nextSlideMessage),
            a.a11y.addElControls(n, r)),
          o &&
            o.length &&
            (a.a11y.makeElFocusable(o),
            "BUTTON" !== o[0].tagName &&
              (a.a11y.addElRole(o, "button"),
              o.on("keydown", a.a11y.onEnterOrSpaceKey)),
            a.a11y.addElLabel(o, i.prevSlideMessage),
            a.a11y.addElControls(o, r)),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.on(
              "keydown",
              ye(a.params.pagination.bulletClass),
              a.a11y.onEnterOrSpaceKey
            );
      },
      destroy: function e() {
        var t = this,
          a,
          i;
        t.a11y.liveRegion &&
          0 < t.a11y.liveRegion.length &&
          t.a11y.liveRegion.remove(),
          t.navigation && t.navigation.$nextEl && (a = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl),
          a && a.off("keydown", t.a11y.onEnterOrSpaceKey),
          i && i.off("keydown", t.a11y.onEnterOrSpaceKey),
          t.pagination &&
            t.params.pagination.clickable &&
            t.pagination.bullets &&
            t.pagination.bullets.length &&
            t.pagination.$el.off(
              "keydown",
              ye(t.params.pagination.bulletClass),
              t.a11y.onEnterOrSpaceKey
            );
      },
    },
    ma,
    fa = {
      init: function e() {
        var t = this,
          a = E();
        if (t.params.history) {
          if (!a.history || !a.history.pushState)
            return (
              (t.params.history.enabled = !1),
              void (t.params.hashNavigation.enabled = !0)
            );
          var i = t.history;
          (i.initialized = !0),
            (i.paths = fa.getPathValues(t.params.url)),
            (i.paths.key || i.paths.value) &&
              (i.scrollToSlide(0, i.paths.value, t.params.runCallbacksOnInit),
              t.params.history.replaceState ||
                a.addEventListener("popstate", t.history.setHistoryPopState));
        }
      },
      destroy: function e() {
        var t = this,
          a = E();
        t.params.history.replaceState ||
          a.removeEventListener("popstate", t.history.setHistoryPopState);
      },
      setHistoryPopState: function e() {
        var t = this;
        (t.history.paths = fa.getPathValues(t.params.url)),
          t.history.scrollToSlide(t.params.speed, t.history.paths.value, !1);
      },
      getPathValues: function e(t) {
        var a = E(),
          t,
          t = t ? new URL(t) : a.location,
          a = t.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = a.length,
          i,
          s;
        return { key: a[t - 2], value: a[t - 1] };
      },
      setHistory: function e(t, a) {
        var i = this,
          s = E(),
          r,
          r,
          a,
          a,
          t;
        i.history.initialized &&
          i.params.history.enabled &&
          ((r = i.params.url ? new URL(i.params.url) : s.location),
          (a = i.slides.eq(a)),
          (a = fa.slugify(a.attr("data-history"))),
          r.pathname.includes(t) || (a = t + "/" + a),
          ((t = s.history.state) && t.value === a) ||
            (i.params.history.replaceState
              ? s.history.replaceState({ value: a }, null, a)
              : s.history.pushState({ value: a }, null, a)));
      },
      slugify: function e(t) {
        return t
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function e(t, a, i) {
        var s = this;
        if (a)
          for (var r = 0, n = s.slides.length; r < n; r += 1) {
            var o = s.slides.eq(r),
              l,
              o;
            fa.slugify(o.attr("data-history")) !== a ||
              o.hasClass(s.params.slideDuplicateClass) ||
              ((o = o.index()), s.slideTo(o, t, i));
          }
        else s.slideTo(0, t, i);
      },
    },
    ga,
    ba = {
      onHashCange: function e() {
        var t = this,
          a = y();
        t.emit("hashChange");
        var a = a.location.hash.replace("#", ""),
          i,
          a;
        a === t.slides.eq(t.activeIndex).attr("data-hash") ||
          (void 0 !==
            (a = t.$wrapperEl
              .children("." + t.params.slideClass + '[data-hash="' + a + '"]')
              .index()) &&
            t.slideTo(a));
      },
      setHash: function e() {
        var t = this,
          a = E(),
          i = y(),
          a,
          a;
        t.hashNavigation.initialized &&
          t.params.hashNavigation.enabled &&
          (t.params.hashNavigation.replaceState &&
          a.history &&
          a.history.replaceState
            ? a.history.replaceState(
                null,
                null,
                "#" + t.slides.eq(t.activeIndex).attr("data-hash") || ""
              )
            : ((a =
                (a = t.slides.eq(t.activeIndex)).attr("data-hash") ||
                a.attr("data-history")),
              (i.location.hash = a || "")),
          t.emit("hashSet"));
      },
      init: function e() {
        var t = this,
          a = y(),
          i = E();
        if (
          !(
            !t.params.hashNavigation.enabled ||
            (t.params.history && t.params.history.enabled)
          )
        ) {
          t.hashNavigation.initialized = !0;
          var s = a.location.hash.replace("#", "");
          if (s)
            for (var r = 0, n = 0, o = t.slides.length; n < o; n += 1) {
              var l = t.slides.eq(n),
                d,
                l;
              (l.attr("data-hash") || l.attr("data-history")) !== s ||
                l.hasClass(t.params.slideDuplicateClass) ||
                ((l = l.index()),
                t.slideTo(l, 0, t.params.runCallbacksOnInit, !0));
            }
          t.params.hashNavigation.watchState &&
            M(i).on("hashchange", t.hashNavigation.onHashCange);
        }
      },
      destroy: function e() {
        var t = this,
          a = E();
        t.params.hashNavigation.watchState &&
          M(a).off("hashchange", t.hashNavigation.onHashCange);
      },
    },
    wa,
    ya = {
      run: function e() {
        var t = this,
          a = t.slides.eq(t.activeIndex),
          i = t.params.autoplay.delay;
        a.attr("data-swiper-autoplay") &&
          (i = a.attr("data-swiper-autoplay") || t.params.autoplay.delay),
          clearTimeout(t.autoplay.timeout),
          (t.autoplay.timeout = he(function () {
            var e;
            t.params.autoplay.reverseDirection
              ? t.params.loop
                ? (t.loopFix(),
                  (e = t.slidePrev(t.params.speed, !0, !0)),
                  t.emit("autoplay"))
                : t.isBeginning
                ? t.params.autoplay.stopOnLastSlide
                  ? t.autoplay.stop()
                  : ((e = t.slideTo(
                      t.slides.length - 1,
                      t.params.speed,
                      !0,
                      !0
                    )),
                    t.emit("autoplay"))
                : ((e = t.slidePrev(t.params.speed, !0, !0)),
                  t.emit("autoplay"))
              : t.params.loop
              ? (t.loopFix(),
                (e = t.slideNext(t.params.speed, !0, !0)),
                t.emit("autoplay"))
              : t.isEnd
              ? t.params.autoplay.stopOnLastSlide
                ? t.autoplay.stop()
                : ((e = t.slideTo(0, t.params.speed, !0, !0)),
                  t.emit("autoplay"))
              : ((e = t.slideNext(t.params.speed, !0, !0)), t.emit("autoplay")),
              ((t.params.cssMode && t.autoplay.running) || !1 === e) &&
                t.autoplay.run();
          }, i));
      },
      start: function e() {
        var t = this;
        return (
          void 0 === t.autoplay.timeout &&
          !t.autoplay.running &&
          ((t.autoplay.running = !0),
          t.emit("autoplayStart"),
          t.autoplay.run(),
          !0)
        );
      },
      stop: function e() {
        var t = this;
        return (
          !!t.autoplay.running &&
          void 0 !== t.autoplay.timeout &&
          (t.autoplay.timeout &&
            (clearTimeout(t.autoplay.timeout), (t.autoplay.timeout = void 0)),
          (t.autoplay.running = !1),
          t.emit("autoplayStop"),
          !0)
        );
      },
      pause: function e(t) {
        var a = this;
        a.autoplay.running &&
          (a.autoplay.paused ||
            (a.autoplay.timeout && clearTimeout(a.autoplay.timeout),
            (a.autoplay.paused = !0),
            0 !== t && a.params.autoplay.waitForTransition
              ? (a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.autoplay.onTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.autoplay.onTransitionEnd
                ))
              : ((a.autoplay.paused = !1), a.autoplay.run())));
      },
      onVisibilityChange: function e() {
        var t = this,
          a = y();
        "hidden" === a.visibilityState &&
          t.autoplay.running &&
          t.autoplay.pause(),
          "visible" === a.visibilityState &&
            t.autoplay.paused &&
            (t.autoplay.run(), (t.autoplay.paused = !1));
      },
      onTransitionEnd: function e(t) {
        var a = this;
        a &&
          !a.destroyed &&
          a.$wrapperEl &&
          t.target === a.$wrapperEl[0] &&
          (a.$wrapperEl[0].removeEventListener(
            "transitionend",
            a.autoplay.onTransitionEnd
          ),
          a.$wrapperEl[0].removeEventListener(
            "webkitTransitionEnd",
            a.autoplay.onTransitionEnd
          ),
          (a.autoplay.paused = !1),
          a.autoplay.running ? a.autoplay.run() : a.autoplay.stop());
      },
    },
    Ea,
    xa = {
      setTranslate: function e() {
        for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
          var s = t.slides.eq(i),
            r,
            n = -s[0].swiperSlideOffset;
          t.params.virtualTranslate || (n -= t.translate);
          var o = 0;
          t.isHorizontal() || ((o = n), (n = 0));
          var l = t.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(s[0].progress), 0)
            : 1 + Math.min(Math.max(s[0].progress, -1), 0);
          s.css({ opacity: l }).transform(
            "translate3d(" + n + "px, " + o + "px, 0px)"
          );
        }
      },
      setTransition: function e(t) {
        var a = this,
          i = a.slides,
          s = a.$wrapperEl,
          r;
        i.transition(t),
          a.params.virtualTranslate &&
            0 !== t &&
            ((r = !1),
            i.transitionEnd(function () {
              if (!r && a && !a.destroyed) {
                (r = !0), (a.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                  t < e.length;
                  t += 1
                )
                  s.trigger(e[t]);
              }
            }));
      },
    },
    Ta,
    Sa = {
      setTranslate: function e() {
        var t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          c = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled,
          h = 0,
          v;
        p.shadow &&
          (c
            ? (0 === (v = i.find(".swiper-cube-shadow")).length &&
                ((v = M('<div class="swiper-cube-shadow"></div>')),
                i.append(v)),
              v.css({ height: r + "px" }))
            : 0 === (v = a.find(".swiper-cube-shadow")).length &&
              ((v = M('<div class="swiper-cube-shadow"></div>')), a.append(v)));
        for (var m = 0, f, a, r, f, a; m < s.length; m += 1) {
          var g = s.eq(m),
            b = m,
            w =
              90 *
              (b = u ? parseInt(g.attr("data-swiper-slide-index"), 10) : b),
            y = Math.floor(w / 360);
          o && ((w = -w), (y = Math.floor(-w / 360)));
          var E = Math.max(Math.min(g[0].progress, 1), -1),
            x = 0,
            T = 0,
            S = 0,
            C,
            T,
            S;
          b % 4 == 0
            ? ((x = 4 * -y * l), (S = 0))
            : (b - 1) % 4 == 0
            ? ((x = 0), (S = 4 * -y * l))
            : (b - 2) % 4 == 0
            ? ((x = l + 4 * y * l), (S = l))
            : (b - 3) % 4 == 0 && ((x = -l), (S = 3 * l + 4 * l * y)),
            o && (x = -x),
            c || ((T = x), (x = 0)),
            E <= 1 && -1 < E && (h = o ? 90 * -b - 90 * E : 90 * b + 90 * E),
            g.transform(
              "rotateX(" +
                (c ? 0 : -w) +
                "deg) rotateY(" +
                (c ? w : 0) +
                "deg) translate3d(" +
                x +
                "px, " +
                T +
                "px, " +
                S +
                "px)"
            ),
            p.slideShadows &&
              ((T = c
                ? g.find(".swiper-slide-shadow-left")
                : g.find(".swiper-slide-shadow-top")),
              (S = c
                ? g.find(".swiper-slide-shadow-right")
                : g.find(".swiper-slide-shadow-bottom")),
              0 === T.length &&
                ((T = M(
                  '<div class="swiper-slide-shadow-' +
                    (c ? "left" : "top") +
                    '"></div>'
                )),
                g.append(T)),
              0 === S.length &&
                ((S = M(
                  '<div class="swiper-slide-shadow-' +
                    (c ? "right" : "bottom") +
                    '"></div>'
                )),
                g.append(S)),
              T.length && (T[0].style.opacity = Math.max(-E, 0)),
              S.length && (S[0].style.opacity = Math.max(E, 0)));
        }
        i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px",
        }),
          p.shadow &&
            (c
              ? v.transform(
                  "translate3d(0px, " +
                    (r / 2 + p.shadowOffset) +
                    "px, " +
                    -r / 2 +
                    "px) rotateX(90deg) rotateZ(0deg) scale(" +
                    p.shadowScale +
                    ")"
                )
              : ((f = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)),
                (a =
                  1.5 -
                  (Math.sin((2 * f * Math.PI) / 360) / 2 +
                    Math.cos((2 * f * Math.PI) / 360) / 2)),
                (r = p.shadowScale),
                (f = p.shadowScale / a),
                (a = p.shadowOffset),
                v.transform(
                  "scale3d(" +
                    r +
                    ", 1, " +
                    f +
                    ") translate3d(0px, " +
                    (n / 2 + a) +
                    "px, " +
                    -n / 2 / f +
                    "px) rotateX(-90deg)"
                )));
        var d = d.isSafari || d.isWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            d +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function e(t) {
        var a = this,
          i = a.$el,
          s;
        a.slides
          .transition(t)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(t),
          a.params.cubeEffect.shadow &&
            !a.isHorizontal() &&
            i.find(".swiper-cube-shadow").transition(t);
      },
    },
    Ca,
    Ma = {
      setTranslate: function e() {
        for (
          var t = this, a = t.slides, i = t.rtlTranslate, s = 0;
          s < a.length;
          s += 1
        ) {
          var r = a.eq(s),
            n = r[0].progress,
            o,
            l,
            d =
              -180 *
              (n = t.params.flipEffect.limitRotation
                ? Math.max(Math.min(r[0].progress, 1), -1)
                : n),
            p = 0,
            c = -r[0].swiperSlideOffset,
            u = 0,
            h,
            v;
          t.isHorizontal() ? i && (d = -d) : ((u = c), (p = -d), (d = c = 0)),
            (r[0].style.zIndex = -Math.abs(Math.round(n)) + a.length),
            t.params.flipEffect.slideShadows &&
              ((h = t.isHorizontal()
                ? r.find(".swiper-slide-shadow-left")
                : r.find(".swiper-slide-shadow-top")),
              (v = t.isHorizontal()
                ? r.find(".swiper-slide-shadow-right")
                : r.find(".swiper-slide-shadow-bottom")),
              0 === h.length &&
                ((h = M(
                  '<div class="swiper-slide-shadow-' +
                    (t.isHorizontal() ? "left" : "top") +
                    '"></div>'
                )),
                r.append(h)),
              0 === v.length &&
                ((v = M(
                  '<div class="swiper-slide-shadow-' +
                    (t.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                r.append(v)),
              h.length && (h[0].style.opacity = Math.max(-n, 0)),
              v.length && (v[0].style.opacity = Math.max(n, 0))),
            r.transform(
              "translate3d(" +
                c +
                "px, " +
                u +
                "px, 0px) rotateX(" +
                p +
                "deg) rotateY(" +
                d +
                "deg)"
            );
        }
      },
      setTransition: function e(t) {
        var i = this,
          a = i.slides,
          s = i.activeIndex,
          r = i.$wrapperEl,
          n;
        a
          .transition(t)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(t),
          i.params.virtualTranslate &&
            0 !== t &&
            ((n = !1),
            a.eq(s).transitionEnd(function e() {
              if (!n && i && !i.destroyed) {
                (n = !0), (i.animating = !1);
                for (
                  var t = ["webkitTransitionEnd", "transitionend"], a = 0;
                  a < t.length;
                  a += 1
                )
                  r.trigger(t[a]);
              }
            }));
      },
    },
    za,
    Pa = {
      setTranslate: function e() {
        for (
          var t = this,
            a = t.width,
            i = t.height,
            s = t.slides,
            r = t.slidesSizesGrid,
            n = t.params.coverflowEffect,
            o = t.isHorizontal(),
            t = t.translate,
            l = o ? a / 2 - t : i / 2 - t,
            d = o ? n.rotate : -n.rotate,
            p = n.depth,
            c = 0,
            u = s.length;
          c < u;
          c += 1
        ) {
          var h = s.eq(c),
            v = r[c],
            m,
            f = ((l - h[0].swiperSlideOffset - v / 2) / v) * n.modifier,
            g = o ? d * f : 0,
            b = o ? 0 : d * f,
            w = -p * Math.abs(f),
            y = n.stretch;
          "string" == typeof y &&
            -1 !== y.indexOf("%") &&
            (y = (parseFloat(n.stretch) / 100) * v);
          var E = o ? 0 : y * f,
            v = o ? y * f : 0,
            y = 1 - (1 - n.scale) * Math.abs(f),
            x,
            g,
            y;
          Math.abs(v) < 0.001 && (v = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(y) < 0.001 && (y = 0),
            h.transform(
              "translate3d(" +
                v +
                "px," +
                E +
                "px," +
                w +
                "px)  rotateX(" +
                b +
                "deg) rotateY(" +
                g +
                "deg) scale(" +
                y +
                ")"
            ),
            (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
            n.slideShadows &&
              ((g = o
                ? h.find(".swiper-slide-shadow-left")
                : h.find(".swiper-slide-shadow-top")),
              (y = o
                ? h.find(".swiper-slide-shadow-right")
                : h.find(".swiper-slide-shadow-bottom")),
              0 === g.length &&
                ((g = M(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "left" : "top") +
                    '"></div>'
                )),
                h.append(g)),
              0 === y.length &&
                ((y = M(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                h.append(y)),
              g.length && (g[0].style.opacity = 0 < f ? f : 0),
              y.length && (y[0].style.opacity = 0 < -f ? -f : 0));
        }
      },
      setTransition: function e(t) {
        var a;
        this.slides
          .transition(t)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(t);
      },
    },
    ka,
    $a = {
      init: function e() {
        var t = this,
          a = t.params.thumbs;
        if (t.thumbs.initialized) return !1;
        t.thumbs.initialized = !0;
        var i = t.constructor;
        return (
          a.swiper instanceof i
            ? ((t.thumbs.swiper = a.swiper),
              be(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              be(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : ge(a.swiper) &&
              ((t.thumbs.swiper = new i(
                be({}, a.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (t.thumbs.swiperCreated = !0)),
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", t.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function e() {
        var t = this,
          a = t.thumbs.swiper,
          i,
          s,
          r,
          s,
          a,
          i,
          r;
        a &&
          ((i = a.clickedIndex),
          ((s = a.clickedSlide) &&
            M(s).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
            (null != i &&
              ((r = a.params.loop
                ? parseInt(
                    M(a.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : i),
              t.params.loop &&
                ((s = t.activeIndex),
                t.slides.eq(s).hasClass(t.params.slideDuplicateClass) &&
                  (t.loopFix(),
                  (t._clientLeft = t.$wrapperEl[0].clientLeft),
                  (s = t.activeIndex)),
                (a = t.slides
                  .eq(s)
                  .prevAll('[data-swiper-slide-index="' + r + '"]')
                  .eq(0)
                  .index()),
                (i = t.slides
                  .eq(s)
                  .nextAll('[data-swiper-slide-index="' + r + '"]')
                  .eq(0)
                  .index()),
                (r = void 0 === a || (void 0 !== i && i - s < s - a) ? i : a)),
              t.slideTo(r))));
      },
      update: function e(t) {
        var a = this,
          i = a.thumbs.swiper;
        if (i) {
          var s =
              "auto" === i.params.slidesPerView
                ? i.slidesPerViewDynamic()
                : i.params.slidesPerView,
            r = a.params.thumbs.autoScrollOffset,
            n = r && !i.params.loop,
            o,
            l,
            d,
            d,
            l,
            l,
            d;
          (a.realIndex === i.realIndex && !n) ||
            ((o = i.activeIndex),
            (d = i.params.loop
              ? (i.slides.eq(o).hasClass(i.params.slideDuplicateClass) &&
                  (i.loopFix(),
                  (i._clientLeft = i.$wrapperEl[0].clientLeft),
                  (o = i.activeIndex)),
                (d = i.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + a.realIndex + '"]')
                  .eq(0)
                  .index()),
                (l = i.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + a.realIndex + '"]')
                  .eq(0)
                  .index()),
                (l =
                  void 0 === d
                    ? l
                    : void 0 === l
                    ? d
                    : l - o == o - d
                    ? o
                    : l - o < o - d
                    ? l
                    : d),
                a.activeIndex > a.previousIndex ? "next" : "prev")
              : (l = a.realIndex) > a.previousIndex
              ? "next"
              : "prev"),
            n && (l += "next" === d ? r : -1 * r),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(l) < 0 &&
              (i.params.centeredSlides
                ? (l =
                    o < l
                      ? l - Math.floor(s / 2) + 1
                      : l + Math.floor(s / 2) - 1)
                : o < l && (l = l - s + 1),
              i.slideTo(l, t ? 0 : void 0)));
          var p = 1,
            c = a.params.thumbs.slideThumbActiveClass;
          if (
            (1 < a.params.slidesPerView &&
              !a.params.centeredSlides &&
              (p = a.params.slidesPerView),
            a.params.thumbs.multipleActiveThumbs || (p = 1),
            (p = Math.floor(p)),
            i.slides.removeClass(c),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (var u = 0; u < p; u += 1)
              i.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (a.realIndex + u) + '"]'
                )
                .addClass(c);
          else
            for (var h = 0; h < p; h += 1)
              i.slides.eq(a.realIndex + h).addClass(c);
        }
      },
    },
    La,
    Ia;
  return (
    _t.use([
      Pe,
      $e,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function e() {
          var t;
          we(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: ve(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: Jt.enable,
              disable: Jt.disable,
              handle: Jt.handle,
              handleMouseEnter: Jt.handleMouseEnter,
              handleMouseLeave: Jt.handleMouseLeave,
              animateSlider: Jt.animateSlider,
              releaseScroll: Jt.releaseScroll,
            },
          });
        },
        on: {
          init: function e(t) {
            !t.params.mousewheel.enabled &&
              t.params.cssMode &&
              t.mousewheel.disable(),
              t.params.mousewheel.enabled && t.mousewheel.enable();
          },
          destroy: function e(t) {
            t.params.cssMode && t.mousewheel.enable(),
              t.mousewheel.enabled && t.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function e() {
          var t;
          we(this, { navigation: a({}, ea) });
        },
        on: {
          init: function e(t) {
            t.navigation.init(), t.navigation.update();
          },
          toEdge: function e(t) {
            t.navigation.update();
          },
          fromEdge: function e(t) {
            t.navigation.update();
          },
          destroy: function e(t) {
            t.navigation.destroy();
          },
          click: function e(t, a) {
            var i = t.navigation,
              s = i.$nextEl,
              i = i.$prevEl,
              a = a.target,
              r;
            !t.params.navigation.hideOnClick ||
              M(a).is(i) ||
              M(a).is(s) ||
              (t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))) ||
              (s
                ? (r = s.hasClass(t.params.navigation.hiddenClass))
                : i && (r = i.hasClass(t.params.navigation.hiddenClass)),
              !0 === r ? t.emit("navigationShow") : t.emit("navigationHide"),
              s && s.toggleClass(t.params.navigation.hiddenClass),
              i && i.toggleClass(t.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function e(t) {
              return t;
            },
            formatFractionTotal: function e(t) {
              return t;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function e() {
          var t;
          we(this, { pagination: a({ dynamicBulletIndex: 0 }, aa) });
        },
        on: {
          init: function e(t) {
            t.pagination.init(), t.pagination.render(), t.pagination.update();
          },
          activeIndexChange: function e(t) {
            (t.params.loop || void 0 === t.snapIndex) && t.pagination.update();
          },
          snapIndexChange: function e(t) {
            t.params.loop || t.pagination.update();
          },
          slidesLengthChange: function e(t) {
            t.params.loop && (t.pagination.render(), t.pagination.update());
          },
          snapGridLengthChange: function e(t) {
            t.params.loop || (t.pagination.render(), t.pagination.update());
          },
          destroy: function e(t) {
            t.pagination.destroy();
          },
          click: function e(t, a) {
            var a = a.target,
              i;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              0 < t.pagination.$el.length &&
              !M(a).hasClass(t.params.pagination.bulletClass) &&
              ((t.navigation &&
                ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                  (t.navigation.prevEl && a === t.navigation.prevEl))) ||
                (!0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow")
                  : t.emit("paginationHide"),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function e() {
          var t;
          we(this, {
            scrollbar: a(
              { isTouched: !1, timeout: null, dragTimeout: null },
              sa
            ),
          });
        },
        on: {
          init: function e(t) {
            t.scrollbar.init(),
              t.scrollbar.updateSize(),
              t.scrollbar.setTranslate();
          },
          update: function e(t) {
            t.scrollbar.updateSize();
          },
          resize: function e(t) {
            t.scrollbar.updateSize();
          },
          observerUpdate: function e(t) {
            t.scrollbar.updateSize();
          },
          setTranslate: function e(t) {
            t.scrollbar.setTranslate();
          },
          setTransition: function e(t, a) {
            t.scrollbar.setTransition(a);
          },
          destroy: function e(t) {
            t.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function e() {
          var t;
          we(this, { parallax: a({}, na) });
        },
        on: {
          beforeInit: function e(t) {
            t.params.parallax.enabled &&
              ((t.params.watchSlidesProgress = !0),
              (t.originalParams.watchSlidesProgress = !0));
          },
          init: function e(t) {
            t.params.parallax.enabled && t.parallax.setTranslate();
          },
          setTranslate: function e(t) {
            t.params.parallax.enabled && t.parallax.setTranslate();
          },
          setTransition: function e(t, a) {
            t.params.parallax.enabled && t.parallax.setTransition(a);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function e() {
          var s = this;
          we(s, {
            zoom: a(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              la
            ),
          });
          var r = 1;
          Object.defineProperty(s.zoom, "scale", {
            get: function e() {
              return r;
            },
            set: function e(t) {
              var a, i;
              r !== t &&
                ((a = s.zoom.gesture.$imageEl
                  ? s.zoom.gesture.$imageEl[0]
                  : void 0),
                (i = s.zoom.gesture.$slideEl
                  ? s.zoom.gesture.$slideEl[0]
                  : void 0),
                s.emit("zoomChange", t, a, i)),
                (r = t);
            },
          });
        },
        on: {
          init: function e(t) {
            t.params.zoom.enabled && t.zoom.enable();
          },
          destroy: function e(t) {
            t.zoom.disable();
          },
          touchStart: function e(t, a) {
            t.zoom.enabled && t.zoom.onTouchStart(a);
          },
          touchEnd: function e(t, a) {
            t.zoom.enabled && t.zoom.onTouchEnd(a);
          },
          doubleTap: function e(t, a) {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              t.zoom.toggle(a);
          },
          transitionEnd: function e(t) {
            t.zoom.enabled && t.params.zoom.enabled && t.zoom.onTransitionEnd();
          },
          slideChange: function e(t) {
            t.zoom.enabled &&
              t.params.zoom.enabled &&
              t.params.cssMode &&
              t.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function e() {
          var t;
          we(this, { lazy: a({ initialImageLoaded: !1 }, pa) });
        },
        on: {
          beforeInit: function e(t) {
            t.params.lazy.enabled &&
              t.params.preloadImages &&
              (t.params.preloadImages = !1);
          },
          init: function e(t) {
            t.params.lazy.enabled &&
              !t.params.loop &&
              0 === t.params.initialSlide &&
              (t.params.lazy.checkInView
                ? t.lazy.checkInViewOnLoad()
                : t.lazy.load());
          },
          scroll: function e(t) {
            t.params.freeMode && !t.params.freeModeSticky && t.lazy.load();
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function e(t) {
            t.params.lazy.enabled && t.lazy.load();
          },
          transitionStart: function e(t) {
            t.params.lazy.enabled &&
              ((!t.params.lazy.loadOnTransitionStart &&
                (t.params.lazy.loadOnTransitionStart ||
                  t.lazy.initialImageLoaded)) ||
                t.lazy.load());
          },
          transitionEnd: function e(t) {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              t.lazy.load();
          },
          slideChange: function e(t) {
            t.params.lazy.enabled && t.params.cssMode && t.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function e() {
          var t = this;
          we(t, {
            controller: a({ control: t.params.controller.control }, ua),
          });
        },
        on: {
          update: function e(t) {
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          resize: function e(t) {
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          observerUpdate: function e(t) {
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          setTranslate: function e(t, a, i) {
            t.controller.control && t.controller.setTranslate(a, i);
          },
          setTransition: function e(t, a, i) {
            t.controller.control && t.controller.setTransition(a, i);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
          },
        },
        create: function e() {
          var t = this;
          we(t, {
            a11y: a({}, va, {
              liveRegion: M(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            }),
          });
        },
        on: {
          afterInit: function e(t) {
            t.params.a11y.enabled && (t.a11y.init(), t.a11y.updateNavigation());
          },
          toEdge: function e(t) {
            t.params.a11y.enabled && t.a11y.updateNavigation();
          },
          fromEdge: function e(t) {
            t.params.a11y.enabled && t.a11y.updateNavigation();
          },
          paginationUpdate: function e(t) {
            t.params.a11y.enabled && t.a11y.updatePagination();
          },
          destroy: function e(t) {
            t.params.a11y.enabled && t.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function e() {
          var t;
          we(this, { history: a({}, fa) });
        },
        on: {
          init: function e(t) {
            t.params.history.enabled && t.history.init();
          },
          destroy: function e(t) {
            t.params.history.enabled && t.history.destroy();
          },
          transitionEnd: function e(t) {
            t.history.initialized &&
              t.history.setHistory(t.params.history.key, t.activeIndex);
          },
          slideChange: function e(t) {
            t.history.initialized &&
              t.params.cssMode &&
              t.history.setHistory(t.params.history.key, t.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function e() {
          var t;
          we(this, { hashNavigation: a({ initialized: !1 }, ba) });
        },
        on: {
          init: function e(t) {
            t.params.hashNavigation.enabled && t.hashNavigation.init();
          },
          destroy: function e(t) {
            t.params.hashNavigation.enabled && t.hashNavigation.destroy();
          },
          transitionEnd: function e(t) {
            t.hashNavigation.initialized && t.hashNavigation.setHash();
          },
          slideChange: function e(t) {
            t.hashNavigation.initialized &&
              t.params.cssMode &&
              t.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function e() {
          var t;
          we(this, { autoplay: a({}, ya, { running: !1, paused: !1 }) });
        },
        on: {
          init: function e(t) {
            var a;
            t.params.autoplay.enabled &&
              (t.autoplay.start(),
              y().addEventListener(
                "visibilitychange",
                t.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function e(t, a, i) {
            t.autoplay.running &&
              (i || !t.params.autoplay.disableOnInteraction
                ? t.autoplay.pause(a)
                : t.autoplay.stop());
          },
          sliderFirstMove: function e(t) {
            t.autoplay.running &&
              (t.params.autoplay.disableOnInteraction
                ? t.autoplay.stop()
                : t.autoplay.pause());
          },
          touchEnd: function e(t) {
            t.params.cssMode &&
              t.autoplay.paused &&
              !t.params.autoplay.disableOnInteraction &&
              t.autoplay.run();
          },
          destroy: function e(t) {
            var a;
            t.autoplay.running && t.autoplay.stop(),
              y().removeEventListener(
                "visibilitychange",
                t.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function e() {
          var t;
          we(this, { fadeEffect: a({}, xa) });
        },
        on: {
          beforeInit: function e(t) {
            var a;
            "fade" === t.params.effect &&
              (t.classNames.push(t.params.containerModifierClass + "fade"),
              be(
                t.params,
                (a = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                })
              ),
              be(t.originalParams, a));
          },
          setTranslate: function e(t) {
            "fade" === t.params.effect && t.fadeEffect.setTranslate();
          },
          setTransition: function e(t, a) {
            "fade" === t.params.effect && t.fadeEffect.setTransition(a);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function e() {
          var t;
          we(this, { cubeEffect: a({}, Sa) });
        },
        on: {
          beforeInit: function e(t) {
            var a;
            "cube" === t.params.effect &&
              (t.classNames.push(t.params.containerModifierClass + "cube"),
              t.classNames.push(t.params.containerModifierClass + "3d"),
              be(
                t.params,
                (a = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                })
              ),
              be(t.originalParams, a));
          },
          setTranslate: function e(t) {
            "cube" === t.params.effect && t.cubeEffect.setTranslate();
          },
          setTransition: function e(t, a) {
            "cube" === t.params.effect && t.cubeEffect.setTransition(a);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function e() {
          var t;
          we(this, { flipEffect: a({}, Ma) });
        },
        on: {
          beforeInit: function e(t) {
            var a;
            "flip" === t.params.effect &&
              (t.classNames.push(t.params.containerModifierClass + "flip"),
              t.classNames.push(t.params.containerModifierClass + "3d"),
              be(
                t.params,
                (a = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                })
              ),
              be(t.originalParams, a));
          },
          setTranslate: function e(t) {
            "flip" === t.params.effect && t.flipEffect.setTranslate();
          },
          setTransition: function e(t, a) {
            "flip" === t.params.effect && t.flipEffect.setTransition(a);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function e() {
          var t;
          we(this, { coverflowEffect: a({}, Pa) });
        },
        on: {
          beforeInit: function e(t) {
            "coverflow" === t.params.effect &&
              (t.classNames.push(t.params.containerModifierClass + "coverflow"),
              t.classNames.push(t.params.containerModifierClass + "3d"),
              (t.params.watchSlidesProgress = !0),
              (t.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function e(t) {
            "coverflow" === t.params.effect && t.coverflowEffect.setTranslate();
          },
          setTransition: function e(t, a) {
            "coverflow" === t.params.effect &&
              t.coverflowEffect.setTransition(a);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function e() {
          var t;
          we(this, { thumbs: a({ swiper: null, initialized: !1 }, $a) });
        },
        on: {
          beforeInit: function e(t) {
            var a = t.params.thumbs;
            a && a.swiper && (t.thumbs.init(), t.thumbs.update(!0));
          },
          slideChange: function e(t) {
            t.thumbs.swiper && t.thumbs.update();
          },
          update: function e(t) {
            t.thumbs.swiper && t.thumbs.update();
          },
          resize: function e(t) {
            t.thumbs.swiper && t.thumbs.update();
          },
          observerUpdate: function e(t) {
            t.thumbs.swiper && t.thumbs.update();
          },
          setTransition: function e(t, a) {
            var t = t.thumbs.swiper;
            t && t.setTransition(a);
          },
          beforeDestroy: function e(t) {
            var a = t.thumbs.swiper;
            a && t.thumbs.swiperCreated && a && a.destroy();
          },
        },
      },
    ]),
    _t
  );
});
