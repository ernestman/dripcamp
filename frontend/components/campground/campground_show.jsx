import React from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";

import Carousel from "./carousel";
import CampgroundInfo from "./campground_info";
import CampgroundBuckets from "./campground_buckets";
import CampgroundDetails from "./campground_details";
import CampgroundActivities from "./campground_activities";
import BookingFormContainer from "../booking/booking_form_container";

class CampgroundShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.fetchCampground(this.props.match.params.campId);
    }

    render() {
        const {campground} = this.props;
        
        if (!campground) {
            return null;
        }

        return (
            <div>
                <Carousel photoUrls={campground.photoUrls}/>
                <div className="campground-show-container">

                    <div className="campground-show-2">
                        <div className="show-main">
                            <div><CampgroundInfo campground={campground}/></div>

                            <div><CampgroundBuckets campground={campground}/></div>

                            <div><CampgroundDetails campground={campground}/></div>

                            <div><CampgroundActivities campground={campground}/></div>

                            {/* <div className="show-reviews-container">
                                <h1>Placeholder for Reviews Index</h1>
                            </div> */}
                        </div>

                        {/* <div className="booking-form-container"> */}
                        <div className="booking-form-container"><BookingFormContainer campground={campground}/></div>
                        {/* </div> */}
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
