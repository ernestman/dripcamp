import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = (preloadedState={}) => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
    // remember to re-add logger later with if
)

export default configureStore;