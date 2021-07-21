import CoInput from './index.vue'
import { StoryTemplate } from '@/type/story.type'

export default {
  title: 'CoInput',
  component: CoInput,
}

interface Args {
  A?: string
}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoInput },
  setup() {
    return { args }
  },
  template: '<CoInput v-bind="args">CoInput</CoInput>',
})

Common.args = {}
