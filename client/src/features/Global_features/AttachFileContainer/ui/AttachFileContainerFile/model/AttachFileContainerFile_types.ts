import { LoadedFile } from "@/shared/types/global";

export type AttachFileContainerFileViews = "big" | "medium";

export interface AttachFileContainerFileProps {
  loadedFile: LoadedFile;
  InputFiles: LoadedFile[];
  setInputFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  setInputFileProgress: React.Dispatch<React.SetStateAction<number>>;
  fileView?: AttachFileContainerFileViews;
  accept?: string;
  indexedDBName?: string;
  indexedDBStore?: string;
  indexedDB?: IDBDatabase;
}
