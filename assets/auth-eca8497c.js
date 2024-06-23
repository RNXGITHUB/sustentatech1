import {u as l, r as i, o as c, c as x, b as t, f as s, k as p, l as n} from "./index-69a2ddda.js";
const r = {
    class: "flex min-h-full relative bg-white"
}
  , u = {
    class: "flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
}
  , h = {
    class: "mx-auto w-full max-w-sm lg:w-96"
}
  , m = {
    class: "relative hidden w-0 flex-1 lg:block"
}
  , d = ["src"]
  , H = {
    __name: "auth",
    setup(w) {
        l({
            htmlAttrs: {
                class: "h-full bg-white"
            },
            bodyAttrs: {
                class: "h-full"
            }
        });
        const o = ["https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=3433&q=80", "https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=2370&q=60", "https://images.unsplash.com/photo-1524562865630-b991c6c2f261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=1364&q=80", "https://images.unsplash.com/photo-1513343987712-5da15ea2a9bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=2148&q=80", "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=987&q=80", "https://images.unsplash.com/photo-1518225190492-bedf527826f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1516574276094-f0478ec98ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=crop&w=1335&q=80"]
          , e = o[Math.floor(Math.random() * o.length)];
        return (b,_)=>{
            const a = n
              , f = i("RouterView");
            return c(),
            x("div", r, [t(a, {
                class: "absolute left-4 top-4"
            }), s("div", u, [s("div", h, [t(f)])]), s("div", m, [s("img", {
                class: "absolute inset-0 h-full w-full object-cover",
                src: p(e),
                alt: "Auth"
            }, null, 8, d)])])
        }
    }
};
export {H as default};
//# sourceMappingURL=auth-eca8497c.js.map
