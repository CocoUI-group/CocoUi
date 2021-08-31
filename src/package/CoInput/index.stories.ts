import CoInput from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeRound, ThemeSize } from '@/helper'
import { ref } from 'vue'
import 'tailwindcss/tailwind.css'
import { IconName } from '@/package/CoIcon/index.icon'
import CoIcon from '@/package/CoIcon/index.vue'
import CoSpace from '@/package/CoSpace/index.vue'

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
    onClear: {},
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
  onInput?: CallableFunction
  onBlur?: CallableFunction
  onFocus?: CallableFunction
  onClear?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' v-model='value' /> <span>{{ value }}</span>
    </CoSpace>
  `,
})

Common.args = {
  modelValue: 'input',
}

export const InputSize: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' size='mini' v-model='value' /> 
      <CoInput v-bind='args' size='sm' v-model='value' /> 
      <CoInput v-bind='args' size='md' v-model='value' /> 
      <CoInput v-bind='args' size='lg' v-model='value' />
    </CoSpace>
  `,
})

InputSize.args = {
  modelValue: 'input',
}

export const InputRound: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' round='none' v-model='value' /> <span>none</span>
      <CoInput v-bind='args' round='bySize' v-model='value' /> <span>bySize</span>
      <CoInput v-bind='args' round='full' v-model='value' /> <span>full</span>
    </CoSpace>
  `,
})

InputRound.args = {
  modelValue: 'input',
}

export const InputDisabled: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' v-model='value' /> 
      <CoInput v-bind='args' v-model='value' disabled /> 
    </CoSpace>
  `,
})
InputDisabled.args = {
  modelValue: 'input',
}

export const InputError: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' v-model='value' /> 
      <CoInput v-bind='args' v-model='value' error /> 
    </CoSpace>
  `,
})
InputError.args = {
  modelValue: 'input',
}
export const InputClearable: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' v-model='value' /> 
      <CoInput v-bind='args' v-model='value' clearable /> 
    </CoSpace>
  `,
})
InputClearable.args = {
  modelValue: 'input',
}
export const Password: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind='args' v-model='value' /> 
      <CoInput v-bind='args' v-model='value' password /> 
    </CoSpace>
  `,
})
Password.args = {
  modelValue: 'input',
}

export const InputSlots: StoryTemplate<Args> = (args) => ({
  components: { CoInput, CoIcon, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoInput v-bind="args" v-model='value' >
        <template #before>
          <CoIcon :size="args.size" icon="${IconName.User}" />
        </template>
      </CoInput>
      <CoInput v-bind="args" v-model='value' >
        <template #after>
          <CoIcon :size="args.size" icon="${IconName.User}" />
        </template>
      </CoInput>
      <CoInput v-bind="args" v-model='value' >
        <template #before>
          <CoIcon :size="args.size" icon="${IconName.User}" />
        </template>
        <template #after>
          <CoIcon :size="args.size" icon="${IconName.User}" />
        </template>
      </CoInput>
    </CoSpace>
  `,
})
InputSlots.args = {
  modelValue: 'input',
}
