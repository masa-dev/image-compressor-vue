import { shallowMount } from "@vue/test-utils";
import DragAndDrop from "@/components/DragAndDrop.vue";

describe("DragAndDrop.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "ここに画像をドロップ または画像を選択";
    const wrapper = shallowMount(DragAndDrop);
    expect(wrapper.text()).toMatch(msg);
  });
});
