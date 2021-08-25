import CoInput from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeRound, ThemeSize } from '@/helper'
import { ref } from 'vue'
import 'tailwindcss/tailwind.css'
import { IconName } from '@/package/CoIcon/index.icon'
import CoIcon from '@/package/CoIcon/index.vue'

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
  components: { CoInput },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoInput v-bind='args' v-model='value' /> <span>{{ value }}</span>`,
})

Common.args = {
  modelValue: 'input',
}

export const InputSize: StoryTemplate<Args> = (args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`<CoInput v-bind='args' size='${size}' v-model='value' /> <span>${size}</span>`)
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: mapRender(common),
  }
}

InputSize.args = {
  modelValue: 'input',
}

export const InputRound: StoryTemplate<Args> = (args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeRound).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (round: string) =>
    div(`<CoInput v-bind='args' round='${round}' v-model='value' /> <span>${round}</span>`)
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: mapRender(common),
  }
}

InputRound.args = {
  modelValue: 'input',
}

export const InputDisabled: StoryTemplate<Args> = (args) => {
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: [
      div(`<CoInput v-bind="args" v-model='value'  />`),
      div(`<CoInput v-bind="args" v-model='value' disabled  />`),
    ].join('\n'),
  }
}
InputDisabled.args = {
  modelValue: 'input',
}

export const InputError: StoryTemplate<Args> = (args) => {
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: [
      div(`<CoInput v-bind="args" v-model='value'  />`),
      div(`<CoInput v-bind="args" v-model='value' error  />`),
    ].join('\n'),
  }
}
InputError.args = {
  modelValue: 'input',
}
export const InputClearable: StoryTemplate<Args> = (args) => {
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: [
      div(`<CoInput v-bind="args" v-model='value'  />`),
      div(`<CoInput v-bind="args" v-model='value' clearable  />`),
    ].join('\n'),
  }
}
InputClearable.args = {
  modelValue: 'input',
}
export const Password: StoryTemplate<Args> = (args) => {
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  return {
    components: { CoInput },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: [
      div(`<CoInput v-bind="args" v-model='value'  />`),
      div(`<CoInput v-bind="args" v-model='value' password  />`),
    ].join('\n'),
  }
}
Password.args = {
  modelValue: 'input',
}

export const InputSlots: StoryTemplate<Args> = (args) => {
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  return {
    components: { CoInput, CoIcon },
    setup() {
      return { args, value: ref(args.modelValue) }
    },
    template: [
      div(`
        <CoInput v-bind="args" v-model='value' >
          <template #before>
            <CoIcon :size="args.size" icon="${IconName.User}" />
          </template>
        </CoInput>
      `),
      div(`
       <CoInput v-bind="args" v-model='value' >
          <template #after>
            <CoIcon :size="args.size" icon="${IconName.User}" />
          </template>
        </CoInput>
      `),
      div(`
       <CoInput v-bind="args" v-model='value' >
          <template #before>
            <CoIcon :size="args.size" icon="${IconName.User}" />
          </template>
          <template #after>
            <CoIcon :size="args.size" icon="${IconName.User}" />
          </template>
        </CoInput>
      `),
    ].join('\n'),
  }
}
InputSlots.args = {
  modelValue: 'input',
}
