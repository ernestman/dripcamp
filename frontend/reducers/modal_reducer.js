import {OPEN_MODAL, CLOSE_MODAL} from "";

const modalReducer = (state=null, action) => {
    Object.freeze(state);
    let nextState = state;

    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            nextState = null;
            return nextState;
        default:
            return state;
    }



}

export default modalReducer;