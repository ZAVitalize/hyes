import {
    d as w,
    r as c,
    u as I,
    D as m,
    j as x,
    f as h,
    w as L,
    c as k,
    F as P,
    e as b,
    P as B,
    bs as R,
    bt as U,
    o as g,
    _ as A
} from "./index-DwRGlFcE.js";
import {
    C as E
} from "./index-Dau7Kuh3.js";
const F = w({
        __name: "RightPopSelectLanguage",
        props: {
            show: {
                type: [Boolean],
                default: null
            }
        },
        emits: ["update:show", "handleUpdateCountryCode"],
        setup(y, {
            emit: f
        }) {
            const e = "/api",
                n = c(!1),
                r = I(),
                d = f,
                C = y,
                i = c(""),
                p = c([]),
                S = () => {
                    R().then(a => {
                        let o = !1;
                        a.data.forEach((t, u) => {
                            !localStorage.getItem("lang") && u === 0 && (console.log("set lang3:", t.languagesStr), localStorage.setItem("lang", t.languagesStr), s({
                                text: t.languagesCountry,
                                icon: e + t.countryImg,
                                languagesStr: t.languagesStr,
                                id: t.id,
                                country: t.country
                            })), localStorage.getItem("lang") === t.languagesStr && (i.value = e + t.countryImg, o = !0), p.value.push({
                                text: t.languagesCountry,
                                icon: e + t.countryImg,
                                languagesStr: t.languagesStr,
                                id: t.id,
                                country: t.country
                            })
                        }), a.data.length > 0 && !o && s({
                            text: a.data[0].languagesCountry,
                            icon: e + a.data[0].countryImg,
                            languagesStr: a.data[0].languagesStr,
                            id: a.data[0].id,
                            country: a.data[0].country
                        })
                    })
                },
                _ = () => {
                    d("update:show", !1)
                },
                s = a => {
                    U(a.languagesStr, a.country), i.value = a.icon, n.value = !1, r.te("countryCode") && (console.log("have country code update"), d("handleUpdateCountryCode", r.t("countryCode")))
                };
            return m(() => C.show, a => {
                n.value = a
            }), x(() => {
                S()
            }), (a, o) => {
                const t = E,
                    u = B;
                return g(), h(u, {
                    show: n.value,
                    "onUpdate:show": o[0] || (o[0] = l => n.value = l),
                    position: "right",
                    style: {
                        width: "50%",
                        height: "100%"
                    },
                    onClosed: _
                }, {
                    default: L(() => [(g(!0), k(P, null, b(p.value, (l, v) => (g(), h(t, {
                        key: v,
                        title: l.text,
                        onClick: j => s(l)
                    }, null, 8, ["title", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["show"])
            }
        }
    }),
    $ = A(F, [
        ["__scopeId", "data-v-a7b68c37"]
    ]);
export {
    $ as R
};