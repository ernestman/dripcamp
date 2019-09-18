import React from "react";
import {Link} from "react-router-dom";

const Greeting = (props) => {
    // debugger
    const {currentUser, signOut, openModal, clearErrors} = props;
    
    const handleLoginModal = (event) => {
        event.preventDefault()
        clearErrors();
        openModal("login");
    }

    const handleSignupModal = (event) => {
        event.preventDefault();
        clearErrors();
        openModal("signup")
    }
    
    // nbsp = non breaking space
    const modalLinks = () => (
        <div className="header-nav">
            <a href="http://github.com/ernestman/" id="github" target="_blank">
                <i className="fab fa-github"></i>&nbsp;Github
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="http://linkedin.com/in/ernest-man/" id="linkedin" target="_blank">
                <i className="fab fa-linkedin fa-sm"></i>&nbsp;LinkedIn
            </a>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleSignupModal}><span>Sign up</span></button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleLoginModal}><span>Log in</span></button>
        </div>
    );

    const myGreeting = () => (
        <div className="tent-icon">
            <div className="dropdown">
                <img className="menu-button" src={window.tentDropUrl} />
                <div className="dropdown-menu">
                    <div className="drop-button-container">
                        <button onClick={signOut}>Logout</button>
                        <Link to={`/users/${currentUser.id}`}>Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
    // headGreeting(currentUser, signOut)

    return (
        currentUser ? myGreeting() : modalLinks()
    );
}

export default Greeting;

