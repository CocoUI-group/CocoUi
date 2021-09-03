import { ThemeRound, ThemeSize } from "@/helper";
import { Slots } from "@vue/runtime-core";
import { reactify } from "@vueuse/core";

const map = {
  [ThemeSize.mini]: [
    ["left-1.5", "left-2.5"],
    ["right-1.5", "right-2.5"],
  ],
  [ThemeSize.sm]: [
    ["left-2", "left-3"],
    ["right-2", "right-3"],
  ],
  [ThemeSize.md]: [
    ["left-2", "left-3"],
    ["right-2", "right-3"],
  ],
  [ThemeSize.lg]: [
    ["left-2.5", "left-3"],
    ["right-2.5", "right-3"],
  ],
};
const leftSlot = (round: ThemeRound, size: ThemeSize): string => {
  return map[size][0][round === ThemeRound.full ? 1 : 0];
};
export const reactiveLeftSlot = reactify(leftSlot);

const rightSlot = (round: ThemeRound, size: ThemeSize): string => {
  return map[size][1][round === ThemeRound.full ? 1 : 0];
};
export const reactiveRightSlot = reactify(rightSlot);

const typeStyle = (disabled: boolean, error: boolean): string => {
  const list = [];
  if (error) {
    list.push(
      "border-danger-500 focus:border-danger-500 focus:ring-0 text-danger-500 focus:text-danger-500"
    );
  }
  if (disabled) {
    list.push("bg-coolGray-100 text-gray-500 cursor-not-allowed opacity-80");
    if (!error) {
      list.push("border-gray-300");
    }
  }

  return list.join(" ");
};

export const reactiveTypeStyle = reactify(typeStyle);

const paddingMap = {
  [ThemeSize.mini]: {
    normal: {
      left: { normal: "pl-2", slot: "pl-5" },
      right: { normal: "pr-2", slot: "pr-5" },
    },
    full: {
      left: { normal: "pl-3", slot: "pl-6" },
      right: { normal: "pr-3", slot: "pr-6" },
    },
  },
  [ThemeSize.sm]: {
    normal: {
      left: { normal: "pl-3", slot: "pl-6" },
      right: { normal: "pr-3", slot: "pr-6" },
    },
    full: {
      left: { normal: "pl-4", slot: "pl-7" },
      right: { normal: "pr-4", slot: "pr-7" },
    },
  },
  [ThemeSize.md]: {
    normal: {
      left: { normal: "pl-5", slot: "pl-7" },
      right: { normal: "pr-5", slot: "pr-7" },
    },
    full: {
      left: { normal: "pl-6", slot: "pl-8" },
      right: { normal: "pr-6", slot: "pr-8" },
    },
  },
  [ThemeSize.lg]: {
    normal: {
      left: { normal: "pl-5", slot: "pl-8" },
      right: { normal: "pr-5", slot: "pr-8" },
    },
    full: {
      left: { normal: "pl-5", slot: "pl-8" },
      right: { normal: "pr-5", slot: "pr-8" },
    },
  },
};

const sizeStyle = (
  size: ThemeSize,
  round: ThemeRound,
  slots: Slots,
  rightIcon: boolean
): string => {
  const map: { [key in ThemeSize]: string } = {
    [ThemeSize.mini]: "text-xs py-1",
    [ThemeSize.sm]: "text-sm py-2",
    [ThemeSize.md]: "text-base py-2",
    [ThemeSize.lg]: "text-lg py-2",
  };
  const roundMap = {
    [ThemeSize.mini]: "rounded-sm",
    [ThemeSize.sm]: "rounded",
    [ThemeSize.md]: "rounded",
    [ThemeSize.lg]: "rounded",
  };
  const isFull = round === ThemeRound.full ? "full" : "normal";
  const left = paddingMap[size][isFull].left[slots.before ? "slot" : "normal"];
  const right = paddingMap[size][isFull].right[slots.after || rightIcon ? "slot" : "normal"];
  const classList = [map[size] || map[ThemeSize.md], left, right];

  switch (round) {
    case ThemeRound.none:
      return [...classList, "rounded-none"].join(" ");
    case ThemeRound.full:
      return [...classList, "rounded-full"].join(" ");
    default:
      return [...classList, roundMap[size] || "rounded-md"].join(" ");
  }
};

export const reactiveSizeStyle = reactify(sizeStyle);
