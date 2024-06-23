import {a4 as C, aX as L, a$ as T, bR as U, o as p, c as E, k as m, m as R, f as P, Z as k, d as M, bl as H, b3 as I, ai as O, b9 as F, bb as h, bS as A, aj as S, bT as D, bU as b, bV as N, bI as V, bW as w, an as g, bX as B, aY as $, bY as f, bZ as G, bE as Z} from "./index-69a2ddda.js";
import {r as j, s as W, a as q} from "./sites-4ce521e7.js";
import {k as y, a as Y, f as X, o as z, b as K, r as J, s as Q, q as x, u as ee} from "./sites-4872b2d4.js";
const ae = {
    class: "publish-meta text-xs md:text-sm text-slate-400",
    "data-testid": "publish-meta"
}
  , te = ["disabled"]
  , se = {
    key: 1
}
  , ie = {
    key: 1,
    class: "text-xs md:text-sm"
}
  , re = {
    inheritAttrs: !1
}
  , De = Object.assign(re, {
    __name: "PublishMeta",
    setup(e) {
        const a = C("siteService")
          , {state: t, send: n} = L(a, "Site Publish Meta")
          , i = T(()=>{
            var l, u, s, d;
            return (d = (s = (u = (l = t == null ? void 0 : t.value) == null ? void 0 : l.context) == null ? void 0 : u.site) == null ? void 0 : s.publish) == null ? void 0 : d.datePublished
        }
        )
          , r = T(()=>{
            var l;
            return (l = t == null ? void 0 : t.value) == null ? void 0 : l.matches("withSite.unpublishing")
        }
        )
          , o = T(()=>i.value ? U(i.value) : "")
          , c = ()=>{
            window != null && window.confirm("Are you sure you want to unpublish? People won't be able to see your site anymore!") && n("UNPUBLISH")
        }
        ;
        return (l,u)=>{
            const s = H;
            return p(),
            E("div", ae, [m(o) ? (p(),
            E("p", R({
                key: 0,
                class: "flex flex-wrap gap-1"
            }, l.$attrs), [P("span", null, "Published " + k(m(o)), 1), P("button", {
                disabled: m(r),
                class: "text-brand-primary text-xs md:text-sm",
                type: "button",
                onClick: c
            }, [m(r) ? (p(),
            M(s, {
                key: 0,
                size: "sm",
                label: "Unpublishing..."
            })) : (p(),
            E("span", se, "(unpublish)"))], 8, te)], 16)) : (p(),
            E("p", ie, " Site not published yet "))])
        }
    }
})
  , ne = {
    viewBox: "0 0 32 32",
    width: "1.2em",
    height: "1.2em"
}
  , oe = P("path", {
    fill: "currentColor",
    d: "M16 11a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-.16 13.628c1.035.247 2.096.372 3.16.372a13.643 13.643 0 0 0 3.156-.375a1.478 1.478 0 0 0 1.13-1.276l.234-2.13a1.471 1.471 0 0 1 2.066-1.2l1.955.856a1.472 1.472 0 0 0 1.671-.345a14.245 14.245 0 0 0 3.156-5.443a1.478 1.478 0 0 0-.535-1.627l-1.729-1.275a1.481 1.481 0 0 1 .003-2.396l1.72-1.27a1.474 1.474 0 0 0 .537-1.63a14.199 14.199 0 0 0-3.157-5.443a1.48 1.48 0 0 0-1.674-.345l-1.946.856a1.483 1.483 0 0 1-2.067-1.2l-.236-2.12a1.476 1.476 0 0 0-1.147-1.283a15.123 15.123 0 0 0-3.127-.363a15.395 15.395 0 0 0-3.146.363a1.469 1.469 0 0 0-1.147 1.28l-.237 2.122a1.493 1.493 0 0 1-2.073 1.206l-1.946-.857a1.493 1.493 0 0 0-1.67.35a14.245 14.245 0 0 0-3.16 5.446a1.478 1.478 0 0 0 .536 1.625l1.725 1.272a1.488 1.488 0 0 1 0 2.397L3.167 18.47a1.477 1.477 0 0 0-.535 1.63a14.253 14.253 0 0 0 3.16 5.45a1.458 1.458 0 0 0 1.077.465c.203 0 .404-.042.591-.123l1.955-.859a1.485 1.485 0 0 1 2.065 1.2l.235 2.126a1.476 1.476 0 0 0 1.125 1.27Zm5.501-1.866a11.638 11.638 0 0 1-4.677 0l-.195-1.74a3.48 3.48 0 0 0-1.14-2.208a3.534 3.534 0 0 0-3.718-.6l-1.606.7a12.237 12.237 0 0 1-2.348-4.05l1.424-1.052a3.488 3.488 0 0 0 0-5.616L4.66 12.147a12.243 12.243 0 0 1 2.348-4.046l1.6.7a3.45 3.45 0 0 0 1.4.294a3.5 3.5 0 0 0 3.467-3.108l.194-1.747c.774-.15 1.56-.23 2.347-.24c.782.01 1.562.09 2.33.24l.186 1.74a3.48 3.48 0 0 0 1.137 2.216a3.525 3.525 0 0 0 3.727.6l1.6-.7a12.212 12.212 0 0 1 2.35 4.047l-1.423 1.046a3.48 3.48 0 0 0 0 5.62l1.422 1.05A12.273 12.273 0 0 1 25 23.901l-1.6-.7a3.473 3.473 0 0 0-4.866 2.81l-.193 1.75Z"
}, null, -1)
  , de = [oe];
