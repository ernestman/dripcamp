import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchCampgrounds();
    }
    
    render() {
        const {campgrounds} = this.props;
        const seattle = campgrounds.filter( campground => campground.location === "Seattle")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const sf = campgrounds.filter( campground => campground.location === "San Francisco")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const ny = campgrounds.filter( campground => campground.location === "New York")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )

        return (
            <div className="campground-index-container">
                <h1 id="index-title">Discover Dripcamps</h1>
                <h3 id="index-text">Washington - Seattle</h3>
                <div className="campground-index-main">
                    {seattle}
                </div>

                <h3 id="index-text">California - San Francisco</h3>
                <div className="campground-index-main">
                    {sf}
                </div>

                <h3 id="index-text">New York - New York</h3>
                <div className="campground-index-main">
                    {ny}
                </div>
                {/* <i aria-hidden="true" className="filler-item"></i>
                <i aria-hidden="true" className="filler-item"></i>
                <i aria-hidden="true" className="filler-item"></i> */}
            </div>
        )
    }

}

export default CampgroundIndex;