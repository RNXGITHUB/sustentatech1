import {o as i, c as f, f as e, ai as Tt, b9 as Dt, aj as fe, bm as Lt, bn as Mt, aK as At, bo as Ut, bu as Ve, ap as Ce, a4 as ce, q as te, aq as Ze, a$ as Y, b as a, k as s, d as A, w as u, t as W, e as I, Z as se, l as Bt, aM as Ft, bl as we, v as ge, W as Pe, L as He, a5 as zt, a8 as he, aX as je, a7 as Rt, ar as X, aY as Te, r as ke, a0 as re, bG as Ot, bH as qt, ae as Ge, af as We, a_ as Ie, a3 as Ke, a9 as Ye, a1 as Ee, aS as Vt, s as Xe, bI as Nt, bJ as Ne, bh as Qe, bg as Zt, g as Je, h as et, _ as tt, aN as Ht, bK as jt, n as Gt, bL as Wt, p as Kt, ao as _e, ab as Yt, bM as Xt, X as Qt, ad as Jt, m as es, bN as ts, ak as ss, i as ns, j as os, ah as as, bp as is} from "./index-69a2ddda.js";
import {b as ls, a as rs, s as cs, _ as ds} from "./AnimatedLoader-f41ada9f.js";
import {_ as us} from "./external-link-95d7aa13.js";
import {p as ms, j as ps, k as _s} from "./sites-4872b2d4.js";
import {S as hs, _ as gs, a as fs, b as vs} from "./site-machine-85aa4cac.js";
import {s as bs, u as st, _ as ys, x as ws, I as xs, y as Se, S as Ss, g as $e} from "./libraries-f7478571.js";
import {_ as $s} from "./trash-x-filled-c1a48d6a.js";
import {l as ks, s as Is} from "./plugins-98ed0274.js";
import {a as Es, u as Cs, b as Ps} from "./switch-7a7b90fb.js";
import {_ as Ts} from "./rocket-0acd4cc9.js";
import {u as Ds} from "./mediaQueries-d2f0f2a6.js";
const Ls = {
    viewBox: "0 0 512 512",
    width: "1.2em",
    height: "1.2em"
}
  , Ms = e("path", {
    fill: "currentColor",
    d: "M450 128a46 46 0 0 0-44.11 59l-71.37 71.36a45.88 45.88 0 0 0-29 0l-52.91-52.91a46 46 0 1 0-89.12 0L75 293.88A46.08 46.08 0 1 0 106.11 325l87.37-87.36a45.85 45.85 0 0 0 29 0l52.92 52.92a46 46 0 1 0 89.12 0L437 218.12A46 46 0 1 0 450 128Z"
}, null, -1)
  , As = [Ms];
function Us(t, n) {
    return i(),
    f("svg", Ls, As)
}
const nt = {
    name: "ion-analytics-sharp",
    render: Us
}
  , Bs = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Fs = e("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
}, [e("path", {
    d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"
}), e("path", {
    d: "M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"
})], -1)
  , zs = [Fs];
function Rs(t, n) {
    return i(),
    f("svg", Bs, zs)
}
const Os = {
    name: "tabler-world",
    render: Rs
}
  , qs = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Vs = e("path", {
    fill: "currentColor",
    d: "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5l1.41-1.41L10 14.18L15.18 9l1.41 1.41L10 17z"
}, null, -1)
  , Ns = [Vs];
function Zs(t, n) {
    return i(),
    f("svg", qs, Ns)
}
const Hs = {
    name: "ic-sharp-cloud-done",
    render: Zs
}
  , js = {
    errors: [],
    siteDataId: null
}
  , Gs = Tt({
    id: "publisher",
    predictableActionArguments: !0,
    initial: "loading",
    context: {
        ...js
    },
    states: {
        loading: {
            on: {
                PUBLISH: [{
                    cond: "emailIsNotVerified",
                    actions: ["emitFailed", {
                        type: "showToast",
                        message: "You are not allowed to publish. Please verify your email address first.",
                        toastType: "error",
                        toastOptions: {
                            duration: 0,
                            dismissible: !0
                        }
                    }],
                    target: "#failed"
                }, {
                    cond: "isNewSite",
                    target: "#creatingSite",
                    actions: "assignSiteDataId"
                }, {
                    target: "#buildingSite",
                    actions: "assignSiteDataId"
                }]
            }
        },
        publishing: {
            id: "publishing",
            initial: "buildingSite",
            states: {
                creatingSite: {
                    id: "creatingSite",
                    invoke: {
                        src: "createSite"
                    },
                    on: {
                        CREATE_SITE_SUCCESS: {
                            target: "#buildingSite",
                            actions: ["assignSiteId", "assignSite"]
                        },
                        CREATE_SITE_FAILED: {
                            target: "#failed",
                            actions: ["emitFailed", {
                                type: "showToast",
                                message: "Publish failed. Please try again.",
                                toastType: "error",
                                toastOptions: {
                                    duration: 0,
                                    dismissible: !0
                                }
                            }, "resetSite"]
                        }
                    }
                },
                buildingSite: {
                    id: "buildingSite",
                    invoke: {
                        src: "buildSite"
                    },
                    on: {
                        BUILD_SITE_SUCCESS: {
                            target: "#complete",
                            actions: ["assignSiteUrl", "updateUrl", "emitPublished"]
                        },
                        BUILD_SITE_FAILED: {
                            target: "#failed",
                            actions: ["emitFailed", {
                                type: "showToast",
                                toastType: "error",
                                toastOptions: {
                                    duration: 0,
                                    dismissible: !0
                                }
                            }, "resetSite"]
                        }
                    }
                }
            }
        },
        complete: {
            id: "complete",
            entry: ["analyticsPublishEvent", "analyticsSetUserProperty"],
            type: "final"
        },
        failed: {
            id: "failed",
            type: "final"
        }
    }
}, {
    actions: {
        ...Dt,
        assignSite: fe((t,{site: n})=>({
            site: n
        })),
        assignSiteDataId: fe((t,{siteDataId: n})=>({
            siteDataId: n
        })),
        assignSiteUrl: fe((t,{siteUrl: n})=>({
            siteUrl: n
        })),
        assignSiteId: fe((t,{siteId: n})=>({
            siteId: n
        })),
        resetSite: fe({
            siteId: "",
            siteDataId: ""
        }),
        analyticsPublishEvent: t=>{
            Lt(Mt.Publish, {
                siteId: t == null ? void 0 : t.siteId
            }),
            At("Site Publish", {
                siteId: t == null ? void 0 : t.siteId
            })
        }
        ,
        analyticsSetUserProperty: ()=>Ut("hasPublished", "true")
    },
    services: {
        buildSite: ({siteId: t})=>async n=>{
            var l;
            try {
                const r = await ms(t);
                n({
                    type: "BUILD_SITE_SUCCESS",
                    site: r,
                    siteUrl: (l = r == null ? void 0 : r.publish) == null ? void 0 : l.url,
                    siteId: t
                })
            } catch (r) {
                console.error(r),
                n({
                    type: "BUILD_SITE_FAILED",
                    error: r
                })
            }
        }
        ,
        createSite: ({siteDataId: t})=>async n=>{
            try {
                const {site: l, siteId: r} = await ps(t);
                _s(l) ? n({
                    type: "CREATE_SITE_FAILED",
                    message: "Failed to create site",
                    error: "No siteId returned"
                }) : n({
                    type: "CREATE_SITE_SUCCESS",
                    site: l,
                    siteId: r
                })
            } catch (l) {
                console.error(l),
                n({
                    type: "CREATE_SITE_FAILED",
                    message: "Failed to create site",
                    error: l
                })
            }
        }
    },
    guards: {
        emailIsNotVerified: ()=>{
            var t, n, l, r, p;
            return ((l = (n = (t = Ve) == null ? void 0 : t.currentUser) == null ? void 0 : n.metadata) == null ? void 0 : l.createdAt) > 1713850333e3 ? !((p = (r = Ve) == null ? void 0 : r.currentUser) != null && p.emailVerified) : !1
        }
        ,
        isNewSite: ({siteId: t})=>t === ""
    }
})
  , Ws = {
    class: "flex flex-col items-center space-y-6 p-6",
    "data-testid": "publisher"
}
  , Ks = {
    key: 1,
    class: "flex flex-col items-center space-y-4"
}
  , Ys = {
    key: 3,
    class: "flex flex-col items-center space-y-6"
}
  , Xs = {
    class: "text-slate-400 md:text-lg text-center"
}
  , Qs = e("span", {
    class: "sr-only"
}, "Your site is published at", -1)
  , Js = {
    class: "border border-slate-300 bg-slate-100 p-4 md:p-6 rounded-lg mt-3 flex-row-center gap-2"
}
  , en = ["href"]
  , tn = ["src"]
  , sn = {
    class: "space-x-4"
}
  , nn = e("span", null, "Site Dashboard", -1)
  , on = e("span", null, "Back to Editor", -1)
  , an = {
    __name: "Publisher",
    props: {
        contentSaved: {
            type: Boolean,
            default: !1
        },
        siteDataId: {
            type: String,
            default: ""
        },
        siteId: {
            type: String,
            default: ""
        }
    },
    emits: ["complete", "published", "failed"],
    setup(t, {expose: n, emit: l}) {
        const r = t
          , p = Ce()
          , y = ce("$toast")
          , g = te(null)
          , C = {
            context: {
                siteEditorState: r == null ? void 0 : r.siteEditorState,
                siteId: r == null ? void 0 : r.siteId,
                siteDataId: r == null ? void 0 : r.siteDataId,
                toast: y
            },
            actions: {
                emitFailed: ()=>{
                    l("failed")
                }
                ,
                emitPublished: ($,{site: P, siteUrl: L, siteId: T})=>{
                    g.value = L,
                    l("published", {
                        site: P,
                        siteId: T,
                        siteUrl: L
                    })
                }
                ,
                updateUrl: ({siteId: $})=>{
                    var L;
                    const P = `/sites/${$}/edit`;
                    (L = window == null ? void 0 : window.history) != null && L.pushState ? window.history.pushState({}, "", P) : p.replace(P)
                }
            }
        }
          , {state: b, send: S} = Ze(Gs, "Publisher", C)
          , R = Y(()=>{
            var $, P, L;
            return ($ = b == null ? void 0 : b.value) != null && $.matches("loading") ? "Saving content..." : (P = b == null ? void 0 : b.value) != null && P.matches("publishing.creatingSite") ? "Setting up site..." : (L = b == null ? void 0 : b.value) != null && L.matches("publishing.buildingSite") ? "Building site..." : "Loading..."
        }
        )
          , v = ["https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif", "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif", "https://media.giphy.com/media/cAbRoMKBExGs8dMPfu/giphy.gif", "https://media.giphy.com/media/7Xov9qZ44Mq0qkCN9Q/giphy.gif"]
          , m = v[Math.floor(Math.random() * v.length)]
          , x = [{
            text: "Warming up publisher...",
            note: "Revving up the engines of virtual creation",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/102-wifi-outline.gif",
            delay: 1250
        }, {
            text: "Extracting site content...",
            note: "Gathering your content from the digital ether",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/50-file-outline.gif",
            delay: 2400
        }, {
            text: "Generating site code...",
            note: "Translating words into the language of the web",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/34-code-outline.gif",
            delay: 7500
        }, {
            text: "Optimizing page performance...",
            note: "Supercharging your site for maximum speed and efficiency",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/33-speed-outline.gif"
        }, {
            text: "Creating public website link...",
            note: "Carving out your space in the digital cosmos",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/1-share-outline.gif"
        }, {
            text: "Uploading site to server...",
            note: "Sending your site to the cloud",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/49-upload-file-outline.gif",
            delay: 7e3
        }, {
            text: "Finalizing site publish...",
            note: "Applying the finishing touches to your digital masterpiece",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/49-upload-file-outline.gif",
            complete: !0,
            delay: 2e4
        }, {
            text: "Still finalizing...",
            note: "Please try again in 30 seconds if it's not finished.",
            imageUrl: "https://storage.googleapis.com/mixo-files/public/img/icons/49-upload-file-outline.gif"
        }]
          , U = ()=>{
            l("complete")
        }
        ;
        return n({
            publish: $=>{
                S({
                    type: "PUBLISH",
                    siteDataId: $
                })
            }
        }),
        ($,P)=>{
            var j, M;
            const L = Bt
              , T = Hs
              , V = Ft
              , c = we
              , o = ls
              , w = Os
              , E = us
              , D = nt
              , N = ge
              , k = rs;
            return i(),
            f("div", Ws, [a(L, {
                size: "md",
                class: "hidden sm:flex"
            }), ["complete"].some(s(b).matches) ? (i(),
            A(V, {
                key: 0,
                level: 4,
                class: "text-teal-600 !-mb-1"
            }, {
                icon: u(()=>[a(T)]),
                default: u(()=>[W(" Site Published ")]),
                _: 1
            })) : I("", !0), ["loading"].some(s(b).matches) ? (i(),
            f("div", Ks, [a(c, {
                label: s(R)
            }, null, 8, ["label"])])) : I("", !0), ["publishing"].some(s(b).matches) ? (i(),
            A(o, {
                key: 2,
                prompts: x,
                "show-wrap": !1,
                class: "h-40 w-full max-w-2xl"
            })) : I("", !0), ["complete"].some(s(b).matches) ? (i(),
            f("div", Ys, [e("div", Xs, [Qs, e("div", Js, [a(w, {
                class: "text-gray-300 w-7 h-7"
            }), e("a", {
                href: s(g),
                target: "_blank",
                class: "default-link flex items-center text-sm md:text-xl font-semibold truncate"
            }, [e("span", null, se(s(g)), 1), W(" "), a(E, {
                class: "w-4 ml-3px text-slate-400"
            })], 8, en)])]), e("img", {
                class: "rounded-lg overflow-hidden w-4/5",
                src: s(m)
            }, null, 8, tn), e("div", sn, [a(N, {
                to: `/sites/${(M = (j = s(b)) == null ? void 0 : j.context) == null ? void 0 : M.siteId}`,
                theme: "brand-link",
                size: "sm"
            }, {
                default: u(()=>[a(D, {
                    class: "w-4 hidden sm:inline"
                }), nn]),
                _: 1
            }, 8, ["to"]), a(N, {
                size: "sm",
                theme: "brand-primary",
                onClick: U
            }, {
                default: u(()=>[a(k), on]),
                _: 1
            })])])) : I("", !0)])
        }
    }
}
  , ln = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , rn = e("g", {
    id: "feElipsisV0",
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "none",
    "stroke-width": "1"
}, [e("g", {
    id: "feElipsisV1",
    fill: "currentColor"
}, [e("path", {
    id: "feElipsisV2",
    d: "M12 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
})])], -1)
  , cn = [rn];
