import { combineReducers } from "redux";

import path from "./path";
import modal from "./modal";
import filter from "./filter";

export default combineReducers({
	path,
	modal,
	filter,
});