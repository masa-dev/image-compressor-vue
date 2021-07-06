import SettingsInput from "@/components/SettingsInput.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("SettingsInput.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(SettingsInput, { localVue });
    const inputArray = wrapper.findAll("input");

    expect(wrapper.text()).toMatch(/品質：\s(\d|\d\.\d)/);
    expect(wrapper.text()).toContain("最大横幅");
    expect(wrapper.text()).toContain("JPEG形式のみ処理を行う");
    expect(wrapper.text()).toContain("すべてJPEG形式に変換（注意）");

    expect(inputArray.length).toBe(5);

    inputArray.wrappers.forEach((InputWrapper) => {
      expect(InputWrapper.exists()).toBe(true);
      expect(InputWrapper.element.tagName).toBe("INPUT");
    });
  });
});
