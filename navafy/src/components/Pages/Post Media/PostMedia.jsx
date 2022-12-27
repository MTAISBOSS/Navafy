import pic from "../../../Assets/Image/The_Weeknd_-_Blinding_Lights.png";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./PostMedia.css";
import SingerAvatar from "@mui/icons-material/MusicNoteRounded";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import LikeIcon from "@mui/icons-material/FavoriteSharp";
import PostMediaIcon from "@mui/icons-material/Add";
import SpeedDial from "../../Common/SpeedDial";
import Homepage from "../../Common/HomePage";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MyButton from "../../Common/MyButton";
import { Divider, TextField } from "@mui/material";

const PostMediaPage = (props) => {
  const singer = "The wekkend";
  const musicName = "Blinding Lights";
  const [open, setOpen] = React.useState(false);
  const [comment, setcomment] = React.useState("");
  const [isChanging, setisChanging] = React.useState(false);
  const handleComment = (e) => {
    setcomment(e.target.value);
    console.log(comment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = () => {
    setisChanging(!isChanging);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Homepage />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent scrol={false} style={{ backgroundColor: "#423453" }}>
          <Grid xs={12} container direction="row-reverse">
            <Grid xs={4} container direction="column">
              <img
                src={pic}
                height={120}
                width={120}
                className="shadow"
                style={{ margin: 5 }}
              />
            </Grid>

            <Grid xs={8} container direction="column">
              <h4
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                آهنگ
              </h4>
              <h1
                style={{
                  color: "white",
                  fontSize: 30,
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {musicName}
              </h1>

              <h5
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {singer}
              </h5>
              <Divider style={{ backgroundColor: "white" }} />
              <form onSubmit={handleClose}>
                <h6
                  style={{
                    color: "white",
                    fontFamily: "Vazirmatn",
                    textAlign: "right",
                    marginRight: 5,
                    marginTop: 25,
                    marginBottom: 0,
                    textAlign: "center",
                  }}
                >
                  {"کامنت بگذارید"}
                </h6>
                <TextField
                  disabled={!isChanging}
                  id="outlined-multiline-flexible"
                  style={{ direction: "rtl" }}
                  maxRows={4}
                  multiline
                  value={comment}
                  sx={{
                    "& > :not(style)": {
                      backgroundColor: "white",
                      fontFamily: "Vazirmatn",
                      fontSize: 12,
                    },
                  }}
                  onChange={handleComment}
                ></TextField>
                <DialogActions>
                  <MyButton
                    btntext="بازگشت"
                    onClick={() => {
                      handleClose();
                    }}
                    variant="contained"
                    style={{
                      margin: 5,
                      backgroundColor: "#00cf2d",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "Vazirmatn",
                      height: 30,
                      width: 80,
                      fontSize: 14,
                      borderRadius: 5,
                    }}
                  />
                  {isChanging ? (
                    <MyButton
                      btntext="ثبت"
                      onClick={handleChange}
                      variant="contained"
                      style={{
                        margin: 5,
                        backgroundColor: "#00cf2d",
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Vazirmatn",
                        height: 30,
                        width: 80,
                        fontSize: 14,
                        borderRadius: 5,
                      }}
                    />
                  ) : (
                    <MyButton
                      btntext="ویرایش"
                      onClick={handleChange}
                      variant="contained"
                      style={{
                        margin: 5,
                        backgroundColor: "#00cf2d",
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Vazirmatn",
                        height: 30,
                        width: 80,
                        fontSize: 14,
                        borderRadius: 5,
                      }}
                    />
                  )}
                </DialogActions>
              </form>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        style={{ width: "100%", height: "100%" }}
        container
        xs={12}
        direction="column"
      >
        <Grid item xs={4} className="musicbackground">
          <Grid container xs={12} direction="row-reverse">
            <Grid item xs={0}>
              <img
                src={pic}
                height={250}
                width={250}
                className="shadow musicImage"
                style={{ margin: 20 }}
              />
            </Grid>
            <Grid itme xs={6} direction="column">
              <h4
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 10,
                }}
              >
                آهنگ
              </h4>
              <h1
                style={{
                  color: "white",
                  fontSize: 80,
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 10,
                }}
              >
                {musicName}
              </h1>

              <h5
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 10,
                }}
                className="pointer"
              >
                {singer}
              </h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ backgroundColor: "#2b2135" }}>
          <Grid container xs={12} direction="row-reverse">
            <Fab
              style={{ marginRight: 30, backgroundColor: "#00cf2d" }}
              aria-label="edit"
            >
              <PlayIcon style={{ fill: "white", height: 30, width: 30 }} />
            </Fab>

            <Fab
              style={{ marginRight: 30, backgroundColor: "#00cf2d" }}
              aria-label="edit"
            >
              <LikeIcon
                style={{
                  fill: "white",
                  height: 25,
                  width: 25,
                }}
              />
            </Fab>

            <Fab
              style={{ marginRight: 30, backgroundColor: "#00cf2d" }}
              aria-label="edit"
            >
              <PostMediaIcon
                style={{ fill: "white", height: 45, width: 40 }}
                onClick={handleClickOpen}
              />
            </Fab>
            <IconButton>
              <SpeedDial style={{ margin: -15, marginRight: 20 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default PostMediaPage;
