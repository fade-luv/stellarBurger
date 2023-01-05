import { createStore } from "redux";
import initialState from "./initialState";
import reducer from "./reducers/ingredients-reducer";

const store = createStore(reducer, initialState);

export default store;