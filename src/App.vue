<template>
  <div class="p-10 w-full bg-danger-500">
    <CoSpace :size="ThemeSize.mini" class="bg-danger-50">
      <div>123</div>
      <div>321</div>
    </CoSpace>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { IconName } from '@/package/CoIcon/index.icon'
import { ThemeSize } from '@/helper'
import CoSpace from '@/package/CoSpace/index.vue'

export default defineComponent({
  components: { CoSpace },
  setup() {
    const a = ref(true)
    return {
      onClick() {
        a.value = !a.value
      },
      icon: computed(() => (a.value ? IconName.Arrowleft : IconName.Arrowdown)),
      size: computed(() => (a.value ? ThemeSize.lg : ThemeSize.sm)),
      ThemeSize,
    }
  },
})
</script>
