import React from "react";
import CampgroundIndexContainer from "../components/campground/campground_index_container";
import {Link} from "react-router-dom";

const Splash = () => {

    return (
        <div className="splash-container">
            <div className="search-bar-container">
                <Link to="/campgrounds">Placeholder for Searchbar (link to campgrounds index)</Link>
            </div>

            <CampgroundIndexContainer />
    
            <div className="large-icon-container">
                {/* <h1>Temporary Container for Big Icons</h1> */}
                <div className="large-icon">
                    <img src={window.tentArmsUrl}/>
                    <div className="large-icon-text">
                        <p>Dripcamp empowers people to share their land with campers.</p>
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.billSunUrl}/>
                    <div className="large-icon-text">
                        <p>Creating sustainable revenue and fostering community</p>
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.palmEyeUrl}/>
                    <div className="large-icon-text">
                        <p>Unlocking access to incredible new places to camp</p>
                    </div>
                    <Link to="/campgrounds">Discover camps</Link>
                </div>
            </div>

        </div>
    )

}

export default Splash;