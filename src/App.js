import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./DemoComponent/DemoComponent.js";
import DemoFunction from "./DemoComponent/DemoFunction";
import ExLayOut from "./ExLayOut/ExLayOut";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoState/DemoState";

function App() {
  return (
    <div className="App">
      {/* --- day 1--- */}
      {/* <DemoComponent /> */}
      {/* <DemoFunction /> */}
      {/* <ExLayOut /> */}
      {/* --- day 2 --- */}
      {/* <RenderWithMap /> */}
      {/* <DataBinding /> */}
      <DemoState />
    </div>
    // jsx: html+js
  );
}

export default App;
