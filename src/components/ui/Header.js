import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";

import Cart from "./cart/Cart";

import headerBackground from "../../assets/headerBG.jpg";
import logo from "../../assets/logo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: "100%",
    height: "8.8rem",
    backgroundImage: `url(${headerBackground})`,
    backgroundPosition: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      
    },
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "71.4em",
    height: "100%"
  },
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    height: "5.5em",
    alignItems: "center"
  },
  navTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  navTitle: {
    fontSize: "30px",
    textTransform: "uppercase",
    color: "#7bb11a",
    fontFamily: "Philosopher",
    letterSpacing: "-0.05",
    alignItems: "center",
    marginTop: "1.7rem"
  },
  navbarContainer:{
    justifyContent:"center"
  },
  tabContainer: {
    paddingBottom: "1rem"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "12px"
  },

  menu: {
    backgroundColor: theme.palette.common.arcGrey,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    marginTop: "10px",
    "&:hover": {
      opacity: 1
    },
    color: "white"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawer: {
    backgroundColor: theme.palette.common.maingreen,
    width: "200px"
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
    "&:hover": {
      color: theme.palette.common.kosorange
    }
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": { opacity: 1 }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcorange
  },
  appbar: {
    backgroundColor: "transparent",
    color: "black",
    zIndex: theme.zIndex.modal + 1,
    position: "inherit",
    paddingBottom: "1rem"
  },
  supportLogo: {
    color: "#FFF",
    fontSize: "2.5rem",
    marginRight: "5px"
  }
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const routes = [
    { name: "О КОМПАНИИ", link: "/company", activeIndex: 1 },
    { name: "КАТАЛОГ", link: "/catalog", activeIndex: 2 },
    { name: "КОНТАКТЫ", link: "/contacts", activeIndex: 3 },
    { name: "ПАРТНЕРЫ", link: "/partners", activeIndex: 4 },
    { name: "НОВОСТИ", link: "/news", activeIndex: 5 }
  ];
  useEffect(() => {
    [...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.seletedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });
  }, [props.value, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="none"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route.name}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.araiaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid container className={classes.headerContainer}>
        <Grid container item sm={2} md={3} className={classes.logo}>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            disableRipple
          >
            <img alt="company logo" src={logo} className={classes.logo} />
          </Button>
        </Grid>
        <Grid  item sm={4} md={6}  className={classes.navbarContainer}>
          <Hidden mdDown>
            <Grid
              item
              
              className={classes.navTitleContainer}
            >
              <Typography className={classes.navTitle}>
                БЕЛОРУССКАЯ КОСМЕТИКА
              </Typography>
            </Grid>
          </Hidden>

          <React.Fragment>
            <ElevationScroll>
              <AppBar className={classes.appbar}>
                <Toolbar disableGutters>{matches ? drawer : tabs}</Toolbar>
              </AppBar>
            </ElevationScroll>
          </React.Fragment>
        </Grid>
        <Hidden mdDown>
          <Grid container item md className={classes.navbarContainer}>
            <Cart />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Header;
