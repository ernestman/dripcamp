import React from "react";
import { Link } from "react-router-dom"

import Carousel from "./carousel";
import CampgroundInfo from "./campground_info";
import CampgroundBuckets from "./campground_buckets";
import CampgroundDetails from "./campground_details";
import CampgroundActivities from "./campground_activities";
import ReviewContainer from "../review/review_show_container";
import BookingFormContainer from "../booking/booking_form_container";

import CampgroundMap from "./campground_map";

class CampgroundShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.clearCampgrounds();
        this.props.fetchCampground(this.props.match.params.campId);
        // this.props.fetchReviews();
        this.props.clearReviews();
    }

    render() {
        const {campground, hostImgUrl} = this.props;
        
        if (!campground && !hostImgUrl) {
            return null;
        }

        return (
            <div>
                <Carousel photoUrls={campground.photoUrls}/>
                <div className="campground-show-container">

                    <div className="campground-show-2">
                        <div className="show-main">
                            <div><CampgroundInfo campground={campground} hostImgUrl={hostImgUrl}/></div>
                            <div><CampgroundBuckets campground={campground}/></div>
                            <div><CampgroundDetails campground={campground}/></div>
                            <div><CampgroundActivities campground={campground}/></div>
                            <div><ReviewContainer campground={campground}/></div>
                        </div>

                        <div className="booking-form-container"><BookingFormContainer campground={campground}/></div>
                    </div>
                </div>
                <div>
                    <div className="tile">
                        <div className="tile-item">
                            <span><p>Campground</p></span>
                            <p>{campground.name}</p>
                        </div>
                        <div className="tile-item">
                            <span><p>Location</p></span>
                            <Link to="/campgrounds">{campground.location}</Link>
                        </div>
                        <div className="tile-item">
                            <span><p>Price</p></span>
                            <p>${campground.price}/night</p>
                        </div>
                        <div className="tile-item">
                            <span><p>Sites</p></span>
                            <p>{campground.num_sites} sites</p>
                        </div>
                    </div>
                    <CampgroundMap campground={campground} />
                </div>
            </div>
        )
    } 
}

export default CampgroundShow;
