import { ThemeRound, ThemeSize, ThemeType } from '@/helper'
import { reactify } from '@vueuse/core'

const typeStyle = (type: ThemeType, plain: boolean, disabled: boolean): string => {
  if (disabled) {
    return 'bg-coolGray-100 border-gray-300 text-gray-500 cursor-not-allowed opacity-80'
  }
  const map = {
    [`${ThemeType.primary}`]: 'bg-primary-500 border-primary-500 text-white hover:opacity-80',
    [`${ThemeType.primary}-plain`]:
      'bg-primary-50 border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500',
    [`${ThemeType.secondary}`]: 'bg-secondary-500 border-secondary-500 text-white hover:opacity-80',
    [`${ThemeType.secondary}-plain`]:
      'bg-secondary-50 border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500',
    [`${ThemeType.success}`]: 'bg-success-500 border-success-500 text-white hover:opacity-80',
    [`${ThemeType.success}-plain`]:
      'bg-success-50 border-success-500 text-success-500 hover:text-white hover:bg-success-500',
    [`${ThemeType.warning}`]: 'bg-warning-500 border-warning-500 text-white hover:opacity-80',
    [`${ThemeType.warning}-plain`]:
      'bg-warning-50 border-warning-500 text-warning-500 hover:text-white hover:bg-warning-500',
    [`${ThemeType.danger}`]: 'bg-danger-500 border-danger-500 text-white hover:opacity-80',
    [`${ThemeType.danger}-plain`]:
      'bg-danger-50 border-danger-500 text-danger-500 hover:text-white hover:bg-danger-500',
  }
  const defaultStyle =
    'bg-white text-gray-700 border-gray-300 hover:border-primary-800 hover:text-primary-800 hover:bg-primary-50'
  return map[`${type}${plain ? '-plain' : ''}`] || defaultStyle
}

const sizeStyle = (size: ThemeSize, round: ThemeRound): string => {
  const defaultStyle = 'text-base py-2 px-8'
  const map: { [key in ThemeSize]: string } = {
    [ThemeSize.mini]: 'text-xs py-1 px-2',
    [ThemeSize.sm]: ' text-sm py-2 px-6',
    [ThemeSize.md]: 'text-base py-2 px-8',
    [ThemeSize.lg]: 'text-lg py-2 px-10',
  }
  const roundMap = {
    [ThemeSize.mini]: 'rounded-sm',
    [ThemeSize.sm]: 'rounded',
    [ThemeSize.md]: 'rounded',
    [ThemeSize.lg]: 'rounded',
  }
  const classList = map[size] || defaultStyle
  switch (round) {
    case ThemeRound.bySize:
      return [classList, roundMap[size] || 'rounded-md'].join(' ')
    case ThemeRound.none:
      return [classList, 'rounded-none'].join(' ')
    case ThemeRound.full:
      return [classList, 'rounded-full'].join(' ')
  }
}

export const reactiveTypeStyle = reactify(typeStyle)
export const reactiveSizeStyle = reactify(sizeStyle)
