<script setup>
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getCurrentUser } from "vuefire";
import { firebaseAuth } from "@/modules/firebase.js";
import { logger } from "@/utils/index.js";
import { track } from "@/lib/tracking";

const provider = new GoogleAuthProvider();

const props = defineProps({
  signInLabel: {
    type: String,
    default: "",
  },
  redirectAfterAuth: {
    type: Boolean,
    default: false,
  },
  registerLabel: {
    type: String,
    default: " an account",
  },
});

// Injections
const toast = inject("$toast");
const $vfm = inject("$vfm");

// Composables
const router = useRouter();
const route = useRoute();

const [loading] = useToggle();
const [isRegistering, toggleIsRegistering] = useToggle(true);
const [isResettingPassword, toggleResettingPassword] = useToggle();

// Data
const firstName = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const submitButtonLabel = eagerComputed(() => {
  if (isRegistering.value) return "Create Account";

  if (!isRegistering.value && isResettingPassword.value) return "Reset Password";

  return "Sign In";
});

// Methods
const signIn = async () => {
  const user = await signInWithEmailAndPassword(
    firebaseAuth,
    email.value,
    password.value
  ).catch((err) => {
    if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
      throw new Error("Invalid email address and/or password. Please try again.");
    } else {
      throw new Error(`${err.message} Please try again. `);
    }
  });

  if (!user) throw new Error("Login failed. Please try again.");

  await $vfm.hide("auth");

  track("Login", { method: "email" });

  if (props?.redirectAfterAuth) {
    authenticatedRedirect();
  }
};

const signInWithGoogle = async () => {
  const user = await signInWithPopup(firebaseAuth, provider).catch((err) => {
    if (!err.code === "auth/popup-closed-by-user") {
      logger.error(err);
    }
  });
  if (!user) {
    return new Error("No user found");
  } else {
    await $vfm.hide("auth");

    track("Login", { method: "google" });

    if (props?.redirectAfterAuth) {
      authenticatedRedirect();
    }
  }
};

const register = async () => {
  const user = await createUserWithEmailAndPassword(
    firebaseAuth,
    email.value,
    password.value
  ).catch((err) => {
    if (err.code === "auth/email-already-in-use") {
      throw new Error("Invalid email address and/or password. Please try again.");
    } else {
      throw new Error(`${err.message} Please try again. `);
    }
  });

  if (!user) throw new Error("No user created");

  // TODO: On signup, track the referring domain and channel
  // How to track referral: track('Sign Up', {"channel": "referral", "referringDomain": "tiktok.com", "refTag": "none", })
  track("Sign Up", {
    method: "email",
  });

  await updateProfile(firebaseAuth.currentUser, {
    displayName: firstName.value,
  });

  try {
    await sendEmailVerification(firebaseAuth.currentUser);

    toast?.open({
      message: "Please check your email to verify your account 📧",
      type: "success",
      dismissible: true,
    });
  } catch (error) {
    logger.error(error);

    toast?.open({
      message: `Sorry there was an error sending the verification email. Please contact <a href='${
        import.meta.env.VITE_APP_URL
      }/support'>support</a>.`,
      type: "error",
      dismissible: true,
      duration: 0,
    });
  }

  await $vfm.hide("auth");

  if (props?.redirectAfterAuth) {
    authenticatedRedirect();
  }
};

const onSubmit = async () => {
  loading.value = true;
  error.value = "";

  if (isResettingPassword.value) {
    return await resetPassword();
  }

  try {
    isRegistering.value ? await register() : await signIn();
  } catch (err) {
    error.value =
      err?.message?.replace("Firebase: ", "") ||
      "Sorry there was an error. Please try again.";
    loading.value = false;
  }
};

const resetPassword = async () => {
  if (!email?.value) {
    return toast?.open({
      message: "Please enter your email first 🙉",
      type: "error",
      dismissible: true,
    });
  }

  await sendPasswordResetEmail(firebaseAuth, email?.value, {
    url: import.meta.env.VITE_APP_URL,
  }).catch((err) => {
    loading.value = false;
    error.value =
      err?.message?.replace("Firebase: ", "") ||
      "Sorry there was an error. Please try again.";
    loading.value = false;
  });

  loading.value = false;
  isResettingPassword.value = false;
  email.value = "";

  toast?.open({
    message: "Please check your email for your reset link 😀",
    type: "success",
    dismissible: true,
  });
};

const onToggleAuth = () => {
  toggleIsRegistering();
  isResettingPassword.value = false;
};

const authenticatedRedirect = async () => {
  const currentUser = await getCurrentUser();

  // If we have a user redirect them to the redirect path after login
  if (currentUser) {
    const to =
      route?.query?.redirect && typeof route?.query?.redirect === "string"
        ? route?.query?.redirect
        : "/";

    router.push(to);
  }
};
</script>

<template>
  <div
    data-testid="auth-form"
    class="auth-form min-h-full flex flex-col justify-center py-10 px-2 w-80 mx-auto"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <IconIcBaselineLockOpen class="mx-auto h-16 w-auto text-slate-300" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ !isRegistering ? `Sign in${signInLabel}` : `Register${registerLabel}` }}
      </h2>

      <p class="mt-2 text-center text-gray-600">
        {{ isRegistering ? `Already have an account?` : `New to Mixo?` }}
        <button
          type="button"
          class="font-medium text-brand-primary hover:text-brand-secondary"
          @click="onToggleAuth"
        >
          {{ isRegistering ? `Sign in${signInLabel}` : `Register${registerLabel}` }}
        </button>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full">
      <div class="bg-white">
        <FormKit
          type="form"
          class="space-y-4"
          :submit-label="isRegistering ? 'Create Account' : 'Sign In'"
          :actions="false"
          @submit="onSubmit"
        >
          <FormKit
            v-if="isRegistering"
            id="auth-first-name"
            v-model="firstName"
            name="firstName"
            type="text"
            autocomplete="firstName"
            required=""
            placeholder="First Name"
            :floating-label="false"
          />

          <FormKit
            id="auth-email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            placeholder="Email"
            :floating-label="false"
          />

          <FormKit
            v-if="!isResettingPassword"
            id="auth-password"
            v-model="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            placeholder="Password"
            :floating-label="false"
          />

          <UiAlert v-if="error" title="Error" type="danger">
            {{ error }}
          </UiAlert>

          <div class="flex flex-col">
            <UiButton type="submit" theme="brand-primary" :loading="loading">
              {{ submitButtonLabel }}
            </UiButton>
          </div>

          <UiCenter class="!mt-3">
            <button
              v-if="!isRegistering"
              type="button"
              class="font-medium text-slate-400 hover:text-brand-primary text-sm"
              @click="toggleResettingPassword"
            >
              Forgot your password?
            </button>
          </UiCenter>
        </FormKit>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> Or</span>
            </div>
          </div>
          <div class="mt-6">
            <div>
              <button
                type="button"
                class="w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-md shadow-sm bg-slate-50 text-sm font-medium text-gray-500 hover:bg-slate-100 space-x-2"
                @click="signInWithGoogle"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="144"
                  height="144"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-slate-400 text-sm text-center">
            By continuing, you agree to our
            <a
              href="https://www.mixo.io/terms"
              class="text-brand-primary"
              target="_blank"
            >Terms of Service</a>
            and
            <a
              href="https://www.mixo.io/privacy"
              class="text-brand-primary"
              target="_blank"
            >Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
