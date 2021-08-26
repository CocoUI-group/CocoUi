<template>
  <a
    class="transition-all duration-300 flex-shrink-0"
    :class="[typeClassList, sizeClass]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { ThemeSize, ThemeType } from '@/helper'
import { reactiveSizeStyle, reactiveTypeStyle } from '@/package/CoLink/index.config'
import { get } from '@vueuse/core'

export default defineComponent({
  name: 'CoLink',
  props: {
    type: {
      type: String as PropType<ThemeType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ThemeSize>,
      default: ThemeSize.md,
    },
    href: {
      type: String,
      default: 'javascript:;',
    },
    disabled: Boolean,
    underline: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    const { type, underline, disabled, size } = toRefs(props)
    const typeClassList = reactiveTypeStyle(type, disabled, underline)
    const sizeClass = reactiveSizeStyle(size)
    return {
      typeClassList,
      sizeClass,
      onClick: (e: Event) => !get(disabled) && ctx.emit('click', e),
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
