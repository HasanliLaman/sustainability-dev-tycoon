import * as Yup from "yup";

export const signinSchema = Yup.object().shape({
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
});
