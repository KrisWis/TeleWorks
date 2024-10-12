import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./KindDeedsCreateRequestContainer.module.scss";
import { memo, useCallback, useRef, useState } from "react";
import BackSVG from "@/shared/assets/icons/Global/BackSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/app";
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
  LoadedFile,
} from "@/widgets/Global_widgets/AttachFileContainer";
import { AttachFileContainerItems } from "@/widgets/Global_widgets/AttachFileContainer/ui/AttachFileContainerItems";

export const KindDeedsCreateRequestContainer: React.FC = memo(
  (): React.JSX.Element => {
    // Все нужные стейты
    const [surnameInputValue, setSurnameInputValue] = useState<string>("");

    const [nameInputValue, setNameInputValue] = useState<string>("");

    const [patronymicInputValue, setPatronymicInputValue] =
      useState<string>("");

    const [organizationInputValue, setOrganizationInputValue] =
      useState<string>("");

    const [requestSumInputValue, setRequestSumInputValue] =
      useState<string>("");

    const [loadedDocuments, setLoadedDocuments] = useState<LoadedFile[]>([]);

    const [loadedDocumentsProgress, setLoadedDocumentsProgress] =
      useState<number>(0);

    const documentInputRef = useRef<HTMLInputElement>(null);

    const [goalTextareaValue, setGoalTextareaValue] = useState<string>("");

    // Нажатие на кнопку "Создать запрос"
    const [tryCreate, setTryCreate] = UseTryAction();

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
    }, [
      loadedDocuments.length,
      nameInputValue,
      organizationInputValue,
      patronymicInputValue,
      requestSumInputValue,
      setTryCreate,
      surnameInputValue,
    ]);

    return (
      <Flex
        className={styles.KindDeedsCreateRequestContainer}
        gap="15"
        direction="column"
      >
        <IncreaseScaleHover>
          <Link to={AppRoutes.KIND_DEEDS}>
            <Flex align="center" gap="15">
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
          className="Page__GrayBorderSecondaryWrapper"
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
            gap="20"
            direction="column"
          >
            <Flex
              max
              className={styles.KindDeedsCreateRequestContainer__inputsWrapper}
              gap="20"
              direction="column"
            >
              <Input
                className={styles.KindDeedsCreateRequestContainer__input}
                type="text"
                value={surnameInputValue}
                onChange={(e) => setSurnameInputValue(e.target.value)}
                isWarn={tryCreate && !surnameInputValue}
                placeholder="Фамилия"
              />

              <Input
                className={styles.KindDeedsCreateRequestContainer__input}
                type="text"
                value={nameInputValue}
                onChange={(e) => setNameInputValue(e.target.value)}
                isWarn={tryCreate && !nameInputValue}
                placeholder="Имя"
              />

              <Input
                className={styles.KindDeedsCreateRequestContainer__input}
                type="text"
                value={patronymicInputValue}
                onChange={(e) => setPatronymicInputValue(e.target.value)}
                isWarn={tryCreate && !patronymicInputValue}
                placeholder="Отчество"
              />
            </Flex>

            <h2 className="KindDeedsCreateRequestPage__subcaption">
              Название организации/инициативы:
            </h2>

            <Input
              className={styles.KindDeedsCreateRequestContainer__input}
              type="text"
              value={organizationInputValue}
              onChange={(e) => setOrganizationInputValue(e.target.value)}
              isWarn={tryCreate && !organizationInputValue}
              placeholder="Организация"
            />

            <h2 className="KindDeedsCreateRequestPage__subcaption">
              Цель финансирования
            </h2>

            <Textarea
              className={styles.KindDeedsCreateRequestContainer__textarea}
              value={goalTextareaValue}
              onChange={(e) => setGoalTextareaValue(e.target.value)}
              isWarn={tryCreate && !goalTextareaValue}
              placeholder="Подробно объясните, как будут использованы запрашиваемые средства и какое влияние они окажут"
            />

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
              />

              <AttachFileContainer
                inputRef={documentInputRef}
                setInputFiles={setLoadedDocuments}
                InputFiles={loadedDocuments}
                setInputFileProgress={setLoadedDocumentsProgress}
                accept="image/jpg, image/jpeg, image/png, image/gif"
                zIndex={-1}
              />
            </Flex>

            <AttachFileContainerItems
              InputFileProgress={loadedDocumentsProgress}
              setInputFileProgress={setLoadedDocumentsProgress}
              setInputFiles={setLoadedDocuments}
              files={loadedDocuments}
              fileView="medium"
              accept="image/jpg, image/jpeg, image/png, image/gif"
            />

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
                value={requestSumInputValue}
                onChange={(e) => setRequestSumInputValue(e.target.value)}
                isWarn={tryCreate && !requestSumInputValue}
                placeholder="1 422 223₽"
              />
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
    );
  }
);
