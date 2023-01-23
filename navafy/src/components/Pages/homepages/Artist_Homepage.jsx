import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { CardRockNRoll } from "../Home Page/cards/CardRockNRoll";
import { ArtistMediaCard } from "../Home Page/cards/ArtistMediaCard";
import { Card2022 } from "../Home Page/cards/Card2022Popular";
import { CardFocusMusic } from "../Home Page/cards/CardFocusMusic";
import { CardClassic } from "../Home Page/cards/CardClassic";

import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import MyAppBar from "../../Navbar";

import { borders } from "@mui/system";

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
          <Box margin={7}>
            <Grid container>
              <Grid item md={1.18}>
                <Box></Box>
              </Grid>
              <Grid item md={2}>
                <Box
                  bgcolor={"white"}
                  sx={{ width: 250, height: 270, borderRadius: 1 }}
                ></Box>
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
            </Grid>
          </Box>
          <Box margin={7}>
            <Grid container>
              <Grid item md={1.18}>
                <Box></Box>
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
              <Grid item md={2}>
                <ArtistMediaCard />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
};

export default homepage;
