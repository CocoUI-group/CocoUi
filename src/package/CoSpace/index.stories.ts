import CoSpace from './index.vue'
import { StoryTemplate } from '@/type/story.type'
import CoButton from '@/package/CoButton/index.vue'
import { ThemeDirection, ThemeSize } from '@/helper'
import { enumArg } from '@/helper/util'

export default {
  title: 'CoSpace',
  component: CoSpace,
  argTypes: {
    direction: enumArg(ThemeDirection),
    size: enumArg(ThemeSize),
  },
}

interface Args {
  direction?: ThemeDirection
  size?: ThemeSize
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoSpace, CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoSpace v-bind='args'>
      <CoButton>测试</CoButton>
      <CoButton>测试</CoButton>
    </CoSpace>
   `,
})

Common.args = {}

export const SpaceDirection: StoryTemplate<Args> = (args: Args) => ({
  components: { CoSpace, CoButton },
  setup() {
    return { args }
  },
  template: `
    <CoSpace v-bind='args' direction='${ThemeDirection.y}'>
      <CoButton>测试</CoButton>
      <CoButton>测试</CoButton>
    </CoSpace>
   `,
})

SpaceDirection.args = {
  direction: ThemeDirection.y,
}

export const SpaceSize: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) =>
    `<div style='margin-bottom: 10px;background: #ccc'>${template}</div>`
  const common = (size: string) =>
    div(
      `<CoSpace style='background: #999' v-bind="args" size="${size}"><CoButton>测试</CoButton><CoButton>测试</CoButton></CoSpace>`
    )

  return {
    components: { CoSpace, CoButton },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}

SpaceSize.args = {
  direction: ThemeDirection.x,
}
