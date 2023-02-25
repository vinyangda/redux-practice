import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(counterReducer);

export default store;
