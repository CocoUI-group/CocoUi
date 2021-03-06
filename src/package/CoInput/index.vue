<template>
  <div class="inline-block relative">
    <input
      v-model="value"
      v-bind="$attrs"
      :class="[sizeClass, colorClassList]"
      :disabled="disabled"
      :type="password && refPassword ? 'password' : type"
      class="
        transition-all
        duration-300
        flex-shrink-0
        border border-solid border-gray-300
        outline-none
        focus:border-primary-500 focus:ring-primary-500 focus:outline-none
      "
    />
    <co-icon
      v-if="password"
      :class="[rightClass]"
      :icon="eyeIcon"
      class="absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
      pointer
      @click="togglePassword()"
    />
    <co-icon
      v-if="clearable"
      :class="[rightClass]"
      :icon="clearIcon"
      class="absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
      pointer
      @click="clear"
    />
    <div
      v-if="$slots.before"
      :class="[leftClass]"
      class="text-gray-400 flex items-center absolute top-1/2 transform -translate-y-1/2"
    >
      <slot name="before" />
    </div>
    <div
      v-if="$slots.after"
      :class="[rightClass]"
      class="text-gray-400 flex items-center absolute top-1/2 transform -translate-y-1/2"
    >
      <slot name="after" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, watch } from "vue";
import {
  reactiveLeftSlot,
  reactiveRightSlot,
  reactiveSizeStyle,
  reactiveTypeStyle,
} from "@/package/CoInput/input.config";
import { ThemeRound, ThemeSize } from "@/helper";
import CoIcon from "@/package/CoIcon/index.vue";
import { IconName } from "@/package/CoIcon/index.icon";
import { or, reactify, set, useToggle, useVModel } from "@vueuse/core";

export default defineComponent({
  name: "CoInput",
  components: { CoIcon },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: { type: String, default: "text" },
    size: {
      type: String as PropType<ThemeSize>,
      default: ThemeSize.md,
    },
    round: {
      type: String as PropType<ThemeRound>,
      default: ThemeRound.bySize,
    },
    disabled: Boolean,
    error: Boolean,
    password: Boolean,
    clearable: Boolean,
  },
  emits: ["input", "update:modelValue", "clear"],
  setup(props, ctx) {
    const { disabled, error, size, round, password, clearable } = toRefs(props);
    const value = useVModel(props, "modelValue", ctx.emit);
    watch(value, (v) => ctx.emit("input", v));
    const colorClassList = reactiveTypeStyle(disabled, error);
    const sizeClass = reactiveSizeStyle(size, round, ctx.slots, or(password, clearable));
    const [refPassword, togglePassword] = useToggle(true);
    const eyeIcon = reactify((v: boolean) => (v ? IconName.EyeClose : IconName.Eye))(refPassword);
    const leftClass = reactiveLeftSlot(round, size);
    const rightClass = reactiveRightSlot(round, size);
    return {
      sizeClass,
      colorClassList,
      value,
      refPassword,
      eyeIcon,
      leftClass,
      rightClass,
      clearIcon: IconName.CloseCircle,
      clear: () => {
        set(value, "");
        ctx.emit("clear");
      },
      togglePassword,
    };
  },
});
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
