import CoIcon from './index.vue'
import { StoryTemplate } from '@/type/story.type'

export default {
  title: 'CoIcon',
  component: CoIcon,
}

interface Args {}

export const Common: StoryTemplate<Args> = (args: Args) => ({
  components: { CoIcon },
  setup() {
    return { args }
  },
  template: '<CoIcon v-bind="args">CoIcon</CoIcon>',
})

Common.args = {}
