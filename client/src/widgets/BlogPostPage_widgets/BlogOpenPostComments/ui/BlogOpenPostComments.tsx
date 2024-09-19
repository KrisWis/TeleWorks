import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogOpenPostComments.module.scss";
import { memo, useRef, useState } from "react";
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

const SortSelectDropDownIndicator = (): JSX.Element => {
  return (
    <SortSelectDropdownIndicatorSVG className={selectStyles.Select__svg} />
  );
};

const SortSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--main-color)",
};

export const BlogOpenPostComments: React.FC = memo((): React.JSX.Element => {
  /* Стейт для textarea комментариев */
  const [commentsTextarea, setCommentsTextarea] = useState<string>("");

  // Загрузка и отображение, загруженных пользователем, файлов:
  const FileInputRef = useRef<HTMLInputElement>(null);

  const [FileInputFiles, setFileInputFiles] = useState<LoadedFile[]>([]);

  // Индикатор загрузки при загрузке файлов
  const [FileInputProgress, setFileInputProgress] = useState<number>(0);

  /* Стейт для открытия пикера эмодзи */
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);

  return (
    <Flex
      gap="20"
      max
      direction="column"
      className={styles.BlogOpenPostComments}
    >
      <Flex max align="center" justify="between">
        <h4 className="BlogPostPage__caption">Комментарии</h4>

        <Flex>
          <span className={styles.BlogOpenPostComments__sorting_text}>
            Сортировка:
          </span>

          <Select
            TextStyles={SortSelectTextStyles}
            CustomDropdownIndicator={SortSelectDropDownIndicator}
            selectedOptions={blogOpenPostCommentsSortSelectItems}
            valueContainerPadding={valueContainerPaddingEnum.SMALL}
          />
        </Flex>
      </Flex>

      <Flex align="center" gap="10">
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

      <div className={styles.BlogOpenPostComments__textareaWrapper}>
        <textarea
          placeholder="Ваш ответ..."
          className={styles.BlogOpenPostComments__textarea}
          value={commentsTextarea}
          onChange={(e) => setCommentsTextarea(e.target.value)}
        ></textarea>

        <div className={styles.BlogOpenPostComments__attach}>
          <AttachFileContainer
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
      </div>

      <AttachFileContainerItems
        setInputFileProgress={setFileInputProgress}
        InputFileProgress={FileInputProgress}
        setInputFiles={setFileInputFiles}
        files={FileInputFiles}
        fileView="medium"
      />
    </Flex>
  );
});
