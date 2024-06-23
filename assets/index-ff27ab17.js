class _ extends Error {
    constructor(t, s, e) {
        const r = t.status || t.status === 0 ? t.status : ""
          , n = t.statusText || ""
          , a = `${r} ${n}`.trim()
          , i = a ? `status code ${a}` : "an unknown error";
        super(`Request failed with ${i}`),
        this.name = "HTTPError",
        this.response = t,
        this.request = s,
        this.options = e
    }
}
class w extends Error {
    constructor(t) {
        super("Request timed out"),
        this.name = "TimeoutError",
        this.request = t
    }
}
const l = o=>o !== null && typeof o == "object"
  , f = (...o)=>{
    for (const t of o)
        if ((!l(t) || Array.isArray(t)) && typeof t < "u")
            throw new TypeError("The `options` argument must be an object");
    return m({}, ...o)
}
  , g = (o={},t={})=>{
    const s = new globalThis.Headers(o)
      , e = t instanceof globalThis.Headers
      , r = new globalThis.Headers(t);
    for (const [n,a] of r.entries())
        e && a === "undefined" || a === void 0 ? s.delete(n) : s.set(n, a);
    return s
}
  , m = (...o)=>{
    let t = {}
      , s = {};
    for (const e of o)
        if (Array.isArray(e))
            Array.isArray(t) || (t = []),
            t = [...t, ...e];
        else if (l(e)) {
            for (let[r,n] of Object.entries(e))
                l(n) && r in t && (n = m(t[r], n)),
                t = {
                    ...t,
                    [r]: n
                };
            l(e.headers) && (s = g(s, e.headers),
            t.headers = s)
        }
    return t
}
  , C = typeof globalThis.AbortController == "function"
  , A = typeof globalThis.ReadableStream == "function"
  , k = typeof globalThis.FormData == "function"
  , R = ["get", "post", "put", "patch", "head", "delete"]
  , x = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*"
}
  , d = 2147483647
  , T = Symbol("stop")
  , E = o=>R.includes(o) ? o.toUpperCase() : o
  , S = ["get", "put", "head", "delete", "options", "trace"]
  , P = [408, 413, 429, 500, 502, 503, 504]
  , q = [413, 429, 503]
  , b = {
    limit: 2,
    methods: S,
    statusCodes: P,
    afterStatusCodes: q,
    maxRetryAfter: Number.POSITIVE_INFINITY
}
  , U = (o={})=>{
    if (typeof o == "number")
        return {
            ...b,
            limit: o
        };
    if (o.methods && !Array.isArray(o.methods))
        throw new Error("retry.methods must be an array");
    if (o.statusCodes && !Array.isArray(o.statusCodes))
        throw new Error("retry.statusCodes must be an array");
    return {
        ...b,
        ...o,
        afterStatusCodes: q
    }
}
  , j = async(o,t,s)=>new Promise((e,r)=>{
    const n = setTimeout(()=>{
        t && t.abort(),
        r(new w(o))
    }
    , s.timeout);
    s.fetch(o).then(e).catch(r).then(()=>{
        clearTimeout(n)
    }
    )
}
)
  , v = async o=>new Promise(t=>{
    setTimeout(t, o)
}
);
class p {
    constructor(t, s={}) {
        var e, r, n;
        if (this._retryCount = 0,
        this._input = t,
        this._options = {
            credentials: this._input.credentials || "same-origin",
            ...s,
            headers: g(this._input.headers, s.headers),
            hooks: m({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, s.hooks),
            method: E((e = s.method) !== null && e !== void 0 ? e : this._input.method),
            prefixUrl: String(s.prefixUrl || ""),
            retry: U(s.retry),
            throwHttpErrors: s.throwHttpErrors !== !1,
            timeout: typeof s.timeout > "u" ? 1e4 : s.timeout,
            fetch: (r = s.fetch) !== null && r !== void 0 ? r : globalThis.fetch.bind(globalThis)
        },
        typeof this._input != "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request))
            throw new TypeError("`input` must be a string, URL, or Request");
        if (this._options.prefixUrl && typeof this._input == "string") {
            if (this._input.startsWith("/"))
                throw new Error("`input` must not begin with a slash when using `prefixUrl`");
            this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"),
            this._input = this._options.prefixUrl + this._input
        }
        if (C && (this.abortController = new globalThis.AbortController,
        this._options.signal && this._options.signal.addEventListener("abort", ()=>{
            this.abortController.abort()
        }
        ),
        this._options.signal = this.abortController.signal),
        this.request = new globalThis.Request(this._input,this._options),
        this._options.searchParams) {
            const i = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString())
              , h = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, i);
            (k && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"]) && this.request.headers.delete("content-type"),
            this.request = new globalThis.Request(new globalThis.Request(h,this.request),this._options)
        }
        this._options.json !== void 0 && (this._options.body = JSON.stringify(this._options.json),
        this.request.headers.set("content-type", (n = this._options.headers.get("content-type")) !== null && n !== void 0 ? n : "application/json"),
        this.request = new globalThis.Request(this.request,{
            body: this._options.body
        }))
    }
    static create(t, s) {
        const e = new p(t,s)
          , r = async()=>{
            if (e._options.timeout > d)
                throw new RangeError(`The \`timeout\` option cannot be greater than ${d}`);
            await Promise.resolve();
            let i = await e._fetch();
            for (const h of e._options.hooks.afterResponse) {
                const u = await h(e.request, e._options, e._decorateResponse(i.clone()));
                u instanceof globalThis.Response && (i = u)
            }
            if (e._decorateResponse(i),
            !i.ok && e._options.throwHttpErrors) {
                let h = new _(i,e.request,e._options);
                for (const u of e._options.hooks.beforeError)
                    h = await u(h);
                throw h
            }
            if (e._options.onDownloadProgress) {
                if (typeof e._options.onDownloadProgress != "function")
                    throw new TypeError("The `onDownloadProgress` option must be a function");
                if (!A)
                    throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
                return e._stream(i.clone(), e._options.onDownloadProgress)
            }
            return i
        }
          , a = e._options.retry.methods.includes(e.request.method.toLowerCase()) ? e._retry(r) : r();
        for (const [i,h] of Object.entries(x))
            a[i] = async()=>{
                e.request.headers.set("accept", e.request.headers.get("accept") || h);
                const c = (await a).clone();
                if (i === "json") {
                    if (c.status === 204)
                        return "";
                    if (s.parseJson)
                        return s.parseJson(await c.text())
                }
                return c[i]()
            }
            ;
        return a
    }
    _calculateRetryDelay(t) {
        if (this._retryCount++,
        this._retryCount < this._options.retry.limit && !(t instanceof w)) {
            if (t instanceof _) {
                if (!this._options.retry.statusCodes.includes(t.response.status))
                    return 0;
                const e = t.response.headers.get("Retry-After");
                if (e && this._options.retry.afterStatusCodes.includes(t.response.status)) {
                    let r = Number(e);
                    return Number.isNaN(r) ? r = Date.parse(e) - Date.now() : r *= 1e3,
                    typeof this._options.retry.maxRetryAfter < "u" && r > this._options.retry.maxRetryAfter ? 0 : r
                }
                if (t.response.status === 413)
                    return 0
            }
            return .3 * 2 ** (this._retryCount - 1) * 1e3
        }
        return 0
    }
    _decorateResponse(t) {
        return this._options.parseJson && (t.json = async()=>this._options.parseJson(await t.text())),
        t
    }
    async _retry(t) {
        try {
            return await t()
        } catch (s) {
            const e = Math.min(this._calculateRetryDelay(s), d);
            if (e !== 0 && this._retryCount > 0) {
                await v(e);
                for (const r of this._options.hooks.beforeRetry)
                    if (await r({
                        request: this.request,
                        options: this._options,
                        error: s,
                        retryCount: this._retryCount
                    }) === T)
                        return;
                return this._retry(t)
            }
            throw s
        }
    }
    async _fetch() {
        for (const t of this._options.hooks.beforeRequest) {
            const s = await t(this.request, this._options);
            if (s instanceof Request) {
                this.request = s;
                break
            }
            if (s instanceof Response)
                return s
        }
        return this._options.timeout === !1 ? this._options.fetch(this.request.clone()) : j(this.request.clone(), this.abortController, this._options)
    }
    _stream(t, s) {
        const e = Number(t.headers.get("content-length")) || 0;
        let r = 0;
        return new globalThis.Response(new globalThis.ReadableStream({
            async start(n) {
                const a = t.body.getReader();
                s && s({
                    percent: 0,
                    transferredBytes: 0,
                    totalBytes: e
                }, new Uint8Array);
                async function i() {
                    const {done: h, value: u} = await a.read();
                    if (h) {
                        n.close();
                        return
                    }
                    if (s) {
                        r += u.byteLength;
                        const c = e === 0 ? 0 : r / e;
                        s({
                            percent: c,
                            transferredBytes: r,
                            totalBytes: e
                        }, u)
                    }
                    n.enqueue(u),
                    await i()
                }
                await i()
            }
        }))
    }
}
/*! MIT License © Sindre Sorhus */
const y = o=>{
    const t = (s,e)=>p.create(s, f(o, e));
    for (const s of R)
        t[s] = (e,r)=>p.create(e, f(o, r, {
            method: s
        }));
    return t.create = s=>y(f(s)),
    t.extend = s=>y(f(o, s)),
    t.stop = T,
    t
}
  , O = y()
  , F = O;
export {F as k};
//# sourceMappingURL=index-ff27ab17.js.map
