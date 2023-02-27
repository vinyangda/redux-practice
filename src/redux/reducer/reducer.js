let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log(action);
  //   if (action.type === "INCREMENT") {
  //     return;
  //     //내가 모르는 state가 있을 수 있으니 기본에 받은 객체를 복사해, 새로운 객체를 변환한다.
  //   }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
  //리턴값이 기본이다.
}

export default reducer;
