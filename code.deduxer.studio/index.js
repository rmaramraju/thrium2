import {
    g as E
} from "../code.deduxer.studio/assets/index-10963069";
import {
    S as A,
    i as Te
} from "../code.deduxer.studio/assets/smooth-3984cfe3";
import {
    S as de,
    $ as g
} from "../code.deduxer.studio/assets/index-20e3247a";
import {
    Clock as ye,
    WebGLRenderer as be,
    PerspectiveCamera as Ce,
    Scene as Ee,
    AmbientLight as Me,
    PointLight as te,
    SphereGeometry as Pe,
    MeshStandardMaterial as Le,
    Mesh as ze
} from "https://cdn.skypack.dev/three@0.136";
import {
    OrbitControls as ke
} from "https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js";

function ie(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function K(e = {}, t = {}) {
    Object.keys(t).forEach(i => {
        typeof e[i] > "u" ? e[i] = t[i] : ie(t[i]) && ie(e[i]) && Object.keys(t[i]).length > 0 && K(e[i], t[i])
    })
}
const ce = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function O() {
    const e = typeof document < "u" ? document : {};
    return K(e, ce), e
}
const Oe = {
    document: ce,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function P() {
    const e = typeof window < "u" ? window : {};
    return K(e, Oe), e
}

function $e(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
        get() {
            return t
        },
        set(i) {
            t.__proto__ = i
        }
    })
}
class D extends Array {
    constructor(t) {
        typeof t == "number" ? super(t) : (super(...t || []), $e(this))
    }
}

function B(e = []) {
    const t = [];
    return e.forEach(i => {
        Array.isArray(i) ? t.push(...B(i)) : t.push(i)
    }), t
}

function ue(e, t) {
    return Array.prototype.filter.call(e, t)
}

function Ie(e) {
    const t = [];
    for (let i = 0; i < e.length; i += 1) t.indexOf(e[i]) === -1 && t.push(e[i]);
    return t
}

function Ae(e, t) {
    if (typeof e != "string") return [e];
    const i = [],
        s = t.querySelectorAll(e);
    for (let n = 0; n < s.length; n += 1) i.push(s[n]);
    return i
}

function h(e, t) {
    const i = P(),
        s = O();
    let n = [];
    if (!t && e instanceof D) return e;
    if (!e) return new D(n);
    if (typeof e == "string") {
        const r = e.trim();
        if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let a = "div";
            r.indexOf("<li") === 0 && (a = "ul"), r.indexOf("<tr") === 0 && (a = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (a = "tr"), r.indexOf("<tbody") === 0 && (a = "table"), r.indexOf("<option") === 0 && (a = "select");
            const d = s.createElement(a);
            d.innerHTML = r;
            for (let o = 0; o < d.childNodes.length; o += 1) n.push(d.childNodes[o])
        } else n = Ae(e.trim(), t || s)
    } else if (e.nodeType || e === i || e === s) n.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof D) return e;
        n = e
    }
    return new D(Ie(n))
}
h.fn = D.prototype;

function De(...e) {
    const t = B(e.map(i => i.split(" ")));
    return this.forEach(i => {
        i.classList.add(...t)
    }), this
}

function _e(...e) {
    const t = B(e.map(i => i.split(" ")));
    return this.forEach(i => {
        i.classList.remove(...t)
    }), this
}

function Ne(...e) {
    const t = B(e.map(i => i.split(" ")));
    this.forEach(i => {
        t.forEach(s => {
            i.classList.toggle(s)
        })
    })
}

function Ge(...e) {
    const t = B(e.map(i => i.split(" ")));
    return ue(this, i => t.filter(s => i.classList.contains(s)).length > 0).length > 0
}

function Be(e, t) {
    if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    for (let i = 0; i < this.length; i += 1)
        if (arguments.length === 2) this[i].setAttribute(e, t);
        else
            for (const s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
    return this
}

function Ve(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this
}

function He(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this
}

function Fe(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this
}

function We(...e) {
    let [t, i, s, n] = e;
    typeof e[1] == "function" && ([t, s, n] = e, i = void 0), n || (n = !1);

    function r(l) {
        const c = l.target;
        if (!c) return;
        const f = l.target.dom7EventData || [];
        if (f.indexOf(l) < 0 && f.unshift(l), h(c).is(i)) s.apply(c, f);
        else {
            const u = h(c).parents();
            for (let p = 0; p < u.length; p += 1) h(u[p]).is(i) && s.apply(u[p], f)
        }
    }

    function a(l) {
        const c = l && l.target ? l.target.dom7EventData || [] : [];
        c.indexOf(l) < 0 && c.unshift(l), s.apply(this, c)
    }
    const d = t.split(" ");
    let o;
    for (let l = 0; l < this.length; l += 1) {
        const c = this[l];
        if (i)
            for (o = 0; o < d.length; o += 1) {
                const f = d[o];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []), c.dom7LiveListeners[f].push({
                    listener: s,
                    proxyListener: r
                }), c.addEventListener(f, r, n)
            } else
                for (o = 0; o < d.length; o += 1) {
                    const f = d[o];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[f] || (c.dom7Listeners[f] = []), c.dom7Listeners[f].push({
                        listener: s,
                        proxyListener: a
                    }), c.addEventListener(f, a, n)
                }
    }
    return this
}

function je(...e) {
    let [t, i, s, n] = e;
    typeof e[1] == "function" && ([t, s, n] = e, i = void 0), n || (n = !1);
    const r = t.split(" ");
    for (let a = 0; a < r.length; a += 1) {
        const d = r[a];
        for (let o = 0; o < this.length; o += 1) {
            const l = this[o];
            let c;
            if (!i && l.dom7Listeners ? c = l.dom7Listeners[d] : i && l.dom7LiveListeners && (c = l.dom7LiveListeners[d]), c && c.length)
                for (let f = c.length - 1; f >= 0; f -= 1) {
                    const u = c[f];
                    s && u.listener === s || s && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === s ? (l.removeEventListener(d, u.proxyListener, n), c.splice(f, 1)) : s || (l.removeEventListener(d, u.proxyListener, n), c.splice(f, 1))
                }
        }
    }
    return this
}

function Re(...e) {
    const t = P(),
        i = e[0].split(" "),
        s = e[1];
    for (let n = 0; n < i.length; n += 1) {
        const r = i[n];
        for (let a = 0; a < this.length; a += 1) {
            const d = this[a];
            if (t.CustomEvent) {
                const o = new t.CustomEvent(r, {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0
                });
                d.dom7EventData = e.filter((l, c) => c > 0), d.dispatchEvent(o), d.dom7EventData = [], delete d.dom7EventData
            }
        }
    }
    return this
}

function qe(e) {
    const t = this;

    function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i))
    }
    return e && t.on("transitionend", i), this
}

function Xe(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function Ye(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function Ue() {
    if (this.length > 0) {
        const e = P(),
            t = O(),
            i = this[0],
            s = i.getBoundingClientRect(),
            n = t.body,
            r = i.clientTop || n.clientTop || 0,
            a = i.clientLeft || n.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            o = i === e ? e.scrollX : i.scrollLeft;
        return {
            top: s.top + d - r,
            left: s.left + o - a
        }
    }
    return null
}

function Ke() {
    const e = P();
    return this[0] ? e.getComputedStyle(this[0], null) : {}
}

function Je(e, t) {
    const i = P();
    let s;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (s = 0; s < this.length; s += 1)
                for (const n in e) this[s].style[n] = e[n];
            return this
        }
    if (arguments.length === 2 && typeof e == "string") {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this
    }
    return this
}

function Qe(e) {
    return e ? (this.forEach((t, i) => {
        e.apply(t, [t, i])
    }), this) : this
}

function Ze(e) {
    const t = ue(this, e);
    return h(t)
}

function et(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this
}

function tt(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this
}

function it(e) {
    const t = P(),
        i = O(),
        s = this[0];
    let n, r;
    if (!s || typeof e > "u") return !1;
    if (typeof e == "string") {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (n = h(e), r = 0; r < n.length; r += 1)
            if (n[r] === s) return !0;
        return !1
    }
    if (e === i) return s === i;
    if (e === t) return s === t;
    if (e.nodeType || e instanceof D) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === s) return !0;
        return !1
    }
    return !1
}

function st() {
    let e = this[0],
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function nt(e) {
    if (typeof e > "u") return this;
    const t = this.length;
    if (e > t - 1) return h([]);
    if (e < 0) {
        const i = t + e;
        return i < 0 ? h([]) : h([this[i]])
    }
    return h([this[e]])
}

function rt(...e) {
    let t;
    const i = O();
    for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let n = 0; n < this.length; n += 1)
            if (typeof t == "string") {
                const r = i.createElement("div");
                for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild)
            } else if (t instanceof D)
            for (let r = 0; r < t.length; r += 1) this[n].appendChild(t[r]);
        else this[n].appendChild(t)
    }
    return this
}

function ot(e) {
    const t = O();
    let i, s;
    for (i = 0; i < this.length; i += 1)
        if (typeof e == "string") {
            const n = t.createElement("div");
            for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(n.childNodes[s], this[i].childNodes[0])
        } else if (e instanceof D)
        for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]);
    else this[i].insertBefore(e, this[i].childNodes[0]);
    return this
}

function at(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
}

