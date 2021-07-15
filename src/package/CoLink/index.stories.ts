import CoLink from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeSize, ThemeType } from '@/helper'

export default {
  title: 'CoLink',
  component: CoLink,
  argTypes: {
    type: {
      options: Object.keys(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.keys(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    href: {
      control: { type: 'text' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {},
  },
}

interface Args {
  type?: ThemeType
  size?: ThemeSize
  href?: string
  underline?: boolean
  disabled?: boolean
  onClick?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink },
  setup() {
    return { args }
  },
  template: '<CoLink v-bind="args">CoLink</CoLink>',
})

Common.args = {
  type: ThemeType.default,
  size: ThemeSize.md,
  disabled: false,
  underline: true,
  href: 'https://www.google.com',
}

export const LinkType: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink },
  setup() {
    return { args }
  },
  template: `
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.default}'>default</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.primary}'>primary</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.secondary}'>secondary</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.success}'>success</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.danger}'>danger</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" type='${ThemeType.warning}'>warning</CoLink>
  `,
})

export const LinkDisabled: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink },
  setup() {
    return { args }
  },
  template: `
    <CoLink style='margin: 0 10px' v-bind="args" >default</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" disabled>disabled</CoLink>
  `,
})

export const LinkUnderline: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink },
  setup() {
    return { args }
  },
  template: `
    <CoLink style='margin: 0 10px' v-bind="args" :underline='true'>with underline</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" :underline='false'>without underline</CoLink>
  `,
})

export const LinkSize: StoryTemplate<Args> = (args) => ({
  components: { CoLink },
  setup() {
    return { args }
  },
  template: `
    <CoLink style='margin: 0 10px' v-bind="args" size='${ThemeSize.mini}'>mini</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" size='${ThemeSize.sm}'>sm</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" size='${ThemeSize.md}'>md</CoLink>
    <CoLink style='margin: 0 10px' v-bind="args" size='${ThemeSize.lg}'>lg</CoLink>
  `,
})
