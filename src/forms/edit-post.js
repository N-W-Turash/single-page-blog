import * as Yup from "yup";

const titleSchema = Yup.string()
  .required("Title is required");

const bodySchema = Yup.string()
  .required("Body is required");

  export const validationSchema = Yup.object({
    title: titleSchema,
    body: bodySchema,
  });
  