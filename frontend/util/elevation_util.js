
const elevationUtil = (latLng) => {
    return new Promise((resolve, reject) => {
        let elevator = new google.maps.ElevationService;
        elevator.getElevationForLocations({ "locations": [latLng] }, function (results, status) {
            if (status === "OK") {
                resolve(results[0].elevation)
            }
        })
    })
}

export default elevationUtil;