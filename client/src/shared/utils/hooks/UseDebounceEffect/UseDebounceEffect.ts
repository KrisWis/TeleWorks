/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList, useEffect } from "react";

let timer: NodeJS.Timeout;

/**
 * Хук, который использует useEffect, который внутри себя UseDebounceEffect
 * @param callback
 * @param delay - задержка в мс
 * @param deps - зависимости для useEffect
 */

export function useDebounceEffect(
  callback: (...args: any[]) => void,
  delay: number,
  deps?: DependencyList
) {
  useEffect(() => {
    return (...args: any[]) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
