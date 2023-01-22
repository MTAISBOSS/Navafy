import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, IconButton } from "@mui/material";

import { Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";

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
      ></Box>
      <Box dir="rtl">
        <Card
          sx={{
            "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
            width: 250,
            height: 270,
          }}
        >
          <CardActionArea>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions>
                <p>Product List</p>
                <p>
                  <button onClick={fetchProducts}>Fetch Products</button>
                </p>
                <ul>
                  {medias.map((media) => (
                    <li key={media.title}>
                      {media.artist}&nbsp;{media.genre}
                    </li>
                  ))}
                </ul>
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Stack>
  );
};
export default Card20s;
