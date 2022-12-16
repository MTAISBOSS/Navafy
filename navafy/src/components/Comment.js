import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentSatisfiedTwoToneIcon from "@mui/icons-material/SentimentSatisfiedTwoTone";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

import { Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConstructionRounded } from "@mui/icons-material";

const notify = () => toast("Wow so easy!");

const Card20s = () => {
  const [userstate, LoggedIn] = useState(true);

  function handleClick() {
    if (userstate == true) {
      return toast.warn("truuuuuuuuue", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      return toast.warn("falseeeeeeee", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <Box dir="rtl">
      <Card>
        <CardActionArea>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <CardActions>
              <IconButton aria-label="comment" onClick={handleClick}>
                <ToastContainer
                  position="top-center"
                  autoclose={false}
                  newestOnTop
                  closeOnClick
                  rt1
                  pauseonfocusloss
                  draggable
                  theme="light"
                />
                <MapsUgcIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default Card20s;
