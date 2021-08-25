<template>
  <div class="justify-center flex-1">
    <CoButton @click="onClick" :size="size">点击</CoButton>
    <CoIcon :icon="icon"></CoIcon>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import CoButton from '@/package/CoButton/index.vue'
import CoIcon from '@/package/CoIcon/index.vue'
import { IconName } from '@/package/CoIcon/index.icon'
import { ThemeSize } from '@/helper'

export default defineComponent({
  components: { CoIcon, CoButton },
  setup() {
    const a = ref(true)
    return {
      onClick() {
        a.value = !a.value
      },
      icon: computed(() => (a.value ? IconName.Arrowleft : IconName.Arrowdown)),
      size: computed(() => (a.value ? ThemeSize.lg : ThemeSize.sm)),
    }
  },
})
</script>
