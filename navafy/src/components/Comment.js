import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, IconButton } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";

import { Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { Stack } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import * as DataContainer from "../Static/DataContainer";

const MediaUrl = DataContainer.API_MEDIA;

const Card20s = () => {
  const [medias, setMedias] = useState([]);
  const token = localStorage.getItem("token");
  const fetchProducts = () => {
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
  };
  console.log(medias.image);
  console.log(medias);
  return (
    <Stack>
      <Box
        sx={{
          width: "300",
          height: "300",
          p: 2,
          fontWeight: "bold",
          fontSize: 23,
          fontFamily: "Vazirmatn",
        }}
      >
        <p>
          <button onClick={fetchProducts}>Fetch Products</button>
        </p>
      </Box>
      <Box dir="rtl">
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
              <CardActions></CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Stack>
  );
};
export default Card20s;
