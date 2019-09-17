import React from "react";

const CampgroundBuckets = (props) => {

    const {campground} = props;

    return(
        <div className="show-buckets">
            <div className="show-bucket-container">
                <h2>Campsite Area</h2>
                <ul>{campground.cabin ? "Cabin" : "Tents"}</ul>
                <ul>{campground.num_sites} sites</ul>
                <ul>Up to {campground.max_guests} guests per site</ul>
                <ul>{campground.parking ? "Park at listing" : "Short walk"}</ul>
            </div>

            <div className="show-bucket-container">
                <h2>Essentials</h2>
                <ul>{campground.campfires ? "Campfires allowed" : "No campfires"}</ul>
                <ul>{campground.toilets ? "Toilet available" : "No toilets"}</ul>
                <ul>{campground.pets ? "Pets allowed" : "No pets"}</ul>
            </div>

            <div className="show-bucket-container">
                <h2>Amenities</h2>
                <ul>{campground.kitchen ? "Kitchen available" : "No kitchen"}</ul>
                <ul>{campground.potable_water ? "Potable water available" : "No potable water"}</ul>
                <ul>{campground.wifi ? "Wifi available" : "No wifi"}</ul>
                <ul>{campground.showers ? "Showers available" : "No showers"}</ul>
                <ul>{campground.bins ? "Bins" : "Pack it out"}</ul>
            </div>
        </div>
    )
}

export default CampgroundBuckets;