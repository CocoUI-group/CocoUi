import { ThemeSize, ThemeType } from '@/helper'
import { reactify } from '@vueuse/core'

const typeStyle = (type: ThemeType, disabled: boolean, underline: boolean): string => {
  if (disabled) {
    return 'cursor-not-allowed text-gray-400'
  }
  const map: { [key in ThemeType]: string } = {
    [ThemeType.default]: 'text-primary-500 hover:opacity-80',
    [ThemeType.primary]: 'text-primary-500 hover:opacity-80',
    [ThemeType.secondary]: 'text-secondary-500 hover:opacity-80',
    [ThemeType.success]: 'text-success-500 hover:opacity-80',
    [ThemeType.warning]: 'text-warning-500 hover:opacity-80',
    [ThemeType.danger]: 'text-danger-500 hover:opacity-80',
  }
  const classList = map[type] || map[ThemeType.default]
  if (underline) {
    return [classList, 'hover:underline'].join(' ')
  } else {
    return classList
  }
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
