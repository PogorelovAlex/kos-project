import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
    alignItems: "center"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "82rem",
    height: "100%"
  },
  logoContainer: {
    paddingLeft: "50px",
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
    alignItems: "center"
  },
  navTitle: {
    fontSize: "30px",
    textTransform: "uppercase",
    color: "#7bb11a",
    fontFamily: "Philosopher",
    letterSpacing: "-0.05",
    alignItems: "center",
    marginTop: "1.7rem",
    marginRight: "3.5rem"
  },
  tabContainer: {
    paddingBottom: "1rem",
   
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "12px",
    
  },

  menu: {
    backgroundColor: theme.palette.common.arcblue,
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
    backgroundColor: theme.palette.common.arcblue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
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

  // const menuOptions = [
  //   {
  //     name: "О КОМПАНИИ",
  //     link: "/company",
  //     activeIndex: 1,
  //     selectedIndex: 0
  //   },
  //   {
  //     name: "КАТАЛОГ",
  //     link: "/catalog",
  //     activeIndex: 1,
  //     selectedIndex: 1
  //   },
  //   {
  //     name: "КОНТАКТЫ",
  //     link: "/contacts",
  //     activeIndex: 1,
  //     selectedIndex: 2
  //   },
  //   {
  //     name: "ПАРТНЕРЫ",
  //     link: "/partners",
  //     activeIndex: 1,
  //     selectedIndex: 3
  //   },
  //   {
  //     name: "НОВОСТИ",
  //     link: "/news",
  //     activeIndex: 1,
  //     selectedIndex: 4
  //   }
  // ];
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
        case "/estimate":
          props.setValue(5);
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
            key={`${route}${index}`}
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

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSeleted
            }}
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
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
        <Grid item sm className={classes.logo}>
          <Button className={classes.logoContainer} disableRipple>
            <img alt="company logo" src={logo} className={classes.logo} />
          </Button>
        </Grid>
        <Grid item sm={6} className={classes.navbarContainer}>
          <Grid item className={classes.navTitleContainer}>
            <Typography className={classes.navTitle}>
              БЕЛОРУССКАЯ КОСМЕТИКА
            </Typography>
          </Grid>
          <React.Fragment>
            <ElevationScroll>
              <AppBar className={classes.appbar}>
                <Toolbar disableGutters>{matches ? drawer : tabs}</Toolbar>
              </AppBar>
            </ElevationScroll>
          </React.Fragment>
        </Grid>
        <Grid item sm className={classes.navbarContainer}>
          <Typography>Корзина</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
