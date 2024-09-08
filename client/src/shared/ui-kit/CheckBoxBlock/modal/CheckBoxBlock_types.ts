export interface CheckBoxBlockProps {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isWarn?: boolean;
  className?: string;
}
