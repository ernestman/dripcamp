import {connect} from "react-redux";
import SearchBar from "./search_bar";

import {clearCampgrounds} from "../../actions/campground_actions";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCampgrounds: () => dispatch(clearCampgrounds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);