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
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import imageUrl1 from "./img/chg-1.jpg";
import imageUrl2 from "./img/chg-2.jpg";
import imageUrl3 from "./img/chg-3.jpg";
import imageUrl4 from "./img/chg-4.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "260px",
    height: "auto",
    maxHeight: "405px",
    textAlign: "center",
    "&:hover ": {
      cursor: "pointer",
      border: `solid 1px ${theme.palette.common.kosorange}`
    },
    margin: "0 13px 30px 11px",
    padding: "30px",
    boxShadow: "none",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "220px",
      margin: "0 5px 30px 5px",
      padding: "10px"
    }
  },
  media: {
    height: "184px",
    width: "184px",
    alignItems: "center"
  },
  mainContainer: {
    width: "100%"
  },
  cardButton: {
    width: "100%",
    color: "#FFFF",
    backgroundColor: theme.palette.common.maingreen,
    "&:hover": {
      backgroundColor: theme.palette.common.kosorange
    },
    contentContainer: {}
  },
  productinfoTitle: {
    fontFamily: "Open Sans sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    maxHeight: "40px",
    height: "40px"
  }
}));

function CardsHitGroup(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const cardContent = [
    {
      title: "mascara",
      brand: "sp relui bel",
      image: imageUrl1,
      price: "130 ????????",
      contentText: "???????? ?????? ???????????? LIFT UP & VOLUME MASCARA LA MIA ITALIA"
    },
    {
      title: "fluid",
      brand: "markell",
      image: imageUrl2,
      price: "65 ????????",
      contentText: "?????????? ?????? ?????? ?? ?????????????? ???????????? ,BIO-HELIX ,Markell 10????"
    },
    {
      title: "balzam",
      brand: "markell",
      image: imageUrl3,
      price: "85 ????????",
      contentText: " ??????????????-?????????? ?????? ?????????? ?????????????????????????????????? Markell"
    },
    {
      title: "crem",
      brand: "markell",
      image: imageUrl4,
      price: "75 ????????",
      contentText: "????????-???????????????? ?????? ?????? , ?? ?????????????? ????????????,Markell Bio"
    }
  ];
  const card = (
    <React.Fragment>
      {cardContent.map((card, index) => (
       
          <Card key={`${card.title}${index}`} className={`${classes.root}`}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={card.image}
                title={card.title}
              />
              <CardContent className={classes.contentContainer}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.price}
                </Typography>
                <Typography
                  className={classes.productinfoTitle}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {card.contentText}
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
                ?? ??????????????
              </Button>
            </CardActions>
          </Card>
       
      ))}
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      {card}
    </Grid>
  );
}

export default CardsHitGroup;
