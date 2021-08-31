<template>
  <div class="co-space" :class="[`co-space__${direction}`, `co-space__${size}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ThemeDirection, ThemeSize } from '@/helper'

export default defineComponent({
  name: 'CoSpace',
  props: {
    direction: {
      type: String as PropType<ThemeDirection>,
      default: ThemeDirection.x,
    },
    size: { type: String as PropType<ThemeSize>, default: ThemeSize.md },
  },
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
.co-space {
  @apply inline-block box-border w-full;
}

.co-space.co-space__x > * {
  @apply inline-block;
}

.co-space.co-space__y > * {
  @apply block;
}

.co-space.co-space__x.co-space__mini > * {
  @apply mr-2;
}

.co-space.co-space__x.co-space__sm > * {
  @apply mr-3;
}

.co-space.co-space__x.co-space__md > * {
  @apply mr-4;
}

.co-space.co-space__x.co-space__lg > * {
  @apply mr-5;
}

.co-space.co-space__y.co-space__mini > * {
  @apply mb-2;
}

.co-space.co-space__y.co-space__sm > * {
  @apply mb-3;
}

.co-space.co-space__y.co-space__md > * {
  @apply mb-4;
}

.co-space.co-space__y.co-space__lg > * {
  @apply mb-5;
}

.co-space.co-space__x > :last-child {
  @apply mr-0;
}

.co-space.co-space__y > :last-child {
  @apply mb-0;
}
</style>
