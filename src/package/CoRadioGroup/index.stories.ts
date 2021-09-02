import CoRadioGroup from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeSize } from '@/helper'
import { ref } from 'vue'
import CoRadio from '@/package/CoRadio/index.vue'
import CoSpace from '@/package/CoSpace/index.vue'

export default {
  title: 'CoRadioGroup',
  component: CoRadioGroup,
  argTypes: {
    name: { control: { type: 'text' } },
    modelValue: { control: { type: 'text' } },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    onChange: {},
  },
  args: {
    modelValue: 'apple',
  },
}

interface Args {
  size?: ThemeSize
  disabled?: boolean
  modelValue?: number | string | boolean
  value?: number | string | boolean
  onChange?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadioGroup, CoRadio },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoRadioGroup v-bind="args">
      <CoRadio value="apple" >apple</CoRadio>
      <CoRadio value="banana" >banana</CoRadio>
      <CoRadio value="coco" >coco</CoRadio>
    </CoRadioGroup>
  `,
})

export const RadioGroupSize: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadioGroup, CoRadio, CoSpace },
  setup() {
    return { args, value: ref(args.modelValue) }
  },
  template: `
    <CoSpace direction='y'>
      <CoRadioGroup size='mini' v-bind="args">
        <CoRadio value="apple" >apple</CoRadio>
        <CoRadio value="banana" >banana</CoRadio>
        <CoRadio value="coco" >coco</CoRadio>
      </CoRadioGroup>
      <CoRadioGroup size='sm' v-bind="args">
        <CoRadio value="apple" >apple</CoRadio>
        <CoRadio value="banana" >banana</CoRadio>
        <CoRadio value="coco" >coco</CoRadio>
      </CoRadioGroup> 
      <CoRadioGroup size='md' v-bind="args">
        <CoRadio value="apple" >apple</CoRadio>
        <CoRadio value="banana" >banana</CoRadio>
        <CoRadio value="coco" >coco</CoRadio>
      </CoRadioGroup>
      <CoRadioGroup size='lg' v-bind="args">
        <CoRadio value="apple" >apple</CoRadio>
        <CoRadio value="banana" >banana</CoRadio>
        <CoRadio value="coco" >coco</CoRadio>
      </CoRadioGroup>
    </CoSpace>
  `,
})

export const RadioGroupDisabled: StoryTemplate<Args> = (args: Args) => ({
  components: { CoRadio, CoRadioGroup },
  setup() {
    return { args }
  },
  template: `
    <CoRadioGroup v-bind="args" disabled>
      <CoRadio value="apple" >apple</CoRadio>
      <CoRadio value="banana" >banana</CoRadio>
      <CoRadio value="coco" >coco</CoRadio>
    </CoRadioGroup>
  `,
})
