import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Picture from "../../Assets/Image/default_music_icon.jpg";

const MusicInfoContainer = (props) => {
  return (
    <Paper
      elevation={0}
      onClick={props.onClick}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "inherit",
        opacity: "1",
        border: "none",
        borderRadius: "inherit",
        color: "#cde6fe",
        paddingTop: props.padding,
        paddingBottom: props.padding,
      }}
      sx={{ "&:hover": { backgroundColor: "#000" } }}
    >
      <Grid container xs={12}>
        <Grid
          sx={{ "& > :not(style)": { textAlign: "center" } }}
          item
          xs={props.Space}
        >
          <Avatar
            src={Picture}
            variant="rounded"
            sx={{
              backgroundColor: "#391162",
              width: props.Size,
              height: props.Size,
              marginTop: "2.5px",
              marginLeft: "5px",
              borderRadius: "10px",
            }}
          >
            {props.name[0]}
          </Avatar>
        </Grid>
        <Grid item container xs={4} direction="column" spacing={0.5}>
          <Grid item xs={4} style={{ fontSize: props.Font_name }}>
            {props.name}
          </Grid>
          <Grid item xd={1} style={{ fontSize: props.Font_description }}>
            {props.description}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default MusicInfoContainer;
