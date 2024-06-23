import {_ as K} from "./DomainSettingsButton-376d972c.js";
import {o as v, c as x, f as y, q as L, L as W, ab as Q, b as q, Z as A, e as b, d as U, a8 as T, a$ as F, bO as X, w as R, k as w, ag as tt, aL as et} from "./index-69a2ddda.js";
import {_ as st} from "./MagicWrap-b8cea90d.js";
const at = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , it = y("path", {
    fill: "currentColor",
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"
}, null, -1)
  , ot = [it];
function nt(l, r) {
    return v(),
    x("svg", at, ot)
}
const rt = {
    name: "ic-round-lock",
    render: nt
};
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.7.11
  @link https://github.com/yowainwright/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
function j() {
    return j = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var a in o)
                Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a])
        }
        return l
    }
    ,
    j.apply(this, arguments)
}
var lt = function() {
    function l(o, a) {
        var e = this
          , t = typeof a < "u" ? a : {};
        this.version = "3.7.11",
        this.userAgent = window.navigator.userAgent || "no `userAgent` provided by the browser",
        this.props = {
            customStickyChangeNumber: t.customStickyChangeNumber || null,
            noStyles: t.noStyles || !1,
            stickyBitStickyOffset: t.stickyBitStickyOffset || 0,
            parentClass: t.parentClass || "js-stickybit-parent",
            scrollEl: typeof t.scrollEl == "string" ? document.querySelector(t.scrollEl) : t.scrollEl || window,
            stickyClass: t.stickyClass || "js-is-sticky",
            stuckClass: t.stuckClass || "js-is-stuck",
            stickyChangeClass: t.stickyChangeClass || "js-is-sticky--change",
            useStickyClasses: t.useStickyClasses || !1,
            useFixed: t.useFixed || !1,
            useGetBoundingClientRect: t.useGetBoundingClientRect || !1,
            verticalPosition: t.verticalPosition || "top",
            applyStyle: t.applyStyle || function(_, P) {
                return e.applyStyle(_, P)
            }
        },
        this.props.positionVal = this.definePosition() || "fixed",
        this.instances = [];
        var s = this.props
          , i = s.positionVal
          , n = s.verticalPosition
          , c = s.noStyles
          , f = s.stickyBitStickyOffset
          , m = n === "top" && !c ? f + "px" : ""
          , u = i !== "fixed" ? i : "";
        this.els = typeof o == "string" ? document.querySelectorAll(o) : o,
        "length"in this.els || (this.els = [this.els]);
        for (var p = 0; p < this.els.length; p++) {
            var d, g = this.els[p], h = this.addInstance(g, this.props);
            this.props.applyStyle({
                styles: (d = {},
                d[n] = m,
                d.position = u,
                d),
                classes: {}
            }, h),
            this.manageState(h),
            this.instances.push(h)
        }
    }
    var r = l.prototype;
    return r.definePosition = function() {
        var a;
        if (this.props.useFixed)
            a = "fixed";
        else {
            for (var e = ["", "-o-", "-webkit-", "-moz-", "-ms-"], t = document.head.style, s = 0; s < e.length; s += 1)
                t.position = e[s] + "sticky";
            a = t.position ? t.position : "fixed",
            t.position = ""
        }
        return a
    }
    ,
    r.addInstance = function(a, e) {
        var t = this
          , s = {
            el: a,
            parent: a.parentNode,
            props: e
        };
        if (e.positionVal === "fixed" || e.useStickyClasses) {
            this.isWin = this.props.scrollEl === window;
            var i = this.isWin ? window : this.getClosestParent(s.el, s.props.scrollEl);
            this.computeScrollOffsets(s),
            this.toggleClasses(s.parent, "", e.parentClass),
            s.state = "default",
            s.stateChange = "default",
            s.stateContainer = function() {
                return t.manageState(s)
            }
            ,
            i.addEventListener("scroll", s.stateContainer)
        }
        return s
    }
    ,
    r.getClosestParent = function(a, e) {
        var t = e
          , s = a;
        if (s.parentElement === t)
            return t;
        for (; s.parentElement !== t; )
            s = s.parentElement;
        return t
    }
    ,
    r.getTopPosition = function(a) {
        if (this.props.useGetBoundingClientRect)
            return a.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);
        var e = 0;
        do
            e = a.offsetTop + e;
        while (a = a.offsetParent);
        return e
    }
    ,
    r.computeScrollOffsets = function(a) {
        var e = a
          , t = e.props
          , s = e.el
          , i = e.parent
          , n = !this.isWin && t.positionVal === "fixed"
          , c = t.verticalPosition !== "bottom"
          , f = n ? this.getTopPosition(t.scrollEl) : 0
          , m = n ? this.getTopPosition(i) - f : this.getTopPosition(i)
          , u = t.customStickyChangeNumber !== null ? t.customStickyChangeNumber : s.offsetHeight
          , p = m + i.offsetHeight;
        e.offset = n ? 0 : f + t.stickyBitStickyOffset,
        e.stickyStart = c ? m - e.offset : 0,
        e.stickyChange = e.stickyStart + u,
        e.stickyStop = c ? p - (s.offsetHeight + e.offset) : p - window.innerHeight
    }
    ,
    r.toggleClasses = function(a, e, t) {
        var s = a
          , i = s.className.split(" ");
        t && i.indexOf(t) === -1 && i.push(t);
        var n = i.indexOf(e);
        n !== -1 && i.splice(n, 1),
        s.className = i.join(" ")
    }
    ,
    r.manageState = function(a) {
        var e = this
          , t = a
          , s = t.props
          , i = t.state
          , n = t.stateChange
          , c = t.stickyStart
          , f = t.stickyChange
          , m = t.stickyStop
          , u = s.positionVal
          , p = s.scrollEl
          , d = s.stickyClass
          , g = s.stickyChangeClass
          , h = s.stuckClass
          , _ = s.verticalPosition
          , P = _ !== "bottom"
          , H = s.applyStyle
          , M = s.noStyles
          , D = function(S) {
            S()
        }
          , z = this.isWin && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) || D
          , k = this.isWin ? window.scrollY || window.pageYOffset : p.scrollTop
          , G = k > c && k < m && (i === "default" || i === "stuck")
          , Y = P && k <= c && (i === "sticky" || i === "stuck")
          , Z = k >= m && i === "sticky";
        G ? t.state = "sticky" : Y ? t.state = "default" : Z && (t.state = "stuck");
        var V = k >= f && k <= m
          , J = k < f / 2 || k > m;
        J ? t.stateChange = "default" : V && (t.stateChange = "sticky"),
        !(i === t.state && n === t.stateChange) && z(function() {
            var B, S, E, N, $, C, I = {
                sticky: {
                    styles: (B = {
                        position: u,
                        top: "",
                        bottom: ""
                    },
                    B[_] = s.stickyBitStickyOffset + "px",
                    B),
                    classes: (S = {},
                    S[d] = !0,
                    S)
                },
                default: {
                    styles: (E = {},
                    E[_] = "",
                    E),
                    classes: {}
                },
                stuck: {
                    styles: j((N = {},
                    N[_] = "",
                    N), u === "fixed" && !M || !e.isWin ? {
                        position: "absolute",
                        top: "",
                        bottom: "0"
                    } : {}),
                    classes: ($ = {},
                    $[h] = !0,
                    $)
                }
            };
            u === "fixed" && (I.default.styles.position = "");
            var O = I[t.state];
            O.classes = (C = {},
            C[h] = !!O.classes[h],
            C[d] = !!O.classes[d],
            C[g] = V,
            C),
            H(O, a)
        })
    }
    ,
    r.applyStyle = function(a, e) {
        var t = a.styles
          , s = a.classes
          , i = e
          , n = i.el
          , c = i.props
          , f = n.style
          , m = c.noStyles
          , u = n.className.split(" ");
        for (var p in s) {
            var d = s[p];
            if (d)
                u.indexOf(p) === -1 && u.push(p);
            else {
                var g = u.indexOf(p);
                g !== -1 && u.splice(g, 1)
            }
        }
        if (n.className = u.join(" "),
        t.position && (f.position = t.position),
        !m)
            for (var h in t)
                f[h] = t[h]
    }
    ,
    r.update = function(a) {
        var e = this;
        return a === void 0 && (a = null),
        this.instances.forEach(function(t) {
            if (e.computeScrollOffsets(t),
            a)
                for (var s in a)
                    t.props[s] = a[s]
        }),
        this
    }
    ,
    r.removeInstance = function(a) {
        var e, t, s = a.el, i = a.props;
        this.applyStyle({
            styles: (e = {
                position: ""
            },
            e[i.verticalPosition] = "",
            e),
            classes: (t = {},
            t[i.stickyClass] = "",
            t[i.stuckClass] = "",
            t)
        }, a),
        this.toggleClasses(s.parentNode, i.parentClass)
    }
    ,
    r.cleanup = function() {
        for (var a = 0; a < this.instances.length; a += 1) {
            var e = this.instances[a];
            e.stateContainer && e.props.scrollEl.removeEventListener("scroll", e.stateContainer),
            this.removeInstance(e)
        }
        this.manageState = !1,
        this.instances = []
    }
    ,
    l
}();
function ct(l, r) {
    return new lt(l,r)
}
const ut = {
    class: "flex justify-between sm:justify-start space-x-2 lg:space-x-3 px-3 py-2 md:p-3 lg:p-4 border-b border-slate-200 items-center"
}
  , pt = y("div", {
    class: "items-center space-x-1 sm:space-x-2 flex"
}, [y("div", {
    class: "browser-ui-nav-control"
}), y("div", {
    class: "browser-ui-nav-control"
}), y("div", {
    class: "browser-ui-nav-control"
})], -1)
  , ft = ["href"]
  , mt = {
    key: 2,
    class: "text-slate-400 text-xs md:text-sm"
}
  , bt = {
    __name: "BrowserUi",
    props: {
        isNewSite: {
            type: Boolean,
            default: !1
        },
        showCustomDomainLink: {
            type: Boolean,
            default: !0
        },
        url: {
            type: String,
            default: ""
        },
        siteId: {
            type: String,
            default: ""
        },
        theme: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    emits: ["url-click"],
    setup(l, {emit: r}) {
        const o = L(null);
        let a;
        return W(()=>{
            a = ct(o.value, {
                stickyBitStickyOffset: 0
            })
        }
        ),
        Q(()=>{
            a.cleanup()
        }
        ),
        (e,t)=>{
            var n;
            const s = rt
              , i = K;
            return v(),
            x("div", {
                ref_key: "browserUi",
                ref: o,
                class: "h-full border border-slate-300 shadow rounded-xl lg:rounded-3xl mb-2 bg-slate-50 overflow-hidden",
                "data-testid": "browser-ui"
            }, [y("div", ut, [pt, (v(),
            x("div", {
                key: l.url,
                class: "hidden sm:flex flex-1 w-full sm:w-auto lg:max-w-sm xl:max-w-md lg:w-full overflow-hidden truncate p-2 md:px-3 bg-white rounded-2xl md:rounded-lg border border-slate-300 justify-start text-slate-500 space-x-1 md:space-x-1.5 text-sm l:text-base lg:flex-none items-center"
            }, [q(s, {
                class: "w-4 mt-0.5 text-slate-300"
            }), l.url ? (v(),
            x("a", {
                key: 0,
                href: l.url,
                target: "_blank",
                title: "View website"
            }, A((n = l.url) == null ? void 0 : n.replace("https://", "")), 9, ft)) : b("", !0), !l.url && !l.isNewSite ? (v(),
            x("button", {
                key: 1,
                type: "button",
                class: "text-slate-400 hover:text-brand-primary text-xs md:text-sm",
                onClick: t[0] || (t[0] = c=>e.$emit("url-click"))
            }, " Click Publish to create a sharable url… ")) : b("", !0), !l.url && l.isNewSite ? (v(),
            x("p", mt, " Save and Continue to create a public url… ")) : b("", !0)])), l.showCustomDomainLink ? (v(),
            U(i, {
                key: 0
            })) : b("", !0), T(e.$slots, "nav")]), T(e.$slots, "default")], 512)
        }
    }
}
  , dt = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , yt = y("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
}, [y("path", {
    d: "m9 14l-4-4l4-4"
}), y("path", {
    d: "M5 10h11a4 4 0 1 1 0 8h-1"
})], -1)
  , ht = [yt];
