import { AppRoutes } from "../const/app";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type LoadingType = "loading";
export const LoadingConst: LoadingType = "loading";

export type Hours =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

export type weekDaysType = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";
export const WeekDays: weekDaysType[] = [
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Вс",
];

export interface IndexedDBStore {
  route: AppRoutes;
  name: string;
}

export interface LoadedFile {
  FileData: string | Blob;
  FileName: string;
  FileSize: number;
  FileType: string;
}
export type authorRank =
  | "низкий рейтинг"
  | "средний рейтинг"
  | "высокий рейтинг";
