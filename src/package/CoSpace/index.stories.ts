import CoSpace from "./index.vue";
import { StoryTemplate } from "@/type/story.type";
import CoButton from "@/package/CoButton/index.vue";
import { ThemeDirection, ThemeSize } from "@/helper";
import { enumArg } from "@/helper/util";

export default {
  title: "CoSpace",
  component: CoSpace,
  argTypes: {
    direction: enumArg(ThemeDirection),
    size: enumArg(ThemeSize),
  },
};

interface Args {
  direction?: ThemeDirection;
  size?: ThemeSize;
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoSpace, CoButton },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace v-bind="args">
        <CoButton>测试</CoButton>
        <CoButton>测试</CoButton>
      </CoSpace>
    </template>
  `,
});

Common.args = {};

export const SpaceDirection: StoryTemplate<Args> = (args: Args) => ({
  components: { CoSpace, CoButton },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace v-bind="args" direction="y">
        <CoButton>测试</CoButton>
        <CoButton>测试</CoButton>
      </CoSpace>
    </template>
  `,
});

SpaceDirection.args = {
  direction: ThemeDirection.y,
};

export const SpaceSize: StoryTemplate<Args> = (args: Args) => ({
  components: { CoSpace, CoButton },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace direction="y">
        <CoSpace style="background: #999" v-bind="args" size="mini">
          <CoButton>测试</CoButton>
          <CoButton>测试</CoButton>
        </CoSpace>
        <CoSpace style="background: #999" v-bind="args" size="sm">
          <CoButton>测试</CoButton>
          <CoButton>测试</CoButton>
        </CoSpace>
        <CoSpace style="background: #999" v-bind="args" size="md">
          <CoButton>测试</CoButton>
          <CoButton>测试</CoButton>
        </CoSpace>
        <CoSpace style="background: #999" v-bind="args" size="lg">
          <CoButton>测试</CoButton>
          <CoButton>测试</CoButton>
        </CoSpace>
      </CoSpace>
    </template>
  `,
});

SpaceSize.args = {
  direction: ThemeDirection.x,
};
