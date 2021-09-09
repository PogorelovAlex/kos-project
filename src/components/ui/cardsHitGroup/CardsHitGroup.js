import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

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
    width: "100%",
    
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
  },
  sliderContainer: {
    width: "1140px",
    height: "auto",
    // flexWrap:"nowrap",
    marginTop: "40px",

    [theme.breakpoints.down("md")]: {
      maxWidth: "948px"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: "750px"
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: "600px"
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: "350px"
    },
    
  },
  slide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignItems: "center"
  },
  sliderItem: {
    width: "100%",
    height: "100%"
  }
}));

function CardsHitGroup(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const cardContent = [
    {
      title: "mascara",
      brand: "sp relui bel",
      image: imageUrl1,
      price: "130 леев",
      contentText: "ТУШЬ ДЛЯ РЕСНИЦ LIFT UP & VOLUME MASCARA LA MIA ITALIA"
    },
    {
      title: "fluid",
      brand: "markell",
      image: imageUrl2,
      price: "65 леев",
      contentText: "Флюид для век с муцином улитки ,BIO-HELIX ,Markell 10мл"
    },
    {
      title: "balzam",
      brand: "markell",
      image: imageUrl3,
      price: "85 леев",
      contentText: " Бальзам-маска для волос восстанавливающая Markell"
    },
    {
      title: "crem",
      brand: "markell",
      image: imageUrl4,
      price: "75 леев",
      contentText: "Крем-перчатки для рук , с муцином улитки,Markell Bio"
    }
  ];
  const card = (
    <React.Fragment>
       
      {cardContent.map((card, index) => (
        // <div className={classes.slide}>
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
        // </div>
      ))}
      
    </React.Fragment>
  );
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
   
    <Grid container direction="row" className={classes.mainContainer}>
      <Slider className={classes.sliderContainer} {...settings}>
      {card}
      </Slider>
      
    </Grid>
   
  );
}

export default CardsHitGroup;
