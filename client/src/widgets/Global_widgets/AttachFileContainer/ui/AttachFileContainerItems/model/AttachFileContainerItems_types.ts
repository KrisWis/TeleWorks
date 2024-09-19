import { LoadedFile } from "../../../model/AttachFileContainer_types";
import { AttachFileContainerFileViews } from "../../AttachFileContainerFile";

export interface AttachFileContainerItemsProps {
  files: LoadedFile[];
  setInputFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  InputFileProgress: number;
  setInputFileProgress: React.Dispatch<React.SetStateAction<number>>;
  fileView?: AttachFileContainerFileViews;
}
