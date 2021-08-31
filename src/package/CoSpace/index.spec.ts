import CoSpace from './index.vue'
import { mount } from '@vue/test-utils'
import { ThemeDirection, ThemeSize } from '@/helper'

describe('CoSpace.vue', () => {
  it('can use', () => {
    const wrap = mount(CoSpace)
    expect(wrap).toBeTruthy()
  })

  describe('can set direction', () => {
    it('default x', () => {
      const wrap = mount({
        components: { CoSpace },
        template: `
          <CoSpace >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </CoSpace>`,
      })
      const $space = wrap.find('.co-space')
      expect($space.classes('co-space__x')).toBeTruthy()
    })
    it('can set y', () => {
      const wrap = mount({
        components: { CoSpace },
        template: `
          <CoSpace direction='${ThemeDirection.y}'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </CoSpace>`,
      })
      const $space = wrap.find('.co-space')
      expect($space.classes('co-space__y')).toBeTruthy()
    })
  })

  describe('can set size', () => {
    it('default md', () => {
      const wrap = mount({
        components: { CoSpace },
        template: `
          <CoSpace >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </CoSpace>`,
      })
      const $space = wrap.find('.co-space')
      expect($space.classes('co-space__md')).toBeTruthy()
    })
    it('can set y', () => {
      const wrap = mount({
        components: { CoSpace },
        template: `
          <CoSpace size='${ThemeSize.mini}'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </CoSpace>`,
      })
      const $space = wrap.find('.co-space')
      expect($space.classes('co-space__mini')).toBeTruthy()
    })
  })
})
