import React from "react";
import {AuthRoute} from "../util/route_util";
import {Link, Route, Redirect, Switch} from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";
import SplashContainer from "./splash_container";

import CampgroundIndexSelf from "../components/campground/campground_index_self";
import CampgroundShowContainer from "../components/campground/campground_show_container";
import UserShowContainer from "../components/user/user_show_container";
import SearchIndexContainer from "../components/search/search_index_container";

// don't need routes for login and signup b/c modal
class App extends React.Component {
    render() {
        return (
            <div className="sensei">
                <header>
                    <Header />
                </header>

                <main>
                    <div className="senpai">
                        <Route exact path="/users/:userId" component={UserShowContainer} />
                        <Route exact path="/campgrounds/:campId" component={CampgroundShowContainer} />
                        <Route exact path="/campgrounds" component={CampgroundIndexSelf} />
                        <Route path="/search" component={SearchIndexContainer} />
                        <Route exact path="/" component={SplashContainer} />
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
