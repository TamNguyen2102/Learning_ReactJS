import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";
import Info from "./components/Info";
import IntroductionComponent from "./components/IntroductionComponent";
import PeopleSection from "./components/PeopleSection";
import GlobalStyles from "./components/styles/Global";
import { Introduction } from "./components/styles/Introduction.styled";

const theme = {
  colors: {
    header: "#f8f9fa",
    body: "red",
    text: "#fff",
    accent: "#0d6efd",
  },
  mobile: "768px",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Info />
        <Body />
        <PeopleSection />
        <IntroductionComponent
          navHeight="400"
          text="Ready to get started? Sign up now!"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
