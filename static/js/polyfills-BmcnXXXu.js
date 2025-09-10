export function __vite_legacy_guard() {
    import.meta.url,
        import ("_").catch((() => 1)), async function*() {}().next()
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    r = function(t) {
        return t && t.Math === Math && t
    },
    e = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || r("object" == typeof t && t) || function() {
        return this
    }() || Function("return this")(),
    n = {},
    o = function(t) {
        try {
            return !!t()
        } catch (r) {
            return !0
        }
    },
    i = !o((function() {
        return 7 !== Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })),
    a = !o((function() {
        var t = function() {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
    })),
    u = a,
    c = Function.prototype.call,
    s = u ? c.bind(c) : function() {
        return c.apply(c, arguments)
    },
    f = {},
    l = {}.propertyIsEnumerable,
    h = Object.getOwnPropertyDescriptor,
    p = h && !l.call({
        1: 2
    }, 1);
f.f = p ? function(t) {
    var r = h(this, t);
    return !!r && r.enumerable
} : l;
var v, d, g = function(t, r) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: r
        }
    },
    y = a,
    w = Function.prototype,
    m = w.call,
    b = y && w.bind.bind(m, m),
    E = y ? b : function(t) {
        return function() {
            return m.apply(t, arguments)
        }
    },
    S = E,
    R = S({}.toString),
    A = S("".slice),
    x = function(t) {
        return A(R(t), 8, -1)
    },
    O = o,
    I = x,
    T = Object,
    k = E("".split),
    P = O((function() {
        return !T("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" === I(t) ? k(t, "") : T(t)
    } : T,
    U = function(t) {
        return null == t
    },
    L = U,
    C = TypeError,
    j = function(t) {
        if (L(t)) throw new C("Can't call method on " + t);
        return t
    },
    _ = P,
    N = j,
    D = function(t) {
        return _(N(t))
    },
    M = "object" == typeof document && document.all,
    B = void 0 === M && void 0 !== M ? function(t) {
        return "function" == typeof t || t === M
    } : function(t) {
        return "function" == typeof t
    },
    F = B,
    H = function(t) {
        return "object" == typeof t ? null !== t : F(t)
    },
    z = e,
    q = B,
    $ = function(t, r) {
        return arguments.length < 2 ? (e = z[t], q(e) ? e : void 0) : z[t] && z[t][r];
        var e
    },
    V = E({}.isPrototypeOf),
    W = e.navigator,
    G = W && W.userAgent,
    Y = G ? String(G) : "",
    J = e,
    K = Y,
    Q = J.process,
    X = J.Deno,
    Z = Q && Q.versions || X && X.version,
    tt = Z && Z.v8;
tt && (d = (v = tt.split("."))[0] > 0 && v[0] < 4 ? 1 : +(v[0] + v[1])), !d && K && (!(v = K.match(/Edge\/(\d+)/)) || v[1] >= 74) && (v = K.match(/Chrome\/(\d+)/)) && (d = +v[1]);
var rt = d,
    et = rt,
    nt = o,
    ot = e.String,
    it = !!Object.getOwnPropertySymbols && !nt((function() {
        var t = Symbol("symbol detection");
        return !ot(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && et && et < 41
    })),
    at = it && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    ut = $,
    ct = B,
    st = V,
    ft = Object,
    lt = at ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var r = ut("Symbol");
        return ct(r) && st(r.prototype, ft(t))
    },
    ht = String,
    pt = function(t) {
        try {
            return ht(t)
        } catch (r) {
            return "Object"
        }
    },
    vt = B,
    dt = pt,
    gt = TypeError,
    yt = function(t) {
        if (vt(t)) return t;
        throw new gt(dt(t) + " is not a function")
    },
    wt = yt,
    mt = U,
    bt = function(t, r) {
        var e = t[r];
        return mt(e) ? void 0 : wt(e)
    },
    Et = s,
    St = B,
    Rt = H,
    At = TypeError,
    xt = {
        exports: {}
    },
    Ot = e,
    It = Object.defineProperty,
    Tt = function(t, r) {
        try {
            It(Ot, t, {
                value: r,
                configurable: !0,
                writable: !0
            })
        } catch (e) {
            Ot[t] = r
        }
        return r
    },
    kt = e,
    Pt = Tt,
    Ut = "__core-js_shared__",
    Lt = xt.exports = kt[Ut] || Pt(Ut, {});
(Lt.versions || (Lt.versions = [])).push({
    version: "3.41.0",
    mode: "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Ct = xt.exports,
    jt = Ct,
    _t = function(t, r) {
        return jt[t] || (jt[t] = r || {})
    },
    Nt = j,
    Dt = Object,
    Mt = function(t) {
        return Dt(Nt(t))
    },
    Bt = Mt,
    Ft = E({}.hasOwnProperty),
    Ht = Object.hasOwn || function(t, r) {
        return Ft(Bt(t), r)
    },
    zt = E,
    qt = 0,
    $t = Math.random(),
    Vt = zt(1..toString),
    Wt = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Vt(++qt + $t, 36)
    },
    Gt = _t,
    Yt = Ht,
    Jt = Wt,
    Kt = it,
    Qt = at,
    Xt = e.Symbol,
    Zt = Gt("wks"),
    tr = Qt ? Xt.for || Xt : Xt && Xt.withoutSetter || Jt,
    rr = function(t) {
        return Yt(Zt, t) || (Zt[t] = Kt && Yt(Xt, t) ? Xt[t] : tr("Symbol." + t)), Zt[t]
    },
    er = s,
    nr = H,
    or = lt,
    ir = bt,
    ar = function(t, r) {
        var e, n;
        if ("string" === r && St(e = t.toString) && !Rt(n = Et(e, t))) return n;
        if (St(e = t.valueOf) && !Rt(n = Et(e, t))) return n;
        if ("string" !== r && St(e = t.toString) && !Rt(n = Et(e, t))) return n;
        throw new At("Can't convert object to primitive value")
    },
    ur = TypeError,
    cr = rr("toPrimitive"),
    sr = function(t, r) {
        if (!nr(t) || or(t)) return t;
        var e, n = ir(t, cr);
        if (n) {
            if (void 0 === r && (r = "default"), e = er(n, t, r), !nr(e) || or(e)) return e;
            throw new ur("Can't convert object to primitive value")
        }
        return void 0 === r && (r = "number"), ar(t, r)
    },
    fr = sr,
    lr = lt,
    hr = function(t) {
        var r = fr(t, "string");
        return lr(r) ? r : r + ""
    },
    pr = H,
    vr = e.document,
    dr = pr(vr) && pr(vr.createElement),
    gr = function(t) {
        return dr ? vr.createElement(t) : {}
    },
    yr = gr,
    wr = !i && !o((function() {
        return 7 !== Object.defineProperty(yr("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })),
    mr = i,
    br = s,
    Er = f,
    Sr = g,
    Rr = D,
    Ar = hr,
    xr = Ht,
    Or = wr,
    Ir = Object.getOwnPropertyDescriptor;
n.f = mr ? Ir : function(t, r) {
    if (t = Rr(t), r = Ar(r), Or) try {
        return Ir(t, r)
    } catch (e) {}
    if (xr(t, r)) return Sr(!br(Er.f, t, r), t[r])
};
var Tr = {},
    kr = i && o((function() {
        return 42 !== Object.defineProperty((function() {}), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    })),
    Pr = H,
    Ur = String,
    Lr = TypeError,
    Cr = function(t) {
        if (Pr(t)) return t;
        throw new Lr(Ur(t) + " is not an object")
    },
    jr = i,
    _r = wr,
    Nr = kr,
    Dr = Cr,
    Mr = hr,
    Br = TypeError,
    Fr = Object.defineProperty,
    Hr = Object.getOwnPropertyDescriptor,
    zr = "enumerable",
    qr = "configurable",
    $r = "writable";
Tr.f = jr ? Nr ? function(t, r, e) {
    if (Dr(t), r = Mr(r), Dr(e), "function" == typeof t && "prototype" === r && "value" in e && $r in e && !e[$r]) {
        var n = Hr(t, r);
        n && n[$r] && (t[r] = e.value, e = {
            configurable: qr in e ? e[qr] : n[qr],
            enumerable: zr in e ? e[zr] : n[zr],
            writable: !1
        })
    }
    return Fr(t, r, e)
} : Fr : function(t, r, e) {
    if (Dr(t), r = Mr(r), Dr(e), _r) try {
        return Fr(t, r, e)
    } catch (n) {}
    if ("get" in e || "set" in e) throw new Br("Accessors not supported");
    return "value" in e && (t[r] = e.value), t
};
var Vr = Tr,
    Wr = g,
    Gr = i ? function(t, r, e) {
        return Vr.f(t, r, Wr(1, e))
    } : function(t, r, e) {
        return t[r] = e, t
    },
    Yr = {
        exports: {}
    },
    Jr = i,
    Kr = Ht,
    Qr = Function.prototype,
    Xr = Jr && Object.getOwnPropertyDescriptor,
    Zr = Kr(Qr, "name"),
    te = {
        PROPER: Zr && "something" === function() {}.name,
        CONFIGURABLE: Zr && (!Jr || Jr && Xr(Qr, "name").configurable)
    },
    re = B,
    ee = Ct,
    ne = E(Function.toString);
re(ee.inspectSource) || (ee.inspectSource = function(t) {
    return ne(t)
});
var oe, ie, ae, ue = ee.inspectSource,
    ce = B,
    se = e.WeakMap,
    fe = ce(se) && /native code/.test(String(se)),
    le = Wt,
    he = _t("keys"),
    pe = function(t) {
        return he[t] || (he[t] = le(t))
    },
    ve = {},
    de = fe,
    ge = e,
    ye = H,
    we = Gr,
    me = Ht,
    be = Ct,
    Ee = pe,
    Se = ve,
    Re = "Object already initialized",
    Ae = ge.TypeError,
    xe = ge.WeakMap;
if (de || be.state) {
    var Oe = be.state || (be.state = new xe);
    Oe.get = Oe.get, Oe.has = Oe.has, Oe.set = Oe.set, oe = function(t, r) {
        if (Oe.has(t)) throw new Ae(Re);
        return r.facade = t, Oe.set(t, r), r
    }, ie = function(t) {
        return Oe.get(t) || {}
    }, ae = function(t) {
        return Oe.has(t)
    }
} else {
    var Ie = Ee("state");
    Se[Ie] = !0, oe = function(t, r) {
        if (me(t, Ie)) throw new Ae(Re);
        return r.facade = t, we(t, Ie, r), r
    }, ie = function(t) {
        return me(t, Ie) ? t[Ie] : {}
    }, ae = function(t) {
        return me(t, Ie)
    }
}
var Te = {
        set: oe,
        get: ie,
        has: ae,
        enforce: function(t) {
            return ae(t) ? ie(t) : oe(t, {})
        },
        getterFor: function(t) {
            return function(r) {
                var e;
                if (!ye(r) || (e = ie(r)).type !== t) throw new Ae("Incompatible receiver, " + t + " required");
                return e
            }
        }
    },
    ke = E,
    Pe = o,
    Ue = B,
    Le = Ht,
    Ce = i,
    je = te.CONFIGURABLE,
    _e = ue,
    Ne = Te.enforce,
    De = Te.get,
    Me = String,
    Be = Object.defineProperty,
    Fe = ke("".slice),
    He = ke("".replace),
    ze = ke([].join),
    qe = Ce && !Pe((function() {
        return 8 !== Be((function() {}), "length", {
            value: 8
        }).length
    })),
    $e = String(String).split("String"),
    Ve = Yr.exports = function(t, r, e) {
        "Symbol(" === Fe(Me(r), 0, 7) && (r = "[" + He(Me(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!Le(t, "name") || je && t.name !== r) && (Ce ? Be(t, "name", {
            value: r,
            configurable: !0
        }) : t.name = r), qe && e && Le(e, "arity") && t.length !== e.arity && Be(t, "length", {
            value: e.arity
        });
        try {
            e && Le(e, "constructor") && e.constructor ? Ce && Be(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0)
        } catch (o) {}
        var n = Ne(t);
        return Le(n, "source") || (n.source = ze($e, "string" == typeof r ? r : "")), t
    };
Function.prototype.toString = Ve((function() {
    return Ue(this) && De(this).source || _e(this)
}), "toString");
var We = Yr.exports,
    Ge = B,
    Ye = Tr,
    Je = We,
    Ke = Tt,
    Qe = function(t, r, e, n) {
        n || (n = {});
        var o = n.enumerable,
            i = void 0 !== n.name ? n.name : r;
        if (Ge(e) && Je(e, i, n), n.global) o ? t[r] = e : Ke(r, e);
        else {
            try {
                n.unsafe ? t[r] && (o = !0) : delete t[r]
            } catch (a) {}
            o ? t[r] = e : Ye.f(t, r, {
                value: e,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return t
    },
    Xe = {},
    Ze = Math.ceil,
    tn = Math.floor,
    rn = Math.trunc || function(t) {
        var r = +t;
        return (r > 0 ? tn : Ze)(r)
    },
    en = function(t) {
        var r = +t;
        return r != r || 0 === r ? 0 : rn(r)
    },
    nn = en,
    on = Math.max,
    an = Math.min,
    un = function(t, r) {
        var e = nn(t);
        return e < 0 ? on(e + r, 0) : an(e, r)
    },
    cn = en,
    sn = Math.min,
    fn = function(t) {
        var r = cn(t);
        return r > 0 ? sn(r, 9007199254740991) : 0
    },
    ln = fn,
    hn = function(t) {
        return ln(t.length)
    },
    pn = D,
    vn = un,
    dn = hn,
    gn = function(t) {
        return function(r, e, n) {
            var o = pn(r),
                i = dn(o);
            if (0 === i) return !t && -1;
            var a, u = vn(n, i);
            if (t && e != e) {
                for (; i > u;)
                    if ((a = o[u++]) != a) return !0
            } else
                for (; i > u; u++)
                    if ((t || u in o) && o[u] === e) return t || u || 0;
            return !t && -1
        }
    },
    yn = {
        includes: gn(!0),
        indexOf: gn(!1)
    },
    wn = Ht,
    mn = D,
    bn = yn.indexOf,
    En = ve,
    Sn = E([].push),
    Rn = function(t, r) {
        var e, n = mn(t),
            o = 0,
            i = [];
        for (e in n) !wn(En, e) && wn(n, e) && Sn(i, e);
        for (; r.length > o;) wn(n, e = r[o++]) && (~bn(i, e) || Sn(i, e));
        return i
    },
    An = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    xn = Rn,
    On = An.concat("length", "prototype");
Xe.f = Object.getOwnPropertyNames || function(t) {
    return xn(t, On)
};
var In = {};
In.f = Object.getOwnPropertySymbols;
var Tn = $,
    kn = Xe,
    Pn = In,
    Un = Cr,
    Ln = E([].concat),
    Cn = Tn("Reflect", "ownKeys") || function(t) {
        var r = kn.f(Un(t)),
            e = Pn.f;
        return e ? Ln(r, e(t)) : r
    },
    jn = Ht,
    _n = Cn,
    Nn = n,
    Dn = Tr,
    Mn = function(t, r, e) {
        for (var n = _n(r), o = Dn.f, i = Nn.f, a = 0; a < n.length; a++) {
            var u = n[a];
            jn(t, u) || e && jn(e, u) || o(t, u, i(r, u))
        }
    },
    Bn = o,
    Fn = B,
    Hn = /#|\.prototype\./,
    zn = function(t, r) {
        var e = $n[qn(t)];
        return e === Wn || e !== Vn && (Fn(r) ? Bn(r) : !!r)
    },
    qn = zn.normalize = function(t) {
        return String(t).replace(Hn, ".").toLowerCase()
    },
    $n = zn.data = {},
    Vn = zn.NATIVE = "N",
    Wn = zn.POLYFILL = "P",
    Gn = zn,
    Yn = e,
    Jn = n.f,
    Kn = Gr,
    Qn = Qe,
    Xn = Tt,
    Zn = Mn,
    to = Gn,
    ro = function(t, r) {
        var e, n, o, i, a, u = t.target,
            c = t.global,
            s = t.stat;
        if (e = c ? Yn : s ? Yn[u] || Xn(u, {}) : Yn[u] && Yn[u].prototype)
            for (n in r) {
                if (i = r[n], o = t.dontCallGetSet ? (a = Jn(e, n)) && a.value : e[n], !to(c ? n : u + (s ? "." : "#") + n, t.forced) && void 0 !== o) {
                    if (typeof i == typeof o) continue;
                    Zn(i, o)
                }(t.sham || o && o.sham) && Kn(i, "sham", !0), Qn(e, n, i, t)
            }
    },
    eo = {};
eo[rr("toStringTag")] = "z";
var no = "[object z]" === String(eo),
    oo = B,
    io = x,
    ao = rr("toStringTag"),
    uo = Object,
    co = "Arguments" === io(function() {
        return arguments
    }()),
    so = no ? io : function(t) {
        var r, e, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, r) {
            try {
                return t[r]
            } catch (e) {}
        }(r = uo(t), ao)) ? e : co ? io(r) : "Object" === (n = io(r)) && oo(r.callee) ? "Arguments" : n
    },
    fo = so,
    lo = String,
    ho = function(t) {
        if ("Symbol" === fo(t)) throw new TypeError("Cannot convert a Symbol value to a string");
        return lo(t)
    },
    po = We,
    vo = Tr,
    go = function(t, r, e) {
        return e.get && po(e.get, r, {
            getter: !0
        }), e.set && po(e.set, r, {
            setter: !0
        }), vo.f(t, r, e)
    },
    yo = ro,
    wo = i,
    mo = E,
    bo = Ht,
    Eo = B,
    So = V,
    Ro = ho,
    Ao = go,
    xo = Mn,
    Oo = e.Symbol,
    Io = Oo && Oo.prototype;
if (wo && Eo(Oo) && (!("description" in Io) || void 0 !== Oo().description)) {
    var To = {},
        ko = function() {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : Ro(arguments[0]),
                r = So(Io, this) ? new Oo(t) : void 0 === t ? Oo() : Oo(t);
            return "" === t && (To[r] = !0), r
        };
    xo(ko, Oo), ko.prototype = Io, Io.constructor = ko;
    var Po = "Symbol(description detection)" === String(Oo("description detection")),
        Uo = mo(Io.valueOf),
        Lo = mo(Io.toString),
        Co = /^Symbol\((.*)\)[^)]+$/,
        jo = mo("".replace),
        _o = mo("".slice);
    Ao(Io, "description", {
        configurable: !0,
        get: function() {
            var t = Uo(this);
            if (bo(To, t)) return "";
            var r = Lo(t),
                e = Po ? _o(r, 7, -1) : jo(r, Co, "$1");
            return "" === e ? void 0 : e
        }
    }), yo({
        global: !0,
        constructor: !0,
        forced: !0
    }, {
        Symbol: ko
    })
}
var No = a,
    Do = Function.prototype,
    Mo = Do.apply,
    Bo = Do.call,
    Fo = "object" == typeof Reflect && Reflect.apply || (No ? Bo.bind(Mo) : function() {
        return Bo.apply(Mo, arguments)
    }),
    Ho = E,
    zo = yt,
    qo = function(t, r, e) {
        try {
            return Ho(zo(Object.getOwnPropertyDescriptor(t, r)[e]))
        } catch (n) {}
    },
    $o = H,
    Vo = function(t) {
        return $o(t) || null === t
    },
    Wo = String,
    Go = TypeError,
    Yo = qo,
    Jo = H,
    Ko = j,
    Qo = function(t) {
        if (Vo(t)) return t;
        throw new Go("Can't set " + Wo(t) + " as a prototype")
    },
    Xo = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, r = !1,
            e = {};
        try {
            (t = Yo(Object.prototype, "__proto__", "set"))(e, []), r = e instanceof Array
        } catch (n) {}
        return function(e, n) {
            return Ko(e), Qo(n), Jo(e) ? (r ? t(e, n) : e.__proto__ = n, e) : e
        }
    }() : void 0),
    Zo = Tr.f,
    ti = function(t, r, e) {
        e in t || Zo(t, e, {
            configurable: !0,
            get: function() {
                return r[e]
            },
            set: function(t) {
                r[e] = t
            }
        })
    },
    ri = B,
    ei = H,
    ni = Xo,
    oi = function(t, r, e) {
        var n, o;
        return ni && ri(n = r.constructor) && n !== e && ei(o = n.prototype) && o !== e.prototype && ni(t, o), t
    },
    ii = ho,
    ai = function(t, r) {
        return void 0 === t ? arguments.length < 2 ? "" : r : ii(t)
    },
    ui = H,
    ci = Gr,
    si = Error,
    fi = E("".replace),
    li = String(new si("zxcasd").stack),
    hi = /\n\s*at [^:]*:[^\n]*/,
    pi = hi.test(li),
    vi = function(t, r) {
        if (pi && "string" == typeof t && !si.prepareStackTrace)
            for (; r--;) t = fi(t, hi, "");
        return t
    },
    di = g,
    gi = !o((function() {
        var t = new Error("a");
        return !("stack" in t) || (Object.defineProperty(t, "stack", di(1, 7)), 7 !== t.stack)
    })),
    yi = Gr,
    wi = vi,
    mi = gi,
    bi = Error.captureStackTrace,
    Ei = $,
    Si = Ht,
    Ri = Gr,
    Ai = V,
    xi = Xo,
    Oi = Mn,
    Ii = ti,
    Ti = oi,
    ki = ai,
    Pi = function(t, r) {
        ui(r) && "cause" in r && ci(t, "cause", r.cause)
    },
    Ui = function(t, r, e, n) {
        mi && (bi ? bi(t, r) : yi(t, "stack", wi(e, n)))
    },
    Li = i,
    Ci = ro,
    ji = Fo,
    _i = function(t, r, e, n) {
        var o = "stackTraceLimit",
            i = n ? 2 : 1,
            a = t.split("."),
            u = a[a.length - 1],
            c = Ei.apply(null, a);
        if (c) {
            var s = c.prototype;
            if (Si(s, "cause") && delete s.cause, !e) return c;
            var f = Ei("Error"),
                l = r((function(t, r) {
                    var e = ki(n ? r : t, void 0),
                        o = n ? new c(t) : new c;
                    return void 0 !== e && Ri(o, "message", e), Ui(o, l, o.stack, 2), this && Ai(s, this) && Ti(o, this, l), arguments.length > i && Pi(o, arguments[i]), o
                }));
            l.prototype = s, "Error" !== u ? xi ? xi(l, f) : Oi(l, f, {
                name: !0
            }) : Li && o in c && (Ii(l, c, o), Ii(l, c, "prepareStackTrace")), Oi(l, c);
            try {
                s.name !== u && Ri(s, "name", u), s.constructor = l
            } catch (h) {}
            return l
        }
    },
    Ni = "WebAssembly",
    Di = e[Ni],
    Mi = 7 !== new Error("e", {
        cause: 7
    }).cause,
    Bi = function(t, r) {
        var e = {};
        e[t] = _i(t, r, Mi), Ci({
            global: !0,
            constructor: !0,
            arity: 1,
            forced: Mi
        }, e)
    },
    Fi = function(t, r) {
        if (Di && Di[t]) {
            var e = {};
            e[t] = _i(Ni + "." + t, r, Mi), Ci({
                target: Ni,
                stat: !0,
                constructor: !0,
                arity: 1,
                forced: Mi
            }, e)
        }
    };
Bi("Error", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("EvalError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("RangeError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("ReferenceError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("SyntaxError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("TypeError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Bi("URIError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Fi("CompileError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Fi("LinkError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
})), Fi("RuntimeError", (function(t) {
    return function(r) {
        return ji(t, this, arguments)
    }
}));
var Hi = {},
    zi = Rn,
    qi = An,
    $i = Object.keys || function(t) {
        return zi(t, qi)
    },
    Vi = i,
    Wi = kr,
    Gi = Tr,
    Yi = Cr,
    Ji = D,
    Ki = $i;
Hi.f = Vi && !Wi ? Object.defineProperties : function(t, r) {
    Yi(t);
    for (var e, n = Ji(r), o = Ki(r), i = o.length, a = 0; i > a;) Gi.f(t, e = o[a++], n[e]);
    return t
};
var Qi, Xi = $("document", "documentElement"),
    Zi = Cr,
    ta = Hi,
    ra = An,
    ea = ve,
    na = Xi,
    oa = gr,
    ia = "prototype",
    aa = "script",
    ua = pe("IE_PROTO"),
    ca = function() {},
    sa = function(t) {
        return "<" + aa + ">" + t + "</" + aa + ">"
    },
    fa = function(t) {
        t.write(sa("")), t.close();
        var r = t.parentWindow.Object;
        return t = null, r
    },
    la = function() {
        try {
            Qi = new ActiveXObject("htmlfile")
        } catch (o) {}
        var t, r, e;
        la = "undefined" != typeof document ? document.domain && Qi ? fa(Qi) : (r = oa("iframe"), e = "java" + aa + ":", r.style.display = "none", na.appendChild(r), r.src = String(e), (t = r.contentWindow.document).open(), t.write(sa("document.F=Object")), t.close(), t.F) : fa(Qi);
        for (var n = ra.length; n--;) delete la[ia][ra[n]];
        return la()
    };
ea[ua] = !0;
var ha = Object.create || function(t, r) {
        var e;
        return null !== t ? (ca[ia] = Zi(t), e = new ca, ca[ia] = null, e[ua] = t) : e = la(), void 0 === r ? e : ta.f(e, r)
    },
    pa = rr,
    va = ha,
    da = Tr.f,
    ga = pa("unscopables"),
    ya = Array.prototype;
void 0 === ya[ga] && da(ya, ga, {
    configurable: !0,
    value: va(null)
});
var wa = function(t) {
        ya[ga][t] = !0
    },
    ma = yn.includes,
    ba = wa;
ro({
    target: "Array",
    proto: !0,
    forced: o((function() {
        return !Array(1).includes()
    }))
}, {
    includes: function(t) {
        return ma(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}), ba("includes");
var Ea, Sa, Ra, Aa = {},
    xa = !o((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })),
    Oa = Ht,
    Ia = B,
    Ta = Mt,
    ka = xa,
    Pa = pe("IE_PROTO"),
    Ua = Object,
    La = Ua.prototype,
    Ca = ka ? Ua.getPrototypeOf : function(t) {
        var r = Ta(t);
        if (Oa(r, Pa)) return r[Pa];
        var e = r.constructor;
        return Ia(e) && r instanceof e ? e.prototype : r instanceof Ua ? La : null
    },
    ja = o,
    _a = B,
    Na = H,
    Da = Ca,
    Ma = Qe,
    Ba = rr("iterator"),
    Fa = !1;
[].keys && ("next" in (Ra = [].keys()) ? (Sa = Da(Da(Ra))) !== Object.prototype && (Ea = Sa) : Fa = !0);
var Ha = !Na(Ea) || ja((function() {
    var t = {};
    return Ea[Ba].call(t) !== t
}));
Ha && (Ea = {}), _a(Ea[Ba]) || Ma(Ea, Ba, (function() {
    return this
}));
var za = {
        IteratorPrototype: Ea,
        BUGGY_SAFARI_ITERATORS: Fa
    },
    qa = Tr.f,
    $a = Ht,
    Va = rr("toStringTag"),
    Wa = function(t, r, e) {
        t && !e && (t = t.prototype), t && !$a(t, Va) && qa(t, Va, {
            configurable: !0,
            value: r
        })
    },
    Ga = za.IteratorPrototype,
    Ya = ha,
    Ja = g,
    Ka = Wa,
    Qa = Aa,
    Xa = function() {
        return this
    },
    Za = function(t, r, e, n) {
        var o = r + " Iterator";
        return t.prototype = Ya(Ga, {
            next: Ja(+!n, e)
        }), Ka(t, o, !1), Qa[o] = Xa, t
    },
    tu = ro,
    ru = s,
    eu = B,
    nu = Za,
    ou = Ca,
    iu = Xo,
    au = Wa,
    uu = Gr,
    cu = Qe,
    su = Aa,
    fu = te.PROPER,
    lu = te.CONFIGURABLE,
    hu = za.IteratorPrototype,
    pu = za.BUGGY_SAFARI_ITERATORS,
    vu = rr("iterator"),
    du = "keys",
    gu = "values",
    yu = "entries",
    wu = function() {
        return this
    },
    mu = function(t, r, e, n, o, i, a) {
        nu(e, r, n);
        var u, c, s, f = function(t) {
                if (t === o && d) return d;
                if (!pu && t && t in p) return p[t];
                switch (t) {
                    case du:
                    case gu:
                    case yu:
                        return function() {
                            return new e(this, t)
                        }
                }
                return function() {
                    return new e(this)
                }
            },
            l = r + " Iterator",
            h = !1,
            p = t.prototype,
            v = p[vu] || p["@@iterator"] || o && p[o],
            d = !pu && v || f(o),
            g = "Array" === r && p.entries || v;
        if (g && (u = ou(g.call(new t))) !== Object.prototype && u.next && (ou(u) !== hu && (iu ? iu(u, hu) : eu(u[vu]) || cu(u, vu, wu)), au(u, l, !0)), fu && o === gu && v && v.name !== gu && (lu ? uu(p, "name", gu) : (h = !0, d = function() {
                return ru(v, this)
            })), o)
            if (c = {
                    values: f(gu),
                    keys: i ? d : f(du),
                    entries: f(yu)
                }, a)
                for (s in c)(pu || h || !(s in p)) && cu(p, s, c[s]);
            else tu({
                target: r,
                proto: !0,
                forced: pu || h
            }, c);
        return p[vu] !== d && cu(p, vu, d, {
            name: o
        }), su[r] = d, c
    },
    bu = function(t, r) {
        return {
            value: t,
            done: r
        }
    },
    Eu = D,
    Su = wa,
    Ru = Aa,
    Au = Te,
    xu = Tr.f,
    Ou = mu,
    Iu = bu,
    Tu = i,
    ku = "Array Iterator",
    Pu = Au.set,
    Uu = Au.getterFor(ku),
    Lu = Ou(Array, "Array", (function(t, r) {
        Pu(this, {
            type: ku,
            target: Eu(t),
            index: 0,
            kind: r
        })
    }), (function() {
        var t = Uu(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return t.target = null, Iu(void 0, !0);
        switch (t.kind) {
            case "keys":
                return Iu(e, !1);
            case "values":
                return Iu(r[e], !1)
        }
        return Iu([e, r[e]], !1)
    }), "values"),
    Cu = Ru.Arguments = Ru.Array;
if (Su("keys"), Su("values"), Su("entries"), Tu && "values" !== Cu.name) try {
    xu(Cu, "name", {
        value: "values"
    })
} catch (vN) {}
var ju = x,
    _u = Array.isArray || function(t) {
        return "Array" === ju(t)
    },
    Nu = i,
    Du = _u,
    Mu = TypeError,
    Bu = Object.getOwnPropertyDescriptor,
    Fu = Nu && ! function() {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).length = 1
        } catch (vN) {
            return vN instanceof TypeError
        }
    }() ? function(t, r) {
        if (Du(t) && !Bu(t, "length").writable) throw new Mu("Cannot set read only .length");
        return t.length = r
    } : function(t, r) {
        return t.length = r
    },
    Hu = TypeError,
    zu = function(t) {
        if (t > 9007199254740991) throw Hu("Maximum allowed index exceeded");
        return t
    },
    qu = Mt,
    $u = hn,
    Vu = Fu,
    Wu = zu;
ro({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: o((function() {
        return 4294967297 !== [].push.call({
            length: 4294967296
        }, 1)
    })) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (vN) {
            return vN instanceof TypeError
        }
    }()
}, {
    push: function(t) {
        var r = qu(this),
            e = $u(r),
            n = arguments.length;
        Wu(e + n);
        for (var o = 0; o < n; o++) r[e] = arguments[o], e++;
        return Vu(r, e), e
    }
});
var Gu, Yu = yt,
    Ju = Mt,
    Ku = P,
    Qu = hn,
    Xu = TypeError,
    Zu = "Reduce of empty array with no initial value",
    tc = {
        left: (Gu = !1, function(t, r, e, n) {
            var o = Ju(t),
                i = Ku(o),
                a = Qu(o);
            if (Yu(r), 0 === a && e < 2) throw new Xu(Zu);
            var u = Gu ? a - 1 : 0,
                c = Gu ? -1 : 1;
            if (e < 2)
                for (;;) {
                    if (u in i) {
                        n = i[u], u += c;
                        break
                    }
                    if (u += c, Gu ? u < 0 : a <= u) throw new Xu(Zu)
                }
            for (; Gu ? u >= 0 : a > u; u += c) u in i && (n = r(n, i[u], u, o));
            return n
        })
    },
    rc = o,
    ec = function(t, r) {
        var e = [][t];
        return !!e && rc((function() {
            e.call(null, r || function() {
                return 1
            }, 1)
        }))
    },
    nc = e,
    oc = Y,
    ic = x,
    ac = function(t) {
        return oc.slice(0, t.length) === t
    },
    uc = ac("Bun/") ? "BUN" : ac("Cloudflare-Workers") ? "CLOUDFLARE" : ac("Deno/") ? "DENO" : ac("Node.js/") ? "NODE" : nc.Bun && "string" == typeof Bun.version ? "BUN" : nc.Deno && "object" == typeof Deno.version ? "DENO" : "process" === ic(nc.process) ? "NODE" : nc.window && nc.document ? "BROWSER" : "REST",
    cc = "NODE" === uc,
    sc = tc.left;
ro({
    target: "Array",
    proto: !0,
    forced: !cc && rt > 79 && rt < 83 || !ec("reduce")
}, {
    reduce: function(t) {
        var r = arguments.length;
        return sc(this, t, r, r > 1 ? arguments[1] : void 0)
    }
});
var fc = ro,
    lc = _u,
    hc = E([].reverse),
    pc = [1, 2];
fc({
    target: "Array",
    proto: !0,
    forced: String(pc) === String(pc.reverse())
}, {
    reverse: function() {
        return lc(this) && (this.length = this.length), hc(this)
    }
});
var vc = pt,
    dc = TypeError,
    gc = function(t, r) {
        if (!delete t[r]) throw new dc("Cannot delete property " + vc(r) + " of " + vc(t))
    },
    yc = E([].slice),
    wc = yc,
    mc = Math.floor,
    bc = function(t, r) {
        var e = t.length;
        if (e < 8)
            for (var n, o, i = 1; i < e;) {
                for (o = i, n = t[i]; o && r(t[o - 1], n) > 0;) t[o] = t[--o];
                o !== i++ && (t[o] = n)
            } else
                for (var a = mc(e / 2), u = bc(wc(t, 0, a), r), c = bc(wc(t, a), r), s = u.length, f = c.length, l = 0, h = 0; l < s || h < f;) t[l + h] = l < s && h < f ? r(u[l], c[h]) <= 0 ? u[l++] : c[h++] : l < s ? u[l++] : c[h++];
        return t
    },
    Ec = bc,
    Sc = Y.match(/firefox\/(\d+)/i),
    Rc = !!Sc && +Sc[1],
    Ac = /MSIE|Trident/.test(Y),
    xc = Y.match(/AppleWebKit\/(\d+)\./),
    Oc = !!xc && +xc[1],
    Ic = ro,
    Tc = E,
    kc = yt,
    Pc = Mt,
    Uc = hn,
    Lc = gc,
    Cc = ho,
    jc = o,
    _c = Ec,
    Nc = ec,
    Dc = Rc,
    Mc = Ac,
    Bc = rt,
    Fc = Oc,
    Hc = [],
    zc = Tc(Hc.sort),
    qc = Tc(Hc.push),
    $c = jc((function() {
        Hc.sort(void 0)
    })),
    Vc = jc((function() {
        Hc.sort(null)
    })),
    Wc = Nc("sort"),
    Gc = !jc((function() {
        if (Bc) return Bc < 70;
        if (!(Dc && Dc > 3)) {
            if (Mc) return !0;
            if (Fc) return Fc < 603;
            var t, r, e, n, o = "";
            for (t = 65; t < 76; t++) {
                switch (r = String.fromCharCode(t), t) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        e = 3;
                        break;
                    case 68:
                    case 71:
                        e = 4;
                        break;
                    default:
                        e = 2
                }
                for (n = 0; n < 47; n++) Hc.push({
                    k: r + n,
                    v: e
                })
            }
            for (Hc.sort((function(t, r) {
                    return r.v - t.v
                })), n = 0; n < Hc.length; n++) r = Hc[n].k.charAt(0), o.charAt(o.length - 1) !== r && (o += r);
            return "DGBEFHACIJK" !== o
        }
    }));
Ic({
    target: "Array",
    proto: !0,
    forced: $c || !Vc || !Wc || !Gc
}, {
    sort: function(t) {
        void 0 !== t && kc(t);
        var r = Pc(this);
        if (Gc) return void 0 === t ? zc(r) : zc(r, t);
        var e, n, o = [],
            i = Uc(r);
        for (n = 0; n < i; n++) n in r && qc(o, r[n]);
        for (_c(o, function(t) {
                return function(r, e) {
                    return void 0 === e ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, e) || 0 : Cc(r) > Cc(e) ? 1 : -1
                }
            }(t)), e = Uc(o), n = 0; n < e;) r[n] = o[n++];
        for (; n < i;) Lc(r, n++);
        return r
    }
});
var Yc = hn,
    Jc = function(t, r) {
        for (var e = Yc(t), n = new r(e), o = 0; o < e; o++) n[o] = t[e - o - 1];
        return n
    },
    Kc = Jc,
    Qc = D,
    Xc = wa,
    Zc = Array;
ro({
    target: "Array",
    proto: !0
}, {
    toReversed: function() {
        return Kc(Qc(this), Zc)
    }
}), Xc("toReversed");
var ts = hn,
    rs = function(t, r, e) {
        for (var n = 0, o = arguments.length > 2 ? e : ts(r), i = new t(o); o > n;) i[n] = r[n++];
        return i
    },
    es = e,
    ns = ro,
    os = yt,
    is = D,
    as = rs,
    us = function(t, r) {
        var e = es[t],
            n = e && e.prototype;
        return n && n[r]
    },
    cs = wa,
    ss = Array,
    fs = E(us("Array", "sort"));
ns({
    target: "Array",
    proto: !0
}, {
    toSorted: function(t) {
        void 0 !== t && os(t);
        var r = is(this),
            e = as(ss, r);
        return fs(e, t)
    }
}), cs("toSorted");
var ls = ro,
    hs = wa,
    ps = zu,
    vs = hn,
    ds = un,
    gs = D,
    ys = en,
    ws = Array,
    ms = Math.max,
    bs = Math.min;
ls({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(t, r) {
        var e, n, o, i, a = gs(this),
            u = vs(a),
            c = ds(t, u),
            s = arguments.length,
            f = 0;
        for (0 === s ? e = n = 0 : 1 === s ? (e = 0, n = u - c) : (e = s - 2, n = bs(ms(ys(r), 0), u - c)), o = ps(u + e - n), i = ws(o); f < c; f++) i[f] = a[f];
        for (; f < c + e; f++) i[f] = arguments[f - c + 2];
        for (; f < o; f++) i[f] = a[f + n - e];
        return i
    }
}), hs("toSpliced");
var Es = Mt,
    Ss = hn,
    Rs = Fu,
    As = gc,
    xs = zu;
ro({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: 1 !== [].unshift(0) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).unshift()
        } catch (vN) {
            return vN instanceof TypeError
        }
    }()
}, {
    unshift: function(t) {
        var r = Es(this),
            e = Ss(r),
            n = arguments.length;
        if (n) {
            xs(e + n);
            for (var o = e; o--;) {
                var i = o + n;
                o in r ? r[i] = r[o] : As(r, i)
            }
            for (var a = 0; a < n; a++) r[a] = arguments[a]
        }
        return Rs(r, e + n)
    }
});
var Os = x,
    Is = E,
    Ts = function(t) {
        if ("Function" === Os(t)) return Is(t)
    },
    ks = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
    Ps = Qe,
    Us = function(t, r, e) {
        for (var n in r) Ps(t, n, r[n], e);
        return t
    },
    Ls = V,
    Cs = TypeError,
    js = function(t, r) {
        if (Ls(r, t)) return t;
        throw new Cs("Incorrect invocation")
    },
    _s = en,
    Ns = fn,
    Ds = RangeError,
    Ms = function(t) {
        if (void 0 === t) return 0;
        var r = _s(t),
            e = Ns(r);
        if (r !== e) throw new Ds("Wrong length or index");
        return e
    },
    Bs = Math.sign || function(t) {
        var r = +t;
        return 0 === r || r != r ? r : r < 0 ? -1 : 1
    },
    Fs = 4503599627370496,
    Hs = Bs,
    zs = function(t) {
        return t + Fs - Fs
    },
    qs = Math.abs,
    $s = function(t, r, e, n) {
        var o = +t,
            i = qs(o),
            a = Hs(o);
        if (i < n) return a * zs(i / n / r) * n * r;
        var u = (1 + r / 2220446049250313e-31) * i,
            c = u - (u - i);
        return c > e || c != c ? a * (1 / 0) : a * c
    },
    Vs = Math.fround || function(t) {
        return $s(t, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54)
    },
    Ws = Array,
    Gs = Math.abs,
    Ys = Math.pow,
    Js = Math.floor,
    Ks = Math.log,
    Qs = Math.LN2,
    Xs = {
        pack: function(t, r, e) {
            var n, o, i, a = Ws(e),
                u = 8 * e - r - 1,
                c = (1 << u) - 1,
                s = c >> 1,
                f = 23 === r ? Ys(2, -24) - Ys(2, -77) : 0,
                l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                h = 0;
            for ((t = Gs(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, n = c) : (n = Js(Ks(t) / Qs), t * (i = Ys(2, -n)) < 1 && (n--, i *= 2), (t += n + s >= 1 ? f / i : f * Ys(2, 1 - s)) * i >= 2 && (n++, i /= 2), n + s >= c ? (o = 0, n = c) : n + s >= 1 ? (o = (t * i - 1) * Ys(2, r), n += s) : (o = t * Ys(2, s - 1) * Ys(2, r), n = 0)); r >= 8;) a[h++] = 255 & o, o /= 256, r -= 8;
            for (n = n << r | o, u += r; u > 0;) a[h++] = 255 & n, n /= 256, u -= 8;
            return a[h - 1] |= 128 * l, a
        },
        unpack: function(t, r) {
            var e, n = t.length,
                o = 8 * n - r - 1,
                i = (1 << o) - 1,
                a = i >> 1,
                u = o - 7,
                c = n - 1,
                s = t[c--],
                f = 127 & s;
            for (s >>= 7; u > 0;) f = 256 * f + t[c--], u -= 8;
            for (e = f & (1 << -u) - 1, f >>= -u, u += r; u > 0;) e = 256 * e + t[c--], u -= 8;
            if (0 === f) f = 1 - a;
            else {
                if (f === i) return e ? NaN : s ? -1 / 0 : 1 / 0;
                e += Ys(2, r), f -= a
            }
            return (s ? -1 : 1) * e * Ys(2, f - r)
        }
    },
    Zs = Mt,
    tf = un,
    rf = hn,
    ef = function(t) {
        for (var r = Zs(this), e = rf(r), n = arguments.length, o = tf(n > 1 ? arguments[1] : void 0, e), i = n > 2 ? arguments[2] : void 0, a = void 0 === i ? e : tf(i, e); a > o;) r[o++] = t;
        return r
    },
    nf = e,
    of = E,
    af = i,
    uf = ks,
    cf = Gr,
    sf = go,
    ff = Us,
    lf = o,
    hf = js,
    pf = en,
    vf = fn,
    df = Ms,
    gf = Vs,
    yf = Xs,
    wf = Ca,
    mf = Xo,
    bf = ef,
    Ef = yc,
    Sf = oi,
    Rf = Mn,
    Af = Wa,
    xf = Te,
    Of = te.PROPER,
    If = te.CONFIGURABLE,
    Tf = "ArrayBuffer",
    kf = "DataView",
    Pf = "prototype",
    Uf = "Wrong index",
    Lf = xf.getterFor(Tf),
    Cf = xf.getterFor(kf),
    jf = xf.set,
    _f = nf[Tf],
    Nf = _f,
    Df = Nf && Nf[Pf],
    Mf = nf[kf],
    Bf = Mf && Mf[Pf],
    Ff = Object.prototype,
    Hf = nf.Array,
    zf = nf.RangeError,
    qf = of (bf),
    $f = of ([].reverse),
    Vf = yf.pack,
    Wf = yf.unpack,
    Gf = function(t) {
        return [255 & t]
    },
    Yf = function(t) {
        return [255 & t, t >> 8 & 255]
    },
    Jf = function(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    },
    Kf = function(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    },
    Qf = function(t) {
        return Vf(gf(t), 23, 4)
    },
    Xf = function(t) {
        return Vf(t, 52, 8)
    },
    Zf = function(t, r, e) {
        sf(t[Pf], r, {
            configurable: !0,
            get: function() {
                return e(this)[r]
            }
        })
    },
    tl = function(t, r, e, n) {
        var o = Cf(t),
            i = df(e),
            a = !!n;
        if (i + r > o.byteLength) throw new zf(Uf);
        var u = o.bytes,
            c = i + o.byteOffset,
            s = Ef(u, c, c + r);
        return a ? s : $f(s)
    },
    rl = function(t, r, e, n, o, i) {
        var a = Cf(t),
            u = df(e),
            c = n(+o),
            s = !!i;
        if (u + r > a.byteLength) throw new zf(Uf);
        for (var f = a.bytes, l = u + a.byteOffset, h = 0; h < r; h++) f[l + h] = c[s ? h : r - h - 1]
    };
if (uf) {
    var el = Of && _f.name !== Tf;
    lf((function() {
        _f(1)
    })) && lf((function() {
        new _f(-1)
    })) && !lf((function() {
        return new _f, new _f(1.5), new _f(NaN), 1 !== _f.length || el && !If
    })) ? el && If && cf(_f, "name", Tf) : ((Nf = function(t) {
        return hf(this, Df), Sf(new _f(df(t)), this, Nf)
    })[Pf] = Df, Df.constructor = Nf, Rf(Nf, _f)), mf && wf(Bf) !== Ff && mf(Bf, Ff);
    var nl = new Mf(new Nf(2)),
        ol = of (Bf.setInt8);
    nl.setInt8(0, 2147483648), nl.setInt8(1, 2147483649), !nl.getInt8(0) && nl.getInt8(1) || ff(Bf, {
        setInt8: function(t, r) {
            ol(this, t, r << 24 >> 24)
        },
        setUint8: function(t, r) {
            ol(this, t, r << 24 >> 24)
        }
    }, {
        unsafe: !0
    })
} else Df = (Nf = function(t) {
    hf(this, Df);
    var r = df(t);
    jf(this, {
        type: Tf,
        bytes: qf(Hf(r), 0),
        byteLength: r
    }), af || (this.byteLength = r, this.detached = !1)
})[Pf], Mf = function(t, r, e) {
    hf(this, Bf), hf(t, Df);
    var n = Lf(t),
        o = n.byteLength,
        i = pf(r);
    if (i < 0 || i > o) throw new zf("Wrong offset");
    if (i + (e = void 0 === e ? o - i : vf(e)) > o) throw new zf("Wrong length");
    jf(this, {
        type: kf,
        buffer: t,
        byteLength: e,
        byteOffset: i,
        bytes: n.bytes
    }), af || (this.buffer = t, this.byteLength = e, this.byteOffset = i)
}, Bf = Mf[Pf], af && (Zf(Nf, "byteLength", Lf), Zf(Mf, "buffer", Cf), Zf(Mf, "byteLength", Cf), Zf(Mf, "byteOffset", Cf)), ff(Bf, {
    getInt8: function(t) {
        return tl(this, 1, t)[0] << 24 >> 24
    },
    getUint8: function(t) {
        return tl(this, 1, t)[0]
    },
    getInt16: function(t) {
        var r = tl(this, 2, t, arguments.length > 1 && arguments[1]);
        return (r[1] << 8 | r[0]) << 16 >> 16
    },
    getUint16: function(t) {
        var r = tl(this, 2, t, arguments.length > 1 && arguments[1]);
        return r[1] << 8 | r[0]
    },
    getInt32: function(t) {
        return Kf(tl(this, 4, t, arguments.length > 1 && arguments[1]))
    },
    getUint32: function(t) {
        return Kf(tl(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0
    },
    getFloat32: function(t) {
        return Wf(tl(this, 4, t, arguments.length > 1 && arguments[1]), 23)
    },
    getFloat64: function(t) {
        return Wf(tl(this, 8, t, arguments.length > 1 && arguments[1]), 52)
    },
    setInt8: function(t, r) {
        rl(this, 1, t, Gf, r)
    },
    setUint8: function(t, r) {
        rl(this, 1, t, Gf, r)
    },
    setInt16: function(t, r) {
        rl(this, 2, t, Yf, r, arguments.length > 2 && arguments[2])
    },
    setUint16: function(t, r) {
        rl(this, 2, t, Yf, r, arguments.length > 2 && arguments[2])
    },
    setInt32: function(t, r) {
        rl(this, 4, t, Jf, r, arguments.length > 2 && arguments[2])
    },
    setUint32: function(t, r) {
        rl(this, 4, t, Jf, r, arguments.length > 2 && arguments[2])
    },
    setFloat32: function(t, r) {
        rl(this, 4, t, Qf, r, arguments.length > 2 && arguments[2])
    },
    setFloat64: function(t, r) {
        rl(this, 8, t, Xf, r, arguments.length > 2 && arguments[2])
    }
});
Af(Nf, Tf), Af(Mf, kf);
var il = {
        ArrayBuffer: Nf,
        DataView: Mf
    },
    al = ro,
    ul = Ts,
    cl = o,
    sl = Cr,
    fl = un,
    ll = fn,
    hl = il.ArrayBuffer,
    pl = il.DataView,
    vl = pl.prototype,
    dl = ul(hl.prototype.slice),
    gl = ul(vl.getUint8),
    yl = ul(vl.setUint8);
al({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: cl((function() {
        return !new hl(2).slice(1, void 0).byteLength
    }))
}, {
    slice: function(t, r) {
        if (dl && void 0 === r) return dl(sl(this), t);
        for (var e = sl(this).byteLength, n = fl(t, e), o = fl(void 0 === r ? e : r, e), i = new hl(ll(o - n)), a = new pl(this), u = new pl(i), c = 0; n < o;) yl(u, c++, gl(a, n++));
        return i
    }
});
var wl = e,
    ml = qo,
    bl = x,
    El = wl.ArrayBuffer,
    Sl = wl.TypeError,
    Rl = El && ml(El.prototype, "byteLength", "get") || function(t) {
        if ("ArrayBuffer" !== bl(t)) throw new Sl("ArrayBuffer expected");
        return t.byteLength
    },
    Al = ks,
    xl = Rl,
    Ol = e.DataView,
    Il = function(t) {
        if (!Al || 0 !== xl(t)) return !1;
        try {
            return new Ol(t), !1
        } catch (vN) {
            return !0
        }
    },
    Tl = i,
    kl = go,
    Pl = Il,
    Ul = ArrayBuffer.prototype;
Tl && !("detached" in Ul) && kl(Ul, "detached", {
    configurable: !0,
    get: function() {
        return Pl(this)
    }
});
var Ll, Cl, jl, _l, Nl = Il,
    Dl = TypeError,
    Ml = function(t) {
        if (Nl(t)) throw new Dl("ArrayBuffer is detached");
        return t
    },
    Bl = e,
    Fl = cc,
    Hl = o,
    zl = rt,
    ql = uc,
    $l = e.structuredClone,
    Vl = !!$l && !Hl((function() {
        if ("DENO" === ql && zl > 92 || "NODE" === ql && zl > 94 || "BROWSER" === ql && zl > 97) return !1;
        var t = new ArrayBuffer(8),
            r = $l(t, {
                transfer: [t]
            });
        return 0 !== t.byteLength || 8 !== r.byteLength
    })),
    Wl = e,
    Gl = function(t) {
        if (Fl) {
            try {
                return Bl.process.getBuiltinModule(t)
            } catch (vN) {}
            try {
                return Function('return require("' + t + '")')()
            } catch (vN) {}
        }
    },
    Yl = Vl,
    Jl = Wl.structuredClone,
    Kl = Wl.ArrayBuffer,
    Ql = Wl.MessageChannel,
    Xl = !1;
if (Yl) Xl = function(t) {
    Jl(t, {
        transfer: [t]
    })
};
else if (Kl) try {
    Ql || (Ll = Gl("worker_threads")) && (Ql = Ll.MessageChannel), Ql && (Cl = new Ql, jl = new Kl(2), _l = function(t) {
        Cl.port1.postMessage(null, [t])
    }, 2 === jl.byteLength && (_l(jl), 0 === jl.byteLength && (Xl = _l)))
} catch (vN) {}
var Zl = e,
    th = E,
    rh = qo,
    eh = Ms,
    nh = Ml,
    oh = Rl,
    ih = Xl,
    ah = Vl,
    uh = Zl.structuredClone,
    ch = Zl.ArrayBuffer,
    sh = Zl.DataView,
    fh = Math.min,
    lh = ch.prototype,
    hh = sh.prototype,
    ph = th(lh.slice),
    vh = rh(lh, "resizable", "get"),
    dh = rh(lh, "maxByteLength", "get"),
    gh = th(hh.getInt8),
    yh = th(hh.setInt8),
    wh = (ah || ih) && function(t, r, e) {
        var n, o = oh(t),
            i = void 0 === r ? o : eh(r),
            a = !vh || !vh(t);
        if (nh(t), ah && (t = uh(t, {
                transfer: [t]
            }), o === i && (e || a))) return t;
        if (o >= i && (!e || a)) n = ph(t, 0, i);
        else {
            var u = e && !a && dh ? {
                maxByteLength: dh(t)
            } : void 0;
            n = new ch(i, u);
            for (var c = new sh(t), s = new sh(n), f = fh(i, o), l = 0; l < f; l++) yh(s, l, gh(c, l))
        }
        return ah || ih(t), n
    },
    mh = wh;
mh && ro({
    target: "ArrayBuffer",
    proto: !0
}, {
    transfer: function() {
        return mh(this, arguments.length ? arguments[0] : void 0, !0)
    }
});
var bh = wh;
bh && ro({
    target: "ArrayBuffer",
    proto: !0
}, {
    transferToFixedLength: function() {
        return bh(this, arguments.length ? arguments[0] : void 0, !1)
    }
});
var Eh = e;
ro({
    global: !0,
    forced: Eh.globalThis !== Eh
}, {
    globalThis: Eh
});
var Sh = i,
    Rh = Tr,
    Ah = g,
    xh = function(t, r, e) {
        Sh ? Rh.f(t, r, Ah(0, e)) : t[r] = e
    },
    Oh = ro,
    Ih = e,
    Th = js,
    kh = Cr,
    Ph = B,
    Uh = Ca,
    Lh = go,
    Ch = xh,
    jh = o,
    _h = Ht,
    Nh = za.IteratorPrototype,
    Dh = i,
    Mh = "constructor",
    Bh = "Iterator",
    Fh = rr("toStringTag"),
    Hh = TypeError,
    zh = Ih[Bh],
    qh = !Ph(zh) || zh.prototype !== Nh || !jh((function() {
        zh({})
    })),
    $h = function() {
        if (Th(this, Nh), Uh(this) === Nh) throw new Hh("Abstract class Iterator not directly constructable")
    },
    Vh = function(t, r) {
        Dh ? Lh(Nh, t, {
            configurable: !0,
            get: function() {
                return r
            },
            set: function(r) {
                if (kh(this), this === Nh) throw new Hh("You can't redefine this property");
                _h(this, t) ? this[t] = r : Ch(this, t, r)
            }
        }) : Nh[t] = r
    };
_h(Nh, Fh) || Vh(Fh, Bh), !qh && _h(Nh, Mh) && Nh[Mh] !== Object || Vh(Mh, $h), $h.prototype = Nh, Oh({
    global: !0,
    constructor: !0,
    forced: qh
}, {
    Iterator: $h
});
var Wh = yt,
    Gh = a,
    Yh = Ts(Ts.bind),
    Jh = function(t, r) {
        return Wh(t), void 0 === r ? t : Gh ? Yh(t, r) : function() {
            return t.apply(r, arguments)
        }
    },
    Kh = Aa,
    Qh = rr("iterator"),
    Xh = Array.prototype,
    Zh = function(t) {
        return void 0 !== t && (Kh.Array === t || Xh[Qh] === t)
    },
    tp = so,
    rp = bt,
    ep = U,
    np = Aa,
    op = rr("iterator"),
    ip = function(t) {
        if (!ep(t)) return rp(t, op) || rp(t, "@@iterator") || np[tp(t)]
    },
    ap = s,
    up = yt,
    cp = Cr,
    sp = pt,
    fp = ip,
    lp = TypeError,
    hp = function(t, r) {
        var e = arguments.length < 2 ? fp(t) : r;
        if (up(e)) return cp(ap(e, t));
        throw new lp(sp(t) + " is not iterable")
    },
    pp = s,
    vp = Cr,
    dp = bt,
    gp = function(t, r, e) {
        var n, o;
        vp(t);
        try {
            if (!(n = dp(t, "return"))) {
                if ("throw" === r) throw e;
                return e
            }
            n = pp(n, t)
        } catch (vN) {
            o = !0, n = vN
        }
        if ("throw" === r) throw e;
        if (o) throw n;
        return vp(n), e
    },
    yp = Jh,
    wp = s,
    mp = Cr,
    bp = pt,
    Ep = Zh,
    Sp = hn,
    Rp = V,
    Ap = hp,
    xp = ip,
    Op = gp,
    Ip = TypeError,
    Tp = function(t, r) {
        this.stopped = t, this.result = r
    },
    kp = Tp.prototype,
    Pp = function(t, r, e) {
        var n, o, i, a, u, c, s, f = e && e.that,
            l = !(!e || !e.AS_ENTRIES),
            h = !(!e || !e.IS_RECORD),
            p = !(!e || !e.IS_ITERATOR),
            v = !(!e || !e.INTERRUPTED),
            d = yp(r, f),
            g = function(t) {
                return n && Op(n, "normal", t), new Tp(!0, t)
            },
            y = function(t) {
                return l ? (mp(t), v ? d(t[0], t[1], g) : d(t[0], t[1])) : v ? d(t, g) : d(t)
            };
        if (h) n = t.iterator;
        else if (p) n = t;
        else {
            if (!(o = xp(t))) throw new Ip(bp(t) + " is not iterable");
            if (Ep(o)) {
                for (i = 0, a = Sp(t); a > i; i++)
                    if ((u = y(t[i])) && Rp(kp, u)) return u;
                return new Tp(!1)
            }
            n = Ap(t, o)
        }
        for (c = h ? t.next : n.next; !(s = wp(c, n)).done;) {
            try {
                u = y(s.value)
            } catch (vN) {
                Op(n, "throw", vN)
            }
            if ("object" == typeof u && u && Rp(kp, u)) return u
        }
        return new Tp(!1)
    },
    Up = function(t) {
        return {
            iterator: t,
            next: t.next,
            done: !1
        }
    },
    Lp = Pp,
    Cp = yt,
    jp = Cr,
    _p = Up;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    every: function(t) {
        jp(this), Cp(t);
        var r = _p(this),
            e = 0;
        return !Lp(r, (function(r, n) {
            if (!t(r, e++)) return n()
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).stopped
    }
});
var Np = s,
    Dp = ha,
    Mp = Gr,
    Bp = Us,
    Fp = Te,
    Hp = bt,
    zp = za.IteratorPrototype,
    qp = bu,
    $p = gp,
    Vp = rr("toStringTag"),
    Wp = "IteratorHelper",
    Gp = "WrapForValidIterator",
    Yp = Fp.set,
    Jp = function(t) {
        var r = Fp.getterFor(t ? Gp : Wp);
        return Bp(Dp(zp), {
            next: function() {
                var e = r(this);
                if (t) return e.nextHandler();
                if (e.done) return qp(void 0, !0);
                try {
                    var n = e.nextHandler();
                    return e.returnHandlerResult ? n : qp(n, e.done)
                } catch (vN) {
                    throw e.done = !0, vN
                }
            },
            return: function() {
                var e = r(this),
                    n = e.iterator;
                if (e.done = !0, t) {
                    var o = Hp(n, "return");
                    return o ? Np(o, n) : qp(void 0, !0)
                }
                if (e.inner) try {
                    $p(e.inner.iterator, "normal")
                } catch (vN) {
                    return $p(n, "throw", vN)
                }
                return n && $p(n, "normal"), qp(void 0, !0)
            }
        })
    },
    Kp = Jp(!0),
    Qp = Jp(!1);
Mp(Qp, Vp, "Iterator Helper");
var Xp = function(t, r, e) {
        var n = function(n, o) {
            o ? (o.iterator = n.iterator, o.next = n.next) : o = n, o.type = r ? Gp : Wp, o.returnHandlerResult = !!e, o.nextHandler = t, o.counter = 0, o.done = !1, Yp(this, o)
        };
        return n.prototype = r ? Kp : Qp, n
    },
    Zp = Cr,
    tv = gp,
    rv = function(t, r, e, n) {
        try {
            return n ? r(Zp(e)[0], e[1]) : r(e)
        } catch (vN) {
            tv(t, "throw", vN)
        }
    },
    ev = ro,
    nv = s,
    ov = yt,
    iv = Cr,
    av = Up,
    uv = rv,
    cv = Xp((function() {
        for (var t, r, e = this.iterator, n = this.predicate, o = this.next;;) {
            if (t = iv(nv(o, e)), this.done = !!t.done) return;
            if (r = t.value, uv(e, n, [r, this.counter++], !0)) return r
        }
    }));
ev({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    filter: function(t) {
        return iv(this), ov(t), new cv(av(this), {
            predicate: t
        })
    }
});
var sv = Pp,
    fv = yt,
    lv = Cr,
    hv = Up;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    find: function(t) {
        lv(this), fv(t);
        var r = hv(this),
            e = 0;
        return sv(r, (function(r, n) {
            if (t(r, e++)) return n(r)
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).result
    }
});
var pv = Pp,
    vv = yt,
    dv = Cr,
    gv = Up;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    forEach: function(t) {
        dv(this), vv(t);
        var r = gv(this),
            e = 0;
        pv(r, (function(r) {
            t(r, e++)
        }), {
            IS_RECORD: !0
        })
    }
});
var yv = s,
    wv = yt,
    mv = Cr,
    bv = Up,
    Ev = rv,
    Sv = Xp((function() {
        var t = this.iterator,
            r = mv(yv(this.next, t));
        if (!(this.done = !!r.done)) return Ev(t, this.mapper, [r.value, this.counter++], !0)
    }));
ro({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    map: function(t) {
        return mv(this), wv(t), new Sv(bv(this), {
            mapper: t
        })
    }
});
var Rv = Pp,
    Av = yt,
    xv = Cr,
    Ov = Up,
    Iv = TypeError;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    reduce: function(t) {
        xv(this), Av(t);
        var r = Ov(this),
            e = arguments.length < 2,
            n = e ? void 0 : arguments[1],
            o = 0;
        if (Rv(r, (function(r) {
                e ? (e = !1, n = r) : n = t(n, r, o), o++
            }), {
                IS_RECORD: !0
            }), e) throw new Iv("Reduce of empty iterator with no initial value");
        return n
    }
});
var Tv = Pp,
    kv = yt,
    Pv = Cr,
    Uv = Up;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    some: function(t) {
        Pv(this), kv(t);
        var r = Uv(this),
            e = 0;
        return Tv(r, (function(r, n) {
            if (t(r, e++)) return n()
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).stopped
    }
});
var Lv = Cr,
    Cv = Pp,
    jv = Up,
    _v = [].push;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    toArray: function() {
        var t = [];
        return Cv(jv(Lv(this)), _v, {
            that: t,
            IS_RECORD: !0
        }), t
    }
});
var Nv = _u,
    Dv = B,
    Mv = x,
    Bv = ho,
    Fv = E([].push),
    Hv = ro,
    zv = $,
    qv = Fo,
    $v = s,
    Vv = E,
    Wv = o,
    Gv = B,
    Yv = lt,
    Jv = yc,
    Kv = function(t) {
        if (Dv(t)) return t;
        if (Nv(t)) {
            for (var r = t.length, e = [], n = 0; n < r; n++) {
                var o = t[n];
                "string" == typeof o ? Fv(e, o) : "number" != typeof o && "Number" !== Mv(o) && "String" !== Mv(o) || Fv(e, Bv(o))
            }
            var i = e.length,
                a = !0;
            return function(t, r) {
                if (a) return a = !1, r;
                if (Nv(this)) return r;
                for (var n = 0; n < i; n++)
                    if (e[n] === t) return r
            }
        }
    },
    Qv = it,
    Xv = String,
    Zv = zv("JSON", "stringify"),
    td = Vv(/./.exec),
    rd = Vv("".charAt),
    ed = Vv("".charCodeAt),
    nd = Vv("".replace),
    od = Vv(1..toString),
    id = /[\uD800-\uDFFF]/g,
    ad = /^[\uD800-\uDBFF]$/,
    ud = /^[\uDC00-\uDFFF]$/,
    cd = !Qv || Wv((function() {
        var t = zv("Symbol")("stringify detection");
        return "[null]" !== Zv([t]) || "{}" !== Zv({
            a: t
        }) || "{}" !== Zv(Object(t))
    })),
    sd = Wv((function() {
        return '"\\udf06\\ud834"' !== Zv("\udf06\ud834") || '"\\udead"' !== Zv("\udead")
    })),
    fd = function(t, r) {
        var e = Jv(arguments),
            n = Kv(r);
        if (Gv(n) || void 0 !== t && !Yv(t)) return e[1] = function(t, r) {
            if (Gv(n) && (r = $v(n, this, Xv(t), r)), !Yv(r)) return r
        }, qv(Zv, null, e)
    },
    ld = function(t, r, e) {
        var n = rd(e, r - 1),
            o = rd(e, r + 1);
        return td(ad, t) && !td(ud, o) || td(ud, t) && !td(ad, n) ? "\\u" + od(ed(t, 0), 16) : t
    };
Zv && Hv({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: cd || sd
}, {
    stringify: function(t, r, e) {
        var n = Jv(arguments),
            o = qv(cd ? fd : Zv, null, n);
        return sd && "string" == typeof o ? nd(o, id, ld) : o
    }
});
var hd = $,
    pd = go,
    vd = i,
    dd = rr("species"),
    gd = function(t) {
        var r = hd(t);
        vd && r && !r[dd] && pd(r, dd, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    },
    yd = E,
    wd = o,
    md = B,
    bd = so,
    Ed = ue,
    Sd = function() {},
    Rd = $("Reflect", "construct"),
    Ad = /^\s*(?:class|function)\b/,
    xd = yd(Ad.exec),
    Od = !Ad.test(Sd),
    Id = function(t) {
        if (!md(t)) return !1;
        try {
            return Rd(Sd, [], t), !0
        } catch (vN) {
            return !1
        }
    },
    Td = function(t) {
        if (!md(t)) return !1;
        switch (bd(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return Od || !!xd(Ad, Ed(t))
        } catch (vN) {
            return !0
        }
    };
Td.sham = !0;
var kd, Pd, Ud, Ld, Cd = !Rd || wd((function() {
        var t;
        return Id(Id.call) || !Id(Object) || !Id((function() {
            t = !0
        })) || t
    })) ? Td : Id,
    jd = Cd,
    _d = pt,
    Nd = TypeError,
    Dd = function(t) {
        if (jd(t)) return t;
        throw new Nd(_d(t) + " is not a constructor")
    },
    Md = Cr,
    Bd = Dd,
    Fd = U,
    Hd = rr("species"),
    zd = function(t, r) {
        var e, n = Md(t).constructor;
        return void 0 === n || Fd(e = Md(n)[Hd]) ? r : Bd(e)
    },
    qd = TypeError,
    $d = function(t, r) {
        if (t < r) throw new qd("Not enough arguments");
        return t
    },
    Vd = /(?:ipad|iphone|ipod).*applewebkit/i.test(Y),
    Wd = e,
    Gd = Fo,
    Yd = Jh,
    Jd = B,
    Kd = Ht,
    Qd = o,
    Xd = Xi,
    Zd = yc,
    tg = gr,
    rg = $d,
    eg = Vd,
    ng = cc,
    og = Wd.setImmediate,
    ig = Wd.clearImmediate,
    ag = Wd.process,
    ug = Wd.Dispatch,
    cg = Wd.Function,
    sg = Wd.MessageChannel,
    fg = Wd.String,
    lg = 0,
    hg = {},
    pg = "onreadystatechange";
Qd((function() {
    kd = Wd.location
}));
var vg = function(t) {
        if (Kd(hg, t)) {
            var r = hg[t];
            delete hg[t], r()
        }
    },
    dg = function(t) {
        return function() {
            vg(t)
        }
    },
    gg = function(t) {
        vg(t.data)
    },
    yg = function(t) {
        Wd.postMessage(fg(t), kd.protocol + "//" + kd.host)
    };
og && ig || (og = function(t) {
    rg(arguments.length, 1);
    var r = Jd(t) ? t : cg(t),
        e = Zd(arguments, 1);
    return hg[++lg] = function() {
        Gd(r, void 0, e)
    }, Pd(lg), lg
}, ig = function(t) {
    delete hg[t]
}, ng ? Pd = function(t) {
    ag.nextTick(dg(t))
} : ug && ug.now ? Pd = function(t) {
    ug.now(dg(t))
} : sg && !eg ? (Ld = (Ud = new sg).port2, Ud.port1.onmessage = gg, Pd = Yd(Ld.postMessage, Ld)) : Wd.addEventListener && Jd(Wd.postMessage) && !Wd.importScripts && kd && "file:" !== kd.protocol && !Qd(yg) ? (Pd = yg, Wd.addEventListener("message", gg, !1)) : Pd = pg in tg("script") ? function(t) {
    Xd.appendChild(tg("script"))[pg] = function() {
        Xd.removeChild(this), vg(t)
    }
} : function(t) {
    setTimeout(dg(t), 0)
});
var wg = {
        set: og,
        clear: ig
    },
    mg = e,
    bg = i,
    Eg = Object.getOwnPropertyDescriptor,
    Sg = function(t) {
        if (!bg) return mg[t];
        var r = Eg(mg, t);
        return r && r.value
    },
    Rg = function() {
        this.head = null, this.tail = null
    };
Rg.prototype = {
    add: function(t) {
        var r = {
                item: t,
                next: null
            },
            e = this.tail;
        e ? e.next = r : this.head = r, this.tail = r
    },
    get: function() {
        var t = this.head;
        if (t) return null === (this.head = t.next) && (this.tail = null), t.item
    }
};
var Ag, xg, Og, Ig, Tg, kg = Rg,
    Pg = /ipad|iphone|ipod/i.test(Y) && "undefined" != typeof Pebble,
    Ug = /web0s(?!.*chrome)/i.test(Y),
    Lg = e,
    Cg = Sg,
    jg = Jh,
    _g = wg.set,
    Ng = kg,
    Dg = Vd,
    Mg = Pg,
    Bg = Ug,
    Fg = cc,
    Hg = Lg.MutationObserver || Lg.WebKitMutationObserver,
    zg = Lg.document,
    qg = Lg.process,
    $g = Lg.Promise,
    Vg = Cg("queueMicrotask");
if (!Vg) {
    var Wg = new Ng,
        Gg = function() {
            var t, r;
            for (Fg && (t = qg.domain) && t.exit(); r = Wg.get();) try {
                r()
            } catch (vN) {
                throw Wg.head && Ag(), vN
            }
            t && t.enter()
        };
    Dg || Fg || Bg || !Hg || !zg ? !Mg && $g && $g.resolve ? ((Ig = $g.resolve(void 0)).constructor = $g, Tg = jg(Ig.then, Ig), Ag = function() {
        Tg(Gg)
    }) : Fg ? Ag = function() {
        qg.nextTick(Gg)
    } : (_g = jg(_g, Lg), Ag = function() {
        _g(Gg)
    }) : (xg = !0, Og = zg.createTextNode(""), new Hg(Gg).observe(Og, {
        characterData: !0
    }), Ag = function() {
        Og.data = xg = !xg
    }), Vg = function(t) {
        Wg.head || Ag(), Wg.add(t)
    }
}
var Yg = Vg,
    Jg = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (vN) {
            return {
                error: !0,
                value: vN
            }
        }
    },
    Kg = e.Promise,
    Qg = e,
    Xg = Kg,
    Zg = B,
    ty = Gn,
    ry = ue,
    ey = rr,
    ny = uc,
    oy = rt;
Xg && Xg.prototype;
var iy = ey("species"),
    ay = !1,
    uy = Zg(Qg.PromiseRejectionEvent),
    cy = ty("Promise", (function() {
        var t = ry(Xg),
            r = t !== String(Xg);
        if (!r && 66 === oy) return !0;
        if (!oy || oy < 51 || !/native code/.test(t)) {
            var e = new Xg((function(t) {
                    t(1)
                })),
                n = function(t) {
                    t((function() {}), (function() {}))
                };
            if ((e.constructor = {})[iy] = n, !(ay = e.then((function() {})) instanceof n)) return !0
        }
        return !(r || "BROWSER" !== ny && "DENO" !== ny || uy)
    })),
    sy = {
        CONSTRUCTOR: cy,
        REJECTION_EVENT: uy,
        SUBCLASSING: ay
    },
    fy = {},
    ly = yt,
    hy = TypeError,
    py = function(t) {
        var r, e;
        this.promise = new t((function(t, n) {
            if (void 0 !== r || void 0 !== e) throw new hy("Bad Promise constructor");
            r = t, e = n
        })), this.resolve = ly(r), this.reject = ly(e)
    };
fy.f = function(t) {
    return new py(t)
};
var vy, dy, gy, yy = ro,
    wy = cc,
    my = e,
    by = s,
    Ey = Qe,
    Sy = Xo,
    Ry = Wa,
    Ay = gd,
    xy = yt,
    Oy = B,
    Iy = H,
    Ty = js,
    ky = zd,
    Py = wg.set,
    Uy = Yg,
    Ly = function(t, r) {
        try {
            1 === arguments.length ? console.error(t) : console.error(t, r)
        } catch (vN) {}
    },
    Cy = Jg,
    jy = kg,
    _y = Te,
    Ny = Kg,
    Dy = fy,
    My = "Promise",
    By = sy.CONSTRUCTOR,
    Fy = sy.REJECTION_EVENT,
    Hy = sy.SUBCLASSING,
    zy = _y.getterFor(My),
    qy = _y.set,
    $y = Ny && Ny.prototype,
    Vy = Ny,
    Wy = $y,
    Gy = my.TypeError,
    Yy = my.document,
    Jy = my.process,
    Ky = Dy.f,
    Qy = Ky,
    Xy = !!(Yy && Yy.createEvent && my.dispatchEvent),
    Zy = "unhandledrejection",
    tw = function(t) {
        var r;
        return !(!Iy(t) || !Oy(r = t.then)) && r
    },
    rw = function(t, r) {
        var e, n, o, i = r.value,
            a = 1 === r.state,
            u = a ? t.ok : t.fail,
            c = t.resolve,
            s = t.reject,
            f = t.domain;
        try {
            u ? (a || (2 === r.rejection && aw(r), r.rejection = 1), !0 === u ? e = i : (f && f.enter(), e = u(i), f && (f.exit(), o = !0)), e === t.promise ? s(new Gy("Promise-chain cycle")) : (n = tw(e)) ? by(n, e, c, s) : c(e)) : s(i)
        } catch (vN) {
            f && !o && f.exit(), s(vN)
        }
    },
    ew = function(t, r) {
        t.notified || (t.notified = !0, Uy((function() {
            for (var e, n = t.reactions; e = n.get();) rw(e, t);
            t.notified = !1, r && !t.rejection && ow(t)
        })))
    },
    nw = function(t, r, e) {
        var n, o;
        Xy ? ((n = Yy.createEvent("Event")).promise = r, n.reason = e, n.initEvent(t, !1, !0), my.dispatchEvent(n)) : n = {
            promise: r,
            reason: e
        }, !Fy && (o = my["on" + t]) ? o(n) : t === Zy && Ly("Unhandled promise rejection", e)
    },
    ow = function(t) {
        by(Py, my, (function() {
            var r, e = t.facade,
                n = t.value;
            if (iw(t) && (r = Cy((function() {
                    wy ? Jy.emit("unhandledRejection", n, e) : nw(Zy, e, n)
                })), t.rejection = wy || iw(t) ? 2 : 1, r.error)) throw r.value
        }))
    },
    iw = function(t) {
        return 1 !== t.rejection && !t.parent
    },
    aw = function(t) {
        by(Py, my, (function() {
            var r = t.facade;
            wy ? Jy.emit("rejectionHandled", r) : nw("rejectionhandled", r, t.value)
        }))
    },
    uw = function(t, r, e) {
        return function(n) {
            t(r, n, e)
        }
    },
    cw = function(t, r, e) {
        t.done || (t.done = !0, e && (t = e), t.value = r, t.state = 2, ew(t, !0))
    },
    sw = function(t, r, e) {
        if (!t.done) {
            t.done = !0, e && (t = e);
            try {
                if (t.facade === r) throw new Gy("Promise can't be resolved itself");
                var n = tw(r);
                n ? Uy((function() {
                    var e = {
                        done: !1
                    };
                    try {
                        by(n, r, uw(sw, e, t), uw(cw, e, t))
                    } catch (vN) {
                        cw(e, vN, t)
                    }
                })) : (t.value = r, t.state = 1, ew(t, !1))
            } catch (vN) {
                cw({
                    done: !1
                }, vN, t)
            }
        }
    };
if (By && (Wy = (Vy = function(t) {
        Ty(this, Wy), xy(t), by(vy, this);
        var r = zy(this);
        try {
            t(uw(sw, r), uw(cw, r))
        } catch (vN) {
            cw(r, vN)
        }
    }).prototype, (vy = function(t) {
        qy(this, {
            type: My,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new jy,
            rejection: !1,
            state: 0,
            value: null
        })
    }).prototype = Ey(Wy, "then", (function(t, r) {
        var e = zy(this),
            n = Ky(ky(this, Vy));
        return e.parent = !0, n.ok = !Oy(t) || t, n.fail = Oy(r) && r, n.domain = wy ? Jy.domain : void 0, 0 === e.state ? e.reactions.add(n) : Uy((function() {
            rw(n, e)
        })), n.promise
    })), dy = function() {
        var t = new vy,
            r = zy(t);
        this.promise = t, this.resolve = uw(sw, r), this.reject = uw(cw, r)
    }, Dy.f = Ky = function(t) {
        return t === Vy || undefined === t ? new dy(t) : Qy(t)
    }, Oy(Ny) && $y !== Object.prototype)) {
    gy = $y.then, Hy || Ey($y, "then", (function(t, r) {
        var e = this;
        return new Vy((function(t, r) {
            by(gy, e, t, r)
        })).then(t, r)
    }), {
        unsafe: !0
    });
    try {
        delete $y.constructor
    } catch (vN) {}
    Sy && Sy($y, Wy)
}
yy({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: By
}, {
    Promise: Vy
}), Ry(Vy, My, !1), Ay(My);
var fw = rr("iterator"),
    lw = !1;
try {
    var hw = 0,
        pw = {
            next: function() {
                return {
                    done: !!hw++
                }
            },
            return: function() {
                lw = !0
            }
        };
    pw[fw] = function() {
        return this
    }, Array.from(pw, (function() {
        throw 2
    }))
} catch (vN) {}
var vw = function(t, r) {
        try {
            if (!r && !lw) return !1
        } catch (vN) {
            return !1
        }
        var e = !1;
        try {
            var n = {};
            n[fw] = function() {
                return {
                    next: function() {
                        return {
                            done: e = !0
                        }
                    }
                }
            }, t(n)
        } catch (vN) {}
        return e
    },
    dw = Kg,
    gw = sy.CONSTRUCTOR || !vw((function(t) {
        dw.all(t).then(void 0, (function() {}))
    })),
    yw = s,
    ww = yt,
    mw = fy,
    bw = Jg,
    Ew = Pp;
ro({
    target: "Promise",
    stat: !0,
    forced: gw
}, {
    all: function(t) {
        var r = this,
            e = mw.f(r),
            n = e.resolve,
            o = e.reject,
            i = bw((function() {
                var e = ww(r.resolve),
                    i = [],
                    a = 0,
                    u = 1;
                Ew(t, (function(t) {
                    var c = a++,
                        s = !1;
                    u++, yw(e, r, t).then((function(t) {
                        s || (s = !0, i[c] = t, --u || n(i))
                    }), o)
                })), --u || n(i)
            }));
        return i.error && o(i.value), e.promise
    }
});
var Sw = ro,
    Rw = sy.CONSTRUCTOR,
    Aw = Kg,
    xw = $,
    Ow = B,
    Iw = Qe,
    Tw = Aw && Aw.prototype;
if (Sw({
        target: "Promise",
        proto: !0,
        forced: Rw,
        real: !0
    }, {
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), Ow(Aw)) {
    var kw = xw("Promise").prototype.catch;
    Tw.catch !== kw && Iw(Tw, "catch", kw, {
        unsafe: !0
    })
}
var Pw = s,
    Uw = yt,
    Lw = fy,
    Cw = Jg,
    jw = Pp;
ro({
    target: "Promise",
    stat: !0,
    forced: gw
}, {
    race: function(t) {
        var r = this,
            e = Lw.f(r),
            n = e.reject,
            o = Cw((function() {
                var o = Uw(r.resolve);
                jw(t, (function(t) {
                    Pw(o, r, t).then(e.resolve, n)
                }))
            }));
        return o.error && n(o.value), e.promise
    }
});
var _w = fy;
ro({
    target: "Promise",
    stat: !0,
    forced: sy.CONSTRUCTOR
}, {
    reject: function(t) {
        var r = _w.f(this);
        return (0, r.reject)(t), r.promise
    }
});
var Nw = Cr,
    Dw = H,
    Mw = fy,
    Bw = ro,
    Fw = sy.CONSTRUCTOR,
    Hw = function(t, r) {
        if (Nw(t), Dw(r) && r.constructor === t) return r;
        var e = Mw.f(t);
        return (0, e.resolve)(r), e.promise
    };
$("Promise"), Bw({
    target: "Promise",
    stat: !0,
    forced: Fw
}, {
    resolve: function(t) {
        return Hw(this, t)
    }
});
var zw = s,
    qw = yt,
    $w = fy,
    Vw = Jg,
    Ww = Pp;
ro({
    target: "Promise",
    stat: !0,
    forced: gw
}, {
    allSettled: function(t) {
        var r = this,
            e = $w.f(r),
            n = e.resolve,
            o = e.reject,
            i = Vw((function() {
                var e = qw(r.resolve),
                    o = [],
                    i = 0,
                    a = 1;
                Ww(t, (function(t) {
                    var u = i++,
                        c = !1;
                    a++, zw(e, r, t).then((function(t) {
                        c || (c = !0, o[u] = {
                            status: "fulfilled",
                            value: t
                        }, --a || n(o))
                    }), (function(t) {
                        c || (c = !0, o[u] = {
                            status: "rejected",
                            reason: t
                        }, --a || n(o))
                    }))
                })), --a || n(o)
            }));
        return i.error && o(i.value), e.promise
    }
});
var Gw = e,
    Yw = Wa;
ro({
    global: !0
}, {
    Reflect: {}
}), Yw(Gw.Reflect, "Reflect", !0);
var Jw = H,
    Kw = x,
    Qw = rr("match"),
    Xw = function(t) {
        var r;
        return Jw(t) && (void 0 !== (r = t[Qw]) ? !!r : "RegExp" === Kw(t))
    },
    Zw = Cr,
    tm = function() {
        var t = Zw(this),
            r = "";
        return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
    },
    rm = s,
    em = Ht,
    nm = V,
    om = tm,
    im = RegExp.prototype,
    am = function(t) {
        var r = t.flags;
        return void 0 !== r || "flags" in im || em(t, "flags") || !nm(im, t) ? r : rm(om, t)
    },
    um = o,
    cm = e.RegExp,
    sm = um((function() {
        var t = cm("a", "y");
        return t.lastIndex = 2, null !== t.exec("abcd")
    })),
    fm = sm || um((function() {
        return !cm("a", "y").sticky
    })),
    lm = {
        BROKEN_CARET: sm || um((function() {
            var t = cm("^r", "gy");
            return t.lastIndex = 2, null !== t.exec("str")
        })),
        MISSED_STICKY: fm,
        UNSUPPORTED_Y: sm
    },
    hm = o,
    pm = e.RegExp,
    vm = hm((function() {
        var t = pm(".", "s");
        return !(t.dotAll && t.test("\n") && "s" === t.flags)
    })),
    dm = o,
    gm = e.RegExp,
    ym = dm((function() {
        var t = gm("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
    })),
    wm = i,
    mm = e,
    bm = E,
    Em = Gn,
    Sm = oi,
    Rm = Gr,
    Am = ha,
    xm = Xe.f,
    Om = V,
    Im = Xw,
    Tm = ho,
    km = am,
    Pm = lm,
    Um = ti,
    Lm = Qe,
    Cm = o,
    jm = Ht,
    _m = Te.enforce,
    Nm = gd,
    Dm = vm,
    Mm = ym,
    Bm = rr("match"),
    Fm = mm.RegExp,
    Hm = Fm.prototype,
    zm = mm.SyntaxError,
    qm = bm(Hm.exec),
    $m = bm("".charAt),
    Vm = bm("".replace),
    Wm = bm("".indexOf),
    Gm = bm("".slice),
    Ym = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    Jm = /a/g,
    Km = /a/g,
    Qm = new Fm(Jm) !== Jm,
    Xm = Pm.MISSED_STICKY,
    Zm = Pm.UNSUPPORTED_Y,
    tb = wm && (!Qm || Xm || Dm || Mm || Cm((function() {
        return Km[Bm] = !1, Fm(Jm) !== Jm || Fm(Km) === Km || "/a/i" !== String(Fm(Jm, "i"))
    })));
if (Em("RegExp", tb)) {
    for (var rb = function(t, r) {
            var e, n, o, i, a, u, c = Om(Hm, this),
                s = Im(t),
                f = void 0 === r,
                l = [],
                h = t;
            if (!c && s && f && t.constructor === rb) return t;
            if ((s || Om(Hm, t)) && (t = t.source, f && (r = km(h))), t = void 0 === t ? "" : Tm(t), r = void 0 === r ? "" : Tm(r), h = t, Dm && "dotAll" in Jm && (n = !!r && Wm(r, "s") > -1) && (r = Vm(r, /s/g, "")), e = r, Xm && "sticky" in Jm && (o = !!r && Wm(r, "y") > -1) && Zm && (r = Vm(r, /y/g, "")), Mm && (i = function(t) {
                    for (var r, e = t.length, n = 0, o = "", i = [], a = Am(null), u = !1, c = !1, s = 0, f = ""; n <= e; n++) {
                        if ("\\" === (r = $m(t, n))) r += $m(t, ++n);
                        else if ("]" === r) u = !1;
                        else if (!u) switch (!0) {
                            case "[" === r:
                                u = !0;
                                break;
                            case "(" === r:
                                if (o += r, "?:" === Gm(t, n + 1, n + 3)) continue;
                                qm(Ym, Gm(t, n + 1)) && (n += 2, c = !0), s++;
                                continue;
                            case ">" === r && c:
                                if ("" === f || jm(a, f)) throw new zm("Invalid capture group name");
                                a[f] = !0, i[i.length] = [f, s], c = !1, f = "";
                                continue
                        }
                        c ? f += r : o += r
                    }
                    return [o, i]
                }(t), t = i[0], l = i[1]), a = Sm(Fm(t, r), c ? this : Hm, rb), (n || o || l.length) && (u = _m(a), n && (u.dotAll = !0, u.raw = rb(function(t) {
                    for (var r, e = t.length, n = 0, o = "", i = !1; n <= e; n++) "\\" !== (r = $m(t, n)) ? i || "." !== r ? ("[" === r ? i = !0 : "]" === r && (i = !1), o += r) : o += "[\\s\\S]" : o += r + $m(t, ++n);
                    return o
                }(t), e)), o && (u.sticky = !0), l.length && (u.groups = l)), t !== h) try {
                Rm(a, "source", "" === h ? "(?:)" : h)
            } catch (vN) {}
            return a
        }, eb = xm(Fm), nb = 0; eb.length > nb;) Um(rb, Fm, eb[nb++]);
    Hm.constructor = rb, rb.prototype = Hm, Lm(mm, "RegExp", rb, {
        constructor: !0
    })
}
Nm("RegExp");
var ob = i,
    ib = vm,
    ab = x,
    ub = go,
    cb = Te.get,
    sb = RegExp.prototype,
    fb = TypeError;
ob && ib && ub(sb, "dotAll", {
    configurable: !0,
    get: function() {
        if (this !== sb) {
            if ("RegExp" === ab(this)) return !!cb(this).dotAll;
            throw new fb("Incompatible receiver, RegExp required")
        }
    }
});
var lb = s,
    hb = E,
    pb = ho,
    vb = tm,
    db = lm,
    gb = ha,
    yb = Te.get,
    wb = vm,
    mb = ym,
    bb = _t("native-string-replace", String.prototype.replace),
    Eb = RegExp.prototype.exec,
    Sb = Eb,
    Rb = hb("".charAt),
    Ab = hb("".indexOf),
    xb = hb("".replace),
    Ob = hb("".slice),
    Ib = function() {
        var t = /a/,
            r = /b*/g;
        return lb(Eb, t, "a"), lb(Eb, r, "a"), 0 !== t.lastIndex || 0 !== r.lastIndex
    }(),
    Tb = db.BROKEN_CARET,
    kb = void 0 !== /()??/.exec("")[1];
(Ib || kb || Tb || wb || mb) && (Sb = function(t) {
    var r, e, n, o, i, a, u, c = this,
        s = yb(c),
        f = pb(t),
        l = s.raw;
    if (l) return l.lastIndex = c.lastIndex, r = lb(Sb, l, f), c.lastIndex = l.lastIndex, r;
    var h = s.groups,
        p = Tb && c.sticky,
        v = lb(vb, c),
        d = c.source,
        g = 0,
        y = f;
    if (p && (v = xb(v, "y", ""), -1 === Ab(v, "g") && (v += "g"), y = Ob(f, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Rb(f, c.lastIndex - 1)) && (d = "(?: " + d + ")", y = " " + y, g++), e = new RegExp("^(?:" + d + ")", v)), kb && (e = new RegExp("^" + d + "$(?!\\s)", v)), Ib && (n = c.lastIndex), o = lb(Eb, p ? e : c, y), p ? o ? (o.input = Ob(o.input, g), o[0] = Ob(o[0], g), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : Ib && o && (c.lastIndex = c.global ? o.index + o[0].length : n), kb && o && o.length > 1 && lb(bb, o[0], e, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
        })), o && h)
        for (o.groups = a = gb(null), i = 0; i < h.length; i++) a[(u = h[i])[0]] = o[u[1]];
    return o
});
var Pb = Sb;
ro({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== Pb
}, {
    exec: Pb
});
var Ub = i,
    Lb = go,
    Cb = tm,
    jb = o,
    _b = e.RegExp,
    Nb = _b.prototype,
    Db = Ub && jb((function() {
        var t = !0;
        try {
            _b(".", "d")
        } catch (vN) {
            t = !1
        }
        var r = {},
            e = "",
            n = t ? "dgimsy" : "gimsy",
            o = function(t, n) {
                Object.defineProperty(r, t, {
                    get: function() {
                        return e += n, !0
                    }
                })
            },
            i = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
        for (var a in t && (i.hasIndices = "d"), i) o(a, i[a]);
        return Object.getOwnPropertyDescriptor(Nb, "flags").get.call(r) !== n || e !== n
    }));
Db && Lb(Nb, "flags", {
    configurable: !0,
    get: Cb
});
var Mb = E,
    Bb = Set.prototype,
    Fb = {
        Set: Set,
        add: Mb(Bb.add),
        has: Mb(Bb.has),
        remove: Mb(Bb.delete),
        proto: Bb
    },
    Hb = Fb.has,
    zb = function(t) {
        return Hb(t), t
    },
    qb = s,
    $b = function(t, r, e) {
        for (var n, o, i = e ? t : t.iterator, a = t.next; !(n = qb(a, i)).done;)
            if (void 0 !== (o = r(n.value))) return o
    },
    Vb = E,
    Wb = $b,
    Gb = Fb.Set,
    Yb = Fb.proto,
    Jb = Vb(Yb.forEach),
    Kb = Vb(Yb.keys),
    Qb = Kb(new Gb).next,
    Xb = function(t, r, e) {
        return e ? Wb({
            iterator: Kb(t),
            next: Qb
        }, r) : Jb(t, r)
    },
    Zb = Xb,
    tE = Fb.Set,
    rE = Fb.add,
    eE = function(t) {
        var r = new tE;
        return Zb(t, (function(t) {
            rE(r, t)
        })), r
    },
    nE = qo(Fb.proto, "size", "get") || function(t) {
        return t.size
    },
    oE = yt,
    iE = Cr,
    aE = s,
    uE = en,
    cE = Up,
    sE = "Invalid size",
    fE = RangeError,
    lE = TypeError,
    hE = Math.max,
    pE = function(t, r) {
        this.set = t, this.size = hE(r, 0), this.has = oE(t.has), this.keys = oE(t.keys)
    };
pE.prototype = {
    getIterator: function() {
        return cE(iE(aE(this.keys, this.set)))
    },
    includes: function(t) {
        return aE(this.has, this.set, t)
    }
};
var vE = function(t) {
        iE(t);
        var r = +t.size;
        if (r != r) throw new lE(sE);
        var e = uE(r);
        if (e < 0) throw new fE(sE);
        return new pE(t, e)
    },
    dE = zb,
    gE = eE,
    yE = nE,
    wE = vE,
    mE = Xb,
    bE = $b,
    EE = Fb.has,
    SE = Fb.remove,
    RE = $,
    AE = function(t) {
        return {
            size: t,
            has: function() {
                return !1
            },
            keys: function() {
                return {
                    next: function() {
                        return {
                            done: !0
                        }
                    }
                }
            }
        }
    },
    xE = function(t) {
        return {
            size: t,
            has: function() {
                return !0
            },
            keys: function() {
                throw new Error("e")
            }
        }
    },
    OE = function(t, r) {
        var e = RE("Set");
        try {
            (new e)[t](AE(0));
            try {
                return (new e)[t](AE(-1)), !1
            } catch (o) {
                if (!r) return !0;
                try {
                    return (new e)[t](xE(-1 / 0)), !1
                } catch (vN) {
                    var n = new e;
                    return n.add(1), n.add(2), r(n[t](xE(1 / 0)))
                }
            }
        } catch (vN) {
            return !1
        }
    },
    IE = function(t) {
        var r = dE(this),
            e = wE(t),
            n = gE(r);
        return yE(r) <= e.size ? mE(r, (function(t) {
            e.includes(t) && SE(n, t)
        })) : bE(e.getIterator(), (function(t) {
            EE(r, t) && SE(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("difference", (function(t) {
        return 0 === t.size
    }))
}, {
    difference: IE
});
var TE = zb,
    kE = nE,
    PE = vE,
    UE = Xb,
    LE = $b,
    CE = Fb.Set,
    jE = Fb.add,
    _E = Fb.has,
    NE = o,
    DE = function(t) {
        var r = TE(this),
            e = PE(t),
            n = new CE;
        return kE(r) > e.size ? LE(e.getIterator(), (function(t) {
            _E(r, t) && jE(n, t)
        })) : UE(r, (function(t) {
            e.includes(t) && jE(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("intersection", (function(t) {
        return 2 === t.size && t.has(1) && t.has(2)
    })) || NE((function() {
        return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
    }))
}, {
    intersection: DE
});
var ME = zb,
    BE = Fb.has,
    FE = nE,
    HE = vE,
    zE = Xb,
    qE = $b,
    $E = gp,
    VE = function(t) {
        var r = ME(this),
            e = HE(t);
        if (FE(r) <= e.size) return !1 !== zE(r, (function(t) {
            if (e.includes(t)) return !1
        }), !0);
        var n = e.getIterator();
        return !1 !== qE(n, (function(t) {
            if (BE(r, t)) return $E(n, "normal", !1)
        }))
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("isDisjointFrom", (function(t) {
        return !t
    }))
}, {
    isDisjointFrom: VE
});
var WE = zb,
    GE = nE,
    YE = Xb,
    JE = vE,
    KE = function(t) {
        var r = WE(this),
            e = JE(t);
        return !(GE(r) > e.size) && !1 !== YE(r, (function(t) {
            if (!e.includes(t)) return !1
        }), !0)
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("isSubsetOf", (function(t) {
        return t
    }))
}, {
    isSubsetOf: KE
});
var QE = zb,
    XE = Fb.has,
    ZE = nE,
    tS = vE,
    rS = $b,
    eS = gp,
    nS = function(t) {
        var r = QE(this),
            e = tS(t);
        if (ZE(r) < e.size) return !1;
        var n = e.getIterator();
        return !1 !== rS(n, (function(t) {
            if (!XE(r, t)) return eS(n, "normal", !1)
        }))
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("isSupersetOf", (function(t) {
        return !t
    }))
}, {
    isSupersetOf: nS
});
var oS = zb,
    iS = eE,
    aS = vE,
    uS = $b,
    cS = Fb.add,
    sS = Fb.has,
    fS = Fb.remove,
    lS = function(t) {
        var r = oS(this),
            e = aS(t).getIterator(),
            n = iS(r);
        return uS(e, (function(t) {
            sS(r, t) ? fS(n, t) : cS(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("symmetricDifference")
}, {
    symmetricDifference: lS
});
var hS = zb,
    pS = Fb.add,
    vS = eE,
    dS = vE,
    gS = $b,
    yS = function(t) {
        var r = hS(this),
            e = dS(t).getIterator(),
            n = vS(r);
        return gS(e, (function(t) {
            pS(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !OE("union")
}, {
    union: yS
});
var wS = E,
    mS = en,
    bS = ho,
    ES = j,
    SS = wS("".charAt),
    RS = wS("".charCodeAt),
    AS = wS("".slice),
    xS = function(t) {
        return function(r, e) {
            var n, o, i = bS(ES(r)),
                a = mS(e),
                u = i.length;
            return a < 0 || a >= u ? t ? "" : void 0 : (n = RS(i, a)) < 55296 || n > 56319 || a + 1 === u || (o = RS(i, a + 1)) < 56320 || o > 57343 ? t ? SS(i, a) : n : t ? AS(i, a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536
        }
    },
    OS = {
        codeAt: xS(!1),
        charAt: xS(!0)
    },
    IS = OS.charAt,
    TS = function(t, r, e) {
        return r + (e ? IS(t, r).length : 1)
    },
    kS = s,
    PS = Cr,
    US = B,
    LS = x,
    CS = Pb,
    jS = TypeError,
    _S = function(t, r) {
        var e = t.exec;
        if (US(e)) {
            var n = kS(e, t, r);
            return null !== n && PS(n), n
        }
        if ("RegExp" === LS(t)) return kS(CS, t, r);
        throw new jS("RegExp#exec called on incompatible receiver")
    },
    NS = ro,
    DS = s,
    MS = Ts,
    BS = Za,
    FS = bu,
    HS = j,
    zS = fn,
    qS = ho,
    $S = Cr,
    VS = U,
    WS = Xw,
    GS = am,
    YS = bt,
    JS = Qe,
    KS = o,
    QS = zd,
    XS = TS,
    ZS = _S,
    tR = Te,
    rR = rr("matchAll"),
    eR = "RegExp String",
    nR = eR + " Iterator",
    oR = tR.set,
    iR = tR.getterFor(nR),
    aR = RegExp.prototype,
    uR = TypeError,
    cR = MS("".indexOf),
    sR = MS("".matchAll),
    fR = !!sR && !KS((function() {
        sR("a", /./)
    })),
    lR = BS((function(t, r, e, n) {
        oR(this, {
            type: nR,
            regexp: t,
            string: r,
            global: e,
            unicode: n,
            done: !1
        })
    }), eR, (function() {
        var t = iR(this);
        if (t.done) return FS(void 0, !0);
        var r = t.regexp,
            e = t.string,
            n = ZS(r, e);
        return null === n ? (t.done = !0, FS(void 0, !0)) : t.global ? ("" === qS(n[0]) && (r.lastIndex = XS(e, zS(r.lastIndex), t.unicode)), FS(n, !1)) : (t.done = !0, FS(n, !1))
    }));
NS({
    target: "String",
    proto: !0,
    forced: fR
}, {
    matchAll: function(t) {
        var r, e, n, o = HS(this);
        if (VS(t)) {
            if (fR) return sR(o, t)
        } else {
            if (WS(t) && (r = qS(HS(GS(t))), !~cR(r, "g"))) throw new uR("`.matchAll` does not allow non-global regexes");
            if (fR) return sR(o, t);
            if (n = YS(t, rR)) return DS(n, t, o)
        }
        return e = qS(o), new RegExp(t, "g")[rR](e)
    }
}), rR in aR || JS(aR, rR, (function(t) {
    var r, e, n, o = $S(this),
        i = qS(t),
        a = QS(o, RegExp),
        u = qS(GS(o));
    return r = new a(a === RegExp ? o.source : o, u), e = !!~cR(u, "g"), n = !!~cR(u, "u"), r.lastIndex = zS(o.lastIndex), new lR(r, i, e, n)
}));
var hR = s,
    pR = Qe,
    vR = Pb,
    dR = o,
    gR = rr,
    yR = Gr,
    wR = gR("species"),
    mR = RegExp.prototype,
    bR = E,
    ER = Mt,
    SR = Math.floor,
    RR = bR("".charAt),
    AR = bR("".replace),
    xR = bR("".slice),
    OR = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    IR = /\$([$&'`]|\d{1,2})/g,
    TR = Fo,
    kR = s,
    PR = E,
    UR = function(t, r, e, n) {
        var o = gR(t),
            i = !dR((function() {
                var r = {};
                return r[o] = function() {
                    return 7
                }, 7 !== "" [t](r)
            })),
            a = i && !dR((function() {
                var r = !1,
                    e = /a/;
                return "split" === t && ((e = {}).constructor = {}, e.constructor[wR] = function() {
                    return e
                }, e.flags = "", e[o] = /./ [o]), e.exec = function() {
                    return r = !0, null
                }, e[o](""), !r
            }));
        if (!i || !a || e) {
            var u = /./ [o],
                c = r(o, "" [t], (function(t, r, e, n, o) {
                    var a = r.exec;
                    return a === vR || a === mR.exec ? i && !o ? {
                        done: !0,
                        value: hR(u, r, e, n)
                    } : {
                        done: !0,
                        value: hR(t, e, r, n)
                    } : {
                        done: !1
                    }
                }));
            pR(String.prototype, t, c[0]), pR(mR, o, c[1])
        }
        n && yR(mR[o], "sham", !0)
    },
    LR = o,
    CR = Cr,
    jR = B,
    _R = U,
    NR = en,
    DR = fn,
    MR = ho,
    BR = j,
    FR = TS,
    HR = bt,
    zR = function(t, r, e, n, o, i) {
        var a = e + t.length,
            u = n.length,
            c = IR;
        return void 0 !== o && (o = ER(o), c = OR), AR(i, c, (function(i, c) {
            var s;
            switch (RR(c, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return xR(r, 0, e);
                case "'":
                    return xR(r, a);
                case "<":
                    s = o[xR(c, 1, -1)];
                    break;
                default:
                    var f = +c;
                    if (0 === f) return i;
                    if (f > u) {
                        var l = SR(f / 10);
                        return 0 === l ? i : l <= u ? void 0 === n[l - 1] ? RR(c, 1) : n[l - 1] + RR(c, 1) : i
                    }
                    s = n[f - 1]
            }
            return void 0 === s ? "" : s
        }))
    },
    qR = _S,
    $R = rr("replace"),
    VR = Math.max,
    WR = Math.min,
    GR = PR([].concat),
    YR = PR([].push),
    JR = PR("".indexOf),
    KR = PR("".slice),
    QR = "$0" === "a".replace(/./, "$0"),
    XR = !!/./ [$R] && "" === /./ [$R]("a", "$0");
UR("replace", (function(t, r, e) {
    var n = XR ? "$" : "$0";
    return [function(t, e) {
        var n = BR(this),
            o = _R(t) ? void 0 : HR(t, $R);
        return o ? kR(o, t, n, e) : kR(r, MR(n), t, e)
    }, function(t, o) {
        var i = CR(this),
            a = MR(t);
        if ("string" == typeof o && -1 === JR(o, n) && -1 === JR(o, "$<")) {
            var u = e(r, i, a, o);
            if (u.done) return u.value
        }
        var c = jR(o);
        c || (o = MR(o));
        var s, f = i.global;
        f && (s = i.unicode, i.lastIndex = 0);
        for (var l, h = []; null !== (l = qR(i, a)) && (YR(h, l), f);) {
            "" === MR(l[0]) && (i.lastIndex = FR(a, DR(i.lastIndex), s))
        }
        for (var p, v = "", d = 0, g = 0; g < h.length; g++) {
            for (var y, w = MR((l = h[g])[0]), m = VR(WR(NR(l.index), a.length), 0), b = [], E = 1; E < l.length; E++) YR(b, void 0 === (p = l[E]) ? p : String(p));
            var S = l.groups;
            if (c) {
                var R = GR([w], b, m, a);
                void 0 !== S && YR(R, S), y = MR(TR(o, void 0, R))
            } else y = zR(w, a, m, b, S, o);
            m >= d && (v += KR(a, d, m) + y, d = m + w.length)
        }
        return v + KR(a, d)
    }]
}), !!LR((function() {
    var t = /./;
    return t.exec = function() {
        var t = [];
        return t.groups = {
            a: "7"
        }, t
    }, "7" !== "".replace(t, "$<a>")
})) || !QR || XR);
var ZR, tA = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    rA = j,
    eA = ho,
    nA = tA,
    oA = E("".replace),
    iA = RegExp("^[" + nA + "]+"),
    aA = RegExp("(^|[^" + nA + "])[" + nA + "]+$"),
    uA = {
        trim: (ZR = 3, function(t) {
            var r = eA(rA(t));
            return 1 & ZR && (r = oA(r, iA, "")), 2 & ZR && (r = oA(r, aA, "$1")), r
        })
    },
    cA = te.PROPER,
    sA = o,
    fA = tA,
    lA = uA.trim;
ro({
    target: "String",
    proto: !0,
    forced: function(t) {
        return sA((function() {
            return !!fA[t]() || "​᠎" !== "​᠎" [t]() || cA && fA[t].name !== t
        }))
    }("trim")
}, {
    trim: function() {
        return lA(this)
    }
});
var hA, pA, vA, dA = {
        exports: {}
    },
    gA = ks,
    yA = i,
    wA = e,
    mA = B,
    bA = H,
    EA = Ht,
    SA = so,
    RA = pt,
    AA = Gr,
    xA = Qe,
    OA = go,
    IA = V,
    TA = Ca,
    kA = Xo,
    PA = rr,
    UA = Wt,
    LA = Te.enforce,
    CA = Te.get,
    jA = wA.Int8Array,
    _A = jA && jA.prototype,
    NA = wA.Uint8ClampedArray,
    DA = NA && NA.prototype,
    MA = jA && TA(jA),
    BA = _A && TA(_A),
    FA = Object.prototype,
    HA = wA.TypeError,
    zA = PA("toStringTag"),
    qA = UA("TYPED_ARRAY_TAG"),
    $A = "TypedArrayConstructor",
    VA = gA && !!kA && "Opera" !== SA(wA.opera),
    WA = !1,
    GA = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    YA = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    JA = function(t) {
        var r = TA(t);
        if (bA(r)) {
            var e = CA(r);
            return e && EA(e, $A) ? e[$A] : JA(r)
        }
    },
    KA = function(t) {
        if (!bA(t)) return !1;
        var r = SA(t);
        return EA(GA, r) || EA(YA, r)
    };
for (hA in GA)(vA = (pA = wA[hA]) && pA.prototype) ? LA(vA)[$A] = pA : VA = !1;
for (hA in YA)(vA = (pA = wA[hA]) && pA.prototype) && (LA(vA)[$A] = pA);
if ((!VA || !mA(MA) || MA === Function.prototype) && (MA = function() {
        throw new HA("Incorrect invocation")
    }, VA))
    for (hA in GA) wA[hA] && kA(wA[hA], MA);
if ((!VA || !BA || BA === FA) && (BA = MA.prototype, VA))
    for (hA in GA) wA[hA] && kA(wA[hA].prototype, BA);
if (VA && TA(DA) !== BA && kA(DA, BA), yA && !EA(BA, zA))
    for (hA in WA = !0, OA(BA, zA, {
            configurable: !0,
            get: function() {
                return bA(this) ? this[qA] : void 0
            }
        }), GA) wA[hA] && AA(wA[hA], qA, hA);
var QA = {
        NATIVE_ARRAY_BUFFER_VIEWS: VA,
        TYPED_ARRAY_TAG: WA && qA,
        aTypedArray: function(t) {
            if (KA(t)) return t;
            throw new HA("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
            if (mA(t) && (!kA || IA(MA, t))) return t;
            throw new HA(RA(t) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(t, r, e, n) {
            if (yA) {
                if (e)
                    for (var o in GA) {
                        var i = wA[o];
                        if (i && EA(i.prototype, t)) try {
                            delete i.prototype[t]
                        } catch (vN) {
                            try {
                                i.prototype[t] = r
                            } catch (a) {}
                        }
                    }
                BA[t] && !e || xA(BA, t, e ? r : VA && _A[t] || r, n)
            }
        },
        getTypedArrayConstructor: JA,
        isTypedArray: KA,
        TypedArray: MA,
        TypedArrayPrototype: BA
    },
    XA = e,
    ZA = o,
    tx = vw,
    rx = QA.NATIVE_ARRAY_BUFFER_VIEWS,
    ex = XA.ArrayBuffer,
    nx = XA.Int8Array,
    ox = !rx || !ZA((function() {
        nx(1)
    })) || !ZA((function() {
        new nx(-1)
    })) || !tx((function(t) {
        new nx, new nx(null), new nx(1.5), new nx(t)
    }), !0) || ZA((function() {
        return 1 !== new nx(new ex(2), 1, void 0).length
    })),
    ix = H,
    ax = Math.floor,
    ux = Number.isInteger || function(t) {
        return !ix(t) && isFinite(t) && ax(t) === t
    },
    cx = en,
    sx = RangeError,
    fx = function(t) {
        var r = cx(t);
        if (r < 0) throw new sx("The argument can't be less than 0");
        return r
    },
    lx = RangeError,
    hx = function(t, r) {
        var e = fx(t);
        if (e % r) throw new lx("Wrong offset");
        return e
    },
    px = Math.round,
    vx = so,
    dx = function(t) {
        var r = vx(t);
        return "BigInt64Array" === r || "BigUint64Array" === r
    },
    gx = sr,
    yx = TypeError,
    wx = function(t) {
        var r = gx(t, "number");
        if ("number" == typeof r) throw new yx("Can't convert number to bigint");
        return BigInt(r)
    },
    mx = Jh,
    bx = s,
    Ex = Dd,
    Sx = Mt,
    Rx = hn,
    Ax = hp,
    xx = ip,
    Ox = Zh,
    Ix = dx,
    Tx = QA.aTypedArrayConstructor,
    kx = wx,
    Px = _u,
    Ux = Cd,
    Lx = H,
    Cx = rr("species"),
    jx = Array,
    _x = function(t) {
        var r;
        return Px(t) && (r = t.constructor, (Ux(r) && (r === jx || Px(r.prototype)) || Lx(r) && null === (r = r[Cx])) && (r = void 0)), void 0 === r ? jx : r
    },
    Nx = Jh,
    Dx = P,
    Mx = Mt,
    Bx = hn,
    Fx = function(t, r) {
        return new(_x(t))(0 === r ? 0 : r)
    },
    Hx = E([].push),
    zx = {
        forEach: function(t) {
            var r = 1 === t,
                e = 2 === t,
                n = 3 === t,
                o = 4 === t,
                i = 6 === t,
                a = 7 === t,
                u = 5 === t || i;
            return function(c, s, f, l) {
                for (var h, p, v = Mx(c), d = Dx(v), g = Bx(d), y = Nx(s, f), w = 0, m = l || Fx, b = r ? m(c, g) : e || a ? m(c, 0) : void 0; g > w; w++)
                    if ((u || w in d) && (p = y(h = d[w], w, v), t))
                        if (r) b[w] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return w;
                    case 2:
                        Hx(b, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        Hx(b, h)
                }
                return i ? -1 : n || o ? o : b
            }
        }(0)
    },
    qx = ro,
    $x = e,
    Vx = s,
    Wx = i,
    Gx = ox,
    Yx = QA,
    Jx = il,
    Kx = js,
    Qx = g,
    Xx = Gr,
    Zx = ux,
    tO = fn,
    rO = Ms,
    eO = hx,
    nO = function(t) {
        var r = px(t);
        return r < 0 ? 0 : r > 255 ? 255 : 255 & r
    },
    oO = hr,
    iO = Ht,
    aO = so,
    uO = H,
    cO = lt,
    sO = ha,
    fO = V,
    lO = Xo,
    hO = Xe.f,
    pO = function(t) {
        var r, e, n, o, i, a, u, c, s = Ex(this),
            f = Sx(t),
            l = arguments.length,
            h = l > 1 ? arguments[1] : void 0,
            p = void 0 !== h,
            v = xx(f);
        if (v && !Ox(v))
            for (c = (u = Ax(f, v)).next, f = []; !(a = bx(c, u)).done;) f.push(a.value);
        for (p && l > 2 && (h = mx(h, arguments[2])), e = Rx(f), n = new(Tx(s))(e), o = Ix(n), r = 0; e > r; r++) i = p ? h(f[r], r) : f[r], n[r] = o ? kx(i) : +i;
        return n
    },
    vO = zx.forEach,
    dO = gd,
    gO = go,
    yO = Tr,
    wO = n,
    mO = rs,
    bO = oi,
    EO = Te.get,
    SO = Te.set,
    RO = Te.enforce,
    AO = yO.f,
    xO = wO.f,
    OO = $x.RangeError,
    IO = Jx.ArrayBuffer,
    TO = IO.prototype,
    kO = Jx.DataView,
    PO = Yx.NATIVE_ARRAY_BUFFER_VIEWS,
    UO = Yx.TYPED_ARRAY_TAG,
    LO = Yx.TypedArray,
    CO = Yx.TypedArrayPrototype,
    jO = Yx.isTypedArray,
    _O = "BYTES_PER_ELEMENT",
    NO = "Wrong length",
    DO = function(t, r) {
        gO(t, r, {
            configurable: !0,
            get: function() {
                return EO(this)[r]
            }
        })
    },
    MO = function(t) {
        var r;
        return fO(TO, t) || "ArrayBuffer" === (r = aO(t)) || "SharedArrayBuffer" === r
    },
    BO = function(t, r) {
        return jO(t) && !cO(r) && r in t && Zx(+r) && r >= 0
    },
    FO = function(t, r) {
        return r = oO(r), BO(t, r) ? Qx(2, t[r]) : xO(t, r)
    },
    HO = function(t, r, e) {
        return r = oO(r), !(BO(t, r) && uO(e) && iO(e, "value")) || iO(e, "get") || iO(e, "set") || e.configurable || iO(e, "writable") && !e.writable || iO(e, "enumerable") && !e.enumerable ? AO(t, r, e) : (t[r] = e.value, t)
    };
Wx ? (PO || (wO.f = FO, yO.f = HO, DO(CO, "buffer"), DO(CO, "byteOffset"), DO(CO, "byteLength"), DO(CO, "length")), qx({
    target: "Object",
    stat: !0,
    forced: !PO
}, {
    getOwnPropertyDescriptor: FO,
    defineProperty: HO
}), dA.exports = function(t, r, e) {
    var n = t.match(/\d+/)[0] / 8,
        o = t + (e ? "Clamped" : "") + "Array",
        i = "get" + t,
        a = "set" + t,
        u = $x[o],
        c = u,
        s = c && c.prototype,
        f = {},
        l = function(t, r) {
            AO(t, r, {
                get: function() {
                    return function(t, r) {
                        var e = EO(t);
                        return e.view[i](r * n + e.byteOffset, !0)
                    }(this, r)
                },
                set: function(t) {
                    return function(t, r, o) {
                        var i = EO(t);
                        i.view[a](r * n + i.byteOffset, e ? nO(o) : o, !0)
                    }(this, r, t)
                },
                enumerable: !0
            })
        };
    PO ? Gx && (c = r((function(t, r, e, o) {
        return Kx(t, s), bO(uO(r) ? MO(r) ? void 0 !== o ? new u(r, eO(e, n), o) : void 0 !== e ? new u(r, eO(e, n)) : new u(r) : jO(r) ? mO(c, r) : Vx(pO, c, r) : new u(rO(r)), t, c)
    })), lO && lO(c, LO), vO(hO(u), (function(t) {
        t in c || Xx(c, t, u[t])
    })), c.prototype = s) : (c = r((function(t, r, e, o) {
        Kx(t, s);
        var i, a, u, f = 0,
            h = 0;
        if (uO(r)) {
            if (!MO(r)) return jO(r) ? mO(c, r) : Vx(pO, c, r);
            i = r, h = eO(e, n);
            var p = r.byteLength;
            if (void 0 === o) {
                if (p % n) throw new OO(NO);
                if ((a = p - h) < 0) throw new OO(NO)
            } else if ((a = tO(o) * n) + h > p) throw new OO(NO);
            u = a / n
        } else u = rO(r), i = new IO(a = u * n);
        for (SO(t, {
                buffer: i,
                byteOffset: h,
                byteLength: a,
                length: u,
                view: new kO(i)
            }); f < u;) l(t, f++)
    })), lO && lO(c, LO), s = c.prototype = sO(CO)), s.constructor !== c && Xx(s, "constructor", c), RO(s).TypedArrayConstructor = c, UO && Xx(s, UO, o);
    var h = c !== u;
    f[o] = c, qx({
        global: !0,
        constructor: !0,
        forced: h,
        sham: !PO
    }, f), _O in c || Xx(c, _O, n), _O in s || Xx(s, _O, n), dO(o)
}) : dA.exports = function() {};
var zO = dA.exports;
zO("Uint8", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}));
var qO = hn,
    $O = en,
    VO = QA.aTypedArray;
(0, QA.exportTypedArrayMethod)("at", (function(t) {
    var r = VO(this),
        e = qO(r),
        n = $O(t),
        o = n >= 0 ? n : e + n;
    return o < 0 || o >= e ? void 0 : r[o]
}));
var WO = ef,
    GO = wx,
    YO = so,
    JO = s,
    KO = o,
    QO = QA.aTypedArray,
    XO = QA.exportTypedArrayMethod,
    ZO = E("".slice);
XO("fill", (function(t) {
    var r = arguments.length;
    QO(this);
    var e = "Big" === ZO(YO(this), 0, 3) ? GO(t) : +t;
    return JO(WO, this, e, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0)
}), KO((function() {
    var t = 0;
    return new Int8Array(2).fill({
        valueOf: function() {
            return t++
        }
    }), 1 !== t
})));
var tI = Jh,
    rI = P,
    eI = Mt,
    nI = hn,
    oI = function(t) {
        var r = 1 === t;
        return function(e, n, o) {
            for (var i, a = eI(e), u = rI(a), c = nI(u), s = tI(n, o); c-- > 0;)
                if (s(i = u[c], c, a)) switch (t) {
                    case 0:
                        return i;
                    case 1:
                        return c
                }
            return r ? -1 : void 0
        }
    },
    iI = {
        findLast: oI(0),
        findLastIndex: oI(1)
    },
    aI = iI.findLast,
    uI = QA.aTypedArray;
(0, QA.exportTypedArrayMethod)("findLast", (function(t) {
    return aI(uI(this), t, arguments.length > 1 ? arguments[1] : void 0)
}));
var cI = iI.findLastIndex,
    sI = QA.aTypedArray;
(0, QA.exportTypedArrayMethod)("findLastIndex", (function(t) {
    return cI(sI(this), t, arguments.length > 1 ? arguments[1] : void 0)
}));
var fI = e,
    lI = s,
    hI = QA,
    pI = hn,
    vI = hx,
    dI = Mt,
    gI = o,
    yI = fI.RangeError,
    wI = fI.Int8Array,
    mI = wI && wI.prototype,
    bI = mI && mI.set,
    EI = hI.aTypedArray,
    SI = hI.exportTypedArrayMethod,
    RI = !gI((function() {
        var t = new Uint8ClampedArray(2);
        return lI(bI, t, {
            length: 1,
            0: 3
        }, 1), 3 !== t[1]
    })),
    AI = RI && hI.NATIVE_ARRAY_BUFFER_VIEWS && gI((function() {
        var t = new wI(2);
        return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
    }));
SI("set", (function(t) {
    EI(this);
    var r = vI(arguments.length > 1 ? arguments[1] : void 0, 1),
        e = dI(t);
    if (RI) return lI(bI, this, e, r);
    var n = this.length,
        o = pI(e),
        i = 0;
    if (o + r > n) throw new yI("Wrong length");
    for (; i < o;) this[r + i] = e[i++]
}), !RI || AI);
var xI = Ts,
    OI = o,
    II = yt,
    TI = Ec,
    kI = Rc,
    PI = Ac,
    UI = rt,
    LI = Oc,
    CI = QA.aTypedArray,
    jI = QA.exportTypedArrayMethod,
    _I = e.Uint16Array,
    NI = _I && xI(_I.prototype.sort),
    DI = !(!NI || OI((function() {
        NI(new _I(2), null)
    })) && OI((function() {
        NI(new _I(2), {})
    }))),
    MI = !!NI && !OI((function() {
        if (UI) return UI < 74;
        if (kI) return kI < 67;
        if (PI) return !0;
        if (LI) return LI < 602;
        var t, r, e = new _I(516),
            n = Array(516);
        for (t = 0; t < 516; t++) r = t % 4, e[t] = 515 - t, n[t] = t - 2 * r + 3;
        for (NI(e, (function(t, r) {
                return (t / 4 | 0) - (r / 4 | 0)
            })), t = 0; t < 516; t++)
            if (e[t] !== n[t]) return !0
    }));
jI("sort", (function(t) {
    return void 0 !== t && II(t), MI ? NI(this, t) : TI(CI(this), function(t) {
        return function(r, e) {
            return void 0 !== t ? +t(r, e) || 0 : e != e ? -1 : r != r ? 1 : 0 === r && 0 === e ? 1 / r > 0 && 1 / e < 0 ? 1 : -1 : r > e
        }
    }(t))
}), !MI || DI);
var BI = Jc,
    FI = QA.aTypedArray,
    HI = QA.getTypedArrayConstructor;
(0, QA.exportTypedArrayMethod)("toReversed", (function() {
    return BI(FI(this), HI(this))
}));
var zI = yt,
    qI = rs,
    $I = QA.aTypedArray,
    VI = QA.getTypedArrayConstructor,
    WI = QA.exportTypedArrayMethod,
    GI = E(QA.TypedArrayPrototype.sort);
WI("toSorted", (function(t) {
    void 0 !== t && zI(t);
    var r = $I(this),
        e = qI(VI(r), r);
    return GI(e, t)
}));
var YI = hn,
    JI = en,
    KI = RangeError,
    QI = function(t, r, e, n) {
        var o = YI(t),
            i = JI(e),
            a = i < 0 ? o + i : i;
        if (a >= o || a < 0) throw new KI("Incorrect index");
        for (var u = new r(o), c = 0; c < o; c++) u[c] = c === a ? n : t[c];
        return u
    },
    XI = dx,
    ZI = en,
    tT = wx,
    rT = QA.aTypedArray,
    eT = QA.getTypedArrayConstructor,
    nT = QA.exportTypedArrayMethod,
    oT = !! function() {
        try {
            new Int8Array(1).with(2, {
                valueOf: function() {
                    throw 8
                }
            })
        } catch (vN) {
            return 8 === vN
        }
    }();
nT("with", {
    with: function(t, r) {
        var e = rT(this),
            n = ZI(t),
            o = XI(e) ? tT(r) : +r;
        return QI(e, eT(e), n, o)
    }
}.with, !oT);
var iT = E,
    aT = Ht,
    uT = SyntaxError,
    cT = parseInt,
    sT = String.fromCharCode,
    fT = iT("".charAt),
    lT = iT("".slice),
    hT = iT(/./.exec),
    pT = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "\t"
    },
    vT = /^[\da-f]{4}$/i,
    dT = /^[\u0000-\u001F]$/,
    gT = ro,
    yT = i,
    wT = e,
    mT = $,
    bT = E,
    ET = s,
    ST = B,
    RT = H,
    AT = _u,
    xT = Ht,
    OT = ho,
    IT = hn,
    TT = xh,
    kT = o,
    PT = function(t, r) {
        for (var e = !0, n = ""; r < t.length;) {
            var o = fT(t, r);
            if ("\\" === o) {
                var i = lT(t, r, r + 2);
                if (aT(pT, i)) n += pT[i], r += 2;
                else {
                    if ("\\u" !== i) throw new uT('Unknown escape sequence: "' + i + '"');
                    var a = lT(t, r += 2, r + 4);
                    if (!hT(vT, a)) throw new uT("Bad Unicode escape at: " + r);
                    n += sT(cT(a, 16)), r += 4
                }
            } else {
                if ('"' === o) {
                    e = !1, r++;
                    break
                }
                if (hT(dT, o)) throw new uT("Bad control character in string literal at: " + r);
                n += o, r++
            }
        }
        if (e) throw new uT("Unterminated string at: " + r);
        return {
            value: n,
            end: r
        }
    },
    UT = it,
    LT = wT.JSON,
    CT = wT.Number,
    jT = wT.SyntaxError,
    _T = LT && LT.parse,
    NT = mT("Object", "keys"),
    DT = Object.getOwnPropertyDescriptor,
    MT = bT("".charAt),
    BT = bT("".slice),
    FT = bT(/./.exec),
    HT = bT([].push),
    zT = /^\d$/,
    qT = /^[1-9]$/,
    $T = /^[\d-]$/,
    VT = /^[\t\n\r ]$/,
    WT = function(t, r, e, n) {
        var o, i, a, u, c, s = t[r],
            f = n && s === n.value,
            l = f && "string" == typeof n.source ? {
                source: n.source
            } : {};
        if (RT(s)) {
            var h = AT(s),
                p = f ? n.nodes : h ? [] : {};
            if (h)
                for (o = p.length, a = IT(s), u = 0; u < a; u++) GT(s, u, WT(s, "" + u, e, u < o ? p[u] : void 0));
            else
                for (i = NT(s), a = IT(i), u = 0; u < a; u++) c = i[u], GT(s, c, WT(s, c, e, xT(p, c) ? p[c] : void 0))
        }
        return ET(e, t, r, s, l)
    },
    GT = function(t, r, e) {
        if (yT) {
            var n = DT(t, r);
            if (n && !n.configurable) return
        }
        void 0 === e ? delete t[r] : TT(t, r, e)
    },
    YT = function(t, r, e, n) {
        this.value = t, this.end = r, this.source = e, this.nodes = n
    },
    JT = function(t, r) {
        this.source = t, this.index = r
    };
JT.prototype = {
    fork: function(t) {
        return new JT(this.source, t)
    },
    parse: function() {
        var t = this.source,
            r = this.skip(VT, this.index),
            e = this.fork(r),
            n = MT(t, r);
        if (FT($T, n)) return e.number();
        switch (n) {
            case "{":
                return e.object();
            case "[":
                return e.array();
            case '"':
                return e.string();
            case "t":
                return e.keyword(!0);
            case "f":
                return e.keyword(!1);
            case "n":
                return e.keyword(null)
        }
        throw new jT('Unexpected character: "' + n + '" at: ' + r)
    },
    node: function(t, r, e, n, o) {
        return new YT(r, n, t ? null : BT(this.source, e, n), o)
    },
    object: function() {
        for (var t = this.source, r = this.index + 1, e = !1, n = {}, o = {}; r < t.length;) {
            if (r = this.until(['"', "}"], r), "}" === MT(t, r) && !e) {
                r++;
                break
            }
            var i = this.fork(r).string(),
                a = i.value;
            r = i.end, r = this.until([":"], r) + 1, r = this.skip(VT, r), i = this.fork(r).parse(), TT(o, a, i), TT(n, a, i.value), r = this.until([",", "}"], i.end);
            var u = MT(t, r);
            if ("," === u) e = !0, r++;
            else if ("}" === u) {
                r++;
                break
            }
        }
        return this.node(1, n, this.index, r, o)
    },
    array: function() {
        for (var t = this.source, r = this.index + 1, e = !1, n = [], o = []; r < t.length;) {
            if (r = this.skip(VT, r), "]" === MT(t, r) && !e) {
                r++;
                break
            }
            var i = this.fork(r).parse();
            if (HT(o, i), HT(n, i.value), r = this.until([",", "]"], i.end), "," === MT(t, r)) e = !0, r++;
            else if ("]" === MT(t, r)) {
                r++;
                break
            }
        }
        return this.node(1, n, this.index, r, o)
    },
    string: function() {
        var t = this.index,
            r = PT(this.source, this.index + 1);
        return this.node(0, r.value, t, r.end)
    },
    number: function() {
        var t = this.source,
            r = this.index,
            e = r;
        if ("-" === MT(t, e) && e++, "0" === MT(t, e)) e++;
        else {
            if (!FT(qT, MT(t, e))) throw new jT("Failed to parse number at: " + e);
            e = this.skip(zT, e + 1)
        }
        if (("." === MT(t, e) && (e = this.skip(zT, e + 1)), "e" === MT(t, e) || "E" === MT(t, e)) && (e++, "+" !== MT(t, e) && "-" !== MT(t, e) || e++, e === (e = this.skip(zT, e)))) throw new jT("Failed to parse number's exponent value at: " + e);
        return this.node(0, CT(BT(t, r, e)), r, e)
    },
    keyword: function(t) {
        var r = "" + t,
            e = this.index,
            n = e + r.length;
        if (BT(this.source, e, n) !== r) throw new jT("Failed to parse value at: " + e);
        return this.node(0, t, e, n)
    },
    skip: function(t, r) {
        for (var e = this.source; r < e.length && FT(t, MT(e, r)); r++);
        return r
    },
    until: function(t, r) {
        r = this.skip(VT, r);
        for (var e = MT(this.source, r), n = 0; n < t.length; n++)
            if (t[n] === e) return r;
        throw new jT('Unexpected character: "' + e + '" at: ' + r)
    }
};
var KT = kT((function() {
        var t, r = "9007199254740993";
        return _T(r, (function(r, e, n) {
            t = n.source
        })), t !== r
    })),
    QT = UT && !kT((function() {
        return 1 / _T("-0 \t") != -1 / 0
    }));
gT({
    target: "JSON",
    stat: !0,
    forced: KT
}, {
    parse: function(t, r) {
        return QT && !ST(r) ? _T(t) : function(t, r) {
            t = OT(t);
            var e = new JT(t, 0),
                n = e.parse(),
                o = n.value,
                i = e.skip(VT, n.end);
            if (i < t.length) throw new jT('Unexpected extra character: "' + MT(t, i) + '" after the parsed data at: ' + i);
            return ST(r) ? WT({
                "": o
            }, "", r, n) : o
        }(t, r)
    }
});
var XT = H,
    ZT = String,
    tk = TypeError,
    rk = function(t) {
        if (void 0 === t || XT(t)) return t;
        throw new tk(ZT(t) + " is not an object or undefined")
    },
    ek = TypeError,
    nk = function(t) {
        if ("string" == typeof t) return t;
        throw new ek("Argument is not a string")
    },
    ok = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    ik = ok + "+/",
    ak = ok + "-_",
    uk = function(t) {
        for (var r = {}, e = 0; e < 64; e++) r[t.charAt(e)] = e;
        return r
    },
    ck = {
        i2c: ik,
        c2i: uk(ik),
        i2cUrl: ak,
        c2iUrl: uk(ak)
    },
    sk = TypeError,
    fk = function(t) {
        var r = t && t.alphabet;
        if (void 0 === r || "base64" === r || "base64url" === r) return r || "base64";
        throw new sk("Incorrect `alphabet` option")
    },
    lk = e,
    hk = E,
    pk = rk,
    vk = nk,
    dk = Ht,
    gk = fk,
    yk = Ml,
    wk = ck.c2i,
    mk = ck.c2iUrl,
    bk = lk.SyntaxError,
    Ek = lk.TypeError,
    Sk = hk("".charAt),
    Rk = function(t, r) {
        for (var e = t.length; r < e; r++) {
            var n = Sk(t, r);
            if (" " !== n && "\t" !== n && "\n" !== n && "\f" !== n && "\r" !== n) break
        }
        return r
    },
    Ak = function(t, r, e) {
        var n = t.length;
        n < 4 && (t += 2 === n ? "AA" : "A");
        var o = (r[Sk(t, 0)] << 18) + (r[Sk(t, 1)] << 12) + (r[Sk(t, 2)] << 6) + r[Sk(t, 3)],
            i = [o >> 16 & 255, o >> 8 & 255, 255 & o];
        if (2 === n) {
            if (e && 0 !== i[1]) throw new bk("Extra bits");
            return [i[0]]
        }
        if (3 === n) {
            if (e && 0 !== i[2]) throw new bk("Extra bits");
            return [i[0], i[1]]
        }
        return i
    },
    xk = function(t, r, e) {
        for (var n = r.length, o = 0; o < n; o++) t[e + o] = r[o];
        return e + n
    },
    Ok = so,
    Ik = TypeError,
    Tk = function(t) {
        if ("Uint8Array" === Ok(t)) return t;
        throw new Ik("Argument is not an Uint8Array")
    },
    kk = ro,
    Pk = function(t, r, e, n) {
        vk(t), pk(r);
        var o = "base64" === gk(r) ? wk : mk,
            i = r ? r.lastChunkHandling : void 0;
        if (void 0 === i && (i = "loose"), "loose" !== i && "strict" !== i && "stop-before-partial" !== i) throw new Ek("Incorrect `lastChunkHandling` option");
        e && yk(e.buffer);
        var a = e || [],
            u = 0,
            c = 0,
            s = "",
            f = 0;
        if (n)
            for (;;) {
                if ((f = Rk(t, f)) === t.length) {
                    if (s.length > 0) {
                        if ("stop-before-partial" === i) break;
                        if ("loose" !== i) throw new bk("Missing padding");
                        if (1 === s.length) throw new bk("Malformed padding: exactly one additional character");
                        u = xk(a, Ak(s, o, !1), u)
                    }
                    c = t.length;
                    break
                }
                var l = Sk(t, f);
                if (++f, "=" === l) {
                    if (s.length < 2) throw new bk("Padding is too early");
                    if (f = Rk(t, f), 2 === s.length) {
                        if (f === t.length) {
                            if ("stop-before-partial" === i) break;
                            throw new bk("Malformed padding: only one =")
                        }
                        "=" === Sk(t, f) && (++f, f = Rk(t, f))
                    }
                    if (f < t.length) throw new bk("Unexpected character after padding");
                    u = xk(a, Ak(s, o, "strict" === i), u), c = t.length;
                    break
                }
                if (!dk(o, l)) throw new bk("Unexpected character");
                var h = n - u;
                if (1 === h && 2 === s.length || 2 === h && 3 === s.length) break;
                if (4 === (s += l).length && (u = xk(a, Ak(s, o, !1), u), s = "", c = f, u === n)) break
            }
        return {
            bytes: a,
            read: c,
            written: u
        }
    },
    Uk = Tk;
e.Uint8Array && kk({
    target: "Uint8Array",
    proto: !0
}, {
    setFromBase64: function(t) {
        Uk(this);
        var r = Pk(t, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
        return {
            read: r.read,
            written: r.written
        }
    }
});
var Lk = e,
    Ck = E,
    jk = Lk.Uint8Array,
    _k = Lk.SyntaxError,
    Nk = Lk.parseInt,
    Dk = Math.min,
    Mk = /[^\da-f]/i,
    Bk = Ck(Mk.exec),
    Fk = Ck("".slice),
    Hk = ro,
    zk = nk,
    qk = Tk,
    $k = Ml,
    Vk = function(t, r) {
        var e = t.length;
        if (e % 2 != 0) throw new _k("String should be an even number of characters");
        for (var n = r ? Dk(r.length, e / 2) : e / 2, o = r || new jk(n), i = 0, a = 0; a < n;) {
            var u = Fk(t, i, i += 2);
            if (Bk(Mk, u)) throw new _k("String should only contain hex characters");
            o[a++] = Nk(u, 16)
        }
        return {
            bytes: o,
            read: i
        }
    };
e.Uint8Array && Hk({
    target: "Uint8Array",
    proto: !0
}, {
    setFromHex: function(t) {
        qk(this), zk(t), $k(this.buffer);
        var r = Vk(t, this).read;
        return {
            read: r,
            written: r / 2
        }
    }
});
var Wk = ro,
    Gk = e,
    Yk = rk,
    Jk = Tk,
    Kk = Ml,
    Qk = fk,
    Xk = ck.i2c,
    Zk = ck.i2cUrl,
    tP = E("".charAt);
Gk.Uint8Array && Wk({
    target: "Uint8Array",
    proto: !0
}, {
    toBase64: function() {
        var t = Jk(this),
            r = arguments.length ? Yk(arguments[0]) : void 0,
            e = "base64" === Qk(r) ? Xk : Zk,
            n = !!r && !!r.omitPadding;
        Kk(this.buffer);
        for (var o, i = "", a = 0, u = t.length, c = function(t) {
                return tP(e, o >> 6 * t & 63)
            }; a + 2 < u; a += 3) o = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], i += c(3) + c(2) + c(1) + c(0);
        return a + 2 === u ? (o = (t[a] << 16) + (t[a + 1] << 8), i += c(3) + c(2) + c(1) + (n ? "" : "=")) : a + 1 === u && (o = t[a] << 16, i += c(3) + c(2) + (n ? "" : "==")), i
    }
});
var rP = ro,
    eP = e,
    nP = Tk,
    oP = Ml,
    iP = E(1..toString);
eP.Uint8Array && rP({
    target: "Uint8Array",
    proto: !0
}, {
    toHex: function() {
        nP(this), oP(this.buffer);
        for (var t = "", r = 0, e = this.length; r < e; r++) {
            var n = iP(this[r], 16);
            t += 1 === n.length ? "0" + n : n
        }
        return t
    }
});
var aP = gr("span").classList,
    uP = aP && aP.constructor && aP.constructor.prototype,
    cP = uP === Object.prototype ? void 0 : uP,
    sP = e,
    fP = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    },
    lP = cP,
    hP = Lu,
    pP = Gr,
    vP = Wa,
    dP = rr("iterator"),
    gP = hP.values,
    yP = function(t, r) {
        if (t) {
            if (t[dP] !== gP) try {
                pP(t, dP, gP)
            } catch (vN) {
                t[dP] = gP
            }
            if (vP(t, r, !0), fP[r])
                for (var e in hP)
                    if (t[e] !== hP[e]) try {
                        pP(t, e, hP[e])
                    } catch (vN) {
                        t[e] = hP[e]
                    }
        }
    };
for (var wP in fP) yP(sP[wP] && sP[wP].prototype, wP);
yP(lP, "DOMTokenList");
var mP = ro,
    bP = e,
    EP = $,
    SP = g,
    RP = Tr.f,
    AP = Ht,
    xP = js,
    OP = oi,
    IP = ai,
    TP = {
        IndexSizeError: {
            s: "INDEX_SIZE_ERR",
            c: 1,
            m: 1
        },
        DOMStringSizeError: {
            s: "DOMSTRING_SIZE_ERR",
            c: 2,
            m: 0
        },
        HierarchyRequestError: {
            s: "HIERARCHY_REQUEST_ERR",
            c: 3,
            m: 1
        },
        WrongDocumentError: {
            s: "WRONG_DOCUMENT_ERR",
            c: 4,
            m: 1
        },
        InvalidCharacterError: {
            s: "INVALID_CHARACTER_ERR",
            c: 5,
            m: 1
        },
        NoDataAllowedError: {
            s: "NO_DATA_ALLOWED_ERR",
            c: 6,
            m: 0
        },
        NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1
        },
        NotFoundError: {
            s: "NOT_FOUND_ERR",
            c: 8,
            m: 1
        },
        NotSupportedError: {
            s: "NOT_SUPPORTED_ERR",
            c: 9,
            m: 1
        },
        InUseAttributeError: {
            s: "INUSE_ATTRIBUTE_ERR",
            c: 10,
            m: 1
        },
        InvalidStateError: {
            s: "INVALID_STATE_ERR",
            c: 11,
            m: 1
        },
        SyntaxError: {
            s: "SYNTAX_ERR",
            c: 12,
            m: 1
        },
        InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1
        },
        NamespaceError: {
            s: "NAMESPACE_ERR",
            c: 14,
            m: 1
        },
        InvalidAccessError: {
            s: "INVALID_ACCESS_ERR",
            c: 15,
            m: 1
        },
        ValidationError: {
            s: "VALIDATION_ERR",
            c: 16,
            m: 0
        },
        TypeMismatchError: {
            s: "TYPE_MISMATCH_ERR",
            c: 17,
            m: 1
        },
        SecurityError: {
            s: "SECURITY_ERR",
            c: 18,
            m: 1
        },
        NetworkError: {
            s: "NETWORK_ERR",
            c: 19,
            m: 1
        },
        AbortError: {
            s: "ABORT_ERR",
            c: 20,
            m: 1
        },
        URLMismatchError: {
            s: "URL_MISMATCH_ERR",
            c: 21,
            m: 1
        },
        QuotaExceededError: {
            s: "QUOTA_EXCEEDED_ERR",
            c: 22,
            m: 1
        },
        TimeoutError: {
            s: "TIMEOUT_ERR",
            c: 23,
            m: 1
        },
        InvalidNodeTypeError: {
            s: "INVALID_NODE_TYPE_ERR",
            c: 24,
            m: 1
        },
        DataCloneError: {
            s: "DATA_CLONE_ERR",
            c: 25,
            m: 1
        }
    },
    kP = vi,
    PP = i,
    UP = "DOMException",
    LP = EP("Error"),
    CP = EP(UP),
    jP = function() {
        xP(this, _P);
        var t = arguments.length,
            r = IP(t < 1 ? void 0 : arguments[0]),
            e = IP(t < 2 ? void 0 : arguments[1], "Error"),
            n = new CP(r, e),
            o = new LP(r);
        return o.name = UP, RP(n, "stack", SP(1, kP(o.stack, 1))), OP(n, this, jP), n
    },
    _P = jP.prototype = CP.prototype,
    NP = "stack" in new LP(UP),
    DP = "stack" in new CP(1, 2),
    MP = CP && PP && Object.getOwnPropertyDescriptor(bP, UP),
    BP = !(!MP || MP.writable && MP.configurable),
    FP = NP && !BP && !DP;
mP({
    global: !0,
    constructor: !0,
    forced: FP
}, {
    DOMException: FP ? jP : CP
});
var HP = EP(UP),
    zP = HP.prototype;
if (zP.constructor !== HP)
    for (var qP in RP(zP, "constructor", SP(1, HP)), TP)
        if (AP(TP, qP)) {
            var $P = TP[qP],
                VP = $P.s;
            AP(HP, VP) || RP(HP, VP, SP(6, $P.c))
        }
var WP = wg.clear;
ro({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: e.clearImmediate !== WP
}, {
    clearImmediate: WP
});
var GP = e,
    YP = Fo,
    JP = B,
    KP = uc,
    QP = Y,
    XP = yc,
    ZP = $d,
    tU = GP.Function,
    rU = /MSIE .\./.test(QP) || "BUN" === KP && function() {
        var t = GP.Bun.version.split(".");
        return t.length < 3 || "0" === t[0] && (t[1] < 3 || "3" === t[1] && "0" === t[2])
    }(),
    eU = ro,
    nU = e,
    oU = wg.set,
    iU = function(t, r) {
        var e = r ? 2 : 1;
        return rU ? function(n, o) {
            var i = ZP(arguments.length, 1) > e,
                a = JP(n) ? n : tU(n),
                u = i ? XP(arguments, e) : [],
                c = i ? function() {
                    YP(a, this, u)
                } : a;
            return r ? t(c, o) : t(c)
        } : t
    },
    aU = nU.setImmediate ? iU(oU, !1) : oU;
eU({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: nU.setImmediate !== aU
}, {
    setImmediate: aU
});
var uU = e,
    cU = Yg,
    sU = yt,
    fU = $d,
    lU = i;
ro({
    global: !0,
    enumerable: !0,
    dontCallGetSet: !0,
    forced: o((function() {
        return lU && 1 !== Object.getOwnPropertyDescriptor(uU, "queueMicrotask").value.length
    }))
}, {
    queueMicrotask: function(t) {
        fU(arguments.length, 1), cU(sU(t))
    }
});
var hU = ro,
    pU = e,
    vU = go,
    dU = i,
    gU = TypeError,
    yU = Object.defineProperty,
    wU = pU.self !== pU;
try {
    if (dU) {
        var mU = Object.getOwnPropertyDescriptor(pU, "self");
        !wU && mU && mU.get && mU.enumerable || vU(pU, "self", {
            get: function() {
                return pU
            },
            set: function(t) {
                if (this !== pU) throw new gU("Illegal invocation");
                yU(pU, "self", {
                    value: t,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                })
            },
            configurable: !0,
            enumerable: !0
        })
    } else hU({
        global: !0,
        simple: !0,
        forced: wU
    }, {
        self: pU
    })
} catch (vN) {}
var bU = OS.charAt,
    EU = ho,
    SU = Te,
    RU = mu,
    AU = bu,
    xU = "String Iterator",
    OU = SU.set,
    IU = SU.getterFor(xU);
RU(String, "String", (function(t) {
    OU(this, {
        type: xU,
        string: EU(t),
        index: 0
    })
}), (function() {
    var t, r = IU(this),
        e = r.string,
        n = r.index;
    return n >= e.length ? AU(void 0, !0) : (t = bU(e, n), r.index += t.length, AU(t, !1))
}));
var TU = o,
    kU = i,
    PU = rr("iterator"),
    UU = !TU((function() {
        var t = new URL("b?a=1&b=2&c=3", "https://a"),
            r = t.searchParams,
            e = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
        return t.pathname = "c%20d", r.forEach((function(t, e) {
            r.delete("b"), n += e + t
        })), e.delete("a", 2), e.delete("b", void 0), !r.size && !kU || !r.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[PU] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== n || "x" !== new URL("https://x", void 0).host
    })),
    LU = i,
    CU = E,
    jU = s,
    _U = o,
    NU = $i,
    DU = In,
    MU = f,
    BU = Mt,
    FU = P,
    HU = Object.assign,
    zU = Object.defineProperty,
    qU = CU([].concat),
    $U = !HU || _U((function() {
        if (LU && 1 !== HU({
                b: 1
            }, HU(zU({}, "a", {
                enumerable: !0,
                get: function() {
                    zU(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var t = {},
            r = {},
            e = Symbol("assign detection"),
            n = "abcdefghijklmnopqrst";
        return t[e] = 7, n.split("").forEach((function(t) {
            r[t] = t
        })), 7 !== HU({}, t)[e] || NU(HU({}, r)).join("") !== n
    })) ? function(t, r) {
        for (var e = BU(t), n = arguments.length, o = 1, i = DU.f, a = MU.f; n > o;)
            for (var u, c = FU(arguments[o++]), s = i ? qU(NU(c), i(c)) : NU(c), f = s.length, l = 0; f > l;) u = s[l++], LU && !jU(a, c, u) || (e[u] = c[u]);
        return e
    } : HU,
    VU = Jh,
    WU = s,
    GU = Mt,
    YU = rv,
    JU = Zh,
    KU = Cd,
    QU = hn,
    XU = xh,
    ZU = hp,
    tL = ip,
    rL = Array,
    eL = E,
    nL = 2147483647,
    oL = /[^\0-\u007E]/,
    iL = /[.\u3002\uFF0E\uFF61]/g,
    aL = "Overflow: input needs wider integers to process",
    uL = RangeError,
    cL = eL(iL.exec),
    sL = Math.floor,
    fL = String.fromCharCode,
    lL = eL("".charCodeAt),
    hL = eL([].join),
    pL = eL([].push),
    vL = eL("".replace),
    dL = eL("".split),
    gL = eL("".toLowerCase),
    yL = function(t) {
        return t + 22 + 75 * (t < 26)
    },
    wL = function(t, r, e) {
        var n = 0;
        for (t = e ? sL(t / 700) : t >> 1, t += sL(t / r); t > 455;) t = sL(t / 35), n += 36;
        return sL(n + 36 * t / (t + 38))
    },
    mL = function(t) {
        var r = [];
        t = function(t) {
            for (var r = [], e = 0, n = t.length; e < n;) {
                var o = lL(t, e++);
                if (o >= 55296 && o <= 56319 && e < n) {
                    var i = lL(t, e++);
                    56320 == (64512 & i) ? pL(r, ((1023 & o) << 10) + (1023 & i) + 65536) : (pL(r, o), e--)
                } else pL(r, o)
            }
            return r
        }(t);
        var e, n, o = t.length,
            i = 128,
            a = 0,
            u = 72;
        for (e = 0; e < t.length; e++)(n = t[e]) < 128 && pL(r, fL(n));
        var c = r.length,
            s = c;
        for (c && pL(r, "-"); s < o;) {
            var f = nL;
            for (e = 0; e < t.length; e++)(n = t[e]) >= i && n < f && (f = n);
            var l = s + 1;
            if (f - i > sL((nL - a) / l)) throw new uL(aL);
            for (a += (f - i) * l, i = f, e = 0; e < t.length; e++) {
                if ((n = t[e]) < i && ++a > nL) throw new uL(aL);
                if (n === i) {
                    for (var h = a, p = 36;;) {
                        var v = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                        if (h < v) break;
                        var d = h - v,
                            g = 36 - v;
                        pL(r, fL(yL(v + d % g))), h = sL(d / g), p += 36
                    }
                    pL(r, fL(yL(h))), u = wL(a, l, s === c), a = 0, s++
                }
            }
            a++, i++
        }
        return hL(r, "")
    },
    bL = ro,
    EL = E,
    SL = un,
    RL = RangeError,
    AL = String.fromCharCode,
    xL = String.fromCodePoint,
    OL = EL([].join);
bL({
    target: "String",
    stat: !0,
    arity: 1,
    forced: !!xL && 1 !== xL.length
}, {
    fromCodePoint: function(t) {
        for (var r, e = [], n = arguments.length, o = 0; n > o;) {
            if (r = +arguments[o++], SL(r, 1114111) !== r) throw new RL(r + " is not a valid code point");
            e[o] = r < 65536 ? AL(r) : AL(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
        }
        return OL(e, "")
    }
});
var IL = ro,
    TL = e,
    kL = Sg,
    PL = $,
    UL = s,
    LL = E,
    CL = i,
    jL = UU,
    _L = Qe,
    NL = go,
    DL = Us,
    ML = Wa,
    BL = Za,
    FL = Te,
    HL = js,
    zL = B,
    qL = Ht,
    $L = Jh,
    VL = so,
    WL = Cr,
    GL = H,
    YL = ho,
    JL = ha,
    KL = g,
    QL = hp,
    XL = ip,
    ZL = bu,
    tC = $d,
    rC = Ec,
    eC = rr("iterator"),
    nC = "URLSearchParams",
    oC = nC + "Iterator",
    iC = FL.set,
    aC = FL.getterFor(nC),
    uC = FL.getterFor(oC),
    cC = kL("fetch"),
    sC = kL("Request"),
    fC = kL("Headers"),
    lC = sC && sC.prototype,
    hC = fC && fC.prototype,
    pC = TL.TypeError,
    vC = TL.encodeURIComponent,
    dC = String.fromCharCode,
    gC = PL("String", "fromCodePoint"),
    yC = parseInt,
    wC = LL("".charAt),
    mC = LL([].join),
    bC = LL([].push),
    EC = LL("".replace),
    SC = LL([].shift),
    RC = LL([].splice),
    AC = LL("".split),
    xC = LL("".slice),
    OC = LL(/./.exec),
    IC = /\+/g,
    TC = /^[0-9a-f]+$/i,
    kC = function(t, r) {
        var e = xC(t, r, r + 2);
        return OC(TC, e) ? yC(e, 16) : NaN
    },
    PC = function(t) {
        for (var r = 0, e = 128; e > 0 && t & e; e >>= 1) r++;
        return r
    },
    UC = function(t) {
        var r = null;
        switch (t.length) {
            case 1:
                r = t[0];
                break;
            case 2:
                r = (31 & t[0]) << 6 | 63 & t[1];
                break;
            case 3:
                r = (15 & t[0]) << 12 | (63 & t[1]) << 6 | 63 & t[2];
                break;
            case 4:
                r = (7 & t[0]) << 18 | (63 & t[1]) << 12 | (63 & t[2]) << 6 | 63 & t[3]
        }
        return r > 1114111 ? null : r
    },
    LC = function(t) {
        for (var r = (t = EC(t, IC, " ")).length, e = "", n = 0; n < r;) {
            var o = wC(t, n);
            if ("%" === o) {
                if ("%" === wC(t, n + 1) || n + 3 > r) {
                    e += "%", n++;
                    continue
                }
                var i = kC(t, n + 1);
                if (i != i) {
                    e += o, n++;
                    continue
                }
                n += 2;
                var a = PC(i);
                if (0 === a) o = dC(i);
                else {
                    if (1 === a || a > 4) {
                        e += "�", n++;
                        continue
                    }
                    for (var u = [i], c = 1; c < a && !(++n + 3 > r || "%" !== wC(t, n));) {
                        var s = kC(t, n + 1);
                        if (s != s) {
                            n += 3;
                            break
                        }
                        if (s > 191 || s < 128) break;
                        bC(u, s), n += 2, c++
                    }
                    if (u.length !== a) {
                        e += "�";
                        continue
                    }
                    var f = UC(u);
                    null === f ? e += "�" : o = gC(f)
                }
            }
            e += o, n++
        }
        return e
    },
    CC = /[!'()~]|%20/g,
    jC = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    },
    _C = function(t) {
        return jC[t]
    },
    NC = function(t) {
        return EC(vC(t), CC, _C)
    },
    DC = BL((function(t, r) {
        iC(this, {
            type: oC,
            target: aC(t).entries,
            index: 0,
            kind: r
        })
    }), nC, (function() {
        var t = uC(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return t.target = null, ZL(void 0, !0);
        var n = r[e];
        switch (t.kind) {
            case "keys":
                return ZL(n.key, !1);
            case "values":
                return ZL(n.value, !1)
        }
        return ZL([n.key, n.value], !1)
    }), !0),
    MC = function(t) {
        this.entries = [], this.url = null, void 0 !== t && (GL(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === wC(t, 0) ? xC(t, 1) : t : YL(t)))
    };
MC.prototype = {
    type: nC,
    bindURL: function(t) {
        this.url = t, this.update()
    },
    parseObject: function(t) {
        var r, e, n, o, i, a, u, c = this.entries,
            s = XL(t);
        if (s)
            for (e = (r = QL(t, s)).next; !(n = UL(e, r)).done;) {
                if (i = (o = QL(WL(n.value))).next, (a = UL(i, o)).done || (u = UL(i, o)).done || !UL(i, o).done) throw new pC("Expected sequence with length 2");
                bC(c, {
                    key: YL(a.value),
                    value: YL(u.value)
                })
            } else
                for (var f in t) qL(t, f) && bC(c, {
                    key: f,
                    value: YL(t[f])
                })
    },
    parseQuery: function(t) {
        if (t)
            for (var r, e, n = this.entries, o = AC(t, "&"), i = 0; i < o.length;)(r = o[i++]).length && (e = AC(r, "="), bC(n, {
                key: LC(SC(e)),
                value: LC(mC(e, "="))
            }))
    },
    serialize: function() {
        for (var t, r = this.entries, e = [], n = 0; n < r.length;) t = r[n++], bC(e, NC(t.key) + "=" + NC(t.value));
        return mC(e, "&")
    },
    update: function() {
        this.entries.length = 0, this.parseQuery(this.url.query)
    },
    updateURL: function() {
        this.url && this.url.update()
    }
};
var BC = function() {
        HL(this, FC);
        var t = iC(this, new MC(arguments.length > 0 ? arguments[0] : void 0));
        CL || (this.size = t.entries.length)
    },
    FC = BC.prototype;
if (DL(FC, {
        append: function(t, r) {
            var e = aC(this);
            tC(arguments.length, 2), bC(e.entries, {
                key: YL(t),
                value: YL(r)
            }), CL || this.length++, e.updateURL()
        },
        delete: function(t) {
            for (var r = aC(this), e = tC(arguments.length, 1), n = r.entries, o = YL(t), i = e < 2 ? void 0 : arguments[1], a = void 0 === i ? i : YL(i), u = 0; u < n.length;) {
                var c = n[u];
                if (c.key !== o || void 0 !== a && c.value !== a) u++;
                else if (RC(n, u, 1), void 0 !== a) break
            }
            CL || (this.size = n.length), r.updateURL()
        },
        get: function(t) {
            var r = aC(this).entries;
            tC(arguments.length, 1);
            for (var e = YL(t), n = 0; n < r.length; n++)
                if (r[n].key === e) return r[n].value;
            return null
        },
        getAll: function(t) {
            var r = aC(this).entries;
            tC(arguments.length, 1);
            for (var e = YL(t), n = [], o = 0; o < r.length; o++) r[o].key === e && bC(n, r[o].value);
            return n
        },
        has: function(t) {
            for (var r = aC(this).entries, e = tC(arguments.length, 1), n = YL(t), o = e < 2 ? void 0 : arguments[1], i = void 0 === o ? o : YL(o), a = 0; a < r.length;) {
                var u = r[a++];
                if (u.key === n && (void 0 === i || u.value === i)) return !0
            }
            return !1
        },
        set: function(t, r) {
            var e = aC(this);
            tC(arguments.length, 1);
            for (var n, o = e.entries, i = !1, a = YL(t), u = YL(r), c = 0; c < o.length; c++)(n = o[c]).key === a && (i ? RC(o, c--, 1) : (i = !0, n.value = u));
            i || bC(o, {
                key: a,
                value: u
            }), CL || (this.size = o.length), e.updateURL()
        },
        sort: function() {
            var t = aC(this);
            rC(t.entries, (function(t, r) {
                return t.key > r.key ? 1 : -1
            })), t.updateURL()
        },
        forEach: function(t) {
            for (var r, e = aC(this).entries, n = $L(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < e.length;) n((r = e[o++]).value, r.key, this)
        },
        keys: function() {
            return new DC(this, "keys")
        },
        values: function() {
            return new DC(this, "values")
        },
        entries: function() {
            return new DC(this, "entries")
        }
    }, {
        enumerable: !0
    }), _L(FC, eC, FC.entries, {
        name: "entries"
    }), _L(FC, "toString", (function() {
        return aC(this).serialize()
    }), {
        enumerable: !0
    }), CL && NL(FC, "size", {
        get: function() {
            return aC(this).entries.length
        },
        configurable: !0,
        enumerable: !0
    }), ML(BC, nC), IL({
        global: !0,
        constructor: !0,
        forced: !jL
    }, {
        URLSearchParams: BC
    }), !jL && zL(fC)) {
    var HC = LL(hC.has),
        zC = LL(hC.set),
        qC = function(t) {
            if (GL(t)) {
                var r, e = t.body;
                if (VL(e) === nC) return r = t.headers ? new fC(t.headers) : new fC, HC(r, "content-type") || zC(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), JL(t, {
                    body: KL(0, YL(e)),
                    headers: KL(0, r)
                })
            }
            return t
        };
    if (zL(cC) && IL({
            global: !0,
            enumerable: !0,
            dontCallGetSet: !0,
            forced: !0
        }, {
            fetch: function(t) {
                return cC(t, arguments.length > 1 ? qC(arguments[1]) : {})
            }
        }), zL(sC)) {
        var $C = function(t) {
            return HL(this, lC), new sC(t, arguments.length > 1 ? qC(arguments[1]) : {})
        };
        lC.constructor = $C, $C.prototype = lC, IL({
            global: !0,
            constructor: !0,
            dontCallGetSet: !0,
            forced: !0
        }, {
            Request: $C
        })
    }
}
var VC, WC = ro,
    GC = i,
    YC = UU,
    JC = e,
    KC = Jh,
    QC = E,
    XC = Qe,
    ZC = go,
    tj = js,
    rj = Ht,
    ej = $U,
    nj = function(t) {
        var r = GU(t),
            e = KU(this),
            n = arguments.length,
            o = n > 1 ? arguments[1] : void 0,
            i = void 0 !== o;
        i && (o = VU(o, n > 2 ? arguments[2] : void 0));
        var a, u, c, s, f, l, h = tL(r),
            p = 0;
        if (!h || this === rL && JU(h))
            for (a = QU(r), u = e ? new this(a) : rL(a); a > p; p++) l = i ? o(r[p], p) : r[p], XU(u, p, l);
        else
            for (u = e ? new this : [], f = (s = ZU(r, h)).next; !(c = WU(f, s)).done; p++) l = i ? YU(s, o, [c.value, p], !0) : c.value, XU(u, p, l);
        return u.length = p, u
    },
    oj = yc,
    ij = OS.codeAt,
    aj = function(t) {
        var r, e, n = [],
            o = dL(vL(gL(t), iL, "."), ".");
        for (r = 0; r < o.length; r++) e = o[r], pL(n, cL(oL, e) ? "xn--" + mL(e) : e);
        return hL(n, ".")
    },
    uj = ho,
    cj = Wa,
    sj = $d,
    fj = {
        URLSearchParams: BC,
        getState: aC
    },
    lj = Te,
    hj = lj.set,
    pj = lj.getterFor("URL"),
    vj = fj.URLSearchParams,
    dj = fj.getState,
    gj = JC.URL,
    yj = JC.TypeError,
    wj = JC.parseInt,
    mj = Math.floor,
    bj = Math.pow,
    Ej = QC("".charAt),
    Sj = QC(/./.exec),
    Rj = QC([].join),
    Aj = QC(1..toString),
    xj = QC([].pop),
    Oj = QC([].push),
    Ij = QC("".replace),
    Tj = QC([].shift),
    kj = QC("".split),
    Pj = QC("".slice),
    Uj = QC("".toLowerCase),
    Lj = QC([].unshift),
    Cj = "Invalid scheme",
    jj = "Invalid host",
    _j = "Invalid port",
    Nj = /[a-z]/i,
    Dj = /[\d+-.a-z]/i,
    Mj = /\d/,
    Bj = /^0x/i,
    Fj = /^[0-7]+$/,
    Hj = /^\d+$/,
    zj = /^[\da-f]+$/i,
    qj = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    $j = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    Vj = /^[\u0000-\u0020]+/,
    Wj = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
    Gj = /[\t\n\r]/g,
    Yj = function(t) {
        var r, e, n, o;
        if ("number" == typeof t) {
            for (r = [], e = 0; e < 4; e++) Lj(r, t % 256), t = mj(t / 256);
            return Rj(r, ".")
        }
        if ("object" == typeof t) {
            for (r = "", n = function(t) {
                    for (var r = null, e = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > e && (r = n, e = o), n = null, o = 0) : (null === n && (n = i), ++o);
                    return o > e ? n : r
                }(t), e = 0; e < 8; e++) o && 0 === t[e] || (o && (o = !1), n === e ? (r += e ? ":" : "::", o = !0) : (r += Aj(t[e], 16), e < 7 && (r += ":")));
            return "[" + r + "]"
        }
        return t
    },
    Jj = {},
    Kj = ej({}, Jj, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    }),
    Qj = ej({}, Kj, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    }),
    Xj = ej({}, Qj, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    }),
    Zj = function(t, r) {
        var e = ij(t, 0);
        return e > 32 && e < 127 && !rj(r, t) ? t : encodeURIComponent(t)
    },
    t_ = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    },
    r_ = function(t, r) {
        var e;
        return 2 === t.length && Sj(Nj, Ej(t, 0)) && (":" === (e = Ej(t, 1)) || !r && "|" === e)
    },
    e_ = function(t) {
        var r;
        return t.length > 1 && r_(Pj(t, 0, 2)) && (2 === t.length || "/" === (r = Ej(t, 2)) || "\\" === r || "?" === r || "#" === r)
    },
    n_ = function(t) {
        return "." === t || "%2e" === Uj(t)
    },
    o_ = {},
    i_ = {},
    a_ = {},
    u_ = {},
    c_ = {},
    s_ = {},
    f_ = {},
    l_ = {},
    h_ = {},
    p_ = {},
    v_ = {},
    d_ = {},
    g_ = {},
    y_ = {},
    w_ = {},
    m_ = {},
    b_ = {},
    E_ = {},
    S_ = {},
    R_ = {},
    A_ = {},
    x_ = function(t, r, e) {
        var n, o, i, a = uj(t);
        if (r) {
            if (o = this.parse(a)) throw new yj(o);
            this.searchParams = null
        } else {
            if (void 0 !== e && (n = new x_(e, !0)), o = this.parse(a, null, n)) throw new yj(o);
            (i = dj(new vj)).bindURL(this), this.searchParams = i
        }
    };
x_.prototype = {
    type: "URL",
    parse: function(t, r, e) {
        var n, o, i, a, u, c = this,
            s = r || o_,
            f = 0,
            l = "",
            h = !1,
            p = !1,
            v = !1;
        for (t = uj(t), r || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, t = Ij(t, Vj, ""), t = Ij(t, Wj, "$1")), t = Ij(t, Gj, ""), n = nj(t); f <= n.length;) {
            switch (o = n[f], s) {
                case o_:
                    if (!o || !Sj(Nj, o)) {
                        if (r) return Cj;
                        s = a_;
                        continue
                    }
                    l += Uj(o), s = i_;
                    break;
                case i_:
                    if (o && (Sj(Dj, o) || "+" === o || "-" === o || "." === o)) l += Uj(o);
                    else {
                        if (":" !== o) {
                            if (r) return Cj;
                            l = "", s = a_, f = 0;
                            continue
                        }
                        if (r && (c.isSpecial() !== rj(t_, l) || "file" === l && (c.includesCredentials() || null !== c.port) || "file" === c.scheme && !c.host)) return;
                        if (c.scheme = l, r) return void(c.isSpecial() && t_[c.scheme] === c.port && (c.port = null));
                        l = "", "file" === c.scheme ? s = y_ : c.isSpecial() && e && e.scheme === c.scheme ? s = u_ : c.isSpecial() ? s = l_ : "/" === n[f + 1] ? (s = c_, f++) : (c.cannotBeABaseURL = !0, Oj(c.path, ""), s = S_)
                    }
                    break;
                case a_:
                    if (!e || e.cannotBeABaseURL && "#" !== o) return Cj;
                    if (e.cannotBeABaseURL && "#" === o) {
                        c.scheme = e.scheme, c.path = oj(e.path), c.query = e.query, c.fragment = "", c.cannotBeABaseURL = !0, s = A_;
                        break
                    }
                    s = "file" === e.scheme ? y_ : s_;
                    continue;
                case u_:
                    if ("/" !== o || "/" !== n[f + 1]) {
                        s = s_;
                        continue
                    }
                    s = h_, f++;
                    break;
                case c_:
                    if ("/" === o) {
                        s = p_;
                        break
                    }
                    s = E_;
                    continue;
                case s_:
                    if (c.scheme = e.scheme, o === VC) c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = oj(e.path), c.query = e.query;
                    else if ("/" === o || "\\" === o && c.isSpecial()) s = f_;
                    else if ("?" === o) c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = oj(e.path), c.query = "", s = R_;
                    else {
                        if ("#" !== o) {
                            c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = oj(e.path), c.path.length--, s = E_;
                            continue
                        }
                        c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = oj(e.path), c.query = e.query, c.fragment = "", s = A_
                    }
                    break;
                case f_:
                    if (!c.isSpecial() || "/" !== o && "\\" !== o) {
                        if ("/" !== o) {
                            c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, s = E_;
                            continue
                        }
                        s = p_
                    } else s = h_;
                    break;
                case l_:
                    if (s = h_, "/" !== o || "/" !== Ej(l, f + 1)) continue;
                    f++;
                    break;
                case h_:
                    if ("/" !== o && "\\" !== o) {
                        s = p_;
                        continue
                    }
                    break;
                case p_:
                    if ("@" === o) {
                        h && (l = "%40" + l), h = !0, i = nj(l);
                        for (var d = 0; d < i.length; d++) {
                            var g = i[d];
                            if (":" !== g || v) {
                                var y = Zj(g, Xj);
                                v ? c.password += y : c.username += y
                            } else v = !0
                        }
                        l = ""
                    } else if (o === VC || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
                        if (h && "" === l) return "Invalid authority";
                        f -= nj(l).length + 1, l = "", s = v_
                    } else l += o;
                    break;
                case v_:
                case d_:
                    if (r && "file" === c.scheme) {
                        s = m_;
                        continue
                    }
                    if (":" !== o || p) {
                        if (o === VC || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
                            if (c.isSpecial() && "" === l) return jj;
                            if (r && "" === l && (c.includesCredentials() || null !== c.port)) return;
                            if (a = c.parseHost(l)) return a;
                            if (l = "", s = b_, r) return;
                            continue
                        }
                        "[" === o ? p = !0 : "]" === o && (p = !1), l += o
                    } else {
                        if ("" === l) return jj;
                        if (a = c.parseHost(l)) return a;
                        if (l = "", s = g_, r === d_) return
                    }
                    break;
                case g_:
                    if (!Sj(Mj, o)) {
                        if (o === VC || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial() || r) {
                            if ("" !== l) {
                                var w = wj(l, 10);
                                if (w > 65535) return _j;
                                c.port = c.isSpecial() && w === t_[c.scheme] ? null : w, l = ""
                            }
                            if (r) return;
                            s = b_;
                            continue
                        }
                        return _j
                    }
                    l += o;
                    break;
                case y_:
                    if (c.scheme = "file", "/" === o || "\\" === o) s = w_;
                    else {
                        if (!e || "file" !== e.scheme) {
                            s = E_;
                            continue
                        }
                        switch (o) {
                            case VC:
                                c.host = e.host, c.path = oj(e.path), c.query = e.query;
                                break;
                            case "?":
                                c.host = e.host, c.path = oj(e.path), c.query = "", s = R_;
                                break;
                            case "#":
                                c.host = e.host, c.path = oj(e.path), c.query = e.query, c.fragment = "", s = A_;
                                break;
                            default:
                                e_(Rj(oj(n, f), "")) || (c.host = e.host, c.path = oj(e.path), c.shortenPath()), s = E_;
                                continue
                        }
                    }
                    break;
                case w_:
                    if ("/" === o || "\\" === o) {
                        s = m_;
                        break
                    }
                    e && "file" === e.scheme && !e_(Rj(oj(n, f), "")) && (r_(e.path[0], !0) ? Oj(c.path, e.path[0]) : c.host = e.host), s = E_;
                    continue;
                case m_:
                    if (o === VC || "/" === o || "\\" === o || "?" === o || "#" === o) {
                        if (!r && r_(l)) s = E_;
                        else if ("" === l) {
                            if (c.host = "", r) return;
                            s = b_
                        } else {
                            if (a = c.parseHost(l)) return a;
                            if ("localhost" === c.host && (c.host = ""), r) return;
                            l = "", s = b_
                        }
                        continue
                    }
                    l += o;
                    break;
                case b_:
                    if (c.isSpecial()) {
                        if (s = E_, "/" !== o && "\\" !== o) continue
                    } else if (r || "?" !== o)
                        if (r || "#" !== o) {
                            if (o !== VC && (s = E_, "/" !== o)) continue
                        } else c.fragment = "", s = A_;
                    else c.query = "", s = R_;
                    break;
                case E_:
                    if (o === VC || "/" === o || "\\" === o && c.isSpecial() || !r && ("?" === o || "#" === o)) {
                        if (".." === (u = Uj(u = l)) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (c.shortenPath(), "/" === o || "\\" === o && c.isSpecial() || Oj(c.path, "")) : n_(l) ? "/" === o || "\\" === o && c.isSpecial() || Oj(c.path, "") : ("file" === c.scheme && !c.path.length && r_(l) && (c.host && (c.host = ""), l = Ej(l, 0) + ":"), Oj(c.path, l)), l = "", "file" === c.scheme && (o === VC || "?" === o || "#" === o))
                            for (; c.path.length > 1 && "" === c.path[0];) Tj(c.path);
                        "?" === o ? (c.query = "", s = R_) : "#" === o && (c.fragment = "", s = A_)
                    } else l += Zj(o, Qj);
                    break;
                case S_:
                    "?" === o ? (c.query = "", s = R_) : "#" === o ? (c.fragment = "", s = A_) : o !== VC && (c.path[0] += Zj(o, Jj));
                    break;
                case R_:
                    r || "#" !== o ? o !== VC && ("'" === o && c.isSpecial() ? c.query += "%27" : c.query += "#" === o ? "%23" : Zj(o, Jj)) : (c.fragment = "", s = A_);
                    break;
                case A_:
                    o !== VC && (c.fragment += Zj(o, Kj))
            }
            f++
        }
    },
    parseHost: function(t) {
        var r, e, n;
        if ("[" === Ej(t, 0)) {
            if ("]" !== Ej(t, t.length - 1)) return jj;
            if (r = function(t) {
                    var r, e, n, o, i, a, u, c = [0, 0, 0, 0, 0, 0, 0, 0],
                        s = 0,
                        f = null,
                        l = 0,
                        h = function() {
                            return Ej(t, l)
                        };
                    if (":" === h()) {
                        if (":" !== Ej(t, 1)) return;
                        l += 2, f = ++s
                    }
                    for (; h();) {
                        if (8 === s) return;
                        if (":" !== h()) {
                            for (r = e = 0; e < 4 && Sj(zj, h());) r = 16 * r + wj(h(), 16), l++, e++;
                            if ("." === h()) {
                                if (0 === e) return;
                                if (l -= e, s > 6) return;
                                for (n = 0; h();) {
                                    if (o = null, n > 0) {
                                        if (!("." === h() && n < 4)) return;
                                        l++
                                    }
                                    if (!Sj(Mj, h())) return;
                                    for (; Sj(Mj, h());) {
                                        if (i = wj(h(), 10), null === o) o = i;
                                        else {
                                            if (0 === o) return;
                                            o = 10 * o + i
                                        }
                                        if (o > 255) return;
                                        l++
                                    }
                                    c[s] = 256 * c[s] + o, 2 != ++n && 4 !== n || s++
                                }
                                if (4 !== n) return;
                                break
                            }
                            if (":" === h()) {
                                if (l++, !h()) return
                            } else if (h()) return;
                            c[s++] = r
                        } else {
                            if (null !== f) return;
                            l++, f = ++s
                        }
                    }
                    if (null !== f)
                        for (a = s - f, s = 7; 0 !== s && a > 0;) u = c[s], c[s--] = c[f + a - 1], c[f + --a] = u;
                    else if (8 !== s) return;
                    return c
                }(Pj(t, 1, -1)), !r) return jj;
            this.host = r
        } else if (this.isSpecial()) {
            if (t = aj(t), Sj(qj, t)) return jj;
            if (r = function(t) {
                    var r, e, n, o, i, a, u, c = kj(t, ".");
                    if (c.length && "" === c[c.length - 1] && c.length--, (r = c.length) > 4) return t;
                    for (e = [], n = 0; n < r; n++) {
                        if ("" === (o = c[n])) return t;
                        if (i = 10, o.length > 1 && "0" === Ej(o, 0) && (i = Sj(Bj, o) ? 16 : 8, o = Pj(o, 8 === i ? 1 : 2)), "" === o) a = 0;
                        else {
                            if (!Sj(10 === i ? Hj : 8 === i ? Fj : zj, o)) return t;
                            a = wj(o, i)
                        }
                        Oj(e, a)
                    }
                    for (n = 0; n < r; n++)
                        if (a = e[n], n === r - 1) {
                            if (a >= bj(256, 5 - r)) return null
                        } else if (a > 255) return null;
                    for (u = xj(e), n = 0; n < e.length; n++) u += e[n] * bj(256, 3 - n);
                    return u
                }(t), null === r) return jj;
            this.host = r
        } else {
            if (Sj($j, t)) return jj;
            for (r = "", e = nj(t), n = 0; n < e.length; n++) r += Zj(e[n], Jj);
            this.host = r
        }
    },
    cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || "file" === this.scheme
    },
    includesCredentials: function() {
        return "" !== this.username || "" !== this.password
    },
    isSpecial: function() {
        return rj(t_, this.scheme)
    },
    shortenPath: function() {
        var t = this.path,
            r = t.length;
        !r || "file" === this.scheme && 1 === r && r_(t[0], !0) || t.length--
    },
    serialize: function() {
        var t = this,
            r = t.scheme,
            e = t.username,
            n = t.password,
            o = t.host,
            i = t.port,
            a = t.path,
            u = t.query,
            c = t.fragment,
            s = r + ":";
        return null !== o ? (s += "//", t.includesCredentials() && (s += e + (n ? ":" + n : "") + "@"), s += Yj(o), null !== i && (s += ":" + i)) : "file" === r && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + Rj(a, "/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s
    },
    setHref: function(t) {
        var r = this.parse(t);
        if (r) throw new yj(r);
        this.searchParams.update()
    },
    getOrigin: function() {
        var t = this.scheme,
            r = this.port;
        if ("blob" === t) try {
            return new O_(t.path[0]).origin
        } catch (vN) {
            return "null"
        }
        return "file" !== t && this.isSpecial() ? t + "://" + Yj(this.host) + (null !== r ? ":" + r : "") : "null"
    },
    getProtocol: function() {
        return this.scheme + ":"
    },
    setProtocol: function(t) {
        this.parse(uj(t) + ":", o_)
    },
    getUsername: function() {
        return this.username
    },
    setUsername: function(t) {
        var r = nj(uj(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var e = 0; e < r.length; e++) this.username += Zj(r[e], Xj)
        }
    },
    getPassword: function() {
        return this.password
    },
    setPassword: function(t) {
        var r = nj(uj(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var e = 0; e < r.length; e++) this.password += Zj(r[e], Xj)
        }
    },
    getHost: function() {
        var t = this.host,
            r = this.port;
        return null === t ? "" : null === r ? Yj(t) : Yj(t) + ":" + r
    },
    setHost: function(t) {
        this.cannotBeABaseURL || this.parse(t, v_)
    },
    getHostname: function() {
        var t = this.host;
        return null === t ? "" : Yj(t)
    },
    setHostname: function(t) {
        this.cannotBeABaseURL || this.parse(t, d_)
    },
    getPort: function() {
        var t = this.port;
        return null === t ? "" : uj(t)
    },
    setPort: function(t) {
        this.cannotHaveUsernamePasswordPort() || ("" === (t = uj(t)) ? this.port = null : this.parse(t, g_))
    },
    getPathname: function() {
        var t = this.path;
        return this.cannotBeABaseURL ? t[0] : t.length ? "/" + Rj(t, "/") : ""
    },
    setPathname: function(t) {
        this.cannotBeABaseURL || (this.path = [], this.parse(t, b_))
    },
    getSearch: function() {
        var t = this.query;
        return t ? "?" + t : ""
    },
    setSearch: function(t) {
        "" === (t = uj(t)) ? this.query = null: ("?" === Ej(t, 0) && (t = Pj(t, 1)), this.query = "", this.parse(t, R_)), this.searchParams.update()
    },
    getSearchParams: function() {
        return this.searchParams.facade
    },
    getHash: function() {
        var t = this.fragment;
        return t ? "#" + t : ""
    },
    setHash: function(t) {
        "" !== (t = uj(t)) ? ("#" === Ej(t, 0) && (t = Pj(t, 1)), this.fragment = "", this.parse(t, A_)) : this.fragment = null
    },
    update: function() {
        this.query = this.searchParams.serialize() || null
    }
};
var O_ = function(t) {
        var r = tj(this, I_),
            e = sj(arguments.length, 1) > 1 ? arguments[1] : void 0,
            n = hj(r, new x_(t, !1, e));
        GC || (r.href = n.serialize(), r.origin = n.getOrigin(), r.protocol = n.getProtocol(), r.username = n.getUsername(), r.password = n.getPassword(), r.host = n.getHost(), r.hostname = n.getHostname(), r.port = n.getPort(), r.pathname = n.getPathname(), r.search = n.getSearch(), r.searchParams = n.getSearchParams(), r.hash = n.getHash())
    },
    I_ = O_.prototype,
    T_ = function(t, r) {
        return {
            get: function() {
                return pj(this)[t]()
            },
            set: r && function(t) {
                return pj(this)[r](t)
            },
            configurable: !0,
            enumerable: !0
        }
    };
if (GC && (ZC(I_, "href", T_("serialize", "setHref")), ZC(I_, "origin", T_("getOrigin")), ZC(I_, "protocol", T_("getProtocol", "setProtocol")), ZC(I_, "username", T_("getUsername", "setUsername")), ZC(I_, "password", T_("getPassword", "setPassword")), ZC(I_, "host", T_("getHost", "setHost")), ZC(I_, "hostname", T_("getHostname", "setHostname")), ZC(I_, "port", T_("getPort", "setPort")), ZC(I_, "pathname", T_("getPathname", "setPathname")), ZC(I_, "search", T_("getSearch", "setSearch")), ZC(I_, "searchParams", T_("getSearchParams")), ZC(I_, "hash", T_("getHash", "setHash"))), XC(I_, "toJSON", (function() {
        return pj(this).serialize()
    }), {
        enumerable: !0
    }), XC(I_, "toString", (function() {
        return pj(this).serialize()
    }), {
        enumerable: !0
    }), gj) {
    var k_ = gj.createObjectURL,
        P_ = gj.revokeObjectURL;
    k_ && XC(O_, "createObjectURL", KC(k_, gj)), P_ && XC(O_, "revokeObjectURL", KC(P_, gj))
}
cj(O_, "URL"), WC({
    global: !0,
    constructor: !0,
    forced: !YC,
    sham: !GC
}, {
    URL: O_
});
var U_ = s;
ro({
    target: "URL",
    proto: !0,
    enumerable: !0
}, {
    toJSON: function() {
        return U_(URL.prototype.toString, this)
    }
});
var L_ = Qe,
    C_ = E,
    j_ = ho,
    __ = $d,
    N_ = URLSearchParams,
    D_ = N_.prototype,
    M_ = C_(D_.append),
    B_ = C_(D_.delete),
    F_ = C_(D_.forEach),
    H_ = C_([].push),
    z_ = new N_("a=1&a=2&b=3");
z_.delete("a", 1), z_.delete("b", void 0), z_ + "" != "a=2" && L_(D_, "delete", (function(t) {
    var r = arguments.length,
        e = r < 2 ? void 0 : arguments[1];
    if (r && void 0 === e) return B_(this, t);
    var n = [];
    F_(this, (function(t, r) {
        H_(n, {
            key: r,
            value: t
        })
    })), __(r, 1);
    for (var o, i = j_(t), a = j_(e), u = 0, c = 0, s = !1, f = n.length; u < f;) o = n[u++], s || o.key === i ? (s = !0, B_(this, o.key)) : c++;
    for (; c < f;)(o = n[c++]).key === i && o.value === a || M_(this, o.key, o.value)
}), {
    enumerable: !0,
    unsafe: !0
});
var q_ = Qe,
    $_ = E,
    V_ = ho,
    W_ = $d,
    G_ = URLSearchParams,
    Y_ = G_.prototype,
    J_ = $_(Y_.getAll),
    K_ = $_(Y_.has),
    Q_ = new G_("a=1");
!Q_.has("a", 2) && Q_.has("a", void 0) || q_(Y_, "has", (function(t) {
    var r = arguments.length,
        e = r < 2 ? void 0 : arguments[1];
    if (r && void 0 === e) return K_(this, t);
    var n = J_(this, t);
    W_(r, 1);
    for (var o = V_(e), i = 0; i < n.length;)
        if (n[i++] === o) return !0;
    return !1
}), {
    enumerable: !0,
    unsafe: !0
});
var X_ = i,
    Z_ = E,
    tN = go,
    rN = URLSearchParams.prototype,
    eN = Z_(rN.forEach);
X_ && !("size" in rN) && tN(rN, "size", {
    get: function() {
        var t = 0;
        return eN(this, (function() {
            t++
        })), t
    },
    configurable: !0,
    enumerable: !0
}), zO("Float32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), zO("Float64", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), zO("Int32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), zO("Uint8", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}), !0), zO("Uint16", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), zO("Uint32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}));
var nN = Jh,
    oN = P,
    iN = Mt,
    aN = hr,
    uN = hn,
    cN = ha,
    sN = rs,
    fN = Array,
    lN = E([].push),
    hN = function(t, r, e, n) {
        for (var o, i, a, u = iN(t), c = oN(u), s = nN(r, e), f = cN(null), l = uN(c), h = 0; l > h; h++) a = c[h], (i = aN(s(a, h, u))) in f ? lN(f[i], a) : f[i] = [a];
        if (n && (o = n(u)) !== fN)
            for (i in f) f[i] = sN(o, f[i]);
        return f
    },
    pN = wa;
ro({
    target: "Array",
    proto: !0
}, {
    group: function(t) {
        return hN(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}), pN("group");