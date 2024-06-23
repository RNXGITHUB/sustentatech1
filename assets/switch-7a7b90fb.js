import {q as m, y as p, p as C, T as S, at as L, L as T, a5 as F, k as I, aC as g, a4 as O, au as U, ca as G, ay as R, z, V as k, az as H, aA as M, aB as q, aD as Y, a3 as J, aF as w} from "./index-69a2ddda.js";
function Q(e={}, l=null, t=[]) {
    for (let[a,u] of Object.entries(e))
        j(t, $(l, a), u);
    return t
}
function $(e, l) {
    return e ? e + "[" + l + "]" : l
}
function j(e, l, t) {
    if (Array.isArray(t))
        for (let[a,u] of t.entries())
            j(e, $(l, a.toString()), u);
    else
        t instanceof Date ? e.push([l, t.toISOString()]) : typeof t == "boolean" ? e.push([l, t ? "1" : "0"]) : typeof t == "string" ? e.push([l, t]) : typeof t == "number" ? e.push([l, `${t}`]) : t == null ? e.push([l, ""]) : Q(t, l, e)
}
function W(e) {
    var l;
    let t = (l = e == null ? void 0 : e.form) != null ? l : e.closest("form");
    if (t) {
        for (let a of t.elements)
            if (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image") {
                a.click();
                return
            }
    }
}
function X(e, l, t) {
    let a = m(t == null ? void 0 : t.value)
      , u = p(()=>e.value !== void 0);
    return [p(()=>u.value ? e.value : a.value), function(r) {
        return u.value || (a.value = r),
        l == null ? void 0 : l(r)
    }
    ]
}
let x = Symbol("LabelContext");
function D() {
    let e = O(x, null);
    if (e === null) {
        let l = new Error("You used a <Label /> component, but it is not inside a parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(l, D),
        l
    }
    return e
}
function Z({slot: e={}, name: l="Label", props: t={}}={}) {
    let a = m([]);
    function u(r) {
        return a.value.push(r),
        ()=>{
            let o = a.value.indexOf(r);
            o !== -1 && a.value.splice(o, 1)
        }
    }
    return C(x, {
        register: u,
        slot: e,
        name: l,
        props: t
    }),
    p(()=>a.value.length > 0 ? a.value.join(" ") : void 0)
}
let _ = S({
    name: "Label",
    props: {
        as: {
            type: [Object, String],
            default: "label"
        },
        passive: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: ()=>`headlessui-label-${L()}`
        }
    },
    setup(e, {slots: l, attrs: t}) {
        let a = D();
        return T(()=>F(a.register(e.id))),
        ()=>{
            let {name: u="Label", slot: r={}, props: o={}} = a
              , {id: d, passive: c, ...f} = e
              , s = {
                ...Object.entries(o).reduce((b,[h,y])=>Object.assign(b, {
                    [h]: I(y)
                }), {}),
                id: d
            };
            return c && (delete s.onClick,
            delete s.htmlFor,
            delete f.onClick),
            g({
                ourProps: s,
                theirProps: f,
                slot: r,
                attrs: t,
                slots: l,
                name: u
            })
        }
    }
})
  , E = Symbol("GroupContext")
  , te = S({
    name: "SwitchGroup",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        }
    },
    setup(e, {slots: l, attrs: t}) {
        let a = m(null)
          , u = Z({
            name: "SwitchLabel",
            props: {
                htmlFor: p(()=>{
                    var o;
                    return (o = a.value) == null ? void 0 : o.id
                }
                ),
                onClick(o) {
                    a.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(),
                    a.value.click(),
                    a.value.focus({
                        preventScroll: !0
                    }))
                }
            }
        })
          , r = U({
            name: "SwitchDescription"
        });
        return C(E, {
            switchRef: a,
            labelledby: u,
            describedby: r
        }),
        ()=>g({
            theirProps: e,
            ourProps: {},
            slot: {},
            slots: l,
            attrs: t,
            name: "SwitchGroup"
        })
    }
})
  , ae = S({
    name: "Switch",
    emits: {
        "update:modelValue": e=>!0
    },
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        modelValue: {
            type: Boolean,
            default: void 0
        },
        defaultChecked: {
            type: Boolean,
            optional: !0
        },
        form: {
            type: String,
            optional: !0
        },
        name: {
            type: String,
            optional: !0
        },
        value: {
            type: String,
            optional: !0
        },
        id: {
            type: String,
            default: ()=>`headlessui-switch-${L()}`
        }
    },
    inheritAttrs: !1,
    setup(e, {emit: l, attrs: t, slots: a, expose: u}) {
        let r = O(E, null)
          , [o,d] = X(p(()=>e.modelValue), n=>l("update:modelValue", n), p(()=>e.defaultChecked));
        function c() {
            d(!o.value)
        }
        let f = m(null)
          , s = r === null ? f : r.switchRef
          , b = G(p(()=>({
            as: e.as,
            type: t.type
        })), s);
        u({
            el: s,
            $el: s
        });
        function h(n) {
            n.preventDefault(),
            c()
        }
        function y(n) {
            n.key === w.Space ? (n.preventDefault(),
            c()) : n.key === w.Enter && W(n.currentTarget)
        }
        function P(n) {
            n.preventDefault()
        }
        let v = p(()=>{
            var n, i;
            return (i = (n = R(s)) == null ? void 0 : n.closest) == null ? void 0 : i.call(n, "form")
        }
        );
        return T(()=>{
            z([v], ()=>{
                if (!v.value || e.defaultChecked === void 0)
                    return;
                function n() {
                    d(e.defaultChecked)
                }
                return v.value.addEventListener("reset", n),
                ()=>{
                    var i;
                    (i = v.value) == null || i.removeEventListener("reset", n)
                }
            }
            , {
                immediate: !0
            })
        }
        ),
        ()=>{
            let {id: n, name: i, value: N, form: B, ...V} = e
              , A = {
                checked: o.value
            }
              , K = {
                id: n,
                ref: s,
                role: "switch",
                type: b.value,
                tabIndex: 0,
                "aria-checked": o.value,
                "aria-labelledby": r == null ? void 0 : r.labelledby.value,
                "aria-describedby": r == null ? void 0 : r.describedby.value,
                onClick: h,
                onKeyup: y,
                onKeypress: P
            };
            return k(J, [i != null && o.value != null ? k(H, M({
                features: q.Hidden,
                as: "input",
                type: "checkbox",
                hidden: !0,
                readOnly: !0,
                checked: o.value,
                form: B,
                name: i,
                value: N
            })) : null, g({
                ourProps: K,
                theirProps: {
                    ...t,
                    ...Y(V, ["modelValue", "defaultChecked"])
                },
                slot: A,
                attrs: t,
                slots: a,
                name: "Switch"
            })])
        }
    }
})
  , le = _;
export {Z as K, _ as T, le as a, te as b, X as d, Q as e, W as p, ae as u};
//# sourceMappingURL=switch-7a7b90fb.js.map
