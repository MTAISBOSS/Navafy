import { AddBox } from '@mui/icons-material'
import {Box,Grid} from '@mui/material'
import { Stack } from '@mui/system'
import {CardRockNRoll} from './cards/CardRockNRoll'
import {Card20s} from './cards/Card20s'
import {Card2022} from './cards/Card2022Popular'
import {CardFocusMusic} from './cards/CardFocusMusic'
import {CardClassic} from './cards/CardClassic'
import { red } from '@mui/material/colors';
import { Navbar } from './components/Navbar';

const color = red[500];

export const Homepagegrid = () => {
    return (
  <> 
  <div className='App' dir='rtl'>
  <Navbar/>
 </div>
<Grid container  margin={15}>
    <Grid item md={12} my={5}>
        <Box>
            
        </Box>
    </Grid>
    <Grid item md={2}>
    <CardRockNRoll/>
</Grid>
<Grid item md={2}>
    <Card20s/>
</Grid>
    <Grid item md={2}>
    <Card2022/>
</Grid>
<Grid item md={2}>
    <CardClassic/>
</Grid>
<Grid item md={4}>
    <CardFocusMusic/>
</Grid>
 

    <Grid item md={12} my={5}>
        <Box>
            playlist
        </Box>
    </Grid>
    <Grid item md={2}>
    <CardFocusMusic/>
</Grid>
<Grid item md={2}>
    <CardFocusMusic/>
</Grid>
    <Grid item md={2}>
    <CardFocusMusic/>
</Grid>
<Grid item md={2}>
    <CardFocusMusic/>
</Grid>
<Grid item md={4}>
    <CardFocusMusic/>
</Grid>


</Grid>
</>

        
    )  
}


