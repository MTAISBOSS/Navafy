import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import rocknroll from '/home/ichan/Desktop/tahlil/navafy/src/components/cards/cardsimg/Rock-n-Roll.jpg'

export const CardRockNRoll = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia>
             <img src={rocknroll} height="140"/>
          </CardMedia>
         <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir='rtl'>
            RockNRoll
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
