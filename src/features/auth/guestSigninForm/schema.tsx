import * as Yup from "yup";

export const guestSigninSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
});
