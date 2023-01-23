import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import card20s from "./cardsimg/20s.jpg";
import axios from "axios";
import { useState } from "react";
import { Box, Grid } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as DataContainer from "../../../../Static/DataContainer";

const MediaUrl = DataContainer.API_MEDIA;
const CreateCommentUrl = DataContainer.API__COMMENT_CREATE;

const notify = () => toast("Wow so easy!");

export const ArtistMediaCard = () => {
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
          <img src={medias.image} height="140" width="250" />
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
              color="text.secondary"
              component="div"
              sx={{
                "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
              }}
            >
              <p
                style={{
                  fontFamily: "Vazirmatn",
                  fontSize: 16,
                  height: 15,
                  fontWeight: "bold",
                  textOverflow: "ellipsis",
                }}
              >
                {medias.description}
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
                  fontSize: 14,
                  height: 15,
                  fontWeight: "bold",
                }}
              >
                {medias.genre}
              </p>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
