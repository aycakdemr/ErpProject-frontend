import { combineReducers } from "redux";
import todolistReducer from "./reducers/todolistReducer";

const rootReducer = combineReducers({
    todolist : todolistReducer,
})

export default rootReducer;