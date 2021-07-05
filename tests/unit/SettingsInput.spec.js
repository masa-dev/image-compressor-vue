import SettingsInput from "@/components/SettingsInput.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("SettingsInput.vue", () => {
  it("renders props.msg when passed", () => {
    const msg =
      "品質： 0.8  最大横幅  最大縦幅  JPEG形式のみ処理を行う すべてJPEG形式に変換（注意）";
    const wrapper = mount(SettingsInput, { localVue });

    expect(wrapper.text()).toMatch(msg);
  });
});
