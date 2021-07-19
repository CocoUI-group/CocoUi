import CoInput from './index.vue'
import { mount } from '@vue/test-utils'

describe('CoInput.vue', () => {
  it('can use', () => {
    const wrap = mount(CoInput)
    expect(wrap).toBeTruthy()
  })
})