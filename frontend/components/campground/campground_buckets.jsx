import React from "react";

const CampgroundBuckets = (props) => {

    const {campground} = props;

    return(
        <div className="show-buckets">
            <div className="show-bucket-container">
                <div className="bucket-main">
                    <h2>Campsite Area</h2>
                    <div className="bucket-line">
                        <img src={campground.cabin ? window.cabinUrl : window.tentIconUrl}/>
                        &nbsp;
                        <ul>{campground.cabin ? "Cabin" : "Tents"}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={window.sitesUrl}/>
                        &nbsp;
                        <ul>{campground.num_sites} sites</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={window.guestsUrl}/>
                        &nbsp;
                        <ul>Up to {campground.max_guests} guests per site</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.parking ? window.parkingTrueUrl : window.parkingFalseUrl}/>
                        &nbsp;
                        <ul>{campground.parking ? "Park at listing" : "Short walk"}</ul>
                    </div>
                </div>
            </div>

            <div className="show-bucket-container">
                <div className="bucket-main">
                    <h2>Essentials</h2>
                    <div className="bucket-line">
                        <img src={campground.campfires ? window.campfireTrueUrl : window.campfireFalseUrl}/>
                        &nbsp;
                        <ul>{campground.campfires ? "Campfires allowed" : <span>No campfires</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={window.toiletTrueUrl} />
                        &nbsp;
                        <ul>{campground.toilets ? "Toilet available" : <span>No toilets</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.pets ? window.petsTrueUrl : window.petsFalseUrl} />
                        &nbsp;
                        <ul>{campground.pets ? "Pets allowed" : <span>No pets</span>}</ul>
                    </div>
                </div>
            </div>

            <div className="show-bucket-container">
                <div className="bucket-main">
                    <h2>Amenities</h2>
                    <div className="bucket-line">
                        <img src={campground.kitchen ? window.kitchenTrueUrl : window.kitchenFalseUrl} />
                        &nbsp;
                        <ul>{campground.kitchen ? "Kitchen available" : <span>No kitchen</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.potable_water ? window.waterTrueUrl : window.waterFalseUrl} />
                        &nbsp;
                        <ul>{campground.potable_water ? "Potable water available" : <span>No potable water</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.wifi ? window.wifiTrueUrl : window.wifiFalseUrl} />
                        &nbsp;
                        <ul>{campground.wifi ? "Wifi available" : <span>No wifi</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.showers ? window.showerTrueUrl : window.showerFalseUrl} />
                        &nbsp;
                        <ul>{campground.showers ? "Showers available" : <span>No showers</span>}</ul>
                    </div>
                    <div className="bucket-line">
                        <img src={campground.bins ? window.binsTrueUrl : window.binsFalseUrl} />
                        &nbsp;
                        <ul>{campground.bins ? "Bins" : <span>Pack it out</span>}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampgroundBuckets;