import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCampgrounds();
    }
    
    render() {
        const {campgrounds} = this.props;

        const campgroundsIndex = campgrounds.map( campground => (      
            <CampgroundIndexItem
                key={campground.id}
                campground={campground}
            />
        ))

        return (
            <div className="campground-index-main">
                {campgroundsIndex}
            </div>
        )
    }

}

export default CampgroundIndex;