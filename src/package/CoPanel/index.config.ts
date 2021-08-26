import { reactify } from '@vueuse/core'
import { ThemeSize } from '@/helper'
const paddingMap = {
  [ThemeSize.mini]: { content: 'px-4 py-2', slot: 'px-4 py-2' },
  [ThemeSize.sm]: { content: 'px-6 py-4', slot: 'px-6 py-3' },
  [ThemeSize.md]: { content: 'px-8 py-6', slot: 'px-8 py-4' },
  [ThemeSize.lg]: { content: 'px-10 py-8', slot: 'px-10 py-5' },
}
const paddingStyle = (padding: ThemeSize) => {
  return paddingMap[padding] || paddingMap[ThemeSize.md]
}
export const reactivePaddingStyle = reactify(paddingStyle)
