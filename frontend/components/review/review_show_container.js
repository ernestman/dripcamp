import {connect} from "react-redux";
import ReviewShow from "./review_show";
import {newReview, destroyReview, updateReview} from "../../actions/review_actions";
import {openModal} from "../../actions/modal_actions";
import {fetchCampground} from "../../actions/campground_actions";

const mapStateToProps = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchCampground: (id) => dispatch(fetchCampground(id)),
        newReview: (review) => dispatch(newReview(review)),
        updateReview: (review) => dispatch(updateReview(review)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
        openModal: (modal, review) => dispatch(openModal(modal, review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow)