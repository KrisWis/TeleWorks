import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogCreatePageContainer.module.scss";
import {
  memo,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import RedArrowRightSVG from "@/shared/assets/icons/Global/RedArrowRightSVG.svg?react";
import { Input } from "@/shared/ui-kit/Input";
import { MarkdownTextarea } from "@/shared/ui-kit/MarkdownTextarea";
import {
  AttachFileContainer,
  AttachFileContainerItems,
} from "@/features/Global_features/AttachFileContainer";
import {
  LoadImageBlockSizes,
  LoadImageBlockWithoutLoading,
} from "@/shared/ui-kit/LoadImageBlockWithoutLoading";
import { TagsInput } from "@/shared/ui-kit/TagsInput";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { IndexedDBStores } from "@/shared/const/app";
import { IndexedDBName } from "@/shared/const/app";
import { mobile_mediaQuery, transitionDuration } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";
import { IndexedDBLoader } from "@/shared/ui-kit/IndexedDBLoader";
import { AppRoutes } from "@/shared/const/app";
import {
  BlogCreatePageContext,
  UseBlogCreatePageLocalStorage,
  useBlogCreatePageLocalStorageInterface,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/BlogCreatePageMain";
import { LoadedFile } from "@/shared/types/global";
import { BlogCreatePagePostTypes } from "./BlogCreatePagePostTypes/ui/BlogCreatePagePostTypes";

export const BlogCreatePageContainer: React.FC = memo((): React.JSX.Element => {
  // Стейты для инпутов и textarea, и загрузка данных из Local Storage
  const BlogCreatePageLI = UseBlogCreatePageLocalStorage(
    UseLocalStorageTypes.GET
  );

  const [titleInputValue, setTitleInputValue] = useState<string>(
    BlogCreatePageLI ? BlogCreatePageLI.title : ""
  );

  const [textareaValue, setTextareaValue] = useState<string>(
    BlogCreatePageLI ? BlogCreatePageLI.textareaValue : ""
  );

  // Загрузка и отображение, загруженных пользователем, файлов:
  const FileInputRef = useRef<HTMLInputElement>(null);

  const [FileInputFiles, setFileInputFiles] = useState<LoadedFile[]>([]);

  const [FileInputProgress, setFileInputProgress] = useState<number>(0);

  // Ввод данных в теги и их загрузка данных из Local Storage
  const [SelectedTags, setSelectedTags] = useState<string[]>(
    BlogCreatePageLI ? BlogCreatePageLI.tags : []
  );

  // Перемещение на стадию "пост создан"
  const { setCreatePostActiveStep } = useContext(BlogCreatePageContext);

  // Нажатие на кнопку "Опубликовать"
  const [tryPublish, setTryPublish] = UseTryAction();

  const isTitleIsValid = useMemo<boolean>(
    () => Boolean(titleInputValue),
    [titleInputValue]
  );

  const isTextareaIsValid = useMemo<boolean>(
    () => Boolean(textareaValue),
    [textareaValue]
  );

  const onClickPublish = useCallback(() => {
    if (!isTitleIsValid || !isTextareaIsValid) {
      const BlogCreatePageContainer__blogCreatePagePostTypes =
        document.getElementById(
          "BlogCreatePageContainer__blogCreatePagePostTypes"
        );

      BlogCreatePageContainer__blogCreatePagePostTypes?.scrollIntoView({
        behavior: "smooth",
      });

      return setTryPublish(true);
    }

    setCreatePostActiveStep("Пост создан");

    setTimeout(() => {
      document
        .getElementById("BlogPostIsCreated")!
        .scrollIntoView({ behavior: "smooth" });
    }, transitionDuration);
  }, [
    isTextareaIsValid,
    isTitleIsValid,
    setCreatePostActiveStep,
    setTryPublish,
  ]);

  // Сохранение данных в LS
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const saveLSDebounce = useCallback(
    UseDebounce((lsItem: useBlogCreatePageLocalStorageInterface) => {
      UseBlogCreatePageLocalStorage(UseLocalStorageTypes.UPDATE, lsItem);
    }, 1000),
    []
  );

  // Сохранение файлов в IndexedDB
  const indexedDB = useRef<IDBDatabase>();

  const indexedDBStoreName: string = useMemo(
    () =>
      IndexedDBStores.find((store) => store.route == AppRoutes.BLOG_CREATE)!
        .name,
    []
  );

  return (
    <IndexedDBLoader
      setFiles={setFileInputFiles}
      indexedDB={indexedDB}
      indexedDBStoreName={indexedDBStoreName}
    >
      <Flex
        direction="column"
        gap={mobile_mediaQuery ? "5" : "10"}
        className={styles.BlogCreatePageContainer}
      >
        <Flex gap={mobile_mediaQuery ? "5" : "15"} align="center">
          <img
            className={styles.BlogCreatePageContainer__img}
            src={`${URL_PART}/global/images/serviceExample_img_2.png`}
            alt="Изображение автора поста"
          />

          <Flex align="center" gap={mobile_mediaQuery ? "5" : "10"}>
            <span className={styles.BlogCreatePageContainer__category}>
              Владелец канала
            </span>

            <RedArrowRightSVG
              className={styles.BlogCreatePageContainer__redArrowRightSvg}
            />
          </Flex>
        </Flex>

        <BlogCreatePagePostTypes />

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

        <Flex
          max
          direction="column"
          gap={mobile_mediaQuery.matches ? "0" : "20"}
        >
          <Input
            className={styles.BlogCreatePageContainer__titleInput}
            placeholder="Заголовок"
            value={titleInputValue}
            onChange={(e) => {
              setTitleInputValue(e.target.value);
              saveLSDebounce({
                title: e.target.value,
                textareaValue: textareaValue,
                tags: SelectedTags,
              });
            }}
            type="text"
            isWarn={tryPublish && !isTitleIsValid}
          />

          <MarkdownTextarea
            TextareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
            onChange={() => {
              saveLSDebounce({
                title: titleInputValue,
                textareaValue: textareaValue,
                tags: SelectedTags,
              });
            }}
            minSymbolsAmount={100}
            maxSymbolsAmount={500}
            placeholder="Ваш текст поста..."
            isWarn={tryPublish && !isTextareaIsValid}
          />

          <Flex max gap="10" direction="column">
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
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  indexedDB={indexedDB.current}
                  indexedDBStoreName={indexedDBStoreName}
                />

                <LoadImageBlockWithoutLoading
                  className={styles.BlogCreatePageContainer__load}
                  size={LoadImageBlockSizes.BIG}
                  inputRef={FileInputRef}
                  withBG={false}
                  title="Загрузите изображение"
                  isHovered
                />
              </Flex>

              <AttachFileContainerItems
                setInputFileProgress={setFileInputProgress}
                InputFileProgress={FileInputProgress}
                setInputFiles={setFileInputFiles}
                files={FileInputFiles}
                fileView="medium"
                indexedDBName={IndexedDBName}
                indexedDBStore={indexedDBStoreName}
                indexedDB={indexedDB.current}
              />
            </Flex>

            <TagsInput
              setSelectedTags={setSelectedTags}
              SelectedTags={SelectedTags}
              onChange={() => {
                saveLSDebounce({
                  title: titleInputValue,
                  textareaValue: textareaValue,
                  tags: SelectedTags,
                });
              }}
            />
          </Flex>
        </Flex>

        <Flex
          max
          justify="between"
          align="center"
          direction={!mobile_mediaQuery.matches ? "row" : "column"}
        >
          <Flex max align="center" gap={mobile_mediaQuery ? "5" : "10"}>
            <Avatar
              imgURL={`${URL_PART}/global/images/serviceExample_authorImg.png`}
              imgSize={AvatarSizes.SMALLER}
            />

            <span className={styles.BlogCreatePageContainer__username}>
              Roman Bayandin-Bessonov
            </span>
          </Flex>

          <Flex
            max
            align="center"
            justify={!mobile_mediaQuery.matches ? "center" : "end"}
            gap="10"
          >
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
          <a href="https://journal.tinkoff.ru/wiki/terms/">
            условия соглашения
          </a>{" "}
          и{" "}
          <a href="https://journal.tinkoff.ru/wiki/privacy/">
            политику конфиденциальности
          </a>
        </p>
      </Flex>
    </IndexedDBLoader>
  );
});
