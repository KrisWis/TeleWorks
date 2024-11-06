import { LoadedFile } from "@/shared/types/global";
import { ReactNode } from "react";

export interface IndexedDBLoaderProps {
  children: ReactNode;
  setFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  indexedDB: React.MutableRefObject<IDBDatabase | undefined>;
  indexedDBStoreName: string;
  id?: string | number;
}
