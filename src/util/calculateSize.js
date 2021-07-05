function calculateSize(bites) {
  if (isNaN(bites))
    throw new TypeError("引数が不正です。引数は数字のみ入力可能です。");
  if (bites < 0)
    throw new RangeError("引数が不正です。引数は0以上のみ入力可能です。");

  // ** は累乗の計算
  if (bites >= 1024 ** 3) {
    bites = Math.floor((bites / 1024 ** 3) * 10) / 10 + "GB";
  } else if (bites >= 1024 ** 2) {
    bites = Math.floor((bites / 1024 ** 2) * 10) / 10 + "MB";
  } else if (bites >= 1024) {
    bites = Math.floor((bites / 1024) * 10) / 10 + "KB";
  } else {
    bites = bites + "B";
  }

  return bites;
}

export default calculateSize;
