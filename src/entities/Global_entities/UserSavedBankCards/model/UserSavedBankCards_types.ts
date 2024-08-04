export enum BankCardsTypes {
  MASTERCARD = "MasterCard",
  VISA = "VISA",
}

export interface VISABankCard {
  cardNumber: `${number} ${number} ${number} ${number}`;
  expirationDate: `${number}/${number}`;
  CVC: `${number}`;
}

export interface MasterCardBankCard {
  cardNumber: `${number} ${number} ${number} ${number}`;
  expirationDate: `${number}/${number}`;
  CVC: `${number}`;
}

export type SavedBankCardType = VISABankCard | MasterCardBankCard;

export type UserSavedBankCard = {
  [key in BankCardsTypes]?: SavedBankCardType;
};

export interface UserSavedBankCardsProps {
  setSelectedCard: React.Dispatch<
    React.SetStateAction<SavedBankCardType | null>
  >;
}
