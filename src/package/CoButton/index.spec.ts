import CoButton from './index.vue'
import { mount } from '@vue/test-utils'
import { ThemeSize, ThemeType } from '@/helper'
import { Round } from '@/package/CoButton/index.config'

describe('CoButton.vue', () => {
  it('can use', () => {
    const wrap = mount(CoButton, {
      slots: {
        default: '测试',
      },
    })
    expect(wrap).toBeTruthy()
    expect(wrap.get('button')).toBeTruthy()
    expect(wrap.get('button').text()).toBe('测试')
  })

  describe('can use type', () => {
    it('default', () => {
      const wrap = mount(CoButton)
      const button = wrap.get('button')
      expect(button.classes('bg-white')).toBeTruthy()
    })
    it('primary', () => {
      const wrap = mount(CoButton, {
        props: { type: ThemeType.primary },
      })
      const button = wrap.get('button')
      expect(button.classes('bg-primary-500')).toBeTruthy()
    })
    it('primary with plain', () => {
      const wrap = mount(CoButton, {
        props: { type: ThemeType.primary, plain: true },
      })
      const button = wrap.get('button')
      expect(button.classes('bg-primary-50')).toBeTruthy()
    })
  })

  describe('can use size', () => {
    it('default md', () => {
      const wrap = mount(CoButton)
      const button = wrap.get('button')
      expect(button.classes('text-base')).toBeTruthy()
    })
    it('mini', () => {
      const wrap = mount(CoButton, { props: { size: ThemeSize.mini } })
      const button = wrap.get('button')
      expect(button.classes('text-xs')).toBeTruthy()
    })
    describe('can use round', () => {
      it('default bySize', () => {
        const wrap = mount(CoButton)
        const button = wrap.get('button')
        expect(button.classes('rounded-md')).toBeTruthy()
      })
      it('none', () => {
        const wrap = mount(CoButton, { props: { round: Round.none } })
        const button = wrap.get('button')
        expect(button.classes('rounded-none')).toBeTruthy()
      })
      it('full', () => {
        const wrap = mount(CoButton, { props: { round: Round.full } })
        const button = wrap.get('button')
        expect(button.classes('rounded-full')).toBeTruthy()
      })
    })
  })

  describe('can disabled', () => {
    it('default that button can click', () => {
      const cb = jest.fn()
      const wrap = mount(CoButton, {
        props: {
          onClick: cb,
        },
      })
      const button = wrap.get('button')
      expect(cb).toBeCalledTimes(0)
      button.trigger('click')
      expect(cb).toBeCalledTimes(1)
    })
    it('be true that button can not click', () => {
      const cb = jest.fn()
      const wrap = mount(CoButton, { props: { disabled: true, onClick: cb } })
      const button = wrap.get('button')
      expect(cb).toBeCalledTimes(0)
      button.trigger('click')
      expect(button.classes('cursor-not-allowed')).toBeTruthy()
      expect(cb).toBeCalledTimes(0)
    })
  })
})
