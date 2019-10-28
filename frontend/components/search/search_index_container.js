import {connect} from "react-redux";
import {updateFilter, clearFilters} from "../../actions/bounds_filter_actions";
import {singleFilter, removeFilter, removeAllFilters} from "../../actions/filter_actions";

import CampgroundSearch from "./search_index";

const mapStateToProps = (state, ownProps) => {
    return {
        campgrounds: Object.values(state.entities.campgrounds),
        filters: state.ui.filters,
        bounds: state.ui.boundsFilter.bounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        singleFilter: (filter) => dispatch(singleFilter(filter)),
        removeFilter: (filter) => dispatch(removeFilter(filter)),
        removeAllFilters: () => dispatch(removeAllFilters()),
        
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        clearFilters: () => dispatch(clearFilters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundSearch);