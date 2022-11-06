import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import stayfocused from './cardsimg/stayfocused.png'

export const CardFocusMusic = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia>
             <img src={stayfocused} height="140"/>
          </CardMedia>
         <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir='rtl'>
            تمرکز
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
