<template>
  <div id="compare-images">
    <div id="origin-test-image-wrapper" class="data-wrapper">
      <h3 class="compare-image-label">元画像</h3>
      <div class="image-wrapper">
        <img
          id="origin-test-image"
          class="test-image"
          :src="imgSrc.original"
          alt="圧縮前のイメージ画像"
        />
      </div>
    </div>
    <div id="compressed-test-image-wrapper" class="data-wrapper">
      <h3 class="compare-image-label">圧縮後画像</h3>
      <div class="image-wrapper">
        <img
          id="compressed-test-image"
          class="test-image"
          :src="imgSrc.compressed"
          alt="圧縮後のイメージ画像"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: {
        original: require("../assets/img/default_image.jpg"),
        compressed: require("../assets/img/default_image.jpg"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#compare-images {
  margin-bottom: 15px;
  overflow: hidden;

  .data-wrapper {
    width: 190px;
    height: 250px;

    &#origin-test-image-wrapper {
      float: left;
    }

    &#compressed-test-image-wrapper {
      float: right;
    }

    .compare-image-label {
      font-size: 20px;
      text-align: center;
      font-family: "游ゴシック", "YuGothic", sans-serif;
      font-weight: bold;
      margin: 5px 0;
    }

    .image-wrapper {
      width: 190px;
      height: 190px;
      overflow: hidden;

      > img {
        object-fit: contain;
        width: 190px;
        height: 190px;
        transform: scale(1, 1);
        overflow: hidden;
      }
    }
  }
}
</style>
