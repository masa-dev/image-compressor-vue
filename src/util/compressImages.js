/* 複数のコンポーネントで画像圧縮を行うため、util（汎用関数）に置く。 */

import Compressor from "compressorjs";

function compressImages(store, isInputFile = false) {
  const settings = store.state.settings;
  const files = store.state.files.inputImages;
  let compressedImages = [];
  const mineType = settings.convertAlltoJpeg ? "image/jpeg" : "auto";

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

  if (files.length === 0) {
    // ファイル入力時にはアラートを出さない
    if (isInputFile === false) {
      alert("ファイルを選択してください。");
    }

    return;
  }

  new Promise((resolve) => {
    let completedCount = 0;

    for (const file of files) {
      // Jpeg 以外のファイルの処理 ( Jpeg のみを処理する設定が有効時 )
      if (settings.isOnlyJpeg && !(file.type === "image/jpeg")) {
        // すべて Jpeg 形式に変換する設定が有効ではない場合に処理をスキップする
        if (!settings.convertAlltoJpeg) {
          // TODO: 拒否した場合の処理
          break;
        }
      }

      new Compressor(file, {
        quality: settings.quality,
        mineType: mineType,
        success(result) {
          completedCount++;
          compressedImages.push(result);

          if (completedCount === files.length) resolve();

          console.log(result);
        },
        error(err) {
          throw new Error(err.message);
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
