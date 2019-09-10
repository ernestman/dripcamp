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
        <nav className="login-signup">
            <button onClick={handleLoginModal}>Log in</button>
            &nbsp;
            <button onClick={handleSignupModal}>Sign up</button>
        </nav>
    );
    
    const headGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name"> Welcome, {currentUser.first_name}</h2>
            <button className="header-button" onClick={signOut}>Log out</button>
        </hgroup>
    );
    
    return (
        currentUser ? headGreeting(currentUser, signOut) : modalLinks()
    );
}

    export default Greeting;

