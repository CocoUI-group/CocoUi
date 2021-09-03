import CoPanel from "./index.vue";
import { ThemeSize } from "@/helper";
import { StoryTemplate } from "@/type/story.type";
import CoSpace from "@/package/CoSpace/index.vue";

export default {
  title: "CoPanel",
  component: CoPanel,
  argTypes: {
    padding: {
      options: Object.values(ThemeSize),
      control: { type: "select", labels: ThemeSize },
    },
    contentClass: {
      control: { type: "text" },
    },
  },
};

interface Args {
  padding?: ThemeSize;
  contentClass?: string;
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: '<CoPanel v-bind="args">Hello World</CoPanel>',
});
Common.args = {
  padding: ThemeSize.md,
};

export const Padding: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <CoSpace direction='y'>
    <CoPanel v-bind='args' padding='mini'>Hello World mini</CoPanel>
    <CoPanel v-bind='args' padding='sm'>Hello World sm</CoPanel>
    <CoPanel v-bind='args' padding='md'>Hello World md</CoPanel>
    <CoPanel v-bind='args' padding='lg'>Hello World lg</CoPanel>
    </CoSpace>
  `,
});

export const Header: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <CoSpace direction='y'>
    <CoPanel v-bind='args' padding='mini'>
      <template #header>header</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='sm'>
      <template #header>header</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='md'>
      <template #header>header</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='lg'>
      <template #header>header</template>
      Hello World
    </CoPanel>
    </CoSpace>`,
});
export const Img: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <CoSpace direction='y'>
    <CoPanel v-bind='args' padding='mini'>
      <template #img><img src='https://static.dianchacha.com/v1/img/dsr/banner.png?v2' alt=''></template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='sm'>
      <template #img><img src='https://static.dianchacha.com/v1/img/dsr/banner.png?v2' alt=''></template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='md'>
      <template #img><img src='https://static.dianchacha.com/v1/img/dsr/banner.png?v2' alt=''></template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='lg'>
      <template #img><img src='https://static.dianchacha.com/v1/img/dsr/banner.png?v2' alt=''></template>
      Hello World
    </CoPanel>
    </CoSpace>`,
});
export const Footer: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <CoSpace direction='y'>
    <CoPanel v-bind='args' padding='mini'>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='sm'>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='md'>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='lg'>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    </CoSpace>
  `,
});

export const HeaderAndFooter: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel, CoSpace },
  setup() {
    return { args };
  },
  template: `
    <CoSpace direction='y'>
    <CoPanel v-bind='args' padding='mini'>
      <template #header>header</template>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='sm'>
      <template #header>header</template>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='md'>
      <template #header>header</template>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    <CoPanel v-bind='args' padding='lg'>
      <template #header>header</template>
      <template #footer>footer</template>
      Hello World
    </CoPanel>
    </CoSpace>
  `,
});
