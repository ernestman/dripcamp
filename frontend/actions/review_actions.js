import * as ReviewApiUtil from "../util/review_api_util";

// export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const GET_REVIEW = "GET_REVIEW";
export const DESTROY_REVIEW = "DESTROY_REVIEW";
export const CLEAR_REVIEWS = "CLEAR_REVIEWS"

// export const getAllReviews = (reviews) => {
//     return {
//         type: GET_ALL_REVIEWS,
//         reviews
//     }
// }

export const getReview = (review) => {
    return {
        type: GET_REVIEW,
        review
    }
}

export const deleteReview = (review) => {
    return {
        type: DESTROY_REVIEW,
        reviewId: review.id
    }
}

export const clearReviews = () => {
    return {
        type: CLEAR_REVIEWS
    }
}

export const newReview = (review) => (dispatch) => {
    return (
        ReviewApiUtil.createReview(review)
            .then( review => dispatch(getReview(review)) )
    )
}

export const fetchReview = (id) => (dispatch) =>  {
    return (
        ReviewApiUtil.singleReview(id)
            .then( review => dispatch(getReview(review)) )
    )
}

export const destroyReview = (reviewId) => (dispatch) => {
    return (
        ReviewApiUtil.deleteReview(reviewId)
            .then( review => dispatch(deleteReview(review)) )
    )
}
