import React from "react";
import CampgroundIndexItem from "../campground/campground_index_item";
import SearchMap from "../map/search_map";

// import {withRouter} from "react-router-dom"

class CampgroundSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.render();
        }
    }

    render() {

        const {campgrounds, updateFilter} = this.props;

        let address = "";
        let tagline = "";
        if (campgrounds.length > 0) {
            switch(campgrounds[0].location) {
                case "Seattle":
                    address = "Seattle, Washington";
                    tagline = "From kayaking and crabbing to high-elevation hiking, the Seattle mountains have it all."
                    break;
                case "San Francisco":
                    address = "San Francisco, California";
                    tagline = "Pitch a tent in the big city or rough it in the challenging backcountry in the diverse Bay Area."
                    break;
                case "New York":
                    address = "New York, New York";
                    tagline = "Hop on the train or jump in the car for quiet, scenic, adventure-filled camping just outside the city."
                    break;
                default:
                    address = "";
            }
        }

        const searchCampgrounds = campgrounds.map( campground => (
            <CampgroundIndexItem
                key={campground.id}
                campground={campground}
            />
        ))

        return (
            <div className="search-index-container">
                {/* <div className="campground-index-main"> */}
                <div className="search-index">
                    <h1>{address ? `The best dripcamps near ${address}` : "Could not find any Dripcamps"}</h1>
                    <h3>{tagline}</h3>
                    <div className="search-index-main">
                        {searchCampgrounds}
                    </div>
                </div>
                <div className="search-map-container">
                    <SearchMap
                        updateFilter={updateFilter}
                        campgrounds={campgrounds}
                    />
                </div>
            </div>
        )
    }

}

export default CampgroundSearch;