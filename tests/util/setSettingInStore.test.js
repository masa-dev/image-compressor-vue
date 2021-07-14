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

document.body.innerHTML = `<div>
  <input id="sample-checkbox-true" type="checkbox" checked>
  <input id="sample-checkbox-false" type="checkbox">
  <input id="sample-input-number" type="number" value="123">
  <input id="sample-input-range" type="number" value="0.8">  
</div>`;

test("作成したDOMのテスト", () => {
  expect(document.getElementById("sample-checkbox-true").checked).toBe(true);
  expect(document.getElementById("sample-checkbox-false").checked).toBe(false);
  expect(document.getElementById("sample-input-number").value).toBe("123");
  expect(document.getElementById("sample-input-range").value).toBe("0.8");
});

// input var: setSettingInStore(store, id, varName, isCheckbox)
describe("setSettingInStoreのテスト", () => {
  // 設定の初期化
  clearStoreSettings();
  test("入力値が正常の場合", () => {
    // checked が true
    setSettingInStore(store, "sample-checkbox-true", "hideFileList", true);
    expect(store.state.settings.hideFileList).toBe(true);

    // checked が false
    setSettingInStore(
      store,
      "sample-checkbox-false",
      "callHistoryOnStartup",
      true
    );
    expect(store.state.settings.callHistoryOnStartup).toBe(false);

    // 数字の入力
    setSettingInStore(store, "sample-input-number", "maxWidth");
    expect(store.state.settings.maxWidth).toBe("123");

    // 範囲の入力
    setSettingInStore(store, "sample-input-range", "quality");
    expect(store.state.settings.quality).toBe("0.8");
  });

  // 設定の初期化
  clearStoreSettings();
  test("入力値が異常の場合", () => {
    // varName（変数名）が文字列でない
    expect(() =>
      setSettingInStore(store, "sample-checkbox-true", 100, true)
    ).toThrow(TypeError);

    // varName（変数名）が存在しない
    expect(() =>
      setSettingInStore(store, "sample-input-number", "dammyPropName")
    ).toThrow(Error);
  });
});

// store.state.settings 内のすべてのプロパティの値を null にする
function clearStoreSettings() {
  for (let propName in store.state.settings) {
    store.state.settings[propName] = null;
  }
}
