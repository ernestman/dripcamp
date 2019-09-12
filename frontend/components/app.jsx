import React from "react";
import GreetingContainer from "../components/greeting/greeting_container";
import {AuthRoute} from "../util/route_util";
import LoginContainer from "./login/login_container";
import SignupContainer from "./signup/signup_container";
import Modal from "../components/modal/modal";
import {Redirect, Switch} from "react-router-dom";


// don't need routes for login and signup b/c modal
class App extends React.Component {
    render() {

        const localUrl = "http://localhost:3000/";
        const herokuUrl = "http://dripcamp.herokuapp.com"
        return (
            <div>
                <Modal />
                <header>
                    <div className="header-container">
                        <a href={localUrl}><img src={window.logoURL} /></a>
                        <GreetingContainer />
                    </div>
                </header>
                <footer>
                    <section className="footer-main">
                        <div className="footer-container">
                            <div className="footer-about">
                                <h2>Dripcamp is everywhere you want to camp.</h2>
                                <p>
                                    Welcome to Dripcamp homies! My name is Ernie and I HATE CSS.
                                    What I have learned so far is that Michelle is a beast and Elliot
                                    is a CSS master. Dolly is also a CSS connoisseur.
                                    Also, Jason can't debug cause he can't spell. Carlos personifies 
                                    ball-is-life. Andrew doesn't care anymore and wears rainbows to the office. I should
                                    do the same. Thanks for coming to my TED-Talk
                                </p>
                            </div>
                            {/* <img src={window.footerLogoURL} /> */}
                        </div>
                    </section>
                </footer>
                <Redirect to="/" />
            </div>
        )
    }
}

export default App;