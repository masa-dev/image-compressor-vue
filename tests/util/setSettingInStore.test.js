import setSettingInStore from "@/util/setSettingInStore";
import store from "@/store/index.js";

/*const propNameList = [
  "quality",
  "maxWidth",
  "maxHeight",
  "isOnlyJpeg",
  "convertAlltoJpeg",
  "processWhenFileInput",
  "hideFileList",
  "callHistoryOnStartup",
];*/

// input var: setSettingInStore(store, varName, value)

describe("setSettingInStoreのテスト", () => {
  // 設定の初期化
  for (let propName in store.state.settings) {
    store.state.settings[propName] = null;
  }

  test("入力値が正常の場合", () => {
    // boolean
    setSettingInStore(store, "hideFileList", true);
    expect(store.state.settings.hideFileList).toBe(true);

    // Number
    setSettingInStore(store, "maxWidth", 1000);
    expect(store.state.settings.maxWidth).toBe(1000);

    // Range
    setSettingInStore(store, "quality", 0.9);
    expect(store.state.settings.quality).toBe(0.9);
  });

  test("入力値が異常の場合", () => {
    // varName（引数）が文字列でない
    expect(() => setSettingInStore(store, 100, 1000)).toThrow(TypeError);

    // varName（引数）が存在しない値
    expect(() => setSettingInStore(store, "wrongPropName", 1000)).toThrow(
      Error
    );
  });
});
