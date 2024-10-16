import { useContext } from "react";
import {
  ShareSocialContext,
  ShareSocialContextPayload,
} from "./shareSocialContext";

export const useShareSocialLib = () => {
  return useContext(ShareSocialContext) as Required<ShareSocialContextPayload>;
};
