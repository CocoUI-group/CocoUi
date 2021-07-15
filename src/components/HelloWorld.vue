<template>
  <div class="px-8 prose">
    <h1>{{ msg }}</h1>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="increment">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <p class="text-sm text-gray-700">vite-ts-tailwind-starter</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return {
      count,
      increment,
    }
  },
})
</script>
