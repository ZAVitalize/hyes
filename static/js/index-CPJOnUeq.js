import {
    d as j,
    W as A,
    ao as _,
    a9 as K,
    X as G,
    r as L,
    p as J,
    aB as re,
    a0 as ve,
    C as d,
    a1 as U,
    D as $,
    aC as fe,
    j as q,
    aD as de,
    ax as he,
    aE as ge,
    aF as we,
    az as me,
    a as E,
    aG as V,
    aa as Q,
    aH as B,
    ac as I,
    aI as ye,
    aJ as xe,
    aK as be,
    $ as Z,
    a4 as Se
} from "./index-DwRGlFcE.js";
const [ee, D] = G("swipe"), Te = {
    loop: A,
    width: K,
    height: K,
    vertical: Boolean,
    autoplay: _(0),
    duration: _(500),
    touchable: A,
    lazyRender: Boolean,
    initialSwipe: _(0),
    indicatorColor: String,
    showIndicators: A,
    stopPropagation: A
}, te = Symbol(ee);
var pe = j({
    name: ee,
    props: Te,
    emits: ["change", "dragStart", "dragEnd"],
    setup(a, {
        emit: x,
        slots: g
    }) {
        const u = L(),
            h = L(),
            t = J({
                rect: null,
                width: 0,
                height: 0,
                offset: 0,
                active: 0,
                swiping: !1
            });
        let b = !1;
        const r = re(),
            {
                children: w,
                linkChildren: s
            } = ve(te),
            i = d(() => w.length),
            o = d(() => t[a.vertical ? "height" : "width"]),
            v = d(() => a.vertical ? r.deltaY.value : r.deltaX.value),
            y = d(() => t.rect ? (a.vertical ? t.rect.height : t.rect.width) - o.value * i.value : 0),
            M = d(() => o.value ? Math.ceil(Math.abs(y.value) / o.value) : i.value),
            k = d(() => i.value * o.value),
            S = d(() => (t.active + i.value) % i.value),
            R = d(() => {
                const e = a.vertical ? "vertical" : "horizontal";
                return r.direction.value === e
            }),
            ae = d(() => {
                const e = {
                    transitionDuration: "".concat(t.swiping ? 0 : a.duration, "ms"),
                    transform: "translate".concat(a.vertical ? "Y" : "X", "(").concat(+t.offset.toFixed(2), "px)")
                };
                if (o.value) {
                    const l = a.vertical ? "height" : "width",
                        n = a.vertical ? "width" : "height";
                    e[l] = "".concat(k.value, "px"), e[n] = a[n] ? "".concat(a[n], "px") : ""
                }
                return e
            }),
            ie = e => {
                const {
                    active: l
                } = t;
                return e ? a.loop ? B(l + e, -1, i.value) : B(l + e, 0, M.value) : l
            },
            X = (e, l = 0) => {
                let n = e * o.value;
                a.loop || (n = Math.min(n, -y.value));
                let f = l - n;
                return a.loop || (f = B(f, y.value, 0)), f
            },
            m = ({
                pace: e = 0,
                offset: l = 0,
                emitChange: n
            }) => {
                if (i.value <= 1) return;
                const {
                    active: f
                } = t, c = ie(e), P = X(c, l);
                if (a.loop) {
                    if (w[0] && P !== y.value) {
                        const O = P < y.value;
                        w[0].setOffset(O ? k.value : 0)
                    }
                    if (w[i.value - 1] && P !== 0) {
                        const O = P > 0;
                        w[i.value - 1].setOffset(O ? -k.value : 0)
                    }
                }
                t.active = c, t.offset = P, n && c !== f && x("change", S.value)
            },
            z = () => {
                t.swiping = !0, t.active <= -1 ? m({
                    pace: i.value
                }) : t.active >= i.value && m({
                    pace: -i.value
                })
            },
            ne = () => {
                z(), r.reset(), I(() => {
                    t.swiping = !1, m({
                        pace: -1,
                        emitChange: !0
                    })
                })
            },
            Y = () => {
                z(), r.reset(), I(() => {
                    t.swiping = !1, m({
                        pace: 1,
                        emitChange: !0
                    })
                })
            };
        let H;
        const p = () => clearTimeout(H),
            C = () => {
                p(), +a.autoplay > 0 && i.value > 1 && (H = setTimeout(() => {
                    Y(), C()
                }, +a.autoplay))
            },
            T = (e = +a.initialSwipe) => {
                if (!u.value) return;
                const l = () => {
                    var n, f;
                    if (!V(u)) {
                        const c = {
                            width: u.value.offsetWidth,
                            height: u.value.offsetHeight
                        };
                        t.rect = c, t.width = +((n = a.width) != null ? n : c.width), t.height = +((f = a.height) != null ? f : c.height)
                    }
                    i.value && (e = Math.min(i.value - 1, e), e === -1 && (e = i.value - 1)), t.active = e, t.swiping = !0, t.offset = X(e), w.forEach(c => {
                        c.setOffset(0)
                    }), C()
                };
                V(u) ? Q().then(l) : l()
            },
            W = () => T(t.active);
        let N;
        const le = e => {
                !a.touchable || e.touches.length > 1 || (r.start(e), b = !1, N = Date.now(), p(), z())
            },
            oe = e => {
                a.touchable && t.swiping && (r.move(e), R.value && (!a.loop && (t.active === 0 && v.value > 0 || t.active === i.value - 1 && v.value < 0) || (be(e, a.stopPropagation), m({
                    offset: v.value
                }), b || (x("dragStart", {
                    index: S.value
                }), b = !0))))
            },
            F = () => {
                if (!a.touchable || !t.swiping) return;
                const e = Date.now() - N,
                    l = v.value / e;
                if ((Math.abs(l) > .25 || Math.abs(v.value) > o.value / 2) && R.value) {
                    const f = a.vertical ? r.offsetY.value : r.offsetX.value;
                    let c = 0;
                    a.loop ? c = f > 0 ? v.value > 0 ? -1 : 1 : 0 : c = -Math[v.value > 0 ? "ceil" : "floor"](v.value / o.value), m({
                        pace: c,
                        emitChange: !0
                    })
                } else v.value && m({
                    pace: 0
                });
                b = !1, t.swiping = !1, x("dragEnd", {
                    index: S.value
                }), C()
            },
            se = (e, l = {}) => {
                z(), r.reset(), I(() => {
                    let n;
                    a.loop && e === i.value ? n = t.active === 0 ? 0 : e : n = e % i.value, l.immediate ? I(() => {
                        t.swiping = !1
                    }) : t.swiping = !1, m({
                        pace: n - t.active,
                        emitChange: !0
                    })
                })
            },
            ce = (e, l) => {
                const n = l === S.value,
                    f = n ? {
                        backgroundColor: a.indicatorColor
                    } : void 0;
                return E("i", {
                    style: f,
                    class: D("indicator", {
                        active: n
                    })
                }, null)
            },
            ue = () => {
                if (g.indicator) return g.indicator({
                    active: S.value,
                    total: i.value
                });
                if (a.showIndicators && i.value > 1) return E("div", {
                    class: D("indicators", {
                        vertical: a.vertical
                    })
                }, [Array(i.value).fill("").map(ce)])
            };
        return U({
            prev: ne,
            next: Y,
            state: t,
            resize: W,
            swipeTo: se
        }), s({
            size: o,
            props: a,
            count: i,
            activeIndicator: S
        }), $(() => a.initialSwipe, e => T(+e)), $(i, () => T(t.active)), $(() => a.autoplay, C), $([ye, xe, () => a.width, () => a.height], W), $(fe(), e => {
            e === "visible" ? C() : p()
        }), q(T), de(() => T(t.active)), he(() => T(t.active)), ge(p), we(p), me("touchmove", oe, {
            target: h
        }), () => {
            var e;
            return E("div", {
                ref: u,
                class: D()
            }, [E("div", {
                ref: h,
                style: ae.value,
                class: D("track", {
                    vertical: a.vertical
                }),
                onTouchstartPassive: le,
                onTouchend: F,
                onTouchcancel: F
            }, [(e = g.default) == null ? void 0 : e.call(g)]), ue()])
        }
    }
});
const ze = Z(pe),
    [Ce, Pe] = G("swipe-item");
