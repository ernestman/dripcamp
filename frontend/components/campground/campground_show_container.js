import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchCampground, clearCampgrounds} from "../../actions/campground_actions";
import {fetchReviews, clearReviews} from "../../actions/review_actions";
import CampgroundShow from "./campground_show";

const mapStateToProps = (state, ownProps) => {
    const campgroundId = ownProps.match.params.campId;
    const hostImgUrl = (state.entities.campgrounds[campgroundId]) ? state.entities.campgrounds[campgroundId].hostImgUrl : "";
    return {
        campground: state.entities.campgrounds[campgroundId],
        hostImgUrl: hostImgUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampground: (id) => dispatch(fetchCampground(id)),
        fetchReviews: () => dispatch(fetchReviews()),
        clearCampgrounds: () => dispatch(clearCampgrounds()),
        clearReviews: () => dispatch(clearReviews())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampgroundShow);