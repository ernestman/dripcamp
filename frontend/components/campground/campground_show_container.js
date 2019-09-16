import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchCampground} from "../../actions/campground_actions";
import CampgroundShow from "./campground_show";

const mapStateToProps = (state, ownProps) => {
    const campgroundId = ownProps.match.params.campId;
    // const result = state.entities.campgrounds[campgroundId];
    return {
        campground: state.entities.campgrounds[campgroundId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampground: (id) => dispatch(fetchCampground(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampgroundShow);