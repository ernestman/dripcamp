class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(campgrounds) {
        campgrounds.forEach( campground => {
            if (!this.markers[campground.id]) {
                this.createMarker(campground);
            }
        })
    }

    createMarker(campground) {
        const latLng = new google.maps.LatLng(campground.latitude, campground.longitude)
        const pin = {
            url: "https://dripcamp-seed.s3-us-west-1.amazonaws.com/smallpin.png"
        }
        const marker = new google.maps.Marker({
            position: latLng,
            title: campground.name,
            icon: pin,
            campgroundId: campground.id
        });

        marker.addListener( "click", () => this.handleClick(campground) );
        this.markers[campground.id] = marker;
        marker.setMap(this.map);
    }

}

export default MarkerManager;