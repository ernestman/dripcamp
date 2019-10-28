import React from "react";
import MarkerManager from "../../util/marker_manager";
import {withRouter} from "react-router-dom";

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMarkerClick(campground) {
        this.props.history.push(`/campgrounds/${campground.id}`)
    }

    componentDidMount() {
        this.renderMap();
    }

    componentDidUpdate(prevProps) {
        this.markerManager.updateMarkers(this.props.campgrounds);
        if (prevProps.location.search !== this.props.location.search) {
            this.renderMap();
        }
    }

    renderMap() {
        const queryString = this.props.location.search;
        const lat = parseFloat(queryString.split("=")[1].split("&")[0]);
        const lng = parseFloat(queryString.split("=")[2]);

        const mapOptions = {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 8,
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.idleEventListener();
        
        const centerPin = new google.maps.Marker({
            position: {lat, lng},
        })
        centerPin.setMap(this.map) 

        this.markerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.markerManager.updateMarkers(this.props.campgrounds);
    }

    idleEventListener() {
        this.map.addListener( "idle", () => {
            const { north, south, east, west } = this.map.getBounds().toJSON()
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west}
            }

            this.props.updateFilter("bounds", bounds);
        })
    }
    
    render() {
        return (
            <div className="search-map" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default withRouter(SearchMap);