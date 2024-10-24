import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogOpenPostComments.module.scss";
import { memo, useCallback, useContext, useRef, useState } from "react";
import { Select } from "@/shared/ui-kit/Select";
import SortSelectDropdownIndicatorSVG from "@/shared/assets/icons/Global/SortSelectDropdownIndicatorSVG.svg?react";
import { selectStyles } from "@/shared/ui-kit/Select";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import {
  blogOpenPostCommentsSortSelectItems,
  blogOpenPostCommentsUser,
} from "../model/BlogOpenPostComments_data";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import {
  AttachFileContainer,
  LoadedFile,
} from "@/widgets/Global_widgets/AttachFileContainer";
import AttachSVG from "@/shared/assets/icons/Global/AttachSVG.svg?react";
import { AttachFileContainerItems } from "@/widgets/Global_widgets/AttachFileContainer/ui/AttachFileContainerItems";
import EmojiPicker from "emoji-picker-react";
import EmojiSVG from "@/shared/assets/icons/Global/EmojiSVG.svg?react";
import { BlogPostPageContext } from "@/pages/BlogPostPage/model/BlogPostPageContext";
import { TextUnderlineHover } from "@/shared/ui-kit/TextUnderlineHover";
import { mobile_mediaQuery } from "@/app";
import SendMessageSVG from "@/shared/assets/icons/Global/SendMessageSVG.svg?react";
import { BlogOpenPostCommentsProps } from "../model/BlogOpenPostComments_types";

import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import {
  UseBlogPostCommentsLocalStorage,
  UseBlogPostCommentsLocalStorageInterface,
} from "..";

const SortSelectDropDownIndicator = (): JSX.Element => {
  return (
    <SortSelectDropdownIndicatorSVG className={selectStyles.Select__svg} />
  );
};

const SortSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 600,
  fontSize: mobile_mediaQuery.matches ? "8px" : "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--main-color)",
};

export const BlogOpenPostComments: React.FC<BlogOpenPostCommentsProps> = memo(
  ({ id }): React.JSX.Element => {
    // Загрузка данных из LS
    const BlogOpenPostCommentsLI = UseBlogPostCommentsLocalStorage(
      UseLocalStorageTypes.GET,
      id
    );

    /* Стейт для textarea комментариев */
    const [commentsTextarea, setCommentsTextarea] = useState<string>(
      BlogOpenPostCommentsLI ? BlogOpenPostCommentsLI.textareaValue : ""
    );

    // Загрузка и отображение, загруженных пользователем, файлов:
    const FileInputRef = useRef<HTMLInputElement>(null);

    const [FileInputFiles, setFileInputFiles] = useState<LoadedFile[]>([]);

    const [FileInputProgress, setFileInputProgress] = useState<number>(0);

    /* Стейт для открытия пикера эмодзи */
    const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);

    // Функционал ответа на комментарий
    const { answeredComment, setAnsweredComment } =
      useContext(BlogPostPageContext);

    // Сохранение данных в LS
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveLSDebounce = useCallback(
      UseDebounce((lsItem: UseBlogPostCommentsLocalStorageInterface) => {
        UseBlogPostCommentsLocalStorage(
          UseLocalStorageTypes.UPDATE,
          id,
          lsItem
        );
      }, 1000),
      []
    );

    return (
      <Flex
        gap={`${mobile_mediaQuery.matches ? "5" : "20"}`}
        max
        direction="column"
        className={styles.BlogOpenPostComments}
        id="BlogOpenPostComments"
      >
        <Flex max align="center" justify="between">
          <h4 className="BlogPostPage__caption">Комментарии</h4>

          <Flex align="center">
            <span className={styles.BlogOpenPostComments__sorting_text}>
              Сортировка:
            </span>

            <Select
              TextStyles={SortSelectTextStyles}
              CustomDropdownIndicator={SortSelectDropDownIndicator}
              selectedOptions={blogOpenPostCommentsSortSelectItems}
              valueContainerPadding={
                mobile_mediaQuery.matches
                  ? valueContainerPaddingEnum.NONE
                  : valueContainerPaddingEnum.SMALL
              }
            />
          </Flex>
        </Flex>

        <Flex align="center" gap={mobile_mediaQuery.matches ? "5" : "10"}>
          <Avatar
            imgURL={blogOpenPostCommentsUser.imgURL}
            imgSize={AvatarSizes.SMALL}
          />

          <Flex direction="column">
            <span className={styles.BlogOpenPostComments__userTitle}>
              {blogOpenPostCommentsUser.title}
            </span>

            <span className={styles.BlogOpenPostComments__userCategory}>
              {blogOpenPostCommentsUser.category}
            </span>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          max
          gap={mobile_mediaQuery.matches ? "3" : "10"}
        >
          {answeredComment && (
            <span className={styles.BlogOpenPostComments__commentAnswer}>
              Ответ на комментарий пользователя {answeredComment.authorName}
            </span>
          )}

          <div className={styles.BlogOpenPostComments__textareaWrapper}>
            <textarea
              placeholder="Ваш ответ..."
              className={styles.BlogOpenPostComments__textarea}
              value={commentsTextarea}
              onChange={(e) => {
                setCommentsTextarea(e.target.value);
                saveLSDebounce({
                  textareaValue: e.target.value,
                });
              }}
            ></textarea>

            <div className={styles.BlogOpenPostComments__attach}>
              <AttachFileContainer
                data-testid="BlogOpenPostComments.AttachFilesInput"
                inputRef={FileInputRef}
                InputFiles={FileInputFiles}
                setInputFiles={setFileInputFiles}
                setInputFileProgress={setFileInputProgress}
              />

              <AttachSVG />
            </div>

            <div>
              <div
                className={styles.BlogOpenPostComments__emoji}
                onClick={() => setEmojiPickerIsOpen(!emojiPickerIsOpen)}
              >
                <EmojiSVG />
              </div>

              <EmojiPicker
                onEmojiClick={(emoji) =>
                  setCommentsTextarea((prev) => prev + emoji.emoji)
                }
                className={`${styles.BlogOpenPostComments__emojiPicker} ${emojiPickerIsOpen ? styles.BlogOpenPostComments__emojiPicker__open : ""}`}
                searchDisabled={true}
                skinTonesDisabled={true}
              />
            </div>

            <SendMessageSVG className={styles.BlogOpenPostComments__send} />
          </div>

          {answeredComment && (
            <TextUnderlineHover
              onClick={() => setAnsweredComment(null)}
              className={styles.BlogOpenPostComments__commentAnswer__without}
            >
              <span>Оставить комментарий без ответа</span>
            </TextUnderlineHover>
          )}
        </Flex>

        <AttachFileContainerItems
          setInputFileProgress={setFileInputProgress}
          InputFileProgress={FileInputProgress}
          setInputFiles={setFileInputFiles}
          files={FileInputFiles}
          fileView="medium"
        />
      </Flex>
    );
  }
);
