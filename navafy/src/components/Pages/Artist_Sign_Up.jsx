import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/b2.jfif";
import { useFormik, validateYupSchema } from "formik";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import * as yup from "yup";
import axios from "axios";

const signupUrl = "https://reqres.in/api/login";

const Artist_Sign_up = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

  const UserValid = yup.object().shape({
    name: yup
      .string()
      .min(3, "نام کاربری حداقل باید شامل سه حرف باشد")
      .required("لطفا نام کاربری خود را وارد نمایید"),
    email: yup
      .string()
      .email("لطفا ایمیل خود را درست وارد کنید")
      .required("لطفا ایمیل خود را وارد کنید"),
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
  const navigate = useNavigate();

  const [isDataValid, setIsDataValid] = useState(false);

  const gotoLoginPage = () => navigate("/login");
  const gotoHomePage = () => navigate("/");
  const gotoSignUpPage = () => navigate("/signup");

  const titlestyles = {
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    height: "80px",
    fontSize: 60,
    borderRadius: "0px",
  };

  const onSubmit = (values, actions) => {
    console.log("sign up");
    axios
      .post(signupUrl, {
        name: values.name,
        password: values.password,
        email: values.email,
      })
      .then((res) => localStorage.setItem("token", res.data.token));
  };
  const {
    values,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: UserValid,
    onSubmit,
  });

  return (
    <Grid container xs={12} direction="row">
      <Grid className="center" item xs={2} container direction="column"></Grid>
      <Grid className="center" item xs={8} container direction="column">
        <Grid
          item
          container
          className="logincontainer shadow panelbackground"
          direction="column"
        >
          <Grid item xs={1} />
          <Grid item xs={2}>
            <h1 style={titlestyles}>ساخت حساب آرتیست</h1>
          </Grid>
          <Divider sx={{ backgroundColor: "#d0d0d0" }} />
          <Grid item xs={4}>
            <form className="center" onSubmit={handleSubmit}>
              <MyTextfield
                id="email"
                type="text"
                text="ایمیل"
                name="email"
                required
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email ? true : false}
                value={values.email}
              ></MyTextfield>
              {errors.email && touched.email && (
                <p style={{ fontSize: 12, color: "red" }}>{errors.email}</p>
              )}
              <MyTextfield
                id="name"
                text="نام کاربری"
                type="text"
                name="name"
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name ? true : false}
                value={values.name}
              ></MyTextfield>
              {errors.name && touched.name && (
                <p style={{ fontSize: 12, color: "red" }}>{errors.name}</p>
              )}
              <MyTextfield
                id="password"
                type="password"
                text="رمز ورود"
                name="password"
                minLength={8}
                required
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password ? true : false}
                value={values.password}
              ></MyTextfield>
              {errors.password && touched.password && (
                <p style={{ fontSize: 12, color: "red" }}>{errors.password}</p>
              )}
              <MyTextfield
                id="confirmPassword"
                type="password"
                text="تکرار رمز"
                name="confirmPassword"
                minLength={8}
                required
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
                value={values.confirmPassword}
              ></MyTextfield>
              {errors.confirmPassword && touched.confirmPassword && (
                <p style={{ fontSize: 12, color: "red" }}>
                  {errors.confirmPassword}
                </p>
              )}

              <MyButton
                btntext="ثبت نام"
                disabled={isDataValid}
                type="submit"
                variant="contained"
                style={{
                  margin: 10,
                  backgroundColor: "#00cf2d",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Vazirmatn",
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderRadius: 15,
                }}
              />
              <MyButton
                btntext="بازگشت"
                disabled={isDataValid}
                onClick={() => {
                  gotoSignUpPage();
                }}
                variant="contained"
                style={{
                  margin: 10,
                  backgroundColor: "#00cf2d",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Vazirmatn",
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderRadius: 15,
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="center" item xs={2} container direction="column">
        <h1
          style={{
            color: "#00cf2d",
            textAlign: "right",
            height: "80px",
            fontSize: 20,
            borderRadius: "0px",
            margin: 2,
          }}
        >
          نوافای
        </h1>
      </Grid>
    </Grid>
  );
};

export default Artist_Sign_up;
