import { Box, Grid, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../../Assets/Image/The_Weeknd_-_Blinding_Lights.png";
import MyButton from "../../Common/MyButton";
import { Home } from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import { Password } from "@mui/icons-material";
import Account_ChangeInfo from "./Account_ChangeInfo";
import MyAppBar from "../../Common/HomePage";
const Account = () => {
  const navigate = useNavigate();

  const gotoOverView = () => navigate("/account/overview");
  const gotoChangeInfo = () => navigate("/account/changeinfo");
  const gotoChangePassword = () => navigate("/account/changepassword");

  const birthday = "12/20/2005";
  const email = "ali@gmail.com";
  const username = "Aliiee";

  return (
    <div align="center" style={{ marginTop: 80, backgroundColor: "#2b2135" }}>
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
            <Grid container direction="column">
              <div align="right" style={{ marginRight: 20 }}>
                <h1 style={{ fontSize: 50 }}>نمای کلی حساب</h1>
                <h3>پروفایل</h3>
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
                  id="outlined-disabled"
                  variant="standard"
                  disabled={true}
                  label="نام کاربری"
                  value={username}
                ></TextField>
                <TextField
                  style={{ width: "80%", margin: 10 }}
                  sx={{
                    "& > :not(style)": {
                      fontFamily: "Vazirmatn",
                      direction: "rtl",
                    },
                  }}
                  id="outlined-disabled"
                  variant="standard"
                  disabled={true}
                  label="ایمیل"
                  value={email}
                ></TextField>
                <TextField
                  style={{ width: "80%", margin: 10 }}
                  sx={{
                    "& > :not(style)": {
                      fontFamily: "Vazirmatn",
                      direction: "rtl",
                    },
                  }}
                  id="outlined-disabled"
                  variant="standard"
                  disabled={true}
                  label="تاریخ تولد"
                  value={birthday}
                ></TextField>
                <MyButton
                  btntext="ویرایش حساب"
                  style={{
                    width: 150,
                    height: 40,
                    border: "none",
                    borderRadius: 15,
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: " #00cf2d",
                    fontFamily: "Vazirmatn",
                  }}
                  onClick={gotoChangeInfo}
                />
              </div>
            </Grid>
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
export default Account;
