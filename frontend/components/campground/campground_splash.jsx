import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundSplash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchCampgrounds();
    }

    render() {
        const { campgrounds } = this.props;

        const featured = campgrounds.sort( () => 0.5 - Math.random() ).slice(0, 3)
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            ))

        return (
            <div className="campground-index-container">
                <div className="campground-splash-header">
                    <h1 id="index-title">Featured Dripcamps -&nbsp;</h1>
                    <Link to="/campgrounds">View all Dripcamps</Link>
                </div>
                <div className="campground-index-main">
                    {featured}
                </div>
            </div>
        )



    }
}

export default CampgroundSplash;