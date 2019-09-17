import React from "react";

const CampgroundActivities = (props) => {

    const {campground} = props;

    let imgUrl;
    const actIcons = campground.activities.map( (act, i) => {
        if (act === "Biking") imgUrl = window.bikingUrl;
        else if (act === "Boating") imgUrl = window.boatingUrl;
        else if (act === "Hiking") imgUrl = window.hikingUrl;
        else if (act === "Swimming") imgUrl = window.swimmingUrl;
        else if (act === "Wildlife Watching") imgUrl = window.wildlifeUrl;
        else if (act === "Fishing") imgUrl = window.fishingUrl;
        else if (act === "Paddling") imgUrl = window.paddlingUrl;
        else if (act === "Horseback Riding") imgUrl = window.horseUrl;
        else if (act === "Climbing") imgUrl = window.climbingUrl;

        return (
            <div key={i} className="act-icon-container">
                <div className="act-icon">
                    <img src={imgUrl} />
                </div>
                <p>{act}</p>
            </div>
        )
    })

    return (
        <div className="show-activities">
            <h2>Activities</h2>
            <h3>Offered on the Host's property or nearby.</h3>
            <div className="icons-container">
                {actIcons}
            </div>
        </div>
    )
    
}

export default CampgroundActivities;


