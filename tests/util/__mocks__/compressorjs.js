export default class Compressor {
  constructor(file, options) {
    this.file = file;
    this.options = { ...options };
    this.init();
  }

  init() {
    const { file, options } = this;

    if (file.type == "error") {
      options.error.call(Error("error"));
    }
    if (file) {
      options.success.call(this, file);
    }
  }
}
