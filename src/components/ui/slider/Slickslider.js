import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  mainContainer: {
 
    
    width: "100%",
    height: "500px"
  },
  slide1: {
    width: "400px",
    height: "500px",
    backgroundColor: "green"
  },
  slide2: {
    width: "400px",
    height: "500px",
    backgroundColor: "blue"
  },
  slide3: {
    width: "400px",
    height: "500px",
    backgroundColor: "red"
  },
  slide4: {
    width: "400px",
    height: "500px",
    backgroundColor: "white"
  },
  slide5: {
    width: "400px",
    height: "500px",
    backgroundColor: "brown"
  },
  slide6: {
    width: "400px",
    height: "500px",
    backgroundColor: "yellow"
  }
}));

function Slickslider(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={classes.mainContainer}>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className={classes.slide1}>
          <h3>1</h3>
        </div>
        <div className={classes.slide2}>
          <h3>2</h3>
        </div>
        <div className={classes.slide3}>
          <h3>3</h3>
        </div>
        <div className={classes.slide4}>
          <h3>4</h3>
        </div>
        <div className={classes.slide5}>
          <h3>5</h3>
        </div>
        <div className={classes.slide6}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Slickslider;
