import { AddBox } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
<<<<<<< HEAD:navafy/src/components/Pages/homepages/Guest_Homepage.jsx
import { CardRockNRoll } from "../../cards/CardRockNRoll";
import { Card20s } from "../../cards/Card20s";
import { Card2022 } from "../../cards/Card2022Popular";
import { CardFocusMusic } from "../../cards/CardFocusMusic";
import { CardClassic } from "../../cards/CardClassic";
=======
import { CardRockNRoll } from "../../../Assets/Image/cards/CardRockNRoll";
import { Card20s } from "../../../Assets/Image/cards/Card20s";
import { Card2022 } from "../../../Assets/Image/cards/Card2022Popular";
import { CardFocusMusic } from "../../../Assets/Image/cards/CardFocusMusic";
import { CardClassic } from "../../../Assets/Image/cards/CardClassic";
>>>>>>> dev:navafy/src/components/Pages/Home Page/Homepage.js
import { red } from "@mui/material/colors";
import { Navbar } from "../../Navbar";

const color = red[500];

const homepage = () => {
  return (
    <>
      <div className="App" dir="rtl">
        <Navbar />
      </div>
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
    </>
  );
};

export default homepage;
