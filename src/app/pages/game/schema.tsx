import * as Yup from "yup";

export const gameSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  domain: Yup.string().required("This field is required."),
  attributes: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least 1 attribute.")
    .max(5, "You can select up to 5 attributes.")
    .required("This field is required."),
  patterns: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least 1 pattern.")
    .max(5, "You can select up to 5 patterns.")
    .required("This field is required."),
  dimensionValues: Yup.object()
    .test(
      "all-values-between-1-10",
      "All dimension values must be between 1 and 10.",
      (obj: Record<string, number>) =>
        obj &&
        [
          "individual",
          "social",
          "technical",
          "economic",
          "environmental",
        ].every(
          (key) =>
            typeof obj[key] === "number" && obj[key] >= 1 && obj[key] <= 10
        )
    )
    .required("Values are required."),
});
