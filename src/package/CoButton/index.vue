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
import { computed, defineComponent, PropType } from 'vue'
import { ThemeSize, ThemeType } from '@/helper'
import { Round, sizeStyle, typeStyle } from '@/package/CoButton/index.config'

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
      type: String as PropType<Round>,
      default: Round.bySize,
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ['click'],
  setup(props) {
    const typeClassList = computed(() => {
      const type = props.type
      const plain = props.plain
      const disabled = props.disabled
      return typeStyle(type, plain, disabled)
    })
    const sizeClass = computed(() => {
      const size = props.size
      const round = props.round
      return sizeStyle(size, round)
    })

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
