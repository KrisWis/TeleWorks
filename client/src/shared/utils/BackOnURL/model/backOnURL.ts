export const backOnURL = (backAmount: number): string => {
  const URLArrays: string[] = window.location.href.split("/");

  for (let index = 0; index < backAmount; index++) {
    URLArrays.pop();
  }

  const HomePageURL: string = URLArrays.join("/");

  return HomePageURL;
};
