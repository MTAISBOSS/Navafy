import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

export const UserValid = yup.object().shape({
  oldpassword: yup
    .string()
    .min(8, "رمز عبور باید حداقل شامل 8 حرف باشد")
    .matches(passwordRules, {
      message: "رمز عبور باید شامل یک حرف و یک عدد باشد",
    })
    .required("لطفا رمز عبور خود را وارد نمایید"),
  newpassword: yup
    .string()
    .min(8, "رمز عبور باید حداقل شامل 8 حرف باشد")
    .matches(passwordRules, {
      message: "رمز عبور باید شامل یک حرف و یک عدد باشد",
    })
    .required("لطفا رمز عبور خود را وارد نمایید"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), null], "لطفا رمز را درست تایید کنید")
    .required("لطفا تکرار رمز عبور خود را وارد نمایید"),
});
