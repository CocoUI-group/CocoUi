import CoInput from './index.vue'
import CoIcon from '../CoIcon/index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeRound, ThemeSize } from '@/helper'
import { ref } from 'vue'
import 'tailwindcss/tailwind.css'
import { IconName } from '@/package/CoIcon/index.icon'

export default {
  title: 'CoInput',
  component: CoInput,
  argTypes: {
    modelValue: {
      control: { type: 'string' },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    round: {
      options: Object.values(ThemeRound),
      control: { type: 'select', labels: ThemeRound },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    password: {
      control: { type: 'boolean' },
    },
    clearable: {
      control: { type: 'boolean' },
    },
    onInput: {},
    onBlur: {},
    onFocus: {},
  },
}

interface Args {
  modelValue?: string
  size?: ThemeSize
  round?: ThemeRound
  error?: boolean
  disabled?: boolean
  clearable?: boolean
  password?: boolean
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoInput, CoIcon },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <div class='mb-1'>
      <CoInput v-bind="args" v-model="value" />
    </div>
    <div class='mb-1'>
      <CoInput v-bind="args" v-model="value" >
        <template #before> <CoIcon size='${args.size}' icon="${IconName.User}" /></template>
      </CoInput>
    </div>
    <div class='mb-1'>
      <CoInput v-bind="args" v-model="value" >
        <template #after> <CoIcon size='${args.size}' icon="${IconName.User}" /></template>
      </CoInput>
    </div>`,
})

Common.args = {
  modelValue: 'input',
}
