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
    <div class="container pt-8 mx-auto">
      <CoIcon pointer @click="l" :icon="icon" size="lg" type="danger"></CoIcon>
      <CoIcon pointer @click="l" :icon="icon" size="lg" svg type="primary"></CoIcon>
    </div>
    <div class="container pt-8 mx-auto">
      <CoInput clearable placeholder="placeholder" v-model="inputValue"></CoInput>
      <CoInput error round="full" placeholder="placeholder" v-model="inputValue"></CoInput>
      <CoInput size="mini" round="full" placeholder="placeholder" v-model="inputValue"></CoInput>
      <CoInput size="sm" round="full" placeholder="placeholder" v-model="inputValue"></CoInput>
      <CoInput
        disabled
        size="md"
        round="full"
        placeholder="placeholder"
        v-model="inputValue"
      ></CoInput>
      <CoInput size="lg" round="full" placeholder="placeholder" v-model="inputValue"></CoInput>
      <CoInput
        size="lg"
        round="full"
        placeholder="placeholder"
        v-model="inputValue"
        clearable
      ></CoInput>
      <CoInput
        size="lg"
        round="full"
        placeholder="placeholder"
        v-model="inputValue"
        password
      ></CoInput>
      <CoInput size="lg" placeholder="placeholder" v-model="inputValue">
        <template #before>
          <CoIcon pointer @click="l" :icon="icon" size="lg" svg type="primary"></CoIcon>
        </template>
        <template #after>
          <CoIcon pointer @click="l" :icon="icon" size="lg" svg type="primary"></CoIcon>
        </template>
      </CoInput>
      <div class="mt-10">
        <CoButton type="primary" size="mini">注册</CoButton>
      </div>
      <span>{{ inputValue }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'
import CoButton from '@/package/CoButton/index.vue'
import CoLink from '@/package/CoLink/index.vue'
import CoIcon from '@/package/CoIcon/index.vue'
import { IconName } from '@/package/CoIcon/index.icon'
import CoInput from '@/package/CoInput/index.vue'
export default defineComponent({
  components: { CoInput, CoIcon, CoLink, CoButton, HelloWorld },
  setup() {
    return {
      l(e: never) {
        console.log(e)
      },
      icon: IconName.Arrowleft,
      inputValue: ref('123'),
    }
  },
})
</script>
