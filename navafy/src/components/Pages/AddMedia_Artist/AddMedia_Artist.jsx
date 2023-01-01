import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Picture from "../../../Assets/Image/default_music_icon.jpg";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
const style_box = {
  fontFamily: '"Vazirmatn", sans-serif',
  color: "#cde6fe",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 550,
  bgcolor: "#3c2e49",
  boxShadow: 24,
  p: 4,
  direction: "rtl",
  borderRadius:'10px'
};
const left = {
  backgroundColor: "fff",
  width: "50%",
  direction: "ltr",
};
const right = {
  backgroundColor: "000",
  width: "50%",
  display: "flex",
  flexDirection: "column",
};
const CustomPaper = (props) => {
  return <Paper style={{ direction: "rtl" }} {...props} />;
};
const AddMedia_Artist = (props) => {
  const [open, setOpen] = React.useState(true);
  const [picLink, setpicLink] = useState(Picture);
  const [audio, setaudio]=useState();
  function handleChange_pic(e) {
    setpicLink(URL.createObjectURL(e.target.files[0]));
  }
  function handleChange_audio(e) {
    setaudio(e.target);
    console.log(audio);
  }
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style_box}>
          <Grid container>
            <Box sx={right}>
              <TextField
                id="outlined-basic"
                label="نام اثر"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 40 }}
                sx={{
                  "& .MuiFormLabel-root": {},
                  "& > :not(style)": {
                    fontFamily: "Vazirmatn",
                    color: "gray",
                    direction: "rtl",
                  },
                }}
              />
              <Autocomplete
                multiple
                limitTags={2}
                size="small"
                options={music_types}
                PaperComponent={CustomPaper}
                style={{ marginBottom: 60 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="ژانر موسیقی"
                    sx={{
                      "& .MuiFormLabel-root": {},
                      "& > :not(style)": {
                        fontFamily: "Vazirmatn",
                        color: "gray",
                        direction: "rtl",
                      },
                    }}
                  />
                )}
              />
              <Button
                variant="contained"
                component="label"
                style={{
                  backgroundColor: "#00cf2d",
                  color: "#cde6fe",
                  width: 120,
                  borderRadius: "10px",
                  fontSize: 17, 
                }}
                sx={{
                  "& > :not(style)": { fontFamily: "Vazirmatn" },
                }}
              >
                افزودن فایل
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleChange_audio}
                  hidden
                />
              </Button>
            </Box>
            <Box sx={left}>
              <Avatar
                variant="square"
                src={picLink}
                sx={{ bgcolor: "gray", width: 200, height: 200 }}
              ></Avatar>
              <Button
                variant="contained"
                component="label"
                sx={{
                  "& > :not(style)": { fontFamily: "Vazirmatn" },
                }}
                style={{
                  backgroundColor: "#00cf2d",
                  color: "#cde6fe",
                  borderRadius: "10px",
                  fontSize: 17,
                  marginTop:10
                }}
              >
                اضافه کردن عکس
                <input
                  type="file"
                  onChange={handleChange_pic}
                  hidden
                  accept="image/*"
                />
              </Button>
            </Box>
          </Grid>
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#00cf2d",
              color: "#cde6fe",
              marginTop: 20,
              width: 140,
              height: 60,
              borderRadius: "10px",
              fontSize: 20,
            }}
          >
            افزودن
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default AddMedia_Artist;
const music_types = [
  "کلاسیک",
  "پاپ",
  "جاز",
  "بلوز",
  "B&R",
  "کانتری",
  "هیپ هاپ",
  "رپ",
  "راک",
  "الکترونیکا",
];
