import React from "react";

class CampgroundMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: {lat: this.props.campground.latitude, lng: this.props.campground.longitude},
            zoom: 12,
            // mapTypeId: "terrain"
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render() {

        return (
            <div className="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default CampgroundMap;