function dn(t, n) {
    return i(),
    f("svg", ln, cn)
}
const un = {
    name: "fe-elipsis-v",
    render: dn
};
function mn(t) {
    let n = {
        parent: (r = t.parent,
        (typeof r == "string" ? document.querySelector(r) : r) || ".split-view"),
        direction: t.direction,
        gutterCln: "sp-gutter",
        gutterSize: t.gutterSize || 5,
        minSize: t.minSize || 0,
        sizes: (l = t.sizes,
        l && l.length > 0 ? l.map(o=>o / 100) : []),
        onDragEnd: t.onDragEnd
    };
    var l, r;
    let p, y, g, C = n.parent, b = [...C.children], S = C.addEventListener, R = C.removeEventListener, v = n.direction === "horizontal", m = !1, x = !1, U = 0, F = 0, $ = 0, P = 0, L = 0;
    C.dataset.minsize = n.minSize,
    C.style.flexDirection = v ? "row" : "column",
    ((o,w)=>{
        let E = 0;
        for (const D of o)
            D.classList.contains(n.gutterCln) ? (D.style.flex = `0 0 ${n.gutterSize}px`,
            D.style.cursor = (w ? "col" : "row") + "-resize") : (D.style.flex = "" + (n.sizes.length > 0 ? n.sizes[E] : 1),
            E++)
    }
    )(b, v);
    function T(o) {
        g = o.target,
        x = !0,
        g.classList.contains(n.gutterCln) ? (C = g.parentNode,
        v = C.classList.contains("horizontal"),
        m = /^touch/g.test(o.type),
        p = g.previousElementSibling,
        y = g.nextElementSibling,
        p && y && (U = v ? p.offsetWidth : p.offsetHeight,
        F = v ? y.offsetWidth : y.offsetHeight,
        o = m ? o.changedTouches[0] : o,
        L = v ? o.pageX : o.pageY,
        P = U + F,
        $ = Number(p.style.flexGrow) + Number(y.style.flexGrow)),
        m ? (S("touchmove", V),
        S("touchend", c),
        S("touchcancel", c)) : (S("mousemove", V),
        S("mouseup", c))) : x = !1
    }
    function V(o) {
        if (x) {
            o = m ? o.changedTouches[0] : o;
            const w = parseInt(C.dataset.minsize, 10);
            let E = v ? o.pageX : o.pageY
              , D = E - L;
            U += D,
            F -= D,
            U > w && F > w && (p.style.flexGrow = ($ * (U / P)).toString(),
            y.style.flexGrow = ($ * (F / P)).toString()),
            L = E
        }
        m || (o.preventDefault(),
        o.stopPropagation())
    }
    function c() {
        if (x = !1,
        g = null,
        n.onDragEnd) {
            const o = [];
            for (const w of b)
                w.classList.contains(n.gutterCln) || o.push(100 * w.style.flexGrow);
            n.onDragEnd(o)
        }
        R("touchmove", V),
        R("touchend", c),
        R("touchcancel", c),
        R("mousemove", V),
        R("mouseup", c)
    }
    return S("touchstart", T),
    S("mousedown", T),
    {
        parent: C,
        destroy() {
            R("touchstart", T),
            R("mousedown", T)
        }
    }
}
const pn = {
    class: "split-view horizontal",
    "data-testid": "split-view"
}
  , _n = {
    key: 0,
    class: "sp-gutter"
}
  , hn = {
    __name: "SplitView",
    props: {
        hideGutter: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        let n;
        const l = window.matchMedia("(min-width: 768px)");
        function r(p) {
            p.matches && !n ? n = mn({
                parent: ".split-view",
                direction: "horizontal",
                gutterSize: 10,
                minSize: 50,
                sizes: [30, 70]
            }) : (n == null || n.destroy(),
            n = null)
        }
        return l.addEventListener("change", r),
        He(()=>{
            r(l)
        }
        ),
        zt(()=>{
            n == null || n.destroy()
        }
        ),
        (p,y)=>{
            const g = un;
            return i(),
            f("div", pn, [he(p.$slots, "1", {}, void 0, !0), t.hideGutter ? I("", !0) : (i(),
            f("span", _n, [a(g, {
                class: "pointer-events-none"
            })])), he(p.$slots, "2", {}, void 0, !0)])
        }
    }
}
  , gn = Pe(hn, [["__scopeId", "data-v-be48695b"]])
  , fn = {
    __name: "SiteEditorControls",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        const n = ce("siteService")
          , l = ce("openAuthModal")
          , {state: r, send: p} = je(n, "Site Editor Controls: Site Service")
          , y = Rt({
            openAuthModal: l,
            siteSettings: ["siteLogoUrl", "siteLogoSize", "hideSiteName", "theme", "siteName", "siteTitle", "siteDescription", "siteSocialImageUrl"]
        })
          , g = X(r, "siteData", {})
          , C = X(r, "pageData", {})
          , b = X(r, "formSchema", {})
          , S = te(null)
          , v = Te(x=>{
            p({
                type: "UPDATE_PAGE_DATA",
                siteData: g == null ? void 0 : g.value,
                pageData: x
            })
        }
        , 100)
          , m = x=>{
            st(x, ()=>{
                p({
                    type: "FORM_FIELD_BLUR"
                })
            }
            )
        }
        ;
        return (x,U)=>{
            const F = we
              , $ = ke("FormKitSchema")
              , P = ke("FormKit");
            return s(r).matches("withSite.loadingPage") ? (i(),
            A(F, {
                key: 0,
                label: "Loading editor...",
                class: "mb-4"
            })) : (i(),
            A(P, {
                key: 1,
                ref_key: "siteEditorControlsRef",
                ref: S,
                "data-testid": "site-editor-controls",
                type: "form",
                actions: !1,
                value: s(C),
                disabled: t.disabled,
                onInput: s(v),
                onBlurCapture: m
            }, {
                default: u(()=>[a($, {
                    schema: s(b),
                    library: s(bs),
                    data: s(y)
                }, null, 8, ["schema", "library", "data"])]),
                _: 1
            }, 8, ["value", "disabled", "onInput"]))
        }
    }
}
  , vn = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , bn = e("path", {
    fill: "currentColor",
    d: "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm5.793-4.207a1 1 0 0 1 1.414 0L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L10.586 12L7.793 9.207a1 1 0 0 1 0-1.414z"
}, null, -1)
  , yn = [bn];
