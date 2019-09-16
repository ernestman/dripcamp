import React from "react";
import Modal from "../modal/modal";
import GreetingContainer from "../greeting/greeting_container";

const Header = () => {

    return (
        <div className="header-container">
            <Modal />
            <div className="header-icon">
                <a href="http://localhost:3000"><img src={window.logoUrl} /></a>
            </div>
            <div className="header-greeting">
                <GreetingContainer />
            </div>
        </div>
    )

}

export default Header;