import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password can not be empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,256})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const signUpSchema = yup.object({
  firstName: yup
    .string()
    .required("First name cannot be empty")
    .min(3, "Minimum 3 characters")
    .max(50, "Minimum 100 characters")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed in this field"),

  lastName: yup
    .string()
    .required("Last name cannot be empty")
    .min(3, "Minimum 3 characters")
    .max(50, "Minimum 100 characters")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed in this field"),

  userName: yup
    .string()
    .required("Username cannot be empty")
    .min(3, "Minimum 3 characters")
    .max(50, "Minimum 100 characters")
    .matches(
      /^[A-Za-z0-9\s]+$/,
      "alphabets and alphanumeric are allowed in this field"
    ),

  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password can not be empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,256})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password can not be empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,256})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
