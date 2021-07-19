<template>
  <input type="text" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { InputType } from '@/package/CoInput/input.config'
export default defineComponent({
  name: 'CoInput',
  props: {
    type: {
      type: String as PropType<InputType>,
    },
  },
})
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
