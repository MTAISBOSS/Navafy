import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

export const UserValid = yup.object().shape({
  name: yup
    .string()
    .min(3, "نام کاربری حداقل باید شامل سه حرف باشد")
    .required("لطفا نام کاربری خود را وارد نمایید"),
  email: yup.string().email("لطفا ایمیل خود را درست وارد کنید").required(),
  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل شامل 8 حرف باشد")
    .matches(passwordRules, {
      message: "رمز عبور باید شامل یک حرف و یک عدد باشد",
    })
    .required("لطفا رمز عبور خود را وارد نمایید"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "لطفا رمز را درست تایید کنید")
    .required(),
});
