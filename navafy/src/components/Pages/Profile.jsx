import { Grid, Menu } from "@mui/material";
import avatar from "../../Image/polygon.jpg";
import ProfileAvatarImage from "../ProfileAvatarImage";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MyButton from "../MyButton";
import { useState } from "react";
import MyTextfield from "../MyTextfield";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const favorite = [
  { title: "راک", id: 1 },
  { title: "پاپ", id: 2 },
  { title: "جاز", id: 3 },
  { title: "کلاسیک", id: 4 },
  { title: "رپ", id: 5 },
  { title: "سنتی", id: 6 },
  { title: "بیکلام", id: 7 },
];

export const Profile = () => {
  const handleSearch = () => {};

  const [image, setimage] = useState("");
  const changeInfo = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setimage(file);
    } else {
      setimage(null);
    }
  };
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        marginLeft={10}
        marginRight={-20}
        xs={4}
        direction="column"
      >
        <ProfileAvatarImage />
        <Grid item xs={1}>
          <MyButton
            btntext="ویرایش"
            variant="contained"
            style={{
              margin: 10,
              backgroundColor: "#00cf2d",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Vazirmatn",
              height: 40,
              width: 100,
              fontSize: 15,
              borderRadius: 15,
            }}
          >
            <MyTextfield
              hidden
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              max={20}
              onChange={(e) => {
                changeInfo(e);
              }}
            />
          </MyButton>
          <MyButton
            btntext="حذف تصویر"
            variant="contained"
            style={{
              margin: 10,
              backgroundColor: "#00cf2d",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Vazirmatn",
              height: 40,
              width: 120,
              fontSize: 15,
              borderRadius: 15,
            }}
          >
            <MyTextfield
              hidden
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              max={20}
              onChange={(e) => {
                changeInfo(e);
              }}
            />
          </MyButton>
        </Grid>
        <Grid item xs={4}>
          <MyTextfield
            id="username"
            type="text"
            text="تکرار رمز"
            name="username"
            required
            style={{ width: 300 }}
            variant="outlined"
          />
          <MyTextfield
            id="email"
            type="text"
            text="ایمیل"
            name="email"
            required
            style={{ width: 300 }}
            variant="outlined"
          />
          <MyTextfield
            id="oldpassword"
            type="password"
            text="رمز عبور قدیمی"
            name="oldpassword"
            minLength={8}
            required
            style={{ width: 300 }}
            variant="outlined"
          />
          <MyTextfield
            id="newpassword"
            type="newpassword"
            text="رمز عبور جدید"
            name="newpassword"
            minLength={8}
            required
            style={{ width: 300 }}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid item container xs={4} direction="column">
        <Grid item xs={1} />
        <Grid item xs={2}>
          <MyTextfield
            id="phonenumber"
            type="number"
            text="شماره تلفن همراه"
            name="phonenumber"
            required
            minLength={11}
            style={{ width: 300 }}
            variant="outlined"
          />
          <MyTextfield
            id="homephonenumber"
            type="number"
            text="شماره تلفن منزل"
            name="homephonenumber"
            required
            minLength={8}
            style={{ width: 300 }}
            variant="outlined"
          />
          <MyTextfield
            id="birthday"
            type="date"
            text="تاریخ تولد"
            name="birthday"
            required
            style={{ width: 300 }}
            variant="outlined"
          />
          <Stack spacing={3} sx={{ width: 300 }}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={favorite}
              getOptionLabel={(option) => option.title}
              defaultValue={[favorite[2]]}
              sx={{
                "& > :not(style)": { fontFamily: "Vazirmatn" },
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    "& > :not(style)": { fontFamily: "Vazirmatn" },
                  }}
                  {...params}
                  variant="standard"
                  label="سبک های موسیقی"
                  placeholder="سبک ها"
                />
              )}
            />
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <MyButton
            btntext="ثبت تغییرات"
            variant="contained"
            style={{
              margin: 20,
              backgroundColor: "#00cf2d",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Vazirmatn",
              height: 40,
              width: 120,
              fontSize: 15,
              borderRadius: 15,
            }}
          />
          <MyButton
            btntext="انصراف"
            variant="contained"
            style={{
              margin: 20,
              backgroundColor: "#00cf2d",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Vazirmatn",
              height: 40,
              width: 100,
              fontSize: 15,
              borderRadius: 15,
            }}
          ></MyButton>
        </Grid>
      </Grid>

      <Grid item container xs={4} />
    </Grid>
  );
};
