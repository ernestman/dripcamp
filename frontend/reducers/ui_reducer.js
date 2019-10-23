import {combineReducers} from "redux";
import modalReducer from "./modal_reducer";
import filtersReducer from "./filter_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer
})

export default uiReducer;