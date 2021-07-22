<template>
  <div class="inline-block w-60 relative">
    <input
      v-model="value"
      v-bind="$attrs"
      :class="[sizeClass, colorClassList]"
      :disabled="disabled"
      :type="type || (password && refPassword ? 'password' : 'text')"
      class="
        w-full
        transition-all
        duration-300
        flex-shrink-0
        border border-solid border-gray-300
        outline-none
        focus:border-primary-500 focus:ring-primary-500 focus:outline-none
      "
    />
    <co-icon
      class="absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
      :class="[leftClass]"
      v-if="password"
      :icon="eyeIcon"
      pointer
      @click="togglePassword"
    />
    <co-icon
      class="absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
      :class="[rightClass]"
      v-if="clearable"
      :icon="clearIcon"
      pointer
      @click="clear"
    />
    <div
      v-if="$slots.before"
      class="text-gray-400 flex items-center absolute top-1/2 transform -translate-y-1/2"
      :class="[leftClass]"
    >
      <slot name="before"></slot>
    </div>
    <div
      v-if="$slots.after"
      class="text-gray-400 flex items-center absolute top-1/2 transform -translate-y-1/2"
      :class="[rightClass]"
    >
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { leftSlot, rightSlot, sizeStyle, typeStyle } from '@/package/CoInput/input.config'
import { ThemeRound, ThemeSize } from '@/helper'
import CoIcon from '@/package/CoIcon/index.vue'
import { IconName } from '@/package/CoIcon/index.icon'

const emits = ['input', 'update:modelValue'] as const
export default defineComponent({
  name: 'CoInput',
  components: { CoIcon },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: String,
    size: {
      type: String as PropType<ThemeSize>,
      default: ThemeSize.md,
    },
    round: {
      type: String as PropType<ThemeRound>,
      default: ThemeRound.bySize,
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
    password: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
  },
  emits: [...emits, 'clear'],
  setup(props, ctx) {
    const value = computed({
      get() {
        return props.modelValue
      },
      set(v) {
        emits.forEach((e) => ctx.emit(e, v))
      },
    })
    const colorClassList = computed(() => typeStyle(props.disabled, props.error))
    const sizeClass = computed(() =>
      sizeStyle(props.size, props.round, ctx.slots, props.password || props.clearable)
    )
    const refPassword = ref(false)
    const eyeIcon = computed(() => (refPassword.value ? IconName.EyeClose : IconName.Eye))
    const leftClass = computed(() => leftSlot(props.round, props.size))
    const rightClass = computed(() => rightSlot(props.round, props.size))
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
        value.value = ''
        ctx.emit('clear')
      },
      togglePassword: () => (refPassword.value = !refPassword.value),
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
