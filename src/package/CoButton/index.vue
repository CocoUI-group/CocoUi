<template>
  <button
    class="transition-all duration-300 flex-shrink-0 border border-solid shadow-md"
    :class="[typeClassList, sizeClass]"
    @click="(e) => !disabled && $emit('click', e)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { ThemeRound, ThemeSize, ThemeType } from '@/helper'
import { reactiveSizeStyle, reactiveTypeStyle } from '@/package/CoButton/index.config'

export default defineComponent({
  name: 'CoButton',
  props: {
    type: {
      type: String as PropType<ThemeType>,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
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
  },
  emits: ['click'],
  setup(props) {
    const { type, plain, disabled, size, round } = toRefs(props)
    const typeClassList = reactiveTypeStyle(type, plain, disabled)
    const sizeClass = reactiveSizeStyle(size, round)
    return {
      typeClassList,
      sizeClass,
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;

button + button {
  @apply ml-4;
}
</style>
