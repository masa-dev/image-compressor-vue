import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const inputFile = {
  state: () => ({
    originImages: [],
    compressedImages: [],
  }),
  getters: {
    getFilesLength: (state) => {
      return state.originImages.length;
    },
  },
  mutations: {
    setFiles(state, files = []) {
      state.originImages.splice(0, state.originImages.length);
      console.log(files);
      state.originImages.push(...files.images);
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
    inputFile,
    settings,
    sideContent,
  },
});

// コンポーネントからは、this.store.~でアクセス可能

export default store;
