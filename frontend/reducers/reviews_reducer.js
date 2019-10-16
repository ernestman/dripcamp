import {GET_ALL_REVIEWS, GET_REVIEW, DESTROY_REVIEW} from "../actions/review_actions";

const reviewsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case GET_ALL_REVIEWS:
            return action.reviews;
        case GET_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case DESTROY_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default: 
            return state;
    }
}

export default reviewsReducer;