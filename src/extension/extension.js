import { s as ss } from "../../assets/module-mYsCuRZy.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var n, l$1, u$2, i$1, o$1, r$1, f$2, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h$1 = Array.isArray;
function v$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d$1(l2, f2, i2, o2, null);
}
function d$1(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2, __i: -1, __u: 0 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function g$2(n2) {
  return n2.children;
}
function b$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function m$1(n2, l2) {
  if (null == l2)
    return n2.__ ? m$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? m$1(n2) : null;
}
function k$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$1(n2);
  }
}
function w$1(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !x$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(x$1);
}
function x$1() {
  var n2, u2, t2, o2, r2, e2, c2, s2, a2;
  for (i$1.sort(f$2); n2 = i$1.shift(); )
    n2.__d && (u2 = i$1.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, s2 = [], a2 = [], (c2 = t2.__P) && ((o2 = v$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(o2), L$1(c2, o2, r2, t2.__n, void 0 !== c2.ownerSVGElement, 32 & r2.__u ? [e2] : null, s2, null == e2 ? m$1(r2) : e2, !!(32 & r2.__u), a2), o2.__.__k[o2.__i] = o2, M$1(s2, o2, a2), o2.__e != e2 && k$1(o2)), i$1.length > u2 && i$1.sort(f$2));
  x$1.__r = 0;
}
function C$1(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
  var v2, p2, y2, d2, _, g2 = t2 && t2.__k || s$1, b2 = l2.length;
  for (u2.__d = e2, P(u2, l2, g2), e2 = u2.__d, v2 = 0; v2 < b2; v2++)
    null != (y2 = u2.__k[v2]) && "boolean" != typeof y2 && "function" != typeof y2 && (p2 = -1 === y2.__i ? c$1 : g2[y2.__i] || c$1, y2.__i = v2, L$1(n2, y2, p2, i2, o2, r2, f2, e2, a2, h2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && z$2(p2.ref, null, y2), h2.push(y2.ref, y2.__c || d2, y2)), null == _ && null != d2 && (_ = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = S(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = _;
}
function P(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++)
    null != (i2 = n2.__k[t2] = null == (i2 = l2[t2]) || "boolean" == typeof i2 || "function" == typeof i2 ? null : "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? d$1(null, i2, null, null, i2) : h$1(i2) ? d$1(g$2, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? d$1(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) ? (i2.__ = n2, i2.__b = n2.__b + 1, f2 = H$1(i2, u2, r2 = t2 + a2, s2), i2.__i = f2, o2 = null, -1 !== f2 && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 === r2 + 1 ? a2++ : f2 > r2 ? s2 > e2 - r2 ? a2 += f2 - r2 : a2-- : a2 = f2 < r2 && f2 == r2 - 1 ? f2 - r2 : 0, f2 !== t2 + a2 && (i2.__u |= 65536))) : (o2 = u2[t2]) && null == o2.key && o2.__e && (o2.__e == n2.__d && (n2.__d = m$1(o2)), N(o2, o2, false), u2[t2] = null, s2--);
  if (s2)
    for (t2 = 0; t2 < c2; t2++)
      null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = m$1(o2)), N(o2, o2));
}
function S(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++)
      t2[i2] && (t2[i2].__ = n2, l2 = S(t2[i2], l2, u2));
    return l2;
  }
  return n2.__e != l2 && (u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e), l2 && l2.nextSibling;
}
function $$1(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (h$1(n2) ? n2.some(function(n3) {
    $$1(n3, l2);
  }) : l2.push(n2)), l2;
}
function H$1(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function I$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T$1(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || I$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || I$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? D : A, o2)) : n2.removeEventListener(l2, o2 ? D : A, o2);
    else {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function A(n2) {
  var u2 = this.l[n2.type + false];
  if (n2.t) {
    if (n2.t <= u2.u)
      return;
  } else
    n2.t = Date.now();
  return u2(l$1.event ? l$1.event(n2) : n2);
}
function D(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function L$1(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _, m2, k2, w2, x2, P2, S2, $2, H2, I2, T2, A2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n:
    if ("function" == typeof A2)
      try {
        if (w2 = u2.props, x2 = (a2 = A2.contextType) && i2[a2.__c], P2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? k2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in A2 && A2.prototype.render ? u2.__c = p2 = new A2(w2, P2) : (u2.__c = p2 = new b$1(w2, P2), p2.constructor = A2, p2.render = O$1), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = P2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v$1({}, p2.__s)), v$1(p2.__s, A2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u2, y2)
          null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == A2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, P2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, P2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, m2);
          });
        }
        if (p2.context = P2, p2.props = w2, p2.__P = n2, p2.__e = false, $2 = l$1.__r, H2 = 0, "prototype" in A2 && A2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), I2 = 0; I2 < p2._sb.length; I2++)
            p2.__h.push(p2._sb[I2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++H2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = v$1(v$1({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (m2 = p2.getSnapshotBeforeUpdate(d2, _)), C$1(n2, h$1(T2 = null != a2 && a2.type === g$2 && null == a2.key ? a2.props.children : a2) ? T2 : [T2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__u &= -161, p2.__h.length && f2.push(p2), k2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u2.__v = null, c2 || null != r2 ? (u2.__e = e2, u2.__u |= c2 ? 160 : 32, r2[r2.indexOf(e2)] = null) : (u2.__e = t2.__e, u2.__k = t2.__k), l$1.__e(n3, u2, t2);
      }
    else
      null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = j$1(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$1.diffed) && a2(u2);
}
function M$1(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++)
    z$2(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function j$1(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, v2, y2, d2, _, g2, b2, k2 = t2.props, w2 = u2.props, x2 = u2.type;
  if ("svg" === x2 && (o2 = true), null != r2) {
    for (a2 = 0; a2 < r2.length; a2++)
      if ((_ = r2[a2]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
        l2 = _, r2[a2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === x2)
      return document.createTextNode(w2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, w2.is && w2), r2 = null, e2 = false;
  }
  if (null === x2)
    k2 === w2 || e2 && l2.data === w2 || (l2.data = w2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), k2 = t2.props || c$1, !e2 && null != r2)
      for (k2 = {}, a2 = 0; a2 < l2.attributes.length; a2++)
        k2[(_ = l2.attributes[a2]).name] = _.value;
    for (a2 in k2)
      _ = k2[a2], "children" == a2 || ("dangerouslySetInnerHTML" == a2 ? y2 = _ : "key" === a2 || a2 in w2 || T$1(l2, a2, null, _, o2));
    for (a2 in w2)
      _ = w2[a2], "children" == a2 ? d2 = _ : "dangerouslySetInnerHTML" == a2 ? v2 = _ : "value" == a2 ? g2 = _ : "checked" == a2 ? b2 = _ : "key" === a2 || e2 && "function" != typeof _ || k2[a2] === _ || T$1(l2, a2, _, k2[a2], o2);
    if (v2)
      e2 || y2 && (v2.__html === y2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2.__html), u2.__k = [];
    else if (y2 && (l2.innerHTML = ""), C$1(l2, h$1(d2) ? d2 : [d2], u2, t2, i2, o2 && "foreignObject" !== x2, r2, f2, r2 ? r2[0] : t2.__k && m$1(t2, 0), e2, s2), null != r2)
      for (a2 = r2.length; a2--; )
        null != r2[a2] && p$1(r2[a2]);
    e2 || (a2 = "value", void 0 !== g2 && (g2 !== l2[a2] || "progress" === x2 && !g2 || "option" === x2 && g2 !== k2[a2]) && T$1(l2, a2, g2, k2[a2], false), a2 = "checked", void 0 !== b2 && b2 !== l2[a2] && T$1(l2, a2, b2, k2[a2], false));
  }
  return l2;
}
function z$2(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function N(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || z$2(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && N(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function q(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], L$1(t2, u2 = (!o2 && i2 || t2).__k = y(g$2, null, [u2]), r2 || c$1, c$1, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), M$1(f2, u2, e2);
}
n = s$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$2 = 0, b$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state), "function" == typeof n2 && (n2 = n2(v$1({}, u2), this.props)), n2 && v$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$1(this));
}, b$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w$1(this));
}, b$1.prototype.render = g$2, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$2 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x$1.__r = 0;
const initElement = (elem) => {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  ss.init("phc_DwrRlo4Qt118JTvubGTyA4zLtnxwlFmVNX5S30no58z", {
    api_host: "https://us.i.posthog.com"
  });
  try {
    const manifestData = chrome.runtime.getManifest();
    ss.capture("$set", {
      $set: {
        extension_version: manifestData.version
      }
    });
  } catch (e2) {
  }
  q(elem, appContainer);
};
var t, r, u$1, i, o = 0, f$1 = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o || u2), o = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h(n2) {
  return o = 1, s(B$1, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p(u2, i2) {
  var o2 = d(t++, 3);
  !l$1.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function b() {
  for (var t2; t2 = f$1.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u$1 === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k), i2.__h.forEach(w), i2.__h = [], t = 0)), u$1 = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f$1.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u$1 = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2) {
  this.props = n2;
}
(E.prototype = new b$1()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var x = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x && x(n2);
};
var O = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  O(n2, t2, e2, r2);
};
var T = l$1.unmount;
function F(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return F(n3, t2, e2);
  })), n2;
}
function I(n2, t2, e2) {
  return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return I(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function L() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function M() {
  this.u = null, this.o = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), T && T(n2);
}, (L.prototype = new b$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = U(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = I(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, L.prototype.componentWillUnmount = function() {
  this.t = [];
}, L.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = F(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y(g$2, null, n2.fallback);
  return i2 && (i2.__u &= -33), [y(g$2, null, e2.__a ? null : n2.children), i2];
};
var V = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
(M.prototype = new b$1()).__a = function(n2) {
  var t2 = this, e2 = U(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), V(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, M.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = $$1(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    V(n2, e2, t2);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, H = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Z = /[A-Z0-9]/g, Y = "undefined" != typeof document, $ = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
b$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(b$1.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var J = l$1.event;
function K() {
}
function Q() {
  return this.cancelBubble;
}
function X() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return J && (n2 = J(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
};
var tn = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, en = l$1.vnode;
l$1.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {};
    for (var o2 in t2) {
      var i2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || Y && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
        var l2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || $(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : H.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && B.test(o2) ? o2 = o2.replace(Z, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = $$1(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = $$1(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", tn)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = z, en && en(n2);
};
var rn = l$1.__r;
l$1.__r = function(n2) {
  rn && rn(n2), n2.__c;
};
var un = l$1.diffed;
l$1.diffed = function(n2) {
  un && un(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value);
};
var f = 0;
function u(e2, t2, n2, o2, i2, u2) {
  var a2, c2, p2 = {};
  for (c2 in t2)
    "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps))
    for (c2 in a2)
      void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(l2), l2;
}
function Popup() {
  const [json, setJSON] = h(null);
  const [syncStatus, setSyncStatus] = h("IDLE");
  const [linkingCode, setLinkingCode] = h("");
  const [extensionStatus, setExtensionStatus] = h("OK");
  p(() => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.url.includes("onlyfans.com")) {
        syncModel();
      } else {
        setExtensionStatus("WRONG_URL");
      }
    });
  }, []);
  const syncModel = () => {
    ss.capture("Sync requested");
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tabs) {
      const activeTab = tabs[0];
      if (activeTab && activeTab.url.includes("onlyfans.com")) {
        chrome.tabs.sendMessage(activeTab.id, {
          type: "SPICY:connect-onlyfans"
        });
      } else {
        ss.capture("Sync launched on wrong url", {
          url: activeTab.url
        });
      }
    });
    chrome.runtime.onMessage.addListener(async ({
      type,
      ...rest
    }) => {
      if (type !== "SPICY:onlyfans-credentials") {
        return;
      }
      ss.capture("Sync data received", {
        model_id: rest.uid,
        model_name: rest.name
      });
      chrome.cookies.getAll({
        domain: "onlyfans.com"
      }, (rawCookies) => {
        const cookies = rawCookies.reduce((memo, item) => {
          switch (item.name) {
            case "sess":
            case "auth_id": {
              memo[item.name] = {
                name: item.name,
                value: item.value,
                version: "0",
                secure: item.secure,
                expires: item.expirationDate ? new Date(item.expirationDate).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
                path: item.path,
                httpOnly: item.httpOnly,
                domain: item.domain
              };
              break;
            }
          }
          return memo;
        }, {});
        if (!cookies.auth_id) {
          cookies.auth_id = {
            name: "auth_id",
            value: rest.uid,
            version: "0",
            secure: false,
            expires: (/* @__PURE__ */ new Date()).toISOString(),
            path: "/",
            httpOnly: true,
            domain: ".onlyfans.com"
          };
        }
        setJSON({
          ...rest,
          cookies
        });
        ss.capture("JSON set", {
          model_id: rest.uid,
          model_name: rest.name
        });
      });
      return true;
    });
  };
  const confirmSync = async () => {
    const body = JSON.stringify({
      uid: json.uid,
      bcTokenSha: json.bcTokenSha,
      userAgent: json.userAgent,
      cookies: json.cookies
    });
    ss.capture("Sending sync data", {
      model_id: json.uid,
      model_name: json.name
    });
    setSyncStatus("LOADING");
    fetch("https://portal.spicyai.tech/v1/client/cookies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body
    }).then((res) => {
      if (res.status === 201) {
        return res.json().then((json2) => {
          ss.capture("Sync successful", {
            model_id: json2.uid,
            model_name: json2.name
          });
          setSyncStatus(json2.success ? "SUCCESS" : "ERROR");
          setLinkingCode(json2.linkingCode);
        });
      } else {
        ss.capture("Sync error", {
          model_id: json.uid,
          model_name: json.name
        });
      }
      return setSyncStatus("ERROR");
    });
  };
  const closeWindow = () => {
    navigator.clipboard.writeText(linkingCode);
    setTimeout(() => window.close(), 100);
  };
  const navigateToOnlyFans = () => {
    chrome.tabs.query({
      url: "https://*.onlyfans.com/"
    }, (tabs) => {
      const ofTab = tabs[0];
      if (ofTab) {
        chrome.tabs.update(ofTab.id, {
          active: true
        });
      } else {
        chrome.tabs.create({
          url: "https://onlyfans.com"
        });
      }
    });
  };
  function renderConfirmSyncButton() {
    switch (syncStatus) {
      case "LOADING": {
        return u("button", {
          disabled: true,
          type: "button",
          class: "mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          children: [u("svg", {
            "aria-hidden": "true",
            role: "status",
            class: "mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [u("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor"
            }), u("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "#1C64F2"
            })]
          }), "Syncing..."]
        });
      }
      case "SUCCESS": {
        return u(g$2, {
          children: [u("button", {
            type: "button",
            onClick: closeWindow,
            class: "mr-2 inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
            children: "🥰 Synced successfully!"
          }), u("div", {
            class: "cursor-pointer text-sm text-orange-600 dark:text-orange-600",
            onClick: closeWindow,
            children: "Linking Code (click to copy)"
          }), u("div", {
            class: "cursor-pointer text-sm text-orange-600 dark:text-orange-600",
            onClick: closeWindow,
            children: linkingCode
          })]
        });
      }
      case "ERROR": {
        return u("button", {
          type: "button",
          onClick: confirmSync,
          class: "mr-2 inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
          children: "🧐 Could not sync this model. Retry?"
        });
      }
      default: {
        return u("button", {
          type: "button",
          onClick: confirmSync,
          class: "mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: "Confirm Sync"
        });
      }
    }
  }
  function renderWrongUrl() {
    return u("div", {
      class: "mt-4 flex flex-col items-center space-y-5 md:mt-6 text-center px-2.5",
      children: [u("h5", {
        class: "mb-1 text-xl font-medium text-gray-900 dark:text-white",
        children: "Please open the OnlyFans page and click on the extension."
      }), u("button", {
        type: "button",
        onClick: navigateToOnlyFans,
        className: "mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        children: "Go to OnlyFans"
      })]
    });
  }
  return u("div", {
    class: "w-96 border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800",
    children: u("div", {
      class: "flex flex-col items-center pb-8 pt-6",
      children: [extensionStatus === "WRONG_URL" && renderWrongUrl(), extensionStatus !== "WRONG_URL" && u(g$2, {
        children: [json ? u("img", {
          class: "mb-3 h-24 w-24 rounded-full object-cover shadow-lg",
          src: json.avatar,
          alt: json.name
        }) : u("div", {
          class: "mb-3 rounded-full shadow-lg",
          children: u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "icon icon-tabler icon-tabler-user-circle",
            width: "96",
            height: "96",
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            stroke: "white",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            children: [u("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }), u("path", {
              d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
            }), u("path", {
              d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
            }), u("path", {
              d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
            })]
          })
        }), u("h5", {
          class: "mb-1 text-xl font-medium text-gray-900 dark:text-white",
          children: (json == null ? void 0 : json.name) ?? "Model Name"
        }), u("span", {
          class: "text-sm text-gray-500 dark:text-gray-500",
          children: (json == null ? void 0 : json.username) ?? "Model Username"
        }), u("div", {
          class: "mt-4 flex flex-col items-center space-y-5 md:mt-6",
          children: [!json ? u(g$2, {
            children: u("button", {
              type: "button",
              onClick: () => {
                ss.capture("Sync requested MANUALLY");
                syncModel();
              },
              className: "mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              children: "Sync Model with SPICY"
            })
          }) : renderConfirmSyncButton(), syncStatus !== "SUCCESS" && u("button", {
            type: "button",
            onClick: () => window.open("https://t.me/SpicyAISupportBot", "_blank"),
            className: "mr-2 inline-flex items-center rounded-lg px-5 py-0 text-center text-sm font-medium text-white hover:underline",
            children: "Contact us by Telegram"
          })]
        })]
      })]
    })
  });
}
chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {
  var _a, _b, _c;
  if (((_a = tabs[0]) == null ? void 0 : _a.id) && ((_c = (_b = tabs[0]) == null ? void 0 : _b.url) == null ? void 0 : _c.includes("onlyfans.com"))) {
    chrome.scripting.executeScript({
      target: {
        tabId: tabs[0].id
      },
      // @ts-ignore
      func: () => !!window["contentScriptInjected"]
      // This checks for the flag in the page
    }, (results) => {
      if (results && results[0].result === false) {
        chrome.scripting.executeScript({
          target: {
            tabId: tabs[0].id
          },
          files: ["src/content/content.js"]
        });
      }
    });
  }
});
initElement(u(Popup, {}));
