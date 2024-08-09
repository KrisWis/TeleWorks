export interface СhangeablePortfolioCaseInterface {
  caseImgURL?: string;
  caseName?: string;
}

export interface СhangeablePortfolioCaseProps {
  Case: СhangeablePortfolioCaseInterface;
  setExistedCases: React.Dispatch<
    React.SetStateAction<СhangeablePortfolioCaseInterface[]>
  >;
}
