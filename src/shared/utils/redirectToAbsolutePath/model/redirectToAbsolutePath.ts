import { getHomePageURL } from "../../getHomePageURL";

export const redirectToAbsolutePath = (to: string): void => {
  const HomePageURL: string = getHomePageURL();

  window.location.href = HomePageURL + to;
};