function le(e, a) {
    return p(),
    E("svg", ne, de)
}
const be = {
    name: "fluent-settings32-regular",
    render: le
}
  , Se = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , ce = P("path", {
    fill: "currentColor",
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h9.964a3.25 3.25 0 0 1 2.299.952l2.035 2.035c.61.61.952 1.437.952 2.299v9.964A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM5.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H6v-5.25A2.25 2.25 0 0 1 8.25 12h7.5A2.25 2.25 0 0 1 18 14.25v5.25h.25c.69 0 1.25-.56 1.25-1.25V8.286c0-.465-.184-.91-.513-1.238l-2.035-2.035a1.75 1.75 0 0 0-.952-.49V7.25a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7 7.25V4.5H5.75Zm10.75 15v-5.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v5.25h9Zm-8-15v2.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V4.5h-6Z"
}, null, -1)
  , ue = [ce];
function ge(e, a) {
    return p(),
    E("svg", Se, ue)
}
const we = {
    name: "fluent-save24-regular",
    render: ge
}
  , fe = async()=>I("getPageTypes")
  , Oe = async(e,a,t)=>I("createPage", {
    siteId: e,
    pageType: a,
    inputs: t
})
  , he = async(e,a)=>I("duplicatePage", {
    siteId: e,
    pageId: a
})
  , pe = async(e="site",a)=>{
    var o;
    const i = await (await fetch("https://formschema-cirj42yhua-wl.a.run.app")).json();
    return e === "site" ? i == null ? void 0 : i[e] : (o = i == null ? void 0 : i.pages) == null ? void 0 : o[a == null ? void 0 : a.pageType]
}
  , Ee = {
    errors: []
}
  , _e = O({
    id: "page",
    initial: "loading",
    predictableActionArguments: !0,
    context: {
        ...Ee
    },
    states: {
        loading: {
            initial: "page",
            tags: "loadingData",
            states: {
                page: {
                    invoke: {
                        src: "loadPage",
                        onDone: {
                            target: "#schema",
                            actions: A((e,{data: a})=>({
                                type: "LOAD_PAGE_SUCCESS",
                                pageData: a
                            }))
                        },
                        onError: {
                            target: "#error",
                            actions: A((e,{data: a})=>({
                                type: "LOAD_PAGE_FAILURE",
                                error: a
                            }))
                        }
                    }
                },
                schema: {
                    id: "schema",
                    invoke: {
                        src: "loadSchema",
                        onDone: {
                            target: "#complete",
                            actions: A((e,{data: a})=>({
                                type: "LOAD_SCHEMA_SUCCESS",
                                schema: a
                            }))
                        },
                        onError: {
                            target: "#error",
                            actions: A((e,{data: a})=>({
                                type: "LOAD_SCHEMA_FAILURE",
                                error: a
                            }))
                        }
                    }
                }
            }
        },
        complete: {
            id: "complete",
            type: "final"
        },
        error: {
            id: "error",
            type: "final"
        }
    }
}, {
    actions: {
        ...F
    },
    services: {
        loadSchema: ({pageId: e, siteData: a=[]})=>{
            var t, n;
            return pe("page", {
                pageType: ((n = (t = a == null ? void 0 : a.pages) == null ? void 0 : t[e]) == null ? void 0 : n.type) || "IndexPage"
            })
        }
        ,
        loadPage: async({pageId: e, siteData: a, siteDataId: t})=>{
            var r, o, c;
            const i = !y((o = (r = a == null ? void 0 : a.pages) == null ? void 0 : r[e]) == null ? void 0 : o.sections) ? (c = a == null ? void 0 : a.pages) == null ? void 0 : c[e] : await Y(t, e);
            return y(a == null ? void 0 : a.shared) || h(i, "shared", a == null ? void 0 : a.shared),
            i
        }
    }
})
  , {send: me, cancel: Ae, pure: Pe} = G
  , ye = {
    childMachine: null,
    errors: [],
    site: null,
    siteId: null,
    unsaved: !1
}
  , Fe = O({
    id: "siteMachine",
    predictableActionArguments: !0,
    initial: "idle",
    context: {
        ...ye
    },
    states: {
        idle: {
            on: {
                LOAD_SITE: [{
                    cond: "hasSiteId",
                    target: "#withSite"
                }, {
                    target: "#withoutSite"
                }],
                SAVE_SITE_DATA: "#savingSiteData"
            }
        },
        withSite: {
            id: "withSite",
            initial: "loadingSite",
            entry: ["sortSectionOrder"],
            invoke: {
                src: "subscribeToSiteUpdates"
            },
            states: {
                loadingSite: {
                    tags: "loading",
                    on: {
                        SITE_SNAPSHOT: {
                            actions: ["assignSite", "assignIsPaidSite", "assignSiteDataId", "logSiteDetails"],
                            target: "ready.loadingSiteData"
                        },
                        SITE_SNAPSHOT_FAILED: {
                            actions: ["trackErrors", "assignErrors"],
                            target: "#loadError"
                        }
                    }
                },
                ready: {
                    invoke: {
                        src: "subscribeToSiteData"
                    },
                    initial: "idle",
                    states: {
                        loadingSiteData: {
                            tags: "loadingData",
                            on: {
                                SITE_DATA_SNAPSHOT: [{
                                    cond: "isEditMode",
                                    actions: ["assignSiteData", "assignLastSavedSiteData", "updateSharedData"],
                                    target: "loadingPage"
                                }, {
                                    actions: ["assignSiteData", "assignLastSavedSiteData", "updateSharedData"],
                                    target: "idle"
                                }],
                                SITE_DATA_SNAPSHOT_FAILED: {
                                    actions: ["trackErrors", "assignErrors"],
                                    target: "#loadError"
                                }
                            }
                        },
                        idle: {
                            on: {
                                LOAD_PAGE: {
                                    actions: ["assignPageId"],
                                    target: "loadingPage"
                                },
                                SAVE_SITE_DATA: "#savingSiteData",
                                SITE_PUBLISHED: {
                                    actions: ["assignSite", "assignSiteId", "assignSiteUrl"]
                                },
                                UPDATE_SITE_DATA: {
                                    actions: ["assignSiteData", "updateSharedData", "updatePreviewFrame"]
                                },
                                UPDATE_PAGE_DATA: {
                                    actions: ["assignPageData", "updateSharedData", "updatePreviewFrame"]
                                },
                                FORM_FIELD_BLUR: [{
                                    cond: "hasSiteDataChanged",
                                    actions: "autoSaveSiteData"
                                }, {
                                    cond: "hasPageDataChanged",
                                    actions: "autoSaveSiteData"
                                }],
                                SORT_PAGES: {
                                    actions: ["assignSiteData", "updateSharedData", "updatePreviewFrame", "autoSaveSiteData"]
                                },
                                SITE_SNAPSHOT: {
                                    actions: ["assignSite", "assignIsPaidSite"]
                                },
                                SITE_DATA_SNAPSHOT: {
                                    actions: "assignSiteData"
                                },
                                UNPUBLISH: "#unpublishing",
                                PREVIEW_FRAME_LOADED: {
                                    actions: ["updatePreviewFrame"]
                                },
                                UPDATE_SITE_NAME: {
                                    actions: "updateSiteName",
                                    target: "savingSiteAndContent"
                                },
                                DELETE_PAGE: {
                                    target: "deletingPage"
                                },
                                DUPLICATE_PAGE: {
                                    target: "duplicatingPage"
                                },
                                CREATE_PAGE_SUCCESS: {
                                    actions: {
                                        type: "showToast",
                                        toastType: "success"
                                    }
                                },
                                PREVIEW_FRAME_NAVIGATION: {
                                    actions: "redirectToRoute"
                                },
                                PREVIEW_FRAME_REWRITE_FIELD: {
                                    target: "rewritingField"
                                },
                                PREVIEW_FRAME_RESELECT_IMAGE: {
                                    target: "reselectingImage"
                                }
                            }
                        },
                        loadingPage: {
                            tags: "loadingData",
                            invoke: {
                                src: _e,
                                data: {
                                    pageId: (e,a)=>(a == null ? void 0 : a.pageId) || (e == null ? void 0 : e.pageId),
                                    siteData: ({siteData: e})=>e,
                                    siteDataId: ({siteDataId: e})=>e
                                },
                                onDone: "#withSite.ready.idle"
                            },
                            on: {
                                LOAD_PAGE_SUCCESS: [{
                                    actions: ["assignPageData", "assignLastSavedPageData", "sortSectionOrder", "updatePreviewFrame"]
                                }],
                                LOAD_PAGE_FAILURE: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Load page failed. Please retry.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "trackErrors"]
                                },
                                LOAD_SCHEMA_SUCCESS: {
                                    target: "#withSite.ready.idle",
                                    actions: ["assignFormSchema"]
                                },
                                LOAD_SCHEMA_FAILURE: {
                                    target: "#withSite.ready.idle",
                                    actions: [{
                                        type: "showToast",
                                        message: "Load page editor failed. Please reload the page.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "trackErrors"]
                                },
                                PREVIEW_FRAME_LOADED: {
                                    actions: ["updatePreviewFrame"]
                                }
                            }
                        },
                        unpublishing: {
                            id: "unpublishing",
                            tags: "loading",
                            invoke: {
                                src: "unpublishSite"
                            },
                            on: {
                                UNPUBLISH_SITE_SUCCESS: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Site Unpublished",
                                        toastType: "success",
                                        toastOptions: {
                                            duration: 5e3,
                                            dismissible: !0
                                        }
                                    }, "assignSitePublish"]
                                },
                                UNPUBLISH_SITE_FAILED: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Unpublish failed. Please try again.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "trackErrors"]
                                }
                            }
                        },
                        savingSiteAndContent: {
                            tags: "loading",
                            invoke: {
                                src: "saveSite",
                                onDone: "#savingSiteData",
                                onError: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Saving site failed. Please try again.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "assignErrors", "trackErrors"]
                                }
                            }
                        },
                        deletingPage: {
                            tags: "loading",
                            invoke: {
                                src: "deletePage",
                                onDone: {
                                    target: "#withSite.ready",
                                    actions: ["assignPageId", {
                                        type: "showToast",
                                        message: "Page deleted",
                                        toastType: "success",
                                        toastOptions: {
                                            duration: 5e3,
                                            dismissible: !0
                                        }
                                    }, "redirectToRoute"]
                                },
                                onError: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Delete page failed. Please try again.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "trackErrors"]
                                }
                            },
                            on: {
                                SITE_DATA_SNAPSHOT: {
                                    actions: ["assignSiteData", "updateSharedData", "updatePreviewFrame"]
                                }
                            }
                        },
                        duplicatingPage: {
                            tags: "loading",
                            invoke: {
                                src: "duplicatePage",
                                onDone: {
                                    target: "#withSite.ready",
                                    actions: ["assignPageId", {
                                        type: "showToast",
                                        message: "Page duplicated",
                                        toastType: "success",
                                        toastOptions: {
                                            duration: 5e3,
                                            dismissible: !0
                                        }
                                    }]
                                },
                                onError: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "showToast",
                                        message: "Duplicate page failed. Please try again.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 0,
                                            dismissible: !0
                                        }
                                    }, "trackErrors"]
                                }
                            },
                            on: {
                                SITE_DATA_SNAPSHOT: {
                                    actions: ["assignSiteData", "updateSharedData", "updatePreviewFrame"]
                                }
                            }
                        },
                        rewritingField: {
                            tags: "loadingData",
                            entry: [{
                                type: "assignRegeneratingContent",
                                value: !0
                            }, "updatePreviewFrame"],
                            invoke: {
                                src: "rewriteField",
                                onDone: {
                                    target: "#withSite.ready",
                                    actions: ["assignPageData", {
                                        type: "assignRegeneratingContent",
                                        value: !1
                                    }, "updateSharedData", "updatePreviewFrame"]
                                },
                                onError: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "assignRegeneratingContent",
                                        value: !1
                                    }, "updatePreviewFrame", {
                                        type: "showToast",
                                        message: "Something went wrong with rewriting this content 🤔. Contact support team if it continues to fail.",
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 1e4,
                                            dismissible: !0
                                        }
                                    }]
                                }
                            }
                        },
                        reselectingImage: {
                            tags: "loadingData",
                            entry: [{
                                type: "assignRegeneratingContent",
                                value: !0
                            }, "updatePreviewFrame"],
                            invoke: {
                                src: "reselectImages",
                                onDone: {
                                    target: "#withSite.ready",
                                    actions: ["assignPageData", S({
                                        imageCache: (e,{data: a})=>a.imageCache
                                    }), {
                                        type: "assignRegeneratingContent",
                                        value: !1
                                    }, "updateSharedData", "updatePreviewFrame"]
                                },
                                onError: {
                                    target: "#withSite.ready",
                                    actions: [{
                                        type: "assignRegeneratingContent",
                                        value: !1
                                    }, "updatePreviewFrame", {
                                        type: "showToast",
                                        message: `There's a problem getting more images for your site. Please contact support 
team and we can assist. In the interim, you can still reselect image manually.`,
                                        toastType: "error",
                                        toastOptions: {
                                            duration: 9500,
                                            dismissible: !0
                                        }
                                    }, "assignErrors", "trackErrors"]
                                }
                            }
                        }
                    }
                }
            }
        },
        withoutSite: {
            id: "withoutSite",
            entry: "sortSectionOrder",
            initial: "ready",
            states: {
                ready: {
                    on: {
                        SAVE_SITE_DATA: "#savingSiteData",
                        SITE_PUBLISHED: {
                            target: "#withSite",
                            actions: ["assignSite", "assignSiteId", "assignSiteUrl"]
                        },
                        UPDATE_SITE_DATA: {
                            actions: ["assignSiteData", "updateSharedData", "updatePreviewFrame"]
                        },
                        PREVIEW_FRAME_LOADED: {
                            actions: ["updatePreviewFrame"]
                        }
                    }
                }
            }
        },
        savingSiteData: {
            id: "savingSiteData",
            entry: ["resetErrors", "assignSaveId", {
                type: "showToast",
                message: "Saving site...",
                toastType: "info",
                toastOptions: {
                    duration: 0,
                    dismissible: !1
                },
                dismissPreviousToast: !0
            }],
            invoke: {
                src: "saveSiteData"
            },
            on: {
                SAVE_SITE_SUCCESS: [{
                    cond: "isCurrentSaveEvent",
                    target: "#withSite.ready",
                    actions: ["assignSiteData", "assignLastSavedSiteData", "assignLastSavedPageData", "updateSharedData", "updatePreviewFrame", {
                        type: "showToast",
                        message: "Site saved!",
                        toastType: "success",
                        toastOptions: {
                            duration: 1500,
                            dismissible: !0
                        },
                        dismissPreviousToast: !0
                    }]
                }],
                SAVE_SITE_FAILED: [{
                    target: "#withSite.ready",
                    actions: [{
                        type: "showToast",
                        toastType: "error",
                        toastOptions: {
                            duration: 7e3,
                            dismissible: !0
                        },
                        dismissPreviousToast: !0
                    }, "assignErrors", "trackErrors"]
                }],
                SAVE_SITE_DATA: {
                    target: "#savingSiteData",
                    internal: !1
                },
                FORM_FIELD_BLUR: [{
                    cond: "hasSiteDataChanged",
                    actions: "autoSaveSiteData"
                }, {
                    cond: "hasPageDataChanged",
                    actions: "autoSaveSiteData"
                }]
            }
        },
        loadError: {
            id: "loadError",
            on: {
                RETRY: "#withSite.loadingSite"
            }
        }
    }
}, {
    actions: {
        ...F,
        assignFormSchema: S({
            formSchema: (e,{schema: a})=>a
        }),
        assignLastSavedPageData: S((e,a)=>({
            lastSavedPageData: D(e, a)
        })),
        assignLastSavedSiteData: S((e,a)=>({
            lastSavedSiteData: b(e, a)
        })),
        assignPageId: S({
            pageId: (e,{pageId: a})=>{
                var t;
                return a || (e != null && e.pageId ? e.pageId : N((t = e == null ? void 0 : e.siteData) == null ? void 0 : t.pages))
            }
        }),
        assignSaveId: S({
            saveId: ()=>`save-${Date.now()}`
        }),
        assignSite: S((e,{site: a})=>({
            site: a
        })),
        assignRegeneratingContent: S({
            regeneratingContent: (e,a,{action: t=!1})=>t == null ? void 0 : t.value
        }),
        assignSiteData: S((e,a)=>({
            siteData: b(e, a)
        })),
        assignSiteDataId: S((e,{siteDataId: a})=>({
            siteDataId: a
        })),
        assignSiteId: S((e,{siteId: a})=>({
            siteId: a
        })),
        assignPageData: S((e,a)=>({
            pageData: D(e, a)
        })),
        assignSitePublish: S(({site: e},{publishData: a})=>{
            const t = {
                ...e
            };
            return t.publish = a,
            {
                site: t
            }
        }
        ),
        assignIsPaidSite: S((e,{site: a})=>{
            var t;
            return {
                isPaidSite: !!((t = a == null ? void 0 : a.subscription) != null && t.planId)
            }
        }
        ),
        assignSiteUrl: S((e,{siteUrl: a})=>({
            siteUrl: a
        })),
        autoSaveSiteData: Pe(({siteData: e})=>{
            var a;
            if ((a = e == null ? void 0 : e.config) != null && a.autoSaveSite)
                return [Ae("autoSaveDebounce"), me("SAVE_SITE_DATA", {
                    delay: 9200,
                    id: "autoSaveDebounce"
                })]
        }
        ),
        updateSharedData: S({
            siteData: ({siteData: e, pageData: a})=>{
                var o, c, l, u;
                const t = V(e)
                  , n = []
                  , i = [];
                w(t == null ? void 0 : t.pages, (s,d)=>{
                    const _ = {
                        id: d,
                        slug: d,
                        type: "IndexPage",
                        name: Z(d),
                        showInHeader: !1,
                        showInFooter: !1,
                        sortOrder: 0
                    }
                      , v = {
                        link: "/" + (s == null ? void 0 : s.slug) || (s == null ? void 0 : s.id),
                        label: s == null ? void 0 : s.name,
                        id: d,
                        sortOrder: s == null ? void 0 : s.sortOrder
                    };
                    (s == null ? void 0 : s.disabled) !== !0 && (s != null && s.showInHeader) && n.push(v),
                    (s == null ? void 0 : s.disabled) !== !0 && (s != null && s.showInFooter) && i.push(v),
                    h(t, `pages.${d}`, {
                        ..._,
                        ...s
                    })
                }
                );
                const r = {
                    ...e == null ? void 0 : e.shared,
                    ...a == null ? void 0 : a.shared
                };
                return h(t, "shared", r),
                h(t, "shared.header.visible", ((c = (o = a == null ? void 0 : a.shared) == null ? void 0 : o.header) == null ? void 0 : c.visible) || !0),
                n.sort((s,d)=>s.sortOrder - d.sortOrder),
                h(t, "shared.header.navItems", n),
                h(t, "shared.footer.visible", ((u = (l = a == null ? void 0 : a.shared) == null ? void 0 : l.footer) == null ? void 0 : u.visible) || !0),
                i.sort((s,d)=>s.sortOrder - d.sortOrder),
                h(t, "shared.footer.navItems", i),
                t
            }
        }),
        logSiteDetails: ({siteId: e},{siteDataId: a})=>{
            g.groupCollapsed("🔥🗄️%c Site DB Links:", "color: #FFA611"),
            a && g.log("RTDB: ", `https://console.firebase.google.com/u/0/project/mixo-app-qa/database/mixo-app-qa-default-rtdb/data/sites/${a}`),
            e && g.log("Firestore: ", `https://console.firebase.google.com/u/0/project/mixo-app-qa/firestore/data/~2Fsites~${e}`),
            g.groupEnd()
        }
        ,
        updateSiteName: S({
            siteData: ({site: e, siteData: a},{siteName: t})=>X(a, e == null ? void 0 : e.name, t),
            site: ({site: e},{siteName: a})=>({
                ...e,
                name: a
            })
        }),
        redirectToRoute: ({router: e, siteData: a, siteId: t},{path: n})=>{
            if (!e) {
                g.warn("No router found to redirect to route");
                return
            }
            let i = n ? B(a == null ? void 0 : a.pages, n) : "index";
            e.push({
                name: "sites-id-edit",
                params: {
                    id: t
                },
                query: {
                    pageId: i,
                    editingMode: "content"
                }
            })
        }
        ,
        sortSectionOrder: S((e,a)=>{
            const t = (e == null ? void 0 : e.pageData) || (a == null ? void 0 : a.pageData);
            return t != null && t.sections && (t.sections = z(t.sections)),
            {
                pageData: t
            }
        }
        )
    },
    services: {
        deletePage: ({siteDataId: e},{pageId: a})=>j(e, a),
        duplicatePage: ({siteId: e},{pageId: a})=>he(e, a),
        rewriteField: ({pageData: e, siteData: a},{mapping: t})=>async()=>({
            pageData: (await K(a, e, t)).after,
            siteData: a
        }),
        reselectImages: ({pageData: e, imageCache: a},{mapping: t})=>async()=>{
            var r;
            g.log("imageCache", a);
            const n = ((r = e == null ? void 0 : e.model) == null ? void 0 : r.ImageSearch) || "business"
              , i = await J(n, e, t, {
                imageCache: a
            });
            return {
                pageData: i.after,
                imageCache: i.imageCache
            }
        }
        ,
        saveSiteData: e=>async a=>{
            try {
                const t = e == null ? void 0 : e.siteId
                  , n = e == null ? void 0 : e.siteDataId
                  , i = e == null ? void 0 : e.pageData
                  , r = e == null ? void 0 : e.siteData
                  , o = e == null ? void 0 : e.saveId;
                !y(i) && y(i == null ? void 0 : i.id) && (i.id = e == null ? void 0 : e.pageId),
                await Q(n, {
                    siteData: r,
                    pageData: i,
                    siteId: t
                }),
                a({
                    type: "SAVE_SITE_SUCCESS",
                    siteData: r,
                    siteDataId: n,
                    pageData: i,
                    saveId: o
                });
                return
            } catch (t) {
                a({
                    type: "SAVE_SITE_FAILED",
                    message: "Failed to save content",
                    error: t
                })
            }
        }
        ,
        saveSite: ({siteId: e, site: a})=>x(e, a),
        subscribeToSiteData: ({router: e, siteId: a, siteDataId: t})=>async n=>{
            const r = $(l=>{
                var u;
                if (l.exists()) {
                    const s = l == null ? void 0 : l.val();
                    w(s == null ? void 0 : s.pages, d=>{
                        var _;
                        ((_ = d == null ? void 0 : d.metaData) == null ? void 0 : _.status) === "generated" && n({
                            type: "CREATE_PAGE_SUCCESS",
                            toastMsg: ((d == null ? void 0 : d.name) || "Page") + " has been generated successfully. Open →",
                            toastOptions: {
                                duration: 3e3,
                                dismissible: !0,
                                queue: !0,
                                onClick: ()=>{
                                    e.push({
                                        name: "sites-id-edit",
                                        params: {
                                            id: a
                                        },
                                        query: {
                                            pageId: d == null ? void 0 : d.id
                                        }
                                    })
                                }
                            }
                        })
                    }
                    ),
                    typeof ((u = s == null ? void 0 : s.config) == null ? void 0 : u.autoSaveSite) > "u" && (s.config.autoSaveSite = !0),
                    n({
                        type: "SITE_DATA_SNAPSHOT",
                        siteData: s
                    })
                } else
                    n({
                        type: "SITE_DATA_SNAPSHOT_FAILED",
                        errorMessage: "Site data not found"
                    })
            }
            , 1e3)
              , c = await W(t, r, l=>{
                (l == null ? void 0 : l.code) === "permission-denied" ? g.warn("Site data subscription failed as permission was denied") : n({
                    type: "SITE_DATA_SNAPSHOT_FAILED",
                    errorMessage: "Site data not found"
                })
            }
            );
            return ()=>c()
        }
        ,
        subscribeToSiteUpdates: ({siteId: e})=>async a=>{
            const i = await q(e, r=>{
                if (r.exists()) {
                    const o = r == null ? void 0 : r.data();
                    o.id = (o == null ? void 0 : o.id) || e,
                    a({
                        type: "SITE_SNAPSHOT",
                        site: o,
                        siteDataId: o == null ? void 0 : o.siteDataId
                    })
                } else
                    a({
                        type: "SITE_SNAPSHOT_FAILED",
                        errorMessage: "Site not found"
                    })
            }
            , r=>{
                (r == null ? void 0 : r.code) === "permission-denied" ? a({
                    type: "SITE_SNAPSHOT_FAILED",
                    errorMessage: `You do not have permission to access this site (#${e}). Check you have logged in with the correct account.`,
                    error: r
                }) : a({
                    type: "SITE_SNAPSHOT_FAILED",
                    errorMessage: `Failed to load site. Please contact support and provide them with the site id ${e}.`,
                    error: r
                })
            }
            );
            return ()=>i()
        }
        ,
        unpublishSite: ({siteId: e})=>async a=>{
            try {
                const t = await ee(e);
                a({
                    type: "UNPUBLISH_SITE_SUCCESS",
                    publishData: t
                })
            } catch (t) {
                a({
                    type: "UNPUBLISH_SITE_FAILED",
                    message: "Failed to unpublish site",
                    error: t
                })
            }
        }
    },
    guards: {
        hasPageDataChanged: ({lastSavedPageData: e, pageData: a})=>f(e, a) ? (g.log("ℹ️ Page data has not changed. No actions taken (Site Machine: hasPageDataChanged)"),
        !1) : !0,
        hasSiteDataChanged: ({lastSavedSiteData: e, siteData: a})=>f(e, a) ? (g.log("ℹ️ Site data has not changed. No actions taken (Site Machine: hasSiteDataChanged)"),
        !1) : !0,
        hasSiteId: ({siteId: e})=>e && e !== "" && typeof e == "string",
        isCurrentSaveEvent: ({saveId: e},{saveId: a})=>e === a,
        isEditMode: ({editMode: e})=>e === !0
    }
});
export {Fe as S, we as _, be as a, De as b, Oe as c, fe as d, pe as g};
//# sourceMappingURL=site-machine-85aa4cac.js.map
