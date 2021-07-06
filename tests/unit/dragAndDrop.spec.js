import { shallowMount } from "@vue/test-utils";
import DragAndDrop from "@/components/DragAndDrop.vue";

describe("DragAndDrop.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(DragAndDrop);
    const fileInput = wrapper.find("#file-input");

    expect(wrapper.text()).toContain("ここに画像をドロップ");
    expect(wrapper.text()).toContain("または画像を選択");

    expect(fileInput.exists()).toBe(true);
    expect(fileInput.element.tagName).toBe("INPUT");
  });
});
