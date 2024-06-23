import {u, p as c, a as _, r as m, o as e, c as i, d as r, m as p, g as d, h as f, _ as h, j as g} from "./index-69a2ddda.js";
const y = {
    class: "bg-slate-100 h-full"
}
  , v = {
    __name: "editor",
    props: {
        error: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    setup(t) {
        u({
            bodyAttrs: {
                class: "bg-slate-100"
            }
        });
        const a = d({
            ...f,
            loader: ()=>h(()=>import("./AuthForm-52e5a6a1.js"), ["assets/AuthForm-52e5a6a1.js", "assets/index-69a2ddda.js", "assets/index-f697b78d.css"])
        });
        return c("openAuthModal", _(a)),
        (o,k)=>{
            var s;
            const n = g
              , l = m("RouterView");
            return e(),
            i("main", y, [(s = t.error) != null && s.message ? (e(),
            r(n, {
                key: 0,
                title: t.error.message
            }, null, 8, ["title"])) : (e(),
            r(l, p({
                key: 1
            }, o.$attrs, {
                key: o.$route.fullPath
            }), null, 16))])
        }
    }
};
export {v as default};
//# sourceMappingURL=editor-791b6b2f.js.map
