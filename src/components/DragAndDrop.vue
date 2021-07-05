<template>
  <div id="drag-and-drop">
    <p>ここに画像をドロップ</p>
    <p>または画像を選択</p>
    <p class="input-p">
      <input
        type="file"
        id="file-input"
        name="image"
        accept="image/*"
        multiple
      />
    </p>
  </div>
</template>

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

      input {
        font-size: 1em;
        margin: auto;
        overflow-x: hidden;
        cursor: pointer !important;
      }
    }
  }
}
</style>
