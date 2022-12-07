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

import { Comment } from "../../Comment.js";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

export const Card20s = () => {
  const handleClickOpen = () => {
    <Comment />;
  };
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia>
          <img src={card20s} height="140" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir="rtl">
            دهه ۲۰ میلادی
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="like" onClick={() => Comment}>
          <SentimentSatisfiedTwoToneIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <MapsUgcIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
};
