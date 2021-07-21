import { cdnHash } from '@/package/CoIcon/index.config'

export const useIcon = (url = ''): void => {
  const linkEl = document.createElement('link')
  linkEl.rel = 'stylesheet'
  linkEl.href = url || `//at.alicdn.com/t/${cdnHash}.css`
  const scriptEl = document.createElement('script')
  scriptEl.src = url || `//at.alicdn.com/t/${cdnHash}.js`
  document.head.append(linkEl)
  document.head.append(scriptEl)
}
