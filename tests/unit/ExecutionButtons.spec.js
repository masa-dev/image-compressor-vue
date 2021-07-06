import ExecutionButtons from "@/components/ExecutionButtons.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("ExecutionButtons.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(ExecutionButtons, { localVue });
    const inputArray = wrapper.findAll("button");

    expect(inputArray.length).toBe(2);

    expect(inputArray.at(0).text()).toBe("再圧縮処理");
    expect(inputArray.at(1).text()).toBe("画像ファイルをダウンロード");

    inputArray.wrappers.forEach((InputWrapper) => {
      expect(InputWrapper.exists()).toBe(true);
      expect(InputWrapper.element.tagName).toBe("BUTTON");
    });
  });
});
