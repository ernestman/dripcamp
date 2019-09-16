import React from "react";
import { withRouter } from "react-router-dom";

class CampgroundShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCampground(this.props.match.params.campId);
    }

    render() {

        const {campground} = this.props;
        
        if (!campground) {
            return null;
        }
        const imageCarousel = (
            <div className="imageCarousel">
                <div className="carousel-container">
                    <div className="carousel-slide">
                        {/* <img src={campground.photoUrls[campground.photoUrls.length-1]} id="last-clone"/> */}
                        {campground.photoUrls.map( url => (<img src={url}/>))}
                        {/* <img src={campground.photoUrls[0]} id="first-clone"/> */}
                    </div>
                </div>
                <script src="carousel.js"></script>
            </div>
        )

        return (
            <div className="campground-show-container">

                <div className="show-images">
                    {imageCarousel}
                </div>

                <div className="campground-show-2">
                    <div className="show-main">
                        <div className="show-info">
                            <h3>{campground.location}</h3>
                            <h1>{campground.name}</h1>
                            <h3>Hosted by {campground.host.first_name} {campground.host.last_name[0]}.</h3>
                            <h4>${campground.price}/night</h4>
                            <p>{campground.description}</p>
                        </div>

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

                        <div className="show-details">
                            <h2>Details</h2>
                            <ul><strong>Check in:</strong> {campground.checkin_time}</ul>
                            <ul><strong>Check in:</strong> {campground.checkout_time}</ul>
                            <ul><strong>Minimum nights:</strong> {campground.min_nights}</ul>
                        </div>

                        <div className="show-activities">
                            <h2>Activities</h2>
                            {campground.activities.map( act => (<ul>{act}</ul>))}
                        </div>

                        <div className="show-reviews-container">
                            <h1>Placeholder for Reviews Index</h1>
                        </div>
                    </div>

                    <div className="booking-form-container">
                        <h1>Placeholder for Booking Form</h1>
                    </div>
                </div>
                <div className="show-map-container">
                    <h1>Placeholder for Map</h1>
                </div>
            </div>
        )
    } 
}

export default CampgroundShow;
