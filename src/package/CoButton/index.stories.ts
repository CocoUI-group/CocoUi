import CoButton from './index.vue'
import { ThemeSize, ThemeType } from '@/helper'
import { Round } from '@/package/CoButton/index.config'
import { ComponentOptionsWithoutProps } from '@vue/runtime-core'

export default {
  title: 'Co/Button',
  component: CoButton,
  argTypes: {
    type: {
      options: Object.keys(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.keys(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    round: {
      options: Object.keys(Round),
      control: { type: 'select', labels: Round },
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
interface Fn<T> {
  (args: T): ComponentOptionsWithoutProps
  args?: T
}
interface Args {
  size?: ThemeSize
  type?: ThemeType
  round?: Round
  disabled?: boolean
  plain?: boolean
  onClick?: CallableFunction
}

const Template: Fn<Args> = (args: Args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: '<CoButton v-bind="args">Button</CoButton>',
})
export const Common = Template.bind({})
Common.args = {
  size: ThemeSize.md,
  type: ThemeType.primary,
  round: Round.bySize,
  disabled: false,
  plain: true,
}

export const ButtonType: Fn<Args> = (args) => ({
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
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.default}'>default</CoButton>
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.primary}'>primary</CoButton>
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.secondary}'>secondary</CoButton>
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.success}'>success</CoButton>
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.danger}'>danger</CoButton>
        <CoButton v-bind="args" round='${Round.full}' type='${ThemeType.warning}'>warning</CoButton>
    </div>
  `,
})
ButtonType.args = {}

export const ButtonDisabled: Fn<Args> = (args) => ({
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

export const ButtonSize: Fn<Args> = (args) => ({
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

export const ButtonRound: Fn<Args> = (args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoButton v-bind="args" round='${Round.none}'>none</CoButton>
    <CoButton v-bind="args" round='${Round.bySize}'>bySize</CoButton>
    <CoButton v-bind="args" round='${Round.full}'>full</CoButton>
  `,
})
ButtonRound.args = {
  type: ThemeType.primary,
}
