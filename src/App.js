import "./App.css";
import { Home, Hovers, StyledCompEx } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components";
import Svg from "./svg/Svg";
import SimpleControls from "./use-animation/SimpleControls";
import { Dynamic, NonDynamic } from "./use-animation/DynamicControls";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/styled" exact element={<StyledCompEx />} />
        <Route path="/hovers" exact element={<Hovers />} />
      </Routes>
    </div>
  );
}

export default App;