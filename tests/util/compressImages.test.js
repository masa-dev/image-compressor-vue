import store from "@/store/index.js";
import compressImages from "@/util/compressImages";
import getLocalFile from "@/util/getLocalFile";
import setSettingInStore from "@/util/setSettingInStore";

// 使用する画像の情報
const dir = "../../src/assets/img/default_image.jpg";
const name = "default_image.jpg";
const type = "image/jpeg";

// 使用するファイルをFileオブジェクトとして取得する
const inputFile = getLocalFile(dir, name, type);

describe("ファイルが入力されていない時のテスト", () => {
  test("入力された画像のテスト", () => {
    // ファイルを入力しない
    store.commit({
      type: "setInputImages",
      images: [],
    });
    expect(store.state.files.inputImages.length).toBe(0);
  });

  test("isInputFile = false の場合", () => {
    window.alert = jest.fn(); //モック関数を作成
    compressImages(store);
    expect(window.alert.mock.calls.length).toBe(1);
    expect(window.alert.mock.calls[0][0]).toBe("ファイルを選択してください。");
  });

  test("isInputFile = true の場合", () => {
    window.alert = jest.fn(); // モック関数
    compressImages(store, true);
    expect(window.alert.mock.calls.length).toBe(0);
  });
});

describe("ファイルが入力されている時のテスト", () => {
  test("Vuexストアにセットされているかのテスト", () => {
    // 入力ファイルをVuexストアにセットする
    store.commit({
      type: "setInputImages",
      images: [inputFile],
    });
    expect(store.state.files.inputImages.length).toBe(1);
    expect(store.state.files.inputImages[0]).toBe(inputFile);
    expect(store.state.files.inputImages[0].name).toBe(name);
    expect(store.state.files.inputImages[0].type).toBe(type);
  });

  test("処理が実行されているかどうかのテスト", (done) => {
    compressImages(store).then(() => {
      expect(store.state.files.compressedImages.length).toBe(1);
      done();
    });
  });
});

describe("設定の入力値のテスト", () => {
  test("convertAlltoJpegがtrueの場合のテスト", (done) => {
    // 入力ファイルをVuexストアにセットする
    store.commit({
      type: "setInputImages",
      images: [inputFile],
    });

    setSettingInStore(store, "convertAlltoJpeg", true);
    compressImages(store).then(done);
  });

  test("圧縮処理がスキップされた場合", (done) => {
    const inputPngFile = getLocalFile(dir, name, "image/png");
    store.commit({
      type: "setInputImages",
      images: [inputPngFile],
    });
    store.commit({
      type: "setCompressedImages",
      images: [],
    });

    // スキップする場合の設定
    setSettingInStore(store, "isOnlyJpeg", true);
    setSettingInStore(store, "convertAlltoJpeg", false);
    expect(store.state.files.inputImages[0].type !== "image/jpeg").toBe(true);

    compressImages(store).then(() => {
      expect(store.state.files.compressedImages.length).toBe(0);
      done();
    });
  });

  test("圧縮処理がエラーの場合", (done) => {
    const inputWrongFile = getLocalFile(dir, name, "error");
    store.commit({
      type: "setInputImages",
      images: [inputWrongFile],
    });

    // スキップする場合の設定を解除
    setSettingInStore(store, "isOnlyJpeg", false);

    console.error = jest.fn(); // モック関数
    expect(console.error.mock.calls.length).toBe(0);

    compressImages(store).then(() => {
      expect(console.error.mock.calls.length).toBe(1);
      done();
    });
  });
});
