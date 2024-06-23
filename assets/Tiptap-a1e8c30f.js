import {o as I, c as z, f as P, q as Yr, a_ as Yl, cw as Ql, k as Le, e as le, cx as Xl, a1 as ea, b as oe, T as ta, G as na, N as ra, ab as ko, V as Cr, a6 as ia, B as sa, L as oa, a7 as la, bO as aa, K as ca, cy as ua, d as Gi} from "./index-69a2ddda.js";
import {h as da} from "./helpers-7cfbe709.js";
const fa = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , ha = P("path", {
    fill: "currentColor",
    d: "M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6h-3Zm-2 0a4 4 0 1 0 0 8V6Z"
}, null, -1)
  , pa = [ha];
function ma(n, e) {
    return I(),
    z("svg", fa, pa)
}
const ga = {
    name: "ri-paragraph",
    render: ma
}
  , ya = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , ka = P("path", {
    fill: "currentColor",
    d: "m22 8l-.002 2l-2.505 2.883a3.752 3.752 0 0 1-.993 7.367a3.751 3.751 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z"
}, null, -1)
  , ba = [ka];
function Sa(n, e) {
    return I(),
    z("svg", ya, ba)
}
const xa = {
    name: "ri-h3",
    render: Sa
}
  , Ma = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Ca = P("path", {
    fill: "currentColor",
    d: "M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.065-1.292l-.005.144h-2A3.75 3.75 0 0 1 18.5 8Z"
}, null, -1)
  , wa = [Ca];
function Ta(n, e) {
    return I(),
    z("svg", Ma, wa)
}
const Oa = {
    name: "ri-h2",
    render: Ta
}
  , Ea = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , va = P("path", {
    fill: "currentColor",
    d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16Zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21Z"
}, null, -1)
  , Aa = [va];
function Na(n, e) {
    return I(),
    z("svg", Ea, Aa)
}
const Da = {
    name: "ri-h1",
    render: Na
};
const Ia = {
    class: "color-picker flex flex-col space-y-2 text-xs font-semibold text-slate-800 relative",
    "data-testid": "color-picker"
}
  , Ra = {
    class: "flex-row-center gap-x-2 p-2 bg-white cursor-pointer rounded-t-md hover:text-brand-primary"
}
  , Pa = ["value"]
  , La = P("label", {
    for: "custom-color",
    class: "cursor-pointer"
}, "Custom", -1)
  , Ba = {
    class: "bg-slate-100 p-2 border-t border-slate-300 space-y-2 rounded-b-md"
}
  , za = P("div", {
    class: "color-preview bg-primary"
}, null, -1)
  , Fa = P("span", null, "Primary", -1)
  , Ha = [za, Fa]
  , $a = P("div", {
    class: "color-preview bg-secondary"
}, null, -1)
  , Va = P("span", null, "Secondary", -1)
  , _a = [$a, Va]
  , ja = P("span", {
    class: "sr-only"
}, "Color", -1)
  , Wa = {
    __name: "ColorPicker",
    props: {
        value: {
            type: String,
            default: "#000000"
        }
    },
    emits: ["input"],
    setup(n, {emit: e}) {
        const t = n
          , r = Yr(null)
          , [i,s] = Yl(!1);
        Ql(r, ()=>i.value = !1);
        const o = Yr(t.value)
          , l = c=>{
            o.value = c,
            e("input", c)
        }
          , a = c=>{
            l(c),
            i.value = !1
        }
        ;
        return (c,u)=>(I(),
        z("div", Ia, [Le(i) ? (I(),
        z("div", {
            key: 0,
            ref_key: "colorMenu",
            ref: r,
            class: "flex flex-col absolute right-0 bg-white ring-1 ring-slate-400 shadow-md z-10 rounded-md cursor-pointer"
        }, [P("div", Ra, [P("input", {
            id: "custom-color",
            type: "color",
            class: "w-4 h-2 rounded-sm",
            value: n.value,
            "aria-label": "Custom Color",
            name: "custom-color",
            onInput: u[0] || (u[0] = d=>l(d.target.value))
        }, null, 40, Pa), La]), P("div", Ba, [P("button", {
            class: "flex-row-center gap-x-2 cursor-pointer hover:text-brand-primary",
            onClick: u[1] || (u[1] = d=>a("rgb(var(--color-primary))"))
        }, Ha), P("button", {
            class: "flex-row-center gap-x-2 cursor-pointer hover:text-brand-primary",
            onClick: u[2] || (u[2] = d=>a("rgb(var(--color-secondary))"))
        }, _a)])], 512)) : le("", !0), P("button", {
            class: "flex-row-center gap-x-2",
            onClick: u[3] || (u[3] = ea((...d)=>Le(s) && Le(s)(...d), ["prevent"]))
        }, [P("div", {
            class: "color-preview",
            style: Xl({
                backgroundColor: n.value
            })
        }, null, 4), ja])]))
    }
}
  , Ka = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Ja = P("path", {
    fill: "currentColor",
    d: "m17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414l-1.414-1.414l1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414Zm-2.828 2.829l-1.415 1.414a6 6 0 0 1-8.485-8.485L6.343 9.17l1.415 1.415L6.343 12A4 4 0 0 0 12 17.657l1.415-1.415l1.414 1.415Zm0-9.9l1.414 1.414l-7.071 7.072l-1.414-1.415l7.07-7.07Z"
}, null, -1)
  , qa = [Ja];
function Ua(n, e) {
    return I(),
    z("svg", Ka, qa)
}
const Ga = {
    name: "ri-link-m",
    render: Ua
}
  , Za = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Ya = P("path", {
    fill: "currentColor",
    d: "M8 4h13v2H8V4ZM5 3v3h1v1H3V6h1V4H3V3h2ZM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3Zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5ZM8 11h13v2H8v-2Zm0 7h13v2H8v-2Z"
}, null, -1)
  , Qa = [Ya];
function Xa(n, e) {
    return I(),
    z("svg", Za, Qa)
}
const ec = {
    name: "ri-list-ordered",
    render: Xa
}
  , tc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , nc = P("path", {
    fill: "currentColor",
    d: "M8 4h13v2H8V4Zm-5-.5h3v3H3v-3Zm0 7h3v3H3v-3Zm0 7h3v3H3v-3ZM8 11h13v2H8v-2Zm0 7h13v2H8v-2Z"
}, null, -1)
  , rc = [nc];
function ic(n, e) {
    return I(),
    z("svg", tc, rc)
}
const sc = {
    name: "ri-list-check",
    render: ic
}
  , oc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , lc = P("path", {
    fill: "currentColor",
    d: "M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3h2ZM4 20h16v2H4v-2Z"
}, null, -1)
  , ac = [lc];
function cc(n, e) {
    return I(),
    z("svg", oc, ac)
}
const uc = {
    name: "ri-underline",
    render: cc
}
  , dc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , fc = P("path", {
    fill: "currentColor",
    d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"
}, null, -1)
  , hc = [fc];
function pc(n, e) {
    return I(),
    z("svg", dc, hc)
}
const mc = {
    name: "ri-italic",
    render: pc
}
  , gc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , yc = P("path", {
    fill: "currentColor",
    d: "M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"
}, null, -1)
  , kc = [yc];
function bc(n, e) {
    return I(),
    z("svg", gc, kc)
}
const Sc = {
    name: "ri-bold",
    render: bc
}
  , xc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Mc = P("path", {
    fill: "currentColor",
    d: "M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5l-6 5V7Z"
}, null, -1)
  , Cc = [Mc];
function wc(n, e) {
    return I(),
    z("svg", xc, Cc)
}
const Tc = {
    name: "ri-arrow-go-forward-fill",
    render: wc
}
  , Oc = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , Ec = P("path", {
    fill: "currentColor",
    d: "M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H8Z"
}, null, -1)
  , vc = [Ec];
function Ac(n, e) {
    return I(),
    z("svg", Oc, vc)
}
const Nc = {
    name: "ri-arrow-go-back-fill",
    render: Ac
};
const Dc = {
    class: "flex flex-wrap items-center gap-2 bg-slate-100 py-2 px-3 ring-1 ring-slate-400 rounded-t"
}
  , Ic = ["disabled"]
  , Rc = ["disabled"]
  , Pc = {
    __name: "TiptapMenu",
    props: {
        controls: {
            type: Object,
            required: !0
        },
        editor: {
            type: Object,
            required: !0
        }
    },
    setup(n) {
        const e = n
          , t = ()=>{
            var s, o;
            const r = (s = e == null ? void 0 : e.editor) != null && s.isActive("link") ? (o = e == null ? void 0 : e.editor) == null ? void 0 : o.getAttributes("link").href : ""
              , i = typeof window < "u" ? window == null ? void 0 : window.prompt("URL", r) : "";
            i.trim() ? e == null || e.editor.chain().focus().setLink({
                href: i.trim()
            }).run() : e.editor.isActive("link") && e.editor.chain().focus().unsetLink().run()
        }
        ;
        return (r,i)=>{
            var x, w, B, D, T, L, O, se, De, ze, Fe, rt, it, st, Ie;
            const s = Nc
              , o = Tc
              , l = Sc
              , a = mc
              , c = uc
              , u = sc
              , d = ec
              , f = Ga
              , h = Wa
              , p = Da
              , m = Oa
              , g = xa
              , y = ga;
            return I(),
            z("div", Dc, [P("button", {
                class: "button",
                type: "button",
                title: "Undo",
                disabled: !((w = (x = n.editor) == null ? void 0 : x.can()) != null && w.undo()),
                onClick: i[0] || (i[0] = $=>n.editor.commands.undo())
            }, [oe(s, {
                class: "icon"
            })], 8, Ic), P("button", {
                class: "button",
                type: "button",
                title: "Redo",
                disabled: !((D = (B = n.editor) == null ? void 0 : B.can()) != null && D.redo()),
                onClick: i[1] || (i[1] = $=>n.editor.commands.redo())
            }, [oe(o, {
                class: "icon"
            })], 8, Rc), (T = n.controls) != null && T.bold ? (I(),
            z("button", {
                key: 0,
                class: "button",
                type: "button",
                title: "Bold",
                onClick: i[2] || (i[2] = $=>n.editor.chain().focus().toggleBold().run())
            }, [oe(l, {
                class: "icon"
            })])) : le("", !0), (L = n.controls) != null && L.italic ? (I(),
            z("button", {
                key: 1,
                class: "button",
                type: "button",
                title: "Italic",
                onClick: i[3] || (i[3] = $=>n.editor.chain().focus().toggleItalic().run())
            }, [oe(a, {
                class: "icon"
            })])) : le("", !0), (O = n.controls) != null && O.underline ? (I(),
            z("button", {
                key: 2,
                class: "button",
                type: "button",
                title: "Underline",
                onClick: i[4] || (i[4] = $=>n.editor.chain().focus().toggleUnderline().run())
            }, [oe(c, {
                class: "icon"
            })])) : le("", !0), (se = n.controls) != null && se.bulletList ? (I(),
            z("button", {
                key: 3,
                class: "button",
                type: "button",
                title: "Bullet List",
                onClick: i[5] || (i[5] = $=>n.editor.commands.toggleBulletList())
            }, [oe(u, {
                class: "icon"
            })])) : le("", !0), (De = n.controls) != null && De.orderedList ? (I(),
            z("button", {
                key: 4,
                class: "button",
                type: "button",
                title: "Ordered List",
                onClick: i[6] || (i[6] = $=>n.editor.commands.toggleOrderedList())
            }, [oe(d, {
                class: "icon"
            })])) : le("", !0), (ze = n.controls) != null && ze.link ? (I(),
            z("button", {
                key: 5,
                class: "button",
                type: "button",
                title: "Link",
                onClick: t
            }, [oe(f, {
                class: "icon"
            })])) : le("", !0), oe(h, {
                value: n.editor.getAttributes("textStyle").color,
                onInput: i[7] || (i[7] = $=>n.editor.chain().focus().setColor($).run())
            }, null, 8, ["value"]), (Fe = n.controls) != null && Fe.heading ? (I(),
            z("button", {
                key: 6,
                class: "button",
                type: "button",
                title: "H1",
                onClick: i[8] || (i[8] = $=>n.editor.commands.toggleHeading({
                    level: 1
                }))
            }, [oe(p, {
                class: "icon"
            })])) : le("", !0), (rt = n.controls) != null && rt.heading ? (I(),
            z("button", {
                key: 7,
                class: "button",
                type: "button",
                title: "H2",
                onClick: i[9] || (i[9] = $=>n.editor.commands.toggleHeading({
                    level: 2
                }))
            }, [oe(m, {
                class: "icon"
            })])) : le("", !0), (it = n.controls) != null && it.heading ? (I(),
            z("button", {
                key: 8,
                class: "button",
                type: "button",
                title: "H3",
                onClick: i[10] || (i[10] = $=>n.editor.commands.toggleHeading({
                    level: 3
                }))
            }, [oe(g, {
                class: "icon"
            })])) : le("", !0), (st = n.controls) != null && st.paragraph && ((Ie = n.controls) != null && Ie.heading) ? (I(),
            z("button", {
                key: 9,
                class: "button",
                type: "button",
                title: "Paragraph",
                onClick: i[11] || (i[11] = $=>n.editor.commands.setParagraph())
            }, [oe(y, {
                class: "icon"
            })])) : le("", !0)])
        }
    }
};
function q(n) {
    this.content = n
}
q.prototype = {
    constructor: q,
    find: function(n) {
        for (var e = 0; e < this.content.length; e += 2)
            if (this.content[e] === n)
                return e;
        return -1
    },
    get: function(n) {
        var e = this.find(n);
        return e == -1 ? void 0 : this.content[e + 1]
    },
    update: function(n, e, t) {
        var r = t && t != n ? this.remove(t) : this
          , i = r.find(n)
          , s = r.content.slice();
        return i == -1 ? s.push(t || n, e) : (s[i + 1] = e,
        t && (s[i] = t)),
        new q(s)
    },
    remove: function(n) {
        var e = this.find(n);
        if (e == -1)
            return this;
        var t = this.content.slice();
        return t.splice(e, 2),
        new q(t)
    },
    addToStart: function(n, e) {
        return new q([n, e].concat(this.remove(n).content))
    },
    addToEnd: function(n, e) {
        var t = this.remove(n).content.slice();
        return t.push(n, e),
        new q(t)
    },
    addBefore: function(n, e, t) {
        var r = this.remove(e)
          , i = r.content.slice()
          , s = r.find(n);
        return i.splice(s == -1 ? i.length : s, 0, e, t),
        new q(i)
    },
    forEach: function(n) {
        for (var e = 0; e < this.content.length; e += 2)
            n(this.content[e], this.content[e + 1])
    },
    prepend: function(n) {
        return n = q.from(n),
        n.size ? new q(n.content.concat(this.subtract(n).content)) : this
    },
    append: function(n) {
        return n = q.from(n),
        n.size ? new q(this.subtract(n).content.concat(n.content)) : this
    },
    subtract: function(n) {
        var e = this;
        n = q.from(n);
        for (var t = 0; t < n.content.length; t += 2)
            e = e.remove(n.content[t]);
        return e
    },
    toObject: function() {
        var n = {};
        return this.forEach(function(e, t) {
            n[e] = t
        }),
        n
    },
    get size() {
        return this.content.length >> 1
    }
};
q.from = function(n) {
    if (n instanceof q)
        return n;
    var e = [];
    if (n)
        for (var t in n)
            e.push(t, n[t]);
    return new q(e)
}
;
function bo(n, e, t) {
    for (let r = 0; ; r++) {
        if (r == n.childCount || r == e.childCount)
            return n.childCount == e.childCount ? null : t;
        let i = n.child(r)
          , s = e.child(r);
        if (i == s) {
            t += i.nodeSize;
            continue
        }
        if (!i.sameMarkup(s))
            return t;
        if (i.isText && i.text != s.text) {
            for (let o = 0; i.text[o] == s.text[o]; o++)
                t++;
            return t
        }
        if (i.content.size || s.content.size) {
            let o = bo(i.content, s.content, t + 1);
            if (o != null)
                return o
        }
        t += i.nodeSize
    }
}
function So(n, e, t, r) {
    for (let i = n.childCount, s = e.childCount; ; ) {
        if (i == 0 || s == 0)
            return i == s ? null : {
                a: t,
                b: r
            };
        let o = n.child(--i)
          , l = e.child(--s)
          , a = o.nodeSize;
        if (o == l) {
            t -= a,
            r -= a;
            continue
        }
        if (!o.sameMarkup(l))
            return {
                a: t,
                b: r
            };
        if (o.isText && o.text != l.text) {
            let c = 0
              , u = Math.min(o.text.length, l.text.length);
            for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
                c++,
                t--,
                r--;
            return {
                a: t,
                b: r
            }
        }
        if (o.content.size || l.content.size) {
            let c = So(o.content, l.content, t - 1, r - 1);
            if (c)
                return c
        }
        t -= a,
        r -= a
    }
}
class k {
    constructor(e, t) {
        if (this.content = e,
        this.size = t || 0,
        t == null)
            for (let r = 0; r < e.length; r++)
                this.size += e[r].nodeSize
    }
    nodesBetween(e, t, r, i=0, s) {
        for (let o = 0, l = 0; l < t; o++) {
            let a = this.content[o]
              , c = l + a.nodeSize;
            if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
                let u = l + 1;
                a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u)
            }
            l = c
        }
    }
    descendants(e) {
        this.nodesBetween(0, this.size, e)
    }
    textBetween(e, t, r, i) {
        let s = ""
          , o = !0;
        return this.nodesBetween(e, t, (l,a)=>{
            l.isText ? (s += l.text.slice(Math.max(e, a) - a, t - a),
            o = !r) : l.isLeaf ? (i ? s += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (s += l.type.spec.leafText(l)),
            o = !r) : !o && l.isBlock && (s += r,
            o = !0)
        }
        , 0),
        s
    }
    append(e) {
        if (!e.size)
            return this;
        if (!this.size)
            return e;
        let t = this.lastChild
          , r = e.firstChild
          , i = this.content.slice()
          , s = 0;
        for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text),
        s = 1); s < e.content.length; s++)
            i.push(e.content[s]);
        return new k(i,this.size + e.size)
    }
    cut(e, t=this.size) {
        if (e == 0 && t == this.size)
            return this;
        let r = []
          , i = 0;
        if (t > e)
            for (let s = 0, o = 0; o < t; s++) {
                let l = this.content[s]
                  , a = o + l.nodeSize;
                a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))),
                r.push(l),
                i += l.nodeSize),
                o = a
            }
        return new k(r,i)
    }
    cutByIndex(e, t) {
        return e == t ? k.empty : e == 0 && t == this.content.length ? this : new k(this.content.slice(e, t))
    }
    replaceChild(e, t) {
        let r = this.content[e];
        if (r == t)
            return this;
        let i = this.content.slice()
          , s = this.size + t.nodeSize - r.nodeSize;
        return i[e] = t,
        new k(i,s)
    }
    addToStart(e) {
        return new k([e].concat(this.content),this.size + e.nodeSize)
    }
    addToEnd(e) {
        return new k(this.content.concat(e),this.size + e.nodeSize)
    }
    eq(e) {
        if (this.content.length != e.content.length)
            return !1;
        for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t]))
                return !1;
        return !0
    }
    get firstChild() {
        return this.content.length ? this.content[0] : null
    }
    get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null
    }
    get childCount() {
        return this.content.length
    }
    child(e) {
        let t = this.content[e];
        if (!t)
            throw new RangeError("Index " + e + " out of range for " + this);
        return t
    }
    maybeChild(e) {
        return this.content[e] || null
    }
    forEach(e) {
        for (let t = 0, r = 0; t < this.content.length; t++) {
            let i = this.content[t];
            e(i, r, t),
            r += i.nodeSize
        }
    }
    findDiffStart(e, t=0) {
        return bo(this, e, t)
    }
    findDiffEnd(e, t=this.size, r=e.size) {
        return So(this, e, t, r)
    }
    findIndex(e, t=-1) {
        if (e == 0)
            return Cn(0, e);
        if (e == this.size)
            return Cn(this.content.length, e);
        if (e > this.size || e < 0)
            throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for (let r = 0, i = 0; ; r++) {
            let s = this.child(r)
              , o = i + s.nodeSize;
            if (o >= e)
                return o == e || t > 0 ? Cn(r + 1, o) : Cn(r, i);
            i = o
        }
    }
    toString() {
        return "<" + this.toStringInner() + ">"
    }
    toStringInner() {
        return this.content.join(", ")
    }
    toJSON() {
        return this.content.length ? this.content.map(e=>e.toJSON()) : null
    }
    static fromJSON(e, t) {
        if (!t)
            return k.empty;
        if (!Array.isArray(t))
            throw new RangeError("Invalid input for Fragment.fromJSON");
        return new k(t.map(e.nodeFromJSON))
    }
    static fromArray(e) {
        if (!e.length)
            return k.empty;
        let t, r = 0;
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            r += s.nodeSize,
            i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)),
            t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s)
        }
        return new k(t || e,r)
    }
    static from(e) {
        if (!e)
            return k.empty;
        if (e instanceof k)
            return e;
        if (Array.isArray(e))
            return this.fromArray(e);
        if (e.attrs)
            return new k([e],e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
    }
}
k.empty = new k([],0);
const wr = {
    index: 0,
    offset: 0
};
function Cn(n, e) {
    return wr.index = n,
    wr.offset = e,
    wr
}
function Pn(n, e) {
    if (n === e)
        return !0;
    if (!(n && typeof n == "object") || !(e && typeof e == "object"))
        return !1;
    let t = Array.isArray(n);
    if (Array.isArray(e) != t)
        return !1;
    if (t) {
        if (n.length != e.length)
            return !1;
        for (let r = 0; r < n.length; r++)
            if (!Pn(n[r], e[r]))
                return !1
    } else {
        for (let r in n)
            if (!(r in e) || !Pn(n[r], e[r]))
                return !1;
        for (let r in e)
            if (!(r in n))
                return !1
    }
    return !0
}
let R = class Qr {
    constructor(e, t) {
        this.type = e,
        this.attrs = t
    }
    addToSet(e) {
        let t, r = !1;
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (this.eq(s))
                return e;
            if (this.type.excludes(s.type))
                t || (t = e.slice(0, i));
            else {
                if (s.type.excludes(this.type))
                    return e;
                !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)),
                t.push(this),
                r = !0),
                t && t.push(s)
            }
        }
        return t || (t = e.slice()),
        r || t.push(this),
        t
    }
    removeFromSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t]))
                return e.slice(0, t).concat(e.slice(t + 1));
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t]))
                return !0;
        return !1
    }
    eq(e) {
        return this == e || this.type == e.type && Pn(this.attrs, e.attrs)
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return e
    }
    static fromJSON(e, t) {
        if (!t)
            throw new RangeError("Invalid input for Mark.fromJSON");
        let r = e.marks[t.type];
        if (!r)
            throw new RangeError(`There is no mark type ${t.type} in this schema`);
        return r.create(t.attrs)
    }
    static sameSet(e, t) {
        if (e == t)
            return !0;
        if (e.length != t.length)
            return !1;
        for (let r = 0; r < e.length; r++)
            if (!e[r].eq(t[r]))
                return !1;
        return !0
    }
    static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0)
            return Qr.none;
        if (e instanceof Qr)
            return [e];
        let t = e.slice();
        return t.sort((r,i)=>r.type.rank - i.type.rank),
        t
    }
}
;
R.none = [];
class Ln extends Error {
}
class S {
    constructor(e, t, r) {
        this.content = e,
        this.openStart = t,
        this.openEnd = r
    }
    get size() {
        return this.content.size - this.openStart - this.openEnd
    }
    insertAt(e, t) {
        let r = Mo(this.content, e + this.openStart, t);
        return r && new S(r,this.openStart,this.openEnd)
    }
    removeBetween(e, t) {
        return new S(xo(this.content, e + this.openStart, t + this.openStart),this.openStart,this.openEnd)
    }
    eq(e) {
        return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
    }
    toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")"
    }
    toJSON() {
        if (!this.content.size)
            return null;
        let e = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (e.openStart = this.openStart),
        this.openEnd > 0 && (e.openEnd = this.openEnd),
        e
    }
    static fromJSON(e, t) {
        if (!t)
            return S.empty;
        let r = t.openStart || 0
          , i = t.openEnd || 0;
        if (typeof r != "number" || typeof i != "number")
            throw new RangeError("Invalid input for Slice.fromJSON");
        return new S(k.fromJSON(e, t.content),r,i)
    }
    static maxOpen(e, t=!0) {
        let r = 0
          , i = 0;
        for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
            r++;
        for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
            i++;
        return new S(e,r,i)
    }
}
S.empty = new S(k.empty,0,0);
function xo(n, e, t) {
    let {index: r, offset: i} = n.findIndex(e)
      , s = n.maybeChild(r)
      , {index: o, offset: l} = n.findIndex(t);
    if (i == e || s.isText) {
        if (l != t && !n.child(o).isText)
            throw new RangeError("Removing non-flat range");
        return n.cut(0, e).append(n.cut(t))
    }
    if (r != o)
        throw new RangeError("Removing non-flat range");
    return n.replaceChild(r, s.copy(xo(s.content, e - i - 1, t - i - 1)))
}
function Mo(n, e, t, r) {
    let {index: i, offset: s} = n.findIndex(e)
      , o = n.maybeChild(i);
    if (s == e || o.isText)
        return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
    let l = Mo(o.content, e - s - 1, t);
    return l && n.replaceChild(i, o.copy(l))
}
function Lc(n, e, t) {
    if (t.openStart > n.depth)
        throw new Ln("Inserted content deeper than insertion position");
    if (n.depth - t.openStart != e.depth - t.openEnd)
        throw new Ln("Inconsistent open depths");
    return Co(n, e, t, 0)
}
function Co(n, e, t, r) {
    let i = n.index(r)
      , s = n.node(r);
    if (i == e.index(r) && r < n.depth - t.openStart) {
        let o = Co(n, e, t, r + 1);
        return s.copy(s.content.replaceChild(i, o))
    } else if (t.content.size)
        if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
            let o = n.parent
              , l = o.content;
            return kt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)))
        } else {
            let {start: o, end: l} = Bc(t, n);
            return kt(s, To(n, o, l, e, r))
        }
    else
        return kt(s, Bn(n, e, r))
}
function wo(n, e) {
    if (!e.type.compatibleContent(n.type))
        throw new Ln("Cannot join " + e.type.name + " onto " + n.type.name)
}
function Xr(n, e, t) {
    let r = n.node(t);
    return wo(r, e.node(t)),
    r
}
function yt(n, e) {
    let t = e.length - 1;
    t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n)
}
function en(n, e, t, r) {
    let i = (e || n).node(t)
      , s = 0
      , o = e ? e.index(t) : i.childCount;
    n && (s = n.index(t),
    n.depth > t ? s++ : n.textOffset && (yt(n.nodeAfter, r),
    s++));
    for (let l = s; l < o; l++)
        yt(i.child(l), r);
    e && e.depth == t && e.textOffset && yt(e.nodeBefore, r)
}
function kt(n, e) {
    return n.type.checkContent(e),
    n.copy(e)
}
function To(n, e, t, r, i) {
    let s = n.depth > i && Xr(n, e, i + 1)
      , o = r.depth > i && Xr(t, r, i + 1)
      , l = [];
    return en(null, n, i, l),
    s && o && e.index(i) == t.index(i) ? (wo(s, o),
    yt(kt(s, To(n, e, t, r, i + 1)), l)) : (s && yt(kt(s, Bn(n, e, i + 1)), l),
    en(e, t, i, l),
    o && yt(kt(o, Bn(t, r, i + 1)), l)),
    en(r, null, i, l),
    new k(l)
}
function Bn(n, e, t) {
    let r = [];
    if (en(null, n, t, r),
    n.depth > t) {
        let i = Xr(n, e, t + 1);
        yt(kt(i, Bn(n, e, t + 1)), r)
    }
    return en(e, null, t, r),
    new k(r)
}
function Bc(n, e) {
    let t = e.depth - n.openStart
      , i = e.node(t).copy(n.content);
    for (let s = t - 1; s >= 0; s--)
        i = e.node(s).copy(k.from(i));
    return {
        start: i.resolveNoCache(n.openStart + t),
        end: i.resolveNoCache(i.content.size - n.openEnd - t)
    }
}
class cn {
    constructor(e, t, r) {
        this.pos = e,
        this.path = t,
        this.parentOffset = r,
        this.depth = t.length / 3 - 1
    }
    resolveDepth(e) {
        return e == null ? this.depth : e < 0 ? this.depth + e : e
    }
    get parent() {
        return this.node(this.depth)
    }
    get doc() {
        return this.node(0)
    }
    node(e) {
        return this.path[this.resolveDepth(e) * 3]
    }
    index(e) {
        return this.path[this.resolveDepth(e) * 3 + 1]
    }
    indexAfter(e) {
        return e = this.resolveDepth(e),
        this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
    }
    start(e) {
        return e = this.resolveDepth(e),
        e == 0 ? 0 : this.path[e * 3 - 1] + 1
    }
    end(e) {
        return e = this.resolveDepth(e),
        this.start(e) + this.node(e).content.size
    }
    before(e) {
        if (e = this.resolveDepth(e),
        !e)
            throw new RangeError("There is no position before the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1]
    }
    after(e) {
        if (e = this.resolveDepth(e),
        !e)
            throw new RangeError("There is no position after the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize
    }
    get textOffset() {
        return this.pos - this.path[this.path.length - 1]
    }
    get nodeAfter() {
        let e = this.parent
          , t = this.index(this.depth);
        if (t == e.childCount)
            return null;
        let r = this.pos - this.path[this.path.length - 1]
          , i = e.child(t);
        return r ? e.child(t).cut(r) : i
    }
    get nodeBefore() {
        let e = this.index(this.depth)
          , t = this.pos - this.path[this.path.length - 1];
        return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1)
    }
    posAtIndex(e, t) {
        t = this.resolveDepth(t);
        let r = this.path[t * 3]
          , i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
        for (let s = 0; s < e; s++)
            i += r.child(s).nodeSize;
        return i
    }
    marks() {
        let e = this.parent
          , t = this.index();
        if (e.content.size == 0)
            return R.none;
        if (this.textOffset)
            return e.child(t).marks;
        let r = e.maybeChild(t - 1)
          , i = e.maybeChild(t);
        if (!r) {
            let l = r;
            r = i,
            i = l
        }
        let s = r.marks;
        for (var o = 0; o < s.length; o++)
            s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
        return s
    }
    marksAcross(e) {
        let t = this.parent.maybeChild(this.index());
        if (!t || !t.isInline)
            return null;
        let r = t.marks
          , i = e.parent.maybeChild(e.index());
        for (var s = 0; s < r.length; s++)
            r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
        return r
    }
    sharedDepth(e) {
        for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e)
                return t;
        return 0
    }
    blockRange(e=this, t) {
        if (e.pos < this.pos)
            return e.blockRange(this);
        for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
            if (e.pos <= this.end(r) && (!t || t(this.node(r))))
                return new zn(this,e,r);
        return null
    }
    sameParent(e) {
        return this.pos - this.parentOffset == e.pos - e.parentOffset
    }
    max(e) {
        return e.pos > this.pos ? e : this
    }
    min(e) {
        return e.pos < this.pos ? e : this
    }
    toString() {
        let e = "";
        for (let t = 1; t <= this.depth; t++)
            e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
        return e + ":" + this.parentOffset
    }
    static resolve(e, t) {
        if (!(t >= 0 && t <= e.content.size))
            throw new RangeError("Position " + t + " out of range");
        let r = []
          , i = 0
          , s = t;
        for (let o = e; ; ) {
            let {index: l, offset: a} = o.content.findIndex(s)
              , c = s - a;
            if (r.push(o, l, i + a),
            !c || (o = o.child(l),
            o.isText))
                break;
            s = c - 1,
            i += a + 1
        }
        return new cn(t,r,s)
    }
    static resolveCached(e, t) {
        for (let i = 0; i < Tr.length; i++) {
            let s = Tr[i];
            if (s.pos == t && s.doc == e)
                return s
        }
        let r = Tr[Or] = cn.resolve(e, t);
        return Or = (Or + 1) % zc,
        r
    }
}
let Tr = []
  , Or = 0
  , zc = 12;
class zn {
    constructor(e, t, r) {
        this.$from = e,
        this.$to = t,
        this.depth = r
    }
    get start() {
        return this.$from.before(this.depth + 1)
    }
    get end() {
        return this.$to.after(this.depth + 1)
    }
    get parent() {
        return this.$from.node(this.depth)
    }
    get startIndex() {
        return this.$from.index(this.depth)
    }
    get endIndex() {
        return this.$to.indexAfter(this.depth)
    }
}
const Fc = Object.create(null);
let bt = class ei {
    constructor(e, t, r, i=R.none) {
        this.type = e,
        this.attrs = t,
        this.marks = i,
        this.content = r || k.empty
    }
    get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size
    }
    get childCount() {
        return this.content.childCount
    }
    child(e) {
        return this.content.child(e)
    }
    maybeChild(e) {
        return this.content.maybeChild(e)
    }
    forEach(e) {
        this.content.forEach(e)
    }
    nodesBetween(e, t, r, i=0) {
        this.content.nodesBetween(e, t, r, i, this)
    }
    descendants(e) {
        this.nodesBetween(0, this.content.size, e)
    }
    get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
    }
    textBetween(e, t, r, i) {
        return this.content.textBetween(e, t, r, i)
    }
    get firstChild() {
        return this.content.firstChild
    }
    get lastChild() {
        return this.content.lastChild
    }
    eq(e) {
        return this == e || this.sameMarkup(e) && this.content.eq(e.content)
    }
    sameMarkup(e) {
        return this.hasMarkup(e.type, e.attrs, e.marks)
    }
    hasMarkup(e, t, r) {
        return this.type == e && Pn(this.attrs, t || e.defaultAttrs || Fc) && R.sameSet(this.marks, r || R.none)
    }
    copy(e=null) {
        return e == this.content ? this : new ei(this.type,this.attrs,e,this.marks)
    }
    mark(e) {
        return e == this.marks ? this : new ei(this.type,this.attrs,this.content,e)
    }
    cut(e, t=this.content.size) {
        return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t))
    }
    slice(e, t=this.content.size, r=!1) {
        if (e == t)
            return S.empty;
        let i = this.resolve(e)
          , s = this.resolve(t)
          , o = r ? 0 : i.sharedDepth(t)
          , l = i.start(o)
          , c = i.node(o).content.cut(i.pos - l, s.pos - l);
        return new S(c,i.depth - o,s.depth - o)
    }
    replace(e, t, r) {
        return Lc(this.resolve(e), this.resolve(t), r)
    }
    nodeAt(e) {
        for (let t = this; ; ) {
            let {index: r, offset: i} = t.content.findIndex(e);
            if (t = t.maybeChild(r),
            !t)
                return null;
            if (i == e || t.isText)
                return t;
            e -= i + 1
        }
    }
    childAfter(e) {
        let {index: t, offset: r} = this.content.findIndex(e);
        return {
            node: this.content.maybeChild(t),
            index: t,
            offset: r
        }
    }
    childBefore(e) {
        if (e == 0)
            return {
                node: null,
                index: 0,
                offset: 0
            };
        let {index: t, offset: r} = this.content.findIndex(e);
        if (r < e)
            return {
                node: this.content.child(t),
                index: t,
                offset: r
            };
        let i = this.content.child(t - 1);
        return {
            node: i,
            index: t - 1,
            offset: r - i.nodeSize
        }
    }
    resolve(e) {
        return cn.resolveCached(this, e)
    }
    resolveNoCache(e) {
        return cn.resolve(this, e)
    }
    rangeHasMark(e, t, r) {
        let i = !1;
        return t > e && this.nodesBetween(e, t, s=>(r.isInSet(s.marks) && (i = !0),
        !i)),
        i
    }
    get isBlock() {
        return this.type.isBlock
    }
    get isTextblock() {
        return this.type.isTextblock
    }
    get inlineContent() {
        return this.type.inlineContent
    }
    get isInline() {
        return this.type.isInline
    }
    get isText() {
        return this.type.isText
    }
    get isLeaf() {
        return this.type.isLeaf
    }
    get isAtom() {
        return this.type.isAtom
    }
    toString() {
        if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
        let e = this.type.name;
        return this.content.size && (e += "(" + this.content.toStringInner() + ")"),
        Oo(this.marks, e)
    }
    contentMatchAt(e) {
        let t = this.type.contentMatch.matchFragment(this.content, 0, e);
        if (!t)
            throw new Error("Called contentMatchAt on a node with invalid content");
        return t
    }
    canReplace(e, t, r=k.empty, i=0, s=r.childCount) {
        let o = this.contentMatchAt(e).matchFragment(r, i, s)
          , l = o && o.matchFragment(this.content, t);
        if (!l || !l.validEnd)
            return !1;
        for (let a = i; a < s; a++)
            if (!this.type.allowsMarks(r.child(a).marks))
                return !1;
        return !0
    }
    canReplaceWith(e, t, r, i) {
        if (i && !this.type.allowsMarks(i))
            return !1;
        let s = this.contentMatchAt(e).matchType(r)
          , o = s && s.matchFragment(this.content, t);
        return o ? o.validEnd : !1
    }
    canAppend(e) {
        return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type)
    }
    check() {
        this.type.checkContent(this.content);
        let e = R.none;
        for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
        if (!R.sameSet(e, this.marks))
            throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);
        this.content.forEach(t=>t.check())
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return this.content.size && (e.content = this.content.toJSON()),
        this.marks.length && (e.marks = this.marks.map(t=>t.toJSON())),
        e
    }
    static fromJSON(e, t) {
        if (!t)
            throw new RangeError("Invalid input for Node.fromJSON");
        let r = null;
        if (t.marks) {
            if (!Array.isArray(t.marks))
                throw new RangeError("Invalid mark data for Node.fromJSON");
            r = t.marks.map(e.markFromJSON)
        }
        if (t.type == "text") {
            if (typeof t.text != "string")
                throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, r)
        }
        let i = k.fromJSON(e, t.content);
        return e.nodeType(t.type).create(t.attrs, i, r)
    }
}
;
bt.prototype.text = void 0;
class Fn extends bt {
    constructor(e, t, r, i) {
        if (super(e, t, null, i),
        !r)
            throw new RangeError("Empty text nodes are not allowed");
        this.text = r
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Oo(this.marks, JSON.stringify(this.text))
    }
    get textContent() {
        return this.text
    }
    textBetween(e, t) {
        return this.text.slice(e, t)
    }
    get nodeSize() {
        return this.text.length
    }
    mark(e) {
        return e == this.marks ? this : new Fn(this.type,this.attrs,this.text,e)
    }
    withText(e) {
        return e == this.text ? this : new Fn(this.type,this.attrs,e,this.marks)
    }
    cut(e=0, t=this.text.length) {
        return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t))
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text,
        e
    }
}
function Oo(n, e) {
    for (let t = n.length - 1; t >= 0; t--)
        e = n[t].type.name + "(" + e + ")";
    return e
}
class Mt {
    constructor(e) {
        this.validEnd = e,
        this.next = [],
        this.wrapCache = []
    }
    static parse(e, t) {
        let r = new Hc(e,t);
        if (r.next == null)
            return Mt.empty;
        let i = Eo(r);
        r.next && r.err("Unexpected trailing text");
        let s = Jc(Kc(i));
        return qc(s, r),
        s
    }
    matchType(e) {
        for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e)
                return this.next[t].next;
        return null
    }
    matchFragment(e, t=0, r=e.childCount) {
        let i = this;
        for (let s = t; i && s < r; s++)
            i = i.matchType(e.child(s).type);
        return i
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline
    }
    get defaultType() {
        for (let e = 0; e < this.next.length; e++) {
            let {type: t} = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs()))
                return t
        }
        return null
    }
    compatible(e) {
        for (let t = 0; t < this.next.length; t++)
            for (let r = 0; r < e.next.length; r++)
                if (this.next[t].type == e.next[r].type)
                    return !0;
        return !1
    }
    fillBefore(e, t=!1, r=0) {
        let i = [this];
        function s(o, l) {
            let a = o.matchFragment(e, r);
            if (a && (!t || a.validEnd))
                return k.from(l.map(c=>c.createAndFill()));
            for (let c = 0; c < o.next.length; c++) {
                let {type: u, next: d} = o.next[c];
                if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(d) == -1) {
                    i.push(d);
                    let f = s(d, l.concat(u));
                    if (f)
                        return f
                }
            }
            return null
        }
        return s(this, [])
    }
    findWrapping(e) {
        for (let r = 0; r < this.wrapCache.length; r += 2)
            if (this.wrapCache[r] == e)
                return this.wrapCache[r + 1];
        let t = this.computeWrapping(e);
        return this.wrapCache.push(e, t),
        t
    }
    computeWrapping(e) {
        let t = Object.create(null)
          , r = [{
            match: this,
            type: null,
            via: null
        }];
        for (; r.length; ) {
            let i = r.shift()
              , s = i.match;
            if (s.matchType(e)) {
                let o = [];
                for (let l = i; l.type; l = l.via)
                    o.push(l.type);
                return o.reverse()
            }
            for (let o = 0; o < s.next.length; o++) {
                let {type: l, next: a} = s.next[o];
                !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({
                    match: l.contentMatch,
                    type: l,
                    via: i
                }),
                t[l.name] = !0)
            }
        }
        return null
    }
    get edgeCount() {
        return this.next.length
    }
    edge(e) {
        if (e >= this.next.length)
            throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e]
    }
    toString() {
        let e = [];
        function t(r) {
            e.push(r);
            for (let i = 0; i < r.next.length; i++)
                e.indexOf(r.next[i].next) == -1 && t(r.next[i].next)
        }
        return t(this),
        e.map((r,i)=>{
            let s = i + (r.validEnd ? "*" : " ") + " ";
            for (let o = 0; o < r.next.length; o++)
                s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
            return s
        }
        ).join(`
`)
    }
}
Mt.empty = new Mt(!0);
class Hc {
    constructor(e, t) {
        this.string = e,
        this.nodeTypes = t,
        this.inline = null,
        this.pos = 0,
        this.tokens = e.split(/\s*(?=\b|\W|$)/),
        this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(),
        this.tokens[0] == "" && this.tokens.shift()
    }
    get next() {
        return this.tokens[this.pos]
    }
    eat(e) {
        return this.next == e && (this.pos++ || !0)
    }
    err(e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')")
    }
}
function Eo(n) {
    let e = [];
    do
        e.push($c(n));
    while (n.eat("|"));
    return e.length == 1 ? e[0] : {
        type: "choice",
        exprs: e
    }
}
function $c(n) {
    let e = [];
    do
        e.push(Vc(n));
    while (n.next && n.next != ")" && n.next != "|");
    return e.length == 1 ? e[0] : {
        type: "seq",
        exprs: e
    }
}
function Vc(n) {
    let e = Wc(n);
    for (; ; )
        if (n.eat("+"))
            e = {
                type: "plus",
                expr: e
            };
        else if (n.eat("*"))
            e = {
                type: "star",
                expr: e
            };
        else if (n.eat("?"))
            e = {
                type: "opt",
                expr: e
            };
        else if (n.eat("{"))
            e = _c(n, e);
        else
            break;
    return e
}
function Zi(n) {
    /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
    let e = Number(n.next);
    return n.pos++,
    e
}
function _c(n, e) {
    let t = Zi(n)
      , r = t;
    return n.eat(",") && (n.next != "}" ? r = Zi(n) : r = -1),
    n.eat("}") || n.err("Unclosed braced range"),
    {
        type: "range",
        min: t,
        max: r,
        expr: e
    }
}
function jc(n, e) {
    let t = n.nodeTypes
      , r = t[e];
    if (r)
        return [r];
    let i = [];
    for (let s in t) {
        let o = t[s];
        o.groups.indexOf(e) > -1 && i.push(o)
    }
    return i.length == 0 && n.err("No node type or group '" + e + "' found"),
    i
}
function Wc(n) {
    if (n.eat("(")) {
        let e = Eo(n);
        return n.eat(")") || n.err("Missing closing paren"),
        e
    } else if (/\W/.test(n.next))
        n.err("Unexpected token '" + n.next + "'");
    else {
        let e = jc(n, n.next).map(t=>(n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"),
        {
            type: "name",
            value: t
        }));
        return n.pos++,
        e.length == 1 ? e[0] : {
            type: "choice",
            exprs: e
        }
    }
}
function Kc(n) {
    let e = [[]];
    return i(s(n, 0), t()),
    e;
    function t() {
        return e.push([]) - 1
    }
    function r(o, l, a) {
        let c = {
            term: a,
            to: l
        };
        return e[o].push(c),
        c
    }
    function i(o, l) {
        o.forEach(a=>a.to = l)
    }
    function s(o, l) {
        if (o.type == "choice")
            return o.exprs.reduce((a,c)=>a.concat(s(c, l)), []);
        if (o.type == "seq")
            for (let a = 0; ; a++) {
                let c = s(o.exprs[a], l);
                if (a == o.exprs.length - 1)
                    return c;
                i(c, l = t())
            }
        else if (o.type == "star") {
            let a = t();
            return r(l, a),
            i(s(o.expr, a), a),
            [r(a)]
        } else if (o.type == "plus") {
            let a = t();
            return i(s(o.expr, l), a),
            i(s(o.expr, a), a),
            [r(a)]
        } else {
            if (o.type == "opt")
                return [r(l)].concat(s(o.expr, l));
            if (o.type == "range") {
                let a = l;
                for (let c = 0; c < o.min; c++) {
                    let u = t();
                    i(s(o.expr, a), u),
                    a = u
                }
                if (o.max == -1)
                    i(s(o.expr, a), a);
                else
                    for (let c = o.min; c < o.max; c++) {
                        let u = t();
                        r(a, u),
                        i(s(o.expr, a), u),
                        a = u
                    }
                return [r(a)]
            } else {
                if (o.type == "name")
                    return [r(l, void 0, o.value)];
                throw new Error("Unknown expr type")
            }
        }
    }
}
function vo(n, e) {
    return e - n
}
function Yi(n, e) {
    let t = [];
    return r(e),
    t.sort(vo);
    function r(i) {
        let s = n[i];
        if (s.length == 1 && !s[0].term)
            return r(s[0].to);
        t.push(i);
        for (let o = 0; o < s.length; o++) {
            let {term: l, to: a} = s[o];
            !l && t.indexOf(a) == -1 && r(a)
        }
    }
}
function Jc(n) {
    let e = Object.create(null);
    return t(Yi(n, 0));
    function t(r) {
        let i = [];
        r.forEach(o=>{
            n[o].forEach(({term: l, to: a})=>{
                if (!l)
                    return;
                let c;
                for (let u = 0; u < i.length; u++)
                    i[u][0] == l && (c = i[u][1]);
                Yi(n, a).forEach(u=>{
                    c || i.push([l, c = []]),
                    c.indexOf(u) == -1 && c.push(u)
                }
                )
            }
            )
        }
        );
        let s = e[r.join(",")] = new Mt(r.indexOf(n.length - 1) > -1);
        for (let o = 0; o < i.length; o++) {
            let l = i[o][1].sort(vo);
            s.next.push({
                type: i[o][0],
                next: e[l.join(",")] || t(l)
            })
        }
        return s
    }
}
function qc(n, e) {
    for (let t = 0, r = [n]; t < r.length; t++) {
        let i = r[t]
          , s = !i.validEnd
          , o = [];
        for (let l = 0; l < i.next.length; l++) {
            let {type: a, next: c} = i.next[l];
            o.push(a.name),
            s && !(a.isText || a.hasRequiredAttrs()) && (s = !1),
            r.indexOf(c) == -1 && r.push(c)
        }
        s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
    }
}
function Ao(n) {
    let e = Object.create(null);
    for (let t in n) {
        let r = n[t];
        if (!r.hasDefault)
            return null;
        e[t] = r.default
    }
    return e
}
function No(n, e) {
    let t = Object.create(null);
    for (let r in n) {
        let i = e && e[r];
        if (i === void 0) {
            let s = n[r];
            if (s.hasDefault)
                i = s.default;
            else
                throw new RangeError("No value supplied for attribute " + r)
        }
        t[r] = i
    }
    return t
}
function Do(n) {
    let e = Object.create(null);
    if (n)
        for (let t in n)
            e[t] = new Uc(n[t]);
    return e
}
let Qi = class Io {
    constructor(e, t, r) {
        this.name = e,
        this.schema = t,
        this.spec = r,
        this.markSet = null,
        this.groups = r.group ? r.group.split(" ") : [],
        this.attrs = Do(r.attrs),
        this.defaultAttrs = Ao(this.attrs),
        this.contentMatch = null,
        this.inlineContent = null,
        this.isBlock = !(r.inline || e == "text"),
        this.isText = e == "text"
    }
    get isInline() {
        return !this.isBlock
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent
    }
    get isLeaf() {
        return this.contentMatch == Mt.empty
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
    }
    hasRequiredAttrs() {
        for (let e in this.attrs)
            if (this.attrs[e].isRequired)
                return !0;
        return !1
    }
    compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch)
    }
    computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : No(this.attrs, e)
    }
    create(e=null, t, r) {
        if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
        return new bt(this,this.computeAttrs(e),k.from(t),R.setFrom(r))
    }
    createChecked(e=null, t, r) {
        return t = k.from(t),
        this.checkContent(t),
        new bt(this,this.computeAttrs(e),t,R.setFrom(r))
    }
    createAndFill(e=null, t, r) {
        if (e = this.computeAttrs(e),
        t = k.from(t),
        t.size) {
            let o = this.contentMatch.fillBefore(t);
            if (!o)
                return null;
            t = o.append(t)
        }
        let i = this.contentMatch.matchFragment(t)
          , s = i && i.fillBefore(k.empty, !0);
        return s ? new bt(this,e,t.append(s),R.setFrom(r)) : null
    }
    validContent(e) {
        let t = this.contentMatch.matchFragment(e);
        if (!t || !t.validEnd)
            return !1;
        for (let r = 0; r < e.childCount; r++)
            if (!this.allowsMarks(e.child(r).marks))
                return !1;
        return !0
    }
    checkContent(e) {
        if (!this.validContent(e))
            throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`)
    }
    allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1
    }
    allowsMarks(e) {
        if (this.markSet == null)
            return !0;
        for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type))
                return !1;
        return !0
    }
    allowedMarks(e) {
        if (this.markSet == null)
            return e;
        let t;
        for (let r = 0; r < e.length; r++)
            this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
        return t ? t.length ? t : R.none : e
    }
    static compile(e, t) {
        let r = Object.create(null);
        e.forEach((s,o)=>r[s] = new Io(s,t,o));
        let i = t.spec.topNode || "doc";
        if (!r[i])
            throw new RangeError("Schema is missing its top node type ('" + i + "')");
        if (!r.text)
            throw new RangeError("Every schema needs a 'text' type");
        for (let s in r.text.attrs)
            throw new RangeError("The text node type should not have attributes");
        return r
    }
}
;
class Uc {
    constructor(e) {
        this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"),
        this.default = e.default
    }
    get isRequired() {
        return !this.hasDefault
    }
}
class ur {
    constructor(e, t, r, i) {
        this.name = e,
        this.rank = t,
        this.schema = r,
        this.spec = i,
        this.attrs = Do(i.attrs),
        this.excluded = null;
        let s = Ao(this.attrs);
        this.instance = s ? new R(this,s) : null
    }
    create(e=null) {
        return !e && this.instance ? this.instance : new R(this,No(this.attrs, e))
    }
    static compile(e, t) {
        let r = Object.create(null)
          , i = 0;
        return e.forEach((s,o)=>r[s] = new ur(s,i++,t,o)),
        r
    }
    removeFromSet(e) {
        for (var t = 0; t < e.length; t++)
            e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)),
            t--);
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (e[t].type == this)
                return e[t]
    }
    excludes(e) {
        return this.excluded.indexOf(e) > -1
    }
}
class Gc {
    constructor(e) {
        this.cached = Object.create(null);
        let t = this.spec = {};
        for (let i in e)
            t[i] = e[i];
        t.nodes = q.from(e.nodes),
        t.marks = q.from(e.marks || {}),
        this.nodes = Qi.compile(this.spec.nodes, this),
        this.marks = ur.compile(this.spec.marks, this);
        let r = Object.create(null);
        for (let i in this.nodes) {
            if (i in this.marks)
                throw new RangeError(i + " can not be both a node and a mark");
            let s = this.nodes[i]
              , o = s.spec.content || ""
              , l = s.spec.marks;
            s.contentMatch = r[o] || (r[o] = Mt.parse(o, this.nodes)),
            s.inlineContent = s.contentMatch.inlineContent,
            s.markSet = l == "_" ? null : l ? Xi(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null
        }
        for (let i in this.marks) {
            let s = this.marks[i]
              , o = s.spec.excludes;
            s.excluded = o == null ? [s] : o == "" ? [] : Xi(this, o.split(" "))
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this),
        this.markFromJSON = this.markFromJSON.bind(this),
        this.topNodeType = this.nodes[this.spec.topNode || "doc"],
        this.cached.wrappings = Object.create(null)
    }
    node(e, t=null, r, i) {
        if (typeof e == "string")
            e = this.nodeType(e);
        else if (e instanceof Qi) {
            if (e.schema != this)
                throw new RangeError("Node type from different schema used (" + e.name + ")")
        } else
            throw new RangeError("Invalid node type: " + e);
        return e.createChecked(t, r, i)
    }
    text(e, t) {
        let r = this.nodes.text;
        return new Fn(r,r.defaultAttrs,e,R.setFrom(t))
    }
    mark(e, t) {
        return typeof e == "string" && (e = this.marks[e]),
        e.create(t)
    }
    nodeFromJSON(e) {
        return bt.fromJSON(this, e)
    }
    markFromJSON(e) {
        return R.fromJSON(this, e)
    }
    nodeType(e) {
        let t = this.nodes[e];
        if (!t)
            throw new RangeError("Unknown node type: " + e);
        return t
    }
}
function Xi(n, e) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r]
          , s = n.marks[i]
          , o = s;
        if (s)
            t.push(s);
        else
            for (let l in n.marks) {
                let a = n.marks[l];
                (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a)
            }
        if (!o)
            throw new SyntaxError("Unknown mark type: '" + e[r] + "'")
    }
    return t
}
class Ht {
    constructor(e, t) {
        this.schema = e,
        this.rules = t,
        this.tags = [],
        this.styles = [],
        t.forEach(r=>{
            r.tag ? this.tags.push(r) : r.style && this.styles.push(r)
        }
        ),
        this.normalizeLists = !this.tags.some(r=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
                return !1;
            let i = e.nodes[r.node];
            return i.contentMatch.matchType(i)
        }
        )
    }
    parse(e, t={}) {
        let r = new ts(this,t,!1);
        return r.addAll(e, t.from, t.to),
        r.finish()
    }
    parseSlice(e, t={}) {
        let r = new ts(this,t,!0);
        return r.addAll(e, t.from, t.to),
        S.maxOpen(r.finish())
    }
    matchTag(e, t, r) {
        for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
            let s = this.tags[i];
            if (Qc(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
                if (s.getAttrs) {
                    let o = s.getAttrs(e);
                    if (o === !1)
                        continue;
                    s.attrs = o || void 0
                }
                return s
            }
        }
    }
    matchStyle(e, t, r, i) {
        for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
            let o = this.styles[s]
              , l = o.style;
            if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
                if (o.getAttrs) {
                    let a = o.getAttrs(t);
                    if (a === !1)
                        continue;
                    o.attrs = a || void 0
                }
                return o
            }
        }
    }
    static schemaRules(e) {
        let t = [];
        function r(i) {
            let s = i.priority == null ? 50 : i.priority
              , o = 0;
            for (; o < t.length; o++) {
                let l = t[o];
                if ((l.priority == null ? 50 : l.priority) < s)
                    break
            }
            t.splice(o, 0, i)
        }
        for (let i in e.marks) {
            let s = e.marks[i].spec.parseDOM;
            s && s.forEach(o=>{
                r(o = ns(o)),
                o.mark || o.ignore || o.clearMark || (o.mark = i)
            }
            )
        }
        for (let i in e.nodes) {
            let s = e.nodes[i].spec.parseDOM;
            s && s.forEach(o=>{
                r(o = ns(o)),
                o.node || o.ignore || o.mark || (o.node = i)
            }
            )
        }
        return t
    }
    static fromSchema(e) {
        return e.cached.domParser || (e.cached.domParser = new Ht(e,Ht.schemaRules(e)))
    }
}
const Ro = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
}
  , Zc = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
}
  , Po = {
    ol: !0,
    ul: !0
}
  , Hn = 1
  , $n = 2
  , tn = 4;
function es(n, e, t) {
    return e != null ? (e ? Hn : 0) | (e === "full" ? $n : 0) : n && n.whitespace == "pre" ? Hn | $n : t & ~tn
}
class wn {
    constructor(e, t, r, i, s, o, l) {
        this.type = e,
        this.attrs = t,
        this.marks = r,
        this.pendingMarks = i,
        this.solid = s,
        this.options = l,
        this.content = [],
        this.activeMarks = R.none,
        this.stashMarks = [],
        this.match = o || (l & tn ? null : e.contentMatch)
    }
    findWrapping(e) {
        if (!this.match) {
            if (!this.type)
                return [];
            let t = this.type.contentMatch.fillBefore(k.from(e));
            if (t)
                this.match = this.type.contentMatch.matchFragment(t);
            else {
                let r = this.type.contentMatch, i;
                return (i = r.findWrapping(e.type)) ? (this.match = r,
                i) : null
            }
        }
        return this.match.findWrapping(e.type)
    }
    finish(e) {
        if (!(this.options & Hn)) {
            let r = this.content[this.content.length - 1], i;
            if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
                let s = r;
                r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length))
            }
        }
        let t = k.from(this.content);
        return !e && this.match && (t = t.append(this.match.fillBefore(k.empty, !0))),
        this.type ? this.type.create(this.attrs, t, this.marks) : t
    }
    popFromStashMark(e) {
        for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t]))
                return this.stashMarks.splice(t, 1)[0]
    }
    applyPending(e) {
        for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
            let i = r[t];
            (this.type ? this.type.allowsMarkType(i.type) : eu(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks),
            this.pendingMarks = i.removeFromSet(this.pendingMarks))
        }
    }
    inlineContext(e) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Ro.hasOwnProperty(e.parentNode.nodeName.toLowerCase())
    }
}
class ts {
    constructor(e, t, r) {
        this.parser = e,
        this.options = t,
        this.isOpen = r,
        this.open = 0;
        let i = t.topNode, s, o = es(null, t.preserveWhitespace, 0) | (r ? tn : 0);
        i ? s = new wn(i.type,i.attrs,R.none,R.none,!0,t.topMatch || i.type.contentMatch,o) : r ? s = new wn(null,null,R.none,R.none,!0,null,o) : s = new wn(e.schema.topNodeType,null,R.none,R.none,!0,null,o),
        this.nodes = [s],
        this.find = t.findPositions,
        this.needsBlock = !1
    }
    get top() {
        return this.nodes[this.open]
    }
    addDOM(e) {
        if (e.nodeType == 3)
            this.addTextNode(e);
        else if (e.nodeType == 1) {
            let t = e.getAttribute("style");
            if (!t)
                this.addElement(e);
            else {
                let r = this.readStyles(Xc(t));
                if (!r)
                    return;
                let[i,s] = r
                  , o = this.top;
                for (let l = 0; l < s.length; l++)
                    this.removePendingMark(s[l], o);
                for (let l = 0; l < i.length; l++)
                    this.addPendingMark(i[l]);
                this.addElement(e);
                for (let l = 0; l < i.length; l++)
                    this.removePendingMark(i[l], o);
                for (let l = 0; l < s.length; l++)
                    this.addPendingMark(s[l])
            }
        }
    }
    addTextNode(e) {
        let t = e.nodeValue
          , r = this.top;
        if (r.options & $n || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
            if (r.options & Hn)
                r.options & $n ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
            else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "),
            /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
                let i = r.content[r.content.length - 1]
                  , s = e.previousSibling;
                (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1))
            }
            t && this.insertNode(this.parser.schema.text(t)),
            this.findInText(e)
        } else
            this.findInside(e)
    }
    addElement(e, t) {
        let r = e.nodeName.toLowerCase(), i;
        Po.hasOwnProperty(r) && this.parser.normalizeLists && Yc(e);
        let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
        if (s ? s.ignore : Zc.hasOwnProperty(r))
            this.findInside(e),
            this.ignoreFallback(e);
        else if (!s || s.skip || s.closeParent) {
            s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
            let o, l = this.top, a = this.needsBlock;
            if (Ro.hasOwnProperty(r))
                l.content.length && l.content[0].isInline && this.open && (this.open--,
                l = this.top),
                o = !0,
                l.type || (this.needsBlock = !0);
            else if (!e.firstChild) {
                this.leafFallback(e);
                return
            }
            this.addAll(e),
            o && this.sync(l),
            this.needsBlock = a
        } else
            this.addElementByRule(e, s, s.consuming === !1 ? i : void 0)
    }
    leafFallback(e) {
        e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`))
    }
    ignoreFallback(e) {
        e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"))
    }
    readStyles(e) {
        let t = R.none
          , r = R.none;
        for (let i = 0; i < e.length; i += 2)
            for (let s = void 0; ; ) {
                let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
                if (!o)
                    break;
                if (o.ignore)
                    return null;
                if (o.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach(l=>{
                    o.clearMark(l) && (r = l.addToSet(r))
                }
                ) : t = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(t),
                o.consuming === !1)
                    s = o;
                else
                    break
            }
        return [t, r]
    }
    addElementByRule(e, t, r) {
        let i, s, o;
        t.node ? (s = this.parser.schema.nodes[t.node],
        s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs),
        this.addPendingMark(o));
        let l = this.top;
        if (s && s.isLeaf)
            this.findInside(e);
        else if (r)
            this.addElement(e, r);
        else if (t.getContent)
            this.findInside(e),
            t.getContent(e, this.parser.schema).forEach(a=>this.insertNode(a));
        else {
            let a = e;
            typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement),
            this.findAround(e, a, !0),
            this.addAll(a)
        }
        i && this.sync(l) && this.open--,
        o && this.removePendingMark(o, l)
    }
    addAll(e, t, r) {
        let i = t || 0;
        for (let s = t ? e.childNodes[t] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling,
        ++i)
            this.findAtPoint(e, i),
            this.addDOM(s);
        this.findAtPoint(e, i)
    }
    findPlace(e) {
        let t, r;
        for (let i = this.open; i >= 0; i--) {
            let s = this.nodes[i]
              , o = s.findWrapping(e);
            if (o && (!t || t.length > o.length) && (t = o,
            r = s,
            !o.length) || s.solid)
                break
        }
        if (!t)
            return !1;
        this.sync(r);
        for (let i = 0; i < t.length; i++)
            this.enterInner(t[i], null, !1);
        return !0
    }
    insertNode(e) {
        if (e.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && this.enterInner(t)
        }
        if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type),
            t.match && (t.match = t.match.matchType(e.type));
            let r = t.activeMarks;
            for (let i = 0; i < e.marks.length; i++)
                (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
            return t.content.push(e.mark(r)),
            !0
        }
        return !1
    }
    enter(e, t, r) {
        let i = this.findPlace(e.create(t));
        return i && this.enterInner(e, t, !0, r),
        i
    }
    enterInner(e, t=null, r=!1, i) {
        this.closeExtra();
        let s = this.top;
        s.applyPending(e),
        s.match = s.match && s.match.matchType(e);
        let o = es(e, i, s.options);
        s.options & tn && s.content.length == 0 && (o |= tn),
        this.nodes.push(new wn(e,t,s.activeMarks,s.pendingMarks,r,null,o)),
        this.open++
    }
    closeExtra(e=!1) {
        let t = this.nodes.length - 1;
        if (t > this.open) {
            for (; t > this.open; t--)
                this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1
        }
    }
    finish() {
        return this.open = 0,
        this.closeExtra(this.isOpen),
        this.nodes[0].finish(this.isOpen || this.options.topOpen)
    }
    sync(e) {
        for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e)
                return this.open = t,
                !0;
        return !1
    }
    get currentPos() {
        this.closeExtra();
        let e = 0;
        for (let t = this.open; t >= 0; t--) {
            let r = this.nodes[t].content;
            for (let i = r.length - 1; i >= 0; i--)
                e += r[i].nodeSize;
            t && e++
        }
        return e
    }
    findAtPoint(e, t) {
        if (this.find)
            for (let r = 0; r < this.find.length; r++)
                this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos)
    }
    findInside(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++)
                this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos)
    }
    findAround(e, t, r) {
        if (e != t && this.find)
            for (let i = 0; i < this.find.length; i++)
                this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos)
    }
    findInText(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++)
                this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset))
    }
    matchesContext(e) {
        if (e.indexOf("|") > -1)
            return e.split(/\s*\|\s*/).some(this.matchesContext, this);
        let t = e.split("/")
          , r = this.options.context
          , i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type)
          , s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1)
          , o = (l,a)=>{
            for (; l >= 0; l--) {
                let c = t[l];
                if (c == "") {
                    if (l == t.length - 1 || l == 0)
                        continue;
                    for (; a >= s; a--)
                        if (o(l - 1, a))
                            return !0;
                    return !1
                } else {
                    let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
                    if (!u || u.name != c && u.groups.indexOf(c) == -1)
                        return !1;
                    a--
                }
            }
            return !0
        }
        ;
        return o(t.length - 1, this.open)
    }
    textblockFromContext() {
        let e = this.options.context;
        if (e)
            for (let t = e.depth; t >= 0; t--) {
                let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
                if (r && r.isTextblock && r.defaultAttrs)
                    return r
            }
        for (let t in this.parser.schema.nodes) {
            let r = this.parser.schema.nodes[t];
            if (r.isTextblock && r.defaultAttrs)
                return r
        }
    }
    addPendingMark(e) {
        let t = tu(e, this.top.pendingMarks);
        t && this.top.stashMarks.push(t),
        this.top.pendingMarks = e.addToSet(this.top.pendingMarks)
    }
    removePendingMark(e, t) {
        for (let r = this.open; r >= 0; r--) {
            let i = this.nodes[r];
            if (i.pendingMarks.lastIndexOf(e) > -1)
                i.pendingMarks = e.removeFromSet(i.pendingMarks);
            else {
                i.activeMarks = e.removeFromSet(i.activeMarks);
                let o = i.popFromStashMark(e);
                o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks))
            }
            if (i == t)
                break
        }
    }
}
function Yc(n) {
    for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
        let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
        r && Po.hasOwnProperty(r) && t ? (t.appendChild(e),
        e = t) : r == "li" ? t = e : r && (t = null)
    }
}
function Qc(n, e) {
    return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e)
}
function Xc(n) {
    let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
    for (; t = e.exec(n); )
        r.push(t[1], t[2].trim());
    return r
}
function ns(n) {
    let e = {};
    for (let t in n)
        e[t] = n[t];
    return e
}
function eu(n, e) {
    let t = e.schema.nodes;
    for (let r in t) {
        let i = t[r];
        if (!i.allowsMarkType(n))
            continue;
        let s = []
          , o = l=>{
            s.push(l);
            for (let a = 0; a < l.edgeCount; a++) {
                let {type: c, next: u} = l.edge(a);
                if (c == e || s.indexOf(u) < 0 && o(u))
                    return !0
            }
        }
        ;
        if (o(i.contentMatch))
            return !0
    }
}
function tu(n, e) {
    for (let t = 0; t < e.length; t++)
        if (n.eq(e[t]))
            return e[t]
}
class Ee {
    constructor(e, t) {
        this.nodes = e,
        this.marks = t
    }
    serializeFragment(e, t={}, r) {
        r || (r = Er(t).createDocumentFragment());
        let i = r
          , s = [];
        return e.forEach(o=>{
            if (s.length || o.marks.length) {
                let l = 0
                  , a = 0;
                for (; l < s.length && a < o.marks.length; ) {
                    let c = o.marks[a];
                    if (!this.marks[c.type.name]) {
                        a++;
                        continue
                    }
                    if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
                        break;
                    l++,
                    a++
                }
                for (; l < s.length; )
                    i = s.pop()[1];
                for (; a < o.marks.length; ) {
                    let c = o.marks[a++]
                      , u = this.serializeMark(c, o.isInline, t);
                    u && (s.push([c, i]),
                    i.appendChild(u.dom),
                    i = u.contentDOM || u.dom)
                }
            }
            i.appendChild(this.serializeNodeInner(o, t))
        }
        ),
        r
    }
    serializeNodeInner(e, t) {
        let {dom: r, contentDOM: i} = Ee.renderSpec(Er(t), this.nodes[e.type.name](e));
        if (i) {
            if (e.isLeaf)
                throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, t, i)
        }
        return r
    }
    serializeNode(e, t={}) {
        let r = this.serializeNodeInner(e, t);
        for (let i = e.marks.length - 1; i >= 0; i--) {
            let s = this.serializeMark(e.marks[i], e.isInline, t);
            s && ((s.contentDOM || s.dom).appendChild(r),
            r = s.dom)
        }
        return r
    }
    serializeMark(e, t, r={}) {
        let i = this.marks[e.type.name];
        return i && Ee.renderSpec(Er(r), i(e, t))
    }
    static renderSpec(e, t, r=null) {
        if (typeof t == "string")
            return {
                dom: e.createTextNode(t)
            };
        if (t.nodeType != null)
            return {
                dom: t
            };
        if (t.dom && t.dom.nodeType != null)
            return t;
        let i = t[0]
          , s = i.indexOf(" ");
        s > 0 && (r = i.slice(0, s),
        i = i.slice(s + 1));
        let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
        if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
            c = 2;
            for (let u in a)
                if (a[u] != null) {
                    let d = u.indexOf(" ");
                    d > 0 ? l.setAttributeNS(u.slice(0, d), u.slice(d + 1), a[u]) : l.setAttribute(u, a[u])
                }
        }
        for (let u = c; u < t.length; u++) {
            let d = t[u];
            if (d === 0) {
                if (u < t.length - 1 || u > c)
                    throw new RangeError("Content hole must be the only child of its parent node");
                return {
                    dom: l,
                    contentDOM: l
                }
            } else {
                let {dom: f, contentDOM: h} = Ee.renderSpec(e, d, r);
                if (l.appendChild(f),
                h) {
                    if (o)
                        throw new RangeError("Multiple content holes");
                    o = h
                }
            }
        }
        return {
            dom: l,
            contentDOM: o
        }
    }
    static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new Ee(this.nodesFromSchema(e),this.marksFromSchema(e)))
    }
    static nodesFromSchema(e) {
        let t = rs(e.nodes);
        return t.text || (t.text = r=>r.text),
        t
    }
    static marksFromSchema(e) {
        return rs(e.marks)
    }
}
function rs(n) {
    let e = {};
    for (let t in n) {
        let r = n[t].spec.toDOM;
        r && (e[t] = r)
    }
    return e
}
function Er(n) {
    return n.document || window.document
}
const Lo = 65535
  , Bo = Math.pow(2, 16);
function nu(n, e) {
    return n + e * Bo
}
function is(n) {
    return n & Lo
}
function ru(n) {
    return (n - (n & Lo)) / Bo
}
const zo = 1
  , Fo = 2
  , An = 4
  , Ho = 8;
class ti {
    constructor(e, t, r) {
        this.pos = e,
        this.delInfo = t,
        this.recover = r
    }
    get deleted() {
        return (this.delInfo & Ho) > 0
    }
    get deletedBefore() {
        return (this.delInfo & (zo | An)) > 0
    }
    get deletedAfter() {
        return (this.delInfo & (Fo | An)) > 0
    }
    get deletedAcross() {
        return (this.delInfo & An) > 0
    }
}
class de {
    constructor(e, t=!1) {
        if (this.ranges = e,
        this.inverted = t,
        !e.length && de.empty)
            return de.empty
    }
    recover(e) {
        let t = 0
          , r = is(e);
        if (!this.inverted)
            for (let i = 0; i < r; i++)
                t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
        return this.ranges[r * 3] + t + ru(e)
    }
    mapResult(e, t=1) {
        return this._map(e, t, !1)
    }
    map(e, t=1) {
        return this._map(e, t, !0)
    }
    _map(e, t, r) {
        let i = 0
          , s = this.inverted ? 2 : 1
          , o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? i : 0);
            if (a > e)
                break;
            let c = this.ranges[l + s]
              , u = this.ranges[l + o]
              , d = a + c;
            if (e <= d) {
                let f = c ? e == a ? -1 : e == d ? 1 : t : t
                  , h = a + i + (f < 0 ? 0 : u);
                if (r)
                    return h;
                let p = e == (t < 0 ? a : d) ? null : nu(l / 3, e - a)
                  , m = e == a ? Fo : e == d ? zo : An;
                return (t < 0 ? e != a : e != d) && (m |= Ho),
                new ti(h,m,p)
            }
            i += u - c
        }
        return r ? e + i : new ti(e + i,0,null)
    }
    touches(e, t) {
        let r = 0
          , i = is(t)
          , s = this.inverted ? 2 : 1
          , o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? r : 0);
            if (a > e)
                break;
            let c = this.ranges[l + s]
              , u = a + c;
            if (e <= u && l == i * 3)
                return !0;
            r += this.ranges[l + o] - c
        }
        return !1
    }
    forEach(e) {
        let t = this.inverted ? 2 : 1
          , r = this.inverted ? 1 : 2;
        for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
            let o = this.ranges[i]
              , l = o - (this.inverted ? s : 0)
              , a = o + (this.inverted ? 0 : s)
              , c = this.ranges[i + t]
              , u = this.ranges[i + r];
            e(l, l + c, a, a + u),
            s += u - c
        }
    }
    invert() {
        return new de(this.ranges,!this.inverted)
    }
    toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
    }
    static offset(e) {
        return e == 0 ? de.empty : new de(e < 0 ? [0, -e, 0] : [0, 0, e])
    }
}
de.empty = new de([]);
class Lt {
    constructor(e=[], t, r=0, i=e.length) {
        this.maps = e,
        this.mirror = t,
        this.from = r,
        this.to = i
    }
    slice(e=0, t=this.maps.length) {
        return new Lt(this.maps,this.mirror,e,t)
    }
    copy() {
        return new Lt(this.maps.slice(),this.mirror && this.mirror.slice(),this.from,this.to)
    }
    appendMap(e, t) {
        this.to = this.maps.push(e),
        t != null && this.setMirror(this.maps.length - 1, t)
    }
    appendMapping(e) {
        for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
            let i = e.getMirror(t);
            this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0)
        }
    }
    getMirror(e) {
        if (this.mirror) {
            for (let t = 0; t < this.mirror.length; t++)
                if (this.mirror[t] == e)
                    return this.mirror[t + (t % 2 ? -1 : 1)]
        }
    }
    setMirror(e, t) {
        this.mirror || (this.mirror = []),
        this.mirror.push(e, t)
    }
    appendMappingInverted(e) {
        for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
            let i = e.getMirror(t);
            this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0)
        }
    }
    invert() {
        let e = new Lt;
        return e.appendMappingInverted(this),
        e
    }
    map(e, t=1) {
        if (this.mirror)
            return this._map(e, t, !0);
        for (let r = this.from; r < this.to; r++)
            e = this.maps[r].map(e, t);
        return e
    }
    mapResult(e, t=1) {
        return this._map(e, t, !1)
    }
    _map(e, t, r) {
        let i = 0;
        for (let s = this.from; s < this.to; s++) {
            let o = this.maps[s]
              , l = o.mapResult(e, t);
            if (l.recover != null) {
                let a = this.getMirror(s);
                if (a != null && a > s && a < this.to) {
                    s = a,
                    e = this.maps[a].recover(l.recover);
                    continue
                }
            }
            i |= l.delInfo,
            e = l.pos
        }
        return r ? e : new ti(e,i,null)
    }
}
const vr = Object.create(null);
class ie {
    getMap() {
        return de.empty
    }
    merge(e) {
        return null
    }
    static fromJSON(e, t) {
        if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
        let r = vr[t.stepType];
        if (!r)
            throw new RangeError(`No step type ${t.stepType} defined`);
        return r.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in vr)
            throw new RangeError("Duplicate use of step JSON ID " + e);
        return vr[e] = t,
        t.prototype.jsonID = e,
        t
    }
}
class V {
    constructor(e, t) {
        this.doc = e,
        this.failed = t
    }
    static ok(e) {
        return new V(e,null)
    }
    static fail(e) {
        return new V(null,e)
    }
    static fromReplace(e, t, r, i) {
        try {
            return V.ok(e.replace(t, r, i))
        } catch (s) {
            if (s instanceof Ln)
                return V.fail(s.message);
            throw s
        }
    }
}
function wi(n, e, t) {
    let r = [];
    for (let i = 0; i < n.childCount; i++) {
        let s = n.child(i);
        s.content.size && (s = s.copy(wi(s.content, e, s))),
        s.isInline && (s = e(s, t, i)),
        r.push(s)
    }
    return k.fromArray(r)
}
class Je extends ie {
    constructor(e, t, r) {
        super(),
        this.from = e,
        this.to = t,
        this.mark = r
    }
    apply(e) {
        let t = e.slice(this.from, this.to)
          , r = e.resolve(this.from)
          , i = r.node(r.sharedDepth(this.to))
          , s = new S(wi(t.content, (o,l)=>!o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i),t.openStart,t.openEnd);
        return V.fromReplace(e, this.from, this.to, s)
    }
    invert() {
        return new ve(this.from,this.to,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new Je(t.pos,r.pos,this.mark)
    }
    merge(e) {
        return e instanceof Je && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Je(Math.min(this.from, e.from),Math.max(this.to, e.to),this.mark) : null
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new Je(t.from,t.to,e.markFromJSON(t.mark))
    }
}
ie.jsonID("addMark", Je);
class ve extends ie {
    constructor(e, t, r) {
        super(),
        this.from = e,
        this.to = t,
        this.mark = r
    }
    apply(e) {
        let t = e.slice(this.from, this.to)
          , r = new S(wi(t.content, i=>i.mark(this.mark.removeFromSet(i.marks)), e),t.openStart,t.openEnd);
        return V.fromReplace(e, this.from, this.to, r)
    }
    invert() {
        return new Je(this.from,this.to,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new ve(t.pos,r.pos,this.mark)
    }
    merge(e) {
        return e instanceof ve && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ve(Math.min(this.from, e.from),Math.max(this.to, e.to),this.mark) : null
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new ve(t.from,t.to,e.markFromJSON(t.mark))
    }
}
ie.jsonID("removeMark", ve);
class qe extends ie {
    constructor(e, t) {
        super(),
        this.pos = e,
        this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return V.fail("No node at mark step's position");
        let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
        return V.fromReplace(e, this.pos, this.pos + 1, new S(k.from(r),0,t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        if (t) {
            let r = this.mark.addToSet(t.marks);
            if (r.length == t.marks.length) {
                for (let i = 0; i < t.marks.length; i++)
                    if (!t.marks[i].isInSet(r))
                        return new qe(this.pos,t.marks[i]);
                return new qe(this.pos,this.mark)
            }
        }
        return new $t(this.pos,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new qe(t.pos,this.mark)
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number")
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new qe(t.pos,e.markFromJSON(t.mark))
    }
}
ie.jsonID("addNodeMark", qe);
class $t extends ie {
    constructor(e, t) {
        super(),
        this.pos = e,
        this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return V.fail("No node at mark step's position");
        let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
        return V.fromReplace(e, this.pos, this.pos + 1, new S(k.from(r),0,t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        return !t || !this.mark.isInSet(t.marks) ? this : new qe(this.pos,this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new $t(t.pos,this.mark)
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number")
            throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new $t(t.pos,e.markFromJSON(t.mark))
    }
}
ie.jsonID("removeNodeMark", $t);
class Y extends ie {
    constructor(e, t, r, i=!1) {
        super(),
        this.from = e,
        this.to = t,
        this.slice = r,
        this.structure = i
    }
    apply(e) {
        return this.structure && ni(e, this.from, this.to) ? V.fail("Structure replace would overwrite content") : V.fromReplace(e, this.from, this.to, this.slice)
    }
    getMap() {
        return new de([this.from, this.to - this.from, this.slice.size])
    }
    invert(e) {
        return new Y(this.from,this.from + this.slice.size,e.slice(this.from, this.to))
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , r = e.mapResult(this.to, -1);
        return t.deletedAcross && r.deletedAcross ? null : new Y(t.pos,Math.max(t.pos, r.pos),this.slice)
    }
    merge(e) {
        if (!(e instanceof Y) || e.structure || this.structure)
            return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(this.slice.content.append(e.slice.content),this.slice.openStart,e.slice.openEnd);
            return new Y(this.from,this.to + (e.to - e.from),t,this.structure)
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(e.slice.content.append(this.slice.content),e.slice.openStart,this.slice.openEnd);
            return new Y(e.from,this.to,t,this.structure)
        } else
            return null
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()),
        this.structure && (e.structure = !0),
        e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number")
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new Y(t.from,t.to,S.fromJSON(e, t.slice),!!t.structure)
    }
}
ie.jsonID("replace", Y);
class W extends ie {
    constructor(e, t, r, i, s, o, l=!1) {
        super(),
        this.from = e,
        this.to = t,
        this.gapFrom = r,
        this.gapTo = i,
        this.slice = s,
        this.insert = o,
        this.structure = l
    }
    apply(e) {
        if (this.structure && (ni(e, this.from, this.gapFrom) || ni(e, this.gapTo, this.to)))
            return V.fail("Structure gap-replace would overwrite content");
        let t = e.slice(this.gapFrom, this.gapTo);
        if (t.openStart || t.openEnd)
            return V.fail("Gap is not a flat range");
        let r = this.slice.insertAt(this.insert, t.content);
        return r ? V.fromReplace(e, this.from, this.to, r) : V.fail("Content does not fit in gap")
    }
    getMap() {
        return new de([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
    }
    invert(e) {
        let t = this.gapTo - this.gapFrom;
        return new W(this.from,this.from + this.slice.size + t,this.from + this.insert,this.from + this.insert + t,e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),this.gapFrom - this.from,this.structure)
    }
    map(e) {
        let t = e.mapResult(this.from, 1)
          , r = e.mapResult(this.to, -1)
          , i = e.map(this.gapFrom, -1)
          , s = e.map(this.gapTo, 1);
        return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new W(t.pos,r.pos,i,s,this.slice,this.insert,this.structure)
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()),
        this.structure && (e.structure = !0),
        e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
            throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new W(t.from,t.to,t.gapFrom,t.gapTo,S.fromJSON(e, t.slice),t.insert,!!t.structure)
    }
}
ie.jsonID("replaceAround", W);
function ni(n, e, t) {
    let r = n.resolve(e)
      , i = t - e
      , s = r.depth;
    for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
        s--,
        i--;
    if (i > 0) {
        let o = r.node(s).maybeChild(r.indexAfter(s));
        for (; i > 0; ) {
            if (!o || o.isLeaf)
                return !0;
            o = o.firstChild,
            i--
        }
    }
    return !1
}
function iu(n, e, t, r) {
    let i = [], s = [], o, l;
    n.doc.nodesBetween(e, t, (a,c,u)=>{
        if (!a.isInline)
            return;
        let d = a.marks;
        if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
            let f = Math.max(c, e)
              , h = Math.min(c + a.nodeSize, t)
              , p = r.addToSet(d);
            for (let m = 0; m < d.length; m++)
                d[m].isInSet(p) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = h : i.push(o = new ve(f,h,d[m])));
            l && l.to == f ? l.to = h : s.push(l = new Je(f,h,r))
        }
    }
    ),
    i.forEach(a=>n.step(a)),
    s.forEach(a=>n.step(a))
}
function su(n, e, t, r) {
    let i = []
      , s = 0;
    n.doc.nodesBetween(e, t, (o,l)=>{
        if (!o.isInline)
            return;
        s++;
        let a = null;
        if (r instanceof ur) {
            let c = o.marks, u;
            for (; u = r.isInSet(c); )
                (a || (a = [])).push(u),
                c = u.removeFromSet(c)
        } else
            r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
        if (a && a.length) {
            let c = Math.min(l + o.nodeSize, t);
            for (let u = 0; u < a.length; u++) {
                let d = a[u], f;
                for (let h = 0; h < i.length; h++) {
                    let p = i[h];
                    p.step == s - 1 && d.eq(i[h].style) && (f = p)
                }
                f ? (f.to = c,
                f.step = s) : i.push({
                    style: d,
                    from: Math.max(l, e),
                    to: c,
                    step: s
                })
            }
        }
    }
    ),
    i.forEach(o=>n.step(new ve(o.from,o.to,o.style)))
}
function ou(n, e, t, r=t.contentMatch) {
    let i = n.doc.nodeAt(e)
      , s = []
      , o = e + 1;
    for (let l = 0; l < i.childCount; l++) {
        let a = i.child(l)
          , c = o + a.nodeSize
          , u = r.matchType(a.type);
        if (!u)
            s.push(new Y(o,c,S.empty));
        else {
            r = u;
            for (let d = 0; d < a.marks.length; d++)
                t.allowsMarkType(a.marks[d].type) || n.step(new ve(o,c,a.marks[d]))
        }
        o = c
    }
    if (!r.validEnd) {
        let l = r.fillBefore(k.empty, !0);
        n.replace(o, o, new S(l,0,0))
    }
    for (let l = s.length - 1; l >= 0; l--)
        n.step(s[l])
}
function lu(n, e, t) {
    return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t))
}
function qt(n) {
    let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
    for (let r = n.depth; ; --r) {
        let i = n.$from.node(r)
          , s = n.$from.index(r)
          , o = n.$to.indexAfter(r);
        if (r < n.depth && i.canReplace(s, o, t))
            return r;
        if (r == 0 || i.type.spec.isolating || !lu(i, s, o))
            break
    }
    return null
}
function au(n, e, t) {
    let {$from: r, $to: i, depth: s} = e
      , o = r.before(s + 1)
      , l = i.after(s + 1)
      , a = o
      , c = l
      , u = k.empty
      , d = 0;
    for (let p = s, m = !1; p > t; p--)
        m || r.index(p) > 0 ? (m = !0,
        u = k.from(r.node(p).copy(u)),
        d++) : a--;
    let f = k.empty
      , h = 0;
    for (let p = s, m = !1; p > t; p--)
        m || i.after(p + 1) < i.end(p) ? (m = !0,
        f = k.from(i.node(p).copy(f)),
        h++) : c++;
    n.step(new W(a,c,o,l,new S(u.append(f),d,h),u.size - d,!0))
}
function Ti(n, e, t=null, r=n) {
    let i = cu(n, e)
      , s = i && uu(r, e);
    return s ? i.map(ss).concat({
        type: e,
        attrs: t
    }).concat(s.map(ss)) : null
}
function ss(n) {
    return {
        type: n,
        attrs: null
    }
}
function cu(n, e) {
    let {parent: t, startIndex: r, endIndex: i} = n
      , s = t.contentMatchAt(r).findWrapping(e);
    if (!s)
        return null;
    let o = s.length ? s[0] : e;
    return t.canReplaceWith(r, i, o) ? s : null
}
function uu(n, e) {
    let {parent: t, startIndex: r, endIndex: i} = n
      , s = t.child(r)
      , o = e.contentMatch.findWrapping(s.type);
    if (!o)
        return null;
    let a = (o.length ? o[o.length - 1] : e).contentMatch;
    for (let c = r; a && c < i; c++)
        a = a.matchType(t.child(c).type);
    return !a || !a.validEnd ? null : o
}
function du(n, e, t) {
    let r = k.empty;
    for (let o = t.length - 1; o >= 0; o--) {
        if (r.size) {
            let l = t[o].type.contentMatch.matchFragment(r);
            if (!l || !l.validEnd)
                throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
        }
        r = k.from(t[o].type.create(t[o].attrs, r))
    }
    let i = e.start
      , s = e.end;
    n.step(new W(i,s,i,s,new S(r,0,0),t.length,!0))
}
function fu(n, e, t, r, i) {
    if (!r.isTextblock)
        throw new RangeError("Type given to setBlockType should be a textblock");
    let s = n.steps.length;
    n.doc.nodesBetween(e, t, (o,l)=>{
        if (o.isTextblock && !o.hasMarkup(r, i) && hu(n.doc, n.mapping.slice(s).map(l), r)) {
            n.clearIncompatible(n.mapping.slice(s).map(l, 1), r);
            let a = n.mapping.slice(s)
              , c = a.map(l, 1)
              , u = a.map(l + o.nodeSize, 1);
            return n.step(new W(c,u,c + 1,u - 1,new S(k.from(r.create(i, null, o.marks)),0,0),1,!0)),
            !1
        }
    }
    )
}
function hu(n, e, t) {
    let r = n.resolve(e)
      , i = r.index();
    return r.parent.canReplaceWith(i, i + 1, t)
}
function pu(n, e, t, r, i) {
    let s = n.doc.nodeAt(e);
    if (!s)
        throw new RangeError("No node at given position");
    t || (t = s.type);
    let o = t.create(r, null, i || s.marks);
    if (s.isLeaf)
        return n.replaceWith(e, e + s.nodeSize, o);
    if (!t.validContent(s.content))
        throw new RangeError("Invalid content for node type " + t.name);
    n.step(new W(e,e + s.nodeSize,e + 1,e + s.nodeSize - 1,new S(k.from(o),0,0),1,!0))
}
function Bt(n, e, t=1, r) {
    let i = n.resolve(e)
      , s = i.depth - t
      , o = r && r[r.length - 1] || i.parent;
    if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
        return !1;
    for (let c = i.depth - 1, u = t - 2; c > s; c--,
    u--) {
        let d = i.node(c)
          , f = i.index(c);
        if (d.type.spec.isolating)
            return !1;
        let h = d.content.cutByIndex(f, d.childCount)
          , p = r && r[u + 1];
        p && (h = h.replaceChild(0, p.type.create(p.attrs)));
        let m = r && r[u] || d;
        if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h))
            return !1
    }
    let l = i.indexAfter(s)
      , a = r && r[0];
    return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type)
}
function mu(n, e, t=1, r) {
    let i = n.doc.resolve(e)
      , s = k.empty
      , o = k.empty;
    for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--,
    c--) {
        s = k.from(i.node(l).copy(s));
        let u = r && r[c];
        o = k.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o))
    }
    n.step(new Y(e,e,new S(s.append(o),t,t),!0))
}
function et(n, e) {
    let t = n.resolve(e)
      , r = t.index();
    return $o(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1)
}
function $o(n, e) {
    return !!(n && e && !n.isLeaf && n.canAppend(e))
}
function Vo(n, e, t=-1) {
    let r = n.resolve(e);
    for (let i = r.depth; ; i--) {
        let s, o, l = r.index(i);
        if (i == r.depth ? (s = r.nodeBefore,
        o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1),
        l++,
        o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1),
        o = r.node(i + 1)),
        s && !s.isTextblock && $o(s, o) && r.node(i).canReplace(l, l + 1))
            return e;
        if (i == 0)
            break;
        e = t < 0 ? r.before(i) : r.after(i)
    }
}
function gu(n, e, t) {
    let r = new Y(e - t,e + t,S.empty,!0);
    n.step(r)
}
function yu(n, e, t) {
    let r = n.resolve(e);
    if (r.parent.canReplaceWith(r.index(), r.index(), t))
        return e;
    if (r.parentOffset == 0)
        for (let i = r.depth - 1; i >= 0; i--) {
            let s = r.index(i);
            if (r.node(i).canReplaceWith(s, s, t))
                return r.before(i + 1);
            if (s > 0)
                return null
        }
    if (r.parentOffset == r.parent.content.size)
        for (let i = r.depth - 1; i >= 0; i--) {
            let s = r.indexAfter(i);
            if (r.node(i).canReplaceWith(s, s, t))
                return r.after(i + 1);
            if (s < r.node(i).childCount)
                return null
        }
    return null
}
function ku(n, e, t) {
    let r = n.resolve(e);
    if (!t.content.size)
        return e;
    let i = t.content;
    for (let s = 0; s < t.openStart; s++)
        i = i.firstChild.content;
    for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
        for (let o = r.depth; o >= 0; o--) {
            let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1
              , a = r.index(o) + (l > 0 ? 1 : 0)
              , c = r.node(o)
              , u = !1;
            if (s == 1)
                u = c.canReplace(a, a, i);
            else {
                let d = c.contentMatchAt(a).findWrapping(i.firstChild.type);
                u = d && c.canReplaceWith(a, a, d[0])
            }
            if (u)
                return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1)
        }
    return null
}
function Oi(n, e, t=e, r=S.empty) {
    if (e == t && !r.size)
        return null;
    let i = n.resolve(e)
      , s = n.resolve(t);
    return _o(i, s, r) ? new Y(e,t,r) : new bu(i,s,r).fit()
}
function _o(n, e, t) {
    return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content)
}
class bu {
    constructor(e, t, r) {
        this.$from = e,
        this.$to = t,
        this.unplaced = r,
        this.frontier = [],
        this.placed = k.empty;
        for (let i = 0; i <= e.depth; i++) {
            let s = e.node(i);
            this.frontier.push({
                type: s.type,
                match: s.contentMatchAt(e.indexAfter(i))
            })
        }
        for (let i = e.depth; i > 0; i--)
            this.placed = k.from(e.node(i).copy(this.placed))
    }
    get depth() {
        return this.frontier.length - 1
    }
    fit() {
        for (; this.unplaced.size; ) {
            let c = this.findFittable();
            c ? this.placeNodes(c) : this.openMore() || this.dropNode()
        }
        let e = this.mustMoveInline()
          , t = this.placed.size - this.depth - this.$from.depth
          , r = this.$from
          , i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
        if (!i)
            return null;
        let s = this.placed
          , o = r.depth
          , l = i.depth;
        for (; o && l && s.childCount == 1; )
            s = s.firstChild.content,
            o--,
            l--;
        let a = new S(s,o,l);
        return e > -1 ? new W(r.pos,e,this.$to.pos,this.$to.end(),a,t) : a.size || r.pos != this.$to.pos ? new Y(r.pos,i.pos,a) : null
    }
    findFittable() {
        let e = this.unplaced.openStart;
        for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
            let s = t.firstChild;
            if (t.childCount > 1 && (i = 0),
            s.type.spec.isolating && i <= r) {
                e = r;
                break
            }
            t = s.content
        }
        for (let t = 1; t <= 2; t++)
            for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
                let i, s = null;
                r ? (s = Ar(this.unplaced.content, r - 1).firstChild,
                i = s.content) : i = this.unplaced.content;
                let o = i.firstChild;
                for (let l = this.depth; l >= 0; l--) {
                    let {type: a, match: c} = this.frontier[l], u, d = null;
                    if (t == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(k.from(o), !1)) : s && a.compatibleContent(s.type)))
                        return {
                            sliceDepth: r,
                            frontierDepth: l,
                            parent: s,
                            inject: d
                        };
                    if (t == 2 && o && (u = c.findWrapping(o.type)))
                        return {
                            sliceDepth: r,
                            frontierDepth: l,
                            parent: s,
                            wrap: u
                        };
                    if (s && c.matchType(s.type))
                        break
                }
            }
    }
    openMore() {
        let {content: e, openStart: t, openEnd: r} = this.unplaced
          , i = Ar(e, t);
        return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new S(e,t + 1,Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)),
        !0)
    }
    dropNode() {
        let {content: e, openStart: t, openEnd: r} = this.unplaced
          , i = Ar(e, t);
        if (i.childCount <= 1 && t > 0) {
            let s = e.size - t <= t + i.size;
            this.unplaced = new S(Yt(e, t - 1, 1),t - 1,s ? t - 1 : r)
        } else
            this.unplaced = new S(Yt(e, t, 1),t,r)
    }
    placeNodes({sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s}) {
        for (; this.depth > t; )
            this.closeFrontierNode();
        if (s)
            for (let m = 0; m < s.length; m++)
                this.openFrontierNode(s[m]);
        let o = this.unplaced
          , l = r ? r.content : o.content
          , a = o.openStart - e
          , c = 0
          , u = []
          , {match: d, type: f} = this.frontier[t];
        if (i) {
            for (let m = 0; m < i.childCount; m++)
                u.push(i.child(m));
            d = d.matchFragment(i)
        }
        let h = l.size + e - (o.content.size - o.openEnd);
        for (; c < l.childCount; ) {
            let m = l.child(c)
              , g = d.matchType(m.type);
            if (!g)
                break;
            c++,
            (c > 1 || a == 0 || m.content.size) && (d = g,
            u.push(jo(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)))
        }
        let p = c == l.childCount;
        p || (h = -1),
        this.placed = Qt(this.placed, t, k.from(u)),
        this.frontier[t].match = d,
        p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for (let m = 0, g = l; m < h; m++) {
            let y = g.lastChild;
            this.frontier.push({
                type: y.type,
                match: y.contentMatchAt(y.childCount)
            }),
            g = y.content
        }
        this.unplaced = p ? e == 0 ? S.empty : new S(Yt(o.content, e - 1, 1),e - 1,h < 0 ? o.openEnd : e - 1) : new S(Yt(o.content, e, c),o.openStart,o.openEnd)
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock)
            return -1;
        let e = this.frontier[this.depth], t;
        if (!e.type.isTextblock || !Nr(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
            return -1;
        let {depth: r} = this.$to
          , i = this.$to.after(r);
        for (; r > 1 && i == this.$to.end(--r); )
            ++i;
        return i
    }
    findCloseLevel(e) {
        e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let {match: r, type: i} = this.frontier[t]
              , s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1))
              , o = Nr(e, t, i, r, s);
            if (o) {
                for (let l = t - 1; l >= 0; l--) {
                    let {match: a, type: c} = this.frontier[l]
                      , u = Nr(e, l, c, a, !0);
                    if (!u || u.childCount)
                        continue e
                }
                return {
                    depth: t,
                    fit: o,
                    move: s ? e.doc.resolve(e.after(t + 1)) : e
                }
            }
        }
    }
    close(e) {
        let t = this.findCloseLevel(e);
        if (!t)
            return null;
        for (; this.depth > t.depth; )
            this.closeFrontierNode();
        t.fit.childCount && (this.placed = Qt(this.placed, t.depth, t.fit)),
        e = t.move;
        for (let r = t.depth + 1; r <= e.depth; r++) {
            let i = e.node(r)
              , s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
            this.openFrontierNode(i.type, i.attrs, s)
        }
        return e
    }
    openFrontierNode(e, t=null, r) {
        let i = this.frontier[this.depth];
        i.match = i.match.matchType(e),
        this.placed = Qt(this.placed, this.depth, k.from(e.create(t, r))),
        this.frontier.push({
            type: e,
            match: e.contentMatch
        })
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(k.empty, !0);
        t.childCount && (this.placed = Qt(this.placed, this.frontier.length, t))
    }
}
function Yt(n, e, t) {
    return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Yt(n.firstChild.content, e - 1, t)))
}
function Qt(n, e, t) {
    return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Qt(n.lastChild.content, e - 1, t)))
}
function Ar(n, e) {
    for (let t = 0; t < e; t++)
        n = n.firstChild.content;
    return n
}
function jo(n, e, t) {
    if (e <= 0)
        return n;
    let r = n.content;
    return e > 1 && (r = r.replaceChild(0, jo(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))),
    e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r),
    t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(k.empty, !0)))),
    n.copy(r)
}
function Nr(n, e, t, r, i) {
    let s = n.node(e)
      , o = i ? n.indexAfter(e) : n.index(e);
    if (o == s.childCount && !t.compatibleContent(s.type))
        return null;
    let l = r.fillBefore(s.content, !0, o);
    return l && !Su(t, s.content, o) ? l : null
}
function Su(n, e, t) {
    for (let r = t; r < e.childCount; r++)
        if (!n.allowsMarks(e.child(r).marks))
            return !0;
    return !1
}
function xu(n) {
    return n.spec.defining || n.spec.definingForContent
}
function Mu(n, e, t, r) {
    if (!r.size)
        return n.deleteRange(e, t);
    let i = n.doc.resolve(e)
      , s = n.doc.resolve(t);
    if (_o(i, s, r))
        return n.step(new Y(e,t,r));
    let o = Ko(i, n.doc.resolve(t));
    o[o.length - 1] == 0 && o.pop();
    let l = -(i.depth + 1);
    o.unshift(l);
    for (let f = i.depth, h = i.pos - 1; f > 0; f--,
    h--) {
        let p = i.node(f).type.spec;
        if (p.defining || p.definingAsContext || p.isolating)
            break;
        o.indexOf(f) > -1 ? l = f : i.before(f) == h && o.splice(1, 0, -f)
    }
    let a = o.indexOf(l)
      , c = []
      , u = r.openStart;
    for (let f = r.content, h = 0; ; h++) {
        let p = f.firstChild;
        if (c.push(p),
        h == r.openStart)
            break;
        f = p.content
    }
    for (let f = u - 1; f >= 0; f--) {
        let h = c[f].type
          , p = xu(h);
        if (p && i.node(a).type != h)
            u = f;
        else if (p || !h.isTextblock)
            break
    }
    for (let f = r.openStart; f >= 0; f--) {
        let h = (f + u + 1) % (r.openStart + 1)
          , p = c[h];
        if (p)
            for (let m = 0; m < o.length; m++) {
                let g = o[(m + a) % o.length]
                  , y = !0;
                g < 0 && (y = !1,
                g = -g);
                let x = i.node(g - 1)
                  , w = i.index(g - 1);
                if (x.canReplaceWith(w, w, p.type, p.marks))
                    return n.replace(i.before(g), y ? s.after(g) : t, new S(Wo(r.content, 0, r.openStart, h),h,r.openEnd))
            }
    }
    let d = n.steps.length;
    for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r),
    !(n.steps.length > d)); f--) {
        let h = o[f];
        h < 0 || (e = i.before(h),
        t = s.after(h))
    }
}
function Wo(n, e, t, r, i) {
    if (e < t) {
        let s = n.firstChild;
        n = n.replaceChild(0, s.copy(Wo(s.content, e + 1, t, r, s)))
    }
    if (e > r) {
        let s = i.contentMatchAt(0)
          , o = s.fillBefore(n).append(n);
        n = o.append(s.matchFragment(o).fillBefore(k.empty, !0))
    }
    return n
}
function Cu(n, e, t, r) {
    if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
        let i = yu(n.doc, e, r.type);
        i != null && (e = t = i)
    }
    n.replaceRange(e, t, new S(k.from(r),0,0))
}
function wu(n, e, t) {
    let r = n.doc.resolve(e)
      , i = n.doc.resolve(t)
      , s = Ko(r, i);
    for (let o = 0; o < s.length; o++) {
        let l = s[o]
          , a = o == s.length - 1;
        if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
            return n.delete(r.start(l), i.end(l));
        if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
            return n.delete(r.before(l), i.after(l))
    }
    for (let o = 1; o <= r.depth && o <= i.depth; o++)
        if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
            return n.delete(r.before(o), t);
    n.delete(e, t)
}
function Ko(n, e) {
    let t = []
      , r = Math.min(n.depth, e.depth);
    for (let i = r; i >= 0; i--) {
        let s = n.start(i);
        if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
            break;
        (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i)
    }
    return t
}
class zt extends ie {
    constructor(e, t, r) {
        super(),
        this.pos = e,
        this.attr = t,
        this.value = r
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t)
            return V.fail("No node at attribute step's position");
        let r = Object.create(null);
        for (let s in t.attrs)
            r[s] = t.attrs[s];
        r[this.attr] = this.value;
        let i = t.type.create(r, null, t.marks);
        return V.fromReplace(e, this.pos, this.pos + 1, new S(k.from(i),0,t.isLeaf ? 0 : 1))
    }
    getMap() {
        return de.empty
    }
    invert(e) {
        return new zt(this.pos,this.attr,e.nodeAt(this.pos).attrs[this.attr])
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new zt(t.pos,this.attr,this.value)
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number" || typeof t.attr != "string")
            throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new zt(t.pos,t.attr,t.value)
    }
}
ie.jsonID("attr", zt);
let Vt = class extends Error {
}
;
Vt = function n(e) {
    let t = Error.call(this, e);
    return t.__proto__ = n.prototype,
    t
}
;
Vt.prototype = Object.create(Error.prototype);
Vt.prototype.constructor = Vt;
Vt.prototype.name = "TransformError";
class Jo {
    constructor(e) {
        this.doc = e,
        this.steps = [],
        this.docs = [],
        this.mapping = new Lt
    }
    get before() {
        return this.docs.length ? this.docs[0] : this.doc
    }
    step(e) {
        let t = this.maybeStep(e);
        if (t.failed)
            throw new Vt(t.failed);
        return this
    }
    maybeStep(e) {
        let t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc),
        t
    }
    get docChanged() {
        return this.steps.length > 0
    }
    addStep(e, t) {
        this.docs.push(this.doc),
        this.steps.push(e),
        this.mapping.appendMap(e.getMap()),
        this.doc = t
    }
    replace(e, t=e, r=S.empty) {
        let i = Oi(this.doc, e, t, r);
        return i && this.step(i),
        this
    }
    replaceWith(e, t, r) {
        return this.replace(e, t, new S(k.from(r),0,0))
    }
    delete(e, t) {
        return this.replace(e, t, S.empty)
    }
    insert(e, t) {
        return this.replaceWith(e, e, t)
    }
    replaceRange(e, t, r) {
        return Mu(this, e, t, r),
        this
    }
    replaceRangeWith(e, t, r) {
        return Cu(this, e, t, r),
        this
    }
    deleteRange(e, t) {
        return wu(this, e, t),
        this
    }
    lift(e, t) {
        return au(this, e, t),
        this
    }
    join(e, t=1) {
        return gu(this, e, t),
        this
    }
    wrap(e, t) {
        return du(this, e, t),
        this
    }
    setBlockType(e, t=e, r, i=null) {
        return fu(this, e, t, r, i),
        this
    }
    setNodeMarkup(e, t, r=null, i) {
        return pu(this, e, t, r, i),
        this
    }
    setNodeAttribute(e, t, r) {
        return this.step(new zt(e,t,r)),
        this
    }
    addNodeMark(e, t) {
        return this.step(new qe(e,t)),
        this
    }
    removeNodeMark(e, t) {
        if (!(t instanceof R)) {
            let r = this.doc.nodeAt(e);
            if (!r)
                throw new RangeError("No node at position " + e);
            if (t = t.isInSet(r.marks),
            !t)
                return this
        }
        return this.step(new $t(e,t)),
        this
    }
    split(e, t=1, r) {
        return mu(this, e, t, r),
        this
    }
    addMark(e, t, r) {
        return iu(this, e, t, r),
        this
    }
    removeMark(e, t, r) {
        return su(this, e, t, r),
        this
    }
    clearIncompatible(e, t, r) {
        return ou(this, e, t, r),
        this
    }
}
const Dr = Object.create(null);
class N {
    constructor(e, t, r) {
        this.$anchor = e,
        this.$head = t,
        this.ranges = r || [new Tu(e.min(t),e.max(t))]
    }
    get anchor() {
        return this.$anchor.pos
    }
    get head() {
        return this.$head.pos
    }
    get from() {
        return this.$from.pos
    }
    get to() {
        return this.$to.pos
    }
    get $from() {
        return this.ranges[0].$from
    }
    get $to() {
        return this.ranges[0].$to
    }
    get empty() {
        let e = this.ranges;
        for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos)
                return !1;
        return !0
    }
    content() {
        return this.$from.doc.slice(this.from, this.to, !0)
    }
    replace(e, t=S.empty) {
        let r = t.content.lastChild
          , i = null;
        for (let l = 0; l < t.openEnd; l++)
            i = r,
            r = r.lastChild;
        let s = e.steps.length
          , o = this.ranges;
        for (let l = 0; l < o.length; l++) {
            let {$from: a, $to: c} = o[l]
              , u = e.mapping.slice(s);
            e.replaceRange(u.map(a.pos), u.map(c.pos), l ? S.empty : t),
            l == 0 && cs(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1)
        }
    }
    replaceWith(e, t) {
        let r = e.steps.length
          , i = this.ranges;
        for (let s = 0; s < i.length; s++) {
            let {$from: o, $to: l} = i[s]
              , a = e.mapping.slice(r)
              , c = a.map(o.pos)
              , u = a.map(l.pos);
            s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t),
            cs(e, r, t.isInline ? -1 : 1))
        }
    }
    static findFrom(e, t, r=!1) {
        let i = e.parent.inlineContent ? new A(e) : Et(e.node(0), e.parent, e.pos, e.index(), t, r);
        if (i)
            return i;
        for (let s = e.depth - 1; s >= 0; s--) {
            let o = t < 0 ? Et(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : Et(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
            if (o)
                return o
        }
        return null
    }
    static near(e, t=1) {
        return this.findFrom(e, t) || this.findFrom(e, -t) || new ke(e.node(0))
    }
    static atStart(e) {
        return Et(e, e, 0, 0, 1) || new ke(e)
    }
    static atEnd(e) {
        return Et(e, e, e.content.size, e.childCount, -1) || new ke(e)
    }
    static fromJSON(e, t) {
        if (!t || !t.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
        let r = Dr[t.type];
        if (!r)
            throw new RangeError(`No selection type ${t.type} defined`);
        return r.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in Dr)
            throw new RangeError("Duplicate use of selection JSON ID " + e);
        return Dr[e] = t,
        t.prototype.jsonID = e,
        t
    }
    getBookmark() {
        return A.between(this.$anchor, this.$head).getBookmark()
    }
}
N.prototype.visible = !0;
class Tu {
    constructor(e, t) {
        this.$from = e,
        this.$to = t
    }
}
let ls = !1;
function as(n) {
    !ls && !n.parent.inlineContent && (ls = !0,
    console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"))
}
class A extends N {
    constructor(e, t=e) {
        as(e),
        as(t),
        super(e, t)
    }
    get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null
    }
    map(e, t) {
        let r = e.resolve(t.map(this.head));
        if (!r.parent.inlineContent)
            return N.near(r);
        let i = e.resolve(t.map(this.anchor));
        return new A(i.parent.inlineContent ? i : r,r)
    }
    replace(e, t=S.empty) {
        if (super.replace(e, t),
        t == S.empty) {
            let r = this.$from.marksAcross(this.$to);
            r && e.ensureMarks(r)
        }
    }
    eq(e) {
        return e instanceof A && e.anchor == this.anchor && e.head == this.head
    }
    getBookmark() {
        return new dr(this.anchor,this.head)
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number" || typeof t.head != "number")
            throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new A(e.resolve(t.anchor),e.resolve(t.head))
    }
    static create(e, t, r=t) {
        let i = e.resolve(t);
        return new this(i,r == t ? i : e.resolve(r))
    }
    static between(e, t, r) {
        let i = e.pos - t.pos;
        if ((!r || i) && (r = i >= 0 ? 1 : -1),
        !t.parent.inlineContent) {
            let s = N.findFrom(t, r, !0) || N.findFrom(t, -r, !0);
            if (s)
                t = s.$head;
            else
                return N.near(t, r)
        }
        return e.parent.inlineContent || (i == 0 ? e = t : (e = (N.findFrom(e, -r, !0) || N.findFrom(e, r, !0)).$anchor,
        e.pos < t.pos != i < 0 && (e = t))),
        new A(e,t)
    }
}
N.jsonID("text", A);
class dr {
    constructor(e, t) {
        this.anchor = e,
        this.head = t
    }
    map(e) {
        return new dr(e.map(this.anchor),e.map(this.head))
    }
    resolve(e) {
        return A.between(e.resolve(this.anchor), e.resolve(this.head))
    }
}
class E extends N {
    constructor(e) {
        let t = e.nodeAfter
          , r = e.node(0).resolve(e.pos + t.nodeSize);
        super(e, r),
        this.node = t
    }
    map(e, t) {
        let {deleted: r, pos: i} = t.mapResult(this.anchor)
          , s = e.resolve(i);
        return r ? N.near(s) : new E(s)
    }
    content() {
        return new S(k.from(this.node),0,0)
    }
    eq(e) {
        return e instanceof E && e.anchor == this.anchor
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        }
    }
    getBookmark() {
        return new Ei(this.anchor)
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number")
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new E(e.resolve(t.anchor))
    }
    static create(e, t) {
        return new E(e.resolve(t))
    }
    static isSelectable(e) {
        return !e.isText && e.type.spec.selectable !== !1
    }
}
E.prototype.visible = !1;
N.jsonID("node", E);
class Ei {
    constructor(e) {
        this.anchor = e
    }
    map(e) {
        let {deleted: t, pos: r} = e.mapResult(this.anchor);
        return t ? new dr(r,r) : new Ei(r)
    }
    resolve(e) {
        let t = e.resolve(this.anchor)
          , r = t.nodeAfter;
        return r && E.isSelectable(r) ? new E(t) : N.near(t)
    }
}
class ke extends N {
    constructor(e) {
        super(e.resolve(0), e.resolve(e.content.size))
    }
    replace(e, t=S.empty) {
        if (t == S.empty) {
            e.delete(0, e.doc.content.size);
            let r = N.atStart(e.doc);
            r.eq(e.selection) || e.setSelection(r)
        } else
            super.replace(e, t)
    }
    toJSON() {
        return {
            type: "all"
        }
    }
    static fromJSON(e) {
        return new ke(e)
    }
    map(e) {
        return new ke(e)
    }
    eq(e) {
        return e instanceof ke
    }
    getBookmark() {
        return Ou
    }
}
N.jsonID("all", ke);
const Ou = {
    map() {
        return this
    },
    resolve(n) {
        return new ke(n)
    }
};
function Et(n, e, t, r, i, s=!1) {
    if (e.inlineContent)
        return A.create(n, t);
    for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
        let l = e.child(o);
        if (l.isAtom) {
            if (!s && E.isSelectable(l))
                return E.create(n, t - (i < 0 ? l.nodeSize : 0))
        } else {
            let a = Et(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
            if (a)
                return a
        }
        t += l.nodeSize * i
    }
    return null
}
function cs(n, e, t) {
    let r = n.steps.length - 1;
    if (r < e)
        return;
    let i = n.steps[r];
    if (!(i instanceof Y || i instanceof W))
        return;
    let s = n.mapping.maps[r], o;
    s.forEach((l,a,c,u)=>{
        o == null && (o = u)
    }
    ),
    n.setSelection(N.near(n.doc.resolve(o), t))
}
const us = 1
  , Tn = 2
  , ds = 4;
class Eu extends Jo {
    constructor(e) {
        super(e.doc),
        this.curSelectionFor = 0,
        this.updated = 0,
        this.meta = Object.create(null),
        this.time = Date.now(),
        this.curSelection = e.selection,
        this.storedMarks = e.storedMarks
    }
    get selection() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)),
        this.curSelectionFor = this.steps.length),
        this.curSelection
    }
    setSelection(e) {
        if (e.$from.doc != this.doc)
            throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = e,
        this.curSelectionFor = this.steps.length,
        this.updated = (this.updated | us) & ~Tn,
        this.storedMarks = null,
        this
    }
    get selectionSet() {
        return (this.updated & us) > 0
    }
    setStoredMarks(e) {
        return this.storedMarks = e,
        this.updated |= Tn,
        this
    }
    ensureMarks(e) {
        return R.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e),
        this
    }
    addStoredMark(e) {
        return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()))
    }
    removeStoredMark(e) {
        return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()))
    }
    get storedMarksSet() {
        return (this.updated & Tn) > 0
    }
    addStep(e, t) {
        super.addStep(e, t),
        this.updated = this.updated & ~Tn,
        this.storedMarks = null
    }
    setTime(e) {
        return this.time = e,
        this
    }
    replaceSelection(e) {
        return this.selection.replace(this, e),
        this
    }
    replaceSelectionWith(e, t=!0) {
        let r = this.selection;
        return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || R.none))),
        r.replaceWith(this, e),
        this
    }
    deleteSelection() {
        return this.selection.replace(this),
        this
    }
    insertText(e, t, r) {
        let i = this.doc.type.schema;
        if (t == null)
            return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
        {
            if (r == null && (r = t),
            r = r ?? t,
            !e)
                return this.deleteRange(t, r);
            let s = this.storedMarks;
            if (!s) {
                let o = this.doc.resolve(t);
                s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r))
            }
            return this.replaceRangeWith(t, r, i.text(e, s)),
            this.selection.empty || this.setSelection(N.near(this.selection.$to)),
            this
        }
    }
    setMeta(e, t) {
        return this.meta[typeof e == "string" ? e : e.key] = t,
        this
    }
    getMeta(e) {
        return this.meta[typeof e == "string" ? e : e.key]
    }
    get isGeneric() {
        for (let e in this.meta)
            return !1;
        return !0
    }
    scrollIntoView() {
        return this.updated |= ds,
        this
    }
    get scrolledIntoView() {
        return (this.updated & ds) > 0
    }
}
function fs(n, e) {
    return !e || !n ? n : n.bind(e)
}
class Xt {
    constructor(e, t, r) {
        this.name = e,
        this.init = fs(t.init, r),
        this.apply = fs(t.apply, r)
    }
}
const vu = [new Xt("doc",{
    init(n) {
        return n.doc || n.schema.topNodeType.createAndFill()
    },
    apply(n) {
        return n.doc
    }
}), new Xt("selection",{
    init(n, e) {
        return n.selection || N.atStart(e.doc)
    },
    apply(n) {
        return n.selection
    }
}), new Xt("storedMarks",{
    init(n) {
        return n.storedMarks || null
    },
    apply(n, e, t, r) {
        return r.selection.$cursor ? n.storedMarks : null
    }
}), new Xt("scrollToSelection",{
    init() {
        return 0
    },
    apply(n, e) {
        return n.scrolledIntoView ? e + 1 : e
    }
})];
class Ir {
    constructor(e, t) {
        this.schema = e,
        this.plugins = [],
        this.pluginsByKey = Object.create(null),
        this.fields = vu.slice(),
        t && t.forEach(r=>{
            if (this.pluginsByKey[r.key])
                throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
            this.plugins.push(r),
            this.pluginsByKey[r.key] = r,
            r.spec.state && this.fields.push(new Xt(r.key,r.spec.state,r))
        }
        )
    }
}
class Nt {
    constructor(e) {
        this.config = e
    }
    get schema() {
        return this.config.schema
    }
    get plugins() {
        return this.config.plugins
    }
    apply(e) {
        return this.applyTransaction(e).state
    }
    filterTransaction(e, t=-1) {
        for (let r = 0; r < this.config.plugins.length; r++)
            if (r != t) {
                let i = this.config.plugins[r];
                if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
                    return !1
            }
        return !0
    }
    applyTransaction(e) {
        if (!this.filterTransaction(e))
            return {
                state: this,
                transactions: []
            };
        let t = [e]
          , r = this.applyInner(e)
          , i = null;
        for (; ; ) {
            let s = !1;
            for (let o = 0; o < this.config.plugins.length; o++) {
                let l = this.config.plugins[o];
                if (l.spec.appendTransaction) {
                    let a = i ? i[o].n : 0
                      , c = i ? i[o].state : this
                      , u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
                    if (u && r.filterTransaction(u, o)) {
                        if (u.setMeta("appendedTransaction", e),
                        !i) {
                            i = [];
                            for (let d = 0; d < this.config.plugins.length; d++)
                                i.push(d < o ? {
                                    state: r,
                                    n: t.length
                                } : {
                                    state: this,
                                    n: 0
                                })
                        }
                        t.push(u),
                        r = r.applyInner(u),
                        s = !0
                    }
                    i && (i[o] = {
                        state: r,
                        n: t.length
                    })
                }
            }
            if (!s)
                return {
                    state: r,
                    transactions: t
                }
        }
    }
    applyInner(e) {
        if (!e.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
        let t = new Nt(this.config)
          , r = this.config.fields;
        for (let i = 0; i < r.length; i++) {
            let s = r[i];
            t[s.name] = s.apply(e, this[s.name], this, t)
        }
        return t
    }
    get tr() {
        return new Eu(this)
    }
    static create(e) {
        let t = new Ir(e.doc ? e.doc.type.schema : e.schema,e.plugins)
          , r = new Nt(t);
        for (let i = 0; i < t.fields.length; i++)
            r[t.fields[i].name] = t.fields[i].init(e, r);
        return r
    }
    reconfigure(e) {
        let t = new Ir(this.schema,e.plugins)
          , r = t.fields
          , i = new Nt(t);
        for (let s = 0; s < r.length; s++) {
            let o = r[s].name;
            i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i)
        }
        return i
    }
    toJSON(e) {
        let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks && (t.storedMarks = this.storedMarks.map(r=>r.toJSON())),
        e && typeof e == "object")
            for (let r in e) {
                if (r == "doc" || r == "selection")
                    throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                let i = e[r]
                  , s = i.spec.state;
                s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]))
            }
        return t
    }
    static fromJSON(e, t, r) {
        if (!t)
            throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!e.schema)
            throw new RangeError("Required config field 'schema' missing");
        let i = new Ir(e.schema,e.plugins)
          , s = new Nt(i);
        return i.fields.forEach(o=>{
            if (o.name == "doc")
                s.doc = bt.fromJSON(e.schema, t.doc);
            else if (o.name == "selection")
                s.selection = N.fromJSON(s.doc, t.selection);
            else if (o.name == "storedMarks")
                t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
            else {
                if (r)
                    for (let l in r) {
                        let a = r[l]
                          , c = a.spec.state;
                        if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
                            s[o.name] = c.fromJSON.call(a, e, t[l], s);
                            return
                        }
                    }
                s[o.name] = o.init(e, s)
            }
        }
        ),
        s
    }
}
function qo(n, e, t) {
    for (let r in n) {
        let i = n[r];
        i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = qo(i, e, {})),
        t[r] = i
    }
    return t
}
class ae {
    constructor(e) {
        this.spec = e,
        this.props = {},
        e.props && qo(e.props, this, this.props),
        this.key = e.key ? e.key.key : Uo("plugin")
    }
    getState(e) {
        return e[this.key]
    }
}
const Rr = Object.create(null);
function Uo(n) {
    return n in Rr ? n + "$" + ++Rr[n] : (Rr[n] = 0,
    n + "$")
}
class xe {
    constructor(e="key") {
        this.key = Uo(e)
    }
    get(e) {
        return e.config.pluginsByKey[this.key]
    }
    getState(e) {
        return e[this.key]
    }
}
const fe = function(n) {
    for (var e = 0; ; e++)
        if (n = n.previousSibling,
        !n)
            return e
}
  , un = function(n) {
    let e = n.assignedSlot || n.parentNode;
    return e && e.nodeType == 11 ? e.host : e
};
let hs = null;
const Pe = function(n, e, t) {
    let r = hs || (hs = document.createRange());
    return r.setEnd(n, t ?? n.nodeValue.length),
    r.setStart(n, e || 0),
    r
}
  , Ct = function(n, e, t, r) {
    return t && (ps(n, e, t, r, -1) || ps(n, e, t, r, 1))
}
  , Au = /^(img|br|input|textarea|hr)$/i;
function ps(n, e, t, r, i) {
    for (; ; ) {
        if (n == t && e == r)
            return !0;
        if (e == (i < 0 ? 0 : Oe(n))) {
            let s = n.parentNode;
            if (!s || s.nodeType != 1 || Du(n) || Au.test(n.nodeName) || n.contentEditable == "false")
                return !1;
            e = fe(n) + (i < 0 ? 0 : 1),
            n = s
        } else if (n.nodeType == 1) {
            if (n = n.childNodes[e + (i < 0 ? -1 : 0)],
            n.contentEditable == "false")
                return !1;
            e = i < 0 ? Oe(n) : 0
        } else
            return !1
    }
}
function Oe(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length
}
function Nu(n, e, t) {
    for (let r = e == 0, i = e == Oe(n); r || i; ) {
        if (n == t)
            return !0;
        let s = fe(n);
        if (n = n.parentNode,
        !n)
            return !1;
        r = r && s == 0,
        i = i && s == Oe(n)
    }
}
function Du(n) {
    let e;
    for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
        ;
    return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n)
}
const fr = function(n) {
    return n.focusNode && Ct(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset)
};
function ct(n, e) {
    let t = document.createEvent("Event");
    return t.initEvent("keydown", !0, !0),
    t.keyCode = n,
    t.key = t.code = e,
    t
}
function Iu(n) {
    let e = n.activeElement;
    for (; e && e.shadowRoot; )
        e = e.shadowRoot.activeElement;
    return e
}
function Ru(n, e, t) {
    if (n.caretPositionFromPoint)
        try {
            let r = n.caretPositionFromPoint(e, t);
            if (r)
                return {
                    node: r.offsetNode,
                    offset: r.offset
                }
        } catch {}
    if (n.caretRangeFromPoint) {
        let r = n.caretRangeFromPoint(e, t);
        if (r)
            return {
                node: r.startContainer,
                offset: r.startOffset
            }
    }
}
const Ae = typeof navigator < "u" ? navigator : null
  , ms = typeof document < "u" ? document : null
  , tt = Ae && Ae.userAgent || ""
  , ri = /Edge\/(\d+)/.exec(tt)
  , Go = /MSIE \d/.exec(tt)
  , ii = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(tt)
  , re = !!(Go || ii || ri)
  , Ge = Go ? document.documentMode : ii ? +ii[1] : ri ? +ri[1] : 0
  , be = !re && /gecko\/(\d+)/i.test(tt);
be && +(/Firefox\/(\d+)/.exec(tt) || [0, 0])[1];
const si = !re && /Chrome\/(\d+)/.exec(tt)
  , Q = !!si
  , Pu = si ? +si[1] : 0
  , X = !re && !!Ae && /Apple Computer/.test(Ae.vendor)
  , _t = X && (/Mobile\/\w+/.test(tt) || !!Ae && Ae.maxTouchPoints > 2)
  , ue = _t || (Ae ? /Mac/.test(Ae.platform) : !1)
  , Lu = Ae ? /Win/.test(Ae.platform) : !1
  , me = /Android \d/.test(tt)
  , hr = !!ms && "webkitFontSmoothing"in ms.documentElement.style
  , Bu = hr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function zu(n) {
    return {
        left: 0,
        right: n.documentElement.clientWidth,
        top: 0,
        bottom: n.documentElement.clientHeight
    }
}
function He(n, e) {
    return typeof n == "number" ? n : n[e]
}
function Fu(n) {
    let e = n.getBoundingClientRect()
      , t = e.width / n.offsetWidth || 1
      , r = e.height / n.offsetHeight || 1;
    return {
        left: e.left,
        right: e.left + n.clientWidth * t,
        top: e.top,
        bottom: e.top + n.clientHeight * r
    }
}
function gs(n, e, t) {
    let r = n.someProp("scrollThreshold") || 0
      , i = n.someProp("scrollMargin") || 5
      , s = n.dom.ownerDocument;
    for (let o = t || n.dom; o; o = un(o)) {
        if (o.nodeType != 1)
            continue;
        let l = o
          , a = l == s.body
          , c = a ? zu(s) : Fu(l)
          , u = 0
          , d = 0;
        if (e.top < c.top + He(r, "top") ? d = -(c.top - e.top + He(i, "top")) : e.bottom > c.bottom - He(r, "bottom") && (d = e.bottom - c.bottom + He(i, "bottom")),
        e.left < c.left + He(r, "left") ? u = -(c.left - e.left + He(i, "left")) : e.right > c.right - He(r, "right") && (u = e.right - c.right + He(i, "right")),
        u || d)
            if (a)
                s.defaultView.scrollBy(u, d);
            else {
                let f = l.scrollLeft
                  , h = l.scrollTop;
                d && (l.scrollTop += d),
                u && (l.scrollLeft += u);
                let p = l.scrollLeft - f
                  , m = l.scrollTop - h;
                e = {
                    left: e.left - p,
                    top: e.top - m,
                    right: e.right - p,
                    bottom: e.bottom - m
                }
            }
        if (a)
            break
    }
}
function Hu(n) {
    let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
    for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
        let l = n.root.elementFromPoint(s, o);
        if (!l || l == n.dom || !n.dom.contains(l))
            continue;
        let a = l.getBoundingClientRect();
        if (a.top >= t - 20) {
            r = l,
            i = a.top;
            break
        }
    }
    return {
        refDOM: r,
        refTop: i,
        stack: Zo(n.dom)
    }
}
function Zo(n) {
    let e = []
      , t = n.ownerDocument;
    for (let r = n; r && (e.push({
        dom: r,
        top: r.scrollTop,
        left: r.scrollLeft
    }),
    n != t); r = un(r))
        ;
    return e
}
function $u({refDOM: n, refTop: e, stack: t}) {
    let r = n ? n.getBoundingClientRect().top : 0;
    Yo(t, r == 0 ? 0 : r - e)
}
function Yo(n, e) {
    for (let t = 0; t < n.length; t++) {
        let {dom: r, top: i, left: s} = n[t];
        r.scrollTop != i + e && (r.scrollTop = i + e),
        r.scrollLeft != s && (r.scrollLeft = s)
    }
}
let Tt = null;
function Vu(n) {
    if (n.setActive)
        return n.setActive();
    if (Tt)
        return n.focus(Tt);
    let e = Zo(n);
    n.focus(Tt == null ? {
        get preventScroll() {
            return Tt = {
                preventScroll: !0
            },
            !0
        }
    } : void 0),
    Tt || (Tt = !1,
    Yo(e, 0))
}
function Qo(n, e) {
    let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
    for (let u = n.firstChild, d = 0; u; u = u.nextSibling,
    d++) {
        let f;
        if (u.nodeType == 1)
            f = u.getClientRects();
        else if (u.nodeType == 3)
            f = Pe(u).getClientRects();
        else
            continue;
        for (let h = 0; h < f.length; h++) {
            let p = f[h];
            if (p.top <= o && p.bottom >= l) {
                o = Math.max(p.bottom, o),
                l = Math.min(p.top, l);
                let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
                if (m < r) {
                    t = u,
                    r = m,
                    i = m && t.nodeType == 3 ? {
                        left: p.right < e.left ? p.right : p.left,
                        top: e.top
                    } : e,
                    u.nodeType == 1 && m && (s = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
                    continue
                }
            } else
                p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u,
                c = {
                    left: Math.max(p.left, Math.min(p.right, e.left)),
                    top: p.top
                });
            !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = d + 1)
        }
    }
    return !t && a && (t = a,
    i = c,
    r = 0),
    t && t.nodeType == 3 ? _u(t, i) : !t || r && t.nodeType == 1 ? {
        node: n,
        offset: s
    } : Qo(t, i)
}
function _u(n, e) {
    let t = n.nodeValue.length
      , r = document.createRange();
    for (let i = 0; i < t; i++) {
        r.setEnd(n, i + 1),
        r.setStart(n, i);
        let s = Ve(r, 1);
        if (s.top != s.bottom && vi(e, s))
            return {
                node: n,
                offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0)
            }
    }
    return {
        node: n,
        offset: 0
    }
}
function vi(n, e) {
    return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1
}
function ju(n, e) {
    let t = n.parentNode;
    return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n
}
function Wu(n, e, t) {
    let {node: r, offset: i} = Qo(e, t)
      , s = -1;
    if (r.nodeType == 1 && !r.firstChild) {
        let o = r.getBoundingClientRect();
        s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1
    }
    return n.docView.posFromDOM(r, i, s)
}
function Ku(n, e, t, r) {
    let i = -1;
    for (let s = e, o = !1; s != n.dom; ) {
        let l = n.docView.nearestDesc(s, !0);
        if (!l)
            return null;
        if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent && !o || !l.contentDOM)) {
            let a = l.dom.getBoundingClientRect();
            if (l.node.isBlock && l.parent && !o && (o = !0,
            a.left > r.left || a.top > r.top ? i = l.posBefore : (a.right < r.left || a.bottom < r.top) && (i = l.posAfter)),
            !l.contentDOM && i < 0)
                return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter
        }
        s = l.dom.parentNode
    }
    return i > -1 ? i : n.docView.posFromDOM(e, t, -1)
}
function Xo(n, e, t) {
    let r = n.childNodes.length;
    if (r && t.top < t.bottom)
        for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
            let o = n.childNodes[s];
            if (o.nodeType == 1) {
                let l = o.getClientRects();
                for (let a = 0; a < l.length; a++) {
                    let c = l[a];
                    if (vi(e, c))
                        return Xo(o, e, c)
                }
            }
            if ((s = (s + 1) % r) == i)
                break
        }
    return n
}
function Ju(n, e) {
    let t = n.dom.ownerDocument, r, i = 0, s = Ru(t, e.left, e.top);
    s && ({node: r, offset: i} = s);
    let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
    if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
        let c = n.dom.getBoundingClientRect();
        if (!vi(e, c) || (o = Xo(n.dom, e, c),
        !o))
            return null
    }
    if (X)
        for (let c = o; r && c; c = un(c))
            c.draggable && (r = void 0);
    if (o = ju(o, e),
    r) {
        if (be && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length),
        i < r.childNodes.length)) {
            let c = r.childNodes[i], u;
            c.nodeName == "IMG" && (u = c.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++
        }
        r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Ku(n, r, i, e))
    }
    l == null && (l = Wu(n, o, e));
    let a = n.docView.nearestDesc(o, !0);
    return {
        pos: l,
        inside: a ? a.posAtStart - a.border : -1
    }
}
function ys(n) {
    return n.top < n.bottom || n.left < n.right
}
function Ve(n, e) {
    let t = n.getClientRects();
    if (t.length) {
        let r = t[e < 0 ? 0 : t.length - 1];
        if (ys(r))
            return r
    }
    return Array.prototype.find.call(t, ys) || n.getBoundingClientRect()
}
const qu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function el(n, e, t) {
    let {node: r, offset: i, atom: s} = n.docView.domFromPos(e, t < 0 ? -1 : 1)
      , o = hr || be;
    if (r.nodeType == 3)
        if (o && (qu.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
            let a = Ve(Pe(r, i, i), t);
            if (be && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                let c = Ve(Pe(r, i - 1, i - 1), -1);
                if (c.top == a.top) {
                    let u = Ve(Pe(r, i, i + 1), -1);
                    if (u.top != a.top)
                        return Gt(u, u.left < c.left)
                }
            }
            return a
        } else {
            let a = i
              , c = i
              , u = t < 0 ? 1 : -1;
            return t < 0 && !i ? (c++,
            u = -1) : t >= 0 && i == r.nodeValue.length ? (a--,
            u = 1) : t < 0 ? a-- : c++,
            Gt(Ve(Pe(r, a, c), u), u < 0)
        }
    if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
        if (s == null && i && (t < 0 || i == Oe(r))) {
            let a = r.childNodes[i - 1];
            if (a.nodeType == 1)
                return Pr(a.getBoundingClientRect(), !1)
        }
        if (s == null && i < Oe(r)) {
            let a = r.childNodes[i];
            if (a.nodeType == 1)
                return Pr(a.getBoundingClientRect(), !0)
        }
        return Pr(r.getBoundingClientRect(), t >= 0)
    }
    if (s == null && i && (t < 0 || i == Oe(r))) {
        let a = r.childNodes[i - 1]
          , c = a.nodeType == 3 ? Pe(a, Oe(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
        if (c)
            return Gt(Ve(c, 1), !1)
    }
    if (s == null && i < Oe(r)) {
        let a = r.childNodes[i];
        for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
            a = a.nextSibling;
        let c = a ? a.nodeType == 3 ? Pe(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
        if (c)
            return Gt(Ve(c, -1), !0)
    }
    return Gt(Ve(r.nodeType == 3 ? Pe(r) : r, -t), t >= 0)
}
function Gt(n, e) {
    if (n.width == 0)
        return n;
    let t = e ? n.left : n.right;
    return {
        top: n.top,
        bottom: n.bottom,
        left: t,
        right: t
    }
}
function Pr(n, e) {
    if (n.height == 0)
        return n;
    let t = e ? n.top : n.bottom;
    return {
        top: t,
        bottom: t,
        left: n.left,
        right: n.right
    }
}
function tl(n, e, t) {
    let r = n.state
      , i = n.root.activeElement;
    r != e && n.updateState(e),
    i != n.dom && n.focus();
    try {
        return t()
    } finally {
        r != e && n.updateState(r),
        i != n.dom && i && i.focus()
    }
}
function Uu(n, e, t) {
    let r = e.selection
      , i = t == "up" ? r.$from : r.$to;
    return tl(n, e, ()=>{
        let {node: s} = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
        for (; ; ) {
            let l = n.docView.nearestDesc(s, !0);
            if (!l)
                break;
            if (l.node.isBlock) {
                s = l.contentDOM || l.dom;
                break
            }
            s = l.dom.parentNode
        }
        let o = el(n, i.pos, 1);
        for (let l = s.firstChild; l; l = l.nextSibling) {
            let a;
            if (l.nodeType == 1)
                a = l.getClientRects();
            else if (l.nodeType == 3)
                a = Pe(l, 0, l.nodeValue.length).getClientRects();
            else
                continue;
            for (let c = 0; c < a.length; c++) {
                let u = a[c];
                if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
                    return !1
            }
        }
        return !0
    }
    )
}
const Gu = /[\u0590-\u08ac]/;
function Zu(n, e, t) {
    let {$head: r} = e.selection;
    if (!r.parent.isTextblock)
        return !1;
    let i = r.parentOffset
      , s = !i
      , o = i == r.parent.content.size
      , l = n.domSelection();
    return !Gu.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : tl(n, e, ()=>{
        let {focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d} = n.domSelectionRange()
          , f = l.caretBidiLevel;
        l.modify("move", t, "character");
        let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom
          , {focusNode: p, focusOffset: m} = n.domSelectionRange()
          , g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
        try {
            l.collapse(u, d),
            a && (a != u || c != d) && l.extend && l.extend(a, c)
        } catch {}
        return f != null && (l.caretBidiLevel = f),
        g
    }
    )
}
let ks = null
  , bs = null
  , Ss = !1;
function Yu(n, e, t) {
    return ks == e && bs == t ? Ss : (ks = e,
    bs = t,
    Ss = t == "up" || t == "down" ? Uu(n, e, t) : Zu(n, e, t))
}
const he = 0
  , xs = 1
  , ht = 2
  , Ne = 3;
class kn {
    constructor(e, t, r, i) {
        this.parent = e,
        this.children = t,
        this.dom = r,
        this.contentDOM = i,
        this.dirty = he,
        r.pmViewDesc = this
    }
    matchesWidget(e) {
        return !1
    }
    matchesMark(e) {
        return !1
    }
    matchesNode(e, t, r) {
        return !1
    }
    matchesHack(e) {
        return !1
    }
    parseRule() {
        return null
    }
    stopEvent(e) {
        return !1
    }
    get size() {
        let e = 0;
        for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
        return e
    }
    get border() {
        return 0
    }
    destroy() {
        this.parent = void 0,
        this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
        for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy()
    }
    posBeforeChild(e) {
        for (let t = 0, r = this.posAtStart; ; t++) {
            let i = this.children[t];
            if (i == e)
                return r;
            r += i.size
        }
    }
    get posBefore() {
        return this.parent.posBeforeChild(this)
    }
    get posAtStart() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
    }
    get posAfter() {
        return this.posBefore + this.size
    }
    get posAtEnd() {
        return this.posAtStart + this.size - 2 * this.border
    }
    localPosFromDOM(e, t, r) {
        if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
            if (r < 0) {
                let s, o;
                if (e == this.contentDOM)
                    s = e.childNodes[t - 1];
                else {
                    for (; e.parentNode != this.contentDOM; )
                        e = e.parentNode;
                    s = e.previousSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this); )
                    s = s.previousSibling;
                return s ? this.posBeforeChild(o) + o.size : this.posAtStart
            } else {
                let s, o;
                if (e == this.contentDOM)
                    s = e.childNodes[t];
                else {
                    for (; e.parentNode != this.contentDOM; )
                        e = e.parentNode;
                    s = e.nextSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this); )
                    s = s.nextSibling;
                return s ? this.posBeforeChild(o) : this.posAtEnd
            }
        let i;
        if (e == this.dom && this.contentDOM)
            i = t > fe(this.contentDOM);
        else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
            i = e.compareDocumentPosition(this.contentDOM) & 2;
        else if (this.dom.firstChild) {
            if (t == 0)
                for (let s = e; ; s = s.parentNode) {
                    if (s == this.dom) {
                        i = !1;
                        break
                    }
                    if (s.previousSibling)
                        break
                }
            if (i == null && t == e.childNodes.length)
                for (let s = e; ; s = s.parentNode) {
                    if (s == this.dom) {
                        i = !0;
                        break
                    }
                    if (s.nextSibling)
                        break
                }
        }
        return i ?? r > 0 ? this.posAtEnd : this.posAtStart
    }
    nearestDesc(e, t=!1) {
        for (let r = !0, i = e; i; i = i.parentNode) {
            let s = this.getDesc(i), o;
            if (s && (!t || s.node))
                if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
                    r = !1;
                else
                    return s
        }
    }
    getDesc(e) {
        let t = e.pmViewDesc;
        for (let r = t; r; r = r.parent)
            if (r == this)
                return t
    }
    posFromDOM(e, t, r) {
        for (let i = e; i; i = i.parentNode) {
            let s = this.getDesc(i);
            if (s)
                return s.localPosFromDOM(e, t, r)
        }
        return -1
    }
    descAt(e) {
        for (let t = 0, r = 0; t < this.children.length; t++) {
            let i = this.children[t]
              , s = r + i.size;
            if (r == e && s != r) {
                for (; !i.border && i.children.length; )
                    i = i.children[0];
                return i
            }
            if (e < s)
                return i.descAt(e - r - i.border);
            r = s
        }
    }
    domFromPos(e, t) {
        if (!this.contentDOM)
            return {
                node: this.dom,
                offset: 0,
                atom: e + 1
            };
        let r = 0
          , i = 0;
        for (let s = 0; r < this.children.length; r++) {
            let o = this.children[r]
              , l = s + o.size;
            if (l > e || o instanceof rl) {
                i = e - s;
                break
            }
            s = l
        }
        if (i)
            return this.children[r].domFromPos(i - this.children[r].border, t);
        for (let s; r && !(s = this.children[r - 1]).size && s instanceof nl && s.side >= 0; r--)
            ;
        if (t <= 0) {
            let s, o = !0;
            for (; s = r ? this.children[r - 1] : null,
            !(!s || s.dom.parentNode == this.contentDOM); r--,
            o = !1)
                ;
            return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : {
                node: this.contentDOM,
                offset: s ? fe(s.dom) + 1 : 0
            }
        } else {
            let s, o = !0;
            for (; s = r < this.children.length ? this.children[r] : null,
            !(!s || s.dom.parentNode == this.contentDOM); r++,
            o = !1)
                ;
            return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : {
                node: this.contentDOM,
                offset: s ? fe(s.dom) : this.contentDOM.childNodes.length
            }
        }
    }
    parseRange(e, t, r=0) {
        if (this.children.length == 0)
            return {
                node: this.contentDOM,
                from: e,
                to: t,
                fromOffset: 0,
                toOffset: this.contentDOM.childNodes.length
            };
        let i = -1
          , s = -1;
        for (let o = r, l = 0; ; l++) {
            let a = this.children[l]
              , c = o + a.size;
            if (i == -1 && e <= c) {
                let u = o + a.border;
                if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
                    return a.parseRange(e, t, u);
                e = o;
                for (let d = l; d > 0; d--) {
                    let f = this.children[d - 1];
                    if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
                        i = fe(f.dom) + 1;
                        break
                    }
                    e -= f.size
                }
                i == -1 && (i = 0)
            }
            if (i > -1 && (c > t || l == this.children.length - 1)) {
                t = c;
                for (let u = l + 1; u < this.children.length; u++) {
                    let d = this.children[u];
                    if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
                        s = fe(d.dom);
                        break
                    }
                    t += d.size
                }
                s == -1 && (s = this.contentDOM.childNodes.length);
                break
            }
            o = c
        }
        return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: i,
            toOffset: s
        }
    }
    emptyChildAt(e) {
        if (this.border || !this.contentDOM || !this.children.length)
            return !1;
        let t = this.children[e < 0 ? 0 : this.children.length - 1];
        return t.size == 0 || t.emptyChildAt(e)
    }
    domAfterPos(e) {
        let {node: t, offset: r} = this.domFromPos(e, 0);
        if (t.nodeType != 1 || r == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
        return t.childNodes[r]
    }
    setSelection(e, t, r, i=!1) {
        let s = Math.min(e, t)
          , o = Math.max(e, t);
        for (let f = 0, h = 0; f < this.children.length; f++) {
            let p = this.children[f]
              , m = h + p.size;
            if (s > h && o < m)
                return p.setSelection(e - h - p.border, t - h - p.border, r, i);
            h = m
        }
        let l = this.domFromPos(e, e ? -1 : 1)
          , a = t == e ? l : this.domFromPos(t, t ? -1 : 1)
          , c = r.getSelection()
          , u = !1;
        if ((be || X) && e == t) {
            let {node: f, offset: h} = l;
            if (f.nodeType == 3)
                u = !!(h && f.nodeValue[h - 1] == `
`);
            else {
                let p = f.childNodes[h - 1];
                u = p && (p.nodeName == "BR" || p.contentEditable == "false")
            }
        }
        if (be && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
            let f = c.focusNode.childNodes[c.focusOffset];
            f && f.contentEditable == "false" && (i = !0)
        }
        if (!(i || u && X) && Ct(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ct(a.node, a.offset, c.focusNode, c.focusOffset))
            return;
        let d = !1;
        if ((c.extend || e == t) && !u) {
            c.collapse(l.node, l.offset);
            try {
                e != t && c.extend(a.node, a.offset),
                d = !0
            } catch {}
        }
        if (!d) {
            if (e > t) {
                let h = l;
                l = a,
                a = h
            }
            let f = document.createRange();
            f.setEnd(a.node, a.offset),
            f.setStart(l.node, l.offset),
            c.removeAllRanges(),
            c.addRange(f)
        }
    }
    ignoreMutation(e) {
        return !this.contentDOM && e.type != "selection"
    }
    get contentLost() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
    }
    markDirty(e, t) {
        for (let r = 0, i = 0; i < this.children.length; i++) {
            let s = this.children[i]
              , o = r + s.size;
            if (r == o ? e <= o && t >= r : e < o && t > r) {
                let l = r + s.border
                  , a = o - s.border;
                if (e >= l && t <= a) {
                    this.dirty = e == r || t == o ? ht : xs,
                    e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = Ne : s.markDirty(e - l, t - l);
                    return
                } else
                    s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? ht : Ne
            }
            r = o
        }
        this.dirty = ht
    }
    markParentsDirty() {
        let e = 1;
        for (let t = this.parent; t; t = t.parent,
        e++) {
            let r = e == 1 ? ht : xs;
            t.dirty < r && (t.dirty = r)
        }
    }
    get domAtom() {
        return !1
    }
    get ignoreForCoords() {
        return !1
    }
}
class nl extends kn {
    constructor(e, t, r, i) {
        let s, o = t.type.toDOM;
        if (typeof o == "function" && (o = o(r, ()=>{
            if (!s)
                return i;
            if (s.parent)
                return s.parent.posBeforeChild(s)
        }
        )),
        !t.type.spec.raw) {
            if (o.nodeType != 1) {
                let l = document.createElement("span");
                l.appendChild(o),
                o = l
            }
            o.contentEditable = "false",
            o.classList.add("ProseMirror-widget")
        }
        super(e, [], o, null),
        this.widget = t,
        this.widget = t,
        s = this
    }
    matchesWidget(e) {
        return this.dirty == he && e.type.eq(this.widget.type)
    }
    parseRule() {
        return {
            ignore: !0
        }
    }
    stopEvent(e) {
        let t = this.widget.spec.stopEvent;
        return t ? t(e) : !1
    }
    ignoreMutation(e) {
        return e.type != "selection" || this.widget.spec.ignoreSelection
    }
    destroy() {
        this.widget.type.destroy(this.dom),
        super.destroy()
    }
    get domAtom() {
        return !0
    }
    get side() {
        return this.widget.type.side
    }
}
class Qu extends kn {
    constructor(e, t, r, i) {
        super(e, [], t, null),
        this.textDOM = r,
        this.text = i
    }
    get size() {
        return this.text.length
    }
    localPosFromDOM(e, t) {
        return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
    }
    domFromPos(e) {
        return {
            node: this.textDOM,
            offset: e
        }
    }
    ignoreMutation(e) {
        return e.type === "characterData" && e.target.nodeValue == e.oldValue
    }
}
class wt extends kn {
    constructor(e, t, r, i) {
        super(e, [], r, i),
        this.mark = t
    }
    static create(e, t, r, i) {
        let s = i.nodeViews[t.type.name]
          , o = s && s(t, i, r);
        return (!o || !o.dom) && (o = Ee.renderSpec(document, t.type.spec.toDOM(t, r))),
        new wt(e,t,o.dom,o.contentDOM || o.dom)
    }
    parseRule() {
        return this.dirty & Ne || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM || void 0
        }
    }
    matchesMark(e) {
        return this.dirty != Ne && this.mark.eq(e)
    }
    markDirty(e, t) {
        if (super.markDirty(e, t),
        this.dirty != he) {
            let r = this.parent;
            for (; !r.node; )
                r = r.parent;
            r.dirty < this.dirty && (r.dirty = this.dirty),
            this.dirty = he
        }
    }
    slice(e, t, r) {
        let i = wt.create(this.parent, this.mark, !0, r)
          , s = this.children
          , o = this.size;
        t < o && (s = ai(s, t, o, r)),
        e > 0 && (s = ai(s, 0, e, r));
        for (let l = 0; l < s.length; l++)
            s[l].parent = i;
        return i.children = s,
        i
    }
}
class Ze extends kn {
    constructor(e, t, r, i, s, o, l, a, c) {
        super(e, [], s, o),
        this.node = t,
        this.outerDeco = r,
        this.innerDeco = i,
        this.nodeDOM = l
    }
    static create(e, t, r, i, s, o) {
        let l = s.nodeViews[t.type.name], a, c = l && l(t, s, ()=>{
            if (!a)
                return o;
            if (a.parent)
                return a.parent.posBeforeChild(a)
        }
        , r, i), u = c && c.dom, d = c && c.contentDOM;
        if (t.isText) {
            if (!u)
                u = document.createTextNode(t.text);
            else if (u.nodeType != 3)
                throw new RangeError("Text must be rendered as a DOM text node")
        } else
            u || ({dom: u, contentDOM: d} = Ee.renderSpec(document, t.type.spec.toDOM(t)));
        !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"),
        t.type.spec.draggable && (u.draggable = !0));
        let f = u;
        return u = ol(u, r, t),
        c ? a = new Xu(e,t,r,i,u,d || null,f,c,s,o + 1) : t.isText ? new pr(e,t,r,i,u,f,s) : new Ze(e,t,r,i,u,d || null,f,s,o + 1)
    }
    parseRule() {
        if (this.node.type.spec.reparseInView)
            return null;
        let e = {
            node: this.node.type.name,
            attrs: this.node.attrs
        };
        if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"),
        !this.contentDOM)
            e.getContent = ()=>this.node.content;
        else if (!this.contentLost)
            e.contentElement = this.contentDOM;
        else {
            for (let t = this.children.length - 1; t >= 0; t--) {
                let r = this.children[t];
                if (this.dom.contains(r.dom.parentNode)) {
                    e.contentElement = r.dom.parentNode;
                    break
                }
            }
            e.contentElement || (e.getContent = ()=>k.empty)
        }
        return e
    }
    matchesNode(e, t, r) {
        return this.dirty == he && e.eq(this.node) && li(t, this.outerDeco) && r.eq(this.innerDeco)
    }
    get size() {
        return this.node.nodeSize
    }
    get border() {
        return this.node.isLeaf ? 0 : 1
    }
    updateChildren(e, t) {
        let r = this.node.inlineContent
          , i = t
          , s = e.composing ? this.localCompositionInfo(e, t) : null
          , o = s && s.pos > -1 ? s : null
          , l = s && s.pos < 0
          , a = new td(this,o && o.node,e);
        id(this.node, this.innerDeco, (c,u,d)=>{
            c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? R.none : this.node.child(u).marks, r, e),
            a.placeWidget(c, e, i)
        }
        , (c,u,d,f)=>{
            a.syncToMarks(c.marks, r, e);
            let h;
            a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, i) || a.addNode(c, u, d, e, i),
            i += c.nodeSize
        }
        ),
        a.syncToMarks([], r, e),
        this.node.isTextblock && a.addTextblockHacks(),
        a.destroyRest(),
        (a.changed || this.dirty == ht) && (o && this.protectLocalComposition(e, o),
        il(this.contentDOM, this.children, e),
        _t && sd(this.dom))
    }
    localCompositionInfo(e, t) {
        let {from: r, to: i} = e.state.selection;
        if (!(e.state.selection instanceof A) || r < t || i > t + this.node.content.size)
            return null;
        let s = e.domSelectionRange()
          , o = od(s.focusNode, s.focusOffset);
        if (!o || !this.dom.contains(o.parentNode))
            return null;
        if (this.node.inlineContent) {
            let l = o.nodeValue
              , a = ld(this.node.content, l, r - t, i - t);
            return a < 0 ? null : {
                node: o,
                pos: a,
                text: l
            }
        } else
            return {
                node: o,
                pos: -1,
                text: ""
            }
    }
    protectLocalComposition(e, {node: t, pos: r, text: i}) {
        if (this.getDesc(t))
            return;
        let s = t;
        for (; s.parentNode != this.contentDOM; s = s.parentNode) {
            for (; s.previousSibling; )
                s.parentNode.removeChild(s.previousSibling);
            for (; s.nextSibling; )
                s.parentNode.removeChild(s.nextSibling);
            s.pmViewDesc && (s.pmViewDesc = void 0)
        }
        let o = new Qu(this,s,t,i);
        e.input.compositionNodes.push(o),
        this.children = ai(this.children, r, r + i.length, e, o)
    }
    update(e, t, r, i) {
        return this.dirty == Ne || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i),
        !0)
    }
    updateInner(e, t, r, i) {
        this.updateOuterDeco(t),
        this.node = e,
        this.innerDeco = r,
        this.contentDOM && this.updateChildren(i, this.posAtStart),
        this.dirty = he
    }
    updateOuterDeco(e) {
        if (li(e, this.outerDeco))
            return;
        let t = this.nodeDOM.nodeType != 1
          , r = this.dom;
        this.dom = sl(this.dom, this.nodeDOM, oi(this.outerDeco, this.node, t), oi(e, this.node, t)),
        this.dom != r && (r.pmViewDesc = void 0,
        this.dom.pmViewDesc = this),
        this.outerDeco = e
    }
    selectNode() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"),
        (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
    }
    deselectNode() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"),
        (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable")
    }
    get domAtom() {
        return this.node.isAtom
    }
}
function Ms(n, e, t, r, i) {
    ol(r, e, n);
    let s = new Ze(void 0,n,e,t,r,r,r,i,0);
    return s.contentDOM && s.updateChildren(i, 0),
    s
}
class pr extends Ze {
    constructor(e, t, r, i, s, o, l) {
        super(e, t, r, i, s, null, o, l, 0)
    }
    parseRule() {
        let e = this.nodeDOM.parentNode;
        for (; e && e != this.dom && !e.pmIsDeco; )
            e = e.parentNode;
        return {
            skip: e || !0
        }
    }
    update(e, t, r, i) {
        return this.dirty == Ne || this.dirty != he && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t),
        (this.dirty != he || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text,
        i.trackWrites == this.nodeDOM && (i.trackWrites = null)),
        this.node = e,
        this.dirty = he,
        !0)
    }
    inParent() {
        let e = this.parent.contentDOM;
        for (let t = this.nodeDOM; t; t = t.parentNode)
            if (t == e)
                return !0;
        return !1
    }
    domFromPos(e) {
        return {
            node: this.nodeDOM,
            offset: e
        }
    }
    localPosFromDOM(e, t, r) {
        return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r)
    }
    ignoreMutation(e) {
        return e.type != "characterData" && e.type != "selection"
    }
    slice(e, t, r) {
        let i = this.node.cut(e, t)
          , s = document.createTextNode(i.text);
        return new pr(this.parent,i,this.outerDeco,this.innerDeco,s,s,r)
    }
    markDirty(e, t) {
        super.markDirty(e, t),
        this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ne)
    }
    get domAtom() {
        return !1
    }
}
class rl extends kn {
    parseRule() {
        return {
            ignore: !0
        }
    }
    matchesHack(e) {
        return this.dirty == he && this.dom.nodeName == e
    }
    get domAtom() {
        return !0
    }
    get ignoreForCoords() {
        return this.dom.nodeName == "IMG"
    }
}
class Xu extends Ze {
    constructor(e, t, r, i, s, o, l, a, c, u) {
        super(e, t, r, i, s, o, l, c, u),
        this.spec = a
    }
    update(e, t, r, i) {
        if (this.dirty == Ne)
            return !1;
        if (this.spec.update) {
            let s = this.spec.update(e, t, r);
            return s && this.updateInner(e, t, r, i),
            s
        } else
            return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i)
    }
    selectNode() {
        this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
    }
    deselectNode() {
        this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
    }
    setSelection(e, t, r, i) {
        this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i)
    }
    destroy() {
        this.spec.destroy && this.spec.destroy(),
        super.destroy()
    }
    stopEvent(e) {
        return this.spec.stopEvent ? this.spec.stopEvent(e) : !1
    }
    ignoreMutation(e) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
    }
}
function il(n, e, t) {
    let r = n.firstChild
      , i = !1;
    for (let s = 0; s < e.length; s++) {
        let o = e[s]
          , l = o.dom;
        if (l.parentNode == n) {
            for (; l != r; )
                r = Cs(r),
                i = !0;
            r = r.nextSibling
        } else
            i = !0,
            n.insertBefore(l, r);
        if (o instanceof wt) {
            let a = r ? r.previousSibling : n.lastChild;
            il(o.contentDOM, o.children, t),
            r = a ? a.nextSibling : n.firstChild
        }
    }
    for (; r; )
        r = Cs(r),
        i = !0;
    i && t.trackWrites == n && (t.trackWrites = null)
}
const nn = function(n) {
    n && (this.nodeName = n)
};
nn.prototype = Object.create(null);
const pt = [new nn];
function oi(n, e, t) {
    if (n.length == 0)
        return pt;
    let r = t ? pt[0] : new nn
      , i = [r];
    for (let s = 0; s < n.length; s++) {
        let o = n[s].type.attrs;
        if (o) {
            o.nodeName && i.push(r = new nn(o.nodeName));
            for (let l in o) {
                let a = o[l];
                a != null && (t && i.length == 1 && i.push(r = new nn(e.isInline ? "span" : "div")),
                l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a))
            }
        }
    }
    return i
}
function sl(n, e, t, r) {
    if (t == pt && r == pt)
        return e;
    let i = e;
    for (let s = 0; s < r.length; s++) {
        let o = r[s]
          , l = t[s];
        if (s) {
            let a;
            l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName),
            a.pmIsDeco = !0,
            a.appendChild(i),
            l = pt[0]),
            i = a
        }
        ed(i, l || pt[0], o)
    }
    return i
}
function ed(n, e, t) {
    for (let r in e)
        r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
    for (let r in t)
        r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
    if (e.class != t.class) {
        let r = e.class ? e.class.split(" ").filter(Boolean) : []
          , i = t.class ? t.class.split(" ").filter(Boolean) : [];
        for (let s = 0; s < r.length; s++)
            i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
        for (let s = 0; s < i.length; s++)
            r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
        n.classList.length == 0 && n.removeAttribute("class")
    }
    if (e.style != t.style) {
        if (e.style) {
            let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
            for (; i = r.exec(e.style); )
                n.style.removeProperty(i[1])
        }
        t.style && (n.style.cssText += t.style)
    }
}
function ol(n, e, t) {
    return sl(n, n, pt, oi(e, t, n.nodeType != 1))
}
function li(n, e) {
    if (n.length != e.length)
        return !1;
    for (let t = 0; t < n.length; t++)
        if (!n[t].type.eq(e[t].type))
            return !1;
    return !0
}
function Cs(n) {
    let e = n.nextSibling;
    return n.parentNode.removeChild(n),
    e
}
class td {
    constructor(e, t, r) {
        this.lock = t,
        this.view = r,
        this.index = 0,
        this.stack = [],
        this.changed = !1,
        this.top = e,
        this.preMatch = nd(e.node.content, e)
    }
    destroyBetween(e, t) {
        if (e != t) {
            for (let r = e; r < t; r++)
                this.top.children[r].destroy();
            this.top.children.splice(e, t - e),
            this.changed = !0
        }
    }
    destroyRest() {
        this.destroyBetween(this.index, this.top.children.length)
    }
    syncToMarks(e, t, r) {
        let i = 0
          , s = this.stack.length >> 1
          , o = Math.min(s, e.length);
        for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
            i++;
        for (; i < s; )
            this.destroyRest(),
            this.top.dirty = he,
            this.index = this.stack.pop(),
            this.top = this.stack.pop(),
            s--;
        for (; s < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let l = -1;
            for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                let c = this.top.children[a];
                if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
                    l = a;
                    break
                }
            }
            if (l > -1)
                l > this.index && (this.changed = !0,
                this.destroyBetween(this.index, l)),
                this.top = this.top.children[this.index];
            else {
                let a = wt.create(this.top, e[s], t, r);
                this.top.children.splice(this.index, 0, a),
                this.top = a,
                this.changed = !0
            }
            this.index = 0,
            s++
        }
    }
    findNodeMatch(e, t, r, i) {
        let s = -1, o;
        if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
            s = this.top.children.indexOf(o, this.index);
        else
            for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
                let c = this.top.children[l];
                if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
                    s = l;
                    break
                }
            }
        return s < 0 ? !1 : (this.destroyBetween(this.index, s),
        this.index++,
        !0)
    }
    updateNodeAt(e, t, r, i, s) {
        let o = this.top.children[i];
        return o.dirty == Ne && o.dom == o.contentDOM && (o.dirty = ht),
        o.update(e, t, r, s) ? (this.destroyBetween(this.index, i),
        this.index++,
        !0) : !1
    }
    findIndexWithChild(e) {
        for (; ; ) {
            let t = e.parentNode;
            if (!t)
                return -1;
            if (t == this.top.contentDOM) {
                let r = e.pmViewDesc;
                if (r) {
                    for (let i = this.index; i < this.top.children.length; i++)
                        if (this.top.children[i] == r)
                            return i
                }
                return -1
            }
            e = t
        }
    }
    updateNextNode(e, t, r, i, s, o) {
        for (let l = this.index; l < this.top.children.length; l++) {
            let a = this.top.children[l];
            if (a instanceof Ze) {
                let c = this.preMatch.matched.get(a);
                if (c != null && c != s)
                    return !1;
                let u = a.dom, d, f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Ne && li(t, a.outerDeco));
                if (!f && a.update(e, t, r, i))
                    return this.destroyBetween(this.index, l),
                    a.dom != u && (this.changed = !0),
                    this.index++,
                    !0;
                if (!f && (d = this.recreateWrapper(a, e, t, r, i, o)))
                    return this.top.children[this.index] = d,
                    d.dirty = ht,
                    d.updateChildren(i, o + 1),
                    d.dirty = he,
                    this.changed = !0,
                    this.index++,
                    !0;
                break
            }
        }
        return !1
    }
    recreateWrapper(e, t, r, i, s, o) {
        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
            return null;
        let l = Ze.create(this.top, t, r, i, s, o);
        if (!l.contentDOM)
            return null;
        l.children = e.children,
        e.children = [],
        e.destroy();
        for (let a of l.children)
            a.parent = l;
        return l
    }
    addNode(e, t, r, i, s) {
        let o = Ze.create(this.top, e, t, r, i, s);
        o.contentDOM && o.updateChildren(i, s + 1),
        this.top.children.splice(this.index++, 0, o),
        this.changed = !0
    }
    placeWidget(e, t, r) {
        let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
            this.index++;
        else {
            let s = new nl(this.top,e,t,r);
            this.top.children.splice(this.index++, 0, s),
            this.changed = !0
        }
    }
    addTextblockHacks() {
        let e = this.top.children[this.index - 1]
          , t = this.top;
        for (; e instanceof wt; )
            t = e,
            e = t.children[t.children.length - 1];
        (!e || !(e instanceof pr) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((X || Q) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t),
        this.addHackNode("BR", this.top))
    }
    addHackNode(e, t) {
        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
            this.index++;
        else {
            let r = document.createElement(e);
            e == "IMG" && (r.className = "ProseMirror-separator",
            r.alt = ""),
            e == "BR" && (r.className = "ProseMirror-trailingBreak");
            let i = new rl(this.top,[],r,null);
            t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i),
            this.changed = !0
        }
    }
    isLocked(e) {
        return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode))
    }
}
function nd(n, e) {
    let t = e
      , r = t.children.length
      , i = n.childCount
      , s = new Map
      , o = [];
    e: for (; i > 0; ) {
        let l;
        for (; ; )
            if (r) {
                let c = t.children[r - 1];
                if (c instanceof wt)
                    t = c,
                    r = c.children.length;
                else {
                    l = c,
                    r--;
                    break
                }
            } else {
                if (t == e)
                    break e;
                r = t.parent.children.indexOf(t),
                t = t.parent
            }
        let a = l.node;
        if (a) {
            if (a != n.child(i - 1))
                break;
            --i,
            s.set(l, i),
            o.push(l)
        }
    }
    return {
        index: i,
        matched: s,
        matches: o.reverse()
    }
}
function rd(n, e) {
    return n.type.side - e.type.side
}
function id(n, e, t, r) {
    let i = e.locals(n)
      , s = 0;
    if (i.length == 0) {
        for (let c = 0; c < n.childCount; c++) {
            let u = n.child(c);
            r(u, i, e.forChild(s, u), c),
            s += u.nodeSize
        }
        return
    }
    let o = 0
      , l = []
      , a = null;
    for (let c = 0; ; ) {
        if (o < i.length && i[o].to == s) {
            let p = i[o++], m;
            for (; o < i.length && i[o].to == s; )
                (m || (m = [p])).push(i[o++]);
            if (m) {
                m.sort(rd);
                for (let g = 0; g < m.length; g++)
                    t(m[g], c, !!a)
            } else
                t(p, c, !!a)
        }
        let u, d;
        if (a)
            d = -1,
            u = a,
            a = null;
        else if (c < n.childCount)
            d = c,
            u = n.child(c++);
        else
            break;
        for (let p = 0; p < l.length; p++)
            l[p].to <= s && l.splice(p--, 1);
        for (; o < i.length && i[o].from <= s && i[o].to > s; )
            l.push(i[o++]);
        let f = s + u.nodeSize;
        if (u.isText) {
            let p = f;
            o < i.length && i[o].from < p && (p = i[o].from);
            for (let m = 0; m < l.length; m++)
                l[m].to < p && (p = l[m].to);
            p < f && (a = u.cut(p - s),
            u = u.cut(0, p - s),
            f = p,
            d = -1)
        }
        let h = u.isInline && !u.isLeaf ? l.filter(p=>!p.inline) : l.slice();
        r(u, h, e.forChild(s, u), d),
        s = f
    }
}
function sd(n) {
    if (n.nodeName == "UL" || n.nodeName == "OL") {
        let e = n.style.cssText;
        n.style.cssText = e + "; list-style: square !important",
        window.getComputedStyle(n).listStyle,
        n.style.cssText = e
    }
}
function od(n, e) {
    for (; ; ) {
        if (n.nodeType == 3)
            return n;
        if (n.nodeType == 1 && e > 0) {
            if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
                return n.childNodes[e];
            n = n.childNodes[e - 1],
            e = Oe(n)
        } else if (n.nodeType == 1 && e < n.childNodes.length)
            n = n.childNodes[e],
            e = 0;
        else
            return null
    }
}
function ld(n, e, t, r) {
    for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
        let o = n.child(i++)
          , l = s;
        if (s += o.nodeSize,
        !o.isText)
            continue;
        let a = o.text;
        for (; i < n.childCount; ) {
            let c = n.child(i++);
            if (s += c.nodeSize,
            !c.isText)
                break;
            a += c.text
        }
        if (s >= t) {
            let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
            if (c >= 0 && c + e.length + l >= t)
                return l + c;
            if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
                return r
        }
    }
    return -1
}
function ai(n, e, t, r, i) {
    let s = [];
    for (let o = 0, l = 0; o < n.length; o++) {
        let a = n[o]
          , c = l
          , u = l += a.size;
        c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)),
        i && (s.push(i),
        i = void 0),
        u > t && s.push(a.slice(t - c, a.size, r)))
    }
    return s
}
function Ai(n, e=null) {
    let t = n.domSelectionRange()
      , r = n.state.doc;
    if (!t.focusNode)
        return null;
    let i = n.docView.nearestDesc(t.focusNode)
      , s = i && i.size == 0
      , o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
    if (o < 0)
        return null;
    let l = r.resolve(o), a, c;
    if (fr(t)) {
        for (a = l; i && !i.node; )
            i = i.parent;
        let u = i.node;
        if (i && u.isAtom && E.isSelectable(u) && i.parent && !(u.isInline && Nu(t.focusNode, t.focusOffset, i.dom))) {
            let d = i.posBefore;
            c = new E(o == d ? l : r.resolve(d))
        }
    } else {
        let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
        if (u < 0)
            return null;
        a = r.resolve(u)
    }
    if (!c) {
        let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
        c = Ni(n, a, l, u)
    }
    return c
}
function ll(n) {
    return n.editable ? n.hasFocus() : cl(n) && document.activeElement && document.activeElement.contains(n.dom)
}
function Be(n, e=!1) {
    let t = n.state.selection;
    if (al(n, t),
    !!ll(n)) {
        if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Q) {
            let r = n.domSelectionRange()
              , i = n.domObserver.currentSelection;
            if (r.anchorNode && i.anchorNode && Ct(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
                n.input.mouseDown.delayedSelectionSync = !0,
                n.domObserver.setCurSelection();
                return
            }
        }
        if (n.domObserver.disconnectSelection(),
        n.cursorWrapper)
            cd(n);
        else {
            let {anchor: r, head: i} = t, s, o;
            ws && !(t instanceof A) && (t.$from.parent.inlineContent || (s = Ts(n, t.from)),
            !t.empty && !t.$from.parent.inlineContent && (o = Ts(n, t.to))),
            n.docView.setSelection(r, i, n.root, e),
            ws && (s && Os(s),
            o && Os(o)),
            t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"),
            "onselectionchange"in document && ad(n))
        }
        n.domObserver.setCurSelection(),
        n.domObserver.connectSelection()
    }
}
const ws = X || Q && Pu < 63;
function Ts(n, e) {
    let {node: t, offset: r} = n.docView.domFromPos(e, 0)
      , i = r < t.childNodes.length ? t.childNodes[r] : null
      , s = r ? t.childNodes[r - 1] : null;
    if (X && i && i.contentEditable == "false")
        return Lr(i);
    if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
        if (i)
            return Lr(i);
        if (s)
            return Lr(s)
    }
}
function Lr(n) {
    return n.contentEditable = "true",
    X && n.draggable && (n.draggable = !1,
    n.wasDraggable = !0),
    n
}
function Os(n) {
    n.contentEditable = "false",
    n.wasDraggable && (n.draggable = !0,
    n.wasDraggable = null)
}
function ad(n) {
    let e = n.dom.ownerDocument;
    e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
    let t = n.domSelectionRange()
      , r = t.anchorNode
      , i = t.anchorOffset;
    e.addEventListener("selectionchange", n.input.hideSelectionGuard = ()=>{
        (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard),
        setTimeout(()=>{
            (!ll(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection")
        }
        , 20))
    }
    )
}
function cd(n) {
    let e = n.domSelection()
      , t = document.createRange()
      , r = n.cursorWrapper.dom
      , i = r.nodeName == "IMG";
    i ? t.setEnd(r.parentNode, fe(r) + 1) : t.setEnd(r, 0),
    t.collapse(!1),
    e.removeAllRanges(),
    e.addRange(t),
    !i && !n.state.selection.visible && re && Ge <= 11 && (r.disabled = !0,
    r.disabled = !1)
}
function al(n, e) {
    if (e instanceof E) {
        let t = n.docView.descAt(e.from);
        t != n.lastSelectedViewDesc && (Es(n),
        t && t.selectNode(),
        n.lastSelectedViewDesc = t)
    } else
        Es(n)
}
function Es(n) {
    n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(),
    n.lastSelectedViewDesc = void 0)
}
function Ni(n, e, t, r) {
    return n.someProp("createSelectionBetween", i=>i(n, e, t)) || A.between(e, t, r)
}
function vs(n) {
    return n.editable && !n.hasFocus() ? !1 : cl(n)
}
function cl(n) {
    let e = n.domSelectionRange();
    if (!e.anchorNode)
        return !1;
    try {
        return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
    } catch {
        return !1
    }
}
function ud(n) {
    let e = n.docView.domFromPos(n.state.selection.anchor, 0)
      , t = n.domSelectionRange();
    return Ct(e.node, e.offset, t.anchorNode, t.anchorOffset)
}
function ci(n, e) {
    let {$anchor: t, $head: r} = n.selection
      , i = e > 0 ? t.max(r) : t.min(r)
      , s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
    return s && N.findFrom(s, e)
}
function ut(n, e) {
    return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()),
    !0
}
function As(n, e, t) {
    let r = n.state.selection;
    if (r instanceof A) {
        if (!r.empty || t.indexOf("s") > -1)
            return !1;
        if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
            let i = ci(n.state, e);
            return i && i instanceof E ? ut(n, i) : !1
        } else if (!(ue && t.indexOf("m") > -1)) {
            let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
            if (!s || s.isText)
                return !1;
            let l = e < 0 ? i.pos - s.nodeSize : i.pos;
            return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? E.isSelectable(s) ? ut(n, new E(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : hr ? ut(n, new A(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1
        }
    } else {
        if (r instanceof E && r.node.isInline)
            return ut(n, new A(e > 0 ? r.$to : r.$from));
        {
            let i = ci(n.state, e);
            return i ? ut(n, i) : !1
        }
    }
}
function Vn(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length
}
function rn(n) {
    let e = n.pmViewDesc;
    return e && e.size == 0 && (n.nextSibling || n.nodeName != "BR")
}
function Zt(n, e) {
    return e < 0 ? dd(n) : ul(n)
}
function dd(n) {
    let e = n.domSelectionRange()
      , t = e.focusNode
      , r = e.focusOffset;
    if (!t)
        return;
    let i, s, o = !1;
    for (be && t.nodeType == 1 && r < Vn(t) && rn(t.childNodes[r]) && (o = !0); ; )
        if (r > 0) {
            if (t.nodeType != 1)
                break;
            {
                let l = t.childNodes[r - 1];
                if (rn(l))
                    i = t,
                    s = --r;
                else if (l.nodeType == 3)
                    t = l,
                    r = t.nodeValue.length;
                else
                    break
            }
        } else {
            if (dl(t))
                break;
            {
                let l = t.previousSibling;
                for (; l && rn(l); )
                    i = t.parentNode,
                    s = fe(l),
                    l = l.previousSibling;
                if (l)
                    t = l,
                    r = Vn(t);
                else {
                    if (t = t.parentNode,
                    t == n.dom)
                        break;
                    r = 0
                }
            }
        }
    o ? ui(n, t, r) : i && ui(n, i, s)
}
function ul(n) {
    let e = n.domSelectionRange()
      , t = e.focusNode
      , r = e.focusOffset;
    if (!t)
        return;
    let i = Vn(t), s, o;
    for (; ; )
        if (r < i) {
            if (t.nodeType != 1)
                break;
            let l = t.childNodes[r];
            if (rn(l))
                s = t,
                o = ++r;
            else
                break
        } else {
            if (dl(t))
                break;
            {
                let l = t.nextSibling;
                for (; l && rn(l); )
                    s = l.parentNode,
                    o = fe(l) + 1,
                    l = l.nextSibling;
                if (l)
                    t = l,
                    r = 0,
                    i = Vn(t);
                else {
                    if (t = t.parentNode,
                    t == n.dom)
                        break;
                    r = i = 0
                }
            }
        }
    s && ui(n, s, o)
}
function dl(n) {
    let e = n.pmViewDesc;
    return e && e.node && e.node.isBlock
}
function ui(n, e, t) {
    let r = n.domSelection();
    if (fr(r)) {
        let s = document.createRange();
        s.setEnd(e, t),
        s.setStart(e, t),
        r.removeAllRanges(),
        r.addRange(s)
    } else
        r.extend && r.extend(e, t);
    n.domObserver.setCurSelection();
    let {state: i} = n;
    setTimeout(()=>{
        n.state == i && Be(n)
    }
    , 50)
}
function Ns(n, e) {
    let t = n.state.doc.resolve(e);
    if (!(Q || Lu) && t.parent.inlineContent) {
        let i = n.coordsAtPos(e);
        if (e > t.start()) {
            let s = n.coordsAtPos(e - 1)
              , o = (s.top + s.bottom) / 2;
            if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
                return s.left < i.left ? "ltr" : "rtl"
        }
        if (e < t.end()) {
            let s = n.coordsAtPos(e + 1)
              , o = (s.top + s.bottom) / 2;
            if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
                return s.left > i.left ? "ltr" : "rtl"
        }
    }
    return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr"
}
function Ds(n, e, t) {
    let r = n.state.selection;
    if (r instanceof A && !r.empty || t.indexOf("s") > -1 || ue && t.indexOf("m") > -1)
        return !1;
    let {$from: i, $to: s} = r;
    if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
        let o = ci(n.state, e);
        if (o && o instanceof E)
            return ut(n, o)
    }
    if (!i.parent.inlineContent) {
        let o = e < 0 ? i : s
          , l = r instanceof ke ? N.near(o, e) : N.findFrom(o, e);
        return l ? ut(n, l) : !1
    }
    return !1
}
function Is(n, e) {
    if (!(n.state.selection instanceof A))
        return !0;
    let {$head: t, $anchor: r, empty: i} = n.state.selection;
    if (!t.sameParent(r))
        return !0;
    if (!i)
        return !1;
    if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
        return !0;
    let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
    if (s && !s.isText) {
        let o = n.state.tr;
        return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize),
        n.dispatch(o),
        !0
    }
    return !1
}
function Rs(n, e, t) {
    n.domObserver.stop(),
    e.contentEditable = t,
    n.domObserver.start()
}
function fd(n) {
    if (!X || n.state.selection.$head.parentOffset > 0)
        return !1;
    let {focusNode: e, focusOffset: t} = n.domSelectionRange();
    if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
        let r = e.firstChild;
        Rs(n, r, "true"),
        setTimeout(()=>Rs(n, r, "false"), 20)
    }
    return !1
}
function hd(n) {
    let e = "";
    return n.ctrlKey && (e += "c"),
    n.metaKey && (e += "m"),
    n.altKey && (e += "a"),
    n.shiftKey && (e += "s"),
    e
}
function pd(n, e) {
    let t = e.keyCode
      , r = hd(e);
    if (t == 8 || ue && t == 72 && r == "c")
        return Is(n, -1) || Zt(n, -1);
    if (t == 46 || ue && t == 68 && r == "c")
        return Is(n, 1) || Zt(n, 1);
    if (t == 13 || t == 27)
        return !0;
    if (t == 37 || ue && t == 66 && r == "c") {
        let i = t == 37 ? Ns(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
        return As(n, i, r) || Zt(n, i)
    } else if (t == 39 || ue && t == 70 && r == "c") {
        let i = t == 39 ? Ns(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
        return As(n, i, r) || Zt(n, i)
    } else {
        if (t == 38 || ue && t == 80 && r == "c")
            return Ds(n, -1, r) || Zt(n, -1);
        if (t == 40 || ue && t == 78 && r == "c")
            return fd(n) || Ds(n, 1, r) || ul(n);
        if (r == (ue ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
            return !0
    }
    return !1
}
function fl(n, e) {
    n.someProp("transformCopied", h=>{
        e = h(e, n)
    }
    );
    let t = []
      , {content: r, openStart: i, openEnd: s} = e;
    for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
        i--,
        s--;
        let h = r.firstChild;
        t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null),
        r = h.content
    }
    let o = n.someProp("clipboardSerializer") || Ee.fromSchema(n.state.schema)
      , l = kl()
      , a = l.createElement("div");
    a.appendChild(o.serializeFragment(r, {
        document: l
    }));
    let c = a.firstChild, u, d = 0;
    for (; c && c.nodeType == 1 && (u = yl[c.nodeName.toLowerCase()]); ) {
        for (let h = u.length - 1; h >= 0; h--) {
            let p = l.createElement(u[h]);
            for (; a.firstChild; )
                p.appendChild(a.firstChild);
            a.appendChild(p),
            d++
        }
        c = a.firstChild
    }
    c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
    let f = n.someProp("clipboardTextSerializer", h=>h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
    return {
        dom: a,
        text: f
    }
}
function hl(n, e, t, r, i) {
    let s = i.parent.type.spec.code, o, l;
    if (!t && !e)
        return null;
    let a = e && (r || s || !t);
    if (a) {
        if (n.someProp("transformPastedText", f=>{
            e = f(e, s || r, n)
        }
        ),
        s)
            return e ? new S(k.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))),0,0) : S.empty;
        let d = n.someProp("clipboardTextParser", f=>f(e, i, r, n));
        if (d)
            l = d;
        else {
            let f = i.marks()
              , {schema: h} = n.state
              , p = Ee.fromSchema(h);
            o = document.createElement("div"),
            e.split(/(?:\r\n?|\n)+/).forEach(m=>{
                let g = o.appendChild(document.createElement("p"));
                m && g.appendChild(p.serializeNode(h.text(m, f)))
            }
            )
        }
    } else
        n.someProp("transformPastedHTML", d=>{
            t = d(t, n)
        }
        ),
        o = yd(t),
        hr && kd(o);
    let c = o && o.querySelector("[data-pm-slice]")
      , u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
    if (u && u[3])
        for (let d = +u[3]; d > 0; d--) {
            let f = o.firstChild;
            for (; f && f.nodeType != 1; )
                f = f.nextSibling;
            if (!f)
                break;
            o = f
        }
    if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Ht.fromSchema(n.state.schema)).parseSlice(o, {
        preserveWhitespace: !!(a || u),
        context: i,
        ruleFromNode(f) {
            return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !md.test(f.parentNode.nodeName) ? {
                ignore: !0
            } : null
        }
    })),
    u)
        l = bd(Ps(l, +u[1], +u[2]), u[4]);
    else if (l = S.maxOpen(gd(l.content, i), !0),
    l.openStart || l.openEnd) {
        let d = 0
          , f = 0;
        for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++,
        h = h.firstChild)
            ;
        for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++,
        h = h.lastChild)
            ;
        l = Ps(l, d, f)
    }
    return n.someProp("transformPasted", d=>{
        l = d(l, n)
    }
    ),
    l
}
const md = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function gd(n, e) {
    if (n.childCount < 2)
        return n;
    for (let t = e.depth; t >= 0; t--) {
        let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
        if (n.forEach(l=>{
            if (!o)
                return;
            let a = i.findWrapping(l.type), c;
            if (!a)
                return o = null;
            if (c = o.length && s.length && ml(a, s, l, o[o.length - 1], 0))
                o[o.length - 1] = c;
            else {
                o.length && (o[o.length - 1] = gl(o[o.length - 1], s.length));
                let u = pl(l, a);
                o.push(u),
                i = i.matchType(u.type),
                s = a
            }
        }
        ),
        o)
            return k.from(o)
    }
    return n
}
function pl(n, e, t=0) {
    for (let r = e.length - 1; r >= t; r--)
        n = e[r].create(null, k.from(n));
    return n
}
function ml(n, e, t, r, i) {
    if (i < n.length && i < e.length && n[i] == e[i]) {
        let s = ml(n, e, t, r.lastChild, i + 1);
        if (s)
            return r.copy(r.content.replaceChild(r.childCount - 1, s));
        if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
            return r.copy(r.content.append(k.from(pl(t, n, i + 1))))
    }
}
function gl(n, e) {
    if (e == 0)
        return n;
    let t = n.content.replaceChild(n.childCount - 1, gl(n.lastChild, e - 1))
      , r = n.contentMatchAt(n.childCount).fillBefore(k.empty, !0);
    return n.copy(t.append(r))
}
function di(n, e, t, r, i, s) {
    let o = e < 0 ? n.firstChild : n.lastChild
      , l = o.content;
    return n.childCount > 1 && (s = 0),
    i < r - 1 && (l = di(l, e, t, r, i + 1, s)),
    i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(k.empty, !0))),
    n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l))
}
function Ps(n, e, t) {
    return e < n.openStart && (n = new S(di(n.content, -1, e, n.openStart, 0, n.openEnd),e,n.openEnd)),
    t < n.openEnd && (n = new S(di(n.content, 1, t, n.openEnd, 0, 0),n.openStart,t)),
    n
}
const yl = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
};
let Ls = null;
function kl() {
    return Ls || (Ls = document.implementation.createHTMLDocument("title"))
}
function yd(n) {
    let e = /^(\s*<meta [^>]*>)*/.exec(n);
    e && (n = n.slice(e[0].length));
    let t = kl().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
    if ((i = r && yl[r[1].toLowerCase()]) && (n = i.map(s=>"<" + s + ">").join("") + n + i.map(s=>"</" + s + ">").reverse().join("")),
    t.innerHTML = n,
    i)
        for (let s = 0; s < i.length; s++)
            t = t.querySelector(i[s]) || t;
    return t
}
function kd(n) {
    let e = n.querySelectorAll(Q ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let t = 0; t < e.length; t++) {
        let r = e[t];
        r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r)
    }
}
function bd(n, e) {
    if (!n.size)
        return n;
    let t = n.content.firstChild.type.schema, r;
    try {
        r = JSON.parse(e)
    } catch {
        return n
    }
    let {content: i, openStart: s, openEnd: o} = n;
    for (let l = r.length - 2; l >= 0; l -= 2) {
        let a = t.nodes[r[l]];
        if (!a || a.hasRequiredAttrs())
            break;
        i = k.from(a.create(r[l + 1], i)),
        s++,
        o++
    }
    return new S(i,s,o)
}
const ee = {}
  , te = {}
  , Sd = {
    touchstart: !0,
    touchmove: !0
};
class xd {
    constructor() {
        this.shiftKey = !1,
        this.mouseDown = null,
        this.lastKeyCode = null,
        this.lastKeyCodeTime = 0,
        this.lastClick = {
            time: 0,
            x: 0,
            y: 0,
            type: ""
        },
        this.lastSelectionOrigin = null,
        this.lastSelectionTime = 0,
        this.lastIOSEnter = 0,
        this.lastIOSEnterFallbackTimeout = -1,
        this.lastFocus = 0,
        this.lastTouch = 0,
        this.lastAndroidDelete = 0,
        this.composing = !1,
        this.composingTimeout = -1,
        this.compositionNodes = [],
        this.compositionEndedAt = -2e8,
        this.compositionID = 1,
        this.domChangeCount = 0,
        this.eventHandlers = Object.create(null),
        this.hideSelectionGuard = null
    }
}
function Md(n) {
    for (let e in ee) {
        let t = ee[e];
        n.dom.addEventListener(e, n.input.eventHandlers[e] = r=>{
            wd(n, r) && !Di(n, r) && (n.editable || !(r.type in te)) && t(n, r)
        }
        , Sd[e] ? {
            passive: !0
        } : void 0)
    }
    X && n.dom.addEventListener("input", ()=>null),
    fi(n)
}
function Ue(n, e) {
    n.input.lastSelectionOrigin = e,
    n.input.lastSelectionTime = Date.now()
}
function Cd(n) {
    n.domObserver.stop();
    for (let e in n.input.eventHandlers)
        n.dom.removeEventListener(e, n.input.eventHandlers[e]);
    clearTimeout(n.input.composingTimeout),
    clearTimeout(n.input.lastIOSEnterFallbackTimeout)
}
function fi(n) {
    n.someProp("handleDOMEvents", e=>{
        for (let t in e)
            n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = r=>Di(n, r))
    }
    )
}
function Di(n, e) {
    return n.someProp("handleDOMEvents", t=>{
        let r = t[e.type];
        return r ? r(n, e) || e.defaultPrevented : !1
    }
    )
}
function wd(n, e) {
    if (!e.bubbles)
        return !0;
    if (e.defaultPrevented)
        return !1;
    for (let t = e.target; t != n.dom; t = t.parentNode)
        if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
            return !1;
    return !0
}
function Td(n, e) {
    !Di(n, e) && ee[e.type] && (n.editable || !(e.type in te)) && ee[e.type](n, e)
}
te.keydown = (n,e)=>{
    let t = e;
    if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey,
    !Sl(n, t) && (n.input.lastKeyCode = t.keyCode,
    n.input.lastKeyCodeTime = Date.now(),
    !(me && Q && t.keyCode == 13)))
        if (t.keyCode != 229 && n.domObserver.forceFlush(),
        _t && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
            let r = Date.now();
            n.input.lastIOSEnter = r,
            n.input.lastIOSEnterFallbackTimeout = setTimeout(()=>{
                n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", i=>i(n, ct(13, "Enter"))),
                n.input.lastIOSEnter = 0)
            }
            , 200)
        } else
            n.someProp("handleKeyDown", r=>r(n, t)) || pd(n, t) ? t.preventDefault() : Ue(n, "key")
}
;
te.keyup = (n,e)=>{
    e.keyCode == 16 && (n.input.shiftKey = !1)
}
;
te.keypress = (n,e)=>{
    let t = e;
    if (Sl(n, t) || !t.charCode || t.ctrlKey && !t.altKey || ue && t.metaKey)
        return;
    if (n.someProp("handleKeyPress", i=>i(n, t))) {
        t.preventDefault();
        return
    }
    let r = n.state.selection;
    if (!(r instanceof A) || !r.$from.sameParent(r.$to)) {
        let i = String.fromCharCode(t.charCode);
        !/[\r\n]/.test(i) && !n.someProp("handleTextInput", s=>s(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()),
        t.preventDefault()
    }
}
;
function mr(n) {
    return {
        left: n.clientX,
        top: n.clientY
    }
}
function Od(n, e) {
    let t = e.x - n.clientX
      , r = e.y - n.clientY;
    return t * t + r * r < 100
}
function Ii(n, e, t, r, i) {
    if (r == -1)
        return !1;
    let s = n.state.doc.resolve(r);
    for (let o = s.depth + 1; o > 0; o--)
        if (n.someProp(e, l=>o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
            return !0;
    return !1
}
function Ft(n, e, t) {
    n.focused || n.focus();
    let r = n.state.tr.setSelection(e);
    t == "pointer" && r.setMeta("pointer", !0),
    n.dispatch(r)
}
function Ed(n, e) {
    if (e == -1)
        return !1;
    let t = n.state.doc.resolve(e)
      , r = t.nodeAfter;
    return r && r.isAtom && E.isSelectable(r) ? (Ft(n, new E(t), "pointer"),
    !0) : !1
}
function vd(n, e) {
    if (e == -1)
        return !1;
    let t = n.state.selection, r, i;
    t instanceof E && (r = t.node);
    let s = n.state.doc.resolve(e);
    for (let o = s.depth + 1; o > 0; o--) {
        let l = o > s.depth ? s.nodeAfter : s.node(o);
        if (E.isSelectable(l)) {
            r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
            break
        }
    }
    return i != null ? (Ft(n, E.create(n.state.doc, i), "pointer"),
    !0) : !1
}
function Ad(n, e, t, r, i) {
    return Ii(n, "handleClickOn", e, t, r) || n.someProp("handleClick", s=>s(n, e, r)) || (i ? vd(n, t) : Ed(n, t))
}
function Nd(n, e, t, r) {
    return Ii(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", i=>i(n, e, r))
}
function Dd(n, e, t, r) {
    return Ii(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", i=>i(n, e, r)) || Id(n, t, r)
}
function Id(n, e, t) {
    if (t.button != 0)
        return !1;
    let r = n.state.doc;
    if (e == -1)
        return r.inlineContent ? (Ft(n, A.create(r, 0, r.content.size), "pointer"),
        !0) : !1;
    let i = r.resolve(e);
    for (let s = i.depth + 1; s > 0; s--) {
        let o = s > i.depth ? i.nodeAfter : i.node(s)
          , l = i.before(s);
        if (o.inlineContent)
            Ft(n, A.create(r, l + 1, l + 1 + o.content.size), "pointer");
        else if (E.isSelectable(o))
            Ft(n, E.create(r, l), "pointer");
        else
            continue;
        return !0
    }
}
function Ri(n) {
    return _n(n)
}
const bl = ue ? "metaKey" : "ctrlKey";
ee.mousedown = (n,e)=>{
    let t = e;
    n.input.shiftKey = t.shiftKey;
    let r = Ri(n)
      , i = Date.now()
      , s = "singleClick";
    i - n.input.lastClick.time < 500 && Od(t, n.input.lastClick) && !t[bl] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")),
    n.input.lastClick = {
        time: i,
        x: t.clientX,
        y: t.clientY,
        type: s
    };
    let o = n.posAtCoords(mr(t));
    o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(),
    n.input.mouseDown = new Rd(n,o,t,!!r)) : (s == "doubleClick" ? Nd : Dd)(n, o.pos, o.inside, t) ? t.preventDefault() : Ue(n, "pointer"))
}
;
class Rd {
    constructor(e, t, r, i) {
        this.view = e,
        this.pos = t,
        this.event = r,
        this.flushed = i,
        this.delayedSelectionSync = !1,
        this.mightDrag = null,
        this.startDoc = e.state.doc,
        this.selectNode = !!r[bl],
        this.allowDefault = r.shiftKey;
        let s, o;
        if (t.inside > -1)
            s = e.state.doc.nodeAt(t.inside),
            o = t.inside;
        else {
            let u = e.state.doc.resolve(t.pos);
            s = u.parent,
            o = u.depth ? u.before() : 0
        }
        const l = i ? null : r.target
          , a = l ? e.docView.nearestDesc(l, !0) : null;
        this.target = a ? a.dom : null;
        let {selection: c} = e.state;
        (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof E && c.from <= o && c.to > o) && (this.mightDrag = {
            node: s,
            pos: o,
            addAttr: !!(this.target && !this.target.draggable),
            setUneditable: !!(this.target && be && !this.target.hasAttribute("contentEditable"))
        }),
        this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(),
        this.mightDrag.addAttr && (this.target.draggable = !0),
        this.mightDrag.setUneditable && setTimeout(()=>{
            this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
        }
        , 20),
        this.view.domObserver.start()),
        e.root.addEventListener("mouseup", this.up = this.up.bind(this)),
        e.root.addEventListener("mousemove", this.move = this.move.bind(this)),
        Ue(e, "pointer")
    }
    done() {
        this.view.root.removeEventListener("mouseup", this.up),
        this.view.root.removeEventListener("mousemove", this.move),
        this.mightDrag && this.target && (this.view.domObserver.stop(),
        this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
        this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
        this.view.domObserver.start()),
        this.delayedSelectionSync && setTimeout(()=>Be(this.view)),
        this.view.input.mouseDown = null
    }
    up(e) {
        if (this.done(),
        !this.view.dom.contains(e.target))
            return;
        let t = this.pos;
        this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(mr(e))),
        this.updateAllowDefault(e),
        this.allowDefault || !t ? Ue(this.view, "pointer") : Ad(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || X && this.mightDrag && !this.mightDrag.node.isAtom || Q && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ft(this.view, N.near(this.view.state.doc.resolve(t.pos)), "pointer"),
        e.preventDefault()) : Ue(this.view, "pointer")
    }
    move(e) {
        this.updateAllowDefault(e),
        Ue(this.view, "pointer"),
        e.buttons == 0 && this.done()
    }
    updateAllowDefault(e) {
        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
    }
}
ee.touchstart = n=>{
    n.input.lastTouch = Date.now(),
    Ri(n),
    Ue(n, "pointer")
}
;
ee.touchmove = n=>{
    n.input.lastTouch = Date.now(),
    Ue(n, "pointer")
}
;
ee.contextmenu = n=>Ri(n);
function Sl(n, e) {
    return n.composing ? !0 : X && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8,
    !0) : !1
}
const Pd = me ? 5e3 : -1;
te.compositionstart = te.compositionupdate = n=>{
    if (!n.composing) {
        n.domObserver.flush();
        let {state: e} = n
          , t = e.selection.$from;
        if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(r=>r.type.spec.inclusive === !1)))
            n.markCursor = n.state.storedMarks || t.marks(),
            _n(n, !0),
            n.markCursor = null;
        else if (_n(n),
        be && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
            let r = n.domSelectionRange();
            for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
                let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
                if (!o)
                    break;
                if (o.nodeType == 3) {
                    n.domSelection().collapse(o, o.nodeValue.length);
                    break
                } else
                    i = o,
                    s = -1
            }
        }
        n.input.composing = !0
    }
    xl(n, Pd)
}
;
te.compositionend = (n,e)=>{
    n.composing && (n.input.composing = !1,
    n.input.compositionEndedAt = e.timeStamp,
    n.input.compositionID++,
    xl(n, 20))
}
;
function xl(n, e) {
    clearTimeout(n.input.composingTimeout),
    e > -1 && (n.input.composingTimeout = setTimeout(()=>_n(n), e))
}
function Ml(n) {
    for (n.composing && (n.input.composing = !1,
    n.input.compositionEndedAt = Ld()); n.input.compositionNodes.length > 0; )
        n.input.compositionNodes.pop().markParentsDirty()
}
function Ld() {
    let n = document.createEvent("Event");
    return n.initEvent("event", !0, !0),
    n.timeStamp
}
function _n(n, e=!1) {
    if (!(me && n.domObserver.flushingSoon >= 0)) {
        if (n.domObserver.forceFlush(),
        Ml(n),
        e || n.docView && n.docView.dirty) {
            let t = Ai(n);
            return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state),
            !0
        }
        return !1
    }
}
function Bd(n, e) {
    if (!n.dom.parentNode)
        return;
    let t = n.dom.parentNode.appendChild(document.createElement("div"));
    t.appendChild(e),
    t.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let r = getSelection()
      , i = document.createRange();
    i.selectNodeContents(e),
    n.dom.blur(),
    r.removeAllRanges(),
    r.addRange(i),
    setTimeout(()=>{
        t.parentNode && t.parentNode.removeChild(t),
        n.focus()
    }
    , 50)
}
const jt = re && Ge < 15 || _t && Bu < 604;
ee.copy = te.cut = (n,e)=>{
    let t = e
      , r = n.state.selection
      , i = t.type == "cut";
    if (r.empty)
        return;
    let s = jt ? null : t.clipboardData
      , o = r.content()
      , {dom: l, text: a} = fl(n, o);
    s ? (t.preventDefault(),
    s.clearData(),
    s.setData("text/html", l.innerHTML),
    s.setData("text/plain", a)) : Bd(n, l),
    i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
}
;
function zd(n) {
    return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null
}
function Fd(n, e) {
    if (!n.dom.parentNode)
        return;
    let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code
      , r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
    t || (r.contentEditable = "true"),
    r.style.cssText = "position: fixed; left: -10000px; top: 10px",
    r.focus(),
    setTimeout(()=>{
        n.focus(),
        r.parentNode && r.parentNode.removeChild(r),
        t ? dn(n, r.value, null, n.input.shiftKey, e) : dn(n, r.textContent, r.innerHTML, n.input.shiftKey, e)
    }
    , 50)
}
function dn(n, e, t, r, i) {
    let s = hl(n, e, t, r, n.state.selection.$from);
    if (n.someProp("handlePaste", a=>a(n, i, s || S.empty)))
        return !0;
    if (!s)
        return !1;
    let o = zd(s)
      , l = o ? n.state.tr.replaceSelectionWith(o, n.input.shiftKey) : n.state.tr.replaceSelection(s);
    return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")),
    !0
}
te.paste = (n,e)=>{
    let t = e;
    if (n.composing && !me)
        return;
    let r = jt ? null : t.clipboardData;
    r && dn(n, r.getData("text/plain"), r.getData("text/html"), n.input.shiftKey, t) ? t.preventDefault() : Fd(n, t)
}
;
class Hd {
    constructor(e, t) {
        this.slice = e,
        this.move = t
    }
}
const Cl = ue ? "altKey" : "ctrlKey";
ee.dragstart = (n,e)=>{
    let t = e
      , r = n.input.mouseDown;
    if (r && r.done(),
    !t.dataTransfer)
        return;
    let i = n.state.selection
      , s = i.empty ? null : n.posAtCoords(mr(t));
    if (!(s && s.pos >= i.from && s.pos <= (i instanceof E ? i.to - 1 : i.to))) {
        if (r && r.mightDrag)
            n.dispatch(n.state.tr.setSelection(E.create(n.state.doc, r.mightDrag.pos)));
        else if (t.target && t.target.nodeType == 1) {
            let c = n.docView.nearestDesc(t.target, !0);
            c && c.node.type.spec.draggable && c != n.docView && n.dispatch(n.state.tr.setSelection(E.create(n.state.doc, c.posBefore)))
        }
    }
    let o = n.state.selection.content()
      , {dom: l, text: a} = fl(n, o);
    t.dataTransfer.clearData(),
    t.dataTransfer.setData(jt ? "Text" : "text/html", l.innerHTML),
    t.dataTransfer.effectAllowed = "copyMove",
    jt || t.dataTransfer.setData("text/plain", a),
    n.dragging = new Hd(o,!t[Cl])
}
;
ee.dragend = n=>{
    let e = n.dragging;
    window.setTimeout(()=>{
        n.dragging == e && (n.dragging = null)
    }
    , 50)
}
;
te.dragover = te.dragenter = (n,e)=>e.preventDefault();
te.drop = (n,e)=>{
    let t = e
      , r = n.dragging;
    if (n.dragging = null,
    !t.dataTransfer)
        return;
    let i = n.posAtCoords(mr(t));
    if (!i)
        return;
    let s = n.state.doc.resolve(i.pos)
      , o = r && r.slice;
    o ? n.someProp("transformPasted", p=>{
        o = p(o, n)
    }
    ) : o = hl(n, t.dataTransfer.getData(jt ? "Text" : "text/plain"), jt ? null : t.dataTransfer.getData("text/html"), !1, s);
    let l = !!(r && !t[Cl]);
    if (n.someProp("handleDrop", p=>p(n, t, o || S.empty, l))) {
        t.preventDefault();
        return
    }
    if (!o)
        return;
    t.preventDefault();
    let a = o ? ku(n.state.doc, s.pos, o) : s.pos;
    a == null && (a = s.pos);
    let c = n.state.tr;
    l && c.deleteSelection();
    let u = c.mapping.map(a)
      , d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1
      , f = c.doc;
    if (d ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o),
    c.doc.eq(f))
        return;
    let h = c.doc.resolve(u);
    if (d && E.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
        c.setSelection(new E(h));
    else {
        let p = c.mapping.map(a);
        c.mapping.maps[c.mapping.maps.length - 1].forEach((m,g,y,x)=>p = x),
        c.setSelection(Ni(n, h, c.doc.resolve(p)))
    }
    n.focus(),
    n.dispatch(c.setMeta("uiEvent", "drop"))
}
;
ee.focus = n=>{
    n.input.lastFocus = Date.now(),
    n.focused || (n.domObserver.stop(),
    n.dom.classList.add("ProseMirror-focused"),
    n.domObserver.start(),
    n.focused = !0,
    setTimeout(()=>{
        n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Be(n)
    }
    , 20))
}
;
ee.blur = (n,e)=>{
    let t = e;
    n.focused && (n.domObserver.stop(),
    n.dom.classList.remove("ProseMirror-focused"),
    n.domObserver.start(),
    t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(),
    n.focused = !1)
}
;
ee.beforeinput = (n,e)=>{
    if (Q && me && e.inputType == "deleteContentBackward") {
        n.domObserver.flushSoon();
        let {domChangeCount: r} = n.input;
        setTimeout(()=>{
            if (n.input.domChangeCount != r || (n.dom.blur(),
            n.focus(),
            n.someProp("handleKeyDown", s=>s(n, ct(8, "Backspace")))))
                return;
            let {$cursor: i} = n.state.selection;
            i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView())
        }
        , 50)
    }
}
;
for (let n in te)
    ee[n] = te[n];
function fn(n, e) {
    if (n == e)
        return !0;
    for (let t in n)
        if (n[t] !== e[t])
            return !1;
    for (let t in e)
        if (!(t in n))
            return !1;
    return !0
}
class Pi {
    constructor(e, t) {
        this.toDOM = e,
        this.spec = t || St,
        this.side = this.spec.side || 0
    }
    map(e, t, r, i) {
        let {pos: s, deleted: o} = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
        return o ? null : new ye(s - r,s - r,this)
    }
    valid() {
        return !0
    }
    eq(e) {
        return this == e || e instanceof Pi && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && fn(this.spec, e.spec))
    }
    destroy(e) {
        this.spec.destroy && this.spec.destroy(e)
    }
}
class Ye {
    constructor(e, t) {
        this.attrs = e,
        this.spec = t || St
    }
    map(e, t, r, i) {
        let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r
          , o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
        return s >= o ? null : new ye(s,o,this)
    }
    valid(e, t) {
        return t.from < t.to
    }
    eq(e) {
        return this == e || e instanceof Ye && fn(this.attrs, e.attrs) && fn(this.spec, e.spec)
    }
    static is(e) {
        return e.type instanceof Ye
    }
    destroy() {}
}
class Li {
    constructor(e, t) {
        this.attrs = e,
        this.spec = t || St
    }
    map(e, t, r, i) {
        let s = e.mapResult(t.from + i, 1);
        if (s.deleted)
            return null;
        let o = e.mapResult(t.to + i, -1);
        return o.deleted || o.pos <= s.pos ? null : new ye(s.pos - r,o.pos - r,this)
    }
    valid(e, t) {
        let {index: r, offset: i} = e.content.findIndex(t.from), s;
        return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to
    }
    eq(e) {
        return this == e || e instanceof Li && fn(this.attrs, e.attrs) && fn(this.spec, e.spec)
    }
    destroy() {}
}
class ye {
    constructor(e, t, r) {
        this.from = e,
        this.to = t,
        this.type = r
    }
    copy(e, t) {
        return new ye(e,t,this.type)
    }
    eq(e, t=0) {
        return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
    }
    map(e, t, r) {
        return this.type.map(e, this, t, r)
    }
    static widget(e, t, r) {
        return new ye(e,e,new Pi(t,r))
    }
    static inline(e, t, r, i) {
        return new ye(e,t,new Ye(r,i))
    }
    static node(e, t, r, i) {
        return new ye(e,t,new Li(r,i))
    }
    get spec() {
        return this.type.spec
    }
    get inline() {
        return this.type instanceof Ye
    }
}
const vt = []
  , St = {};
class j {
    constructor(e, t) {
        this.local = e.length ? e : vt,
        this.children = t.length ? t : vt
    }
    static create(e, t) {
        return t.length ? jn(t, e, 0, St) : Z
    }
    find(e, t, r) {
        let i = [];
        return this.findInner(e ?? 0, t ?? 1e9, i, 0, r),
        i
    }
    findInner(e, t, r, i, s) {
        for (let o = 0; o < this.local.length; o++) {
            let l = this.local[o];
            l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i))
        }
        for (let o = 0; o < this.children.length; o += 3)
            if (this.children[o] < t && this.children[o + 1] > e) {
                let l = this.children[o] + 1;
                this.children[o + 2].findInner(e - l, t - l, r, i + l, s)
            }
    }
    map(e, t, r) {
        return this == Z || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || St)
    }
    mapInner(e, t, r, i, s) {
        let o;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l].map(e, r, i);
            a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec)
        }
        return this.children.length ? $d(this.children, o || [], e, t, r, i, s) : o ? new j(o.sort(xt),vt) : Z
    }
    add(e, t) {
        return t.length ? this == Z ? j.create(e, t) : this.addInner(e, t, 0) : this
    }
    addInner(e, t, r) {
        let i, s = 0;
        e.forEach((l,a)=>{
            let c = a + r, u;
            if (u = Tl(t, l, c)) {
                for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
                    s += 3;
                i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, jn(u, l, c + 1, St)),
                s += 3
            }
        }
        );
        let o = wl(s ? Ol(t) : t, -r);
        for (let l = 0; l < o.length; l++)
            o[l].type.valid(e, o[l]) || o.splice(l--, 1);
        return new j(o.length ? this.local.concat(o).sort(xt) : this.local,i || this.children)
    }
    remove(e) {
        return e.length == 0 || this == Z ? this : this.removeInner(e, 0)
    }
    removeInner(e, t) {
        let r = this.children
          , i = this.local;
        for (let s = 0; s < r.length; s += 3) {
            let o, l = r[s] + t, a = r[s + 1] + t;
            for (let u = 0, d; u < e.length; u++)
                (d = e[u]) && d.from > l && d.to < a && (e[u] = null,
                (o || (o = [])).push(d));
            if (!o)
                continue;
            r == this.children && (r = this.children.slice());
            let c = r[s + 2].removeInner(o, l + 1);
            c != Z ? r[s + 2] = c : (r.splice(s, 3),
            s -= 3)
        }
        if (i.length) {
            for (let s = 0, o; s < e.length; s++)
                if (o = e[s])
                    for (let l = 0; l < i.length; l++)
                        i[l].eq(o, t) && (i == this.local && (i = this.local.slice()),
                        i.splice(l--, 1))
        }
        return r == this.children && i == this.local ? this : i.length || r.length ? new j(i,r) : Z
    }
    forChild(e, t) {
        if (this == Z)
            return this;
        if (t.isLeaf)
            return j.empty;
        let r, i;
        for (let l = 0; l < this.children.length; l += 3)
            if (this.children[l] >= e) {
                this.children[l] == e && (r = this.children[l + 2]);
                break
            }
        let s = e + 1
          , o = s + t.content.size;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l];
            if (a.from < o && a.to > s && a.type instanceof Ye) {
                let c = Math.max(s, a.from) - s
                  , u = Math.min(o, a.to) - s;
                c < u && (i || (i = [])).push(a.copy(c, u))
            }
        }
        if (i) {
            let l = new j(i.sort(xt),vt);
            return r ? new We([l, r]) : l
        }
        return r || Z
    }
    eq(e) {
        if (this == e)
            return !0;
        if (!(e instanceof j) || this.local.length != e.local.length || this.children.length != e.children.length)
            return !1;
        for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t]))
                return !1;
        for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
                return !1;
        return !0
    }
    locals(e) {
        return Bi(this.localsInner(e))
    }
    localsInner(e) {
        if (this == Z)
            return vt;
        if (e.inlineContent || !this.local.some(Ye.is))
            return this.local;
        let t = [];
        for (let r = 0; r < this.local.length; r++)
            this.local[r].type instanceof Ye || t.push(this.local[r]);
        return t
    }
}
j.empty = new j([],[]);
j.removeOverlap = Bi;
const Z = j.empty;
class We {
    constructor(e) {
        this.members = e
    }
    map(e, t) {
        const r = this.members.map(i=>i.map(e, t, St));
        return We.from(r)
    }
    forChild(e, t) {
        if (t.isLeaf)
            return j.empty;
        let r = [];
        for (let i = 0; i < this.members.length; i++) {
            let s = this.members[i].forChild(e, t);
            s != Z && (s instanceof We ? r = r.concat(s.members) : r.push(s))
        }
        return We.from(r)
    }
    eq(e) {
        if (!(e instanceof We) || e.members.length != this.members.length)
            return !1;
        for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t]))
                return !1;
        return !0
    }
    locals(e) {
        let t, r = !0;
        for (let i = 0; i < this.members.length; i++) {
            let s = this.members[i].localsInner(e);
            if (s.length)
                if (!t)
                    t = s;
                else {
                    r && (t = t.slice(),
                    r = !1);
                    for (let o = 0; o < s.length; o++)
                        t.push(s[o])
                }
        }
        return t ? Bi(r ? t : t.sort(xt)) : vt
    }
    static from(e) {
        switch (e.length) {
        case 0:
            return Z;
        case 1:
            return e[0];
        default:
            return new We(e.every(t=>t instanceof j) ? e : e.reduce((t,r)=>t.concat(r instanceof j ? r : r.members), []))
        }
    }
}
function $d(n, e, t, r, i, s, o) {
    let l = n.slice();
    for (let c = 0, u = s; c < t.maps.length; c++) {
        let d = 0;
        t.maps[c].forEach((f,h,p,m)=>{
            let g = m - p - (h - f);
            for (let y = 0; y < l.length; y += 3) {
                let x = l[y + 1];
                if (x < 0 || f > x + u - d)
                    continue;
                let w = l[y] + u - d;
                h >= w ? l[y + 1] = f <= w ? -2 : -1 : p >= i && g && (l[y] += g,
                l[y + 1] += g)
            }
            d += g
        }
        ),
        u = t.maps[c].map(u, -1)
    }
    let a = !1;
    for (let c = 0; c < l.length; c += 3)
        if (l[c + 1] < 0) {
            if (l[c + 1] == -2) {
                a = !0,
                l[c + 1] = -1;
                continue
            }
            let u = t.map(n[c] + s)
              , d = u - i;
            if (d < 0 || d >= r.content.size) {
                a = !0;
                continue
            }
            let f = t.map(n[c + 1] + s, -1)
              , h = f - i
              , {index: p, offset: m} = r.content.findIndex(d)
              , g = r.maybeChild(p);
            if (g && m == d && m + g.nodeSize == h) {
                let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
                y != Z ? (l[c] = d,
                l[c + 1] = h,
                l[c + 2] = y) : (l[c + 1] = -2,
                a = !0)
            } else
                a = !0
        }
    if (a) {
        let c = Vd(l, n, e, t, i, s, o)
          , u = jn(c, r, 0, o);
        e = u.local;
        for (let d = 0; d < l.length; d += 3)
            l[d + 1] < 0 && (l.splice(d, 3),
            d -= 3);
        for (let d = 0, f = 0; d < u.children.length; d += 3) {
            let h = u.children[d];
            for (; f < l.length && l[f] < h; )
                f += 3;
            l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2])
        }
    }
    return new j(e.sort(xt),l)
}
function wl(n, e) {
    if (!e || !n.length)
        return n;
    let t = [];
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        t.push(new ye(i.from + e,i.to + e,i.type))
    }
    return t
}
function Vd(n, e, t, r, i, s, o) {
    function l(a, c) {
        for (let u = 0; u < a.local.length; u++) {
            let d = a.local[u].map(r, i, c);
            d ? t.push(d) : o.onRemove && o.onRemove(a.local[u].spec)
        }
        for (let u = 0; u < a.children.length; u += 3)
            l(a.children[u + 2], a.children[u] + c + 1)
    }
    for (let a = 0; a < n.length; a += 3)
        n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
    return t
}
function Tl(n, e, t) {
    if (e.isLeaf)
        return null;
    let r = t + e.nodeSize
      , i = null;
    for (let s = 0, o; s < n.length; s++)
        (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o),
        n[s] = null);
    return i
}
function Ol(n) {
    let e = [];
    for (let t = 0; t < n.length; t++)
        n[t] != null && e.push(n[t]);
    return e
}
function jn(n, e, t, r) {
    let i = []
      , s = !1;
    e.forEach((l,a)=>{
        let c = Tl(n, l, a + t);
        if (c) {
            s = !0;
            let u = jn(c, l, t + a + 1, r);
            u != Z && i.push(a, a + l.nodeSize, u)
        }
    }
    );
    let o = wl(s ? Ol(n) : n, -t).sort(xt);
    for (let l = 0; l < o.length; l++)
        o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec),
        o.splice(l--, 1));
    return o.length || i.length ? new j(o,i) : Z
}
function xt(n, e) {
    return n.from - e.from || n.to - e.to
}
function Bi(n) {
    let e = n;
    for (let t = 0; t < e.length - 1; t++) {
        let r = e[t];
        if (r.from != r.to)
            for (let i = t + 1; i < e.length; i++) {
                let s = e[i];
                if (s.from == r.from) {
                    s.to != r.to && (e == n && (e = n.slice()),
                    e[i] = s.copy(s.from, r.to),
                    Bs(e, i + 1, s.copy(r.to, s.to)));
                    continue
                } else {
                    s.from < r.to && (e == n && (e = n.slice()),
                    e[t] = r.copy(r.from, s.from),
                    Bs(e, i, r.copy(s.from, r.to)));
                    break
                }
            }
    }
    return e
}
function Bs(n, e, t) {
    for (; e < n.length && xt(t, n[e]) > 0; )
        e++;
    n.splice(e, 0, t)
}
function Br(n) {
    let e = [];
    return n.someProp("decorations", t=>{
        let r = t(n.state);
        r && r != Z && e.push(r)
    }
    ),
    n.cursorWrapper && e.push(j.create(n.state.doc, [n.cursorWrapper.deco])),
    We.from(e)
}
const _d = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0
}
  , jd = re && Ge <= 11;
class Wd {
    constructor() {
        this.anchorNode = null,
        this.anchorOffset = 0,
        this.focusNode = null,
        this.focusOffset = 0
    }
    set(e) {
        this.anchorNode = e.anchorNode,
        this.anchorOffset = e.anchorOffset,
        this.focusNode = e.focusNode,
        this.focusOffset = e.focusOffset
    }
    clear() {
        this.anchorNode = this.focusNode = null
    }
    eq(e) {
        return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
    }
}
class Kd {
    constructor(e, t) {
        this.view = e,
        this.handleDOMChange = t,
        this.queue = [],
        this.flushingSoon = -1,
        this.observer = null,
        this.currentSelection = new Wd,
        this.onCharData = null,
        this.suppressingSelectionUpdates = !1,
        this.observer = window.MutationObserver && new window.MutationObserver(r=>{
            for (let i = 0; i < r.length; i++)
                this.queue.push(r[i]);
            re && Ge <= 11 && r.some(i=>i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush()
        }
        ),
        jd && (this.onCharData = r=>{
            this.queue.push({
                target: r.target,
                type: "characterData",
                oldValue: r.prevValue
            }),
            this.flushSoon()
        }
        ),
        this.onSelectionChange = this.onSelectionChange.bind(this)
    }
    flushSoon() {
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(()=>{
            this.flushingSoon = -1,
            this.flush()
        }
        , 20))
    }
    forceFlush() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon),
        this.flushingSoon = -1,
        this.flush())
    }
    start() {
        this.observer && (this.observer.takeRecords(),
        this.observer.observe(this.view.dom, _d)),
        this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
        this.connectSelection()
    }
    stop() {
        if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
                for (let t = 0; t < e.length; t++)
                    this.queue.push(e[t]);
                window.setTimeout(()=>this.flush(), 20)
            }
            this.observer.disconnect()
        }
        this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData),
        this.disconnectSelection()
    }
    connectSelection() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
    }
    disconnectSelection() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
    }
    suppressSelectionUpdates() {
        this.suppressingSelectionUpdates = !0,
        setTimeout(()=>this.suppressingSelectionUpdates = !1, 50)
    }
    onSelectionChange() {
        if (vs(this.view)) {
            if (this.suppressingSelectionUpdates)
                return Be(this.view);
            if (re && Ge <= 11 && !this.view.state.selection.empty) {
                let e = this.view.domSelectionRange();
                if (e.focusNode && Ct(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
                    return this.flushSoon()
            }
            this.flush()
        }
    }
    setCurSelection() {
        this.currentSelection.set(this.view.domSelectionRange())
    }
    ignoreSelectionChange(e) {
        if (!e.focusNode)
            return !0;
        let t = new Set, r;
        for (let s = e.focusNode; s; s = un(s))
            t.add(s);
        for (let s = e.anchorNode; s; s = un(s))
            if (t.has(s)) {
                r = s;
                break
            }
        let i = r && this.view.docView.nearestDesc(r);
        if (i && i.ignoreMutation({
            type: "selection",
            target: r.nodeType == 3 ? r.parentNode : r
        }))
            return this.setCurSelection(),
            !0
    }
    flush() {
        let {view: e} = this;
        if (!e.docView || this.flushingSoon > -1)
            return;
        let t = this.observer ? this.observer.takeRecords() : [];
        this.queue.length && (t = this.queue.concat(t),
        this.queue.length = 0);
        let r = e.domSelectionRange()
          , i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && vs(e) && !this.ignoreSelectionChange(r)
          , s = -1
          , o = -1
          , l = !1
          , a = [];
        if (e.editable)
            for (let u = 0; u < t.length; u++) {
                let d = this.registerMutation(t[u], a);
                d && (s = s < 0 ? d.from : Math.min(d.from, s),
                o = o < 0 ? d.to : Math.max(d.to, o),
                d.typeOver && (l = !0))
            }
        if (be && a.length > 1) {
            let u = a.filter(d=>d.nodeName == "BR");
            if (u.length == 2) {
                let d = u[0]
                  , f = u[1];
                d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove()
            }
        }
        let c = null;
        s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && fr(r) && (c = Ai(e)) && c.eq(N.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0,
        Be(e),
        this.currentSelection.set(r),
        e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o),
        Jd(e)),
        this.handleDOMChange(s, o, l, a),
        e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Be(e),
        this.currentSelection.set(r))
    }
    registerMutation(e, t) {
        if (t.indexOf(e.target) > -1)
            return null;
        let r = this.view.docView.nearestDesc(e.target);
        if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
            return null;
        if (e.type == "childList") {
            for (let u = 0; u < e.addedNodes.length; u++)
                t.push(e.addedNodes[u]);
            if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
                return {
                    from: r.posBefore,
                    to: r.posAfter
                };
            let i = e.previousSibling
              , s = e.nextSibling;
            if (re && Ge <= 11 && e.addedNodes.length)
                for (let u = 0; u < e.addedNodes.length; u++) {
                    let {previousSibling: d, nextSibling: f} = e.addedNodes[u];
                    (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d),
                    (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f)
                }
            let o = i && i.parentNode == e.target ? fe(i) + 1 : 0
              , l = r.localPosFromDOM(e.target, o, -1)
              , a = s && s.parentNode == e.target ? fe(s) : e.target.childNodes.length
              , c = r.localPosFromDOM(e.target, a, 1);
            return {
                from: l,
                to: c
            }
        } else
            return e.type == "attributes" ? {
                from: r.posAtStart - r.border,
                to: r.posAtEnd + r.border
            } : {
                from: r.posAtStart,
                to: r.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue
            }
    }
}
let zs = new WeakMap
  , Fs = !1;
function Jd(n) {
    if (!zs.has(n) && (zs.set(n, null),
    ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
        if (n.requiresGeckoHackNode = be,
        Fs)
            return;
        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),
        Fs = !0
    }
}
function qd(n) {
    let e;
    function t(a) {
        a.preventDefault(),
        a.stopImmediatePropagation(),
        e = a.getTargetRanges()[0]
    }
    n.dom.addEventListener("beforeinput", t, !0),
    document.execCommand("indent"),
    n.dom.removeEventListener("beforeinput", t, !0);
    let r = e.startContainer
      , i = e.startOffset
      , s = e.endContainer
      , o = e.endOffset
      , l = n.domAtPos(n.state.selection.anchor);
    return Ct(l.node, l.offset, s, o) && ([r,i,s,o] = [s, o, r, i]),
    {
        anchorNode: r,
        anchorOffset: i,
        focusNode: s,
        focusOffset: o
    }
}
function Ud(n, e, t) {
    let {node: r, fromOffset: i, toOffset: s, from: o, to: l} = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
    if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{
        node: u,
        offset: a.anchorOffset
    }],
    fr(a) || c.push({
        node: a.focusNode,
        offset: a.focusOffset
    })),
    Q && n.input.lastKeyCode === 8)
        for (let g = s; g > i; g--) {
            let y = r.childNodes[g - 1]
              , x = y.pmViewDesc;
            if (y.nodeName == "BR" && !x) {
                s = g;
                break
            }
            if (!x || x.size)
                break
        }
    let d = n.state.doc
      , f = n.someProp("domParser") || Ht.fromSchema(n.state.schema)
      , h = d.resolve(o)
      , p = null
      , m = f.parse(r, {
        topNode: h.parent,
        topMatch: h.parent.contentMatchAt(h.index()),
        topOpen: !0,
        from: i,
        to: s,
        preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
        findPositions: c,
        ruleFromNode: Gd,
        context: h
    });
    if (c && c[0].pos != null) {
        let g = c[0].pos
          , y = c[1] && c[1].pos;
        y == null && (y = g),
        p = {
            anchor: g + o,
            head: y + o
        }
    }
    return {
        doc: m,
        sel: p,
        from: o,
        to: l
    }
}
function Gd(n) {
    let e = n.pmViewDesc;
    if (e)
        return e.parseRule();
    if (n.nodeName == "BR" && n.parentNode) {
        if (X && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
            let t = document.createElement("div");
            return t.appendChild(document.createElement("li")),
            {
                skip: t
            }
        } else if (n.parentNode.lastChild == n || X && /^(tr|table)$/i.test(n.parentNode.nodeName))
            return {
                ignore: !0
            }
    } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
        return {
            ignore: !0
        };
    return null
}
const Zd = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Yd(n, e, t, r, i) {
    if (e < 0) {
        let O = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null
          , se = Ai(n, O);
        if (se && !n.state.selection.eq(se)) {
            if (Q && me && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", ze=>ze(n, ct(13, "Enter"))))
                return;
            let De = n.state.tr.setSelection(se);
            O == "pointer" ? De.setMeta("pointer", !0) : O == "key" && De.scrollIntoView(),
            n.composing && De.setMeta("composition", n.input.compositionID),
            n.dispatch(De)
        }
        return
    }
    let s = n.state.doc.resolve(e)
      , o = s.sharedDepth(t);
    e = s.before(o + 1),
    t = n.state.doc.resolve(t).after(o + 1);
    let l = n.state.selection, a = Ud(n, e, t), c = n.state.doc, u = c.slice(a.from, a.to), d, f;
    n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to,
    f = "end") : (d = n.state.selection.from,
    f = "start"),
    n.input.lastKeyCode = null;
    let h = ef(u.content, a.doc.content, a.from, d, f);
    if ((_t && n.input.lastIOSEnter > Date.now() - 225 || me) && i.some(O=>O.nodeType == 1 && !Zd.test(O.nodeName)) && (!h || h.endA >= h.endB) && n.someProp("handleKeyDown", O=>O(n, ct(13, "Enter")))) {
        n.input.lastIOSEnter = 0;
        return
    }
    if (!h)
        if (r && l instanceof A && !l.empty && l.$head.sameParent(l.$anchor) && !n.composing && !(a.sel && a.sel.anchor != a.sel.head))
            h = {
                start: l.from,
                endA: l.to,
                endB: l.to
            };
        else {
            if (a.sel) {
                let O = Hs(n, n.state.doc, a.sel);
                if (O && !O.eq(n.state.selection)) {
                    let se = n.state.tr.setSelection(O);
                    n.composing && se.setMeta("composition", n.input.compositionID),
                    n.dispatch(se)
                }
            }
            return
        }
    if (Q && n.cursorWrapper && a.sel && a.sel.anchor == n.cursorWrapper.deco.from && a.sel.head == a.sel.anchor) {
        let O = h.endB - h.start;
        a.sel = {
            anchor: a.sel.anchor + O,
            head: a.sel.anchor + O
        }
    }
    n.input.domChangeCount++,
    n.state.selection.from < n.state.selection.to && h.start == h.endB && n.state.selection instanceof A && (h.start > n.state.selection.from && h.start <= n.state.selection.from + 2 && n.state.selection.from >= a.from ? h.start = n.state.selection.from : h.endA < n.state.selection.to && h.endA >= n.state.selection.to - 2 && n.state.selection.to <= a.to && (h.endB += n.state.selection.to - h.endA,
    h.endA = n.state.selection.to)),
    re && Ge <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > a.from && a.doc.textBetween(h.start - a.from - 1, h.start - a.from + 1) == "  " && (h.start--,
    h.endA--,
    h.endB--);
    let p = a.doc.resolveNoCache(h.start - a.from), m = a.doc.resolveNoCache(h.endB - a.from), g = c.resolve(h.start), y = p.sameParent(m) && p.parent.inlineContent && g.end() >= h.endA, x;
    if ((_t && n.input.lastIOSEnter > Date.now() - 225 && (!y || i.some(O=>O.nodeName == "DIV" || O.nodeName == "P")) || !y && p.pos < a.doc.content.size && (x = N.findFrom(a.doc.resolve(p.pos + 1), 1, !0)) && x.head == m.pos) && n.someProp("handleKeyDown", O=>O(n, ct(13, "Enter")))) {
        n.input.lastIOSEnter = 0;
        return
    }
    if (n.state.selection.anchor > h.start && Xd(c, h.start, h.endA, p, m) && n.someProp("handleKeyDown", O=>O(n, ct(8, "Backspace")))) {
        me && Q && n.domObserver.suppressSelectionUpdates();
        return
    }
    Q && me && h.endB == h.start && (n.input.lastAndroidDelete = Date.now()),
    me && !y && p.start() != m.start() && m.parentOffset == 0 && p.depth == m.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == h.endA && (h.endB -= 2,
    m = a.doc.resolveNoCache(h.endB - a.from),
    setTimeout(()=>{
        n.someProp("handleKeyDown", function(O) {
            return O(n, ct(13, "Enter"))
        })
    }
    , 20));
    let w = h.start, B = h.endA, D, T, L;
    if (y) {
        if (p.pos == m.pos)
            re && Ge <= 11 && p.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(),
            setTimeout(()=>Be(n), 20)),
            D = n.state.tr.delete(w, B),
            T = c.resolve(h.start).marksAcross(c.resolve(h.endA));
        else if (h.endA == h.endB && (L = Qd(p.parent.content.cut(p.parentOffset, m.parentOffset), g.parent.content.cut(g.parentOffset, h.endA - g.start()))))
            D = n.state.tr,
            L.type == "add" ? D.addMark(w, B, L.mark) : D.removeMark(w, B, L.mark);
        else if (p.parent.child(p.index()).isText && p.index() == m.index() - (m.textOffset ? 0 : 1)) {
            let O = p.parent.textBetween(p.parentOffset, m.parentOffset);
            if (n.someProp("handleTextInput", se=>se(n, w, B, O)))
                return;
            D = n.state.tr.insertText(O, w, B)
        }
    }
    if (D || (D = n.state.tr.replace(w, B, a.doc.slice(h.start - a.from, h.endB - a.from))),
    a.sel) {
        let O = Hs(n, D.doc, a.sel);
        O && !(Q && me && n.composing && O.empty && (h.start != h.endB || n.input.lastAndroidDelete < Date.now() - 100) && (O.head == w || O.head == D.mapping.map(B) - 1) || re && O.empty && O.head == w) && D.setSelection(O)
    }
    T && D.ensureMarks(T),
    n.composing && D.setMeta("composition", n.input.compositionID),
    n.dispatch(D.scrollIntoView())
}
function Hs(n, e, t) {
    return Math.max(t.anchor, t.head) > e.content.size ? null : Ni(n, e.resolve(t.anchor), e.resolve(t.head))
}
function Qd(n, e) {
    let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
    for (let u = 0; u < r.length; u++)
        i = r[u].removeFromSet(i);
    for (let u = 0; u < t.length; u++)
        s = t[u].removeFromSet(s);
    if (i.length == 1 && s.length == 0)
        l = i[0],
        o = "add",
        a = u=>u.mark(l.addToSet(u.marks));
    else if (i.length == 0 && s.length == 1)
        l = s[0],
        o = "remove",
        a = u=>u.mark(l.removeFromSet(u.marks));
    else
        return null;
    let c = [];
    for (let u = 0; u < e.childCount; u++)
        c.push(a(e.child(u)));
    if (k.from(c).eq(n))
        return {
            mark: l,
            type: o
        }
}
function Xd(n, e, t, r, i) {
    if (!r.parent.isTextblock || t - e <= i.pos - r.pos || zr(r, !0, !1) < i.pos)
        return !1;
    let s = n.resolve(e);
    if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
        return !1;
    let o = n.resolve(zr(s, !0, !0));
    return !o.parent.isTextblock || o.pos > t || zr(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content)
}
function zr(n, e, t) {
    let r = n.depth
      , i = e ? n.end() : n.pos;
    for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
        r--,
        i++,
        e = !1;
    if (t) {
        let s = n.node(r).maybeChild(n.indexAfter(r));
        for (; s && !s.isLeaf; )
            s = s.firstChild,
            i++
    }
    return i
}
function ef(n, e, t, r, i) {
    let s = n.findDiffStart(e, t);
    if (s == null)
        return null;
    let {a: o, b: l} = n.findDiffEnd(e, t + n.size, t + e.size);
    if (i == "end") {
        let a = Math.max(0, s - Math.min(o, l));
        r -= o + a - s
    }
    if (o < s && n.size < e.size) {
        let a = r <= s && r >= o ? s - r : 0;
        s -= a,
        l = s + (l - o),
        o = s
    } else if (l < s) {
        let a = r <= s && r >= l ? s - r : 0;
        s -= a,
        o = s + (o - l),
        l = s
    }
    return {
        start: s,
        endA: o,
        endB: l
    }
}
class tf {
    constructor(e, t) {
        this._root = null,
        this.focused = !1,
        this.trackWrites = null,
        this.mounted = !1,
        this.markCursor = null,
        this.cursorWrapper = null,
        this.lastSelectedViewDesc = void 0,
        this.input = new xd,
        this.prevDirectPlugins = [],
        this.pluginViews = [],
        this.requiresGeckoHackNode = !1,
        this.dragging = null,
        this._props = t,
        this.state = t.state,
        this.directPlugins = t.plugins || [],
        this.directPlugins.forEach(Ws),
        this.dispatch = this.dispatch.bind(this),
        this.dom = e && e.mount || document.createElement("div"),
        e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)),
        this.editable = _s(this),
        Vs(this),
        this.nodeViews = js(this),
        this.docView = Ms(this.state.doc, $s(this), Br(this), this.dom, this),
        this.domObserver = new Kd(this,(r,i,s,o)=>Yd(this, r, i, s, o)),
        this.domObserver.start(),
        Md(this),
        this.updatePluginViews()
    }
    get composing() {
        return this.input.composing
    }
    get props() {
        if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e)
                this._props[t] = e[t];
            this._props.state = this.state
        }
        return this._props
    }
    update(e) {
        e.handleDOMEvents != this._props.handleDOMEvents && fi(this);
        let t = this._props;
        this._props = e,
        e.plugins && (e.plugins.forEach(Ws),
        this.directPlugins = e.plugins),
        this.updateStateInner(e.state, t)
    }
    setProps(e) {
        let t = {};
        for (let r in this._props)
            t[r] = this._props[r];
        t.state = this.state;
        for (let r in e)
            t[r] = e[r];
        this.update(t)
    }
    updateState(e) {
        this.updateStateInner(e, this._props)
    }
    updateStateInner(e, t) {
        let r = this.state
          , i = !1
          , s = !1;
        e.storedMarks && this.composing && (Ml(this),
        s = !0),
        this.state = e;
        let o = r.plugins != e.plugins || this._props.plugins != t.plugins;
        if (o || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            let f = js(this);
            rf(f, this.nodeViews) && (this.nodeViews = f,
            i = !0)
        }
        (o || t.handleDOMEvents != this._props.handleDOMEvents) && fi(this),
        this.editable = _s(this),
        Vs(this);
        let l = Br(this)
          , a = $s(this)
          , c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve"
          , u = i || !this.docView.matchesNode(e.doc, a, l);
        (u || !e.selection.eq(r.selection)) && (s = !0);
        let d = c == "preserve" && s && this.dom.style.overflowAnchor == null && Hu(this);
        if (s) {
            this.domObserver.stop();
            let f = u && (re || Q) && !this.composing && !r.selection.empty && !e.selection.empty && nf(r.selection, e.selection);
            if (u) {
                let h = Q ? this.trackWrites = this.domSelectionRange().focusNode : null;
                (i || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco([]),
                this.docView.destroy(),
                this.docView = Ms(e.doc, a, l, this.dom, this)),
                h && !this.trackWrites && (f = !0)
            }
            f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && ud(this)) ? Be(this, f) : (al(this, e.selection),
            this.domObserver.setCurSelection()),
            this.domObserver.start()
        }
        this.updatePluginViews(r),
        c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : d && $u(d)
    }
    scrollToSelection() {
        let e = this.domSelectionRange().focusNode;
        if (!this.someProp("handleScrollToSelection", t=>t(this)))
            if (this.state.selection instanceof E) {
                let t = this.docView.domAfterPos(this.state.selection.from);
                t.nodeType == 1 && gs(this, t.getBoundingClientRect(), e)
            } else
                gs(this, this.coordsAtPos(this.state.selection.head, 1), e)
    }
    destroyPluginViews() {
        let e;
        for (; e = this.pluginViews.pop(); )
            e.destroy && e.destroy()
    }
    updatePluginViews(e) {
        if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins,
            this.destroyPluginViews();
            for (let t = 0; t < this.directPlugins.length; t++) {
                let r = this.directPlugins[t];
                r.spec.view && this.pluginViews.push(r.spec.view(this))
            }
            for (let t = 0; t < this.state.plugins.length; t++) {
                let r = this.state.plugins[t];
                r.spec.view && this.pluginViews.push(r.spec.view(this))
            }
        } else
            for (let t = 0; t < this.pluginViews.length; t++) {
                let r = this.pluginViews[t];
                r.update && r.update(this, e)
            }
    }
    someProp(e, t) {
        let r = this._props && this._props[e], i;
        if (r != null && (i = t ? t(r) : r))
            return i;
        for (let o = 0; o < this.directPlugins.length; o++) {
            let l = this.directPlugins[o].props[e];
            if (l != null && (i = t ? t(l) : l))
                return i
        }
        let s = this.state.plugins;
        if (s)
            for (let o = 0; o < s.length; o++) {
                let l = s[o].props[e];
                if (l != null && (i = t ? t(l) : l))
                    return i
            }
    }
    hasFocus() {
        if (re) {
            let e = this.root.activeElement;
            if (e == this.dom)
                return !0;
            if (!e || !this.dom.contains(e))
                return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
                if (e.contentEditable == "false")
                    return !1;
                e = e.parentElement
            }
            return !0
        }
        return this.root.activeElement == this.dom
    }
    focus() {
        this.domObserver.stop(),
        this.editable && Vu(this.dom),
        Be(this),
        this.domObserver.start()
    }
    get root() {
        let e = this._root;
        if (e == null) {
            for (let t = this.dom.parentNode; t; t = t.parentNode)
                if (t.nodeType == 9 || t.nodeType == 11 && t.host)
                    return t.getSelection || (Object.getPrototypeOf(t).getSelection = ()=>t.ownerDocument.getSelection()),
                    this._root = t
        }
        return e || document
    }
    posAtCoords(e) {
        return Ju(this, e)
    }
    coordsAtPos(e, t=1) {
        return el(this, e, t)
    }
    domAtPos(e, t=0) {
        return this.docView.domFromPos(e, t)
    }
    nodeDOM(e) {
        let t = this.docView.descAt(e);
        return t ? t.nodeDOM : null
    }
    posAtDOM(e, t, r=-1) {
        let i = this.docView.posFromDOM(e, t, r);
        if (i == null)
            throw new RangeError("DOM position not inside the editor");
        return i
    }
    endOfTextblock(e, t) {
        return Yu(this, t || this.state, e)
    }
    pasteHTML(e, t) {
        return dn(this, "", e, !1, t || new ClipboardEvent("paste"))
    }
    pasteText(e, t) {
        return dn(this, e, null, !0, t || new ClipboardEvent("paste"))
    }
    destroy() {
        this.docView && (Cd(this),
        this.destroyPluginViews(),
        this.mounted ? (this.docView.update(this.state.doc, [], Br(this), this),
        this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
        this.docView.destroy(),
        this.docView = null)
    }
    get isDestroyed() {
        return this.docView == null
    }
    dispatchEvent(e) {
        return Td(this, e)
    }
    dispatch(e) {
        let t = this._props.dispatchTransaction;
        t ? t.call(this, e) : this.updateState(this.state.apply(e))
    }
    domSelectionRange() {
        return X && this.root.nodeType === 11 && Iu(this.dom.ownerDocument) == this.dom ? qd(this) : this.domSelection()
    }
    domSelection() {
        return this.root.getSelection()
    }
}
function $s(n) {
    let e = Object.create(null);
    return e.class = "ProseMirror",
    e.contenteditable = String(n.editable),
    n.someProp("attributes", t=>{
        if (typeof t == "function" && (t = t(n.state)),
        t)
            for (let r in t)
                r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]))
    }
    ),
    e.translate || (e.translate = "no"),
    [ye.node(0, n.state.doc.content.size, e)]
}
function Vs(n) {
    if (n.markCursor) {
        let e = document.createElement("img");
        e.className = "ProseMirror-separator",
        e.setAttribute("mark-placeholder", "true"),
        e.setAttribute("alt", ""),
        n.cursorWrapper = {
            dom: e,
            deco: ye.widget(n.state.selection.head, e, {
                raw: !0,
                marks: n.markCursor
            })
        }
    } else
        n.cursorWrapper = null
}
function _s(n) {
    return !n.someProp("editable", e=>e(n.state) === !1)
}
function nf(n, e) {
    let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
    return n.$anchor.start(t) != e.$anchor.start(t)
}
function js(n) {
    let e = Object.create(null);
    function t(r) {
        for (let i in r)
            Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i])
    }
    return n.someProp("nodeViews", t),
    n.someProp("markViews", t),
    e
}
function rf(n, e) {
    let t = 0
      , r = 0;
    for (let i in n) {
        if (n[i] != e[i])
            return !0;
        t++
    }
    for (let i in e)
        r++;
    return t != r
}
function Ws(n) {
    if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
        throw new RangeError("Plugins passed directly to the view must not have a state component")
}
var Xe = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
}
  , Wn = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
}
  , Ks = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent)
  , sf = typeof navigator < "u" && /Mac/.test(navigator.platform)
  , of = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)
  , lf = sf || Ks && +Ks[1] < 57;
for (var U = 0; U < 10; U++)
    Xe[48 + U] = Xe[96 + U] = String(U);
for (var U = 1; U <= 24; U++)
    Xe[U + 111] = "F" + U;
for (var U = 65; U <= 90; U++)
    Xe[U] = String.fromCharCode(U + 32),
    Wn[U] = String.fromCharCode(U);
for (var Fr in Xe)
    Wn.hasOwnProperty(Fr) || (Wn[Fr] = Xe[Fr]);
function af(n) {
    var e = lf && (n.ctrlKey || n.altKey || n.metaKey) || of && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified"
      , t = !e && n.key || (n.shiftKey ? Wn : Xe)[n.keyCode] || n.key || "Unidentified";
    return t == "Esc" && (t = "Escape"),
    t == "Del" && (t = "Delete"),
    t == "Left" && (t = "ArrowLeft"),
    t == "Up" && (t = "ArrowUp"),
    t == "Right" && (t = "ArrowRight"),
    t == "Down" && (t = "ArrowDown"),
    t
}
const cf = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function uf(n) {
    let e = n.split(/-(?!$)/)
      , t = e[e.length - 1];
    t == "Space" && (t = " ");
    let r, i, s, o;
    for (let l = 0; l < e.length - 1; l++) {
        let a = e[l];
        if (/^(cmd|meta|m)$/i.test(a))
            o = !0;
        else if (/^a(lt)?$/i.test(a))
            r = !0;
        else if (/^(c|ctrl|control)$/i.test(a))
            i = !0;
        else if (/^s(hift)?$/i.test(a))
            s = !0;
        else if (/^mod$/i.test(a))
            cf ? o = !0 : i = !0;
        else
            throw new Error("Unrecognized modifier name: " + a)
    }
    return r && (t = "Alt-" + t),
    i && (t = "Ctrl-" + t),
    o && (t = "Meta-" + t),
    s && (t = "Shift-" + t),
    t
}
function df(n) {
    let e = Object.create(null);
    for (let t in n)
        e[uf(t)] = n[t];
    return e
}
function Hr(n, e, t=!0) {
    return e.altKey && (n = "Alt-" + n),
    e.ctrlKey && (n = "Ctrl-" + n),
    e.metaKey && (n = "Meta-" + n),
    t && e.shiftKey && (n = "Shift-" + n),
    n
}
function ff(n) {
    return new ae({
        props: {
            handleKeyDown: hf(n)
        }
    })
}
function hf(n) {
    let e = df(n);
    return function(t, r) {
        let i = af(r), s, o = e[Hr(i, r)];
        if (o && o(t.state, t.dispatch, t))
            return !0;
        if (i.length == 1 && i != " ") {
            if (r.shiftKey) {
                let l = e[Hr(i, r, !1)];
                if (l && l(t.state, t.dispatch, t))
                    return !0
            }
            if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = Xe[r.keyCode]) && s != i) {
                let l = e[Hr(s, r)];
                if (l && l(t.state, t.dispatch, t))
                    return !0
            }
        }
        return !1
    }
}
const pf = (n,e)=>n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()),
!0);
function mf(n, e) {
    let {$cursor: t} = n.selection;
    return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t
}
const gf = (n,e,t)=>{
    let r = mf(n, t);
    if (!r)
        return !1;
    let i = El(r);
    if (!i) {
        let o = r.blockRange()
          , l = o && qt(o);
        return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()),
        !0)
    }
    let s = i.nodeBefore;
    if (!s.type.spec.isolating && Nl(n, i, e))
        return !0;
    if (r.parent.content.size == 0 && (Wt(s, "end") || E.isSelectable(s))) {
        let o = Oi(n.doc, r.before(), r.after(), S.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (e) {
                let l = n.tr.step(o);
                l.setSelection(Wt(s, "end") ? N.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : E.create(l.doc, i.pos - s.nodeSize)),
                e(l.scrollIntoView())
            }
            return !0
        }
    }
    return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()),
    !0) : !1
}
;
function Wt(n, e, t=!1) {
    for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
        if (r.isTextblock)
            return !0;
        if (t && r.childCount != 1)
            return !1
    }
    return !1
}
const yf = (n,e,t)=>{
    let {$head: r, empty: i} = n.selection
      , s = r;
    if (!i)
        return !1;
    if (r.parent.isTextblock) {
        if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
            return !1;
        s = El(r)
    }
    let o = s && s.nodeBefore;
    return !o || !E.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(E.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()),
    !0)
}
;
function El(n) {
    if (!n.parent.type.spec.isolating)
        for (let e = n.depth - 1; e >= 0; e--) {
            if (n.index(e) > 0)
                return n.doc.resolve(n.before(e + 1));
            if (n.node(e).type.spec.isolating)
                break
        }
    return null
}
function kf(n, e) {
    let {$cursor: t} = n.selection;
    return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t
}
const bf = (n,e,t)=>{
    let r = kf(n, t);
    if (!r)
        return !1;
    let i = vl(r);
    if (!i)
        return !1;
    let s = i.nodeAfter;
    if (Nl(n, i, e))
        return !0;
    if (r.parent.content.size == 0 && (Wt(s, "start") || E.isSelectable(s))) {
        let o = Oi(n.doc, r.before(), r.after(), S.empty);
        if (o && o.slice.size < o.to - o.from) {
            if (e) {
                let l = n.tr.step(o);
                l.setSelection(Wt(s, "start") ? N.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : E.create(l.doc, l.mapping.map(i.pos))),
                e(l.scrollIntoView())
            }
            return !0
        }
    }
    return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()),
    !0) : !1
}
  , Sf = (n,e,t)=>{
    let {$head: r, empty: i} = n.selection
      , s = r;
    if (!i)
        return !1;
    if (r.parent.isTextblock) {
        if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
            return !1;
        s = vl(r)
    }
    let o = s && s.nodeAfter;
    return !o || !E.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(E.create(n.doc, s.pos)).scrollIntoView()),
    !0)
}
;
function vl(n) {
    if (!n.parent.type.spec.isolating)
        for (let e = n.depth - 1; e >= 0; e--) {
            let t = n.node(e);
            if (n.index(e) + 1 < t.childCount)
                return n.doc.resolve(n.after(e + 1));
            if (t.type.spec.isolating)
                break
        }
    return null
}
const xf = (n,e)=>{
    let t = n.selection, r = t instanceof E, i;
    if (r) {
        if (t.node.isTextblock || !et(n.doc, t.from))
            return !1;
        i = t.from
    } else if (i = Vo(n.doc, t.from, -1),
    i == null)
        return !1;
    if (e) {
        let s = n.tr.join(i);
        r && s.setSelection(E.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)),
        e(s.scrollIntoView())
    }
    return !0
}
  , Mf = (n,e)=>{
    let t = n.selection, r;
    if (t instanceof E) {
        if (t.node.isTextblock || !et(n.doc, t.to))
            return !1;
        r = t.to
    } else if (r = Vo(n.doc, t.to, 1),
    r == null)
        return !1;
    return e && e(n.tr.join(r).scrollIntoView()),
    !0
}
  , Cf = (n,e)=>{
    let {$from: t, $to: r} = n.selection
      , i = t.blockRange(r)
      , s = i && qt(i);
    return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()),
    !0)
}
  , wf = (n,e)=>{
    let {$head: t, $anchor: r} = n.selection;
    return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()),
    !0)
}
;
function Al(n) {
    for (let e = 0; e < n.edgeCount; e++) {
        let {type: t} = n.edge(e);
        if (t.isTextblock && !t.hasRequiredAttrs())
            return t
    }
    return null
}
const Tf = (n,e)=>{
    let {$head: t, $anchor: r} = n.selection;
    if (!t.parent.type.spec.code || !t.sameParent(r))
        return !1;
    let i = t.node(-1)
      , s = t.indexAfter(-1)
      , o = Al(i.contentMatchAt(s));
    if (!o || !i.canReplaceWith(s, s, o))
        return !1;
    if (e) {
        let l = t.after()
          , a = n.tr.replaceWith(l, l, o.createAndFill());
        a.setSelection(N.near(a.doc.resolve(l), 1)),
        e(a.scrollIntoView())
    }
    return !0
}
  , Of = (n,e)=>{
    let t = n.selection
      , {$from: r, $to: i} = t;
    if (t instanceof ke || r.parent.inlineContent || i.parent.inlineContent)
        return !1;
    let s = Al(i.parent.contentMatchAt(i.indexAfter()));
    if (!s || !s.isTextblock)
        return !1;
    if (e) {
        let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos
          , l = n.tr.insert(o, s.createAndFill());
        l.setSelection(A.create(l.doc, o + 1)),
        e(l.scrollIntoView())
    }
    return !0
}
  , Ef = (n,e)=>{
    let {$cursor: t} = n.selection;
    if (!t || t.parent.content.size)
        return !1;
    if (t.depth > 1 && t.after() != t.end(-1)) {
        let s = t.before();
        if (Bt(n.doc, s))
            return e && e(n.tr.split(s).scrollIntoView()),
            !0
    }
    let r = t.blockRange()
      , i = r && qt(r);
    return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()),
    !0)
}
  , vf = (n,e)=>{
    let {$from: t, to: r} = n.selection, i, s = t.sharedDepth(r);
    return s == 0 ? !1 : (i = t.before(s),
    e && e(n.tr.setSelection(E.create(n.doc, i))),
    !0)
}
;
function Af(n, e, t) {
    let r = e.nodeBefore
      , i = e.nodeAfter
      , s = e.index();
    return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()),
    !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || et(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()),
    !0)
}
function Nl(n, e, t) {
    let r = e.nodeBefore, i = e.nodeAfter, s, o;
    if (r.type.spec.isolating || i.type.spec.isolating)
        return !1;
    if (Af(n, e, t))
        return !0;
    let l = e.parent.canReplace(e.index(), e.index() + 1);
    if (l && (s = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
        if (t) {
            let d = e.pos + i.nodeSize
              , f = k.empty;
            for (let m = s.length - 1; m >= 0; m--)
                f = k.from(s[m].create(null, f));
            f = k.from(r.copy(f));
            let h = n.tr.step(new W(e.pos - 1,d,e.pos,d,new S(f,1,0),s.length,!0))
              , p = d + 2 * s.length;
            et(h.doc, p) && h.join(p),
            t(h.scrollIntoView())
        }
        return !0
    }
    let a = N.findFrom(e, 1)
      , c = a && a.$from.blockRange(a.$to)
      , u = c && qt(c);
    if (u != null && u >= e.depth)
        return t && t(n.tr.lift(c, u).scrollIntoView()),
        !0;
    if (l && Wt(i, "start", !0) && Wt(r, "end")) {
        let d = r
          , f = [];
        for (; f.push(d),
        !d.isTextblock; )
            d = d.lastChild;
        let h = i
          , p = 1;
        for (; !h.isTextblock; h = h.firstChild)
            p++;
        if (d.canReplace(d.childCount, d.childCount, h.content)) {
            if (t) {
                let m = k.empty;
                for (let y = f.length - 1; y >= 0; y--)
                    m = k.from(f[y].copy(m));
                let g = n.tr.step(new W(e.pos - f.length,e.pos + i.nodeSize,e.pos + p,e.pos + i.nodeSize - p,new S(m,f.length,0),0,!0));
                t(g.scrollIntoView())
            }
            return !0
        }
    }
    return !1
}
function Dl(n) {
    return function(e, t) {
        let r = e.selection
          , i = n < 0 ? r.$from : r.$to
          , s = i.depth;
        for (; i.node(s).isInline; ) {
            if (!s)
                return !1;
            s--
        }
        return i.node(s).isTextblock ? (t && t(e.tr.setSelection(A.create(e.doc, n < 0 ? i.start(s) : i.end(s)))),
        !0) : !1
    }
}
const Nf = Dl(-1)
  , Df = Dl(1);
function If(n, e=null) {
    return function(t, r) {
        let {$from: i, $to: s} = t.selection
          , o = i.blockRange(s)
          , l = o && Ti(o, n, e);
        return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()),
        !0) : !1
    }
}
function Js(n, e=null) {
    return function(t, r) {
        let i = !1;
        for (let s = 0; s < t.selection.ranges.length && !i; s++) {
            let {$from: {pos: o}, $to: {pos: l}} = t.selection.ranges[s];
            t.doc.nodesBetween(o, l, (a,c)=>{
                if (i)
                    return !1;
                if (!(!a.isTextblock || a.hasMarkup(n, e)))
                    if (a.type == n)
                        i = !0;
                    else {
                        let u = t.doc.resolve(c)
                          , d = u.index();
                        i = u.parent.canReplaceWith(d, d + 1, n)
                    }
            }
            )
        }
        if (!i)
            return !1;
        if (r) {
            let s = t.tr;
            for (let o = 0; o < t.selection.ranges.length; o++) {
                let {$from: {pos: l}, $to: {pos: a}} = t.selection.ranges[o];
                s.setBlockType(l, a, n, e)
            }
            r(s.scrollIntoView())
        }
        return !0
    }
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Rf(n, e=null) {
    return function(t, r) {
        let {$from: i, $to: s} = t.selection
          , o = i.blockRange(s)
          , l = !1
          , a = o;
        if (!o)
            return !1;
        if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(n) && o.startIndex == 0) {
            if (i.index(o.depth - 1) == 0)
                return !1;
            let u = t.doc.resolve(o.start - 2);
            a = new zn(u,u,o.depth),
            o.endIndex < o.parent.childCount && (o = new zn(i,t.doc.resolve(s.end(o.depth)),o.depth)),
            l = !0
        }
        let c = Ti(a, n, e, o);
        return c ? (r && r(Pf(t.tr, o, c, l, n).scrollIntoView()),
        !0) : !1
    }
}
function Pf(n, e, t, r, i) {
    let s = k.empty;
    for (let u = t.length - 1; u >= 0; u--)
        s = k.from(t[u].type.create(t[u].attrs, s));
    n.step(new W(e.start - (r ? 2 : 0),e.end,e.start,e.end,new S(s,0,0),t.length,!0));
    let o = 0;
    for (let u = 0; u < t.length; u++)
        t[u].type == i && (o = u + 1);
    let l = t.length - o
      , a = e.start + t.length - (r ? 2 : 0)
      , c = e.parent;
    for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++,
    f = !1)
        !f && Bt(n.doc, a, l) && (n.split(a, l),
        a += 2 * l),
        a += c.child(u).nodeSize;
    return n
}
function Lf(n) {
    return function(e, t) {
        let {$from: r, $to: i} = e.selection
          , s = r.blockRange(i, o=>o.childCount > 0 && o.firstChild.type == n);
        return s ? t ? r.node(s.depth - 1).type == n ? Bf(e, t, n, s) : zf(e, t, s) : !0 : !1
    }
}
function Bf(n, e, t, r) {
    let i = n.tr
      , s = r.end
      , o = r.$to.end(r.depth);
    s < o && (i.step(new W(s - 1,o,s,o,new S(k.from(t.create(null, r.parent.copy())),1,0),1,!0)),
    r = new zn(i.doc.resolve(r.$from.pos),i.doc.resolve(o),r.depth));
    const l = qt(r);
    if (l == null)
        return !1;
    i.lift(r, l);
    let a = i.mapping.map(s, -1) - 1;
    return et(i.doc, a) && i.join(a),
    e(i.scrollIntoView()),
    !0
}
function zf(n, e, t) {
    let r = n.tr
      , i = t.parent;
    for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
        h -= i.child(p).nodeSize,
        r.delete(h - 1, h + 1);
    let s = r.doc.resolve(t.start)
      , o = s.nodeAfter;
    if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
        return !1;
    let l = t.startIndex == 0
      , a = t.endIndex == i.childCount
      , c = s.node(-1)
      , u = s.index(-1);
    if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? k.empty : k.from(i))))
        return !1;
    let d = s.pos
      , f = d + o.nodeSize;
    return r.step(new W(d - (l ? 1 : 0),f + (a ? 1 : 0),d + 1,f - 1,new S((l ? k.empty : k.from(i.copy(k.empty))).append(a ? k.empty : k.from(i.copy(k.empty))),l ? 0 : 1,a ? 0 : 1),l ? 0 : 1)),
    e(r.scrollIntoView()),
    !0
}
function Ff(n) {
    return function(e, t) {
        let {$from: r, $to: i} = e.selection
          , s = r.blockRange(i, c=>c.childCount > 0 && c.firstChild.type == n);
        if (!s)
            return !1;
        let o = s.startIndex;
        if (o == 0)
            return !1;
        let l = s.parent
          , a = l.child(o - 1);
        if (a.type != n)
            return !1;
        if (t) {
            let c = a.lastChild && a.lastChild.type == l.type
              , u = k.from(c ? n.create() : null)
              , d = new S(k.from(n.create(null, k.from(l.type.create(null, u)))),c ? 3 : 1,0)
              , f = s.start
              , h = s.end;
            t(e.tr.step(new W(f - (c ? 3 : 1),h,f,h,d,1,!0)).scrollIntoView())
        }
        return !0
    }
}
function gr(n) {
    const {state: e, transaction: t} = n;
    let {selection: r} = t
      , {doc: i} = t
      , {storedMarks: s} = t;
    return {
        ...e,
        apply: e.apply.bind(e),
        applyTransaction: e.applyTransaction.bind(e),
        filterTransaction: e.filterTransaction,
        plugins: e.plugins,
        schema: e.schema,
        reconfigure: e.reconfigure.bind(e),
        toJSON: e.toJSON.bind(e),
        get storedMarks() {
            return s
        },
        get selection() {
            return r
        },
        get doc() {
            return i
        },
        get tr() {
            return r = t.selection,
            i = t.doc,
            s = t.storedMarks,
            t
        }
    }
}
class yr {
    constructor(e) {
        this.editor = e.editor,
        this.rawCommands = this.editor.extensionManager.commands,
        this.customState = e.state
    }
    get hasCustomState() {
        return !!this.customState
    }
    get state() {
        return this.customState || this.editor.state
    }
    get commands() {
        const {rawCommands: e, editor: t, state: r} = this
          , {view: i} = t
          , {tr: s} = r
          , o = this.buildProps(s);
        return Object.fromEntries(Object.entries(e).map(([l,a])=>[l, (...u)=>{
            const d = a(...u)(o);
            return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s),
            d
        }
        ]))
    }
    get chain() {
        return ()=>this.createChain()
    }
    get can() {
        return ()=>this.createCan()
    }
    createChain(e, t=!0) {
        const {rawCommands: r, editor: i, state: s} = this
          , {view: o} = i
          , l = []
          , a = !!e
          , c = e || s.tr
          , u = ()=>(!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c),
        l.every(f=>f === !0))
          , d = {
            ...Object.fromEntries(Object.entries(r).map(([f,h])=>[f, (...m)=>{
                const g = this.buildProps(c, t)
                  , y = h(...m)(g);
                return l.push(y),
                d
            }
            ])),
            run: u
        };
        return d
    }
    createCan(e) {
        const {rawCommands: t, state: r} = this
          , i = !1
          , s = e || r.tr
          , o = this.buildProps(s, i);
        return {
            ...Object.fromEntries(Object.entries(t).map(([a,c])=>[a, (...u)=>c(...u)({
                ...o,
                dispatch: void 0
            })])),
            chain: ()=>this.createChain(s, i)
        }
    }
    buildProps(e, t=!0) {
        const {rawCommands: r, editor: i, state: s} = this
          , {view: o} = i;
        s.storedMarks && e.setStoredMarks(s.storedMarks);
        const l = {
            tr: e,
            editor: i,
            view: o,
            state: gr({
                state: s,
                transaction: e
            }),
            dispatch: t ? ()=>{}
            : void 0,
            chain: ()=>this.createChain(e),
            can: ()=>this.createCan(e),
            get commands() {
                return Object.fromEntries(Object.entries(r).map(([a,c])=>[a, (...u)=>c(...u)(l)]))
            }
        };
        return l
    }
}
class Hf {
    constructor() {
        this.callbacks = {}
    }
    on(e, t) {
        return this.callbacks[e] || (this.callbacks[e] = []),
        this.callbacks[e].push(t),
        this
    }
    emit(e, ...t) {
        const r = this.callbacks[e];
        return r && r.forEach(i=>i.apply(this, t)),
        this
    }
    off(e, t) {
        const r = this.callbacks[e];
        return r && (t ? this.callbacks[e] = r.filter(i=>i !== t) : delete this.callbacks[e]),
        this
    }
    removeAllListeners() {
        this.callbacks = {}
    }
}
function M(n, e, t) {
    return n.config[e] === void 0 && n.parent ? M(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
        ...t,
        parent: n.parent ? M(n.parent, e, t) : null
    }) : n.config[e]
}
function kr(n) {
    const e = n.filter(i=>i.type === "extension")
      , t = n.filter(i=>i.type === "node")
      , r = n.filter(i=>i.type === "mark");
    return {
        baseExtensions: e,
        nodeExtensions: t,
        markExtensions: r
    }
}
function Il(n) {
    const e = []
      , {nodeExtensions: t, markExtensions: r} = kr(n)
      , i = [...t, ...r]
      , s = {
        default: null,
        rendered: !0,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: !0,
        isRequired: !1
    };
    return n.forEach(o=>{
        const l = {
            name: o.name,
            options: o.options,
            storage: o.storage
        }
          , a = M(o, "addGlobalAttributes", l);
        if (!a)
            return;
        a().forEach(u=>{
            u.types.forEach(d=>{
                Object.entries(u.attributes).forEach(([f,h])=>{
                    e.push({
                        type: d,
                        name: f,
                        attribute: {
                            ...s,
                            ...h
                        }
                    })
                }
                )
            }
            )
        }
        )
    }
    ),
    i.forEach(o=>{
        const l = {
            name: o.name,
            options: o.options,
            storage: o.storage
        }
          , a = M(o, "addAttributes", l);
        if (!a)
            return;
        const c = a();
        Object.entries(c).forEach(([u,d])=>{
            const f = {
                ...s,
                ...d
            };
            typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()),
            f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default,
            e.push({
                type: o.name,
                name: u,
                attribute: f
            })
        }
        )
    }
    ),
    e
}
function J(n, e) {
    if (typeof n == "string") {
        if (!e.nodes[n])
            throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
        return e.nodes[n]
    }
    return n
}
function H(...n) {
    return n.filter(e=>!!e).reduce((e,t)=>{
        const r = {
            ...e
        };
        return Object.entries(t).forEach(([i,s])=>{
            if (!r[i]) {
                r[i] = s;
                return
            }
            i === "class" ? r[i] = [r[i], s].join(" ") : i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s
        }
        ),
        r
    }
    , {})
}
function hi(n, e) {
    return e.filter(t=>t.attribute.rendered).map(t=>t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
        [t.name]: n.attrs[t.name]
    }).reduce((t,r)=>H(t, r), {})
}
function Rl(n) {
    return typeof n == "function"
}
function v(n, e=void 0, ...t) {
    return Rl(n) ? e ? n.bind(e)(...t) : n(...t) : n
}
function $f(n={}) {
    return Object.keys(n).length === 0 && n.constructor === Object
}
function Vf(n) {
    return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n
}
function qs(n, e) {
    return n.style ? n : {
        ...n,
        getAttrs: t=>{
            const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
            if (r === !1)
                return !1;
            const i = e.reduce((s,o)=>{
                const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Vf(t.getAttribute(o.name));
                return l == null ? s : {
                    ...s,
                    [o.name]: l
                }
            }
            , {});
            return {
                ...r,
                ...i
            }
        }
    }
}
function Us(n) {
    return Object.fromEntries(Object.entries(n).filter(([e,t])=>e === "attrs" && $f(t) ? !1 : t != null))
}
function _f(n, e) {
    var t;
    const r = Il(n)
      , {nodeExtensions: i, markExtensions: s} = kr(n)
      , o = (t = i.find(c=>M(c, "topNode"))) === null || t === void 0 ? void 0 : t.name
      , l = Object.fromEntries(i.map(c=>{
        const u = r.filter(y=>y.type === c.name)
          , d = {
            name: c.name,
            options: c.options,
            storage: c.storage,
            editor: e
        }
          , f = n.reduce((y,x)=>{
            const w = M(x, "extendNodeSchema", d);
            return {
                ...y,
                ...w ? w(c) : {}
            }
        }
        , {})
          , h = Us({
            ...f,
            content: v(M(c, "content", d)),
            marks: v(M(c, "marks", d)),
            group: v(M(c, "group", d)),
            inline: v(M(c, "inline", d)),
            atom: v(M(c, "atom", d)),
            selectable: v(M(c, "selectable", d)),
            draggable: v(M(c, "draggable", d)),
            code: v(M(c, "code", d)),
            defining: v(M(c, "defining", d)),
            isolating: v(M(c, "isolating", d)),
            attrs: Object.fromEntries(u.map(y=>{
                var x;
                return [y.name, {
                    default: (x = y == null ? void 0 : y.attribute) === null || x === void 0 ? void 0 : x.default
                }]
            }
            ))
        })
          , p = v(M(c, "parseHTML", d));
        p && (h.parseDOM = p.map(y=>qs(y, u)));
        const m = M(c, "renderHTML", d);
        m && (h.toDOM = y=>m({
            node: y,
            HTMLAttributes: hi(y, u)
        }));
        const g = M(c, "renderText", d);
        return g && (h.toText = g),
        [c.name, h]
    }
    ))
      , a = Object.fromEntries(s.map(c=>{
        const u = r.filter(g=>g.type === c.name)
          , d = {
            name: c.name,
            options: c.options,
            storage: c.storage,
            editor: e
        }
          , f = n.reduce((g,y)=>{
            const x = M(y, "extendMarkSchema", d);
            return {
                ...g,
                ...x ? x(c) : {}
            }
        }
        , {})
          , h = Us({
            ...f,
            inclusive: v(M(c, "inclusive", d)),
            excludes: v(M(c, "excludes", d)),
            group: v(M(c, "group", d)),
            spanning: v(M(c, "spanning", d)),
            code: v(M(c, "code", d)),
            attrs: Object.fromEntries(u.map(g=>{
                var y;
                return [g.name, {
                    default: (y = g == null ? void 0 : g.attribute) === null || y === void 0 ? void 0 : y.default
                }]
            }
            ))
        })
          , p = v(M(c, "parseHTML", d));
        p && (h.parseDOM = p.map(g=>qs(g, u)));
        const m = M(c, "renderHTML", d);
        return m && (h.toDOM = g=>m({
            mark: g,
            HTMLAttributes: hi(g, u)
        })),
        [c.name, h]
    }
    ));
    return new Gc({
        topNode: o,
        nodes: l,
        marks: a
    })
}
function $r(n, e) {
    return e.nodes[n] || e.marks[n] || null
}
function Gs(n, e) {
    return Array.isArray(e) ? e.some(t=>(typeof t == "string" ? t : t.name) === n.name) : e
}
const jf = (n,e=500)=>{
    let t = "";
    const r = n.parentOffset;
    return n.parent.nodesBetween(Math.max(0, r - e), r, (i,s,o,l)=>{
        var a, c;
        const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
            node: i,
            pos: s,
            parent: o,
            index: l
        })) || i.textContent || "%leaf%";
        t += u.slice(0, Math.max(0, r - s))
    }
    ),
    t
}
;
function zi(n) {
    return Object.prototype.toString.call(n) === "[object RegExp]"
}
class br {
    constructor(e) {
        this.find = e.find,
        this.handler = e.handler
    }
}
const Wf = (n,e)=>{
    if (zi(e))
        return e.exec(n);
    const t = e(n);
    if (!t)
        return null;
    const r = [t.text];
    return r.index = t.index,
    r.input = n,
    r.data = t.data,
    t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'),
    r.push(t.replaceWith)),
    r
}
;
function Vr(n) {
    var e;
    const {editor: t, from: r, to: i, text: s, rules: o, plugin: l} = n
      , {view: a} = t;
    if (a.composing)
        return !1;
    const c = a.state.doc.resolve(r);
    if (c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find(f=>f.type.spec.code))
        return !1;
    let u = !1;
    const d = jf(c) + s;
    return o.forEach(f=>{
        if (u)
            return;
        const h = Wf(d, f.find);
        if (!h)
            return;
        const p = a.state.tr
          , m = gr({
            state: a.state,
            transaction: p
        })
          , g = {
            from: r - (h[0].length - s.length),
            to: i
        }
          , {commands: y, chain: x, can: w} = new yr({
            editor: t,
            state: m
        });
        f.handler({
            state: m,
            range: g,
            match: h,
            commands: y,
            chain: x,
            can: w
        }) === null || !p.steps.length || (p.setMeta(l, {
            transform: p,
            from: r,
            to: i,
            text: s
        }),
        a.dispatch(p),
        u = !0)
    }
    ),
    u
}
function Kf(n) {
    const {editor: e, rules: t} = n
      , r = new ae({
        state: {
            init() {
                return null
            },
            apply(i, s) {
                const o = i.getMeta(r);
                return o || (i.selectionSet || i.docChanged ? null : s)
            }
        },
        props: {
            handleTextInput(i, s, o, l) {
                return Vr({
                    editor: e,
                    from: s,
                    to: o,
                    text: l,
                    rules: t,
                    plugin: r
                })
            },
            handleDOMEvents: {
                compositionend: i=>(setTimeout(()=>{
                    const {$cursor: s} = i.state.selection;
                    s && Vr({
                        editor: e,
                        from: s.pos,
                        to: s.pos,
                        text: "",
                        rules: t,
                        plugin: r
                    })
                }
                ),
                !1)
            },
            handleKeyDown(i, s) {
                if (s.key !== "Enter")
                    return !1;
                const {$cursor: o} = i.state.selection;
                return o ? Vr({
                    editor: e,
                    from: o.pos,
                    to: o.pos,
                    text: `
`,
                    rules: t,
                    plugin: r
                }) : !1
            }
        },
        isInputRules: !0
    });
    return r
}
function Jf(n) {
    return typeof n == "number"
}
class qf {
    constructor(e) {
        this.find = e.find,
        this.handler = e.handler
    }
}
const Uf = (n,e)=>{
    if (zi(e))
        return [...n.matchAll(e)];
    const t = e(n);
    return t ? t.map(r=>{
        const i = [r.text];
        return i.index = r.index,
        i.input = n,
        i.data = r.data,
        r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'),
        i.push(r.replaceWith)),
        i
    }
    ) : []
}
;
function Gf(n) {
    const {editor: e, state: t, from: r, to: i, rule: s} = n
      , {commands: o, chain: l, can: a} = new yr({
        editor: e,
        state: t
    })
      , c = [];
    return t.doc.nodesBetween(r, i, (d,f)=>{
        if (!d.isTextblock || d.type.spec.code)
            return;
        const h = Math.max(r, f)
          , p = Math.min(i, f + d.content.size)
          , m = d.textBetween(h - f, p - f, void 0, "￼");
        Uf(m, s.find).forEach(y=>{
            if (y.index === void 0)
                return;
            const x = h + y.index + 1
              , w = x + y[0].length
              , B = {
                from: t.tr.mapping.map(x),
                to: t.tr.mapping.map(w)
            }
              , D = s.handler({
                state: t,
                range: B,
                match: y,
                commands: o,
                chain: l,
                can: a
            });
            c.push(D)
        }
        )
    }
    ),
    c.every(d=>d !== null)
}
function Zf(n) {
    const {editor: e, rules: t} = n;
    let r = null
      , i = !1
      , s = !1;
    return t.map(l=>new ae({
        view(a) {
            const c = u=>{
                var d;
                r = !((d = a.dom.parentElement) === null || d === void 0) && d.contains(u.target) ? a.dom.parentElement : null
            }
            ;
            return window.addEventListener("dragstart", c),
            {
                destroy() {
                    window.removeEventListener("dragstart", c)
                }
            }
        },
        props: {
            handleDOMEvents: {
                drop: a=>(s = r === a.dom.parentElement,
                !1),
                paste: (a,c)=>{
                    var u;
                    const d = (u = c.clipboardData) === null || u === void 0 ? void 0 : u.getData("text/html");
                    return i = !!(d != null && d.includes("data-pm-slice")),
                    !1
                }
            }
        },
        appendTransaction: (a,c,u)=>{
            const d = a[0]
              , f = d.getMeta("uiEvent") === "paste" && !i
              , h = d.getMeta("uiEvent") === "drop" && !s;
            if (!f && !h)
                return;
            const p = c.doc.content.findDiffStart(u.doc.content)
              , m = c.doc.content.findDiffEnd(u.doc.content);
            if (!Jf(p) || !m || p === m.b)
                return;
            const g = u.tr
              , y = gr({
                state: u,
                transaction: g
            });
            if (!(!Gf({
                editor: e,
                state: y,
                from: Math.max(p - 1, 0),
                to: m.b - 1,
                rule: l
            }) || !g.steps.length))
                return g
        }
    }))
}
function Yf(n) {
    const e = n.filter((t,r)=>n.indexOf(t) !== r);
    return [...new Set(e)]
}
class Dt {
    constructor(e, t) {
        this.splittableMarks = [],
        this.editor = t,
        this.extensions = Dt.resolve(e),
        this.schema = _f(this.extensions, t),
        this.extensions.forEach(r=>{
            var i;
            this.editor.extensionStorage[r.name] = r.storage;
            const s = {
                name: r.name,
                options: r.options,
                storage: r.storage,
                editor: this.editor,
                type: $r(r.name, this.schema)
            };
            r.type === "mark" && (!((i = v(M(r, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
            const o = M(r, "onBeforeCreate", s);
            o && this.editor.on("beforeCreate", o);
            const l = M(r, "onCreate", s);
            l && this.editor.on("create", l);
            const a = M(r, "onUpdate", s);
            a && this.editor.on("update", a);
            const c = M(r, "onSelectionUpdate", s);
            c && this.editor.on("selectionUpdate", c);
            const u = M(r, "onTransaction", s);
            u && this.editor.on("transaction", u);
            const d = M(r, "onFocus", s);
            d && this.editor.on("focus", d);
            const f = M(r, "onBlur", s);
            f && this.editor.on("blur", f);
            const h = M(r, "onDestroy", s);
            h && this.editor.on("destroy", h)
        }
        )
    }
    static resolve(e) {
        const t = Dt.sort(Dt.flatten(e))
          , r = Yf(t.map(i=>i.name));
        return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map(i=>`'${i}'`).join(", ")}]. This can lead to issues.`),
        t
    }
    static flatten(e) {
        return e.map(t=>{
            const r = {
                name: t.name,
                options: t.options,
                storage: t.storage
            }
              , i = M(t, "addExtensions", r);
            return i ? [t, ...this.flatten(i())] : t
        }
        ).flat(10)
    }
    static sort(e) {
        return e.sort((r,i)=>{
            const s = M(r, "priority") || 100
              , o = M(i, "priority") || 100;
            return s > o ? -1 : s < o ? 1 : 0
        }
        )
    }
    get commands() {
        return this.extensions.reduce((e,t)=>{
            const r = {
                name: t.name,
                options: t.options,
                storage: t.storage,
                editor: this.editor,
                type: $r(t.name, this.schema)
            }
              , i = M(t, "addCommands", r);
            return i ? {
                ...e,
                ...i()
            } : e
        }
        , {})
    }
    get plugins() {
        const {editor: e} = this
          , t = Dt.sort([...this.extensions].reverse())
          , r = []
          , i = []
          , s = t.map(o=>{
            const l = {
                name: o.name,
                options: o.options,
                storage: o.storage,
                editor: e,
                type: $r(o.name, this.schema)
            }
              , a = []
              , c = M(o, "addKeyboardShortcuts", l);
            let u = {};
            if (o.type === "mark" && o.config.exitable && (u.ArrowRight = ()=>pe.handleExit({
                editor: e,
                mark: o
            })),
            c) {
                const m = Object.fromEntries(Object.entries(c()).map(([g,y])=>[g, ()=>y({
                    editor: e
                })]));
                u = {
                    ...u,
                    ...m
                }
            }
            const d = ff(u);
            a.push(d);
            const f = M(o, "addInputRules", l);
            Gs(o, e.options.enableInputRules) && f && r.push(...f());
            const h = M(o, "addPasteRules", l);
            Gs(o, e.options.enablePasteRules) && h && i.push(...h());
            const p = M(o, "addProseMirrorPlugins", l);
            if (p) {
                const m = p();
                a.push(...m)
            }
            return a
        }
        ).flat();
        return [Kf({
            editor: e,
            rules: r
        }), ...Zf({
            editor: e,
            rules: i
        }), ...s]
    }
    get attributes() {
        return Il(this.extensions)
    }
    get nodeViews() {
        const {editor: e} = this
          , {nodeExtensions: t} = kr(this.extensions);
        return Object.fromEntries(t.filter(r=>!!M(r, "addNodeView")).map(r=>{
            const i = this.attributes.filter(a=>a.type === r.name)
              , s = {
                name: r.name,
                options: r.options,
                storage: r.storage,
                editor: e,
                type: J(r.name, this.schema)
            }
              , o = M(r, "addNodeView", s);
            if (!o)
                return [];
            const l = (a,c,u,d)=>{
                const f = hi(a, i);
                return o()({
                    editor: e,
                    node: a,
                    getPos: u,
                    decorations: d,
                    HTMLAttributes: f,
                    extension: r
                })
            }
            ;
            return [r.name, l]
        }
        ))
    }
}
function Qf(n) {
    return Object.prototype.toString.call(n).slice(8, -1)
}
function _r(n) {
    return Qf(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype
}
function Sr(n, e) {
    const t = {
        ...n
    };
    return _r(n) && _r(e) && Object.keys(e).forEach(r=>{
        _r(e[r]) ? r in n ? t[r] = Sr(n[r], e[r]) : Object.assign(t, {
            [r]: e[r]
        }) : Object.assign(t, {
            [r]: e[r]
        })
    }
    ),
    t
}
class Se {
    constructor(e={}) {
        this.type = "extension",
        this.name = "extension",
        this.parent = null,
        this.child = null,
        this.config = {
            name: this.name,
            defaultOptions: {}
        },
        this.config = {
            ...this.config,
            ...e
        },
        this.name = this.config.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`),
        this.options = this.config.defaultOptions,
        this.config.addOptions && (this.options = v(M(this, "addOptions", {
            name: this.name
        }))),
        this.storage = v(M(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {}
    }
    static create(e={}) {
        return new Se(e)
    }
    configure(e={}) {
        const t = this.extend();
        return t.options = Sr(this.options, e),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
    extend(e={}) {
        const t = new Se(e);
        return t.parent = this,
        this.child = t,
        t.name = e.name ? e.name : t.parent.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`),
        t.options = v(M(t, "addOptions", {
            name: t.name
        })),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
}
function Pl(n, e, t) {
    const {from: r, to: i} = e
      , {blockSeparator: s=`

`, textSerializers: o={}} = t || {};
    let l = ""
      , a = !0;
    return n.nodesBetween(r, i, (c,u,d,f)=>{
        var h;
        const p = o == null ? void 0 : o[c.type.name];
        p ? (c.isBlock && !a && (l += s,
        a = !0),
        d && (l += p({
            node: c,
            pos: u,
            parent: d,
            index: f,
            range: e
        }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(r, u) - u, i - u),
        a = !1) : c.isBlock && !a && (l += s,
        a = !0)
    }
    ),
    l
}
function Ll(n) {
    return Object.fromEntries(Object.entries(n.nodes).filter(([,e])=>e.spec.toText).map(([e,t])=>[e, t.spec.toText]))
}
const Xf = Se.create({
    name: "clipboardTextSerializer",
    addProseMirrorPlugins() {
        return [new ae({
            key: new xe("clipboardTextSerializer"),
            props: {
                clipboardTextSerializer: ()=>{
                    const {editor: n} = this
                      , {state: e, schema: t} = n
                      , {doc: r, selection: i} = e
                      , {ranges: s} = i
                      , o = Math.min(...s.map(u=>u.$from.pos))
                      , l = Math.max(...s.map(u=>u.$to.pos))
                      , a = Ll(t);
                    return Pl(r, {
                        from: o,
                        to: l
                    }, {
                        textSerializers: a
                    })
                }
            }
        })]
    }
})
  , eh = ()=>({editor: n, view: e})=>(requestAnimationFrame(()=>{
    var t;
    n.isDestroyed || (e.dom.blur(),
    (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges())
}
),
!0)
  , th = (n=!1)=>({commands: e})=>e.setContent("", n)
  , nh = ()=>({state: n, tr: e, dispatch: t})=>{
    const {selection: r} = e
      , {ranges: i} = r;
    return t && i.forEach(({$from: s, $to: o})=>{
        n.doc.nodesBetween(s.pos, o.pos, (l,a)=>{
            if (l.type.isText)
                return;
            const {doc: c, mapping: u} = e
              , d = c.resolve(u.map(a))
              , f = c.resolve(u.map(a + l.nodeSize))
              , h = d.blockRange(f);
            if (!h)
                return;
            const p = qt(h);
            if (l.type.isTextblock) {
                const {defaultType: m} = d.parent.contentMatchAt(d.index());
                e.setNodeMarkup(h.start, m)
            }
            (p || p === 0) && e.lift(h, p)
        }
        )
    }
    ),
    !0
}
  , rh = n=>e=>n(e)
  , ih = ()=>({state: n, dispatch: e})=>Of(n, e)
  , sh = ()=>({tr: n, dispatch: e})=>{
    const {selection: t} = n
      , r = t.$anchor.node();
    if (r.content.size > 0)
        return !1;
    const i = n.selection.$anchor;
    for (let s = i.depth; s > 0; s -= 1)
        if (i.node(s).type === r.type) {
            if (e) {
                const l = i.before(s)
                  , a = i.after(s);
                n.delete(l, a).scrollIntoView()
            }
            return !0
        }
    return !1
}
  , oh = n=>({tr: e, state: t, dispatch: r})=>{
    const i = J(n, t.schema)
      , s = e.selection.$anchor;
    for (let o = s.depth; o > 0; o -= 1)
        if (s.node(o).type === i) {
            if (r) {
                const a = s.before(o)
                  , c = s.after(o);
                e.delete(a, c).scrollIntoView()
            }
            return !0
        }
    return !1
}
  , lh = n=>({tr: e, dispatch: t})=>{
    const {from: r, to: i} = n;
    return t && e.delete(r, i),
    !0
}
  , ah = ()=>({state: n, dispatch: e})=>pf(n, e)
  , ch = ()=>({commands: n})=>n.keyboardShortcut("Enter")
  , uh = ()=>({state: n, dispatch: e})=>Tf(n, e);
function Kn(n, e, t={
    strict: !0
}) {
    const r = Object.keys(e);
    return r.length ? r.every(i=>t.strict ? e[i] === n[i] : zi(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0
}
function pi(n, e, t={}) {
    return n.find(r=>r.type === e && Kn(r.attrs, t))
}
function dh(n, e, t={}) {
    return !!pi(n, e, t)
}
function Fi(n, e, t={}) {
    if (!n || !e)
        return;
    let r = n.parent.childAfter(n.parentOffset);
    if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)),
    !r.node)
        return;
    const i = pi([...r.node.marks], e, t);
    if (!i)
        return;
    let s = r.index
      , o = n.start() + r.offset
      , l = s + 1
      , a = o + r.node.nodeSize;
    for (pi([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
        s -= 1,
        o -= n.parent.child(s).nodeSize;
    for (; l < n.parent.childCount && dh([...n.parent.child(l).marks], e, t); )
        a += n.parent.child(l).nodeSize,
        l += 1;
    return {
        from: o,
        to: a
    }
}
function nt(n, e) {
    if (typeof n == "string") {
        if (!e.marks[n])
            throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
        return e.marks[n]
    }
    return n
}
const fh = (n,e={})=>({tr: t, state: r, dispatch: i})=>{
    const s = nt(n, r.schema)
      , {doc: o, selection: l} = t
      , {$from: a, from: c, to: u} = l;
    if (i) {
        const d = Fi(a, s, e);
        if (d && d.from <= c && d.to >= u) {
            const f = A.create(o, d.from, d.to);
            t.setSelection(f)
        }
    }
    return !0
}
  , hh = n=>e=>{
    const t = typeof n == "function" ? n(e) : n;
    for (let r = 0; r < t.length; r += 1)
        if (t[r](e))
            return !0;
    return !1
}
;
function Bl(n) {
    return n instanceof A
}
function mt(n=0, e=0, t=0) {
    return Math.min(Math.max(n, e), t)
}
function zl(n, e=null) {
    if (!e)
        return null;
    const t = N.atStart(n)
      , r = N.atEnd(n);
    if (e === "start" || e === !0)
        return t;
    if (e === "end")
        return r;
    const i = t.from
      , s = r.to;
    return e === "all" ? A.create(n, mt(0, i, s), mt(n.content.size, i, s)) : A.create(n, mt(e, i, s), mt(e, i, s))
}
function Hi() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
}
const ph = (n=null,e={})=>({editor: t, view: r, tr: i, dispatch: s})=>{
    e = {
        scrollIntoView: !0,
        ...e
    };
    const o = ()=>{
        Hi() && r.dom.focus(),
        requestAnimationFrame(()=>{
            t.isDestroyed || (r.focus(),
            e != null && e.scrollIntoView && t.commands.scrollIntoView())
        }
        )
    }
    ;
    if (r.hasFocus() && n === null || n === !1)
        return !0;
    if (s && n === null && !Bl(t.state.selection))
        return o(),
        !0;
    const l = zl(i.doc, n) || t.state.selection
      , a = t.state.selection.eq(l);
    return s && (a || i.setSelection(l),
    a && i.storedMarks && i.setStoredMarks(i.storedMarks),
    o()),
    !0
}
  , mh = (n,e)=>t=>n.every((r,i)=>e(r, {
    ...t,
    index: i
}))
  , gh = (n,e)=>({tr: t, commands: r})=>r.insertContentAt({
    from: t.selection.from,
    to: t.selection.to
}, n, e);
function Zs(n) {
    const e = `<body>${n}</body>`;
    return new window.DOMParser().parseFromString(e, "text/html").body
}
function Jn(n, e, t) {
    if (t = {
        slice: !0,
        parseOptions: {},
        ...t
    },
    typeof n == "object" && n !== null)
        try {
            return Array.isArray(n) && n.length > 0 ? k.fromArray(n.map(r=>e.nodeFromJSON(r))) : e.nodeFromJSON(n)
        } catch (r) {
            return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r),
            Jn("", e, t)
        }
    if (typeof n == "string") {
        const r = Ht.fromSchema(e);
        return t.slice ? r.parseSlice(Zs(n), t.parseOptions).content : r.parse(Zs(n), t.parseOptions)
    }
    return Jn("", e, t)
}
function yh(n, e, t) {
    const r = n.steps.length - 1;
    if (r < e)
        return;
    const i = n.steps[r];
    if (!(i instanceof Y || i instanceof W))
        return;
    const s = n.mapping.maps[r];
    let o = 0;
    s.forEach((l,a,c,u)=>{
        o === 0 && (o = u)
    }
    ),
    n.setSelection(N.near(n.doc.resolve(o), t))
}
const kh = n=>n.toString().startsWith("<")
  , bh = (n,e,t)=>({tr: r, dispatch: i, editor: s})=>{
    if (i) {
        t = {
            parseOptions: {},
            updateSelection: !0,
            ...t
        };
        const o = Jn(e, s.schema, {
            parseOptions: {
                preserveWhitespace: "full",
                ...t.parseOptions
            }
        });
        if (o.toString() === "<>")
            return !0;
        let {from: l, to: a} = typeof n == "number" ? {
            from: n,
            to: n
        } : n
          , c = !0
          , u = !0;
        if ((kh(o) ? o : [o]).forEach(f=>{
            f.check(),
            c = c ? f.isText && f.marks.length === 0 : !1,
            u = u ? f.isBlock : !1
        }
        ),
        l === a && u) {
            const {parent: f} = r.doc.resolve(l);
            f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1,
            a += 1)
        }
        c ? Array.isArray(e) ? r.insertText(e.map(f=>f.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? r.insertText(e.text, l, a) : r.insertText(e, l, a) : r.replaceWith(l, a, o),
        t.updateSelection && yh(r, r.steps.length - 1, -1)
    }
    return !0
}
  , Sh = ()=>({state: n, dispatch: e})=>xf(n, e)
  , xh = ()=>({state: n, dispatch: e})=>Mf(n, e)
  , Mh = ()=>({state: n, dispatch: e})=>gf(n, e)
  , Ch = ()=>({state: n, dispatch: e})=>bf(n, e);
function Fl() {
    return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1
}
function wh(n) {
    const e = n.split(/-(?!$)/);
    let t = e[e.length - 1];
    t === "Space" && (t = " ");
    let r, i, s, o;
    for (let l = 0; l < e.length - 1; l += 1) {
        const a = e[l];
        if (/^(cmd|meta|m)$/i.test(a))
            o = !0;
        else if (/^a(lt)?$/i.test(a))
            r = !0;
        else if (/^(c|ctrl|control)$/i.test(a))
            i = !0;
        else if (/^s(hift)?$/i.test(a))
            s = !0;
        else if (/^mod$/i.test(a))
            Hi() || Fl() ? o = !0 : i = !0;
        else
            throw new Error(`Unrecognized modifier name: ${a}`)
    }
    return r && (t = `Alt-${t}`),
    i && (t = `Ctrl-${t}`),
    o && (t = `Meta-${t}`),
    s && (t = `Shift-${t}`),
    t
}
const Th = n=>({editor: e, view: t, tr: r, dispatch: i})=>{
    const s = wh(n).split(/-(?!$)/)
      , o = s.find(c=>!["Alt", "Ctrl", "Meta", "Shift"].includes(c))
      , l = new KeyboardEvent("keydown",{
        key: o === "Space" ? " " : o,
        altKey: s.includes("Alt"),
        ctrlKey: s.includes("Ctrl"),
        metaKey: s.includes("Meta"),
        shiftKey: s.includes("Shift"),
        bubbles: !0,
        cancelable: !0
    })
      , a = e.captureTransaction(()=>{
        t.someProp("handleKeyDown", c=>c(t, l))
    }
    );
    return a == null || a.steps.forEach(c=>{
        const u = c.map(r.mapping);
        u && i && r.maybeStep(u)
    }
    ),
    !0
}
;
function hn(n, e, t={}) {
    const {from: r, to: i, empty: s} = n.selection
      , o = e ? J(e, n.schema) : null
      , l = [];
    n.doc.nodesBetween(r, i, (d,f)=>{
        if (d.isText)
            return;
        const h = Math.max(r, f)
          , p = Math.min(i, f + d.nodeSize);
        l.push({
            node: d,
            from: h,
            to: p
        })
    }
    );
    const a = i - r
      , c = l.filter(d=>o ? o.name === d.node.type.name : !0).filter(d=>Kn(d.node.attrs, t, {
        strict: !1
    }));
    return s ? !!c.length : c.reduce((d,f)=>d + f.to - f.from, 0) >= a
}
const Oh = (n,e={})=>({state: t, dispatch: r})=>{
    const i = J(n, t.schema);
    return hn(t, i, e) ? Cf(t, r) : !1
}
  , Eh = ()=>({state: n, dispatch: e})=>Ef(n, e)
  , vh = n=>({state: e, dispatch: t})=>{
    const r = J(n, e.schema);
    return Lf(r)(e, t)
}
  , Ah = ()=>({state: n, dispatch: e})=>wf(n, e);
function xr(n, e) {
    return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null
}
function Ys(n, e) {
    const t = typeof e == "string" ? [e] : e;
    return Object.keys(n).reduce((r,i)=>(t.includes(i) || (r[i] = n[i]),
    r), {})
}
const Nh = (n,e)=>({tr: t, state: r, dispatch: i})=>{
    let s = null
      , o = null;
    const l = xr(typeof n == "string" ? n : n.name, r.schema);
    return l ? (l === "node" && (s = J(n, r.schema)),
    l === "mark" && (o = nt(n, r.schema)),
    i && t.selection.ranges.forEach(a=>{
        r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c,u)=>{
            s && s === c.type && t.setNodeMarkup(u, void 0, Ys(c.attrs, e)),
            o && c.marks.length && c.marks.forEach(d=>{
                o === d.type && t.addMark(u, u + c.nodeSize, o.create(Ys(d.attrs, e)))
            }
            )
        }
        )
    }
    ),
    !0) : !1
}
  , Dh = ()=>({tr: n, dispatch: e})=>(e && n.scrollIntoView(),
!0)
  , Ih = ()=>({tr: n, commands: e})=>e.setTextSelection({
    from: 0,
    to: n.doc.content.size
})
  , Rh = ()=>({state: n, dispatch: e})=>yf(n, e)
  , Ph = ()=>({state: n, dispatch: e})=>Sf(n, e)
  , Lh = ()=>({state: n, dispatch: e})=>vf(n, e)
  , Bh = ()=>({state: n, dispatch: e})=>Df(n, e)
  , zh = ()=>({state: n, dispatch: e})=>Nf(n, e);
function Hl(n, e, t={}) {
    return Jn(n, e, {
        slice: !1,
        parseOptions: t
    })
}
const Fh = (n,e=!1,t={})=>({tr: r, editor: i, dispatch: s})=>{
    const {doc: o} = r
      , l = Hl(n, i.schema, t);
    return s && r.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e),
    !0
}
;
function Hh(n, e) {
    const t = new Jo(n);
    return e.forEach(r=>{
        r.steps.forEach(i=>{
            t.step(i)
        }
        )
    }
    ),
    t
}
function $h(n) {
    for (let e = 0; e < n.edgeCount; e += 1) {
        const {type: t} = n.edge(e);
        if (t.isTextblock && !t.hasRequiredAttrs())
            return t
    }
    return null
}
function Vh(n, e, t) {
    const r = [];
    return n.nodesBetween(e.from, e.to, (i,s)=>{
        t(i) && r.push({
            node: i,
            pos: s
        })
    }
    ),
    r
}
function _h(n, e) {
    for (let t = n.depth; t > 0; t -= 1) {
        const r = n.node(t);
        if (e(r))
            return {
                pos: t > 0 ? n.before(t) : 0,
                start: n.start(t),
                depth: t,
                node: r
            }
    }
}
function $i(n) {
    return e=>_h(e.$from, n)
}
function jh(n, e) {
    const t = Ee.fromSchema(e).serializeFragment(n)
      , i = document.implementation.createHTMLDocument().createElement("div");
    return i.appendChild(t),
    i.innerHTML
}
function Wh(n, e) {
    const t = {
        from: 0,
        to: n.content.size
    };
    return Pl(n, t, e)
}
function bn(n, e) {
    const t = nt(e, n.schema)
      , {from: r, to: i, empty: s} = n.selection
      , o = [];
    s ? (n.storedMarks && o.push(...n.storedMarks),
    o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, a=>{
        o.push(...a.marks)
    }
    );
    const l = o.find(a=>a.type.name === t.name);
    return l ? {
        ...l.attrs
    } : {}
}
function Kh(n, e) {
    const t = J(e, n.schema)
      , {from: r, to: i} = n.selection
      , s = [];
    n.doc.nodesBetween(r, i, l=>{
        s.push(l)
    }
    );
    const o = s.reverse().find(l=>l.type.name === t.name);
    return o ? {
        ...o.attrs
    } : {}
}
function $l(n, e) {
    const t = xr(typeof e == "string" ? e : e.name, n.schema);
    return t === "node" ? Kh(n, e) : t === "mark" ? bn(n, e) : {}
}
function Jh(n, e=JSON.stringify) {
    const t = {};
    return n.filter(r=>{
        const i = e(r);
        return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0
    }
    )
}
function qh(n) {
    const e = Jh(n);
    return e.length === 1 ? e : e.filter((t,r)=>!e.filter((s,o)=>o !== r).some(s=>t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to))
}
function Uh(n) {
    const {mapping: e, steps: t} = n
      , r = [];
    return e.maps.forEach((i,s)=>{
        const o = [];
        if (i.ranges.length)
            i.forEach((l,a)=>{
                o.push({
                    from: l,
                    to: a
                })
            }
            );
        else {
            const {from: l, to: a} = t[s];
            if (l === void 0 || a === void 0)
                return;
            o.push({
                from: l,
                to: a
            })
        }
        o.forEach(({from: l, to: a})=>{
            const c = e.slice(s).map(l, -1)
              , u = e.slice(s).map(a)
              , d = e.invert().map(c, -1)
              , f = e.invert().map(u);
            r.push({
                oldRange: {
                    from: d,
                    to: f
                },
                newRange: {
                    from: c,
                    to: u
                }
            })
        }
        )
    }
    ),
    qh(r)
}
function qn(n, e, t) {
    const r = [];
    return n === e ? t.resolve(n).marks().forEach(i=>{
        const s = t.resolve(n - 1)
          , o = Fi(s, i.type);
        o && r.push({
            mark: i,
            ...o
        })
    }
    ) : t.nodesBetween(n, e, (i,s)=>{
        r.push(...i.marks.map(o=>({
            from: s,
            to: s + i.nodeSize,
            mark: o
        })))
    }
    ),
    r
}
function Nn(n, e, t) {
    return Object.fromEntries(Object.entries(t).filter(([r])=>{
        const i = n.find(s=>s.type === e && s.name === r);
        return i ? i.attribute.keepOnSplit : !1
    }
    ))
}
function mi(n, e, t={}) {
    const {empty: r, ranges: i} = n.selection
      , s = e ? nt(e, n.schema) : null;
    if (r)
        return !!(n.storedMarks || n.selection.$from.marks()).filter(d=>s ? s.name === d.type.name : !0).find(d=>Kn(d.attrs, t, {
            strict: !1
        }));
    let o = 0;
    const l = [];
    if (i.forEach(({$from: d, $to: f})=>{
        const h = d.pos
          , p = f.pos;
        n.doc.nodesBetween(h, p, (m,g)=>{
            if (!m.isText && !m.marks.length)
                return;
            const y = Math.max(h, g)
              , x = Math.min(p, g + m.nodeSize)
              , w = x - y;
            o += w,
            l.push(...m.marks.map(B=>({
                mark: B,
                from: y,
                to: x
            })))
        }
        )
    }
    ),
    o === 0)
        return !1;
    const a = l.filter(d=>s ? s.name === d.mark.type.name : !0).filter(d=>Kn(d.mark.attrs, t, {
        strict: !1
    })).reduce((d,f)=>d + f.to - f.from, 0)
      , c = l.filter(d=>s ? d.mark.type !== s && d.mark.type.excludes(s) : !0).reduce((d,f)=>d + f.to - f.from, 0);
    return (a > 0 ? a + c : a) >= o
}
function Gh(n, e, t={}) {
    if (!e)
        return hn(n, null, t) || mi(n, null, t);
    const r = xr(e, n.schema);
    return r === "node" ? hn(n, e, t) : r === "mark" ? mi(n, e, t) : !1
}
function Qs(n, e) {
    const {nodeExtensions: t} = kr(e)
      , r = t.find(o=>o.name === n);
    if (!r)
        return !1;
    const i = {
        name: r.name,
        options: r.options,
        storage: r.storage
    }
      , s = v(M(r, "group", i));
    return typeof s != "string" ? !1 : s.split(" ").includes("list")
}
function Zh(n) {
    var e;
    const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON()
      , r = n.toJSON();
    return JSON.stringify(t) === JSON.stringify(r)
}
function Yh(n, e, t) {
    var r;
    const {selection: i} = e;
    let s = null;
    if (Bl(i) && (s = i.$cursor),
    s) {
        const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
        return !!t.isInSet(l) || !l.some(a=>a.type.excludes(t))
    }
    const {ranges: o} = i;
    return o.some(({$from: l, $to: a})=>{
        let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
        return n.doc.nodesBetween(l.pos, a.pos, (u,d,f)=>{
            if (c)
                return !1;
            if (u.isInline) {
                const h = !f || f.type.allowsMarkType(t)
                  , p = !!t.isInSet(u.marks) || !u.marks.some(m=>m.type.excludes(t));
                c = h && p
            }
            return !c
        }
        ),
        c
    }
    )
}
const Qh = (n,e={})=>({tr: t, state: r, dispatch: i})=>{
    const {selection: s} = t
      , {empty: o, ranges: l} = s
      , a = nt(n, r.schema);
    if (i)
        if (o) {
            const c = bn(r, a);
            t.addStoredMark(a.create({
                ...c,
                ...e
            }))
        } else
            l.forEach(c=>{
                const u = c.$from.pos
                  , d = c.$to.pos;
                r.doc.nodesBetween(u, d, (f,h)=>{
                    const p = Math.max(h, u)
                      , m = Math.min(h + f.nodeSize, d);
                    f.marks.find(y=>y.type === a) ? f.marks.forEach(y=>{
                        a === y.type && t.addMark(p, m, a.create({
                            ...y.attrs,
                            ...e
                        }))
                    }
                    ) : t.addMark(p, m, a.create(e))
                }
                )
            }
            );
    return Yh(r, t, a)
}
  , Xh = (n,e)=>({tr: t})=>(t.setMeta(n, e),
!0)
  , ep = (n,e={})=>({state: t, dispatch: r, chain: i})=>{
    const s = J(n, t.schema);
    return s.isTextblock ? i().command(({commands: o})=>Js(s, e)(t) ? !0 : o.clearNodes()).command(({state: o})=>Js(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'),
    !1)
}
  , tp = n=>({tr: e, dispatch: t})=>{
    if (t) {
        const {doc: r} = e
          , i = mt(n, 0, r.content.size)
          , s = E.create(r, i);
        e.setSelection(s)
    }
    return !0
}
  , np = n=>({tr: e, dispatch: t})=>{
    if (t) {
        const {doc: r} = e
          , {from: i, to: s} = typeof n == "number" ? {
            from: n,
            to: n
        } : n
          , o = A.atStart(r).from
          , l = A.atEnd(r).to
          , a = mt(i, o, l)
          , c = mt(s, o, l)
          , u = A.create(r, a, c);
        e.setSelection(u)
    }
    return !0
}
  , rp = n=>({state: e, dispatch: t})=>{
    const r = J(n, e.schema);
    return Ff(r)(e, t)
}
;
function Xs(n, e) {
    const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
    if (t) {
        const r = t.filter(i=>e == null ? void 0 : e.includes(i.type.name));
        n.tr.ensureMarks(r)
    }
}
const ip = ({keepMarks: n=!0}={})=>({tr: e, state: t, dispatch: r, editor: i})=>{
    const {selection: s, doc: o} = e
      , {$from: l, $to: a} = s
      , c = i.extensionManager.attributes
      , u = Nn(c, l.node().type.name, l.node().attrs);
    if (s instanceof E && s.node.isBlock)
        return !l.parentOffset || !Bt(o, l.pos) ? !1 : (r && (n && Xs(t, i.extensionManager.splittableMarks),
        e.split(l.pos).scrollIntoView()),
        !0);
    if (!l.parent.isBlock)
        return !1;
    if (r) {
        const d = a.parentOffset === a.parent.content.size;
        s instanceof A && e.deleteSelection();
        const f = l.depth === 0 ? void 0 : $h(l.node(-1).contentMatchAt(l.indexAfter(-1)));
        let h = d && f ? [{
            type: f,
            attrs: u
        }] : void 0
          , p = Bt(e.doc, e.mapping.map(l.pos), 1, h);
        if (!h && !p && Bt(e.doc, e.mapping.map(l.pos), 1, f ? [{
            type: f
        }] : void 0) && (p = !0,
        h = f ? [{
            type: f,
            attrs: u
        }] : void 0),
        p && (e.split(e.mapping.map(l.pos), 1, h),
        f && !d && !l.parentOffset && l.parent.type !== f)) {
            const m = e.mapping.map(l.before())
              , g = e.doc.resolve(m);
            l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f)
        }
        n && Xs(t, i.extensionManager.splittableMarks),
        e.scrollIntoView()
    }
    return !0
}
  , sp = n=>({tr: e, state: t, dispatch: r, editor: i})=>{
    var s;
    const o = J(n, t.schema)
      , {$from: l, $to: a} = t.selection
      , c = t.selection.node;
    if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
        return !1;
    const u = l.node(-1);
    if (u.type !== o)
        return !1;
    const d = i.extensionManager.attributes;
    if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
        if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
            return !1;
        if (r) {
            let g = k.empty;
            const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
            for (let L = l.depth - y; L >= l.depth - 3; L -= 1)
                g = k.from(l.node(L).copy(g));
            const x = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3
              , w = Nn(d, l.node().type.name, l.node().attrs)
              , B = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(w)) || void 0;
            g = g.append(k.from(o.createAndFill(null, B) || void 0));
            const D = l.before(l.depth - (y - 1));
            e.replace(D, l.after(-x), new S(g,4 - y,0));
            let T = -1;
            e.doc.nodesBetween(D, e.doc.content.size, (L,O)=>{
                if (T > -1)
                    return !1;
                L.isTextblock && L.content.size === 0 && (T = O + 1)
            }
            ),
            T > -1 && e.setSelection(A.near(e.doc.resolve(T))),
            e.scrollIntoView()
        }
        return !0
    }
    const f = a.pos === l.end() ? u.contentMatchAt(0).defaultType : null
      , h = Nn(d, u.type.name, u.attrs)
      , p = Nn(d, l.node().type.name, l.node().attrs);
    e.delete(l.pos, a.pos);
    const m = f ? [{
        type: o,
        attrs: h
    }, {
        type: f,
        attrs: p
    }] : [{
        type: o,
        attrs: h
    }];
    if (!Bt(e.doc, l.pos, 2))
        return !1;
    if (r) {
        const {selection: g, storedMarks: y} = t
          , {splittableMarks: x} = i.extensionManager
          , w = y || g.$to.parentOffset && g.$from.marks();
        if (e.split(l.pos, 2, m).scrollIntoView(),
        !w || !r)
            return !0;
        const B = w.filter(D=>x.includes(D.type.name));
        e.ensureMarks(B)
    }
    return !0
}
  , jr = (n,e)=>{
    const t = $i(o=>o.type === e)(n.selection);
    if (!t)
        return !0;
    const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
    if (r === void 0)
        return !0;
    const i = n.doc.nodeAt(r);
    return t.node.type === (i == null ? void 0 : i.type) && et(n.doc, t.pos) && n.join(t.pos),
    !0
}
  , Wr = (n,e)=>{
    const t = $i(o=>o.type === e)(n.selection);
    if (!t)
        return !0;
    const r = n.doc.resolve(t.start).after(t.depth);
    if (r === void 0)
        return !0;
    const i = n.doc.nodeAt(r);
    return t.node.type === (i == null ? void 0 : i.type) && et(n.doc, r) && n.join(r),
    !0
}
  , op = (n,e,t,r={})=>({editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u})=>{
    const {extensions: d, splittableMarks: f} = i.extensionManager
      , h = J(n, o.schema)
      , p = J(e, o.schema)
      , {selection: m, storedMarks: g} = o
      , {$from: y, $to: x} = m
      , w = y.blockRange(x)
      , B = g || m.$to.parentOffset && m.$from.marks();
    if (!w)
        return !1;
    const D = $i(T=>Qs(T.type.name, d))(m);
    if (w.depth >= 1 && D && w.depth - D.depth <= 1) {
        if (D.node.type === h)
            return c.liftListItem(p);
        if (Qs(D.node.type.name, d) && h.validContent(D.node.content) && l)
            return a().command(()=>(s.setNodeMarkup(D.pos, h),
            !0)).command(()=>jr(s, h)).command(()=>Wr(s, h)).run()
    }
    return !t || !B || !l ? a().command(()=>u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(()=>jr(s, h)).command(()=>Wr(s, h)).run() : a().command(()=>{
        const T = u().wrapInList(h, r)
          , L = B.filter(O=>f.includes(O.type.name));
        return s.ensureMarks(L),
        T ? !0 : c.clearNodes()
    }
    ).wrapInList(h, r).command(()=>jr(s, h)).command(()=>Wr(s, h)).run()
}
  , lp = (n,e={},t={})=>({state: r, commands: i})=>{
    const {extendEmptyMarkRange: s=!1} = t
      , o = nt(n, r.schema);
    return mi(r, o, e) ? i.unsetMark(o, {
        extendEmptyMarkRange: s
    }) : i.setMark(o, e)
}
  , ap = (n,e,t={})=>({state: r, commands: i})=>{
    const s = J(n, r.schema)
      , o = J(e, r.schema);
    return hn(r, s, t) ? i.setNode(o) : i.setNode(s, t)
}
  , cp = (n,e={})=>({state: t, commands: r})=>{
    const i = J(n, t.schema);
    return hn(t, i, e) ? r.lift(i) : r.wrapIn(i, e)
}
  , up = ()=>({state: n, dispatch: e})=>{
    const t = n.plugins;
    for (let r = 0; r < t.length; r += 1) {
        const i = t[r];
        let s;
        if (i.spec.isInputRules && (s = i.getState(n))) {
            if (e) {
                const o = n.tr
                  , l = s.transform;
                for (let a = l.steps.length - 1; a >= 0; a -= 1)
                    o.step(l.steps[a].invert(l.docs[a]));
                if (s.text) {
                    const a = o.doc.resolve(s.from).marks();
                    o.replaceWith(s.from, s.to, n.schema.text(s.text, a))
                } else
                    o.delete(s.from, s.to)
            }
            return !0
        }
    }
    return !1
}
  , dp = ()=>({tr: n, dispatch: e})=>{
    const {selection: t} = n
      , {empty: r, ranges: i} = t;
    return r || e && i.forEach(s=>{
        n.removeMark(s.$from.pos, s.$to.pos)
    }
    ),
    !0
}
  , fp = (n,e={})=>({tr: t, state: r, dispatch: i})=>{
    var s;
    const {extendEmptyMarkRange: o=!1} = e
      , {selection: l} = t
      , a = nt(n, r.schema)
      , {$from: c, empty: u, ranges: d} = l;
    if (!i)
        return !0;
    if (u && o) {
        let {from: f, to: h} = l;
        const p = (s = c.marks().find(g=>g.type === a)) === null || s === void 0 ? void 0 : s.attrs
          , m = Fi(c, a, p);
        m && (f = m.from,
        h = m.to),
        t.removeMark(f, h, a)
    } else
        d.forEach(f=>{
            t.removeMark(f.$from.pos, f.$to.pos, a)
        }
        );
    return t.removeStoredMark(a),
    !0
}
  , hp = (n,e={})=>({tr: t, state: r, dispatch: i})=>{
    let s = null
      , o = null;
    const l = xr(typeof n == "string" ? n : n.name, r.schema);
    return l ? (l === "node" && (s = J(n, r.schema)),
    l === "mark" && (o = nt(n, r.schema)),
    i && t.selection.ranges.forEach(a=>{
        const c = a.$from.pos
          , u = a.$to.pos;
        r.doc.nodesBetween(c, u, (d,f)=>{
            s && s === d.type && t.setNodeMarkup(f, void 0, {
                ...d.attrs,
                ...e
            }),
            o && d.marks.length && d.marks.forEach(h=>{
                if (o === h.type) {
                    const p = Math.max(f, c)
                      , m = Math.min(f + d.nodeSize, u);
                    t.addMark(p, m, o.create({
                        ...h.attrs,
                        ...e
                    }))
                }
            }
            )
        }
        )
    }
    ),
    !0) : !1
}
  , pp = (n,e={})=>({state: t, dispatch: r})=>{
    const i = J(n, t.schema);
    return If(i, e)(t, r)
}
  , mp = (n,e={})=>({state: t, dispatch: r})=>{
    const i = J(n, t.schema);
    return Rf(i, e)(t, r)
}
;
var gp = Object.freeze({
    __proto__: null,
    blur: eh,
    clearContent: th,
    clearNodes: nh,
    command: rh,
    createParagraphNear: ih,
    deleteCurrentNode: sh,
    deleteNode: oh,
    deleteRange: lh,
    deleteSelection: ah,
    enter: ch,
    exitCode: uh,
    extendMarkRange: fh,
    first: hh,
    focus: ph,
    forEach: mh,
    insertContent: gh,
    insertContentAt: bh,
    joinUp: Sh,
    joinDown: xh,
    joinBackward: Mh,
    joinForward: Ch,
    keyboardShortcut: Th,
    lift: Oh,
    liftEmptyBlock: Eh,
    liftListItem: vh,
    newlineInCode: Ah,
    resetAttributes: Nh,
    scrollIntoView: Dh,
    selectAll: Ih,
    selectNodeBackward: Rh,
    selectNodeForward: Ph,
    selectParentNode: Lh,
    selectTextblockEnd: Bh,
    selectTextblockStart: zh,
    setContent: Fh,
    setMark: Qh,
    setMeta: Xh,
    setNode: ep,
    setNodeSelection: tp,
    setTextSelection: np,
    sinkListItem: rp,
    splitBlock: ip,
    splitListItem: sp,
    toggleList: op,
    toggleMark: lp,
    toggleNode: ap,
    toggleWrap: cp,
    undoInputRule: up,
    unsetAllMarks: dp,
    unsetMark: fp,
    updateAttributes: hp,
    wrapIn: pp,
    wrapInList: mp
});
const yp = Se.create({
    name: "commands",
    addCommands() {
        return {
            ...gp
        }
    }
})
  , kp = Se.create({
    name: "editable",
    addProseMirrorPlugins() {
        return [new ae({
            key: new xe("editable"),
            props: {
                editable: ()=>this.editor.options.editable
            }
        })]
    }
})
  , bp = Se.create({
    name: "focusEvents",
    addProseMirrorPlugins() {
        const {editor: n} = this;
        return [new ae({
            key: new xe("focusEvents"),
            props: {
                handleDOMEvents: {
                    focus: (e,t)=>{
                        n.isFocused = !0;
                        const r = n.state.tr.setMeta("focus", {
                            event: t
                        }).setMeta("addToHistory", !1);
                        return e.dispatch(r),
                        !1
                    }
                    ,
                    blur: (e,t)=>{
                        n.isFocused = !1;
                        const r = n.state.tr.setMeta("blur", {
                            event: t
                        }).setMeta("addToHistory", !1);
                        return e.dispatch(r),
                        !1
                    }
                }
            }
        })]
    }
})
  , Sp = Se.create({
    name: "keymap",
    addKeyboardShortcuts() {
        const n = ()=>this.editor.commands.first(({commands: o})=>[()=>o.undoInputRule(), ()=>o.command(({tr: l})=>{
            const {selection: a, doc: c} = l
              , {empty: u, $anchor: d} = a
              , {pos: f, parent: h} = d
              , p = N.atStart(c).from === f;
            return !u || !p || !h.type.isTextblock || h.textContent.length ? !1 : o.clearNodes()
        }
        ), ()=>o.deleteSelection(), ()=>o.joinBackward(), ()=>o.selectNodeBackward()])
          , e = ()=>this.editor.commands.first(({commands: o})=>[()=>o.deleteSelection(), ()=>o.deleteCurrentNode(), ()=>o.joinForward(), ()=>o.selectNodeForward()])
          , r = {
            Enter: ()=>this.editor.commands.first(({commands: o})=>[()=>o.newlineInCode(), ()=>o.createParagraphNear(), ()=>o.liftEmptyBlock(), ()=>o.splitBlock()]),
            "Mod-Enter": ()=>this.editor.commands.exitCode(),
            Backspace: n,
            "Mod-Backspace": n,
            "Shift-Backspace": n,
            Delete: e,
            "Mod-Delete": e,
            "Mod-a": ()=>this.editor.commands.selectAll()
        }
          , i = {
            ...r
        }
          , s = {
            ...r,
            "Ctrl-h": n,
            "Alt-Backspace": n,
            "Ctrl-d": e,
            "Ctrl-Alt-Backspace": e,
            "Alt-Delete": e,
            "Alt-d": e,
            "Ctrl-a": ()=>this.editor.commands.selectTextblockStart(),
            "Ctrl-e": ()=>this.editor.commands.selectTextblockEnd()
        };
        return Hi() || Fl() ? s : i
    },
    addProseMirrorPlugins() {
        return [new ae({
            key: new xe("clearDocument"),
            appendTransaction: (n,e,t)=>{
                if (!(n.some(p=>p.docChanged) && !e.doc.eq(t.doc)))
                    return;
                const {empty: i, from: s, to: o} = e.selection
                  , l = N.atStart(e.doc).from
                  , a = N.atEnd(e.doc).to;
                if (i || !(s === l && o === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
                    return;
                const d = t.tr
                  , f = gr({
                    state: t,
                    transaction: d
                })
                  , {commands: h} = new yr({
                    editor: this.editor,
                    state: f
                });
                if (h.clearNodes(),
                !!d.steps.length)
                    return d
            }
        })]
    }
})
  , xp = Se.create({
    name: "tabindex",
    addProseMirrorPlugins() {
        return [new ae({
            key: new xe("tabindex"),
            props: {
                attributes: this.editor.isEditable ? {
                    tabindex: "0"
                } : {}
            }
        })]
    }
});
var Mp = Object.freeze({
    __proto__: null,
    ClipboardTextSerializer: Xf,
    Commands: yp,
    Editable: kp,
    FocusEvents: bp,
    Keymap: Sp,
    Tabindex: xp
});
const Cp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function wp(n, e) {
    const t = document.querySelector("style[data-tiptap-style]");
    if (t !== null)
        return t;
    const r = document.createElement("style");
    return e && r.setAttribute("nonce", e),
    r.setAttribute("data-tiptap-style", ""),
    r.innerHTML = n,
    document.getElementsByTagName("head")[0].appendChild(r),
    r
}
let Tp = class extends Hf {
    constructor(e={}) {
        super(),
        this.isFocused = !1,
        this.extensionStorage = {},
        this.options = {
            element: document.createElement("div"),
            content: "",
            injectCSS: !0,
            injectNonce: void 0,
            extensions: [],
            autofocus: !1,
            editable: !0,
            editorProps: {},
            parseOptions: {},
            enableInputRules: !0,
            enablePasteRules: !0,
            enableCoreExtensions: !0,
            onBeforeCreate: ()=>null,
            onCreate: ()=>null,
            onUpdate: ()=>null,
            onSelectionUpdate: ()=>null,
            onTransaction: ()=>null,
            onFocus: ()=>null,
            onBlur: ()=>null,
            onDestroy: ()=>null
        },
        this.isCapturingTransaction = !1,
        this.capturedTransaction = null,
        this.setOptions(e),
        this.createExtensionManager(),
        this.createCommandManager(),
        this.createSchema(),
        this.on("beforeCreate", this.options.onBeforeCreate),
        this.emit("beforeCreate", {
            editor: this
        }),
        this.createView(),
        this.injectCSS(),
        this.on("create", this.options.onCreate),
        this.on("update", this.options.onUpdate),
        this.on("selectionUpdate", this.options.onSelectionUpdate),
        this.on("transaction", this.options.onTransaction),
        this.on("focus", this.options.onFocus),
        this.on("blur", this.options.onBlur),
        this.on("destroy", this.options.onDestroy),
        window.setTimeout(()=>{
            this.isDestroyed || (this.commands.focus(this.options.autofocus),
            this.emit("create", {
                editor: this
            }))
        }
        , 0)
    }
    get storage() {
        return this.extensionStorage
    }
    get commands() {
        return this.commandManager.commands
    }
    chain() {
        return this.commandManager.chain()
    }
    can() {
        return this.commandManager.can()
    }
    injectCSS() {
        this.options.injectCSS && document && (this.css = wp(Cp, this.options.injectNonce))
    }
    setOptions(e={}) {
        this.options = {
            ...this.options,
            ...e
        },
        !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps),
        this.view.updateState(this.state))
    }
    setEditable(e, t=!0) {
        this.setOptions({
            editable: e
        }),
        t && this.emit("update", {
            editor: this,
            transaction: this.state.tr
        })
    }
    get isEditable() {
        return this.options.editable && this.view && this.view.editable
    }
    get state() {
        return this.view.state
    }
    registerPlugin(e, t) {
        const r = Rl(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e]
          , i = this.state.reconfigure({
            plugins: r
        });
        this.view.updateState(i)
    }
    unregisterPlugin(e) {
        if (this.isDestroyed)
            return;
        const t = typeof e == "string" ? `${e}$` : e.key
          , r = this.state.reconfigure({
            plugins: this.state.plugins.filter(i=>!i.key.startsWith(t))
        });
        this.view.updateState(r)
    }
    createExtensionManager() {
        const t = [...this.options.enableCoreExtensions ? Object.values(Mp) : [], ...this.options.extensions].filter(r=>["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
        this.extensionManager = new Dt(t,this)
    }
    createCommandManager() {
        this.commandManager = new yr({
            editor: this
        })
    }
    createSchema() {
        this.schema = this.extensionManager.schema
    }
    createView() {
        const e = Hl(this.options.content, this.schema, this.options.parseOptions)
          , t = zl(e, this.options.autofocus);
        this.view = new tf(this.options.element,{
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: Nt.create({
                doc: e,
                selection: t || void 0
            })
        });
        const r = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(r),
        this.createNodeViews();
        const i = this.view.dom;
        i.editor = this
    }
    createNodeViews() {
        this.view.setProps({
            nodeViews: this.extensionManager.nodeViews
        })
    }
    captureTransaction(e) {
        this.isCapturingTransaction = !0,
        e(),
        this.isCapturingTransaction = !1;
        const t = this.capturedTransaction;
        return this.capturedTransaction = null,
        t
    }
    dispatchTransaction(e) {
        if (this.view.isDestroyed)
            return;
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = e;
                return
            }
            e.steps.forEach(o=>{
                var l;
                return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o)
            }
            );
            return
        }
        const t = this.state.apply(e)
          , r = !this.state.selection.eq(t.selection);
        this.view.updateState(t),
        this.emit("transaction", {
            editor: this,
            transaction: e
        }),
        r && this.emit("selectionUpdate", {
            editor: this,
            transaction: e
        });
        const i = e.getMeta("focus")
          , s = e.getMeta("blur");
        i && this.emit("focus", {
            editor: this,
            event: i.event,
            transaction: e
        }),
        s && this.emit("blur", {
            editor: this,
            event: s.event,
            transaction: e
        }),
        !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
            editor: this,
            transaction: e
        })
    }
    getAttributes(e) {
        return $l(this.state, e)
    }
    isActive(e, t) {
        const r = typeof e == "string" ? e : null
          , i = typeof e == "string" ? t : e;
        return Gh(this.state, r, i)
    }
    getJSON() {
        return this.state.doc.toJSON()
    }
    getHTML() {
        return jh(this.state.doc.content, this.schema)
    }
    getText(e) {
        const {blockSeparator: t=`

`, textSerializers: r={}} = e || {};
        return Wh(this.state.doc, {
            blockSeparator: t,
            textSerializers: {
                ...Ll(this.schema),
                ...r
            }
        })
    }
    get isEmpty() {
        return Zh(this.state.doc)
    }
    getCharacterCount() {
        return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'),
        this.state.doc.content.size - 2
    }
    destroy() {
        this.emit("destroy"),
        this.view && this.view.destroy(),
        this.removeAllListeners()
    }
    get isDestroyed() {
        var e;
        return !(!((e = this.view) === null || e === void 0) && e.docView)
    }
}
;
function pn(n) {
    return new br({
        find: n.find,
        handler: ({state: e, range: t, match: r})=>{
            const i = v(n.getAttributes, void 0, r);
            if (i === !1 || i === null)
                return null;
            const {tr: s} = e
              , o = r[r.length - 1]
              , l = r[0];
            let a = t.to;
            if (o) {
                const c = l.search(/\S/)
                  , u = t.from + l.indexOf(o)
                  , d = u + o.length;
                if (qn(t.from, t.to, e.doc).filter(h=>h.mark.type.excluded.find(m=>m === n.type && m !== h.mark.type)).filter(h=>h.to > u).length)
                    return null;
                d < t.to && s.delete(d, t.to),
                u > t.from && s.delete(t.from + c, u),
                a = t.from + c + o.length,
                s.addMark(t.from + c, a, n.type.create(i || {})),
                s.removeStoredMark(n.type)
            }
        }
    })
}
function Op(n) {
    return new br({
        find: n.find,
        handler: ({state: e, range: t, match: r})=>{
            const i = v(n.getAttributes, void 0, r) || {}
              , {tr: s} = e
              , o = t.from;
            let l = t.to;
            if (r[1]) {
                const a = r[0].lastIndexOf(r[1]);
                let c = o + a;
                c > l ? c = l : l = c + r[1].length;
                const u = r[0][r[0].length - 1];
                s.insertText(u, o + r[0].length - 1),
                s.replaceWith(c, l, n.type.create(i))
            } else
                r[0] && s.replaceWith(o, l, n.type.create(i))
        }
    })
}
function gi(n) {
    return new br({
        find: n.find,
        handler: ({state: e, range: t, match: r})=>{
            const i = e.doc.resolve(t.from)
              , s = v(n.getAttributes, void 0, r) || {};
            if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
                return null;
            e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s)
        }
    })
}
function mn(n) {
    return new br({
        find: n.find,
        handler: ({state: e, range: t, match: r, chain: i})=>{
            const s = v(n.getAttributes, void 0, r) || {}
              , o = e.tr.delete(t.from, t.to)
              , a = o.doc.resolve(t.from).blockRange()
              , c = a && Ti(a, n.type, s);
            if (!c)
                return null;
            if (o.wrap(a, c),
            n.keepMarks && n.editor) {
                const {selection: d, storedMarks: f} = e
                  , {splittableMarks: h} = n.editor.extensionManager
                  , p = f || d.$to.parentOffset && d.$from.marks();
                if (p) {
                    const m = p.filter(g=>h.includes(g.type.name));
                    o.ensureMarks(m)
                }
            }
            if (n.keepAttributes) {
                const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
                i().updateAttributes(d, s).run()
            }
            const u = o.doc.resolve(t.from - 1).nodeBefore;
            u && u.type === n.type && et(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1)
        }
    })
}
class pe {
    constructor(e={}) {
        this.type = "mark",
        this.name = "mark",
        this.parent = null,
        this.child = null,
        this.config = {
            name: this.name,
            defaultOptions: {}
        },
        this.config = {
            ...this.config,
            ...e
        },
        this.name = this.config.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`),
        this.options = this.config.defaultOptions,
        this.config.addOptions && (this.options = v(M(this, "addOptions", {
            name: this.name
        }))),
        this.storage = v(M(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {}
    }
    static create(e={}) {
        return new pe(e)
    }
    configure(e={}) {
        const t = this.extend();
        return t.options = Sr(this.options, e),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
    extend(e={}) {
        const t = new pe(e);
        return t.parent = this,
        this.child = t,
        t.name = e.name ? e.name : t.parent.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`),
        t.options = v(M(t, "addOptions", {
            name: t.name
        })),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
    static handleExit({editor: e, mark: t}) {
        const {tr: r} = e.state
          , i = e.state.selection.$from;
        if (i.pos === i.end()) {
            const o = i.marks();
            if (!!!o.find(c=>(c == null ? void 0 : c.type.name) === t.name))
                return !1;
            const a = o.find(c=>(c == null ? void 0 : c.type.name) === t.name);
            return a && r.removeStoredMark(a),
            r.insertText(" ", i.pos),
            e.view.dispatch(r),
            !0
        }
        return !1
    }
}
class G {
    constructor(e={}) {
        this.type = "node",
        this.name = "node",
        this.parent = null,
        this.child = null,
        this.config = {
            name: this.name,
            defaultOptions: {}
        },
        this.config = {
            ...this.config,
            ...e
        },
        this.name = this.config.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`),
        this.options = this.config.defaultOptions,
        this.config.addOptions && (this.options = v(M(this, "addOptions", {
            name: this.name
        }))),
        this.storage = v(M(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {}
    }
    static create(e={}) {
        return new G(e)
    }
    configure(e={}) {
        const t = this.extend();
        return t.options = Sr(this.options, e),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
    extend(e={}) {
        const t = new G(e);
        return t.parent = this,
        this.child = t,
        t.name = e.name ? e.name : t.parent.name,
        e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`),
        t.options = v(M(t, "addOptions", {
            name: t.name
        })),
        t.storage = v(M(t, "addStorage", {
            name: t.name,
            options: t.options
        })),
        t
    }
}
function Kt(n) {
    return new qf({
        find: n.find,
        handler: ({state: e, range: t, match: r})=>{
            const i = v(n.getAttributes, void 0, r);
            if (i === !1 || i === null)
                return null;
            const {tr: s} = e
              , o = r[r.length - 1]
              , l = r[0];
            let a = t.to;
            if (o) {
                const c = l.search(/\S/)
                  , u = t.from + l.indexOf(o)
                  , d = u + o.length;
                if (qn(t.from, t.to, e.doc).filter(h=>h.mark.type.excluded.find(m=>m === n.type && m !== h.mark.type)).filter(h=>h.to > u).length)
                    return null;
                d < t.to && s.delete(d, t.to),
                u > t.from && s.delete(t.from + c, u),
                a = t.from + c + o.length,
                s.addMark(t.from + c, a, n.type.create(i || {})),
                s.removeStoredMark(n.type)
            }
        }
    })
}
function eo(n) {
    return ua((e,t)=>({
        get() {
            return e(),
            n
        },
        set(r) {
            n = r,
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    t()
                }
                )
            }
            )
        }
    }))
}
class Ep extends Tp {
    constructor(e={}) {
        return super(e),
        this.vueRenderers = la(new Map),
        this.contentComponent = null,
        this.reactiveState = eo(this.view.state),
        this.reactiveExtensionStorage = eo(this.extensionStorage),
        this.on("transaction", ()=>{
            this.reactiveState.value = this.view.state,
            this.reactiveExtensionStorage.value = this.extensionStorage
        }
        ),
        aa(this)
    }
    get state() {
        return this.reactiveState ? this.reactiveState.value : this.view.state
    }
    get storage() {
        return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage
    }
    registerPlugin(e, t) {
        super.registerPlugin(e, t),
        this.reactiveState.value = this.view.state
    }
    unregisterPlugin(e) {
        super.unregisterPlugin(e),
        this.reactiveState.value = this.view.state
    }
}
const vp = ta({
    name: "EditorContent",
    props: {
        editor: {
            default: null,
            type: Object
        }
    },
    setup(n) {
        const e = Yr()
          , t = ca();
        return na(()=>{
            const r = n.editor;
            r && r.options.element && e.value && ra(()=>{
                if (!e.value || !r.options.element.firstChild)
                    return;
                const i = Le(e.value);
                e.value.append(...r.options.element.childNodes),
                r.contentComponent = t.ctx._,
                r.setOptions({
                    element: i
                }),
                r.createNodeViews()
            }
            )
        }
        ),
        ko(()=>{
            const r = n.editor;
            if (!r || (r.isDestroyed || r.view.setProps({
                nodeViews: {}
            }),
            r.contentComponent = null,
            !r.options.element.firstChild))
                return;
            const i = document.createElement("div");
            i.append(...r.options.element.childNodes),
            r.setOptions({
                element: i
            })
        }
        ),
        {
            rootEl: e
        }
    },
    render() {
        const n = [];
        return this.editor && this.editor.vueRenderers.forEach(e=>{
            const t = Cr(ia, {
                to: e.teleportElement,
                key: e.id
            }, Cr(e.component, {
                ref: e.id,
                ...e.props
            }));
            n.push(t)
        }
        ),
        Cr("div", {
            ref: e=>{
                this.rootEl = e
            }
        }, ...n)
    }
})
  , Ap = (n={})=>{
    const e = sa();
    return oa(()=>{
        e.value = new Ep(n)
    }
    ),
    ko(()=>{
        var t;
        (t = e.value) === null || t === void 0 || t.destroy()
    }
    ),
    e
}
  , Np = "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2"
  , Dp = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2"
  , Jt = (n,e)=>{
    for (const t in e)
        n[t] = e[t];
    return n
}
  , yi = "numeric"
  , ki = "ascii"
  , bi = "alpha"
  , Dn = "asciinumeric"
  , On = "alphanumeric"
  , Si = "domain"
  , Vl = "emoji"
  , Ip = "scheme"
  , Rp = "slashscheme"
  , to = "whitespace";
function Pp(n, e) {
    return n in e || (e[n] = []),
    e[n]
}
function gt(n, e, t) {
    e[yi] && (e[Dn] = !0,
    e[On] = !0),
    e[ki] && (e[Dn] = !0,
    e[bi] = !0),
    e[Dn] && (e[On] = !0),
    e[bi] && (e[On] = !0),
    e[On] && (e[Si] = !0),
    e[Vl] && (e[Si] = !0);
    for (const r in e) {
        const i = Pp(r, t);
        i.indexOf(n) < 0 && i.push(n)
    }
}
function Lp(n, e) {
    const t = {};
    for (const r in e)
        e[r].indexOf(n) >= 0 && (t[r] = !0);
    return t
}
function ne(n) {
    n === void 0 && (n = null),
    this.j = {},
    this.jr = [],
    this.jd = null,
    this.t = n
}
ne.groups = {};
ne.prototype = {
    accepts() {
        return !!this.t
    },
    go(n) {
        const e = this
          , t = e.j[n];
        if (t)
            return t;
        for (let r = 0; r < e.jr.length; r++) {
            const i = e.jr[r][0]
              , s = e.jr[r][1];
            if (s && i.test(n))
                return s
        }
        return e.jd
    },
    has(n, e) {
        return e === void 0 && (e = !1),
        e ? n in this.j : !!this.go(n)
    },
    ta(n, e, t, r) {
        for (let i = 0; i < n.length; i++)
            this.tt(n[i], e, t, r)
    },
    tr(n, e, t, r) {
        r = r || ne.groups;
        let i;
        return e && e.j ? i = e : (i = new ne(e),
        t && r && gt(e, t, r)),
        this.jr.push([n, i]),
        i
    },
    ts(n, e, t, r) {
        let i = this;
        const s = n.length;
        if (!s)
            return i;
        for (let o = 0; o < s - 1; o++)
            i = i.tt(n[o]);
        return i.tt(n[s - 1], e, t, r)
    },
    tt(n, e, t, r) {
        r = r || ne.groups;
        const i = this;
        if (e && e.j)
            return i.j[n] = e,
            e;
        const s = e;
        let o, l = i.go(n);
        if (l ? (o = new ne,
        Jt(o.j, l.j),
        o.jr.push.apply(o.jr, l.jr),
        o.jd = l.jd,
        o.t = l.t) : o = new ne,
        s) {
            if (r)
                if (o.t && typeof o.t == "string") {
                    const a = Jt(Lp(o.t, r), t);
                    gt(s, a, r)
                } else
                    t && gt(s, t, r);
            o.t = s
        }
        return i.j[n] = o,
        o
    }
};
const C = (n,e,t,r,i)=>n.ta(e, t, r, i)
  , ce = (n,e,t,r,i)=>n.tr(e, t, r, i)
  , no = (n,e,t,r,i)=>n.ts(e, t, r, i)
  , b = (n,e,t,r,i)=>n.tt(e, t, r, i)
  , Re = "WORD"
  , xi = "UWORD"
  , gn = "LOCALHOST"
  , Mi = "TLD"
  , Ci = "UTLD"
  , In = "SCHEME"
  , At = "SLASH_SCHEME"
  , Vi = "NUM"
  , _l = "WS"
  , _i = "NL"
  , It = "OPENBRACE"
  , sn = "OPENBRACKET"
  , on = "OPENANGLEBRACKET"
  , ln = "OPENPAREN"
  , dt = "CLOSEBRACE"
  , Rt = "CLOSEBRACKET"
  , Pt = "CLOSEANGLEBRACKET"
  , ft = "CLOSEPAREN"
  , Un = "AMPERSAND"
  , Gn = "APOSTROPHE"
  , Zn = "ASTERISK"
  , _e = "AT"
  , Yn = "BACKSLASH"
  , Qn = "BACKTICK"
  , Xn = "CARET"
  , Ke = "COLON"
  , ji = "COMMA"
  , er = "DOLLAR"
  , Me = "DOT"
  , tr = "EQUALS"
  , Wi = "EXCLAMATION"
  , Ce = "HYPHEN"
  , nr = "PERCENT"
  , rr = "PIPE"
  , ir = "PLUS"
  , sr = "POUND"
  , or = "QUERY"
  , Ki = "QUOTE"
  , Ji = "SEMI"
  , we = "SLASH"
  , an = "TILDE"
  , lr = "UNDERSCORE"
  , jl = "EMOJI"
  , ar = "SYM";
var Wl = Object.freeze({
    __proto__: null,
    WORD: Re,
    UWORD: xi,
    LOCALHOST: gn,
    TLD: Mi,
    UTLD: Ci,
    SCHEME: In,
    SLASH_SCHEME: At,
    NUM: Vi,
    WS: _l,
    NL: _i,
    OPENBRACE: It,
    OPENBRACKET: sn,
    OPENANGLEBRACKET: on,
    OPENPAREN: ln,
    CLOSEBRACE: dt,
    CLOSEBRACKET: Rt,
    CLOSEANGLEBRACKET: Pt,
    CLOSEPAREN: ft,
    AMPERSAND: Un,
    APOSTROPHE: Gn,
    ASTERISK: Zn,
    AT: _e,
    BACKSLASH: Yn,
    BACKTICK: Qn,
    CARET: Xn,
    COLON: Ke,
    COMMA: ji,
    DOLLAR: er,
    DOT: Me,
    EQUALS: tr,
    EXCLAMATION: Wi,
    HYPHEN: Ce,
    PERCENT: nr,
    PIPE: rr,
    PLUS: ir,
    POUND: sr,
    QUERY: or,
    QUOTE: Ki,
    SEMI: Ji,
    SLASH: we,
    TILDE: an,
    UNDERSCORE: lr,
    EMOJI: jl,
    SYM: ar
});
const Ot = /[a-z]/
  , Kr = /\p{L}/u
  , Jr = /\p{Emoji}/u
  , qr = /\d/
  , ro = /\s/
  , io = `
`
  , Bp = "️"
  , zp = "‍";
let En = null
  , vn = null;
function Fp(n) {
    n === void 0 && (n = []);
    const e = {};
    ne.groups = e;
    const t = new ne;
    En == null && (En = so(Np)),
    vn == null && (vn = so(Dp)),
    b(t, "'", Gn),
    b(t, "{", It),
    b(t, "[", sn),
    b(t, "<", on),
    b(t, "(", ln),
    b(t, "}", dt),
    b(t, "]", Rt),
    b(t, ">", Pt),
    b(t, ")", ft),
    b(t, "&", Un),
    b(t, "*", Zn),
    b(t, "@", _e),
    b(t, "`", Qn),
    b(t, "^", Xn),
    b(t, ":", Ke),
    b(t, ",", ji),
    b(t, "$", er),
    b(t, ".", Me),
    b(t, "=", tr),
    b(t, "!", Wi),
    b(t, "-", Ce),
    b(t, "%", nr),
    b(t, "|", rr),
    b(t, "+", ir),
    b(t, "#", sr),
    b(t, "?", or),
    b(t, '"', Ki),
    b(t, "/", we),
    b(t, ";", Ji),
    b(t, "~", an),
    b(t, "_", lr),
    b(t, "\\", Yn);
    const r = ce(t, qr, Vi, {
        [yi]: !0
    });
    ce(r, qr, r);
    const i = ce(t, Ot, Re, {
        [ki]: !0
    });
    ce(i, Ot, i);
    const s = ce(t, Kr, xi, {
        [bi]: !0
    });
    ce(s, Ot),
    ce(s, Kr, s);
    const o = ce(t, ro, _l, {
        [to]: !0
    });
    b(t, io, _i, {
        [to]: !0
    }),
    b(o, io),
    ce(o, ro, o);
    const l = ce(t, Jr, jl, {
        [Vl]: !0
    });
    ce(l, Jr, l),
    b(l, Bp, l);
    const a = b(l, zp);
    ce(a, Jr, l);
    const c = [[Ot, i]]
      , u = [[Ot, null], [Kr, s]];
    for (let d = 0; d < En.length; d++)
        $e(t, En[d], Mi, Re, c);
    for (let d = 0; d < vn.length; d++)
        $e(t, vn[d], Ci, xi, u);
    gt(Mi, {
        tld: !0,
        ascii: !0
    }, e),
    gt(Ci, {
        utld: !0,
        alpha: !0
    }, e),
    $e(t, "file", In, Re, c),
    $e(t, "mailto", In, Re, c),
    $e(t, "http", At, Re, c),
    $e(t, "https", At, Re, c),
    $e(t, "ftp", At, Re, c),
    $e(t, "ftps", At, Re, c),
    gt(In, {
        scheme: !0,
        ascii: !0
    }, e),
    gt(At, {
        slashscheme: !0,
        ascii: !0
    }, e),
    n = n.sort((d,f)=>d[0] > f[0] ? 1 : -1);
    for (let d = 0; d < n.length; d++) {
        const f = n[d][0]
          , p = n[d][1] ? {
            [Ip]: !0
        } : {
            [Rp]: !0
        };
        f.indexOf("-") >= 0 ? p[Si] = !0 : Ot.test(f) ? qr.test(f) ? p[Dn] = !0 : p[ki] = !0 : p[yi] = !0,
        no(t, f, f, p)
    }
    return no(t, "localhost", gn, {
        ascii: !0
    }),
    t.jd = new ne(ar),
    {
        start: t,
        tokens: Jt({
            groups: e
        }, Wl)
    }
}
function Hp(n, e) {
    const t = $p(e.replace(/[A-Z]/g, l=>l.toLowerCase()))
      , r = t.length
      , i = [];
    let s = 0
      , o = 0;
    for (; o < r; ) {
        let l = n
          , a = null
          , c = 0
          , u = null
          , d = -1
          , f = -1;
        for (; o < r && (a = l.go(t[o])); )
            l = a,
            l.accepts() ? (d = 0,
            f = 0,
            u = l) : d >= 0 && (d += t[o].length,
            f++),
            c += t[o].length,
            s += t[o].length,
            o++;
        s -= d,
        o -= f,
        c -= d,
        i.push({
            t: u.t,
            v: e.slice(s - c, s),
            s: s - c,
            e: s
        })
    }
    return i
}
function $p(n) {
    const e = []
      , t = n.length;
    let r = 0;
    for (; r < t; ) {
        let i = n.charCodeAt(r), s, o = i < 55296 || i > 56319 || r + 1 === t || (s = n.charCodeAt(r + 1)) < 56320 || s > 57343 ? n[r] : n.slice(r, r + 2);
        e.push(o),
        r += o.length
    }
    return e
}
function $e(n, e, t, r, i) {
    let s;
    const o = e.length;
    for (let l = 0; l < o - 1; l++) {
        const a = e[l];
        n.j[a] ? s = n.j[a] : (s = new ne(r),
        s.jr = i.slice(),
        n.j[a] = s),
        n = s
    }
    return s = new ne(t),
    s.jr = i.slice(),
    n.j[e[o - 1]] = s,
    s
}
function so(n) {
    const e = []
      , t = [];
    let r = 0
      , i = "0123456789";
    for (; r < n.length; ) {
        let s = 0;
        for (; i.indexOf(n[r + s]) >= 0; )
            s++;
        if (s > 0) {
            e.push(t.join(""));
            for (let o = parseInt(n.substring(r, r + s), 10); o > 0; o--)
                t.pop();
            r += s
        } else
            t.push(n[r]),
            r++
    }
    return e
}
const yn = {
    defaultProtocol: "http",
    events: null,
    format: oo,
    formatHref: oo,
    nl2br: !1,
    tagName: "a",
    target: null,
    rel: null,
    validate: !0,
    truncate: 1 / 0,
    className: null,
    attributes: null,
    ignoreTags: [],
    render: null
};
function qi(n, e) {
    e === void 0 && (e = null);
    let t = Jt({}, yn);
    n && (t = Jt(t, n instanceof qi ? n.o : n));
    const r = t.ignoreTags
      , i = [];
    for (let s = 0; s < r.length; s++)
        i.push(r[s].toUpperCase());
    this.o = t,
    e && (this.defaultRender = e),
    this.ignoreTags = i
}
qi.prototype = {
    o: yn,
    ignoreTags: [],
    defaultRender(n) {
        return n
    },
    check(n) {
        return this.get("validate", n.toString(), n)
    },
    get(n, e, t) {
        const r = e != null;
        let i = this.o[n];
        return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : yn[n],
        typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)),
        i)
    },
    getObj(n, e, t) {
        let r = this.o[n];
        return typeof r == "function" && e != null && (r = r(e, t.t, t)),
        r
    },
    render(n) {
        const e = n.render(this);
        return (this.get("render", null, n) || this.defaultRender)(e, n.t, n)
    }
};
function oo(n) {
    return n
}
function Kl(n, e) {
    this.t = "token",
    this.v = n,
    this.tk = e
}
Kl.prototype = {
    isLink: !1,
    toString() {
        return this.v
    },
    toHref(n) {
        return this.toString()
    },
    toFormattedString(n) {
        const e = this.toString()
          , t = n.get("truncate", e, this)
          , r = n.get("format", e, this);
        return t && r.length > t ? r.substring(0, t) + "…" : r
    },
    toFormattedHref(n) {
        return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this)
    },
    startIndex() {
        return this.tk[0].s
    },
    endIndex() {
        return this.tk[this.tk.length - 1].e
    },
    toObject(n) {
        return n === void 0 && (n = yn.defaultProtocol),
        {
            type: this.t,
            value: this.toString(),
            isLink: this.isLink,
            href: this.toHref(n),
            start: this.startIndex(),
            end: this.endIndex()
        }
    },
    toFormattedObject(n) {
        return {
            type: this.t,
            value: this.toFormattedString(n),
            isLink: this.isLink,
            href: this.toFormattedHref(n),
            start: this.startIndex(),
            end: this.endIndex()
        }
    },
    validate(n) {
        return n.get("validate", this.toString(), this)
    },
    render(n) {
        const e = this
          , t = this.toHref(n.get("defaultProtocol"))
          , r = n.get("formatHref", t, this)
          , i = n.get("tagName", t, e)
          , s = this.toFormattedString(n)
          , o = {}
          , l = n.get("className", t, e)
          , a = n.get("target", t, e)
          , c = n.get("rel", t, e)
          , u = n.getObj("attributes", t, e)
          , d = n.getObj("events", t, e);
        return o.href = r,
        l && (o.class = l),
        a && (o.target = a),
        c && (o.rel = c),
        u && Jt(o, u),
        {
            tagName: i,
            attributes: o,
            content: s,
            eventListeners: d
        }
    }
};
function Mr(n, e) {
    class t extends Kl {
        constructor(i, s) {
            super(i, s),
            this.t = n
        }
    }
    for (const r in e)
        t.prototype[r] = e[r];
    return t.t = n,
    t
}
const lo = Mr("email", {
    isLink: !0,
    toHref() {
        return "mailto:" + this.toString()
    }
})
  , ao = Mr("text")
  , Vp = Mr("nl")
  , at = Mr("url", {
    isLink: !0,
    toHref(n) {
        return n === void 0 && (n = yn.defaultProtocol),
        this.hasProtocol() ? this.v : `${n}://${this.v}`
    },
    hasProtocol() {
        const n = this.tk;
        return n.length >= 2 && n[0].t !== gn && n[1].t === Ke
    }
})
  , _ = n=>new ne(n);
function _p(n) {
    let {groups: e} = n;
    const t = e.domain.concat([Un, Zn, _e, Yn, Qn, Xn, er, tr, Ce, Vi, nr, rr, ir, sr, we, ar, an, lr])
      , r = [Gn, Pt, dt, Rt, ft, Ke, ji, Me, Wi, on, It, sn, ln, or, Ki, Ji]
      , i = [Un, Gn, Zn, Yn, Qn, Xn, dt, er, tr, Ce, It, nr, rr, ir, sr, or, we, ar, an, lr]
      , s = _()
      , o = b(s, an);
    C(o, i, o),
    C(o, e.domain, o);
    const l = _()
      , a = _()
      , c = _();
    C(s, e.domain, l),
    C(s, e.scheme, a),
    C(s, e.slashscheme, c),
    C(l, i, o),
    C(l, e.domain, l);
    const u = b(l, _e);
    b(o, _e, u),
    b(a, _e, u),
    b(c, _e, u);
    const d = b(o, Me);
    C(d, i, o),
    C(d, e.domain, o);
    const f = _();
    C(u, e.domain, f),
    C(f, e.domain, f);
    const h = b(f, Me);
    C(h, e.domain, f);
    const p = _(lo);
    C(h, e.tld, p),
    C(h, e.utld, p),
    b(u, gn, p);
    const m = b(f, Ce);
    C(m, e.domain, f),
    C(p, e.domain, f),
    b(p, Me, h),
    b(p, Ce, m);
    const g = b(p, Ke);
    C(g, e.numeric, lo);
    const y = b(l, Ce)
      , x = b(l, Me);
    C(y, e.domain, l),
    C(x, i, o),
    C(x, e.domain, l);
    const w = _(at);
    C(x, e.tld, w),
    C(x, e.utld, w),
    C(w, e.domain, l),
    C(w, i, o),
    b(w, Me, x),
    b(w, Ce, y),
    b(w, _e, u);
    const B = b(w, Ke)
      , D = _(at);
    C(B, e.numeric, D);
    const T = _(at)
      , L = _();
    C(T, t, T),
    C(T, r, L),
    C(L, t, T),
    C(L, r, L),
    b(w, we, T),
    b(D, we, T);
    const O = b(a, Ke)
      , se = b(c, Ke)
      , De = b(se, we)
      , ze = b(De, we);
    C(a, e.domain, l),
    b(a, Me, x),
    b(a, Ce, y),
    C(c, e.domain, l),
    b(c, Me, x),
    b(c, Ce, y),
    C(O, e.domain, T),
    b(O, we, T),
    C(ze, e.domain, T),
    C(ze, t, T),
    b(ze, we, T);
    const Fe = b(T, It)
      , rt = b(T, sn)
      , it = b(T, on)
      , st = b(T, ln);
    b(L, It, Fe),
    b(L, sn, rt),
    b(L, on, it),
    b(L, ln, st),
    b(Fe, dt, T),
    b(rt, Rt, T),
    b(it, Pt, T),
    b(st, ft, T),
    b(Fe, dt, T);
    const Ie = _(at)
      , $ = _(at)
      , ot = _(at)
      , lt = _(at);
    C(Fe, t, Ie),
    C(rt, t, $),
    C(it, t, ot),
    C(st, t, lt);
    const Ut = _()
      , Sn = _()
      , xn = _()
      , Mn = _();
    return C(Fe, r),
    C(rt, r),
    C(it, r),
    C(st, r),
    C(Ie, t, Ie),
    C($, t, $),
    C(ot, t, ot),
    C(lt, t, lt),
    C(Ie, r, Ie),
    C($, r, $),
    C(ot, r, ot),
    C(lt, r, lt),
    C(Ut, t, Ut),
    C(Sn, t, $),
    C(xn, t, ot),
    C(Mn, t, lt),
    C(Ut, r, Ut),
    C(Sn, r, Sn),
    C(xn, r, xn),
    C(Mn, r, Mn),
    b($, Rt, T),
    b(ot, Pt, T),
    b(lt, ft, T),
    b(Ie, dt, T),
    b(Sn, Rt, T),
    b(xn, Pt, T),
    b(Mn, ft, T),
    b(Ut, ft, T),
    b(s, gn, w),
    b(s, _i, Vp),
    {
        start: s,
        tokens: Wl
    }
}
function jp(n, e, t) {
    let r = t.length
      , i = 0
      , s = []
      , o = [];
    for (; i < r; ) {
        let l = n
          , a = null
          , c = null
          , u = 0
          , d = null
          , f = -1;
        for (; i < r && !(a = l.go(t[i].t)); )
            o.push(t[i++]);
        for (; i < r && (c = a || l.go(t[i].t)); )
            a = null,
            l = c,
            l.accepts() ? (f = 0,
            d = l) : f >= 0 && f++,
            i++,
            u++;
        if (f < 0)
            i -= u,
            i < r && (o.push(t[i]),
            i++);
        else {
            o.length > 0 && (s.push(Ur(ao, e, o)),
            o = []),
            i -= f,
            u -= f;
            const h = d.t
              , p = t.slice(i - u, i);
            s.push(Ur(h, e, p))
        }
    }
    return o.length > 0 && s.push(Ur(ao, e, o)),
    s
}
function Ur(n, e, t) {
    const r = t[0].s
      , i = t[t.length - 1].e
      , s = e.slice(r, i);
    return new n(s,t)
}
const Wp = typeof console < "u" && console && console.warn || (()=>{}
)
  , Kp = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time."
  , F = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: !1
};
function Jp() {
    ne.groups = {},
    F.scanner = null,
    F.parser = null,
    F.tokenQueue = [],
    F.pluginQueue = [],
    F.customSchemes = [],
    F.initialized = !1
}
function co(n, e) {
    if (e === void 0 && (e = !1),
    F.initialized && Wp(`linkifyjs: already initialized - will not register custom scheme "${n}" ${Kp}`),
    !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
        throw new Error(`linkifyjs: incorrect scheme format.
 1. Must only contain digits, lowercase ASCII letters or "-"
 2. Cannot start or end with "-"
 3. "-" cannot repeat`);
    F.customSchemes.push([n, e])
}
function qp() {
    F.scanner = Fp(F.customSchemes);
    for (let n = 0; n < F.tokenQueue.length; n++)
        F.tokenQueue[n][1]({
            scanner: F.scanner
        });
    F.parser = _p(F.scanner.tokens);
    for (let n = 0; n < F.pluginQueue.length; n++)
        F.pluginQueue[n][1]({
            scanner: F.scanner,
            parser: F.parser
        });
    F.initialized = !0
}
function Jl(n) {
    return F.initialized || qp(),
    jp(F.parser.start, n, Hp(F.scanner.start, n))
}
function Ui(n, e, t) {
    if (e === void 0 && (e = null),
    t === void 0 && (t = null),
    e && typeof e == "object") {
        if (t)
            throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
        t = e,
        e = null
    }
    const r = new qi(t)
      , i = Jl(n)
      , s = [];
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        l.isLink && (!e || l.t === e) && s.push(l.toFormattedObject(r))
    }
    return s
}
function uo(n, e) {
    e === void 0 && (e = null);
    const t = Jl(n);
    return t.length === 1 && t[0].isLink && (!e || t[0].t === e)
}
function Up(n) {
    return new ae({
        key: new xe("autolink"),
        appendTransaction: (e,t,r)=>{
            const i = e.some(u=>u.docChanged) && !t.doc.eq(r.doc)
              , s = e.some(u=>u.getMeta("preventAutolink"));
            if (!i || s)
                return;
            const {tr: o} = r
              , l = Hh(t.doc, [...e])
              , {mapping: a} = l;
            if (Uh(l).forEach(({oldRange: u, newRange: d})=>{
                qn(u.from, u.to, t.doc).filter(m=>m.mark.type === n.type).forEach(m=>{
                    const g = a.map(m.from)
                      , y = a.map(m.to)
                      , x = qn(g, y, r.doc).filter(O=>O.mark.type === n.type);
                    if (!x.length)
                        return;
                    const w = x[0]
                      , B = t.doc.textBetween(m.from, m.to, void 0, " ")
                      , D = r.doc.textBetween(w.from, w.to, void 0, " ")
                      , T = uo(B)
                      , L = uo(D);
                    T && !L && o.removeMark(w.from, w.to, n.type)
                }
                );
                const f = Vh(r.doc, d, m=>m.isTextblock);
                let h, p;
                if (f.length > 1 ? (h = f[0],
                p = r.doc.textBetween(h.pos, h.pos + h.node.nodeSize, void 0, " ")) : f.length && r.doc.textBetween(d.from, d.to, " ", " ").endsWith(" ") && (h = f[0],
                p = r.doc.textBetween(h.pos, d.to, void 0, " ")),
                h && p) {
                    const m = p.split(" ").filter(x=>x !== "");
                    if (m.length <= 0)
                        return !1;
                    const g = m[m.length - 1]
                      , y = h.pos + p.lastIndexOf(g);
                    if (!g)
                        return !1;
                    Ui(g).filter(x=>x.isLink).filter(x=>n.validate ? n.validate(x.value) : !0).map(x=>({
                        ...x,
                        from: y + x.start + 1,
                        to: y + x.end + 1
                    })).forEach(x=>{
                        o.addMark(x.from, x.to, n.type.create({
                            href: x.href
                        }))
                    }
                    )
                }
            }
            ),
            !!o.steps.length)
                return o
        }
    })
}
function Gp(n) {
    return new ae({
        key: new xe("handleClickLink"),
        props: {
            handleClick: (e,t,r)=>{
                var i, s, o;
                if (r.button !== 0)
                    return !1;
                const l = $l(e.state, n.type.name)
                  , a = (i = r.target) === null || i === void 0 ? void 0 : i.closest("a")
                  , c = (s = a == null ? void 0 : a.href) !== null && s !== void 0 ? s : l.href
                  , u = (o = a == null ? void 0 : a.target) !== null && o !== void 0 ? o : l.target;
                return a && c ? (window.open(c, u),
                !0) : !1
            }
        }
    })
}
function Zp(n) {
    return new ae({
        key: new xe("handlePasteLink"),
        props: {
            handlePaste: (e,t,r)=>{
                const {state: i} = e
                  , {selection: s} = i
                  , {empty: o} = s;
                if (o)
                    return !1;
                let l = "";
                r.content.forEach(c=>{
                    l += c.textContent
                }
                );
                const a = Ui(l).find(c=>c.isLink && c.value === l);
                return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
                    href: a.href
                }),
                !0)
            }
        }
    })
}
const Yp = pe.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    onCreate() {
        this.options.protocols.forEach(n=>{
            if (typeof n == "string") {
                co(n);
                return
            }
            co(n.scheme, n.optionalSlashes)
        }
        )
    },
    onDestroy() {
        Jp()
    },
    inclusive() {
        return this.options.autolink
    },
    addOptions() {
        return {
            openOnClick: !0,
            linkOnPaste: !0,
            autolink: !0,
            protocols: [],
            HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: null
            },
            validate: void 0
        }
    },
    addAttributes() {
        return {
            href: {
                default: null
            },
            target: {
                default: this.options.HTMLAttributes.target
            },
            class: {
                default: this.options.HTMLAttributes.class
            }
        }
    },
    parseHTML() {
        return [{
            tag: 'a[href]:not([href *= "javascript:" i])'
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["a", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setLink: n=>({chain: e})=>e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
            toggleLink: n=>({chain: e})=>e().toggleMark(this.name, n, {
                extendEmptyMarkRange: !0
            }).setMeta("preventAutolink", !0).run(),
            unsetLink: ()=>({chain: n})=>n().unsetMark(this.name, {
                extendEmptyMarkRange: !0
            }).setMeta("preventAutolink", !0).run()
        }
    },
    addPasteRules() {
        return [Kt({
            find: n=>Ui(n).filter(e=>this.options.validate ? this.options.validate(e.value) : !0).filter(e=>e.isLink).map(e=>({
                text: e.value,
                index: e.start,
                data: e
            })),
            type: this.type,
            getAttributes: n=>{
                var e;
                return {
                    href: (e = n.data) === null || e === void 0 ? void 0 : e.href
                }
            }
        })]
    },
    addProseMirrorPlugins() {
        const n = [];
        return this.options.autolink && n.push(Up({
            type: this.type,
            validate: this.options.validate
        })),
        this.options.openOnClick && n.push(Gp({
            type: this.type
        })),
        this.options.linkOnPaste && n.push(Zp({
            editor: this.editor,
            type: this.type
        })),
        n
    }
})
  , Qp = pe.create({
    name: "underline",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "u"
        }, {
            style: "text-decoration",
            consuming: !1,
            getAttrs: n=>n.includes("underline") ? {} : !1
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["u", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setUnderline: ()=>({commands: n})=>n.setMark(this.name),
            toggleUnderline: ()=>({commands: n})=>n.toggleMark(this.name),
            unsetUnderline: ()=>({commands: n})=>n.unsetMark(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-u": ()=>this.editor.commands.toggleUnderline(),
            "Mod-U": ()=>this.editor.commands.toggleUnderline()
        }
    }
})
  , Xp = pe.create({
    name: "textStyle",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "span",
            getAttrs: n=>n.hasAttribute("style") ? {} : !1
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["span", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            removeEmptyTextStyle: ()=>({state: n, commands: e})=>{
                const t = bn(n, this.type);
                return Object.entries(t).some(([,i])=>!!i) ? !0 : e.unsetMark(this.name)
            }
        }
    }
})
  , em = Se.create({
    name: "color",
    addOptions() {
        return {
            types: ["textStyle"]
        }
    },
    addGlobalAttributes() {
        return [{
            types: this.options.types,
            attributes: {
                color: {
                    default: null,
                    parseHTML: n=>{
                        var e;
                        return (e = n.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "")
                    }
                    ,
                    renderHTML: n=>n.color ? {
                        style: `color: ${n.color}`
                    } : {}
                }
            }
        }]
    },
    addCommands() {
        return {
            setColor: n=>({chain: e})=>e().setMark("textStyle", {
                color: n
            }).run(),
            unsetColor: ()=>({chain: n})=>n().setMark("textStyle", {
                color: null
            }).removeEmptyTextStyle().run()
        }
    }
})
  , tm = G.create({
    name: "doc",
    topNode: !0,
    content: "block+"
})
  , nm = G.create({
    name: "heading",
    addOptions() {
        return {
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {}
        }
    },
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes() {
        return {
            level: {
                default: 1,
                rendered: !1
            }
        }
    },
    parseHTML() {
        return this.options.levels.map(n=>({
            tag: `h${n}`,
            attrs: {
                level: n
            }
        }))
    },
    renderHTML({node: n, HTMLAttributes: e}) {
        return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, H(this.options.HTMLAttributes, e), 0]
    },
    addCommands() {
        return {
            setHeading: n=>({commands: e})=>this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
            toggleHeading: n=>({commands: e})=>this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
        }
    },
    addKeyboardShortcuts() {
        return this.options.levels.reduce((n,e)=>({
            ...n,
            [`Mod-Alt-${e}`]: ()=>this.editor.commands.toggleHeading({
                level: e
            })
        }), {})
    },
    addInputRules() {
        return this.options.levels.map(n=>gi({
            find: new RegExp(`^(#{1,${n}})\\s$`),
            type: this.type,
            getAttributes: {
                level: n
            }
        }))
    }
})
  , rm = G.create({
    name: "text",
    group: "inline"
})
  , im = G.create({
    name: "paragraph",
    priority: 1e3,
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{
            tag: "p"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["p", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setParagraph: ()=>({commands: n})=>n.setNode(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Alt-0": ()=>this.editor.commands.setParagraph()
        }
    }
})
  , sm = /^\s*>\s$/
  , om = G.create({
    name: "blockquote",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    content: "block+",
    group: "block",
    defining: !0,
    parseHTML() {
        return [{
            tag: "blockquote"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["blockquote", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setBlockquote: ()=>({commands: n})=>n.wrapIn(this.name),
            toggleBlockquote: ()=>({commands: n})=>n.toggleWrap(this.name),
            unsetBlockquote: ()=>({commands: n})=>n.lift(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Shift-b": ()=>this.editor.commands.toggleBlockquote()
        }
    },
    addInputRules() {
        return [mn({
            find: sm,
            type: this.type
        })]
    }
})
  , lm = G.create({
    name: "listItem",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML() {
        return [{
            tag: "li"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["li", H(this.options.HTMLAttributes, n), 0]
    },
    addKeyboardShortcuts() {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        }
    }
})
  , fo = pe.create({
    name: "textStyle",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "span",
            getAttrs: n=>n.hasAttribute("style") ? {} : !1
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["span", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            removeEmptyTextStyle: ()=>({state: n, commands: e})=>{
                const t = bn(n, this.type);
                return Object.entries(t).some(([,i])=>!!i) ? !0 : e.unsetMark(this.name)
            }
        }
    }
})
  , ho = /^\s*([-+*])\s$/
  , am = G.create({
    name: "bulletList",
    addOptions() {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        }
    },
    group: "block list",
    content() {
        return `${this.options.itemTypeName}+`
    },
    parseHTML() {
        return [{
            tag: "ul"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["ul", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            toggleBulletList: ()=>({commands: n, chain: e})=>this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(lm.name, this.editor.getAttributes(fo.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Shift-8": ()=>this.editor.commands.toggleBulletList()
        }
    },
    addInputRules() {
        let n = mn({
            find: ho,
            type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (n = mn({
            find: ho,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: ()=>this.editor.getAttributes(fo.name),
            editor: this.editor
        })),
        [n]
    }
})
  , cm = G.create({
    name: "listItem",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML() {
        return [{
            tag: "li"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["li", H(this.options.HTMLAttributes, n), 0]
    },
    addKeyboardShortcuts() {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        }
    }
})
  , po = pe.create({
    name: "textStyle",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "span",
            getAttrs: n=>n.hasAttribute("style") ? {} : !1
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["span", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            removeEmptyTextStyle: ()=>({state: n, commands: e})=>{
                const t = bn(n, this.type);
                return Object.entries(t).some(([,i])=>!!i) ? !0 : e.unsetMark(this.name)
            }
        }
    }
})
  , mo = /^(\d+)\.\s$/
  , um = G.create({
    name: "orderedList",
    addOptions() {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        }
    },
    group: "block list",
    content() {
        return `${this.options.itemTypeName}+`
    },
    addAttributes() {
        return {
            start: {
                default: 1,
                parseHTML: n=>n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
            }
        }
    },
    parseHTML() {
        return [{
            tag: "ol"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        const {start: e, ...t} = n;
        return e === 1 ? ["ol", H(this.options.HTMLAttributes, t), 0] : ["ol", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            toggleOrderedList: ()=>({commands: n, chain: e})=>this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(cm.name, this.editor.getAttributes(po.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Shift-7": ()=>this.editor.commands.toggleOrderedList()
        }
    },
    addInputRules() {
        let n = mn({
            find: mo,
            type: this.type,
            getAttributes: e=>({
                start: +e[1]
            }),
            joinPredicate: (e,t)=>t.childCount + t.attrs.start === +e[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (n = mn({
            find: mo,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: e=>({
                start: +e[1],
                ...this.editor.getAttributes(po.name)
            }),
            joinPredicate: (e,t)=>t.childCount + t.attrs.start === +e[1],
            editor: this.editor
        })),
        [n]
    }
})
  , dm = G.create({
    name: "listItem",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML() {
        return [{
            tag: "li"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["li", H(this.options.HTMLAttributes, n), 0]
    },
    addKeyboardShortcuts() {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        }
    }
})
  , fm = /^```([a-z]+)?[\s\n]$/
  , hm = /^~~~([a-z]+)?[\s\n]$/
  , pm = G.create({
    name: "codeBlock",
    addOptions() {
        return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            HTMLAttributes: {}
        }
    },
    content: "text*",
    marks: "",
    group: "block",
    code: !0,
    defining: !0,
    addAttributes() {
        return {
            language: {
                default: null,
                parseHTML: n=>{
                    var e;
                    const {languageClassPrefix: t} = this.options
                      , s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter(o=>o.startsWith(t)).map(o=>o.replace(t, ""))[0];
                    return s || null
                }
                ,
                rendered: !1
            }
        }
    },
    parseHTML() {
        return [{
            tag: "pre",
            preserveWhitespace: "full"
        }]
    },
    renderHTML({node: n, HTMLAttributes: e}) {
        return ["pre", H(this.options.HTMLAttributes, e), ["code", {
            class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        }, 0]]
    },
    addCommands() {
        return {
            setCodeBlock: n=>({commands: e})=>e.setNode(this.name, n),
            toggleCodeBlock: n=>({commands: e})=>e.toggleNode(this.name, "paragraph", n)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Alt-c": ()=>this.editor.commands.toggleCodeBlock(),
            Backspace: ()=>{
                const {empty: n, $anchor: e} = this.editor.state.selection
                  , t = e.pos === 1;
                return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1
            }
            ,
            Enter: ({editor: n})=>{
                if (!this.options.exitOnTripleEnter)
                    return !1;
                const {state: e} = n
                  , {selection: t} = e
                  , {$from: r, empty: i} = t;
                if (!i || r.parent.type !== this.type)
                    return !1;
                const s = r.parentOffset === r.parent.nodeSize - 2
                  , o = r.parent.textContent.endsWith(`

`);
                return !s || !o ? !1 : n.chain().command(({tr: l})=>(l.delete(r.pos - 2, r.pos),
                !0)).exitCode().run()
            }
            ,
            ArrowDown: ({editor: n})=>{
                if (!this.options.exitOnArrowDown)
                    return !1;
                const {state: e} = n
                  , {selection: t, doc: r} = e
                  , {$from: i, empty: s} = t;
                if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
                    return !1;
                const l = i.after();
                return l === void 0 || r.nodeAt(l) ? !1 : n.commands.exitCode()
            }
        }
    },
    addInputRules() {
        return [gi({
            find: fm,
            type: this.type,
            getAttributes: n=>({
                language: n[1]
            })
        }), gi({
            find: hm,
            type: this.type,
            getAttributes: n=>({
                language: n[1]
            })
        })]
    },
    addProseMirrorPlugins() {
        return [new ae({
            key: new xe("codeBlockVSCodeHandler"),
            props: {
                handlePaste: (n,e)=>{
                    if (!e.clipboardData || this.editor.isActive(this.type.name))
                        return !1;
                    const t = e.clipboardData.getData("text/plain")
                      , r = e.clipboardData.getData("vscode-editor-data")
                      , i = r ? JSON.parse(r) : void 0
                      , s = i == null ? void 0 : i.mode;
                    if (!t || !s)
                        return !1;
                    const {tr: o} = n.state;
                    return o.replaceSelectionWith(this.type.create({
                        language: s
                    })),
                    o.setSelection(A.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))),
                    o.insertText(t.replace(/\r\n?/g, `
`)),
                    o.setMeta("paste", !0),
                    n.dispatch(o),
                    !0
                }
            }
        })]
    }
})
  , mm = G.create({
    name: "hardBreak",
    addOptions() {
        return {
            keepMarks: !0,
            HTMLAttributes: {}
        }
    },
    inline: !0,
    group: "inline",
    selectable: !1,
    parseHTML() {
        return [{
            tag: "br"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["br", H(this.options.HTMLAttributes, n)]
    },
    renderText() {
        return `
`
    },
    addCommands() {
        return {
            setHardBreak: ()=>({commands: n, chain: e, state: t, editor: r})=>n.first([()=>n.exitCode(), ()=>n.command(()=>{
                const {selection: i, storedMarks: s} = t;
                if (i.$from.parent.type.spec.isolating)
                    return !1;
                const {keepMarks: o} = this.options
                  , {splittableMarks: l} = r.extensionManager
                  , a = s || i.$to.parentOffset && i.$from.marks();
                return e().insertContent({
                    type: this.name
                }).command(({tr: c, dispatch: u})=>{
                    if (u && a && o) {
                        const d = a.filter(f=>l.includes(f.type.name));
                        c.ensureMarks(d)
                    }
                    return !0
                }
                ).run()
            }
            )])
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Enter": ()=>this.editor.commands.setHardBreak(),
            "Shift-Enter": ()=>this.editor.commands.setHardBreak()
        }
    }
})
  , gm = G.create({
    name: "horizontalRule",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    group: "block",
    parseHTML() {
        return [{
            tag: "hr"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["hr", H(this.options.HTMLAttributes, n)]
    },
    addCommands() {
        return {
            setHorizontalRule: ()=>({chain: n})=>n().insertContent({
                type: this.name
            }).command(({tr: e, dispatch: t})=>{
                var r;
                if (t) {
                    const {$to: i} = e.selection
                      , s = i.end();
                    if (i.nodeAfter)
                        e.setSelection(A.create(e.doc, i.pos));
                    else {
                        const o = (r = i.parent.type.contentMatch.defaultType) === null || r === void 0 ? void 0 : r.create();
                        o && (e.insert(s, o),
                        e.setSelection(A.create(e.doc, s)))
                    }
                    e.scrollIntoView()
                }
                return !0
            }
            ).run()
        }
    },
    addInputRules() {
        return [Op({
            find: /^(?:---|—-|___\s|\*\*\*\s)$/,
            type: this.type
        })]
    }
})
  , ym = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/
  , km = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g
  , bm = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/
  , Sm = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g
  , xm = pe.create({
    name: "bold",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "strong"
        }, {
            tag: "b",
            getAttrs: n=>n.style.fontWeight !== "normal" && null
        }, {
            style: "font-weight",
            getAttrs: n=>/^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["strong", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setBold: ()=>({commands: n})=>n.setMark(this.name),
            toggleBold: ()=>({commands: n})=>n.toggleMark(this.name),
            unsetBold: ()=>({commands: n})=>n.unsetMark(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-b": ()=>this.editor.commands.toggleBold(),
            "Mod-B": ()=>this.editor.commands.toggleBold()
        }
    },
    addInputRules() {
        return [pn({
            find: ym,
            type: this.type
        }), pn({
            find: bm,
            type: this.type
        })]
    },
    addPasteRules() {
        return [Kt({
            find: km,
            type: this.type
        }), Kt({
            find: Sm,
            type: this.type
        })]
    }
})
  , Mm = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/
  , Cm = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g
  , wm = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/
  , Tm = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g
  , Om = pe.create({
    name: "italic",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "em"
        }, {
            tag: "i",
            getAttrs: n=>n.style.fontStyle !== "normal" && null
        }, {
            style: "font-style=italic"
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["em", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setItalic: ()=>({commands: n})=>n.setMark(this.name),
            toggleItalic: ()=>({commands: n})=>n.toggleMark(this.name),
            unsetItalic: ()=>({commands: n})=>n.unsetMark(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-i": ()=>this.editor.commands.toggleItalic(),
            "Mod-I": ()=>this.editor.commands.toggleItalic()
        }
    },
    addInputRules() {
        return [pn({
            find: Mm,
            type: this.type
        }), pn({
            find: wm,
            type: this.type
        })]
    },
    addPasteRules() {
        return [Kt({
            find: Cm,
            type: this.type
        }), Kt({
            find: Tm,
            type: this.type
        })]
    }
})
  , Em = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/
  , vm = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g
  , Am = pe.create({
    name: "strike",
    addOptions() {
        return {
            HTMLAttributes: {}
        }
    },
    parseHTML() {
        return [{
            tag: "s"
        }, {
            tag: "del"
        }, {
            tag: "strike"
        }, {
            style: "text-decoration",
            consuming: !1,
            getAttrs: n=>n.includes("line-through") ? {} : !1
        }]
    },
    renderHTML({HTMLAttributes: n}) {
        return ["s", H(this.options.HTMLAttributes, n), 0]
    },
    addCommands() {
        return {
            setStrike: ()=>({commands: n})=>n.setMark(this.name),
            toggleStrike: ()=>({commands: n})=>n.toggleMark(this.name),
            unsetStrike: ()=>({commands: n})=>n.unsetMark(this.name)
        }
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Shift-x": ()=>this.editor.commands.toggleStrike()
        }
    },
    addInputRules() {
        return [pn({
            find: Em,
            type: this.type
        })]
    },
    addPasteRules() {
        return [Kt({
            find: vm,
            type: this.type
        })]
    }
});
var cr = 200
  , K = function() {};
K.prototype.append = function(e) {
    return e.length ? (e = K.from(e),
    !this.length && e || e.length < cr && this.leafAppend(e) || this.length < cr && e.leafPrepend(this) || this.appendInner(e)) : this
}
;
K.prototype.prepend = function(e) {
    return e.length ? K.from(e).append(this) : this
}
;
K.prototype.appendInner = function(e) {
    return new Nm(this,e)
}
;
K.prototype.slice = function(e, t) {
    return e === void 0 && (e = 0),
    t === void 0 && (t = this.length),
    e >= t ? K.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
}
;
K.prototype.get = function(e) {
    if (!(e < 0 || e >= this.length))
        return this.getInner(e)
}
;
K.prototype.forEach = function(e, t, r) {
    t === void 0 && (t = 0),
    r === void 0 && (r = this.length),
    t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0)
}
;
K.prototype.map = function(e, t, r) {
    t === void 0 && (t = 0),
    r === void 0 && (r = this.length);
    var i = [];
    return this.forEach(function(s, o) {
        return i.push(e(s, o))
    }, t, r),
    i
}
;
K.from = function(e) {
    return e instanceof K ? e : e && e.length ? new ql(e) : K.empty
}
;
var ql = function(n) {
    function e(r) {
        n.call(this),
        this.values = r
    }
    n && (e.__proto__ = n),
    e.prototype = Object.create(n && n.prototype),
    e.prototype.constructor = e;
    var t = {
        length: {
            configurable: !0
        },
        depth: {
            configurable: !0
        }
    };
    return e.prototype.flatten = function() {
        return this.values
    }
    ,
    e.prototype.sliceInner = function(i, s) {
        return i == 0 && s == this.length ? this : new e(this.values.slice(i, s))
    }
    ,
    e.prototype.getInner = function(i) {
        return this.values[i]
    }
    ,
    e.prototype.forEachInner = function(i, s, o, l) {
        for (var a = s; a < o; a++)
            if (i(this.values[a], l + a) === !1)
                return !1
    }
    ,
    e.prototype.forEachInvertedInner = function(i, s, o, l) {
        for (var a = s - 1; a >= o; a--)
            if (i(this.values[a], l + a) === !1)
                return !1
    }
    ,
    e.prototype.leafAppend = function(i) {
        if (this.length + i.length <= cr)
            return new e(this.values.concat(i.flatten()))
    }
    ,
    e.prototype.leafPrepend = function(i) {
        if (this.length + i.length <= cr)
            return new e(i.flatten().concat(this.values))
    }
    ,
    t.length.get = function() {
        return this.values.length
    }
    ,
    t.depth.get = function() {
        return 0
    }
    ,
    Object.defineProperties(e.prototype, t),
    e
}(K);
K.empty = new ql([]);
var Nm = function(n) {
    function e(t, r) {
        n.call(this),
        this.left = t,
        this.right = r,
        this.length = t.length + r.length,
        this.depth = Math.max(t.depth, r.depth) + 1
    }
    return n && (e.__proto__ = n),
    e.prototype = Object.create(n && n.prototype),
    e.prototype.constructor = e,
    e.prototype.flatten = function() {
        return this.left.flatten().concat(this.right.flatten())
    }
    ,
    e.prototype.getInner = function(r) {
        return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length)
    }
    ,
    e.prototype.forEachInner = function(r, i, s, o) {
        var l = this.left.length;
        if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
            return !1
    }
    ,
    e.prototype.forEachInvertedInner = function(r, i, s, o) {
        var l = this.left.length;
        if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
            return !1
    }
    ,
    e.prototype.sliceInner = function(r, i) {
        if (r == 0 && i == this.length)
            return this;
        var s = this.left.length;
        return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s))
    }
    ,
    e.prototype.leafAppend = function(r) {
        var i = this.right.leafAppend(r);
        if (i)
            return new e(this.left,i)
    }
    ,
    e.prototype.leafPrepend = function(r) {
        var i = this.left.leafPrepend(r);
        if (i)
            return new e(i,this.right)
    }
    ,
    e.prototype.appendInner = function(r) {
        return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left,new e(this.right,r)) : new e(this,r)
    }
    ,
    e
}(K);
const Dm = 500;
class ge {
    constructor(e, t) {
        this.items = e,
        this.eventCount = t
    }
    popEvent(e, t) {
        if (this.eventCount == 0)
            return null;
        let r = this.items.length;
        for (; ; r--)
            if (this.items.get(r - 1).selection) {
                --r;
                break
            }
        let i, s;
        t && (i = this.remapping(r, this.items.length),
        s = i.maps.length);
        let o = e.tr, l, a, c = [], u = [];
        return this.items.forEach((d,f)=>{
            if (!d.step) {
                i || (i = this.remapping(r, f + 1),
                s = i.maps.length),
                s--,
                u.push(d);
                return
            }
            if (i) {
                u.push(new Te(d.map));
                let h = d.step.map(i.slice(s)), p;
                h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1],
                c.push(new Te(p,void 0,void 0,c.length + u.length))),
                s--,
                p && i.appendMap(p, s)
            } else
                o.maybeStep(d.step);
            if (d.selection)
                return l = i ? d.selection.map(i.slice(s)) : d.selection,
                a = new ge(this.items.slice(0, r).append(u.reverse().concat(c)),this.eventCount - 1),
                !1
        }
        , this.items.length, 0),
        {
            remaining: a,
            transform: o,
            selection: l
        }
    }
    addTransform(e, t, r, i) {
        let s = []
          , o = this.eventCount
          , l = this.items
          , a = !i && l.length ? l.get(l.length - 1) : null;
        for (let u = 0; u < e.steps.length; u++) {
            let d = e.steps[u].invert(e.docs[u]), f = new Te(e.mapping.maps[u],d,t), h;
            (h = a && a.merge(f)) && (f = h,
            u ? s.pop() : l = l.slice(0, l.length - 1)),
            s.push(f),
            t && (o++,
            t = void 0),
            i || (a = f)
        }
        let c = o - r.depth;
        return c > Rm && (l = Im(l, c),
        o -= c),
        new ge(l.append(s),o)
    }
    remapping(e, t) {
        let r = new Lt;
        return this.items.forEach((i,s)=>{
            let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
            r.appendMap(i.map, o)
        }
        , e, t),
        r
    }
    addMaps(e) {
        return this.eventCount == 0 ? this : new ge(this.items.append(e.map(t=>new Te(t))),this.eventCount)
    }
    rebased(e, t) {
        if (!this.eventCount)
            return this;
        let r = []
          , i = Math.max(0, this.items.length - t)
          , s = e.mapping
          , o = e.steps.length
          , l = this.eventCount;
        this.items.forEach(f=>{
            f.selection && l--
        }
        , i);
        let a = t;
        this.items.forEach(f=>{
            let h = s.getMirror(--a);
            if (h == null)
                return;
            o = Math.min(o, h);
            let p = s.maps[h];
            if (f.step) {
                let m = e.steps[h].invert(e.docs[h])
                  , g = f.selection && f.selection.map(s.slice(a + 1, h));
                g && l++,
                r.push(new Te(p,m,g))
            } else
                r.push(new Te(p))
        }
        , i);
        let c = [];
        for (let f = t; f < o; f++)
            c.push(new Te(s.maps[f]));
        let u = this.items.slice(0, i).append(c).append(r)
          , d = new ge(u,l);
        return d.emptyItemCount() > Dm && (d = d.compress(this.items.length - r.length)),
        d
    }
    emptyItemCount() {
        let e = 0;
        return this.items.forEach(t=>{
            t.step || e++
        }
        ),
        e
    }
    compress(e=this.items.length) {
        let t = this.remapping(0, e)
          , r = t.maps.length
          , i = []
          , s = 0;
        return this.items.forEach((o,l)=>{
            if (l >= e)
                i.push(o),
                o.selection && s++;
            else if (o.step) {
                let a = o.step.map(t.slice(r))
                  , c = a && a.getMap();
                if (r--,
                c && t.appendMap(c, r),
                a) {
                    let u = o.selection && o.selection.map(t.slice(r));
                    u && s++;
                    let d = new Te(c.invert(),a,u), f, h = i.length - 1;
                    (f = i.length && i[h].merge(d)) ? i[h] = f : i.push(d)
                }
            } else
                o.map && r--
        }
        , this.items.length, 0),
        new ge(K.from(i.reverse()),s)
    }
}
ge.empty = new ge(K.empty,0);
function Im(n, e) {
    let t;
    return n.forEach((r,i)=>{
        if (r.selection && e-- == 0)
            return t = i,
            !1
    }
    ),
    n.slice(t)
}
class Te {
    constructor(e, t, r, i) {
        this.map = e,
        this.step = t,
        this.selection = r,
        this.mirrorOffset = i
    }
    merge(e) {
        if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t)
                return new Te(t.getMap().invert(),t,this.selection)
        }
    }
}
class je {
    constructor(e, t, r, i, s) {
        this.done = e,
        this.undone = t,
        this.prevRanges = r,
        this.prevTime = i,
        this.prevComposition = s
    }
}
const Rm = 20;
function Pm(n, e, t, r) {
    let i = t.getMeta(Qe), s;
    if (i)
        return i.historyState;
    t.getMeta(Bm) && (n = new je(n.done,n.undone,null,0,-1));
    let o = t.getMeta("appendedTransaction");
    if (t.steps.length == 0)
        return n;
    if (o && o.getMeta(Qe))
        return o.getMeta(Qe).redo ? new je(n.done.addTransform(t, void 0, r, Rn(e)),n.undone,go(t.mapping.maps[t.steps.length - 1]),n.prevTime,n.prevComposition) : new je(n.done,n.undone.addTransform(t, void 0, r, Rn(e)),null,n.prevTime,n.prevComposition);
    if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
        let l = t.getMeta("composition")
          , a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Lm(t, n.prevRanges))
          , c = o ? Gr(n.prevRanges, t.mapping) : go(t.mapping.maps[t.steps.length - 1]);
        return new je(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Rn(e)),ge.empty,c,t.time,l ?? n.prevComposition)
    } else
        return (s = t.getMeta("rebased")) ? new je(n.done.rebased(t, s),n.undone.rebased(t, s),Gr(n.prevRanges, t.mapping),n.prevTime,n.prevComposition) : new je(n.done.addMaps(t.mapping.maps),n.undone.addMaps(t.mapping.maps),Gr(n.prevRanges, t.mapping),n.prevTime,n.prevComposition)
}
function Lm(n, e) {
    if (!e)
        return !1;
    if (!n.docChanged)
        return !0;
    let t = !1;
    return n.mapping.maps[0].forEach((r,i)=>{
        for (let s = 0; s < e.length; s += 2)
            r <= e[s + 1] && i >= e[s] && (t = !0)
    }
    ),
    t
}
function go(n) {
    let e = [];
    return n.forEach((t,r,i,s)=>e.push(i, s)),
    e
}
function Gr(n, e) {
    if (!n)
        return null;
    let t = [];
    for (let r = 0; r < n.length; r += 2) {
        let i = e.map(n[r], 1)
          , s = e.map(n[r + 1], -1);
        i <= s && t.push(i, s)
    }
    return t
}
function Ul(n, e, t, r) {
    let i = Rn(e)
      , s = Qe.get(e).spec.config
      , o = (r ? n.undone : n.done).popEvent(e, i);
    if (!o)
        return;
    let l = o.selection.resolve(o.transform.doc)
      , a = (r ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), s, i)
      , c = new je(r ? a : o.remaining,r ? o.remaining : a,null,0,-1);
    t(o.transform.setSelection(l).setMeta(Qe, {
        redo: r,
        historyState: c
    }).scrollIntoView())
}
let Zr = !1
  , yo = null;
function Rn(n) {
    let e = n.plugins;
    if (yo != e) {
        Zr = !1,
        yo = e;
        for (let t = 0; t < e.length; t++)
            if (e[t].spec.historyPreserveItems) {
                Zr = !0;
                break
            }
    }
    return Zr
}
const Qe = new xe("history")
  , Bm = new xe("closeHistory");
function zm(n={}) {
    return n = {
        depth: n.depth || 100,
        newGroupDelay: n.newGroupDelay || 500
    },
    new ae({
        key: Qe,
        state: {
            init() {
                return new je(ge.empty,ge.empty,null,0,-1)
            },
            apply(e, t, r) {
                return Pm(t, r, e, n)
            }
        },
        config: n,
        props: {
            handleDOMEvents: {
                beforeinput(e, t) {
                    let r = t.inputType
                      , i = r == "historyUndo" ? Gl : r == "historyRedo" ? Zl : null;
                    return i ? (t.preventDefault(),
                    i(e.state, e.dispatch)) : !1
                }
            }
        }
    })
}
const Gl = (n,e)=>{
    let t = Qe.getState(n);
    return !t || t.done.eventCount == 0 ? !1 : (e && Ul(t, n, e, !1),
    !0)
}
  , Zl = (n,e)=>{
    let t = Qe.getState(n);
    return !t || t.undone.eventCount == 0 ? !1 : (e && Ul(t, n, e, !0),
    !0)
}
  , Fm = Se.create({
    name: "history",
    addOptions() {
        return {
            depth: 100,
            newGroupDelay: 500
        }
    },
    addCommands() {
        return {
            undo: ()=>({state: n, dispatch: e})=>Gl(n, e),
            redo: ()=>({state: n, dispatch: e})=>Zl(n, e)
        }
    },
    addProseMirrorPlugins() {
        return [zm(this.options)]
    },
    addKeyboardShortcuts() {
        return {
            "Mod-z": ()=>this.editor.commands.undo(),
            "Mod-y": ()=>this.editor.commands.redo(),
            "Shift-Mod-z": ()=>this.editor.commands.redo(),
            "Mod-я": ()=>this.editor.commands.undo(),
            "Shift-Mod-я": ()=>this.editor.commands.redo()
        }
    }
})
  , Hm = G.create({
    name: "oneLiner",
    content: "text*",
    group: "block",
    parseHTML: ()=>[{
        tag: "span"
    }],
    renderHTML: ()=>["span", 0],
    addKeyboardShortcuts() {
        return {
            Enter: ()=>!0
        }
    }
})
  , $m = n=>{
    let e = !1;
    const t = ()=>{
        e || (r.push(dm),
        e = !0)
    }
      , r = [tm, rm];
    return n != null && n.heading && r.push(nm.configure({
        levels: [1, 2, 3]
    })),
    n != null && n.paragraph ? r.push(im) : r.push(Hm),
    n != null && n.blockquote && r.push(om),
    n != null && n.bulletList && (r.push(am),
    t()),
    n != null && n.orderedList && (r.push(um),
    t()),
    n != null && n.codeBlock && r.push(pm),
    n != null && n.horizontalRule && r.push(gm),
    n != null && n.hardBreak && r.push(mm),
    n != null && n.bold && r.push(xm),
    n != null && n.italic && r.push(Om),
    n != null && n.strike && r.push(Am),
    n != null && n.history && r.push(Fm),
    n != null && n.link && r.push(Yp.configure({
        openOnClick: !1,
        protocols: ["mailto", {
            scheme: "tel",
            optionalSlashes: !0
        }],
        HTMLAttributes: {
            class: "brand-link",
            target: null
        }
    })),
    n != null && n.underline && r.push(Qp),
    n != null && n.color && r.push(em.configure({
        types: ["textStyle"]
    })),
    n != null && n.textStyle && r.push(Xp.configure({
        types: ["heading", "paragraph"]
    })),
    r
}
  , Vm = {
    class: "tiptap",
    "data-testid": "tiptap"
}
  , _m = {
    class: "p-3"
}
  , Jm = {
    __name: "Tiptap",
    props: {
        controls: {
            type: Object,
            default() {
                return {}
            }
        },
        value: {
            type: String,
            default: ""
        }
    },
    emits: ["input"],
    setup(n, {emit: e}) {
        const t = n
          , i = {
            ...{
                heading: {
                    levels: [1, 2, 3]
                },
                bulletList: !0,
                orderedList: !0,
                codeBlock: !0,
                blockquote: !0,
                horizontalRule: !0,
                hardBreak: !0,
                paragraph: !0,
                bold: !0,
                italic: !0,
                underline: !0,
                link: !0,
                color: !0,
                textStyle: !0,
                history: !0
            },
            ...t.controls
        }
          , s = $m(i)
          , o = Ap({
            content: t == null ? void 0 : t.value,
            extensions: s,
            editorProps: {
                attributes: {
                    class: "prose prose-sm sm:prose-base focus:outline-none"
                },
                transformPastedHTML(l) {
                    return da(l)
                }
            },
            onUpdate({editor: l}) {
                e("input", l.getHTML())
            }
        });
        return (l,a)=>{
            const c = Pc;
            return I(),
            z("div", Vm, [Le(o) ? (I(),
            Gi(c, {
                key: 0,
                editor: Le(o),
                controls: i
            }, null, 8, ["editor"])) : le("", !0), P("div", _m, [Le(o) ? (I(),
            Gi(Le(vp), {
                key: 0,
                editor: Le(o)
            }, null, 8, ["editor"])) : le("", !0)])])
        }
    }
};
export {Jm as default};
//# sourceMappingURL=Tiptap-a1e8c30f.js.map
