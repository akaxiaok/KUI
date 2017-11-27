import _ from 'lodash';

export function square(x) {  // 未被引用，被裁剪
  return x * x;
}
// console.log('flag',_.isArray([]));

export function cube(x) {
  console.log('1x1   cube'); // 不会运行，被裁剪

  return x * x * x;
  console.log('this is cube'); // 不会运行，被裁剪
}

if (module.hot) {
  module.hot.accept();
}