import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { CardActionArea, IconButton } from "@mui/material";
import { ArtistMediaCard } from "../Home Page/cards/ArtistMediaCard";

import AddIcon from "@mui/icons-material/Add";
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
                >
                  <Stack height={80}></Stack>
                  <Stack>
                    <Grid container>
                      <Grid item md={3}>
                        <Box bgcolor={"white"} />
                      </Grid>
                      <Grid item>
                        <IconButton aria-label="add media">
                          <AddIcon color="success" sx={{ fontSize: 100 }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
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
