import CoRadio from "./index.vue";
import { StoryTemplate } from "@/type/story.type";
import { ThemeSize } from "@/helper";
import CoSpace from "@/package/CoSpace/index.vue";
import { ref } from "vue";

export default {
  title: "CoRadio",
  component: CoRadio,
  argTypes: {
    text: { control: { type: "text" } },
    name: { control: { type: "text" } },
    value: { control: { type: "text" } },
    modelValue: { control: { type: "text" } },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: "select", labels: ThemeSize },
    },
    onChange: {},
  },
  args: {
    modelValue: "coco",
  },
};

interface Args {
  size?: ThemeSize;
  disabled?: boolean;
  name?: string;
  text?: string;
  modelValue?: number | string | boolean;
  value?: number | string | boolean;
  onChange?: CallableFunction;
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadio, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) };
  },
  template: `
    <template>
      <CoSpace direction="y">
        <div>
          <CoRadio v-bind="args" v-model="value" value="apple">apple</CoRadio>
          <CoRadio v-bind="args" v-model="value" value="banana">banana</CoRadio>
          <CoRadio v-bind="args" v-model="value" value="coco" text="coco"></CoRadio>
        </div>
        <div>
          {{ value }}
        </div>
      </CoSpace>
    </template>
  `,
});

export const RadioSize: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadio, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) };
  },
  template: `
    <template>
      <CoSpace direction="y">
        <div>
          <CoRadio v-bind="args" size="mini" v-model="value" value="apple">apple</CoRadio>
          <CoRadio v-bind="args" size="mini" v-model="value" value="banana">banana</CoRadio>
          <CoRadio v-bind="args" size="mini" v-model="value" value="coco">coco</CoRadio>
        </div>
        <div>
          <CoRadio v-bind="args" size="sm" v-model="value" value="apple">apple</CoRadio>
          <CoRadio v-bind="args" size="sm" v-model="value" value="banana">banana</CoRadio>
          <CoRadio v-bind="args" size="sm" v-model="value" value="coco">coco</CoRadio>
        </div>
        <div>
          <CoRadio v-bind="args" size="md" v-model="value" value="apple">apple</CoRadio>
          <CoRadio v-bind="args" size="md" v-model="value" value="banana">banana</CoRadio>
          <CoRadio v-bind="args" size="md" v-model="value" value="coco">coco</CoRadio>
        </div>
        <div>
          <CoRadio v-bind="args" size="lg" v-model="value" value="apple">apple</CoRadio>
          <CoRadio v-bind="args" size="lg" v-model="value" value="banana">banana</CoRadio>
          <CoRadio v-bind="args" size="lg" v-model="value" value="coco">coco</CoRadio>
        </div>
      </CoSpace>
    </template>
  `,
});

export const RadioDisabled: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadio },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoRadio v-bind="args" value="normal">normal</CoRadio>
      <CoRadio v-bind="args" value="disabled" disabled>disabled</CoRadio>
      <CoRadio v-bind="args" model-value="disabledValue" value="disabledValue" disabled>disabledValue</CoRadio>
    </template>`,
});
