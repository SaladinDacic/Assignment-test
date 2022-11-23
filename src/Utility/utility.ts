export function throttle(callback: any, prop: any) {
  var throttle;
  clearTimeout(throttle);
  throttle = setTimeout(() => {
    callback(prop);
  }, 100);
}
