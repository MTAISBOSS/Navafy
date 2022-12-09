import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FollowIcon from "@mui/icons-material/GroupAddRounded";
import UnfollowIcon from "@mui/icons-material/GroupRemoveRounded";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

export default function FollowUnfollowContainer(props) {
  const [isFollowing, setisFollowing] = React.useState(true);

  const handlefollow = () => {
    setisFollowing(!isFollowing);
  };
  return (
    <Paper
      style={{ width: "100%", height: 50, borderRadius: 5, border: "none" }}
      elevation={3}
    >
      <Grid container direction="row" xs={12}>
        <Grid item xs={1} />
        <Grid container xs={5} direction="column">
          <Grid item xs={2} />
          <Grid item xs={2}>
            <Typography
              component="div"
              variant="h10"
              style={{ color: "grey", fontFamily: "Vazirmatn" }}
            >
              {props.username}
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid item xs={3} />
        <Grid item container xs={3}>
          {isFollowing ? (
            <IconButton onClick={handlefollow}>
              <UnfollowIcon style={{ fill: "#00cf2d" }} />
            </IconButton>
          ) : (
            <IconButton onClick={handlefollow}>
              <FollowIcon style={{ fill: "#00cf2d" }} />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
