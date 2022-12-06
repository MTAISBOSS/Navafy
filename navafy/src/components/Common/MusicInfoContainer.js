import React from 'react';
import Grid from '@mui/material/Grid';
import MenuList from '@mui/material/MenuList';
import { ListItem } from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Picture from '@mui/icons-material/Image';
import { MenuItem } from '@mui/material';
const MusicInfoContainer =(props) =>{
    const id=props.id;
    return(
        <MenuItem style={{width:'100%',height:props.height,backgroundColor:"white",opacity:'1',border:'none',borderRadius:'5px',color:"black",margin:"10px"}}>
            <Grid container xs={12} direction='row-reverse'>
                <Grid item xs={0.25}><h8>{id}</h8></Grid>
                <Grid sx={{"& > :not(style)": {textAlign:'center'}}} item xs={0.75}><Picture style={{marginTop:5}}/></Grid>
                <Grid item container xs={1.5} direction='column'>
                    <Grid item xs={0.75}>{props.name}</Grid>
                    <Grid item xd={0.75}>hi</Grid>
                </Grid>
            </Grid>
        </MenuItem>
    );
};
export default MusicInfoContainer;