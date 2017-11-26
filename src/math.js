export function square(x) {  // 未被引用，被裁剪
  return x * x;
}

export function cube(x) {
  return x * x * x;
  console.log('this is cube'); // 不会运行，被裁剪
}