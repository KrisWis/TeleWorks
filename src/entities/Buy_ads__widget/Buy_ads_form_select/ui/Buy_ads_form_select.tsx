import styles from './Buy_ads_form_select.module.scss';
import { useState } from 'react';
import Select from 'react-select';
import { Buy_ads_form_select__Props } from '../model/Buy_ads_form_select__types';

export const Buy_ads_form_select: React.FC<Buy_ads_form_select__Props> = ({ selectedOptions, DropdownIndicator }): React.JSX.Element => {

    const [FormSelectedOption, setFormSelectedOption] = useState(null);

    const formSelectCustomStyles = {

        control: () => ({
            display: "flex",
            width: "100%",
            height: "100%"
        }),

        singleValue: () => ({
            fontFamily: "var(--second-family)",
            fontWeight: 500,
            fontSize: "32px",
            letterSpacing: "-0.04em",
            color: "#000",
            opacity: 0.4,
            gridArea: "1 / 1 / 2 / 3",
        }),

        placeholder: () => ({
            fontFamily: "var(--second-family)",
            fontWeight: 500,
            fontSize: "32px",
            letterSpacing: "-0.04em",
            color: "#000",
            opacity: 0.4,
            gridArea: "1 / 1 / 2 / 3",
        }),

        valueContainer: () => ({
            padding: "2px 15px",
            display: "grid",
            alignItems: "center",
            flex: 1
        }),

        indicatorSeparator: () => ({}),
    }

    return (
        <Select
            className={styles.buy_ads__form__category__form}
            defaultValue={FormSelectedOption}
            onChange={() => { setFormSelectedOption }}
            options={selectedOptions}
            styles={formSelectCustomStyles}
            placeholder={selectedOptions[0].label}
            components={{ DropdownIndicator }}
        />
    )
}
