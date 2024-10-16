import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ShareSocialContext } from "./shareSocialContext";

const getAsyncShareSocialModule = async () => {
  return import("react-share-social").then(({ ShareSocial }) => ({
    ShareSocial,
  }));
};

export type ShareSocialType = Awaited<
  ReturnType<typeof getAsyncShareSocialModule>
>["ShareSocial"];

export const ShareSocialProvider = ({ children }: { children: ReactNode }) => {
  const ShareSocialRef = useRef<ShareSocialType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncShareSocialModule().then((ShareSocial) => {
      ShareSocialRef.current = ShareSocial.ShareSocial;
      setIsLoaded(true);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      ShareSocial: ShareSocialRef.current,
      isLoaded,
    }),
    [isLoaded]
  );

  return (
    <ShareSocialContext.Provider value={contextValue}>
      {children}
    </ShareSocialContext.Provider>
  );
};
