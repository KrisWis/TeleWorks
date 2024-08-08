import { MarkdownTextarea } from "@/shared/ui-kit/MarkdownTextarea";
import styles from "./UserEditAbout.module.scss";
import { memo, useState } from "react";

const UserEditAboutTextareaMinSymbolsAmount: number = 100;
const UserEditAboutTextareaMaxSymbolsAmount: number = 500;

export const UserEditAbout: React.FC = memo((): React.JSX.Element => {
  const [TextareaValue, setTextareaValue] = useState<string>("");

  return (
    <div className={styles.userEditAbout}>
      <h4 className="UserEditPage__caption">Обо мне:</h4>

      <MarkdownTextarea
        minSymbolsAmount={UserEditAboutTextareaMinSymbolsAmount}
        maxSymbolsAmount={UserEditAboutTextareaMaxSymbolsAmount}
        TextareaValue={TextareaValue}
        setTextareaValue={setTextareaValue}
      />
    </div>
  );
});
