export const ExpirationDateIsValidCheck = (ExpirationDate: string): boolean => {
  if (!ExpirationDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
    return false;
  }

  return true;
};
