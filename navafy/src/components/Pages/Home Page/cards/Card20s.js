import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import card20s from "../../../../Assets/Image/cardsimg/20s.jpg";

import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentSatisfiedTwoToneIcon from "@mui/icons-material/SentimentSatisfiedTwoTone";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

import { Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import token from "../../Login/Login";
import { Api, SettingsInputCompositeSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { Stack } from "react-bootstrap";
import * as DataContainer from "../../../../Static/DataContainer";

const MediaUrl = DataContainer.API_MEDIA;
const CreateCommentUrl = DataContainer.API__COMMENT_CREATE;

export const Card20s = () => {
  const [medias, setMedias] = useState([]);
  const token = localStorage.getItem("token");

  axios
    .get(MediaUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      const medias = response.data;
      setMedias(medias);
    });

  //---------------------------------------------------------
  const [userstate, setUserstate] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const createcomment = async () => {
    console.log("creatcomment");

    axios
      .post(CreateCommentUrl, {
        text: message,
        media: medias,
      })
      .then((res) => {
        console.log(res);
        setOpen(false);
      });
  };

  const checkUser = async () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      return setOpen(true);
    } else {
      return toast.warn("برای ارسال نظر، ابتدا وارد حساب کاربری خود شوید.", {
        position: "top-center",

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  /*  function handleClick() {
    if (userstate == true) {
      return setOpen(true);
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
  } */

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
        width: 250,
        height: 270,
      }}
    >
      <CardActionArea>
        <CardMedia>
          <img src={card20s} height="140" width="250" />
        </CardMedia>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{
                "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontFamily: "Vazirmatn",
                  fontSize: 20,
                  height: 15,
                  fontWeight: "bold",
                }}
              >
                {medias.title}
              </p>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{
                "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
              }}
            >
              <p
                style={{
                  fontFamily: "Vazirmatn",
                  fontSize: 20,
                  height: 15,
                  fontWeight: "bold",
                }}
              >
                {medias.descrption}
              </p>
            </Typography>
          </Box>
          <CardActions>
            <Grid container>
              <Grid item md={6}>
                <Box></Box>
              </Grid>
              <Grid item md={2}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Grid>
              <Grid item md={2}>
                <IconButton aria-label="like">
                  <SentimentSatisfiedTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item md={2}>
                <IconButton aria-label="comment" onClick={checkUser}>
                  <ToastContainer
                    open={!useState}
                    position="top-center"
                    newestOnTop
                    closeOnClick
                    rt1
                    pauseonfocusloss
                    draggable
                    theme="light"
                  />
                  <MapsUgcIcon />
                </IconButton>
                <Dialog open={open} onClose={handleClose} dir="rtl">
                  <DialogTitle>ثبت نظر</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      متن مورد نظر خود را وارد کنید:
                    </DialogContentText>
                    <TextField
                      dir="rtl"
                      autoFocus
                      margin="dense"
                      id="name"
                      label="متن نظر"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      value={message}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>خروج</Button>
                    <Button onClick={createcomment}>ارسال</Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
