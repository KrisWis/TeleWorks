
export interface Buy_ads_form_select_Option {
    value: string,
    label: string
}

export interface Buy_ads_form_select__Props {
    selectedOptions: Buy_ads_form_select_Option[],
    DropdownIndicator: () => JSX.Element,
}