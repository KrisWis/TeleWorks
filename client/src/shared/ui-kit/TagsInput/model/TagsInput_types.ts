export interface TagInputProps {
  SelectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  onChange?: () => void;
}
