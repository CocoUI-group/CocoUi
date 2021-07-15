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
}

const Template: Fn<Args> = (args: Args) => ({
  components: { CoButton },
  setup() {
    return { args }
  },
  template: '<CoButton v-bind="args">按钮</CoButton>',
})
export const Common = Template.bind({})
Common.args = {
  size: ThemeSize.md,
  type: ThemeType.primary,
  round: Round.bySize,
  disabled: false,
  plain: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: ThemeSize.md,
  type: ThemeType.primary,
  round: Round.bySize,
  disabled: true,
  plain: true,
}

export const Size = Template.bind({})
Size.args = {
  size: ThemeSize.md,
  type: ThemeType.primary,
  round: Round.bySize,
  disabled: false,
  plain: false,
}
