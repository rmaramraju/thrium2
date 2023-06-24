import {
    g as to
} from "./index-10963069.js";

function hn(i, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
    }
}

function ro(i, e, n) {
    return e && hn(i.prototype, e), n && hn(i, n), i
}
/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ne, Qr, ut, Ft, Lt, tr, An, Xt, fr, On, Dt, vt, Fn, Ln = function() {
        return Ne || typeof window < "u" && (Ne = window.gsap) && Ne.registerPlugin && Ne
    },
    zn = 1,
    jt = [],
    B = [],
    Et = [],
    pr = Date.now,
    jr = function(e, n) {
        return n
    },
    no = function() {
        var e = fr.core,
            n = e.bridge || {},
            r = e._scrollers,
            t = e._proxies;
        r.push.apply(r, B), t.push.apply(t, Et), B = r, Et = t, jr = function(a, s) {
            return n[a](s)
        }
    },
    It = function(e, n) {
        return ~Et.indexOf(e) && Et[Et.indexOf(e) + 1][n]
    },
    dr = function(e) {
        return !!~On.indexOf(e)
    },
    tt = function(e, n, r, t, o) {
        return e.addEventListener(n, r, {
            passive: !t,
            capture: !!o
        })
    },
    Je = function(e, n, r, t) {
        return e.removeEventListener(n, r, !!t)
    },
    wr = "scrollLeft",
    br = "scrollTop",
    en = function() {
        return Dt && Dt.isPressed || B.cache++
    },
    Br = function(e, n) {
        var r = function t(o) {
            if (o || o === 0) {
                zn && (ut.history.scrollRestoration = "manual");
                var a = Dt && Dt.isPressed;
                o = t.v = Math.round(o) || (Dt && Dt.iOS ? 1 : 0), e(o), t.cacheID = B.cache, a && jr("ss", o)
            } else(n || B.cache !== t.cacheID || jr("ref")) && (t.cacheID = B.cache, t.v = e());
            return t.v + t.offset
        };
        return r.offset = 0, e && r
    },
    je = {
        s: wr,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Br(function(i) {
            return arguments.length ? ut.scrollTo(i, Re.sc()) : ut.pageXOffset || Ft[wr] || Lt[wr] || tr[wr] || 0
        })
    },
    Re = {
        s: br,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: je,
        sc: Br(function(i) {
            return arguments.length ? ut.scrollTo(je.sc(), i) : ut.pageYOffset || Ft[br] || Lt[br] || tr[br] || 0
        })
    },
    rt = function(e) {
        return Ne.utils.toArray(e)[0] || (typeof e == "string" && Ne.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    Yt = function(e, n) {
        var r = n.s,
            t = n.sc;
        dr(e) && (e = Ft.scrollingElement || Lt);
        var o = B.indexOf(e),
            a = t === Re.sc ? 1 : 2;
        !~o && (o = B.push(e) - 1), B[o + a] || e.addEventListener("scroll", en);
        var s = B[o + a],
            g = s || (B[o + a] = Br(It(e, r), !0) || (dr(e) ? t : Br(function(P) {
                return arguments.length ? e[r] = P : e[r]
            })));
        return g.target = e, s || (g.smooth = Ne.getProperty(e, "scrollBehavior") === "smooth"), g
    },
    tn = function(e, n, r) {
        var t = e,
            o = e,
            a = pr(),
            s = a,
            g = n || 50,
            P = Math.max(500, g * 3),
            D = function(_, ae) {
                var ee = pr();
                ae || ee - a > g ? (o = t, t = _, s = a, a = ee) : r ? t += _ : t = o + (_ - o) / (ee - s) * (a - s)
            },
            M = function() {
                o = t = r ? 0 : t, s = a = 0
            },
            f = function(_) {
                var ae = s,
                    ee = o,
                    z = pr();
                return (_ || _ === 0) && _ !== t && D(_), a === s || z - s > P ? 0 : (t + (r ? ee : -ee)) / ((r ? z : a) - ae) * 1e3
            };
        return {
            update: D,
            reset: M,
            getVelocity: f
        }
    },
    sr = function(e, n) {
        return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    _n = function(e) {
        var n = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(n) >= Math.abs(r) ? n : r
    },
    In = function() {
        fr = Ne.core.globals().ScrollTrigger, fr && fr.core && no()
    },
    Yn = function(e) {
        return Ne = e || Ln(), Ne && typeof document < "u" && document.body && (ut = window, Ft = document, Lt = Ft.documentElement, tr = Ft.body, On = [ut, Ft, Lt, tr], Ne.utils.clamp, Fn = Ne.core.context || function() {}, Xt = "onpointerenter" in tr ? "pointer" : "mouse", An = Pe.isTouch = ut.matchMedia && ut.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ut || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, vt = Pe.eventTypes = ("ontouchstart" in Lt ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Lt ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return zn = 0
        }, 500), In(), Qr = 1), Qr
    };
je.op = Re;
B.cache = 0;
var Pe = function() {
    function i(n) {
        this.init(n)
    }
    var e = i.prototype;
    return e.init = function(r) {
        Qr || Yn(Ne) || console.warn("Please gsap.registerPlugin(Observer)"), fr || In();
        var t = r.tolerance,
            o = r.dragMinimum,
            a = r.type,
            s = r.target,
            g = r.lineHeight,
            P = r.debounce,
            D = r.preventDefault,
            M = r.onStop,
            f = r.onStopDelay,
            p = r.ignore,
            _ = r.wheelSpeed,
            ae = r.event,
            ee = r.onDragStart,
            z = r.onDragEnd,
            be = r.onDrag,
            j = r.onPress,
            A = r.onRelease,
            E = r.onRight,
            O = r.onLeft,
            C = r.onUp,
            se = r.onDown,
            We = r.onChangeX,
            R = r.onChangeY,
            $ = r.onChange,
            H = r.onToggleX,
            nt = r.onToggleY,
            xe = r.onHover,
            me = r.onHoverEnd,
            q = r.onMove,
            Ye = r.ignoreCheck,
            te = r.isNormalizer,
            ye = r.onGestureStart,
            l = r.onGestureEnd,
            Z = r.onWheel,
            ft = r.onEnable,
            re = r.onDisable,
            Q = r.onClick,
            Ge = r.scrollSpeed,
            ne = r.capture,
            Me = r.allowClicks,
            De = r.lockAxis,
            Ue = r.onLockAxis;
        this.target = s = rt(s) || Lt, this.vars = r, p && (p = Ne.utils.toArray(p)), t = t || 1e-9, o = o || 0, _ = _ || 1, Ge = Ge || 1, a = a || "wheel,touch,pointer", P = P !== !1, g || (g = parseFloat(ut.getComputedStyle(tr).lineHeight) || 22);
        var Ae, Ke, X, Se, Ve, ot, Oe, u = this,
            it = 0,
            ce = 0,
            pt = Yt(s, je),
            xt = Yt(s, Re),
            ht = pt(),
            Te = xt(),
            St = ~a.indexOf("touch") && !~a.indexOf("pointer") && vt[0] === "pointerdown",
            Fe = dr(s),
            N = s.ownerDocument || Ft,
            Be = [0, 0, 0],
            ke = [0, 0, 0],
            _t = 0,
            pe = function() {
                return _t = pr()
            },
            $e = function(m, d) {
                return (u.event = m) && p && ~p.indexOf(m.target) || d && St && m.pointerType !== "touch" || Ye && Ye(m, d)
            },
            At = function() {
                u._vx.reset(), u._vy.reset(), Ke.pause(), M && M(u)
            },
            c = function() {
                var m = u.deltaX = _n(Be),
                    d = u.deltaY = _n(ke),
                    y = Math.abs(m) >= t,
                    b = Math.abs(d) >= t;
                $ && (y || b) && $(u, m, d, Be, ke), y && (E && u.deltaX > 0 && E(u), O && u.deltaX < 0 && O(u), We && We(u), H && u.deltaX < 0 != it < 0 && H(u), it = u.deltaX, Be[0] = Be[1] = Be[2] = 0), b && (se && u.deltaY > 0 && se(u), C && u.deltaY < 0 && C(u), R && R(u), nt && u.deltaY < 0 != ce < 0 && nt(u), ce = u.deltaY, ke[0] = ke[1] = ke[2] = 0), (Se || X) && (q && q(u), X && (be(u), X = !1), Se = !1), ot && !(ot = !1) && Ue && Ue(u), Ve && (Z(u), Ve = !1), Ae = 0
            },
            h = function(m, d, y) {
                Be[y] += m, ke[y] += d, u._vx.update(m), u._vy.update(d), P ? Ae || (Ae = requestAnimationFrame(c)) : c()
            },
            S = function(m, d) {
                De && !Oe && (u.axis = Oe = Math.abs(m) > Math.abs(d) ? "x" : "y", ot = !0), Oe !== "y" && (Be[2] += m, u._vx.update(m, !0)), Oe !== "x" && (ke[2] += d, u._vy.update(d, !0)), P ? Ae || (Ae = requestAnimationFrame(c)) : c()
            },
            T = function(m) {
                if (!$e(m, 1)) {
                    m = sr(m, D);
                    var d = m.clientX,
                        y = m.clientY,
                        b = d - u.x,
                        k = y - u.y,
                        oe = u.isDragging;
                    u.x = d, u.y = y, (oe || Math.abs(u.startX - d) >= o || Math.abs(u.startY - y) >= o) && (be && (X = !0), oe || (u.isDragging = !0), S(b, k), oe || ee && ee(u))
                }
            },
            v = u.onPress = function(W) {
                $e(W, 1) || (u.axis = Oe = null, Ke.pause(), u.isPressed = !0, W = sr(W), it = ce = 0, u.startX = u.x = W.clientX, u.startY = u.y = W.clientY, u._vx.reset(), u._vy.reset(), tt(te ? s : N, vt[1], T, D, !0), u.deltaX = u.deltaY = 0, j && j(u))
            },
            L = function(m) {
                if (!$e(m, 1)) {
                    Je(te ? s : N, vt[1], T, !0);
                    var d = !isNaN(u.y - u.startY),
                        y = u.isDragging && (Math.abs(u.x - u.startX) > 3 || Math.abs(u.y - u.startY) > 3),
                        b = sr(m);
                    !y && d && (u._vx.reset(), u._vy.reset(), D && Me && Ne.delayedCall(.08, function() {
                        if (pr() - _t > 300 && !m.defaultPrevented) {
                            if (m.target.click) m.target.click();
                            else if (N.createEvent) {
                                var k = N.createEvent("MouseEvents");
                                k.initMouseEvent("click", !0, !0, ut, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), m.target.dispatchEvent(k)
                            }
                        }
                    })), u.isDragging = u.isGesturing = u.isPressed = !1, M && !te && Ke.restart(!0), z && y && z(u), A && A(u, y)
                }
            },
            F = function(m) {
                return m.touches && m.touches.length > 1 && (u.isGesturing = !0) && ye(m, u.isDragging)
            },
            de = function() {
                return (u.isGesturing = !1) || l(u)
            },
            ue = function(m) {
                if (!$e(m)) {
                    var d = pt(),
                        y = xt();
                    h((d - ht) * Ge, (y - Te) * Ge, 1), ht = d, Te = y, M && Ke.restart(!0)
                }
            },
            Le = function(m) {
                if (!$e(m)) {
                    m = sr(m, D), Z && (Ve = !0);
                    var d = (m.deltaMode === 1 ? g : m.deltaMode === 2 ? ut.innerHeight : 1) * _;
                    h(m.deltaX * d, m.deltaY * d, 0), M && !te && Ke.restart(!0)
                }
            },
            Ce = function(m) {
                if (!$e(m)) {
                    var d = m.clientX,
                        y = m.clientY,
                        b = d - u.x,
                        k = y - u.y;
                    u.x = d, u.y = y, Se = !0, (b || k) && S(b, k)
                }
            },
            Tt = function(m) {
                u.event = m, xe(u)
            },
            st = function(m) {
                u.event = m, me(u)
            },
            Ht = function(m) {
                return $e(m) || sr(m, D) && Q(u)
            };
        Ke = u._dc = Ne.delayedCall(f || .25, At).pause(), u.deltaX = u.deltaY = 0, u._vx = tn(0, 50, !0), u._vy = tn(0, 50, !0), u.scrollX = pt, u.scrollY = xt, u.isDragging = u.isGesturing = u.isPressed = !1, Fn(this), u.enable = function(W) {
            return u.isEnabled || (tt(Fe ? N : s, "scroll", en), a.indexOf("scroll") >= 0 && tt(Fe ? N : s, "scroll", ue, D, ne), a.indexOf("wheel") >= 0 && tt(s, "wheel", Le, D, ne), (a.indexOf("touch") >= 0 && An || a.indexOf("pointer") >= 0) && (tt(s, vt[0], v, D, ne), tt(N, vt[2], L), tt(N, vt[3], L), Me && tt(s, "click", pe, !1, !0), Q && tt(s, "click", Ht), ye && tt(N, "gesturestart", F), l && tt(N, "gestureend", de), xe && tt(s, Xt + "enter", Tt), me && tt(s, Xt + "leave", st), q && tt(s, Xt + "move", Ce)), u.isEnabled = !0, W && W.type && v(W), ft && ft(u)), u
        }, u.disable = function() {
            u.isEnabled && (jt.filter(function(W) {
                return W !== u && dr(W.target)
            }).length || Je(Fe ? N : s, "scroll", en), u.isPressed && (u._vx.reset(), u._vy.reset(), Je(te ? s : N, vt[1], T, !0)), Je(Fe ? N : s, "scroll", ue, ne), Je(s, "wheel", Le, ne), Je(s, vt[0], v, ne), Je(N, vt[2], L), Je(N, vt[3], L), Je(s, "click", pe, !0), Je(s, "click", Ht), Je(N, "gesturestart", F), Je(N, "gestureend", de), Je(s, Xt + "enter", Tt), Je(s, Xt + "leave", st), Je(s, Xt + "move", Ce), u.isEnabled = u.isPressed = u.isDragging = !1, re && re(u))
        }, u.kill = u.revert = function() {
            u.disable();
            var W = jt.indexOf(u);
            W >= 0 && jt.splice(W, 1), Dt === u && (Dt = 0)
        }, jt.push(u), te && dr(s) && (Dt = u), u.enable(ae)
    }, ro(i, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), i
}();
Pe.version = "3.11.4";
Pe.create = function(i) {
    return new Pe(i)
};
Pe.register = Yn;
Pe.getAll = function() {
    return jt.slice()
};
Pe.getById = function(i) {
    return jt.filter(function(e) {
        return e.vars.id === i
    })[0]
};
Ln() && Ne.registerPlugin(Pe);
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var w, Zt, U, fe, wt, ve, Bn, Hr, Xr, er, Ar, xr, qe, Wr, rn, Ze, vn, mn, Qt, Hn, Ur, Xn, at, Nn, Wn, Gn, Ot, nn, an, Vr, Sr = 1,
    Qe = Date.now,
    $r = Qe(),
    gt = 0,
    Tr = 0,
    yn = function() {
        return Wr = 1
    },
    wn = function() {
        return Wr = 0
    },
    Ct = function(e) {
        return e
    },
    ar = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Un = function() {
        return typeof window < "u"
    },
    Vn = function() {
        return w || Un() && (w = window.gsap) && w.registerPlugin && w
    },
    Vt = function(e) {
        return !!~Bn.indexOf(e)
    },
    $n = function(e) {
        return It(e, "getBoundingClientRect") || (Vt(e) ? function() {
            return Yr.width = U.innerWidth, Yr.height = U.innerHeight, Yr
        } : function() {
            return Rt(e)
        })
    },
    oo = function(e, n, r) {
        var t = r.d,
            o = r.d2,
            a = r.a;
        return (a = It(e, "getBoundingClientRect")) ? function() {
            return a()[t]
        } : function() {
            return (n ? U["inner" + o] : e["client" + o]) || 0
        }
    },
    io = function(e, n) {
        return !n || ~Et.indexOf(e) ? $n(e) : function() {
            return Yr
        }
    },
    zt = function(e, n) {
        var r = n.s,
            t = n.d2,
            o = n.d,
            a = n.a;
        return (r = "scroll" + t) && (a = It(e, r)) ? a() - $n(e)()[o] : Vt(e) ? (wt[r] || ve[r]) - (U["inner" + t] || wt["client" + t] || ve["client" + t]) : e[r] - e["offset" + t]
    },
    kr = function(e, n) {
        for (var r = 0; r < Qt.length; r += 3)(!n || ~n.indexOf(Qt[r + 1])) && e(Qt[r], Qt[r + 1], Qt[r + 2])
    },
    mt = function(e) {
        return typeof e == "string"
    },
    et = function(e) {
        return typeof e == "function"
    },
    cr = function(e) {
        return typeof e == "number"
    },
    Or = function(e) {
        return typeof e == "object"
    },
    lr = function(e, n, r) {
        return e && e.progress(n ? 0 : 1) && r && e.pause()
    },
    qr = function(e, n) {
        if (e.enabled) {
            var r = n(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    },
    Kt = Math.abs,
    qn = "left",
    Kn = "top",
    cn = "right",
    un = "bottom",
    Wt = "width",
    Gt = "height",
    gr = "Right",
    hr = "Left",
    _r = "Top",
    vr = "Bottom",
    we = "padding",
    dt = "margin",
    nr = "Width",
    fn = "Height",
    He = "px",
    bt = function(e) {
        return U.getComputedStyle(e)
    },
    so = function(e) {
        var n = bt(e).position;
        e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
    },
    bn = function(e, n) {
        for (var r in n) r in e || (e[r] = n[r]);
        return e
    },
    Rt = function(e, n) {
        var r = n && bt(e)[rn] !== "matrix(1, 0, 0, 1, 0, 0)" && w.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            t = e.getBoundingClientRect();
        return r && r.progress(0).kill(), t
    },
    on = function(e, n) {
        var r = n.d2;
        return e["offset" + r] || e["client" + r] || 0
    },
    Jn = function(e) {
        var n = [],
            r = e.labels,
            t = e.duration(),
            o;
        for (o in r) n.push(r[o] / t);
        return n
    },
    lo = function(e) {
        return function(n) {
            return w.utils.snap(Jn(e), n)
        }
    },
    pn = function(e) {
        var n = w.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(function(t, o) {
                return t - o
            });
        return r ? function(t, o, a) {
            a === void 0 && (a = .001);
            var s;
            if (!o) return n(t);
            if (o > 0) {
                for (t -= a, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s];
                return r[s - 1]
            } else
                for (s = r.length, t += a; s--;)
                    if (r[s] <= t) return r[s];
            return r[0]
        } : function(t, o, a) {
            a === void 0 && (a = .001);
            var s = n(t);
            return !o || Math.abs(s - t) < a || s - t < 0 == o < 0 ? s : n(o < 0 ? t - e : t + e)
        }
    },
    ao = function(e) {
        return function(n, r) {
            return pn(Jn(e))(n, r.direction)
        }
    },
    Cr = function(e, n, r, t) {
        return r.split(",").forEach(function(o) {
            return e(n, o, t)
        })
    },
    Xe = function(e, n, r, t, o) {
        return e.addEventListener(n, r, {
            passive: !t,
            capture: !!o
        })
    },
    Ie = function(e, n, r, t) {
        return e.removeEventListener(n, r, !!t)
    },
    Er = function(e, n, r) {
        return r && r.wheelHandler && e(n, "wheel", r)
    },
    xn = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    Pr = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Nr = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    Fr = function(e, n) {
        if (mt(e)) {
            var r = e.indexOf("="),
                t = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (t *= n / 100), e = e.substr(0, r - 1)), e = t + (e in Nr ? Nr[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
        }
        return e
    },
    Mr = function(e, n, r, t, o, a, s, g) {
        var P = o.startColor,
            D = o.endColor,
            M = o.fontSize,
            f = o.indent,
            p = o.fontWeight,
            _ = fe.createElement("div"),
            ae = Vt(r) || It(r, "pinType") === "fixed",
            ee = e.indexOf("scroller") !== -1,
            z = ae ? ve : r,
            be = e.indexOf("start") !== -1,
            j = be ? P : D,
            A = "border-color:" + j + ";font-size:" + M + ";color:" + j + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return A += "position:" + ((ee || g) && ae ? "fixed;" : "absolute;"), (ee || g || !ae) && (A += (t === Re ? cn : un) + ":" + (a + parseFloat(f)) + "px;"), s && (A += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), _._isStart = be, _.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), _.style.cssText = A, _.innerText = n || n === 0 ? e + "-" + n : e, z.children[0] ? z.insertBefore(_, z.children[0]) : z.appendChild(_), _._offset = _["offset" + t.op.d2], Lr(_, 0, t, be), _
    },
    Lr = function(e, n, r, t) {
        var o = {
                display: "block"
            },
            a = r[t ? "os2" : "p2"],
            s = r[t ? "p2" : "os2"];
        e._isFlipped = t, o[r.a + "Percent"] = t ? -100 : 0, o[r.a] = t ? "1px" : 0, o["border" + a + nr] = 1, o["border" + s + nr] = 0, o[r.p] = n + "px", w.set(e, o)
    },
    I = [],
    sn = {},
    yr, Sn = function() {
        return Qe() - gt > 34 && (yr || (yr = requestAnimationFrame(Bt)))
    },
    Jt = function() {
        (!at || !at.isPressed || at.startX > ve.clientWidth) && (B.cache++, at ? yr || (yr = requestAnimationFrame(Bt)) : Bt(), gt || qt("scrollStart"), gt = Qe())
    },
    Kr = function() {
        Gn = U.innerWidth, Wn = U.innerHeight
    },
    ur = function() {
        B.cache++, !qe && !Xn && !fe.fullscreenElement && !fe.webkitFullscreenElement && (!Nn || Gn !== U.innerWidth || Math.abs(U.innerHeight - Wn) > U.innerHeight * .25) && Hr.restart(!0)
    },
    $t = {},
    co = [],
    Zn = function i() {
        return Ie(V, "scrollEnd", i) || Nt(!0)
    },
    qt = function(e) {
        return $t[e] && $t[e].map(function(n) {
            return n()
        }) || co
    },
    ct = [],
    Qn = function(e) {
        for (var n = 0; n < ct.length; n += 5)(!e || ct[n + 4] && ct[n + 4].query === e) && (ct[n].style.cssText = ct[n + 1], ct[n].getBBox && ct[n].setAttribute("transform", ct[n + 2] || ""), ct[n + 3].uncache = 1)
    },
    dn = function(e, n) {
        var r;
        for (Ze = 0; Ze < I.length; Ze++) r = I[Ze], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
        n && Qn(n), n || qt("revert")
    },
    jn = function(e, n) {
        B.cache++, (n || !yt) && B.forEach(function(r) {
            return et(r) && r.cacheID++ && (r.rec = 0)
        }), mt(e) && (U.history.scrollRestoration = an = e)
    },
    yt, Ut = 0,
    Tn, uo = function() {
        if (Tn !== Ut) {
            var e = Tn = Ut;
            requestAnimationFrame(function() {
                return e === Ut && Nt(!0)
            })
        }
    },
    Nt = function(e, n) {
        if (gt && !e) {
            Xe(V, "scrollEnd", Zn);
            return
        }
        yt = V.isRefreshing = !0, B.forEach(function(t) {
            return et(t) && t.cacheID++ && (t.rec = t())
        });
        var r = qt("refreshInit");
        Hn && V.sort(), n || dn(), B.forEach(function(t) {
            et(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
        }), I.slice(0).forEach(function(t) {
            return t.refresh()
        }), I.forEach(function(t, o) {
            if (t._subPinOffset && t.pin) {
                var a = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    s = t.pin[a];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[a] - s), t.revert(!1, 1)
            }
        }), I.forEach(function(t) {
            return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, zt(t.scroller, t._dir)))
        }), r.forEach(function(t) {
            return t && t.render && t.render(-1)
        }), B.forEach(function(t) {
            et(t) && (t.smooth && requestAnimationFrame(function() {
                return t.target.style.scrollBehavior = "smooth"
            }), t.rec && t(t.rec))
        }), jn(an, 1), Hr.pause(), Ut++, Bt(2), I.forEach(function(t) {
            return et(t.vars.onRefresh) && t.vars.onRefresh(t)
        }), yt = V.isRefreshing = !1, qt("refresh")
    },
    kn = 0,
    zr = 1,
    mr, Bt = function(e) {
        if (!yt || e === 2) {
            V.isUpdating = !0, mr && mr.update(0);
            var n = I.length,
                r = Qe(),
                t = r - $r >= 50,
                o = n && I[0].scroll();
            if (zr = kn > o ? -1 : 1, kn = o, t && (gt && !Wr && r - gt > 200 && (gt = 0, qt("scrollEnd")), Ar = $r, $r = r), zr < 0) {
                for (Ze = n; Ze-- > 0;) I[Ze] && I[Ze].update(0, t);
                zr = 1
            } else
                for (Ze = 0; Ze < n; Ze++) I[Ze] && I[Ze].update(0, t);
            V.isUpdating = !1
        }
        yr = 0
    },
    ln = [qn, Kn, un, cn, dt + vr, dt + gr, dt + _r, dt + hr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Ir = ln.concat([Wt, Gt, "boxSizing", "max" + nr, "max" + fn, "position", dt, we, we + _r, we + gr, we + vr, we + hr]),
    fo = function(e, n, r) {
        rr(r);
        var t = e._gsap;
        if (t.spacerIsNative) rr(t.spacerState);
        else if (e._gsap.swappedIn) {
            var o = n.parentNode;
            o && (o.insertBefore(e, n), o.removeChild(n))
        }
        e._gsap.swappedIn = !1
    },
    Jr = function(e, n, r, t) {
        if (!e._gsap.swappedIn) {
            for (var o = ln.length, a = n.style, s = e.style, g; o--;) g = ln[o], a[g] = r[g];
            a.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (a.display = "inline-block"), s[un] = s[cn] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Wt] = on(e, je) + He, a[Gt] = on(e, Re) + He, a[we] = s[dt] = s[Kn] = s[qn] = "0", rr(t), s[Wt] = s["max" + nr] = r[Wt], s[Gt] = s["max" + fn] = r[Gt], s[we] = r[we], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    po = /([A-Z])/g,
    rr = function(e) {
        if (e) {
            var n = e.t.style,
                r = e.length,
                t = 0,
                o, a;
            for ((e.t._gsap || w.core.getCache(e.t)).uncache = 1; t < r; t += 2) a = e[t + 1], o = e[t], a ? n[o] = a : n[o] && n.removeProperty(o.replace(po, "-$1").toLowerCase())
        }
    },
    Rr = function(e) {
        for (var n = Ir.length, r = e.style, t = [], o = 0; o < n; o++) t.push(Ir[o], r[Ir[o]]);
        return t.t = e, t
    },
    go = function(e, n, r) {
        for (var t = [], o = e.length, a = r ? 8 : 0, s; a < o; a += 2) s = e[a], t.push(s, s in n ? n[s] : e[a + 1]);
        return t.t = e.t, t
    },
    Yr = {
        left: 0,
        top: 0
    },
    Cn = function(e, n, r, t, o, a, s, g, P, D, M, f, p) {
        et(e) && (e = e(g)), mt(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? Fr("0" + e.substr(3), r) : 0));
        var _ = p ? p.time() : 0,
            ae, ee, z;
        if (p && p.seek(0), cr(e)) s && Lr(s, r, t, !0);
        else {
            et(n) && (n = n(g));
            var be = (e || "0").split(" "),
                j, A, E, O;
            z = rt(n) || ve, j = Rt(z) || {}, (!j || !j.left && !j.top) && bt(z).display === "none" && (O = z.style.display, z.style.display = "block", j = Rt(z), O ? z.style.display = O : z.style.removeProperty("display")), A = Fr(be[0], j[t.d]), E = Fr(be[1] || "0", r), e = j[t.p] - P[t.p] - D + A + o - E, s && Lr(s, E, t, r - E < 20 || s._isStart && E > 20), r -= r - E
        }
        if (a) {
            var C = e + r,
                se = a._isStart;
            ae = "scroll" + t.d2, Lr(a, C, t, se && C > 20 || !se && (M ? Math.max(ve[ae], wt[ae]) : a.parentNode[ae]) <= C + 1), M && (P = Rt(s), M && (a.style[t.op.p] = P[t.op.p] - t.op.m - a._offset + He))
        }
        return p && z && (ae = Rt(z), p.seek(f), ee = Rt(z), p._caScrollDist = ae[t.p] - ee[t.p], e = e / p._caScrollDist * f), p && p.seek(_), p ? e : Math.round(e)
    },
    ho = /(webkit|moz|length|cssText|inset)/i,
    En = function(e, n, r, t) {
        if (e.parentNode !== n) {
            var o = e.style,
                a, s;
            if (n === ve) {
                e._stOrig = o.cssText, s = bt(e);
                for (a in s) !+a && !ho.test(a) && s[a] && typeof o[a] == "string" && a !== "0" && (o[a] = s[a]);
                o.top = r, o.left = t
            } else o.cssText = e._stOrig;
            w.core.getCache(e).uncache = 1, n.appendChild(e)
        }
    },
    Pn = function(e, n) {
        var r = Yt(e, n),
            t = "_scroll" + n.p2,
            o, a, s = function g(P, D, M, f, p) {
                var _ = g.tween,
                    ae = D.onComplete,
                    ee = {};
                return M = M || r(), p = f && p || 0, f = f || P - M, _ && _.kill(), o = Math.round(M), D[t] = P, D.modifiers = ee, ee[t] = function(z) {
                    return z = Math.round(r()), z !== o && z !== a && Math.abs(z - o) > 3 && Math.abs(z - a) > 3 ? (_.kill(), g.tween = 0) : z = M + f * _.ratio + p * _.ratio * _.ratio, a = o, o = Math.round(z)
                }, D.onUpdate = function() {
                    B.cache++, Bt()
                }, D.onComplete = function() {
                    g.tween = 0, ae && ae.call(_)
                }, _ = g.tween = w.to(e, D), _
            };
        return e[t] = r, r.wheelHandler = function() {
            return s.tween && s.tween.kill() && (s.tween = 0)
        }, Xe(e, "wheel", r.wheelHandler), s
    },
    V = function() {
        function i(n, r) {
            Zt || i.register(w) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(n, r)
        }
        var e = i.prototype;
        return e.init = function(r, t) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Tr) {
                this.update = this.refresh = this.kill = Ct;
                return
            }
            r = bn(mt(r) || cr(r) || r.nodeType ? {
                trigger: r
            } : r, Pr);
            var o = r,
                a = o.onUpdate,
                s = o.toggleClass,
                g = o.id,
                P = o.onToggle,
                D = o.onRefresh,
                M = o.scrub,
                f = o.trigger,
                p = o.pin,
                _ = o.pinSpacing,
                ae = o.invalidateOnRefresh,
                ee = o.anticipatePin,
                z = o.onScrubComplete,
                be = o.onSnapComplete,
                j = o.once,
                A = o.snap,
                E = o.pinReparent,
                O = o.pinSpacer,
                C = o.containerAnimation,
                se = o.fastScrollEnd,
                We = o.preventOverlaps,
                R = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? je : Re,
                $ = !M && M !== 0,
                H = rt(r.scroller || U),
                nt = w.core.getCache(H),
                xe = Vt(H),
                me = ("pinType" in r ? r.pinType : It(H, "pinType") || xe && "fixed") === "fixed",
                q = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                Ye = $ && r.toggleActions.split(" "),
                te = "markers" in r ? r.markers : Pr.markers,
                ye = xe ? 0 : parseFloat(bt(H)["border" + R.p2 + nr]) || 0,
                l = this,
                Z = r.onRefreshInit && function() {
                    return r.onRefreshInit(l)
                },
                ft = oo(H, xe, R),
                re = io(H, xe),
                Q = 0,
                Ge = 0,
                ne = Yt(H, R),
                Me, De, Ue, Ae, Ke, X, Se, Ve, ot, Oe, u, it, ce, pt, xt, ht, Te, St, Fe, N, Be, ke, _t, pe, $e, At, c, h, S, T, v, L, F, de, ue, Le, Ce, Tt, st;
            if (nn(l), l._dir = R, ee *= 45, l.scroller = H, l.scroll = C ? C.time.bind(C) : ne, Ae = ne(), l.vars = r, t = t || r.animation, "refreshPriority" in r && (Hn = 1, r.refreshPriority === -9999 && (mr = l)), nt.tweenScroll = nt.tweenScroll || {
                    top: Pn(H, Re),
                    left: Pn(H, je)
                }, l.tweenTo = Me = nt.tweenScroll[R.p], l.scrubDuration = function(d) {
                    L = cr(d) && d, L ? v ? v.duration(d) : v = w.to(t, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: L,
                        paused: !0,
                        onComplete: function() {
                            return z && z(l)
                        }
                    }) : (v && v.progress(1).kill(), v = 0)
                }, t && (t.vars.lazy = !1, t._initted || t.vars.immediateRender !== !1 && r.immediateRender !== !1 && t.duration() && t.render(0, !0, !0), l.animation = t.pause(), t.scrollTrigger = l, l.scrubDuration(M), S = 0, g || (g = t.vars.id)), I.push(l), A && ((!Or(A) || A.push) && (A = {
                    snapTo: A
                }), "scrollBehavior" in ve.style && w.set(xe ? [ve, wt] : H, {
                    scrollBehavior: "auto"
                }), B.forEach(function(d) {
                    return et(d) && d.target === (xe ? fe.scrollingElement || wt : H) && (d.smooth = !1)
                }), Ue = et(A.snapTo) ? A.snapTo : A.snapTo === "labels" ? lo(t) : A.snapTo === "labelsDirectional" ? ao(t) : A.directional !== !1 ? function(d, y) {
                    return pn(A.snapTo)(d, Qe() - Ge < 500 ? 0 : y.direction)
                } : w.utils.snap(A.snapTo), F = A.duration || {
                    min: .1,
                    max: 2
                }, F = Or(F) ? er(F.min, F.max) : er(F, F), de = w.delayedCall(A.delay || L / 2 || .1, function() {
                    var d = ne(),
                        y = Qe() - Ge < 500,
                        b = Me.tween;
                    if ((y || Math.abs(l.getVelocity()) < 10) && !b && !Wr && Q !== d) {
                        var k = (d - X) / ce,
                            oe = t && !$ ? t.totalProgress() : k,
                            x = y ? 0 : (oe - T) / (Qe() - Ar) * 1e3 || 0,
                            G = w.utils.clamp(-k, 1 - k, Kt(x / 2) * x / .185),
                            K = k + (A.inertia === !1 ? 0 : G),
                            Ee = er(0, 1, Ue(K, l)),
                            Y = Math.round(X + Ee * ce),
                            le = A,
                            ze = le.onStart,
                            ie = le.onInterrupt,
                            J = le.onComplete;
                        if (d <= Se && d >= X && Y !== d) {
                            if (b && !b._initted && b.data <= Kt(Y - d)) return;
                            A.inertia === !1 && (G = Ee - k), Me(Y, {
                                duration: F(Kt(Math.max(Kt(K - oe), Kt(Ee - oe)) * .185 / x / .05 || 0)),
                                ease: A.ease || "power3",
                                data: Kt(Y - d),
                                onInterrupt: function() {
                                    return de.restart(!0) && ie && ie(l)
                                },
                                onComplete: function() {
                                    l.update(), Q = ne(), S = T = t && !$ ? t.totalProgress() : l.progress, be && be(l), J && J(l)
                                }
                            }, d, G * ce, Y - d - G * ce), ze && ze(l, Me.tween)
                        }
                    } else l.isActive && Q !== d && de.restart(!0)
                }).pause()), g && (sn[g] = l), f = l.trigger = rt(f || p), st = f && f._gsap && f._gsap.stRevert, st && (st = st(l)), p = p === !0 ? f : rt(p), mt(s) && (s = {
                    targets: f,
                    className: s
                }), p && (_ === !1 || _ === dt || (_ = !_ && p.parentNode && p.parentNode.style && bt(p.parentNode).display === "flex" ? !1 : we), l.pin = p, De = w.core.getCache(p), De.spacer ? pt = De.pinState : (O && (O = rt(O), O && !O.nodeType && (O = O.current || O.nativeElement), De.spacerIsNative = !!O, O && (De.spacerState = Rr(O))), De.spacer = Te = O || fe.createElement("div"), Te.classList.add("pin-spacer"), g && Te.classList.add("pin-spacer-" + g), De.pinState = pt = Rr(p)), r.force3D !== !1 && w.set(p, {
                    force3D: !0
                }), l.spacer = Te = De.spacer, h = bt(p), _t = h[_ + R.os2], Fe = w.getProperty(p), N = w.quickSetter(p, R.a, He), Jr(p, Te, h), ht = Rr(p)), te) {
                it = Or(te) ? bn(te, xn) : xn, Oe = Mr("scroller-start", g, H, R, it, 0), u = Mr("scroller-end", g, H, R, it, 0, Oe), St = Oe["offset" + R.op.d2];
                var Ht = rt(It(H, "content") || H);
                Ve = this.markerStart = Mr("start", g, Ht, R, it, St, 0, C), ot = this.markerEnd = Mr("end", g, Ht, R, it, St, 0, C), C && (Tt = w.quickSetter([Ve, ot], R.a, He)), !me && !(Et.length && It(H, "fixedMarkers") === !0) && (so(xe ? ve : H), w.set([Oe, u], {
                    force3D: !0
                }), $e = w.quickSetter(Oe, R.a, He), c = w.quickSetter(u, R.a, He))
            }
            if (C) {
                var W = C.vars.onUpdate,
                    m = C.vars.onUpdateParams;
                C.eventCallback("onUpdate", function() {
                    l.update(0, 0, 1), W && W.apply(m || [])
                })
            }
            l.previous = function() {
                return I[I.indexOf(l) - 1]
            }, l.next = function() {
                return I[I.indexOf(l) + 1]
            }, l.revert = function(d, y) {
                if (!y) return l.kill(!0);
                var b = d !== !1 || !l.enabled,
                    k = qe;
                b !== l.isReverted && (b && (Le = Math.max(ne(), l.scroll.rec || 0), ue = l.progress, Ce = t && t.progress()), Ve && [Ve, ot, Oe, u].forEach(function(oe) {
                    return oe.style.display = b ? "none" : "block"
                }), b && (qe = 1, l.update(b)), p && (!E || !l.isActive) && (b ? fo(p, Te, pt) : Jr(p, Te, bt(p), pe)), b || l.update(b), qe = k, l.isReverted = b)
            }, l.refresh = function(d, y) {
                if (!((qe || !l.enabled) && !y)) {
                    if (p && d && gt) {
                        Xe(i, "scrollEnd", Zn);
                        return
                    }!yt && Z && Z(l), qe = 1, Ge = Qe(), Me.tween && (Me.tween.kill(), Me.tween = 0), v && v.pause(), ae && t && t.revert({
                        kill: !1
                    }).invalidate(), l.isReverted || l.revert(!0, !0), l._subPinOffset = !1;
                    for (var b = ft(), k = re(), oe = C ? C.duration() : zt(H, R), x = 0, G = 0, K = r.end, Ee = r.endTrigger || f, Y = r.start || (r.start === 0 || !f ? 0 : p ? "0 0" : "0 100%"), le = l.pinnedContainer = r.pinnedContainer && rt(r.pinnedContainer), ze = f && Math.max(0, I.indexOf(l)) || 0, ie = ze, J, ge, Pt, lt, he, _e, Mt, Gr, gn, or, kt; ie--;) _e = I[ie], _e.end || _e.refresh(0, 1) || (qe = 1), Mt = _e.pin, Mt && (Mt === f || Mt === p) && !_e.isReverted && (or || (or = []), or.unshift(_e), _e.revert(!0, !0)), _e !== I[ie] && (ze--, ie--);
                    for (et(Y) && (Y = Y(l)), X = Cn(Y, f, b, R, ne(), Ve, Oe, l, k, ye, me, oe, C) || (p ? -.001 : 0), et(K) && (K = K(l)), mt(K) && !K.indexOf("+=") && (~K.indexOf(" ") ? K = (mt(Y) ? Y.split(" ")[0] : "") + K : (x = Fr(K.substr(2), b), K = mt(Y) ? Y : X + x, Ee = f)), Se = Math.max(X, Cn(K || (Ee ? "100% 0" : oe), Ee, b, R, ne() + x, ot, u, l, k, ye, me, oe, C)) || -.001, ce = Se - X || (X -= .01) && .001, x = 0, ie = ze; ie--;) _e = I[ie], Mt = _e.pin, Mt && _e.start - _e._pinPush <= X && !C && _e.end > 0 && (J = _e.end - _e.start, (Mt === f && _e.start - _e._pinPush < X || Mt === le) && !cr(Y) && (x += J * (1 - _e.progress)), Mt === p && (G += J));
                    if (X += x, Se += x, l._pinPush = G, Ve && x && (J = {}, J[R.a] = "+=" + x, le && (J[R.p] = "-=" + ne()), w.set([Ve, ot], J)), p) J = bt(p), lt = R === Re, Pt = ne(), Be = parseFloat(Fe(R.a)) + G, !oe && Se > 1 && (kt = (xe ? fe.scrollingElement || wt : H).style, kt = {
                        style: kt,
                        value: kt["overflow" + R.a.toUpperCase()]
                    }, kt["overflow" + R.a.toUpperCase()] = "scroll"), Jr(p, Te, J), ht = Rr(p), ge = Rt(p, !0), Gr = me && Yt(H, lt ? je : Re)(), _ && (pe = [_ + R.os2, ce + G + He], pe.t = Te, ie = _ === we ? on(p, R) + ce + G : 0, ie && pe.push(R.d, ie + He), rr(pe), le && I.forEach(function(ir) {
                        ir.pin === le && ir.vars.pinSpacing !== !1 && (ir._subPinOffset = !0)
                    }), me && ne(Le)), me && (he = {
                        top: ge.top + (lt ? Pt - X : Gr) + He,
                        left: ge.left + (lt ? Gr : Pt - X) + He,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, he[Wt] = he["max" + nr] = Math.ceil(ge.width) + He, he[Gt] = he["max" + fn] = Math.ceil(ge.height) + He, he[dt] = he[dt + _r] = he[dt + gr] = he[dt + vr] = he[dt + hr] = "0", he[we] = J[we], he[we + _r] = J[we + _r], he[we + gr] = J[we + gr], he[we + vr] = J[we + vr], he[we + hr] = J[we + hr], xt = go(pt, he, E), yt && ne(0)), t ? (gn = t._initted, Ur(1), t.render(t.duration(), !0, !0), ke = Fe(R.a) - Be + ce + G, At = Math.abs(ce - ke) > 1, me && At && xt.splice(xt.length - 2, 2), t.render(0, !0, !0), gn || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), Ur(0)) : ke = ce, kt && (kt.value ? kt.style["overflow" + R.a.toUpperCase()] = kt.value : kt.style.removeProperty("overflow-" + R.a));
                    else if (f && ne() && !C)
                        for (ge = f.parentNode; ge && ge !== ve;) ge._pinOffset && (X -= ge._pinOffset, Se -= ge._pinOffset), ge = ge.parentNode;
                    or && or.forEach(function(ir) {
                        return ir.revert(!1, !0)
                    }), l.start = X, l.end = Se, Ae = Ke = yt ? Le : ne(), !C && !yt && (Ae < Le && ne(Le), l.scroll.rec = 0), l.revert(!1, !0), de && (Q = -1, l.isActive && ne(X + ce * ue), de.restart(!0)), qe = 0, t && $ && (t._initted || Ce) && t.progress() !== Ce && t.progress(Ce, !0).render(t.time(), !0, !0), (ue !== l.progress || C) && (t && !$ && t.totalProgress(ue, !0), l.progress = (Ae - X) / ce === ue ? 0 : ue), p && _ && (Te._pinOffset = Math.round(l.progress * ke)), D && !yt && D(l)
                }
            }, l.getVelocity = function() {
                return (ne() - Ke) / (Qe() - Ar) * 1e3 || 0
            }, l.endAnimation = function() {
                lr(l.callbackAnimation), t && (v ? v.progress(1) : t.paused() ? $ || lr(t, l.direction < 0, 1) : lr(t, t.reversed()))
            }, l.labelToScroll = function(d) {
                return t && t.labels && (X || l.refresh() || X) + t.labels[d] / t.duration() * ce || 0
            }, l.getTrailing = function(d) {
                var y = I.indexOf(l),
                    b = l.direction > 0 ? I.slice(0, y).reverse() : I.slice(y + 1);
                return (mt(d) ? b.filter(function(k) {
                    return k.vars.preventOverlaps === d
                }) : b).filter(function(k) {
                    return l.direction > 0 ? k.end <= X : k.start >= Se
                })
            }, l.update = function(d, y, b) {
                if (!(C && !b && !d)) {
                    var k = yt ? Le : l.scroll(),
                        oe = d ? 0 : (k - X) / ce,
                        x = oe < 0 ? 0 : oe > 1 ? 1 : oe || 0,
                        G = l.progress,
                        K, Ee, Y, le, ze, ie, J, ge;
                    if (y && (Ke = Ae, Ae = C ? ne() : k, A && (T = S, S = t && !$ ? t.totalProgress() : x)), ee && !x && p && !qe && !Sr && gt && X < k + (k - Ke) / (Qe() - Ar) * ee && (x = 1e-4), x !== G && l.enabled) {
                        if (K = l.isActive = !!x && x < 1, Ee = !!G && G < 1, ie = K !== Ee, ze = ie || !!x != !!G, l.direction = x > G ? 1 : -1, l.progress = x, ze && !qe && (Y = x && !G ? 0 : x === 1 ? 1 : G === 1 ? 2 : 3, $ && (le = !ie && Ye[Y + 1] !== "none" && Ye[Y + 1] || Ye[Y], ge = t && (le === "complete" || le === "reset" || le in t))), We && (ie || ge) && (ge || M || !t) && (et(We) ? We(l) : l.getTrailing(We).forEach(function(_e) {
                                return _e.endAnimation()
                            })), $ || (v && !qe && !Sr ? (v._dp._time - v._start !== v._time && v.render(v._dp._time - v._start), v.resetTo ? v.resetTo("totalProgress", x, t._tTime / t._tDur) : (v.vars.totalProgress = x, v.invalidate().restart())) : t && t.totalProgress(x, !!qe)), p) {
                            if (d && _ && (Te.style[_ + R.os2] = _t), !me) N(ar(Be + ke * x));
                            else if (ze) {
                                if (J = !d && x > G && Se + 1 > k && k + 1 >= zt(H, R), E)
                                    if (!d && (K || J)) {
                                        var Pt = Rt(p, !0),
                                            lt = k - X;
                                        En(p, ve, Pt.top + (R === Re ? lt : 0) + He, Pt.left + (R === Re ? 0 : lt) + He)
                                    } else En(p, Te);
                                rr(K || J ? xt : ht), At && x < 1 && K || N(Be + (x === 1 && !J ? ke : 0))
                            }
                        }
                        A && !Me.tween && !qe && !Sr && de.restart(!0), s && (ie || j && x && (x < 1 || !Vr)) && Xr(s.targets).forEach(function(_e) {
                            return _e.classList[K || j ? "add" : "remove"](s.className)
                        }), a && !$ && !d && a(l), ze && !qe ? ($ && (ge && (le === "complete" ? t.pause().totalProgress(1) : le === "reset" ? t.restart(!0).pause() : le === "restart" ? t.restart(!0) : t[le]()), a && a(l)), (ie || !Vr) && (P && ie && qr(l, P), q[Y] && qr(l, q[Y]), j && (x === 1 ? l.kill(!1, 1) : q[Y] = 0), ie || (Y = x === 1 ? 1 : 3, q[Y] && qr(l, q[Y]))), se && !K && Math.abs(l.getVelocity()) > (cr(se) ? se : 2500) && (lr(l.callbackAnimation), v ? v.progress(1) : lr(t, le === "reverse" ? 1 : !x, 1))) : $ && a && !qe && a(l)
                    }
                    if (c) {
                        var he = C ? k / C.duration() * (C._caScrollDist || 0) : k;
                        $e(he + (Oe._isFlipped ? 1 : 0)), c(he)
                    }
                    Tt && Tt(-k / C.duration() * (C._caScrollDist || 0))
                }
            }, l.enable = function(d, y) {
                l.enabled || (l.enabled = !0, Xe(H, "resize", ur), Xe(xe ? fe : H, "scroll", Jt), Z && Xe(i, "refreshInit", Z), d !== !1 && (l.progress = ue = 0, Ae = Ke = Q = ne()), y !== !1 && l.refresh())
            }, l.getTween = function(d) {
                return d && Me ? Me.tween : v
            }, l.setPositions = function(d, y) {
                p && (Be += d - X, ke += y - d - ce, _ === we && l.adjustPinSpacing(y - d - ce)), l.start = X = d, l.end = Se = y, ce = y - d, l.update()
            }, l.adjustPinSpacing = function(d) {
                if (pe) {
                    var y = pe.indexOf(R.d) + 1;
                    pe[y] = parseFloat(pe[y]) + d + He, pe[1] = parseFloat(pe[1]) + d + He, rr(pe)
                }
            }, l.disable = function(d, y) {
                if (l.enabled && (d !== !1 && l.revert(!0, !0), l.enabled = l.isActive = !1, y || v && v.pause(), Le = 0, De && (De.uncache = 1), Z && Ie(i, "refreshInit", Z), de && (de.pause(), Me.tween && Me.tween.kill() && (Me.tween = 0)), !xe)) {
                    for (var b = I.length; b--;)
                        if (I[b].scroller === H && I[b] !== l) return;
                    Ie(H, "resize", ur), Ie(H, "scroll", Jt)
                }
            }, l.kill = function(d, y) {
                l.disable(d, y), v && !y && v.kill(), g && delete sn[g];
                var b = I.indexOf(l);
                b >= 0 && I.splice(b, 1), b === Ze && zr > 0 && Ze--, b = 0, I.forEach(function(k) {
                    return k.scroller === l.scroller && (b = 1)
                }), b || yt || (l.scroll.rec = 0), t && (t.scrollTrigger = null, d && t.revert({
                    kill: !1
                }), y || t.kill()), Ve && [Ve, ot, Oe, u].forEach(function(k) {
                    return k.parentNode && k.parentNode.removeChild(k)
                }), mr === l && (mr = 0), p && (De && (De.uncache = 1), b = 0, I.forEach(function(k) {
                    return k.pin === p && b++
                }), b || (De.spacer = 0)), r.onKill && r.onKill(l)
            }, l.enable(!1, !1), st && st(l), !t || !t.add || ce ? l.refresh() : w.delayedCall(.01, function() {
                return X || Se || l.refresh()
            }) && (ce = .01) && (X = Se = 0), p && uo()
        }, i.register = function(r) {
            return Zt || (w = r || Vn(), Un() && window.document && i.enable(), Zt = Tr), Zt
        }, i.defaults = function(r) {
            if (r)
                for (var t in r) Pr[t] = r[t];
            return Pr
        }, i.disable = function(r, t) {
            Tr = 0, I.forEach(function(a) {
                return a[t ? "kill" : "disable"](r)
            }), Ie(U, "wheel", Jt), Ie(fe, "scroll", Jt), clearInterval(xr), Ie(fe, "touchcancel", Ct), Ie(ve, "touchstart", Ct), Cr(Ie, fe, "pointerdown,touchstart,mousedown", yn), Cr(Ie, fe, "pointerup,touchend,mouseup", wn), Hr.kill(), kr(Ie);
            for (var o = 0; o < B.length; o += 3) Er(Ie, B[o], B[o + 1]), Er(Ie, B[o], B[o + 2])
        }, i.enable = function() {
            if (U = window, fe = document, wt = fe.documentElement, ve = fe.body, w && (Xr = w.utils.toArray, er = w.utils.clamp, nn = w.core.context || Ct, Ur = w.core.suppressOverwrites || Ct, an = U.history.scrollRestoration || "auto", w.core.globals("ScrollTrigger", i), ve)) {
                Tr = 1, Pe.register(w), i.isTouch = Pe.isTouch, Ot = Pe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Xe(U, "wheel", Jt), Bn = [U, fe, wt, ve], w.matchMedia ? (i.matchMedia = function(g) {
                    var P = w.matchMedia(),
                        D;
                    for (D in g) P.add(D, g[D]);
                    return P
                }, w.addEventListener("matchMediaInit", function() {
                    return dn()
                }), w.addEventListener("matchMediaRevert", function() {
                    return Qn()
                }), w.addEventListener("matchMedia", function() {
                    Nt(0, 1), qt("matchMedia")
                }), w.matchMedia("(orientation: portrait)", function() {
                    return Kr(), Kr
                })) : console.warn("Requires GSAP 3.11.0 or later"), Kr(), Xe(fe, "scroll", Jt);
                var r = ve.style,
                    t = r.borderTopStyle,
                    o = w.core.Animation.prototype,
                    a, s;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", a = Rt(ve), Re.m = Math.round(a.top + Re.sc()) || 0, je.m = Math.round(a.left + je.sc()) || 0, t ? r.borderTopStyle = t : r.removeProperty("border-top-style"), xr = setInterval(Sn, 250), w.delayedCall(.5, function() {
                        return Sr = 0
                    }), Xe(fe, "touchcancel", Ct), Xe(ve, "touchstart", Ct), Cr(Xe, fe, "pointerdown,touchstart,mousedown", yn), Cr(Xe, fe, "pointerup,touchend,mouseup", wn), rn = w.utils.checkPrefix("transform"), Ir.push(rn), Zt = Qe(), Hr = w.delayedCall(.2, Nt).pause(), Qt = [fe, "visibilitychange", function() {
                        var g = U.innerWidth,
                            P = U.innerHeight;
                        fe.hidden ? (vn = g, mn = P) : (vn !== g || mn !== P) && ur()
                    }, fe, "DOMContentLoaded", Nt, U, "load", Nt, U, "resize", ur], kr(Xe), I.forEach(function(g) {
                        return g.enable(0, 1)
                    }), s = 0; s < B.length; s += 3) Er(Ie, B[s], B[s + 1]), Er(Ie, B[s], B[s + 2])
            }
        }, i.config = function(r) {
            "limitCallbacks" in r && (Vr = !!r.limitCallbacks);
            var t = r.syncInterval;
            t && clearInterval(xr) || (xr = t) && setInterval(Sn, t), "ignoreMobileResize" in r && (Nn = i.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (kr(Ie) || kr(Xe, r.autoRefreshEvents || "none"), Xn = (r.autoRefreshEvents + "").indexOf("resize") === -1)
        }, i.scrollerProxy = function(r, t) {
            var o = rt(r),
                a = B.indexOf(o),
                s = Vt(o);
            ~a && B.splice(a, s ? 6 : 2), t && (s ? Et.unshift(U, t, ve, t, wt, t) : Et.unshift(o, t))
        }, i.clearMatchMedia = function(r) {
            I.forEach(function(t) {
                return t._ctx && t._ctx.query === r && t._ctx.kill(!0, !0)
            })
        }, i.isInViewport = function(r, t, o) {
            var a = (mt(r) ? rt(r) : r).getBoundingClientRect(),
                s = a[o ? Wt : Gt] * t || 0;
            return o ? a.right - s > 0 && a.left + s < U.innerWidth : a.bottom - s > 0 && a.top + s < U.innerHeight
        }, i.positionInViewport = function(r, t, o) {
            mt(r) && (r = rt(r));
            var a = r.getBoundingClientRect(),
                s = a[o ? Wt : Gt],
                g = t == null ? s / 2 : t in Nr ? Nr[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
            return o ? (a.left + g) / U.innerWidth : (a.top + g) / U.innerHeight
        }, i.killAll = function(r) {
            if (I.slice(0).forEach(function(o) {
                    return o.vars.id !== "ScrollSmoother" && o.kill()
                }), r !== !0) {
                var t = $t.killAll || [];
                $t = {}, t.forEach(function(o) {
                    return o()
                })
            }
        }, i
    }();
V.version = "3.11.4";
V.saveStyles = function(i) {
    return i ? Xr(i).forEach(function(e) {
        if (e && e.style) {
            var n = ct.indexOf(e);
            n >= 0 && ct.splice(n, 5), ct.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), w.core.getCache(e), nn())
        }
    }) : ct
};
V.revert = function(i, e) {
    return dn(!i, e)
};
V.create = function(i, e) {
    return new V(i, e)
};
V.refresh = function(i) {
    return i ? ur() : (Zt || V.register()) && Nt(!0)
};
V.update = function(i) {
    return ++B.cache && Bt(i === !0 ? 2 : 0)
};
V.clearScrollMemory = jn;
V.maxScroll = function(i, e) {
    return zt(i, e ? je : Re)
};
V.getScrollFunc = function(i, e) {
    return Yt(rt(i), e ? je : Re)
};
V.getById = function(i) {
    return sn[i]
};
V.getAll = function() {
    return I.filter(function(i) {
        return i.vars.id !== "ScrollSmoother"
    })
};
V.isScrolling = function() {
    return !!gt
};
V.snapDirectional = pn;
V.addEventListener = function(i, e) {
    var n = $t[i] || ($t[i] = []);
    ~n.indexOf(e) || n.push(e)
};
V.removeEventListener = function(i, e) {
    var n = $t[i],
        r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
};
V.batch = function(i, e) {
    var n = [],
        r = {},
        t = e.interval || .016,
        o = e.batchMax || 1e9,
        a = function(P, D) {
            var M = [],
                f = [],
                p = w.delayedCall(t, function() {
                    D(M, f), M = [], f = []
                }).pause();
            return function(_) {
                M.length || p.restart(!0), M.push(_.trigger), f.push(_), o <= M.length && p.progress(1)
            }
        },
        s;
    for (s in e) r[s] = s.substr(0, 2) === "on" && et(e[s]) && s !== "onRefreshInit" ? a(s, e[s]) : e[s];
    return et(o) && (o = o(), Xe(V, "refresh", function() {
        return o = e.batchMax()
    })), Xr(i).forEach(function(g) {
        var P = {};
        for (s in r) P[s] = r[s];
        P.trigger = g, n.push(V.create(P))
    }), n
};
var Mn = function(e, n, r, t) {
        return n > t ? e(t) : n < 0 && e(0), r > t ? (t - n) / (r - n) : r < 0 ? n / (n - r) : 1
    },
    Zr = function i(e, n) {
        n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Pe.isTouch ? " pinch-zoom" : "") : "none", e === wt && i(ve, n)
    },
    Dr = {
        auto: 1,
        scroll: 1
    },
    _o = function(e) {
        var n = e.event,
            r = e.target,
            t = e.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = o._gsap || w.core.getCache(o),
            s = Qe(),
            g;
        if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; o && o !== ve && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Dr[(g = bt(o)).overflowY] || Dr[g.overflowX]));) o = o.parentNode;
            a._isScroll = o && o !== r && !Vt(o) && (Dr[(g = bt(o)).overflowY] || Dr[g.overflowX]), a._isScrollT = s
        }(a._isScroll || t === "x") && (n.stopPropagation(), n._gsapAllow = !0)
    },
    eo = function(e, n, r, t) {
        return Pe.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: n,
            onWheel: t = t && _o,
            onPress: t,
            onDrag: t,
            onScroll: t,
            onEnable: function() {
                return r && Xe(fe, Pe.eventTypes[0], Dn, !1, !0)
            },
            onDisable: function() {
                return Ie(fe, Pe.eventTypes[0], Dn, !0)
            }
        })
    },
    vo = /(input|label|select|textarea)/i,
    Rn, Dn = function(e) {
        var n = vo.test(e.target.tagName);
        (n || Rn) && (e._gsapAllow = !0, Rn = n)
    },
    mo = function(e) {
        Or(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n = e,
            r = n.normalizeScrollX,
            t = n.momentum,
            o = n.allowNestedScroll,
            a, s, g = rt(e.target) || wt,
            P = w.core.globals().ScrollSmoother,
            D = P && P.get(),
            M = Ot && (e.content && rt(e.content) || D && e.content !== !1 && !D.smooth() && D.content()),
            f = Yt(g, Re),
            p = Yt(g, je),
            _ = 1,
            ae = (Pe.isTouch && U.visualViewport ? U.visualViewport.scale * U.visualViewport.width : U.outerWidth) / U.innerWidth,
            ee = 0,
            z = et(t) ? function() {
                return t(a)
            } : function() {
                return t || 2.8
            },
            be, j, A = eo(g, e.type, !0, o),
            E = function() {
                return j = !1
            },
            O = Ct,
            C = Ct,
            se = function() {
                s = zt(g, Re), C = er(Ot ? 1 : 0, s), r && (O = er(0, zt(g, je))), be = Ut
            },
            We = function() {
                M._gsap.y = ar(parseFloat(M._gsap.y) + f.offset) + "px", M.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(M._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0
            },
            R = function() {
                if (j) {
                    requestAnimationFrame(E);
                    var Ye = ar(a.deltaY / 2),
                        te = C(f.v - Ye);
                    if (M && te !== f.v + f.offset) {
                        f.offset = te - f.v;
                        var ye = ar((parseFloat(M && M._gsap.y) || 0) - f.offset);
                        M.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + ye + ", 0, 1)", M._gsap.y = ye + "px", f.cacheID = B.cache, Bt()
                    }
                    return !0
                }
                f.offset && We(), j = !0
            },
            $, H, nt, xe, me = function() {
                se(), $.isActive() && $.vars.scrollY > s && (f() > s ? $.progress(1) && f(s) : $.resetTo("scrollY", s))
            };
        return M && w.set(M, {
            y: "+=0"
        }), e.ignoreCheck = function(q) {
            return Ot && q.type === "touchmove" && R() || _ > 1.05 && q.type !== "touchstart" || a.isGesturing || q.touches && q.touches.length > 1
        }, e.onPress = function() {
            var q = _;
            _ = ar((U.visualViewport && U.visualViewport.scale || 1) / ae), $.pause(), q !== _ && Zr(g, _ > 1.01 ? !0 : r ? !1 : "x"), H = p(), nt = f(), se(), be = Ut
        }, e.onRelease = e.onGestureStart = function(q, Ye) {
            if (f.offset && We(), !Ye) xe.restart(!0);
            else {
                B.cache++;
                var te = z(),
                    ye, l;
                r && (ye = p(), l = ye + te * .05 * -q.velocityX / .227, te *= Mn(p, ye, l, zt(g, je)), $.vars.scrollX = O(l)), ye = f(), l = ye + te * .05 * -q.velocityY / .227, te *= Mn(f, ye, l, zt(g, Re)), $.vars.scrollY = C(l), $.invalidate().duration(te).play(.01), (Ot && $.vars.scrollY >= s || ye >= s - 1) && w.to({}, {
                    onUpdate: me,
                    duration: te
                })
            }
        }, e.onWheel = function() {
            $._ts && $.pause(), Qe() - ee > 1e3 && (be = 0, ee = Qe())
        }, e.onChange = function(q, Ye, te, ye, l) {
            if (Ut !== be && se(), Ye && r && p(O(ye[2] === Ye ? H + (q.startX - q.x) : p() + Ye - ye[1])), te) {
                f.offset && We();
                var Z = l[2] === te,
                    ft = Z ? nt + q.startY - q.y : f() + te - l[1],
                    re = C(ft);
                Z && ft !== re && (nt += re - ft), f(re)
            }(te || Ye) && Bt()
        }, e.onEnable = function() {
            Zr(g, r ? !1 : "x"), V.addEventListener("refresh", me), Xe(U, "resize", me), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), A.enable()
        }, e.onDisable = function() {
            Zr(g, !0), Ie(U, "resize", me), V.removeEventListener("refresh", me), A.kill()
        }, e.lockAxis = e.lockAxis !== !1, a = new Pe(e), a.iOS = Ot, Ot && !f() && f(1), Ot && w.ticker.add(Ct), xe = a._dc, $ = w.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: r ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: xe.vars.onComplete
        }), a
    };
