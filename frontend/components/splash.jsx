import React from "react";
import SearchBarContainer from "../components/search/search_bar_container";
import {Link, withRouter} from "react-router-dom";
import CampgroundSplashContainer from "../components/campground/campground_splash_container";

const Splash = (props) => {

    const {openModal, currentUserId} = props;

    const handleUserShow = (event) => {
        event.preventDefault();
        if (currentUserId) {
            props.history.push(`/users/${currentUserId}`)
        } else {
            openModal("signup")
        }
    }

    const handleSplashFilter = (filter) => {
        event.preventDefault();
        props.singleFilter(filter);
        props.history.push("/search?lat=37.7749295&lng=-122.41941550000001")
    }

    return (
        <div className="splash-container">
            <div className="splash-info">
                <h1 id="splash-head">Find yourself outside.</h1>
                <div id="splash-text">
                    <p>Book unique camping experiences on over <span>300,000</span> campsites, ranches, vineyards, public parks, and more.</p>
                </div>
            </div>
            <SearchBarContainer/>
            <CampgroundSplashContainer />

            <div className="splash-filters-container">
                <h1>Discover Dripcamps</h1>

                <div className="splash-filter" onClick={() => props.history.push("/search?lat=47.6062095&lng=-122.3320708")}>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-seattle.jpg" />
                    <div className="splash-filter-info">
                        <h2>Seattle</h2>
                        <p>Washington</p>
                    </div>
                </div>
                <div className="splash-filter" onClick={() => props.history.push("/campgrounds")}>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-index.jpg" />
                    <div className="splash-filter-info">
                        <h2>All Dripcamps</h2>
                        <p>View all Dripcamps</p>
                    </div>
                </div>
                <div className="splash-filter" onClick={() => props.history.push("/search?lat=41.8781136&lng=-87.62979819999998")}>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-chicago.jpg" />
                    <div className="splash-filter-info">
                        <h2>Chicago</h2>
                        <p>Illinois</p>
                    </div>
                </div>

                <div className="splash-filter" onClick={ () => handleSplashFilter("tentCamps") }>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-tents.jpg"/>
                    <div className="splash-filter-info">
                        <h2>Tent Dripcamps</h2>
                        <p>Best options near San Francisco</p>
                    </div>
                </div>
                <div className="splash-filter" onClick={ () => handleSplashFilter("cabinCamps") }>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-cabins.jpg" />
                    <div className="splash-filter-info">
                        <h2>Cabin Dripcamps</h2>
                        <p>Best options near San Francisco</p>
                    </div>
                </div>
                <div className="splash-filter" onClick={ () => handleSplashFilter("petFriendly") }>
                    <img id="splash-filter-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/dripcamp-pets.jpg" />
                    <div className="splash-filter-info">
                        <h2>Pet-Friendly Dripcamps</h2>
                        <p>Best options near San Francisco</p>
                    </div>
                </div>
            </div>

            <div className="bio-container">
                <div className="bio-img">
                    <img id="ernie-img" src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/hipcampernie.jpg" />
                </div>
                <div className="bio-info">
                    <h1>Ernie, Software Engineer:</h1>
                    <p>
                    Hi! I'm Ernie, a software engineer with a passion for tackling and
                    solving challenging problems. As a software developer, I
                    have enjoyed utilizing Ruby on Rails, Javascript,
                    React / Redux, PostgreSQL, CSS, and HTML5 in my projects.
                    When I'm not coding or building cool things, you can find
                    me at your local 24 playing pickup basketball, or watching
                    the NBA and fanatically cheering for the Golden State
                    Warriors.
                    </p>
                    <div className="bio-links">
                        <a className="bio-link" id="profile-link" href="https://ernestman.github.io/PersonalSite" target="_blank">Learn more</a>
                        <div className="dripcamping-link" onClick={handleUserShow}> Start Dripcamping</div>
                    </div>
                </div>
            </div>

            <div className="large-icon-container">
                <div className="large-icon">
                    <img src={window.tentArmsUrl}/>
                    <div className="large-icon-text">
                        <p>Dripcamp empowers people to share their land with campers.</p>
                    </div>
                    <div className="icon-link" onClick={handleUserShow}>
                        Start Dripcamping
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.billSunUrl}/>
                    <div className="large-icon-text">
                        <p>Creating sustainable revenue and fostering community</p>
                    </div>
                    <div className="icon-link">
                        <a href="https://ernestman.github.io/PersonalSite" target="_blank">Learn more</a>
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.palmEyeUrl}/>
                    <div className="large-icon-text">
                        <p>Unlocking access to incredible new places to camp</p>
                    </div>
                    <div className="icon-link">
                        <Link to="/campgrounds">Discover Dripcamps</Link>
                    </div>
                </div>
            </div>

            

        </div>
    )

}

export default withRouter(Splash);