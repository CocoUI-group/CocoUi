import CoIcon from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import { ThemeSize, ThemeType } from '@/helper'
import { IconName } from '@/package/CoIcon/index.icon'
import { useIcon } from '@/package/CoIcon/index'
useIcon()
export default {
  title: 'CoIcon',
  component: CoIcon,
  argTypes: {
    svg: {
      control: { type: 'boolean' },
    },
    icon: {
      options: Object.values(IconName),
      control: { type: 'select', labels: IconName },
    },
    type: {
      options: Object.values(ThemeType),
      control: { type: 'select', labels: ThemeType },
    },
    size: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    pointer: {
      control: { type: 'boolean' },
    },
    onClick: {},
  },
}

interface Args {
  size?: ThemeSize
  type?: ThemeType
  icon?: IconName
  svg?: boolean
  pointer?: boolean
  onClick?: CallableFunction
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon },
  setup() {
    return { args }
  },
  template: '<CoIcon v-bind="args" /><CoIcon  v-bind="args" svg />',
})

Common.args = {
  size: ThemeSize.md,
  type: ThemeType.default,
  icon: IconName.User,
  svg: false,
  pointer: false,
}

export const IconType: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: ThemeType) => string) =>
    Object.keys(ThemeType).map(templateFn).join('')

  const common = (type: ThemeType) => `<CoIcon v-bind="args" type="${type}" />`
  return {
    components: { CoIcon },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}

IconType.args = {
  icon: IconName.Apple,
}

export const IconSize: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: ThemeSize) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const common = (size: ThemeSize) => `<CoIcon v-bind="args" size="${size}" />`

  return {
    components: { CoIcon },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}

IconSize.args = {
  icon: IconName.Apple,
}
