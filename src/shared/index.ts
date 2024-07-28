/* UI KIT КОМПОНЕНТЫ */
export * from "./ui-kit/Button/ui/Button";
export * from "./ui-kit/Select/ui/Select";
export * from "./ui-kit/CustomItemBadge/ui/CustomItemBadge";
export * from "./ui-kit/ShowFullImage/ui/ShowFullImage";
export * from "./ui-kit/Modal/ui/Modal";
export * from "./ui-kit/ReviewsSelect/ui/ReviewsSelect";

/* КАСТОМНЫЕ ХУКИ */
export { UseLocalStorage } from "@/shared/utils/hooks/UseLocalStorage/UseLocalStorage";

/* ВСЁ ОСТАЛЬНОЕ */
export { default as selectStyles } from "@/shared/ui-kit/Select/ui/Select.module.scss";
export { SelectThemesEnum } from "@/shared/ui-kit/Select/model/Select_types";
export { valueContainerPaddingEnum } from "@/shared/ui-kit/Select/model/Select_types";
export { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";
export { getHomePageURL } from "@/shared/utils/getHomePageURL/getHomePageURL";
export { renderWithRouter } from "@/shared/utils/renderWithRouter/renderWithRouter";
export { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath/redirectToAbsolutePath";
export { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage/UseLocalStorage_types";
export type { UseLocalStorageCustom } from "@/shared/utils/hooks/UseLocalStorage/UseLocalStorage_types";
