export interface CatalogFilterSelect_Option {
  value: string;
  label: string;
}

export interface CatalogFilterSelect__Props {
  selectedOptions: CatalogFilterSelect_Option[];
  themes?: boolean;
}
