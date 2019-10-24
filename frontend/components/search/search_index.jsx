import React from "react";
import CampgroundIndexItem from "../campground/campground_index_item";
import SearchMap from "../map/search_map";

// import {withRouter} from "react-router-dom"

class CampgroundSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.render();
        }
    }

    render() {

        const {campgrounds, updateFilter} = this.props;

        let address = "";
        let tagline1 = "";
        let tagline2 = "";
        let tagline3 = "";
        if (campgrounds.length > 0) {
            switch(campgrounds[0].location) {
                case "Seattle":
                    address = "Seattle, Washington";
                    tagline1 = "From kayaking and crabbing to high-elevation hiking, the Seattle mountains have it all."
                    tagline2 = "With its enviable location on the Puget Sound, Seattle blends urban and outdoor lifestyles. When you’re craving a camping trip, you’re in luck—an hour’s drive takes you out of the city and into the wild. Northwestern Washington has it all, from backcountry mountain sites to coastal RV parks.";
                    tagline3 = "Weather is always a consideration on a Seattle camping trip. The rainy season runs from November to May, but it’s a good idea to bring rain gear year-round. Summer brings sunshine and warm weather—be sure to book campsites early to beat the crowds."
                    break;
                case "San Francisco":
                    address = "San Francisco, California";
                    tagline1 = "Pitch a tent in the big city or rough it in the challenging backcountry in the diverse Bay Area."
                    tagline2 = "Located at about the midpoint of the California coast, the Bay Area offers a slightly cooler climate than Southern California. You'll have easy access to both the Pacific Ocean and San Francisco Bay from here.";
                    tagline3 = "Angel Island State Park is another great sightseeing spot. Here on the largest island in the Bay, you'll find extensive hiking trails. There's also a 788-foot summit to climb in Mount Caroline Livermore. Note there's no bridge to Angel Island. Multiple public ferries run daily, though."
                    break;
                case "New York":
                    address = "New York, New York";
                    tagline1 = "Hop on the train or jump in the car for quiet, scenic, adventure-filled camping just outside the city."
                    tagline2 = "The dog days of summer can make any New Yorker long for a leafy escape. Luckily, you don't have to travel far—or even drive—to camp under the stars. From the Catskills to Brooklyn, these outdoor oases are under two hours from New York City.";
                    tagline3 = "Just over an hour from midtown Manhattan, near the Cold Spring Metro-North stop, Fahnestock State Park has 14,000 wooded acres surrounding a lake. The park is a favorite for families, with a sandy swimming beach and rentable rowboats. Rustic tent sites are close by, as is the Appalachian Trail."
                    break;
                case "Chicago":
                    address = "Chicago, Illinois";
                    tagline1 = "From beach camping on Lake Michigan to peaceful forest campsites, the Chicagoland area has it all."
                    tagline2 = "In Chicago, the trails and marinas along Lake Michigan provide a respite from city life. When only serious wilderness will do, however, you’re in luck. Within 100 miles of downtown, a wealth of campgrounds provide peace and quiet. From lakeside retreats to grassland getaways, this part of the midwest has it all.";
                    tagline3 = "From spring through fall, the pleasant weather is ideal for camping near Chicago. Winters are cold and often snowy, but don’t let that keep you away. Pull into an RV park or rent a cabin to enjoy ice fishing, snowshoeing, and Nordic skiing."
                    break;
                case "Los Angeles":
                    address = "Los Angeles, California"
                    tagline1 = "Get all sides of the sunny Southern California experience within a hour of the City of Angels."
                    tagline2 = "Los Angeles might have a reputation as one of the densest of big cities, but there's still plenty of camping adventure to be found in its environs. Whether you want to swim in the Pacific or hike in the Southern California mountains, L.A. makes a good staging point.";
                    tagline3 = "Santa Monica State Beach is the quintessential SoCal beach. This sandy playland runs for 3.5 miles next to the ocean. Take a ride on the pier's famous Ferris wheel or rollercoaster. For a more sedate pier experience, cast a fishing line or check out its interactive aquarium."
                    break;
                case "Denver":
                    address = "Denver, Colorado";
                    tagline1 = "Camping near Denver? Try biking the foothills, hiking the Rockies, and riding horses in canyons."
                    tagline2 = "For outdoor adventurers, Denver offers the perfect blend of city comforts and wilderness access. When the mountains are calling, head west—within an hour, you can escape the city. A little further, and the silence of the Rockies takes over completely. From RV parks to backcountry tent sites, this part of Colorado is overflowing with great campsites.";
                    tagline3 = "Located east of a major mountain range, Denver has a mild, dry and sunny climate with more annual hours of sun than San Diego. Denver is the only city ever to refuse the chance to host the Olympics after winning the privilege."
                    break;
                default:
                    address = "";
                    tagline1 = "";
            }
        }

        const searchCampgrounds = campgrounds.map( campground => (
            <CampgroundIndexItem
                key={campground.id}
                campground={campground}
            />
        ))

        const campgroundsFirst = searchCampgrounds.slice(0, 2);
        const campgroundsSecond = searchCampgrounds.slice(2, 4);
        const campgroundsThird = (searchCampgrounds.slice(4));

        const tag3 = campgroundsSecond.length > 0 ? 
            (
                <h3 className="tagline" id="tag-3">{tagline3}</h3>
            ) : (
                <p></p>
            )

        return (
            <div className="search-index-container">
                <div className="search-index">
                    <h1>{address ? `The best dripcamps near ${address}` : "Could not find any Dripcamps"}</h1>
                    <h3 className="tagline" id="tag-1">{tagline1}</h3>
                    <div className="search-index-main">
                        {campgroundsFirst}
                    </div>
                    <h3 className="tagline" id="tag-2">{tagline2}</h3>
                    <div className="search-index-main">
                        {campgroundsSecond}
                    </div>
                    {tag3}
                    <div className="search-index-main">
                        {campgroundsThird}
                    </div>
                    
                </div>
                <div className="search-map-container">
                    <SearchMap
                        updateFilter={updateFilter}
                        campgrounds={campgrounds}
                    />
                </div>
            </div>
        )
    }

}

export default CampgroundSearch;