import SettingsModal from "@/components/SettingsModal.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("SettingsModal.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(SettingsModal, { localVue });
    const msg = "詳細設定";

    expect(wrapper.text()).toMatch(msg);
  });
});
