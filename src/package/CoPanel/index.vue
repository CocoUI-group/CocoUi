<template>
  <div class="co-panel bg-white w-full rounded-lg border shadow-lg">
    <div
      v-if="$slots.header"
      :class="[paddingStyle.slot]"
      class="co-panel__header rounded-t-lg border-b bg-gray-50"
    >
      <slot name="header" />
    </div>
    <div v-if="$slots.img" class="co-panel__img rounded-t-lg w-full overflow-hidden">
      <slot name="img" />
    </div>
    <div :class="[paddingStyle.content, contentClass]" class="co-panel__content rounded-lg">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="[paddingStyle.slot]"
      class="co-panel__footer rounded-b-lg border-t bg-gray-100"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { reactivePaddingStyle } from "@/package/CoPanel/index.config";
import { ThemeSize } from "@/helper";

export default defineComponent({
  name: "CoPanel",
  props: {
    padding: { type: String as PropType<ThemeSize>, default: ThemeSize.md },
    contentClass: { type: String, default: "" },
  },
  setup(props) {
    const { padding } = toRefs(props);
    return {
      paddingStyle: reactivePaddingStyle(padding),
    };
  },
});
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
