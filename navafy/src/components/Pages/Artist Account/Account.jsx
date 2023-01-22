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
import { Autocomplete } from "@mui/material";
import { Stack } from "@mui/material";
import * as DataContainer from "../../../Static/DataContainer";


const Account = () => {
  const navigate = useNavigate();

  const gotoOverView = () => navigate("/account/artist/overview");
  const gotoChangeInfo = () => navigate("/account/artist/changeinfo");
  const gotoChangePassword = () => navigate("/account/artist/changepassword");

  const [userdata,setuserdata] = useState([]);
  var axios = require("axios");

  var config = {
    method: "get",
    url: DataContainer.API_USER_DATA,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      setuserdata(response.data?.results);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  const email = userdata.email;
  const username = userdata.username;

  const favorite = [
    { title: "راک", id: 1 },
    { title: "پاپ", id: 2 },
  ];

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
                <Stack spacing={3} sx={{ width: 300 }}>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={favorite}
                    getOptionLabel={(option) => option.title}
                    disabled={true}
                    defaultValue={favorite}
                    sx={{
                      "& > :not(style)": { fontFamily: "Vazirmatn" },
                    }}
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          "& > :not(style)": {
                            fontFamily: "Vazirmatn",
                            color: "grey",
                          },
                        }}
                        {...params}
                        variant="standard"
                        label="سبک های موسیقی"
                        placeholder="سبک ها"
                      />
                    )}
                  />
                </Stack>
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
