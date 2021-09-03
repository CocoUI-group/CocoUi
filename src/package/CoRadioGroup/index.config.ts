import { ThemeSize } from "@/helper";
import type { InjectionKey } from "vue";
import { UnwrapNestedRefs } from "@vue/reactivity";

type V = boolean | string | number;

export interface RadioGroup {
  modelValue: V;
  size: ThemeSize;
  disabled: boolean;
  changeEvent: (val: V) => void;
  isGroup: boolean;
  name: string;
}

export const radioGroupKey: InjectionKey<UnwrapNestedRefs<RadioGroup>> = Symbol("RadioGroup");
