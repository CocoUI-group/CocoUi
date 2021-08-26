<template>
  <i class="iconfont" :class="[iconName, classSize, typeClassList]" v-if="!svg"></i>
  <svg
    v-else
    class="icon-svg icon inline-block"
    :class="[classSize, typeClassList]"
    aria-hidden="true"
  >
    <use :xlink:href="'#' + iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { ThemeSize, ThemeType } from '@/helper'
import { IconName } from '@/package/CoIcon/index.icon'
import { reactiveSizeStyle, reactiveTypeStyle } from '@/package/CoIcon/index.config'
import { reactify } from '@vueuse/core'

export default defineComponent({
  name: 'CoIcon',
  props: {
    svg: {
      type: Boolean,
    },
    icon: { type: String as PropType<IconName>, required: true },
    size: {
      type: String as PropType<ThemeSize>,
      default: ThemeSize.md,
    },
    type: {
      type: String as PropType<ThemeType>,
      default: ThemeType.default,
    },
    pointer: Boolean,
  },
  setup(props) {
    const { icon, size, type, pointer } = toRefs(props)
    const iconName = reactify((v: IconName) => `co-${v}`)(icon)
    const classSize = reactiveSizeStyle(size)
    const typeClassList = reactiveTypeStyle(type, pointer)
    return {
      iconName,
      classSize,
      typeClassList,
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
