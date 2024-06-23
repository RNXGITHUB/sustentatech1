<script setup>
import stickybits from "stickybits";

const emit = defineEmits(["url-click"]);
const props = defineProps({
  isNewSite: {
    type: Boolean,
    default: false,
  },
  showCustomDomainLink: {
    type: Boolean,
    default: true,
  },
  url: {
    type: String,
    default: "",
  },
  siteId: {
    type: String,
    default: "",
  },
  theme: {
    type: Object,
    default() {
      return {};
    },
  },
});

const browserUi = ref(null);
let stickybitsInstance;

onMounted(() => {
  stickybitsInstance = stickybits(browserUi.value, {
    stickyBitStickyOffset: 0,
  });
});

onBeforeUnmount(() => {
  stickybitsInstance.cleanup();
});
</script>

<template>
  <div
    ref="browserUi"
    class="h-full border border-slate-300 shadow rounded-xl lg:rounded-3xl mb-2 bg-slate-50 overflow-hidden"
    data-testid="browser-ui"
  >
    <!-- Browser Nav Bar -->
    <div
      class="flex justify-between sm:justify-start space-x-2 lg:space-x-3 px-3 py-2 md:p-3 lg:p-4 border-b border-slate-200 items-center"
    >
      <div class="items-center space-x-1 sm:space-x-2 flex">
        <div class="browser-ui-nav-control" />
        <div class="browser-ui-nav-control" />
        <div class="browser-ui-nav-control" />
      </div>

      <div
        :key="url"
        class="hidden sm:flex flex-1 w-full sm:w-auto lg:max-w-sm xl:max-w-md lg:w-full overflow-hidden truncate p-2 md:px-3 bg-white rounded-2xl md:rounded-lg 
        border border-slate-300 justify-start text-slate-500 space-x-1 md:space-x-1.5 text-sm l:text-base lg:flex-none items-center"
      >
        <IconIcRoundLock class="w-4 mt-0.5 text-slate-300" />

        <a
          v-if="url"
          :href="url"
          target="_blank"
          title="View website"
        >
          {{ url?.replace("https://", "") }}
        </a>

        <button
          v-if="!url && !isNewSite"
          type="button"
          class="text-slate-400 hover:text-brand-primary text-xs md:text-sm"
          @click="$emit('url-click')"
        >
          Click Publish to create a sharable url&hellip;
        </button>

        <p v-if="!url && isNewSite" class="text-slate-400 text-xs md:text-sm">
          Save and Continue to create a public url&hellip;
        </p>
      </div>

      <DomainSettingsButton v-if="showCustomDomainLink" />

      <slot name="nav" />
    </div>

    <!-- Browser Content -->
    <slot />
  </div>
</template>

<style lang="postcss">
.browser-ui-nav-control {
  @apply h-2 w-2 bg-slate-300 rounded-full;
  @apply sm:h-3 sm:w-3;
}
</style>
