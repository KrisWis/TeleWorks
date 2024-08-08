export const CVCCodeIsValidCheck = (CVCCode: string): boolean => {
  if (!CVCCode.match(/^[0-9]{3,4}$/)) {
    return false;
  }

  return true;
};
