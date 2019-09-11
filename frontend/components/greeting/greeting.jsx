import React from "react";
// import {Link} from "react-router-dom";

const Greeting = (props) => {
    
    const {currentUser, signOut, openModal, clearErrors} = props;
    
    const handleLoginModal = () => {
        event.preventDefault()
        clearErrors();
        openModal("login");
    }

    const handleSignupModal = () => {
        event.preventDefault();
        clearErrors();
        openModal("signup")
    }
    
    // nbsp = non breaking space
    const modalLinks = () => (
        <nav className="main-nav">
            <a href="http://github.com/ernestman/" target="_blank">Github</a>
            &nbsp;&nbsp;&nbsp;
            <a href="http://linkedin.com/in/ernest-man/" target="_blank">LinkedIn</a>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleLoginModal}><span>Log in</span></button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleSignupModal}><span>Sign up</span></button>
        </nav>
    );

    const myGreeting = () => (
        <div className="tent-icon">
            <div className="dropdown">
                <img className="menu-button" src={window.tentIconURL} />
                <div className="dropdown-menu">
                    <div className="drop-button-container">
                        <button onClick={signOut}>Log out</button>
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

