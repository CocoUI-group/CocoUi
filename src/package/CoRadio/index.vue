<template>
  <label
    role="radio"
    class="border border-opacity-0 co-radio mr-4 inline-flex items-center"
    :class="[sizeClass, { 'cursor-not-allowed opacity-80': radioDisabled }]"
  >
    <input
      @change="onChange"
      :name="radioName"
      type="radio"
      v-bind="$attrs"
      ref="radio"
      :disabled="radioDisabled"
      class="text-primary-500 focus:ring-primary-500 cursor-pointer"
      :class="{ 'text-gray-400 bg-gray-50 border-gray-400': radioDisabled }"
    />
    <span class="pl-2" :class="{ 'text-primary-500': isCheck, 'text-gray-400': radioDisabled }">
      <template v-if="!$slots.default">
        {{ text }}
      </template>
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, PropType, ref, toRefs, watch } from 'vue'
import { get } from '@vueuse/core'
import { ThemeSize } from '@/helper'
import { RadioGroup, radioGroupKey } from '@/package/CoRadioGroup/index.config'
import { reactiveSizeStyle } from '@/package/CoRadio/index.config'

const eventEmit = ['update:modelValue', 'change']

export default defineComponent({
  name: 'CoRadio',
  props: {
    text: String,
    modelValue: { type: [String, Number, Boolean] },
    value: { type: [String, Number, Boolean], required: true },
    disabled: Boolean,
    name: String,
    size: { type: String as PropType<ThemeSize>, default: ThemeSize.md },
  },
  emits: [...eventEmit],
  setup(props, ctx) {
    const radio = ref<HTMLInputElement>()
    const { value, modelValue, name, size, disabled } = toRefs(props)
    const radioGroup = inject<RadioGroup>(radioGroupKey, {})
    const radioModel = computed(() =>
      radioGroup.isGroup ? radioGroup.modelValue : get(modelValue)
    )
    const isCheck = computed(() => get(value) === get(radioModel))
    const radioName = computed(() =>
      radioGroup.isGroup ? radioGroup.name : get(name) || Math.random() + ''
    )
    const radioSize = computed(() => (radioGroup.isGroup ? radioGroup.size : get(size)))
    const radioDisabled = computed(() => (radioGroup.isGroup ? radioGroup.disabled : get(disabled)))

    const onChange = () => {
      if (radioGroup.isGroup) {
        radioGroup.changeEvent(get(value))
      } else {
        eventEmit.forEach((e) => ctx.emit(e, get(radio)?.checked ? get(value) : null))
      }
    }
    const radioCheck = (v: string | number | boolean) => {
      const $el = get(radio)
      $el && ($el.checked = v === get(value))
    }
    watch(radioModel, radioCheck)
    onMounted(() => radioCheck(get(radioModel)))
    return {
      isCheck,
      radioModel,
      radioName,
      onChange,
      radio,
      sizeClass: reactiveSizeStyle(radioSize),
      radioDisabled,
    }
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
