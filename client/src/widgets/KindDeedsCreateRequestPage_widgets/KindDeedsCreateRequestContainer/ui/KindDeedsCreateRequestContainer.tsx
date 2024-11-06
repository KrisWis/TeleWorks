import { Flex } from "@/shared/lib/Stack";
import styles from "./KindDeedsCreateRequestContainer.module.scss";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import BackSVG from "@/shared/assets/icons/Global/BackSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/lib/IncreaseScaleHover";
import { Link } from "react-router-dom";
import { IndexedDBStores } from "@/shared/const/app";
import { IndexedDBName } from "@/shared/const/app";
import { mobile_mediaQuery, transitionDuration } from "@/shared/const/global";
import { AppRoutes } from "@/shared/const/app";
import { Input } from "@/shared/ui-kit/Input";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Textarea } from "@/shared/ui-kit/Textarea";
import {
  LoadImageBlockSizes,
  LoadImageBlockWithoutLoading,
} from "@/shared/ui-kit/LoadImageBlockWithoutLoading";
import {
  AttachFileContainer,
  AttachFileContainerItems,
} from "@/features/Global_features/AttachFileContainer";
import {
  KindDeedsCreateRequestContainerProps,
  KindDeedsCreateRequestLocalStorageInterface,
} from "../model/types";
import { UseKindDeedsCreateRequestLocalStorage } from "../model/useKindDeedsCreateRequestLocalStorage/useKindDeedsCreateRequestLocalStorage";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { IndexedDBLoader } from "@/shared/lib/IndexedDBLoader";
import { LoadedFile } from "@/shared/types/global";

