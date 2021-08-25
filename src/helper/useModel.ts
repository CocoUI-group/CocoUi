import { computed, watch, WritableComputedRef } from 'vue'

export const useModel = <T>(
  get: () => T,
  set: (v: T) => void,
  watchHandle?: (newV: T, oldV: T) => void
): [WritableComputedRef<T>, (v: T) => T] => {
  const model = computed<T>({ get, set })
  const setModel = (v: T) => (model.value = v)
  watch(model, (newV, oldV) => watchHandle && watchHandle(newV, oldV))
  return [model, setModel]
}
