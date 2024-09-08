import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import styles from "./TurnkeyWebsitesPageHowWeWorks.module.scss";
import { memo } from "react";
import HowWeWorksGraphicBorderSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/HowWeWorksGraphicBorderSVG.svg?react";

export const TurnkeyWebsitesPageHowWeWorks: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <div className={styles.TurnkeyWebsitesPageHowWeWorks}>
        <h2 className="TurnkeyWebsitesPage__caption">Как мы работаем</h2>

        <div className={styles.TurnkeyWebsitesPageHowWeWorks__wrapper}>
          <div className={styles.TurnkeyWebsitesPageHowWeWorks__info}>
            <div className={styles.TurnkeyWebsitesPageHowWeWorks__info__item}>
              <h5 className="TurnkeyWebsitesPage__subcaption">Сбор данных</h5>

              <p className="TurnkeyWebsitesPage__desc">
                Изучаем направление компании, делаем анализ конкурентов и
                целевой аудитории.
              </p>
            </div>

            <div className={styles.TurnkeyWebsitesPageHowWeWorks__info__item}>
              <h5 className="TurnkeyWebsitesPage__subcaption">
                Дизайн и проектирование
              </h5>

              <p className="TurnkeyWebsitesPage__desc">
                Создаем адаптивный дизайн и контент с учетом требований
                поисковых систем.
              </p>
            </div>

            <div className={styles.TurnkeyWebsitesPageHowWeWorks__info__item}>
              <h5 className="TurnkeyWebsitesPage__subcaption">
                Настройка сайта
              </h5>

              <p className="TurnkeyWebsitesPage__desc">
                Подключаем веб-аналитику, SEO, SMM, контекстную рекламу и все
                необходимые инструменты
              </p>
            </div>
          </div>

          <div className={styles.TurnkeyWebsitesPageHowWeWorks__blocks}>
            <div
              className={`${styles.TurnkeyWebsitesPageHowWeWorks__block} ${styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject} Page__BoxShadowWrapper`}
            >
              <div
                className={
                  styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__header
                }
              >
                <h6
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__header__caption
                  }
                >
                  Ваш проект
                </h6>
              </div>

              <div
                className={
                  styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__items
                }
              >
                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__block
                    }
                  ></span>

                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__title
                    }
                  >
                    Бриф
                  </span>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__block
                    }
                  ></span>

                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__title
                    }
                  >
                    Анализ ниши и ауд
                  </span>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__block
                    }
                  ></span>

                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__title
                    }
                  >
                    SEO оптимизация
                  </span>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__block
                    }
                  ></span>

                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__title
                    }
                  >
                    Разработка
                  </span>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__block
                    }
                  ></span>

                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockYourProject__item__title
                    }
                  >
                    Презентация проекта
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${styles.TurnkeyWebsitesPageHowWeWorks__block} ${styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests} Page__BoxShadowWrapper`}
            >
              <div
                className={
                  styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__header
                }
              >
                <h5
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__header__caption
                  }
                >
                  Новые заявки
                </h5>

                <span
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__amount
                  }
                >
                  +1200
                </span>
              </div>

              <div
                className={
                  styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic
                }
              >
                <HowWeWorksGraphicBorderSVG
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__border
                  }
                />

                <img
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__img
                  }
                  src={`${URL_PART}/TurnkeyWebsitesPage/images/HowWeWorksGraphic_img.png`}
                  alt="График, растущий вверх"
                />

                <span
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__dashed
                  }
                ></span>

                <span
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__dashed
                  }
                ></span>

                <span
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__dashed
                  }
                ></span>

                <span
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__graphic__dashed
                  }
                ></span>
              </div>

              <div
                className={
                  styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__items
                }
              >
                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__date
                    }
                  >
                    23.10.2024 16:35
                  </span>

                  <div
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__wrapper
                    }
                  >
                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__price
                      }
                    >
                      21000₽
                    </span>

                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__percents
                      }
                    >
                      +100%
                    </span>
                  </div>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__date
                    }
                  >
                    23.10.2024 16:35
                  </span>

                  <div
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__wrapper
                    }
                  >
                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__price
                      }
                    >
                      21000₽
                    </span>

                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__percents
                      }
                    >
                      +120%
                    </span>
                  </div>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__date
                    }
                  >
                    23.10.2024 16:35
                  </span>

                  <div
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__wrapper
                    }
                  >
                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__price
                      }
                    >
                      21000₽
                    </span>

                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__percents
                      }
                    >
                      +120%
                    </span>
                  </div>
                </div>

                <div
                  className={
                    styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item
                  }
                >
                  <span
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__date
                    }
                  >
                    23.10.2024 16:35
                  </span>

                  <div
                    className={
                      styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__wrapper
                    }
                  >
                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__price
                      }
                    >
                      21000₽
                    </span>

                    <span
                      className={
                        styles.TurnkeyWebsitesPageHowWeWorks__blockNewRequests__item__percents
                      }
                    >
                      +120%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
