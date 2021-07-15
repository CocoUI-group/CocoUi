export const propsDefault = <T>(value: T, arr: T[] | { [key: T]: never }, init: T): T =>
  (Array.isArray(arr) ? arr : Object.keys(arr)).includes(value) ? value : init
