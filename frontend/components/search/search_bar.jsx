import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }



    render() {
        
        return (
            <div className="search-bar-container">
                <form className="search-form">
                    <div className="search-with-icon">
                        <i id="search-icon" className="fas fa-search fa-lg"></i>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                    <button id="search-button">
                        Search
                    </button>
                </form>
            </div>
        )


    }



}

export default SearchBar;