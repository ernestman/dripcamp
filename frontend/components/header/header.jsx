import React from "react";
import Modal from "../modal/modal";
import GreetingContainer from "../greeting/greeting_container";
import SearchBarContainer from "../search/search_bar_container";
import {Link, withRouter} from "react-router-dom";

const Header = (props) => {

    // debugger

    // /users/1

    let headSearchBar;
    if (props.location.pathname === "/" || props.location.pathname.slice(0, 6) === "/users") {
        headSearchBar = <div></div>
    } else {
        headSearchBar = <SearchBarContainer />
    }

    return (
        <div className="header-container">
            <Modal />
            <div className="header-icon">
                <Link to="/"><img src={window.logoUrl} /></Link>
            </div>

            {headSearchBar}
            
            <div className="header-greeting">
                <GreetingContainer />
            </div>
        </div>
    )

}

export default withRouter(Header);