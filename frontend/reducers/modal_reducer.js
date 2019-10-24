import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal_actions";

const initialState = {
    modal: ""
}

const modalReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = state;

    switch(action.type) {
        case OPEN_MODAL:
            // nextState["modal"] = action.modal;
            return Object.assign({}, state, {modal: action.modal, data: action.data})
            // return nextState;
        case CLOSE_MODAL:
            nextState = "";
            return nextState;
        default:
            return state;
    }

}

export default modalReducer;