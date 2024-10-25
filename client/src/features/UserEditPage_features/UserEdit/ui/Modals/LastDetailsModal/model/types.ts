export interface LastDetailsModalProps {
  CaseLoadedImage: string;
  setLastDetailsModalAppear: (value: React.SetStateAction<boolean>) => void;
  setLastDetailsModalIsOpen: (value: React.SetStateAction<boolean>) => void;
  setCaseLoadingModalIsOpen: (value: React.SetStateAction<boolean>) => void;
}
