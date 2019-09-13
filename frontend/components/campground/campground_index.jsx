import React from "react";

class CampgroundIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCampgrounds();
    }
    
    render() {
        const {campgrounds} = this.props;

        const campgroundsIndex = campgrounds.map( campground => (
            <div>
                <h1>{campground.name}</h1>
                <h3>{campground.location}</h3>
            </div>
        ))

        return (
            <div>
                {campgroundsIndex}
            </div>
        )
    }

}

export default CampgroundIndex;