function lt(e) {
    const t = [];
    let i = this[0];
    if (!i) return h([]);
    for (; i.nextElementSibling;) {
        const s = i.nextElementSibling;
        e ? h(s).is(e) && t.push(s) : t.push(s), i = s
    }
    return h(t)
}

function dt(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
    }
    return h([])
}

function ct(e) {
    const t = [];
    let i = this[0];
    if (!i) return h([]);
    for (; i.previousElementSibling;) {
        const s = i.previousElementSibling;
        e ? h(s).is(e) && t.push(s) : t.push(s), i = s
    }
    return h(t)
}

function ut(e) {
    const t = [];
    for (let i = 0; i < this.length; i += 1) this[i].parentNode !== null && (e ? h(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
    return h(t)
}

function ft(e) {
    const t = [];
    for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s;) e ? h(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
    }
    return h(t)
}

function pt(e) {
    let t = this;
    return typeof e > "u" ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function ht(e) {
    const t = [];
    for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(e);
        for (let n = 0; n < s.length; n += 1) t.push(s[n])
    }
    return h(t)
}

function mt(e) {
    const t = [];
    for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let n = 0; n < s.length; n += 1)(!e || h(s[n]).is(e)) && t.push(s[n])
    }
    return h(t)
}

function gt() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}
const se = {
    addClass: De,
    removeClass: _e,
    hasClass: Ge,
    toggleClass: Ne,
    attr: Be,
    removeAttr: Ve,
    transform: He,
    transition: Fe,
    on: We,
    off: je,
    trigger: Re,
    transitionEnd: qe,
    outerWidth: Xe,
    outerHeight: Ye,
    styles: Ke,
    offset: Ue,
    css: Je,
    each: Qe,
    html: et,
    text: tt,
    is: it,
    index: st,
    eq: nt,
    append: rt,
    prepend: ot,
    next: at,
    nextAll: lt,
    prev: dt,
    prevAll: ct,
    parent: ut,
    parents: ft,
    closest: pt,
    find: ht,
    children: mt,
    filter: Ze,
    remove: gt
};
Object.keys(se).forEach(e => {
    Object.defineProperty(h.fn, e, {
        value: se[e],
        writable: !0
    })
});

function vt(e) {
    const t = e;
    Object.keys(t).forEach(i => {
        try {
            t[i] = null
        } catch {}
        try {
            delete t[i]
        } catch {}
    })
}

function U(e, t = 0) {
    return setTimeout(e, t)
}

function G() {
    return Date.now()
}

function wt(e) {
    const t = P();
    let i;
    return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
}

function St(e, t = "x") {
    const i = P();
    let s, n, r;
    const a = wt(e);
    return i.WebKitCSSMatrix ? (n = a.transform || a.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(d => d.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), t === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), t === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function V(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function xt(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function k(...e) {
    const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < e.length; s += 1) {
        const n = e[s];
        if (n != null && !xt(n)) {
            const r = Object.keys(Object(n)).filter(a => i.indexOf(a) < 0);
            for (let a = 0, d = r.length; a < d; a += 1) {
                const o = r[a],
                    l = Object.getOwnPropertyDescriptor(n, o);
                l !== void 0 && l.enumerable && (V(t[o]) && V(n[o]) ? n[o].__swiper__ ? t[o] = n[o] : k(t[o], n[o]) : !V(t[o]) && V(n[o]) ? (t[o] = {}, n[o].__swiper__ ? t[o] = n[o] : k(t[o], n[o])) : t[o] = n[o])
            }
        }
    }
    return t
}

function H(e, t, i) {
    e.style.setProperty(t, i)
}

function fe({
    swiper: e,
    targetPosition: t,
    side: i
}) {
    const s = P(),
        n = -e.translate;
    let r = null,
        a;
    const d = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > n ? "next" : "prev",
        l = (f, u) => o === "next" && f >= u || o === "prev" && f <= u,
        c = () => {
            a = new Date().getTime(), r === null && (r = a);
            const f = Math.max(Math.min((a - r) / d, 1), 0),
                u = .5 - Math.cos(f * Math.PI) / 2;
            let p = n + u * (t - n);
            if (l(p, t) && (p = t), e.wrapperEl.scrollTo({
                    [i]: p
                }), l(p, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [i]: p
                    })
                }), s.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = s.requestAnimationFrame(c)
        };
    c()
}
let j;

function Tt() {
    const e = P(),
        t = O();
    return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function() {
            let s = !1;
            try {
                const n = Object.defineProperty({}, "passive", {
                    get() {
                        s = !0
                    }
                });
                e.addEventListener("testPassiveListener", null, n)
            } catch {}
            return s
        }(),
        gestures: function() {
            return "ongesturestart" in e
        }()
    }
}

function pe() {
    return j || (j = Tt()), j
}
let R;

function yt({
    userAgent: e
} = {}) {
    const t = pe(),
        i = P(),
        s = i.navigator.platform,
        n = e || i.navigator.userAgent,
        r = {
            ios: !1,
            android: !1
        },
        a = i.screen.width,
        d = i.screen.height,
        o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let l = n.match(/(iPad).*OS\s([\d_]+)/);
    const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !l && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        u = s === "Win32";
    let p = s === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !l && p && t.touch && w.indexOf(`${a}x${d}`) >= 0 && (l = n.match(/(Version)\/([\d.]+)/), l || (l = [0, 1, "13_0_0"]), p = !1), o && !u && (r.os = "android", r.android = !0), (l || f || c) && (r.os = "ios", r.ios = !0), r
}

function bt(e = {}) {
    return R || (R = yt(e)), R
}
let q;

function Ct() {
    const e = P();

    function t() {
        const i = e.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    return {
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}

function Et() {
    return q || (q = Ct()), q
}

function Mt({
    swiper: e,
    on: t,
    emit: i
}) {
    const s = P();
    let n = null,
        r = null;
    const a = () => {
            !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"))
        },
        d = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(c => {
                r = s.requestAnimationFrame(() => {
                    const {
                        width: f,
                        height: u
                    } = e;
                    let p = f,
                        w = u;
                    c.forEach(({
                        contentBoxSize: S,
                        contentRect: m,
                        target: v
                    }) => {
                        v && v !== e.el || (p = m ? m.width : (S[0] || S).inlineSize, w = m ? m.height : (S[0] || S).blockSize)
                    }), (p !== f || w !== u) && a()
                })
            }), n.observe(e.el))
        },
        o = () => {
            r && s.cancelAnimationFrame(r), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        l = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            d();
            return
        }
        s.addEventListener("resize", a), s.addEventListener("orientationchange", l)
    }), t("destroy", () => {
        o(), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", l)
    })
}

function Pt({
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
}) {
    const n = [],
        r = P(),
        a = (l, c = {}) => {
            const f = r.MutationObserver || r.WebkitMutationObserver,
                u = new f(p => {
                    if (p.length === 1) {
                        s("observerUpdate", p[0]);
                        return
                    }
                    const w = function() {
                        s("observerUpdate", p[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(w) : r.setTimeout(w, 0)
                });
            u.observe(l, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }), n.push(u)
        },
        d = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const l = e.$el.parents();
                    for (let c = 0; c < l.length; c += 1) a(l[c])
                }
                a(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), a(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        o = () => {
            n.forEach(l => {
                l.disconnect()
            }), n.splice(0, n.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", d), i("destroy", o)
}
const Lt = {
    on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
        const n = i ? "unshift" : "push";
        return e.split(" ").forEach(r => {
            s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](t)
        }), s
    },
    once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;

        function n(...r) {
            s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, r)
        }
        return n.__emitterProxy = t, s.on(e, n, i)
    },
    onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
        const s = t ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
    },
    off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || e.split(" ").forEach(s => {
            typeof t > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
                (n === t || n.__emitterProxy && n.__emitterProxy === t) && i.eventsListeners[s].splice(r, 1)
            })
        }), i
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
        let i, s, n;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = t) : (i = e[0].events, s = e[0].data, n = e[0].context || t), s.unshift(n), (Array.isArray(i) ? i : i.split(" ")).forEach(a => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d => {
                d.apply(n, [a, ...s])
            }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(d => {
                d.apply(n, s)
            })
        }), t
    }
};

function zt() {
    const e = this;
    let t, i;
    const s = e.$el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = s[0].clientWidth, typeof e.params.height < "u" && e.params.height !== null ? i = e.params.height : i = s[0].clientHeight, !(t === 0 && e.isHorizontal() || i === 0 && e.isVertical()) && (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i
    }))
}

