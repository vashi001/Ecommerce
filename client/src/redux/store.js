import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productreducer";
import { cartReducer } from "./reducers/cartReducer";
import { thunk } from "redux-thunk";
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});
const middleware = [thunk];
//create store takes 2 arguments one is reducer and the other is middleware.. reducer is just like an action item .. if there are multiple reducers then we have to combine them to a single reducer to pass it to the create store.
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
