<template>
  <div class="p-10 w-full">
    <CoRadioGroup v-model="a">
      <CoRadio text="1" value="1" />
      <CoRadio text="2" value="2" />
      <CoRadio text="3" value="3" />
    </CoRadioGroup>
    <CoRadio v-model="b" text="3" value="1" />
    <CoRadio v-model="b" text="3" value="2" />
    <CoRadio v-model="b" text="3" value="3" />
    <CoInput v-model="a"></CoInput>
    <CoRadioGroup v-model="a">
      <CoRadio text="1" value="1" />
      <CoRadio text="2" value="2" />
      <CoRadio text="3" value="3" />
    </CoRadioGroup>
    <div>
      {{ a }}
      {{ b }}
    </div>
    <CoSpace size="mini">
      <div>
        <CoRadio v-model="b" text="3" value="3" />
      </div>
      <div>
        <CoRadioGroup v-model="a">
          <CoRadio text="1" value="1" />
          <CoRadio text="2" value="2" />
          <CoRadio text="3" value="3" />
        </CoRadioGroup>
      </div>
      <div>
        <CoInput class="bg-danger-600"></CoInput>
      </div>
    </CoSpace>
    <CoRadioGroup disabled v-model="a">
      <CoRadio text="1" value="1" />
      <CoRadio text="2" value="2" />
      <CoRadio text="3" value="3" />
    </CoRadioGroup>
    <CoRadio :disabled="disabled" text="3" value="3" />
    <CoButton @click="onChange">change</CoButton>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { IconName } from '@/package/CoIcon/index.icon'
import { ThemeSize } from '@/helper'
import CoRadioGroup from '@/package/CoRadioGroup/index.vue'
import CoRadio from '@/package/CoRadio/index.vue'
import CoInput from '@/package/CoInput/index.vue'
import CoSpace from '@/package/CoSpace/index.vue'
import CoButton from '@/package/CoButton/index.vue'

export default defineComponent({
  components: { CoButton, CoSpace, CoInput, CoRadio, CoRadioGroup },
  setup() {
    const a = ref('1')
    const b = ref('1')
    const disabled = ref(false)
    return {
      onClick() {
        a.value = !a.value
      },
      icon: computed(() => (a.value ? IconName.Arrowleft : IconName.Arrowdown)),
      size: computed(() => (a.value ? ThemeSize.lg : ThemeSize.sm)),
      ThemeSize,
      a,
      b,
      disabled,
      onChange() {
        disabled.value = !disabled.value
      },
    }
  },
})
</script>
