import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundSplash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let campgroundIdx = [];
        while (campgroundIdx.length < 3) {
            let randomInt = Math.floor(Math.random() * 36) + 1;
            if (!campgroundIdx.includes(randomInt)) {
                campgroundIdx.push(randomInt);
            }
        }
        for (let i = 0; i < campgroundIdx.length; i++) {
            this.props.fetchCampground(campgroundIdx[i]);
        }
    }

    render() {
        const { campgrounds } = this.props;

        const featured = campgrounds.map( campground => (
            <CampgroundIndexItem
                key={campground.id}
                campground={campground}
            />
        ))

        return (
            <div className="campground-index-container">
                <div className="campground-splash-header">
                    <h1 id="index-title">Featured Dripcamps</h1>
                </div>
                <div className="campground-index-main">
                    {featured}
                </div>
            </div>
        )



    }
}

export default CampgroundSplash;