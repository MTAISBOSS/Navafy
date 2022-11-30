import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card20s from './cardsimg/20s.jpg'

export const Card20s = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia>
             <img src={card20s} height="140"/>
          </CardMedia>
         <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir='rtl'>
           دهه ۲۰ میلادی
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
