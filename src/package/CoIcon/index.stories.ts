import CoIcon from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeSize, ThemeType } from '@/helper'
import { IconName } from '@/package/CoIcon/index.icon'
import { useIcon } from '@/package/CoIcon/index'
useIcon()
export default {
  title: 'CoIcon',
  component: CoIcon,
  argTypes: {
    svg: {
      control: { type: 'boolean' },
    },
    icon: {
      options: Object.values(IconName),
      control: { type: 'select', labels: IconName },
    },
    type: {
      options: Object.values(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    pointer: {
      control: { type: 'boolean' },
    },
  },
}

interface Args {
  size?: ThemeSize
  type?: ThemeType
  icon?: IconName
  svg?: boolean
  pointer?: boolean
  onClick?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon },
  setup() {
    return { args }
  },
  template: '<CoIcon v-bind="args" /><CoIcon  v-bind="args" svg />',
})

Common.args = {
  size: ThemeSize.md,
  type: ThemeType.default,
  icon: IconName.User,
  svg: false,
  pointer: false,
}

export const IconType: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon },
  setup() {
    return { args }
  },
  template: `
    <div>
      <CoIcon v-bind="args"  type='${ThemeType.default}' />
      <CoIcon v-bind="args"  type='${ThemeType.primary}' />
      <CoIcon v-bind="args"  type='${ThemeType.secondary}' />
      <CoIcon v-bind="args"  type='${ThemeType.success}' />
      <CoIcon v-bind="args"  type='${ThemeType.danger}' />
      <CoIcon v-bind="args"  type='${ThemeType.warning}' />
    </div>
  `,
})

IconType.args = {
  icon: IconName.Apple,
}

export const IconSize: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon },
  setup() {
    return { args }
  },
  template: `
    <div>
      <CoIcon v-bind="args"  size='${ThemeSize.mini}' />
      <CoIcon v-bind="args"  size='${ThemeSize.sm}' />
      <CoIcon v-bind="args"  size='${ThemeSize.md}' />
      <CoIcon v-bind="args"  size='${ThemeSize.lg}' />
    </div>
  `,
})

IconSize.args = {
  icon: IconName.Apple,
}
