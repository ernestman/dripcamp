import { connect } from "react-redux";
import { fetchCampground, clearCampgrounds } from "../../actions/campground_actions";
import CampgroundSplash from "./campground_splash";

const mapStateToProps = (state) => {
    return {
        campgrounds: Object.values(state.entities.campgrounds)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampground: (id) => dispatch(fetchCampground(id)),
        // clearCampgrounds: () => dispatch(clearCampgrounds())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampgroundSplash)