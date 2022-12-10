import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import card20s from "./cardsimg/20s.jpg";

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

const notify = () => toast("Wow so easy!");

export const Card20s = () => {
  const CommentEventHandler = true;

  const handleClick = (event) => {
    <div>hi</div>;
  };
  const handleClickToastify = (event) => {
    <ToastContainer />;
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
              نام مدیا
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{
                "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
              }}
            >
              نام آرتیست
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
                <IconButton
                  aria-label="comment"
                  onClick={CommentEventHandler ? handleClick : undefined}
                >
                  <MapsUgcIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
