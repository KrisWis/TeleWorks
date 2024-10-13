export interface LoadedFile {
  FileData: string | Blob;
  FileName: string;
  FileSize: number;
  FileType: string;
}

export interface AttachFileContainerProps {
  inputRef: React.RefObject<HTMLInputElement>;
  InputFiles: LoadedFile[];
  setInputFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  setInputFileProgress: React.Dispatch<React.SetStateAction<number>>;
  accept?: string;
  "data-testid"?: string;
  zIndex?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
