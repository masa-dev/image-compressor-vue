import calculateSize from "@/util/calculateSize";

test("与えられたファイルのサイズを各情報単位に変換する", () => {
  expect(() => calculateSize("String")).toThrow(TypeError);
  expect(() => calculateSize(-1)).toThrow(RangeError);

  expect(calculateSize(0)).toBe("0B");
  expect(calculateSize(1)).toBe("1B");
  expect(calculateSize(10_000)).toBe("9.7KB");
  expect(calculateSize(123_456_789)).toBe("117.7MB");
  expect(calculateSize(9_999_999_999)).toBe("9.3GB");
  expect(calculateSize("10000")).toBe("9.7KB");
});
