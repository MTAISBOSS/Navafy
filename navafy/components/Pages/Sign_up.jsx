import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/b2.jfif";
import { UserValid } from "../UserValidation";
import { useFormik, validateYupSchema } from "formik";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

const Sign_up = () => {
  const navigate = useNavigate();

  const [isDataValid, setIsDataValid] = useState(false);

  const gotoLoginPage = () => navigate("/login");
  const gotoHomePage = () => navigate("/");
  const gotoArtistSignUpPage = () => navigate("/artist_signup");

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
      <Grid className="center" item xs={8} container direction="column">
        <Grid
          item
          container
          className="logincontainer shadow panelbackground"
          direction="column"
        >
          <Grid item xs={1} />
          <Grid item xs={2}>
            <h1 style={titlestyles}>ساخت حساب کاربری</h1>
          </Grid>
          <Divider sx={{ backgroundColor: "#d0d0d0" }} />
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
                id="confirmPassord"
                type="password"
                text="تکرار رمز"
                name="confirmPassord"
                minLength={8}
                required
                style={{ width: 300, backgroundColor: "#e0eef2" }}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.confirmPassord && touched.confirmPassord ? true : false
                }
                value={values.confirmPassord}
              ></MyTextfield>
              {errors.confirmPassord && touched.confirmPassord && (
                <p style={{ fontSize: 12, color: "red" }}>
                  {errors.confirmPassord}
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
                btntext="ثبت نام به عنوان آرتیست"
                disabled={isDataValid}
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
            disabled={isDataValid}
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
