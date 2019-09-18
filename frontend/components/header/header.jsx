import React from "react";
import Modal from "../modal/modal";
import GreetingContainer from "../greeting/greeting_container";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="header-container">
            <Modal />
            <div className="header-icon">
                <Link to="/"><img src={window.logoUrl} /></Link>
                {/* <a href="http://dripcamp.herokuapp.com"><img src={window.logoUrl} /></a> */}
            </div>
            <div className="header-greeting">
                <GreetingContainer />
            </div>
        </div>
    )

}

export default Header;