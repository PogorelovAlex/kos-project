import { createTheme } from "@material-ui/core/styles";


const mainGreen = "#8cca67";
const kosOrange = "#FFBA60";
const arcGrey = "#868686";
const white = "#fff"

export default createTheme({
  palette: {
    common: {
      white:`${white}`,
      maingreen: `${mainGreen}`,
      kosorange: `${kosOrange}`
    },
    primary: {
      main: `${mainGreen}`
    },
    secondary: {
      main: `${kosOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "myFont",
      fontSize: "14px",
      lineHeight: "1.42857143",
      color: "#000",
      "&:hover": {
        color: " #8cca67"
      }
    },
    iconButton: {
      color:"#FFFF",
      "&:hover": {
        color:"#8cca67",
       background:"#FFFF"
      }
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: mainGreen,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: mainGreen
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: mainGreen,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: mainGreen
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey
    },
    learnButton: {
      borderColor: mainGreen,
      borderWidth: 2,
      color: mainGreen,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiToggleButton: {
      root: {
        "&$selected": {
          backgroundColor: "#fff",
          color:"#8cca67",
       
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.7)",
          color:"#8cca67"
        },
      },
      }
    },
    MuiPaper: {
      elevation4:{
        boxShadow:"0",
      }
    },
    MuiInputLabel: {
      root: {
        color: mainGreen,
        fontSize: "1rem"
      }
    },
    },
    MuiInput: {
      root: {
        color: mainGreen,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${mainGreen}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${mainGreen}`
        }
      }
    }
});
