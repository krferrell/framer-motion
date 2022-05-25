import "./App.css";
import { Home, StyledCompEx } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components";
import {
  PassObjectInComponent,
  ActivateNamedVariantFromComponent,
} from "./use-animation/SimpleControlsStart";
import {
  DynamicControlsStart,
  NonDynamicControlsStart,
} from "./use-animation/DynamicControlsStart";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact="exact" element={<Home />} />
        <Route path="/styled" exact="exact" element={<StyledCompEx />} />
      </Routes> */}
      {/* <PassObjectInComponent/> */}
      {/* <ActivateNamedVariantFromComponent /> */}
      <DynamicControlsStart/>
    </div>
  );
}

export default App;
