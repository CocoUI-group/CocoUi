<template>
  <div class="p-10 w-full">
    <CoPanel class="w-1/3 inline-block m-8">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8">
      <template #header>
        <h1>测试</h1>
      </template>
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8">
      <template #footer>
        <h1>测试</h1>
      </template>
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8">
      <template #header>
        <h1>测试</h1>
      </template>
      <template #footer>
        <h1>测试</h1>
      </template>
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel :padding="false" class="w-1/3 inline-block m-8">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8">
      <template #img>
        <img src="https://static.dianchacha.com/v1/img/dsr/banner.png?v2" alt="" />
      </template>
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">点击</CoButton>
        <CoIcon :icon="icon"></CoIcon>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8" :padding="ThemeSize.mini">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">ThemeSize.mini</CoButton>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8" :padding="ThemeSize.sm">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">ThemeSize.sm</CoButton>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8" :padding="ThemeSize.md">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">ThemeSize.md</CoButton>
      </div>
    </CoPanel>
    <CoPanel class="w-1/3 inline-block m-8" :padding="ThemeSize.lg">
      <div class="justify-center flex-1">
        <CoButton @click="onClick" :size="size">ThemeSize.lg</CoButton>
      </div>
    </CoPanel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import CoButton from '@/package/CoButton/index.vue'
import CoIcon from '@/package/CoIcon/index.vue'
import { IconName } from '@/package/CoIcon/index.icon'
import { ThemeSize } from '@/helper'
import CoPanel from '@/package/CoPanel/index.vue'

export default defineComponent({
  components: { CoPanel, CoIcon, CoButton },
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
