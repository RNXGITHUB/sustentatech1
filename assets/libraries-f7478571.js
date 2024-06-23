import {T as w, q as g, cD as k, ay as p, p as G, cE as de, y as h, cF as M, aC as P, at as q, L as E, a5 as z, G as Y, ca as ee, cG as ce, cH as H, a4 as L, aF as y, V as U, aB as pe, az as te, aw as C, z as ve, aD as fe, a3 as be, aJ as j, cI as me, aG as he, aH as O, aI as _, o as K, c as W, f as B, W as ye, b as F, w as R, k as A, a0 as Q, a8 as Z, Z as ge, X as xe, ad as Se, cJ as ae, bO as Ie, ce as _e} from "./index-69a2ddda.js";
import {t as we} from "./helpers-7cfbe709.js";
var De = (e=>(e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(De || {});
let le = Symbol("DisclosureContext");
function X(e) {
    let u = L(le, null);
    if (u === null) {
        let i = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(i, X),
        i
    }
    return u
}
let se = Symbol("DisclosurePanelContext");
function Pe() {
    return L(se, null)
}
let ne = w({
    name: "Disclosure",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        defaultOpen: {
            type: [Boolean],
            default: !1
        }
    },
    setup(e, {slots: u, attrs: i}) {
        let r = g(e.defaultOpen ? 0 : 1)
          , t = g(null)
          , l = g(null)
          , s = {
            buttonId: g(null),
            panelId: g(null),
            disclosureState: r,
            panel: t,
            button: l,
            toggleDisclosure() {
                r.value = k(r.value, {
                    [0]: 1,
                    [1]: 0
                })
            },
            closeDisclosure() {
                r.value !== 1 && (r.value = 1)
            },
            close(o) {
                s.closeDisclosure();
                let v = (()=>o ? o instanceof HTMLElement ? o : o.value instanceof HTMLElement ? p(o) : p(s.button) : p(s.button))();
                v == null || v.focus()
            }
        };
        return G(le, s),
        de(h(()=>k(r.value, {
            [0]: M.Open,
            [1]: M.Closed
        }))),
        ()=>{
            let {defaultOpen: o, ...v} = e
              , m = {
                open: r.value === 0,
                close: s.close
            };
            return P({
                theirProps: v,
                ourProps: {},
                slot: m,
                slots: u,
                attrs: i,
                name: "Disclosure"
            })
        }
    }
})
  , re = w({
    name: "DisclosureButton",
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: ()=>`headlessui-disclosure-button-${q()}`
        }
    },
    setup(e, {attrs: u, slots: i, expose: r}) {
        let t = X("DisclosureButton");
        E(()=>{
            t.buttonId.value = e.id
        }
        ),
        z(()=>{
            t.buttonId.value = null
        }
        );
        let l = Pe()
          , s = h(()=>l === null ? !1 : l.value === t.panelId.value)
          , o = g(null);
        r({
            el: o,
            $el: o
        }),
        s.value || Y(()=>{
            t.button.value = o.value
        }
        );
        let v = ee(h(()=>({
            as: e.as,
            type: u.type
        })), o);
        function m() {
            var c;
            e.disabled || (s.value ? (t.toggleDisclosure(),
            (c = p(t.button)) == null || c.focus()) : t.toggleDisclosure())
        }
        function f(c) {
            var S;
            if (!e.disabled)
                if (s.value)
                    switch (c.key) {
                    case y.Space:
                    case y.Enter:
                        c.preventDefault(),
                        c.stopPropagation(),
                        t.toggleDisclosure(),
                        (S = p(t.button)) == null || S.focus();
                        break
                    }
                else
                    switch (c.key) {
                    case y.Space:
                    case y.Enter:
                        c.preventDefault(),
                        c.stopPropagation(),
                        t.toggleDisclosure();
                        break
                    }
        }
        function b(c) {
            switch (c.key) {
            case y.Space:
                c.preventDefault();
                break
            }
        }
        return ()=>{
            let c = {
                open: t.disclosureState.value === 0
            }
              , {id: S, ...$} = e
              , n = s.value ? {
                ref: o,
                type: v.value,
                onClick: m,
                onKeydown: f
            } : {
                id: S,
                ref: o,
                type: v.value,
                "aria-expanded": e.disabled ? void 0 : t.disclosureState.value === 0,
                "aria-controls": p(t.panel) ? t.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onClick: m,
                onKeydown: f,
                onKeyup: b
            };
            return P({
                ourProps: n,
                theirProps: $,
                slot: c,
                attrs: u,
                slots: i,
                name: "DisclosureButton"
            })
        }
    }
})
  , ue = w({
    name: "DisclosurePanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        id: {
            type: String,
            default: ()=>`headlessui-disclosure-panel-${q()}`
        }
    },
    setup(e, {attrs: u, slots: i, expose: r}) {
        let t = X("DisclosurePanel");
        E(()=>{
            t.panelId.value = e.id
        }
        ),
        z(()=>{
            t.panelId.value = null
        }
        ),
        r({
            el: t.panel,
            $el: t.panel
        }),
        G(se, t.panelId);
        let l = ce()
          , s = h(()=>l !== null ? (l.value & M.Open) === M.Open : t.disclosureState.value === 0);
        return ()=>{
            let o = {
                open: t.disclosureState.value === 0,
                close: t.close
            }
              , {id: v, ...m} = e
              , f = {
                id: v,
                ref: t.panel
            };
            return P({
                ourProps: f,
                theirProps: m,
                slot: o,
                attrs: u,
                slots: i,
                features: H.RenderStrategy | H.Static,
                visible: s.value,
                name: "DisclosurePanel"
            })
        }
    }
})
  , $e = w({
    props: {
        onFocus: {
            type: Function,
            required: !0
        }
    },
    setup(e) {
        let u = g(!0);
        return ()=>u.value ? U(te, {
            as: "button",
            type: "button",
            features: pe.Focusable,
            onFocus(i) {
                i.preventDefault();
                let r, t = 50;
                function l() {
                    var s;
                    if (t-- <= 0) {
                        r && cancelAnimationFrame(r);
                        return
                    }
                    if ((s = e.onFocus) != null && s.call(e)) {
                        u.value = !1,
                        cancelAnimationFrame(r);
                        return
                    }
                    r = requestAnimationFrame(l)
                }
                r = requestAnimationFrame(l)
            }
        }) : null
    }
});
var Te = (e=>(e[e.Forwards = 0] = "Forwards",
e[e.Backwards = 1] = "Backwards",
e))(Te || {})
  , Oe = (e=>(e[e.Less = -1] = "Less",
e[e.Equal = 0] = "Equal",
e[e.Greater = 1] = "Greater",
e))(Oe || {});
let oe = Symbol("TabsContext");
function N(e) {
    let u = L(oe, null);
    if (u === null) {
        let i = new Error(`<${e} /> is missing a parent <TabGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(i, N),
        i
    }
    return u
}
let J = Symbol("TabsSSRContext")
  , Qe = w({
    name: "TabGroup",
    emits: {
        change: e=>!0
    },
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        selectedIndex: {
            type: [Number],
            default: null
        },
        defaultIndex: {
            type: [Number],
            default: 0
        },
        vertical: {
            type: [Boolean],
            default: !1
        },
        manual: {
            type: [Boolean],
            default: !1
        }
    },
    inheritAttrs: !1,
    setup(e, {slots: u, attrs: i, emit: r}) {
        var t;
        let l = g((t = e.selectedIndex) != null ? t : e.defaultIndex)
          , s = g([])
          , o = g([])
          , v = h(()=>e.selectedIndex !== null)
          , m = h(()=>v.value ? e.selectedIndex : l.value);
        function f(n) {
            var a;
            let d = C(b.tabs.value, p)
              , x = C(b.panels.value, p)
              , D = d.filter(I=>{
                var T;
                return !((T = p(I)) != null && T.hasAttribute("disabled"))
            }
            );
            if (n < 0 || n > d.length - 1) {
                let I = k(l.value === null ? 0 : Math.sign(n - l.value), {
                    [-1]: ()=>1,
                    [0]: ()=>k(Math.sign(n), {
                        [-1]: ()=>0,
                        [0]: ()=>0,
                        [1]: ()=>1
                    }),
                    [1]: ()=>0
                });
                l.value = k(I, {
                    [0]: ()=>d.indexOf(D[0]),
                    [1]: ()=>d.indexOf(D[D.length - 1])
                }),
                b.tabs.value = d,
                b.panels.value = x
            } else {
                let I = d.slice(0, n)
                  , T = [...d.slice(n), ...I].find(ie=>D.includes(ie));
                if (!T)
                    return;
                let V = (a = d.indexOf(T)) != null ? a : b.selectedIndex.value;
                V === -1 && (V = b.selectedIndex.value),
                l.value = V,
                b.tabs.value = d,
                b.panels.value = x
            }
        }
        let b = {
            selectedIndex: h(()=>{
                var n, a;
                return (a = (n = l.value) != null ? n : e.defaultIndex) != null ? a : null
            }
            ),
            orientation: h(()=>e.vertical ? "vertical" : "horizontal"),
            activation: h(()=>e.manual ? "manual" : "auto"),
            tabs: s,
            panels: o,
            setSelectedIndex(n) {
                m.value !== n && r("change", n),
                v.value || f(n)
            },
            registerTab(n) {
                var a;
                if (s.value.includes(n))
                    return;
                let d = s.value[l.value];
                s.value.push(n),
                s.value = C(s.value, p);
                let x = (a = s.value.indexOf(d)) != null ? a : l.value;
                x !== -1 && (l.value = x)
            },
            unregisterTab(n) {
                let a = s.value.indexOf(n);
                a !== -1 && s.value.splice(a, 1)
            },
            registerPanel(n) {
                o.value.includes(n) || (o.value.push(n),
                o.value = C(o.value, p))
            },
            unregisterPanel(n) {
                let a = o.value.indexOf(n);
                a !== -1 && o.value.splice(a, 1)
            }
        };
        G(oe, b);
        let c = g({
            tabs: [],
            panels: []
        })
          , S = g(!1);
        E(()=>{
            S.value = !0
        }
        ),
        G(J, h(()=>S.value ? null : c.value));
        let $ = h(()=>e.selectedIndex);
        return E(()=>{
            ve([$], ()=>{
                var n;
                return f((n = e.selectedIndex) != null ? n : e.defaultIndex)
            }
            , {
                immediate: !0
            })
        }
        ),
        Y(()=>{
            if (!v.value || m.value == null || b.tabs.value.length <= 0)
                return;
            let n = C(b.tabs.value, p);
            n.some((a,d)=>p(b.tabs.value[d]) !== p(a)) && b.setSelectedIndex(n.findIndex(a=>p(a) === p(b.tabs.value[m.value])))
        }
        ),
        ()=>{
            let n = {
                selectedIndex: l.value
            };
            return U(be, [s.value.length <= 0 && U($e, {
                onFocus: ()=>{
                    for (let a of s.value) {
                        let d = p(a);
                        if ((d == null ? void 0 : d.tabIndex) === 0)
                            return d.focus(),
                            !0
                    }
                    return !1
                }
            }), P({
                theirProps: {
                    ...i,
                    ...fe(e, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"])
                },
                ourProps: {},
                slot: n,
                slots: u,
                attrs: i,
                name: "TabGroup"
            })])
        }
    }
})
  , Ye = w({
    name: "TabList",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {attrs: u, slots: i}) {
        let r = N("TabList");
        return ()=>{
            let t = {
                selectedIndex: r.selectedIndex.value
            }
              , l = {
                role: "tablist",
                "aria-orientation": r.orientation.value
            };
            return P({
                ourProps: l,
                theirProps: e,
                slot: t,
                attrs: u,
                slots: i,
                name: "TabList"
            })
        }
    }
})
  , et = w({
    name: "Tab",
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: ()=>`headlessui-tabs-tab-${q()}`
        }
    },
    setup(e, {attrs: u, slots: i, expose: r}) {
        let t = N("Tab")
          , l = g(null);
        r({
            el: l,
            $el: l
        }),
        E(()=>t.registerTab(l)),
        z(()=>t.unregisterTab(l));
        let s = L(J)
          , o = h(()=>{
            if (s.value) {
                let a = s.value.tabs.indexOf(e.id);
                return a === -1 ? s.value.tabs.push(e.id) - 1 : a
            }
            return -1
        }
        )
          , v = h(()=>{
            let a = t.tabs.value.indexOf(l);
            return a === -1 ? o.value : a
        }
        )
          , m = h(()=>v.value === t.selectedIndex.value);
        function f(a) {
            var d;
            let x = a();
            if (x === j.Success && t.activation.value === "auto") {
                let D = (d = he(l)) == null ? void 0 : d.activeElement
                  , I = t.tabs.value.findIndex(T=>p(T) === D);
                I !== -1 && t.setSelectedIndex(I)
            }
            return x
        }
        function b(a) {
            let d = t.tabs.value.map(x=>p(x)).filter(Boolean);
            if (a.key === y.Space || a.key === y.Enter) {
                a.preventDefault(),
                a.stopPropagation(),
                t.setSelectedIndex(v.value);
                return
            }
            switch (a.key) {
            case y.Home:
            case y.PageUp:
                return a.preventDefault(),
                a.stopPropagation(),
                f(()=>O(d, _.First));
            case y.End:
            case y.PageDown:
                return a.preventDefault(),
                a.stopPropagation(),
                f(()=>O(d, _.Last))
            }
            if (f(()=>k(t.orientation.value, {
                vertical() {
                    return a.key === y.ArrowUp ? O(d, _.Previous | _.WrapAround) : a.key === y.ArrowDown ? O(d, _.Next | _.WrapAround) : j.Error
                },
                horizontal() {
                    return a.key === y.ArrowLeft ? O(d, _.Previous | _.WrapAround) : a.key === y.ArrowRight ? O(d, _.Next | _.WrapAround) : j.Error
                }
            })) === j.Success)
                return a.preventDefault()
        }
        let c = g(!1);
        function S() {
            var a;
            c.value || (c.value = !0,
            !e.disabled && ((a = p(l)) == null || a.focus(),
            t.setSelectedIndex(v.value),
            me(()=>{
                c.value = !1
            }
            )))
        }
        function $(a) {
            a.preventDefault()
        }
        let n = ee(h(()=>({
            as: e.as,
            type: u.type
        })), l);
        return ()=>{
            var a;
            let d = {
                selected: m.value
            }
              , {id: x, ...D} = e
              , I = {
                ref: l,
                onKeydown: b,
                onMousedown: $,
                onClick: S,
                id: x,
                role: "tab",
                type: n.value,
                "aria-controls": (a = p(t.panels.value[v.value])) == null ? void 0 : a.id,
                "aria-selected": m.value,
                tabIndex: m.value ? 0 : -1,
                disabled: e.disabled ? !0 : void 0
            };
            return P({
                ourProps: I,
                theirProps: D,
                slot: d,
                attrs: u,
                slots: i,
                name: "Tab"
            })
        }
    }
})
  , tt = w({
    name: "TabPanels",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {slots: u, attrs: i}) {
        let r = N("TabPanels");
        return ()=>{
            let t = {
                selectedIndex: r.selectedIndex.value
            };
            return P({
                theirProps: e,
                ourProps: {},
                slot: t,
                attrs: i,
                slots: u,
                name: "TabPanels"
            })
        }
    }
})
  , at = w({
    name: "TabPanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        id: {
            type: String,
            default: ()=>`headlessui-tabs-panel-${q()}`
        },
        tabIndex: {
            type: Number,
            default: 0
        }
    },
    setup(e, {attrs: u, slots: i, expose: r}) {
        let t = N("TabPanel")
          , l = g(null);
        r({
            el: l,
            $el: l
        }),
        E(()=>t.registerPanel(l)),
        z(()=>t.unregisterPanel(l));
        let s = L(J)
          , o = h(()=>{
            if (s.value) {
                let f = s.value.panels.indexOf(e.id);
                return f === -1 ? s.value.panels.push(e.id) - 1 : f
            }
            return -1
        }
        )
          , v = h(()=>{
            let f = t.panels.value.indexOf(l);
            return f === -1 ? o.value : f
        }
        )
          , m = h(()=>v.value === t.selectedIndex.value);
        return ()=>{
            var f;
            let b = {
                selected: m.value
            }
              , {id: c, tabIndex: S, ...$} = e
              , n = {
                ref: l,
                id: c,
                role: "tabpanel",
                "aria-labelledby": (f = p(t.tabs.value[v.value])) == null ? void 0 : f.id,
                tabIndex: m.value ? S : -1
            };
            return !m.value && e.unmount && !e.static ? U(te, {
                as: "span",
                ...n
            }) : P({
                ourProps: n,
                theirProps: $,
                slot: b,
                attrs: u,
                slots: i,
                features: H.Static | H.RenderStrategy,
                visible: m.value,
                name: "TabPanel"
            })
        }
    }
});
const lt = (e,u)=>{
    var i, r, t, l, s, o;
    (((i = e == null ? void 0 : e.target) == null ? void 0 : i.tagName) === "INPUT" || ((r = e == null ? void 0 : e.target) == null ? void 0 : r.tagName) === "TEXTAREA" || ((t = e == null ? void 0 : e.target) == null ? void 0 : t.tagName) === "SELECT" || ((l = e == null ? void 0 : e.target) == null ? void 0 : l.tagName) === "OPTION" || (s = e == null ? void 0 : e.target) != null && s.closest("[data-formkit-custom-input]") || (o = e == null ? void 0 : e.target) != null && o.closest(".formkit-selector")) && typeof u == "function" && u(e)
}
  , ke = {
    viewBox: "0 0 12 12",
    width: "1.2em",
    height: "1.2em"
}
  , Be = B("path", {
    fill: "currentColor",
    d: "M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 0 1 1.06 1.06L6.53 8.78a.75.75 0 0 1-1.06 0L2.22 5.53a.75.75 0 0 1 0-1.06Z"
}, null, -1)
  , Ee = [Be];
function Ce(e, u) {
    return K(),
    W("svg", ke, Ee)
}
const Fe = {
    name: "fluent-chevron-down-12-filled",
    render: Ce
}
  , Ae = {
    viewBox: "0 0 12 12",
    width: "1.2em",
    height: "1.2em"
}
  , Le = B("path", {
    fill: "currentColor",
    d: "M2.22 7.53a.75.75 0 0 0 1.06 0L6 4.81l2.72 2.72a.75.75 0 0 0 1.06-1.06L6.53 3.22a.75.75 0 0 0-1.06 0L2.22 6.47a.75.75 0 0 0 0 1.06Z"
}, null, -1)
  , Ne = [Le];
function je(e, u) {
    return K(),
    W("svg", Ae, Ne)
}
const Re = {
    name: "fluent-chevron-up-12-filled",
    render: je
}
  , Ge = {
    viewBox: "0 0 20 20",
    width: "1.2em",
    height: "1.2em"
}
  , Me = B("path", {
    fill: "currentColor",
    "fill-rule": "evenodd",
    d: "M14.707 12.707a1 1 0 0 1-1.414 0L10 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z",
    "clip-rule": "evenodd"
}, null, -1)
  , He = [Me];
function Ue(e, u) {
    return K(),
    W("svg", Ge, He)
}
const qe = {
    name: "heroicons-solid-chevron-up",
    render: Ue
};
const ze = ["id"]
  , Ke = {
    class: "capitalize"
}
  , We = {
    class: "flex-row-center gap-1"
}
  , Ve = {
    __name: "AnimatedDisclosure",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        label: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        value: {
            type: [String, Object, Array, Number, Function, Boolean, Date, Symbol],
            default: null
        }
    },
    setup(e) {
        const i = we(e.label);
        return (r,t)=>{
            const l = qe;
            return K(),
            W("div", {
                id: e.id,
                class: "disclosure-wrap"
            }, [F(A(ne), null, {
                default: R(({open: s})=>[F(A(re), {
                    as: "template",
                    class: Q(["disclosure-button", {
                        disabled: e.disabled
                    }]),
                    name: A(i),
                    disabled: e.disabled
                }, {
                    default: R(()=>[B("button", null, [Z(r.$slots, "label", {}, ()=>[B("span", Ke, ge(e.label), 1)], !0), B("div", We, [Z(r.$slots, "meta", {}, void 0, !0), xe(F(l, {
                        class: Q([s ? "rotate-180 transform" : "", "h-5 w-5 text-slate-500 mt-[3px]"])
                    }, null, 8, ["class"]), [[Se, !e.disabled]])])])]),
                    _: 2
                }, 1032, ["name", "class", "disabled"]), F(A(ae), {
                    "enter-rom": "-translate-y-5 opacity-0",
                    enter: "transition ease-in-out duration-200 transform",
                    "enter-to": "translate-y-0 opacity-100",
                    leave: "transition ease-in-out duration-200 transform",
                    "leave-from": "translate-y-0 opacity-100",
                    "leave-to": "-translate-y-5 opacity-0",
                    unmount: !1
                }, {
                    default: R(()=>[F(A(ue), {
                        class: "disclosure-panel",
                        unmount: !1
                    }, {
                        default: R(()=>[Z(r.$slots, "default", {
                            open: s,
                            value: e.value
                        }, void 0, !0)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)]),
                _: 3
            })], 8, ze)
        }
    }
}
  , Ze = ye(Ve, [["__scopeId", "data-v-67d82212"]])
  , st = Ie({
    AnimatedDisclosure: Ze,
    Disclosure: ne,
    DisclosureButton: re,
    DisclosurePanel: ue,
    TransitionRoot: ae,
    FluentChevronDown12Filled: Fe,
    FluentChevronUp12Filled: Re,
    KeepAlive: _e
});
export {Ye as I, tt as S, Ze as _, at as g, st as s, lt as u, Qe as x, et as y};
//# sourceMappingURL=libraries-f7478571.js.map
