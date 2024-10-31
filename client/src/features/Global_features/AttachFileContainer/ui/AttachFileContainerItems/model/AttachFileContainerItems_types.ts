import { LoadedFile } from "@/shared/types/global";
import { AttachFileContainerFileViews } from "../../AttachFileContainerFile";

export interface AttachFileContainerItemsProps {
  files: LoadedFile[];
  setInputFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  InputFileProgress: number;
  setInputFileProgress: React.Dispatch<React.SetStateAction<number>>;
  fileView?: AttachFileContainerFileViews;
  accept?: string;
  indexedDBName?: string;
  indexedDBStore?: string;
  indexedDB?: IDBDatabase;
}
