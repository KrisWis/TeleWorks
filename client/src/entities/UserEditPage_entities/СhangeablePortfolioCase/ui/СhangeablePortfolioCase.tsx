import { СhangeablePortfolioCaseProps } from "../model/СhangeablePortfolioCase_types";
import styles from "./СhangeablePortfolioCase.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import RedCrossSVG from "@/shared/assets/icons/UserEditPage/UserEdit/RedCrossSVG.svg?react";
import ChangeImageSVG from "@/shared/assets/icons/UserEditPage/UserEdit/ChangeImageSVG.svg?react";
import {
  LoadedImageOnLoad,
  LoadImageBlock,
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import { Input } from "@/shared/ui-kit/Input";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { LoadImageBlockSizes } from "@/shared/ui-kit/LoadImageBlockWithoutLoading";

export const СhangeablePortfolioCase: React.FC<СhangeablePortfolioCaseProps> =
  memo(({ Case, setExistedCases, ExistedCases }): React.JSX.Element => {
    // Загрузка и замена изображения
    const [CaseLoadedImage, setCaseLoadedImage] = UseLoadedImage();

    const [CaseLoadedImageErrors, setCaseLoadedImageErrors] =
      UseLoadedImageErrors();

    useEffect(() => {
      if (Case.caseImgURL) setCaseLoadedImage(Case.caseImgURL);
    }, [Case.caseImgURL, setCaseLoadedImage]);

    useEffect(() => {
      if (Case.caseImgURL != CaseLoadedImage) {
        const ExistedCasesCopy = ExistedCases.slice();

        const ExistedCasesCopyFindIndex: number = ExistedCasesCopy.findIndex(
          (caseItem) => caseItem.index == Case.index,
        );

        ExistedCasesCopy[ExistedCasesCopyFindIndex].caseImgURL =
          CaseLoadedImage;

        setExistedCases(ExistedCasesCopy);
      }
    }, [
      Case.caseImgURL,
      Case.index,
      CaseLoadedImage,
      ExistedCases,
      setExistedCases,
    ]);

    // Ввод данных
    const [CaseNameInputValue, setCaseNameInputValue] = useState<string>(
      Case.caseName || "",
    );

    const CaseNameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (CaseNameInputRef.current) {
        CaseNameInputRef.current.focus();
      }
    }, []);

    const CaseNameInputOnChangeDebounce = UseDebounce(() => {
      if (Case.caseName != CaseNameInputValue) {
        const ExistedCasesCopy = ExistedCases.slice();

        const ExistedCasesCopyFindIndex: number = ExistedCasesCopy.findIndex(
          (caseItem) => caseItem.index == Case.index,
        );

        ExistedCasesCopy[ExistedCasesCopyFindIndex].caseName =
          CaseNameInputValue;

        setExistedCases(ExistedCasesCopy);
      }
    }, 500);

    const CaseNameInputOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCaseNameInputValue(e.target.value);
        CaseNameInputOnChangeDebounce();
      },
      [CaseNameInputOnChangeDebounce],
    );

    return (
      <div className={styles.changeablePortfolioCase}>
        <LoadImageBlock
          className={styles.changeablePortfolioCase__img}
          requirements={false}
          size={LoadImageBlockSizes.MEDIUM}
          LoadedImage={CaseLoadedImage}
          setLoadedImage={setCaseLoadedImage}
          LoadedImageErrors={CaseLoadedImageErrors}
          setLoadedImageErrors={setCaseLoadedImageErrors}
        />

        <div className={styles.changeablePortfolioCase__wrapper}>
          <div className={styles.changeablePortfolioCase__wrapper__header}>
            <span className={styles.changeablePortfolioCase__wrapper__title}>
              Название проекта
            </span>

            <div
              onClick={() =>
                setExistedCases((prev) =>
                  prev.filter((caseItem) => caseItem.index !== Case.index),
                )
              }
            >
              <RedCrossSVG className={styles.changeablePortfolioCase__delete} />
            </div>
          </div>

          <Input
            type={"text"}
            placeholder={"Кейс 1..."}
            value={CaseNameInputValue}
            onChange={CaseNameInputOnChange}
            className={styles.changeablePortfolioCase__caseNameInput}
            refInput={CaseNameInputRef}
          />

          <label className={styles.changeablePortfolioCase__changeImg}>
            <ChangeImageSVG />

            <input
              className={styles.changeablePortfolioCase__changeImg__input}
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(e) =>
                LoadedImageOnLoad(
                  e,
                  setCaseLoadedImage,
                  setCaseLoadedImageErrors,
                )
              }
            />

            <span className={styles.changeablePortfolioCase__changeImg__title}>
              {CaseLoadedImage ? "Заменить" : "Добавить"} изображение
            </span>
          </label>
        </div>
      </div>
    );
  });
СhangeablePortfolioCase.displayName = "СhangeablePortfolioCase";
