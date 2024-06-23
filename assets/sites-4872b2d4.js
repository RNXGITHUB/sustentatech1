import {l as v, b as C, c as D, g as $, u as X, d as I, e as p} from "./sites-4ce521e7.js";
import {b8 as o, bc as b, ch as U, b3 as c, an as h, bb as q, bu as z, ci as A, c9 as P, cj as k, ck as y, bd as L, cl as w, c7 as u, bR as S} from "./index-69a2ddda.js";
import {g as O} from "./media-a5bc1cc2.js";
const j = e=>[Object, Array].includes((e || {}).constructor) && !Object.entries(e || {}).length
  , G = (e={})=>{
    if (j(e))
        return e;
    const t = []
      , r = {};
    for (const a in e)
        t.push({
            sectionName: a,
            ...e[a]
        });
    return t.sort((a,s)=>a.sortOrder - s.sortOrder),
    t.forEach(a=>{
        r[a.sectionName] = a
    }
    ),
    r
}
  , M = async e=>C(e)
  , _ = async(e,t)=>{
    if (o(e))
        throw Error("siteDataId is required to load pageData");
    if (o(t))
        throw Error("pageId is required to load pageData");
    const r = await v(e, t);
    return {
        ...r,
        sections: G(r.sections)
    }
}
  , x = (e={},t,r)=>{
    for (let a in e)
        if (typeof e[a] == "object" && e[a] !== null)
            x(e[a], t, r);
        else if (typeof e[a] == "string" && b(["siteTitle", "siteName", "siteDescription", "review", "subtitle", "title", "testimonial", "content", "name"], a)) {
            const n = String(e[a]);
            b(n, t) && (e[a] = U(n, t, r))
        }
    return e
}
  , F = e=>{
    var n, g;
    if (o(e))
        throw Error("Site data is required to save site content");
    const t = (n = e == null ? void 0 : e.config) == null ? void 0 : n.gtmId;
    if (!o(t) && !/^GTM-[a-zA-Z0-9]{1,10}$/.test(t))
        throw Error("Google Tag Manager ID must be in the format GTM-XXXXXXX");
    const r = (g = e == null ? void 0 : e.config) == null ? void 0 : g.g4aId;
    if (!o(r) && !/^G-[a-zA-Z0-9]{4,12}$/.test(r))
        throw Error("Google Analytics ID must be in the format G-XXXXXXXXXX");
    const a = e == null ? void 0 : e.pages;
    if (!o(a))
        for (let l in a) {
            const i = a[l]
              , d = i == null ? void 0 : i.name;
            if (o(d))
                throw Error(`Name for page ${l} is required`);
            if (!/^[a-zA-Z0-9-_\p{L}/? :]*$/u.test(d))
                throw Error(`Name for page ${l} must only contain alphanumeric characters, spaces, dashes, colons, underscores, and letters from various languages`);
            const m = i == null ? void 0 : i.slug;
            if (o(m))
                throw Error(`Slug for page ${d} is required`);
            if (!/^[a-zA-Z0-9-\p{L}]*$/u.test(m))
                throw Error(`Slug for page ${d} must only contain alphanumeric characters, dashes, and letters from various languages`);
            if (m.length > 100)
                throw Error(`Slug for page ${d} must be less than 100 characters`)
        }
    const s = Object.values((e == null ? void 0 : e.pages) || {}).map(l=>l.slug);
    if (s.length !== new Set(s).size)
        throw Error("Page URLs must be unique. Change duplicate page URLs and try again.")
}
  , N = e=>{
    if (o(e))
        throw Error("Page data is required to page content");
    if (o(e == null ? void 0 : e.sections))
        throw Error("Unable to save page content as sections are missing")
}
  , H = async(e,t)=>{
    t != null && t.siteData && F(t.siteData),
    t != null && t.pageData && N(t.pageData);
    const r = {
        siteDataId: e,
        siteId: t == null ? void 0 : t.siteId,
        siteData: t == null ? void 0 : t.siteData
    };
    return t != null && t.pageData && (r.pageData = t.pageData),
    await c("saveSiteData", r)
}
  , E = (e,t,r)=>{
    const a = t == null ? void 0 : t.pageDataMapping;
    if (!a)
        return h.warn("Unable to update pageData as mapping is missing pageDataMapping", {
            pageData: e,
            mapping: t
        }),
        e;
    const s = `sections.${a}`;
    return q(e, s, r),
    e
}
  , Z = (e,t=600)=>new Promise(r=>{
    setTimeout(()=>r(e), t)
}
)
  , J = async(e,t,r,a)=>{
    h.log(`Attempting to find image for term '${e}'...`);
    const s = a != null && a.imageCache && (a == null ? void 0 : a.imageCache.length) > 0 ? await Z(a == null ? void 0 : a.imageCache, a == null ? void 0 : a.delay) : await O(e, {
        perPage: 7,
        orientation: "landscape"
    });
    if (!(s != null && s.length))
        return h.warn(`Unable to find image for term '${e}'...`, {
            pageData: t,
            mapping: r
        }),
        t;
    const n = s == null ? void 0 : s[0];
    return s.splice(0, 1),
    {
        pageData: await E(t, r, n.urls.regular),
        imageCache: s
    }
}
  , K = async(e,t,r)=>{
    const a = await c("regenerateField", {
        siteData: e,
        pageData: t,
        mapping: r
    });
    if (!(a != null && a.after))
        throw Error("Unable to regenerate field");
    return E(t, r, a == null ? void 0 : a.after)
}
  , Q = async e=>{
    var s, n;
    const t = (n = (s = z) == null ? void 0 : s.currentUser) == null ? void 0 : n.uid;
    if (A(t))
        throw new Error("uId is required to create a site");
    const {site: r, siteId: a} = await D(t, e);
    return {
        site: r,
        siteId: a
    }
}
  , Y = async e=>c("publish", {
    siteId: e
}, 2e5)
  , ee = async e=>c("unpublish", {
    siteId: e
})
  , te = async(e,t=!1)=>{
    try {
        const r = await $(e);
        if (r && t) {
            const a = await M(r == null ? void 0 : r.siteDataId);
            return {
                site: r,
                siteData: a
            }
        } else
            return {
                site: r
            }
    } catch (r) {
        console.error(r)
    }
}
  , ae = async(e,t)=>{
    try {
        return await X(e, t)
    } catch (r) {
        console.error(r)
    }
}
  , re = async e=>{
    const t = await I(e)
      , r = P(t, ["dateCreated"])
      , a = k(r);
    return y(a, s=>{
        var n;
        return {
            id: s.id,
            name: (s == null ? void 0 : s.name) || `Site ${s.id}`,
            subdomain: s == null ? void 0 : s.subdomain,
            logoUrl: (s == null ? void 0 : s.logoUrl) || "https://storage.googleapis.com/mixo-files/public/img/mixo-logo.svg",
            dateCreated: S(s.dateCreated),
            subscription: s == null ? void 0 : s.subscription,
            publishUrl: (n = s == null ? void 0 : s.publish) == null ? void 0 : n.url
        }
    }
    )
}
  , se = async e=>{
    const t = await p(e, 10)
      , r = L(t);
    return {
        lastSubmission: {
            date: w(u(r, "dateCreated")),
            age: S(u(r, "dateCreated"))
        },
        leads: y(t, a=>({
            ...a,
            date: w(u(a, "dateCreated"))
        }))
    }
}
  , ne = async e=>c("generateCsv", {
    siteId: e
})
  , R = e=>{
    if (!e || e.length < 3)
        throw Error("Subdomain must be at least 3 characters long");
    if (e.length > 65)
        throw Error(`Subdomain must be shorter than 60 characters long (currently ${e.length})`);
    if (!/^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$/.test(e))
        throw Error("Subdomain can only contain lowercase letters and numbers. It may contain dashes, but may not begin or end with a hyphen");
    return !0
}
  , T = e=>{
    if (!e || e.length < 3)
        throw Error("Domain must be at least 3 characters long");
    if (e.length > 63)
        throw Error("Domain must be shorter than 60 characters long");
    if (!/^[a-z0-9](?:[a-z0-9\-.]{0,61}[a-z0-9])?$/.test(e))
        throw Error("Domain can only contain lowercase letters and numbers. It may contain dashes, but may not begin or end with a hyphen");
    return !0
}
  , f = async(e,t)=>{
    if (u(t, "siteId") === void 0)
        throw Error("SiteId is required to setup domain");
    if (e === "Subdomain" && u(t, "subdomain") === void 0)
        throw Error("Subdomain must be provided to setup domain");
    if (e === "CustomDomain" && u(t, "customDomain") === void 0)
        throw Error("Site must be provided to setup domain");
    return {
        success: !0,
        data: await c("setupDomain", t)
    }
}
  , ce = async(e,t,r)=>{
    const a = `${t}.${r}`;
    return T(a),
    f("CustomDomain", {
        siteId: e,
        customDomain: a,
        customDomainSettings: {
            subdomain: t,
            domain: r
        }
    })
}
  , oe = async(e,t)=>(R(t),
f("Subdomain", {
    siteId: e,
    subdomain: t
}))
  , ie = async(e,t)=>f("Subfolder", {
    siteId: e,
    siteName: t
})
  , ue = async e=>c("checkCustomDomain", {
    siteId: e
})
  , le = async e=>c("duplicateSite", {
    siteId: e
})
  , de = async e=>c("archiveSite", {
    siteId: e
})
  , ge = async(e,t)=>c("subscription", {
    siteId: e,
    mode: "downgrade",
    subscriptionId: t
})
  , me = async(e,t)=>c("subscription", {
    siteId: e,
    mode: "assign",
    subscriptionId: t
});
export {_ as a, K as b, ge as c, de as d, me as e, x as f, M as g, le as h, re as i, Q as j, j as k, te as l, ne as m, se as n, G as o, Y as p, ae as q, J as r, H as s, ie as t, ee as u, oe as v, ue as w, ce as x};
//# sourceMappingURL=sites-4872b2d4.js.map
