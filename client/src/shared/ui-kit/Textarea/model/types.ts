export interface TextareaProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  isWarn?: boolean;
  refTextarea?: React.LegacyRef<HTMLTextAreaElement> | undefined;
  "data-testid"?: string;
  id?: string;
}
