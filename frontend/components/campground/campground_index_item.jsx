import React from "react";

const CampgroundIndexItem = (props) => {

    const {campground} = props;

    

    return (
        <div className="campground-item">
            <div className="item-image">
                <img src={campground.photoUrls[0]}/>
            </div>
            <div className="item-info">
                <h1>{campground.name}</h1>
                <p>{campground.location}</p>
                <p className="item-price">${campground.price}/night</p>
            </div>

        </div>
    )


}

export default CampgroundIndexItem;