export const KindDeedsCreateRequestContainer: React.FC<KindDeedsCreateRequestContainerProps> =
  memo(({ setRequestIsCreated }): React.JSX.Element => {
    // Все нужные стейты и получение данных из localStorage
    const KindDeedsCreateRequestLI = UseKindDeedsCreateRequestLocalStorage(
      UseLocalStorageTypes.GET
    );

    const [surnameInputValue, setSurnameInputValue] = useState<string>(
      KindDeedsCreateRequestLI ? KindDeedsCreateRequestLI.surnameInputValue : ""
    );

    const [nameInputValue, setNameInputValue] = useState<string>(
      KindDeedsCreateRequestLI ? KindDeedsCreateRequestLI.nameInputValue : ""
    );

    const [patronymicInputValue, setPatronymicInputValue] = useState<string>(
      KindDeedsCreateRequestLI
        ? KindDeedsCreateRequestLI.patronymicInputValue
        : ""
    );

    const [organizationInputValue, setOrganizationInputValue] =
      useState<string>(
        KindDeedsCreateRequestLI
          ? KindDeedsCreateRequestLI.organizationInputValue
          : ""
      );

    const [requestSumInputValue, setRequestSumInputValue] = useState<
      number | string
    >(
      KindDeedsCreateRequestLI
        ? KindDeedsCreateRequestLI.requestSumInputValue
        : ""
    );

    const [goalTextareaValue, setGoalTextareaValue] = useState<string>(
      KindDeedsCreateRequestLI ? KindDeedsCreateRequestLI.goalTextareaValue : ""
    );

    const [loadedDocuments, setLoadedDocuments] = useState<LoadedFile[]>([]);

    const [loadedDocumentsProgress, setLoadedDocumentsProgress] =
      useState<number>(0);

    const documentInputRef = useRef<HTMLInputElement>(null);

    // Сохранение данных в LS

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveLSDebounce = useCallback(
      UseDebounce((lsItem: KindDeedsCreateRequestLocalStorageInterface) => {
        UseKindDeedsCreateRequestLocalStorage(
          UseLocalStorageTypes.UPDATE,
          lsItem
        );
      }, 1000),
      []
    );

    // Сохранение файлов в IndexedDB
    const indexedDB = useRef<IDBDatabase>();

    const indexedDBStoreName: string = useMemo(
      () =>
        IndexedDBStores.find(
          (store) => store.route == AppRoutes.KIND_DEEDS_CREATE_REQUEST
        )!.name,
      []
    );

    // Нажатие на кнопку "Создать запрос"
    const [tryCreate, setTryCreate] = UseTryAction();

    const ScrollTimeOut = useRef<NodeJS.Timeout>();

    const createRequest = useCallback((): void => {
      if (
        !surnameInputValue ||
        !nameInputValue ||
        !patronymicInputValue ||
        !organizationInputValue ||
        !requestSumInputValue ||
        !loadedDocuments.length
      ) {
        return setTryCreate(true);
      }

      setRequestIsCreated(true);

      ScrollTimeOut.current = setTimeout(() => {
        document
          .getElementById("KindDeedsRequestCreated")
          ?.scrollIntoView({ behavior: "smooth" });

        clearTimeout(ScrollTimeOut.current);
      }, transitionDuration + 100);
    }, [
      loadedDocuments.length,
      nameInputValue,
      organizationInputValue,
      patronymicInputValue,
      requestSumInputValue,
      setRequestIsCreated,
      setTryCreate,
      surnameInputValue,
    ]);

    return (
      <IndexedDBLoader
        setFiles={setLoadedDocuments}
        indexedDB={indexedDB}
        indexedDBStoreName={indexedDBStoreName}
      >
        <Flex
          max
          className={styles.KindDeedsCreateRequestContainer}
          gap={mobile_mediaQuery.matches ? "15" : "10"}
          direction="column"
        >
          <IncreaseScaleHover>
            <Link to={AppRoutes.KIND_DEEDS}>
              <Flex
                className={
                  mobile_mediaQuery.matches
                    ? styles.KindDeedsCreateRequestContainer__adaptiveCaptionWrapper
                    : ""
                }
                align="center"
                gap={mobile_mediaQuery.matches ? "5" : "15"}
              >
                <BackSVG
                  className={styles.KindDeedsCreateRequestContainer__back}
                />

                <h1 className={styles.KindDeedsCreateRequestContainer__caption}>
                  Создание запроса средств
                </h1>
              </Flex>
            </Link>
          </IncreaseScaleHover>

          <Flex
            max
            className={
              !mobile_mediaQuery.matches
                ? "Page__GrayBorderSecondaryWrapper"
                : styles.KindDeedsCreateRequestContainer__wrapperAdaptive
            }
            gap="10"
            direction="column"
          >
            <h2
              className={`KindDeedsCreateRequestPage__subcaption 
              ${styles.KindDeedsCreateRequestContainer__firstSubcaption}`}
            >
              Контактные данные
            </h2>

            <Flex
              max
              className={styles.KindDeedsCreateRequestContainer__wrapper}
              gap={mobile_mediaQuery.matches ? "10" : "20"}
              direction="column"
            >
              <Flex
                max
                className={
                  styles.KindDeedsCreateRequestContainer__inputsWrapper
                }
                gap={mobile_mediaQuery.matches ? "10" : "20"}
                direction="column"
              >
                <Input
                  className={styles.KindDeedsCreateRequestContainer__input}
                  type="text"
                  value={surnameInputValue || ""}
                  onChange={(e) => {
                    setSurnameInputValue(e.target.value);
                    saveLSDebounce({
                      surnameInputValue: e.target.value,
                      nameInputValue,
                      patronymicInputValue,
                      organizationInputValue,
                      requestSumInputValue: Number(requestSumInputValue),
                      goalTextareaValue,
                    });
                  }}
                  isWarn={tryCreate && !surnameInputValue}
                  placeholder="Фамилия"
                />

                <Input
                  className={styles.KindDeedsCreateRequestContainer__input}
                  type="text"
                  value={nameInputValue || ""}
                  onChange={(e) => {
                    setNameInputValue(e.target.value);
                    saveLSDebounce({
                      surnameInputValue,
                      nameInputValue: e.target.value,
                      patronymicInputValue,
                      organizationInputValue,
                      requestSumInputValue: Number(requestSumInputValue),
                      goalTextareaValue,
                    });
                  }}
                  isWarn={tryCreate && !nameInputValue}
                  placeholder="Имя"
                />

                <Input
                  className={styles.KindDeedsCreateRequestContainer__input}
                  type="text"
                  value={patronymicInputValue || ""}
                  onChange={(e) => {
                    setPatronymicInputValue(e.target.value);
                    saveLSDebounce({
                      surnameInputValue,
                      nameInputValue,
                      patronymicInputValue: e.target.value,
                      organizationInputValue,
                      requestSumInputValue: Number(requestSumInputValue),
                      goalTextareaValue,
                    });
                  }}
                  isWarn={tryCreate && !patronymicInputValue}
                  placeholder="Отчество"
                />
              </Flex>

              <Flex
                max
                gap={mobile_mediaQuery.matches ? "5" : "20"}
                direction="column"
              >
                <h2 className="KindDeedsCreateRequestPage__subcaption">
                  Название организации/инициативы:
                </h2>

                <Input
                  className={styles.KindDeedsCreateRequestContainer__input}
                  type="text"
                  value={organizationInputValue || ""}
                  onChange={(e) => {
                    setOrganizationInputValue(e.target.value);
                    saveLSDebounce({
                      surnameInputValue,
                      nameInputValue,
                      patronymicInputValue,
                      organizationInputValue: e.target.value,
                      requestSumInputValue: Number(requestSumInputValue),
                      goalTextareaValue,
                    });
                  }}
                  isWarn={tryCreate && !organizationInputValue}
                  placeholder="Организация"
                />
              </Flex>

              <Flex
                max
                gap={mobile_mediaQuery.matches ? "5" : "20"}
                direction="column"
              >
                <h2 className="KindDeedsCreateRequestPage__subcaption">
                  Цель финансирования
                </h2>

                <Textarea
                  className={styles.KindDeedsCreateRequestContainer__textarea}
                  value={goalTextareaValue || ""}
                  onChange={(e) => {
                    setGoalTextareaValue(e.target.value);
                    saveLSDebounce({
                      surnameInputValue,
                      nameInputValue,
                      patronymicInputValue,
                      organizationInputValue,
                      requestSumInputValue: Number(requestSumInputValue),
                      goalTextareaValue: e.target.value,
                    });
                  }}
                  isWarn={tryCreate && !goalTextareaValue}
                  placeholder="Подробно объясните, как будут использованы запрашиваемые средства и какое влияние они окажут"
                />
              </Flex>

              <Flex
                className={
                  styles.KindDeedsCreateRequestContainer__loadDocumentsWrapper
                }
                max
              >
                <LoadImageBlockWithoutLoading
                  title="Загрузите документы"
                  size={LoadImageBlockSizes.BIG}
                  withBG={false}
                  isWarn={tryCreate && !loadedDocuments.length}
                  isHovered={true}
                  inputRef={documentInputRef}
                  bigViewInMobile
                />

                <AttachFileContainer
                  inputRef={documentInputRef}
                  setInputFiles={setLoadedDocuments}
                  InputFiles={loadedDocuments}
                  setInputFileProgress={setLoadedDocumentsProgress}
                  accept="image/jpg, image/jpeg, image/png, image/gif"
                  zIndex={-1}
                  indexedDB={indexedDB.current}
                  indexedDBStoreName={indexedDBStoreName}
                />
              </Flex>

              <AttachFileContainerItems
                InputFileProgress={loadedDocumentsProgress}
                setInputFileProgress={setLoadedDocumentsProgress}
                setInputFiles={setLoadedDocuments}
                files={loadedDocuments}
                fileView="medium"
                accept="image/jpg, image/jpeg, image/png, image/gif"
                indexedDBName={IndexedDBName}
                indexedDBStore={indexedDBStoreName}
                indexedDB={indexedDB.current}
              />

              <Flex
                max
                gap={mobile_mediaQuery.matches ? "5" : "20"}
                direction="column"
              >
                <h2 className="KindDeedsCreateRequestPage__subcaption">
                  Сумма запроса
                </h2>

                <Flex
                  max
                  className={styles.KindDeedsCreateRequestContainer__input__sum}
                >
                  <Input
                    className={styles.KindDeedsCreateRequestContainer__input}
                    type="number"
                    value={requestSumInputValue || ""}
                    onChange={(e) => {
                      setRequestSumInputValue(e.target.value);
                      saveLSDebounce({
                        surnameInputValue,
                        nameInputValue,
                        patronymicInputValue,
                        organizationInputValue,
                        requestSumInputValue: Number(e.target.value),
                        goalTextareaValue,
                      });
                    }}
                    isWarn={tryCreate && !requestSumInputValue}
                    placeholder="1 422 223₽"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex max justify="end" align="center">
            <Button
              to={AppRoutes.KIND_DEEDS}
              type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
              text="Назад"
              className={styles.KindDeedsCreateRequestContainer__button}
            />

            <Button
              type={ButtonTypes.RED}
              text="Создать запрос"
              className={styles.KindDeedsCreateRequestContainer__button}
              onClick={createRequest}
            />
          </Flex>
        </Flex>
      </IndexedDBLoader>
    );
  });
