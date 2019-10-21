import React from "react";
import {Link, withRouter} from "react-router-dom";
import Carousel from "nuka-carousel";

const CampgroundIndexItem = (props) => {
    // debugger
    const {campground, history} = props;
    const rating = Math.floor(Math.random() * (100 - 90) + 90);

    if (!campground.reviewIds) {
        return null;
    } else {

        const carousel = (
                <Carousel
                    renderCenterLeftControls={({previousSlide}) => (
                    <button id="carousel-btn" onClick={previousSlide}>&#10094;</button>
                    )}
                    renderCenterRightControls={({nextSlide}) => (
                    <button id="carousel-btn" onClick={nextSlide}>&#10095;</button>
                    )}
                >
                    {campground.photoUrls.map( (url, i) => (<img key={i} className="carousel-img" src={url}></img>))}
                </Carousel>
        )

        return (
            <div className="campground-item">
                <div className="item-image">
                    {carousel}
                </div>
                <Link to={`/campgrounds/${campground.id}`} className="item-info">
                    <div className="item-info-top">
                        <div className="item-info-head">
                            <h1>{campground.name}</h1>
                            <span><i id="check-icon" className="fas fa-check-circle fa-xs"></i></span>
                        </div>
                        <img src={campground.cabin ? window.cabinUrl : window.tentIconUrl} />
                    </div>
                    {/* <Link to="/campgrounds" id="item-loc">{campground.location}</Link> */}
                    <p id="item-loc" onMouseUp={(e) => {
                        e.stopPropagation()
                        history.replace("/campgrounds")
                    }}>{campground.location}</p>
                    <div className="item-bottom">
                        <div className="item-bottom-2">
                            <p id="item-rating"><i className="fas fa-thumbs-up"></i>&nbsp;{rating}%</p>
                            &nbsp;- {campground.reviewIds.length} {campground.reviewIds.length === 1 ? "Review" : "Reviews"}
                        </div>
                        <p id="item-price">${campground.price}/night</p>
                    </div>
                </Link>

            </div>
        )
    }
}

export default withRouter(CampgroundIndexItem);