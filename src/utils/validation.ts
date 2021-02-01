export type Validation = {
  isValid: boolean;
  message?: string;
};

const validate = (inputType: string, value: string): Validation => {
  let message = "";

  switch (inputType) {
    case "email":
      return {
        isValid: true,
        message: "",
      };
    case "password":
      const pattern = /^.{8,}$/;
      let passwordIsValid = pattern.test(value);

      if (!passwordIsValid) {
        message = "Password must have at least 8 characters";
      }

      return {
        isValid: passwordIsValid,
        message,
      };
    default:
      return {
        isValid: true,
        message: "",
      };
  }
};

export default validate;
