export type stringDate =
  `${number | `0${number}`}.${number | `0${number}`}.${number} ${number | `0${number}`}:${number | `0${number}`}`;

export type stringDateWithoutHours =
  `${number | `0${number}`}.${number | `0${number}`}.${number}`;

export const TransformDateToString = (
  date: Date,
  withHours: boolean = true
): stringDate | stringDateWithoutHours => {
  if (withHours) {
    return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth()}.${date.getFullYear()} ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
  }

  return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth()}.${date.getFullYear()}`;
};
