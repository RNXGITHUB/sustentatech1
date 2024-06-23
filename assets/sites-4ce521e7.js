import {b5 as d, b6 as r, b7 as g, bB as y, cm as p, cn as c, co as i, cp as R, cq as l, bq as u, cr as S, cs as $, br as h, bs as m, bt as b, ct as v, cu as D, cv as w} from "./index-69a2ddda.js";
const x = async(e,t)=>{
    const s = u(r, "sites")
      , a = {
        siteDataId: t,
        dateCreated: new Date().toISOString(),
        users: {
            [e]: "owner"
        }
    };
    return {
        siteId: (await S(s, a)).id,
        site: a
    }
}
  , P = async e=>{
    try {
        const t = d(r, "sites", e)
          , s = await g(t);
        if (s.exists) {
            const a = s.data();
            return a.id = (a == null ? void 0 : a.id) || e,
            a
        } else
            throw new Error("Site not found")
    } catch (t) {
        console.error(t)
    }
}
  , q = async(e,t)=>{
    try {
        const s = d(r, "sites", e);
        return await $(s, t)
    } catch (s) {
        console.error(s)
    }
}
  , C = async(e,t=null,s=null)=>{
    const a = d(r, "sites", e);
    return y(a, t, s)
}
  , I = async e=>{
    const t = u(r, "sites")
      , s = h(t, m(`users.${e}`, "!=", !1))
      , a = await b(s)
      , o = [];
    return a.forEach(n=>{
        o.push({
            ...n.data(),
            id: n.id
        })
    }
    ),
    o
}
  , Q = async(e,t=1e3)=>{
    const s = u(r, "sites", e, "leads")
      , a = h(s, D("dateCreated", "desc"), v(t))
      , o = await b(a)
      , n = [];
    return o.forEach(f=>{
        n.push({
            ...f.data(),
            email: f.id
        })
    }
    ),
    n
}
  , W = async(e,t)=>{
    try {
        if (!e)
            throw Error("siteDataId must be provided to delete page");
        if (!t)
            throw Error("pageId must be provided to delete page");
        return p(c(i, `sites/${e}/siteData/pages/${t}`))
    } catch (s) {
        throw console.error(`Failed to delete page ${t} on site data ${e}`),
        s
    }
}
  , k = async e=>{
    const t = c(i);
    return w(l(t, `sites/${e}/siteData`)).then(s=>{
        if (s.exists())
            return s.val();
        throw new Error("Site data not found")
    }
    ).catch(s=>{
        console.error(s)
    }
    )
}
  , B = async(e,t=null,s=null)=>{
    const a = c(i);
    return R(l(a, `sites/${e}/siteData`), t, s)
}
  , F = async(e,t)=>{
    const s = c(i);
    return w(l(s, `sites/${e}/pageData/${t}`)).then(a=>{
        if (a.exists())
            return a.val();
        throw new Error("Page data not found")
    }
    ).catch(a=>{
        console.error(a)
    }
    )
}
;
export {C as a, k as b, x as c, I as d, Q as e, P as g, F as l, W as r, B as s, q as u};
//# sourceMappingURL=sites-4ce521e7.js.map
