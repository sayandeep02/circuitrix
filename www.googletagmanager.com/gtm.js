// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.errorMessage",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.errorUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.errorLineNumber",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.historyChangeSource",
          vtp_dataLayerVersion: 1,
        },
        { function: "__ctv" },
        { function: "__dbg" },
        { function: "__r" },
        { function: "__cid" },
        { function: "__hid" },
        {
          function: "__v",
          vtp_name: "gtm.videoProvider",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoDuration",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoVisible",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoCurrentTime",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollThreshold",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollUnits",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollDirection",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleRatio",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleTime",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","677763897031833");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=677763897031833\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 4,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Gk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function () {},
    oa = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    pa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    qa = Array.isArray,
    ra = function (a, b) {
      if (a && qa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    sa = function (a, b) {
      if (!pa(a) || !pa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ua = function (a, b) {
      for (var c = new ta(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    za = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Da = function () {
      return new Date(Date.now());
    },
    z = function () {
      return Da().getTime();
    },
    ta = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ta.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ta.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ka = /^\w{1,9}$/,
    La = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ka.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ma = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Pa() {
    for (var a = Qa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ra() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Qa, Sa;
  function Ta(a) {
    Qa = Qa || Ra();
    Sa = Sa || Pa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Qa[m], Qa[n], Qa[p], Qa[q]);
    }
    return b.join("");
  }
  function Ua(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Sa[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Qa = Qa || Ra();
    Sa = Sa || Pa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Va = {},
    Wa = function (a, b) {
      Va[a] = Va[a] || [];
      Va[a][b] = !0;
    },
    Xa = function () {
      delete Va.GA4_EVENT;
    },
    Ya = function (a) {
      var b = Va[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Ta(c.join("")).replace(/\.+$/, "");
    };
  var Za = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var $a,
    ab = function () {
      if (void 0 === $a) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          $a = a;
        } else $a = a;
      }
      return $a;
    };
  var cb = function (a, b) {
    this.h = b === bb ? a : "";
  };
  cb.prototype.toString = function () {
    return this.h + "";
  };
  var bb = {};
  var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function eb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function fb(a) {
    return -1 != eb().indexOf(a);
  }
  function gb() {
    return fb("Firefox") || fb("FxiOS");
  }
  function hb() {
    return ((fb("Chrome") || fb("CriOS")) && !fb("Edge")) || fb("Silk");
  }
  var ib = {},
    jb = function (a, b) {
      this.h = b === ib ? a : "";
    };
  jb.prototype.toString = function () {
    return this.h.toString();
  };
  var kb = function (a) {
      return a instanceof jb && a.constructor === jb
        ? a.h
        : "type_error:SafeHtml";
    },
    lb = function (a) {
      var b = a,
        c = ab(),
        d = c ? c.createHTML(b) : b;
      return new jb(d, ib);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function mb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var E = window,
    F = document,
    nb = navigator,
    ob = F.currentScript && F.currentScript.src,
    pb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    qb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    rb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    sb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function tb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var ub = function (a, b, c, d, e) {
      var f = F.createElement("script");
      tb(f, d, rb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = a,
        m = ab(),
        n = m ? m.createScriptURL(l) : l;
      g = new cb(n, bb);
      f.src =
        g instanceof cb && g.constructor === cb
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      qb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = F.getElementsByTagName("script")[0] || F.body || F.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    vb = function () {
      if (ob) {
        var a = ob.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    wb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = F.createElement("iframe")), (l = !0));
      tb(g, c, sb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      qb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    xb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    yb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    zb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    Ab = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Bb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Cb = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = lb("A<div>" + a + "</div>");
      void 0 !== c.tagName && mb(c);
      c.innerHTML = kb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Db = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Eb = function (a) {
      var b;
      try {
        b = nb.sendBeacon && nb.sendBeacon(a);
      } catch (c) {
        Wa("TAGGING", 15);
      }
      b || xb(a);
    },
    Fb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Gb = function () {
      var a = E.performance;
      if (a && oa(a.now)) return a.now();
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ib = function (a) {
      if (null == a) return String(a);
      var b = Hb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Jb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Kb = function (a) {
      if (!a || "object" != Ib(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Jb(a, "constructor") &&
          !Jb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Jb(a, b);
    },
    J = function (a, b) {
      var c = b || ("array" == Ib(a) ? [] : {}),
        d;
      for (d in a)
        if (Jb(a, d)) {
          var e = a[d];
          "array" == Ib(e)
            ? ("array" != Ib(c[d]) && (c[d] = []), (c[d] = J(e, c[d])))
            : Kb(e)
            ? (Kb(c[d]) || (c[d] = {}), (c[d] = J(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Lb = function (a) {
    if (void 0 === a || qa(a) || Kb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Mb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Ph: a("consent"),
      Nf: a("convert_case_to"),
      Of: a("convert_false_to"),
      Pf: a("convert_null_to"),
      Qf: a("convert_true_to"),
      Rf: a("convert_undefined_to"),
      tk: a("debug_mode_metadata"),
      Ra: a("function"),
      Ve: a("instance_name"),
      Fi: a("live_only"),
      Gi: a("malware_disabled"),
      Hi: a("metadata"),
      Ki: a("original_activity_id"),
      xk: a("original_vendor_template_id"),
      wk: a("once_on_load"),
      Ji: a("once_per_event"),
      Ug: a("once_per_load"),
      yk: a("priority_override"),
      zk: a("respected_consent_types"),
      Yg: a("setup_tags"),
      Rc: a("tag_id"),
      Zg: a("teardown_tags"),
    };
  })();
  var ic;
  var jc = [],
    kc = [],
    lc = [],
    mc = [],
    nc = [],
    oc = {},
    pc,
    qc,
    sc = function () {
      var a = rc;
      qc = qc || a;
    },
    tc,
    uc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = oc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.fh && d.fh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.eh && (f.vtp_gtmCachedValues = d.eh);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = jc[m];
                  break;
                case 1:
                  n = mc[m];
                  break;
                default:
                  l = "";
                  break a;
              }
              var p = n && n[Mb.Ve];
              l = p ? String(p) : "";
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ic(c, f, b);
    },
    wc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = vc(a[e], b, c));
      return d;
    },
    vc = function (a, b, c) {
      if (qa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(vc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = jc[f];
            if (!g || b.qf(g)) return;
            c[f] = !0;
            var l = String(g[Mb.Ve]);
            try {
              var m = wc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = uc(m, { event: b, index: f, type: 2, name: l });
              tc && (d = tc.Zi(d, m));
            } catch (x) {
              b.rh && b.rh(x, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[vc(a[n], b, c)] = vc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = vc(a[q], b, c);
              qc && (p = p || r === qc.Sd);
              d.push(r);
            }
            return qc && p ? qc.aj(d) : d.join("");
          case "escape":
            d = vc(a[1], b, c);
            if (qc && qa(a[1]) && "macro" === a[1][0] && qc.zj(a))
              return qc.Rj(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Nb[a[t]] && (d = Nb[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!mc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { kh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = xc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xc = function (a, b, c) {
      try {
        return pc(wc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Ac = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = yc(a), f = 0; f < kc.length; f++) {
        var g = kc[f],
          l = zc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < mc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    zc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    yc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = xc(lc[c], a));
        return b[c];
      };
    };
  var Bc = {
    Zi: function (a, b) {
      b[Mb.Nf] &&
        "string" === typeof a &&
        (a = 1 == b[Mb.Nf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Mb.Pf) && null === a && (a = b[Mb.Pf]);
      b.hasOwnProperty(Mb.Rf) && void 0 === a && (a = b[Mb.Rf]);
      b.hasOwnProperty(Mb.Qf) && !0 === a && (a = b[Mb.Qf]);
      b.hasOwnProperty(Mb.Of) && !1 === a && (a = b[Mb.Of]);
      return a;
    },
  };
  var Yc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Zc(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var ad = function (a) {
      return $c ? F.querySelectorAll(a) : null;
    },
    ed = function (a, b) {
      if (!$c) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    fd = !1;
  if (F.querySelectorAll)
    try {
      var gd = F.querySelectorAll(":root");
      gd && 1 == gd.length && gd[0] == F.documentElement && (fd = !0);
    } catch (a) {}
  var $c = fd;
  var O = function (a) {
    Wa("GTM", a);
  };
  var Ed = [];
  Ed[7] = !0;
  Ed[9] = !0;
  Ed[27] = !0;
  Ed[6] = !0;
  Ed[12] = !0;
  Ed[11] = !0;
  Ed[13] = !0;
  Ed[15] = !0;
  Ed[23] = !0;
  Ed[29] = !0;
  Ed[35] = !0;
  Ed[36] = !0;
  Ed[38] = !0;
  Ed[43] = !0;
  Ed[44] = !0;
  a: {
    for (var Fd, Gd, Hd = 0; Fd === Gd; )
      if (
        ((Fd = Math.floor(2 * Math.random())),
        (Gd = Math.floor(2 * Math.random())),
        Hd++,
        20 < Hd)
      )
        break a;
    Fd ? (Ed[46] = !0) : (Ed[47] = !0);
  }
  Ed[54] = !0;
  Ed[57] = !0;
  Ed[60] = !0;
  var P = function (a) {
    return !!Ed[a];
  };
  var R = {
      g: {
        F: "ad_storage",
        R: "analytics_storage",
        Kf: "region",
        Lf: "consent_updated",
        Mf: "wait_for_update",
        Th: "app_remove",
        Uh: "app_store_refund",
        Vh: "app_store_subscription_cancel",
        Wh: "app_store_subscription_convert",
        Xh: "app_store_subscription_renew",
        Sf: "add_payment_info",
        Tf: "add_shipping_info",
        mc: "add_to_cart",
        nc: "remove_from_cart",
        Uf: "view_cart",
        Ib: "begin_checkout",
        oc: "select_item",
        sb: "view_item_list",
        Jb: "select_promotion",
        tb: "view_promotion",
        Ba: "purchase",
        qc: "refund",
        Ha: "view_item",
        Vf: "add_to_wishlist",
        Yh: "first_open",
        Zh: "first_visit",
        va: "gtag.config",
        Ca: "gtag.get",
        ai: "in_app_purchase",
        sc: "page_view",
        bi: "session_start",
        xe: "user_engagement",
        Kb: "gclid",
        ia: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        ye: "allow_custom_scripts",
        ci: "allow_display_features",
        uc: "allow_enhanced_conversions",
        Lb: "allow_google_signals",
        wa: "allow_interest_groups",
        wd: "auid",
        di: "auto_detection_enabled",
        Wa: "aw_remarketing",
        xd: "aw_remarketing_only",
        vc: "discount",
        wc: "aw_feed_country",
        xc: "aw_feed_language",
        Z: "items",
        yc: "aw_merchant_id",
        Wf: "aw_basket_type",
        yd: "campaign_content",
        zd: "campaign_id",
        Ad: "campaign_medium",
        Bd: "campaign_name",
        zc: "campaign",
        Cd: "campaign_source",
        Dd: "campaign_term",
        kb: "client_id",
        ei: "content_group",
        fi: "content_type",
        Da: "conversion_cookie_prefix",
        Ac: "conversion_id",
        Xa: "conversion_label",
        qa: "conversion_linker",
        ze: "conversion_api",
        Ya: "cookie_domain",
        Ia: "cookie_expires",
        Za: "cookie_flags",
        Bc: "cookie_name",
        Ae: "cookie_path",
        Pa: "cookie_prefix",
        ub: "cookie_update",
        Mb: "country",
        ma: "currency",
        Cc: "customer_lifetime_value",
        Dc: "custom_map",
        gi: "debug_mode",
        aa: "developer_id",
        Xf: "disable_merchant_reported_purchases",
        hi: "dc_custom_params",
        ii: "dc_natural_search",
        Be: "dynamic_event_settings",
        ji: "affiliation",
        Yf: "checkout_option",
        Zf: "checkout_step",
        ki: "coupon",
        ag: "item_list_name",
        cg: "list_name",
        li: "promotions",
        Ec: "shipping",
        dg: "tax",
        Ed: "engagement_time_msec",
        Fc: "enhanced_client_id",
        Gc: "enhanced_conversions",
        eg: "enhanced_conversions_automatic_settings",
        Hc: "estimated_delivery_date",
        Ce: "euid_logged_in_state",
        Nb: "event_callback",
        Ob: "event_developer_id_string",
        fg: "event",
        Fd: "event_settings",
        Gd: "event_timeout",
        mi: "experiments",
        De: "firebase_id",
        Hd: "first_party_collection",
        Id: "_x_20",
        vb: "_x_19",
        gg: "fledge",
        hg: "flight_error_code",
        ig: "flight_error_message",
        jg: "gac_gclid",
        Jd: "gac_wbraid",
        kg: "gac_wbraid_multiple_conversions",
        Ic: "ga_restrict_domain",
        Ee: "ga_temp_client_id",
        lg: "gdpr_applies",
        mg: "geo_granularity",
        ab: "value_callback",
        Qa: "value_key",
        Pb: "global_developer_id_string",
        uk: "google_ono",
        lb: "google_signals",
        Kd: "google_tld",
        Ld: "groups",
        ng: "gsa_experiment_id",
        og: "iframe_state",
        Md: "ignore_referrer",
        Fe: "internal_traffic_results",
        Nd: "is_legacy_loaded",
        pg: "is_passthrough",
        Ja: "language",
        Ge: "legacy_developer_id_string",
        ra: "linker",
        Qb: "accept_incoming",
        Rb: "decorate_forms",
        T: "domains",
        Jc: "url_position",
        qg: "method",
        Sb: "new_customer",
        rg: "non_interaction",
        ni: "optimize_id",
        Ka: "page_location",
        He: "page_path",
        La: "page_referrer",
        Tb: "page_title",
        sg: "passengers",
        ug: "phone_conversion_callback",
        oi: "phone_conversion_country_code",
        vg: "phone_conversion_css_class",
        ri: "phone_conversion_ids",
        wg: "phone_conversion_number",
        xg: "phone_conversion_options",
        yg: "quantity",
        Kc: "redact_device_info",
        Ie: "redact_enhanced_user_id",
        si: "redact_ga_client_id",
        ui: "redact_user_id",
        Od: "referral_exclusion_definition",
        nb: "restricted_data_processing",
        vi: "retoken",
        zg: "screen_name",
        wb: "screen_resolution",
        wi: "search_term",
        xa: "send_page_view",
        xb: "send_to",
        Lc: "session_duration",
        Pd: "session_engaged",
        Je: "session_engaged_time",
        ob: "session_id",
        Qd: "session_number",
        Ub: "delivery_postal_code",
        Ag: "tc_privacy_string",
        Bg: "temporary_client_id",
        xi: "tracking_id",
        Ke: "traffic_type",
        Ea: "transaction_id",
        na: "transport_url",
        Cg: "trip_type",
        Mc: "update",
        cb: "url_passthrough",
        Le: "_user_agent_architecture",
        Me: "_user_agent_bitness",
        Ne: "_user_agent_full_version_list",
        Dg: "_user_agent_mobile",
        Oe: "_user_agent_model",
        Pe: "_user_agent_platform",
        Qe: "_user_agent_platform_version",
        Eg: "_user_agent_wait",
        Re: "_user_agent_wow64",
        ca: "user_data",
        Fg: "user_data_auto_latency",
        Gg: "user_data_auto_meta",
        Hg: "user_data_auto_multi",
        Ig: "user_data_auto_selectors",
        Jg: "user_data_auto_status",
        Kg: "user_data_mode",
        Se: "user_data_settings",
        sa: "user_id",
        Ma: "user_properties",
        Lg: "us_privacy_string",
        ka: "value",
        Rd: "wbraid",
        Mg: "wbraid_multiple_conversions",
        Pg: "_host_name",
        Qg: "_in_page_command",
        Rg: "_is_linker_valid",
        Sg: "_is_passthrough_cid",
        Tg: "non_personalized_ads",
        Qc: "sst_parameters",
      },
    },
    Id = {},
    Jd =
      ((Id[R.g.X] = 1),
      (Id[R.g.uc] = 1),
      (Id[R.g.Lb] = 1),
      (Id[R.g.Z] = 1),
      (Id[R.g.Ya] = 1),
      (Id[R.g.Ia] = 1),
      (Id[R.g.Za] = 1),
      (Id[R.g.Bc] = 1),
      (Id[R.g.Ae] = 1),
      (Id[R.g.Pa] = 1),
      (Id[R.g.ub] = 1),
      (Id[R.g.Dc] = 1),
      (Id[R.g.aa] = 1),
      (Id[R.g.Be] = 1),
      (Id[R.g.Nb] = 1),
      (Id[R.g.Fd] = 1),
      (Id[R.g.Gd] = 1),
      (Id[R.g.Hd] = 1),
      (Id[R.g.Ic] = 1),
      (Id[R.g.lb] = 1),
      (Id[R.g.Kd] = 1),
      (Id[R.g.Ld] = 1),
      (Id[R.g.Fe] = 1),
      (Id[R.g.Nd] = 1),
      (Id[R.g.ra] = 1),
      (Id[R.g.Ie] = 1),
      (Id[R.g.Od] = 1),
      (Id[R.g.nb] = 1),
      (Id[R.g.xa] = 1),
      (Id[R.g.xb] = 1),
      (Id[R.g.Lc] = 1),
      (Id[R.g.Je] = 1),
      (Id[R.g.Ub] = 1),
      (Id[R.g.na] = 1),
      (Id[R.g.Mc] = 1),
      (Id[R.g.Se] = 1),
      (Id[R.g.Ma] = 1),
      Id);
  P(65) && (Jd[R.g.Qc] = 1);
  var Kd = Object.freeze(Jd);
  Object.freeze([
    R.g.Ka,
    R.g.La,
    R.g.Tb,
    R.g.Ja,
    R.g.zg,
    R.g.sa,
    R.g.De,
    R.g.ei,
  ]);
  var Md = {},
    Nd = Object.freeze(
      ((Md[R.g.Th] = 1),
      (Md[R.g.Uh] = 1),
      (Md[R.g.Vh] = 1),
      (Md[R.g.Wh] = 1),
      (Md[R.g.Xh] = 1),
      (Md[R.g.Yh] = 1),
      (Md[R.g.Zh] = 1),
      (Md[R.g.ai] = 1),
      (Md[R.g.bi] = 1),
      (Md[R.g.xe] = 1),
      Md)
    ),
    Od = {},
    Pd = Object.freeze(
      ((Od[R.g.Sf] = 1),
      (Od[R.g.Tf] = 1),
      (Od[R.g.mc] = 1),
      (Od[R.g.nc] = 1),
      (Od[R.g.Uf] = 1),
      (Od[R.g.Ib] = 1),
      (Od[R.g.oc] = 1),
      (Od[R.g.sb] = 1),
      (Od[R.g.Jb] = 1),
      (Od[R.g.tb] = 1),
      (Od[R.g.Ba] = 1),
      (Od[R.g.qc] = 1),
      (Od[R.g.Ha] = 1),
      (Od[R.g.Vf] = 1),
      Od)
    ),
    Qd = Object.freeze([R.g.X, R.g.Lb, R.g.ub]),
    Rd = Object.freeze([].concat(Qd)),
    Sd = Object.freeze([R.g.Ia, R.g.Gd, R.g.Lc, R.g.Je, R.g.Ed]),
    Td = Object.freeze([].concat(Sd)),
    Ud = {},
    Vd = ((Ud[R.g.F] = "1"), (Ud[R.g.R] = "2"), Ud),
    Wd = {},
    Xd = Object.freeze(
      ((Wd[R.g.X] = 1),
      (Wd[R.g.uc] = 1),
      (Wd[R.g.wa] = 1),
      (Wd[R.g.Wa] = 1),
      (Wd[R.g.xd] = 1),
      (Wd[R.g.vc] = 1),
      (Wd[R.g.wc] = 1),
      (Wd[R.g.xc] = 1),
      (Wd[R.g.Z] = 1),
      (Wd[R.g.yc] = 1),
      (Wd[R.g.Da] = 1),
      (Wd[R.g.qa] = 1),
      (Wd[R.g.Ya] = 1),
      (Wd[R.g.Ia] = 1),
      (Wd[R.g.Za] = 1),
      (Wd[R.g.Pa] = 1),
      (Wd[R.g.ma] = 1),
      (Wd[R.g.Cc] = 1),
      (Wd[R.g.aa] = 1),
      (Wd[R.g.Xf] = 1),
      (Wd[R.g.Gc] = 1),
      (Wd[R.g.Hc] = 1),
      (Wd[R.g.De] = 1),
      (Wd[R.g.Hd] = 1),
      (Wd[R.g.Nd] = 1),
      (Wd[R.g.Ja] = 1),
      (Wd[R.g.Sb] = 1),
      (Wd[R.g.Ka] = 1),
      (Wd[R.g.La] = 1),
      (Wd[R.g.ug] = 1),
      (Wd[R.g.vg] = 1),
      (Wd[R.g.wg] = 1),
      (Wd[R.g.xg] = 1),
      (Wd[R.g.nb] = 1),
      (Wd[R.g.xa] = 1),
      (Wd[R.g.xb] = 1),
      (Wd[R.g.Ub] = 1),
      (Wd[R.g.Ea] = 1),
      (Wd[R.g.na] = 1),
      (Wd[R.g.Mc] = 1),
      (Wd[R.g.cb] = 1),
      (Wd[R.g.ca] = 1),
      (Wd[R.g.sa] = 1),
      (Wd[R.g.ka] = 1),
      Wd)
    );
  Object.freeze(R.g);
  var Yd = {},
    Zd = (E.google_tag_manager = E.google_tag_manager || {}),
    $d = Math.random();
  Yd.Pc = "bu0";
  Yd.Ye = Number("0") || 0;
  Yd.fa = "dataLayer";
  Yd.Rh =
    "ChAIgPvEnQYQ0Mmi4brnrc1CEiQAGvQBy/vfYk7uunl+KZi42+c31v4fzAX/kv9fzJQ4GiZrCsoaAmvl";
  var ae = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    be = { __paused: !0, __tg: !0 },
    ce;
  for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0);
  var de = Aa(""),
    ee = Aa(""),
    fe,
    ge = !1;
  fe = ge;
  var he,
    ie = !1;
  he = ie;
  var je,
    ke = !1;
  je = ke;
  var le,
    me = !1;
  le = me;
  Yd.vd = "www.googletagmanager.com";
  var ne = "" + Yd.vd + (fe ? "/gtag/js" : "/gtm.js"),
    oe = null,
    pe = null,
    qe = {},
    re = {},
    se = {},
    te = function () {
      var a = Zd.sequence || 1;
      Zd.sequence = a + 1;
      return a;
    };
  Yd.Qh = "";
  var ue = "";
  Yd.Wd = ue;
  var ve = new ta(),
    we = {},
    xe = {},
    Ae = {
      name: Yd.fa,
      set: function (a, b) {
        J(Ja(a, b), we);
        ye();
      },
      get: function (a) {
        return ze(a, 2);
      },
      reset: function () {
        ve = new ta();
        we = {};
        ye();
      },
    },
    ze = function (a, b) {
      return 2 != b ? ve.get(a) : Be(a);
    },
    Be = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = we, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ce = function (a, b) {
      xe.hasOwnProperty(a) || (ve.set(a, b), J(Ja(a, b), we), ye());
    },
    ye = function (a) {
      k(xe, function (b, c) {
        ve.set(b, c);
        J(Ja(b), we);
        J(Ja(b, c), we);
        a && delete xe[b];
      });
    },
    De = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Be(a) : ve.get(a);
      "array" === Ib(d) || "object" === Ib(d) ? (c = J(d)) : (c = d);
      return c;
    };
  var Ee,
    Fe = !1,
    Ge = function (a) {
      if (!Fe) {
        Fe = !0;
        Ee = Ee || {};
      }
      return Ee[a];
    };
  var He = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Ie = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle)
        return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var Te = /:[0-9]+$/,
    Ue = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Xe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ve(a.protocol) || Ve(E.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || E.location.hostname)
            .replace(Te, "")
            .toLowerCase());
      return We(a, b, c, d, e);
    },
    We = function (a, b, c, d, e) {
      var f,
        g = Ve(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ye(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Te, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Wa("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Ue(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ve = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ye = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ze = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Wa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Te, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    $e = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ze(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var af = {};
  var Df = {},
    Ef = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a))
        return E._gtmexpgrp[a];
      void 0 === Df[a] && (Df[a] = Math.floor(Math.random() * b));
      return Df[a];
    };
  var Gf = { ef: "IN", Xj: "IN-MH" };
  var Hf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var If = function (a) {
    If[" "](a);
    return a;
  };
  If[" "] = function () {};
  var Kf = function () {
    var a = Jf,
      b = "nf";
    if (a.nf && a.hasOwnProperty(b)) return a.nf;
    var c = new a();
    return (a.nf = c);
  };
  var Jf = function () {
    var a = {};
    this.h = function () {
      var b = Hf.h,
        c = Hf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Hf.h] = !0;
    };
  };
  var Lf = [];
  function Mf() {
    var a = pb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Nf,
        update: Of,
        addListener: Pf,
        notifyListeners: Qf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Nf(a, b, c, d, e, f) {
    var g = Mf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = r;
        q &&
          E.setTimeout(function () {
            l[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Rf(a), Qf(), Wa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Of(a, b) {
    var c = Mf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Sf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Sf(c, a);
      f.quiet ? ((f.quiet = !1), Rf(a)) : g !== d && Rf(a);
    }
  }
  function Pf(a, b) {
    Lf.push({ cf: a, jj: b });
  }
  function Rf(a) {
    for (var b = 0; b < Lf.length; ++b) {
      var c = Lf[b];
      qa(c.cf) && -1 !== c.cf.indexOf(a) && (c.wh = !0);
    }
  }
  function Qf(a, b) {
    for (var c = 0; c < Lf.length; ++c) {
      var d = Lf[c];
      if (d.wh) {
        d.wh = !1;
        try {
          d.jj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Sf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Tf = function (a) {
      var b = Mf();
      b.accessedAny = !0;
      return Sf(b, a);
    },
    Uf = function (a) {
      var b = Mf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Vf = function (a) {
      var b = Mf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Wf = function () {
      if (!Kf().h()) return !1;
      var a = Mf();
      a.accessedAny = !0;
      return a.active;
    },
    Xf = function () {
      var a = Mf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Yf = function (a, b) {
      Mf().addListener(a, b);
    },
    Zf = function (a, b) {
      Mf().notifyListeners(a, b);
    },
    $f = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Vf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Yf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ag = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Tf(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Yf(d, function (f) {
          var g = c();
          0 < g.length && ((f.cf = g), a(f));
        });
    };
  function bg() {}
  function cg() {}
  function dg(a) {
    for (var b = [], c = 0; c < eg.length; c++) {
      var d = a(eg[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var eg = [R.g.F, R.g.R],
    fg = function (a) {
      var b = a[R.g.Kf];
      b && O(40);
      var c = a[R.g.Mf];
      c && O(41);
      for (
        var d = qa(b) ? b : [b], e = { ic: 0 };
        e.ic < d.length;
        e = { ic: e.ic }, ++e.ic
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== R.g.Kf && g !== R.g.Mf) {
                var m = d[f.ic],
                  n = Gf.ef,
                  p = Gf.Xj;
                Mf().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    gg = function (a, b) {
      k(a, function (c, d) {
        Mf().update(c, d);
      });
      Zf(b.eventId, b.priorityId);
    },
    hg = function (a) {
      var b = Tf(a);
      return void 0 != b ? b : !0;
    },
    ig = function () {
      return "G1" + dg(Tf);
    },
    jg = function (a, b) {
      ag(a, b);
    },
    kg = function (a, b) {
      $f(a, b);
    };
  var lg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var mg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var ng = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    og = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function pg(a) {
    return "null" !== a.origin;
  }
  var sg = function (a, b, c, d) {
      return qg(d) ? mg(a, String(b || rg()), c) : [];
    },
    Cg = function (a, b, c, d, e) {
      if (qg(e)) {
        var f = tg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = ug(
            f,
            function (g) {
              return g.ce;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = ug(
            f,
            function (g) {
              return g.gd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Dg(a, b, c, d) {
    var e = rg(),
      f = window;
    pg(f) && (f.document.cookie = a);
    var g = rg();
    return e != g || (void 0 != c && 0 <= sg(b, g, !1, d).indexOf(c));
  }
  var Hg = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete g[u], t;
        g[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete g[u], t;
        g[u] = !0;
        return t + "; " + u;
      }
      if (!qg(c.rb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Eg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.Dk);
      f = d(f, "samesite", c.Ek);
      c.Fk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Fg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Gg(q, c.path) && Dg(r, a, b, c.rb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Gg(m, c.path) ? 1 : Dg(f, a, b, c.rb) ? 0 : 1;
    },
    Ig = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Hg(a, b, c);
    };
  function ug(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function tg(a, b, c) {
    for (var d = [], e = sg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), ce: 1 * m[0] || 1, gd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Eg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Jg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Kg = /(^|\.)doubleclick\.net$/i,
    Gg = function (a, b) {
      return (
        Kg.test(window.document.location.hostname) || ("/" === b && Jg.test(a))
      );
    },
    rg = function () {
      return pg(window) ? window.document.cookie : "";
    },
    Fg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Kg.test(e) || Jg.test(e) || a.push("none");
      return a;
    },
    qg = function (a) {
      if (!Kf().h() || !a || !Wf()) return !0;
      if (!Vf(a)) return !1;
      var b = Tf(a);
      return null == b ? !0 : !!b;
    };
  var Lg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (lg(a) & 2147483647)) : String(b);
    },
    Mg = function (a) {
      return [Lg(a), Math.round(z() / 1e3)].join(".");
    },
    Pg = function (a, b, c, d, e) {
      var f = Ng(b);
      return Cg(a, f, Og(c), d, e);
    },
    Qg = function (a, b, c, d) {
      var e = "" + Ng(c),
        f = Og(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Ng = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Og = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Rg = function () {
    Zd.dedupe_gclid || (Zd.dedupe_gclid = "" + Mg());
    return Zd.dedupe_gclid;
  };
  var Sg = function () {
    var a = !1;
    return a;
  };
  var Tg = { M: "GTM-NMQ8HM5", Hb: "97639620" },
    Ug = { th: "GTM-NMQ8HM5", uh: "GTM-NMQ8HM5" };
  Tg.We = Aa("");
  var Vg = function () {
      return Ug.th ? Ug.th.split("|") : [Tg.M];
    },
    Wg = function () {
      return Ug.uh ? Ug.uh.split("|") : [];
    },
    Xg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Zg = function () {
      for (var a = Yg(), b = Vg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || pa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Wg(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Tg.Hb] = 2;
    },
    $g = function (a) {
      return !!Yg().container[a];
    },
    ah = function () {
      var a = Yg().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (pa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    bh = function () {
      var a = {};
      k(Yg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Yg() {
    var a = Zd.tidr;
    a || ((a = new Xg()), (Zd.tidr = a));
    return a;
  }
  var ch = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o",
    },
    dh = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    eh = function (a) {
      var b = Tg.M.split("-"),
        c = b[0].toUpperCase();
      if (P(45)) {
        var d = {};
        d.bj = Tg.M;
        d.ck = Yd.Ye;
        d.gk = Yd.Pc;
        d.Ij = Tg.We ? 2 : 1;
        fe ? ((d.qe = dh[c]), d.qe || (d.qe = 0)) : (d.qe = le ? 13 : 10);
        je ? (d.vf = 1) : Sg() ? (d.vf = 2) : (d.vf = 3);
        var e;
        var f = d.qe,
          g = d.vf;
        void 0 === f
          ? (e = "")
          : (g || (g = 0),
            (e =
              "" +
              Zc(1, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (f << 2) | g
              ]));
        var l = d.Ak,
          m =
            4 +
            e +
            (l
              ? "" +
                Zc(2, 1) +
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                  l
                ]
              : ""),
          n,
          p = d.gk;
        n = p && Yc.test(p) ? "" + Zc(3, 2) + p : "";
        var q,
          r = d.ck;
        q = r
          ? "" +
            Zc(4, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              r
            ]
          : "";
        var t;
        var u = d.bj;
        if (u && a) {
          var v = u.split("-"),
            w = v[0].toUpperCase();
          if ("GTM" !== w && "OPT" !== w) t = "";
          else {
            var y = v[1];
            t =
              "" +
              Zc(5, 3) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                1 + y.length
              ] +
              (d.Ij || 0) +
              y;
          }
        } else t = "";
        return m + n + q + t;
      }
      var x = ch[c] || "i",
        A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        B = "w";
      fe && (B = Sg() ? "s" : "o");
      he
        ? ("w" === B && (B = "x"), "o" === B && (B = "q"))
        : je
        ? ("w" === B && (B = "y"), "o" === B && (B = "r"))
        : le && (B = "z");
      return "2" + B + x + (4 === Yd.Pc.length ? Yd.Pc.slice(1) : Yd.Pc) + A;
    };
  function fh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var gh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function hh() {
    return fb("iPhone") && !fb("iPod") && !fb("iPad");
  }
  function ih() {
    hh() || fb("iPad") || fb("iPod");
  }
  fb("Opera");
  fb("Trident") || fb("MSIE");
  fb("Edge");
  !fb("Gecko") ||
    (-1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge")) ||
    fb("Trident") ||
    fb("MSIE") ||
    fb("Edge");
  -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") && fb("Mobile");
  fb("Macintosh");
  fb("Windows");
  fb("Linux") || fb("CrOS");
  var jh = la.navigator || null;
  jh && (jh.appVersion || "").indexOf("X11");
  fb("Android");
  hh();
  fb("iPad");
  fb("iPod");
  ih();
  eb().toLowerCase().indexOf("kaios");
  var kh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    lh = /#|$/,
    mh = function (a, b) {
      var c = a.search(lh),
        d = kh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    nh = /[?&]($|#)/,
    oh = function (a, b, c) {
      for (
        var d, e = a.search(lh), f = 0, g, l = [];
        0 <= (g = kh(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(nh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var ph = function (a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  function qh(a) {
    if (!a || !F.head) return null;
    var b = rh("META");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var sh = function () {
      if (E.top == E) return 0;
      var a = E.location.ancestorOrigins;
      if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
      var b;
      var c = E.top;
      try {
        var d;
        if ((d = !!c && null != c.location.href))
          b: {
            try {
              If(c.foo);
              d = !0;
              break b;
            } catch (e) {}
            d = !1;
          }
        b = d;
      } catch (e) {
        b = !1;
      }
      return b ? 1 : 2;
    },
    rh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function th(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = rh("IMG", a.document);
    if (c) {
      var e = function () {
        if (c) {
          var f = a.google_image_requests,
            g = Za(f, d);
          0 <= g && Array.prototype.splice.call(f, g, 1);
        }
        d.removeEventListener && d.removeEventListener("load", e, !1);
        d.removeEventListener && d.removeEventListener("error", e, !1);
      };
      gh(d, "load", e);
      gh(d, "error", e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  var vh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ph(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      uh(c, b);
    },
    uh = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      c.fetch
        ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : th(c, a, void 0 === b ? !1 : b);
    };
  var wh = function () {};
  var xh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    yh = function (a, b, c) {
      this.m = a;
      this.h = null;
      this.K = {};
      this.Ga = 0;
      this.P = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  ka(yh, wh);
  yh.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = og(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.P &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.P));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = xh(c)),
          (c.internalBlockOnErrors = b.D),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      zh(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  yh.prototype.removeEventListener = function (a) {
    a && a.listenerId && zh(this, "removeEventListener", null, a.listenerId);
  };
  var Bh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Ah(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Ah(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Ah(a.purpose.legitimateInterests, b) &&
                Ah(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Ah = function (a, b) {
      return !(!a || !a[b]);
    },
    zh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (Ch(a)) {
        Dh(a);
        var f = ++a.Ga;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Ch = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Dh = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        gh(a.m, "message", a.B));
    },
    Eh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = xh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (vh({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Fh = !0;
  Fh = !1;
  var Gh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Hh = fh("", 550),
    Ih = fh("", 500);
  function Jh() {
    var a = Zd.tcf || {};
    return (Zd.tcf = a);
  }
  var Oh = function () {
    var a = Jh(),
      b = new yh(E, Fh ? 3e3 : -1);
    if (
      !0 === E.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof E.__tcfapi ||
        "function" === typeof b.m.__tcfapi ||
        null != Ch(b))
    ) {
      a.active = !0;
      a.jd = {};
      Kh();
      var c = null;
      Fh
        ? (c = E.setTimeout(function () {
            Lh(a);
            Mh(a);
            c = null;
          }, Ih))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Lh(a), Mh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Nh()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Gh)
                if (Gh.hasOwnProperty(g))
                  if ("1" === g) {
                    var l,
                      m = d,
                      n = !0;
                    n = void 0 === n ? !1 : n;
                    l = Eh(m)
                      ? !1 === m.gdprApplies ||
                        "tcunavailable" === m.tcString ||
                        (void 0 === m.gdprApplies && !n) ||
                        "string" !== typeof m.tcString ||
                        !m.tcString.length
                        ? !0
                        : Bh(m, "1", 0)
                      : !1;
                    f["1"] = l;
                  } else f[g] = Bh(d, g, Gh[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.jd = e), Mh(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Lh(a), Mh(a);
      }
    }
  };
  function Lh(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Fh && (a.jd = Nh());
  }
  function Kh() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Hh), a);
    fg(b);
  }
  function Nh() {
    var a = {},
      b;
    for (b in Gh) Gh.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Mh(a) {
    var b = {},
      c = ((b.ad_storage = a.jd["1"] ? "granted" : "denied"), b);
    gg(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Ph() }
    );
  }
  var Ph = function () {
      var a = Jh();
      return a.active ? a.tcString || "" : "";
    },
    Qh = function () {
      var a = Jh();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Rh = function (a) {
      if (!Gh.hasOwnProperty(String(a))) return !0;
      var b = Jh();
      return b.active && b.jd ? !!b.jd[String(a)] : !0;
    };
  var Sh = ["L", "S", "Y"],
    Th = ["S", "E"],
    Uh = { sampleRate: "0.005000", Lh: "", Kh: Number("5"), Jh: Number("") },
    Vh =
      0 <= F.location.search.indexOf("?gtm_latency=") ||
      0 <= F.location.search.indexOf("&gtm_latency="),
    Wh;
  if (!(Wh = Vh)) {
    var Xh = Math.random(),
      Yh = Uh.sampleRate;
    Wh = Xh < Yh;
  }
  var Zh = Wh,
    $h = "https://www.googletagmanager.com/a?id=" + Tg.M + "&cv=2",
    ai = {
      label: Tg.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    };
  function bi() {
    return [$h, "&v=3&t=t", "&pid=" + sa(), "&rv=" + Yd.Pc].join("");
  }
  var ci = bi();
  function di() {
    ci = bi();
  }
  var ei = {},
    fi = "",
    gi = "",
    hi = "",
    ii = "",
    ji = [],
    ki = "",
    li = {},
    mi = !1,
    ni = {},
    oi = {},
    pi = {},
    qi = "",
    ri = void 0,
    si = {},
    ti = {},
    ui = void 0,
    vi = 5;
  0 < Uh.Kh && (vi = Uh.Kh);
  var wi = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Aj: function () {
          return c < a ? !1 : z() - d[c % a] < b;
        },
        Yj: function () {
          var f = c++ % a;
          d[f] = z();
        },
      };
    })(vi, 1e3),
    xi = 1e3,
    yi = "";
  function zi(a, b) {
    var c = ri;
    if (void 0 === c) return "";
    var d = Ya("GTM"),
      e = Ya("TAGGING"),
      f = Ya("HEALTH"),
      g = ci,
      l = ei[c] ? "" : "&es=1",
      m = si[c],
      n = Ai(c),
      p = Bi(),
      q = fi,
      r = gi,
      t = qi,
      u = Ci(a),
      v = hi,
      w = ii,
      y = Di(a, b),
      x;
    return [
      g,
      l,
      m,
      n,
      d ? "&u=" + d : "",
      e ? "&ut=" + e : "",
      f ? "&h=" + f : "",
      p,
      q,
      r,
      t,
      u,
      v,
      w,
      y,
      x,
      ki ? "&dl=" + encodeURIComponent(ki) : "",
      0 < ji.length ? "&tdp=" + ji.join(".") : "",
      Yd.Ye ? "&x=" + Yd.Ye : "",
      "&z=0",
    ].join("");
  }
  function Fi(a) {
    ui && (E.clearTimeout(ui), (ui = void 0));
    if (void 0 !== ri && (!ei[ri] || fi || gi || Gi(a)))
      if (void 0 === Hi[ri] && (ti[ri] || wi.Aj() || 0 >= xi--))
        O(1), (ti[ri] = !0);
      else {
        void 0 === Hi[ri] && wi.Yj();
        var b = zi(!0, a);
        a ? Eb(b) : xb(b);
        if (ii || (ki && 0 < ji.length)) {
          var c = b.replace("/a?", "/td?");
          xb(c);
        }
        ei[ri] = !0;
        ki = ii = hi = qi = gi = fi = "";
        ji = [];
      }
  }
  function Ii() {
    ui || (ui = E.setTimeout(Fi, 500));
  }
  function Ji(a) {
    var b = String(a[Mb.Ra] || "").replace(/_/g, "");
    0 === b.indexOf("cvt") && (b = "cvt");
    return b;
  }
  function Ki(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
  }
  function Li() {
    2022 <= zi().length && Fi();
  }
  function Bi() {
    return (
      "&tc=" +
      mc.filter(function (a) {
        return a;
      }).length
    );
  }
  var Ni = function (a, b) {
      if (Zh && !ti[a] && ri !== a) {
        Fi();
        ri = a;
        hi = fi = "";
        si[a] = "&e=" + Ki(b) + "&eid=" + a;
        Ii();
      }
    },
    Oi = function (a, b, c, d) {
      if (Zh && b) {
        var e = Ji(b),
          f = c + e;
        if (!ti[a]) {
          a !== ri && (Fi(), (ri = a));
          fi = fi ? fi + "." + f : "&tr=" + f;
          var g = b["function"];
          if (!g)
            throw Error("Error: No function name given for function call.");
          var l = (oc[g] ? "1" : "2") + e;
          hi = hi ? hi + "." + l : "&ti=" + l;
          Ii();
          Li();
        }
      }
    },
    Pi = function (a, b, c) {
      if (Zh && a && a[Mb.Rc]) {
        var d = b + "." + a[Mb.Rc];
        pi[d] = c;
        "html" == Ji(a) && yi == d && (fi += ":" + Math.floor(c));
      }
    };
  function Ci(a) {}
  function Ai(a) {}
  var Wi = function (a, b, c) {
      if (Zh && void 0 !== a && !ti[a]) {
        a !== ri && (Fi(), (ri = a));
        var d = c + b;
        gi = gi ? gi + "." + d : "&epr=" + d;
        Ii();
        Li();
      }
    },
    Xi = function (a, b, c) {},
    Yi = ["S", "P", "C", "Z"],
    Zi = {},
    $i = ((Zi[1] = 5), (Zi[2] = 5), (Zi[3] = 5), Zi),
    aj = {},
    Hi = {},
    Ei = void 0,
    bj = function (a, b) {
      var c = !1;
      if (!Zh || Hi[a] || 0 === $i[b]) return !1;
      --$i[b];
      Hi[a] = b;
      c = !0;
      return c;
    },
    cj = function (a, b, c) {
      if (!Zh || !Hi[a]) return;
      var d = aj[a];
      d || (aj[a] = d = {});
      d[b] = c;
    };
  function Di(a, b) {
    var c;
    if (!ri || !Gi(b)) return "";
    var d = aj[ri];
    c =
      "&al=" +
      Yi.filter(function (e) {
        return void 0 !== d[e];
      })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join(".") +
      (".Z" + Hi[ri]);
    a && delete aj[ri];
    return c;
  }
  function Gi(a) {
    var b = !1;
    if (!ri || !aj[ri]) return !1;
    b = a || "C" in aj[ri];
    return b;
  }
  var dj = function () {
    if (Zh) {
      E.setInterval(di, 864e5);
      yb(E, "pagehide", function () {
        ri && Hi[ri] && Fi(!0);
        for (var a in aj) aj.hasOwnProperty(a) && ((ri = Number(a)), Fi(!0));
      });
    }
  };
  gb();
  hh() || fb("iPod");
  fb("iPad");
  !fb("Android") || hb() || gb() || fb("Opera") || fb("Silk");
  hb();
  !fb("Safari") ||
    hb() ||
    fb("Coast") ||
    fb("Opera") ||
    fb("Edge") ||
    fb("Edg/") ||
    fb("OPR") ||
    gb() ||
    fb("Silk") ||
    fb("Android") ||
    ih();
  var ej = {},
    fj = null,
    gj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!fj) {
        fj = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          ej[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === fj[q] && (fj[q] = p);
          }
        }
      }
      for (
        var r = ej[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = r[y >> 2],
          C = r[((y & 3) << 4) | (x >> 4)],
          H = r[((x & 15) << 2) | (A >> 6)],
          I = r[A & 63];
        t[w++] = "" + B + C + H + I;
      }
      var D = 0,
        K = u;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (K = r[(D & 15) << 2] || u);
        case 1:
          var M = b[v];
          t[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (D >> 4)] + K + u;
      }
      return t.join("");
    };
  var hj =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function ij() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function jj() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function kj() {
    var a, b;
    return null !=
      (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function lj() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function mj() {
    if (!lj()) return null;
    var a = ij();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData
      .getHighEntropyValues(hj)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function sj(a, b, c, d) {
    var e,
      f = Number(null != a.Ta ? a.Ta : void 0);
    0 !== f && (e = new Date((b || z()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      rb: d,
    };
  }
  var Jj = ["1"],
    Kj = {},
    Lj = {},
    Nj = function (a) {
      return Kj[Mj(a)];
    },
    Qj = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Mj(a.prefix);
      if (!Kj[c] && !Oj(c, a.path, a.domain) && b) {
        var d = Mj(a.prefix),
          e = Mg();
        if (0 === Pj(d, e, a)) {
          var f = pb("google_tag_data", {});
          f._gcl_au || (f._gcl_au = e);
        }
        Oj(c, a.path, a.domain);
      }
    };
  function Pj(a, b, c, d) {
    var e = Qg(b, "1", c.domain, c.path),
      f = sj(c, d);
    f.rb = "ad_storage";
    return Ig(a, e, f);
  }
  function Oj(a, b, c) {
    var d = Pg(a, b, c, Jj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((Kj[a] = e.slice(0, 2).join(".")),
        (Lj[a] = { id: e.slice(2, 4).join("."), qh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Lj[a] = { id: e.slice(0, 2).join("."), qh: Number(e[2]) || 0 })
      : (Kj[a] = d);
    return !0;
  }
  function Mj(a) {
    return (a || "_gcl") + "_au";
  }
  var Rj;
  var Vj = function () {
      var a = Sj,
        b = Tj,
        c = Uj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        yb(F, "mousedown", d);
        yb(F, "keyup", d);
        yb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Wj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Uj().decorators.push(f);
    },
    Xj = function (a, b, c) {
      for (var d = Uj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function Uj() {
    var a = pb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Yj = /(.*?)\*(.*?)\*(.*)/,
    Zj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    ak = /^(?:www\.|m\.|amp\.)+/,
    bk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ck(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var ek = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Ta(String(d))));
      }
    var e = b.join("*");
    return ["1", dk(e), e].join("*");
  };
  function dk(a, b) {
    var c = [
        E.navigator.userAgent,
        new Date().getTimezoneOffset(),
        nb.userLanguage || nb.language,
        Math.floor(z() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Rj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Rj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Rj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function fk() {
    return function (a) {
      var b = Ze(E.location.href),
        c = b.search.replace("?", ""),
        d = Ue(c, "_gl", !0) || "";
      a.query = gk(d) || {};
      var e = Xe(b, "fragment").match(ck("_gl"));
      a.fragment = gk((e && e[3]) || "") || {};
    };
  }
  function hk(a, b) {
    var c = ck(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var ik = function (a, b) {
      b || (b = "_gl");
      var c = bk.exec(a);
      if (!c) return "";
      var d = c[1],
        e = hk(b, (c[2] || "").slice(1)),
        f = hk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    jk = function (a) {
      var b = fk(),
        c = Uj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    gk = function (a) {
      try {
        var b = kk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Ua(d[e + 1]);
            c[f] = g;
          }
          Wa("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Wa("TAGGING", 8);
      }
    };
  function kk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Yj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === dk(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Wa("TAGGING", 7);
      }
    }
  }
  function lk(a, b, c, d) {
    function e(p) {
      p = hk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = bk.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function mk(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Xj(b, 1, c),
      e = Xj(b, 2, c),
      f = Xj(b, 3, c);
    if (Ha(d)) {
      var g = ek(d);
      c ? nk("_gl", g, a) : ok("_gl", g, a, !1);
    }
    if (!c && Ha(e)) {
      var l = ek(e);
      ok("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              ok(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              nk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && lk(n, p, q);
        }
  }
  function ok(a, b, c, d) {
    if (c.href) {
      var e = lk(a, b, c.href, void 0 === d ? !1 : d);
      db.test(e) && (c.href = e);
    }
  }
  function nk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = lk(a, b, c.action);
        db.test(n) && (c.action = n);
      }
    }
  }
  function Sj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || mk(e, e.hostname);
      }
    } catch (g) {}
  }
  function Tj(a) {
    try {
      if (a.action) {
        var b = Xe(Ze(a.action), "host");
        mk(a, b);
      }
    } catch (c) {}
  }
  var pk = function (a, b, c, d) {
      Vj();
      Wj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    qk = function (a, b) {
      Vj();
      Wj(a, [We(E.location, "host", !0)], b, !0, !0);
    },
    rk = function () {
      var a = F.location.hostname,
        b = Zj.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(ak, ""),
        m = e.replace(ak, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    sk = function (a, b) {
      return !1 === a ? !1 : a || b || rk();
    };
  var tk = {};
  var uk = function (a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Gf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function vk(a, b) {
    var c = uk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Gf] || (d[c[e].Gf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Gf].push(g);
      }
    }
    return d;
  }
  var wk = /^\w+$/,
    xk = /^[\w-]+$/,
    yk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    zk = function () {
      if (!Kf().h() || !Wf()) return !0;
      var a = Tf("ad_storage");
      return null == a ? !0 : !!a;
    },
    Ak = function (a, b) {
      Vf("ad_storage")
        ? zk()
          ? a()
          : ag(a, "ad_storage")
        : b
        ? Wa("TAGGING", 3)
        : $f(
            function () {
              Ak(a, !0);
            },
            ["ad_storage"]
          );
    },
    Ck = function (a) {
      return Bk(a).map(function (b) {
        return b.da;
      });
    },
    Bk = function (a) {
      var b = [];
      if (!pg(E) || !F.cookie) return b;
      var c = sg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { pd: d.pd }, e++) {
        var f = Dk(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.pd = g.da;
          var m = g.timestamp,
            n = g.labels,
            p = ra(
              b,
              (function (q) {
                return function (r) {
                  return r.da === q.pd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Ek(p.labels, n || [])))
            : b.push({ version: l, da: d.pd, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Fk(b);
    };
  function Ek(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Gk(a) {
    return a && "string" == typeof a && a.match(wk) ? a : "_gcl";
  }
  var Ik = function () {
      var a = Ze(E.location.href),
        b = Xe(a, "query", !1, void 0, "gclid"),
        c = Xe(a, "query", !1, void 0, "gclsrc"),
        d = Xe(a, "query", !1, void 0, "wbraid"),
        e = Xe(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Ue(f, "gclid");
        c = c || Ue(f, "gclsrc");
        d = d || Ue(f, "wbraid");
      }
      return Hk(b, c, e, d);
    },
    Hk = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && xk.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(xk))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Kk = function (a) {
      var b = Ik();
      Ak(function () {
        Jk(b, !1, a);
      });
    };
  function Jk(a, b, c, d, e) {
    function f(w, y) {
      var x = Lk(w, g);
      x && (Ig(x, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Gk(c.prefix);
    d = d || z();
    var l = sj(c, d, !0);
    l.rb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == tk.enable_gbraid_cookie_write
        ? 0
        : tk.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        r = Lk("gb", g),
        t = !1;
      if (!b)
        for (var u = Bk(r), v = 0; v < u.length; v++)
          u[v].da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Nk = function (a, b) {
      var c = jk(!0);
      Ak(function () {
        for (var d = Gk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== yk[f]) {
            var g = Lk(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Mk(l), z()),
                n;
              b: {
                var p = m;
                if (pg(E))
                  for (
                    var q = sg(g, F.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Mk(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = sj(b, m, !0);
                t.rb = "ad_storage";
                Ig(g, l, t);
              }
            }
          }
        }
        Jk(Hk(c.gclid, c.gclsrc), !1, b);
      });
    },
    Lk = function (a, b) {
      var c = yk[a];
      if (void 0 !== c) return b + c;
    },
    Mk = function (a) {
      return 0 !== Ok(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Dk(a) {
    var b = Ok(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          da: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Ok(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !xk.test(a[2])
      ? []
      : a;
  }
  var Pk = function (a, b, c, d, e) {
      if (qa(b) && pg(E)) {
        var f = Gk(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Lk(a[m], f);
              if (n) {
                var p = sg(n, F.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Ak(function () {
          pk(g, b, c, d);
        });
      }
    },
    Fk = function (a) {
      return a.filter(function (b) {
        return xk.test(b.da);
      });
    },
    Qk = function (a, b) {
      if (pg(E)) {
        for (var c = Gk(b.prefix), d = {}, e = 0; e < a.length; e++)
          yk[a[e]] && (d[a[e]] = yk[a[e]]);
        Ak(function () {
          k(d, function (f, g) {
            var l = sg(c + g, F.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return Mk(u) - Mk(t);
            });
            if (l.length) {
              var m = l[0],
                n = Mk(m),
                p = 0 !== Ok(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Ok(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Jk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Rk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Sk = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Wf()) {
        var c = Ik();
        if (Rk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          qk(function () {
            return d;
          }, 3);
          qk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Tk = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!zk()) return e;
      var f = Bk(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.da]
            .concat(l.labels || [], [b])
            .join("."),
          p = sj(c, m, !0);
        p.rb = "ad_storage";
        Ig(a, n, p);
      }
      return e;
    };
  function Uk(a, b) {
    var c = Gk(b),
      d = Lk(a, c);
    if (!d) return 0;
    for (var e = Bk(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Vk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Wk = function (a) {
    var b = Math.max(Uk("aw", a), Vk(zk() ? vk() : {}));
    return Math.max(Uk("gb", a), Vk(zk() ? vk("_gac_gb", !0) : {})) > b;
  };
  var al = /[A-Z]+/,
    bl = /\s/,
    cl = function (a) {
      if (h(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (al.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (bl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + "-" + d[0], I: d };
          }
        }
      }
    },
    el = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = cl(a[c]);
        d && (b[d.id] = d);
      }
      dl(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function dl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.I[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var gl = function (a, b, c, d) {
      return (2 === fl() || d || "http:" != E.location.protocol ? a : b) + c;
    },
    fl = function () {
      var a = vb(),
        b;
      if (1 === a)
        a: {
          var c = ne;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = F.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var sl = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = J(c.eventMetadata || {});
      this.H = !1;
    },
    tl = function (a, b, c) {
      var d = T(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    ul = function (a, b, c) {
      var d = Ge(a.target.U);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function vl(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        tl(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.H = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return T(a.h, b);
      },
    };
  }
  var Ol = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.m = e;
      this.D = f;
      this.P = g;
      this.B = l;
      this.eventMetadata = m;
      this.O = n;
      this.N = p;
      this.C = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.m[b]) return a.m[b];
      Zh && Pl(a, a.D[b], a.P[b]) && (O(71), O(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Ql = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.m);
      b(a.D);
      if (Zh)
        for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            O(71);
            O(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Rl = function (a, b, c) {
      function d(m) {
        Kb(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Zh) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Pl(a, e, l)) O(71), O(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    Sl = function (a) {
      var b = [R.g.zc, R.g.yd, R.g.zd, R.g.Ad, R.g.Bd, R.g.Cd, R.g.Dd],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.m)) return c;
      e(a.D);
      if (Zh) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.P);
        Pl(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Pl = function (a, b, c) {
      if (!Zh) return !1;
      try {
        if (b === c) return !1;
        var d = Ib(b);
        if (d !== Ib(c) || !((Kb(b) && Kb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Pl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Pl(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        O(72);
      }
      return !1;
    },
    Tl = function (a, b) {
      this.Ai = a;
      this.Bi = b;
      this.D = {};
      this.Ng = {};
      this.h = {};
      this.K = {};
      this.m = {};
      this.Nc = {};
      this.B = {};
      this.kc = function () {};
      this.Ga = function () {};
      this.P = !1;
    },
    Ul = function (a, b) {
      a.D = b;
      return a;
    },
    Vl = function (a, b) {
      a.Ng = b;
      return a;
    },
    Wl = function (a, b) {
      a.h = b;
      return a;
    },
    Xl = function (a, b) {
      a.K = b;
      return a;
    },
    Yl = function (a, b) {
      a.m = b;
      return a;
    },
    Zl = function (a, b) {
      a.Nc = b;
      return a;
    },
    $l = function (a, b) {
      a.B = b || {};
      return a;
    },
    am = function (a, b) {
      a.kc = b;
      return a;
    },
    bm = function (a, b) {
      a.Ga = b;
      return a;
    },
    cm = function (a) {
      a.P = !0;
      return a;
    },
    dm = function (a) {
      return new Ol(
        a.Ai,
        a.Bi,
        a.D,
        a.Ng,
        a.h,
        a.K,
        a.m,
        a.Nc,
        a.B,
        a.kc,
        a.Ga,
        a.P
      );
    };
  function hm() {
    return "attribution-reporting";
  }
  function im(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var jm = !1;
  function km() {
    if (im("join-ad-interest-group") && oa(nb.joinAdInterestGroup)) return !0;
    jm ||
      (qh(
        "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (jm = !0));
    return im("join-ad-interest-group") && oa(nb.joinAdInterestGroup);
  }
  function lm(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > z() - d) {
        Wa("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          F.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Wa("TAGGING", 10);
          return;
        }
      } catch (e) {}
    wb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: z() },
      c
    );
  }
  function mm() {
    return P(60)
      ? "https://td.doubleclick.net"
      : "https://googleads.g.doubleclick.net";
  }
  var nm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    om = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    pm = /^\d+\.fls\.doubleclick\.net$/,
    qm = /;gac=([^;?]+)/,
    rm = /;gacgb=([^;?]+)/,
    sm = /;gclaw=([^;?]+)/,
    tm = /;gclgb=([^;?]+)/;
  function um(a, b) {
    if (pm.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(nm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var vm = function (a, b, c) {
    var d = zk() ? vk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Tk("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { mj: f ? e.join(";") : "", lj: um(d, rm) };
  };
  function wm(a, b, c) {
    if (pm.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(om)) return [{ da: d[1] }];
    } else return Bk((a || "_gcl") + b);
    return [];
  }
  var xm = function (a) {
      return wm(a, "_aw", sm)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    ym = function (a) {
      return wm(a, "_gb", tm)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    zm = function (a, b) {
      var c = Tk(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Am = function () {
    if (oa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var kn = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var ln = function (a, b) {
    var c = mh(a, "fmt");
    if (b) {
      var d = mh(a, "random"),
        e = mh(a, "label") || "";
      if (!d) return !1;
      var f = gj(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!kn(f, b)) return !1;
    }
    c && 4 != c && (a = oh(a, "rfmt", c));
    var g = oh(a, "fmt", 4);
    ub(
      g,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Bn = function () {
      this.h = {};
    },
    Cn = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Dn = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Fn = function (a, b, c, d, e) {};
  function Hn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ze("" + c + b).href;
    }
  }
  function In(a, b) {
    return he || je ? Hn(a, b) : void 0;
  }
  function Jn() {
    return !!Yd.Wd && "SGTM_TOKEN" !== Yd.Wd.split("@@").join("");
  }
  var Ln = function (a, b, c, d) {
      if (!Kn() && !$g(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Yd.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = Jn();
        l && (f += "&sign=" + Yd.Wd);
        var m = In(b, e + f);
        if (!m) {
          var n = Yd.vd + e;
          l &&
            ob &&
            g &&
            (n = ob.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = gl("https://", "http://", n + f);
        }
        Yg().container[a] = { state: 1, context: d };
        ub(m);
      }
    },
    Mn = function (a, b, c) {
      var d;
      if ((d = !Kn())) {
        var e = Yg().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (ah())
          (Yg().destination[a] = { state: 0, transportUrl: b, context: c }),
            O(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Yd.fa +
            "&cx=c";
          Jn() && (f += "&sign=" + Yd.Wd);
          var g = In(b, f);
          g || (g = gl("https://", "http://", Yd.vd + f));
          Yg().destination[a] = { state: 1, context: c };
          ub(g);
        }
    };
  function Kn() {
    if (Sg()) {
      return !0;
    }
    return !1;
  }
  var Nn = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    On = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Pn = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Qn =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Tn = function (a) {
      var b = ze("gtm.allowlist") || ze("gtm.whitelist");
      b && O(9);
      fe && (b = ["google", "gtagfl", "lcl", "zone"]);
      Rn &&
        Sn() &&
        ((b = []),
        window.console &&
          window.console.log &&
          window.console.log("GTM blocked. See go/13687728."));
      var c = b && Ia(Ba(b), On),
        d = ze("gtm.blocklist") || ze("gtm.blacklist");
      d || ((d = ze("tagTypeBlacklist")) && O(3));
      d ? O(8) : (d = []);
      Sn() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && O(2);
      var e = d && Ia(Ba(d), Pn),
        f = {};
      return function (g) {
        var l = g && g[Mb.Ra];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = re[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      O(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(l);
          if (t) r = t;
          else {
            var u = ua(e, m || []);
            u && O(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = ua(e, Qn));
        return (f[l] = v);
      };
    },
    Rn = !1;
  var Sn = function () {
    return Nn.test(E.location && E.location.hostname);
  };
  var Un = { initialized: 11, complete: 12, interactive: 13 },
    Vn = {},
    Wn = Object.freeze(((Vn[R.g.xa] = !0), Vn)),
    Xn =
      0 <= F.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= F.location.search.indexOf("&gtm_diagnostics="),
    Zn = function (a, b, c) {
      if (Zh && "config" === a && !(1 < cl(b).I.length)) {
        var d,
          e = pb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = J(c.D);
        J(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = Yn(d[l], f);
          m.length && (Xn && console.log(m), g.push(l));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            ii = ii ? ii + "!" + n : "&tdc=" + n;
          }
          Wa("TAGGING", Un[F.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function $n(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yn(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Wn[q] : t;
      },
      f;
    for (f in $n(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Ib(l) || "array" === Ib(l),
        p = "object" === Ib(m) || "array" === Ib(m);
      if (n && p) Yn(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var ao = !1,
    bo = 0,
    co = [];
  function eo(a) {
    if (!ao) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ao = !0;
        for (var e = 0; e < co.length; e++) G(co[e]);
      }
      co.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function fo() {
    if (!ao && 140 > bo) {
      bo++;
      try {
        F.documentElement.doScroll("left"), eo();
      } catch (a) {
        E.setTimeout(fo, 50);
      }
    }
  }
  var go = function (a) {
    ao ? a() : co.push(a);
  };
  var ho = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Tg.M,
    };
  };
  var jo = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = { tags: [] };
      this.P = !1;
      this.m = this.B = 0;
      io(this, a, b);
    },
    ko = function (a, b, c, d) {
      if (be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Kb(d) && (e = J(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    lo = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    mo = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    io = function (a, b, c) {
      void 0 !== b && no(a, b);
      c &&
        E.setTimeout(function () {
          return mo(a);
        }, Number(c));
    },
    no = function (a, b) {
      var c = Fa(function () {
        return G(function () {
          b(Tg.M, a.K);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    oo = function (a) {
      a.B++;
      return Fa(function () {
        a.m++;
        a.P && a.m >= a.B && mo(a);
      });
    },
    po = function (a) {
      a.P = !0;
      a.m >= a.B && mo(a);
    };
  var qo = function () {
      function a(d) {
        return !pa(d) || 0 > d ? 0 : d;
      }
      if (!Zd._li && E.performance && E.performance.timing) {
        var b = E.performance.timing.navigationStart,
          c = pa(Ae.get("gtm.start")) ? Ae.get("gtm.start") : 0;
        Zd._li = { cst: a(c - b), cbt: a(pe - b) };
      }
    },
    ro = function (a) {
      E.performance && E.performance.mark(Tg.M + "_" + a + "_start");
    },
    so = function (a) {
      if (E.performance) {
        var b = Tg.M + "_" + a + "_start",
          c = Tg.M + "_" + a + "_duration";
        E.performance.measure(c, b);
        var d = E.performance.getEntriesByName(c)[0];
        E.performance.clearMarks(b);
        E.performance.clearMeasures(c);
        var e = Zd._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Zd._p = e));
        return d.duration;
      }
    },
    to = function () {
      var a = Gb();
      if (void 0 !== a) {
        var b = Zd._p || {};
        b.PAGEVIEW = a;
        Zd._p = b;
      }
    };
  var uo = {},
    vo = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject];
    },
    wo = !1;
  function zo() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var Ao = function (a) {},
    Bo = function (a, b) {
      return function () {
        var c = vo(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Go(a, b, c, d) {
    var e = mc[a],
      f = Ho(a, b, c, d);
    if (!f) return null;
    var g = vc(e[Mb.Yg], c, []);
    if (g && g.length) {
      var l = g[0];
      f = Go(
        l.index,
        { O: f, N: 1 === l.kh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function Ho(a, b, c, d) {
    function e() {
      if (f[Mb.Gi]) l();
      else {
        var w = wc(f, c, []),
          y = w[Mb.Ph];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!hg(y[x])) {
              l();
              return;
            }
        var A = ko(c.zb, String(f[Mb.Ra]), Number(f[Mb.Rc]), w[Mb.Hi]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Oi(c.id, mc[a], "5", I);
            lo(c.zb, A, "success", I);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Oi(c.id, mc[a], "6", I);
            lo(c.zb, A, "failure", I);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Oi(c.id, f, "1");
        var C = function () {
          var I = z() - H;
          Oi(c.id, f, "7", I);
          lo(c.zb, A, "exception", I);
          B || ((B = !0), l());
        };
        var H = z();
        try {
          uc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          C(I);
        }
      }
    }
    var f = mc[a],
      g = b.O,
      l = b.N,
      m = b.terminate;
    if (c.qf(f)) return null;
    var n = vc(f[Mb.Zg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Go(p.index, { O: g, N: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.kh ? m : q;
    }
    if (f[Mb.Ug] || f[Mb.Ji]) {
      var r = f[Mb.Ug] ? nc : c.mk,
        t = g,
        u = l;
      if (!r[a]) {
        e = Fa(e);
        var v = Io(a, r, e);
        g = v.O;
        l = v.N;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Io(a, b, c) {
    var d = [],
      e = [];
    b[a] = Jo(d, e, c);
    return {
      O: function () {
        b[a] = Ko;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      N: function () {
        b[a] = Lo;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Jo(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Ko(a) {
    a();
  }
  function Lo(a, b) {
    b();
  }
  var No = function (a, b) {
      return 1 === arguments.length ? Mo("config", a) : Mo("config", a, b);
    },
    Oo = function (a, b, c) {
      c = c || {};
      c[R.g.xb] = a;
      return Mo("event", b, c);
    };
  function Mo(a) {
    return arguments;
  }
  var Po = function () {
    this.h = [];
    this.m = [];
  };
  Po.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  Po.prototype.listen = function (a) {
    this.m.push(a);
  };
  Po.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Po.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Ro = function (a, b, c) {
      Qo().enqueue(a, b, c);
    },
    To = function () {
      var a = So;
      Qo().listen(a);
    };
  function Qo() {
    var a = Zd.mb;
    a || ((a = new Po()), (Zd.mb = a));
    return a;
  }
  var ap = function (a) {
      var b = Zd.zones;
      return b
        ? b.getIsAllowedFn(Vg(), a)
        : function () {
            return !0;
          };
    },
    bp = function (a) {
      var b = Zd.zones;
      return b ? b.isActive(Vg(), a) : !0;
    };
  var ep = function (a, b) {
    for (var c = [], d = 0; d < mc.length; d++)
      if (a[d]) {
        var e = mc[d];
        var f = oo(b.zb);
        try {
          var g = Go(d, { O: f, N: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = oc[p];
            m.call(l, {
              Gh: n,
              xh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else cp(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(dp);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function dp(a, b) {
    var c,
      d = b.xh,
      e = a.xh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Gh,
        l = b.Gh;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function cp(a, b) {
    if (Zh) {
      var c = function (d) {
        var e = b.qf(mc[d]) ? "3" : "4",
          f = vc(mc[d][Mb.Yg], b, []);
        f && f.length && c(f[0].index);
        Oi(b.id, mc[d], e);
        var g = vc(mc[d][Mb.Zg], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var hp = !1,
    fp;
  var Kp = function (a) {
    var b = z(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (hp) return !1;
      hp = !0;
    }
    var l,
      m = !1;
    if (bp(c)) l = ap(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      m = !0;
      l = ap(Number.MAX_SAFE_INTEGER);
    }
    Ni(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        qf: Tn(l),
        mk: [],
        rh: function () {
          O(6);
          Wa("HEALTH", 0);
        },
        eh: ip(),
        fh: Hp(c),
        zb: new jo(q, p),
      },
      t = Ac(r);
    m && (t = Ip(t));
    var u = ep(t, r),
      v = !1;
    po(r.zb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Ao(Tg.M);
    return Jp(t, u) || v;
  };
  function Hp(a) {
    return function (b) {
      Zh && (Lb(b) || Xi(a, "input", b));
    };
  }
  function ip() {
    var a = {};
    a.event = De("event", 1);
    a.ecommerce = De("ecommerce", 1);
    a.gtm = De("gtm");
    a.eventModel = De("eventModel");
    return a;
  }
  function Ip(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(mc[c][Mb.Ra]);
        if (ae[d] || void 0 !== mc[c][Mb.Ki] || se[d]) b[c] = !0;
        P(58) ||
          (0 !== mc[c][Mb.Ra].indexOf("__ccd") &&
            0 !== mc[c][Mb.Ra].indexOf("__ogt") &&
            "__set_product_settings" !== mc[c][Mb.Ra]) ||
          (b[c] = !0);
      }
    return b;
  }
  function Jp(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && mc[c] && !be[String(mc[c][Mb.Ra])]) return !0;
    return !1;
  }
  var Mp = function (a, b, c, d) {
      Lp.push("event", [b, a], c, d);
    },
    Np = function (a, b, c, d) {
      Lp.push("get", [a, b], c, d);
    },
    Op = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.K = {};
      this.P = null;
      this.B = {};
      this.m = !1;
    },
    Pp = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d;
    },
    Qp = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    Rp = function (a, b) {
      var c = cl(b);
      return (a.m[c.U] = a.m[c.U] || new Op());
    },
    Sp = function (a, b, c, d) {
      if (d.W) {
        var e = Rp(a, d.W),
          f = e.P;
        if (f) {
          var g = J(c),
            l = J(e.D[d.W]),
            m = J(e.B),
            n = J(e.h),
            p = J(a.B),
            q = {};
          if (Zh)
            try {
              q = J(we);
            } catch (v) {
              O(72);
            }
          var r = cl(d.W).prefix,
            t = function (v) {
              Wi(d.messageContext.eventId, r, v);
              var w = g[R.g.Nb];
              w && G(w);
            },
            u = dm(
              bm(
                am(
                  $l(
                    Yl(
                      Xl(
                        Zl(
                          Wl(
                            Vl(
                              Ul(
                                new Tl(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              l
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (t) {
                    var v = t;
                    t = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            Wi(d.messageContext.eventId, r, "1"),
              Zn(d.type, d.W, u),
              f(d.W, b, d.m, u);
          } catch (v) {
            Wi(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Qp.prototype.register = function (a, b, c) {
    var d = Rp(this, a);
    3 !== d.status &&
      ((d.P = b), (d.status = 3), c && (J(d.h, c), (d.h = c)), this.flush());
  };
  Qp.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!cl(c)) return;
      if (c) {
        var e = cl(c);
        e &&
          1 === Rp(this, c).status &&
          ((Rp(this, c).status = 2), this.push("require", [{}], e.U, {}));
      }
      Rp(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Pp(a, c, b, d));
    d.deferrable || this.flush();
  };
  Qp.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || Rp(this, f.W).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Rp(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.h[0], function (r, t) {
              J(Ja(r, t), b.B);
            });
            break;
          case "config":
            g = Rp(this, f.W);
            e.hb = {};
            k(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  J(Ja(t, u), r.hb);
                };
              })(e)
            );
            var l = !!e.hb[R.g.Mc];
            delete e.hb[R.g.Mc];
            var m = cl(f.W),
              n = m.U === m.id;
            l || (n ? (g.B = {}) : (g.D[f.W] = {}));
            (g.m && l) || Sp(this, R.g.va, e.hb, f);
            g.m = !0;
            n ? J(e.hb, g.B) : (J(e.hb, g.D[f.W]), O(70));
            d = !0;
            break;
          case "event":
            g = Rp(this, f.W);
            e.od = {};
            k(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  J(Ja(t, u), r.od);
                };
              })(e)
            );
            Sp(this, f.h[1], e.od, f);
            break;
          case "get":
            g = Rp(this, f.W);
            var p = {},
              q = ((p[R.g.Qa] = f.h[0]), (p[R.g.ab] = f.h[1]), p);
            Sp(this, R.g.Ca, q, f);
        }
        this.h.shift();
        Tp(this, f);
      }
      e = { hb: e.hb, od: e.od };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Tp = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = Rp(a, b.W).K[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.K)
                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    Up = function (a, b) {
      var c = Lp,
        d = J(b);
      J(Rp(c, a).h, d);
      Rp(c, a).h = d;
    },
    Lp = new Qp();
  var Vp = {},
    Wp = {},
    Xp = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { ud: d.ud, qd: d.qd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.ud = cl(f)),
            d.ud &&
              (ra(
                Wg(),
                (function (p) {
                  return function (q) {
                    return p.ud.U === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = Vp[f] || [];
          d.qd = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.qd[q] = !0);
              };
            })(d)
          );
          for (var l = Vg(), m = 0; m < l.length; m++)
            if (d.qd[l[m]]) {
              b = b.concat(Wg());
              break;
            }
          var n = Wp[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { Jj: b, Lj: c };
    },
    Yp = function (a) {
      k(Vp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Zp = function (a) {
      k(Wp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var $p = "HA GF G UA AW DC MC".split(" "),
    aq = !1,
    bq = !1;
  function cq(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: te() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var dq = {
      config: function (a, b) {
        var c = cq(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Kb(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = cl(a[1]);
          if (e) {
            Ni(c.eventId, "gtag.config");
            var f = e.U,
              g = e.id !== f;
            if (g ? -1 === Wg().indexOf(f) : -1 === Vg().indexOf(f)) {
              if (!P(61) || !d[R.g.Nd]) {
                var l = d[R.g.na] || Lp.B[R.g.na];
                g
                  ? Mn(f, l, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : Ln(f, l, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if (ee && !g && !d[R.g.Mc]) {
                var m = bq;
                bq = !0;
                if (m) return;
              }
              aq || O(43);
              if (!b.noTargetGroup)
                if (g) {
                  Zp(e.id);
                  var n = e.id,
                    p = d[R.g.Ld] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var r = Wp[p[q]] || [];
                    Wp[p[q]] = r;
                    0 > r.indexOf(n) && r.push(n);
                  }
                } else {
                  Yp(e.id);
                  var t = e.id,
                    u = d[R.g.Ld] || "default";
                  u = u.toString().split(",");
                  for (var v = 0; v < u.length; v++) {
                    var w = Vp[u[v]] || [];
                    Vp[u[v]] = w;
                    0 > w.indexOf(t) && w.push(t);
                  }
                }
              delete d[R.g.Ld];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[R.g.Nb];
              for (var x = g ? [e.id] : Wg(), A = 0; A < x.length; A++) {
                var B = J(b);
                Lp.push("config", [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = cq(a, b),
            d = a[1];
          "default" === d ? fg(a[2]) : "update" === d && gg(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!Kb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = J(e)),
            e[R.g.Nb] && (g.eventCallback = e[R.g.Nb]),
            e[R.g.Gd] && (g.eventTimeout = e[R.g.Gd]));
          var l = cq(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[R.g.xb];
          void 0 === r &&
            ((r = ze(R.g.xb, 2)), void 0 === r && (r = "default"));
          if (h(r) || qa(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = Xp(t),
              v = u.Jj,
              w = u.Lj;
            if (w.length)
              for (
                var y = (q && q[R.g.na]) || Lp.B[R.g.na], x = 0;
                x < w.length;
                x++
              ) {
                var A = cl(w[x]);
                A &&
                  Mn(A.U, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = el(v);
          } else p = void 0;
          var B = p;
          if (B) {
            Ni(m, c);
            for (var C = [], H = 0; H < B.length; H++) {
              var I = B[H],
                D = J(b);
              if (-1 !== $p.indexOf(I.prefix)) {
                var K = J(d),
                  M = D.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = M;
                delete K[R.g.Nb];
                Mp(c, K, I.id, D);
              }
              C.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[R.g.xb] = C.join())
              : delete g.eventModel[R.g.xb];
            aq || O(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
          var c = cl(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            aq || O(43);
            var f = Lp.B[R.g.na];
            if (
              !ra(Wg(), function (l) {
                return c.U === l;
              })
            )
              Mn(c.U, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== $p.indexOf(c.prefix)) {
              cq(a, b);
              var g = {};
              bg(J(((g[R.g.Qa] = d), (g[R.g.ab] = e), g)));
              Np(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          aq = !0;
          var c = cq(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Kb(a[1])
          ? (c = J(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            Kb(a[2]) || qa(a[2]) ? (c[a[1]] = J(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = cq(a, b),
            e = d.eventId,
            f = d.priorityId;
          J(c);
          var g = J(c);
          Lp.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    eq = { policy: !0 };
  var fq = function (a) {
      var b = E[Yd.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    gq = function (a) {
      var b = E[Yd.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var hq = !1,
    iq = [];
  function jq() {
    if (!hq) {
      hq = !0;
      for (var a = 0; a < iq.length; a++) G(iq[a]);
    }
  }
  var kq = function (a) {
    hq ? G(a) : iq.push(a);
  };
  var Bq = function (a) {
    if (Aq(a)) return a;
    this.h = a;
  };
  Bq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Aq = function (a) {
    return !a || "object" !== Ib(a) || Kb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Bq.prototype.getUntrustedMessageValue = Bq.prototype.getUntrustedMessageValue;
  var Cq = 0,
    Dq = {},
    Eq = [],
    Fq = [],
    Gq = !1,
    Hq = !1;
  function Iq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Jq = function (a) {
      return E[Yd.fa].push(a);
    },
    Kq = function (a, b) {
      var c = Zd[Yd.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = E.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (E.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Lq(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && Ce(e), Ce(e, f));
    });
    oe || (oe = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = te()), (a["gtm.uniqueEventId"] = d), Ce("gtm.uniqueEventId", d));
    return Kp(a);
  }
  function Mq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Nq() {
    var a;
    if (Fq.length) a = Fq.shift();
    else if (Eq.length) a = Eq.shift();
    else return;
    var b;
    var c = a;
    if (Gq || !Mq(c.message)) b = c;
    else {
      Gq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = te());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Eq.unshift(l, c);
      if (Zh && Tg.M) {
        var m;
        if (Tg.We) {
          var n = Tg.M,
            p = Yg().destination[n];
          m = p && p.context;
        } else {
          var q = Tg.M,
            r = Yg().container[q];
          m = r && r.context;
        }
        var t = m,
          u,
          v = Ze(E.location.href);
        u = v.hostname + v.pathname;
        var w = t && t.fromContainerExecution,
          y = t && t.source,
          x = Tg.M,
          A = Tg.Hb,
          B = Tg.We;
        ki || (ki = u);
        ji.push(
          x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function Oq() {
    for (var a = !1, b; !Hq && (b = Nq()); ) {
      Hq = !0;
      delete we.eventModel;
      ye();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Hq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = ze(l, 1);
            if (qa(m) || Kb(m)) m = J(m);
            xe[l] = m;
          }
        try {
          if (oa(d))
            try {
              d.call(Ae);
            } catch (C) {}
          else if (qa(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = ze(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (xa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = dq[d[0]];
                  if (w && (!e.fromContainerExecution || !eq[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && O(101);
            } else u = d;
            if (u) {
              var y = Lq(u, e);
              a = y || a;
              v && y && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && ye(!0);
          var x = d["gtm.uniqueEventId"];
          if ("number" === typeof x) {
            for (var A = Dq[String(x)] || [], B = 0; B < A.length; B++)
              Fq.push(Pq(A[B]));
            A.length && Fq.sort(Iq);
            delete Dq[String(x)];
            x > Cq && (Cq = x);
          }
          Hq = !1;
        }
      }
    }
    return !a;
  }
  function Qq() {
    var b = Oq();
    try {
      fq(Tg.M);
    } catch (c) {}
    return b;
  }
  function So(a) {
    if (Cq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Dq[b] = Dq[b] || [];
      Dq[b].push(a);
    } else
      Fq.push(Pq(a)),
        Fq.sort(Iq),
        G(function () {
          Hq || Oq();
        });
  }
  function Pq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Sq = function () {
      function a(f) {
        var g = {};
        if (Aq(f)) {
          var l = f;
          f = Aq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = pb(Yd.fa, []),
        c = (Zd[Yd.fa] = Zd[Yd.fa] || {});
      !0 === c.pruned && O(83);
      Dq = Qo().get();
      To();
      go(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      kq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Zd.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Bq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Eq.push.apply(Eq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Oq() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Eq.push.apply(Eq, e);
      if (Rq()) {
        G(Qq);
      }
    },
    Rq = function () {
      var a = !0;
      return a;
    };
  function Tq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Uq(a) {
    return a && 0 === a.indexOf("pending:") ? Tq(a.substr(8)) : !1;
  }
  var rc = {};
  rc.Sd = new String("undefined");
  var Vq = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === rc.Sd ? b : a[d]);
      return c.join("");
    };
  };
  Vq.prototype.toString = function () {
    return this.h("undefined");
  };
  Vq.prototype.valueOf = Vq.prototype.toString;
  rc.Ni = Vq;
  rc.Xe = {};
  rc.aj = function (a) {
    return new Vq(a);
  };
  var Wq = {};
  rc.Zj = function (a, b) {
    var c = te();
    Wq[c] = [a, b];
    return c;
  };
  rc.hh = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Wq[c];
      if (d && "function" === typeof d[b]) d[b]();
      Wq[c] = void 0;
    };
  };
  rc.zj = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  rc.Rj = function (a) {
    if (a === rc.Sd) return a;
    var b = te();
    rc.Xe[b] = a;
    return 'google_tag_manager["' + Tg.M + '"].macro(' + b + ")";
  };
  rc.Kj = function (a, b, c) {
    a instanceof rc.Ni && ((a = a.h(rc.Zj(b, c))), (b = na));
    return { uj: a, O: b };
  };
  var ur = E.clearTimeout,
    vr = E.setTimeout,
    V = function (a, b, c, d) {
      if (Sg()) {
        b && G(b);
      } else return ub(a, b, c, d);
    },
    wr = function () {
      return new Date();
    },
    xr = function () {
      return E.location.href;
    },
    yr = function (a) {
      return Xe(Ze(a), "fragment");
    },
    zr = function (a) {
      return Ye(Ze(a));
    },
    Ar = function (a, b) {
      return ze(a, b || 2);
    },
    Br = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Jq(a)))
        : (d = Jq(a));
      return d;
    },
    Cr = function (a, b) {
      E[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    Dr = function (a, b, c) {
      return sg(a, b, void 0 === c ? !0 : !!c);
    },
    Er = function (a, b, c) {
      return 0 === Ig(a, b, c);
    },
    Fr = function (a, b) {
      if (Sg()) {
        b && G(b);
      } else wb(a, b);
    },
    Gr = function (a) {
      return !!ar(a, "init", !1);
    },
    Hr = function (a) {
      Zq(a, "init", !0);
    },
    Ir = function (a, b, c) {
      Zh && (Lb(a) || Xi(c, b, a));
    };
  var Jr = rc.Kj;
  var fs = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function gs(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var hs = new ta();
  function is(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = hs.get(e);
      f || ((f = new RegExp(b, d)), hs.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function js(a, b) {
    function c(g) {
      var l = Ze(g),
        m = Xe(l, "protocol"),
        n = Xe(l, "host", !0),
        p = Xe(l, "port"),
        q = Xe(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function ks(a) {
    return ls(a) ? 1 : 0;
  }
  function ls(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = J(a, {});
        J({ arg1: c[d], any_of: void 0 }, e);
        if (ks(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < fs.length; g++) {
                var l = fs[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return gs(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return is(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return js(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  function Ds() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var Es = function () {
      var a = Ds();
      a.hid = a.hid || sa();
      return a.hid;
    },
    Fs = function (a, b) {
      var c = Ds();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var bt = function () {
      var a = !0;
      (Rh(7) && Rh(9) && Rh(10)) || (a = !1);
      return a;
    },
    ct = function () {
      var a = !0;
      (Rh(3) && Rh(4)) || (a = !1);
      return a;
    };
  var Ft = window,
    Gt = document,
    Ht = function (a) {
      var b = Ft._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Ft["ga-disable-" + a]))
        return !0;
      try {
        var c = Ft.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = mg("AMP_TOKEN", String(Gt.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Gt.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Pt(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[R.g.Ma] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Yt = function (a, b) {};
  function Xt(a, b) {
    var c = function () {};
    return c;
  }
  function Zt(a, b, c) {}
  var Uv = Xt;
  var Wv = encodeURI,
    X = encodeURIComponent,
    Xv = function (a, b, c) {
      xb(a, b, c);
    },
    Yv = function (a, b) {
      if (!a) return !1;
      var c = Xe(Ze(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Zv = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { o: {} };
  (Y.o.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.s = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.o.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.s = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !1;
      })(function (a) {
        var b = Ar("gtm.referrer", 1) || F.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Xe(
                Ze(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : zr(String(b))
          : String(b);
      });
    })();
  (Y.o.r = ["google"]),
    (function () {
      (function (a) {
        Y.__r = a;
        Y.__r.s = "r";
        Y.__r.isVendorTemplate = !0;
        Y.__r.priorityOverride = 0;
        Y.__r.isInfrastructure = !1;
      })(function (a) {
        return sa(a.vtp_min, a.vtp_max);
      });
    })();
  (Y.o.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.s = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Ar("gtm.url", 1)) || xr();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return zr(String(c));
        var e = Ze(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? qa(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Xe(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Xe(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.o.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.s = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Ar(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Ir(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.o.cid = ["google"]),
    (function () {
      (function (a) {
        Y.__cid = a;
        Y.__cid.s = "cid";
        Y.__cid.isVendorTemplate = !0;
        Y.__cid.priorityOverride = 0;
        Y.__cid.isInfrastructure = !1;
      })(function () {
        return Tg.M;
      });
    })();
  (Y.o.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var y = t + "." + u,
          x;
        if (n.hasOwnProperty(y)) x = n[y];
        else {
          var A = r[w];
          if (A && ((x = v(A)), (n[y] = x), p.push(y), 35 < p.length)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return x;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(xr());
        qa(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var y = t[w];
          if (y.hasOwnProperty("is_regex"))
            if (y.is_regex)
              try {
                y = new RegExp(y.domain);
              } catch (B) {
                continue;
              }
            else y = y.domain;
          var x = d(r);
          if (y instanceof RegExp) {
            if (y.test(x)) return !1;
          } else {
            var A = y;
            if (0 != A.length) {
              if (0 <= x.indexOf(A)) return !1;
              v.push(d(A));
            }
          }
        }
        return !Yv(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return Xe(Ze(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return l(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return l(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return l(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var y = t.interactedFormFieldPosition;
            return void 0 === y ? v : y;
          case "INTERACT_SEQUENCE_NUMBER":
            var x = t.interactSequenceNumber;
            return void 0 === x ? v : x;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Ab(r, "value");
          case "button":
            return Bb(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            dr(r.elements[u]) && t++;
          return t;
        }
      }
      function l(r, t, u) {
        var v = r.interactedFormField;
        return (v && Ab(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Y.__aev = r;
        Y.__aev.s = "aev";
        Y.__aev.isVendorTemplate = !0;
        Y.__aev.priorityOverride = 0;
        Y.__aev.isInfrastructure = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var y = w.element;
            return (y && y.tagName) || u;
          case "TEXT":
            return a(w, t, v, Bb) || u;
          case "URL":
            var x;
            a: {
              var A = String(w.elementUrl || u || ""),
                B = Ze(A),
                C = String(r.vtp_component || "URL");
              switch (C) {
                case "URL":
                  x = A;
                  break a;
                case "IS_OUTBOUND":
                  x = c(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  x = Xe(
                    B,
                    C,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return x;
          case "ATTRIBUTE":
            var H;
            if (void 0 === r.vtp_attribute) H = b(w, v, u);
            else {
              var I = w.element;
              H = (I && Ab(I, r.vtp_attribute)) || u || "";
            }
            return H;
          case "MD":
            var D = r.vtp_mdValue,
              K = a(w, t, "MD", pr);
            return D && K ? sr(K, D) || u : K || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            var M = b(w, v, u);
            Ir(M, "aev", r.vtp_gtmEventId);
            return M;
        }
      });
    })();

  (Y.o.ctv = ["google"]),
    (function () {
      (function (a) {
        Y.__ctv = a;
        Y.__ctv.s = "ctv";
        Y.__ctv.isVendorTemplate = !0;
        Y.__ctv.priorityOverride = 0;
        Y.__ctv.isInfrastructure = !1;
      })(function () {
        return "2";
      });
    })();

  (Y.o.hid = ["google"]),
    (function () {
      (function (a) {
        Y.__hid = a;
        Y.__hid.s = "hid";
        Y.__hid.isVendorTemplate = !0;
        Y.__hid.priorityOverride = 0;
        Y.__hid.isInfrastructure = !1;
      })(function () {
        return rc.Sd;
      });
    })();

  (Y.o.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var l = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(l.nodeName).toUpperCase() &&
                "text/gtmscript" == l.type
              ) {
                var n = F.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = l.id;
                n.text = l.text || l.textContent || l.innerHTML || "";
                l.charset && (n.charset = l.charset);
                var p = l.getAttribute("data-gtmsrc");
                p && ((n.src = p), qb(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                l.innerHTML &&
                0 <= l.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; l.firstChild; )
                  q.push(l.removeChild(l.firstChild));
                d.insertBefore(l, null);
                a(l, q, m, g)();
              } else d.insertBefore(l, null), m();
            } else f();
          } catch (r) {
            G(g);
          }
        };
      }
      function b(d) {
        if (F.body) {
          var e = d.vtp_gtmOnFailure,
            f = Jr(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.uj,
            l = f.O;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, l, e) : a(F.body, Cb(g), l, e)();
        } else
          vr(function () {
            b(d);
          }, 200);
      }
      Y.__html = b;
      Y.__html.s = "html";
      Y.__html.isVendorTemplate = !0;
      Y.__html.priorityOverride = 0;
      Y.__html.isInfrastructure = !1;
    })();
  (Y.o.dbg = ["google"]),
    (function () {
      (function (a) {
        Y.__dbg = a;
        Y.__dbg.s = "dbg";
        Y.__dbg.isVendorTemplate = !0;
        Y.__dbg.priorityOverride = 0;
        Y.__dbg.isInfrastructure = !1;
      })(function () {
        return !1;
      });
    })();

  var rx = {};
  (rx.macro = function (a) {
    if (rc.Xe.hasOwnProperty(a)) return rc.Xe[a];
  }),
    (rx.onHtmlSuccess = rc.hh(!0)),
    (rx.onHtmlFailure = rc.hh(!1));
  rx.dataLayer = Ae;
  rx.callback = function (a) {
    qe.hasOwnProperty(a) && oa(qe[a]) && qe[a]();
    delete qe[a];
  };
  rx.bootstrap = 0;
  rx._spx = !1;
  function sx() {
    Zd[Tg.M] = Zd[Tg.M] || rx;
    Tg.Hb && (Zd["ctid_" + Tg.Hb] = rx);
    Zg();
    ah() ||
      k(bh(), function (a, b) {
        Mn(a, b.transportUrl, b.context);
        O(92);
      });
    Ga(re, Y.o);
    sc();
    tc = Bc;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute("data-tag-assistant-present");
      Tq(m) && (l = g.yi);
    }
    if (!E["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (F.referrer) {
        var d = Ze(F.referrer);
        c = "cct.google" === We(d, "host");
      }
      if (!c) {
        var e = sg("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((E["__TAGGY_INSTALLED"] = !0),
        ub("https://cct.google/taggy/agent.js"));
    }
    if (le) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          fe ? ((v = "OGT"), (w = "GTAG")) : le && (w = v = "OPT");
          var y = E["google.tagmanager.debugui2.queue"];
          y ||
            ((y = []),
            (E["google.tagmanager.debugui2.queue"] = y),
            ub(
              "https://" +
                Yd.vd +
                "/debug/bootstrap?id=" +
                Tg.M +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                eh()
            ));
          var x = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: ob,
              containerProduct: v,
              debug: !1,
              id: Tg.M,
              isGte: ee,
            },
          };
          x.data.resume = function () {
            a();
          };
          Yd.Qh && (x.data.initialPublish = !0);
          y.push(x);
        },
        g = { vk: 1, zi: 2, Li: 3, Sh: 4, yi: 5 },
        l = void 0,
        m = void 0,
        n = Xe(E.location, "query", !1, void 0, "gtm_debug");
      Tq(n) && (l = g.zi);
      if (!l && F.referrer) {
        var p = Ze(F.referrer);
        "tagassistant.google.com" === We(p, "host") && (l = g.Li);
      }
      if (!l) {
        var q = sg("__TAG_ASSISTANT");
        q.length && q[0].length && (l = g.Sh);
      }
      l || b();
      if (!l && P(54) && Uq(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && ob ? f(l) : a();
          },
          t = !1;
        yb(
          F,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        E.setTimeout(function () {
          r();
        }, 200);
      } else l && ob ? f(l) : a();
    }
  })(function () {
    var a = !1;
    a && ro("INIT");
    Kf().m();
    Oh();
    tk.enable_gbraid_cookie_write = !0;
    if (Tg.Hb ? Zd["ctid_" + Tg.Hb] : Zd[Tg.M]) {
      var b = Zd.zones;
      b && b.unregisterChild(Vg());
    } else {
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        jc.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) mc.push(f[g]);
      for (var l = c.predicates || [], m = 0; m < l.length; m++) lc.push(l[m]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, t = 0; t < q.length; t++)
          r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
        kc.push(r);
      }
      oc = Y;
      pc = ks;
      sx();
      Sq();
      ao = !1;
      bo = 0;
      if (
        ("interactive" == F.readyState && !F.createEventObject) ||
        "complete" == F.readyState
      )
        eo();
      else {
        yb(F, "DOMContentLoaded", eo);
        yb(F, "readystatechange", eo);
        if (F.createEventObject && F.documentElement.doScroll) {
          var u = !0;
          try {
            u = !E.frameElement;
          } catch (A) {}
          u && fo();
        }
        yb(E, "load", eo);
      }
      hq = !1;
      "complete" === F.readyState ? jq() : yb(E, "load", jq);
      dj();
      P(46) && (O(111), Wa("HEALTH", 1));
      P(47) && (O(112), Wa("HEALTH", 2));
      pe = z();
      rx.bootstrap = pe;
      if (a) {
        var x = so("INIT");
      }
    }
  });
})();
