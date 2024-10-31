import {
  ProjectExtraService,
  ProjectInfoPack,
} from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface CheckoutOrderProps {
  pack: ProjectInfoPack;
  ExtraServices: ProjectExtraService[];
  setExtraServices: React.Dispatch<React.SetStateAction<ProjectExtraService[]>>;
}
