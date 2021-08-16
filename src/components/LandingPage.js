import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import Slickslider from "./ui/slider/Slickslider";
import CardsHitGroup from "./ui/cardsHitGroup/CardsHitGroup";
import CardsFreshGroup from "./ui/cardsFreshGroup/CardsFreshGroup";
import logo from "../assets/logoButtonBG.jpg";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    alignItems: "center",
    flexWrap:"nowrap"
  },
  contentContainer: {
    alignItems: "center",

    width: "81.6rem"

   
  },

  devider: {
    width: "100%",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "16px",
    color: "#696763",
    marginBottom: "30px",
    marginTop: "15px",

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
  },
  newsContainer: {
    alignItems: "center",

    width: "81.6rem",

  
    height: "220px",
    marginBottom: "30px",
    flexWrap:"nowrap"
  },
  newsLogo: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "285px",
    maxHeight: "5rem",
    alignItems: "center"
  },
  newsContent: {
    display: "block",
    color: "#272727",
    fontSize: "28px",
    fontWeight: "300",
    fontFamily: "MuseoSans100,sans-serif",
    marginBottom: "25px",
    lineHeight: "1",
    "&:hover": {
      color: theme.palette.common.maingreen,
      backgroundColor: "transparent"
    }
  },
  newsContentText: {
    display: "block",
    color: "#272727",
    fontSize: "14px",
    fontFamily: "MuseoSans100,sans-serif"
  },
  aboutText: {

    maxWidth: "81.6rem",

    
    fontSize: "16px",
    fontFamily: "MuseoSans100,sans-serif",
    color: "#404040",
    lineHeight: "32px"
  }
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
  
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
        <Grid
          item
          container
          direction="column"
          className={classes.contentContainer}
        >
          <div className={classes.devider}>НОВОСТИ</div>
        </Grid>
        <Grid container direction="row" className={classes.newsContainer}>
          <Grid item sm={3}>
            <Button
              component={Link}
              to="/"
              className={classes.newsLogo}
              disableRipple
            >
              <img alt="promo logo" src={logo} className={classes.logo} />
            </Button>
          </Grid>
          <Grid item sm={9}>
            <Button
              component={Link}
              to="/"
              className={classes.newsContent}
              disableRipple
            >
              ПРИГЛАШАЕМ В НОВЫЙ МАГАЗИН БЕЛОРУССКОЙ КОСМЕТИКИ BELARUS COSMETIC
            </Button>
            <Typography className={classes.newsContentText}>
              {" "}
              Aдрес: ул. Алеко Руссо 2/2 (над подземном переходе рядом с
              Vaikiki)
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.contentContainer}
        >
          <div className={classes.devider}>О НАС</div>
        </Grid>
        <Grid item>
          <Typography className={classes.aboutText}>
            <p>
              Представляет Вашему вниманию Молдова косметику и парфюмерию,
              бытовую химию и зубную пасту от производителей Белорусии и
              Украины. Наша продукция не содержит ГМО (генетически
              модифицированных организмов) и опасных добавок с Е-маркировкой.
            </p>

            <p>
              На сегодняшний день, компания San Florin представлена сетью
              магазинов розничной сети, и оптовой базой расположенной в центре
              столицы. В сети наших магазинов работают продавцы-консультанты,
              которые помогут Вам сделать правильный выбор.
            </p>
          </Typography>
        </Grid>
      </Grid>
    
  );
}

export default LandingPage;
