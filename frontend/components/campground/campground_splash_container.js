import { connect } from "react-redux";
import { fetchCampgrounds } from "../../actions/campground_actions";
import CampgroundSplash from "./campground_splash";

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
)(CampgroundSplash)