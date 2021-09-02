import CoRadioGroup from './index.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import CoRadio from '@/package/CoRadio/index.vue'
import { ComponentPublicInstance, ref } from 'vue'

const getInput = <T extends ComponentPublicInstance, S extends VueWrapper<T>>(
  wrap: S,
  ref: string
) => wrap.findComponent({ ref }).find('.co-radio__input').element as HTMLInputElement

describe('CoRadioGroup.vue', () => {
  it('can use', async () => {
    const wrap = mount({
      components: { CoRadioGroup, CoRadio },
      template: `
        <CoRadioGroup v-model='value'>
          <CoRadio ref='apple' value='apple' />
          <CoRadio ref='banana' value='banana' />
          <CoRadio ref='coco' value='coco' />
        </CoRadioGroup>
      `,
      setup() {
        return { value: ref('apple') }
      },
    })
    expect(wrap).toBeTruthy()
    const banana = wrap.findComponent({ ref: 'banana' })
    const appleInput = getInput(wrap, 'apple')
    const bananaInput = getInput(wrap, 'banana')
    expect(appleInput.checked).toBe(true)
    expect(bananaInput.checked).toBe(false)
    await banana.trigger('click')
    expect(appleInput.checked).toBe(false)
    expect(bananaInput.checked).toBe(true)
  })
  it('can set name', () => {
    const wrap = mount({
      components: { CoRadioGroup, CoRadio },
      template: `
        <CoRadioGroup v-model='value' name='fruit'>
          <CoRadio ref='apple' value='apple' />
          <CoRadio name='banana' ref='banana' value='banana' />
          <CoRadio name='coco' ref='coco' value='coco' />
        </CoRadioGroup>
      `,
      setup() {
        return { value: ref('apple') }
      },
    })
    const apple = getInput(wrap, 'apple')
    const banana = getInput(wrap, 'banana')
    const coco = getInput(wrap, 'coco')
    expect(apple.name).toBe('fruit')
    expect(banana.name).toBe('fruit')
    expect(coco.name).toBe('fruit')
  })

  it('can set disabled', () => {
    const wrap = mount({
      components: { CoRadioGroup, CoRadio },
      template: `
        <CoRadioGroup v-model='value' disabled>
          <CoRadio ref='apple' value='apple' />
          <CoRadio ref='banana' value='banana' />
          <CoRadio ref='coco' value='coco' />
        </CoRadioGroup>
      `,
      setup() {
        return { value: ref('apple') }
      },
    })
    const bananaRef = wrap.findComponent({ ref: 'banana' })

    const apple = getInput(wrap, 'apple')
    const banana = getInput(wrap, 'banana')
    const coco = getInput(wrap, 'coco')
    expect(apple.disabled).toBe(true)
    expect(apple.checked).toBe(true)
    expect(banana.disabled).toBe(true)
    expect(banana.checked).toBe(false)
    expect(coco.disabled).toBe(true)

    bananaRef.trigger('click')
    expect(apple.checked).toBe(true)
    expect(banana.checked).toBe(false)
  })

  it('can set size', () => {
    const wrap = mount({
      components: { CoRadioGroup, CoRadio },
      template: `
        <CoRadioGroup v-model='value' size='mini'>
          <CoRadio ref='apple' value='apple' />
          <CoRadio size='lg' ref='banana' value='banana' />
          <CoRadio ref='coco' value='coco' />
        </CoRadioGroup>
      `,
      setup() {
        return { value: ref('apple') }
      },
    })
    const bananaRef = wrap.findComponent({ ref: 'banana' })
    expect(bananaRef.classes('text-xs')).toBeTruthy()
  })
})
