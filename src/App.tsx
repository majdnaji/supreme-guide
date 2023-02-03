import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tour from "./components/Tour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className=" absolute top-0 p-2 z-10 ">
        <div>click anywhere to start</div>
        <div>press any key to change camera</div>
      </div>
      <Tour />
    </div>
  );
}

export default App;
