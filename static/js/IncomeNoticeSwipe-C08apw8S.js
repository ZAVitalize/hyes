import {
    d as C,
    u as B,
    r as p,
    j as I,
    c as g,
    G as i,
    n as L,
    a as h,
    w as l,
    F as N,
    e as M,
    O as x,
    o as u,
    f as D,
    N as z,
    b as f,
    t as F,
    g as G,
    _ as V
} from "./index-DwRGlFcE.js"; /* empty css              */
import {
    C as j
} from "./index-Dau7Kuh3.js";
import {
    g as E
} from "./general-DEyazWIM.js";
import {
    S as H,
    a as O
} from "./index-CPJOnUeq.js";
const R = C({
        __name: "IncomeNoticeSwipe",
        props: {
            showBackground: {
                type: [Boolean],
                default: !0
            },
            background: {
                type: [String],
                default: void 0
            },
            height: {
                type: [String],
                default: void 0
            },
            titleColor: {
                type: [String],
                default: void 0
            },
            valueColor: {
                type: [String],
                default: void 0
            },
            type: {
                type: [String],
                default: "HomeBroadcast"
            }
        },
        setup(t) {
            const v = t,
                y = B(),
                a = p([]),
                d = p([]),
                _ = () => "******" + b(4),
                m = (e, o) => Math.ceil(Math.random() * (o - e + 1) + e - 1),
                S = () => {
                    E({
                        pageNum: 1,
                        pageSize: 200,
                        type: v.type,
                        country: localStorage.getItem("country")
                    }).then(e => {
                        a.value = e.rows
                    }).then(() => {
                        a.value.length > 0 && w()
                    })
                },
                w = () => {
                    for (let e = 0; e < 128; e++) d.value.push({
                        user: _(),
                        amount: m(5, 150) * 100,
                        content: a.value[m(0, a.value.length - 1)].content
                    })
                },
                b = e => {
                    let o = "",
                        n = "1234567890";
                    for (let r = 0; r < e; r++) {
                        let s = Math.round(Math.random() * n.length);
                        o += n.substring(s, s + 1)
                    }
                    return o
                };
            return I(() => {
                S()
            }), (e, o) => {
                const n = j,
                    r = O,
                    s = H,
                    k = x("dompurify-html");
                return u(), g("div", {
                    class: L(["income-notice", [t.showBackground ? "income-notice-bg" : ""]]),
                    style: i({
                        height: t.height,
                        background: t.background
                    })
                }, [h(s, {
                    class: "income-swipe",
                    height: 65,
                    vertical: "",
                    loop: !0,
                    autoplay: 2e3,
                    "show-indicators": !1,
                    touchable: !1
                }, {
                    default: l(() => [(u(!0), g(N, null, M(d.value, c => (u(), D(r, {
                        key: c.id
                    }, {
                        default: l(() => [h(n, null, {
                            title: l(() => [f("span", {
                                style: i({
                                    color: t.titleColor
                                })
                            }, F(G(y).t("task.congratulations", {
                                D1: c.user
                            })), 5)]),
                            label: l(() => [z(f("span", {
                                style: i({
                                    color: t.valueColor
                                })
                            }, null, 4), [
                                [k, c.content]
                            ])]),
                            _: 2
                        }, 1024)]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                })], 6)
            }
        }
    }),
    P = V(R, [
        ["__scopeId", "data-v-e306a408"]
    ]);
export {
    P as I
};