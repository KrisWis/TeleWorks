import { useEffect, useRef, useState } from "react";

/**
 * Хук, который работает как useState, но через определённое время после изменения данных на true, они автоматически меняются на false
 */

export const UseTryAction = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [TryAction, setTryAction] = useState<boolean>(false);

  const TryActionTimeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (TryAction) {
      TryActionTimeOutRef.current = setTimeout(() => {
        setTryAction(false);
      }, 3000);
    }
  }, [TryAction]);

  useEffect(() => {
    return () => {
      clearTimeout(TryActionTimeOutRef.current);
    };
  }, []);

  return [TryAction, setTryAction];
};
