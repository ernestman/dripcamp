import React from "react";
import {Link} from "react-router-dom";

const CampgroundInfo = (props) => {

    const { campground } = props;

    return (
        <div className="show-info">
            <div className="info-top">
                <Link to="/campgrounds">{campground.location}</Link>
                <div>
                    <h1>{campground.name}</h1>
                </div>
                <div>
                    <p id="item-rating"><i className="fas fa-thumbs-up"></i>&nbsp;100% <span>Recommended</span></p>
                </div>
            </div>
            <div className="info-bottom">
                <div className="show-user-icon">
                    <h2>Placeholder for user photo</h2>
                </div>
                <h3>Hosted by {campground.host.first_name} {campground.host.last_name[0]}.</h3>
                <p>{campground.description}</p>
            </div>
        </div>
    )

}

export default CampgroundInfo;