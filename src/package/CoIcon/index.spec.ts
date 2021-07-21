import CoIcon from './index.vue'
import { mount } from '@vue/test-utils'
import { ThemeSize, ThemeType } from '@/helper'
import { IconName } from '@/package/CoIcon/index.icon'

describe('CoIcon.vue', () => {
  it('can use', () => {
    const wrap = mount(CoIcon)
    expect(wrap).toBeTruthy()
  })
  it('can click', () => {
    const cb = jest.fn()
    const wrap = mount(CoIcon, { props: { onClick: cb } })
    expect(cb).toBeCalledTimes(0)
    wrap.trigger('click')
    expect(cb).toBeCalledTimes(1)
  })
  describe('can toggle icon`s type', () => {
    it('default iconfont', () => {
      const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft } })
      const el = wrap.get('i')
      expect(el).toBeTruthy()
      expect(el.classes('co-arrowleft')).toBeTruthy()
      expect(el.classes('iconfont')).toBeTruthy()
    })
    it('set svg', () => {
      const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft, svg: true } })
      const el = wrap.get('svg')
      //无法使用dom操作引入js
      expect(el).toBeTruthy()
    })
  })
  describe('can use size', () => {
    it('default md', () => {
      const wrap = mount(CoIcon)
      expect(wrap.classes('text-base')).toBeTruthy()
    })
    it('mini', () => {
      const wrap = mount(CoIcon, { props: { size: ThemeSize.mini } })
      expect(wrap.classes('text-xs')).toBeTruthy()
    })
  })

  describe('can use type', () => {
    it('default', () => {
      const wrap = mount(CoIcon)
      expect(wrap.classes('text-current')).toBeTruthy()
    })
    it('primary', () => {
      const wrap = mount(CoIcon, {
        props: { type: ThemeType.primary },
      })
      expect(wrap.classes('text-primary-500')).toBeTruthy()
    })
  })

  describe('can use pointer', () => {
    it('default', () => {
      const wrap = mount(CoIcon)
      expect(wrap.classes('hover:opacity-80')).toBeFalsy()
      expect(wrap.classes('cursor-pointer')).toBeFalsy()
    })
    it('primary', () => {
      const wrap = mount(CoIcon, {
        props: { pointer: true },
      })
      expect(wrap.classes('hover:opacity-80')).toBeTruthy()
      expect(wrap.classes('cursor-pointer')).toBeTruthy()
    })
  })
})
