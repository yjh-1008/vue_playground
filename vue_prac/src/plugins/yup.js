import * as yup from "yup";
export const formObject = yup.object().shape({
  email: yup.string().required("필수값입니다."),
  password: yup.string(),
});
