import { combineReducers } from "redux";
import { goods } from "./goods-reducer";

const rootReducer = () => combineReducers({ goods });

export { rootReducer };
