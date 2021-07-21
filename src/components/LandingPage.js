import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

import Slickslider from "./ui/slider/Slickslider";

const useStyles = makeStyles(theme => ({
  mainContainer:{
    alignItems:"center",
  },
  contentContainer:{
    alignItems:"center",
    
    width:"1140px",
  },
  devider:{
    width:"100%",
    height:"1px",
    backgroundColor:"#dad9e9",
  }
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
    <Grid container direction="column" className={classes.mainContainer}>
      <Slickslider />
    
    <Grid item container  direction="column" className ={classes.contentContainer}>
      <Grid item className={classes.devider}></Grid>
    <Typography>ХИТ ПРОДАЖ</Typography>
  </Grid>
  </Grid>
  </Grid>
  );
}

export default LandingPage;
