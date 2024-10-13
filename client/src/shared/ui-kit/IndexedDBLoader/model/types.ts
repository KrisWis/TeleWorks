import { LoadedFile } from "@/widgets/Global_widgets/AttachFileContainer";
import { ReactNode } from "react";

export interface IndexedDBLoaderProps {
  children: ReactNode;
  setFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  indexedDB: React.MutableRefObject<IDBDatabase | undefined>;
  indexedDBStoreName: string;
}
