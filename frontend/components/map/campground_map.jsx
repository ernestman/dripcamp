import React from "react";

class CampgroundMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: {lat: this.props.campground.latitude, lng: this.props.campground.longitude},
            zoom: 12,
            mapTypeId: "terrain"
        }

        let center = {
            lat: this.props.campground.latitude,
            lng: this.props.campground.longitude
        }

        
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    
        const circle = new google.maps.Circle({
            strokeColor: '#51D9AC',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#71DBB4',
            fillOpacity: 0.35,
            map: this.map,
            center: center,
            radius: 1800
        })
    }

    render() {

        return (
            <div className="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default CampgroundMap;