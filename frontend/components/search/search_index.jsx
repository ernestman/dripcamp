import React from "react";
import CampgroundIndexItem from "../campground/campground_index_item";
import filterUtil from "../../util/filter_util";
import SearchMap from "../map/search_map";

import getTaglines from "../../util/tagline_util";

class CampgroundSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.filters;

        this.handleFilter = this.handleFilter.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.filters.petFriendly === true) {
            $("#pet-filter").toggleClass("clicked")
        }
        if (this.props.filters.tentCamps === true) {
            $("#tent-filter").toggleClass("clicked")
        }
        if (this.props.filters.cabinCamps === true) {
            $("#cabin-filter").toggleClass("clicked")
        }
    }

    componentWillUnmount() {
        this.props.clearFilters();
        this.props.removeAllFilters();
    }

    handleFilter(filter, id) {
        event.preventDefault();

        $(`#${id}`).toggleClass("clicked")

        if (this.props.filters[filter] === false) {
            this.props.singleFilter(filter);
        } else {
            this.props.removeFilter(filter);
        }
    }

    handleRemove() {
        event.preventDefault();
        $(".clicked").toggleClass("clicked")
        this.props.removeAllFilters()
    }

    render() {

        const {campgrounds, filters, bounds, updateFilter} = this.props;

        let address = "";
        let tagline1 = "";
        let tagline2 = "";
        let tagline3 = "";

        if (campgrounds.length > 0) {
            const info = getTaglines(campgrounds[0].location);
            address = info["address"];
            tagline1 = info["tagline1"];
            tagline2 = info["tagline2"];
            tagline3 = info["tagline3"];
        }

        const searchCampgrounds = filterUtil(campgrounds, filters).map( campground => (
            <CampgroundIndexItem key={campground.id} campground={campground} />
        ))

        const campgroundsOne = searchCampgrounds.slice(0, 2);
        const campgroundsTwo = searchCampgrounds.slice(2, 4);
        const campgroundsThree = searchCampgrounds.slice(4);

        const tag3 = campgroundsTwo.length > 0 ? (<h3 className="tagline" id="tag-3">{tagline3}</h3>) : (<p></p>)

        const campgroundsResult = searchCampgrounds.length > 0 ? (
            <div>
                <h1>{address ? `The best dripcamps near ${address}` : "Could not find any Dripcamps"}</h1>
                <h3 className="tagline" id="tag-1">{tagline1}</h3>
    
                <div className="search-index-main">{campgroundsOne}</div>
                <h3 className="tagline" id="tag-2">{tagline2}</h3>
    
                <div className="search-index-main">{campgroundsTwo}</div>
                { tag3 }
    
                <div className="search-index-main">{campgroundsThree}</div>
            </div>
        ) : (
            <div>
                <h1> No Dripcamps matched your search</h1>
            </div>
        )
            
        return (
            <div className="search-index-container">
                <div className="search-index">
                    <div className="select-filters">
                        <div className="filter-button" id="pet-filter" onClick={ () => this.handleFilter("petFriendly", "pet-filter") }>
                            <img className="filter-img" src={petsTrueUrl}/>
                            <p>Pets</p>
                        </div>
                        <div className="filter-button" id="tent-filter" onClick={ () => this.handleFilter("tentCamps", "tent-filter") }>
                            <img className="filter-img" src={tentIconUrl}/>
                            <p>Tents</p>
                        </div>
                        <div className="filter-button" id="cabin-filter" onClick={ () => this.handleFilter("cabinCamps", "cabin-filter") }>
                            <img className="filter-img" src={cabinUrl} />
                            <p>Cabins</p>
                        </div>
                        <div className="filter-button" id="fire-filter" onClick={ () => this.handleFilter("hasCampfires", "fire-filter") }>
                            <img className="filter-img" src={campfireTrueUrl} />
                            <p>Campfires</p>
                        </div>
                        <div className="filter-button" id="shower-filter" onClick={ () => this.handleFilter("hasShowers", "shower-filter") }>
                            <img className="filter-img" src={showerTrueUrl} />
                            <p>Showers</p>
                        </div>
                        <div className="filter-button" id="water-filter" onClick={ () => this.handleFilter("hasWater", "water-filter") }>
                            <img className="filter-img" src={waterTrueUrl} />
                            <p>Water</p>
                        </div>
                        <div id="clear-filter" className="filter-button" onClick={ () => this.handleRemove()}>
                            <p id="clear-text">Clear</p>
                        </div>
                    </div>

                    {campgroundsResult}
                </div>
                <div className="search-map-container">
                    <SearchMap updateFilter={updateFilter} campgrounds={campgrounds}/>
                </div>
            </div>
        )
    }

}

export default CampgroundSearch;

// componentDidUpdate(prevProps) {
//     if (prevProps.location.search !== this.props.location.search) {
//         this.render();
//     }
// }