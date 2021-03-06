function setSettingInStore(store, varName, value) {
  if (typeof varName !== "string")
    throw new TypeError("引数の型が正しくありません。");
  if (typeof store.state.settings[varName] === "undefined")
    throw new Error("変数varNameの値を持つプロパティが存在しません。");

  store.commit({
    type: "setSettings",
    varName: varName,
    value: value,
  });
}

export default setSettingInStore;
