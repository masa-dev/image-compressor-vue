import { fs } from "mz";

function getArrayBuffer(dir) {
  const path = `${__dirname}/${dir}`;
  const buffer = fs.readFileSync(path);
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  );
}

function getLocalFile(dir, name, type) {
  return new File([getArrayBuffer(dir)], name, { type: type });
}

export default getLocalFile;
