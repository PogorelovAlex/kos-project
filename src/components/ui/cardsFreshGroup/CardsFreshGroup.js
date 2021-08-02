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

import imageUrl1 from "./img/frsh-1.jpg";
import imageUrl2 from "./img/frsh-2.jpg";
import imageUrl3 from "./img/frsh-3.jpg";
import imageUrl4 from "./img/frsh-4.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "200px",
    height: "auto",
    maxHeight: "345px",
    textAlign: "center",
    "&:hover ": {
      cursor: "pointer",
      border: `solid 1px ${theme.palette.common.kosorange}`
    },
    margin: "0 13px 30px 11px",
    padding: "30px",
    boxShadow: "none"
  },
  media: {
    height: "184px",
    width: "184px",
    alignItems: "center"
  },
  mainContainer: {},
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

  const cardContent = [
    {
      title: "fluid",
      brand: "PARADISO",
      image: imageUrl1,
      price: "165 леев",
      contentText: "ТОНАЛЬНЫЙ КРЕМ-ФЛЮИД С САТИНОВЫМ ФИНИШЕМ PARADISO"
    },
    {
      title: "peeling",
      brand: "markell",
      image: imageUrl2,
      price: "100 леев",
      contentText: "МИНДАЛЬНЫЙ ПИЛИНГ ДЛЯ ЛИЦА, Markell Professional"
    },
    {
      title: "patches",
      brand: "reloius",
      image: imageUrl3,
      price: "325 леев",
      contentText: "ПАТЧИ ГИДРОГЕЛЕВЫЕ KOREAN SECRET MAKE UP & CARE"
    },
    {
      title: "tuosh",
      brand: "tuosh",
      image: imageUrl4,
      price: "325 леев",
      contentText: " ТУШЬ ДЛЯ РЕСНИЦ TOUCHÉ СУПЕРОБЪЕМ И РАЗДЕЛЕНИЕ КОРИЧНЕВАЯ"
    }
  ];
  const card = (
    <React.Fragment>
      {cardContent.map((card, index) => (
        <Card key={`${card.title}${index}`} className={classes.root}>
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
              В корзину
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
