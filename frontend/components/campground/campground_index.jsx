import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchCampgrounds();
    }
    
    render() {
        const {campgrounds} = this.props;
        const seattleUrl = "/search?lat=47.6062095&lng=-122.3320708"
        const seattle = campgrounds.filter( campground => campground.location === "Seattle")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const sfUrl = "/search?lat=37.7749295&lng=-122.41941550000001"
        const sf = campgrounds.filter( campground => campground.location === "San Francisco")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const nyUrl = "/search?lat=40.7127753&lng=-74.0059728"
        const ny = campgrounds.filter( campground => campground.location === "New York")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const laUrl = "/search?lat=34.0522342&lng=-118.2436849"
        const la = campgrounds.filter( campground => campground.location === "Los Angeles")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const chicagoUrl = "search?lat=41.8781136&lng=-87.62979819999998"
        const chicago = campgrounds.filter( campground => campground.location === "Chicago")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )
        const denverUrl = "/search?lat=39.7392358&lng=-104.990251"
        const denver = campgrounds.filter( campground => campground.location === "Denver")
            .map( campground => (
                <CampgroundIndexItem
                    key={campground.id}
                    campground={campground}
                />
            )
        )


        return (
            <div className="campground-index-container">
                <h1 id="index-title">Discover Dripcamps</h1>

                <div className="city-index-container">
                    <h3 id="index-text">Washington - <Link to={seattleUrl}>Seattle</Link></h3>
                    <div className="campground-index-main">
                        {seattle}
                    </div>
                </div>

                <div className="city-index-container">
                    <h3 id="index-text">California - <Link to={sfUrl}>San Francisco</Link></h3>
                    <div className="campground-index-main">
                        {sf}
                    </div>
                </div>

                <div className="city-index-container">
                    <h3 id="index-text">New York - <Link to={nyUrl}>New York</Link></h3>
                    <div className="campground-index-main">
                        {ny}
                    </div>
                </div>

                <div className="city-index-container">
                    <h3 id="index-text">California - <Link to={laUrl}>Los Angeles</Link></h3>
                    <div className="campground-index-main">
                        {la}
                    </div>
                </div>

                <div className="city-index-container">
                    <h3 id="index-text">Illinois - <Link to={chicagoUrl}>Chicago</Link></h3>
                    <div className="campground-index-main">
                        {chicago}
                    </div>
                </div>

                <div className="city-index-container">
                    <h3 id="index-text">Colorado - <Link to={denverUrl}>Denver</Link></h3>
                    <div className="campground-index-main">
                        {denver}
                    </div>
                </div>



                {/* <i aria-hidden="true" className="filler-item"></i>
                <i aria-hidden="true" className="filler-item"></i>
                <i aria-hidden="true" className="filler-item"></i> */}
            </div>
        )
    }

}

export default CampgroundIndex;