// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type LoadingType = "loading";
export const LoadingConst: LoadingType = "loading";
