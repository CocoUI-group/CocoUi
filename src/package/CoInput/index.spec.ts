import CoInput from './index.vue'
import { flushPromises, mount } from '@vue/test-utils'
import { ref } from 'vue'
import { ThemeRound, ThemeSize } from '@/helper'

describe('CoInput.vue', () => {
  it('can use', async () => {
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    const wrap = mount({
      template: `
        <CoInput @blur='onBlur' @focus='onFocus' placeholder='please' v-model='val' />`,
      components: { CoInput },
      setup() {
        const val = ref('123')
        return { val, onFocus, onBlur }
      },
    })
    const $input = wrap.find('input')
    expect($input.element.placeholder).toBe('please')
    expect($input.element.value).toBe('123')
    expect(onFocus).toHaveBeenCalledTimes(0)
    expect(onBlur).toHaveBeenCalledTimes(0)
    await $input.trigger('focus')
    expect(onFocus).toHaveBeenCalledTimes(1)
    wrap.vm.val = 'change'
    await flushPromises()
    expect($input.element.value).toBe('change')
    await $input.trigger('blur')
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  describe('can use size', () => {
    it('default md', () => {
      const wrap = mount(CoInput)
      const input = wrap.get('input')
      expect(input.classes('text-base')).toBeTruthy()
      expect(input.classes('py-2')).toBeTruthy()
    })
    it('mini', () => {
      const wrap = mount(CoInput, { props: { size: ThemeSize.mini } })
      const input = wrap.get('input')
      expect(input.classes('text-xs')).toBeTruthy()
      expect(input.classes('py-1')).toBeTruthy()
    })
  })
  describe('can use round', () => {
    it('default bySize', () => {
      const wrap = mount(CoInput)
      const input = wrap.get('input')
      expect(input.classes('rounded')).toBeTruthy()
    })
    it('none', () => {
      const wrap = mount(CoInput, { props: { round: ThemeRound.none } })
      const input = wrap.get('input')
      expect(input.classes('rounded-none')).toBeTruthy()
    })
    it('full', () => {
      const wrap = mount(CoInput, { props: { round: ThemeRound.full } })
      const input = wrap.get('input')
      expect(input.classes('rounded-full')).toBeTruthy()
    })
  })

  it('can disabled', () => {
    const cb = jest.fn()
    const wrap = mount(CoInput, { props: { disabled: true, onFocus: cb } })
    const input = wrap.get('input')
    expect(input.classes('cursor-not-allowed')).toBeTruthy()
    expect(input.attributes('disabled')).toBeTruthy()
    expect(cb).toBeCalledTimes(0)
    input.trigger('focus')
    expect(cb).toBeCalledTimes(0)
  })

  it('can set error', () => {
    const wrap = mount(CoInput, { props: { error: true } })
    const input = wrap.get('input')
    expect(input.classes('border-danger-500')).toBeTruthy()
  })

  it('can set password', async () => {
    const wrap = mount(CoInput, { props: { password: true } })
    const input = wrap.find('input')
    const icon = wrap.find('i.iconfont')
    expect(input.attributes('type')).toBe('password')
    expect(icon.classes('co-eye-close')).toBeTruthy()
    await icon.trigger('click')
    await flushPromises()
    expect(input.attributes('type')).toBe('text')
    expect(icon.classes('co-eye')).toBeTruthy()
  })
})
