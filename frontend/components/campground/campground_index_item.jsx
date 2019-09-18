import React from "react";
import {Link, withRouter} from "react-router-dom";

const CampgroundIndexItem = (props) => {

    const {campground, history} = props;

    return (
        <Link to={`/campgrounds/${campground.id}`}>
            <div className="campground-item">
                <div className="item-image">
                    <img src={campground.photoUrls[0]}/>
                </div>
                <div className="item-info">
                    <div className="item-info-top">
                        <h1>{campground.name}</h1>
                        <img src={campground.cabin ? window.cabinUrl : window.tentIconUrl}/>
                    </div>
                    {/* <Link to="/campgrounds" id="item-loc">{campground.location}</Link> */}
                    <p id="item-loc" onMouseUp={ (e) => {
                        e.stopPropagation()
                        history.replace("/campgrounds")
                    }}>{campground.location}</p>
                    <div className="item-bottom">
                        <p id="item-rating"><i className="fas fa-thumbs-up"></i>&nbsp;100%</p>
                        <p id="item-price">${campground.price}/night</p>
                    </div>
                </div>

            </div>
        </Link>
    )


}

export default withRouter(CampgroundIndexItem);