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

export const ButtonType: StoryTemplate<Args> = (args) => {
  const mapRender = (templateFn: (type: ThemeType) => string) =>
    Object.keys(ThemeType).map(templateFn).join('')

  const common = (type: ThemeType) => `<CoButton v-bind="args" type="${type}">${type}</CoButton>`
  const plain = (type: ThemeType) =>
    `<CoButton v-bind="args" type="${type}" plain>${type}</CoButton>`
  const round = (type: ThemeType) =>
    `<CoButton v-bind="args" type="${type}" round='${ThemeRound.full}'>${type}</CoButton>`
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`

  return {
    components: { CoButton },
    setup() {
      return { args }
    },
    template: [div(mapRender(common)), div(mapRender(plain)), div(mapRender(round))].join('\n'),
  }
}
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

export const ButtonSize: StoryTemplate<Args> = (args) => {
  const mapRender = (templateFn: (type: ThemeSize) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const common = (size: ThemeSize) => `<CoButton v-bind="args" size="${size}">${size}</CoButton>`

  return {
    components: { CoButton },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}
ButtonSize.args = {
  type: ThemeType.primary,
}

export const ButtonRound: StoryTemplate<Args> = (args) => {
  const mapRender = (templateFn: (type: ThemeRound) => string) =>
    Object.keys(ThemeRound).map(templateFn).join('')
  const common = (round: ThemeRound) =>
    `<CoButton v-bind="args" round="${round}">${round}</CoButton>`

  return {
    components: { CoButton },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}
ButtonRound.args = {
  type: ThemeType.primary,
}
