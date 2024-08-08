import { isNumber } from "@/shared/utils/IsNumber/IsNumber";

export const CardNumberIsValidCheck = (CardNumber: string): boolean => {
  if (!isNumber(CardNumber) || String(CardNumber).length != 16) {
    return false;
  }

  return true;
};
