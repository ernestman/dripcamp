import React from "react";
import {AuthRoute} from "../util/route_util";
import {Link, Route, Redirect, Switch} from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";
import Splash from "./splash";

import CampgroundIndexContainer from "../components/campground/campground_index_container";
import CampgroundShowContainer from "../components/campground/campground_show_container";

// don't need routes for login and signup b/c modal
class App extends React.Component {
    render() {

        const herokuUrl = "http://dripcamp.herokuapp.com"


        // <HeaderContainer />

        // <Route path="/" component={} />
        // <Route path="/campgrounds" component={CampgroundIndex} />
        // <Route path="/campgrounds/:id" component={CampgroundShow} />
        // <Route path="/users/:currentUserId" component={UserShow} />

        // <FooterContainer /> (Component)
        
        return (
            <div className="sensei">
                <header>
                    <Header />
                </header>

                <main>
                    <div className="senpai">
                
                        <Route exact path="/campgrounds/:campId" component={CampgroundShowContainer} />
                        <Route exact path="/campgrounds" component={CampgroundIndexContainer} />
                        <Route exact path="/" component={Splash} />
                        
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App;
