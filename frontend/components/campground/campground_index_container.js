import {connect} from "react-redux";
import {fetchCampgrounds} from "../../actions/campground_actions";
import CampgroundIndex from "./campground_index";

const mapStateToProps = (state) => {
    return {
        campgrounds: Object.values(state.entities.campgrounds)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampgrounds: () => dispatch(fetchCampgrounds())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampgroundIndex)