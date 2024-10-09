import { TagInputProps } from "../model/TagsInput_types";
import styles from "./TagsInput.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import RedCrossSVG from "@/shared/assets/icons/UserEditPage/UserEdit/RedCrossSVG.svg?react";

export const TagsInput: React.FC<TagInputProps> = memo(
  ({ SelectedTags, setSelectedTags }): React.JSX.Element => {
    // Ввод и отображение тегов
    const [TagsInputValue, setTagsInputValue] = useState<string>("");
    const TagInputRef = useRef<HTMLInputElement>(null);

    const TagInputkeyboardEvent = useCallback(
      (event: KeyboardEvent): void => {
        event.preventDefault();

        if (
          (event.keyCode == 13 || event.key == "Enter") &&
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
      [SelectedTags, TagsInputValue, setSelectedTags]
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
      [SelectedTags, setSelectedTags]
    );

    // Удаление последнего тега на клавиатуру
    const DeleteTagWithBackspace = useCallback(
      (e: KeyboardEvent): void => {
        if (document.activeElement == TagInputRef.current && !TagsInputValue) {
          const keyboardKey = e.keyCode || e.charCode;

          if (keyboardKey == 8 || keyboardKey == 46 || e.key == "Backspace") {
            const SelectedTagsCopy = SelectedTags.slice();
            SelectedTagsCopy.pop();
            setSelectedTags(SelectedTagsCopy);
          }
        }
      },
      [SelectedTags, TagsInputValue, setSelectedTags]
    );

    useEffect(() => {
      document.addEventListener("keydown", DeleteTagWithBackspace);

      return () => {
        document.removeEventListener("keydown", DeleteTagWithBackspace);
      };
    }, [DeleteTagWithBackspace]);

    return (
      <div className={styles.TagsInput__tagsInputWrapper}>
        {SelectedTags.map((tag) => (
          <div
            data-testid={`TagsInput.tag.${tag}`}
            key={tag}
            className={styles.TagsInput__tag}
          >
            <span className={styles.TagsInput__tag__text}>{tag}</span>
            <div
              data-testid={`TagsInput.tag.${tag}.Delete`}
              onClick={() => DeleteTag(tag)}
              className={styles.TagsInput__tag__delete}
            >
              <RedCrossSVG />
            </div>
          </div>
        ))}

        <input
          data-testid="TagsInput.input"
          className={styles.TagsInput__tagsInput}
          type="text"
          value={TagsInputValue}
          onChange={(e) => setTagsInputValue(e.target.value)}
          ref={TagInputRef}
          placeholder="Добавьте теги..."
        />
      </div>
    );
  }
);
