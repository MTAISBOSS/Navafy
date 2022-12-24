import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { CardRockNRoll } from "../Home Page/cards/CardRockNRoll";
import { Card20s } from "../Home Page/cards/Card20s";
import { Card2022 } from "../Home Page/cards/Card2022Popular";
import { CardFocusMusic } from "../Home Page/cards/CardFocusMusic";
import { CardClassic } from "../Home Page/cards/CardClassic";

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import CssBaseline from "@mui/material/CssBaseline";

const homepage = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />

        <Stack dir="rtl" direction="column" justifyContent="flex-end">
          <Box
            sx={{
              width: "300",
              bgcolor: "text.secondary",
              color: "background.paper",
              p: 2,
            }}
          >
            تازه ترین ها
          </Box>

          <Box>
            <Carousel interval={null} variant="dark">
              <Carousel.Item sx={{ height: 100 }}>
                <Box margin={7}>
                  <Grid container>
                    <Grid item md={1.18}>
                      <Box></Box>
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                  </Grid>
                </Box>
              </Carousel.Item>
              <Carousel.Item sx={{ height: 100 }}>
                <Box margin={7}>
                  <Grid container>
                    <Grid item md={1.18}>
                      <Box></Box>
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                  </Grid>
                </Box>
              </Carousel.Item>
            </Carousel>
          </Box>

          <Box height={100} />
          <Box
            sx={{
              "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
              bgcolor: "text.secondary",
              color: "background.paper",
              p: 2,
            }}
          >
            معروف ترین ها
          </Box>

          <Box>
            <Carousel interval={null} variant="dark">
              <Carousel.Item sx={{ height: 100 }}>
                <Box margin={7}>
                  <Grid container>
                    <Grid item md={1.18}>
                      <Box></Box>
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                  </Grid>
                </Box>
              </Carousel.Item>
              <Carousel.Item sx={{ height: 100 }}>
                <Box margin={7}>
                  <Grid container>
                    <Grid item md={1.18}>
                      <Box></Box>
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                    <Grid item md={2}>
                      <Card20s />
                    </Grid>
                  </Grid>
                </Box>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
};

export default homepage;
