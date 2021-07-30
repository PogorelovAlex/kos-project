import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

import Slickslider from "./ui/slider/Slickslider";
import CardsHitGroup from "./ui/cardsHitGroup/CardsHitGroup";
import CardsFreshGroup from "./ui/cardsFreshGroup/CardsFreshGroup";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    alignItems: "center"
  },
  contentContainer: {
    alignItems: "center",
    width: "1140px"
  },
  devider: {
    width: "100%",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "16px",
    color: "#696763",
    marginBottom: "18px",

    "&:before": {
      content: "''",
      display: "block",
      width: "40%",
      height: "1px",
      background: "#696763",
      opacity: "0.35",
      zIndex: -1,
      position: "absolute",
      bottom: "10px",
      right: "1px"
    },
    "&:after": {
      content: "''",
      display: "block",
      width: "40%",
      height: "1px",
      background: "#696763",
      opacity: "0.35",
      zIndex: -1,
      position: "absolute",
      bottom: "10px",
      left: "1px"
    }
  }
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid container direction="column" className={classes.mainContainer}>
        <Slickslider />

        <Grid
          item
          container
          direction="column"
          className={classes.contentContainer}
        >
          <div className={classes.devider}>ХИТ ПРОДАЖ</div>
        </Grid>
        <Grid item>
          <CardsHitGroup />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.contentContainer}
        >
          <div className={classes.devider}>НОВИНКИ</div>
        </Grid>
        <Grid item>
          <CardsFreshGroup />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
