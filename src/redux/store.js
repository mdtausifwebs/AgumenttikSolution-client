import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ReducerUser } from "../redux/ReducerUser";
const reducer = combineReducers({
  // here we will be adding reducers
  reducer:ReducerUser,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore(
  {
    reducer,
  },
  customizedMiddleware
);
export default store;
