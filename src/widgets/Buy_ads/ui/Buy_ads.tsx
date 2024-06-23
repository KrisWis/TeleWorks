import { buy_ads_form_amount_selectOptions, buy_ads_form_format_selectOptions } from '../model/Buy_ads_form_select__data';
import styles from './Buy_ads.module.scss';
import { Buy_ads_form_select } from '@/entities';

export const Buy_ads: React.FC = (): React.JSX.Element => {

    const buy_ads_form_format_DropdownIndicator = (): JSX.Element => {
        return (
            <svg className={styles.buy_ads__form__category__form__svg} width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M12.6329 12.5607C13.2187 11.9749 13.2187 11.0251 12.6329 10.4393L3.08698 0.893398C2.5012 0.307611 1.55145 0.307611 0.965664 0.893398C0.379877 1.47919 0.379877 2.42893 0.965664 3.01472L9.45095 11.5L0.965664 19.9853C0.379877 20.5711 0.379877 21.5208 0.965664 22.1066C1.55145 22.6924 2.5012 22.6924 3.08698 22.1066L12.6329 12.5607ZM10.5723 13H11.5723V10H10.5723V13Z" fill="#4266C6" />
            </svg>
        );
    };

    const buy_ads_form_amount_DropdownIndicator = (): JSX.Element => {
        return (
            <svg className={styles.buy_ads__form__category__form__svg} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M10.0116 13.0607C10.5974 13.6464 11.5471 13.6464 12.1329 13.0607L21.6789 3.51472C22.2647 2.92893 22.2647 1.97919 21.6789 1.3934C21.0931 0.807611 20.1433 0.807611 19.5575 1.3934L11.0723 9.87868L2.58698 1.3934C2.0012 0.807611 1.05145 0.807611 0.465664 1.3934C-0.120123 1.97919 -0.120123 2.92893 0.465664 3.51472L10.0116 13.0607ZM9.57227 11V12H12.5723V11H9.57227Z" fill="#4266C6" />
            </svg>
        );
    };

    return (
        <section className={styles.buy_ads}>

            <div className={styles.buy_ads__form}>

                <h2 className={styles.buy_ads__form__caption}>Купить рекламу в этом канале</h2>

                <div className={styles.buy_ads__form__category}>

                    <span className={styles.buy_ads__form__category__span}>Формат:</span>
                    <Buy_ads_form_select DropdownIndicator={buy_ads_form_format_DropdownIndicator} selectedOptions={buy_ads_form_format_selectOptions} />
                    <span className={styles.buy_ads__form__category__desc}>1 час в топе / 24 часа в ленте</span>

                </div>

                <div className={styles.buy_ads__form__category}>

                    <span className={styles.buy_ads__form__category__span}>Количество:</span>
                    <Buy_ads_form_select DropdownIndicator={buy_ads_form_amount_DropdownIndicator} selectedOptions={buy_ads_form_amount_selectOptions} />

                </div>

            </div>

        </section>
    )
}
