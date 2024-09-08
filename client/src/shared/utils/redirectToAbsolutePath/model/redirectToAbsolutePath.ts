import { backOnURL } from "../../BackOnURL";

export const redirectToAbsolutePath = (
  to: string,
  backAmount: number = 1
): void => {
  const HomePageURL: string = backOnURL(backAmount);

  window.location.href = HomePageURL + to;
};
