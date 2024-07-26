import { RootState } from "@/app/AppStore";
import { ProjectInfoPackNames } from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

export const getPackAmounts = (
  state: RootState,
  packType: ProjectInfoPackNames
): number => {
  return state.checkoutOrderReducer.packs[packType].packAmounts;
};
