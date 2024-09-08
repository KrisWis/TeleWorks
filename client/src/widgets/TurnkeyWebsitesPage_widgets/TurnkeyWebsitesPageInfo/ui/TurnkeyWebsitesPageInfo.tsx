import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import styles from "./TurnkeyWebsitesPageInfo.module.scss";
import { memo } from "react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import ThinkAboutBusinessSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/ThinkAboutBusinessSVG.svg?react";
import AppreciateYourTimeSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/AppreciateYourTimeSVG.svg?react";
import TurnkeyCustomizationSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/TurnkeyCustomizationSVG.svg?react";
import PersonalManagerSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/PersonalManagerSVG.svg?react";
import PersonalManagerHeaderCircleSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/PersonalManagerHeaderCircleSVG.svg?react";

export const TurnkeyWebsitesPageInfo: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.TurnkeyWebsitesPageInfo}>
      <div className={styles.TurnkeyWebsitesPageInfo__wrapper}>
        <div className={styles.TurnkeyWebsitesPageInfo__descWrapper}>
          <h1 className={styles.TurnkeyWebsitesPageInfo__caption}>
            Разработка сайтов под ключ
          </h1>

          <p
            className={`TurnkeyWebsitesPage__desc ${styles.TurnkeyWebsitesPageInfo__desc}`}
          >
            Наши эксперты создадут для вас сайт под любые задачи. Мы возьмем на
            себя все этапы работы, свяжитесь с нашим менеджером чтобы обсудить
            детали.
          </p>

          <div className={styles.TurnkeyWebsitesPageInfo__buttons}>
            <Button
              className={styles.TurnkeyWebsitesPageInfo__button}
              type={ButtonTypes.RED}
              text="Заказать сайт"
            />

            <Button
              className={styles.TurnkeyWebsitesPageInfo__button}
              type={ButtonTypes.BLACK}
              text="Подробнее"
            />
          </div>
        </div>

        <div className={styles.TurnkeyWebsitesPageInfo__imgWrapper}>
          <img
            className={styles.TurnkeyWebsitesPageInfo__imgPrimary}
            src={`${URL_PART}/TurnkeyWebsitesPage/images/MainLaptop_img.png`}
            alt="Изображение ноутбука"
          />

          <img
            className={styles.TurnkeyWebsitesPageInfo__imgSecondary}
            src={`${URL_PART}/TurnkeyWebsitesPage/images/MainLaptop_secondary_img.png`}
            alt="Изображение кейса с камерой"
          />
        </div>
      </div>

      <div className={styles.TurnkeyWebsitesPageInfo__items}>
        <div
          className={`${styles.TurnkeyWebsitesPageInfo__item} Page__SirineWrapper`}
        >
          <div className={styles.TurnkeyWebsitesPageInfo__item__info}>
            <h5 className="TurnkeyWebsitesPage__subcaption">
              Думаем о бизнесе
            </h5>

            <p className="TurnkeyWebsitesPage__desc">
              Разработаем сайт любой сложности, который приносит новых клиентов
              и заявки.
            </p>
          </div>

          <ThinkAboutBusinessSVG
            className={styles.TurnkeyWebsitesPageInfo__item__svg}
          />
        </div>

        <div
          className={`${styles.TurnkeyWebsitesPageInfo__item} Page__SirineWrapper`}
        >
          <div className={styles.TurnkeyWebsitesPageInfo__item__info}>
            <h5 className="TurnkeyWebsitesPage__subcaption">
              Ценим ваше время
            </h5>

            <p className="TurnkeyWebsitesPage__desc">
              Пока вы развиваете бизнес, создадим сайт, который легко обновлять
              и поддерживать
            </p>
          </div>

          <AppreciateYourTimeSVG
            className={styles.TurnkeyWebsitesPageInfo__item__svg}
          />
        </div>

        <div
          className={`${styles.TurnkeyWebsitesPageInfo__item} Page__SirineWrapper`}
        >
          <div className={styles.TurnkeyWebsitesPageInfo__item__info}>
            <h5 className="TurnkeyWebsitesPage__subcaption">
              Настроим под ключ
            </h5>

            <p className="TurnkeyWebsitesPage__desc">
              Передадим вам полностью настроенный и оптимизированный ресурс
            </p>
          </div>

          <TurnkeyCustomizationSVG
            className={styles.TurnkeyWebsitesPageInfo__item__svg}
          />
        </div>

        <div
          className={`${styles.TurnkeyWebsitesPageInfo__item__large} Page__SirineWrapper`}
        >
          <div className={styles.TurnkeyWebsitesPageInfo__item__large__info}>
            <div
              className={
                styles.TurnkeyWebsitesPageInfo__item__large__info__wrapper
              }
            >
              <h5
                className={
                  styles.TurnkeyWebsitesPageInfo__item__large__info__caption
                }
              >
                Персональный менеджер на всех этапах работы
              </h5>

              <p
                className={
                  styles.TurnkeyWebsitesPageInfo__item__large__info__desc
                }
              >
                Проведет вас через весь процесс разработки, от определения
                специфики до сдачи готового проекта
              </p>
            </div>

            <PersonalManagerSVG
              className={`${styles.TurnkeyWebsitesPageInfo__item__svg} ${styles.TurnkeyWebsitesPageInfo__item__large__svg}`}
            />
          </div>

          <div
            className={styles.TurnkeyWebsitesPageInfo__item__large__imgWrapper}
          >
            <div
              className={
                styles.TurnkeyWebsitesPageInfo__item__large__imgPrimaryWrapper
              }
            >
              <div
                className={
                  styles.TurnkeyWebsitesPageInfo__item__large__imgPrimaryHeader
                }
              >
                <PersonalManagerHeaderCircleSVG />
                <PersonalManagerHeaderCircleSVG />
                <PersonalManagerHeaderCircleSVG />
              </div>

              <img
                className={
                  styles.TurnkeyWebsitesPageInfo__item__large__imgPrimary
                }
                src={`${URL_PART}/TurnkeyWebsitesPage/images/Main_manager_img.png`}
                alt="Изображение кейса с камерой"
              />
            </div>

            <img
              className={
                styles.TurnkeyWebsitesPageInfo__item__large__imgSecondary
              }
              src={`${URL_PART}/TurnkeyWebsitesPage/images/Main_manager_img.png`}
              alt="Изображение кейса с камерой"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
