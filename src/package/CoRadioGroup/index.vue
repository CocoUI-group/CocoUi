<template>
  <div class="co-radio-group" role="radioGroup" ref="radioGroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, provide, reactive, ref, toRefs } from 'vue'
import { ThemeSize } from '@/helper'
import { radioGroupKey } from '@/package/CoRadioGroup/index.config'
const eventEmit = ['update:modelValue', 'change']
export default defineComponent({
  name: 'CoRadioGroup',
  props: {
    size: { type: String as PropType<ThemeSize>, default: ThemeSize.md },
    disabled: Boolean,
    name: String,
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
  },
  emits: [...eventEmit],
  setup(props, ctx) {
    const radioGroup = ref<HTMLDivElement>()

    provide(
      radioGroupKey,
      reactive({
        ...toRefs(props),
        name: props.name || Math.random() + '',
        isGroup: true,
        changeEvent: (value) => eventEmit.forEach((e) => ctx.emit(e, value)),
      })
    )

    return {
      radioGroup,
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
