function pt(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f
}

function Ri(f, t) {
    f.prototype = Object.create(t.prototype), f.prototype.constructor = f, f.__proto__ = t
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var et = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    $t = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Je, W, V, at = 1e8,
    D = 1 / at,
    Be = Math.PI * 2,
    Dr = Be / 4,
    Ar = 0,
    Ei = Math.sqrt,
    Rr = Math.cos,
    Er = Math.sin,
    X = function(t) {
        return typeof t == "string"
    },
    z = function(t) {
        return typeof t == "function"
    },
    yt = function(t) {
        return typeof t == "number"
    },
    ti = function(t) {
        return typeof t > "u"
    },
    ct = function(t) {
        return typeof t == "object"
    },
    Q = function(t) {
        return t !== !1
    },
    Fi = function() {
        return typeof window < "u"
    },
    de = function(t) {
        return z(t) || X(t)
    },
    zi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    $ = Array.isArray,
    Ne = /(?:-?\.?\d|\.)+/gi,
    Li = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Me = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ii = /[+-]=-?[.\d]+/,
    Bi = /[^,'"\[\]\s]+/gi,
    Fr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    R, st, Ve, ei, it = {},
    ye = {},
    Ni, Vi = function(t) {
        return (ye = Nt(t, it)) && rt
    },
    ii = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    xe = function(t, e) {
        return !e && console.warn(t)
    },
    Ui = function(t, e) {
        return t && (it[t] = e) && ye && (ye[t] = e) || it
    },
    oe = function() {
        return 0
    },
    zr = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    pe = {
        suppressEvents: !0,
        kill: !1
    },
    Lr = {
        suppressEvents: !0
    },
    ri = {},
    wt = [],
    Ue = {},
    Yi, J = {},
    De = {},
    mi = 30,
    me = [],
    ni = "",
    si = function(t) {
        var e = t[0],
            i, r;
        if (ct(e) || z(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
            for (r = me.length; r-- && !me[r].targetTest(e););
            i = me[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new hr(t[r], i))) || t.splice(r, 1);
        return t
    },
    Lt = function(t) {
        return t._gsap || si(ot(t))[0]._gsap
    },
    Xi = function(t, e, i) {
        return (i = t[e]) && z(i) ? t[e]() : ti(i) && t.getAttribute && t.getAttribute(e) || i
    },
    Z = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    L = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    q = function(t) {
        return Math.round(t * 1e7) / 1e7 || 0
    },
    qt = function(t, e) {
        var i = e.charAt(0),
            r = parseFloat(e.substr(2));
        return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    },
    Ir = function(t, e) {
        for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
        return r < i
    },
    ve = function() {
        var t = wt.length,
            e = wt.slice(0),
            i, r;
        for (Ue = {}, wt.length = 0, i = 0; i < t; i++) r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    qi = function(t, e, i, r) {
        wt.length && !W && ve(), t.render(e, i, r || W && e < 0 && (t._initted || t._startAt)), wt.length && !W && ve()
    },
    Gi = function(t) {
        var e = parseFloat(t);
        return (e || e === 0) && (t + "").match(Bi).length < 2 ? e : X(t) ? t.trim() : t
    },
    Wi = function(t) {
        return t
    },
    ft = function(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    },
    Br = function(t) {
        return function(e, i) {
            for (var r in i) r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
        }
    },
    Nt = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    gi = function f(t, e) {
        for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ct(e[i]) ? f(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t
    },
    Te = function(t, e) {
        var i = {},
            r;
        for (r in t) r in e || (i[r] = t[r]);
        return i
    },
    ne = function(t) {
        var e = t.parent || R,
            i = t.keyframes ? Br($(t.keyframes)) : ft;
        if (Q(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    },
    Nr = function(t, e) {
        for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
        return i < 0
    },
    $i = function(t, e, i, r, n) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var s = t[r],
            a;
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
    },
    Oe = function(t, e, i, r) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
    },
    St = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    It = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    },
    Vr = function(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    Ye = function(t, e, i, r) {
        return t._startAt && (W ? t._startAt.revert(pe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    },
    Ur = function f(t) {
        return !t || t._ts && f(t.parent)
    },
    yi = function(t) {
        return t._repeat ? Kt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Kt = function(t, e) {
        var i = Math.floor(t /= e);
        return t && i === t ? i - 1 : i
    },
    be = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    ke = function(t) {
        return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0))
    },
    Ce = function(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ke(t), i._dirty || It(i, t)), t
    },
    Ki = function(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = be(t.rawTime(), e), (!e._dur || ce(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -D
        }
    },
    _t = function(t, e, i, r) {
        return e.parent && St(e), e._start = q((yt(i) ? i : i || t !== R ? nt(t, i, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), $i(t, e, "_first", "_last", t._sort ? "_start" : 0), Xe(e) || (t._recent = e), r || Ki(t, e), t._ts < 0 && Ce(t, t._tTime), t
    },
    Hi = function(t, e) {
        return (it.ScrollTrigger || ii("scrollTrigger", e)) && it.ScrollTrigger.create(e, t)
    },
    Qi = function(t, e, i, r, n) {
        if (oi(t, e, n), !t._initted) return 1;
        if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Yi !== tt.frame) return wt.push(t), t._lazy = [n, r], 1
    },
    Yr = function f(t) {
        var e = t.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || f(e))
    },
    Xe = function(t) {
        var e = t.data;
        return e === "isFromStart" || e === "isStart"
    },
    Xr = function(t, e, i, r) {
        var n = t.ratio,
            s = e < 0 || !e && (!t._start && Yr(t) && !(!t._initted && Xe(t)) || (t._ts < 0 || t._dp._ts < 0) && !Xe(t)) ? 0 : 1,
            a = t._rDelay,
            o = 0,
            u, h, l;
        if (a && t._repeat && (o = ce(0, t._tDur, e), h = Kt(o, a), t._yoyo && h & 1 && (s = 1 - s), h !== Kt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || W || r || t._zTime === D || !e && t._zTime) {
            if (!t._initted && Qi(t, e, r, i, o)) return;
            for (l = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !l), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, u = t._pt; u;) u.r(s, u.d), u = u._next;
            e < 0 && Ye(t, e, i, !0), t._onUpdate && !i && ut(t, "onUpdate"), o && t._repeat && !i && t.parent && ut(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && St(t, 1), !i && !W && (ut(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    },
    qr = function(t, e, i) {
        var r;
        if (i > e)
            for (r = t._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > e) return r;
                r = r._next
            } else
                for (r = t._last; r && r._start >= i;) {
                    if (r.data === "isPause" && r._start < e) return r;
                    r = r._prev
                }
    },
    Ht = function(t, e, i, r) {
        var n = t._repeat,
            s = q(e) || 0,
            a = t._tTime / t._tDur;
        return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Ce(t, t._tTime = t._tDur * a), t.parent && ke(t), i || It(t.parent, t), t
    },
    xi = function(t) {
        return t instanceof H ? It(t) : Ht(t, t._dur)
    },
    Gr = {
        _start: 0,
        endTime: oe,
        totalDuration: oe
    },
    nt = function f(t, e, i) {
        var r = t.labels,
            n = t._recent || Gr,
            s = t.duration() >= at ? n.endTime(!1) : t._dur,
            a, o, u;
        return X(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && i && (o = o / 100 * ($(i) ? i[0] : i).totalDuration()), a > 1 ? f(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e
    },
    se = function(t, e, i) {
        var r = yt(e[1]),
            n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[n],
            a, o;
        if (r && (s.duration = e[1]), s.parent = i, t) {
            for (a = s, o = i; o && !("immediateRender" in a);) a = o.vars.defaults || {}, o = Q(o.vars.inherit) && o.parent;
            s.immediateRender = Q(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
        }
        return new Y(e[0], s, e[n + 1])
    },
    kt = function(t, e) {
        return t || t === 0 ? e(t) : e
    },
    ce = function(t, e, i) {
        return i < t ? t : i > e ? e : i
    },
    G = function(t, e) {
        return !X(t) || !(e = Fr.exec(t)) ? "" : e[1]
    },
    Wr = function(t, e, i) {
        return kt(i, function(r) {
            return ce(t, e, r)
        })
    },
    qe = [].slice,
    Zi = function(t, e) {
        return t && ct(t) && "length" in t && (!e && !t.length || t.length - 1 in t && ct(t[0])) && !t.nodeType && t !== st
    },
    $r = function(t, e, i) {
        return i === void 0 && (i = []), t.forEach(function(r) {
            var n;
            return X(r) && !e || Zi(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r)
        }) || i
    },
    ot = function(t, e, i) {
        return V && !e && V.selector ? V.selector(t) : X(t) && !i && (Ve || !Qt()) ? qe.call((e || ei).querySelectorAll(t), 0) : $(t) ? $r(t, i) : Zi(t) ? qe.call(t, 0) : t ? [t] : []
    },
    Ge = function(t) {
        return t = ot(t)[0] || xe("Invalid scope") || {},
            function(e) {
                var i = t.current || t.nativeElement || t;
                return ot(e, i.querySelectorAll ? i : i === t ? xe("Invalid scope") || ei.createElement("div") : t)
            }
    },
    ji = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    Ji = function(t) {
        if (z(t)) return t;
        var e = ct(t) ? t : {
                each: t
            },
            i = Bt(e.ease),
            r = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = r > 0 && r < 1,
            o = isNaN(r) || a,
            u = e.axis,
            h = r,
            l = r;
        return X(r) ? h = l = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !a && o && (h = r[0], l = r[1]),
            function(c, d, p) {
                var _ = (p || e).length,
                    m = s[_],
                    g, y, v, T, x, S, P, w, b;
                if (!m) {
                    if (b = e.grid === "auto" ? 0 : (e.grid || [1, at])[1], !b) {
                        for (P = -at; P < (P = p[b++].getBoundingClientRect().left) && b < _;);
                        b--
                    }
                    for (m = s[_] = [], g = o ? Math.min(b, _) * h - .5 : r % b, y = b === at ? 0 : o ? _ * l / b - .5 : r / b | 0, P = 0, w = at, S = 0; S < _; S++) v = S % b - g, T = y - (S / b | 0), m[S] = x = u ? Math.abs(u === "y" ? T : v) : Ei(v * v + T * T), x > P && (P = x), x < w && (w = x);
                    r === "random" && ji(m), m.max = P - w, m.min = w, m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : u ? u === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (r === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = G(e.amount || e.each) || 0, i = i && _ < 0 ? or(i) : i
                }
                return _ = (m[c] - m.min) / m.max || 0, q(m.b + (i ? i(_) : _) * m.v) + m.u
            }
    },
    We = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(i) {
            var r = q(Math.round(parseFloat(i) / t) * t * e);
            return (r - r % 1) / e + (yt(i) ? 0 : G(i))
        }
    },
    tr = function(t, e) {
        var i = $(t),
            r, n;
        return !i && ct(t) && (r = i = t.radius || at, t.values ? (t = ot(t.values), (n = !yt(t[0])) && (r *= r)) : t = We(t.increment)), kt(e, i ? z(t) ? function(s) {
            return n = t(s), Math.abs(n - s) <= r ? n : s
        } : function(s) {
            for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), u = at, h = 0, l = t.length, c, d; l--;) n ? (c = t[l].x - a, d = t[l].y - o, c = c * c + d * d) : c = Math.abs(t[l] - a), c < u && (u = c, h = l);
            return h = !r || u <= r ? t[h] : s, n || h === s || yt(s) ? h : h + G(s)
        } : We(t))
    },
    er = function(t, e, i, r) {
        return kt($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
        })
    },
    Kr = function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return function(r) {
            return e.reduce(function(n, s) {
                return s(n)
            }, r)
        }
    },
    Hr = function(t, e) {
        return function(i) {
            return t(parseFloat(i)) + (e || G(i))
        }
    },
    Qr = function(t, e, i) {
        return rr(t, e, 0, 1, i)
    },
    ir = function(t, e, i) {
        return kt(i, function(r) {
            return t[~~e(r)]
        })
    },
    Zr = function f(t, e, i) {
        var r = e - t;
        return $(t) ? ir(t, f(0, t.length), e) : kt(i, function(n) {
            return (r + (n - t) % r) % r + t
        })
    },
    jr = function f(t, e, i) {
        var r = e - t,
            n = r * 2;
        return $(t) ? ir(t, f(0, t.length - 1), e) : kt(i, function(s) {
            return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s)
        })
    },
    ue = function(t) {
        for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e));) s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? Bi : Ne), i += t.substr(e, r - e) + er(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
        return i + t.substr(e, t.length - e)
    },
    rr = function(t, e, i, r, n) {
        var s = e - t,
            a = r - i;
        return kt(n, function(o) {
            return i + ((o - t) / s * a || 0)
        })
    },
    Jr = function f(t, e, i, r) {
        var n = isNaN(t + e) ? 0 : function(d) {
            return (1 - d) * t + d * e
        };
        if (!n) {
            var s = X(t),
                a = {},
                o, u, h, l, c;
            if (i === !0 && (r = 1) && (i = null), s) t = {
                p: t
            }, e = {
                p: e
            };
            else if ($(t) && !$(e)) {
                for (h = [], l = t.length, c = l - 2, u = 1; u < l; u++) h.push(f(t[u - 1], t[u]));
                l--, n = function(p) {
                    p *= l;
                    var _ = Math.min(c, ~~p);
                    return h[_](p - _)
                }, i = e
            } else r || (t = Nt($(t) ? [] : {}, t));
            if (!h) {
                for (o in e) ai.call(a, t, o, "get", e[o]);
                n = function(p) {
                    return hi(p, a) || (s ? t.p : t)
                }
            }
        }
        return kt(i, n)
    },
    vi = function(t, e, i) {
        var r = t.labels,
            n = at,
            s, a, o;
        for (s in r) a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
        return o
    },
    ut = function(t, e, i) {
        var r = t.vars,
            n = r[e],
            s = V,
            a = t._ctx,
            o, u, h;
        if (n) return o = r[e + "Params"], u = r.callbackScope || t, i && wt.length && ve(), a && (V = a), h = o ? n.apply(u, o) : n.call(u), V = s, h
    },
    ie = function(t) {
        return St(t), t.scrollTrigger && t.scrollTrigger.kill(!!W), t.progress() < 1 && ut(t, "onInterrupt"), t
    },
    Xt, tn = function(t) {
        t = !t.name && t.default || t;
        var e = t.name,
            i = z(t),
            r = e && !i && t.init ? function() {
                this._props = []
            } : t,
            n = {
                init: oe,
                render: hi,
                add: ai,
                kill: gn,
                modifier: mn,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: fi,
                aliases: {},
                register: 0
            };
        if (Qt(), t !== r) {
            if (J[e]) return;
            ft(r, ft(Te(t, n), s)), Nt(r.prototype, Nt(n, Te(t, s))), J[r.prop = e] = r, t.targetTest && (me.push(r), ri[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        Ui(e, r), t.register && t.register(rt, r, j)
    },
    M = 255,
    re = {
        aqua: [0, M, M],
        lime: [0, M, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, M],
        navy: [0, 0, 128],
        white: [M, M, M],
        olive: [128, 128, 0],
        yellow: [M, M, 0],
        orange: [M, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [M, 0, 0],
        pink: [M, 192, 203],
        cyan: [0, M, M],
        transparent: [M, M, M, 0]
    },
    Ae = function(t, e, i) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + .5 | 0
    },
    nr = function(t, e, i) {
        var r = t ? yt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : re.black,
            n, s, a, o, u, h, l, c, d, p;
        if (!r) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t]) r = re[t];
            else if (t.charAt(0) === "#") {
                if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & M, t & M]
            } else if (t.substr(0, 3) === "hsl") {
                if (r = p = t.match(Ne), !e) o = +r[0] % 360 / 360, u = +r[1] / 100, h = +r[2] / 100, s = h <= .5 ? h * (u + 1) : h + u - h * u, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ae(o + 1 / 3, n, s), r[1] = Ae(o, n, s), r[2] = Ae(o - 1 / 3, n, s);
                else if (~t.indexOf("=")) return r = t.match(Li), i && r.length < 4 && (r[3] = 1), r
            } else r = t.match(Ne) || re.transparent;
            r = r.map(Number)
        }
        return e && !p && (n = r[0] / M, s = r[1] / M, a = r[2] / M, l = Math.max(n, s, a), c = Math.min(n, s, a), h = (l + c) / 2, l === c ? o = u = 0 : (d = l - c, u = h > .5 ? d / (2 - l - c) : d / (l + c), o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + .5), r[1] = ~~(u * 100 + .5), r[2] = ~~(h * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
    },
    sr = function(t) {
        var e = [],
            i = [],
            r = -1;
        return t.split(Pt).forEach(function(n) {
            var s = n.match(Yt) || [];
            e.push.apply(e, s), i.push(r += s.length + 1)
        }), e.c = i, e
    },
    Ti = function(t, e, i) {
        var r = "",
            n = (t + r).match(Pt),
            s = e ? "hsla(" : "rgba(",
            a = 0,
            o, u, h, l;
        if (!n) return t;
        if (n = n.map(function(c) {
                return (c = nr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
            }), i && (h = sr(t), o = i.c, o.join(r) !== h.c.join(r)))
            for (u = t.replace(Pt, "1").split(Yt), l = u.length - 1; a < l; a++) r += u[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
        if (!u)
            for (u = t.split(Pt), l = u.length - 1; a < l; a++) r += u[a] + n[a];
        return r + u[l]
    },
    Pt = function() {
        var f = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            t;
        for (t in re) f += "|" + t + "\\b";
        return new RegExp(f + ")", "gi")
    }(),
    en = /hsl[a]?\(/,
    ar = function(t) {
        var e = t.join(" "),
            i;
        if (Pt.lastIndex = 0, Pt.test(e)) return i = en.test(e), t[1] = Ti(t[1], i), t[0] = Ti(t[0], i, sr(t[1])), !0
    },
    fe, tt = function() {
        var f = Date.now,
            t = 500,
            e = 33,
            i = f(),
            r = i,
            n = 1e3 / 240,
            s = n,
            a = [],
            o, u, h, l, c, d, p = function _(m) {
                var g = f() - r,
                    y = m === !0,
                    v, T, x, S;
                if (g > t && (i += g - e), r += g, x = r - i, v = x - s, (v > 0 || y) && (S = ++l.frame, c = x - l.time * 1e3, l.time = x = x / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), y || (o = u(_)), T)
                    for (d = 0; d < a.length; d++) a[d](x, c, S, m)
            };
        return l = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(m) {
                return c / (1e3 / (m || 60))
            },
            wake: function() {
                Ni && (!Ve && Fi() && (st = Ve = window, ei = st.document || {}, it.gsap = rt, (st.gsapVersions || (st.gsapVersions = [])).push(rt.version), Vi(ye || st.GreenSockGlobals || !st.gsap && st || {}), h = st.requestAnimationFrame), o && l.sleep(), u = h || function(m) {
                    return setTimeout(m, s - l.time * 1e3 + 1 | 0)
                }, fe = 1, p(2))
            },
            sleep: function() {
                (h ? st.cancelAnimationFrame : clearTimeout)(o), fe = 0, u = oe
            },
            lagSmoothing: function(m, g) {
                t = m || 1 / 0, e = Math.min(g || 33, t)
            },
            fps: function(m) {
                n = 1e3 / (m || 240), s = l.time * 1e3 + n
            },
            add: function(m, g, y) {
                var v = g ? function(T, x, S, P) {
                    m(T, x, S, P), l.remove(v)
                } : m;
                return l.remove(m), a[y ? "unshift" : "push"](v), Qt(), v
            },
            remove: function(m, g) {
                ~(g = a.indexOf(m)) && a.splice(g, 1) && d >= g && d--
            },
            _listeners: a
        }, l
    }(),
    Qt = function() {
        return !fe && tt.wake()
    },
    O = {},
    rn = /^[\d.\-M][\d.\-,\s]/,
    nn = /["']/g,
    sn = function(t) {
        for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, u; n < s; n++) o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, u = o.substr(0, a), e[r] = isNaN(u) ? u.replace(nn, "").trim() : +u, r = o.substr(a + 1).trim();
        return e
    },
    an = function(t) {
        var e = t.indexOf("(") + 1,
            i = t.indexOf(")"),
            r = t.indexOf("(", e);
        return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
    },
    on = function(t) {
        var e = (t + "").split("("),
            i = O[e[0]];
        return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [sn(e[1])] : an(t).split(",").map(Gi)) : O._CE && rn.test(t) ? O._CE("", t) : i
    },
    or = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    ur = function f(t, e) {
        for (var i = t._first, r; i;) i instanceof H ? f(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? f(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    },
    Bt = function(t, e) {
        return t && (z(t) ? t : O[t] || on(t)) || e
    },
    Vt = function(t, e, i, r) {
        i === void 0 && (i = function(o) {
            return 1 - e(1 - o)
        }), r === void 0 && (r = function(o) {
            return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
        });
        var n = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            },
            s;
        return Z(t, function(a) {
            O[a] = it[a] = n, O[s = a.toLowerCase()] = i;
            for (var o in n) O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o]
        }), n
    },
    fr = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    },
    Re = function f(t, e, i) {
        var r = e >= 1 ? e : 1,
            n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
            s = n / Be * (Math.asin(1 / r) || 0),
            a = function(h) {
                return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Er((h - s) * n) + 1
            },
            o = t === "out" ? a : t === "in" ? function(u) {
                return 1 - a(1 - u)
            } : fr(a);
        return n = Be / n, o.config = function(u, h) {
            return f(t, u, h)
        }, o
    },
    Ee = function f(t, e) {
        e === void 0 && (e = 1.70158);
        var i = function(s) {
                return s ? --s * s * ((e + 1) * s + e) + 1 : 0
            },
            r = t === "out" ? i : t === "in" ? function(n) {
                return 1 - i(1 - n)
            } : fr(i);
        return r.config = function(n) {
            return f(t, n)
        }, r
    };
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(f, t) {
    var e = t < 5 ? t + 1 : t;
    Vt(f + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Vt("Elastic", Re("in"), Re("out"), Re());
(function(f, t) {
    var e = 1 / t,
        i = 2 * e,
        r = 2.5 * e,
        n = function(a) {
            return a < e ? f * a * a : a < i ? f * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? f * (a -= 2.25 / t) * a + .9375 : f * Math.pow(a - 2.625 / t, 2) + .984375
        };
    Vt("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Vt("Expo", function(f) {
    return f ? Math.pow(2, 10 * (f - 1)) : 0
});
Vt("Circ", function(f) {
    return -(Ei(1 - f * f) - 1)
});
Vt("Sine", function(f) {
    return f === 1 ? 1 : -Rr(f * Dr) + 1
});
Vt("Back", Ee("in"), Ee("out"), Ee());
O.SteppedEase = O.steps = it.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            s = 1 - D;
        return function(a) {
            return ((r * ce(0, s, a) | 0) + n) * i
        }
    }
};
$t.ease = O["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(f) {
    return ni += f + "," + f + "Params,"
});
var hr = function(t, e) {
        this.id = Ar++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Xi, this.set = e ? e.getSetter : fi
    },
    Zt = function() {
        function f(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ht(this, +e.duration, 1, 1), this.data = e.data, V && (this._ctx = V, V.data.push(this)), fe || tt.wake()
        }
        var t = f.prototype;
        return t.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, t.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, t.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(i, r) {
            if (Qt(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Ce(this, i), !n._dp || n.parent || Ki(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), qi(this, i, r)), this
        }, t.time = function(i, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + yi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
        }, t.totalProgress = function(i, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, t.progress = function(i, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + yi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, t.iteration = function(i, r) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Kt(this._tTime, n) + 1 : 1
        }, t.timeScale = function(i) {
            if (!arguments.length) return this._rts === -D ? 0 : this._rts;
            if (this._rts === i) return this;
            var r = this.parent && this._ts ? be(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -D ? 0 : this._rts, this.totalTime(ce(-this._delay, this._tDur, r), !0), ke(this), Vr(this)
        }, t.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps
        }, t.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && _t(r, this, i - this._delay), this
            }
            return this._start
        }, t.endTime = function(i) {
            return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(i) {
            var r = this.parent || this._dp;
            return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? be(r.rawTime(i), this) : this._tTime : this._tTime
        }, t.revert = function(i) {
            i === void 0 && (i = Lr);
            var r = W;
            return W = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), W = r, this
        }, t.globalTime = function(i) {
            for (var r = this, n = arguments.length ? i : r.rawTime(); r;) n = r._start + n / (r._ts || 1), r = r._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n
        }, t.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, xi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(i) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = i, xi(this), r ? this.time(r) : this
            }
            return this._rDelay
        }, t.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, t.seek = function(i, r) {
            return this.totalTime(nt(this, i), Q(r))
        }, t.restart = function(i, r) {
            return this.play().totalTime(i ? -this._delay : 0, Q(r))
        }, t.play = function(i, r) {
            return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
        }, t.reverse = function(i, r) {
            return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
        }, t.pause = function(i, r) {
            return i != null && this.seek(i, r), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -D, this
        }, t.isActive = function() {
            var i = this.parent || this._dp,
                r = this._start,
                n;
            return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D)
        }, t.eventCallback = function(i, r, n) {
            var s = this.vars;
            return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i]
        }, t.then = function(i) {
            var r = this;
            return new Promise(function(n) {
                var s = z(i) ? i : Wi,
                    a = function() {
                        var u = r.then;
                        r.then = null, z(s) && (s = s(r)) && (s.then || s === r) && (r.then = u), n(s), r.then = u
                    };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
            })
        }, t.kill = function() {
            ie(this)
        }, f
    }();
ft(Zt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -D,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var H = function(f) {
    Ri(t, f);

    function t(i, r) {
        var n;
        return i === void 0 && (i = {}), n = f.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Q(i.sortChildren), R && _t(i.parent || R, pt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Hi(pt(n), i.scrollTrigger), n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return se(0, arguments, this), this
    }, e.from = function(r, n, s) {
        return se(1, arguments, this), this
    }, e.fromTo = function(r, n, s, a) {
        return se(2, arguments, this), this
    }, e.set = function(r, n, s) {
        return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Y(r, n, nt(this, s), 1), this
    }, e.call = function(r, n, s) {
        return _t(this, Y.delayedCall(0, r, n), s)
    }, e.staggerTo = function(r, n, s, a, o, u, h) {
        return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = h, s.parent = this, new Y(r, s, nt(this, o)), this
    }, e.staggerFrom = function(r, n, s, a, o, u, h) {
        return s.runBackwards = 1, ne(s).immediateRender = Q(s.immediateRender), this.staggerTo(r, n, s, a, o, u, h)
    }, e.staggerFromTo = function(r, n, s, a, o, u, h, l) {
        return a.startAt = s, ne(a).immediateRender = Q(a.immediateRender), this.staggerTo(r, n, a, o, u, h, l)
    }, e.render = function(r, n, s) {
        var a = this._time,
            o = this._dirty ? this.totalDuration() : this._tDur,
            u = this._dur,
            h = r <= 0 ? 0 : q(r),
            l = this._zTime < 0 != r < 0 && (this._initted || !u),
            c, d, p, _, m, g, y, v, T, x, S, P;
        if (this !== R && h > o && r >= 0 && (h = o), h !== this._tTime || s || l) {
            if (a !== this._time && u && (h += this._time - a, r += this._time - a), c = h, T = this._start, v = this._ts, g = !v, l && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                if (S = this._yoyo, m = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(m * 100 + r, n, s);
                if (c = q(h % m), h === o ? (_ = this._repeat, c = u) : (_ = ~~(h / m), _ && _ === h / m && (c = u, _--), c > u && (c = u)), x = Kt(this._tTime, m), !a && this._tTime && x !== _ && (x = _), S && _ & 1 && (c = u - c, P = 1), _ !== x && !this._lock) {
                    var w = S && x & 1,
                        b = w === (S && _ & 1);
                    if (_ < x && (w = !w), a = w ? 0 : u, this._lock = 1, this.render(a || (P ? 0 : q(_ * m)), n, !u)._lock = 0, this._tTime = h, !n && this.parent && ut(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (u = this._dur, o = this._tDur, b && (this._lock = 2, a = w ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !g) return this;
                    ur(this, P)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = qr(this, q(a), q(c)), y && (h -= c - (c = y._start))), this._tTime = h, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !n && (ut(this, "onStart"), this._tTime !== h)) return this;
            if (c >= a && r >= 0)
                for (d = this._first; d;) {
                    if (p = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
                        if (d.parent !== this) return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !g) {
                            y = 0, p && (h += this._zTime = -D);
                            break
                        }
                    }
                    d = p
                } else {
                    d = this._last;
                    for (var k = r < 0 ? r : c; d;) {
                        if (p = d._prev, (d._act || k <= d._end) && d._ts && y !== d) {
                            if (d.parent !== this) return this.render(r, n, s);
                            if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || W && (d._initted || d._startAt)), c !== this._time || !this._ts && !g) {
                                y = 0, p && (h += this._zTime = k ? -D : D);
                                break
                            }
                        }
                        d = p
                    }
                }
            if (y && !n && (this.pause(), y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts)) return this._start = T, ke(this), this.render(r, n, s);
            this._onUpdate && !n && ut(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (h === o && this._ts > 0 || !h && this._ts < 0) && St(this, 1), !n && !(r < 0 && !a) && (h || a || !o) && (ut(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, e.add = function(r, n) {
        var s = this;
        if (yt(n) || (n = nt(this, n, r)), !(r instanceof Zt)) {
            if ($(r)) return r.forEach(function(a) {
                return s.add(a, n)
            }), this;
            if (X(r)) return this.addLabel(r, n);
            if (z(r)) r = Y.delayedCall(0, r);
            else return this
        }
        return this !== r ? _t(this, r, n) : this
    }, e.getChildren = function(r, n, s, a) {
        r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -at);
        for (var o = [], u = this._first; u;) u._start >= a && (u instanceof Y ? n && o.push(u) : (s && o.push(u), r && o.push.apply(o, u.getChildren(!0, n, s)))), u = u._next;
        return o
    }, e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === r) return n[s]
    }, e.remove = function(r) {
        return X(r) ? this.removeLabel(r) : z(r) ? this.killTweensOf(r) : (Oe(this, r), r === this._recent && (this._recent = this._last), It(this))
    }, e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(tt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), f.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function(r, n) {
        return this.labels[r] = nt(this, n), this
    }, e.removeLabel = function(r) {
        return delete this.labels[r], this
    }, e.addPause = function(r, n, s) {
        var a = Y.delayedCall(0, n || oe, s);
        return a.data = "isPause", this._hasPause = 1, _t(this, a, nt(this, r))
    }, e.removePause = function(r) {
        var n = this._first;
        for (r = nt(this, r); n;) n._start === r && n.data === "isPause" && St(n), n = n._next
    }, e.killTweensOf = function(r, n, s) {
        for (var a = this.getTweensOf(r, s), o = a.length; o--;) vt !== a[o] && a[o].kill(r, n);
        return this
    }, e.getTweensOf = function(r, n) {
        for (var s = [], a = ot(r), o = this._first, u = yt(n), h; o;) o instanceof Y ? Ir(o._targets, a) && (u ? (!vt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h), o = o._next;
        return s
    }, e.tweenTo = function(r, n) {
        n = n || {};
        var s = this,
            a = nt(s, r),
            o = n,
            u = o.startAt,
            h = o.onStart,
            l = o.onStartParams,
            c = o.immediateRender,
            d, p = Y.to(s, ft({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || D,
                onStart: function() {
                    if (s.pause(), !d) {
                        var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
                        p._dur !== m && Ht(p, m, 0, 1).render(p._time, !0, !0), d = 1
                    }
                    h && h.apply(p, l || [])
                }
            }, n));
        return c ? p.render(0) : p
    }, e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, ft({
            startAt: {
                time: nt(this, r)
            }
        }, s))
    }, e.recent = function() {
        return this._recent
    }, e.nextLabel = function(r) {
        return r === void 0 && (r = this._time), vi(this, nt(this, r))
    }, e.previousLabel = function(r) {
        return r === void 0 && (r = this._time), vi(this, nt(this, r), 1)
    }, e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D)
    }, e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, u; a;) a._start >= s && (a._start += r, a._end += r), a = a._next;
        if (n)
            for (u in o) o[u] >= s && (o[u] += r);
        return It(this)
    }, e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return f.prototype.invalidate.call(this, r)
    }, e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), It(this)
    }, e.totalDuration = function(r) {
        var n = 0,
            s = this,
            a = s._last,
            o = at,
            u, h, l;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (l = s.parent; a;) u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > o && s._sort && a._ts && !s._lock ? (s._lock = 1, _t(s, a, h - a._delay, 1)._lock = 0) : o = h, h < 0 && a._ts && (n -= h, (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = u;
            Ht(s, s === R && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, t.updateRoot = function(r) {
        if (R._ts && (qi(R, be(r, R)), Yi = tt.frame), tt.frame >= mi) {
            mi += et.autoSleep || 120;
            var n = R._first;
            if ((!n || !n._ts) && et.autoSleep && tt._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || tt.sleep()
            }
        }
    }, t
}(Zt);
ft(H.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var un = function(t, e, i, r, n, s, a) {
        var o = new j(this._pt, t, e, 0, 1, mr, null, n),
            u = 0,
            h = 0,
            l, c, d, p, _, m, g, y;
        for (o.b = i, o.e = r, i += "", r += "", (g = ~r.indexOf("random(")) && (r = ue(r)), s && (y = [i, r], s(y, t, e), i = y[0], r = y[1]), c = i.match(Me) || []; l = Me.exec(r);) p = l[0], _ = r.substring(u, l.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), p !== c[h++] && (m = parseFloat(c[h - 1]) || 0, o._pt = {
            _next: o._pt,
            p: _ || h === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? qt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0
        }, u = Me.lastIndex);
        return o.c = u < r.length ? r.substring(u, r.length) : "", o.fp = a, (Ii.test(r) || g) && (o.e = 0), this._pt = o, o
    },
    ai = function(t, e, i, r, n, s, a, o, u, h) {
        z(r) && (r = r(n || 0, t, s));
        var l = t[e],
            c = i !== "get" ? i : z(l) ? u ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
            d = z(l) ? u ? cn : dr : ui,
            p;
        if (X(r) && (~r.indexOf("random(") && (r = ue(r)), r.charAt(1) === "=" && (p = qt(c, r) + (G(c) || 0), (p || p === 0) && (r = p))), !h || c !== r || $e) return !isNaN(c * r) && r !== "" ? (p = new j(this._pt, t, e, +c || 0, r - (c || 0), typeof l == "boolean" ? pn : pr, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!l && !(e in t) && ii(e, r), un.call(this, t, e, c, r, d, o || et.stringFilter, u))
    },
    fn = function(t, e, i, r, n) {
        if (z(t) && (t = ae(t, n, e, i, r)), !ct(t) || t.style && t.nodeType || $(t) || zi(t)) return X(t) ? ae(t, n, e, i, r) : t;
        var s = {},
            a;
        for (a in t) s[a] = ae(t[a], n, e, i, r);
        return s
    },
    _r = function(t, e, i, r, n, s) {
        var a, o, u, h;
        if (J[t] && (a = new J[t]).init(n, a.rawVars ? e[t] : fn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new j(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Xt))
            for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
        return a
    },
    vt, $e, oi = function f(t, e, i) {
        var r = t.vars,
            n = r.ease,
            s = r.startAt,
            a = r.immediateRender,
            o = r.lazy,
            u = r.onUpdate,
            h = r.onUpdateParams,
            l = r.callbackScope,
            c = r.runBackwards,
            d = r.yoyoEase,
            p = r.keyframes,
            _ = r.autoRevert,
            m = t._dur,
            g = t._startAt,
            y = t._targets,
            v = t.parent,
            T = v && v.data === "nested" ? v.vars.targets : y,
            x = t._overwrite === "auto" && !Je,
            S = t.timeline,
            P, w, b, k, C, F, I, B, A, U, N, K, Ct;
        if (S && (!p || !n) && (n = "none"), t._ease = Bt(n, $t.ease), t._yEase = d ? or(Bt(d === !0 ? n : d, $t.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !S && !!r.runBackwards, !S || p && !r.stagger) {
            if (B = y[0] ? Lt(y[0]).harness : 0, K = B && r[B.prop], P = Te(r, ri), g && (g._zTime < 0 && g.progress(1), e < 0 && c && a && !_ ? g.render(-1, !0) : g.revert(c && m ? pe : zr), g._lazy = 0), s) {
                if (St(t._startAt = Y.set(y, ft({
                        data: "isStart",
                        overwrite: !1,
                        parent: v,
                        immediateRender: !0,
                        lazy: !g && Q(o),
                        startAt: null,
                        delay: 0,
                        onUpdate: u,
                        onUpdateParams: h,
                        callbackScope: l,
                        stagger: 0
                    }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W || !a && !_) && t._startAt.revert(pe), a && m && e <= 0 && i <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else if (c && m && !g) {
                if (e && (a = !1), b = ft({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !g && Q(o),
                        immediateRender: a,
                        stagger: 0,
                        parent: v
                    }, P), K && (b[B.prop] = K), St(t._startAt = Y.set(y, b)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W ? t._startAt.revert(pe) : t._startAt.render(-1, !0)), t._zTime = e, !a) f(t._startAt, D, D);
                else if (!e) return
            }
            for (t._pt = t._ptCache = 0, o = m && Q(o) || o && !m, w = 0; w < y.length; w++) {
                if (C = y[w], I = C._gsap || si(y)[w]._gsap, t._ptLookup[w] = U = {}, Ue[I.id] && wt.length && ve(), N = T === y ? w : T.indexOf(C), B && (A = new B).init(C, K || P, t, N, T) !== !1 && (t._pt = k = new j(t._pt, C, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(Mt) {
                        U[Mt] = k
                    }), A.priority && (F = 1)), !B || K)
                    for (b in P) J[b] && (A = _r(b, P, t, N, C, T)) ? A.priority && (F = 1) : U[b] = k = ai.call(t, C, b, "get", P[b], N, T, 0, r.stringFilter);
                t._op && t._op[w] && t.kill(C, t._op[w]), x && t._pt && (vt = t, R.killTweensOf(C, U, t.globalTime(e)), Ct = !t.parent, vt = 0), t._pt && o && (Ue[I.id] = 1)
            }
            F && gr(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = u, t._initted = (!t._op || t._pt) && !Ct, p && e <= 0 && S.render(at, !0, !0)
    },
    hn = function(t, e, i, r, n, s, a) {
        var o = (t._pt && t._ptCache || (t._ptCache = {}))[e],
            u, h, l, c;
        if (!o)
            for (o = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length; c--;) {
                if (u = l[c][e], u && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                if (!u) return $e = 1, t.vars[e] = "+=0", oi(t, a), $e = 0, 1;
                o.push(u)
            }
        for (c = o.length; c--;) h = o[c], u = h._pt || h, u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + s * u.c, u.c = i - u.s, h.e && (h.e = L(i) + G(h.e)), h.b && (h.b = u.s + G(h.b))
    },
    _n = function(t, e) {
        var i = t[0] ? Lt(t[0]).harness : 0,
            r = i && i.aliases,
            n, s, a, o;
        if (!r) return e;
        n = Nt({}, e);
        for (s in r)
            if (s in n)
                for (o = r[s].split(","), a = o.length; a--;) n[o[a]] = n[s];
        return n
    },
    ln = function(t, e, i, r) {
        var n = e.ease || r || "power1.inOut",
            s, a;
        if ($(e)) a = i[t] || (i[t] = []), e.forEach(function(o, u) {
            return a.push({
                t: u / (e.length - 1) * 100,
                v: o,
                e: n
            })
        });
        else
            for (s in e) a = i[s] || (i[s] = []), s === "ease" || a.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
    },
    ae = function(t, e, i, r, n) {
        return z(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? ue(t) : t
    },
    lr = ni + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    cr = {};
Z(lr + ",id,stagger,delay,duration,paused,scrollTrigger", function(f) {
    return cr[f] = 1
});
var Y = function(f) {
    Ri(t, f);

    function t(i, r, n, s) {
        var a;
        typeof r == "number" && (n.duration = r, r = n, n = null), a = f.call(this, s ? r : ne(r)) || this;
        var o = a.vars,
            u = o.duration,
            h = o.delay,
            l = o.immediateRender,
            c = o.stagger,
            d = o.overwrite,
            p = o.keyframes,
            _ = o.defaults,
            m = o.scrollTrigger,
            g = o.yoyoEase,
            y = r.parent || R,
            v = ($(i) || zi(i) ? yt(i[0]) : "length" in r) ? [i] : ot(i),
            T, x, S, P, w, b, k, C;
        if (a._targets = v.length ? si(v) : xe("GSAP target " + i + " not found. https://greensock.com", !et.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || de(u) || de(h)) {
            if (r = a.vars, T = a.timeline = new H({
                    data: "nested",
                    defaults: _ || {},
                    targets: y && y.data === "nested" ? y.vars.targets : v
                }), T.kill(), T.parent = T._dp = pt(a), T._start = 0, c || de(u) || de(h)) {
                if (P = v.length, k = c && Ji(c), ct(c))
                    for (w in c) ~lr.indexOf(w) && (C || (C = {}), C[w] = c[w]);
                for (x = 0; x < P; x++) S = Te(r, cr), S.stagger = 0, g && (S.yoyoEase = g), C && Nt(S, C), b = v[x], S.duration = +ae(u, pt(a), x, b, v), S.delay = (+ae(h, pt(a), x, b, v) || 0) - a._delay, !c && P === 1 && S.delay && (a._delay = h = S.delay, a._start += h, S.delay = 0), T.to(b, S, k ? k(x, b, v) : 0), T._ease = O.none;
                T.duration() ? u = h = 0 : a.timeline = 0
            } else if (p) {
                ne(ft(T.vars.defaults, {
                    ease: "none"
                })), T._ease = Bt(p.ease || r.ease || "none");
                var F = 0,
                    I, B, A;
                if ($(p)) p.forEach(function(U) {
                    return T.to(v, U, ">")
                }), T.duration();
                else {
                    S = {};
                    for (w in p) w === "ease" || w === "easeEach" || ln(w, p[w], S, p.easeEach);
                    for (w in S)
                        for (I = S[w].sort(function(U, N) {
                                return U.t - N.t
                            }), F = 0, x = 0; x < I.length; x++) B = I[x], A = {
                            ease: B.e,
                            duration: (B.t - (x ? I[x - 1].t : 0)) / 100 * u
                        }, A[w] = B.v, T.to(v, A, F), F += A.duration;
                    T.duration() < u && T.to({}, {
                        duration: u - T.duration()
                    })
                }
            }
            u || a.duration(u = T.duration())
        } else a.timeline = 0;
        return d === !0 && !Je && (vt = pt(a), R.killTweensOf(v), vt = 0), _t(y, pt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (l || !u && !p && a._start === q(y._time) && Q(l) && Ur(pt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -h) || 0)), m && Hi(pt(a), m), a
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var a = this._time,
            o = this._tDur,
            u = this._dur,
            h = r < 0,
            l = r > o - D && !h ? o : r < D ? 0 : r,
            c, d, p, _, m, g, y, v, T;
        if (!u) Xr(this, r, n, s);
        else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (c = l, v = this.timeline, this._repeat) {
                if (_ = u + this._rDelay, this._repeat < -1 && h) return this.totalTime(_ * 100 + r, n, s);
                if (c = q(l % _), l === o ? (p = this._repeat, c = u) : (p = ~~(l / _), p && p === l / _ && (c = u, p--), c > u && (c = u)), g = this._yoyo && p & 1, g && (T = this._yEase, c = u - c), m = Kt(this._tTime, _), c === a && !s && this._initted) return this._tTime = l, this;
                p !== m && (v && this._yEase && ur(v, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1, this.render(q(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Qi(this, h ? r : c, s, n, l)) return this._tTime = 0, this;
                if (a !== this._time) return this;
                if (u !== this._dur) return this.render(r, n, s)
            }
            if (this._tTime = l, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(c / u), this._from && (this.ratio = y = 1 - y), c && !a && !n && (ut(this, "onStart"), this._tTime !== l)) return this;
            for (d = this._pt; d;) d.r(y, d.d), d = d._next;
            v && v.render(r < 0 ? r : !c && g ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && Ye(this, r, n, s), ut(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && Ye(this, r, !0, !0), (r || !u) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && St(this, 1), !n && !(h && !a) && (l || a || g) && (ut(this, l === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, e.targets = function() {
        return this._targets
    }, e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), f.prototype.invalidate.call(this, r)
    }, e.resetTo = function(r, n, s, a) {
        fe || tt.wake(), this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            u;
        return this._initted || oi(this, o), u = this._ease(o / this._dur), hn(this, r, n, s, a, u, o) ? this.resetTo(r, n, s, a) : (Ce(this, 0), this.parent || $i(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function(r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? ie(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, vt && vt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets,
            o = r ? ot(r) : a,
            u = this._ptLookup,
            h = this._pt,
            l, c, d, p, _, m, g;
        if ((!n || n === "all") && Nr(a, o)) return n === "all" && (this._pt = 0), ie(this);
        for (l = this._op = this._op || [], n !== "all" && (X(n) && (_ = {}, Z(n, function(y) {
                return _[y] = 1
            }), n = _), n = _n(a, n)), g = a.length; g--;)
            if (~o.indexOf(a[g])) {
                c = u[g], n === "all" ? (l[g] = n, p = c, d = {}) : (d = l[g] = l[g] || {}, p = n);
                for (_ in p) m = c && c[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && Oe(this, m, "_pt"), delete c[_]), d !== "all" && (d[_] = 1)
            }
        return this._initted && !this._pt && h && ie(this), this
    }, t.to = function(r, n) {
        return new t(r, n, arguments[2])
    }, t.from = function(r, n) {
        return se(1, arguments)
    }, t.delayedCall = function(r, n, s, a) {
        return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }, t.fromTo = function(r, n, s) {
        return se(2, arguments)
    }, t.set = function(r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n)
    }, t.killTweensOf = function(r, n, s) {
        return R.killTweensOf(r, n, s)
    }, t
}(Zt);
ft(Y.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(f) {
    Y[f] = function() {
        var t = new H,
            e = qe.call(arguments, 0);
        return e.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), t[f].apply(t, e)
    }
});
var ui = function(t, e, i) {
        return t[e] = i
    },
    dr = function(t, e, i) {
        return t[e](i)
    },
    cn = function(t, e, i, r) {
        return t[e](r.fp, i)
    },
    dn = function(t, e, i) {
        return t.setAttribute(e, i)
    },
    fi = function(t, e) {
        return z(t[e]) ? dr : ti(t[e]) && t.setAttribute ? dn : ui
    },
    pr = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    },
    pn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    mr = function(t, e) {
        var i = e._pt,
            r = "";
        if (!t && e.b) r = e.b;
        else if (t === 1 && e.e) r = e.e;
        else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    },
    hi = function(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    },
    mn = function(t, e, i, r) {
        for (var n = this._pt, s; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
    },
    gn = function(t) {
        for (var e = this._pt, i, r; e;) r = e._next, e.p === t && !e.op || e.op === t ? Oe(this, e, "_pt") : e.dep || (i = 1), e = r;
        return !i
    },
    yn = function(t, e, i, r) {
        r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    },
    gr = function(t) {
        for (var e = t._pt, i, r, n, s; e;) {
            for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
            (e._prev = r ? r._prev : s) ? e._prev._next = e: n = e, (e._next = r) ? r._prev = e : s = e, e = i
        }
        t._pt = n
    },
    j = function() {
        function f(e, i, r, n, s, a, o, u, h) {
            this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || pr, this.d = o || this, this.set = u || ui, this.pr = h || 0, this._next = e, e && (e._prev = this)
        }
        var t = f.prototype;
        return t.modifier = function(i, r, n) {
            this.mSet = this.mSet || this.set, this.set = yn, this.m = i, this.mt = n, this.tween = r
        }, f
    }();
Z(ni + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(f) {
    return ri[f] = 1
});
it.TweenMax = it.TweenLite = Y;
it.TimelineLite = it.TimelineMax = H;
R = new H({
    sortChildren: !1,
    defaults: $t,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
et.stringFilter = ar;
var jt = [],
    ge = {},
    xn = [],
    bi = 0,
    Fe = function(t) {
        return (ge[t] || xn).map(function(e) {
            return e()
        })
    },
    Ke = function() {
        var t = Date.now(),
            e = [];
        t - bi > 2 && (Fe("matchMediaInit"), jt.forEach(function(i) {
            var r = i.queries,
                n = i.conditions,
                s, a, o, u;
            for (a in r) s = st.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, u = 1);
            u && (i.revert(), o && e.push(i))
        }), Fe("matchMediaRevert"), e.forEach(function(i) {
            return i.onMatch(i)
        }), bi = t, Fe("matchMedia"))
    },
    yr = function() {
        function f(e, i) {
            this.selector = i && Ge(i), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e)
        }
        var t = f.prototype;
        return t.add = function(i, r, n) {
            z(i) && (n = r, r = i, i = z);
            var s = this,
                a = function() {
                    var u = V,
                        h = s.selector,
                        l;
                    return u && u !== s && u.data.push(s), n && (s.selector = Ge(n)), V = s, l = r.apply(s, arguments), z(l) && s._r.push(l), V = u, s.selector = h, s.isReverted = !1, l
                };
            return s.last = a, i === z ? a(s) : i ? s[i] = a : a
        }, t.ignore = function(i) {
            var r = V;
            V = null, i(this), V = r
        }, t.getTweens = function() {
            var i = [];
            return this.data.forEach(function(r) {
                return r instanceof f ? i.push.apply(i, r.getTweens()) : r instanceof Y && !(r.parent && r.parent.data === "nested") && i.push(r)
            }), i
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(i, r) {
            var n = this;
            if (i) {
                var s = this.getTweens();
                this.data.forEach(function(o) {
                    o.data === "isFlip" && (o.revert(), o.getChildren(!0, !0, !1).forEach(function(u) {
                        return s.splice(s.indexOf(u), 1)
                    }))
                }), s.map(function(o) {
                    return {
                        g: o.globalTime(0),
                        t: o
                    }
                }).sort(function(o, u) {
                    return u.g - o.g || -1
                }).forEach(function(o) {
                    return o.t.revert(i)
                }), this.data.forEach(function(o) {
                    return !(o instanceof Zt) && o.revert && o.revert(i)
                }), this._r.forEach(function(o) {
                    return o(i, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(o) {
                return o.kill && o.kill()
            });
            if (this.clear(), r) {
                var a = jt.indexOf(this);
                ~a && jt.splice(a, 1)
            }
        }, t.revert = function(i) {
            this.kill(i || {})
        }, f
    }(),
    vn = function() {
        function f(e) {
            this.contexts = [], this.scope = e
        }
        var t = f.prototype;
        return t.add = function(i, r, n) {
            ct(i) || (i = {
                matches: i
            });
            var s = new yr(0, n || this.scope),
                a = s.conditions = {},
                o, u, h;
            this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
            for (u in i) u === "all" ? h = 1 : (o = st.matchMedia(i[u]), o && (jt.indexOf(s) < 0 && jt.push(s), (a[u] = o.matches) && (h = 1), o.addListener ? o.addListener(Ke) : o.addEventListener("change", Ke)));
            return h && r(s), this
        }, t.revert = function(i) {
            this.kill(i || {})
        }, t.kill = function(i) {
            this.contexts.forEach(function(r) {
                return r.kill(i, !0)
            })
        }, f
    }(),
    we = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(r) {
                return tn(r)
            })
        },
        timeline: function(t) {
            return new H(t)
        },
        getTweensOf: function(t, e) {
            return R.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, r) {
            X(t) && (t = ot(t)[0]);
            var n = Lt(t || {}).get,
                s = i ? Wi : Gi;
            return i === "native" && (i = ""), t && (e ? s((J[e] && J[e].get || n)(t, e, i, r)) : function(a, o, u) {
                return s((J[a] && J[a].get || n)(t, a, o, u))
            })
        },
        quickSetter: function(t, e, i) {
            if (t = ot(t), t.length > 1) {
                var r = t.map(function(h) {
                        return rt.quickSetter(h, e, i)
                    }),
                    n = r.length;
                return function(h) {
                    for (var l = n; l--;) r[l](h)
                }
            }
            t = t[0] || {};
            var s = J[e],
                a = Lt(t),
                o = a.harness && (a.harness.aliases || {})[e] || e,
                u = s ? function(h) {
                    var l = new s;
                    Xt._pt = 0, l.init(t, i ? h + i : h, Xt, 0, [t]), l.render(1, l), Xt._pt && hi(1, Xt)
                } : a.set(t, o);
            return s ? u : function(h) {
                return u(t, o, i ? h + i : h, a, 1)
            }
        },
        quickTo: function(t, e, i) {
            var r, n = rt.to(t, Nt((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})),
                s = function(o, u, h) {
                    return n.resetTo(e, o, u, h)
                };
            return s.tween = n, s
        },
        isTweening: function(t) {
            return R.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Bt(t.ease, $t.ease)), gi($t, t || {})
        },
        config: function(t) {
            return gi(et, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                r = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (r || "").split(",").forEach(function(a) {
                return a && !J[a] && !it[a] && xe(e + " effect requires " + a + " plugin.")
            }), De[e] = function(a, o, u) {
                return i(ot(a), ft(o || {}, n), u)
            }, s && (H.prototype[e] = function(a, o, u) {
                return this.add(De[e](a, ct(o) ? o : (u = o) && {}, this), u)
            })
        },
        registerEase: function(t, e) {
            O[t] = Bt(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Bt(t, e) : O
        },
        getById: function(t) {
            return R.getById(t)
        },
        exportRoot: function(t, e) {
            t === void 0 && (t = {});
            var i = new H(t),
                r, n;
            for (i.smoothChildTiming = Q(t.smoothChildTiming), R.remove(i), i._dp = 0, i._time = i._tTime = R._time, r = R._first; r;) n = r._next, (e || !(!r._dur && r instanceof Y && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
            return _t(R, i, 0), i
        },
        context: function(t, e) {
            return t ? new yr(t, e) : V
        },
        matchMedia: function(t) {
            return new vn(t)
        },
        matchMediaRefresh: function() {
            return jt.forEach(function(t) {
                var e = t.conditions,
                    i, r;
                for (r in e) e[r] && (e[r] = !1, i = 1);
                i && t.revert()
            }) || Ke()
        },
        addEventListener: function(t, e) {
            var i = ge[t] || (ge[t] = []);
            ~i.indexOf(e) || i.push(e)
        },
        removeEventListener: function(t, e) {
            var i = ge[t],
                r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: Zr,
            wrapYoyo: jr,
            distribute: Ji,
            random: er,
            snap: tr,
            normalize: Qr,
            getUnit: G,
            clamp: Wr,
            splitColor: nr,
            toArray: ot,
            selector: Ge,
            mapRange: rr,
            pipe: Kr,
            unitize: Hr,
            interpolate: Jr,
            shuffle: ji
        },
        install: Vi,
        effects: De,
        ticker: tt,
        updateRoot: H.updateRoot,
        plugins: J,
        globalTimeline: R,
        core: {
            PropTween: j,
            globals: Ui,
            Tween: Y,
            Timeline: H,
            Animation: Zt,
            getCache: Lt,
            _removeLinkedListItem: Oe,
            reverting: function() {
                return W
            },
            context: function(t) {
                return t && V && (V.data.push(t), t._ctx = V), V
            },
            suppressOverwrites: function(t) {
                return Je = t
            }
        }
    };
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(f) {
    return we[f] = Y[f]
});
tt.add(H.updateRoot);
Xt = we.to({}, {
    duration: 0
});
var Tn = function(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    },
    bn = function(t, e) {
        var i = t._targets,
            r, n, s;
        for (r in e)
            for (n = i.length; n--;) s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Tn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r))
    },
    ze = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(r, n, s) {
                s._onInit = function(a) {
                    var o, u;
                    if (X(n) && (o = {}, Z(n, function(h) {
                            return o[h] = 1
                        }), n = o), e) {
                        o = {};
                        for (u in n) o[u] = e(n[u]);
                        n = o
                    }
                    bn(a, n)
                }
            }
        }
    },
    rt = we.registerPlugin({
        name: "attr",
        init: function(t, e, i, r, n) {
            var s, a, o;
            this.tween = i;
            for (s in e) o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s)
        },
        render: function(t, e) {
            for (var i = e._pt; i;) W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
    }, ze("roundProps", We), ze("modifiers"), ze("snap", tr)) || we;
Y.version = H.version = rt.version = "3.11.4";
Ni = 1;
Fi() && Qt();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var wi, Tt, Gt, _i, zt, Pi, li, wn = function() {
        return typeof window < "u"
    },
    xt = {},
    Ft = 180 / Math.PI,
    Wt = Math.PI / 180,
    Ut = Math.atan2,
    Si = 1e8,
    ci = /([A-Z])/g,
    Pn = /(left|right|width|margin|padding|x)/i,
    Sn = /[\s,\(]\S/,
    gt = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    He = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    On = function(t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    kn = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    },
    Cn = function(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    },
    xr = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    vr = function(t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    },
    Mn = function(t, e, i) {
        return t.style[e] = i
    },
    Dn = function(t, e, i) {
        return t.style.setProperty(e, i)
    },
    An = function(t, e, i) {
        return t._gsap[e] = i
    },
    Rn = function(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    },
    En = function(t, e, i, r, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(n, s)
    },
    Fn = function(t, e, i, r, n) {
        var s = t._gsap;
        s[e] = i, s.renderTransform(n, s)
    },
    E = "transform",
    ht = E + "Origin",
    zn = function(t, e) {
        var i = this,
            r = this.target,
            n = r.style;
        if (t in xt) {
            if (this.tfm = this.tfm || {}, t !== "transform" && (t = gt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
                    return i.tfm[s] = mt(r, s)
                }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : mt(r, t)), this.props.indexOf(E) >= 0) return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ht, e, "")), t = E
        }(n || e) && this.props.push(t, e, n[t])
    },
    Tr = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    Ln = function() {
        var t = this.props,
            e = this.target,
            i = e.style,
            r = e._gsap,
            n, s;
        for (n = 0; n < t.length; n += 3) t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].replace(ci, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) r[s] = this.tfm[s];
            r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = li(), n && !n.isStart && !i[E] && (Tr(i), r.uncache = 1)
        }
    },
    br = function(t, e) {
        var i = {
            target: t,
            props: [],
            revert: Ln,
            save: zn
        };
        return e && e.split(",").forEach(function(r) {
            return i.save(r)
        }), i
    },
    wr, Qe = function(t, e) {
        var i = Tt.createElementNS ? Tt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tt.createElement(t);
        return i.style ? i : Tt.createElement(t)
    },
    lt = function f(t, e, i) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(ci, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && f(t, Jt(e) || e, 1) || ""
    },
    Oi = "O,Moz,ms,Ms,Webkit".split(","),
    Jt = function(t, e, i) {
        var r = e || zt,
            n = r.style,
            s = 5;
        if (t in n && !i) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Oi[s] + t in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Oi[s] : "") + t
    },
    Ze = function() {
        wn() && window.document && (wi = window, Tt = wi.document, Gt = Tt.documentElement, zt = Qe("div") || {
            style: {}
        }, Qe("div"), E = Jt(E), ht = E + "Origin", zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wr = !!Jt("perspective"), li = rt.core.reverting, _i = 1)
    },
    Le = function f(t) {
        var e = Qe("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Gt.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = f
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Gt.removeChild(e), this.style.cssText = n, s
    },
    ki = function(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    },
    Pr = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch {
            e = Le.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Le || (e = Le.call(t, !0)), e && !e.width && !e.x && !e.y ? {
            x: +ki(t, ["x", "cx", "x1"]) || 0,
            y: +ki(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
    },
    Sr = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Pr(t))
    },
    he = function(t, e) {
        if (e) {
            var i = t.style;
            e in xt && e !== ht && (e = E), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(ci, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    },
    bt = function(t, e, i, r, n, s) {
        var a = new j(t._pt, e, i, 0, 1, s ? vr : xr);
        return t._pt = a, a.b = r, a.e = n, t._props.push(i), a
    },
    Ci = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    In = {
        grid: 1,
        flex: 1
    },
    Ot = function f(t, e, i, r) {
        var n = parseFloat(i) || 0,
            s = (i + "").trim().substr((n + "").length) || "px",
            a = zt.style,
            o = Pn.test(e),
            u = t.tagName.toLowerCase() === "svg",
            h = (u ? "client" : "offset") + (o ? "Width" : "Height"),
            l = 100,
            c = r === "px",
            d = r === "%",
            p, _, m, g;
        return r === s || !n || Ci[r] || Ci[s] ? n : (s !== "px" && !c && (n = f(t, e, i, "px")), g = t.getCTM && Sr(t), (d || s === "%") && (xt[e] || ~e.indexOf("adius")) ? (p = g ? t.getBBox()[o ? "width" : "height"] : t[h], L(d ? n / p * l : n / 100 * p)) : (a[o ? "width" : "height"] = l + (c ? s : r), _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, g && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Tt || !_.appendChild) && (_ = Tt.body), m = _._gsap, m && d && m.width && o && m.time === tt.time && !m.uncache ? L(n / m.width * l) : ((d || s === "%") && !In[lt(_, "display")] && (a.position = lt(t, "position")), _ === t && (a.position = "static"), _.appendChild(zt), p = zt[h], _.removeChild(zt), a.position = "absolute", o && d && (m = Lt(_), m.time = tt.time, m.width = _[h]), L(c ? p * n / l : p && n ? l / p * n : 0))))
    },
    mt = function(t, e, i, r) {
        var n;
        return _i || Ze(), e in gt && e !== "transform" && (e = gt[e], ~e.indexOf(",") && (e = e.split(",")[0])), xt[e] && e !== "transform" ? (n = le(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Se(lt(t, ht)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Pe[e] && Pe[e](t, e, i) || lt(t, e) || Xi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ot(t, e, n, i) + i : n
    },
    Bn = function(t, e, i, r) {
        if (!i || i === "none") {
            var n = Jt(e, t, 1),
                s = n && lt(t, n, 1);
            s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = lt(t, "borderTopColor"))
        }
        var a = new j(this._pt, t.style, e, 0, 1, mr),
            o = 0,
            u = 0,
            h, l, c, d, p, _, m, g, y, v, T, x;
        if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (t.style[e] = r, r = lt(t, e) || r, t.style[e] = i), h = [i, r], ar(h), i = h[0], r = h[1], c = i.match(Yt) || [], x = r.match(Yt) || [], x.length) {
            for (; l = Yt.exec(r);) m = l[0], y = r.substring(o, l.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), m !== (_ = c[u++] || "") && (d = parseFloat(_) || 0, T = _.substr((d + "").length), m.charAt(1) === "=" && (m = qt(d, m) + T), g = parseFloat(m), v = m.substr((g + "").length), o = Yt.lastIndex - v.length, v || (v = v || et.units[e] || T, o === r.length && (r += v, a.e += v)), T !== v && (d = Ot(t, e, _, v) || 0), a._pt = {
                _next: a._pt,
                p: y || u === 1 ? y : ",",
                s: d,
                c: g - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0
            });
            a.c = o < r.length ? r.substring(o, r.length) : ""
        } else a.r = e === "display" && r === "none" ? vr : xr;
        return Ii.test(r) && (a.e = 0), this._pt = a, a
    },
    Mi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Nn = function(t) {
        var e = t.split(" "),
            i = e[0],
            r = e[1] || "50%";
        return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Mi[i] || i, e[1] = Mi[r] || r, e.join(" ")
    },
    Vn = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i = e.t,
                r = i.style,
                n = e.u,
                s = i._gsap,
                a, o, u;
            if (n === "all" || n === !0) r.cssText = "", o = 1;
            else
                for (n = n.split(","), u = n.length; --u > -1;) a = n[u], xt[a] && (o = 1, a = a === "transformOrigin" ? ht : E), he(i, a);
            o && (he(i, E), s && (s.svg && i.removeAttribute("transform"), le(i, 1), s.uncache = 1, Tr(r)))
        }
    },
    Pe = {
        clearProps: function(t, e, i, r, n) {
            if (n.data !== "isFromStart") {
                var s = t._pt = new j(t._pt, e, i, 0, 0, Vn);
                return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
            }
        }
    },
    _e = [1, 0, 0, 1, 0, 0],
    Or = {},
    kr = function(t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    },
    Di = function(t) {
        var e = lt(t, E);
        return kr(e) ? _e : e.substr(7).match(Li).map(L)
    },
    di = function(t, e) {
        var i = t._gsap || Lt(t),
            r = t.style,
            n = Di(t),
            s, a, o, u;
        return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? _e : n) : (n === _e && !t.offsetParent && t !== Gt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (u = 1, a = t.nextElementSibling, Gt.appendChild(t)), n = Di(t), o ? r.display = o : he(t, "display"), u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Gt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    je = function(t, e, i, r, n, s) {
        var a = t._gsap,
            o = n || di(t, !0),
            u = a.xOrigin || 0,
            h = a.yOrigin || 0,
            l = a.xOffset || 0,
            c = a.yOffset || 0,
            d = o[0],
            p = o[1],
            _ = o[2],
            m = o[3],
            g = o[4],
            y = o[5],
            v = e.split(" "),
            T = parseFloat(v[0]) || 0,
            x = parseFloat(v[1]) || 0,
            S, P, w, b;
        i ? o !== _e && (P = d * m - p * _) && (w = T * (m / P) + x * (-_ / P) + (_ * y - m * g) / P, b = T * (-p / P) + x * (d / P) - (d * y - p * g) / P, T = w, x = b) : (S = Pr(t), T = S.x + (~v[0].indexOf("%") ? T / 100 * S.width : T), x = S.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * S.height : x)), r || r !== !1 && a.smooth ? (g = T - u, y = x - h, a.xOffset = l + (g * d + y * _) - g, a.yOffset = c + (g * p + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = x, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[ht] = "0px 0px", s && (bt(s, a, "xOrigin", u, T), bt(s, a, "yOrigin", h, x), bt(s, a, "xOffset", l, a.xOffset), bt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + x)
    },
    le = function(t, e) {
        var i = t._gsap || new hr(t);
        if ("x" in i && !e && !i.uncache) return i;
        var r = t.style,
            n = i.scaleX < 0,
            s = "px",
            a = "deg",
            o = getComputedStyle(t),
            u = lt(t, ht) || "0",
            h, l, c, d, p, _, m, g, y, v, T, x, S, P, w, b, k, C, F, I, B, A, U, N, K, Ct, Mt, te, Dt, pi, dt, At;
        return h = l = c = _ = m = g = y = v = T = 0, d = p = 1, i.svg = !!(t.getCTM && Sr(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[E] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[E] !== "none" ? o[E] : "")), r.scale = r.rotate = r.translate = "none"), P = di(t, i.svg), i.svg && (i.uncache ? (K = t.getBBox(), u = i.xOrigin - K.x + "px " + (i.yOrigin - K.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), je(t, N || u, !!N || i.originIsAbsolute, i.smooth !== !1, P)), x = i.xOrigin || 0, S = i.yOrigin || 0, P !== _e && (C = P[0], F = P[1], I = P[2], B = P[3], h = A = P[4], l = U = P[5], P.length === 6 ? (d = Math.sqrt(C * C + F * F), p = Math.sqrt(B * B + I * I), _ = C || F ? Ut(F, C) * Ft : 0, y = I || B ? Ut(I, B) * Ft + _ : 0, y && (p *= Math.abs(Math.cos(y * Wt))), i.svg && (h -= x - (x * C + S * I), l -= S - (x * F + S * B))) : (At = P[6], pi = P[7], Mt = P[8], te = P[9], Dt = P[10], dt = P[11], h = P[12], l = P[13], c = P[14], w = Ut(At, Dt), m = w * Ft, w && (b = Math.cos(-w), k = Math.sin(-w), N = A * b + Mt * k, K = U * b + te * k, Ct = At * b + Dt * k, Mt = A * -k + Mt * b, te = U * -k + te * b, Dt = At * -k + Dt * b, dt = pi * -k + dt * b, A = N, U = K, At = Ct), w = Ut(-I, Dt), g = w * Ft, w && (b = Math.cos(-w), k = Math.sin(-w), N = C * b - Mt * k, K = F * b - te * k, Ct = I * b - Dt * k, dt = B * k + dt * b, C = N, F = K, I = Ct), w = Ut(F, C), _ = w * Ft, w && (b = Math.cos(w), k = Math.sin(w), N = C * b + F * k, K = A * b + U * k, F = F * b - C * k, U = U * b - A * k, C = N, A = K), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, g = 180 - g), d = L(Math.sqrt(C * C + F * F + I * I)), p = L(Math.sqrt(U * U + At * At)), w = Ut(A, U), y = Math.abs(w) > 2e-4 ? w * Ft : 0, T = dt ? 1 / (dt < 0 ? -dt : dt) : 0), i.svg && (N = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !kr(lt(t, E)), N && t.setAttribute("transform", N))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = L(d), i.scaleY = L(p), i.rotation = L(_) + a, i.rotationX = L(m) + a, i.rotationY = L(g) + a, i.skewX = y + a, i.skewY = v + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[ht] = Se(u)), i.xOffset = i.yOffset = 0, i.force3D = et.force3D, i.renderTransform = i.svg ? Yn : wr ? Cr : Un, i.uncache = 0, i
    },
    Se = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    Ie = function(t, e, i) {
        var r = G(e);
        return L(parseFloat(e) + parseFloat(Ot(t, "x", i + "px", r))) + r
    },
    Un = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Cr(t, e)
    },
    Rt = "0deg",
    ee = "0px",
    Et = ") ",
    Cr = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            o = i.z,
            u = i.rotation,
            h = i.rotationY,
            l = i.rotationX,
            c = i.skewX,
            d = i.skewY,
            p = i.scaleX,
            _ = i.scaleY,
            m = i.transformPerspective,
            g = i.force3D,
            y = i.target,
            v = i.zOrigin,
            T = "",
            x = g === "auto" && t && t !== 1 || g === !0;
        if (v && (l !== Rt || h !== Rt)) {
            var S = parseFloat(h) * Wt,
                P = Math.sin(S),
                w = Math.cos(S),
                b;
            S = parseFloat(l) * Wt, b = Math.cos(S), s = Ie(y, s, P * b * -v), a = Ie(y, a, -Math.sin(S) * -v), o = Ie(y, o, w * b * -v + v)
        }
        m !== ee && (T += "perspective(" + m + Et), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (x || s !== ee || a !== ee || o !== ee) && (T += o !== ee || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Et), u !== Rt && (T += "rotate(" + u + Et), h !== Rt && (T += "rotateY(" + h + Et), l !== Rt && (T += "rotateX(" + l + Et), (c !== Rt || d !== Rt) && (T += "skew(" + c + ", " + d + Et), (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Et), y.style[E] = T || "translate(0, 0)"
    },
    Yn = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            o = i.rotation,
            u = i.skewX,
            h = i.skewY,
            l = i.scaleX,
            c = i.scaleY,
            d = i.target,
            p = i.xOrigin,
            _ = i.yOrigin,
            m = i.xOffset,
            g = i.yOffset,
            y = i.forceCSS,
            v = parseFloat(s),
            T = parseFloat(a),
            x, S, P, w, b;
        o = parseFloat(o), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, o += h), o || u ? (o *= Wt, u *= Wt, x = Math.cos(o) * l, S = Math.sin(o) * l, P = Math.sin(o - u) * -c, w = Math.cos(o - u) * c, u && (h *= Wt, b = Math.tan(u - h), b = Math.sqrt(1 + b * b), P *= b, w *= b, h && (b = Math.tan(h), b = Math.sqrt(1 + b * b), x *= b, S *= b)), x = L(x), S = L(S), P = L(P), w = L(w)) : (x = l, w = c, S = P = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Ot(d, "x", s, "px"), T = Ot(d, "y", a, "px")), (p || _ || m || g) && (v = L(v + p - (p * x + _ * P) + m), T = L(T + _ - (p * S + _ * w) + g)), (r || n) && (b = d.getBBox(), v = L(v + r / 100 * b.width), T = L(T + n / 100 * b.height)), b = "matrix(" + x + "," + S + "," + P + "," + w + "," + v + "," + T + ")", d.setAttribute("transform", b), y && (d.style[E] = b)
    },
    Xn = function(t, e, i, r, n) {
        var s = 360,
            a = X(n),
            o = parseFloat(n) * (a && ~n.indexOf("rad") ? Ft : 1),
            u = o - r,
            h = r + u + "deg",
            l, c;
        return a && (l = n.split("_")[1], l === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), l === "cw" && u < 0 ? u = (u + s * Si) % s - ~~(u / s) * s : l === "ccw" && u > 0 && (u = (u - s * Si) % s - ~~(u / s) * s)), t._pt = c = new j(t._pt, e, i, r, u, On), c.e = h, c.u = "deg", t._props.push(i), c
    },
    Ai = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    qn = function(t, e, i) {
        var r = Ai({}, i._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = i.style,
            a, o, u, h, l, c, d, p;
        r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[E] = e, a = le(i, 1), he(i, E), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[E], s[E] = e, a = le(i, 1), s[E] = u);
        for (o in xt) u = r[o], h = a[o], u !== h && n.indexOf(o) < 0 && (d = G(u), p = G(h), l = d !== p ? Ot(i, o, u, p) : parseFloat(u), c = parseFloat(h), t._pt = new j(t._pt, a, o, l, c - l, He), t._pt.u = p || 0, t._props.push(o));
        Ai(a, r)
    };
Z("padding,margin,Width,Radius", function(f, t) {
    var e = "Top",
        i = "Right",
        r = "Bottom",
        n = "Left",
        s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
            return t < 2 ? f + a : "border" + a + f
        });
    Pe[t > 1 ? "border" + f : f] = function(a, o, u, h, l) {
        var c, d;
        if (arguments.length < 4) return c = s.map(function(p) {
            return mt(a, p, u)
        }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
        c = (h + "").split(" "), d = {}, s.forEach(function(p, _) {
            return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
        }), a.init(o, d, l)
    }
});
var Mr = {
    name: "css",
    register: Ze,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props,
            a = t.style,
            o = i.vars.startAt,
            u, h, l, c, d, p, _, m, g, y, v, T, x, S, P, w;
        _i || Ze(), this.styles = this.styles || br(t), w = this.styles.props, this.tween = i;
        for (_ in e)
            if (_ !== "autoRound" && (h = e[_], !(J[_] && _r(_, e, i, r, t, n)))) {
                if (d = typeof h, p = Pe[_], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = ue(h)), p) p(this, t, _, h, i) && (P = 1);
                else if (_.substr(0, 2) === "--") u = (getComputedStyle(t).getPropertyValue(_) + "").trim(), h += "", Pt.lastIndex = 0, Pt.test(u) || (m = G(u), g = G(h)), g ? m !== g && (u = Ot(t, _, u, g) + g) : m && (h += m), this.add(a, "setProperty", u, h, r, n, 0, 0, _), s.push(_), w.push(_, 0, a[_]);
                else if (d !== "undefined") {
                    if (o && _ in o ? (u = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_], X(u) && ~u.indexOf("random(") && (u = ue(u)), G(u + "") || (u += et.units[_] || G(mt(t, _)) || ""), (u + "").charAt(1) === "=" && (u = mt(t, _))) : u = mt(t, _), c = parseFloat(u), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), l = parseFloat(h), _ in gt && (_ === "autoAlpha" && (c === 1 && mt(t, "visibility") === "hidden" && l && (c = 0), w.push("visibility", 0, a.visibility), bt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), _ !== "scale" && _ !== "transform" && (_ = gt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), v = _ in xt, v) {
                        if (this.styles.save(_), T || (x = t._gsap, x.renderTransform && !e.parseTransform || le(t, e.parseTransform), S = e.smoothOrigin !== !1 && x.smooth, T = this._pt = new j(this._pt, a, E, 0, 1, x.renderTransform, x, 0, -1), T.dep = 1), _ === "scale") this._pt = new j(this._pt, x, "scaleY", x.scaleY, (y ? qt(x.scaleY, y + l) : l) - x.scaleY || 0, He), this._pt.u = 0, s.push("scaleY", _), _ += "X";
                        else if (_ === "transformOrigin") {
                            w.push(ht, 0, a[ht]), h = Nn(h), x.svg ? je(t, h, 0, S, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0, g !== x.zOrigin && bt(this, x, "zOrigin", x.zOrigin, g), bt(this, a, _, Se(u), Se(h)));
                            continue
                        } else if (_ === "svgOrigin") {
                            je(t, h, 1, S, 0, this);
                            continue
                        } else if (_ in Or) {
                            Xn(this, x, _, c, y ? qt(c, y + h) : h);
                            continue
                        } else if (_ === "smoothOrigin") {
                            bt(this, x, "smooth", x.smooth, h);
                            continue
                        } else if (_ === "force3D") {
                            x[_] = h;
                            continue
                        } else if (_ === "transform") {
                            qn(this, h, t);
                            continue
                        }
                    } else _ in a || (_ = Jt(_) || _);
                    if (v || (l || l === 0) && (c || c === 0) && !Sn.test(h) && _ in a) m = (u + "").substr((c + "").length), l || (l = 0), g = G(h) || (_ in et.units ? et.units[_] : m), m !== g && (c = Ot(t, _, u, g)), this._pt = new j(this._pt, v ? x : a, _, c, (y ? qt(c, y + l) : l) - c, !v && (g === "px" || _ === "zIndex") && e.autoRound !== !1 ? Cn : He), this._pt.u = g || 0, m !== g && g !== "%" && (this._pt.b = u, this._pt.r = kn);
                    else if (_ in a) Bn.call(this, t, _, u, y ? y + h : h);
                    else if (_ in t) this.add(t, _, u || t[_], y ? y + h : h, r, n);
                    else if (_ !== "parseTransform") {
                        ii(_, h);
                        continue
                    }
                    v || (_ in a ? w.push(_, 0, a[_]) : w.push(_, 1, u || t[_])), s.push(_)
                }
            }
        P && gr(this)
    },
    render: function(t, e) {
        if (e.tween._time || !li())
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
        else e.styles.revert()
    },
    get: mt,
    aliases: gt,
    getSetter: function(t, e, i) {
        var r = gt[e];
        return r && r.indexOf(",") < 0 && (e = r), e in xt && e !== ht && (t._gsap.x || mt(t, "x")) ? i && Pi === i ? e === "scale" ? Rn : An : (Pi = i || {}) && (e === "scale" ? En : Fn) : t.style && !ti(t.style[e]) ? Mn : ~e.indexOf("-") ? Dn : fi(t, e)
    },
    core: {
        _removeProperty: he,
        _getMatrix: di
    }
};
rt.utils.checkPrefix = Jt;
rt.core.getStyleSaver = br;
(function(f, t, e, i) {
    var r = Z(f + "," + t + "," + e, function(n) {
        xt[n] = 1
    });
    Z(t, function(n) {
        et.units[n] = "deg", Or[n] = 1
    }), gt[r[13]] = f + "," + t, Z(i, function(n) {
        var s = n.split(":");
        gt[s[1]] = r[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(f) {
    et.units[f] = "px"
});
rt.registerPlugin(Mr);
var Gn = rt.registerPlugin(Mr) || rt;
Gn.core.Tween;
export {
    Gn as g
};