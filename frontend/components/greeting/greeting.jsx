import React from "react";
import {Link, withRouter} from "react-router-dom";

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

    const handleSignOut = (event) => {
        event.preventDefault();
        signOut()
            .then( () => props.history.push("/"))
    }
    
    // nbsp = non breaking space
    const modalLinks = () => (
        <div className="header-nav">
            <a href="http://github.com/ernestman/" id="github" target="_blank">
                <i className="fab fa-github"></i>&nbsp;Github
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="http://linkedin.com/in/ernestman/" id="linkedin" target="_blank">
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
                <img className="menu-button" src={window.waterDropUrl} />
                <div className="dropdown-menu">
                    <div className="drop-link-container">
                        <Link to={`/users/${currentUser.id}`}>My Trips</Link>
                    </div>
                    <div className="drop-link-container">
                        Manage Account
                    </div>
                    <div className="drop-button-container">
                        <button onClick={signOut}>Logout</button>
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

