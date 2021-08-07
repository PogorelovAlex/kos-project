import React,{ useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";



const useStyles = makeStyles(theme => ({
  wrapperMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "82rem",
    height: "120rem",
    backgroundColor: "#868686",
   
  }
}));

function App() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
      <div className={classes.wrapperMainContainer}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        

     <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/company"
            component={()=><div>О КОМПАНИИ</div>}
          />
          <Route
            exact
            path="/catalog"
            component={()=><div>КАТАЛОГ</div>}
          />
          <Route
            exact
            path="/contacts"
            component={()=><div>КОНТАКТЫ</div>}
          />
          <Route
            exact
            path="/partners"
            component={()=><div>ПАРТНЕРЫ</div>}
          />
          <Route
            exact
            path="/news"
            component={()=><div>НОВОСТИ</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
