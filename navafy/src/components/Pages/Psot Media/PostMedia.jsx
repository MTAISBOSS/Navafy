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

const PostMediaPage = (props) => {
  return (
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
              {props.musicName}
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
              {props.singer}
            </h5>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
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
            <PostMediaIcon style={{ fill: "white", height: 45, width: 40 }} />
          </Fab>
          <IconButton>
            <SpeedDial style={{margin:-15,marginRight:20}} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PostMediaPage;
