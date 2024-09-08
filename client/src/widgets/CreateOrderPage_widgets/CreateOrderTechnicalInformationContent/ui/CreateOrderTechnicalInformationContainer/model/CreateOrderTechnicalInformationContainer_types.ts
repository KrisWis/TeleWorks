export interface LoadedFile {
  FileData: string;
  FileName: string;
  FileSize: number;
  FileType: string;
}

export interface CreateOrderTechnicalInformationLoadedFileProps {
  loadedFile: LoadedFile;
  FormInputFiles: LoadedFile[];
  setFormInputFiles: React.Dispatch<React.SetStateAction<LoadedFile[]>>;
  setFormInputFileProgress: React.Dispatch<React.SetStateAction<number>>;
}
