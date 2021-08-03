import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";

import instagram from "../../assets/instagram.png";
import vk from "../../assets/vk.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#568203",
    width: "100%",
    height: "14rem",
    zIndex: 1302,
    position: "relative",
    marginTop: "50px"
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
    position: "absolute",
    background: "#568203"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0,75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("xs")]: {
      height: "1.5em",
      width: "1.5em"
    }
  },

  footerLogo: {
    color: "white",
    textAlign: "flex-start",
    fontFamily: "Pacifico",
    fontSize: "28px",
    fontStyle: "italic",
    marginBottom: "0"
  },
  footerLogoText: {
    color: "white",
    fontSize: "16px",
    fontFamily: "Philosopher",
    fontStyle: "normal",
    textAlign: "center"
  },
  iconText: {
    color: "#ffff",
    fontSize: "14px",
    fontFamily: "Roboto",
    textDecoration: "none"
  },
  iconContainer: {
    marginLeft: "2px",
    marginBottom: "20px"
  },
  copyrightBlock: {
    color: "#FFF",
    fontSize: "14px",
    fontFamily: "Roboto"
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
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                <Typography className={classes.footerLogo}>
                  San Florin
                </Typography>
                <Typography className={classes.footerLogoText}>
                  cosmetics
                </Typography>
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.iconText}
              >
                Следите за нами в соц сетях
              </Grid>

              <Grid
                container
                justify="flex-start"
                spacing={2}
                className={classes.iconContainer}
              >
                <Grid
                  item
                  component={"a"}
                  href="http://www.facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="facebook logo"
                    src={facebook}
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.vk.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="vk logo" src={vk} className={classes.icon} />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="instagram logo"
                    src={instagram}
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.youtube.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="youtube logo"
                    src={youtube}
                    className={classes.icon}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={classes.copyrightBlock}>
                  <p>Copyright 2021 - ALPO</p>
                  <p>Разработка и продвижение сайтов:</p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
              >
                Services
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/customservices"
                className={classes.link}
              >
                Custom Software Development
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                IOS/Android App Devepment
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/websites"
                className={classes.link}
              >
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
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About us
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
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
    </footer>
  );
}