function wn(t, n) {
    return i(),
    f("svg", vn, yn)
}
const xn = {
    name: "mi-circle-error",
    render: wn
}
  , Sn = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , $n = e("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
}, [e("path", {
    d: "M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"
}), e("path", {
    d: "M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
})], -1)
  , kn = [$n];
function In(t, n) {
    return i(),
    f("svg", Sn, kn)
}
const En = {
    name: "tabler-box-multiple",
    render: In
}
  , Cn = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Pn = e("path", {
    fill: "currentColor",
    d: "M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.09.09 0 0 1 .032.006a.15.15 0 0 0 .03.006c.088.006.175.023.259.051l.028.009a.988.988 0 0 1 .359.228l6 6a.987.987 0 0 1 .2.293c.01.022.017.045.025.068l.009.026c.028.083.044.17.049.258l.007.027C20 8.982 20 8.991 20 9v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414Z"
}, null, -1)
  , Tn = [Pn];
function Dn(t, n) {
    return i(),
    f("svg", Cn, Tn)
}
const Ln = {
    name: "ci-file-blank-outline",
    render: Dn
}
  , Mn = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , An = e("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
}, [e("path", {
    d: "M10.585 10.587a2 2 0 0 0 2.829 2.828"
}), e("path", {
    d: "M16.681 16.673A8.717 8.717 0 0 1 12 18c-3.6 0-6.6-2-9-6c1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146A9.055 9.055 0 0 1 12 6c3.6 0 6.6 2 9 6c-.666 1.11-1.379 2.067-2.138 2.87M3 3l18 18"
})], -1)
  , Un = [An];
function Bn(t, n) {
    return i(),
    f("svg", Mn, Un)
}
const Fn = {
    name: "tabler-eye-off",
    render: Bn
}
  , zn = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Rn = e("path", {
    fill: "currentColor",
    d: "M19 22H5a1 1 0 0 1-1-1v-8H2l9.292-9.293a1 1 0 0 1 1.415 0L22 13h-2v8a1 1 0 0 1-1 1Zm-9-7h4v5h4v-8.172l-6-6l-6 6V20h4v-5Z"
}, null, -1)
  , On = [Rn];
