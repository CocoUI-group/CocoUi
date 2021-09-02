import { ThemeSize } from '@/helper'
import { reactify } from '@vueuse/core'

const sizeStyle = (size: ThemeSize) => {
  const map: { [key in ThemeSize]: string } = {
    [ThemeSize.mini]: 'text-xs py-1',
    [ThemeSize.sm]: ' text-sm py-2',
    [ThemeSize.md]: 'text-base py-2',
    [ThemeSize.lg]: 'text-lg py-2',
  }
  return map[size] || map[ThemeSize.md]
}
export const reactiveSizeStyle = reactify(sizeStyle)
