import React from "react";
import elevationUtil from "../../util/elevation_util";

class CampgroundVibes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: "",
            temp: "",
            clouds: "",
            humidity: ""
        }

        this.handleElevation = this.handleElevation.bind(this);
        this.handleWeather = this.handleWeather.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const lat = this.props.campground.latitude;
        const lng = this.props.campground.longitude;
        const weatherApiKey = "b9c704e85557f3f8c93c64c998cba7a5"

        elevationUtil({lat: lat, lng: lng})
            .then( result => this.handleElevation(result) );
        $.ajax({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${weatherApiKey}&units=imperial`
        }).then( result => this.handleWeather(result) )
    }

    handleElevation(result) {
        let resultFeet = Math.floor(result * 3.28);
        this.setState( {"elevation": resultFeet})
    }

    handleWeather(result) {
        const resultTemp = Math.floor(result.main.temp);
        const resultClouds = result.weather[0].description[0].toUpperCase() + result.weather[0].description.slice(1);
        const resultHumidity = result.main.humidity;
        this.setState( {"temp": resultTemp, "clouds": resultClouds, "humidity": resultHumidity})
    }


    render() {
        const {campground} = this.props;

        return(
            <div className="vibes-container">
                <h1 id="vibe-header">The vibe at {campground.name}</h1>
                <div className="campground-vibe">
                    <h1>{this.state.elevation}ft</h1>
                    <p>Listing's elevation</p>
                </div>

                <div className="campground-vibe">
                    <h1>{this.state.temp}˚F</h1>
                    <p>{this.state.clouds}</p>
                </div>

                <div className="campground-vibe">
                    <h1>{this.state.humidity}%</h1>
                    <p>Humidity</p>
                </div>
            </div>
        )
    }

}

export default CampgroundVibes;