import "./App.css";
import { Home, StyledCompEx } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components";
import Svg from "./svg/Svg";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact="exact" element={<Home />} />
        <Route path="/styled" exact="exact" element={<StyledCompEx />} />
        <Route path="/svg" exact="exact" element={<Svg />} />
      </Routes>
    </div>
  );
}

export default App;