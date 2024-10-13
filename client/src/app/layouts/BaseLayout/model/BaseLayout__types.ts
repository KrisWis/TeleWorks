import { AppRoutes } from "@/app";

export type telegramChannelsCategories =
  | "Интерьер и строительство"
  | "Новости и СМИ";

export interface IndexedDBStore {
  route: AppRoutes;
  name: string;
}
