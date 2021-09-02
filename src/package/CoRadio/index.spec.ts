import CoRadio from './index.vue'
import { mount } from '@vue/test-utils'
import { ThemeSize } from '@/helper'

describe('CoRadio.vue', () => {
  it('can use', () => {
    const wrap = mount(CoRadio, {
      props: {
        modelValue: '2',
        value: '1',
      },
    })
    expect(wrap).toBeTruthy()
    const input = wrap.find('.co-radio__input').element as HTMLInputElement
    expect(input.checked).toBe(false)
    expect(wrap.vm.isCheck).toBe(false)
    wrap.trigger('click')
    expect(input.checked).toBe(true)
  })
  describe('can set text', () => {
    it('by prop', () => {
      const wrap = mount(CoRadio, {
        props: {
          text: 'apple',
          value: '1',
        },
      })
      expect(wrap.find('.co-radio__text').text()).toBe('apple')
    })
    it('by slot', () => {
      const wrap = mount(CoRadio, {
        props: {
          value: '1',
        },
        slots: {
          default: 'banana',
        },
      })
      expect(wrap.find('.co-radio__text').text()).toBe('banana')
    })
  })
  it('can set disabled', () => {
    const wrap = mount(CoRadio, { props: { value: '1', disabled: true } })
    const input = wrap.find('.co-radio__input').element as HTMLInputElement
    expect(wrap.classes('cursor-not-allowed')).toBe(true)
    expect(wrap.find('.co-radio__text').classes('text-gray-400')).toBe(true)
    expect(input.disabled).toBe(true)
    expect(input.checked).toBe(false)
    wrap.trigger('click')
    expect(input.checked).toBe(false)
  })
  it('can set name', () => {
    const wrap = mount(CoRadio, { props: { value: '1', name: 'hello' } })
    const input = wrap.find('.co-radio__input').element as HTMLInputElement
    expect(input.name).toBe('hello')
  })

  describe('can set size', () => {
    it('default md', () => {
      const wrap = mount(CoRadio, { props: { value: '1' } })
      const radio = wrap.get('.co-radio')
      expect(radio.classes('text-base')).toBeTruthy()
    })
    it('mini', () => {
      const wrap = mount(CoRadio, { props: { value: '1', size: ThemeSize.mini } })
      const radio = wrap.get('.co-radio')
      expect(radio.classes('text-xs')).toBeTruthy()
    })
  })
})
