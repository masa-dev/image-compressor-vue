<template>
  <div id="execution-buttons">
    <b-button block variant="info" @click="recompressImages"
      >再圧縮処理</b-button
    >
    <b-button block variant="primary" @click="downloadImages"
      >画像ファイルをダウンロード</b-button
    >
  </div>
</template>

<script>
import JSZip from "jszip";
import { saveAs } from "file-saver";
import compressImages from "@/util/compressImages.js";

export default {
  methods: {
    recompressImages() {
      console.log(this.$store.state.settings);
      console.log(this.$store.state.inputFile);
      compressImages(this.$store);
    },
    downloadImages() {
      let files = this.$store.state.files.compressedImages;

      if (files.length === 0) {
        alert("ファイルを選択してください");
        return;
      }

      // TODO: 保存開始時の処理(show Spinner)

      let zip = new JSZip();
      for (let file of files) {
        zip.file(file.name, file, { base64: true });
      }

      zip.generateAsync({ type: "blob" }).then((content) => {
        // FileSaver.js
        saveAs(content, "compressed.zip");

        // TODO: 保存終了時の処理(hide Spinner)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#execution-buttons {
  button.btn {
    margin-bottom: 15px;
  }
}
</style>
