import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imageFiles: [],
    num: 10,
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
  },
  actions: {}, //非同期処理
  modules: {},
});

// コンポーネントからは、this.store.~でアクセス可能

export default store;
