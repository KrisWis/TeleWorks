/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList, useEffect } from "react";

let timer: NodeJS.Timeout;

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
