import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";
import { HolidayContextProvider } from "./context/holidayContext";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = () => {
  return (
    <div style={wrapper}>
      <HolidayContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Main />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidayContextProvider>

    </div>
  ); Provider
}

export default App;
