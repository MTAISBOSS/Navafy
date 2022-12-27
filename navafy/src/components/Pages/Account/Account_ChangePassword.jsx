import { Box, Grid, TextField } from "@mui/material";
import MyButton from "../../Common/MyButton";
import * as react from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../../Assets/Image/The_Weeknd_-_Blinding_Lights.png";
import { Home } from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import { Password } from "@mui/icons-material";
import { useFormik, validateYupSchema } from "formik";
import { UserValid } from "./Account_PasswordValiadation";
import MyAppBar from "../../Common/HomePage";

const Account_ChangePassword = () => {
  const navigate = useNavigate();

  const gotoOverView = () => navigate("/account/overview");
  const gotoChangeInfo = () => navigate("/account/changeinfo");
  const gotoChangePassword = () => navigate("/account/changepassword");

  const onSubmit = async (values) => {};
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
      oldpassword: "",
      confirmPassword: "",
    },
    validationSchema: UserValid,
    onSubmit,
  });
  return (
    <div align="center" style={{ marginTop: 80, backgroundColor:"#2b2135" }}>
      <MyAppBar />

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 800,
          width: "60%",
          border: "none",
          borderRadius: 5,
        }}
        className="whiteshadow"
      >
        <Grid container direction="row">
          <Grid item xs={9} direction="column">
            <div align="right" style={{ marginRight: 20 }}>
              <h1 style={{ fontSize: 50 }}>تغییر رمز عبور</h1>
            </div>
            <div align="right" style={{ marginRight: 20 }}>
              <TextField
                style={{ width: "80%", margin: 10 }}
                sx={{
                  "& > :not(style)": {
                    fontFamily: "Vazirmatn",
                    direction: "rtl",
                  },
                }}
                type="password"
                name="oldpassword"
                id="outlined-disabled"
                variant="standard"
                label="رمز عبور قدیمی"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.oldpassword && touched.oldpassword ? true : false}
                value={values.oldpassword}
              ></TextField>
              {errors.oldpassword && touched.oldpassword && (
                <p style={{ fontSize: 12, color: "red" }}>
                  {errors.oldpassword}
                </p>
              )}
              <TextField
                style={{ width: "80%", margin: 10 }}
                sx={{
                  "& > :not(style)": {
                    fontFamily: "Vazirmatn",
                    direction: "rtl",
                  },
                }}
                name="newpassword"
                type="password"
                id="outlined-disabled"
                variant="standard"
                label="رمز عبور جدید"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.newpassword && touched.newpassword ? true : false}
                value={values.newpassword}
              ></TextField>
              {errors.newpassword && touched.newpassword && (
                <p style={{ fontSize: 12, color: "red" }}>
                  {errors.newpassword}
                </p>
              )}
              <TextField
                style={{ width: "80%", margin: 10 }}
                sx={{
                  "& > :not(style)": {
                    fontFamily: "Vazirmatn",
                    direction: "rtl",
                  },
                }}
                type="password"
                name="confirmPassword"
                id="outlined-disabled"
                variant="standard"
                label="تکرار رمز عبور"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
                value={values.confirmPassword}
              ></TextField>
              {errors.confirmPassword && touched.confirmPassword && (
                <p style={{ fontSize: 12, color: "red" }}>
                  {errors.confirmPassword}
                </p>
              )}
              <MyButton
                btntext="ثبت"
                type="submit"
                style={{
                  width: 150,
                  height: 40,
                  border: "none",
                  borderRadius: 15,
                  margin: 10,
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: " #00cf2d",
                  fontFamily: "Vazirmatn",
                }}
              />
              <MyButton
                btntext="انصراف"
                style={{
                  width: 150,
                  height: 40,
                  border: "none",
                  borderRadius: 15,
                  color: "white",
                  margin: 10,
                  fontWeight: "bold",
                  backgroundColor: " #00cf2d",
                  fontFamily: "Vazirmatn",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={3} direction="column">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#110d15",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "#110d15",
                },
              }}
            >
              <img
                style={{ width: "100%", height: "30%" }}
                src={ProfilePicture}
              />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={gotoOverView}>
                    <ListItemIcon>
                      <Home style={{ fill: "white" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <p
                        style={{
                          fontFamily: "Vazirmatn",
                          fontSize: 14,
                          height: 15,
                          color: "white",
                        }}
                      >
                        نمای کلی حساب
                      </p>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider style={{ backgroundColor: "white" }} />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={gotoChangeInfo}>
                    <ListItemIcon>
                      <Create style={{ fill: "white" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <p
                        style={{
                          fontFamily: "Vazirmatn",
                          fontSize: 14,
                          height: 15,
                          color: "white",
                        }}
                      >
                        ویرایش حساب
                      </p>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider style={{ backgroundColor: "white" }} />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={gotoChangePassword}>
                    <ListItemIcon>
                      <Password style={{ fill: "white" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <p
                        style={{
                          fontFamily: "Vazirmatn",
                          fontSize: 14,
                          height: 15,
                          color: "white",
                        }}
                      >
                        نغییر رمز عبور
                      </p>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Account_ChangePassword;
