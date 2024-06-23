import {W as n, o as s, c as r, f as i, a8 as o, a0 as e} from "./index-69a2ddda.js";
const c = {
    __name: "MagicWrap",
    props: {
        animating: {
            type: Boolean,
            default: !1
        },
        innerClass: {
            type: String,
            default: ""
        },
        outerClass: {
            type: String,
            default: "max-w-4xl"
        }
    },
    setup(a) {
        return (t,l)=>(s(),
        r("div", {
            class: e(["outer-container", {
                animating: a.animating,
                [a.outerClass]: !0
            }]),
            "data-testid": "magic-wrap"
        }, [i("div", {
            class: e(["inner-container", a.innerClass])
        }, [o(t.$slots, "default", {}, void 0, !0)], 2)], 2))
    }
}
  , u = n(c, [["__scopeId", "data-v-7084fbc0"]]);
export {u as _};
//# sourceMappingURL=MagicWrap-b8cea90d.js.map
