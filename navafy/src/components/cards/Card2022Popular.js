import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import popular from './cardsimg/2022.jpg'

export const Card2022 = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia>
             <img src={popular} height="140"/>
          </CardMedia>
         <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir='rtl'>
            معروفترین های ۲۰۲۲
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
