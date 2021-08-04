import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";

import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
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
    fontFamily: "RobotoLight",
    fontSize: "16px",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "34px",
    width: "34px",
    marginTop: "6px",
    padding: "6px",
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
    marginBottom: "0",
    letterSpacing: "8px"
  },
  footerLogoText: {
    color: "white",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    textAlign: "center",
    letterSpacing: "5px"
  },
  iconText: {
    color: "#ffff",
    fontSize: "14px",
    fontFamily: "Roboto",
    textDecoration: "none",
    marginTop: "20px"
  },
  iconContainer: {
    marginLeft: "2px",
    marginBottom: "20px"
  },
  copyrightBlock: {
    color: "#FFF",
    fontSize: "14px",
    fontFamily: "Roboto"
  },
  support: {
    margin: "3em",
    textAlign: "right"
  },
  phoneIconContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  supportPhone: {
    color: "#FFF",
    fontSize: "18px",
    fontFamily: "RobotoLight",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.common.kosorange
    }
  },
  supportLogo: {
    color: "#FFF",
    fontSize: "2.5rem",
    marginRight: "5px"
  },
  owner: {
    color: "#FFF",
    fontSize: "14px",
    fontFamily: "Roboto",
    marginTop: "24px"
  },
  ownerInfo: {
    color: "#FFF",
    fontSize: "14px",
    fontFamily: "Roboto",
    margin: "4px 0 4px 0"
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
                  component={"a"}
                  href="http://www.vk.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="vk logo" src={vk} className={classes.icon} />
                </Grid>
                <Grid
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
                  <p>Copyright 2021 - APO</p>
                  <p>Разработка и продвижение сайтов: APO</p>
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
                }}
                to="/company"
              >
                О компании
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(2);
                }}
                to="/catalog"
                className={classes.link}
              >
                Каталог
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(3);
                }}
                to="/contacts"
                className={classes.link}
              >
                Контакты
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(4);
                }}
                to="/partners"
                className={classes.link}
              >
                Партнеры
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(5);
                }}
                to="/news"
                className={classes.link}
              >
                Новости
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.support}>
            <Grid
              container
              direction="row"
              className={classes.phoneIconContainer}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/contacts"
              >
                <PhoneInTalkOutlinedIcon className={classes.supportLogo} />
              </Grid>
              <Grid item className={classes.link}>
                <Typography className={classes.link}>
                  Техническая поддержка:
                </Typography>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(3)}
                  to="/contacts"
                  className={classes.supportPhone}
                >
                  +7 931 58 28 525
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.owner}>
                Владелец интернет-магазина: ООО «San Florin»
              </Grid>
              <Grid item>
                <p className={classes.ownerInfo}>
                  Юр.адрес: Республика Беларусь, г. Минск, 220013, ул. П.Бровки,
                  22, каб. 210а
                </p>
                <p className={classes.ownerInfo}>
                  Регистрация №100281103, 06.05.2021, Мингорисполком
                </p>
                <p className={classes.ownerInfo}>
                  Регистрация в торговом реестре Республики Беларусь от
                  13.08.2019 УНП 100281103
                </p>
                <p className={classes.ownerInfo}>
                  Режим работы: пн-пт, 9.00-17.00
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
}
