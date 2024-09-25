import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogCreatePageContainer.module.scss";
import { memo, useCallback, useContext, useRef, useState } from "react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import RedArrowRightSVG from "@/shared/assets/icons/Global/RedArrowRightSVG.svg?react";
import ChangeSVG from "@/shared/assets/icons/Global/ChangeSVG.svg?react";
import { BlogCreatePageContext } from "@/pages/BlogCreatePage";
import { blogCreatePagePostTypes } from "@/pages/BlogCreatePage/model/BlogCreatePageContext";
import { Input } from "@/shared/ui-kit/Input";
import { MarkdownTextarea } from "@/shared/ui-kit/MarkdownTextarea";
import {
  AttachFileContainer,
  LoadedFile,
} from "@/widgets/Global_widgets/AttachFileContainer";
import { AttachFileContainerItems } from "@/widgets/Global_widgets/AttachFileContainer/ui/AttachFileContainerItems";
import {
  LoadImageBlockSizes,
  LoadImageBlockWithoutLoading,
} from "@/shared/ui-kit/LoadImageBlockWithoutLoading";
import { TagsInput } from "@/shared/ui-kit/TagsInput";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const BlogCreatePageContainer: React.FC = memo((): React.JSX.Element => {
  // Функционал переключения типа поста
  const { setSelectedPostType, selectedPostType } = useContext(
    BlogCreatePageContext
  );

  // Стейты для инпутов и textarea
  const [titleInputValue, setTitleInputValue] = useState<string>("");

  const [textareaValue, setTextareaValue] = useState<string>("");

  // Загрузка и отображение, загруженных пользователем, файлов:
  const FileInputRef = useRef<HTMLInputElement>(null);

  const [FileInputFiles, setFileInputFiles] = useState<LoadedFile[]>([]);

  const [FileInputProgress, setFileInputProgress] = useState<number>(0);

  // Ввод данных в теги
  const [SelectedTags, setSelectedTags] = useState<string[]>([]);

  // Перемещение на стадию "пост создан"
  const { setCreatePostActiveStep } = useContext(BlogCreatePageContext);

  // Нажатие на кнопку "Опубликовать"
  const onClickPublish = useCallback(() => {
    setCreatePostActiveStep("Заказ создан");
    document.body.scrollIntoView({ behavior: "smooth" });
  }, [setCreatePostActiveStep]);

  return (
    <Flex
      direction="column"
      gap="10"
      className={styles.BlogCreatePageContainer}
    >
      <Flex gap="15" align="center">
        <img
          className={styles.BlogCreatePageContainer__img}
          src={`${URL_PART}/global/images/serviceExample_img_2.png`}
          alt="Изображение автора поста"
        />

        <Flex align="center" gap="10">
          <span className={styles.BlogCreatePageContainer__category}>
            Владелец канала
          </span>

          <RedArrowRightSVG />
        </Flex>
      </Flex>

      <Flex align="center" gap="10">
        {blogCreatePagePostTypes.map((type) => (
          <Flex
            key={type}
            className={`${styles.BlogCreatePageContainer__postType}
            ${selectedPostType == type ? styles.BlogCreatePageContainer__postType__active : ""} `}
            align="center"
            gap="5"
            onClick={() => setSelectedPostType(type)}
          >
            <ChangeSVG
              className={`${styles.BlogCreatePageContainer__postType__svg}
            ${selectedPostType == type ? styles.BlogCreatePageContainer__postType__svg__active : ""} `}
            />

            <span
              className={`${styles.BlogCreatePageContainer__postType__text}
            ${selectedPostType == type ? styles.BlogCreatePageContainer__postType__text__active : ""} `}
            >
              {type}
            </span>
          </Flex>
        ))}
      </Flex>

      <p className={styles.BlogCreatePageContainer__desc}>
        Вы можете написать текст на любую интересную вам тему. Но сначала
        прочитайте наши{" "}
        <a href="https://journal.tinkoff.ru/community-rules/">
          правила публикации.
        </a>{" "}
        После модерации текст появится{" "}
        <a href="https://journal.tinkoff.ru/community/">в Сообществе</a> и в
        вашем личном профиле.
      </p>

      <Flex max direction="column" gap="20">
        <Input
          className={styles.BlogCreatePageContainer__titleInput}
          placeholder="Заголовок"
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
          type="text"
        />

        <MarkdownTextarea
          TextareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
          minSymbolsAmount={100}
          maxSymbolsAmount={500}
          placeholder="Ваш текст..."
        />

        <Flex max gap="10" direction="column">
          <Flex
            max
            direction="column"
            className={styles.BlogCreatePageContainer__inputWrapper}
          >
            <AttachFileContainer
              inputRef={FileInputRef}
              InputFiles={FileInputFiles}
              setInputFiles={setFileInputFiles}
              setInputFileProgress={setFileInputProgress}
            />

            <LoadImageBlockWithoutLoading
              className={styles.BlogCreatePageContainer__load}
              size={LoadImageBlockSizes.BIG}
              inputRef={FileInputRef}
              withBG={false}
              title="Загрузите изображение"
            />
          </Flex>

          <AttachFileContainerItems
            setInputFileProgress={setFileInputProgress}
            InputFileProgress={FileInputProgress}
            setInputFiles={setFileInputFiles}
            files={FileInputFiles}
            fileView="medium"
          />
        </Flex>

        <TagsInput
          setSelectedTags={setSelectedTags}
          SelectedTags={SelectedTags}
        />
      </Flex>

      <Flex max justify="between" align="center">
        <Flex max align="center" gap="10">
          <Avatar
            imgURL={`${URL_PART}/global/images/serviceExample_authorImg.png`}
            imgSize={AvatarSizes.SMALLER}
          />

          <span className={styles.BlogCreatePageContainer__username}>
            Roman Bayandin-Bessonov
          </span>
        </Flex>

        <Flex max align="center" gap="10">
          <Button
            className={styles.BlogCreatePageContainer__button}
            text="Сохранить черновик"
            type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
          />

          <Button
            onClick={onClickPublish}
            className={styles.BlogCreatePageContainer__button}
            text="Опубликовать"
            type={ButtonTypes.RED}
          />
        </Flex>
      </Flex>

      <p className={styles.BlogCreatePageContainer__footerDesc}>
        Нажимая «Опубликовать», вы принимаете{" "}
        <a href="https://journal.tinkoff.ru/wiki/terms/">условия соглашения</a>{" "}
        и{" "}
        <a href="https://journal.tinkoff.ru/wiki/privacy/">
          политику конфиденциальности
        </a>
      </p>
    </Flex>
  );
});
