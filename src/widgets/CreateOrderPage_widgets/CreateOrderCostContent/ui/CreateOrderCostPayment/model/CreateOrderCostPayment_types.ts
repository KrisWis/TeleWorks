import { SavedBankCardType } from "@/entities/Global_entities/UserSavedBankCards/model/UserSavedBankCards_types";

export interface CreateOrderCostPaymentProps {
  price: number;
  SelectedSaveCard: SavedBankCardType | null;
}
