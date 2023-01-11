import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import rocknroll from "./cardsimg/Rock-n-Roll.jpg";

export const CardRockNRoll = () => {
  return (
    <Card sx={{ width: 250, height: 270 }}>
      <CardActionArea>
        <CardMedia>
          <img src={rocknroll} height="140" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir="rtl">
            RockNRoll
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
