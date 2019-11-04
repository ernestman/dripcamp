import React from "react";
import {Link, withRouter} from "react-router-dom";
import Carousel from "nuka-carousel";

const CampgroundIndexItem = (props) => {
    const {campground, history} = props;

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
                    <p id="item-loc" onMouseDown={(e) => {
                        e.stopPropagation()
                        history.replace("/campgrounds")
                    }}>{campground.location}</p>
                    <div className="item-bottom">
                        <div className="item-bottom-2">
                            <p id="item-rating"><i className="fas fa-thumbs-up"></i>&nbsp;{campground.rating}%</p>
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