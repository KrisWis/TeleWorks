export const FormatingNumber = (inputNumber: number): string =>
  new Intl.NumberFormat("ru-RU").format(inputNumber);
