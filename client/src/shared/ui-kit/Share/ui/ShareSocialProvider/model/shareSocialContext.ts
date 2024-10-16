import { createContext } from "react";
import { ShareSocialType } from "./ShareSocialProvider";

export interface ShareSocialContextPayload {
  ShareSocial?: ShareSocialType;
  isLoaded?: boolean;
}

export const ShareSocialContext = createContext<ShareSocialContextPayload>({});
