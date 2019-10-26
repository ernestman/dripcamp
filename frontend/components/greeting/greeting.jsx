import React from "react";
import {Link, withRouter} from "react-router-dom";

const Greeting = (props) => {
    const {currentUser, signOut, openModal, clearErrors, clearCampgrounds, clearBookings} = props;
    
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

    const handleUserShow = (event) => {
        event.preventDefault();
        clearCampgrounds()
        clearBookings()
        props.history.push(`/users/${currentUser.id}`)
    }
    
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
        <div className="logged-in-header">
            <a className="logged-in-link" href="http://github.com/ernestman/" id="github" target="_blank">
                <i className="fab fa-github fa-sm"></i>&nbsp;Github
            </a>
            {/* &nbsp;&nbsp;&nbsp; */}
            <a className="logged-in-link" href="http://linkedin.com/in/ernestman/" id="linkedin" target="_blank">
                <i className="fab fa-linkedin fa-sm"></i>&nbsp;LinkedIn
            </a>
            <div className="drop-icon">
                <div className="dropdown">
                    <img className="menu-button" src={window.waterDropUrl} />
                    <div className="dropdown-menu">
                        <div className="drop-link-container" onClick={handleUserShow}>
                            <div className="drop-link"><i className="fas fa-suitcase"></i>My Trips</div>
                        </div>
                        <div className="drop-link-container" onClick={handleSignOut}>
                            <div className="drop-link"><i className="fas fa-sign-out-alt"></i>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    return (
        currentUser ? myGreeting() : modalLinks()
    );
}

export default withRouter(Greeting);

