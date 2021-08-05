import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

import imageUrl1 from "./img/1.jpg";
import imageUrl2 from "./img/2.jpg";
import imageUrl3 from "./img/3.jpg";
import imageUrl4 from "./img/4.jpg";
import imageUrl5 from "./img/5.jpg";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  sliderContainer: {

    width: "1140px",
    height: "auto",
    marginTop:"40px"
  },
  slide: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width: "100%",
    alignItems:"center"
  },
  sliderItem:{
    width:"100%",
    height:"100%"
  },
  
}));

function Slickslider(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed:1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true
  };

  return (
    <Grid item className={classes.sliderContainer}>
     
      <Slider {...settings}>
        <div className={classes.slide}>
        <img src={imageUrl1} className={classes.sliderItem} />
        </div>
        <div className={classes.slide}>
        <img src={imageUrl2} className={classes.sliderItem} />
        </div>
        <div className={classes.slide}>
        <img src={imageUrl3} className={classes.sliderItem} />
        </div>
        <div className={classes.slide}>
        <img src={imageUrl4} className={classes.sliderItem} />
        </div>
        <div className={classes.slide}>
        <img src={imageUrl5} className={classes.sliderItem} />
        </div>
       
      </Slider>
    </Grid>
  );
}

export default Slickslider;
