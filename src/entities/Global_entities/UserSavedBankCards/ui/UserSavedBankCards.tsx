import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { userSavedBankCard } from "../model/UserSavedBankCards_data";
import styles from "./UserSavedBankCards.module.scss";
import { memo } from "react";
import {
  BankCardsTypes,
  UserSavedBankCardsProps,
} from "../model/UserSavedBankCards_types";

export const UserSavedBankCards: React.FC<UserSavedBankCardsProps> = memo(
  ({ setSelectedCard }): React.JSX.Element => {
    return (
      <div className={`Page__BoxShadowWrapper ${styles.userSavedBankCards}`}>
        <h6 className="CreateOrderPage__caption">Сохраненные карты</h6>

        <div className={styles.userSavedBankCards__items}>
          {Object.keys(userSavedBankCard).map((savedCard) => (
            <div key={savedCard} className={styles.userSavedBankCards__item}>
              <div className={styles.userSavedBankCards__item__radioWrapper}>
                <input
                  className={styles.userSavedBankCards__item__radio}
                  type="radio"
                  name="savedCard"
                  value={savedCard}
                  onChange={() =>
                    setSelectedCard(
                      userSavedBankCard[savedCard as unknown as BankCardsTypes]!
                    )
                  }
                />

                <label
                  className={styles.userSavedBankCards__item__label}
                  htmlFor={savedCard}
                ></label>
              </div>

              <img
                className={styles.userSavedBankCards__item__img}
                src={`${URL_PART}/BankCardsImages/${savedCard}.png`}
                alt={savedCard}
              />

              <span className="CreateOrderPage__caption">
                {userSavedBankCard[
                  savedCard as unknown as BankCardsTypes
                ]!.cardNumber.substring(0, 14).replace(/\S/g, "*")}

                {userSavedBankCard[
                  savedCard as unknown as BankCardsTypes
                ]!.cardNumber.substring(14, 19)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
