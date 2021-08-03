import store from "@/store";
import getLocalFile from "@/util/getLocalFile";

// 使用する画像の情報
const dir = "../../src/assets/img/default_image.jpg";
const name = "default_image.jpg";
const type = "image/jpeg";

// 使用するファイルをFileオブジェクトとして取得する
const inputFile = getLocalFile(dir, name, type);

describe("files モジュール", () => {
  test("ファイル未入力時", () => {
    store.commit({ type: "setInputImages", images: [] });
    expect(store.getters.getInputImagesLength).toBe(0);
    expect(store.state.files.inputImages.length).toBe(0);
    expect(store.state.files.compressedImages.length).toBe(0);
  });

  test("ファイル入力時", () => {
    store.commit({
      type: "setInputImages",
      images: [inputFile],
    });
    expect(store.getters.getInputImagesLength).toBe(1);
    expect(store.state.files.inputImages.length).toBe(1);

    store.commit({
      type: "setCompressedImages",
      images: [inputFile],
    });
    expect(store.state.files.compressedImages.length).toBe(1);
  });
});

describe("settings モジュール", () => {
  /* const propNames = [
    "quality",
    "maxWidth",
    "maxHeight",
    "isOnlyJpeg",
    "convertAlltoJpeg",
    "processWhenFileInput",
    "hideFileList",
    "callHistoryOnStartup",
  ] */

  test("メソッドの確認", () => {
    store.commit({
      type: "setSettings",
      varName: "quality",
      value: 0.1,
    });
    expect(store.state.settings.quality).toBe(0.1);
  });
});

describe("sideContent モジュール", () => {});
