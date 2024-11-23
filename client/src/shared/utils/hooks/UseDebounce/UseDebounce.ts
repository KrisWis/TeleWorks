/* eslint-disable @typescript-eslint/no-explicit-any */
let timer: NodeJS.Timeout;

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */

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
