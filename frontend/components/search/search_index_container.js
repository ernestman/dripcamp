import {connect} from "react-redux";
import {updateFilter} from "../../actions/filter_actions";
import {fetchCampgrounds} from "../../actions/campground_actions";

import CampgroundSearch from "./search_index";

const mapStateToProps = (state, ownProps) => {
    return {
        campgrounds: Object.values(state.entities.campgrounds),
        // queryString: ownProps.location.search
        // bounds: state.ui.filters["bounds"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchCampgrounds: (filters) => dispatch(fetchCampgrounds(filters)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundSearch);