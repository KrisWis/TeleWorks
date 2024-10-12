export interface LoadedFile {
  FileData: string;
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
}
