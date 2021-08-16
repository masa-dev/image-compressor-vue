import Vue from "vue";
import Vuex from "vuex";

import calculateSize from "@/util/calculateSize";

Vue.use(Vuex);

const files = {
  state: () => ({
    inputImages: [],
    compressedImages: [],
    imageProps: {
      input: [],
      compressed: [],
    },
  }),
  getters: {
    getInputImagesLength(state) {
      return state.inputImages.length;
    },
    getCompressedImagesLength(state) {
      return state.compressedImages.length;
    },
    computeTotalInputSize(state) {
      let total = 0;
      for (let image of state.inputImages) total += image.size;

      return total;
    },
    computeTotalCompressedSize(state) {
      let total = 0;
      for (let image of state.compressedImages) total += image.size;

      return total;
    },
  },
  mutations: {
    setInputImages(state, files) {
      state.inputImages.splice(0);
      state.inputImages.push(...files.images);
    },
    setCompressedImages(state, files) {
      state.compressedImages.splice(0);
      state.compressedImages.push(...files.images);
    },
    pushImageProps(state, data) {
      if (data.name === "input") {
        state.imageProps.input.push(data.prop);
      } else if (data.name === "compressed") {
        state.imageProps.compressed.push(data.prop);
      } else {
        throw Error(
          '引数typeが入力されていません。"input"または"compressed"のどちらかを指定してください。'
        );
      }
    },
    clearImageProps(state) {
      state.imageProps.input.splice(0);
      state.imageProps.compressed.splice(0);
    },
  },
  actions: {},
};

const filesInfo = {
  state: () => ({
    fileList: [],
  }),
  getters: {},
  mutations: {
    addFileData(state, inputFiles) {
      // 必要な情報を持ったコピー配列を作成
      let files = [];
      for (let file of inputFiles) {
        files.push({
          name: file.name,
          size: file.size,
          nameForSort: file.name,
        });
      }

      // 名前を昇順でソート
      files.sort((a, b) => (a.nameForSort > b.nameForSort ? 1 : -1));

      // データの追加
      for (let i = 0; i < files.length; i++) {
        let size = calculateSize(files[i].size);
        state.fileList.push({
          id: i,
          name: files[i].name,
          size: size,
          compressedSize: "-",
          status: "processing",
        });
      }
    },
  },
  actions: {},
};

const settings = {
  state: () => ({
    quality: 0.8,
    maxWidth: Infinity,
    maxHeight: Infinity,
    isOnlyJpeg: true,
    convertAlltoJpeg: false,
    processWhenFileInput: true,
    hideFileList: false,
    callHistoryOnStartup: true,
  }),
  getters: {},
  mutations: {
    setSettings(state, setting) {
      const varName = setting.varName;
      const value = setting.value;

      if (typeof state[varName] === "undefined")
        throw new Error("変数varNameの値を持つプロパティが存在しません。");

      state[varName] = value;
    },
  },
  actions: {},
};

const sideContent = {
  state: () => ({
    imageSrc: "",
    page: 0,
  }),
  getters: {},
  mutations: {},
  actions: {},
};

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    files,
    filesInfo,
    settings,
    sideContent,
  },
});

// コンポーネントからは、this.store.~でアクセス可能

export default store;
