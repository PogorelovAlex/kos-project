import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  mainContainer: {},
  cardButton: {
    width: "100%",
    backgroundColor: theme.palette.common.maingreen,
    "&:hover": {
      backgroundColor: theme.palette.common.kosorange
    }
  }
}));

function CardsHitGroup(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item className={classes.mainContainer}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/img/chg-1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              130 леев
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ТУШЬ ДЛЯ РЕСНИЦ LIFT UP & VOLUME MASCARA LA MIA ITALIA
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.cardButton}
            startIcon={<ShoppingCartIcon />}
          >
            В корзину
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CardsHitGroup;
