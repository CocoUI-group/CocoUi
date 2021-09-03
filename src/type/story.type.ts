import { ComponentOptionsWithoutProps } from "@vue/runtime-core";

export interface StoryTemplate<T> {
  args?: T;

  (args: T): ComponentOptionsWithoutProps;
}