var $e = j({
    name: Ce,
    setup(a, {
        slots: x
    }) {
        let g;
        const u = J({
                offset: 0,
                inited: !1,
                mounted: !1
            }),
            {
                parent: h,
                index: t
            } = Se(te);
        if (!h) return;
        const b = d(() => {
                const s = {},
                    {
                        vertical: i
                    } = h.props;
                return h.size.value && (s[i ? "height" : "width"] = "".concat(h.size.value, "px")), u.offset && (s.transform = "translate".concat(i ? "Y" : "X", "(").concat(u.offset, "px)")), s
            }),
            r = d(() => {
                const {
                    loop: s,
                    lazyRender: i
                } = h.props;
                if (!i || g) return !0;
                if (!u.mounted) return !1;
                const o = h.activeIndicator.value,
                    v = h.count.value - 1,
                    y = o === 0 && s ? v : o - 1,
                    M = o === v && s ? 0 : o + 1;
                return g = t.value === o || t.value === y || t.value === M, g
            }),
            w = s => {
                u.offset = s
            };
        return q(() => {
            Q(() => {
                u.mounted = !0
            })
        }), U({
            setOffset: w
        }), () => {
            var s;
            return E("div", {
                class: Pe(),
                style: b.value
            }, [r.value ? (s = x.default) == null ? void 0 : s.call(x) : null])
        }
    }
});
const Ae = Z($e);
export {
    ze as S, Ae as a
};