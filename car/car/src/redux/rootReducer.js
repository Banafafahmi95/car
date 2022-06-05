import { combineReducers } from "redux";
import carSlice from "./car-slice/carSlice";

const createRootReducer = () =>
  combineReducers({
    cars: carSlice,
  });

export default createRootReducer;
