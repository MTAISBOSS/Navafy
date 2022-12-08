import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { CardRockNRoll } from "../../../Assets/Image/cards/CardRockNRoll";
import { Card20s } from "../../../Assets/Image/cards/Card20s";
import { Card2022 } from "../../../Assets/Image/cards/Card2022Popular";
import { CardFocusMusic } from "../../../Assets/Image/cards/CardFocusMusic";
import { CardClassic } from "../../../Assets/Image/cards/CardClassic";
import { red } from "@mui/material/colors";
import { Navbar } from "../../Navbar";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const color = red[500];

const homepage = () => {
  return (
    <>
      <div className="App" dir="rtl">
        <Navbar />
      </div>
      <Carousel>
        <Carousel.Item>
          <Grid container margin={15}>
            <Grid item md={12} my={5}>
              <Box>playlist</Box>
            </Grid>
            <Grid item md={2}>
              <CardFocusMusic />
            </Grid>
            <Grid item md={2}>
              <CardFocusMusic />
            </Grid>
            <Grid item md={2}>
              <CardFocusMusic />
            </Grid>
            <Grid item md={2}>
              <CardFocusMusic />
            </Grid>
            <Grid item md={4}>
              <CardFocusMusic />
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid container margin={15}>
            <Grid item md={12} my={5}>
              <Box></Box>
            </Grid>
            <Grid item md={2}>
              <CardRockNRoll />
            </Grid>
            <Grid item md={2}>
              <Card20s />
            </Grid>
            <Grid item md={2}>
              <Card2022 />
            </Grid>
            <Grid item md={2}>
              <CardClassic />
            </Grid>
            <Grid item md={4}>
              <CardFocusMusic />
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default homepage;
