import {combineReducers} from "redux";
import modalReducer from "./modal_reducer";
import boundsFilterReducer from "./bounds_filter_reducer";
import filtersReducer from "./filters_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    boundsFilter: boundsFilterReducer,
    filters: filtersReducer
})

export default uiReducer;