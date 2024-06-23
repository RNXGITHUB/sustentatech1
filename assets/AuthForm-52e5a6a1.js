import {o as p, c as R, f as a, b$ as Z, a4 as F, ap as J, n as Q, a_ as E, q as P, a$ as X, r as ee, b as y, Z as v, k as t, t as b, w as A, d as $, s as I, e as C, x as B, c0 as te, an as L, aK as N, c1 as ae, bu as h, c2 as se, j as re, v as oe, aL as ne, c3 as ie, c4 as le, c5 as ce, c6 as ue} from "./index-69a2ddda.js";
const de = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , me = a("path", {
    fill: "currentColor",
    d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1c1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"
}, null, -1)
  , he = [me];
function pe(d, n) {
    return p(),
    R("svg", de, he)
}
const ge = {
    name: "ic-baseline-lock-open",
    render: pe
}
  , fe = {
    "data-testid": "auth-form",
    class: "auth-form min-h-full flex flex-col justify-center py-10 px-2 w-80 mx-auto"
}
  , we = {
    class: "sm:mx-auto sm:w-full sm:max-w-md"
}
  , ye = {
    class: "mt-6 text-center text-3xl font-extrabold text-gray-900"
}
  , ve = {
    class: "mt-2 text-center text-gray-600"
}
  , be = {
    class: "mt-8 sm:mx-auto sm:w-full"
}
  , xe = {
    class: "bg-white"
}
  , _e = {
    class: "flex flex-col"
}
  , Pe = B('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or</span></div></div>', 1)
  , Ae = B('<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="144" height="144" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg><span>Sign in with Google</span>', 2)
  , Ce = [Ae]
  , Ve = a("div", {
    class: "mt-6"
}, [a("p", {
    class: "text-slate-400 text-sm text-center"
}, [b(" By continuing, you agree to our "), a("a", {
    href: "https://www.mixo.io/terms",
    class: "text-brand-primary",
    target: "_blank"
}, "Terms of Service"), b(" and "), a("a", {
    href: "https://www.mixo.io/privacy",
    class: "text-brand-primary",
    target: "_blank"
}, "Privacy Policy")])], -1)
  , Se = {
    __name: "AuthForm",
    props: {
        signInLabel: {
            type: String,
            default: ""
        },
        redirectAfterAuth: {
            type: Boolean,
            default: !1
        },
        registerLabel: {
            type: String,
            default: " an account"
        }
    },
    setup(d) {
        const n = d
          , q = new Z
          , s = F("$toast")
          , V = F("$vfm")
          , z = J()
          , i = Q()
          , [m] = E()
          , [l,M] = E(!0)
          , [g,U] = E()
          , x = P("")
          , r = P("")
          , f = P("")
          , w = P("")
          , H = X(()=>l.value ? "Create Account" : !l.value && g.value ? "Reset Password" : "Sign In")
          , j = async()=>{
            if (!await ie(h, r.value, f.value).catch(e=>{
                throw e.code === "auth/user-not-found" || e.code === "auth/wrong-password" ? new Error("Invalid email address and/or password. Please try again.") : new Error(`${e.message} Please try again. `)
            }
            ))
                throw new Error("Login failed. Please try again.");
            await V.hide("auth"),
            N("Login", {
                method: "email"
            }),
            n != null && n.redirectAfterAuth && k()
        }
          , T = async()=>{
            if (await te(h, q).catch(e=>{
                !e.code === "auth/popup-closed-by-user" && L.error(e)
            }
            ))
                await V.hide("auth"),
                N("Login", {
                    method: "google"
                }),
                n != null && n.redirectAfterAuth && k();
            else
                return new Error("No user found")
        }
          , W = async()=>{
            if (!await le(h, r.value, f.value).catch(e=>{
                throw e.code === "auth/email-already-in-use" ? new Error("Invalid email address and/or password. Please try again.") : new Error(`${e.message} Please try again. `)
            }
            ))
                throw new Error("No user created");
            N("Sign Up", {
                method: "email"
            }),
            await ce(h.currentUser, {
                displayName: x.value
            });
            try {
                await ue(h.currentUser),
                s == null || s.open({
                    message: "Please check your email to verify your account 📧",
                    type: "success",
                    dismissible: !0
                })
            } catch (e) {
                L.error(e),
                s == null || s.open({
                    message: "Sorry there was an error sending the verification email. Please contact <a href='https://app.mixo.io/support'>support</a>.",
                    type: "error",
                    dismissible: !0,
                    duration: 0
                })
            }
            await V.hide("auth"),
            n != null && n.redirectAfterAuth && k()
        }
          , D = async()=>{
            var o;
            if (m.value = !0,
            w.value = "",
            g.value)
                return await G();
            try {
                l.value ? await W() : await j()
            } catch (e) {
                w.value = ((o = e == null ? void 0 : e.message) == null ? void 0 : o.replace("Firebase: ", "")) || "Sorry there was an error. Please try again.",
                m.value = !1
            }
        }
          , G = async()=>{
            if (!(r != null && r.value))
                return s == null ? void 0 : s.open({
                    message: "Please enter your email first 🙉",
                    type: "error",
                    dismissible: !0
                });
            await ae(h, r == null ? void 0 : r.value, {
                url: "https://app.mixo.io"
            }).catch(o=>{
                var e;
                m.value = !1,
                w.value = ((e = o == null ? void 0 : o.message) == null ? void 0 : e.replace("Firebase: ", "")) || "Sorry there was an error. Please try again.",
                m.value = !1
            }
            ),
            m.value = !1,
            g.value = !1,
            r.value = "",
            s == null || s.open({
                message: "Please check your email for your reset link 😀",
                type: "success",
                dismissible: !0
            })
        }
          , K = ()=>{
            M(),
            g.value = !1
        }
          , k = async()=>{
            var e, _, c;
            if (await se()) {
                const S = (e = i == null ? void 0 : i.query) != null && e.redirect && typeof ((_ = i == null ? void 0 : i.query) == null ? void 0 : _.redirect) == "string" ? (c = i == null ? void 0 : i.query) == null ? void 0 : c.redirect : "/";
                z.push(S)
            }
        }
        ;
        return (o,e)=>{
            const _ = ge
              , c = ee("FormKit")
              , S = re
              , O = oe
              , Y = ne;
            return p(),
            R("div", fe, [a("div", we, [y(_, {
                class: "mx-auto h-16 w-auto text-slate-300"
            }), a("h2", ye, v(t(l) ? `Register${d.registerLabel}` : `Sign in${d.signInLabel}`), 1), a("p", ve, [b(v(t(l) ? "Already have an account?" : "New to Mixo?") + " ", 1), a("button", {
                type: "button",
                class: "font-medium text-brand-primary hover:text-brand-secondary",
                onClick: K
            }, v(t(l) ? `Sign in${d.signInLabel}` : `Register${d.registerLabel}`), 1)])]), a("div", be, [a("div", xe, [y(c, {
                type: "form",
                class: "space-y-4",
                "submit-label": t(l) ? "Create Account" : "Sign In",
                actions: !1,
                onSubmit: D
            }, {
                default: A(()=>[t(l) ? (p(),
                $(c, {
                    key: 0,
                    id: "auth-first-name",
                    modelValue: t(x),
                    "onUpdate:modelValue": e[0] || (e[0] = u=>I(x) ? x.value = u : null),
                    name: "firstName",
                    type: "text",
                    autocomplete: "firstName",
                    required: "",
                    placeholder: "First Name",
                    "floating-label": !1
                }, null, 8, ["modelValue"])) : C("", !0), y(c, {
                    id: "auth-email",
                    modelValue: t(r),
                    "onUpdate:modelValue": e[1] || (e[1] = u=>I(r) ? r.value = u : null),
                    name: "email",
                    type: "email",
                    autocomplete: "email",
                    required: "",
                    placeholder: "Email",
                    "floating-label": !1
                }, null, 8, ["modelValue"]), t(g) ? C("", !0) : (p(),
                $(c, {
                    key: 1,
                    id: "auth-password",
                    modelValue: t(f),
                    "onUpdate:modelValue": e[2] || (e[2] = u=>I(f) ? f.value = u : null),
                    name: "password",
                    type: "password",
                    autocomplete: "current-password",
                    required: "",
                    placeholder: "Password",
                    "floating-label": !1
                }, null, 8, ["modelValue"])), t(w) ? (p(),
                $(S, {
                    key: 2,
                    title: "Error",
                    type: "danger"
                }, {
                    default: A(()=>[b(v(t(w)), 1)]),
                    _: 1
                })) : C("", !0), a("div", _e, [y(O, {
                    type: "submit",
                    theme: "brand-primary",
                    loading: t(m)
                }, {
                    default: A(()=>[b(v(t(H)), 1)]),
                    _: 1
                }, 8, ["loading"])]), y(Y, {
                    class: "!mt-3"
                }, {
                    default: A(()=>[t(l) ? C("", !0) : (p(),
                    R("button", {
                        key: 0,
                        type: "button",
                        class: "font-medium text-slate-400 hover:text-brand-primary text-sm",
                        onClick: e[3] || (e[3] = (...u)=>t(U) && t(U)(...u))
                    }, " Forgot your password? "))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["submit-label"]), a("div", {
                class: "mt-6"
            }, [Pe, a("div", {
                class: "mt-6"
            }, [a("div", null, [a("button", {
                type: "button",
                class: "w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-md shadow-sm bg-slate-50 text-sm font-medium text-gray-500 hover:bg-slate-100 space-x-2",
                onClick: T
            }, Ce)])])]), Ve])])])
        }
    }
};
export {Se as default};
//# sourceMappingURL=AuthForm-52e5a6a1.js.map
