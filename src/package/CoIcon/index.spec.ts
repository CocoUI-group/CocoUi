import CoIcon from './index.vue'
import { mount } from '@vue/test-utils'

describe('CoIcon.vue', () => {
  it('can use', () => {
    const wrap = mount(CoIcon)
    expect(wrap).toBeTruthy()
  })
})