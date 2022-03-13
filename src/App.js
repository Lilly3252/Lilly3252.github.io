import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import {Route , Switch} from "react-router-dom"


//components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillPage from "./components/MySkillPage";
import WorkPage from "./components/WorkPage";
function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/skill" component={MySkillPage} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
