import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import CreationPage from "./components/CreationPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/creation" component={CreationPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
