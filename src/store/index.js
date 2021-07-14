import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imageFiles: [],
    processing: false,
    settings: {
      quality: 0.8,
      maxWidth: Infinity,
      maxHeight: Infinity,
      isOnlyJpeg: true,
      convertAlltoJpeg: false,
      processWhenFileInput: true,
      hideFileList: false,
      callHistoryOnStartup: true,
    },
    test: {
      imageSrc: "",
      page: 0,
    },
  },
  getters: {
    getFilesLength: (state) => {
      return state.imageFiles.length;
    },
  },
  mutations: {
    //同期処理
    setFiles(state, files = []) {
      state.imageFiles.splice(0, state.imageFiles.length);
      console.log(files);
      state.imageFiles.push(...files.images);
    },
    setSettings(state, setting) {
      const varName = setting.varName;
      const value = setting.value;

      if (typeof state.settings[varName] === "undefined")
        throw new Error("変数varNameの値を持つプロパティが存在しません。");

      state.settings[varName] = value;
    },
  },
  actions: {}, //非同期処理
  modules: {},
});

// コンポーネントからは、this.store.~でアクセス可能

export default store;
