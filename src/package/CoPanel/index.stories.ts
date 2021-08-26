import CoPanel from './index.vue'
import { ThemeSize } from '@/helper'
import { StoryTemplate } from '@/type/story.type'

export default {
  title: 'CoPanel',
  component: CoPanel,
  argTypes: {
    padding: {
      options: Object.values(ThemeSize),
      control: { type: 'select', labels: ThemeSize },
    },
    contentClass: {
      control: { type: 'text' },
    },
  },
}

interface Args {
  padding?: ThemeSize
  contentClass?: string
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoPanel },
  setup() {
    return { args }
  },
  template: '<CoPanel v-bind="args">Hello World</CoPanel>',
})
Common.args = {
  padding: ThemeSize.md,
}

export const Padding: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`<CoPanel v-bind='args' padding='${size}'>Hello World ${size}</CoPanel>`)

  return {
    components: { CoPanel },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}

export const Header: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`
          <CoPanel v-bind='args' padding='${size}'>
            <template #header>header</template>
            Hello World
          </CoPanel>
        `)

  return {
    components: { CoPanel },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}
export const Img: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`
          <CoPanel v-bind='args' padding='${size}'>
            <template #img><img  src='https://static.dianchacha.com/v1/img/dsr/banner.png?v2' alt=''></template>
            Hello World
          </CoPanel>
        `)

  return {
    components: { CoPanel },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}
export const Footer: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`
          <CoPanel v-bind='args' padding='${size}'>
            <template #footer>footer</template>
            Hello World
          </CoPanel>
        `)

  return {
    components: { CoPanel },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}

export const HeaderAndFooter: StoryTemplate<Args> = (args: Args) => {
  const mapRender = (templateFn: (type: string) => string) =>
    Object.keys(ThemeSize).map(templateFn).join('')
  const div = (template: string) => `<div style='margin-bottom: 10px'>${template}</div>`
  const common = (size: string) =>
    div(`
          <CoPanel v-bind='args' padding='${size}'>
            <template #header>header</template>
            <template #footer>footer</template>
            Hello World
          </CoPanel>
        `)

  return {
    components: { CoPanel },
    setup() {
      return { args }
    },
    template: mapRender(common),
  }
}
