/**
 * Функция для получения URL прошлой страницы, на которой был пользователь
 * @param backAmount - количество переходов назад
 */

export const backOnURL = (backAmount: number): string => {
  const URLArrays: string[] = window.location.href.split("/");

  for (let index = 0; index < backAmount; index++) {
    URLArrays.pop();
  }

  const HomePageURL: string = URLArrays.join("/");

  return HomePageURL;
};
