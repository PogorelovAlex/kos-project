import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import imageUrl1 from "./img/chg-1.jpg";
import imageUrl2 from "./img/chg-2.jpg";
import imageUrl3 from "./img/chg-3.jpg";
import imageUrl4 from "./img/chg-4.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const useStyles = makeStyles(theme => ({
  root: {
    width: "220px",
    flexGrow: 1,
    height: "auto",
    maxHeight: "405px",
    textAlign: "center",
    "&:hover ": {
      cursor: "pointer"
    }
  },
  media: {
    height: "250px",
    width: "220px",
    display: "flex",
    alignItems: "center"
  },
  mainContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "680px"
    }
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
  stteper:{
    marginBottom:"50px"
  }
}));
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

function MobCardsHitGroup() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = cardContent.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
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
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
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
        {/* {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))} */}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        className={classes.steper}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default MobCardsHitGroup;