function kt() {
    const e = this;

    function t(T) {
        return e.isHorizontal() ? T : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[T]
    }

    function i(T, b) {
        return parseFloat(T.getPropertyValue(t(b)) || 0)
    }
    const s = e.params,
        {
            $wrapperEl: n,
            size: r,
            rtlTranslate: a,
            wrongRTL: d
        } = e,
        o = e.virtual && s.virtual.enabled,
        l = o ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        f = o ? e.virtual.slides.length : c.length;
    let u = [];
    const p = [],
        w = [];
    let S = s.slidesOffsetBefore;
    typeof S == "function" && (S = s.slidesOffsetBefore.call(e));
    let m = s.slidesOffsetAfter;
    typeof m == "function" && (m = s.slidesOffsetAfter.call(e));
    const v = e.snapGrid.length,
        x = e.slidesGrid.length;
    let y = s.spaceBetween,
        C = -S,
        $ = 0,
        I = 0;
    if (typeof r > "u") return;
    typeof y == "string" && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), e.virtualSize = -y, a ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }), s.centeredSlides && s.cssMode && (H(e.wrapperEl, "--swiper-centered-offset-before", ""), H(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const F = s.grid && s.grid.rows > 1 && e.grid;
    F && e.grid.initSlides(f);
    let L;
    const ge = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(T => typeof s.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < f; T += 1) {
        L = 0;
        const b = c.eq(T);
        if (F && e.grid.updateSlide(T, b, f, t), b.css("display") !== "none") {
            if (s.slidesPerView === "auto") {
                ge && (c[T].style[t("width")] = "");
                const M = getComputedStyle(b[0]),
                    _ = b[0].style.transform,
                    W = b[0].style.webkitTransform;
                if (_ && (b[0].style.transform = "none"), W && (b[0].style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? b.outerWidth(!0) : b.outerHeight(!0);
                else {
                    const J = i(M, "width"),
                        ve = i(M, "padding-left"),
                        we = i(M, "padding-right"),
                        Q = i(M, "margin-left"),
                        Z = i(M, "margin-right"),
                        ee = M.getPropertyValue("box-sizing");
                    if (ee && ee === "border-box") L = J + Q + Z;
                    else {
                        const {
                            clientWidth: Se,
                            offsetWidth: xe
                        } = b[0];
                        L = J + ve + we + Q + Z + (xe - Se)
                    }
                }
                _ && (b[0].style.transform = _), W && (b[0].style.webkitTransform = W), s.roundLengths && (L = Math.floor(L))
            } else L = (r - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[T] && (c[T].style[t("width")] = `${L}px`);
            c[T] && (c[T].swiperSlideSize = L), w.push(L), s.centeredSlides ? (C = C + L / 2 + $ / 2 + y, $ === 0 && T !== 0 && (C = C - r / 2 - y), T === 0 && (C = C - r / 2 - y), Math.abs(C) < 1 / 1e3 && (C = 0), s.roundLengths && (C = Math.floor(C)), I % s.slidesPerGroup === 0 && u.push(C), p.push(C)) : (s.roundLengths && (C = Math.floor(C)), (I - Math.min(e.params.slidesPerGroupSkip, I)) % e.params.slidesPerGroup === 0 && u.push(C), p.push(C), C = C + L + y), e.virtualSize += L + y, $ = L, I += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, r) + m, a && d && (s.effect === "slide" || s.effect === "coverflow") && n.css({
            width: `${e.virtualSize+s.spaceBetween}px`
        }), s.setWrapperSize && n.css({
            [t("width")]: `${e.virtualSize+s.spaceBetween}px`
        }), F && e.grid.updateWrapperSize(L, u, t), !s.centeredSlides) {
        const T = [];
        for (let b = 0; b < u.length; b += 1) {
            let M = u[b];
            s.roundLengths && (M = Math.floor(M)), u[b] <= e.virtualSize - r && T.push(M)
        }
        u = T, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
    }
    if (u.length === 0 && (u = [0]), s.spaceBetween !== 0) {
        const T = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter((b, M) => s.cssMode ? M !== c.length - 1 : !0).css({
            [T]: `${y}px`
        })
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let T = 0;
        w.forEach(M => {
            T += M + (s.spaceBetween ? s.spaceBetween : 0)
        }), T -= s.spaceBetween;
        const b = T - r;
        u = u.map(M => M < 0 ? -S : M > b ? b + m : M)
    }
    if (s.centerInsufficientSlides) {
        let T = 0;
        if (w.forEach(b => {
                T += b + (s.spaceBetween ? s.spaceBetween : 0)
            }), T -= s.spaceBetween, T < r) {
            const b = (r - T) / 2;
            u.forEach((M, _) => {
                u[_] = M - b
            }), p.forEach((M, _) => {
                p[_] = M + b
            })
        }
    }
    if (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: w
        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        H(e.wrapperEl, "--swiper-centered-offset-before", `${-u[0]}px`), H(e.wrapperEl, "--swiper-centered-offset-after", `${e.size/2-w[w.length-1]/2}px`);
        const T = -e.snapGrid[0],
            b = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(M => M + T), e.slidesGrid = e.slidesGrid.map(M => M + b)
    }
    if (f !== l && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== x && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !o && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const T = `${s.containerModifierClass}backface-hidden`,
            b = e.$el.hasClass(T);
        f <= s.maxBackfaceHiddenSlides ? b || e.$el.addClass(T) : b && e.$el.removeClass(T)
    }
}

function Ot(e) {
    const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
    let n = 0,
        r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const a = d => s ? t.slides.filter(o => parseInt(o.getAttribute("data-swiper-slide-index"), 10) === d)[0] : t.slides.eq(d)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || h([])).each(d => {
            i.push(d)
        });
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const d = t.activeIndex + r;
                if (d > t.slides.length && !s) break;
                i.push(a(d))
            } else i.push(a(t.activeIndex));
    for (r = 0; r < i.length; r += 1)
        if (typeof i[r] < "u") {
            const d = i[r].offsetHeight;
            n = d > n ? d : n
        }(n || n === 0) && t.$wrapperEl.css("height", `${n}px`)
}

function $t() {
    const e = this,
        t = e.slides;
    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
}

function It(e = this && this.translate || 0) {
    const t = this,
        i = t.params,
        {
            slides: s,
            rtlTranslate: n,
            snapGrid: r
        } = t;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let a = -e;
    n && (a = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let d = 0; d < s.length; d += 1) {
        const o = s[d];
        let l = o.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
        const c = (a + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
            f = (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[d];
        (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(d), s.eq(d).addClass(i.slideVisibleClass)), o.progress = n ? -c : c, o.originalProgress = n ? -f : f
    }
    t.visibleSlides = h(t.visibleSlides)
}

function At(e) {
    const t = this;
    if (typeof e > "u") {
        const l = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * l || 0
    }
    const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: a
    } = t;
    const d = r,
        o = a;
    s === 0 ? (n = 0, r = !0, a = !0) : (n = (e - t.minTranslate()) / s, r = n <= 0, a = n >= 1), Object.assign(t, {
        progress: n,
        isBeginning: r,
        isEnd: a
    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), r && !d && t.emit("reachBeginning toEdge"), a && !o && t.emit("reachEnd toEdge"), (d && !r || o && !a) && t.emit("fromEdge"), t.emit("progress", n)
}

function Dt() {
    const e = this,
        {
            slides: t,
            params: i,
            $wrapperEl: s,
            activeIndex: n,
            realIndex: r
        } = e,
        a = e.virtual && i.virtual.enabled;
    t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`);
    let d;
    a ? d = e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : d = t.eq(n), d.addClass(i.slideActiveClass), i.loop && (d.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
    let o = d.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
    i.loop && o.length === 0 && (o = t.eq(0), o.addClass(i.slideNextClass));
    let l = d.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
    i.loop && l.length === 0 && (l = t.eq(-1), l.addClass(i.slidePrevClass)), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses()
}

function _t(e) {
    const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
            slidesGrid: s,
            snapGrid: n,
            params: r,
            activeIndex: a,
            realIndex: d,
            snapIndex: o
        } = t;
    let l = e,
        c;
    if (typeof l > "u") {
        for (let u = 0; u < s.length; u += 1) typeof s[u + 1] < "u" ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? l = u : i >= s[u] && i < s[u + 1] && (l = u + 1) : i >= s[u] && (l = u);
        r.normalizeSlideIndex && (l < 0 || typeof l > "u") && (l = 0)
    }
    if (n.indexOf(i) >= 0) c = n.indexOf(i);
    else {
        const u = Math.min(r.slidesPerGroupSkip, l);
        c = u + Math.floor((l - u) / r.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1), l === a) {
        c !== o && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    const f = parseInt(t.slides.eq(l).attr("data-swiper-slide-index") || l, 10);
    Object.assign(t, {
        snapIndex: c,
        realIndex: f,
        previousIndex: a,
        activeIndex: l
    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), d !== f && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}

function Nt(e) {
    const t = this,
        i = t.params,
        s = h(e).closest(`.${i.slideClass}`)[0];
    let n = !1,
        r;
    if (s) {
        for (let a = 0; a < t.slides.length; a += 1)
            if (t.slides[a] === s) {
                n = !0, r = a;
                break
            }
    }
    if (s && n) t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(h(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const Gt = {
    updateSize: zt,
    updateSlides: kt,
    updateAutoHeight: Ot,
    updateSlidesOffset: $t,
    updateSlidesProgress: It,
    updateProgress: At,
    updateSlidesClasses: Dt,
    updateActiveIndex: _t,
    updateClickedSlide: Nt
};

function Bt(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
        {
            params: i,
            rtlTranslate: s,
            translate: n,
            $wrapperEl: r
        } = t;
    if (i.virtualTranslate) return s ? -n : n;
    if (i.cssMode) return n;
    let a = St(r[0], e);
    return s && (a = -a), a || 0
}

function Vt(e, t) {
    const i = this,
        {
            rtlTranslate: s,
            params: n,
            $wrapperEl: r,
            wrapperEl: a,
            progress: d
        } = i;
    let o = 0,
        l = 0;
    const c = 0;
    i.isHorizontal() ? o = s ? -e : e : l = e, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -l : n.virtualTranslate || r.transform(`translate3d(${o}px, ${l}px, ${c}px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
    let f;
    const u = i.maxTranslate() - i.minTranslate();
    u === 0 ? f = 0 : f = (e - i.minTranslate()) / u, f !== d && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
}

function Ht() {
    return -this.snapGrid[0]
}

function Ft() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Wt(e = 0, t = this.params.speed, i = !0, s = !0, n) {
    const r = this,
        {
            params: a,
            wrapperEl: d
        } = r;
    if (r.animating && a.preventInteractionOnTransition) return !1;
    const o = r.minTranslate(),
        l = r.maxTranslate();
    let c;
    if (s && e > o ? c = o : s && e < l ? c = l : c = e, r.updateProgress(c), a.cssMode) {
        const f = r.isHorizontal();
        if (t === 0) d[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll) return fe({
                swiper: r,
                targetPosition: -c,
                side: f ? "left" : "top"
            }), !0;
            d.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0), r.setTranslate(c), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
        !r || r.destroyed || u.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
}
const jt = {
    getTranslate: Bt,
    setTranslate: Vt,
    minTranslate: Ht,
    maxTranslate: Ft,
    translateTo: Wt
};

function Rt(e, t) {
    const i = this;
    i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
}

function he({
    swiper: e,
    runCallbacks: t,
    direction: i,
    step: s
}) {
    const {
        activeIndex: n,
        previousIndex: r
    } = e;
    let a = i;
    if (a || (n > r ? a = "next" : n < r ? a = "prev" : a = "reset"), e.emit(`transition${s}`), t && n !== r) {
        if (a === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`), a === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}

function qt(e = !0, t) {
    const i = this,
        {
            params: s
        } = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(), he({
        swiper: i,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function Xt(e = !0, t) {
    const i = this,
        {
            params: s
        } = i;
    i.animating = !1, !s.cssMode && (i.setTransition(0), he({
        swiper: i,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
const Yt = {
    setTransition: Rt,
    transitionStart: qt,
    transitionEnd: Xt
};

function Ut(e = 0, t = this.params.speed, i = !0, s, n) {
    if (typeof e != "number" && typeof e != "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
    if (typeof e == "string") {
        const y = parseInt(e, 10);
        if (!isFinite(y)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = y
    }
    const r = this;
    let a = e;
    a < 0 && (a = 0);
    const {
        params: d,
        snapGrid: o,
        slidesGrid: l,
        previousIndex: c,
        activeIndex: f,
        rtlTranslate: u,
        wrapperEl: p,
        enabled: w
    } = r;
    if (r.animating && d.preventInteractionOnTransition || !w && !s && !n) return !1;
    const S = Math.min(r.params.slidesPerGroupSkip, a);
    let m = S + Math.floor((a - S) / r.params.slidesPerGroup);
    m >= o.length && (m = o.length - 1);
    const v = -o[m];
    if (d.normalizeSlideIndex)
        for (let y = 0; y < l.length; y += 1) {
            const C = -Math.floor(v * 100),
                $ = Math.floor(l[y] * 100),
                I = Math.floor(l[y + 1] * 100);
            typeof l[y + 1] < "u" ? C >= $ && C < I - (I - $) / 2 ? a = y : C >= $ && C < I && (a = y + 1) : C >= $ && (a = y)
        }
    if (r.initialized && a !== f && (!r.allowSlideNext && v < r.translate && v < r.minTranslate() || !r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (f || 0) !== a)) return !1;
    a !== (c || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(v);
    let x;
    if (a > f ? x = "next" : a < f ? x = "prev" : x = "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), d.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), d.effect !== "slide" && r.setTranslate(v), x !== "reset" && (r.transitionStart(i, x), r.transitionEnd(i, x)), !1;
    if (d.cssMode) {
        const y = r.isHorizontal(),
            C = u ? v : -v;
        if (t === 0) {
            const $ = r.virtual && r.params.virtual.enabled;
            $ && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p[y ? "scrollLeft" : "scrollTop"] = C, $ && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return fe({
                swiper: r,
                targetPosition: C,
                side: y ? "left" : "top"
            }), !0;
            p.scrollTo({
                [y ? "left" : "top"]: C,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, x), t === 0 ? r.transitionEnd(i, x) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(C) {
        !r || r.destroyed || C.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, x))
    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
}

function Kt(e = 0, t = this.params.speed, i = !0, s) {
    if (typeof e == "string") {
        const a = parseInt(e, 10);
        if (!isFinite(a)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = a
    }
    const n = this;
    let r = e;
    return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s)
}

function Jt(e = this.params.speed, t = !0, i) {
    const s = this,
        {
            animating: n,
            enabled: r,
            params: a
        } = s;
    if (!r) return s;
    let d = a.slidesPerGroup;
    a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (d = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const o = s.activeIndex < a.slidesPerGroupSkip ? 1 : d;
    if (a.loop) {
        if (n && a.loopPreventsSlide) return !1;
        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
    }
    return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
}

function Qt(e = this.params.speed, t = !0, i) {
    const s = this,
        {
            params: n,
            animating: r,
            snapGrid: a,
            slidesGrid: d,
            rtlTranslate: o,
            enabled: l
        } = s;
    if (!l) return s;
    if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
    }
    const c = o ? s.translate : -s.translate;

    function f(m) {
        return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
    }
    const u = f(c),
        p = a.map(m => f(m));
    let w = a[p.indexOf(u) - 1];
    if (typeof w > "u" && n.cssMode) {
        let m;
        a.forEach((v, x) => {
            u >= v && (m = x)
        }), typeof m < "u" && (w = a[m > 0 ? m - 1 : m])
    }
    let S = 0;
    if (typeof w < "u" && (S = d.indexOf(w), S < 0 && (S = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (S = S - s.slidesPerViewDynamic("previous", !0) + 1, S = Math.max(S, 0))), n.rewind && s.isBeginning) {
        const m = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(m, e, t, i)
    }
    return s.slideTo(S, e, t, i)
}

function Zt(e = this.params.speed, t = !0, i) {
    const s = this;
    return s.slideTo(s.activeIndex, e, t, i)
}

function ei(e = this.params.speed, t = !0, i, s = .5) {
    const n = this;
    let r = n.activeIndex;
    const a = Math.min(n.params.slidesPerGroupSkip, r),
        d = a + Math.floor((r - a) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
    if (o >= n.snapGrid[d]) {
        const l = n.snapGrid[d],
            c = n.snapGrid[d + 1];
        o - l > (c - l) * s && (r += n.params.slidesPerGroup)
    } else {
        const l = n.snapGrid[d - 1],
            c = n.snapGrid[d];
        o - l <= (c - l) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, i)
}

function ti() {
    const e = this,
        {
            params: t,
            $wrapperEl: i
        } = e,
        s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let n = e.clickedIndex,
        r;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), n = i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), U(() => {
            e.slideTo(n)
        })) : e.slideTo(n) : n > e.slides.length - s ? (e.loopFix(), n = i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), U(() => {
            e.slideTo(n)
        })) : e.slideTo(n)
    } else e.slideTo(n)
}
const ii = {
    slideTo: Ut,
    slideToLoop: Kt,
    slideNext: Jt,
    slidePrev: Qt,
    slideReset: Zt,
    slideToClosest: ei,
    slideToClickedSlide: ti
};

function si() {
    const e = this,
        t = O(),
        {
            params: i,
            $wrapperEl: s
        } = e,
        n = s.children().length > 0 ? h(s.children()[0].parentNode) : s;
    n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
    let r = n.children(`.${i.slideClass}`);
    if (i.loopFillGroupWithBlank) {
        const o = i.slidesPerGroup - r.length % i.slidesPerGroup;
        if (o !== i.slidesPerGroup) {
            for (let l = 0; l < o; l += 1) {
                const c = h(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                n.append(c)
            }
            r = n.children(`.${i.slideClass}`)
        }
    }
    i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
    const a = [],
        d = [];
    r.each((o, l) => {
        h(o).attr("data-swiper-slide-index", l)
    });
    for (let o = 0; o < e.loopedSlides; o += 1) {
        const l = o - Math.floor(o / r.length) * r.length;
        d.push(r.eq(l)[0]), a.unshift(r.eq(r.length - l - 1)[0])
    }
    for (let o = 0; o < d.length; o += 1) n.append(h(d[o].cloneNode(!0)).addClass(i.slideDuplicateClass));
    for (let o = a.length - 1; o >= 0; o -= 1) n.prepend(h(a[o].cloneNode(!0)).addClass(i.slideDuplicateClass))
}

function ni() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
        activeIndex: t,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: a,
        rtlTranslate: d
    } = e;
    let o;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const c = -a[t] - e.getTranslate();
    t < s ? (o = i.length - s * 3 + t, o += s, e.slideTo(o, 0, !1, !0) && c !== 0 && e.setTranslate((d ? -e.translate : e.translate) - c)) : t >= i.length - s && (o = -i.length + t + s, o += s, e.slideTo(o, 0, !1, !0) && c !== 0 && e.setTranslate((d ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
}

function ri() {
    const e = this,
        {
            $wrapperEl: t,
            params: i,
            slides: s
        } = e;
    t.children(`.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
}
const oi = {
    loopCreate: si,
    loopFix: ni,
    loopDestroy: ri
};

function ai(e) {
    const t = this;
    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab"
}

function li() {
    const e = this;
    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
const di = {
    setGrabCursor: ai,
    unsetGrabCursor: li
};

function ci(e, t = this) {
    function i(s) {
        if (!s || s === O() || s === P()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(e);
        return !n && !s.getRootNode ? null : n || i(s.getRootNode().host)
    }
    return i(t)
}

function ui(e) {
    const t = this,
        i = O(),
        s = P(),
        n = t.touchEventsData,
        {
            params: r,
            touches: a,
            enabled: d
        } = t;
    if (!d || t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let l = h(o.target);
    if (r.touchEventsTarget === "wrapper" && !l.closest(t.wrapperEl).length || (n.isTouchEvent = o.type === "touchstart", !n.isTouchEvent && "which" in o && o.which === 3) || !n.isTouchEvent && "button" in o && o.button > 0 || n.isTouched && n.isMoved) return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
        f = e.composedPath ? e.composedPath() : e.path;
    c && o.target && o.target.shadowRoot && f && (l = h(f[0]));
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        p = !!(o.target && o.target.shadowRoot);
    if (r.noSwiping && (p ? ci(u, l[0]) : l.closest(u)[0])) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler)[0]) return;
    a.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX, a.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
    const w = a.currentX,
        S = a.currentY,
        m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (m && (w <= v || w >= s.innerWidth - v))
        if (m === "prevent") e.preventDefault();
        else return;
    if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), a.startX = w, a.startY = S, n.touchStartTime = G(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), o.type !== "touchstart") {
        let x = !0;
        l.is(n.focusableElements) && (x = !1, l[0].nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && h(i.activeElement).is(n.focusableElements) && i.activeElement !== l[0] && i.activeElement.blur();
        const y = x && t.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || y) && !l[0].isContentEditable && o.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
}

function fi(e) {
    const t = O(),
        i = this,
        s = i.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: a,
            enabled: d
        } = i;
    if (!d) return;
    let o = e;
    if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
        return
    }
    if (s.isTouchEvent && o.type !== "touchmove") return;
    const l = o.type === "touchmove" && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
        c = o.type === "touchmove" ? l.pageX : o.pageX,
        f = o.type === "touchmove" ? l.pageY : o.pageY;
    if (o.preventedByNestedSwiper) {
        r.startX = c, r.startY = f;
        return
    }
    if (!i.allowTouchMove) {
        h(o.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }), s.touchStartTime = G());
        return
    }
    if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
        if (i.isVertical()) {
            if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (c < r.startX && i.translate <= i.maxTranslate() || c > r.startX && i.translate >= i.minTranslate()) return
    }
    if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && h(o.target).is(s.focusableElements)) {
        s.isMoved = !0, i.allowClick = !1;
        return
    }
    if (s.allowTouchCallbacks && i.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
    r.currentX = c, r.currentY = f;
    const u = r.currentX - r.startX,
        p = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(u ** 2 + p ** 2) < i.params.threshold) return;
    if (typeof s.isScrolling > "u") {
        let v;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : u * u + p * p >= 25 && (v = Math.atan2(Math.abs(p), Math.abs(u)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? v > n.touchAngle : 90 - v > n.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", o), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    i.allowClick = !1, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), s.isMoved || (n.loop && !n.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), s.isMoved = !0;
    let w = i.isHorizontal() ? u : p;
    r.diff = w, w *= n.touchRatio, a && (w = -w), i.swipeDirection = w > 0 ? "prev" : "next", s.currentTranslate = w + s.startTranslate;
    let S = !0,
        m = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (m = 0), w > 0 && s.currentTranslate > i.minTranslate() ? (S = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + w) ** m)) : w < 0 && s.currentTranslate < i.maxTranslate() && (S = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - w) ** m)), S && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
        if (Math.abs(w) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
}

function pi(e) {
    const t = this,
        i = t.touchEventsData,
        {
            params: s,
            touches: n,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: d
        } = t;
    if (!d) return;
    let o = e;
    if (o.originalEvent && (o = o.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", o), i.allowTouchCallbacks = !1, !i.isTouched) {
        i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
        return
    }
    s.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const l = G(),
        c = l - i.touchStartTime;
    if (t.allowClick) {
        const x = o.path || o.composedPath && o.composedPath();
        t.updateClickedSlide(x && x[0] || o.target), t.emit("tap click", o), c < 300 && l - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
    }
    if (i.lastClickTime = G(), U(() => {
            t.destroyed || (t.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || n.diff === 0 || i.currentTranslate === i.startTranslate) {
        i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
        return
    }
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    let f;
    if (s.followFinger ? f = r ? t.translate : -t.translate : f = -i.currentTranslate, s.cssMode) return;
    if (t.params.freeMode && s.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    let u = 0,
        p = t.slidesSizesGrid[0];
    for (let x = 0; x < a.length; x += x < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        const y = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        typeof a[x + y] < "u" ? f >= a[x] && f < a[x + y] && (u = x, p = a[x + y] - a[x]) : f >= a[x] && (u = x, p = a[a.length - 1] - a[a.length - 2])
    }
    let w = null,
        S = null;
    s.rewind && (t.isBeginning ? S = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
    const m = (f - a[u]) / p,
        v = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
        if (!s.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (m >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? w : u + v) : t.slideTo(u)), t.swipeDirection === "prev" && (m > 1 - s.longSwipesRatio ? t.slideTo(u + v) : S !== null && m < 0 && Math.abs(m) > s.longSwipesRatio ? t.slideTo(S) : t.slideTo(u))
    } else {
        if (!s.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(u + v) : t.slideTo(u) : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : u + v), t.swipeDirection === "prev" && t.slideTo(S !== null ? S : u))
    }
}

function ne() {
    const e = this,
        {
            params: t,
            el: i
        } = e;
    if (i && i.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: s,
        allowSlidePrev: n,
        snapGrid: r
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function hi(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function mi() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: i,
            enabled: s
        } = e;
    if (!s) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let n;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}
let re = !1;

function gi() {}
const me = (e, t) => {
    const i = O(),
        {
            params: s,
            touchEvents: n,
            el: r,
            wrapperEl: a,
            device: d,
            support: o
        } = e,
        l = !!s.nested,
        c = t === "on" ? "addEventListener" : "removeEventListener",
        f = t;
    if (!o.touch) r[c](n.start, e.onTouchStart, !1), i[c](n.move, e.onTouchMove, l), i[c](n.end, e.onTouchEnd, !1);
    else {
        const u = n.start === "touchstart" && o.passiveListener && s.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        r[c](n.start, e.onTouchStart, u), r[c](n.move, e.onTouchMove, o.passiveListener ? {
            passive: !1,
            capture: l
        } : l), r[c](n.end, e.onTouchEnd, u), n.cancel && r[c](n.cancel, e.onTouchEnd, u)
    }(s.preventClicks || s.preventClicksPropagation) && r[c]("click", e.onClick, !0), s.cssMode && a[c]("scroll", e.onScroll), s.updateOnWindowResize ? e[f](d.ios || d.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ne, !0) : e[f]("observerUpdate", ne, !0)
};

function vi() {
    const e = this,
        t = O(),
        {
            params: i,
            support: s
        } = e;
    e.onTouchStart = ui.bind(e), e.onTouchMove = fi.bind(e), e.onTouchEnd = pi.bind(e), i.cssMode && (e.onScroll = mi.bind(e)), e.onClick = hi.bind(e), s.touch && !re && (t.addEventListener("touchstart", gi), re = !0), me(e, "on")
}

function wi() {
    me(this, "off")
}
const Si = {
        attachEvents: vi,
        detachEvents: wi
    },
    oe = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function xi() {
    const e = this,
        {
            activeIndex: t,
            initialized: i,
            loopedSlides: s = 0,
            params: n,
            $el: r
        } = e,
        a = n.breakpoints;
    if (!a || a && Object.keys(a).length === 0) return;
    const d = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
    if (!d || e.currentBreakpoint === d) return;
    const l = (d in a ? a[d] : void 0) || e.originalParams,
        c = oe(e, n),
        f = oe(e, l),
        u = n.enabled;
    c && !f ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && f && (r.addClass(`${n.containerModifierClass}grid`), (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && n.grid.fill === "column") && r.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(m => {
        const v = n[m] && n[m].enabled,
            x = l[m] && l[m].enabled;
        v && !x && e[m].disable(), !v && x && e[m].enable()
    });
    const p = l.direction && l.direction !== n.direction,
        w = n.loop && (l.slidesPerView !== n.slidesPerView || p);
    p && i && e.changeDirection(), k(e.params, l);
    const S = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), u && !S ? e.disable() : !u && S && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", l), w && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
}

function Ti(e, t = "window", i) {
    if (!e || t === "container" && !i) return;
    let s = !1;
    const n = P(),
        r = t === "window" ? n.innerHeight : i.clientHeight,
        a = Object.keys(e).map(d => {
            if (typeof d == "string" && d.indexOf("@") === 0) {
                const o = parseFloat(d.substr(1));
                return {
                    value: r * o,
                    point: d
                }
            }
            return {
                value: d,
                point: d
            }
        });
    a.sort((d, o) => parseInt(d.value, 10) - parseInt(o.value, 10));
    for (let d = 0; d < a.length; d += 1) {
        const {
            point: o,
            value: l
        } = a[d];
        t === "window" ? n.matchMedia(`(min-width: ${l}px)`).matches && (s = o) : l <= i.clientWidth && (s = o)
    }
    return s || "max"
}
const yi = {
    setBreakpoint: xi,
    getBreakpoint: Ti
};

function bi(e, t) {
    const i = [];
    return e.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(n => {
            s[n] && i.push(t + n)
        }) : typeof s == "string" && i.push(t + s)
    }), i
}

function Ci() {
    const e = this,
        {
            classNames: t,
            params: i,
            rtl: s,
            $el: n,
            device: r,
            support: a
        } = e,
        d = bi(["initialized", i.direction, {
            "pointer-events": !a.touch
        }, {
            "free-mode": e.params.freeMode && i.freeMode.enabled
        }, {
            autoheight: i.autoHeight
        }, {
            rtl: s
        }, {
            grid: i.grid && i.grid.rows > 1
        }, {
            "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": i.cssMode
        }, {
            centered: i.cssMode && i.centeredSlides
        }, {
            "watch-progress": i.watchSlidesProgress
        }], i.containerModifierClass);
    t.push(...d), n.addClass([...t].join(" ")), e.emitContainerClasses()
}

function Ei() {
    const e = this,
        {
            $el: t,
            classNames: i
        } = e;
    t.removeClass(i.join(" ")), e.emitContainerClasses()
}
const Mi = {
    addClasses: Ci,
    removeClasses: Ei
};

function Pi(e, t, i, s, n, r) {
    const a = P();
    let d;

    function o() {
        r && r()
    }!h(e).parent("picture")[0] && (!e.complete || !n) && t ? (d = new a.Image, d.onload = o, d.onerror = o, s && (d.sizes = s), i && (d.srcset = i), t && (d.src = t)) : o()
}

function Li() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");

    function t() {
        typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
    }
    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
        const s = e.imagesToLoad[i];
        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
    }
}
const zi = {
    loadImage: Pi,
    preloadImages: Li
};

function ki() {
    const e = this,
        {
            isLocked: t,
            params: i
        } = e,
        {
            slidesOffsetBefore: s
        } = i;
    if (s) {
        const n = e.slides.length - 1,
            r = e.slidesGrid[n] + e.slidesSizesGrid[n] + s * 2;
        e.isLocked = e.size > r
    } else e.isLocked = e.snapGrid.length === 1;
    i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const Oi = {
        checkOverflow: ki
    },
    ae = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
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
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
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
        _emitClasses: !1
    };

function $i(e, t) {
    return function(s = {}) {
        const n = Object.keys(s)[0],
            r = s[n];
        if (typeof r != "object" || r === null) {
            k(t, s);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && e[n] === !0 && (e[n] = {
                auto: !0
            }), !(n in e && "enabled" in r)) {
            k(t, s);
            return
        }
        e[n] === !0 && (e[n] = {
            enabled: !0
        }), typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
        }), k(t, s)
    }
}
const X = {
        eventsEmitter: Lt,
        update: Gt,
        translate: jt,
        transition: Yt,
        slide: ii,
        loop: oi,
        grabCursor: di,
        events: Si,
        breakpoints: yi,
        checkOverflow: Oi,
        classes: Mi,
        images: zi
    },
    Y = {};
class z {
    constructor(...t) {
        let i, s;
        if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? s = t[0] : [i, s] = t, s || (s = {}), s = k({}, s), i && !s.el && (s.el = i), s.el && h(s.el).length > 1) {
            const d = [];
            return h(s.el).each(o => {
                const l = k({}, s, {
                    el: o
                });
                d.push(new z(l))
            }), d
        }
        const n = this;
        n.__swiper__ = !0, n.support = pe(), n.device = bt({
            userAgent: s.userAgent
        }), n.browser = Et(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const r = {};
        n.modules.forEach(d => {
            d({
                swiper: n,
                extendParams: $i(s, r),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        });
        const a = k({}, ae, r);
        return n.params = k({}, a, Y, s), n.originalParams = k({}, n.params), n.passedParams = k({}, s), n.params && n.params.on && Object.keys(n.params.on).forEach(d => {
            n.on(d, n.params.on[d])
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = h, Object.assign(n, {
            enabled: n.params.enabled,
            el: i,
            classNames: [],
            slides: h(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return n.params.direction === "horizontal"
            },
            isVertical() {
                return n.params.direction === "vertical"
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
            touchEvents: function() {
                const o = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    l = ["pointerdown", "pointermove", "pointerup"];
                return n.touchEventsTouch = {
                    start: o[0],
                    move: o[1],
                    end: o[2],
                    cancel: o[3]
                }, n.touchEventsDesktop = {
                    start: l[0],
                    move: l[1],
                    end: l[2]
                }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
            }(),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: G(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), n.emit("_swiper"), n.params.init && n.init(), n
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, i) {
        const s = this;
        t = Math.min(Math.max(t, 0), 1);
        const n = s.minTranslate(),
            a = (s.maxTranslate() - n) * t + n;
        s.translateTo(a, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const i = t.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(t) {
        const i = this;
        return i.destroyed ? "" : t.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const i = [];
        t.slides.each(s => {
            const n = t.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: n
            }), t.emit("_slideClass", s, n)
        }), t.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(t = "current", i = !1) {
        const s = this,
            {
                params: n,
                slides: r,
                slidesGrid: a,
                slidesSizesGrid: d,
                size: o,
                activeIndex: l
            } = s;
        let c = 1;
        if (n.centeredSlides) {
            let f = r[l].swiperSlideSize,
                u;
            for (let p = l + 1; p < r.length; p += 1) r[p] && !u && (f += r[p].swiperSlideSize, c += 1, f > o && (u = !0));
            for (let p = l - 1; p >= 0; p -= 1) r[p] && !u && (f += r[p].swiperSlideSize, c += 1, f > o && (u = !0))
        } else if (t === "current")
            for (let f = l + 1; f < r.length; f += 1)(i ? a[f] + d[f] - a[l] < o : a[f] - a[l] < o) && (c += 1);
        else
            for (let f = l - 1; f >= 0; f -= 1) a[l] - a[f] < o && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: i,
            params: s
        } = t;
        s.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function n() {
            const a = t.rtlTranslate ? t.translate * -1 : t.translate,
                d = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
            t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let r;
        t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? r = t.slideTo(t.slides.length - 1, 0, !1, !0) : r = t.slideTo(t.activeIndex, 0, !1, !0), r || n()), s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, i = !0) {
        const s = this,
            n = s.params.direction;
        return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (s.$el.removeClass(`${s.params.containerModifierClass}${n}`).addClass(`${s.params.containerModifierClass}${t}`), s.emitContainerClasses(), s.params.direction = t, s.slides.each(r => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }), s.emit("changeDirection"), i && s.update()), s
    }
    changeLanguageDirection(t) {
        const i = this;
        i.rtl && t === "rtl" || !i.rtl && t === "ltr" || (i.rtl = t === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.$el.addClass(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.$el.removeClass(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update())
    }
    mount(t) {
        const i = this;
        if (i.mounted) return !0;
        const s = h(t || i.params.el);
        if (t = s[0], !t) return !1;
        t.swiper = i;
        const n = () => `.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let a = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                const d = h(t.shadowRoot.querySelector(n()));
                return d.children = o => s.children(o), d
            }
            return s.children ? s.children(n()) : h(s).children(n())
        })();
        if (a.length === 0 && i.params.createElements) {
            const o = O().createElement("div");
            a = h(o), o.className = i.params.wrapperClass, s.append(o), s.children(`.${i.params.slideClass}`).each(l => {
                a.append(l)
            })
        }
        return Object.assign(i, {
            $el: s,
            el: t,
            $wrapperEl: a,
            wrapperEl: a[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl"),
            wrongRTL: a.css("display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const i = this;
        return i.initialized || i.mount(t) === !1 || (i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.params.loop && i.loopCreate(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.preloadImages && i.preloadImages(), i.params.loop ? i.slideTo(i.params.initialSlide + i.loopedSlides, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.attachEvents(), i.initialized = !0, i.emit("init"), i.emit("afterInit")), i
    }
    destroy(t = !0, i = !0) {
        const s = this,
            {
                params: n,
                $el: r,
                $wrapperEl: a,
                slides: d
            } = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), d && d.length && d.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(o => {
            s.off(o)
        }), t !== !1 && (s.$el[0].swiper = null, vt(s)), s.destroyed = !0), null
    }
    static extendDefaults(t) {
        k(Y, t)
    }
    static get extendedDefaults() {
        return Y
    }
    static get defaults() {
        return ae
    }
    static installModule(t) {
        z.prototype.__modules__ || (z.prototype.__modules__ = []);
        const i = z.prototype.__modules__;
        typeof t == "function" && i.indexOf(t) < 0 && i.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(i => z.installModule(i)), z) : (z.installModule(t), z)
    }
}
Object.keys(X).forEach(e => {
    Object.keys(X[e]).forEach(t => {
        z.prototype[t] = X[e][t]
    })
});
z.use([Mt, Pt]);

function Ii() {
    E.registerPlugin(A);
    const e = "expo.out";
    new de("[text-split], .heading-hero, .hero-content_block, .info__headings-itself, .work-title, .letter-wrap, .heading-process-card, .main-paragraph-process", {
        types: "words, chars, lines",
        tagName: "span"
    });

    function t() {
        const n = E.timeline();
        n.delay(1.3), E.set(".intro-heading_itself .char", {
            yPercent: 100
        }), n.to(".intro-heading_itself .char", {
            yPercent: 0,
            stagger: "0.012",
            ease: e,
            duration: .85
        })
    }

    function i() {
        const n = new z(".clients-slider", {
            speed: 1500,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        g(".swiper-button-next").on("click", () => {
            n.slideNext()
        }), g(".swiper-button-prev").on("click", () => {
            n.slidePrev()
        })
    }
    E.timeline().add(t()).add(i())
}
Te();
const N = "expo.out",
    le = `
vec4 permute(vec4 i) {
  vec4 im = mod(i, 289.0);
  return mod(((im*34.0)+10.0)*im, 289.0);
}

float psrdnoise(vec3 x, vec3 period, float alpha, out vec3 gradient)
{
  const mat3 M = mat3(0.0, 1.0, 1.0, 1.0, 0.0, 1.0,  1.0, 1.0, 0.0);
  const mat3 Mi = mat3(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);
  vec3 uvw = M * x;
  vec3 i0 = floor(uvw), f0 = fract(uvw);
  vec3 g_ = step(f0.xyx, f0.yzz), l_ = 1.0 - g_;
  vec3 g = vec3(l_.z, g_.xy), l = vec3(l_.xy, g_.z);
  vec3 o1 = min( g, l ), o2 = max( g, l );
  vec3 i1 = i0 + o1, i2 = i0 + o2, i3 = i0 + vec3(1.0);
  vec3 v0 = Mi * i0, v1 = Mi * i1, v2 = Mi * i2, v3 = Mi * i3;
  vec3 x0 = x - v0, x1 = x - v1, x2 = x - v2, x3 = x - v3;
  if(any(greaterThan(period, vec3(0.0)))) {
    vec4 vx = vec4(v0.x, v1.x, v2.x, v3.x);
    vec4 vy = vec4(v0.y, v1.y, v2.y, v3.y);
    vec4 vz = vec4(v0.z, v1.z, v2.z, v3.z);
    if(period.x > 0.0) vx = mod(vx, period.x);
    if(period.y > 0.0) vy = mod(vy, period.y);
    if(period.z > 0.0) vz = mod(vz, period.z);
    i0 = floor(M * vec3(vx.x, vy.x, vz.x) + 0.5);
    i1 = floor(M * vec3(vx.y, vy.y, vz.y) + 0.5);
    i2 = floor(M * vec3(vx.z, vy.z, vz.z) + 0.5);
    i3 = floor(M * vec3(vx.w, vy.w, vz.w) + 0.5);
  }
  vec4 hash = permute( permute( permute( 
      vec4(i0.z, i1.z, i2.z, i3.z ))
      + vec4(i0.y, i1.y, i2.y, i3.y ))
      + vec4(i0.x, i1.x, i2.x, i3.x ));
  vec4 theta = hash * 3.883222077;
  vec4 sz = hash * -0.006920415 + 0.996539792;
  vec4 psi = hash * 0.108705628;
  vec4 Ct = cos(theta), St = sin(theta);
  vec4 sz_prime = sqrt( 1.0 - sz*sz );
  vec4 gx, gy, gz;
  if(alpha != 0.0) {
    vec4 px = Ct * sz_prime, py = St * sz_prime, pz = sz;
    vec4 Sp = sin(psi), Cp = cos(psi), Ctp = St*Sp - Ct*Cp;
    vec4 qx = mix( Ctp*St, Sp, sz), qy = mix(-Ctp*Ct, Cp, sz);
    vec4 qz = -(py*Cp + px*Sp);
    vec4 Sa = vec4(sin(alpha)), Ca = vec4(cos(alpha));
    gx = Ca*px + Sa*qx; gy = Ca*py + Sa*qy; gz = Ca*pz + Sa*qz;
  }
  else {
    gx = Ct * sz_prime; gy = St * sz_prime; gz = sz;  
  }
  vec3 g0 = vec3(gx.x, gy.x, gz.x), g1 = vec3(gx.y, gy.y, gz.y);
  vec3 g2 = vec3(gx.z, gy.z, gz.z), g3 = vec3(gx.w, gy.w, gz.w);
  vec4 w = 0.5-vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));
  w = max(w, 0.0); vec4 w2 = w * w, w3 = w2 * w;
  vec4 gdotx = vec4(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));
  float n = dot(w3, gdotx);
  vec4 dw = -6.0 * w2 * gdotx;
  vec3 dn0 = w3.x * g0 + dw.x * x0;
  vec3 dn1 = w3.y * g1 + dw.y * x1;
  vec3 dn2 = w3.z * g2 + dw.z * x2;
  vec3 dn3 = w3.w * g3 + dw.w * x3;
  gradient = 39.5 * (dn0 + dn1 + dn2 + dn3);
  return 39.5 * n;
}
`;
Ai();

function Ai() {
    let e, t, i, s, n, r, a;
    const d = new ye,
        o = {
            uTime: {
                value: 0
            },
            uCoordScale1: {
                value: .16
            },
            uCoordScale2: {
                value: 7.6
            },
            uCoordScale3: {
                value: 20.8
            },
            uCoordScale4: {
                value: 16
            },
            uDisplacementScale: {
                value: .4
            },
            uBumpScale: {
                value: .005
            }
        };
    l();

    function l() {
        e = new be({
            canvas: document.getElementById("canvas"),
            antialias: !0,
            alpha: !0
        }), i = new Ce(75), i.position.z = 10, s = new ke(i, e.domElement), s.enableDamping = !0, s.dampingFactor = .1, u(), window.addEventListener("resize", u), c(), requestAnimationFrame(f)
    }

    function c() {
        t = new Ee, t.add(new Me(1181978));
        const p = new te(8272633);
        p.position.set(30, 20, 10), t.add(p);
        const w = new te(1839910);
        w.position.set(-30, -20, -10), t.add(w);
        const S = new Pe(5, 256, 256);
        a = new Le({
            metalness: .3,
            roughness: .6,
            onBeforeCompile: v => {
                v.uniforms.uTime = o.uTime, v.uniforms.uCoordScale1 = o.uCoordScale1, v.uniforms.uCoordScale2 = o.uCoordScale2, v.uniforms.uCoordScale3 = o.uCoordScale3, v.uniforms.uCoordScale4 = o.uCoordScale4, v.uniforms.uDisplacementScale = o.uDisplacementScale, v.uniforms.uBumpScale = o.uBumpScale, v.vertexShader = `
          uniform float uTime;
          uniform float uCoordScale1;
          uniform float uDisplacementScale;
          varying vec3 vPosition;
          ${le}
        ` + v.vertexShader, v.vertexShader = v.vertexShader.replace("#include <begin_vertex>", `
            vPosition = position;

            vec3 grad;
            float d = psrdnoise(position * uCoordScale1 + uTime * vec3(0.1, 0.123, 0.134), vec3(240.0), 4.0 * uTime, grad);
            grad *= 2.0;
            vec3 transformed = position + uDisplacementScale * d * normal;

            vec3 N_ = grad - dot(grad, normal) * normal;
            vNormal = normal - uDisplacementScale * N_;
            vNormal = normalize(vNormal);
          `), v.fragmentShader = `
          uniform mat4 modelViewMatrix;
          uniform float uTime;
          uniform float uCoordScale2;
          uniform float uCoordScale3;
          uniform float uCoordScale4;
          uniform float uBumpScale;
          varying vec3 vPosition;
          ${le}
        ` + v.fragmentShader, v.fragmentShader = v.fragmentShader.replace("#include <normal_fragment_begin>", `
            // bump map
            vec3 grad = vec3(0.0);
            vec3 gradtemp = vec3(0.0);
            float bump = psrdnoise(vPosition * uCoordScale2 + uTime * vec3(0.5, 0.7, 0.6), vec3(240.0), 0.0, grad);
            grad *= 10.0;
            bump += 0.5 * psrdnoise(vPosition * uCoordScale3 + 0.02 * grad + uTime * vec3(-0.7, -0.6, 0.5), vec3(240.0), 0.0, gradtemp);
            grad = 10.0 * gradtemp;
            bump += 0.25 * psrdnoise(vPosition * uCoordScale4 + uTime * vec3(-0.6, -0.5, -0.7), vec3(240.0), 0.0, gradtemp);
            grad += 10.0 * gradtemp;

            bump *= 0.2;
            grad *= 0.2;

            // normal
            vec3 normal;
            vec3 N_ = grad - dot(grad, vNormal) * vNormal;
            normal = vNormal - uBumpScale * N_;
            normal = normalize(normal);
            normal = mat3(modelViewMatrix) * normal;
            vec3 geometryNormal = normal;
          `)
            }
        });
        const m = new ze(S, a);
        window.addEventListener("mousemove", v => {
            const x = v.clientX / window.innerWidth - .5,
                y = v.clientY / window.innerHeight - .5;
            m.rotation.x = y * .3, m.rotation.y = x * .3
        }), m.position.x = 3, m.position.y = -2, t.add(m), A.create({
            trigger: ".section_introduction",
            start: "top top",
            end: "+=20%",
            onEnterBack: () => {
                E.to(m.position, {
                    duration: 1,
                    x: 3,
                    z: 0,
                    ease: "power2.inOut"
                }), E.to(o.uDisplacementScale, {
                    duration: 1.5,
                    value: "0.24",
                    ease: "power2.inOut"
                })
            },
            onLeave: () => {
                E.to(m.position, {
                    duration: 2,
                    x: 0,
                    z: -3,
                    ease: "power2.inOut"
                }), E.to(o.uDisplacementScale, {
                    duration: 1.5,
                    value: "0.75",
                    ease: "power2.inOut"
                })
            }
        }), A.create({
            trigger: ".section_process",
            start: "top top",
            end: "+=20%",
            onEnterBack: () => {
                E.to(m.position, {
                    duration: 1,
                    x: 0,
                    z: -3,
                    ease: "power2.inOut"
                })
            },
            onLeave: () => {
                E.to(m.position, {
                    duration: 2,
                    x: 4,
                    z: 3,
                    ease: "power2.inOut"
                })
            }
        }), A.create({
            trigger: ".section_clients",
            start: "top top",
            end: "+=20%",
            onEnterBack: () => {
                E.to(m.position, {
                    duration: 1,
                    x: 4,
                    z: 3,
                    ease: "power2.inOut"
                })
            },
            onLeave: () => {
                E.to(m.position, {
                    duration: 2,
                    x: -4,
                    z: -2,
                    ease: "power2.inOut"
                })
            }
        }), A.create({
            trigger: ".component_footer",
            start: "top top",
            end: "+=20%",
            onEnterBack: () => {
                E.to(m.position, {
                    duration: 2,
                    x: -4,
                    z: -2,
                    ease: "power2.inOut"
                }), E.to(o.uDisplacementScale, {
                    duration: 3,
                    value: "0.75",
                    ease: "power2.out"
                }), E.to(o.uCoordScale1, {
                    duration: 3,
                    value: "0.1",
                    ease: "power2.out"
                })
            },
            onLeave: () => {
                E.to(m.position, {
                    duration: 2,
                    x: -4,
                    z: 3,
                    ease: "power2.inOut"
                }), E.to(o.uDisplacementScale, {
                    duration: 3,
                    value: "0.52",
                    ease: "power2.out"
                }), E.to(o.uCoordScale1, {
                    duration: 3,
                    value: "0.6",
                    ease: "power2.out"
                })
            }
        })
    }

    function f() {
        requestAnimationFrame(f), o.uTime.value = d.getElapsedTime() * .5, s && s.update(), e.render(t, i)
    }

    function u() {
        n = window.innerWidth, r = window.innerHeight, e && i && (e.setSize(n, r), i.aspect = n / r, i.updateProjectionMatrix())
    }
}

function Di() {
    const e = new z(".clients-slider", {
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    g(".swiper-button-next").on("click", () => {
        e.slideNext()
    }), g(".swiper-button-prev").on("click", () => {
        e.slidePrev()
    })
}

function _i() {
    g("[data-copy]").each(function() {
        g(this).on("click", function() {
            const e = "thriumtech@gmail.com";
            (async () => {
                try {
                    await navigator.clipboard.writeText(e)
                } catch (i) {
                    console.error("Failed to copy: ", i)
                }
            })(), document.querySelector(".tooltip") && g(".tooltip-text").text("Copied!"), document.querySelector(".copy-email") && g(".copy-email").text("Copied!")
        })
    })
}
_i();

function Ni() {
    const e = E.timeline();
    e.delay(1), E.set(".info__headings-itself .char", {
        yPercent: 110
    }), e.to(".intro-heading_itself .char", {
        yPercent: 0,
        stagger: "0.016",
        ease: "expo.out",
        duration: 1.15
    }, "same").from("#canvas", {
        opacity: 0,
        duration: .8,
        scale: .85,
        ease: N
    }, "same")
}

function Gi() {
    E.timeline({
        scrollTrigger: {
            trigger: ".component_footer",
            start: "top top",
            pin: !0,
            scrub: !0,
            end: "+=80%"
        }
    }).from(".footer-bg", {
        scaleX: 1.2,
        borderRadius: 0,
        ease: N
    });

    function t(i) {
        let s = "";
        const n = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|:<>?",
            r = n.length;
        for (let a = 0; a < i; a++) s += n.charAt(Math.floor(Math.random() * r));
        return s
    }
    g(".char").each(function() {
        const i = g(this).text();
        g(this).attr("letter", i)
    }), g(".letter-wrap").each(function() {
        function i() {
            s !== void 0 && clearInterval(s), n.each(function() {
                const r = g(this).attr("letter");
                g(this).text(r)
            })
        }
        let s;
        const n = g(this).find(".char");
        g(this).on("mouseenter", () => {
            let {
                length: r
            } = n;
            s = setInterval(() => {
                n.each(function(a) {
                    if (a < r) {
                        const d = t(1);
                        g(this).text(d)
                    } else {
                        const d = g(this).attr("letter");
                        g(this).text(d)
                    }
                }), r -= 1
            }, 100), setTimeout(() => {
                i()
            }, 600)
        }), g(this).on("mouseleave", () => {
            i()
        })
    })
}

function Bi() {
    g(".work-card-bg").each(function() {
        E.to(g(this), {
            clipPath: "inset(0% 0 0 0)",
            scrollTrigger: {
                trigger: g(this)
            },
            duration: 2.2,
            ease: N
        })
    })
}

function Vi() {
    function e(s, n) {
        A.create({
            trigger: s,
            start: "top bottom",
            onLeaveBack: () => {
                n.progress(0), n.pause()
            }
        }), A.create({
            trigger: s,
            start: "top 60%",
            onEnter: () => n.play()
        })
    }
    g(".main-paragraph").each(function() {
        const s = E.timeline({
            paused: !0
        });
        s.from(g(this).find(".word"), {
            yPercent: 101,
            duration: .65,
            ease: N,
            stagger: "0.007"
        }), e(g(this), s)
    }), g(".info__headings-itself").each(function() {
        const s = E.timeline({
            paused: !0
        });
        s.to(g(this).find(".char"), {
            yPercent: 0,
            duration: 1.15,
            stagger: "0.016",
            ease: N
        }), e(g(this), s)
    });
    const t = document.querySelector(".horizontal-wrapper"),
        i = E.timeline({
            scrollTrigger: {
                trigger: t,
                pin: !0,
                scrub: !0,
                start: "top top",
                end: "650%"
            }
        });
    i.to(".process-content", {
        opacity: 0,
        scale: .85,
        transformOrigin: "left center",
        duration: .5,
        ease: N
    }, 0), g(".process-card").each(function(s) {
        i.to(g(this), {
            x: "0%",
            ease: "none"
        }, s * .5), i.to(g(this).prev(), {
            x: "-90vw",
            ease: "none"
        }, s * .5)
    }), g(".card-lottie").each(function(s) {
        i.to(g(this), {
            x: "70vw",
            delay: .2,
            ease: "none"
        }, s * .5)
    }), g("[data-tooltip]").on("mouseenter", function() {
        const s = g(this).attr("data-tooltip");
        g(".tooltip-text").text(s), E.to(g(".tooltip"), {
            scale: 1,
            duration: .6,
            ease: "ease.circle.inOut"
        })
    }), g("[data-tooltip]").on("mouseleave", function() {
        const s = g(this).attr("data-tooltip");
        g(".tooltip-text").text(s), E.to(g(".tooltip"), {
            scale: 0,
            duration: .6,
            ease: "ease.circle.inOut"
        })
    })
}

function Hi() {
    function e(t) {
        let i = "";
        const s = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|:<>?",
            n = s.length;
        for (let r = 0; r < t; r++) i += s.charAt(Math.floor(Math.random() * n));
        return i
    }
    g(".char").each(function() {
        const t = g(this).text();
        g(this).attr("letter", t)
    }), g(".letter-wrap").each(function() {
        function t() {
            i !== void 0 && clearInterval(i), s.each(function() {
                const n = g(this).attr("letter");
                g(this).text(n)
            })
        }
        let i;
        const s = g(this).find(".char");
        g(this).on("mouseenter", () => {
            let {
                length: n
            } = s;
            i = setInterval(() => {
                s.each(function(r) {
                    if (r < n) {
                        const a = e(1);
                        g(this).text(a)
                    } else {
                        const a = g(this).attr("letter");
                        g(this).text(a)
                    }
                }), n -= 1
            }, 100), setTimeout(() => {
                t()
            }, 600)
        }), g(this).on("mouseleave", () => {
            t()
        })
    })
}
Hi();

function Fi() {
    if (window.innerWidth < 520) Ii();
    else {
        const e = new de("[text-split], .heading-hero, .hero-content_block, .info__headings-itself, .work-title, .letter-wrap", {
            types: "words, chars, lines",
            tagName: "span"
        });
        window.addEventListener("resize", () => {
            e.revert(), e.split()
        }), E.registerPlugin(A), g(document).on("mousemove", i => {
            E.to(".tooltip", {
                x: i.clientX,
                y: i.clientY
            })
        });
        const t = E.timeline();
        t.delay(.6), t.add(Ni()).add(Di()).add(Gi()).add(Bi()).add(Vi())
    }
}
Fi();