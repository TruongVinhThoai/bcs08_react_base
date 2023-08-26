import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./DemoComponent/DemoComponent.js";
import DemoFunction from "./DemoComponent/DemoFunction";
import ExLayOut from "./ExLayOut/ExLayOut";

function App() {
  return (
    <div className="App">
      <DemoComponent />
      {/* <DemoFunction /> */}
      <ExLayOut />
    </div>
    // jsx: html+js
  );
}

export default App;
