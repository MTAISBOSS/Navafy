import * as yup from "yup";

export const UserValid = yup.object().shape({
  username: yup.string().required("لطفا نام کاربری خود را وارد نمایید"),
  password: yup.string().required("لطفا رمز عبور خود را وارد نمایید"),
});
