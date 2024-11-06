import { backOnURL } from "../../BackOnURL";

/**
 * Функция, которая совершает редирект по абсолютному пути
 * @param to - абсолютный URL страницы
 * @param backAmount - опционально. Количество переходов назад
 */

export const redirectToAbsolutePath = (
  to: string,
  backAmount: number = 1
): void => {
  const HomePageURL: string = backOnURL(backAmount);

  window.location.href = HomePageURL + to;
};
