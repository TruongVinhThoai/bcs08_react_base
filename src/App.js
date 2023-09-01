import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./DemoComponent/DemoComponent.js";
import DemoFunction from "./DemoComponent/DemoFunction";
import ExLayOut from "./ExLayOut/ExLayOut";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoState/DemoState";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Car from "./Ex_Car/Ex_Car";
import Ex_Car_v2 from "./Ex_Car_v2/Ex_Car_v2";
import Ex_Car_v3 from "./Ex_Car_v3/Ex_Car_v3";
import Ex_Car_v4 from "./Ex_Car_v4/Ex_Car_v4";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";

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
      {/* <DemoState /> */}
      {/* --- day 3 --- */}
      {/* <DemoProps /> */}
      {/* <Ex_Car /> */}
      {/* <Ex_Car_v2 /> */}
      {/* {<Ex_Car_v3 />} */}
      {/* <Ex_Car_v4 /> */}
      <Ex_Shoe />
    </div>
    // jsx: html+js
  );
}

export default App;
