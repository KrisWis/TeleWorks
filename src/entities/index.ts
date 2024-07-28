import { lazy } from "react";
import { Reviews__itemProps } from "./Global_entities/Reviews__item/model/Reviews__item_types";

/* ГЛОБАЛЬНЫЕ КОМПОНЕНТЫ */
export const ReviewsItem: React.LazyExoticComponent<
  React.FC<Reviews__itemProps>
> = lazy(() =>
  import("./Global_entities/Reviews__item/ui/Reviews__item").then(
    ({ Reviews__item }) => ({ default: Reviews__item })
  )
);

export * from "./Global_entities/ProjectItem/ui/ProjectItem";

/* СТРАНИЦА "ПРОФИЛЬ" */
export * from "./ProfilePage_entities/Profile/ui/Profile";
export * from "./ProfilePage_entities/Stats__item/ui/Stats__item";
export * from "./ProfilePage_entities/Similar_channels__item/ui/Similar_channels__item";

/* СТРАНИЦА "КАТАЛОГ" */
export * from "./CatalogPage_entities/CatalogItem/ui/CatalogItem";

/* СТРАНИЦА ПРОЕКТА */
export * from "./ProjectPage_entities/ProjectInfo_entities/AuthorCard/ui/AuthorCard";
export * from "./ProjectPage_entities/ProjectInfo_entities/ProjectTag/ui/ProjectTag";
