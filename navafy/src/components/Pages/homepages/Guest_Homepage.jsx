import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { typography } from "@mui/system";

import { Card20s } from "../Home Page/cards/Card20s";

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import CssBaseline from "@mui/material/CssBaseline";
import MyAppBar from "../../Common/HomePage";

const homepage = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <MyAppBar />
        <Stack
          dir="rtl"
          direction="column"
          justifyContent="flex-end"
          sx={{ display: "flex", backgroundColor: "#2b2135" }}
        >
          <Box
            sx={{
              width: "300",
              bgcolor: "text.secondary",
              color: "background.paper",
              p: 2,
              fontWeight: "bold",
              fontSize: 23,
              fontFamily: "Vazirmatn",
            }}
          >
            تازه ترین ها
          </Box>

          <Box>
            <Carousel interval={null}>
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
              fontWeight: "bold",
              fontSize: 23,
              fontFamily: "Vazirmatn",
            }}
          >
            معروف ترین ها
          </Box>

          <Box>
            <Carousel interval={null}>
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
