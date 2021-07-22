import CoButton from './index.vue'
import { ThemeRound, ThemeSize, ThemeType } from '@/helper'
import { StoryTemplate } from '@/type/story.type'

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
  components: { CoButton },
  setup() {
    return { args }
  },
  template: `
    <div >
        <CoButton v-bind="args" type='${ThemeType.default}'>default</CoButton>
        <CoButton v-bind="args" type='${ThemeType.primary}'>primary</CoButton>
        <CoButton v-bind="args" type='${ThemeType.secondary}'>secondary</CoButton>
        <CoButton v-bind="args" type='${ThemeType.success}'>success</CoButton>
        <CoButton v-bind="args" type='${ThemeType.danger}'>danger</CoButton>
        <CoButton v-bind="args" type='${ThemeType.warning}'>warning</CoButton>
    </div>
    <div style='margin: 10px 0'>
        <CoButton v-bind="args" plain type='${ThemeType.default}'>default</CoButton>
        <CoButton v-bind="args" plain type='${ThemeType.primary}'>primary</CoButton>
        <CoButton v-bind="args" plain type='${ThemeType.secondary}'>secondary</CoButton>
        <CoButton v-bind="args" plain type='${ThemeType.success}'>success</CoButton>
        <CoButton v-bind="args" plain type='${ThemeType.danger}'>danger</CoButton>
        <CoButton v-bind="args" plain type='${ThemeType.warning}'>warning</CoButton>
    </div>
    <div>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.default}'>default</CoButton>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.primary}'>primary</CoButton>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.secondary}'>secondary</CoButton>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.success}'>success</CoButton>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.danger}'>danger</CoButton>
        <CoButton v-bind="args" round='${ThemeRound.full}' type='${ThemeType.warning}'>warning</CoButton>
    </div>
  `,
})
ButtonType.args = {}

export const ButtonDisabled: StoryTemplate<Args> = (args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoButton v-bind="args" @click="args.onClick">按钮</CoButton>
    <CoButton v-bind="args" disabled @click="args.onClick">Disabled</CoButton>
  `,
})
ButtonDisabled.args = {
  type: ThemeType.primary,
}

export const ButtonSize: StoryTemplate<Args> = (args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoButton v-bind="args" size='${ThemeSize.mini}'>mini</CoButton>
    <CoButton v-bind="args" size='${ThemeSize.sm}'>sm</CoButton>
    <CoButton v-bind="args" size='${ThemeSize.md}'>md</CoButton>
    <CoButton v-bind="args" size='${ThemeSize.lg}'>lg</CoButton>
  `,
})
ButtonSize.args = {
  type: ThemeType.primary,
}

export const ButtonRound: StoryTemplate<Args> = (args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoButton v-bind="args" round='${ThemeRound.none}'>none</CoButton>
    <CoButton v-bind="args" round='${ThemeRound.bySize}'>bySize</CoButton>
    <CoButton v-bind="args" round='${ThemeRound.full}'>full</CoButton>
  `,
})
ButtonRound.args = {
  type: ThemeType.primary,
}
