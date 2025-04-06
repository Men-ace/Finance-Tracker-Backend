//validate:
// - At least 6 characters required
//- 1 UPPERCASE
//- 1 lowercase
//- 1 digit
// - special character !@#$%^&*()<>?{}|
// - Password do not match

export const validator = (password = "", confirmPassword = "") => {
  const error = [];

  password.length < 6 && error.push("At least 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("Password Must contain at least One UPPERCASE LETTER");

  !/[a-z]/.test(password) &&
    error.push("Password Must contain at least One lowercase letter");

  !/[0-9]/.test(password) &&
    error.push("Password Must contain at least One number");

  !/[!@#$%^&*()<>?{}|]/.test(password) &&
    error.push(
      "Password Must contain at one of special character !@#$%^&*()<>?{}|"
    );

  password !== confirmPassword && error.push("Password do not match");
  return error;
};
