import { useEffect, useRef, useState } from "react";

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
