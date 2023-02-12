import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients-reducer";
import burgerConstructorReducer from "./burger-contrucotor-reducer";
import focusIngredientReducer from "./modal-reducer";
import orderReducer from "./order-reducer";
import registrationReducer from "./registration-reducer";
import authReducer from "./login-reducer"

import userLogginedInfoReducer from "./profileUserInfo-reducer";
const rootReducer = combineReducers({
  ingredientsReducer,
  burgerConstructorReducer,
  focusIngredientReducer,
  orderReducer,
  registrationReducer,
  authReducer,
  userLogginedInfoReducer,
});

export default rootReducer;



