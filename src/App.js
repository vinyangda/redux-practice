import "./App.css";
import { useState } from "react";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;

//npm i redux
//npm i react-redux
