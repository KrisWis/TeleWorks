import { MarkdownTextarea } from "@/shared/ui-kit/MarkdownTextarea";
import styles from "./UserEditAbout.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import { UserEditPageContext } from "@/pages/UserEditPage";
import { UserEditTabsEnum } from "@/widgets/UserEditPage_widgets/UserEditTabs";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseUserEditAboutLocalStorage } from "../model/UseUserEditAboutLocalStorage/UseUserEditAboutLocalStorage";

const UserEditAboutTextareaMinSymbolsAmount: number = 100;
const UserEditAboutTextareaMaxSymbolsAmount: number = 500;

export const UserEditAbout: React.FC = memo((): React.JSX.Element => {
  // Получение из Local Storage текста для textarea
  const UserEditAboutLSItem = UseUserEditAboutLocalStorage(
    UseLocalStorageTypes.GET
  );

  const [TextareaValue, setTextareaValue] = useState<string>(
    UserEditAboutLSItem ? UserEditAboutLSItem : ""
  );

  // Добавление рефа для скроллинга
  const { refs } = useContext(UserEditPageContext);

  // Добавление в Local Storage текста textarea
  const LocalStorageAboutDebounce = UseDebounce(() => {
    UseUserEditAboutLocalStorage(UseLocalStorageTypes.UPDATE, TextareaValue);
  }, 1000);

  useEffect(() => {
    LocalStorageAboutDebounce();
  }, [TextareaValue, LocalStorageAboutDebounce]);

  return (
    <div ref={refs[UserEditTabsEnum.ABOUT]} className={styles.userEditAbout}>
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
