<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto">
      <HelloWorld msg="Hello Vue 3 + Vite + Tailwind CSS" />
      <CoButton disabled @click="l" type="primary" plain>primary plain disabled</CoButton>
      <CoButton @click="l" type="primary" plain>primary plain</CoButton>
      <CoButton disabled @click="l" type="primary">primary</CoButton>
      <CoButton @click="l" type="primary">primary</CoButton>
      <CoLink @click="l">店抖抖</CoLink>
      <CoLink
        size="mini"
        type="success"
        disabled
        href="https://www.dianchacha.com"
        target="_blank"
        @click="l"
        >店抖抖</CoLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
import CoButton from '@/package/CoButton/index.vue'
import CoLink from '@/package/CoLink/index.vue'
export default defineComponent({
  components: { CoLink, CoButton, HelloWorld },
  setup() {
    return {
      l(e: never) {
        console.log(e)
      },
    }
  },
})
</script>
