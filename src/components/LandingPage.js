import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

import Slickslider from "./ui/slider/Slickslider";

const useStyles = makeStyles(theme => ({}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Typography>Slider</Typography>
      <Slickslider />
    </Grid>
  );
}

export default LandingPage;
