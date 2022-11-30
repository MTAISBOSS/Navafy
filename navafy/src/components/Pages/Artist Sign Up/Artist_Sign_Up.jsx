import MyButton from "../../Common/MyButton";
import MyTextfield from "../../Common/MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, validateYupSchema } from "formik";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { UserValid } from "./ArtistSignUpValidation";
const signupUrl = "https://reqres.in/api/login";

const Artist_Sign_up = () => {
  
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
      username: "",
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
          className="logincontainer whiteshadow panelbackground"
          direction="column"
        >
          <Grid item xs={1} />
          <Grid item xs={2}>
            <h1 style={titlestyles}>ساخت حساب آرتیست</h1>
          </Grid>
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
