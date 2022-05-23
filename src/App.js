import logo from "./logo.svg";
import "./App.css";
import { data } from "./utils/data";
import NameTag from "./nameTag/NameTag";
import { MotionComponent } from "./customComponent/CustomComp";
import { variant } from "./nameTag/variantNT";

function App() {
  return (
    <div className="App">
      <div>
        {data.map((name, index) => (
          <NameTag index={index} key={name.name} name={name.name} />
        ))}
      </div>
      <div>
        {data.map((name, index) => (
          <MotionComponent
            custom={index}
            index={index}
            key={name.name}
            variants={variant}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
