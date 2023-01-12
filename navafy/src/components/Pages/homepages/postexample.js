import { Api, SettingsInputCompositeSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { Stack } from "react-bootstrap";
import * as DataContainer from "../../../Static/DataContainer";

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

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConstructionRounded } from "@mui/icons-material";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useFormik, validationSchema } from "formik";

import token from "../Login/Login";

const MediaUrl = DataContainer.API_MEDIA;
const CreateCommentUrl = DataContainer.API__COMMENT_CREATE;

const Media = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const showmedia = async () => {
    console.log("Media");

    let config = {
      method: "get",
      url: MediaUrl,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /*  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await DataContainer.API_MEDIA.get();
        setPosts(response.data);
      } catch (err) {
        console.log(error);
      }
    };
    fetchPost();
  }); */

  const createcomment = async () => {
    console.log("creatcomment");

    axios
      .post(CreateCommentUrl, {
        text: message,
        media: "",
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
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [userstate, setUserstate] = useState(true);
  /* 
  function handleClick() {
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
    <>
      <Box dir="rtl">
        <Button onClick={showmedia}></Button>
        <Card>
          <CardActionArea>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions>
                <IconButton aria-label="comment" onClick={checkUser}>
                  <ToastContainer
                    open={!useState}
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
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default Media;
