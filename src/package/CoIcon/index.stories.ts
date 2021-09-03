import CoIcon from "./index.vue";
import { StoryTemplate } from "@/type/story.type";
import { ThemeSize, ThemeType } from "@/helper";
import { IconName } from "@/package/CoIcon/index.icon";
import { useIcon } from "@/package/CoIcon/index";
import CoSpace from "@/package/CoSpace/index.vue";

useIcon();
export default {
  title: "CoIcon",
  component: CoIcon,
  argTypes: {
    svg: {
      control: { type: "boolean" },
    },
    icon: {
      options: Object.values(IconName),
      control: { type: "select", labels: IconName },
    },
    type: {
      options: Object.values(ThemeType),
      control: { type: "select", labels: ThemeType },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: "select", labels: ThemeSize },
    },
    pointer: {
      control: { type: "boolean" },
    },
    onClick: {},
  },
};

interface Args {
  size?: ThemeSize;
  type?: ThemeType;
  icon?: IconName;
  svg?: boolean;
  pointer?: boolean;
  onClick?: CallableFunction;
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace>
        <CoIcon v-bind="args" />
        <CoIcon v-bind="args" svg />
      </CoSpace>
    </template>
  `,
});

Common.args = {
  size: ThemeSize.md,
  type: ThemeType.default,
  icon: IconName.User,
  svg: false,
  pointer: false,
};

export const IconType: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace>
        <CoIcon v-bind="args" type="default" />
        <CoIcon v-bind="args" type="primary" />
        <CoIcon v-bind="args" type="secondary" />
        <CoIcon v-bind="args" type="success" />
        <CoIcon v-bind="args" type="warning" />
      </CoSpace>
    </template>
  `,
});

IconType.args = {
  icon: IconName.Apple,
};

export const IconSize: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <template>
      <CoSpace>
        <CoIcon v-bind="args" size="mini" />
        <CoIcon v-bind="args" size="sm" />
        <CoIcon v-bind="args" size="md" />
        <CoIcon v-bind="args" size="lg" />
      </CoSpace>
    </template>
  `,
});

IconSize.args = {
  icon: IconName.Apple,
};
