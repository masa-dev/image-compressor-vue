<template>
  <div id="setting-input">
    <b-form-input
      type="range"
      id="qulity"
      min="0"
      max="1"
      step="0.1"
      value="0.8"
    ></b-form-input>

    <label for="range-2">Example range with step value</label>
    <b-form-input
      id="range-2"
      type="range"
      min="0"
      max="5"
      step="0.5"
    ></b-form-input>
    <div class="mt-2">Value:</div>

    <div class="form-group">
      <label for="quality">品質：</label>
      <input
        oninput="//sideContent.executeCompressImage();"
        type="range"
        id="quality"
        class="custom-range"
        min="0"
        max="1"
        step="0.1"
        value="0.8"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