V.sort = function(i) {
    return I.sort(i || function(e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
    })
};
V.observe = function(i) {
    return new Pe(i)
};
V.normalizeScroll = function(i) {
    if (typeof i > "u") return at;
    if (i === !0 && at) return at.enable();
    if (i === !1) return at && at.kill();
    var e = i instanceof Pe ? i : mo(i);
    return at && at.target === e.target && at.kill(), Vt(e.target) && (at = e), e
};
V.core = {
    _getVelocityProp: tn,
    _inputObserver: eo,
    _scrollers: B,
    _proxies: Et,
    bridge: {
        ss: function() {
            gt || qt("scrollStart"), gt = Qe()
        },
        ref: function() {
            return qe
        }
    }
};
Vn() && w.registerPlugin(V);
/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
function wo() {
    (function(i, e) {
        typeof exports == "object" && typeof module < "u" ? e(exports) : typeof define == "function" && define.amd ? define(["exports"], e) : e((i = i || self).window)
    })(this, function(i) {
        function e(E, O) {
            for (var C = 0; C < O.length; C++) {
                var se = O[C];
                se.enumerable = se.enumerable || !1, se.configurable = !0, "value" in se && (se.writable = !0), Object.defineProperty(E, se.key, se)
            }
        }

        function n() {
            return typeof window < "u"
        }

        function r() {
            return t || n() && (t = window.gsap) && t.registerPlugin && t
        }
        var t, o, a, s, g, P, D, M, f, p, _, ae, ee, z, be, j = (A.register = function(O) {
            return o || (t = O || r(), n() && window.document && (a = window, s = document, g = s.documentElement, P = s.body), t && (D = t.utils.toArray, M = t.utils.clamp, _ = t.parseEase("expo"), z = t.core.context || function() {}, be = t.delayedCall(.2, function() {
                return f.isRefreshing || p && p.refresh()
            }).pause(), f = t.core.globals().ScrollTrigger, t.core.globals("ScrollSmoother", A), P && f && (ae = f.core._getVelocityProp, ee = f.core._inputObserver, A.refresh = f.refresh, o = 1))), o
        }, function(O, C, se) {
            return C && e(O.prototype, C), se && e(O, se), O
        }(A, [{
            key: "progress",
            get: function() {
                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
            }
        }]), A);

        function A(E) {
            var O = this;
            o || A.register(t) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), E = this.vars = E || {}, p && p.kill(), z(p = this);

            function C() {
                return _t.update(-N)
            }

            function se() {
                return l.style.overflow = "visible"
            }

            function We(c) {
                c.update();
                var h = c.getTween();
                h && (h.pause(), h._time = h._dur, h._tTime = h._tDur), Se = !1, c.animation.progress(c.progress, !0)
            }

            function R(c, h) {
                (c !== N && !Ue || h) && (Fe && (l.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + c + ", 0, 1)", l._gsap.y = c + "px"), Be = c - N, N = c, f.isUpdating || f.update())
            }

            function $(c) {
                return arguments.length ? (c < 0 && (c = 0), pe.y = -c, Se = !0, Ue ? N = -c : R(-c), f.isRefreshing ? re.update() : St(c), this) : -N
            }

            function H(c) {
                Z.scrollTop = 0, c.target.contains && c.target.contains(Z) || ce && ce(O, c) === !1 || (f.isInViewport(c.target) || c.target === Ve || O.scrollTo(c.target, !1, "center center"), Ve = c.target)
            }

            function nt(c) {
                var h, S, T, v;
                Q.forEach(function(L) {
                    h = L.pins, v = L.markers, c.forEach(function(F) {
                        L.trigger && F.trigger && L !== F && (F.trigger === L.trigger || F.pinnedContainer === L.trigger || L.trigger.contains(F.trigger)) && (S = F.start, T = (S - L.start - L.offset) / L.ratio - (S - L.start), h.forEach(function(de) {
                            return T -= de.distance / L.ratio - de.distance
                        }), F.setPositions(S + T, F.end + T), F.markerStart && v.push(t.quickSetter([F.markerStart, F.markerEnd], "y", "px")), F.pin && 0 < F.end && (T = F.end - F.start, h.push({
                            start: F.start,
                            end: F.end,
                            distance: T,
                            trig: F
                        }), L.setPositions(L.start, L.end + T), L.vars.onRefresh(L)))
                    })
                })
            }

            function xe() {
                se(), requestAnimationFrame(se), Q && (Q.forEach(function(c) {
                    var h = c.start,
                        S = c.auto ? Math.min(f.maxScroll(c.scroller), c.end) : h + (c.end - h) / c.ratio,
                        T = (S - c.end) / 2;
                    h -= T, S -= T, c.offset = T || 1e-4, c.pins.length = 0, c.setPositions(Math.min(h, S), Math.max(h, S)), c.vars.onRefresh(c)
                }), nt(f.sort())), _t.reset()
            }

            function me() {
                return f.addEventListener("refresh", xe)
            }

            function q() {
                return Q && Q.forEach(function(c) {
                    return c.vars.onRefresh(c)
                })
            }

            function Ye() {
                return Q && Q.forEach(function(c) {
                    return c.vars.onRefreshInit(c)
                }), q
            }

            function te(c, h, S, T) {
                return function() {
                    var v = typeof h == "function" ? h(S, T) : h;
                    return v || v === 0 || (v = T.getAttribute("data-" + Te + c) || (c === "speed" ? 1 : 0)), T.setAttribute("data-" + Te + c, v), v === "auto" ? v : parseFloat(v)
                }
            }

            function ye(c, h, S, T) {
                function v() {
                    h = Ht(), S = W(), de = parseFloat(h) || 1, Tt = (Le = h === "auto") ? 0 : .5, Ce && Ce.kill(), Ce = S && t.to(c, {
                        ease: _,
                        overwrite: !1,
                        y: "+=0",
                        duration: S
                    }), ue && (ue.ratio = de, ue.autoSpeed = Le)
                }

                function L() {
                    d.y = m + "px", d.renderTransform(1), v()
                }

                function F(oe) {
                    if (Le) {
                        L();
                        var x = function(K, Ee) {
                            var Y, le, ze = K.parentNode || g,
                                ie = K.getBoundingClientRect(),
                                J = ze.getBoundingClientRect(),
                                ge = J.top - ie.top,
                                Pt = J.bottom - ie.bottom,
                                lt = (Math.abs(ge) > Math.abs(Pt) ? ge : Pt) / (1 - Ee),
                                he = -lt * Ee;
                            return 0 < lt && (le = (Y = J.height / (a.innerHeight + J.height)) == .5 ? 2 * J.height : 2 * Math.min(J.height, -lt * Y / (2 * Y - 1)) * (Ee || 1), he += Ee ? -le * Ee : -le / 2, lt += le), {
                                change: lt,
                                offset: he
                            }
                        }(c, M(0, 1, -oe.start / (oe.end - oe.start)));
                        k = x.change, st = x.offset
                    } else k = (oe.end - oe.start) * (1 - de), st = 0;
                    y.forEach(function(G) {
                        return k -= G.distance * (1 - de)
                    }), oe.vars.onUpdate(oe), Ce && Ce.progress(1)
                }
                var de, ue, Le, Ce, Tt, st, Ht = te("speed", h, T, c),
                    W = te("lag", S, T, c),
                    m = t.getProperty(c, "y"),
                    d = c._gsap,
                    y = [],
                    b = [],
                    k = 0;
                return v(), (de !== 1 || Le || Ce) && (F(ue = f.create({
                    trigger: Le ? c.parentNode : c,
                    scroller: Z,
                    scrub: !0,
                    refreshPriority: -999,
                    onRefreshInit: L,
                    onRefresh: F,
                    onKill: function(x) {
                        var G = Q.indexOf(x);
                        0 <= G && Q.splice(G, 1), L()
                    },
                    onUpdate: function(x) {
                        var G, K, Ee, Y = m + k * (x.progress - Tt),
                            le = y.length,
                            ze = 0;
                        if (x.offset) {
                            if (le) {
                                for (K = -N, Ee = x.end; le--;) {
                                    if ((G = y[le]).trig.isActive || K >= G.start && K <= G.end) return void(Ce && (G.trig.progress += G.trig.direction < 0 ? .001 : -.001, G.trig.update(0, 0, 1), Ce.resetTo("y", parseFloat(d.y), -Be, !0), ke && Ce.progress(1)));
                                    K > G.end && (ze += G.distance), Ee -= G.distance
                                }
                                Y = m + ze + k * ((t.utils.clamp(x.start, x.end, K) - x.start - ze) / (Ee - x.start) - Tt)
                            }
                            Y = function(J) {
                                return Math.round(1e5 * J) / 1e5 || 0
                            }(Y + st), b.length && !Le && b.forEach(function(ie) {
                                return ie(Y - ze)
                            }), Ce ? (Ce.resetTo("y", Y, -Be, !0), ke && Ce.progress(1)) : (d.y = Y + "px", d.renderTransform(1))
                        }
                    }
                })), t.core.getCache(ue.trigger).stRevert = Ye, ue.startY = m, ue.pins = y, ue.markers = b, ue.ratio = de, ue.autoSpeed = Le, c.style.willChange = "transform"), ue
            }
            var l, Z, ft, re, Q, Ge, ne, Me, De, Ue, Ae, Ke, X, Se, Ve, ot = E.smoothTouch,
                Oe = E.onUpdate,
                u = E.onStop,
                it = E.smooth,
                ce = E.onFocusIn,
                pt = E.normalizeScroll,
                xt = this,
                ht = typeof ResizeObserver < "u" && E.autoResize !== !1 && new ResizeObserver(function() {
                    return f.isRefreshing || be.restart(!0)
                }),
                Te = E.effectsPrefix || "",
                St = f.getScrollFunc(a),
                Fe = f.isTouch === 1 ? ot === !0 ? .8 : parseFloat(ot) || 0 : it === 0 || it === !1 ? 0 : parseFloat(it) || .8,
                N = 0,
                Be = 0,
                ke = 1,
                _t = ae(0),
                pe = {
                    y: 0
                };

            function $e() {
                return ft = l.clientHeight, l.style.overflow = "visible", P.style.height = ft + "px", ft - a.innerHeight
            }
            me(), f.addEventListener("killAll", me), t.delayedCall(.5, function() {
                return ke = 0
            }), this.scrollTop = $, this.scrollTo = function(c, h, S) {
                var T = t.utils.clamp(0, f.maxScroll(a), isNaN(c) ? O.offset(c, S) : +c);
                h ? Ue ? t.to(O, {
                    duration: Fe,
                    scrollTop: T,
                    overwrite: "auto",
                    ease: _
                }) : St(T) : $(T)
            }, this.offset = function(c, h) {
                var S, T = (c = D(c)[0]).style.cssText,
                    v = f.create({
                        trigger: c,
                        start: h || "top top"
                    });
                return Q && nt([v]), S = v.start, v.kill(!1), c.style.cssText = T, t.core.getCache(c).uncache = 1, S
            }, this.content = function(c) {
                if (arguments.length) {
                    var h = D(c || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || P.children[0];
                    return h !== l && (De = (l = h).getAttribute("style") || "", ht && ht.observe(l), t.set(l, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                        y: "+=0"
                    }), Fe || t.set(l, {
                        clearProps: "transform"
                    })), this
                }
                return l
            }, this.wrapper = function(c) {
                return arguments.length ? (Z = D(c || "#smooth-wrapper")[0] || function(S) {
                    var T = s.querySelector(".ScrollSmoother-wrapper");
                    return T || ((T = s.createElement("div")).classList.add("ScrollSmoother-wrapper"), S.parentNode.insertBefore(T, S), T.appendChild(S)), T
                }(l), Me = Z.getAttribute("style") || "", $e(), t.set(Z, Fe ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                } : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto"
                }), this) : Z
            }, this.effects = function(c, h) {
                if (Q = Q || [], !c) return Q.slice(0);
                (c = D(c)).forEach(function(de) {
                    for (var ue = Q.length; ue--;) Q[ue].trigger === de && Q[ue].kill()
                }), h = h || {};
                var S, T, v = h.speed,
                    L = h.lag,
                    F = [];
                for (S = 0; S < c.length; S++)(T = ye(c[S], v, L, S)) && F.push(T);
                return Q.push.apply(Q, F), F
            }, this.sections = function(c, h) {
                if (Ge = Ge || [], !c) return Ge.slice(0);
                var S = D(c).map(function(T) {
                    return f.create({
                        trigger: T,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function(L) {
                            T.style.opacity = L.isActive ? "1" : "0", T.style.pointerEvents = L.isActive ? "all" : "none"
                        }
                    })
                });
                return h && h.add ? Ge.push.apply(Ge, S) : Ge = S.slice(0), S
            }, this.content(E.content), this.wrapper(E.wrapper), this.render = function(c) {
                return R(c || c === 0 ? c : N)
            }, this.getVelocity = function() {
                return _t.getVelocity(-N)
            }, f.scrollerProxy(Z, {
                scrollTop: $,
                scrollHeight: function() {
                    return $e() && P.scrollHeight
                },
                fixedMarkers: E.fixedMarkers !== !1 && !!Fe,
                content: l,
                getBoundingClientRect: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: a.innerWidth,
                        height: a.innerHeight
                    }
                }
            }), f.defaults({
                scroller: Z
            });
            var At = f.getAll().filter(function(c) {
                return c.scroller === a || c.scroller === Z
            });
            At.forEach(function(c) {
                return c.revert(!0)
            }), re = f.create({
                animation: t.fromTo(pe, {
                    y: 0
                }, {
                    y: function() {
                        return -$e()
                    },
                    immediateRender: !1,
                    ease: "none",
                    data: "ScrollSmoother",
                    duration: 100,
                    onUpdate: function() {
                        if (this._dur) {
                            var h = Se;
                            h && (We(re), pe.y = N), R(pe.y, h), C(), Oe && !Ue && Oe(xt)
                        }
                    }
                }),
                onRefreshInit: function(h) {
                    if (Q) {
                        var S = f.getAll().filter(function(v) {
                            return !!v.pin
                        });
                        Q.forEach(function(v) {
                            v.vars.pinnedContainer || S.forEach(function(L) {
                                if (L.pin.contains(v.trigger)) {
                                    var F = v.vars;
                                    F.pinnedContainer = L.pin, v.vars = null, v.init(F, v.animation)
                                }
                            })
                        })
                    }
                    var T = h.getTween();
                    X = T && T._end > T._dp._time, Ke = N, pe.y = 0, Fe && (Z.style.pointerEvents = "none", Z.scrollTop = 0, setTimeout(function() {
                        return Z.style.removeProperty("pointer-events")
                    }, 50))
                },
                onRefresh: function(h) {
                    h.animation.invalidate(), h.setPositions(h.start, $e()), X || We(h), pe.y = -St(), R(pe.y), ke || h.animation.progress(t.utils.clamp(0, 1, Ke / -h.end)), X && (h.progress -= .001, h.update())
                },
                id: "ScrollSmoother",
                scroller: a,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: $e,
                onScrubComplete: function() {
                    _t.reset(), u && u(O)
                },
                scrub: Fe || !0
            }), this.smooth = function(c) {
                return arguments.length && (Fe = c || 0), arguments.length ? re.scrubDuration(c) : re.getTween() ? re.getTween().duration() : 0
            }, re.getTween() && (re.getTween().vars.ease = E.ease || _), this.scrollTrigger = re, E.effects && this.effects(E.effects === !0 ? "[data-" + Te + "speed], [data-" + Te + "lag]" : E.effects, {}), E.sections && this.sections(E.sections === !0 ? "[data-section]" : E.sections), At.forEach(function(c) {
                c.vars.scroller = Z, c.init(c.vars, c.animation)
            }), this.paused = function(c, h) {
                return arguments.length ? (!!Ue !== c && (c ? (re.getTween() && re.getTween().pause(), St(-N), _t.reset(), (Ae = f.normalizeScroll()) && Ae.disable(), (Ue = f.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function() {
                        return $(-N)
                    }
                })).nested = ee(g, "wheel,touch,scroll", !0, h !== !1)) : (Ue.nested.kill(), Ue.kill(), Ue = 0, Ae && Ae.enable(), re.progress = (-N - re.start) / (re.end - re.start), We(re))), this) : !!Ue
            }, this.kill = this.revert = function() {
                O.paused(!1), We(re), re.kill();
                for (var c = (Q || []).concat(Ge || []), h = c.length; h--;) c[h].kill();
                f.scrollerProxy(Z), f.removeEventListener("killAll", me), f.removeEventListener("refresh", xe), Z.style.cssText = Me, l.style.cssText = De;
                var S = f.defaults({});
                S && S.scroller === Z && f.defaults({
                    scroller: a
                }), O.normalizer && f.normalizeScroll(!1), clearInterval(ne), p = null, ht && ht.disconnect(), P.style.removeProperty("height"), a.removeEventListener("focusin", H)
            }, this.refresh = function(c, h) {
                return re.refresh(c, h)
            }, pt && (this.normalizer = f.normalizeScroll(pt === !0 ? {
                debounce: !0,
                content: !Fe && l
            } : pt)), f.config(E), "overscrollBehavior" in a.getComputedStyle(P) && t.set([P, g], {
                overscrollBehavior: "none"
            }), "scrollBehavior" in a.getComputedStyle(P) && t.set([P, g], {
                scrollBehavior: "auto"
            }), a.addEventListener("focusin", H), ne = setInterval(C, 250), s.readyState === "loading" || requestAnimationFrame(function() {
                return f.refresh()
            })
        }
        j.version = "3.11.3", j.create = function(E) {
            return p && E && p.content() === D(E.content)[0] ? p : new j(E)
        }, j.get = function() {
            return p
        }, r() && t.registerPlugin(j), i.ScrollSmoother = j, i.default = j, typeof window > "u" || window !== i ? Object.defineProperty(i, "__esModule", {
            value: !0
        }) : delete i.default
    }), to.registerPlugin(V, ScrollSmoother), window.innerWidth > 768 && ScrollSmoother.create({
        smooth: 1.5,
        effects: !0,
        smoothTouch: !1,
        normalizeScroll: !0
    })
}
export {
    Pe as O, V as S, wo as i
};