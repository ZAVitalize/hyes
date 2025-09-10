import {
    Q as t
} from "./index-DwRGlFcE.js";

function r(e) {
    return t({
        url: "/general/content/list",
        headers: {
            isToken: !0
        },
        method: "get",
        params: e
    })
}

function o(e) {
    return t({
        url: "/general/content/id/" + e,
        headers: {
            isToken: !0
        },
        method: "get"
    })
}
export {
    o as a, r as g
};