import React,{ useState } from "react";
import { makeStyles,withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Slickslider from "./ui/slider/Slickslider";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
 
    
}));



function LandingPage() { 
    return (
        <Grid container >
            <Slickslider/>


            <Typography> Основная страница</Typography>
        </Grid>
      );
    }
    
    export default LandingPage;

