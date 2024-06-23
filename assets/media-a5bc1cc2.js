import {k as W} from "./index-ff27ab17.js";
import {c7 as y, b3 as Z} from "./index-69a2ddda.js";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var z = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
  , Y = /\\([\u000b\u0020-\u00ff])/g
  , L = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/
  , ee = te;
function te(e) {
    if (!e)
        throw new TypeError("argument string is required");
    var t = typeof e == "object" ? re(e) : e;
    if (typeof t != "string")
        throw new TypeError("argument string is required to be a string");
    var r = t.indexOf(";")
      , n = r !== -1 ? t.slice(0, r).trim() : t.trim();
    if (!L.test(n))
        throw new TypeError("invalid media type");
    var a = new ne(n.toLowerCase());
    if (r !== -1) {
        var o, i, s;
        for (z.lastIndex = r; i = z.exec(t); ) {
            if (i.index !== r)
                throw new TypeError("invalid parameter format");
            r += i[0].length,
            o = i[1].toLowerCase(),
            s = i[2],
            s.charCodeAt(0) === 34 && (s = s.slice(1, -1),
            s.indexOf("\\") !== -1 && (s = s.replace(Y, "$1"))),
            a.parameters[o] = s
        }
        if (r !== t.length)
            throw new TypeError("invalid parameter format")
    }
    return a
}
function re(e) {
    var t;
    if (typeof e.getHeader == "function" ? t = e.getHeader("content-type") : typeof e.headers == "object" && (t = e.headers && e.headers["content-type"]),
    typeof t != "string")
        throw new TypeError("content-type header is missing from object");
    return t
}
function ne(e) {
    this.parameters = Object.create(null),
    this.type = e
}
function u() {
    return u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    u.apply(this, arguments)
}
function d(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), a, o;
    for (o = 0; o < n.length; o++)
        a = n[o],
        !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}
