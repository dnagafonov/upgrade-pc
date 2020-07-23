import { combineReducers } from "redux";
import { goods } from "./goods-reducer";
import { good } from "./good-reducer";
import { categories } from "./categories-reducer";

const rootReducer = combineReducers({ goods, good, categories });

export { rootReducer };
