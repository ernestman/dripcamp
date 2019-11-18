import React from "react";
import {withRouter} from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            filter: "All camping"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById("search-field");
        let autocomplete = new google.maps.places.Autocomplete(input);

        let address;

        let that = this;
        autocomplete.addListener( "place_changed", () => {
            if (!autocomplete.getPlace().formatted_address) {
                address = autocomplete.getPlace().name;
                that.setState( {address: address} )
                that.handleSubmit();
            } else {
                address = autocomplete.getPlace().formatted_address;
                that.setState( {address: address} );
                that.handleSubmit();
            }
        })
    }

    handleInput(event) {
        this.setState({ address: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.clearCampgrounds();
        if (this.state.filter === "Tents") {
            this.props.singleFilter("tentCamps")
        }
        if (this.state.filter === "Cabins") {
            this.props.singleFilter("cabinCamps")
        }
        let latitude;
        let longitude;
        let location = new google.maps.Geocoder();
        location.geocode( { "address": this.state.address }, (results, status) => {
            if (status === "OK") {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                this.props.history.push(`/search?lat=${latitude}&lng=${longitude}`)
            } else {
                // san francisco coordinates
                latitude = 37.773972;
                longitude = -122.431297;
                this.props.history.push(`/search?lat=${latitude}&lng=${longitude}`)
            }
        })
    }

    render() {

        const searchBar = (this.props.location.pathname === "/" || this.props.location.pathname.slice(0, 6) === "/users") ? (
            <div className="search-bar-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <div className="search-with-icon">
                        <i id="search-icon" className="fas fa-search fa-lg"></i>
                        <input
                            id="search-field"
                            className="search-input"
                            type="search"
                            placeholder="Find camping near..."
                            value={this.state.address}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="search-dropdown">
                        <div className="search-filter-select">
                            <i className="fas fa-check"></i>
                            <p className="search-filter-btn">{this.state.filter}</p>
                        </div>
                        <div className="search-menu">
                            <div className="dropdown-filter" onClick={ () => this.setState( {filter: "Tents"} )}>
                                <img className="filter-img" src={tentIconUrl}/>
                                <p>Tents</p>
                            </div>
                            <div className="dropdown-filter" onClick={() => this.setState({ filter: "Cabins" })}>
                                <img className="filter-img" src={cabinUrl}/>
                                <p>Cabins</p>
                            </div>
                            <div className="dropdown-filter" onClick={ () => this.setState( {filter: "All camping"} )}>
                                <p>All camping</p>
                            </div>
                        </div>
                    </div>
                    <button id="search-button">Search</button>
                </form>
            </div>
        ) : (
            <div className="header-search-bar">
                <form className="header-search-form">
                    <div className="header-search">
                        <i id="header-search-icon" className="fas fa-search fa-sm"></i>
                        <input
                            id="search-field"
                            className="header-search-input"
                            type="text"
                            placeholder="Search..."
                            onChange={this.handleInput}
                        />
                    </div>
                    <button id="header-search-button" onClick={this.handleSubmit}></button>
                </form>
            </div>
        )
        
        return (
            <div>
                {searchBar}
            </div>
        )
    }
}

export default withRouter(SearchBar);