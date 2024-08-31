export const isNumber = (num: string) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(num);
};
