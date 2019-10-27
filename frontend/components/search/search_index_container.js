import {connect} from "react-redux";
import {newFilter, updateFilter, clearFilter, clearFilters} from "../../actions/filter_actions";
import {fetchCampgrounds} from "../../actions/campground_actions";

import CampgroundSearch from "./search_index";

const mapStateToProps = (state, ownProps) => {
    return {
        campgrounds: Object.values(state.entities.campgrounds),
        filters: state.ui.filters
        // bounds: state.ui.filters["bounds"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchCampgrounds: (filters) => dispatch(fetchCampgrounds(filters)),
        // changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
        newFilter: (filter, value) => dispatch(newFilter(filter, value)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        clearFilters: () => dispatch(clearFilters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundSearch);