import MyButton from "../../Common/MyButton";
import MyTextfield from "../../Common/MyTextfield";

import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, validateYupSchema } from "formik";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { UserValid } from "../Sign Up/SignUpFormValidation";
import * as DataContainer from "../../../Static/DataContainer";
const signupUrl = DataContainer.API_SIGN_UP;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Sign_up = () => {
  const navigate = useNavigate();

  const gotoLoginPage = () => navigate("/login");
  const gotoHomePage = () => navigate("/");
  const gotoArtistSignUpPage = () => navigate("/artist_signup");

  const onSubmit = async (values) => {
    console.log("signup");

    axios
      .post(signupUrl, {
        username: values.username,
        password: values.password,
        email: values.email,
      })
      .then((res) => {
        console.log(res);
        gotoLoginPage();
      })
      .catch(function (error) {
        console.log(error);

        handleClick();
      });
  };

  const titlestyles = {
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    height: "80px",
    fontSize: 60,
    borderRadius: "0px",
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
      username: "",
      email: "",
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
          .لطفا دوباره امتحان کنید
        </Alert>
      </Snackbar>
      <Grid className="center" item xs={8} container direction="column">
        <Grid
          item
          container
          className="logincontainer whiteshadow panelbackground"
          direction="column"
        >
          <Grid item xs={1} />

          <Grid item xs={2}>
            <h1 style={titlestyles}>ساخت حساب کاربری</h1>
          </Grid>
          <Grid item xs={6}>
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
                id="username"
                text="نام کاربری"
                type="text"
                name="username"
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                required
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
                btntext="ثبت نام به عنوان آرتیست"
                onClick={() => {
                  gotoArtistSignUpPage();
                }}
                variant="contained"
                style={{
                  margin: 10,
                  backgroundColor: "#00cf2d",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Vazirmatn",
                  height: 50,
                  width: 250,
                  fontSize: 18,
                  borderRadius: 15,
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="center" item xs={4} container direction="column">
        <Grid item xs={2}>
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
            حساب کاربری دارید؟
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
            وارد حساب کاربری خود شوید و از قابلیت های سرویس ما استفاده کنید ...
          </h2>
        </Grid>
        <Grid item xs={1}>
          <MyButton
            btntext="ورود"
            variant="contained"
            onClick={() => {
              gotoLoginPage();
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
    </Grid>
  );
};

export default Sign_up;
