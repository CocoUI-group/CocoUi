import { mount } from "@vue/test-utils";
import CoPanel from "./index.vue";
import { ThemeSize } from "@/helper";

describe("CoPanel.vue", () => {
  it("can use", () => {
    const wrap = mount(CoPanel, {
      slots: {
        default: "hello panel",
      },
    });
    expect(wrap).toBeTruthy();
    expect(wrap.text()).toBe("hello panel");
  });
  it("can set content class", () => {
    const wrap = mount(CoPanel, {
      slots: {
        default: "hello panel",
      },
      props: { contentClass: "test" },
    });
    const content = wrap.get(".co-panel__content");
    expect(content.classes("test")).toBeTruthy();
  });
  describe("can use slot", () => {
    it("header", () => {
      const wrap = mount({
        template: `
          <CoPanel>
          <template #header>header</template>
          Hello World
          </CoPanel>`,
        components: { CoPanel },
      });
      const header = wrap.get("div.co-panel__header");
      expect(header.text()).toBe("header");
    });
    it("footer", () => {
      const wrap = mount({
        template: `
          <CoPanel>
          <template #footer>footer</template>
          Hello World
          </CoPanel>`,
        components: { CoPanel },
      });
      const footer = wrap.get("div.co-panel__footer");
      expect(footer.text()).toBe("footer");
    });
    it("img", () => {
      const wrap = mount({
        template: `
          <CoPanel>
          <template #img><img src='https://hello.world.com' alt=''></template>
          Hello World
          </CoPanel>`,
        components: { CoPanel },
      });
      const img = wrap.get("img");
      expect(img.attributes("src")).toBe("https://hello.world.com");
    });
  });

  describe("can set padding", () => {
    it("default md", () => {
      const wrap = mount({
        template: `
          <CoPanel>
          <template #header>header</template>
          <template #footer>footer</template>
          Hello World
          </CoPanel>`,
        components: { CoPanel },
      });
      const header = wrap.get("div.co-panel__header");
      const content = wrap.get(".co-panel__content");
      const footer = wrap.get("div.co-panel__footer");
      expect(header.classes("px-8")).toBeTruthy();
      expect(header.classes("py-4")).toBeTruthy();
      expect(content.classes("px-8")).toBeTruthy();
      expect(content.classes("py-6")).toBeTruthy();
      expect(footer.classes("px-8")).toBeTruthy();
      expect(footer.classes("py-4")).toBeTruthy();
    });
    it("set lg", () => {
      const wrap = mount({
        template: `
          <CoPanel padding='${ThemeSize.lg}'>
          <template #header>header</template>
          <template #footer>footer</template>
          Hello World
          </CoPanel>`,
        components: { CoPanel },
      });
      const header = wrap.get("div.co-panel__header");
      const content = wrap.get(".co-panel__content");
      const footer = wrap.get("div.co-panel__footer");
      expect(header.classes("px-10")).toBeTruthy();
      expect(header.classes("py-5")).toBeTruthy();
      expect(content.classes("px-10")).toBeTruthy();
      expect(content.classes("py-8")).toBeTruthy();
      expect(footer.classes("px-10")).toBeTruthy();
      expect(footer.classes("py-5")).toBeTruthy();
    });
  });
});
