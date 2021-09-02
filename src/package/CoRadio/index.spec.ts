import CoRadio from './index.vue'
import { mount } from '@vue/test-utils'

describe('CoRadio.vue', () => {
  it('can use', () => {
    const wrap = mount(CoRadio)
    expect(wrap).toBeTruthy()
  })
})
