import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./cartReducer";
// const reducer = combineReducers({
//   ,
// });
export const store = createStore(
  cartReducer,
  composeWithDevTools()

  // other store enhancers if any
);
