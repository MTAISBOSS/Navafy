import MyButton from "../../Common/MyButton";
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

import { Home } from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import { Password } from "@mui/icons-material";
import MyAppBar from "../../Common/HomePage";
import DataContainer, { API_EDIT_PROFILE } from "../../../Static/DataContainer";

const profielediturl = API_EDIT_PROFILE;
const Account = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");

  const navigate = useNavigate();

  const gotoOverView = () => navigate("/account/overview");
  const gotoChangeInfo = () => navigate("/account/changeinfo");
  const gotoChangePassword = () => navigate("/account/changepassword");

  const submitdata = () => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("first_name", firstname);
    data.append("last_name", lastname);

    console.log(username);
    console.log(email);
    console.log(firstname);
    console.log(lastname);



    var config = {
      method: "put",
      url: profielediturl,
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <div align="right" style={{ marginRight: 20 }}>
              <h1 style={{ fontSize: 50 }}> ویرایش حساب</h1>
              <h3>پروفایل</h3>
            </div>
            <div align="right" style={{ marginRight: 20 }}>
              {/* <form
                autoComplete="off"
                onSubmit={(e) => {
                  handleusername(e);
                  handleemail(e);
                  handlephonenumber(e);
                  handlebirthday(e);
                  logdata(e);
                }}
              > */}
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
                label="نام کاربری"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
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
                label="ایمیل"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
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
                label="نام"
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
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
                label="نام خانوادگی"
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              ></TextField>
              <MyButton
                btntext="ثبت"
                type="submit"
                onClick={submitdata}
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
              {/* </form> */}
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
export default Account;
