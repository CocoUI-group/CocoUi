import CoRadioGroup from './index.vue'
import { mount } from '@vue/test-utils'

describe('CoRadioGroup.vue', () => {
  it('can use', () => {
    const wrap = mount(CoRadioGroup)
    expect(wrap).toBeTruthy()
  })
})
