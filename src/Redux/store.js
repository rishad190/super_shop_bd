import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./cartReducer";
const reducer = combineReducers({
  cartReducer,
});
export const store = createStore(
  reducer,
  composeWithDevTools()

  // other store enhancers if any
);