function qn(t, n) {
    return i(),
    f("svg", zn, On)
}
const Vn = {
    name: "ci-home-alt-outline",
    render: qn
};
const ae = t=>(Ge("data-v-c182f0ea"),
t = t(),
We(),
t)
  , Nn = {
    class: "space-y-2"
}
  , Zn = {
    class: "flex items-center gap-x-1"
}
  , Hn = {
    key: 0,
    class: "space-y-2 gap-2"
}
  , jn = ae(()=>e("summary", {
    class: "text-slate-500 text-sm cursor-pointer pt-2"
}, " More Settings ", -1))
  , Gn = {
    class: "flex flex-col w-full items-left gap-1 py-2"
}
  , Wn = {
    class: "flex flex-wrap items-center gap-2"
}
  , Kn = ae(()=>e("span", null, "Duplicate Page", -1))
  , Yn = ae(()=>e("span", null, "Delete Page", -1))
  , Xn = {
    key: 1,
    class: "pt-3"
}
  , Qn = ae(()=>e("hr", {
    class: "pb-4"
}, null, -1))
  , Jn = {
    key: 0,
    class: "site-page-wrap"
}
  , eo = {
    class: "w-full"
}
  , to = {
    class: "flex items-center gap-x-1 animate-pulse"
}
  , so = {
    class: "capitalize truncate"
}
  , no = {
    class: "text-slate-500 text-sm cursor-pointer"
}
  , oo = {
    class: "flex flex-wrap items-center gap-2 py-2"
}
  , ao = ae(()=>e("p", {
    class: "text-sm text-slate-500 font-semibold"
}, " Page taking too long? ", -1))
  , io = {
    class: "text-sm text-slate-500 font-normal"
}
  , lo = {
    key: 1,
    class: "site-page-wrap"
}
  , ro = {
    class: "w-full"
}
  , co = {
    class: "flex items-center gap-x-1"
}
  , uo = {
    class: "capitalize truncate"
}
  , mo = {
    class: "space-y-2 mt-2 text-sm bg-white border border-slate-200 p-2 rounded-md"
}
  , po = ae(()=>e("p", {
    class: "font-bold"
}, " Page Creation Failed ", -1))
  , _o = {
    class: "text-slate-500"
}
  , ho = ae(()=>e("p", {
    class: "text-slate-500"
}, " Remove this page and try recreating it by clicking the New Page button below. ", -1))
  , go = ae(()=>e("span", null, "Delete Failed Page", -1))
  , fo = {
    __name: "SitePage",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        page: {
            type: Object,
            required: !0
        },
        siteId: {
            type: String,
            required: !0
        },
        isCurrent: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["blur", "input", "delete", "duplicate", "open-page"],
    setup(t, {emit: n}) {
        const l = t
          , p = Te(v=>{
            if (v) {
                const m = {
                    ...l == null ? void 0 : l.page,
                    ...v
                };
                n("input", {
                    [m == null ? void 0 : m.id]: m
                })
            }
        }
        , 500)
          , y = v=>{
            st(v, ()=>{
                setTimeout(()=>{
                    n("blur")
                }
                , 500)
            }
            )
        }
          , g = (v,m)=>{
            n("delete", v, m)
        }
          , C = v=>{
            n("duplicate", v)
        }
          , b = Y(()=>{
            var v, m, x, U;
            return (m = (v = l == null ? void 0 : l.page) == null ? void 0 : v.metaData) != null && m.status ? ["start", "generating", "generated"].includes((U = (x = l == null ? void 0 : l.page) == null ? void 0 : x.metaData) == null ? void 0 : U.status) : !1
        }
        )
          , S = Y(()=>{
            var v, m, x, U;
            return (m = (v = l == null ? void 0 : l.page) == null ? void 0 : v.metaData) != null && m.status ? ((U = (x = l == null ? void 0 : l.page) == null ? void 0 : x.metaData) == null ? void 0 : U.status) === "done" : !0
        }
        )
          , R = Y(()=>{
            var v, m;
            return ((m = (v = l == null ? void 0 : l.page) == null ? void 0 : v.metaData) == null ? void 0 : m.status) === "error"
        }
        );
        return (v,m)=>{
            var E, D, N, k, j;
            const x = Vn
              , U = Fn
              , F = Ln
              , $ = ke("FormKit")
              , P = En
              , L = ge
              , T = $s
              , V = ys
              , c = Ot
              , o = qt
              , w = xn;
            return i(),
            f("div", null, [a($, {
                type: "form",
                actions: !1,
                disabled: t.disabled,
                onInput: s(p),
                onBlurCapture: y
            }, {
                default: u(()=>[s(S) ? (i(),
                A(V, {
                    key: 0,
                    id: "pagesList"
                }, {
                    label: u(()=>{
                        var M, z, q, K;
                        return [e("div", Nn, [e("div", Zn, [e("button", {
                            type: "button",
                            class: re(["capitalize truncate mr-3 flex-row-center gap-x-1", {
                                "font-semibold": t.isCurrent,
                                "text-slate-400": (M = t.page) == null ? void 0 : M.disabled
                            }])
                        }, [((z = t.page) == null ? void 0 : z.id) === "index" ? (i(),
                        A(x, {
                            key: 0,
                            class: "w-4 h-4"
                        })) : (q = t.page) != null && q.disabled ? (i(),
                        A(U, {
                            key: 1,
                            class: "w-4 h-4"
                        })) : (i(),
                        A(F, {
                            key: 2,
                            class: "w-4 h-4"
                        })), e("span", null, se((K = t.page) == null ? void 0 : K.name), 1)], 2)])])]
                    }
                    ),
                    meta: u(()=>[he(v.$slots, "meta", {}, void 0, !0)]),
                    default: u(()=>{
                        var M, z, q, K, ve, de, be, ue, ne, le;
                        return [s(S) ? (i(),
                        f("div", Hn, [a($, {
                            type: "text",
                            name: "name",
                            label: "Name",
                            value: (M = t.page) == null ? void 0 : M.name,
                            required: !0,
                            placeholder: "Page Name",
                            validation: [["matches", /^[\w\-\s\p{L}]+$/u]],
                            "validation-messages": {
                                matches: "Name can only contain letters, numbers and spaces."
                            }
                        }, null, 8, ["value", "validation-messages"]), ((z = t.page) == null ? void 0 : z.id) !== "index" ? (i(),
                        A($, {
                            key: 0,
                            type: "text",
                            name: "slug",
                            label: "URL",
                            placeholder: "URL",
                            value: (q = t.page) == null ? void 0 : q.slug,
                            help: "A single word, all lowercase, no spaces (dashes instead). Appears after your domain name.",
                            validation: "alphanumericAndDashes",
                            "validation-visibility": "live",
                            plugins: [s(ks), s(Is)]
                        }, null, 8, ["value", "plugins"])) : I("", !0), a($, {
                            type: "checkbox",
                            name: "showInHeader",
                            label: "Add to Header",
                            value: ((K = t.page) == null ? void 0 : K.showInHeader) || !1
                        }, null, 8, ["value"]), a($, {
                            type: "checkbox",
                            name: "showInFooter",
                            label: "Add to Footer",
                            value: ((ve = t.page) == null ? void 0 : ve.showInFooter) || !1
                        }, null, 8, ["value"]), he(v.$slots, "default", {}, void 0, !0), e("details", null, [jn, e("div", Gn, [a($, {
                            type: "text",
                            name: "pageTitle",
                            label: "SEO Title",
                            value: (de = t.page) == null ? void 0 : de.pageTitle,
                            placeholder: "SEO Title",
                            help: "Overrides the sites SEO title for this page."
                        }, null, 8, ["value"]), a($, {
                            type: "textarea",
                            name: "pageDescription",
                            label: "SEO Description",
                            placeholder: "URL",
                            value: (be = t.page) == null ? void 0 : be.pageDescription,
                            help: "Overrides the sites SEO description for this page."
                        }, null, 8, ["value"])]), e("div", Wn, [a(L, {
                            theme: "brand-link-tertiary",
                            size: "xs",
                            onClick: m[0] || (m[0] = G=>{
                                var J;
                                return C((J = t.page) == null ? void 0 : J.id)
                            }
                            )
                        }, {
                            default: u(()=>[a(P, {
                                class: "h-4 w-4",
                                "aria-hidden": "true"
                            }), Kn]),
                            _: 1
                        }), ((ue = t.page) == null ? void 0 : ue.id) !== "index" ? (i(),
                        A(L, {
                            key: 0,
                            theme: "brand-link",
                            size: "xs",
                            onClick: m[1] || (m[1] = G=>{
                                var J, ye;
                                return g((J = t.page) == null ? void 0 : J.id, (ye = t.page) == null ? void 0 : ye.name)
                            }
                            )
                        }, {
                            default: u(()=>[a(T, {
                                class: "h-4 w-4",
                                "aria-hidden": "true"
                            }), Yn]),
                            _: 1
                        })) : I("", !0)])]), ((ne = t.page) == null ? void 0 : ne.id) !== "index" ? (i(),
                        f("div", Xn, [Qn, a($, {
                            type: "checkbox",
                            name: "disabled",
                            label: "Disable Page",
                            value: ((le = t.page) == null ? void 0 : le.disabled) || !1,
                            help: "Disabled pages aren't published and don't count towards your plan."
                        }, null, 8, ["value"])])) : I("", !0)])) : I("", !0)]
                    }
                    ),
                    _: 3
                })) : I("", !0)]),
                _: 3
            }, 8, ["disabled", "onInput"]), s(b) ? (i(),
            f("div", Jn, [e("div", eo, [e("div", to, [a(F, {
                class: "w-4 h-4"
            }), e("div", so, se((E = t.page) == null ? void 0 : E.name), 1)]), a(o, {
                class: "mt-1.5"
            }, {
                default: u(()=>{
                    var M, z;
                    return [e("details", null, [e("summary", no, se((z = (M = t.page) == null ? void 0 : M.metaData) == null ? void 0 : z.label) + "… ", 1), e("div", oo, [ao, e("p", io, [W(" It should take no more than a minute for your page to generate. Please "), a(c, null, {
                        default: u(()=>[W("Contact Support")]),
                        _: 1
                    }), W(". ")])])])]
                }
                ),
                _: 1
            })])])) : I("", !0), s(R) ? (i(),
            f("div", lo, [e("div", ro, [e("div", co, [a(w, {
                class: "w-5 h-5 text-yellow-500 animate-pulse"
            }), e("div", uo, se((D = t.page) == null ? void 0 : D.name), 1)]), e("div", mo, [po, e("p", _o, se((k = (N = t.page) == null ? void 0 : N.metaData) == null ? void 0 : k.label), 1), ho, ((j = t.page) == null ? void 0 : j.id) !== "index" ? (i(),
            A(L, {
                key: 0,
                theme: "brand-link",
                size: "xs",
                onClick: m[2] || (m[2] = M=>{
                    var z, q;
                    return g((z = t.page) == null ? void 0 : z.id, (q = t.page) == null ? void 0 : q.name)
                }
                )
            }, {
                default: u(()=>[a(T, {
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                }), go]),
                _: 1
            })) : I("", !0)])])])) : I("", !0)])
        }
    }
}
  , vo = Pe(fo, [["__scopeId", "data-v-c182f0ea"]])
  , bo = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , yo = e("path", {
    fill: "currentColor",
    d: "M4 21q-.425 0-.713-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.275-.275.65-.425t.775-.15q.4 0 .762.15t.663.45L20.425 5q.3.275.437.638T21 6.4q0 .375-.138.75t-.437.675l-12.6 12.6q-.275.275-.638.425t-.762.15H4ZM17.6 7.8L19 6.4L17.6 5l-1.4 1.4l1.4 1.4Z"
}, null, -1)
  , wo = [yo];
