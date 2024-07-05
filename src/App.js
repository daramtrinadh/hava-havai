import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, lightTheme } from "@adobe/react-spectrum";
import MainHome from "./components/MainHome";
import Airports from "./components/Airports";
import AirportDetails from './components/AirportDetails'

const App = () => (
  <Provider theme={lightTheme}>
    <Router>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/airports' element={<Airports />} />
        <Route path="/airport/:id" element={<AirportDetails/>}/>
      </Routes>
    </Router>
  </Provider>
);

export default App;
