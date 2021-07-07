import SettingsModal from "@/components/SettingsModal.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("SettingsModal.vue", () => {
  const wrapper = mount(SettingsModal, { localVue });
  it("モーダルを開くボタンのテキストチェック", () => {
    const button = wrapper.find("#open-modal");

    expect(button.text()).toMatch("詳細設定");
  });

  it("モーダルを開いた時の挙動のテスト", () => {
    const button = wrapper.find("#open-modal");
    const modal = wrapper.find("#detailed-settings");

    expect(button.exists()).toBe(true);
    expect(button.element.tagName).toBe("BUTTON");
    expect(modal.exists()).toBe(true);
    expect(modal.element.tagName).toBe("DIV");

    expect(modal.isVisible()).toBe(false);

    // 表示ボタンをクリックした後の挙動のテスト
    button.trigger("click").then(() => {
      expect(modal.isVisible()).toBe(true);

      expect(button.exists()).toBe(true);
      expect(modal.exists()).toBe(true);
    });
  });
});
