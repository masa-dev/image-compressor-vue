/* 複数のコンポーネントで画像圧縮を行うため、util（汎用関数）に置く。 */

import Compressor from "compressorjs";

function compressImages(store, isInputFile = false) {
  const settings = store.state.settings;
  const files = store.state.files.inputImages;
  let compressedImages = [];
  const mineType = settings.convertAlltoJpeg ? "image/jpeg" : "auto";

  return new Promise((resolve) => {
    /*
      Settings property =>
        quality: Number
        maxWidth: Number
        maxHeight: Number
        isOnlyJpeg: boolean
        convertAlltoJpeg: boolean
        processWhenFileInput: boolean
        hideFileList: boolean
        callHistoryOnStartup: boolean
    */

    // compressedImagesの初期化
    store.commit({
      type: "setCompressedImages",
      images: [],
    });

    // 表示用の画像プロパティの初期化
    store.commit({ type: "clearImageProps" });

    if (files.length === 0) {
      // ファイル入力時にはアラートを出さない
      if (isInputFile === false) {
        alert("ファイルを選択してください。");
      }

      resolve();
    }

    store.commit("setFileData", files);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Jpeg 以外のファイルの処理 ( Jpeg のみを処理する設定が有効時 )
      if (settings.isOnlyJpeg && !(file.type === "image/jpeg")) {
        // すべて Jpeg 形式に変換する設定が有効ではない場合に処理をスキップする
        if (!settings.convertAlltoJpeg) {
          // TODO: 拒否した場合の処理
          if (i === files.length) resolve();

          continue;
        }
      }

      // 表示用の画像プロパティの追加
      store.commit({
        type: "pushImageProps",
        name: "input",
        prop: {
          name: file.name,
          type: file.type,
        },
      });

      new Compressor(file, {
        maxWidth: settings.maxWidth,
        maxHeight: settings.maxHeight,
        quality: settings.quality,
        mineType: mineType,
        convertSize: Infinity,
        success(result) {
          compressedImages.push(result);

          if (i === files.length) resolve();

          // 表示用の画像プロパティの追加
          store.commit({
            type: "pushImageProps",
            name: "compressed",
            prop: {
              name: result.name,
              type: result.type,
            },
          });

          console.log(result);
        },
        error(err) {
          console.error(new Error(err.message));

          if (i === files.length) resolve();
        },
      });
    }
  }).then(() => {
    store.commit({
      type: "setCompressedImages",
      images: compressedImages,
    });
  });
}

export default compressImages;
