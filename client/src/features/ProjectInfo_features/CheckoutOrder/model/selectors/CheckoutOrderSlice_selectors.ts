import { CheckoutOrderSchema } from "@/shared/types/schemas";
import { ProjectInfoPackNames } from "@/shared/const/project";

export const geteditionsAmounts = (
  state: CheckoutOrderSchema,
  packType: ProjectInfoPackNames
): number => {
  if (state) {
    return state.packs[packType].editionsAmounts;
  } else {
    return 1;
  }
};

export const getExtraServiceAmount = (
  state: CheckoutOrderSchema,
  packType: ProjectInfoPackNames,
  extraServiceTitle: string
): number => {
  if (state) {
    const extraServices = state.packs[packType].extraServices;

    if (!extraServices) return 1;

    if (Object.keys(extraServices).includes(extraServiceTitle)) {
      const extraService =
        state.packs[packType].extraServices[extraServiceTitle];

      return extraService.amount! || 1;
    }
  }

  return 1;
};

export const getFinalPrice = (state: CheckoutOrderSchema): number => {
  if (state) {
    return state.finalPrice;
  } else {
    return 0;
  }
};
