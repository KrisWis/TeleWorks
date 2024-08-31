import { RootState } from "@/app/store/AppStore";
import { ProjectInfoPackNames } from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

export const geteditionsAmounts = (
  state: RootState,
  packType: ProjectInfoPackNames
): number => {
  if (state.checkoutOrderReducer) {
    return state.checkoutOrderReducer.packs[packType].editionsAmounts;
  } else {
    return 1;
  }
};

export const getExtraServiceAmount = (
  state: RootState,
  packType: ProjectInfoPackNames,
  extraServiceTitle: string
): number => {
  if (state.checkoutOrderReducer) {
    const extraServices =
      state.checkoutOrderReducer.packs[packType].extraServices;

    if (!extraServices) return 1;

    if (Object.keys(extraServices).includes(extraServiceTitle)) {
      const extraService =
        state.checkoutOrderReducer.packs[packType].extraServices[
          extraServiceTitle
        ];

      return extraService.amount! || 1;
    }
  }

  return 1;
};

export const getFinalPrice = (state: RootState): number => {
  if (state.checkoutOrderReducer) {
    return state.checkoutOrderReducer.finalPrice;
  } else {
    return 0;
  }
};
