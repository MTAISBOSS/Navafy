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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as DataContainer from "../../../Static/DataContainer";
import { UserValid } from "./LoginFormValidation";

const loginUrl = DataContainer.API_LOGIN;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  const onSubmit = async (values) => {
    let data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);

    let config = {
      method: "post",
      url: loginUrl,
      data: data,
    };

    axios(config)
      .then(function (res) {
        localStorage.setItem("token", "Token " + res.data.token);
        gotoHomePage();
      })
      .catch(function (error) {
        console.log(error);

        handleClick();
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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container xs={12} direction="row">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          .نام کاربری یا رمز ورود اشتباه است
        </Alert>
      </Snackbar>
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
