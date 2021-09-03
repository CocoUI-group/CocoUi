import CoLink from "./index.vue";
import { mount } from "@vue/test-utils";
import { ThemeSize, ThemeType } from "@/helper";

describe("CoLink.vue", () => {
  it("can use", () => {
    const wrap = mount(CoLink, {
      slots: {
        default: "link",
      },
    });
    expect(wrap).toBeTruthy();
    expect(wrap.get("a")).toBeTruthy();
    expect(wrap.get("a").text()).toBe("link");
  });

  describe("can use type", () => {
    it("default as primary", () => {
      const wrap = mount(CoLink);
      const a = wrap.get("a");
      expect(a.classes("text-primary-500")).toBeTruthy();
    });
    it("success", () => {
      const wrap = mount(CoLink, {
        props: { type: ThemeType.success },
      });
      const a = wrap.get("a");
      expect(a.classes("text-success-500")).toBeTruthy();
    });
  });

  describe("can use size", () => {
    it("default md", () => {
      const wrap = mount(CoLink);
      const a = wrap.get("a");
      expect(a.classes("text-base")).toBeTruthy();
    });
    it("mini", () => {
      const wrap = mount(CoLink, {
        props: { size: ThemeSize.mini },
      });
      const a = wrap.get("a");
      expect(a.classes("text-xs")).toBeTruthy();
    });
  });

  describe("can set href", () => {
    it("default javascript:;", () => {
      const wrap = mount(CoLink);
      const a = wrap.get("a");
      expect(a.attributes("href")).toBe("javascript:;");
    });
    it("set by attr", () => {
      const wrap = mount(CoLink, { props: { href: "https://www.google.com" } });
      const a = wrap.get("a");
      expect(a.attributes("href")).toBe("https://www.google.com");
    });
  });

  describe("can set underline", () => {
    it("default true", () => {
      const wrap = mount(CoLink);
      const a = wrap.get("a");
      expect(a.classes("hover:underline")).toBeTruthy();
    });
    it("false", () => {
      const wrap = mount(CoLink, { props: { underline: false } });
      const a = wrap.get("a");
      expect(a.classes("hover:underline")).toBeFalsy();
    });
  });

  describe("can set disabled", () => {
    it("default false that can handle click", () => {
      const cb = jest.fn();
      const wrap = mount(CoLink, {
        props: {
          onClick: cb,
        },
      });
      const a = wrap.get("a");
      expect(cb).toBeCalledTimes(0);
      a.trigger("click");
      expect(cb).toBeCalledTimes(1);
    });
    it("true that disabled click and href eq null", () => {
      const cb = jest.fn();
      const wrap = mount(CoLink, {
        props: {
          onClick: cb,
          disabled: true,
        },
      });
      const a = wrap.get("a");
      expect(a.attributes("href")).toBeFalsy();
      expect(a.classes("cursor-not-allowed")).toBeTruthy();
      expect(cb).toBeCalledTimes(0);
      a.trigger("click");
      expect(cb).toBeCalledTimes(0);
    });
  });
});
