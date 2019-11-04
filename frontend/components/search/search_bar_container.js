import {connect} from "react-redux";
import SearchBar from "./search_bar";

import {clearCampgrounds} from "../../actions/campground_actions";
import {singleFilter} from "../../actions/filter_actions";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCampgrounds: () => dispatch(clearCampgrounds()),
        singleFilter: (filter) => dispatch(singleFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);