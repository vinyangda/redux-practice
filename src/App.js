import "./App.css";
import { useState } from "react";
import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
    //dispatch 가 넘겨주는 Action을 Reducer로 보내준다
    //type은 Action의 이름이다
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
