import { createContext, useState } from "react";

export interface UserEditPortfolioContext {
  setCaseLoadingModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCaseLoadingModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
  CaseLoadedImage: string;
  setCaseLoadedImage: React.Dispatch<React.SetStateAction<string>>;
  setLastDetailsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLastDetailsModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
  setDraftIsSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDraftIsSavedModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectIsPublishedModalIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setProjectIsPublishedModalAppear: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export const UserEditPortfolioContext = createContext<UserEditPortfolioContext>(
  {
    setCaseLoadingModalIsOpen: useState,
    setCaseLoadingModalAppear: useState,
    CaseLoadedImage: "",
    setCaseLoadedImage: useState,
    setLastDetailsModalIsOpen: useState,
    setLastDetailsModalAppear: useState,
    setDraftIsSavedModalIsOpen: useState,
    setDraftIsSavedModalAppear: useState,
    setProjectIsPublishedModalIsOpen: useState,
    setProjectIsPublishedModalAppear: useState,
  }
);
