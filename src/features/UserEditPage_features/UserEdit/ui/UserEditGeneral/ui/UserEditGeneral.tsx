import styles from "./UserEditGeneral.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  LoadImageBlock,
  LoadImageBlockSizes,
} from "@/shared/ui-kit/LoadImageBlock";
import { Input } from "@/shared/ui-kit/Input";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import { ProfessionSelect__selectedOptions } from "../model/UserEditGeneral_data";
import RedCrossSVG from "@/shared/assets/icons/UserEditPage/UserEdit/RedCrossSVG.svg?react";

const ProfessionSelectDropdownIndicator = (): JSX.Element => {
  return (
    <SelectDropdownIndicatorDarkBlueSVG className={selectStyles.Select__svg} />
  );
};

const ProfessionSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--second-family)",
  fontWeight: 400,
  fontSize: "14px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "#b2b2b2",
};

export const UserEditGeneral: React.FC = memo((): React.JSX.Element => {
  // Ввод данных в инпуты
  const [NameInputValue, setNameInputValue] = useState<string>("");

  const [SurnameInputValue, setSurnameInputValue] = useState<string>("");

  // Ввод и отображение тегов
  const [TagsInputValue, setTagsInputValue] = useState<string>("");
  const TagInputRef = useRef<HTMLInputElement>(null);
  const [SelectedTags, setSelectedTags] = useState<string[]>([]);

  const TagInputkeyboardEvent = useCallback(
    (event: KeyboardEvent): void => {
      event.preventDefault();

      if (
        event.keyCode === 13 &&
        TagsInputValue &&
        document.activeElement == TagInputRef.current
      ) {
        if (!SelectedTags.includes(TagsInputValue)) {
          setSelectedTags([...SelectedTags, TagsInputValue]);
          setTagsInputValue("");
          TagInputRef.current!.focus();
        }
      }
    },
    [SelectedTags, TagsInputValue]
  );

  useEffect(() => {
    if (document.activeElement == TagInputRef.current && TagsInputValue) {
      document.addEventListener("keyup", TagInputkeyboardEvent);
    } else {
      document.removeEventListener("keyup", TagInputkeyboardEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.activeElement, TagsInputValue]);

  useEffect(() => {
    return () => {
      document.removeEventListener("keyup", TagInputkeyboardEvent);
    };
  }, [TagInputkeyboardEvent]);

  // Удаление тега
  const DeleteTag = useCallback(
    (tag: string): void => {
      setSelectedTags(SelectedTags.filter((item) => item != tag));

      TagInputRef.current!.focus();
    },
    [SelectedTags]
  );

  return (
    <div className={styles.userEditGeneral}>
      <h4 className="UserEditPage__caption">Основная информация:</h4>

      <LoadImageBlock
        size={LoadImageBlockSizes.BIG}
        title="Загрузить шапку профиля"
      />

      <div className={styles.userEditGeneral__info}>
        <LoadImageBlock
          size={LoadImageBlockSizes.SMALL}
          title="Загрузите аватарку"
        />

        <div className={styles.userEditGeneral__inputs}>
          <div className={styles.userEditGeneral__inputs__header}>
            <div className={styles.userEditGeneral__inputWrapper}>
              <span className={styles.userEditGeneral__inputWrapper__title}>
                Имя
              </span>

              <Input
                value={NameInputValue}
                onChange={(e) => setNameInputValue(e.target.value)}
                type="text"
                placeholder="Иван"
                className={styles.userEditGeneral__inputWrapper__input}
              />
            </div>

            <div className={styles.userEditGeneral__inputWrapper}>
              <span className={styles.userEditGeneral__inputWrapper__title}>
                Фамилия
              </span>

              <Input
                value={SurnameInputValue}
                onChange={(e) => setSurnameInputValue(e.target.value)}
                type="text"
                placeholder="Иванов"
                className={styles.userEditGeneral__inputWrapper__input}
              />
            </div>
          </div>

          <div className={styles.userEditGeneral__inputWrapper}>
            <span className={styles.userEditGeneral__inputWrapper__title}>
              Профессия
            </span>

            <Select
              className={styles.userEditGeneral__select}
              selectedOptions={ProfessionSelect__selectedOptions}
              CustomDropdownIndicator={ProfessionSelectDropdownIndicator}
              TextStyles={ProfessionSelectTextStyles}
              valueContainerPadding={valueContainerPaddingEnum.SMALL}
            />
          </div>

          <div className={styles.userEditGeneral__inputWrapper}>
            <span className={styles.userEditGeneral__inputWrapper__title}>
              Навыки
            </span>

            <div className={styles.userEditGeneral__tagsInputWrapper}>
              {SelectedTags.map((tag) => (
                <div key={tag} className={styles.userEditGeneral__tag}>
                  <span className={styles.userEditGeneral__tag__text}>
                    {tag}
                  </span>
                  <div
                    onClick={() => DeleteTag(tag)}
                    className={styles.userEditGeneral__tag__delete}
                  >
                    <RedCrossSVG />
                  </div>
                </div>
              ))}

              <input
                className={styles.userEditGeneral__tagsInput}
                type="text"
                value={TagsInputValue}
                onChange={(e) => setTagsInputValue(e.target.value)}
                ref={TagInputRef}
              />
            </div>

            <span className={`UserEditPage__desc`}>
              Начните вводить название программ в которых вы работаете.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
