import React from "react";

const CampgroundDetails = (props) => {

    const {campground} = props;

    return (
        <div className="show-details-container">
            <div className="detail-header">
                <h2>Details</h2>
            </div>
            <div className="show-details">
                <div className="details-cont-1">
                    <ul><strong>Check in:</strong> {campground.checkin_time}</ul>
                    <ul><strong>Check out:</strong> {campground.checkout_time}</ul>
                </div>
                <div className="details-cont-2">
                    <ul><strong>On arrival:</strong> Meet and greet</ul>
                    <ul><strong>Minimum nights:</strong> {campground.min_nights}</ul>
                    <ul><strong>Accepts bookings:</strong> 3 months out</ul>
                </div>
            </div>
        </div>
    )

}

export default CampgroundDetails;