import { Component } from "react";
import MyButton from "../../Common/MyButton";
import MyTextfield from "../../Common/MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, validationSchema } from "formik";
import { Grid } from "@mui/material";
import * as yup from "yup";
import axios from "axios";
import * as DataContainer from "../../../Static/DataContainer";
import { UserValid } from "./LoginFormValidation";
const API_POST_NEW_RULE = DataContainer.API_SIGN_UP;

const Login = () => {
  const navigate = useNavigate();

  const gotoSignUpPage = () => navigate("/signup");
  const gotoHomePage = () => navigate("/");
  const [usernamedata, setusernamedata] = React.useState("");
  const [passworddata, setpassworddata] = React.useState("");

  const titlestyles = {
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    height: "80px",
    fontSize: 60,
    borderRadius: "0px",
  };

  const onSubmit = (values) => {
    console.log("login");

    // axios
    //   .post(API_POST_NEW_RULE, {
    //     username: values.username,
    //     password: values.password,
    //   })
    //   .then((res) => localStorage.setItem("token", res.data.token));
    axios({
      method: "post",
      url: API_POST_NEW_RULE,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user_token"),
      },
      params: {
        username: values.username,
        password: values.password,
        confirmPassword:values.confirmPassword,
      },
    });
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: UserValid,
    onSubmit,
  });

  return (
    <Grid container xs={12} direction="row">
      <script src="../../../Static/DataContainer.js"></script>
      <Grid className="center" item xs={4} container direction="column">
        {/* <img style={{ height: "100vh", width: "120vh" }} src={background} /> */}
        <Grid item xs={2} />

        <Grid item xs={1}>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              height: "80px",
              fontSize: 50,
              borderRadius: "0px",
            }}
          >
            حساب کاربری ندارید؟
          </h1>
          <h2
            style={{
              color: "white",
              fontWeight: "normal",
              textAlign: "center",
              height: "80px",
              fontSize: 15,
              borderRadius: "0px",
            }}
          >
            ثبت نام کنید و از قابلیت های سرویس ما استفاده کنید ...
          </h2>
        </Grid>
        <Grid item xs={1}>
          <MyButton
            btntext="ثبت نام"
            variant="contained"
            onClick={() => {
              gotoSignUpPage();
            }}
            style={{
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
        </Grid>
      </Grid>
      <Grid item xs={8} container>
        <Grid
          item
          container
          className="logincontainer whiteshadow panelbackground"
          direction="column"
        >
          <Grid item xs={1}>
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
          <Grid item xs={2}>
            <h1 style={titlestyles}>ورود به حساب کاربری</h1>
          </Grid>

          <Grid item xs={4}>
            <form className="center" autoComplete="off" onSubmit={handleSubmit}>
              <MyTextfield
                id="username"
                text="نام کاربری"
                type="text"
                name="username"
                style={{ width: 300, backgroundColor: "#e0eef2", margin: 10 }}
                variant="outlined"
                required
                color="primary"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username ? true : false}
                value={values.username}
              ></MyTextfield>
              {errors.username && touched.username && (
                <p style={{ fontSize: 12, color: "red" }}>{errors.username}</p>
              )}
              <MyTextfield
                id="password"
                type="password"
                text="رمز ورود"
                name="password"
                style={{ width: 300, backgroundColor: "#e0eef2", margin: 10 }}
                minLength={8}
                required
                variant="outlined"
                color="primary"
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
                btntext="ورود"
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
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;