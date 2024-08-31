/* eslint-disable @typescript-eslint/no-explicit-any */
let timer: NodeJS.Timeout;

export function UseDebounce(callback: (...args: any[]) => void, delay: number) {
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
