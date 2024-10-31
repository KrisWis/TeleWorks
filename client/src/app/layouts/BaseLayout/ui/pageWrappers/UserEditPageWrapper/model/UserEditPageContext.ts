import { UserEditTabsEnum } from "@/shared/const/user";
import { createContext, useState } from "react";

export type UserEditPageContextRefs = {
  [key in UserEditTabsEnum]: React.RefObject<HTMLDivElement> | null;
};

export interface UserEditPageContext {
  ActiveUserEditTab: UserEditTabsEnum;
  setActiveUserEditTab: React.Dispatch<React.SetStateAction<UserEditTabsEnum>>;
  refs: UserEditPageContextRefs;
}

export const UserEditPageContext = createContext<UserEditPageContext>({
  ActiveUserEditTab: UserEditTabsEnum.GENERAL,
  setActiveUserEditTab: useState,
  refs: {
    [UserEditTabsEnum.GENERAL]: null,
    [UserEditTabsEnum.ABOUT]: null,
    [UserEditTabsEnum.PORTFOLIO]: null,
  },
});
