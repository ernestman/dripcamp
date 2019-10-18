import {connect} from "react-redux";
import ReviewShow from "./review_show";
import {newReview, destroyReview, fetchReviews} from "../../actions/review_actions";
import {openModal} from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        reviews: state.entities.reviews,
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        newReview: (review) => dispatch(newReview(review)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow)