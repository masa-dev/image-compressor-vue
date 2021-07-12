<template>
  <div id="drag-and-drop">
    <p>ここに画像をドロップ</p>
    <p>または画像を選択</p>
    <p class="input-p">
      <input
        @change="changeFiles"
        type="file"
        id="file-input"
        name="image"
        accept="image/*"
        multiple
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    changeFiles: function (e) {
      let inputFiles = e.target.files || e.dataTransfer.files;

      // FileListにsortメソッドが無いため、配列に直してソートする
      inputFiles = [].slice.call(inputFiles).sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      this.files.splice(0);
      this.files.push(...inputFiles);

      this.setImageToStore();
    },
    setImageToStore: function () {
      this.$store.commit({
        type: "setFiles",
        images: this.files,
      });
      console.log(this.files.length);
    },
  },
};
</script>

<style lang="scss" scoped>
#drag-and-drop {
  min-height: 150px;
  margin: 10px;
  padding: 20px 10px;
  border: #ddd dashed 5px;
  border-radius: 15px;
  background-color: #f4f4f4;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ececec;
  }

  &:active {
    border-color: rgb(202, 202, 202);
    background-color: #e4e4e4;
  }

  &.active {
    border-color: rgb(128, 223, 104);
    background-color: rgb(234, 247, 232);
  }

  p {
    color: #999;
    font-weight: bold;
    font-size: 1.4rem;

    &.drag-drop-buttons {
      margin-bottom: 5px;
    }

    &.input-p {
      margin-top: 20px;
      font-size: 1.2rem;

      > input {
        background-color: transparent !important;
        font-size: 1em;
        margin: auto;
        overflow-x: hidden;
        cursor: pointer !important;
      }
    }
  }
}
</style>
