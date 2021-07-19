<template>
  <div id="adjust-parameter">
    <b-button-group variant="secondary" size="sm" style="width: 100%">
      <b-button>pre</b-button>
      <b-button disabled>/</b-button>
      <b-button>next</b-button>
    </b-button-group>
    <div class="form-group">
      <label for="display-scale" class="display-scale-label"
        >表示画像の拡大（テスト用）：{{ getDisplayScale }}</label
      >
      <b-form-input
        type="range"
        id="display-scale"
        v-model.number="displayScale"
        @input="changeDisplayScale"
        value="1.0"
        min="1"
        max="10"
        step="0.2"
      ></b-form-input>
    </div>
    <div id="test-execution-info">
      <p class="test-parameter-text">・品質：</p>
      <p class="test-parameter-text">・最大横幅：</p>
      <p class="test-parameter-text">・最大縦幅：</p>

      <p class="attention">
        ※上記の画像は，<strong>JPEG形式に変換</strong>されたものです
      </p>
      <p class="attention">※JPEG形式に変換すると透過度が保てません</p>
    </div>
    <div id="test-compression-result">
      <table>
        <tr>
          <th>元のサイズ</th>
          <th>圧縮後のサイズ</th>
          <th>圧縮割合</th>
        </tr>
        <tr>
          <td>param</td>
          <td>param</td>
          <td>param</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayScale: 1,
    };
  },
  methods: {
    changeDisplayScale() {
      const imgElements = document.getElementsByClassName("test-image");
      const scale = this.displayScale;
      for (let element of imgElements) {
        element.style.transform = `scale(${scale}, ${scale})`;
      }
    },
  },
  computed: {
    getDisplayScale() {
      return this.displayScale.toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
#adjust-parameter {
  margin: 0 50px;

  .btn-group {
    margin-bottom: 15px;
  }

  .form-group {
    .display-scale-label {
      font-size: 14px;
    }
  }

  p.attention {
    color: #999;
    font-size: small;
    margin-bottom: 5px;
  }

  #test-compression-result {
    table {
      width: 100%;
      margin-top: 20px;
      border: 1px solid gray;
      border-collapse: collapse;

      th {
        font-size: 15px;
        width: auto;
        text-align: center;
        border: 1px solid gray;
      }

      td {
        font-size: 14px;
        width: auto;
        text-align: center;
        border: 1px solid gray;

        &.green {
          color: rgb(56, 153, 56);
        }
        &.red {
          color: rgb(224, 12, 12);
        }
      }
    }
  }
}
</style>
