<template>
  <a
    class="transition-all duration-300 flex-shrink-0"
    :class="[typeClassList, sizeClass]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="onClick"
    ><slot></slot
  ></a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ThemeSize, ThemeType } from '@/helper'
import { typeStyle, sizeStyle } from '@/package/CoLink/index.config'
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
    const typeClassList = computed(() => {
      const type = props.type
      const underline = props.underline
      const disabled = props.disabled
      return typeStyle(type, disabled, underline)
    })
    const sizeClass = computed(() => {
      const size = props.size
      return sizeStyle(size)
    })
    return {
      typeClassList,
      sizeClass,
      onClick(e: Event) {
        if (!props.disabled) {
          ctx.emit('click', e)
        }
      },
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
