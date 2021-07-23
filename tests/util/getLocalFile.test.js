import getLocalFile from "@/util/getLocalFile";

// 使用する画像の情報
const dir = "../../src/assets/img/default_image.jpg";
const name = "default_image.jpg";
const type = "image/jpeg";

test("getLocalFileのテスト", () => {
  const imageFile = getLocalFile(dir, name, type);

  expect(typeof imageFile.size).toBe("number");
  expect(imageFile.size > 0).toBeTruthy();
  expect(typeof imageFile.lastModified).toBe("number");
  expect(imageFile.name).toBe(name);
  expect(imageFile.type).toBe(type);
});
