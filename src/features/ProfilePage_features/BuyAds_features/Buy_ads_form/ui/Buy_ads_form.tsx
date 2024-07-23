import styles from "./Buy_ads_form.module.scss";
import {
  buy_ads_form_amount_selectOptions,
  buy_ads_form_format_selectOptions,
} from "../model/Buy_ads_form_select__data";
import { memo } from "react";
import { Select, selectStyles } from "@/shared";
import { SelectTextStyles } from "@/shared/ui-kit/Select/model/Select_types";

// eslint-disable-next-line react-refresh/only-export-components
const DropdownIndicator = (): JSX.Element => {
  return (
    <svg
      className={`${selectStyles.Select__svg} ${styles.buy_ads__form__category__form__svg}`}
      width="14"
      height="23"
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M12.6329 12.5607C13.2187 11.9749 13.2187 11.0251 12.6329 10.4393L3.08698 0.893398C2.5012 0.307611 1.55145 0.307611 0.965664 0.893398C0.379877 1.47919 0.379877 2.42893 0.965664 3.01472L9.45095 11.5L0.965664 19.9853C0.379877 20.5711 0.379877 21.5208 0.965664 22.1066C1.55145 22.6924 2.5012 22.6924 3.08698 22.1066L12.6329 12.5607ZM10.5723 13H11.5723V10H10.5723V13Z"
        fill="#4266C6"
      />
    </svg>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const TextStyles: SelectTextStyles = {
  fontFamily: "var(--second-family)",
  fontWeight: 500,
  fontSize: "32px",
  letterSpacing: "-0.04em",
  color: "#000",
  opacity: 0.4,
};

export const Buy_ads_form: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.buy_ads__form}>
      <h2 className={styles.buy_ads__form__caption}>
        Купить рекламу в этом канале
      </h2>

      <div className={styles.buy_ads__form__category}>
        <span className={styles.buy_ads__form__category__span}>Формат:</span>
        <Select
          TextStyles={TextStyles}
          CustomDropdownIndicator={DropdownIndicator}
          className={styles.buy_ads__form__category__form}
          selectedOptions={buy_ads_form_format_selectOptions}
        />
        <span className={styles.buy_ads__form__category__desc}>
          1 час в топе / 24 часа в ленте
        </span>
      </div>

      <div className={styles.buy_ads__form__category}>
        <span className={styles.buy_ads__form__category__span}>
          Количество:
        </span>
        <Select
          TextStyles={TextStyles}
          CustomDropdownIndicator={DropdownIndicator}
          className={styles.buy_ads__form__category__form}
          selectedOptions={buy_ads_form_amount_selectOptions}
        />
      </div>

      <div className={styles.buy_ads__form__price}>
        <span className={styles.buy_ads__form__price__span}>
          Cтоимость публикации :
        </span>
        <span className={styles.buy_ads__form__price__text}>120 048.94₽</span>
      </div>

      <button className={styles.buy_ads__form__toCart}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V1.87698H3.89648L6.56067 17.8895V20.8009C5.47853 21.1945 4.69299 22.2305 4.69299 23.4413C4.69299 24.9835 5.95963 26.2502 7.50183 26.2502C9.04403 26.2502 10.3125 24.9835 10.3125 23.4413C10.3125 23.1107 10.2434 22.7962 10.1367 22.5001H18.9313C18.8234 22.7971 18.7482 23.1097 18.7482 23.4413C18.7482 24.9835 20.0221 26.2502 21.5643 26.2502C23.1065 26.2502 24.375 24.9835 24.375 23.4413C24.375 23.1104 24.3043 22.7964 24.1974 22.5001H26.25V20.6234H8.43747V18.7483H21.5643C21.9656 18.7475 22.322 18.4913 22.4505 18.111L26.2024 6.85932C26.4028 6.25409 25.9537 5.62962 25.3161 5.62703H16.875V7.50185H24.0088L20.8869 16.8733H8.30019L6.73463 7.50185H13.125V5.62703H6.42152L5.61219 0.782019C5.53651 0.332125 5.14922 0.00201968 4.693 0H0ZM14.0607 5.62703V11.1585C13.6345 10.5613 13.2008 9.96981 12.7661 9.37882L11.2518 10.4718C12.2421 11.8554 13.2428 13.2316 14.2401 14.6101C14.6146 15.1245 15.3818 15.1245 15.7562 14.6101C16.755 13.2304 17.7509 11.8486 18.7537 10.4718L17.2302 9.37882C16.7978 9.97573 16.3669 10.5737 15.9357 11.1715V5.62703H14.0607ZM7.50183 22.5001C8.0307 22.5001 8.4375 22.9124 8.4375 23.4413C8.4375 23.9702 8.0307 24.3752 7.50183 24.3752C6.97297 24.3752 6.56067 23.9702 6.56067 23.4413C6.56067 22.9124 6.97297 22.5001 7.50183 22.5001ZM21.5643 22.5001C22.0932 22.5001 22.5 22.9124 22.5 23.4413C22.5 23.9702 22.0932 24.3752 21.5643 24.3752C21.0355 24.3752 20.6232 23.9702 20.6232 23.4413C20.6232 22.9124 21.0355 22.5001 21.5643 22.5001Z"
            fill="white"
          />
        </svg>

        <span className={styles.buy_ads__form__toCart_text}>В корзину</span>
      </button>
    </div>
  );
});
