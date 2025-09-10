import {
    d as y,
    u as T,
    r as l,
    j as B,
    f as w,
    w as s,
    b as f,
    a as x,
    B as D,
    k as C,
    t as M,
    g,
    ae as b,
    am as H,
    h as I,
    o as N,
    _ as U
} from "./index-DwRGlFcE.js";
import {
    g as V
} from "./general-DEyazWIM.js";
const z = ["innerHTML"],
    G = {
        class: "van-hairline--top van-dialog__footer"
    },
    $ = ["innerHTML"],
    j = y({
        __name: "NoticeDialog",
        setup(O) {
            const c = T(),
                t = l(!1),
                r = l(""),
                d = l(""),
                _ = l(null),
                e = l([]),
                i = l("");
            let o = 0;
            const v = () => {
                    e.value.length > 0 && o < e.value.length && (d.value = e.value[o].content, r.value = e.value[o].title, _.value = e.value[o].id, i.value = e.value[o].url, o++, t.value = !0)
                },
                k = () => {
                    V({
                        type: "dialog"
                    }).then(a => {
                        console.log("dialog,", a), e.value = a.rows
                    }).then(() => {
                        v()
                    })
                },
                p = () => {
                    H.set("dialogMessage".concat(_.value), "read", {
                        expires: .1
                    }), t.value = !1
                },
                L = a => {
                    a.indexOf("http") > -1 ? window.location.href = a : I.push({
                        name: "Me"
                    })
                };
            return B(() => {
                k()
            }), (a, n) => {
                const m = D,
                    h = b;
                return i.value && i.value.length > 0 ? (N(), w(h, {
                    key: 0,
                    show: t.value,
                    "onUpdate:show": n[1] || (n[1] = u => t.value = u),
                    title: r.value,
                    onClosed: v
                }, {
                    footer: s(() => [f("div", G, [x(m, {
                        size: "large",
                        type: "default",
                        class: "van-dialog__confirm",
                        onClick: p
                    }, {
                        default: s(() => [C(M(g(c).t("confirm")), 1)]),
                        _: 1
                    }), x(m, {
                        size: "large",
                        type: "default",
                        class: "van-dialog__confirm",
                        onClick: n[0] || (n[0] = u => L(i.value))
                    }, {
                        default: s(() => [C(M(g(c).t("goUrl")), 1)]),
                        _: 1
                    })])]),
                    default: s(() => [f("div", {
                        class: "dialog-content",
                        innerHTML: d.value
                    }, null, 8, z)]),
                    _: 1
                }, 8, ["show", "title"])) : (N(), w(h, {
                    key: 1,
                    show: t.value,
                    "onUpdate:show": n[2] || (n[2] = u => t.value = u),
                    title: r.value,
                    "confirm-button-text": g(c).t("confirm"),
                    onConfirm: p,
                    onClosed: v
                }, {
                    default: s(() => [f("div", {
                        class: "dialog-content",
                        innerHTML: d.value
                    }, null, 8, $)]),
                    _: 1
                }, 8, ["show", "title", "confirm-button-text"]))
            }
        }
    }),
    A = U(j, [
        ["__scopeId", "data-v-4fda1e03"]
    ]);
export {
    A as N
};