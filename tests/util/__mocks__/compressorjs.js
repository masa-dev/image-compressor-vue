export default class Compressor {
  constructor(file, options) {
    this.file = file;
    this.options = { ...options };
    this.init();
  }

  init() {
    const { file, options } = this;

    if (file.type == "error") {
      const error = new Error("error");
      options.error.call(this, error);
    }
    if (file) {
      options.success.call(this, file);
    }
  }
}
