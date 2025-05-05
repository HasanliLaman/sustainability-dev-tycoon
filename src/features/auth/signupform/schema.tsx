import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("This field is required."),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 charachters long.")
    .matches(
      /^(?=.*[!@#$%^&*.?])(?=.{8,})/,
      "Password should contain at least one speacial character."
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Password and confirm password should be the same."
  ),
});
