export const PasswordRecoveryModalCanRecover = (
  EmailInput: string,
): boolean => {
  if (!EmailInput) {
    return false;
  }

  return true;
};
