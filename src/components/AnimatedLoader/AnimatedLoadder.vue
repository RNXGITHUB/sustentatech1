<template>
  <component
    :is="wrapper"
    inner-class="h-80"
    :animating="true"
    data-testid="animated-loader"
  >
    <UiCenter class="space-y-3 flex-col h-full sm:space-y-4">
      <div
        class="space-y-3 flex flex-col sm:space-x-3 sm:flex-row items-center sm:space-y-0"
      >
        <img
          class="w-16 sm:w-12"
          :src="activePrompt?.imageUrl"
          :alt="activePrompt?.text"
        />
        <p
          class="text-slate-800 font-bold px-2 animate-pulse text-2xl sm:text-3xl text-center"
        >
          {{ activePrompt?.text }}
        </p>
      </div>

      <p
        v-if="activePrompt?.note"
        class="text-slate-500 px-2 text-sm sm:text-base text-center"
      >
        {{ activePrompt?.note }}
      </p>
    </UiCenter>
  </component>
</template>

<script setup>
import { markRaw } from "vue";
import MagicWrap from "@/components/MagicWrap/MagicWrap.vue";

const props = defineProps({
  prompts: {
    type: Array,
    default() {
      return [];
    },
  },
  minDelay: {
    type: Number,
    default: 950,
  },
  maxDelay: {
    type: Number,
    default: 3300,
  },
  showWrap: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["complete"]);

// Data
const currentPromptIndex = ref(-1); // start at -1 so that the first prompt is index 0
const activePrompt = eagerComputed(() => {
  return props.prompts[currentPromptIndex.value];
});
const wrapper = eagerComputed(() => {
  return props.showWrap ? markRaw(MagicWrap) : "div";
});

const randomDelay = () => {
  const minDelay = props.minDelay;
  const maxDelay = props.maxDelay;
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  return delay;
};

// iterate through the prompts array and show the next prompt after a random delay
const showNextPrompt = () => {
  if (currentPromptIndex.value < props.prompts.length - 1) {
    currentPromptIndex.value++;

    if (activePrompt.value?.complete) {
      emit("complete");
    }

    const delay = activePrompt.value?.delay || randomDelay();
    setTimeout(showNextPrompt, delay);
  } else {
    emit("complete");
  }
};

onMounted(() => {
  showNextPrompt();
});
</script>
