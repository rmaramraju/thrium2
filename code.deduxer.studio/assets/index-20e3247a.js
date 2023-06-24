var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    fn = {},
    Pr = {
        get exports() {
            return fn
        },
        set exports(v) {
            fn = v
        }
    };
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
(function(v) {
    (function(b, N) {
        v.exports = b.document ? N(b, !0) : function(A) {
            if (!A.document) throw new Error("jQuery requires a window with a document");
            return N(A)
        }
    })(typeof window < "u" ? window : Hr, function(b, N) {
        var A = [],
            I = Object.getPrototypeOf,
            M = A.slice,
            B = A.flat ? function(e) {
                return A.flat.call(e)
            } : function(e) {
                return A.concat.apply([], e)
            },
            te = A.push,
            ne = A.indexOf,
            se = {},
            ke = se.toString,
            pe = se.hasOwnProperty,
            me = pe.toString,
            he = me.call(Object),
            W = {},
            L = function(t) {
                return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
            },
            Le = function(t) {
                return t != null && t === t.window
            },
            _ = b.document,
            bn = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function mt(e, t, n) {
            n = n || _;
            var i, o, s = n.createElement("script");
            if (s.text = e, t)
                for (i in bn) o = t[i] || t.getAttribute && t.getAttribute(i), o && s.setAttribute(i, o);
            n.head.appendChild(s).parentNode.removeChild(s)
        }

        function J(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? se[ke.call(e)] || "object" : typeof e
        }
        var ie = "3.6.3",
            r = function(e, t) {
                return new r.fn.init(e, t)
            };
        r.fn = r.prototype = {
            jquery: ie,
            constructor: r,
            length: 0,
            toArray: function() {
                return M.call(this)
            },
            get: function(e) {
                return e == null ? M.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = r.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return r.each(this, e)
            },
            map: function(e) {
                return this.pushStack(r.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(M.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(r.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(r.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: te,
            sort: A.sort,
            splice: A.splice
        }, r.extend = r.fn.extend = function() {
            var e, t, n, i, o, s, u = arguments[0] || {},
                c = 1,
                f = arguments.length,
                h = !1;
            for (typeof u == "boolean" && (h = u, u = arguments[c] || {}, c++), typeof u != "object" && !L(u) && (u = {}), c === f && (u = this, c--); c < f; c++)
                if ((e = arguments[c]) != null)
                    for (t in e) i = e[t], !(t === "__proto__" || u === i) && (h && i && (r.isPlainObject(i) || (o = Array.isArray(i))) ? (n = u[t], o && !Array.isArray(n) ? s = [] : !o && !r.isPlainObject(n) ? s = {} : s = n, o = !1, u[t] = r.extend(h, s, i)) : i !== void 0 && (u[t] = i));
            return u
        }, r.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !e || ke.call(e) !== "[object Object]" ? !1 : (t = I(e), t ? (n = pe.call(t, "constructor") && t.constructor, typeof n == "function" && me.call(n) === he) : !0)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                mt(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, i = 0;
                if (Ne(e))
                    for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return e != null && (Ne(Object(e)) ? r.merge(n, typeof e == "string" ? [e] : e) : te.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : ne.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], s = 0, u = e.length, c = !n; s < u; s++) i = !t(e[s], s), i !== c && o.push(e[s]);
                return o
            },
            map: function(e, t, n) {
                var i, o, s = 0,
                    u = [];
                if (Ne(e))
                    for (i = e.length; s < i; s++) o = t(e[s], s, n), o != null && u.push(o);
                else
                    for (s in e) o = t(e[s], s, n), o != null && u.push(o);
                return B(u)
            },
            guid: 1,
            support: W
        }), typeof Symbol == "function" && (r.fn[Symbol.iterator] = A[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            se["[object " + t + "]"] = t.toLowerCase()
        });

        function Ne(e) {
            var t = !!e && "length" in e && e.length,
                n = J(e);
            return L(e) || Le(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
        }
        var oe = function(e) {
            var t, n, i, o, s, u, c, f, h, y, T, g, m, j, $, D, Z, K, ge, U = "sizzle" + 1 * new Date,
                R = e.document,
                ce = 0,
                z = 0,
                Q = Lt(),
                ht = Lt(),
                Dt = Lt(),
                ye = Lt(),
                ze = function(a, l) {
                    return a === l && (T = !0), 0
                },
                Ve = {}.hasOwnProperty,
                de = [],
                Re = de.pop,
                Te = de.push,
                $e = de.push,
                ei = de.slice,
                Ue = function(a, l) {
                    for (var d = 0, x = a.length; d < x; d++)
                        if (a[d] === l) return d;
                    return -1
                },
                en = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                V = "[\\x20\\t\\r\\n\\f]",
                Xe = "(?:\\\\[\\da-fA-F]{1,6}" + V + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                ti = "\\[" + V + "*(" + Xe + ")(?:" + V + "*([*^$|!~]?=)" + V + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Xe + "))|)" + V + "*\\]",
                tn = ":(" + Xe + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ti + ")*)|.*)\\)|)",
                xr = new RegExp(V + "+", "g"),
                jt = new RegExp("^" + V + "+|((?:^|[^\\\\])(?:\\\\.)*)" + V + "+$", "g"),
                Cr = new RegExp("^" + V + "*," + V + "*"),
                ni = new RegExp("^" + V + "*([>+~]|" + V + ")" + V + "*"),
                Tr = new RegExp(V + "|>"),
                wr = new RegExp(tn),
                Sr = new RegExp("^" + Xe + "$"),
                kt = {
                    ID: new RegExp("^#(" + Xe + ")"),
                    CLASS: new RegExp("^\\.(" + Xe + ")"),
                    TAG: new RegExp("^(" + Xe + "|[*])"),
                    ATTR: new RegExp("^" + ti),
                    PSEUDO: new RegExp("^" + tn),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + V + "*(even|odd|(([+-]|)(\\d*)n|)" + V + "*(?:([+-]|)" + V + "*(\\d+)|))" + V + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + en + ")$", "i"),
                    needsContext: new RegExp("^" + V + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + V + "*((?:-\\d)?\\d*)" + V + "*\\)|)(?=[^-]|$)", "i")
                },
                Er = /HTML$/i,
                Nr = /^(?:input|select|textarea|button)$/i,
                Ar = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                Dr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                nn = /[+~]/,
                He = new RegExp("\\\\[\\da-fA-F]{1,6}" + V + "?|\\\\([^\\r\\n\\f])", "g"),
                Pe = function(a, l) {
                    var d = "0x" + a.slice(1) - 65536;
                    return l || (d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320))
                },
                ii = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ri = function(a, l) {
                    return l ? a === "\0" ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                },
                oi = function() {
                    g()
                },
                jr = Ot(function(a) {
                    return a.disabled === !0 && a.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                $e.apply(de = ei.call(R.childNodes), R.childNodes), de[R.childNodes.length].nodeType
            } catch {
                $e = {
                    apply: de.length ? function(l, d) {
                        Te.apply(l, ei.call(d))
                    } : function(l, d) {
                        for (var x = l.length, p = 0; l[x++] = d[p++];);
                        l.length = x - 1
                    }
                }
            }

            function X(a, l, d, x) {
                var p, C, w, S, E, O, k, P = l && l.ownerDocument,
                    F = l ? l.nodeType : 9;
                if (d = d || [], typeof a != "string" || !a || F !== 1 && F !== 9 && F !== 11) return d;
                if (!x && (g(l), l = l || m, $)) {
                    if (F !== 11 && (E = Dr.exec(a)))
                        if (p = E[1]) {
                            if (F === 9)
                                if (w = l.getElementById(p)) {
                                    if (w.id === p) return d.push(w), d
                                } else return d;
                            else if (P && (w = P.getElementById(p)) && ge(l, w) && w.id === p) return d.push(w), d
                        } else {
                            if (E[2]) return $e.apply(d, l.getElementsByTagName(a)), d;
                            if ((p = E[3]) && n.getElementsByClassName && l.getElementsByClassName) return $e.apply(d, l.getElementsByClassName(p)), d
                        }
                    if (n.qsa && !ye[a + " "] && (!D || !D.test(a)) && (F !== 1 || l.nodeName.toLowerCase() !== "object")) {
                        if (k = a, P = l, F === 1 && (Tr.test(a) || ni.test(a))) {
                            for (P = nn.test(a) && on(l.parentNode) || l, (P !== l || !n.scope) && ((S = l.getAttribute("id")) ? S = S.replace(ii, ri) : l.setAttribute("id", S = U)), O = u(a), C = O.length; C--;) O[C] = (S ? "#" + S : ":scope") + " " + qt(O[C]);
                            k = O.join(",")
                        }
                        try {
                            if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + k + "))")) throw new Error;
                            return $e.apply(d, P.querySelectorAll(k)), d
                        } catch {
                            ye(a, !0)
                        } finally {
                            S === U && l.removeAttribute("id")
                        }
                    }
                }
                return f(a.replace(jt, "$1"), l, d, x)
            }

            function Lt() {
                var a = [];

                function l(d, x) {
                    return a.push(d + " ") > i.cacheLength && delete l[a.shift()], l[d + " "] = x
                }
                return l
            }

            function Ee(a) {
                return a[U] = !0, a
            }

            function we(a) {
                var l = m.createElement("fieldset");
                try {
                    return !!a(l)
                } catch {
                    return !1
                } finally {
                    l.parentNode && l.parentNode.removeChild(l), l = null
                }
            }

            function rn(a, l) {
                for (var d = a.split("|"), x = d.length; x--;) i.attrHandle[d[x]] = l
            }

            function si(a, l) {
                var d = l && a,
                    x = d && a.nodeType === 1 && l.nodeType === 1 && a.sourceIndex - l.sourceIndex;
                if (x) return x;
                if (d) {
                    for (; d = d.nextSibling;)
                        if (d === l) return -1
                }
                return a ? 1 : -1
            }

            function kr(a) {
                return function(l) {
                    var d = l.nodeName.toLowerCase();
                    return d === "input" && l.type === a
                }
            }

            function Lr(a) {
                return function(l) {
                    var d = l.nodeName.toLowerCase();
                    return (d === "input" || d === "button") && l.type === a
                }
            }

            function ui(a) {
                return function(l) {
                    return "form" in l ? l.parentNode && l.disabled === !1 ? "label" in l ? "label" in l.parentNode ? l.parentNode.disabled === a : l.disabled === a : l.isDisabled === a || l.isDisabled !== !a && jr(l) === a : l.disabled === a : "label" in l ? l.disabled === a : !1
                }
            }

            function Ge(a) {
                return Ee(function(l) {
                    return l = +l, Ee(function(d, x) {
                        for (var p, C = a([], d.length, l), w = C.length; w--;) d[p = C[w]] && (d[p] = !(x[p] = d[p]))
                    })
                })
            }

            function on(a) {
                return a && typeof a.getElementsByTagName < "u" && a
            }
            n = X.support = {}, s = X.isXML = function(a) {
                var l = a && a.namespaceURI,
                    d = a && (a.ownerDocument || a).documentElement;
                return !Er.test(l || d && d.nodeName || "HTML")
            }, g = X.setDocument = function(a) {
                var l, d, x = a ? a.ownerDocument || a : R;
                return x == m || x.nodeType !== 9 || !x.documentElement || (m = x, j = m.documentElement, $ = !s(m), R != m && (d = m.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", oi, !1) : d.attachEvent && d.attachEvent("onunload", oi)), n.scope = we(function(p) {
                    return j.appendChild(p).appendChild(m.createElement("div")), typeof p.querySelectorAll < "u" && !p.querySelectorAll(":scope fieldset div").length
                }), n.cssSupportsSelector = we(function() {
                    return CSS.supports("selector(*)") && m.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                }), n.attributes = we(function(p) {
                    return p.className = "i", !p.getAttribute("className")
                }), n.getElementsByTagName = we(function(p) {
                    return p.appendChild(m.createComment("")), !p.getElementsByTagName("*").length
                }), n.getElementsByClassName = gt.test(m.getElementsByClassName), n.getById = we(function(p) {
                    return j.appendChild(p).id = U, !m.getElementsByName || !m.getElementsByName(U).length
                }), n.getById ? (i.filter.ID = function(p) {
                    var C = p.replace(He, Pe);
                    return function(w) {
                        return w.getAttribute("id") === C
                    }
                }, i.find.ID = function(p, C) {
                    if (typeof C.getElementById < "u" && $) {
                        var w = C.getElementById(p);
                        return w ? [w] : []
                    }
                }) : (i.filter.ID = function(p) {
                    var C = p.replace(He, Pe);
                    return function(w) {
                        var S = typeof w.getAttributeNode < "u" && w.getAttributeNode("id");
                        return S && S.value === C
                    }
                }, i.find.ID = function(p, C) {
                    if (typeof C.getElementById < "u" && $) {
                        var w, S, E, O = C.getElementById(p);
                        if (O) {
                            if (w = O.getAttributeNode("id"), w && w.value === p) return [O];
                            for (E = C.getElementsByName(p), S = 0; O = E[S++];)
                                if (w = O.getAttributeNode("id"), w && w.value === p) return [O]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(p, C) {
                    if (typeof C.getElementsByTagName < "u") return C.getElementsByTagName(p);
                    if (n.qsa) return C.querySelectorAll(p)
                } : function(p, C) {
                    var w, S = [],
                        E = 0,
                        O = C.getElementsByTagName(p);
                    if (p === "*") {
                        for (; w = O[E++];) w.nodeType === 1 && S.push(w);
                        return S
                    }
                    return O
                }, i.find.CLASS = n.getElementsByClassName && function(p, C) {
                    if (typeof C.getElementsByClassName < "u" && $) return C.getElementsByClassName(p)
                }, Z = [], D = [], (n.qsa = gt.test(m.querySelectorAll)) && (we(function(p) {
                    var C;
                    j.appendChild(p).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\r\\' msallowcapture=''><option selected=''></option></select>", p.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + V + `*(?:''|"")`), p.querySelectorAll("[selected]").length || D.push("\\[" + V + "*(?:value|" + en + ")"), p.querySelectorAll("[id~=" + U + "-]").length || D.push("~="), C = m.createElement("input"), C.setAttribute("name", ""), p.appendChild(C), p.querySelectorAll("[name='']").length || D.push("\\[" + V + "*name" + V + "*=" + V + `*(?:''|"")`), p.querySelectorAll(":checked").length || D.push(":checked"), p.querySelectorAll("a#" + U + "+*").length || D.push(".#.+[+~]"), p.querySelectorAll("\\\f"), D.push("[\\r\\n\\f]")
                }), we(function(p) {
                    p.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var C = m.createElement("input");
                    C.setAttribute("type", "hidden"), p.appendChild(C).setAttribute("name", "D"), p.querySelectorAll("[name=d]").length && D.push("name" + V + "*[*^$|!~]?="), p.querySelectorAll(":enabled").length !== 2 && D.push(":enabled", ":disabled"), j.appendChild(p).disabled = !0, p.querySelectorAll(":disabled").length !== 2 && D.push(":enabled", ":disabled"), p.querySelectorAll("*,:x"), D.push(",.*:")
                })), (n.matchesSelector = gt.test(K = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && we(function(p) {
                    n.disconnectedMatch = K.call(p, "*"), K.call(p, "[s!='']:x"), Z.push("!=", tn)
                }), n.cssSupportsSelector || D.push(":has"), D = D.length && new RegExp(D.join("|")), Z = Z.length && new RegExp(Z.join("|")), l = gt.test(j.compareDocumentPosition), ge = l || gt.test(j.contains) ? function(p, C) {
                    var w = p.nodeType === 9 && p.documentElement || p,
                        S = C && C.parentNode;
                    return p === S || !!(S && S.nodeType === 1 && (w.contains ? w.contains(S) : p.compareDocumentPosition && p.compareDocumentPosition(S) & 16))
                } : function(p, C) {
                    if (C) {
                        for (; C = C.parentNode;)
                            if (C === p) return !0
                    }
                    return !1
                }, ze = l ? function(p, C) {
                    if (p === C) return T = !0, 0;
                    var w = !p.compareDocumentPosition - !C.compareDocumentPosition;
                    return w || (w = (p.ownerDocument || p) == (C.ownerDocument || C) ? p.compareDocumentPosition(C) : 1, w & 1 || !n.sortDetached && C.compareDocumentPosition(p) === w ? p == m || p.ownerDocument == R && ge(R, p) ? -1 : C == m || C.ownerDocument == R && ge(R, C) ? 1 : y ? Ue(y, p) - Ue(y, C) : 0 : w & 4 ? -1 : 1)
                } : function(p, C) {
                    if (p === C) return T = !0, 0;
                    var w, S = 0,
                        E = p.parentNode,
                        O = C.parentNode,
                        k = [p],
                        P = [C];
                    if (!E || !O) return p == m ? -1 : C == m ? 1 : E ? -1 : O ? 1 : y ? Ue(y, p) - Ue(y, C) : 0;
                    if (E === O) return si(p, C);
                    for (w = p; w = w.parentNode;) k.unshift(w);
                    for (w = C; w = w.parentNode;) P.unshift(w);
                    for (; k[S] === P[S];) S++;
                    return S ? si(k[S], P[S]) : k[S] == R ? -1 : P[S] == R ? 1 : 0
                }), m
            }, X.matches = function(a, l) {
                return X(a, null, null, l)
            }, X.matchesSelector = function(a, l) {
                if (g(a), n.matchesSelector && $ && !ye[l + " "] && (!Z || !Z.test(l)) && (!D || !D.test(l))) try {
                    var d = K.call(a, l);
                    if (d || n.disconnectedMatch || a.document && a.document.nodeType !== 11) return d
                } catch {
                    ye(l, !0)
                }
                return X(l, m, null, [a]).length > 0
            }, X.contains = function(a, l) {
                return (a.ownerDocument || a) != m && g(a), ge(a, l)
            }, X.attr = function(a, l) {
                (a.ownerDocument || a) != m && g(a);
                var d = i.attrHandle[l.toLowerCase()],
                    x = d && Ve.call(i.attrHandle, l.toLowerCase()) ? d(a, l, !$) : void 0;
                return x !== void 0 ? x : n.attributes || !$ ? a.getAttribute(l) : (x = a.getAttributeNode(l)) && x.specified ? x.value : null
            }, X.escape = function(a) {
                return (a + "").replace(ii, ri)
            }, X.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, X.uniqueSort = function(a) {
                var l, d = [],
                    x = 0,
                    p = 0;
                if (T = !n.detectDuplicates, y = !n.sortStable && a.slice(0), a.sort(ze), T) {
                    for (; l = a[p++];) l === a[p] && (x = d.push(p));
                    for (; x--;) a.splice(d[x], 1)
                }
                return y = null, a
            }, o = X.getText = function(a) {
                var l, d = "",
                    x = 0,
                    p = a.nodeType;
                if (p) {
                    if (p === 1 || p === 9 || p === 11) {
                        if (typeof a.textContent == "string") return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) d += o(a)
                    } else if (p === 3 || p === 4) return a.nodeValue
                } else
                    for (; l = a[x++];) d += o(l);
                return d
            }, i = X.selectors = {
                cacheLength: 50,
                createPseudo: Ee,
                match: kt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(He, Pe), a[3] = (a[3] || a[4] || a[5] || "").replace(He, Pe), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), a[1].slice(0, 3) === "nth" ? (a[3] || X.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd")), a[5] = +(a[7] + a[8] || a[3] === "odd")) : a[3] && X.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var l, d = !a[6] && a[2];
                        return kt.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : d && wr.test(d) && (l = u(d, !0)) && (l = d.indexOf(")", d.length - l) - d.length) && (a[0] = a[0].slice(0, l), a[2] = d.slice(0, l)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var l = a.replace(He, Pe).toLowerCase();
                        return a === "*" ? function() {
                            return !0
                        } : function(d) {
                            return d.nodeName && d.nodeName.toLowerCase() === l
                        }
                    },
                    CLASS: function(a) {
                        var l = Q[a + " "];
                        return l || (l = new RegExp("(^|" + V + ")" + a + "(" + V + "|$)")) && Q(a, function(d) {
                            return l.test(typeof d.className == "string" && d.className || typeof d.getAttribute < "u" && d.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, l, d) {
                        return function(x) {
                            var p = X.attr(x, a);
                            return p == null ? l === "!=" : l ? (p += "", l === "=" ? p === d : l === "!=" ? p !== d : l === "^=" ? d && p.indexOf(d) === 0 : l === "*=" ? d && p.indexOf(d) > -1 : l === "$=" ? d && p.slice(-d.length) === d : l === "~=" ? (" " + p.replace(xr, " ") + " ").indexOf(d) > -1 : l === "|=" ? p === d || p.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, l, d, x, p) {
                        var C = a.slice(0, 3) !== "nth",
                            w = a.slice(-4) !== "last",
                            S = l === "of-type";
                        return x === 1 && p === 0 ? function(E) {
                            return !!E.parentNode
                        } : function(E, O, k) {
                            var P, F, G, H, ee, re, ve = C !== w ? "nextSibling" : "previousSibling",
                                Y = E.parentNode,
                                yt = S && E.nodeName.toLowerCase(),
                                vt = !k && !S,
                                be = !1;
                            if (Y) {
                                if (C) {
                                    for (; ve;) {
                                        for (H = E; H = H[ve];)
                                            if (S ? H.nodeName.toLowerCase() === yt : H.nodeType === 1) return !1;
                                        re = ve = a === "only" && !re && "nextSibling"
                                    }
                                    return !0
                                }
                                if (re = [w ? Y.firstChild : Y.lastChild], w && vt) {
                                    for (H = Y, G = H[U] || (H[U] = {}), F = G[H.uniqueID] || (G[H.uniqueID] = {}), P = F[a] || [], ee = P[0] === ce && P[1], be = ee && P[2], H = ee && Y.childNodes[ee]; H = ++ee && H && H[ve] || (be = ee = 0) || re.pop();)
                                        if (H.nodeType === 1 && ++be && H === E) {
                                            F[a] = [ce, ee, be];
                                            break
                                        }
                                } else if (vt && (H = E, G = H[U] || (H[U] = {}), F = G[H.uniqueID] || (G[H.uniqueID] = {}), P = F[a] || [], ee = P[0] === ce && P[1], be = ee), be === !1)
                                    for (;
                                        (H = ++ee && H && H[ve] || (be = ee = 0) || re.pop()) && !((S ? H.nodeName.toLowerCase() === yt : H.nodeType === 1) && ++be && (vt && (G = H[U] || (H[U] = {}), F = G[H.uniqueID] || (G[H.uniqueID] = {}), F[a] = [ce, be]), H === E)););
                                return be -= p, be === x || be % x === 0 && be / x >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, l) {
                        var d, x = i.pseudos[a] || i.setFilters[a.toLowerCase()] || X.error("unsupported pseudo: " + a);
                        return x[U] ? x(l) : x.length > 1 ? (d = [a, a, "", l], i.setFilters.hasOwnProperty(a.toLowerCase()) ? Ee(function(p, C) {
                            for (var w, S = x(p, l), E = S.length; E--;) w = Ue(p, S[E]), p[w] = !(C[w] = S[E])
                        }) : function(p) {
                            return x(p, 0, d)
                        }) : x
                    }
                },
                pseudos: {
                    not: Ee(function(a) {
                        var l = [],
                            d = [],
                            x = c(a.replace(jt, "$1"));
                        return x[U] ? Ee(function(p, C, w, S) {
                            for (var E, O = x(p, null, S, []), k = p.length; k--;)(E = O[k]) && (p[k] = !(C[k] = E))
                        }) : function(p, C, w) {
                            return l[0] = p, x(l, null, w, d), l[0] = null, !d.pop()
                        }
                    }),
                    has: Ee(function(a) {
                        return function(l) {
                            return X(a, l).length > 0
                        }
                    }),
                    contains: Ee(function(a) {
                        return a = a.replace(He, Pe),
                            function(l) {
                                return (l.textContent || o(l)).indexOf(a) > -1
                            }
                    }),
                    lang: Ee(function(a) {
                        return Sr.test(a || "") || X.error("unsupported lang: " + a), a = a.replace(He, Pe).toLowerCase(),
                            function(l) {
                                var d;
                                do
                                    if (d = $ ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang")) return d = d.toLowerCase(), d === a || d.indexOf(a + "-") === 0; while ((l = l.parentNode) && l.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(a) {
                        var l = e.location && e.location.hash;
                        return l && l.slice(1) === a.id
                    },
                    root: function(a) {
                        return a === j
                    },
                    focus: function(a) {
                        return a === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: ui(!1),
                    disabled: ui(!0),
                    checked: function(a) {
                        var l = a.nodeName.toLowerCase();
                        return l === "input" && !!a.checked || l === "option" && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !i.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Ar.test(a.nodeName)
                    },
                    input: function(a) {
                        return Nr.test(a.nodeName)
                    },
                    button: function(a) {
                        var l = a.nodeName.toLowerCase();
                        return l === "input" && a.type === "button" || l === "button"
                    },
                    text: function(a) {
                        var l;
                        return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((l = a.getAttribute("type")) == null || l.toLowerCase() === "text")
                    },
                    first: Ge(function() {
                        return [0]
                    }),
                    last: Ge(function(a, l) {
                        return [l - 1]
                    }),
                    eq: Ge(function(a, l, d) {
                        return [d < 0 ? d + l : d]
                    }),
                    even: Ge(function(a, l) {
                        for (var d = 0; d < l; d += 2) a.push(d);
                        return a
                    }),
                    odd: Ge(function(a, l) {
                        for (var d = 1; d < l; d += 2) a.push(d);
                        return a
                    }),
                    lt: Ge(function(a, l, d) {
                        for (var x = d < 0 ? d + l : d > l ? l : d; --x >= 0;) a.push(x);
                        return a
                    }),
                    gt: Ge(function(a, l, d) {
                        for (var x = d < 0 ? d + l : d; ++x < l;) a.push(x);
                        return a
                    })
                }
            }, i.pseudos.nth = i.pseudos.eq;
            for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = kr(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = Lr(t);

            function ai() {}
            ai.prototype = i.filters = i.pseudos, i.setFilters = new ai, u = X.tokenize = function(a, l) {
                var d, x, p, C, w, S, E, O = ht[a + " "];
                if (O) return l ? 0 : O.slice(0);
                for (w = a, S = [], E = i.preFilter; w;) {
                    (!d || (x = Cr.exec(w))) && (x && (w = w.slice(x[0].length) || w), S.push(p = [])), d = !1, (x = ni.exec(w)) && (d = x.shift(), p.push({
                        value: d,
                        type: x[0].replace(jt, " ")
                    }), w = w.slice(d.length));
                    for (C in i.filter)(x = kt[C].exec(w)) && (!E[C] || (x = E[C](x))) && (d = x.shift(), p.push({
                        value: d,
                        type: C,
                        matches: x
                    }), w = w.slice(d.length));
                    if (!d) break
                }
                return l ? w.length : w ? X.error(a) : ht(a, S).slice(0)
            };

            function qt(a) {
                for (var l = 0, d = a.length, x = ""; l < d; l++) x += a[l].value;
                return x
            }

            function Ot(a, l, d) {
                var x = l.dir,
                    p = l.next,
                    C = p || x,
                    w = d && C === "parentNode",
                    S = z++;
                return l.first ? function(E, O, k) {
                    for (; E = E[x];)
                        if (E.nodeType === 1 || w) return a(E, O, k);
                    return !1
                } : function(E, O, k) {
                    var P, F, G, H = [ce, S];
                    if (k) {
                        for (; E = E[x];)
                            if ((E.nodeType === 1 || w) && a(E, O, k)) return !0
                    } else
                        for (; E = E[x];)
                            if (E.nodeType === 1 || w)
                                if (G = E[U] || (E[U] = {}), F = G[E.uniqueID] || (G[E.uniqueID] = {}), p && p === E.nodeName.toLowerCase()) E = E[x] || E;
                                else {
                                    if ((P = F[C]) && P[0] === ce && P[1] === S) return H[2] = P[2];
                                    if (F[C] = H, H[2] = a(E, O, k)) return !0
                                } return !1
                }
            }

            function sn(a) {
                return a.length > 1 ? function(l, d, x) {
                    for (var p = a.length; p--;)
                        if (!a[p](l, d, x)) return !1;
                    return !0
                } : a[0]
            }

            function qr(a, l, d) {
                for (var x = 0, p = l.length; x < p; x++) X(a, l[x], d);
                return d
            }

            function Ht(a, l, d, x, p) {
                for (var C, w = [], S = 0, E = a.length, O = l != null; S < E; S++)(C = a[S]) && (!d || d(C, x, p)) && (w.push(C), O && l.push(S));
                return w
            }

            function un(a, l, d, x, p, C) {
                return x && !x[U] && (x = un(x)), p && !p[U] && (p = un(p, C)), Ee(function(w, S, E, O) {
                    var k, P, F, G = [],
                        H = [],
                        ee = S.length,
                        re = w || qr(l || "*", E.nodeType ? [E] : E, []),
                        ve = a && (w || !l) ? Ht(re, G, a, E, O) : re,
                        Y = d ? p || (w ? a : ee || x) ? [] : S : ve;
                    if (d && d(ve, Y, E, O), x)
                        for (k = Ht(Y, H), x(k, [], E, O), P = k.length; P--;)(F = k[P]) && (Y[H[P]] = !(ve[H[P]] = F));
                    if (w) {
                        if (p || a) {
                            if (p) {
                                for (k = [], P = Y.length; P--;)(F = Y[P]) && k.push(ve[P] = F);
                                p(null, Y = [], k, O)
                            }
                            for (P = Y.length; P--;)(F = Y[P]) && (k = p ? Ue(w, F) : G[P]) > -1 && (w[k] = !(S[k] = F))
                        }
                    } else Y = Ht(Y === S ? Y.splice(ee, Y.length) : Y), p ? p(null, S, Y, O) : $e.apply(S, Y)
                })
            }

            function an(a) {
                for (var l, d, x, p = a.length, C = i.relative[a[0].type], w = C || i.relative[" "], S = C ? 1 : 0, E = Ot(function(P) {
                        return P === l
                    }, w, !0), O = Ot(function(P) {
                        return Ue(l, P) > -1
                    }, w, !0), k = [function(P, F, G) {
                        var H = !C && (G || F !== h) || ((l = F).nodeType ? E(P, F, G) : O(P, F, G));
                        return l = null, H
                    }]; S < p; S++)
                    if (d = i.relative[a[S].type]) k = [Ot(sn(k), d)];
                    else {
                        if (d = i.filter[a[S].type].apply(null, a[S].matches), d[U]) {
                            for (x = ++S; x < p && !i.relative[a[x].type]; x++);
                            return un(S > 1 && sn(k), S > 1 && qt(a.slice(0, S - 1).concat({
                                value: a[S - 2].type === " " ? "*" : ""
                            })).replace(jt, "$1"), d, S < x && an(a.slice(S, x)), x < p && an(a = a.slice(x)), x < p && qt(a))
                        }
                        k.push(d)
                    }
                return sn(k)
            }

            function Or(a, l) {
                var d = l.length > 0,
                    x = a.length > 0,
                    p = function(C, w, S, E, O) {
                        var k, P, F, G = 0,
                            H = "0",
                            ee = C && [],
                            re = [],
                            ve = h,
                            Y = C || x && i.find.TAG("*", O),
                            yt = ce += ve == null ? 1 : Math.random() || .1,
                            vt = Y.length;
                        for (O && (h = w == m || w || O); H !== vt && (k = Y[H]) != null; H++) {
                            if (x && k) {
                                for (P = 0, !w && k.ownerDocument != m && (g(k), S = !$); F = a[P++];)
                                    if (F(k, w || m, S)) {
                                        E.push(k);
                                        break
                                    }
                                O && (ce = yt)
                            }
                            d && ((k = !F && k) && G--, C && ee.push(k))
                        }
                        if (G += H, d && H !== G) {
                            for (P = 0; F = l[P++];) F(ee, re, w, S);
                            if (C) {
                                if (G > 0)
                                    for (; H--;) ee[H] || re[H] || (re[H] = Re.call(E));
                                re = Ht(re)
                            }
                            $e.apply(E, re), O && !C && re.length > 0 && G + l.length > 1 && X.uniqueSort(E)
                        }
                        return O && (ce = yt, h = ve), ee
                    };
                return d ? Ee(p) : p
            }
            return c = X.compile = function(a, l) {
                var d, x = [],
                    p = [],
                    C = Dt[a + " "];
                if (!C) {
                    for (l || (l = u(a)), d = l.length; d--;) C = an(l[d]), C[U] ? x.push(C) : p.push(C);
                    C = Dt(a, Or(p, x)), C.selector = a
                }
                return C
            }, f = X.select = function(a, l, d, x) {
                var p, C, w, S, E, O = typeof a == "function" && a,
                    k = !x && u(a = O.selector || a);
                if (d = d || [], k.length === 1) {
                    if (C = k[0] = k[0].slice(0), C.length > 2 && (w = C[0]).type === "ID" && l.nodeType === 9 && $ && i.relative[C[1].type]) {
                        if (l = (i.find.ID(w.matches[0].replace(He, Pe), l) || [])[0], l) O && (l = l.parentNode);
                        else return d;
                        a = a.slice(C.shift().value.length)
                    }
                    for (p = kt.needsContext.test(a) ? 0 : C.length; p-- && (w = C[p], !i.relative[S = w.type]);)
                        if ((E = i.find[S]) && (x = E(w.matches[0].replace(He, Pe), nn.test(C[0].type) && on(l.parentNode) || l))) {
                            if (C.splice(p, 1), a = x.length && qt(C), !a) return $e.apply(d, x), d;
                            break
                        }
                }
                return (O || c(a, k))(x, l, !$, d, !l || nn.test(a) && on(l.parentNode) || l), d
            }, n.sortStable = U.split("").sort(ze).join("") === U, n.detectDuplicates = !!T, g(), n.sortDetached = we(function(a) {
                return a.compareDocumentPosition(m.createElement("fieldset")) & 1
            }), we(function(a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild.getAttribute("href") === "#"
            }) || rn("type|href|height|width", function(a, l, d) {
                if (!d) return a.getAttribute(l, l.toLowerCase() === "type" ? 1 : 2)
            }), (!n.attributes || !we(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), a.firstChild.getAttribute("value") === ""
            })) && rn("value", function(a, l, d) {
                if (!d && a.nodeName.toLowerCase() === "input") return a.defaultValue
            }), we(function(a) {
                return a.getAttribute("disabled") == null
            }) || rn(en, function(a, l, d) {
                var x;
                if (!d) return a[l] === !0 ? l.toLowerCase() : (x = a.getAttributeNode(l)) && x.specified ? x.value : null
            }), X
        }(b);
        r.find = oe, r.expr = oe.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = oe.uniqueSort, r.text = oe.getText, r.isXMLDoc = oe.isXML, r.contains = oe.contains, r.escapeSelector = oe.escape;
        var xe = function(e, t, n) {
                for (var i = [], o = n !== void 0;
                    (e = e[t]) && e.nodeType !== 9;)
                    if (e.nodeType === 1) {
                        if (o && r(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Ie = function(e, t) {
                for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            },
            We = r.expr.match.needsContext;

        function ue(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function $t(e, t, n) {
            return L(t) ? r.grep(e, function(i, o) {
                return !!t.call(i, o, i) !== n
            }) : t.nodeType ? r.grep(e, function(i) {
                return i === t !== n
            }) : typeof t != "string" ? r.grep(e, function(i) {
                return ne.call(t, i) > -1 !== n
            }) : r.filter(t, e, n)
        }
        r.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && i.nodeType === 1 ? r.find.matchesSelector(i, e) ? [i] : [] : r.find.matches(e, r.grep(t, function(o) {
                return o.nodeType === 1
            }))
        }, r.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if (typeof e != "string") return this.pushStack(r(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (r.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) r.find(e, o[t], n);
                return i > 1 ? r.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack($t(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack($t(this, e || [], !0))
            },
            is: function(e) {
                return !!$t(this, typeof e == "string" && We.test(e) ? r(e) : e || [], !1).length
            }
        });
        var mn, wi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Si = r.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || mn, typeof e == "string")
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? i = [null, e, null] : i = wi.exec(e), i && (i[1] || !t))
                        if (i[1]) {
                            if (t = t instanceof r ? t[0] : t, r.merge(this, r.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), xt.test(i[1]) && r.isPlainObject(t))
                                for (i in t) L(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        } else return o = _.getElementById(i[2]), o && (this[0] = o, this.length = 1), this;
                else return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                else {
                    if (e.nodeType) return this[0] = e, this.length = 1, this;
                    if (L(e)) return n.ready !== void 0 ? n.ready(e) : e(r)
                }
                return r.makeArray(e, this)
            };
        Si.prototype = r.fn, mn = r(_);
        var Ei = /^(?:parents|prev(?:Until|All))/,
            Ni = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        r.fn.extend({
            has: function(e) {
                var t = r(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var i = 0; i < n; i++)
                        if (r.contains(this, t[i])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    s = [],
                    u = typeof e != "string" && r(e);
                if (!We.test(e)) {
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (u ? u.index(n) > -1 : n.nodeType === 1 && r.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            }
                }
                return this.pushStack(s.length > 1 ? r.uniqueSort(s) : s)
            },
            index: function(e) {
                return e ? typeof e == "string" ? ne.call(r(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(r.uniqueSort(r.merge(this.get(), r(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function xn(e, t) {
            for (;
                (e = e[t]) && e.nodeType !== 1;);
            return e
        }
        r.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return xe(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return xe(e, "parentNode", n)
            },
            next: function(e) {
                return xn(e, "nextSibling")
            },
            prev: function(e) {
                return xn(e, "previousSibling")
            },
            nextAll: function(e) {
                return xe(e, "nextSibling")
            },
            prevAll: function(e) {
                return xe(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return xe(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return xe(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ie((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ie(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument != null && I(e.contentDocument) ? e.contentDocument : (ue(e, "template") && (e = e.content || e), r.merge([], e.childNodes))
            }
        }, function(e, t) {
            r.fn[e] = function(n, i) {
                var o = r.map(this, t, n);
                return e.slice(-5) !== "Until" && (i = n), i && typeof i == "string" && (o = r.filter(i, o)), this.length > 1 && (Ni[e] || r.uniqueSort(o), Ei.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Ae = /[^\x20\t\r\n\f]+/g;

        function Ai(e) {
            var t = {};
            return r.each(e.match(Ae) || [], function(n, i) {
                t[i] = !0
            }), t
        }
        r.Callbacks = function(e) {
            e = typeof e == "string" ? Ai(e) : r.extend({}, e);
            var t, n, i, o, s = [],
                u = [],
                c = -1,
                f = function() {
                    for (o = o || e.once, i = t = !0; u.length; c = -1)
                        for (n = u.shift(); ++c < s.length;) s[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = s.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (n ? s = [] : s = "")
                },
                h = {
                    add: function() {
                        return s && (n && !t && (c = s.length - 1, u.push(n)), function y(T) {
                            r.each(T, function(g, m) {
                                L(m) ? (!e.unique || !h.has(m)) && s.push(m) : m && m.length && J(m) !== "string" && y(m)
                            })
                        }(arguments), n && !t && f()), this
                    },
                    remove: function() {
                        return r.each(arguments, function(y, T) {
                            for (var g;
                                (g = r.inArray(T, s, g)) > -1;) s.splice(g, 1), g <= c && c--
                        }), this
                    },
                    has: function(y) {
                        return y ? r.inArray(y, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = u = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = u = [], !n && !t && (s = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(y, T) {
                        return o || (T = T || [], T = [y, T.slice ? T.slice() : T], u.push(T), t || f()), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return h
        };

        function Ke(e) {
            return e
        }

        function Ct(e) {
            throw e
        }

        function Cn(e, t, n, i) {
            var o;
            try {
                e && L(o = e.promise) ? o.call(e).done(t).fail(n) : e && L(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (s) {
                n.apply(void 0, [s])
            }
        }
        r.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                        ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(s) {
                            return i.then(null, s)
                        },
                        pipe: function() {
                            var s = arguments;
                            return r.Deferred(function(u) {
                                r.each(t, function(c, f) {
                                    var h = L(s[f[4]]) && s[f[4]];
                                    o[f[1]](function() {
                                        var y = h && h.apply(this, arguments);
                                        y && L(y.promise) ? y.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[f[0] + "With"](this, h ? [y] : arguments)
                                    })
                                }), s = null
                            }).promise()
                        },
                        then: function(s, u, c) {
                            var f = 0;

                            function h(y, T, g, m) {
                                return function() {
                                    var j = this,
                                        $ = arguments,
                                        D = function() {
                                            var K, ge;
                                            if (!(y < f)) {
                                                if (K = g.apply(j, $), K === T.promise()) throw new TypeError("Thenable self-resolution");
                                                ge = K && (typeof K == "object" || typeof K == "function") && K.then, L(ge) ? m ? ge.call(K, h(f, T, Ke, m), h(f, T, Ct, m)) : (f++, ge.call(K, h(f, T, Ke, m), h(f, T, Ct, m), h(f, T, Ke, T.notifyWith))) : (g !== Ke && (j = void 0, $ = [K]), (m || T.resolveWith)(j, $))
                                            }
                                        },
                                        Z = m ? D : function() {
                                            try {
                                                D()
                                            } catch (K) {
                                                r.Deferred.exceptionHook && r.Deferred.exceptionHook(K, Z.stackTrace), y + 1 >= f && (g !== Ct && (j = void 0, $ = [K]), T.rejectWith(j, $))
                                            }
                                        };
                                    y ? Z() : (r.Deferred.getStackHook && (Z.stackTrace = r.Deferred.getStackHook()), b.setTimeout(Z))
                                }
                            }
                            return r.Deferred(function(y) {
                                t[0][3].add(h(0, y, L(c) ? c : Ke, y.notifyWith)), t[1][3].add(h(0, y, L(s) ? s : Ke)), t[2][3].add(h(0, y, L(u) ? u : Ct))
                            }).promise()
                        },
                        promise: function(s) {
                            return s != null ? r.extend(s, i) : i
                        }
                    },
                    o = {};
                return r.each(t, function(s, u) {
                    var c = u[2],
                        f = u[5];
                    i[u[1]] = c.add, f && c.add(function() {
                        n = f
                    }, t[3 - s][2].disable, t[3 - s][3].disable, t[0][2].lock, t[0][3].lock), c.add(u[3].fire), o[u[0]] = function() {
                        return o[u[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[u[0] + "With"] = c.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = M.call(arguments),
                    s = r.Deferred(),
                    u = function(c) {
                        return function(f) {
                            i[c] = this, o[c] = arguments.length > 1 ? M.call(arguments) : f, --t || s.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (Cn(e, s.done(u(n)).resolve, s.reject, !t), s.state() === "pending" || L(o[n] && o[n].then))) return s.then();
                for (; n--;) Cn(o[n], u(n), s.reject);
                return s.promise()
            }
        });
        var Di = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        r.Deferred.exceptionHook = function(e, t) {
            b.console && b.console.warn && e && Di.test(e.name) && b.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, r.readyException = function(e) {
            b.setTimeout(function() {
                throw e
            })
        };
        var It = r.Deferred();
        r.fn.ready = function(e) {
            return It.then(e).catch(function(t) {
                r.readyException(t)
            }), this
        }, r.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (e === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, !(e !== !0 && --r.readyWait > 0) && It.resolveWith(_, [r]))
            }
        }), r.ready.then = It.then;

        function Tt() {
            _.removeEventListener("DOMContentLoaded", Tt), b.removeEventListener("load", Tt), r.ready()
        }
        _.readyState === "complete" || _.readyState !== "loading" && !_.documentElement.doScroll ? b.setTimeout(r.ready) : (_.addEventListener("DOMContentLoaded", Tt), b.addEventListener("load", Tt));
        var qe = function(e, t, n, i, o, s, u) {
                var c = 0,
                    f = e.length,
                    h = n == null;
                if (J(n) === "object") {
                    o = !0;
                    for (c in n) qe(e, t, c, n[c], !0, s, u)
                } else if (i !== void 0 && (o = !0, L(i) || (u = !0), h && (u ? (t.call(e, i), t = null) : (h = t, t = function(y, T, g) {
                        return h.call(r(y), g)
                    })), t))
                    for (; c < f; c++) t(e[c], n, u ? i : i.call(e[c], c, t(e[c], n)));
                return o ? e : h ? t.call(e) : f ? t(e[0], n) : s
            },
            ji = /^-ms-/,
            ki = /-([a-z])/g;

        function Li(e, t) {
            return t.toUpperCase()
        }

        function De(e) {
            return e.replace(ji, "ms-").replace(ki, Li)
        }
        var st = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function ut() {
            this.expando = r.expando + ut.uid++
        }
        ut.uid = 1, ut.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, st(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if (typeof t == "string") o[De(t)] = n;
                else
                    for (i in t) o[De(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][De(t)]
            },
            access: function(e, t, n) {
                return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (i !== void 0) {
                    if (t !== void 0)
                        for (Array.isArray(t) ? t = t.map(De) : (t = De(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length; n--;) delete i[t[n]];
                    (t === void 0 || r.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== void 0 && !r.isEmptyObject(t)
            }
        };
        var q = new ut,
            ae = new ut,
            qi = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Oi = /[A-Z]/g;

        function Hi(e) {
            return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : qi.test(e) ? JSON.parse(e) : e
        }

        function Tn(e, t, n) {
            var i;
            if (n === void 0 && e.nodeType === 1)
                if (i = "data-" + t.replace(Oi, "-$&").toLowerCase(), n = e.getAttribute(i), typeof n == "string") {
                    try {
                        n = Hi(n)
                    } catch {}
                    ae.set(e, t, n)
                } else n = void 0;
            return n
        }
        r.extend({
            hasData: function(e) {
                return ae.hasData(e) || q.hasData(e)
            },
            data: function(e, t, n) {
                return ae.access(e, t, n)
            },
            removeData: function(e, t) {
                ae.remove(e, t)
            },
            _data: function(e, t, n) {
                return q.access(e, t, n)
            },
            _removeData: function(e, t) {
                q.remove(e, t)
            }
        }), r.fn.extend({
            data: function(e, t) {
                var n, i, o, s = this[0],
                    u = s && s.attributes;
                if (e === void 0) {
                    if (this.length && (o = ae.get(s), s.nodeType === 1 && !q.get(s, "hasDataAttrs"))) {
                        for (n = u.length; n--;) u[n] && (i = u[n].name, i.indexOf("data-") === 0 && (i = De(i.slice(5)), Tn(s, i, o[i])));
                        q.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return typeof e == "object" ? this.each(function() {
                    ae.set(this, e)
                }) : qe(this, function(c) {
                    var f;
                    if (s && c === void 0) return f = ae.get(s, e), f !== void 0 || (f = Tn(s, e), f !== void 0) ? f : void 0;
                    this.each(function() {
                        ae.set(this, e, c)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ae.remove(this, e)
                })
            }
        }), r.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = q.get(e, t), n && (!i || Array.isArray(n) ? i = q.access(e, t, r.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = r.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    s = r._queueHooks(e, t),
                    u = function() {
                        r.dequeue(e, t)
                    };
                o === "inprogress" && (o = n.shift(), i--), o && (t === "fx" && n.unshift("inprogress"), delete s.stop, o.call(e, u, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return q.get(e, n) || q.access(e, n, {
                    empty: r.Callbacks("once memory").add(function() {
                        q.remove(e, [t + "queue", n])
                    })
                })
            }
        }), r.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? r.queue(this[0], e) : t === void 0 ? this : this.each(function() {
                    var i = r.queue(this, e, t);
                    r._queueHooks(this, e), e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    r.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = r.Deferred(),
                    s = this,
                    u = this.length,
                    c = function() {
                        --i || o.resolveWith(s, [s])
                    };
                for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; u--;) n = q.get(s[u], e + "queueHooks"), n && n.empty && (i++, n.empty.add(c));
                return c(), o.promise(t)
            }
        });
        var wn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            at = new RegExp("^(?:([+-])=|)(" + wn + ")([a-z%]*)$", "i"),
            Oe = ["Top", "Right", "Bottom", "Left"],
            _e = _.documentElement,
            Ze = function(e) {
                return r.contains(e.ownerDocument, e)
            },
            Pi = {
                composed: !0
            };
        _e.getRootNode && (Ze = function(e) {
            return r.contains(e.ownerDocument, e) || e.getRootNode(Pi) === e.ownerDocument
        });
        var wt = function(e, t) {
            return e = t || e, e.style.display === "none" || e.style.display === "" && Ze(e) && r.css(e, "display") === "none"
        };

        function Sn(e, t, n, i) {
            var o, s, u = 20,
                c = i ? function() {
                    return i.cur()
                } : function() {
                    return r.css(e, t, "")
                },
                f = c(),
                h = n && n[3] || (r.cssNumber[t] ? "" : "px"),
                y = e.nodeType && (r.cssNumber[t] || h !== "px" && +f) && at.exec(r.css(e, t));
            if (y && y[3] !== h) {
                for (f = f / 2, h = h || y[3], y = +f || 1; u--;) r.style(e, t, y + h), (1 - s) * (1 - (s = c() / f || .5)) <= 0 && (u = 0), y = y / s;
                y = y * 2, r.style(e, t, y + h), n = n || []
            }
            return n && (y = +y || +f || 0, o = n[1] ? y + (n[1] + 1) * n[2] : +n[2], i && (i.unit = h, i.start = y, i.end = o)), o
        }
        var En = {};

        function Mi(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = En[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = r.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), En[i] = o, o)
        }

        function et(e, t) {
            for (var n, i, o = [], s = 0, u = e.length; s < u; s++) i = e[s], i.style && (n = i.style.display, t ? (n === "none" && (o[s] = q.get(i, "display") || null, o[s] || (i.style.display = "")), i.style.display === "" && wt(i) && (o[s] = Mi(i))) : n !== "none" && (o[s] = "none", q.set(i, "display", n)));
            for (s = 0; s < u; s++) o[s] != null && (e[s].style.display = o[s]);
            return e
        }
        r.fn.extend({
            show: function() {
                return et(this, !0)
            },
            hide: function() {
                return et(this)
            },
            toggle: function(e) {
                return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                    wt(this) ? r(this).show() : r(this).hide()
                })
            }
        });
        var ft = /^(?:checkbox|radio)$/i,
            Nn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            An = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var e = _.createDocumentFragment(),
                t = e.appendChild(_.createElement("div")),
                n = _.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), W.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", W.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", W.option = !!t.lastChild
        })();
        var Ce = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ce.tbody = Ce.tfoot = Ce.colgroup = Ce.caption = Ce.thead, Ce.th = Ce.td, W.option || (Ce.optgroup = Ce.option = [1, "<select multiple='multiple'>", "</select>"]);

        function fe(e, t) {
            var n;
            return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && ue(e, t) ? r.merge([e], n) : n
        }

        function Wt(e, t) {
            for (var n = 0, i = e.length; n < i; n++) q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"))
        }
        var Ri = /<|&#?\w+;/;

        function Dn(e, t, n, i, o) {
            for (var s, u, c, f, h, y, T = t.createDocumentFragment(), g = [], m = 0, j = e.length; m < j; m++)
                if (s = e[m], s || s === 0)
                    if (J(s) === "object") r.merge(g, s.nodeType ? [s] : s);
                    else if (!Ri.test(s)) g.push(t.createTextNode(s));
            else {
                for (u = u || T.appendChild(t.createElement("div")), c = (Nn.exec(s) || ["", ""])[1].toLowerCase(), f = Ce[c] || Ce._default, u.innerHTML = f[1] + r.htmlPrefilter(s) + f[2], y = f[0]; y--;) u = u.lastChild;
                r.merge(g, u.childNodes), u = T.firstChild, u.textContent = ""
            }
            for (T.textContent = "", m = 0; s = g[m++];) {
                if (i && r.inArray(s, i) > -1) {
                    o && o.push(s);
                    continue
                }
                if (h = Ze(s), u = fe(T.appendChild(s), "script"), h && Wt(u), n)
                    for (y = 0; s = u[y++];) An.test(s.type || "") && n.push(s)
            }
            return T
        }
        var jn = /^([^.]*)(?:\.(.+)|)/;

        function tt() {
            return !0
        }

        function nt() {
            return !1
        }

        function $i(e, t) {
            return e === Ii() == (t === "focus")
        }

        function Ii() {
            try {
                return _.activeElement
            } catch {}
        }

        function _t(e, t, n, i, o, s) {
            var u, c;
            if (typeof t == "object") {
                typeof n != "string" && (i = i || n, n = void 0);
                for (c in t) _t(e, c, n, i, t[c], s);
                return e
            }
            if (i == null && o == null ? (o = n, i = n = void 0) : o == null && (typeof n == "string" ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = nt;
            else if (!o) return e;
            return s === 1 && (u = o, o = function(f) {
                return r().off(f), u.apply(this, arguments)
            }, o.guid = u.guid || (u.guid = r.guid++)), e.each(function() {
                r.event.add(this, t, o, i, n)
            })
        }
        r.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var s, u, c, f, h, y, T, g, m, j, $, D = q.get(e);
                if (st(e))
                    for (n.handler && (s = n, n = s.handler, o = s.selector), o && r.find.matchesSelector(_e, o), n.guid || (n.guid = r.guid++), (f = D.events) || (f = D.events = Object.create(null)), (u = D.handle) || (u = D.handle = function(Z) {
                            return typeof r < "u" && r.event.triggered !== Z.type ? r.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Ae) || [""], h = t.length; h--;) c = jn.exec(t[h]) || [], m = $ = c[1], j = (c[2] || "").split(".").sort(), m && (T = r.event.special[m] || {}, m = (o ? T.delegateType : T.bindType) || m, T = r.event.special[m] || {}, y = r.extend({
                        type: m,
                        origType: $,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && r.expr.match.needsContext.test(o),
                        namespace: j.join(".")
                    }, s), (g = f[m]) || (g = f[m] = [], g.delegateCount = 0, (!T.setup || T.setup.call(e, i, j, u) === !1) && e.addEventListener && e.addEventListener(m, u)), T.add && (T.add.call(e, y), y.handler.guid || (y.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, y) : g.push(y), r.event.global[m] = !0)
            },
            remove: function(e, t, n, i, o) {
                var s, u, c, f, h, y, T, g, m, j, $, D = q.hasData(e) && q.get(e);
                if (!(!D || !(f = D.events))) {
                    for (t = (t || "").match(Ae) || [""], h = t.length; h--;) {
                        if (c = jn.exec(t[h]) || [], m = $ = c[1], j = (c[2] || "").split(".").sort(), !m) {
                            for (m in f) r.event.remove(e, m + t[h], n, i, !0);
                            continue
                        }
                        for (T = r.event.special[m] || {}, m = (i ? T.delegateType : T.bindType) || m, g = f[m] || [], c = c[2] && new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = s = g.length; s--;) y = g[s], (o || $ === y.origType) && (!n || n.guid === y.guid) && (!c || c.test(y.namespace)) && (!i || i === y.selector || i === "**" && y.selector) && (g.splice(s, 1), y.selector && g.delegateCount--, T.remove && T.remove.call(e, y));
                        u && !g.length && ((!T.teardown || T.teardown.call(e, j, D.handle) === !1) && r.removeEvent(e, m, D.handle), delete f[m])
                    }
                    r.isEmptyObject(f) && q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, s, u, c = new Array(arguments.length),
                    f = r.event.fix(e),
                    h = (q.get(this, "events") || Object.create(null))[f.type] || [],
                    y = r.event.special[f.type] || {};
                for (c[0] = f, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                if (f.delegateTarget = this, !(y.preDispatch && y.preDispatch.call(this, f) === !1)) {
                    for (u = r.event.handlers.call(this, f, h), t = 0;
                        (o = u[t++]) && !f.isPropagationStopped();)
                        for (f.currentTarget = o.elem, n = 0;
                            (s = o.handlers[n++]) && !f.isImmediatePropagationStopped();)(!f.rnamespace || s.namespace === !1 || f.rnamespace.test(s.namespace)) && (f.handleObj = s, f.data = s.data, i = ((r.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, c), i !== void 0 && (f.result = i) === !1 && (f.preventDefault(), f.stopPropagation()));
                    return y.postDispatch && y.postDispatch.call(this, f), f.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, s, u, c = [],
                    f = t.delegateCount,
                    h = e.target;
                if (f && h.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; h !== this; h = h.parentNode || this)
                        if (h.nodeType === 1 && !(e.type === "click" && h.disabled === !0)) {
                            for (s = [], u = {}, n = 0; n < f; n++) i = t[n], o = i.selector + " ", u[o] === void 0 && (u[o] = i.needsContext ? r(o, this).index(h) > -1 : r.find(o, this, null, [h]).length), u[o] && s.push(i);
                            s.length && c.push({
                                elem: h,
                                handlers: s
                            })
                        }
                }
                return h = this, f < t.length && c.push({
                    elem: h,
                    handlers: t.slice(f)
                }), c
            },
            addProp: function(e, t) {
                Object.defineProperty(r.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: L(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(n) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                })
            },
            fix: function(e) {
                return e[r.expando] ? e : new r.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return ft.test(t.type) && t.click && ue(t, "input") && St(t, "click", tt), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return ft.test(t.type) && t.click && ue(t, "input") && St(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return ft.test(t.type) && t.click && ue(t, "input") && q.get(t, "click") || ue(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        };

        function St(e, t, n) {
            if (!n) {
                q.get(e, t) === void 0 && r.event.add(e, t, tt);
                return
            }
            q.set(e, t, !1), r.event.add(e, t, {
                namespace: !1,
                handler: function(i) {
                    var o, s, u = q.get(this, t);
                    if (i.isTrigger & 1 && this[t]) {
                        if (u.length)(r.event.special[t] || {}).delegateType && i.stopPropagation();
                        else if (u = M.call(arguments), q.set(this, t, u), o = n(this, t), this[t](), s = q.get(this, t), u !== s || o ? q.set(this, t, !1) : s = {}, u !== s) return i.stopImmediatePropagation(), i.preventDefault(), s && s.value
                    } else u.length && (q.set(this, t, {
                        value: r.event.trigger(r.extend(u[0], r.Event.prototype), u.slice(1), this)
                    }), i.stopImmediatePropagation())
                }
            })
        }
        r.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, r.Event = function(e, t) {
            if (!(this instanceof r.Event)) return new r.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? tt : nt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && r.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[r.expando] = !0
        }, r.Event.prototype = {
            constructor: r.Event,
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = tt, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = tt, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = tt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, r.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, r.event.addProp), r.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            r.event.special[e] = {
                setup: function() {
                    return St(this, e, $i), !1
                },
                trigger: function() {
                    return St(this, e), !0
                },
                _default: function(n) {
                    return q.get(n.target, e)
                },
                delegateType: t
            }
        }), r.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            r.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var i, o = this,
                        s = n.relatedTarget,
                        u = n.handleObj;
                    return (!s || s !== o && !r.contains(o, s)) && (n.type = u.origType, i = u.handler.apply(this, arguments), n.type = t), i
                }
            }
        }), r.fn.extend({
            on: function(e, t, n, i) {
                return _t(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return _t(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, r(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = nt), this.each(function() {
                    r.event.remove(this, e, n, t)
                })
            }
        });
        var Wi = /<script|<style|<link/i,
            _i = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Fi = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function kn(e, t) {
            return ue(e, "table") && ue(t.nodeType !== 11 ? t : t.firstChild, "tr") && r(e).children("tbody")[0] || e
        }

        function Bi(e) {
            return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
        }

        function zi(e) {
            return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ln(e, t) {
            var n, i, o, s, u, c, f;
            if (t.nodeType === 1) {
                if (q.hasData(e) && (s = q.get(e), f = s.events, f)) {
                    q.remove(t, "handle events");
                    for (o in f)
                        for (n = 0, i = f[o].length; n < i; n++) r.event.add(t, o, f[o][n])
                }
                ae.hasData(e) && (u = ae.access(e), c = r.extend({}, u), ae.set(t, c))
            }
        }

        function Vi(e, t) {
            var n = t.nodeName.toLowerCase();
            n === "input" && ft.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
        }

        function it(e, t, n, i) {
            t = B(t);
            var o, s, u, c, f, h, y = 0,
                T = e.length,
                g = T - 1,
                m = t[0],
                j = L(m);
            if (j || T > 1 && typeof m == "string" && !W.checkClone && _i.test(m)) return e.each(function($) {
                var D = e.eq($);
                j && (t[0] = m.call(this, $, D.html())), it(D, t, n, i)
            });
            if (T && (o = Dn(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, o.childNodes.length === 1 && (o = s), s || i)) {
                for (u = r.map(fe(o, "script"), Bi), c = u.length; y < T; y++) f = o, y !== g && (f = r.clone(f, !0, !0), c && r.merge(u, fe(f, "script"))), n.call(e[y], f, y);
                if (c)
                    for (h = u[u.length - 1].ownerDocument, r.map(u, zi), y = 0; y < c; y++) f = u[y], An.test(f.type || "") && !q.access(f, "globalEval") && r.contains(h, f) && (f.src && (f.type || "").toLowerCase() !== "module" ? r._evalUrl && !f.noModule && r._evalUrl(f.src, {
                        nonce: f.nonce || f.getAttribute("nonce")
                    }, h) : mt(f.textContent.replace(Fi, ""), f, h))
            }
            return e
        }

        function qn(e, t, n) {
            for (var i, o = t ? r.filter(t, e) : e, s = 0;
                (i = o[s]) != null; s++) !n && i.nodeType === 1 && r.cleanData(fe(i)), i.parentNode && (n && Ze(i) && Wt(fe(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        r.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var i, o, s, u, c = e.cloneNode(!0),
                    f = Ze(e);
                if (!W.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !r.isXMLDoc(e))
                    for (u = fe(c), s = fe(e), i = 0, o = s.length; i < o; i++) Vi(s[i], u[i]);
                if (t)
                    if (n)
                        for (s = s || fe(e), u = u || fe(c), i = 0, o = s.length; i < o; i++) Ln(s[i], u[i]);
                    else Ln(e, c);
                return u = fe(c, "script"), u.length > 0 && Wt(u, !f && fe(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, i, o = r.event.special, s = 0;
                    (n = e[s]) !== void 0; s++)
                    if (st(n)) {
                        if (t = n[q.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? r.event.remove(n, i) : r.removeEvent(n, i, t.handle);
                            n[q.expando] = void 0
                        }
                        n[ae.expando] && (n[ae.expando] = void 0)
                    }
            }
        }), r.fn.extend({
            detach: function(e) {
                return qn(this, e, !0)
            },
            remove: function(e) {
                return qn(this, e)
            },
            text: function(e) {
                return qe(this, function(t) {
                    return t === void 0 ? r.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return it(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = kn(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return it(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = kn(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return it(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return it(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0;
                    (e = this[t]) != null; t++) e.nodeType === 1 && (r.cleanData(fe(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = e ? ? !1, t = t ? ? e, this.map(function() {
                    return r.clone(this, e, t)
                })
            },
            html: function(e) {
                return qe(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                    if (typeof t == "string" && !Wi.test(t) && !Ce[(Nn.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = r.htmlPrefilter(t);
                        try {
                            for (; i < o; i++) n = this[i] || {}, n.nodeType === 1 && (r.cleanData(fe(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch {}
                    }
                    n && this.empty().append(t)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return it(this, arguments, function(t) {
                    var n = this.parentNode;
                    r.inArray(this, e) < 0 && (r.cleanData(fe(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), r.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            r.fn[e] = function(n) {
                for (var i, o = [], s = r(n), u = s.length - 1, c = 0; c <= u; c++) i = c === u ? this : this.clone(!0), r(s[c])[t](i), te.apply(o, i.get());
                return this.pushStack(o)
            }
        });
        var Ft = new RegExp("^(" + wn + ")(?!px)[a-z%]+$", "i"),
            Bt = /^--/,
            Et = function(e) {
                var t = e.ownerDocument.defaultView;
                return (!t || !t.opener) && (t = b), t.getComputedStyle(e)
            },
            On = function(e, t, n) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.call(e);
                for (o in t) e.style[o] = s[o];
                return i
            },
            Ui = new RegExp(Oe.join("|"), "i"),
            Hn = "[\\x20\\t\\r\\n\\f]",
            Xi = new RegExp("^" + Hn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Hn + "+$", "g");
        (function() {
            function e() {
                if (h) {
                    f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(f).appendChild(h);
                    var y = b.getComputedStyle(h);
                    n = y.top !== "1%", c = t(y.marginLeft) === 12, h.style.right = "60%", s = t(y.right) === 36, i = t(y.width) === 36, h.style.position = "absolute", o = t(h.offsetWidth / 3) === 12, _e.removeChild(f), h = null
                }
            }

            function t(y) {
                return Math.round(parseFloat(y))
            }
            var n, i, o, s, u, c, f = _.createElement("div"),
                h = _.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", W.clearCloneStyle = h.style.backgroundClip === "content-box", r.extend(W, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), c
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var y, T, g, m;
                    return u == null && (y = _.createElement("table"), T = _.createElement("tr"), g = _.createElement("div"), y.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", T.style.cssText = "border:1px solid", T.style.height = "1px", g.style.height = "9px", g.style.display = "block", _e.appendChild(y).appendChild(T).appendChild(g), m = b.getComputedStyle(T), u = parseInt(m.height, 10) + parseInt(m.borderTopWidth, 10) + parseInt(m.borderBottomWidth, 10) === T.offsetHeight, _e.removeChild(y)), u
                }
            }))
        })();

        function lt(e, t, n) {
            var i, o, s, u, c = Bt.test(t),
                f = e.style;
            return n = n || Et(e), n && (u = n.getPropertyValue(t) || n[t], c && u && (u = u.replace(Xi, "$1") || void 0), u === "" && !Ze(e) && (u = r.style(e, t)), !W.pixelBoxStyles() && Ft.test(u) && Ui.test(t) && (i = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = n.width, f.width = i, f.minWidth = o, f.maxWidth = s)), u !== void 0 ? u + "" : u
        }

        function Pn(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Mn = ["Webkit", "Moz", "ms"],
            Rn = _.createElement("div").style,
            $n = {};

        function Gi(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Mn.length; n--;)
                if (e = Mn[n] + t, e in Rn) return e
        }

        function zt(e) {
            var t = r.cssProps[e] || $n[e];
            return t || (e in Rn ? e : $n[e] = Gi(e) || e)
        }
        var Yi = /^(none|table(?!-c[ea]).+)/,
            Qi = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            In = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Wn(e, t, n) {
            var i = at.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function Vt(e, t, n, i, o, s) {
            var u = t === "width" ? 1 : 0,
                c = 0,
                f = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; u < 4; u += 2) n === "margin" && (f += r.css(e, n + Oe[u], !0, o)), i ? (n === "content" && (f -= r.css(e, "padding" + Oe[u], !0, o)), n !== "margin" && (f -= r.css(e, "border" + Oe[u] + "Width", !0, o))) : (f += r.css(e, "padding" + Oe[u], !0, o), n !== "padding" ? f += r.css(e, "border" + Oe[u] + "Width", !0, o) : c += r.css(e, "border" + Oe[u] + "Width", !0, o));
            return !i && s >= 0 && (f += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - f - c - .5)) || 0), f
        }

        function _n(e, t, n) {
            var i = Et(e),
                o = !W.boxSizingReliable() || n,
                s = o && r.css(e, "boxSizing", !1, i) === "border-box",
                u = s,
                c = lt(e, t, i),
                f = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ft.test(c)) {
                if (!n) return c;
                c = "auto"
            }
            return (!W.boxSizingReliable() && s || !W.reliableTrDimensions() && ue(e, "tr") || c === "auto" || !parseFloat(c) && r.css(e, "display", !1, i) === "inline") && e.getClientRects().length && (s = r.css(e, "boxSizing", !1, i) === "border-box", u = f in e, u && (c = e[f])), c = parseFloat(c) || 0, c + Vt(e, t, n || (s ? "border" : "content"), u, i, c) + "px"
        }
        r.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = lt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                    var o, s, u, c = De(t),
                        f = Bt.test(t),
                        h = e.style;
                    if (f || (t = zt(c)), u = r.cssHooks[t] || r.cssHooks[c], n !== void 0) {
                        if (s = typeof n, s === "string" && (o = at.exec(n)) && o[1] && (n = Sn(e, t, o), s = "number"), n == null || n !== n) return;
                        s === "number" && !f && (n += o && o[3] || (r.cssNumber[c] ? "" : "px")), !W.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (h[t] = "inherit"), (!u || !("set" in u) || (n = u.set(e, n, i)) !== void 0) && (f ? h.setProperty(t, n) : h[t] = n)
                    } else return u && "get" in u && (o = u.get(e, !1, i)) !== void 0 ? o : h[t]
                }
            },
            css: function(e, t, n, i) {
                var o, s, u, c = De(t),
                    f = Bt.test(t);
                return f || (t = zt(c)), u = r.cssHooks[t] || r.cssHooks[c], u && "get" in u && (o = u.get(e, !0, n)), o === void 0 && (o = lt(e, t, i)), o === "normal" && t in In && (o = In[t]), n === "" || n ? (s = parseFloat(o), n === !0 || isFinite(s) ? s || 0 : o) : o
            }
        }), r.each(["height", "width"], function(e, t) {
            r.cssHooks[t] = {
                get: function(n, i, o) {
                    if (i) return Yi.test(r.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? On(n, Qi, function() {
                        return _n(n, t, o)
                    }) : _n(n, t, o)
                },
                set: function(n, i, o) {
                    var s, u = Et(n),
                        c = !W.scrollboxSize() && u.position === "absolute",
                        f = c || o,
                        h = f && r.css(n, "boxSizing", !1, u) === "border-box",
                        y = o ? Vt(n, t, o, h, u) : 0;
                    return h && c && (y -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - Vt(n, t, "border", !1, u) - .5)), y && (s = at.exec(i)) && (s[3] || "px") !== "px" && (n.style[t] = i, i = r.css(n, t)), Wn(n, i, y)
                }
            }
        }), r.cssHooks.marginLeft = Pn(W.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(lt(e, "marginLeft")) || e.getBoundingClientRect().left - On(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), r.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            r.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, s = typeof n == "string" ? n.split(" ") : [n]; i < 4; i++) o[e + Oe[i] + t] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, e !== "margin" && (r.cssHooks[e + t].set = Wn)
        }), r.fn.extend({
            css: function(e, t) {
                return qe(this, function(n, i, o) {
                    var s, u, c = {},
                        f = 0;
                    if (Array.isArray(i)) {
                        for (s = Et(n), u = i.length; f < u; f++) c[i[f]] = r.css(n, i[f], !1, s);
                        return c
                    }
                    return o !== void 0 ? r.style(n, i, o) : r.css(n, i)
                }, e, t, arguments.length > 1)
            }
        });

        function le(e, t, n, i, o) {
            return new le.prototype.init(e, t, n, i, o)
        }
        r.Tween = le, le.prototype = {
            constructor: le,
            init: function(e, t, n, i, o, s) {
                this.elem = e, this.prop = n, this.easing = o || r.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (r.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = le.propHooks[this.prop];
                return e && e.get ? e.get(this) : le.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = le.propHooks[this.prop];
                return this.options.duration ? this.pos = t = r.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : le.propHooks._default.set(this), this
            }
        }, le.prototype.init.prototype = le.prototype, le.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = r.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
                },
                set: function(e) {
                    r.fx.step[e.prop] ? r.fx.step[e.prop](e) : e.elem.nodeType === 1 && (r.cssHooks[e.prop] || e.elem.style[zt(e.prop)] != null) ? r.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, le.propHooks.scrollTop = le.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, r.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, r.fx = le.prototype.init, r.fx.step = {};
        var rt, Nt, Ji = /^(?:toggle|show|hide)$/,
            Ki = /queueHooks$/;

        function Ut() {
            Nt && (_.hidden === !1 && b.requestAnimationFrame ? b.requestAnimationFrame(Ut) : b.setTimeout(Ut, r.fx.interval), r.fx.tick())
        }

        function Fn() {
            return b.setTimeout(function() {
                rt = void 0
            }), rt = Date.now()
        }

        function At(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Oe[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function Bn(e, t, n) {
            for (var i, o = (Se.tweeners[t] || []).concat(Se.tweeners["*"]), s = 0, u = o.length; s < u; s++)
                if (i = o[s].call(n, t, e)) return i
        }

        function Zi(e, t, n) {
            var i, o, s, u, c, f, h, y, T = "width" in t || "height" in t,
                g = this,
                m = {},
                j = e.style,
                $ = e.nodeType && wt(e),
                D = q.get(e, "fxshow");
            n.queue || (u = r._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
                u.unqueued || c()
            }), u.unqueued++, g.always(function() {
                g.always(function() {
                    u.unqueued--, r.queue(e, "fx").length || u.empty.fire()
                })
            }));
            for (i in t)
                if (o = t[i], Ji.test(o)) {
                    if (delete t[i], s = s || o === "toggle", o === ($ ? "hide" : "show"))
                        if (o === "show" && D && D[i] !== void 0) $ = !0;
                        else continue;
                    m[i] = D && D[i] || r.style(e, i)
                }
            if (f = !r.isEmptyObject(t), !(!f && r.isEmptyObject(m))) {
                T && e.nodeType === 1 && (n.overflow = [j.overflow, j.overflowX, j.overflowY], h = D && D.display, h == null && (h = q.get(e, "display")), y = r.css(e, "display"), y === "none" && (h ? y = h : (et([e], !0), h = e.style.display || h, y = r.css(e, "display"), et([e]))), (y === "inline" || y === "inline-block" && h != null) && r.css(e, "float") === "none" && (f || (g.done(function() {
                    j.display = h
                }), h == null && (y = j.display, h = y === "none" ? "" : y)), j.display = "inline-block")), n.overflow && (j.overflow = "hidden", g.always(function() {
                    j.overflow = n.overflow[0], j.overflowX = n.overflow[1], j.overflowY = n.overflow[2]
                })), f = !1;
                for (i in m) f || (D ? "hidden" in D && ($ = D.hidden) : D = q.access(e, "fxshow", {
                    display: h
                }), s && (D.hidden = !$), $ && et([e], !0), g.done(function() {
                    $ || et([e]), q.remove(e, "fxshow");
                    for (i in m) r.style(e, i, m[i])
                })), f = Bn($ ? D[i] : 0, i, g), i in D || (D[i] = f.start, $ && (f.end = f.start, f.start = 0))
            }
        }

        function er(e, t) {
            var n, i, o, s, u;
            for (n in e)
                if (i = De(n), o = t[i], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), u = r.cssHooks[i], u && "expand" in u) {
                    s = u.expand(s), delete e[i];
                    for (n in s) n in e || (e[n] = s[n], t[n] = o)
                } else t[i] = o
        }

        function Se(e, t, n) {
            var i, o, s = 0,
                u = Se.prefilters.length,
                c = r.Deferred().always(function() {
                    delete f.elem
                }),
                f = function() {
                    if (o) return !1;
                    for (var T = rt || Fn(), g = Math.max(0, h.startTime + h.duration - T), m = g / h.duration || 0, j = 1 - m, $ = 0, D = h.tweens.length; $ < D; $++) h.tweens[$].run(j);
                    return c.notifyWith(e, [h, j, g]), j < 1 && D ? g : (D || c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h]), !1)
                },
                h = c.promise({
                    elem: e,
                    props: r.extend({}, t),
                    opts: r.extend(!0, {
                        specialEasing: {},
                        easing: r.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || Fn(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(T, g) {
                        var m = r.Tween(e, h.opts, T, g, h.opts.specialEasing[T] || h.opts.easing);
                        return h.tweens.push(m), m
                    },
                    stop: function(T) {
                        var g = 0,
                            m = T ? h.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; g < m; g++) h.tweens[g].run(1);
                        return T ? (c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h, T])) : c.rejectWith(e, [h, T]), this
                    }
                }),
                y = h.props;
            for (er(y, h.opts.specialEasing); s < u; s++)
                if (i = Se.prefilters[s].call(h, e, y, h.opts), i) return L(i.stop) && (r._queueHooks(h.elem, h.opts.queue).stop = i.stop.bind(i)), i;
            return r.map(y, Bn, h), L(h.opts.start) && h.opts.start.call(e, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), r.fx.timer(r.extend(f, {
                elem: e,
                anim: h,
                queue: h.opts.queue
            })), h
        }
        r.Animation = r.extend(Se, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return Sn(n.elem, e, at.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    L(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Se.tweeners[n] = Se.tweeners[n] || [], Se.tweeners[n].unshift(t)
                },
                prefilters: [Zi],
                prefilter: function(e, t) {
                    t ? Se.prefilters.unshift(e) : Se.prefilters.push(e)
                }
            }), r.speed = function(e, t, n) {
                var i = e && typeof e == "object" ? r.extend({}, e) : {
                    complete: n || !n && t || L(e) && e,
                    duration: e,
                    easing: n && t || t && !L(t) && t
                };
                return r.fx.off ? i.duration = 0 : typeof i.duration != "number" && (i.duration in r.fx.speeds ? i.duration = r.fx.speeds[i.duration] : i.duration = r.fx.speeds._default), (i.queue == null || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    L(i.old) && i.old.call(this), i.queue && r.dequeue(this, i.queue)
                }, i
            }, r.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(wt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = r.isEmptyObject(e),
                        s = r.speed(t, n, i),
                        u = function() {
                            var c = Se(this, r.extend({}, e), s);
                            (o || q.get(this, "finish")) && c.stop(!0)
                        };
                    return u.finish = u, o || s.queue === !1 ? this.each(u) : this.queue(s.queue, u)
                },
                stop: function(e, t, n) {
                    var i = function(o) {
                        var s = o.stop;
                        delete o.stop, s(n)
                    };
                    return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                        var o = !0,
                            s = e != null && e + "queueHooks",
                            u = r.timers,
                            c = q.get(this);
                        if (s) c[s] && c[s].stop && i(c[s]);
                        else
                            for (s in c) c[s] && c[s].stop && Ki.test(s) && i(c[s]);
                        for (s = u.length; s--;) u[s].elem === this && (e == null || u[s].queue === e) && (u[s].anim.stop(n), o = !1, u.splice(s, 1));
                        (o || !n) && r.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = q.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            s = r.timers,
                            u = i ? i.length : 0;
                        for (n.finish = !0, r.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; t < u; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), r.each(["toggle", "show", "hide"], function(e, t) {
                var n = r.fn[t];
                r.fn[t] = function(i, o, s) {
                    return i == null || typeof i == "boolean" ? n.apply(this, arguments) : this.animate(At(t, !0), i, o, s)
                }
            }), r.each({
                slideDown: At("show"),
                slideUp: At("hide"),
                slideToggle: At("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                r.fn[e] = function(n, i, o) {
                    return this.animate(t, n, i, o)
                }
            }), r.timers = [], r.fx.tick = function() {
                var e, t = 0,
                    n = r.timers;
                for (rt = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
                n.length || r.fx.stop(), rt = void 0
            }, r.fx.timer = function(e) {
                r.timers.push(e), r.fx.start()
            }, r.fx.interval = 13, r.fx.start = function() {
                Nt || (Nt = !0, Ut())
            }, r.fx.stop = function() {
                Nt = null
            }, r.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, r.fn.delay = function(e, t) {
                return e = r.fx && r.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, i) {
                    var o = b.setTimeout(n, e);
                    i.stop = function() {
                        b.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = _.createElement("input"),
                    t = _.createElement("select"),
                    n = t.appendChild(_.createElement("option"));
                e.type = "checkbox", W.checkOn = e.value !== "", W.optSelected = n.selected, e = _.createElement("input"), e.value = "t", e.type = "radio", W.radioValue = e.value === "t"
            }();
        var zn, ct = r.expr.attrHandle;
        r.fn.extend({
            attr: function(e, t) {
                return qe(this, r.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    r.removeAttr(this, e)
                })
            }
        }), r.extend({
            attr: function(e, t, n) {
                var i, o, s = e.nodeType;
                if (!(s === 3 || s === 8 || s === 2)) {
                    if (typeof e.getAttribute > "u") return r.prop(e, t, n);
                    if ((s !== 1 || !r.isXMLDoc(e)) && (o = r.attrHooks[t.toLowerCase()] || (r.expr.match.bool.test(t) ? zn : void 0)), n !== void 0) {
                        if (n === null) {
                            r.removeAttr(e, t);
                            return
                        }
                        return o && "set" in o && (i = o.set(e, n, t)) !== void 0 ? i : (e.setAttribute(t, n + ""), n)
                    }
                    return o && "get" in o && (i = o.get(e, t)) !== null ? i : (i = r.find.attr(e, t), i ? ? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!W.radioValue && t === "radio" && ue(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(Ae);
                if (o && e.nodeType === 1)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), zn = {
            set: function(e, t, n) {
                return t === !1 ? r.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, r.each(r.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ct[t] || r.find.attr;
            ct[t] = function(i, o, s) {
                var u, c, f = o.toLowerCase();
                return s || (c = ct[f], ct[f] = u, u = n(i, o, s) != null ? f : null, ct[f] = c), u
            }
        });
        var tr = /^(?:input|select|textarea|button)$/i,
            nr = /^(?:a|area)$/i;
        r.fn.extend({
            prop: function(e, t) {
                return qe(this, r.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[r.propFix[e] || e]
                })
            }
        }), r.extend({
            prop: function(e, t, n) {
                var i, o, s = e.nodeType;
                if (!(s === 3 || s === 8 || s === 2)) return (s !== 1 || !r.isXMLDoc(e)) && (t = r.propFix[t] || t, o = r.propHooks[t]), n !== void 0 ? o && "set" in o && (i = o.set(e, n, t)) !== void 0 ? i : e[t] = n : o && "get" in o && (i = o.get(e, t)) !== null ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = r.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : tr.test(e.nodeName) || nr.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), W.optSelected || (r.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            r.propFix[this.toLowerCase()] = this
        });

        function Fe(e) {
            var t = e.match(Ae) || [];
            return t.join(" ")
        }

        function Be(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Xt(e) {
            return Array.isArray(e) ? e : typeof e == "string" ? e.match(Ae) || [] : []
        }
        r.fn.extend({
            addClass: function(e) {
                var t, n, i, o, s, u;
                return L(e) ? this.each(function(c) {
                    r(this).addClass(e.call(this, c, Be(this)))
                }) : (t = Xt(e), t.length ? this.each(function() {
                    if (i = Be(this), n = this.nodeType === 1 && " " + Fe(i) + " ", n) {
                        for (s = 0; s < t.length; s++) o = t[s], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        u = Fe(n), i !== u && this.setAttribute("class", u)
                    }
                }) : this)
            },
            removeClass: function(e) {
                var t, n, i, o, s, u;
                return L(e) ? this.each(function(c) {
                    r(this).removeClass(e.call(this, c, Be(this)))
                }) : arguments.length ? (t = Xt(e), t.length ? this.each(function() {
                    if (i = Be(this), n = this.nodeType === 1 && " " + Fe(i) + " ", n) {
                        for (s = 0; s < t.length; s++)
                            for (o = t[s]; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        u = Fe(n), i !== u && this.setAttribute("class", u)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(e, t) {
                var n, i, o, s, u = typeof e,
                    c = u === "string" || Array.isArray(e);
                return L(e) ? this.each(function(f) {
                    r(this).toggleClass(e.call(this, f, Be(this), t), t)
                }) : typeof t == "boolean" && c ? t ? this.addClass(e) : this.removeClass(e) : (n = Xt(e), this.each(function() {
                    if (c)
                        for (s = r(this), o = 0; o < n.length; o++) i = n[o], s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
                    else(e === void 0 || u === "boolean") && (i = Be(this), i && q.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || e === !1 ? "" : q.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (n.nodeType === 1 && (" " + Fe(Be(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var ir = /\r/g;
        r.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = L(e), this.each(function(s) {
                    var u;
                    this.nodeType === 1 && (i ? u = e.call(this, s, r(this).val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = r.map(u, function(c) {
                        return c == null ? "" : c + ""
                    })), t = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, u, "value") === void 0) && (this.value = u))
                })) : o ? (t = r.valHooks[o.type] || r.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== void 0 ? n : (n = o.value, typeof n == "string" ? n.replace(ir, "") : n ? ? "")) : void 0
            }
        }), r.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = r.find.attr(e, "value");
                        return t ? ? Fe(r.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            s = e.selectedIndex,
                            u = e.type === "select-one",
                            c = u ? null : [],
                            f = u ? s + 1 : o.length;
                        for (s < 0 ? i = f : i = u ? s : 0; i < f; i++)
                            if (n = o[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !ue(n.parentNode, "optgroup"))) {
                                if (t = r(n).val(), u) return t;
                                c.push(t)
                            }
                        return c
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, s = r.makeArray(t), u = o.length; u--;) i = o[u], (i.selected = r.inArray(r.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), s
                    }
                }
            }
        }), r.each(["radio", "checkbox"], function() {
            r.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = r.inArray(r(e).val(), t) > -1
                }
            }, W.checkOn || (r.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            })
        }), W.focusin = "onfocusin" in b;
        var Vn = /^(?:focusinfocus|focusoutblur)$/,
            Un = function(e) {
                e.stopPropagation()
            };
        r.extend(r.event, {
            trigger: function(e, t, n, i) {
                var o, s, u, c, f, h, y, T, g = [n || _],
                    m = pe.call(e, "type") ? e.type : e,
                    j = pe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = T = u = n = n || _, !(n.nodeType === 3 || n.nodeType === 8) && !Vn.test(m + r.event.triggered) && (m.indexOf(".") > -1 && (j = m.split("."), m = j.shift(), j.sort()), f = m.indexOf(":") < 0 && "on" + m, e = e[r.expando] ? e : new r.Event(m, typeof e == "object" && e), e.isTrigger = i ? 2 : 3, e.namespace = j.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : r.makeArray(t, [e]), y = r.event.special[m] || {}, !(!i && y.trigger && y.trigger.apply(n, t) === !1))) {
                    if (!i && !y.noBubble && !Le(n)) {
                        for (c = y.delegateType || m, Vn.test(c + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                        u === (n.ownerDocument || _) && g.push(u.defaultView || u.parentWindow || b)
                    }
                    for (o = 0;
                        (s = g[o++]) && !e.isPropagationStopped();) T = s, e.type = o > 1 ? c : y.bindType || m, h = (q.get(s, "events") || Object.create(null))[e.type] && q.get(s, "handle"), h && h.apply(s, t), h = f && s[f], h && h.apply && st(s) && (e.result = h.apply(s, t), e.result === !1 && e.preventDefault());
                    return e.type = m, !i && !e.isDefaultPrevented() && (!y._default || y._default.apply(g.pop(), t) === !1) && st(n) && f && L(n[m]) && !Le(n) && (u = n[f], u && (n[f] = null), r.event.triggered = m, e.isPropagationStopped() && T.addEventListener(m, Un), n[m](), e.isPropagationStopped() && T.removeEventListener(m, Un), r.event.triggered = void 0, u && (n[f] = u)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = r.extend(new r.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                r.event.trigger(i, null, t)
            }
        }), r.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    r.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return r.event.trigger(e, t, n, !0)
            }
        }), W.focusin || r.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(i) {
                r.event.simulate(t, i.target, r.event.fix(i))
            };
            r.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = q.access(i, t);
                    o || i.addEventListener(e, n, !0), q.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = q.access(i, t) - 1;
                    o ? q.access(i, t, o) : (i.removeEventListener(e, n, !0), q.remove(i, t))
                }
            }
        });
        var dt = b.location,
            Xn = {
                guid: Date.now()
            },
            Gt = /\?/;
        r.parseXML = function(e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
                t = new b.DOMParser().parseFromString(e, "text/xml")
            } catch {}
            return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && r.error("Invalid XML: " + (n ? r.map(n.childNodes, function(i) {
                return i.textContent
            }).join(`
`) : e)), t
        };
        var rr = /\[\]$/,
            Gn = /\r?\n/g,
            or = /^(?:submit|button|image|reset|file)$/i,
            sr = /^(?:input|select|textarea|keygen)/i;

        function Yt(e, t, n, i) {
            var o;
            if (Array.isArray(t)) r.each(t, function(s, u) {
                n || rr.test(e) ? i(e, u) : Yt(e + "[" + (typeof u == "object" && u != null ? s : "") + "]", u, n, i)
            });
            else if (!n && J(t) === "object")
                for (o in t) Yt(e + "[" + o + "]", t[o], n, i);
            else i(e, t)
        }
        r.param = function(e, t) {
            var n, i = [],
                o = function(s, u) {
                    var c = L(u) ? u() : u;
                    i[i.length] = encodeURIComponent(s) + "=" + encodeURIComponent(c ? ? "")
                };
            if (e == null) return "";
            if (Array.isArray(e) || e.jquery && !r.isPlainObject(e)) r.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Yt(n, e[n], t, o);
            return i.join("&")
        }, r.fn.extend({
            serialize: function() {
                return r.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = r.prop(this, "elements");
                    return e ? r.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !r(this).is(":disabled") && sr.test(this.nodeName) && !or.test(e) && (this.checked || !ft.test(e))
                }).map(function(e, t) {
                    var n = r(this).val();
                    return n == null ? null : Array.isArray(n) ? r.map(n, function(i) {
                        return {
                            name: t.name,
                            value: i.replace(Gn, `\r
`)
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Gn, `\r
`)
                    }
                }).get()
            }
        });
        var ur = /%20/g,
            ar = /#.*$/,
            fr = /([?&])_=[^&]*/,
            lr = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            cr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            dr = /^(?:GET|HEAD)$/,
            pr = /^\/\//,
            Yn = {},
            Qt = {},
            Qn = "*/".concat("*"),
            Jt = _.createElement("a");
        Jt.href = dt.href;

        function Jn(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var i, o = 0,
                    s = t.toLowerCase().match(Ae) || [];
                if (L(n))
                    for (; i = s[o++];) i[0] === "+" ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Kn(e, t, n, i) {
            var o = {},
                s = e === Qt;

            function u(c) {
                var f;
                return o[c] = !0, r.each(e[c] || [], function(h, y) {
                    var T = y(t, n, i);
                    if (typeof T == "string" && !s && !o[T]) return t.dataTypes.unshift(T), u(T), !1;
                    if (s) return !(f = T)
                }), f
            }
            return u(t.dataTypes[0]) || !o["*"] && u("*")
        }

        function Kt(e, t) {
            var n, i, o = r.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== void 0 && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && r.extend(!0, e, i), e
        }

        function hr(e, t, n) {
            for (var i, o, s, u, c = e.contents, f = e.dataTypes; f[0] === "*";) f.shift(), i === void 0 && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i) {
                for (o in c)
                    if (c[o] && c[o].test(i)) {
                        f.unshift(o);
                        break
                    }
            }
            if (f[0] in n) s = f[0];
            else {
                for (o in n) {
                    if (!f[0] || e.converters[o + " " + f[0]]) {
                        s = o;
                        break
                    }
                    u || (u = o)
                }
                s = s || u
            }
            if (s) return s !== f[0] && f.unshift(s), n[s]
        }

        function gr(e, t, n, i) {
            var o, s, u, c, f, h = {},
                y = e.dataTypes.slice();
            if (y[1])
                for (u in e.converters) h[u.toLowerCase()] = e.converters[u];
            for (s = y.shift(); s;)
                if (e.responseFields[s] && (n[e.responseFields[s]] = t), !f && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), f = s, s = y.shift(), s) {
                    if (s === "*") s = f;
                    else if (f !== "*" && f !== s) {
                        if (u = h[f + " " + s] || h["* " + s], !u) {
                            for (o in h)
                                if (c = o.split(" "), c[1] === s && (u = h[f + " " + c[0]] || h["* " + c[0]], u)) {
                                    u === !0 ? u = h[o] : h[o] !== !0 && (s = c[0], y.unshift(c[1]));
                                    break
                                }
                        }
                        if (u !== !0)
                            if (u && e.throws) t = u(t);
                            else try {
                                t = u(t)
                            } catch (T) {
                                return {
                                    state: "parsererror",
                                    error: u ? T : "No conversion from " + f + " to " + s
                                }
                            }
                    }
                }
            return {
                state: "success",
                data: t
            }
        }
        r.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: dt.href,
                type: "GET",
                isLocal: cr.test(dt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": r.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Kt(Kt(e, r.ajaxSettings), t) : Kt(r.ajaxSettings, e)
            },
            ajaxPrefilter: Jn(Yn),
            ajaxTransport: Jn(Qt),
            ajax: function(e, t) {
                typeof e == "object" && (t = e, e = void 0), t = t || {};
                var n, i, o, s, u, c, f, h, y, T, g = r.ajaxSetup({}, t),
                    m = g.context || g,
                    j = g.context && (m.nodeType || m.jquery) ? r(m) : r.event,
                    $ = r.Deferred(),
                    D = r.Callbacks("once memory"),
                    Z = g.statusCode || {},
                    K = {},
                    ge = {},
                    U = "canceled",
                    R = {
                        readyState: 0,
                        getResponseHeader: function(z) {
                            var Q;
                            if (f) {
                                if (!s)
                                    for (s = {}; Q = lr.exec(o);) s[Q[1].toLowerCase() + " "] = (s[Q[1].toLowerCase() + " "] || []).concat(Q[2]);
                                Q = s[z.toLowerCase() + " "]
                            }
                            return Q == null ? null : Q.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return f ? o : null
                        },
                        setRequestHeader: function(z, Q) {
                            return f == null && (z = ge[z.toLowerCase()] = ge[z.toLowerCase()] || z, K[z] = Q), this
                        },
                        overrideMimeType: function(z) {
                            return f == null && (g.mimeType = z), this
                        },
                        statusCode: function(z) {
                            var Q;
                            if (z)
                                if (f) R.always(z[R.status]);
                                else
                                    for (Q in z) Z[Q] = [Z[Q], z[Q]];
                            return this
                        },
                        abort: function(z) {
                            var Q = z || U;
                            return n && n.abort(Q), ce(0, Q), this
                        }
                    };
                if ($.promise(R), g.url = ((e || g.url || dt.href) + "").replace(pr, dt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(Ae) || [""], g.crossDomain == null) {
                    c = _.createElement("a");
                    try {
                        c.href = g.url, c.href = c.href, g.crossDomain = Jt.protocol + "//" + Jt.host != c.protocol + "//" + c.host
                    } catch {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && typeof g.data != "string" && (g.data = r.param(g.data, g.traditional)), Kn(Yn, g, t, R), f) return R;
                h = r.event && g.global, h && r.active++ === 0 && r.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !dr.test(g.type), i = g.url.replace(ar, ""), g.hasContent ? g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (g.data = g.data.replace(ur, "+")) : (T = g.url.slice(i.length), g.data && (g.processData || typeof g.data == "string") && (i += (Gt.test(i) ? "&" : "?") + g.data, delete g.data), g.cache === !1 && (i = i.replace(fr, "$1"), T = (Gt.test(i) ? "&" : "?") + "_=" + Xn.guid++ + T), g.url = i + T), g.ifModified && (r.lastModified[i] && R.setRequestHeader("If-Modified-Since", r.lastModified[i]), r.etag[i] && R.setRequestHeader("If-None-Match", r.etag[i])), (g.data && g.hasContent && g.contentType !== !1 || t.contentType) && R.setRequestHeader("Content-Type", g.contentType), R.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + Qn + "; q=0.01" : "") : g.accepts["*"]);
                for (y in g.headers) R.setRequestHeader(y, g.headers[y]);
                if (g.beforeSend && (g.beforeSend.call(m, R, g) === !1 || f)) return R.abort();
                if (U = "abort", D.add(g.complete), R.done(g.success), R.fail(g.error), n = Kn(Qt, g, t, R), !n) ce(-1, "No Transport");
                else {
                    if (R.readyState = 1, h && j.trigger("ajaxSend", [R, g]), f) return R;
                    g.async && g.timeout > 0 && (u = b.setTimeout(function() {
                        R.abort("timeout")
                    }, g.timeout));
                    try {
                        f = !1, n.send(K, ce)
                    } catch (z) {
                        if (f) throw z;
                        ce(-1, z)
                    }
                }

                function ce(z, Q, ht, Dt) {
                    var ye, ze, Ve, de, Re, Te = Q;
                    f || (f = !0, u && b.clearTimeout(u), n = void 0, o = Dt || "", R.readyState = z > 0 ? 4 : 0, ye = z >= 200 && z < 300 || z === 304, ht && (de = hr(g, R, ht)), !ye && r.inArray("script", g.dataTypes) > -1 && r.inArray("json", g.dataTypes) < 0 && (g.converters["text script"] = function() {}), de = gr(g, de, R, ye), ye ? (g.ifModified && (Re = R.getResponseHeader("Last-Modified"), Re && (r.lastModified[i] = Re), Re = R.getResponseHeader("etag"), Re && (r.etag[i] = Re)), z === 204 || g.type === "HEAD" ? Te = "nocontent" : z === 304 ? Te = "notmodified" : (Te = de.state, ze = de.data, Ve = de.error, ye = !Ve)) : (Ve = Te, (z || !Te) && (Te = "error", z < 0 && (z = 0))), R.status = z, R.statusText = (Q || Te) + "", ye ? $.resolveWith(m, [ze, Te, R]) : $.rejectWith(m, [R, Te, Ve]), R.statusCode(Z), Z = void 0, h && j.trigger(ye ? "ajaxSuccess" : "ajaxError", [R, g, ye ? ze : Ve]), D.fireWith(m, [R, Te]), h && (j.trigger("ajaxComplete", [R, g]), --r.active || r.event.trigger("ajaxStop")))
                }
                return R
            },
            getJSON: function(e, t, n) {
                return r.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return r.get(e, void 0, t, "script")
            }
        }), r.each(["get", "post"], function(e, t) {
            r[t] = function(n, i, o, s) {
                return L(i) && (s = s || o, o = i, i = void 0), r.ajax(r.extend({
                    url: n,
                    type: t,
                    dataType: s,
                    data: i,
                    success: o
                }, r.isPlainObject(n) && n))
            }
        }), r.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
        }), r._evalUrl = function(e, t, n) {
            return r.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(i) {
                    r.globalEval(i, t, n)
                }
            })
        }, r.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (L(e) && (e = e.call(this[0])), t = r(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this
            },
            wrapInner: function(e) {
                return L(e) ? this.each(function(t) {
                    r(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = r(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = L(e);
                return this.each(function(n) {
                    r(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    r(this).replaceWith(this.childNodes)
                }), this
            }
        }), r.expr.pseudos.hidden = function(e) {
            return !r.expr.pseudos.visible(e)
        }, r.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, r.ajaxSettings.xhr = function() {
            try {
                return new b.XMLHttpRequest
            } catch {}
        };
        var yr = {
                0: 200,
                1223: 204
            },
            pt = r.ajaxSettings.xhr();
        W.cors = !!pt && "withCredentials" in pt, W.ajax = pt = !!pt, r.ajaxTransport(function(e) {
            var t, n;
            if (W.cors || pt && !e.crossDomain) return {
                send: function(i, o) {
                    var s, u = e.xhr();
                    if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) u[s] = e.xhrFields[s];
                    e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), !e.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) u.setRequestHeader(s, i[s]);
                    t = function(c) {
                        return function() {
                            t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, c === "abort" ? u.abort() : c === "error" ? typeof u.status != "number" ? o(0, "error") : o(u.status, u.statusText) : o(yr[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                                binary: u.response
                            } : {
                                text: u.responseText
                            }, u.getAllResponseHeaders()))
                        }
                    }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                        u.readyState === 4 && b.setTimeout(function() {
                            t && n()
                        })
                    }, t = t("abort");
                    try {
                        u.send(e.hasContent && e.data || null)
                    } catch (c) {
                        if (t) throw c
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), r.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), r.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return r.globalEval(e), e
                }
            }
        }), r.ajaxPrefilter("script", function(e) {
            e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), r.ajaxTransport("script", function(e) {
            if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = r("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(s) {
                            t.remove(), n = null, s && o(s.type === "error" ? 404 : 200, s.type)
                        }), _.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Zn = [],
            Zt = /(=)\?(?=&|$)|\?\?/;
        r.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zn.pop() || r.expando + "_" + Xn.guid++;
                return this[e] = !0, e
            }
        }), r.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, o, s, u = e.jsonp !== !1 && (Zt.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Zt.test(e.data) && "data");
            if (u || e.dataTypes[0] === "jsonp") return i = e.jsonpCallback = L(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Zt, "$1" + i) : e.jsonp !== !1 && (e.url += (Gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || r.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = b[i], b[i] = function() {
                s = arguments
            }, n.always(function() {
                o === void 0 ? r(b).removeProp(i) : b[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Zn.push(i)), s && L(o) && o(s[0]), s = o = void 0
            }), "script"
        }), W.createHTMLDocument = function() {
            var e = _.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
        }(), r.parseHTML = function(e, t, n) {
            if (typeof e != "string") return [];
            typeof t == "boolean" && (n = t, t = !1);
            var i, o, s;
            return t || (W.createHTMLDocument ? (t = _.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = _.location.href, t.head.appendChild(i)) : t = _), o = xt.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = Dn([e], t, s), s && s.length && r(s).remove(), r.merge([], o.childNodes))
        }, r.fn.load = function(e, t, n) {
            var i, o, s, u = this,
                c = e.indexOf(" ");
            return c > -1 && (i = Fe(e.slice(c)), e = e.slice(0, c)), L(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), u.length > 0 && r.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(f) {
                s = arguments, u.html(i ? r("<div>").append(r.parseHTML(f)).find(i) : f)
            }).always(n && function(f, h) {
                u.each(function() {
                    n.apply(this, s || [f.responseText, h, f])
                })
            }), this
        }, r.expr.pseudos.animated = function(e) {
            return r.grep(r.timers, function(t) {
                return e === t.elem
            }).length
        }, r.offset = {
            setOffset: function(e, t, n) {
                var i, o, s, u, c, f, h, y = r.css(e, "position"),
                    T = r(e),
                    g = {};
                y === "static" && (e.style.position = "relative"), c = T.offset(), s = r.css(e, "top"), f = r.css(e, "left"), h = (y === "absolute" || y === "fixed") && (s + f).indexOf("auto") > -1, h ? (i = T.position(), u = i.top, o = i.left) : (u = parseFloat(s) || 0, o = parseFloat(f) || 0), L(t) && (t = t.call(e, n, r.extend({}, c))), t.top != null && (g.top = t.top - c.top + u), t.left != null && (g.left = t.left - c.left + o), "using" in t ? t.using.call(e, g) : T.css(g)
            }
        }, r.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === void 0 ? this : this.each(function(o) {
                    r.offset.setOffset(this, e, o)
                });
                var t, n, i = this[0];
                if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if (r.css(i, "position") === "fixed") t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && r.css(e, "position") === "static";) e = e.parentNode;
                        e && e !== i && e.nodeType === 1 && (o = r(e).offset(), o.top += r.css(e, "borderTopWidth", !0), o.left += r.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - r.css(i, "marginTop", !0),
                        left: t.left - o.left - r.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && r.css(e, "position") === "static";) e = e.offsetParent;
                    return e || _e
                })
            }
        }), r.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = t === "pageYOffset";
            r.fn[e] = function(i) {
                return qe(this, function(o, s, u) {
                    var c;
                    if (Le(o) ? c = o : o.nodeType === 9 && (c = o.defaultView), u === void 0) return c ? c[t] : o[s];
                    c ? c.scrollTo(n ? c.pageXOffset : u, n ? u : c.pageYOffset) : o[s] = u
                }, e, i, arguments.length)
            }
        }), r.each(["top", "left"], function(e, t) {
            r.cssHooks[t] = Pn(W.pixelPosition, function(n, i) {
                if (i) return i = lt(n, t), Ft.test(i) ? r(n).position()[t] + "px" : i
            })
        }), r.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            r.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                r.fn[i] = function(o, s) {
                    var u = arguments.length && (n || typeof o != "boolean"),
                        c = n || (o === !0 || s === !0 ? "margin" : "border");
                    return qe(this, function(f, h, y) {
                        var T;
                        return Le(f) ? i.indexOf("outer") === 0 ? f["inner" + e] : f.document.documentElement["client" + e] : f.nodeType === 9 ? (T = f.documentElement, Math.max(f.body["scroll" + e], T["scroll" + e], f.body["offset" + e], T["offset" + e], T["client" + e])) : y === void 0 ? r.css(f, h, c) : r.style(f, h, y, c)
                    }, t, u ? o : void 0, u)
                }
            })
        }), r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            r.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), r.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            r.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        var vr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        r.proxy = function(e, t) {
            var n, i, o;
            if (typeof t == "string" && (n = e[t], t = e, e = n), !!L(e)) return i = M.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(M.call(arguments)))
            }, o.guid = e.guid = e.guid || r.guid++, o
        }, r.holdReady = function(e) {
            e ? r.readyWait++ : r.ready(!0)
        }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = ue, r.isFunction = L, r.isWindow = Le, r.camelCase = De, r.type = J, r.now = Date.now, r.isNumeric = function(e) {
            var t = r.type(e);
            return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
        }, r.trim = function(e) {
            return e == null ? "" : (e + "").replace(vr, "$1")
        };
        var br = b.jQuery,
            mr = b.$;
        return r.noConflict = function(e) {
            return b.$ === r && (b.$ = mr), e && b.jQuery === r && (b.jQuery = br), r
        }, typeof N > "u" && (b.jQuery = b.$ = r), r
    })
})(Pr);
const so = fn;
(() => {
    function v(...A) {
        const I = A.length;
        for (let M = 0; M < I; M++) {
            const B = A[M];
            B.nodeType === 1 || B.nodeType === 11 ? this.appendChild(B) : this.appendChild(document.createTextNode(String(B)))
        }
    }

    function b(...A) {
        for (; this.lastChild;) this.removeChild(this.lastChild);
        A.length && this.append(...A)
    }

    function N(...A) {
        const I = this.parentNode;
        let M = A.length;
        if (I)
            for (M || I.removeChild(this); M--;) {
                let B = A[M];
                typeof B != "object" ? B = this.ownerDocument.createTextNode(B) : B.parentNode && B.parentNode.removeChild(B), M ? I.insertBefore(this.previousSibling, B) : I.replaceChild(B, this)
            }
    }
    typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = v, DocumentFragment.prototype.append = v), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = b, DocumentFragment.prototype.replaceChildren = b), Element.prototype.replaceWith || (Element.prototype.replaceWith = N, DocumentFragment.prototype.replaceWith = N))
})();

function Ye(v, b) {
    return Object.getOwnPropertyNames(Object(v)).reduce((N, A) => {
        const I = Object.getOwnPropertyDescriptor(Object(v), A),
            M = Object.getOwnPropertyDescriptor(Object(b), A);
        return Object.defineProperty(N, A, M || I)
    }, {})
}

function bt(v) {
    return typeof v == "string"
}

function hn(v) {
    return Array.isArray(v)
}

function Pt(v = {}) {
    const b = Ye(v);
    let N;
    return b.types !== void 0 ? N = b.types : b.split !== void 0 && (N = b.split), N !== void 0 && (b.types = (bt(N) || hn(N) ? String(N) : "").split(",").map(A => String(A).trim()).filter(A => /((line)|(word)|(char))/i.test(A))), (b.absolute || b.position) && (b.absolute = b.absolute || /absolute/.test(v.position)), b
}

function gn(v) {
    const b = bt(v) || hn(v) ? String(v) : "";
    return {
        none: !b,
        lines: /line/i.test(b),
        words: /word/i.test(b),
        chars: /char/i.test(b)
    }
}

function Rt(v) {
    return v !== null && typeof v == "object"
}

function Mr(v) {
    return Rt(v) && /^(1|3|11)$/.test(v.nodeType)
}

function Rr(v) {
    return typeof v == "number" && v > -1 && v % 1 === 0
}

function $r(v) {
    return Rt(v) && Rr(v.length)
}

function Je(v) {
    return hn(v) ? v : v == null ? [] : $r(v) ? Array.prototype.slice.call(v) : [v]
}

function fi(v) {
    let b = v;
    return bt(v) && (/^(#[a-z]\w+)$/.test(v.trim()) ? b = document.getElementById(v.trim().slice(1)) : b = document.querySelectorAll(v)), Je(b).reduce((N, A) => [...N, ...Je(A).filter(Mr)], [])
}
const {
    entries: Ir,
    keys: uo,
    values: ao
} = Object, Mt = "_splittype", Me = {};
let Wr = 0;

function je(v, b, N) {
    if (!Rt(v)) return console.warn("[data.set] owner is not an object"), null;
    const A = v[Mt] || (v[Mt] = ++Wr),
        I = Me[A] || (Me[A] = {});
    return N === void 0 ? b && Object.getPrototypeOf(b) === Object.prototype && (Me[A] = { ...I,
        ...b
    }) : b !== void 0 && (I[b] = N), N
}

function Qe(v, b) {
    const N = Rt(v) ? v[Mt] : null,
        A = N && Me[N] || {};
    return b === void 0 ? A : A[b]
}

function li(v) {
    const b = v && v[Mt];
    b && (delete v[b], delete Me[b])
}

function _r() {
    Ir(Me).forEach(([v, {
        isRoot: b,
        isSplit: N
    }]) => {
        (!b || !N) && (Me[v] = null, delete Me[v])
    })
}

function Fr(v, b = " ") {
    return (v ? String(v) : "").trim().replace(/\s+/g, " ").split(b)
}
const yn = "\\ud800-\\udfff",
    ci = "\\u0300-\\u036f\\ufe20-\\ufe23",
    di = "\\u20d0-\\u20f0",
    pi = "\\ufe0e\\ufe0f",
    Br = `[${yn}]`,
    ln = `[${ci}${di}]`,
    cn = "\\ud83c[\\udffb-\\udfff]",
    zr = `(?:${ln}|${cn})`,
    hi = `[^${yn}]`,
    gi = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    yi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    vi = "\\u200d",
    bi = `${zr}?`,
    mi = `[${pi}]?`,
    Vr = "(?:" + vi + "(?:" + [hi, gi, yi].join("|") + ")" + mi + bi + ")*",
    Ur = mi + bi + Vr,
    Xr = `(?:${[`${hi}${ln}?`,ln,gi,yi,Br].join("|")}
)`,
    Gr = RegExp(`${cn}(?=${cn})|${Xr}${Ur}`, "g"),
    Yr = [vi, yn, ci, di, pi],
    Qr = RegExp(`[${Yr.join("")}]`);

function Jr(v) {
    return v.split("")
}

function xi(v) {
    return Qr.test(v)
}

function Kr(v) {
    return v.match(Gr) || []
}

function Zr(v) {
    return xi(v) ? Kr(v) : Jr(v)
}

function eo(v) {
    return v == null ? "" : String(v)
}

function to(v, b = "") {
    return v = eo(v), v && bt(v) && !b && xi(v) ? Zr(v) : v.split(b)
}

function dn(v, b) {
    const N = document.createElement(v);
    return b && Object.keys(b).forEach(A => {
        const I = b[A],
            M = bt(I) ? I.trim() : I;
        M === null || M === "" || (A === "children" ? N.append(...Je(M)) : N.setAttribute(A, M))
    }), N
}
var vn = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div"
};

function no(v, b) {
    b = Ye(vn, b);
    const N = gn(b.types),
        A = b.tagName,
        I = v.nodeValue,
        M = document.createDocumentFragment();
    let B = [],
        te = [];
    return /^\s/.test(I) && M.append(" "), B = Fr(I).reduce((ne, se, ke, pe) => {
        let me, he;
        return N.chars && (he = to(se).map(W => {
            const L = dn(A, {
                class: `${b.splitClass} ${b.charClass}`,
                style: "display: inline-block;",
                children: W
            });
            return je(L, "isChar", !0), te = [...te, L], L
        })), N.words || N.lines ? (me = dn(A, {
            class: `${b.wordClass} ${b.splitClass}`,
            style: `display: inline-block; ${N.words&&b.absolute?"position: relative;":""}`,
            children: N.chars ? he : se
        }), je(me, {
            isWord: !0,
            isWordStart: !0,
            isWordEnd: !0
        }), M.appendChild(me)) : he.forEach(W => {
            M.appendChild(W)
        }), ke < pe.length - 1 && M.append(" "), N.words ? ne.concat(me) : ne
    }, []), /\s$/.test(I) && M.append(" "), v.replaceWith(M), {
        words: B,
        chars: te
    }
}

function Ci(v, b) {
    const N = v.nodeType,
        A = {
            words: [],
            chars: []
        };
    if (!/(1|3|11)/.test(N)) return A;
    if (N === 3 && /\S/.test(v.nodeValue)) return no(v, b);
    const I = Je(v.childNodes);
    if (I.length && (je(v, "isSplit", !0), !Qe(v).isRoot)) {
        v.style.display = "inline-block", v.style.position = "relative";
        const M = v.nextSibling,
            B = v.previousSibling,
            te = v.textContent || "",
            ne = M ? M.textContent : " ",
            se = B ? B.textContent : " ";
        je(v, {
            isWordEnd: /\s$/.test(te) || /^\s/.test(ne),
            isWordStart: /^\s/.test(te) || /\s$/.test(se)
        })
    }
    return I.reduce((M, B) => {
        const {
            words: te,
            chars: ne
        } = Ci(B, b);
        return {
            words: [...M.words, ...te],
            chars: [...M.chars, ...ne]
        }
    }, A)
}

function io(v, b, N, A) {
    if (!N.absolute) return {
        top: b ? v.offsetTop : null
    };
    const I = v.offsetParent,
        [M, B] = A;
    let te = 0,
        ne = 0;
    if (I && I !== document.body) {
        const L = I.getBoundingClientRect();
        te = L.x + M, ne = L.y + B
    }
    const {
        width: se,
        height: ke,
        x: pe,
        y: me
    } = v.getBoundingClientRect(), he = me + B - ne, W = pe + M - te;
    return {
        width: se,
        height: ke,
        top: he,
        left: W
    }
}

function Ti(v) {
    Qe(v).isWord ? (li(v), v.replaceWith(...v.childNodes)) : Je(v.children).forEach(b => Ti(b))
}
const ro = () => document.createDocumentFragment();

function oo(v, b, N) {
    const A = gn(b.types),
        I = b.tagName,
        M = v.getElementsByTagName("*"),
        B = [];
    let te = [],
        ne = null,
        se, ke, pe, me = [];
    const he = v.parentElement,
        W = v.nextElementSibling,
        L = ro(),
        Le = window.getComputedStyle(v),
        _ = Le.textAlign,
        mt = parseFloat(Le.fontSize) * .2;
    return b.absolute && (pe = {
        left: v.offsetLeft,
        top: v.offsetTop,
        width: v.offsetWidth
    }, ke = v.offsetWidth, se = v.offsetHeight, je(v, {
        cssWidth: v.style.width,
        cssHeight: v.style.height
    })), Je(M).forEach(J => {
        const ie = J.parentElement === v,
            {
                width: r,
                height: Ne,
                top: oe,
                left: xe
            } = io(J, ie, b, N);
        /^br$/i.test(J.nodeName) || (A.lines && ie && ((ne === null || oe - ne >= mt) && (ne = oe, B.push(te = [])), te.push(J)), b.absolute && je(J, {
            top: oe,
            left: xe,
            width: r,
            height: Ne
        }))
    }), he && he.removeChild(v), A.lines && (me = B.map(J => {
        const ie = dn(I, {
            class: `${b.splitClass} ${b.lineClass}`,
            style: `display: block; text-align: ${_}; width: 100%;`
        });
        je(ie, "isLine", !0);
        const r = {
            height: 0,
            top: 1e4
        };
        return L.appendChild(ie), J.forEach((Ne, oe, xe) => {
            const {
                isWordEnd: Ie,
                top: We,
                height: ue
            } = Qe(Ne), xt = xe[oe + 1];
            r.height = Math.max(r.height, ue), r.top = Math.min(r.top, We), ie.appendChild(Ne), Ie && Qe(xt).isWordStart && ie.append(" ")
        }), b.absolute && je(ie, {
            height: r.height,
            top: r.top
        }), ie
    }), A.words || Ti(L), v.replaceChildren(L)), b.absolute && (v.style.width = `${v.style.width||ke}px`, v.style.height = `${se}px`, Je(M).forEach(J => {
        const {
            isLine: ie,
            top: r,
            left: Ne,
            width: oe,
            height: xe
        } = Qe(J), Ie = Qe(J.parentElement), We = !ie && Ie.isLine;
        J.style.top = `${We?r-Ie.top:r}px`, J.style.left = ie ? `${pe.left}px` : `${Ne-(We?pe.left:0)}px`, J.style.height = `${xe}px`, J.style.width = ie ? `${pe.width}px` : `${oe}px`, J.style.position = "absolute"
    })), he && (W ? he.insertBefore(v, W) : he.appendChild(v)), me
}
let ot = Ye(vn, {});
class pn {
    static get data() {
        return Me
    }
    static get defaults() {
        return ot
    }
    static set defaults(b) {
        ot = Ye(ot, Pt(b))
    }
    static setDefaults(b) {
        return ot = Ye(ot, Pt(b)), vn
    }
    static revert(b) {
        fi(b).forEach(N => {
            const {
                isSplit: A,
                html: I,
                cssWidth: M,
                cssHeight: B
            } = Qe(N);
            A && (N.innerHTML = I, N.style.width = M || "", N.style.height = B || "", li(N))
        })
    }
    static create(b, N) {
        return new pn(b, N)
    }
    constructor(b, N) {
        this.isSplit = !1, this.settings = Ye(ot, Pt(N)), this.elements = fi(b), this.split()
    }
    split(b) {
        this.revert(), this.elements.forEach(I => {
            je(I, "html", I.innerHTML)
        }), this.lines = [], this.words = [], this.chars = [];
        const N = [window.pageXOffset, window.pageYOffset];
        b !== void 0 && (this.settings = Ye(this.settings, Pt(b)));
        const A = gn(this.settings.types);
        A.none || (this.elements.forEach(I => {
            je(I, "isRoot", !0);
            const {
                words: M,
                chars: B
            } = Ci(I, this.settings);
            this.words = [...this.words, ...M], this.chars = [...this.chars, ...B]
        }), this.elements.forEach(I => {
            if (A.lines || this.settings.absolute) {
                const M = oo(I, this.settings, N);
                this.lines = [...this.lines, ...M]
            }
        }), this.isSplit = !0, window.scrollTo(N[0], N[1]), _r())
    }
    revert() {
        this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), pn.revert(this.elements)
    }
}
export {
    so as $, pn as S, Hr as c
};