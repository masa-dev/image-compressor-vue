<template>
  <div id="setting-input">
    <div class="form-group">
      <label for="quality">品質：&nbsp;{{ quality }}</label>
      <b-form-input
        type="range"
        id="quality"
        value="0.8"
        min="0"
        max="1"
        @input="updateSettings"
        step="0.1"
        v-model.number="quality"
      ></b-form-input>
    </div>

    <div class="form-group">
      <label for="max-width">最大横幅</label>
      <b-form-input
        type="number"
        id="max-width"
        min="0"
        placeholder="Infinity"
        v-model.number="maxWidth"
        @input="updateSettings"
      ></b-form-input>
    </div>

    <div class="form-group">
      <label for="max-height">最大縦幅</label>
      <b-form-input
        type="number"
        id="max-height"
        min="0"
        placeholder="Infinity"
        v-model.number="maxHeight"
        @input="updateSettings"
      ></b-form-input>
    </div>

    <div class="form-group checkbox">
      <b-form-checkbox
        id="is-only-jpeg"
        name="is-only-jpeg"
        v-model="isOnlyJpeg"
        @input="updateSettings"
        >JPEG形式のみ処理を行う</b-form-checkbox
      >

      <b-form-checkbox
        id="convert-all-to-jpeg"
        name="convert-all-to-jpeg"
        v-model="convertAlltoJpeg"
        @input="updateSettings"
        >すべてJPEG形式に変換<sup>（注意）</sup></b-form-checkbox
      >
    </div>

    <div id="input-parameter-info">
      <p class="attention">
        ※<strong>JPEG形式以外</strong>は品質による圧縮が出来ません
      </p>
      <p class="attention">※JPEG形式に変換すると透過度が保てません</p>
    </div>
  </div>
</template>

<script>
import setSettingInStore from "@/util/setSettingInStore.js";

export default {
  data() {
    return {
      quality: 0.8,
      maxWidth: Infinity,
      maxHeight: Infinity,
      isOnlyJpeg: false,
      convertAlltoJpeg: false,
    };
  },
  methods: {
    updateSettings() {
      let propList = [
        { value: this.quality, name: "quality" },
        { value: this.maxWidth, name: "maxWidth" },
        { value: this.maxHeight, name: "maxHeight" },
        { value: this.isOnlyJpeg, name: "isOnlyJpeg" },
        { value: this.convertAlltoJpeg, name: "convertAlltoJpeg" },
      ];

      for (let prop of propList) {
        setSettingInStore(this.$store, prop.name, prop.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#setting-input {
  .costom-range {
    height: 25px;
    flex: none;
    width: 100% !important;
    display: block;
    margin: 0 auto;
  }

  .custom-control-label sup {
    color: red;
  }

  .custom-checkbox {
    margin: 5px 0;
    user-select: none;
  }

  .checkbox {
    margin-bottom: 10px;
  }

  #input-parameter-info {
    p.attention {
      color: #999;
      font-size: small;
      margin-bottom: 5px;
    }
  }
}
</style>
