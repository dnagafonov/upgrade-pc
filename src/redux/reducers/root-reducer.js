import { combineReducers } from "redux";
import { goods } from "./goods-reducer";
import { good } from "./good-reducer";

const rootReducer = combineReducers({ goods, good });

export { rootReducer };
