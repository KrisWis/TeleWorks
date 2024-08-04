import { SavedBankCardType } from "@/entities/Global_entities/UserSavedBankCards/model/UserSavedBankCards_types";

export interface CreateOrderCostPaymentProps {
  FinalPrice: number;
  SelectedSaveCard: SavedBankCardType | null;
}
