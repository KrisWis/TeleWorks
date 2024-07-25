export const getHomePageURL = (): string => {
  const URLArrays: string[] = window.location.href.split("/");

  URLArrays.pop();

  const HomePageURL: string = URLArrays.join("/");

  return HomePageURL;
};
