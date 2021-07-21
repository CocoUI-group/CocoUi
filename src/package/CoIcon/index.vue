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
import { computed, defineComponent, PropType } from 'vue'
import { ThemeSize, ThemeType } from '@/helper'
import { sizeStyle, typeStyle } from '@/package/CoIcon/index.config'
import { IconName } from '@/package/CoIcon/index.icon'

console.log(IconName)
export default defineComponent({
  name: 'CoIcon',
  props: {
    svg: {
      type: Boolean,
    },
    icon: { type: String as PropType<IconName> },
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
    const iconName = computed(() => `co-${props.icon}`)
    const classSize = computed(() => sizeStyle(props.size))
    const typeClassList = computed(() => typeStyle(props.type, props.pointer))
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
