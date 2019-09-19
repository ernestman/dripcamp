import React from "react";
import {AuthRoute} from "../util/route_util";
import {Link, Route, Redirect, Switch} from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";
import Splash from "./splash";

import CampgroundIndexContainer from "../components/campground/campground_index_container";
import CampgroundShowContainer from "../components/campground/campground_show_container";
import UserShowContainer from "../components/user/user_show_container";

// don't need routes for login and signup b/c modal
class App extends React.Component {
    render() {

        // <Route path="/" component={} />
        
        return (
            <div className="sensei">
                <header>
                    <Header />
                </header>

                <main>
                    <div className="senpai">
                
                        <Route exact path="/users/:userId" component={UserShowContainer} />
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