var ae = E(function(e) {
    return typeof e == "string" ? e : null
})
  , f = function(t) {
    return t != null
};
function E(e) {
    return function(t) {
        return f(e(t))
    }
}
var oe = function(t) {
    return t.length > 0
}
  , m = function(t) {
    return Object.keys(t).reduce(function(r, n) {
        var a, o = t[n];
        return u({}, r, f(o) ? (a = {},
        a[n] = o,
        a) : {})
    }, {})
};
function O() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    var n = t.length - 1;
    return function() {
        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
            o[i] = arguments[i];
        for (var s = t[0].apply(this, o), v = 1; v <= n; v++)
            s = t[v].call(this, s);
        return s
    }
}
var ie = E(function(e) {
    return f(e) && typeof e == "object" && !Array.isArray(e) ? e : null
}), se = E(function(e) {
    return Array.isArray(e) && e.every(ae) && oe(e) ? e : null
}), ce = E(function(e) {
    return ie(e) && "errors"in e && se(e.errors) ? {
        errors: e.errors
    } : null
}), ue = function(t) {
    return ce(t) ? {
        errors: t.errors,
        source: "api"
    } : {
        errors: ["Responded with a status code outside the 2xx range, and the response body is not recognisable."],
        source: "decoding"
    }
}, I = function(t) {
    this.message = t
}, le = "content-type", he = "application/json", de = function(t) {
    var r = t.headers.get(le);
    return f(r) && ee(r).type === he
}, j = function(t) {
    if (de(t))
        return t.json().catch(function(r) {
            throw new I("unable to parse JSON response.")
        });
    throw new I("expected JSON response from server.")
}, pe = function(t) {
    return function(r) {
        return (r.ok ? t({
            response: r
        }).then(function(n) {
            return {
                type: "success",
                status: r.status,
                response: n,
                originalResponse: r
            }
        }) : j(r).then(function(n) {
            return u({
                type: "error",
                status: r.status
            }, ue(n), {
                originalResponse: r
            })
        })).catch(function(n) {
            if (n instanceof I)
                return {
                    type: "error",
                    source: "decoding",
                    status: r.status,
                    originalResponse: r,
                    errors: [n.message]
                };
            throw n
        })
    }
}, h = function() {
    return function(t) {
        var r = t.response;
        return j(r)
    }
}, me = function(t) {
    return function(r) {
        Object.keys(t).forEach(function(n) {
            return r.searchParams.set(n, t[n].toString())
        })
    }
}, fe = function(t) {
    return function(r) {
        r.pathname === "/" ? r.pathname = t : r.pathname += t
    }
}, ve = function(t) {
    var r = t.pathname
      , n = t.query;
    return function(a) {
        var o = new URL(a);
        return fe(r)(o),
        me(n)(o),
        o.toString()
    }
}, ye = function(t) {
    var r = {};
    return t.forEach(function(n, a) {
        r[a] = n
    }),
    r
}, Pe = function(t) {
    var r = new URL(t)
      , n = r.pathname
      , a = r.searchParams
      , o = ye(a);
    return {
        query: o,
        pathname: n === "/" ? void 0 : n
    }
}, l = function(t) {
    return function(r, n) {
        n === void 0 && (n = {});
        var a = t(r)
          , o = a.headers
          , i = a.query
          , s = d(a, ["headers", "query"]);
        return u({}, s, n, {
            query: i,
            headers: u({}, o, n.headers)
        })
    }
}, c = function(t) {
    return t
}, Re = function(t) {
    var r = t.accessKey
      , n = t.apiVersion
      , a = n === void 0 ? "v1" : n
      , o = t.apiUrl
      , i = o === void 0 ? "https://api.unsplash.com" : o
      , s = t.headers
      , v = t.fetch
      , b = d(t, ["accessKey", "apiVersion", "apiUrl", "headers", "fetch"]);
    return function(F) {
        var x = F.handleResponse
          , K = F.handleRequest;
        return O(K, function(R) {
            var B = R.pathname
              , Q = R.query
              , k = R.method
              , X = k === void 0 ? "GET" : k
              , g = R.headers
              , J = R.body
              , _ = R.signal
              , M = ve({
                pathname: B,
                query: Q
            })(i)
              , V = u({
                method: X,
                headers: u({}, s, g, {
                    "Accept-Version": a
                }, f(r) ? {
                    Authorization: "Client-ID " + r
                } : {}),
                body: J,
                signal: _
            }, b)
              , G = v ?? fetch;
            return G(M, V).then(pe(x))
        })
    }
}, A = "x-total", Ie = function(t) {
    var r = t.headers.get(A);
    if (f(r)) {
        var n = parseInt(r);
        if (Number.isInteger(n))
            return n;
        throw new I("expected " + A + " header to be valid integer.")
    } else
        throw new I("expected " + A + " header to exist.")
}, P = function() {
    return function(t) {
        var r = t.response;
        return h()({
            response: r
        }).then(function(n) {
            return {
                results: n,
                total: Ie(r)
            }
        })
    }
}, D = function(t) {
    return f(t) ? {
        collections: t.join()
    } : {}
}, we = function(t) {
    return f(t) ? {
        topics: t.join()
    } : {}
}, p = function(t) {
    var r = t.page
      , n = t.perPage
      , a = t.orderBy;
    return m({
        per_page: n,
        order_by: a,
        page: r
    })
}, S = "/collections", qe = function() {
    var e = function(r) {
        var n = r.collectionId;
        return S + "/" + n + "/photos"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.collectionId
              , n = t.orientation
              , a = d(t, ["collectionId", "orientation"]);
            return {
                pathname: e({
                    collectionId: r
                }),
                query: m(u({}, p(a), {
                    orientation: n
                }))
            }
        }),
        handleResponse: P()
    })
}(), Ee = function() {
    var e = function(r) {
        var n = r.collectionId;
        return S + "/" + n
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.collectionId;
            return {
                pathname: e({
                    collectionId: r
                }),
                query: {}
            }
        }),
        handleResponse: h()
    })
}(), Se = function() {
    var e = function() {
        return S
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            return t === void 0 && (t = {}),
            {
                pathname: e(),
                query: p(t)
            }
        }),
        handleResponse: P()
    })
}(), Te = function() {
    var e = function(r) {
        var n = r.collectionId;
        return S + "/" + n + "/related"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.collectionId;
            return {
                pathname: e({
                    collectionId: r
                }),
                query: {}
            }
        }),
        handleResponse: h()
    })
}(), w = "/photos", be = function() {
    var e = function() {
        return w
    };
    return c({
        getPathname: function(r) {
            return e()
        },
        handleRequest: l(function(t) {
            return t === void 0 && (t = {}),
            {
                pathname: w,
                query: m(p(t))
            }
        }),
        handleResponse: P()
    })
}(), Ae = function() {
    var e = function(r) {
        var n = r.photoId;
        return w + "/" + n
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.photoId;
            return {
                pathname: e({
                    photoId: r
                }),
                query: {}
            }
        }),
        handleResponse: h()
    })
}(), Oe = function() {
    var e = function(r) {
        var n = r.photoId;
        return w + "/" + n + "/statistics"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.photoId;
            return {
                pathname: e({
                    photoId: r
                }),
                query: {}
            }
        }),
        handleResponse: h()
    })
}(), Ue = function() {
    var e = function() {
        return w + "/random"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t === void 0 ? {} : t
              , n = r.collectionIds
              , a = r.contentFilter
              , o = r.topicIds
              , i = d(r, ["collectionIds", "contentFilter", "topicIds"]);
            return {
                pathname: e(),
                query: m(u({}, i, {
                    content_filter: a
                }, D(n), we(o))),
                headers: {
                    "cache-control": "no-cache"
                }
            }
        }),
        handleResponse: h()
    })
}(), Ce = {
    handleRequest: l(function(e) {
        var t = e.downloadLocation
          , r = Pe(t)
          , n = r.pathname
          , a = r.query;
        if (!f(n))
            throw new Error("Could not parse pathname from url.");
        return {
            pathname: n,
            query: m(a)
        }
    }),
    handleResponse: h()
}, U = "/search", Fe = function() {
    var e = function() {
        return U + "/photos"
    };
    return c({
        getPathname: function(r) {
            return e()
        },
        handleRequest: l(function(t) {
            var r = t.query
              , n = t.page
              , a = t.perPage
              , o = t.orderBy
              , i = t.collectionIds
              , s = t.lang
              , v = t.contentFilter
              , b = d(t, ["query", "page", "perPage", "orderBy", "collectionIds", "lang", "contentFilter"]);
            return {
                pathname: e(),
                query: m(u({
                    query: r,
                    content_filter: v,
                    lang: s,
                    order_by: o
                }, p({
                    page: n,
                    perPage: a
                }), D(i), b))
            }
        }),
        handleResponse: h()
    })
}(), ke = function() {
    var e = function() {
        return U + "/collections"
    };
    return c({
        getPathname: function(r) {
            return e()
        },
        handleRequest: l(function(t) {
            var r = t.query
              , n = d(t, ["query"]);
            return {
                pathname: e(),
                query: u({
                    query: r
                }, p(n))
            }
        }),
        handleResponse: h()
    })
}(), ze = function() {
    var e = function() {
        return U + "/users"
    };
    return c({
        getPathname: function(r) {
            return e()
        },
        handleRequest: l(function(t) {
            var r = t.query
              , n = d(t, ["query"]);
            return {
                pathname: e(),
                query: u({
                    query: r
                }, p(n))
            }
        }),
        handleResponse: h()
    })
}(), T = "/users", He = function() {
    var e = function(r) {
        var n = r.username;
        return T + "/" + n
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.username;
            return {
                pathname: e({
                    username: r
                }),
                query: {}
            }
        }),
        handleResponse: h()
    })
}(), $e = function() {
    var e = function(r) {
        var n = r.username;
        return T + "/" + n + "/photos"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.username
              , n = t.stats
              , a = t.orientation
              , o = d(t, ["username", "stats", "orientation"]);
            return {
                pathname: e({
                    username: r
                }),
                query: m(u({}, p(o), {
                    orientation: a,
                    stats: n
                }))
            }
        }),
        handleResponse: P()
    })
}(), je = function() {
    var e = function(r) {
        var n = r.username;
        return T + "/" + n + "/likes"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.username
              , n = t.orientation
              , a = d(t, ["username", "orientation"]);
            return {
                pathname: e({
                    username: r
                }),
                query: m(u({}, p(a), {
                    orientation: n
                }))
            }
        }),
        handleResponse: P()
    })
}(), De = function() {
    var e = function(r) {
        var n = r.username;
        return T + "/" + n + "/collections"
    };
    return c({
        getPathname: e,
        handleRequest: l(function(t) {
            var r = t.username
              , n = d(t, ["username"]);
            return {
                pathname: e({
                    username: r
                }),
                query: p(n)
            }
        }),
        handleResponse: P()
    })
}(), N = "/topics", q = function(t) {
    var r = t.topicIdOrSlug;
    return N + "/" + r
}, Ne = c({
    getPathname: q,
    handleRequest: function(t) {
        var r = t.page
          , n = t.perPage
          , a = t.orderBy
          , o = t.topicIdsOrSlugs;
        return {
            pathname: N,
            query: m(u({}, p({
                page: r,
                perPage: n
            }), {
                ids: o == null ? void 0 : o.join(","),
                order_by: a
            }))
        }
    },
    handleResponse: P()
}), xe = c({
    getPathname: q,
    handleRequest: function(t) {
        var r = t.topicIdOrSlug;
        return {
            pathname: q({
                topicIdOrSlug: r
            }),
            query: {}
        }
    },
    handleResponse: h()
}), Ke = function() {
    var e = O(q, function(t) {
        return t + "/photos"
    });
    return c({
        getPathname: e,
        handleRequest: function(r) {
            var n = r.topicIdOrSlug
              , a = r.orientation
              , o = d(r, ["topicIdOrSlug", "orientation"]);
            return {
                pathname: e({
                    topicIdOrSlug: n
                }),
                query: m(u({}, p(o), {
                    orientation: a
                }))
            }
        },
        handleResponse: P()
    })
}(), H;
(function(e) {
    e.Afrikaans = "af",
    e.Amharic = "am",
    e.Arabic = "ar",
    e.Azerbaijani = "az",
    e.Belarusian = "be",
    e.Bulgarian = "bg",
    e.Bengali = "bn",
    e.Bosnian = "bs",
    e.Catalan = "ca",
    e.Cebuano = "ceb",
    e.Corsican = "co",
    e.Czech = "cs",
    e.Welsh = "cy",
    e.Danish = "da",
    e.German = "de",
    e.Greek = "el",
    e.English = "en",
    e.Esperanto = "eo",
    e.Spanish = "es",
    e.Estonian = "et",
    e.Basque = "eu",
    e.Persian = "fa",
    e.Finnish = "fi",
    e.French = "fr",
    e.Frisian = "fy",
    e.Irish = "ga",
    e.ScotsGaelic = "gd",
    e.Galician = "gl",
    e.Gujarati = "gu",
    e.Hausa = "ha",
    e.Hawaiian = "haw",
    e.Hindi = "hi",
    e.Hmong = "hmn",
    e.Croatian = "hr",
    e.HaitianCreole = "ht",
    e.Hungarian = "hu",
    e.Armenian = "hy",
    e.Indonesian = "id",
    e.Igbo = "ig",
    e.Icelandic = "is",
    e.Italian = "it",
    e.Hebrew = "iw",
    e.Japanese = "ja",
    e.Javanese = "jw",
    e.Georgian = "ka",
    e.Kazakh = "kk",
    e.Khmer = "km",
    e.Kannada = "kn",
    e.Korean = "ko",
    e.Kurdish = "ku",
    e.Kyrgyz = "ky",
    e.Latin = "la",
    e.Luxembourgish = "lb",
    e.Lao = "lo",
    e.Lithuanian = "lt",
    e.Latvian = "lv",
    e.Malagasy = "mg",
    e.Maori = "mi",
    e.Macedonian = "mk",
    e.Malayalam = "ml",
    e.Mongolian = "mn",
    e.Marathi = "mr",
    e.Malay = "ms",
    e.Maltese = "mt",
    e.Myanmar = "my",
    e.Nepali = "ne",
    e.Dutch = "nl",
    e.Norwegian = "no",
    e.Nyanja = "ny",
    e.Oriya = "or",
    e.Punjabi = "pa",
    e.Polish = "pl",
    e.Pashto = "ps",
    e.Portuguese = "pt",
    e.Romanian = "ro",
    e.Russian = "ru",
    e.Kinyarwanda = "rw",
    e.Sindhi = "sd",
    e.Sinhala = "si",
    e.Slovak = "sk",
    e.Slovenian = "sl",
    e.Samoan = "sm",
    e.Shona = "sn",
    e.Somali = "so",
    e.Albanian = "sq",
    e.Serbian = "sr",
    e.Sesotho = "st",
    e.Sundanese = "su",
    e.Swedish = "sv",
    e.Swahili = "sw",
    e.Tamil = "ta",
    e.Telugu = "te",
    e.Tajik = "tg",
    e.Thai = "th",
    e.Turkmen = "tk",
    e.Filipino = "tl",
    e.Turkish = "tr",
    e.Tatar = "tt",
    e.Uighur = "ug",
    e.Ukrainian = "uk",
    e.Urdu = "ur",
    e.Uzbek = "uz",
    e.Vietnamese = "vi",
    e.Xhosa = "xh",
    e.Yiddish = "yi",
    e.Yoruba = "yo",
    e.ChineseSimplified = "zh",
    e.ChineseTraditional = "zh-TW",
    e.Zulu = "zu"
}
)(H || (H = {}));
var $;
(function(e) {
    e.LATEST = "latest",
    e.POPULAR = "popular",
    e.VIEWS = "views",
    e.DOWNLOADS = "downloads",
    e.OLDEST = "oldest"
}
)($ || ($ = {}));
var C = O(Re, function(e) {
    return {
        photos: {
            get: e(Ae),
            list: e(be),
            getStats: e(Oe),
            getRandom: e(Ue),
            trackDownload: e(Ce)
        },
        users: {
            getPhotos: e($e),
            getCollections: e(De),
            getLikes: e(je),
            get: e(He)
        },
        search: {
            getCollections: e(ke),
            getPhotos: e(Fe),
            getUsers: e(ze)
        },
        collections: {
            getPhotos: e(qe),
            get: e(Ee),
            list: e(Se),
            getRelated: e(Te)
        },
        topics: {
            list: e(Ne),
            get: e(xe),
            getPhotos: e(Ke)
        }
    }
});
const Xe = async(e,t)=>{
    const r = C({
        accessKey: "2Z53wBSWJVEmkXRa81cfNdjIQazdP-K9wf_X_m5DIzQ"
    });
    try {
        const n = await r.search.getPhotos({
            query: e,
            page: y(t, "page", 1),
            perPage: y(t, "perPage", 10),
            color: y(t, "color", void 0),
            orientation: y(t, "orientation", "landscape")
        });
        return y(n, "response.results", [])
    } catch (n) {
        return console.error(n),
        n
    }
}
  , ge = async(e,t)=>{
    const r = C({
        accessKey: "2Z53wBSWJVEmkXRa81cfNdjIQazdP-K9wf_X_m5DIzQ"
    });
    try {
        const n = await r.photos.getRandom({
            query: e,
            count: y(t, "perPage", 30),
            orientation: y(t, "orientation", "landscape")
        });
        return y(n, "response", [])
    } catch (n) {
        return console.error(n),
        n
    }
}
  , Je = async e=>{
    try {
        const t = C({
            accessKey: "2Z53wBSWJVEmkXRa81cfNdjIQazdP-K9wf_X_m5DIzQ"
        });
        console.log(`About to track unsplash download ${e}...`),
        t.photos.trackDownload({
            downloadLocation: e
        })
    } catch (t) {
        throw console.error(t),
        t
    }
}
  , _e = async e=>{
    const t = await Z("signUploadUrl", {
        extension: e
    });
    return {
        uploadUrl: t == null ? void 0 : t.uploadUrl,
        destinationUrl: t == null ? void 0 : t.destinationUrl
    }
}
  , Me = async(e,t)=>{
    const r = await W.put(e, {
        headers: {
            "Content-Type": t.file.type
        },
        body: t.file
    });
    if (r.ok) {
        const n = r.url.split("?")[0];
        return console.log(`Uploaded file successfully - ${n}`),
        {
            url: n
        }
    } else
        throw new Error(r.statusText)
}
;
export {_e as a, ge as g, Xe as s, Je as t, Me as u};
//# sourceMappingURL=media-a5bc1cc2.js.map
