export interface TagInputProps {
  SelectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  onChange?: () => void;
  inputClassname?: string;
  placeholder?: string;
  isWarn?: boolean;
}
