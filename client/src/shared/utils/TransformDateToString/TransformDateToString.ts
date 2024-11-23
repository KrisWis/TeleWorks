/**
 * Функция, которая преобразует получаемую дату в строку
 * @param date - передаваемая дата
 * @param withHours - опционально. Отображение строки с часами или без.
 */

export type stringDate =
  `${number | `0${number}`}.${number | `0${number}`}.${string}, ${number | `0${number}`}:${number | `0${number}`}`;

export type stringDateWithoutHours =
  `${number | `0${number}`}.${number | `0${number}`}.${string}`;

export const TransformDateToString = (
  date: Date,
  withHours: boolean = true,
): stringDate | stringDateWithoutHours => {
  if (withHours) {
    return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth()}.${String(date.getFullYear()).slice(2)}, ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
  }

  return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth()}.${String(date.getFullYear()).slice(2)}`;
};
