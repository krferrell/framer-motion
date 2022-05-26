import "./App.css";
import { Home, StyledCompEx } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components";
import Modal from "./Modal/Modal";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact="exact" element={<Home />} />
        <Route path="/styled" exact="exact" element={<StyledCompEx />} />
        <Route path="/modal" exact="exact" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
