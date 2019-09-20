import React from "react";
import CampgroundIndexContainer from "./campground_index_container";

const CampgroundIndexSelf = () => {




    return (
        <div className="index-self">
            <div className="index-head-img">
                <h1>Everywhere you want to camp.</h1>
                <p>Book unique camping experiences on over 300,000 campsites, ranches, vineyards, public parks, and more</p>
            </div>
            <div>
                <CampgroundIndexContainer />
            </div>
        </div>
    )

}

export default CampgroundIndexSelf;