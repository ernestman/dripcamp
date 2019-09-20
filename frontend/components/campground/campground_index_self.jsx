import React from "react";
import CampgroundIndexContainer from "./campground_index_container";

const CampgroundIndexSelf = () => {




    return (
        <div className="index-self">
            <div className="index-head-img">
                <h1>Everywhere you want to camp.</h1>
            </div>
            <div>
                <CampgroundIndexContainer />
            </div>
        </div>
    )

}

export default CampgroundIndexSelf;