export const RegModalCanReg = (
  EmailInput: string,
  PasswordInput: string,
  TelInput: string,
  AllCheckBoxesIsSelected: boolean
): boolean => {
  if (!EmailInput || !PasswordInput || !TelInput || !AllCheckBoxesIsSelected) {
    return false;
  }

  return true;
};
