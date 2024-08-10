export interface СhangeablePortfolioCaseInterface {
  caseImgURL?: string;
  caseName?: string;
  index: number;
}

export interface СhangeablePortfolioCaseProps {
  Case: СhangeablePortfolioCaseInterface;
  setExistedCases: React.Dispatch<
    React.SetStateAction<СhangeablePortfolioCaseInterface[]>
  >;
  ExistedCases: СhangeablePortfolioCaseInterface[];
}
