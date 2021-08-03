import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";



import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";


const useStyles = makeStyles(theme => ({
  footer: {
    background: "#568203",
    width: "100%",
    height: "14rem",
    zIndex: 1302,
    position: "relative",
    marginTop:"50px"
    
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0,75rem",
    fontWeight: "bold",
    textDecoration:"none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height:"2.5em",
      width:"2.5em"
    }
  },
  socialContainer: {
    position:"absolute",
    bottom:"2em",
    right:"1.5em",
    [theme.breakpoints.down("xs")]: {
      right:"0.6em"
    }
  },
  footerLogo:{
    color: "white",
    fontFamily:"Pacifico",
    fontSize:"28px",
    fontStyle:"italic",
    marginBottom:"0"

  },
  footerLogoText:{
    color: "white",
    fontSize:"16px",
    fontFamily:"Philosopher",
    fontStyle:"normal",
    textAlign:"center",
    
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            
            <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>
              <Typography className={classes.footerLogo}>
                San Florin
                </Typography>
                <Typography className={classes.footerLogoText}>
                  cosmetics
                  </Typography>
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>
              Следите за нами в соц сетях
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(0)}} to="/services">
              Services
            </Grid>

            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1);props.setSelectedIndex(1)}}
              to="/customservices"
              className={classes.link}
            >
              Custom Software Development
            </Grid>

            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1);props.setSelectedIndex(2)}}
              to="/mobileapps"
              className={classes.link}
            >
              IOS/Android App Devepment
            </Grid>

            <Grid item component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(3)}} to="/websites" className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              The Revolution
            </Grid>

            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Vision
            </Grid>

            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Technology
            </Grid>

            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              About us
            </Grid>

            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              History
            </Grid>

            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact" className={classes.link}>
                Contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      {/* <img
        alt="black decorative slash"
        src={footerBackground}
        className={classes.adornment}
      /> */}
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src ={facebook} className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src ={twitter} className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src ={instagram} className={classes.icon}/>
        </Grid>

      </Grid>
    </footer>
  );
}