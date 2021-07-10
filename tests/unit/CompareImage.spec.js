import CompareImage from "@/components/CompareImage.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("CompareImage.vue", () => {
  it("imgタグのテスト", () => {
    const wrapper = mount(CompareImage, { localVue });

    const originImg = wrapper.find("#origin-test-image");
    const compressedImg = wrapper.find("#compressed-test-image");

    expect(originImg.exists()).toBe(true);
    expect(originImg.element.tagName).toBe("IMG");
    expect(compressedImg.exists()).toBe(true);
    expect(compressedImg.element.tagName).toBe("IMG");
  });
});
