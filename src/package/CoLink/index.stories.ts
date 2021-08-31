import CoLink from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeSize, ThemeType } from '@/helper'
import CoSpace from '@/package/CoSpace/index.vue'

export default {
  title: 'CoLink',
  component: CoLink,
  argTypes: {
    type: {
      options: Object.values(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.values(ThemeSize),
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
  components: { CoLink, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoLink v-bind="args" type='default'>default</CoLink>
      <CoLink v-bind="args" type='primary'>primary</CoLink>
      <CoLink v-bind="args" type='secondary'>secondary</CoLink>
      <CoLink v-bind="args" type='success'>success</CoLink>
      <CoLink v-bind="args" type='danger'>danger</CoLink>
      <CoLink v-bind="args" type='warning'>warning</CoLink>
    </CoSpace>
  `,
})

export const LinkDisabled: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoLink v-bind="args" >default</CoLink>
      <CoLink v-bind="args" disabled>disabled</CoLink>
    </CoSpace>
  `,
})

export const LinkUnderline: StoryTemplate<Args> = (args: Args) => ({
  components: { CoLink, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoLink v-bind="args" :underline='true'>with underline</CoLink>
      <CoLink v-bind="args" :underline='false'>without underline</CoLink>
    </CoSpace>
  `,
})

export const LinkSize: StoryTemplate<Args> = (args) => ({
  components: { CoLink, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoLink v-bind="args" size='mini'>mini</CoLink>
      <CoLink v-bind="args" size='sm'>sm</CoLink>
      <CoLink v-bind="args" size='md'>md</CoLink>
      <CoLink v-bind="args" size='lg'>lg</CoLink>
    </CoSpace>
  `,
})
