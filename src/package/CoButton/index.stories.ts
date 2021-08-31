import CoButton from './index.vue'
import { ThemeRound, ThemeSize, ThemeType } from '@/helper'
import { StoryTemplate } from '@/type/story.type'
import CoSpace from '@/package/CoSpace/index.vue'

export default {
  title: 'CoButton',
  component: CoButton,
  argTypes: {
    type: {
      options: Object.values(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    round: {
      options: Object.values(ThemeRound),
      control: { type: 'select', labels: ThemeRound },
    },
    plain: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {},
  },
}

interface Args {
  size?: ThemeSize
  type?: ThemeType
  round?: ThemeRound
  disabled?: boolean
  plain?: boolean
  onClick?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: '<CoButton v-bind="args">Button</CoButton>',
})
Common.args = {
  size: ThemeSize.md,
  type: ThemeType.primary,
  round: ThemeRound.bySize,
  disabled: false,
  plain: true,
}

export const ButtonType: StoryTemplate<Args> = (args) => ({
  components: { CoButton, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace direction='y'>
      <CoSpace>
        <CoButton v-bind="args" type="default">default</CoButton>
        <CoButton v-bind="args" type="primary">primary</CoButton>
        <CoButton v-bind="args" type="secondary">secondary</CoButton>
        <CoButton v-bind="args" type="success">success</CoButton>
        <CoButton v-bind="args" type="warning">warning</CoButton>
        <CoButton v-bind="args" type="danger">danger</CoButton>
      </CoSpace>
      <CoSpace>
        <CoButton v-bind="args" type="default" plain>default</CoButton>
        <CoButton v-bind="args" type="primary" plain>primary</CoButton>
        <CoButton v-bind="args" type="secondary" plain>secondary</CoButton>
        <CoButton v-bind="args" type="success" plain>success</CoButton>
        <CoButton v-bind="args" type="warning" plain>warning</CoButton>
        <CoButton v-bind="args" type="danger" plain>danger</CoButton>
      </CoSpace>
      <CoSpace>
        <CoButton v-bind="args" type="default" round='full'>default</CoButton>
        <CoButton v-bind="args" type="primary" round='full'>primary</CoButton>
        <CoButton v-bind="args" type="secondary" round='full'>secondary</CoButton>
        <CoButton v-bind="args" type="success" round='full'>success</CoButton>
        <CoButton v-bind="args" type="warning" round='full'>warning</CoButton>
        <CoButton v-bind="args" type="danger" round='full'>danger</CoButton>
      </CoSpace>
    </CoSpace>`,
})
ButtonType.args = {}

export const ButtonDisabled: StoryTemplate<Args> = (args) => ({
  components: { CoButton, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoButton v-bind="args" >Normal</CoButton>
      <CoButton v-bind="args" disabled >Disabled</CoButton>
    </CoSpace>`,
})
ButtonDisabled.args = {
  type: ThemeType.primary,
}

export const ButtonSize: StoryTemplate<Args> = (args) => ({
  components: { CoButton, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoButton v-bind="args" size="mini">mini</CoButton>
      <CoButton v-bind="args" size="sm">sm</CoButton>
      <CoButton v-bind="args" size="md">md</CoButton>
      <CoButton v-bind="args" size="lg">lg</CoButton>
    </CoSpace>
  `,
})
ButtonSize.args = {
  type: ThemeType.primary,
}

export const ButtonRound: StoryTemplate<Args> = (args) => ({
  components: { CoButton, CoSpace },
  setup() {
    return { args }
  },
  template: `
    <CoSpace>
      <CoButton v-bind="args" round="none">none</CoButton>
      <CoButton v-bind="args" round="bySize">bySize</CoButton>
      <CoButton v-bind="args" round="full">full</CoButton>
    </CoSpace>
  `,
})
ButtonRound.args = {
  type: ThemeType.primary,
}
