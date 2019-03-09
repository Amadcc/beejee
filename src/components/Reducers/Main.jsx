import { combineReducers } from "redux";
import todos from "./ToDo";
import visibilityFilter from "./Filter";

export default combineReducers({
  todos,
  visibilityFilter
});
