/**
 * Функция для проверки того, что URL не относится к странице и является внешним
 * @param url - сам передаваемый url
 */

export const URLIsAbsolute = (url: string): boolean => {
  return url.startsWith("http");
};
