export const AuthModalCanLogin = (
  EmailInput: string,
  PasswordInput: string
): boolean => {
  if (!EmailInput || !PasswordInput) {
    return false;
  }

  return true;
};
