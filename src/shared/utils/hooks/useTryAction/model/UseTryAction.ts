import { useEffect, useState } from "react";

export const UseTryAction = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [TryAction, setTryAction] = useState<boolean>(false);

  useEffect(() => {
    if (TryAction) {
      setTimeout(() => {
        setTryAction(false);
      }, 3000);
    }
  }, [TryAction]);

  return [TryAction, setTryAction];
};
