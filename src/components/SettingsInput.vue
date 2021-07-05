<template>
  <div id="setting-input">
    <div class="form-group">
      <label for="quality">品質：&nbsp;{{ quality }}</label>
      <b-form-input
        type="range"
        id="quality"
        v-model="quality"
        value="0.8"
        min="0"
        max="1"
        step="0.1"
        name=""
      ></b-form-input>
    </div>

    <div class="form-group">
      <label for="max-width">最大横幅</label>
      <b-form-input
        type="number"
        id="max-width"
        min="0"
        placeholder="Infinity"
      ></b-form-input>
    </div>

    <div class="form-group">
      <label for="max-height">最大縦幅</label>
      <b-form-input
        type="number"
        id="max-height"
        min="0"
        placeholder="Infinity"
      ></b-form-input>
    </div>

    <div class="form-group">
      <b-form-checkbox
        id="is-only-jpeg"
        name="is-only-jpeg"
        value="true"
        unchecked-value="false"
        v-model="isOnlyJpeg"
        >JPEG形式のみ処理を行う</b-form-checkbox
      >

      <b-form-checkbox
        id="convert-all-to-jpeg"
        name="convert-all-to-jpeg"
        value="true"
        unchecked-value="false"
        v-model="convertAlltoJpeg"
        >すべてJPEG形式に変換<sup>（注意）</sup></b-form-checkbox
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quality: 0.8,
      value: Infinity,
      isOnlyJpeg: false,
      convertAlltoJpeg: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#setting-input {
  padding: 0 5px;

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
}
</style>
