import { ThemeSize } from '@/helper'
import type { InjectionKey } from 'vue'

type V = boolean | string | number

export interface RadioGroup {
  modelValue: V
  size: ThemeSize
  disabled: boolean
  changeEvent: (val: V) => void
  isGroup: boolean
  name: string
}
export const radioGroupKey: InjectionKey<RadioGroup> = Symbol('RadioGroup')
