import {
    d as y,
    a3 as L,
    X as D,
    aq as I,
    a as n,
    au as o,
    W as V,
    a9 as u,
    V as q,
    as as B,
    av as s,
    I as b,
    $ as _
} from "./index-DwRGlFcE.js";
const [z, i] = D("cell"), A = {
    tag: q("div"),
    icon: String,
    size: String,
    title: u,
    value: u,
    label: u,
    center: Boolean,
    isLink: Boolean,
    border: V,
    iconPrefix: String,
    valueClass: o,
    labelClass: o,
    titleClass: o,
    titleStyle: null,
    arrowDirection: String,
    required: {
        type: [Boolean, String],
        default: null
    },
    clickable: {
        type: Boolean,
        default: null
    }
}, N = L({}, A, B);
var R = y({
    name: z,
    props: N,
    setup(e, {
        slots: a
    }) {
        const v = I(),
            g = () => {
                if (a.label || s(e.label)) return n("div", {
                    class: [i("label"), e.labelClass]
                }, [a.label ? a.label() : e.label])
            },
            h = () => {
                var l;
                if (a.title || s(e.title)) {
                    const t = (l = a.title) == null ? void 0 : l.call(a);
                    return Array.isArray(t) && t.length === 0 ? void 0 : n("div", {
                        class: [i("title"), e.titleClass],
                        style: e.titleStyle
                    }, [t || n("span", null, [e.title]), g()])
                }
            },
            m = () => {
                const l = a.value || a.default;
                if (l || s(e.value)) return n("div", {
                    class: [i("value"), e.valueClass]
                }, [l ? l() : n("span", null, [e.value])])
            },
            w = () => {
                if (a.icon) return a.icon();
                if (e.icon) return n(b, {
                    name: e.icon,
                    class: i("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            C = () => {
                if (a["right-icon"]) return a["right-icon"]();
                if (e.isLink) {
                    const l = e.arrowDirection && e.arrowDirection !== "right" ? "arrow-".concat(e.arrowDirection) : "arrow";
                    return n(b, {
                        name: l,
                        class: i("right-icon")
                    }, null)
                }
            };
        return () => {
            var l;
            const {
                tag: t,
                size: r,
                center: P,
                border: S,
                isLink: k,
                required: x
            } = e, c = (l = e.clickable) != null ? l : k, d = {
                center: P,
                required: !!x,
                clickable: c,
                borderless: !S
            };
            return r && (d[r] = !!r), n(t, {
                class: i(d),
                role: c ? "button" : void 0,
                tabindex: c ? 0 : void 0,
                onClick: v
            }, {
                default: () => {
                    var f;
                    return [w(), h(), m(), C(), (f = a.extra) == null ? void 0 : f.call(a)]
                }
            })
        }
    }
});
const T = _(R);
export {
    T as C, A as c
};