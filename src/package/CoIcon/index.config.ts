import { ThemeSize, ThemeType } from '@/helper'
import { reactify } from '@vueuse/core'
// noinspection SpellCheckingInspection
export const cdnHash = `font_1286082_loc28tee2jp`

export enum IconType {
  class = 'class',
  svg = 'svg',
}

const typeStyle = (type: ThemeType, pointer: boolean): string => {
  const map: { [key in ThemeType]: string } = {
    [ThemeType.default]: 'text-current',
    [ThemeType.primary]: 'text-primary-500',
    [ThemeType.secondary]: 'text-secondary-500',
    [ThemeType.success]: 'text-success-500',
    [ThemeType.warning]: 'text-warning-500',
    [ThemeType.danger]: 'text-danger-500',
  }
  const defaultStyle = ''
  const style = map[type] || defaultStyle
  if (pointer) {
    return [style, 'hover:opacity-80', 'cursor-pointer'].join(' ')
  }
  return style
}
const sizeStyle = (size: ThemeSize): string => {
  const defaultStyle = 'text-base'
  const map: { [key in ThemeSize]: string } = {
    [ThemeSize.mini]: 'text-xs',
    [ThemeSize.sm]: 'text-sm',
    [ThemeSize.md]: 'text-base',
    [ThemeSize.lg]: 'text-lg',
  }
  return map[size] || defaultStyle
}

export const reactiveTypeStyle = reactify(typeStyle)
export const reactiveSizeStyle = reactify(sizeStyle)