function vt(l, r) {
    return v(),
    x("svg", dt, ht)
}
const Bt = {
    name: "tabler-arrow-back-up",
    render: vt
}
  , gt = {
    class: "space-y-3 flex flex-col sm:space-x-3 sm:flex-row items-center sm:space-y-0"
}
  , kt = ["src", "alt"]
  , xt = {
    class: "text-slate-800 font-bold px-2 animate-pulse text-2xl sm:text-3xl text-center"
}
  , _t = {
    key: 0,
    class: "text-slate-500 px-2 text-sm sm:text-base text-center"
}
  , Ot = {
    __name: "AnimatedLoader",
    props: {
        prompts: {
            type: Array,
            default() {
                return []
            }
        },
        minDelay: {
            type: Number,
            default: 950
        },
        maxDelay: {
            type: Number,
            default: 3300
        },
        showWrap: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["complete"],
    setup(l, {emit: r}) {
        const o = l
          , a = L(-1)
          , e = F(()=>o.prompts[a.value])
          , t = F(()=>o.showWrap ? X(st) : "div")
          , s = ()=>{
            const n = o.minDelay
              , c = o.maxDelay;
            return Math.floor(Math.random() * (c - n + 1)) + n
        }
          , i = ()=>{
            var n, c;
            if (a.value < o.prompts.length - 1) {
                a.value++,
                (n = e.value) != null && n.complete && r("complete");
                const f = ((c = e.value) == null ? void 0 : c.delay) || s();
                setTimeout(i, f)
            } else
                r("complete")
        }
        ;
        return W(()=>{
            i()
        }
        ),
        (n,c)=>{
            const f = et;
            return v(),
            U(tt(w(t)), {
                "inner-class": "h-80",
                animating: !0,
                "data-testid": "animated-loader"
            }, {
                default: R(()=>[q(f, {
                    class: "space-y-3 flex-col h-full sm:space-y-4"
                }, {
                    default: R(()=>{
                        var m, u, p, d, g;
                        return [y("div", gt, [y("img", {
                            class: "w-16 sm:w-12",
                            src: (m = w(e)) == null ? void 0 : m.imageUrl,
                            alt: (u = w(e)) == null ? void 0 : u.text
                        }, null, 8, kt), y("p", xt, A((p = w(e)) == null ? void 0 : p.text), 1)]), (d = w(e)) != null && d.note ? (v(),
                        x("p", _t, A((g = w(e)) == null ? void 0 : g.note), 1)) : b("", !0)]
                    }
                    ),
                    _: 1
                })]),
                _: 1
            })
        }
    }
};
export {bt as _, Bt as a, Ot as b, ct as s};
//# sourceMappingURL=AnimatedLoader-f41ada9f.js.map
