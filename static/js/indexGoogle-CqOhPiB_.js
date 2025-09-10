import {
    d as f,
    r as c,
    j as h,
    c as r,
    b as l,
    a as o,
    I as v,
    w as p,
    F as S,
    e as L,
    g as I,
    aw as x,
    o as n,
    f as k,
    _ as N
} from "./index-DwRGlFcE.js"; /* empty css              */
import {
    I as b
} from "./IncomeNoticeSwipe-C08apw8S.js";
import {
    R as y
} from "./RightPopSelectLanguage-BZ1q3rMp.js";
import {
    N as B
} from "./NoticeDialog-BKpspWKi.js";
import {
    S as C,
    a as F
} from "./index-CPJOnUeq.js";
import "./index-Dau7Kuh3.js";
import "./general-DEyazWIM.js";
const G = {
        class: "main-wrapper-tab-bar-height"
    },
    H = ["src", "alt"],
    R = f({
        __name: "indexGoogle",
        setup(V) {
            const m = window.innerHeight - 50,
                t = c(!1);
            let i = c([]);
            const d = () => {
                x({
                    showLocation: "0"
                }).then(s => {
                    i.value = s.data
                })
            };
            return h(() => {
                d()
            }), (s, a) => {
                const w = v,
                    _ = F,
                    g = C;
                return n(), r("div", G, [l("div", {
                    class: "language-select-icon div-flex-center",
                    onClick: a[0] || (a[0] = e => t.value = !t.value)
                }, [o(w, {
                    class: "iconfont icon-Language"
                })]), o(g, {
                    class: "my-swipe",
                    autoplay: 3e3,
                    height: m,
                    "show-indicators": !1,
                    "indicator-color": "white"
                }, {
                    default: p(() => [(n(!0), r(S, null, L(I(i), (e, u) => (n(), k(_, {
                        key: u
                    }, {
                        default: p(() => [l("img", {
                            src: s.baseApi + e.imageSrc,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: e.id
                        }, null, 8, H)]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), o(b), o(y, {
                    show: t.value,
                    "onUpdate:show": a[1] || (a[1] = e => t.value = e)
                }, null, 8, ["show"]), o(B)])
            }
        }
    }),
    q = N(R, [
        ["__scopeId", "data-v-c1204c30"]
    ]);
export {
    q as
    default
};