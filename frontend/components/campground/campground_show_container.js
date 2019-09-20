import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchCampground} from "../../actions/campground_actions";
import CampgroundShow from "./campground_show";

const mapStateToProps = (state, ownProps) => {
    // debugger
    const campgroundId = ownProps.match.params.campId;
    const hostImgUrl = (state.entities.campgrounds[campgroundId]) ? state.entities.campgrounds[campgroundId].hostImgUrl : "";
    // const result = state.entities.campgrounds[campgroundId];
    // debugger
    return {
        campground: state.entities.campgrounds[campgroundId],
        hostImgUrl: hostImgUrl
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