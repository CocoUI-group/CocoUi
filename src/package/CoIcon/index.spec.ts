import CoIcon from './index.vue'
import { mount } from '@vue/test-utils'
import { ThemeSize, ThemeType } from '@/helper'
import { IconName } from '@/package/CoIcon/index.icon'

describe('CoIcon.vue', () => {
  it('can use', () => {
    const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft } })
    expect(wrap).toBeTruthy()
  })
  it('can click', () => {
    const cb = jest.fn()
    const wrap = mount(CoIcon, { props: { onClick: cb, icon: IconName.Arrowleft } })
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
      expect(el).toBeTruthy()
      expect(wrap.get('use').attributes('href')).toBe('#co-arrowleft')
    })
  })
  describe('can use size', () => {
    it('default md', () => {
      const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft } })
      expect(wrap.classes('text-base')).toBeTruthy()
    })
    it('mini', () => {
      const wrap = mount(CoIcon, { props: { size: ThemeSize.mini, icon: IconName.Arrowleft } })
      expect(wrap.classes('text-xs')).toBeTruthy()
    })
  })

  describe('can use type', () => {
    it('default', () => {
      const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft } })
      expect(wrap.classes('text-current')).toBeTruthy()
    })
    it('primary', () => {
      const wrap = mount(CoIcon, {
        props: { type: ThemeType.primary, icon: IconName.Arrowleft },
      })
      expect(wrap.classes('text-primary-500')).toBeTruthy()
    })
  })

  describe('can use pointer', () => {
    it('default', () => {
      const wrap = mount(CoIcon, { props: { icon: IconName.Arrowleft } })
      expect(wrap.classes('hover:opacity-80')).toBeFalsy()
      expect(wrap.classes('cursor-pointer')).toBeFalsy()
    })
    it('primary', () => {
      const wrap = mount(CoIcon, {
        props: { pointer: true, icon: IconName.Arrowleft },
      })
      expect(wrap.classes('hover:opacity-80')).toBeTruthy()
      expect(wrap.classes('cursor-pointer')).toBeTruthy()
    })
  })
})