function xo(t, n) {
    return i(),
    f("svg", bo, wo)
}
const So = {
    name: "material-symbols-edit-rounded",
    render: xo
}
  , $o = {
    class: "site-pages space-y-4",
    "data-testid": "site-pages"
}
  , ko = {
    class: "formkit-controls flex items-center gap-2 text-slate-500 mt-[3px]"
}
  , Io = {
    key: 0,
    class: "flex"
}
  , Eo = ["onClick"]
  , Co = e("span", null, "Edit", -1)
  , Po = {
    key: 1,
    class: "formkit-up flex"
}
  , To = ["disabled", "onClick"]
  , Do = e("span", {
    class: "formkit-control-label absolute opacity-0 pointer-events-none"
}, "Move up", -1)
  , Lo = e("span", {
    class: "formkit-move-up-icon block w-2.5 formkit-icon"
}, [e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 16"
}, [e("path", {
    d: "M4.5,14c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V13.5c0,.28-.22,.5-.5,.5Z",
    fill: "currentColor"
}), e("path", {
    d: "M8,7.5c-.13,0-.26-.05-.35-.15l-3.15-3.15L1.35,7.35c-.2,.2-.51,.2-.71,0-.2-.2-.2-.51,0-.71l3.5-3.5c.2-.2,.51-.2,.71,0l3.5,3.5c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z",
    fill: "currentColor"
})])], -1)
  , Mo = [Do, Lo]
  , Ao = {
    key: 2,
    class: "formkit-down flex"
}
  , Uo = ["disabled", "onClick"]
  , Bo = e("span", {
    class: "formkit-control-label absolute opacity-0 pointer-events-none"
}, "Move down", -1)
  , Fo = e("span", {
    class: "formkit-move-down-icon block w-2.5 formkit-icon"
}, [e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 16"
}, [e("path", {
    d: "M4.5,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z",
    fill: "currentColor"
}), e("path", {
    d: "M4.5,14c-.13,0-.26-.05-.35-.15L.65,10.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.15,3.15-3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-3.5,3.5c-.1,.1-.23,.15-.35,.15Z",
    fill: "currentColor"
})])], -1)
  , zo = [Bo, Fo]
  , Ro = {
    key: 0,
    class: "flex justify-end"
}
  , Oo = e("span", {
    class: "text-xs sm:text-sm text-slate-400"
}, "Reorder pages ", -1)
  , qo = {
    __name: "SitePages",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["show-content"],
    setup(t, {emit: n}) {
        const l = Ce()
          , r = ce("siteService")
          , {state: p, send: y} = je(r, "Site Pages: Site Service")
          , g = X(p, "siteId", "")
          , C = X(p, "siteData", {})
          , b = X(p, "pageData.id", {})
          , S = X(p, "siteData.pages", {})
          , R = Y(()=>Object.values((S == null ? void 0 : S.value) || []).length)
          , v = Y(()=>Object.values(S == null ? void 0 : S.value).sort((o,w)=>(o == null ? void 0 : o.sortOrder) - (w == null ? void 0 : w.sortOrder)))
          , [m] = Ie(!1)
          , x = (o,w)=>{
            var M, z;
            const E = Nt(S == null ? void 0 : S.value)
              , D = E[o == null ? void 0 : o.id]
              , N = w === "up" ? (o == null ? void 0 : o.sortOrder) - 1 : (o == null ? void 0 : o.sortOrder) + 1
              , k = Object.values(E).find(q=>(q == null ? void 0 : q.sortOrder) === N);
            D.sortOrder = k.sortOrder,
            k.sortOrder = o == null ? void 0 : o.sortOrder,
            E[o == null ? void 0 : o.id] = D,
            E[k == null ? void 0 : k.id] = k;
            const j = Ne(C == null ? void 0 : C.value, {
                pages: E
            });
            y({
                type: "SORT_PAGES",
                siteData: j,
                pageData: (z = (M = p == null ? void 0 : p.value) == null ? void 0 : M.context) == null ? void 0 : z.pageData
            })
        }
          , U = o=>({
            ...v == null ? void 0 : v.value.reduce((E,D)=>(E[D.id] = D,
            E), {}),
            ...o
        })
          , $ = Te(o=>{
            var E, D;
            const w = U(o);
            y({
                type: "UPDATE_SITE_DATA",
                siteData: Ne(C == null ? void 0 : C.value, {
                    pages: w
                }),
                pageData: (D = (E = p == null ? void 0 : p.value) == null ? void 0 : E.context) == null ? void 0 : D.pageData
            })
        }
        , 500)
          , P = ()=>{
            y({
                type: "FORM_FIELD_BLUR"
            })
        }
          , L = (o,w)=>{
            Qe({
                name: "delete-confirm",
                actions: !0
            }, {
                default: `
        <h2 class="mb-2 text-2xl font-bold text-red-600">
          Delete ${w || "Page"}?
        </h2>
        <p>
          You are about to delete the ${w} page. This action can't be undone.
        </p>
        <p class="mt-2 font-semibold text-lg">
          Are you sure you want to <span class="text-red-600">delete</span> the ${w} page?
        </p>
      `
            }, {
                confirm(E) {
                    window != null && window.confirm("Your page will now be deleted. Are you sure?") && (y({
                        type: "DELETE_PAGE",
                        pageId: o
                    }),
                    E())
                }
            })
        }
          , T = o=>{
            y({
                type: "DUPLICATE_PAGE",
                pageId: o
            })
        }
          , V = ()=>{
            n("show-content")
        }
          , c = o=>{
            if (o === (b == null ? void 0 : b.value))
                return V();
            l.push({
                path: `/sites/${g == null ? void 0 : g.value}/edit`,
                query: {
                    pageId: o,
                    editingMode: "content"
                }
            })
        }
        ;
        return (o,w)=>{
            const E = we
              , D = So
              , N = vo;
            return i(),
            f("div", $o, [(i(!0),
            f(Ke, null, Ye(s(v), (k,j)=>(i(),
            f("div", {
                key: k == null ? void 0 : k.id,
                class: "flex items-start gap-x-2"
            }, [a(Vt, {
                "enter-active-class": "transition ease-out duration-100",
                "enter-from-class": "transform opacity-0 scale-95",
                "enter-to-class": "transform opacity-100 scale-100",
                "leave-active-class": "transition ease-in duration-75",
                "leave-from-class": "transform opacity-100 scale-100",
                "leave-to-class": "transform opacity-0 scale-95"
            }, {
                default: u(()=>[a(N, {
                    page: k,
                    "site-id": s(g),
                    "is-current": k.id === s(b),
                    class: re(["flex-1", {
                        "pointer-events-none cursor-wait opacity-75": s(p).hasTag("loading")
                    }]),
                    disabled: ["savingSiteData"].some(s(p).matches),
                    onInput: s($),
                    onBlur: P,
                    onOpenPage: c,
                    onDelete: L,
                    onDuplicate: T,
                    onShowContent: V
                }, {
                    meta: u(()=>[e("ul", ko, [s(m) ? I("", !0) : (i(),
                    f("li", Io, [e("button", {
                        type: "button",
                        class: "text-brand-tertiary/70 hover:text-brand-primary text-xs flex font-semibold uppercase tracking-wider space-x-1",
                        title: "Edit page content",
                        onClick: M=>c(k == null ? void 0 : k.id)
                    }, [a(D, {
                        class: "w-4 h-4"
                    }), Co], 8, Eo)])), s(m) ? (i(),
                    f("li", Po, [e("button", {
                        class: "formkit-up-control hover:text-brand-primary disabled:hover:text-inherit disabled:opacity-25",
                        disabled: j === 0,
                        type: "button",
                        title: "",
                        onClick: Ee(M=>x(k, "up"), ["stop"])
                    }, Mo, 8, To)])) : I("", !0), s(m) ? (i(),
                    f("li", Ao, [e("button", {
                        class: "formkit-down-control hover:text-brand-primary disabled:hover:text-inherit disabled:opacity-25",
                        type: "button",
                        disabled: j === s(v).length - 1,
                        onClick: Ee(M=>x(k, "down"), ["stop"])
                    }, zo, 8, Uo)])) : I("", !0)])]),
                    default: u(()=>[s(p).hasTag("loading") ? (i(),
                    A(E, {
                        key: 0,
                        size: "sm"
                    })) : I("", !0)]),
                    _: 2
                }, 1032, ["page", "site-id", "is-current", "class", "disabled", "onInput"])]),
                _: 2
            }, 1024)]))), 128)), s(R) > 1 ? (i(),
            f("div", Ro, [a(s(Ps), {
                as: "div",
                class: "flex items-center space-x-3"
            }, {
                default: u(()=>[a(s(Es), {
                    as: "span"
                }, {
                    default: u(()=>[Oo]),
                    _: 1
                }), a(s(Cs), {
                    modelValue: s(m),
                    "onUpdate:modelValue": w[0] || (w[0] = k=>Xe(m) ? m.value = k : null),
                    class: re(["relative inline-flex flex-shrink-0 h-5 w-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary", [s(m) ? "bg-primary" : "bg-slate-200"]])
                }, {
                    default: u(()=>[e("span", {
                        "aria-hidden": "true",
                        class: re([s(m) ? "translate-x-3" : "translate-x-0", "pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                    }, null, 2)]),
                    _: 1
                }, 8, ["modelValue", "class"])]),
                _: 1
            })])) : I("", !0)])
        }
    }
}
  , Vo = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , No = e("path", {
    fill: "currentColor",
    d: "M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2H6.25ZM5.5 4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V4.25ZM7.75 6.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM7 16.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM7.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
}, null, -1)
  , Zo = [No];
function Ho(t, n) {
    return i(),
    f("svg", Vo, Zo)
}
const jo = {
    name: "fluent-document-one-page24-regular",
    render: Ho
}
  , Go = {
    class: "flex",
    "aria-label": "Breadcrumb",
    "data-testid": "site-editor-breadcrumbs"
}
  , Wo = {
    key: 0,
    role: "list",
    class: "flex items-center space-x-1"
}
  , Ko = e("span", null, "Pages", -1)
  , Yo = {
    key: 1,
    role: "list",
    class: "flex flex-wrap items-center"
}
  , Xo = e("span", null, "Pages", -1)
  , Qo = e("li", {
    class: "ml-0.5"
}, [e("svg", {
    class: "h-4 w-4 flex-shrink-0 text-slate-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
}, [e("path", {
    d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
})])], -1)
  , Jo = {
    __name: "SiteEditorBreadcrumbs",
    props: {
        pageName: {
            type: String,
            default: ""
        },
        mode: {
            type: Number,
            default: 0
        }
    },
    emits: ["show-pages", "show-content"],
    setup(t, {emit: n}) {
        return (l,r)=>{
            const p = jo
              , y = ge;
            return i(),
            f("nav", Go, [t.mode === 0 ? (i(),
            f("ol", Wo, [e("li", null, [a(y, {
                theme: "brand-link",
                class: "hover:!no-underline",
                size: "sm"
            }, {
                default: u(()=>[a(p, {
                    class: "w-4 h-4"
                }), Ko]),
                _: 1
            })])])) : (i(),
            f("ol", Yo, [e("li", null, [a(y, {
                theme: "brand-link",
                size: "sm",
                onClick: r[0] || (r[0] = g=>n("show-pages"))
            }, {
                default: u(()=>[a(p, {
                    class: "w-4 h-4"
                }), Xo]),
                _: 1
            })]), Qo, e("li", null, [e("button", {
                class: "text-sm font-normal text-slate-400 truncate w-auto",
                onClick: r[1] || (r[1] = Ee(g=>l.$emit("show-content"), ["prevent"]))
            }, [e("span", null, se(t.pageName), 1)])])]))])
        }
    }
}
  , ea = {
    class: "upgrade-banner",
    "data-testid": "upgrade-banner"
}
  , ta = {
    class: "flex justify-center px-2 sm:px-6 lg:px-8"
}
  , sa = {
    class: "pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-slate-800 px-6 rounded-xl py-3 sm:pl-4 sm:pr-3.5 text-center"
}
  , na = e("span", null, "Upgrade", -1)
  , oa = e("span", null, "Required", -1)
  , aa = [na, oa]
  , ia = {
    class: "flex-1 text-sm leading-6 text-white font-semibold tracking-tight"
}
  , la = e("span", null, "Upgrade", -1)
  , ra = {
    __name: "UpgradeBanner",
    props: {
        openAuthModal: {
            type: Function,
            required: !0
        },
        site: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const n = t
          , {onUpgrade: l} = Zt(n)
          , r = ()=>l(n.site);
        return (p,y)=>{
            const g = Ts
              , C = ge;
            return i(),
            f("div", ea, [e("div", ta, [e("div", sa, [e("button", {
                type: "button",
                class: "flex sm:flex-col text-sm gap-1 sm:gap-0 text-brand-secondary font-bold text-center [text-shadow:_0_1px_8px_rgb(255_255_255_/_20%)] hover:text-brand-primary hover:scale-110 transition-all duration-200 ease-in-out hover:[text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]",
                onClick: y[0] || (y[0] = (...b)=>s(l) && s(l)(...b))
            }, aa), e("p", ia, [he(p.$slots, "default")]), a(C, {
                theme: "brand-secondary",
                size: "xs",
                class: "flex-none md:m-0 hover:-rotate-2 hover:scale-110 transition-all duration-200 ease-in-out",
                onClick: r
            }, {
                default: u(()=>[a(g, {
                    class: "h-5 w-5",
                    "aria-hidden": "true"
                }), la]),
                _: 1
            })])])])
        }
    }
}
  , ca = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , da = e("g", {
    fill: "none"
}, [e("path", {
    d: "M7.47 12.28l.084.074a.75.75 0 0 0 .977-.073l2.72-2.72v6.69l.006.102a.75.75 0 0 0 .743.648l.102-.007a.75.75 0 0 0 .648-.743V9.56l2.72 2.721l.085.073a.75.75 0 0 0 .977-1.133l-4-4.002l-.085-.072a.75.75 0 0 0-.976.072L7.47 11.22l-.073.084a.75.75 0 0 0 .073.977z",
    fill: "currentColor"
}), e("path", {
    d: "M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
    fill: "currentColor"
})], -1)
  , ua = [da];
function ma(t, n) {
    return i(),
    f("svg", ca, ua)
}
const pa = {
    name: "fluent-arrow-up-circle24-regular",
    render: ma
}
  , _a = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , ha = e("path", {
    fill: "currentColor",
    d: "M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
}, null, -1)
  , ga = [ha];
function fa(t, n) {
    return i(),
    f("svg", _a, ga)
}
const va = {
    name: "material-symbols-add-circle-outline",
    render: fa
}
  , ba = {
    __name: "PageCreatorButton",
    props: {
        siteId: {
            type: String,
            required: !0
        },
        size: {
            type: String,
            default: "sm"
        },
        theme: {
            type: String,
            default: "brand-primary"
        }
    },
    emits: ["new-page-started"],
    setup(t, {emit: n}) {
        const l = t
          , r = Je({
            ...et,
            loader: ()=>tt(()=>import("./PageCreator-f1883fb2.js"), ["assets/PageCreator-f1883fb2.js", "assets/AnimatedLoader-f41ada9f.js", "assets/DomainSettingsButton-376d972c.js", "assets/index-69a2ddda.js", "assets/index-f697b78d.css", "assets/MagicWrap-b8cea90d.js", "assets/MagicWrap-edb6011e.css", "assets/AnimatedLoader-b914f61a.css", "assets/site-machine-85aa4cac.js", "assets/sites-4ce521e7.js", "assets/sites-4872b2d4.js", "assets/media-a5bc1cc2.js", "assets/index-ff27ab17.js", "assets/PageCreator-9583dca7.css"])
        })
          , p = ce("openAuthModal")
          , y = ()=>{
            n("new-page-started"),
            Qe({
                name: "page-creator",
                clickToClose: !1
            }, {
                default: {
                    component: r,
                    bind: {
                        openAuthModal: p,
                        siteId: l == null ? void 0 : l.siteId
                    }
                }
            })
        }
        ;
        return (g,C)=>{
            const b = ge;
            return i(),
            A(b, {
                theme: t.theme,
                size: t.size,
                "data-testid": "page-creator-button",
                onClick: y
            }, {
                default: u(()=>[a(s(va)), W(), e("span", null, [he(g.$slots, "default", {}, ()=>[W("New Page")])])]),
                _: 3
            }, 8, ["theme", "size"])
        }
    }
}
  , ya = {
    viewBox: "0 0 20 20",
    width: "1.2em",
    height: "1.2em"
}
  , wa = e("path", {
    fill: "currentColor",
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
    "clip-rule": "evenodd"
}, null, -1)
  , xa = [wa];
function Sa(t, n) {
    return i(),
    f("svg", ya, xa)
}
const $a = {
    name: "heroicons-solid-menu",
    render: Sa
};
const ie = t=>(Ge("data-v-875673bb"),
t = t(),
We(),
t)
  , ka = {
    class: "bg-slate-100 md:pb-4"
}
  , Ia = ie(()=>e("span", {
    class: "sm:hidden"
}, "Dash", -1))
  , Ea = ie(()=>e("span", {
    class: "hidden sm:inline"
}, "Dashboard", -1))
  , Ca = ie(()=>e("span", {
    class: "hidden sm:inline"
}, "New Page", -1))
  , Pa = ie(()=>e("span", {
    class: "hidden sm:inline"
}, "Save", -1))
  , Ta = ie(()=>e("span", null, "Publish", -1))
  , Da = {
    key: 1,
    class: "flex flex-col items-center py-8"
}
  , La = {
    key: 2,
    class: "max-w-lg mx-auto"
}
  , Ma = {
    class: "site-editor space-y-6 p-4 pb-6 md:pr-1 bg-slate-100 w-full md:sticky md:h-screen md:overflow-y-auto md:overflow-x-hidden"
}
  , Aa = {
    key: 1,
    class: "space-y-4 animate-pulse"
}
  , Ua = {
    key: 2,
    class: "space-y-4"
}
  , Ba = {
    class: "flex flex-wrap gap-x-1 justify-between"
}
  , Fa = ie(()=>e("span", null, "Settings", -1))
  , za = {
    class: "flex flex-col items-center space-y-4 md:items-start md:space-y-6 md:py-6"
}
  , Ra = ie(()=>e("hr", {
    class: "hidden md:block w-full"
}, null, -1))
  , Oa = {
    class: "@container flex flex-wrap items-center justify-between gap-2 w-full"
}
  , qa = {
    class: "flex flex-wrap items-center gap-x-2 @md:gap-x-4"
}
  , Va = ie(()=>e("span", {
    class: ""
}, "Save", -1))
  , Na = {
    __name: "SiteEditor",
    props: {
        siteData: {
            type: Object,
            default() {
                return {}
            }
        },
        siteId: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        var Ae, Ue;
        const n = t
          , l = Je({
            ...et,
            loader: ()=>tt(()=>import("./SiteSettings-e4e5f26b.js"), ["assets/SiteSettings-e4e5f26b.js", "assets/index-69a2ddda.js", "assets/index-f697b78d.css", "assets/save24-filled-1303ae36.js", "assets/libraries-f7478571.js", "assets/helpers-7cfbe709.js", "assets/libraries-2a34bc67.css", "assets/edit16-filled-2bb5cef4.js", "assets/site-machine-85aa4cac.js", "assets/sites-4ce521e7.js", "assets/sites-4872b2d4.js", "assets/media-a5bc1cc2.js", "assets/index-ff27ab17.js", "assets/SiteSettings-f8aef2e1.css"])
        })
          , r = ce("openAuthModal")
          , p = ce("$toast")
          , y = Ht()
          , [g] = Ie()
          , b = jt(ts).smaller("md")
          , S = Gt()
          , R = Ce()
          , {isLargeScreen: v} = Ds()
          , m = Wt("mx-editor-controls", !0)
          , [x,U] = Ie(b == null ? void 0 : b.value)
          , F = te(null)
          , $ = te(null)
          , P = te(null)
          , L = te(null)
          , T = {
            Pages: 0,
            Content: 1,
            Settings: 2
        }
          , V = {
            context: {
                editMode: !0,
                pageId: ((Ae = S == null ? void 0 : S.query) == null ? void 0 : Ae.pageId) || "index",
                currentUser: y == null ? void 0 : y.value,
                previewFrame: $,
                siteData: n == null ? void 0 : n.siteData,
                siteId: n == null ? void 0 : n.siteId,
                router: R,
                toast: p
            }
        }
          , {state: c, send: o, service: w} = Ze(hs, "Site", V);
        o("LOAD_SITE"),
        Kt("siteService", w);
        const E = Y(()=>{
            var _, d;
            return !((d = (_ = c == null ? void 0 : c.value) == null ? void 0 : _.context) != null && d.siteId)
        }
        )
          , D = Y(()=>{
            var _, d, h, Z, O, Q;
            return ((d = (_ = c == null ? void 0 : c.value) == null ? void 0 : _.context) == null ? void 0 : d.siteUrl) || ((Q = (O = (Z = (h = c == null ? void 0 : c.value) == null ? void 0 : h.context) == null ? void 0 : Z.site) == null ? void 0 : O.publish) == null ? void 0 : Q.url)
        }
        )
          , N = Y(()=>!!x.value)
          , k = X(c, "pageData", {})
          , j = Y(()=>{
            var _, d;
            return ((_ = k == null ? void 0 : k.value) == null ? void 0 : _.name) || ((d = k == null ? void 0 : k.value) == null ? void 0 : d.id)
        }
        )
          , M = te("")
          , z = te('<p style="font-family: sans-serif;text-align: center;color: #334155;">Loading preview&hellip;</p>')
          , q = Y(()=>M.value ? {
            src: M.value
        } : {
            srcdoc: z.value
        })
          , K = te(T.Pages)
          , ve = X(c, "site", {})
          , de = X(c, "site.upgrade.required", !1)
          , be = X(c, "site.upgrade.message", "You've enabled a paid feature. Please upgrade to continue.");
        let ue = "";
        const ne = {};
        let le;
        const G = _=>{
            K.value = _
        }
          , J = ()=>{
            var _, d;
            b != null && b.value || (x != null && x.value ? ue !== "" && (P.value.style.flex = ue) : (ue = (d = (_ = P == null ? void 0 : P.value) == null ? void 0 : _.style) == null ? void 0 : d.flex,
            P.value.style.flex = "1 1 100%"))
        }
          , ye = ()=>{
            U(),
            m.value = x.value,
            J()
        }
          , De = ()=>{
            x.value = !0,
            m.value = !0,
            J()
        }
          , ot = ()=>{
            x.value = !b.value,
            m.value === !1 && (x.value = !1,
            J())
        }
          , Le = async()=>{
            if (!y.value)
                return r();
            g.value = !0,
            o("SAVE_SITE_DATA"),
            w == null || w.onTransition(_=>{
                var d, h, Z;
                ["withSite.ready", "withoutSite.ready"].some((d = c == null ? void 0 : c.value) == null ? void 0 : d.matches) && ((Z = F == null ? void 0 : F.value) == null || Z.publish((h = _ == null ? void 0 : _.context) == null ? void 0 : h.siteDataId)),
                _ != null && _.matches("saveError") && (g.value = !1)
            }
            )
        }
          , at = ({site: _, siteUrl: d, siteId: h})=>{
            o({
                type: "SITE_PUBLISHED",
                site: _,
                siteId: h,
                siteUrl: d
            })
        }
          , it = ()=>{
            g.value = !1
        }
          , lt = ()=>{
            E.value = !1,
            g.value = !1
        }
          , xe = async()=>{
            if (!y.value)
                return r();
            o("SAVE_SITE_DATA")
        }
          , rt = async()=>{
            if (!y.value)
                return r();
            o("RETRY")
        }
          , ct = ()=>{
            o({
                type: "PREVIEW_FRAME_LOADED"
            }),
            ot()
        }
          , dt = ({origin: _, data: d})=>{
            if (_ !== _e)
                throw Error("Incorrect origin");
            o({
                type: "PREVIEW_FRAME_NAVIGATION",
                path: d == null ? void 0 : d.path
            })
        }
          , ut = ({origin: _, data: d})=>{
            if (_ !== _e)
                throw Error("Incorrect origin");
            o({
                type: "PREVIEW_FRAME_REWRITE_FIELD",
                mapping: d
            })
        }
          , mt = ({origin: _, data: d})=>{
            if (_ !== _e)
                throw Error("Incorrect origin");
            o({
                type: "PREVIEW_FRAME_RESELECT_IMAGE",
                mapping: d
            })
        }
          , pt = ({origin: _})=>{
            if (_ !== _e)
                throw Error("Incorrect origin");
            G(T.Settings),
            De()
        }
          , _t = ({origin: _, data: d})=>{
            if (_ !== _e)
                throw Error("Incorrect origin");
            G(T.Content),
            De();
            const {section: h, field: Z, index: O} = d;
            if (h === "")
                throw Error("Problem with section. Please contact support letting them know what happened");
            const Q = parseInt(O, 10)
              , H = document.getElementById(h)
              , ee = H == null ? void 0 : H.querySelector(".disclosure-button");
            if ((ee == null ? void 0 : ee.getAttribute("aria-expanded")) === "false" && ee.click(),
            Q > -1) {
                const me = H == null ? void 0 : H.querySelector(`[data-index="${O}"]`)
                  , pe = me == null ? void 0 : me.querySelector(".disclosure-button");
                (pe == null ? void 0 : pe.getAttribute("aria-expanded")) === "false" && pe.click(),
                Me(Z, me)
            } else
                Me(Z, H)
        }
          , Me = (_,d)=>{
            var H;
            const h = d.querySelector(`[name="${_}"]`)
              , Z = h == null ? void 0 : h.classList.contains("disclosure-button");
            Z && (h == null ? void 0 : h.getAttribute("aria-expanded")) === "false" && h.click(),
            setTimeout(()=>{
                h == null || h.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            , 10);
            const O = ["shadow", "shadow-brand-primary/50", "ring-brand-primary/50", "animate-pulse", "animate-thrice", "animate-duration-300"]
              , Q = ["rounded-lg"];
            Z ? ((H = h == null ? void 0 : h.closest(".disclosure-wrap")) == null || H.classList.add(...O, ...Q),
            setTimeout(()=>{
                var ee;
                (ee = h == null ? void 0 : h.closest(".disclosure-wrap")) == null || ee.classList.remove(...O, ...Q)
            }
            , 2600)) : (h == null || h.classList.add(...O),
            setTimeout(()=>{
                h == null || h.classList.remove(...O)
            }
            , 2600))
        }
          , ht = ()=>{
            G(T.Pages),
            xe()
        }
        ;
        G({
            pages: 0,
            content: 1,
            settings: 2
        }[((Ue = S == null ? void 0 : S.query) == null ? void 0 : Ue.editingMode) || 2]);
        const gt = (_,d,h)=>{
            if (!_)
                throw Error("Event is required");
            if (!d)
                throw Error("Config is required");
            if (!h)
                throw Error("Callback is required");
            return ss.on(_, d, h)
        }
          , ft = ()=>{
            Object.keys(ne).forEach(_=>{
                var d;
                (d = ne[_]) == null || d.cancel(),
                ne[_] = null
            }
            )
        }
          , vt = [{
            name: "previewFrameReady",
            callback: ct
        }, {
            name: "previewFrameNavigation",
            callback: dt
        }, {
            name: "previewFrameRewriteContent",
            callback: ut
        }, {
            name: "previewFrameReselectImage",
            callback: mt
        }, {
            name: "previewFrameEditContent",
            callback: _t
        }, {
            name: "previewFrameEditBrand",
            callback: pt
        }];
        return He(async()=>{
            var d;
            const _ = {
                window: (d = $ == null ? void 0 : $.value) == null ? void 0 : d.contentWindow,
                domain: _e
            };
            vt.forEach(h=>{
                ne[h.name] = ne[h.name] || gt(h.name, _, h.callback)
            }
            ),
            z.value = "",
            M.value = "/sites/preview",
            le = cs(L.value.$el, {
                stickyBitStickyOffset: 0
            })
        }
        ),
        Yt(()=>{
            ft(),
            le == null || le.cleanup()
        }
        ),
        (_,d)=>{
            var Fe, ze, Re, Oe;
            const h = $a
              , Z = nt
              , O = ge
              , Q = ba
              , H = gs
              , ee = pa
              , me = ns
              , pe = ra
              , Be = we
              , bt = os
              , yt = Jo
              , wt = fs
              , xt = qo
              , St = fn
              , $t = vs
              , kt = as
              , It = ds
              , Et = gn
              , Ct = an
              , Pt = is;
            return i(),
            f("div", ka, [a(me, {
                ref_key: "mainNavRef",
                ref: L,
                class: "mb-2.5 md:mb-4 z-[1]"
            }, Xt({
                pre: u(()=>{
                    var B;
                    return [["withSite", "withoutSite", "savingSiteData"].some((B = s(c)) == null ? void 0 : B.matches) ? (i(),
                    f("button", {
                        key: 0,
                        type: "button",
                        class: "md:-mr-1",
                        onClick: ye
                    }, [a(h, {
                        class: re(["transition-transform", {
                            "text-slate-400 rotate-90": !s(x)
                        }])
                    }, null, 8, ["class"])])) : I("", !0)]
                }
                ),
                _: 2
            }, [["withSite", "withoutSite", "savingSiteData"].some((Fe = s(c)) == null ? void 0 : Fe.matches) ? {
                name: "meta",
                fn: u(()=>{
                    var B, oe, qe;
                    return [["withSite", "savingSiteData"].some((B = s(c)) == null ? void 0 : B.matches) ? (i(),
                    A(O, {
                        key: 0,
                        theme: "brand-link",
                        size: "sm",
                        class: "p-0",
                        disabled: s(c).hasTag("loading") || s(g),
                        to: `/sites/${t.siteId}`
                    }, {
                        default: u(()=>[a(Z, {
                            class: "w-4 hidden sm:inline"
                        }), Ia, Ea]),
                        _: 1
                    }, 8, ["disabled", "to"])) : I("", !0), a(Q, {
                        theme: "brand-link-tertiary",
                        "site-id": t.siteId,
                        onNewPageStarted: d[0] || (d[0] = Ha=>G(T.Pages))
                    }, {
                        default: u(()=>[Ca]),
                        _: 1
                    }, 8, ["site-id"]), ["withSite", "savingSiteData"].some((oe = s(c)) == null ? void 0 : oe.matches) ? (i(),
                    A(O, {
                        key: 1,
                        loading: ["savingSiteData"].some((qe = s(c)) == null ? void 0 : qe.matches),
                        theme: "brand-link",
                        type: "button",
                        "loading-label": "Saving",
                        size: "sm",
                        class: "p-0 !text-teal-600",
                        "loading-class": "text-brand-primary",
                        disabled: s(c).hasTag("loading"),
                        onClick: xe
                    }, {
                        default: u(()=>[a(H, {
                            class: "w-4"
                        }), Pa]),
                        _: 1
                    }, 8, ["loading", "disabled"])) : I("", !0), a(O, {
                        loading: s(g),
                        theme: "brand-primary",
                        type: "button",
                        size: s(v) ? "base" : "xs",
                        "loading-label": "Publishing",
                        disabled: s(c).hasTag("loading") || s(de),
                        title: s(de) ? "Upgrade Required" : "",
                        "show-title": !0,
                        class: "transition duration-500 ease-in-out hover:scale-105",
                        onClick: Le
                    }, {
                        default: u(()=>[a(ee, {
                            class: "hidden sm:inline w-5"
                        }), Ta]),
                        _: 1
                    }, 8, ["loading", "size", "disabled", "title"])]
                }
                ),
                key: "0"
            } : void 0]), 1536), s(de) ? (i(),
            A(pe, {
                key: 0,
                class: "pt-2 pb-3 md:pb-4 md:pt-0",
                "open-auth-modal": s(r),
                site: s(ve),
                "site-id": t.siteId
            }, {
                default: u(()=>[W(se(s(be)), 1)]),
                _: 1
            }, 8, ["open-auth-modal", "site", "site-id"])) : I("", !0), s(c).hasTag("loading") ? (i(),
            f("div", Da, [a(Be, {
                label: "Loading your site..."
            })])) : I("", !0), ["loadError", "saveError"].some((ze = s(c)) == null ? void 0 : ze.matches) ? (i(),
            f("div", La, [a(bt, {
                title: "Oh no! It's an error 🙈",
                messages: (Oe = (Re = s(c)) == null ? void 0 : Re.context) == null ? void 0 : Oe.errors,
                type: "danger",
                "button-action": rt
            }, {
                default: u(()=>{
                    var B, oe;
                    return [W(se((oe = (B = s(c)) == null ? void 0 : B.context) == null ? void 0 : oe.errorMessage), 1)]
                }
                ),
                _: 1
            }, 8, ["messages"])])) : I("", !0), ["withSite.ready", "withoutSite.ready", "savingSiteData"].some(s(c).matches) ? (i(),
            A(Et, {
                key: 3,
                "hide-gutter": !s(N),
                class: "relative w-full"
            }, {
                1: u(()=>[Qt(e("aside", Ma, [s(c).hasTag("loadingData") ? (i(),
                A(Be, {
                    key: 0,
                    label: "Loading content...",
                    class: "mb-4"
                })) : I("", !0), s(c).hasTag("loadingData") ? (i(),
                f("div", Aa, [(i(),
                f(Ke, null, Ye(5, B=>e("div", {
                    key: `editor-controls-loader-${B}`,
                    class: re(["border border-slate-200 bg-slate-50 w-full h-10 rounded-lg", `opacity-${100 - B * 10}`])
                }, null, 2)), 64))])) : (i(),
                f("div", Ua, [e("div", Ba, [a(yt, {
                    "page-name": s(j),
                    mode: s(K),
                    onShowPages: d[1] || (d[1] = B=>G(T.Pages)),
                    onShowContent: d[2] || (d[2] = B=>G(T.Content))
                }, null, 8, ["page-name", "mode"]), a(O, {
                    theme: "brand-link",
                    size: "sm",
                    onClick: d[3] || (d[3] = B=>G(T.Settings))
                }, {
                    default: u(()=>[a(wt, {
                        class: "w-4"
                    }), Fa]),
                    _: 1
                })]), a(s(ws), {
                    "selected-index": s(K),
                    onChange: G
                }, {
                    default: u(()=>[a(s(xs), {
                        class: "hidden"
                    }, {
                        default: u(()=>[a(s(Se), null, {
                            default: u(()=>[W("Pages")]),
                            _: 1
                        }), a(s(Se), null, {
                            default: u(()=>[W("Content")]),
                            _: 1
                        }), a(s(Se), null, {
                            default: u(()=>[W("Settings")]),
                            _: 1
                        })]),
                        _: 1
                    }), a(s(Ss), null, {
                        default: u(()=>[a(s($e), {
                            unmount: !0
                        }, {
                            default: u(()=>[a(xt, {
                                disabled: s(g),
                                onShowContent: d[4] || (d[4] = B=>G(T.Content))
                            }, null, 8, ["disabled"])]),
                            _: 1
                        }), a(s($e), {
                            unmount: !1,
                            class: "space-y-2"
                        }, {
                            default: u(()=>[a(St, {
                                disabled: s(g)
                            }, null, 8, ["disabled"])]),
                            _: 1
                        }), a(s($e), {
                            unmount: !0
                        }, {
                            default: u(()=>[a(s(l), {
                                "open-auth-modal": s(r),
                                "site-service": s(w),
                                "show-title": !1
                            }, null, 8, ["open-auth-modal", "site-service"])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["selected-index"]), e("div", za, [Ra, e("div", Oa, [e("div", qa, [s(K) != T.Settings ? (i(),
                A(Q, {
                    key: 0,
                    theme: "brand-link-tertiary",
                    size: "sm",
                    "site-id": t.siteId,
                    onNewPageStarted: ht
                }, null, 8, ["site-id"])) : I("", !0), a(O, {
                    loading: ["savingSiteData"].some(s(c).matches),
                    theme: "brand-link",
                    type: "button",
                    "loading-label": "Saving",
                    size: "sm",
                    class: "p-0 !text-teal-600",
                    "loading-class": "text-brand-primary",
                    onClick: xe
                }, {
                    default: u(()=>[a(H, {
                        class: "w-4"
                    }), Va]),
                    _: 1
                }, 8, ["loading"])]), s(K) != T.Settings ? (i(),
                A($t, {
                    key: 0
                })) : I("", !0)])])]))], 512), [[Jt, s(N)]])]),
                2: u(()=>[e("section", {
                    ref_key: "editorPreview",
                    ref: P,
                    class: "w-full flex-1"
                }, [a(It, {
                    url: s(D),
                    "site-id": t.siteId,
                    class: re(["mx-2 md:mx-4 md:self-start", {
                        "md:ml-1": s(N)
                    }]),
                    onUrlClick: Le
                }, {
                    default: u(()=>[s(c).hasTag("loading") || s(c).hasTag("loadingData") ? (i(),
                    A(kt, {
                        key: 0,
                        label: s(c).hasTag("loadingData") ? "Loading editor..." : "Loading page...",
                        class: "my-6"
                    }, null, 8, ["label"])) : I("", !0), e("iframe", es({
                        ref_key: "previewFrame",
                        ref: $
                    }, s(q), {
                        class: ["w-full h-full h-screen", {
                            "border-t border-slate-200": s(c).hasTag("loading") || s(c).hasTag("loadingData")
                        }],
                        title: "Page Preview",
                        frameborder: "0"
                    }), null, 16)]),
                    _: 1
                }, 8, ["url", "site-id", "class"])], 512)]),
                _: 1
            }, 8, ["hide-gutter"])) : I("", !0), a(Pt, {
                modelValue: s(g),
                "onUpdate:modelValue": d[5] || (d[5] = B=>Xe(g) ? g.value = B : null),
                name: "onboarding",
                "click-to-close": !1,
                "esc-to-close": !1,
                "show-close": !1
            }, {
                default: u(()=>{
                    var B, oe;
                    return [a(Ct, {
                        ref_key: "publisher",
                        ref: F,
                        "site-data-id": (oe = (B = s(c)) == null ? void 0 : B.context) == null ? void 0 : oe.siteDataId,
                        "site-id": t.siteId,
                        onPublished: at,
                        onFailed: it,
                        onComplete: lt
                    }, null, 8, ["site-data-id", "site-id"])]
                }
                ),
                _: 1
            }, 8, ["modelValue"])])
        }
    }
}
  , ni = Pe(Na, [["__scopeId", "data-v-875673bb"]]);
export {ni as _};
//# sourceMappingURL=SiteEditor-f01fdb6c.js.map
