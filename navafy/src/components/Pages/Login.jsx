import { Component } from "react";
import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/polygon2.webp";
import rightbackground from "../../Image/music-wallpaper.jpg";
import { UserValid } from "../UserValidation";
import { useFormik, validateYupSchema } from "formik";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

const Login = () => {
  const navigate = useNavigate();

  const gotoSignUpPage = () => navigate("/signup");
  const gotoHomePage = () => navigate("/");

  const [isDataValid, setIsDataValid] = useState(false);
  const titlestyles = {
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    height: "80px",
    fontSize: 60,
    borderRadius: "0px",
  };

  const onSubmit = () => {
    gotoHomePage();
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
      confirmPassord: "",
    },
    validationSchema: UserValid,
    onSubmit,
    canSubmit: UserValid,
  });

  return (
    <Grid container xs={12} direction="row">
      <Grid className="center" item xs={4} container direction="column">
        {/* <img style={{ height: "100vh", width: "120vh" }} src={background} /> */}
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
            disabled={isDataValid}
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
          className="logincontainer shadow panelbackground"
          direction="column"
        >
          <Grid item xs={1} />
          <Grid item xs={2}>
            <h1 style={titlestyles}>ورود به حساب کاربری</h1>
          </Grid>
          <Divider sx={{ backgroundColor: "#d0d0d0" }} />

          <Grid item xs={4}>
            <form className="center" onSubmit={handleSubmit}>
              <MyTextfield
                id="name"
                text="نام کاربری"
                type="text"
                name="name"
                style={{ width: 300, backgroundColor: "#e0eef2", margin: 10 }}
                variant="outlined"
                required
                color="primary"
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
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
