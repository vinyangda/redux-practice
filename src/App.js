import "./App.css";
import { useState } from "react";
import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    //dispatch 가 넘겨주는 Action을 Reducer로 보내준다
    //type은 Action의 이름이다

    //payload
    // 내가 원하는 특정한 값을 보내기 위해 필요하다.
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "vin", password: "123" } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>

      <div>{count}</div>
      <button onClick={increase}>증가</button>
      <button onClick={login}>login</button>
      <button>감소 버튼 만들기</button>
      <Box />
    </div>
  );
}

export default App;

//npm i redux
//npm i react-redux
