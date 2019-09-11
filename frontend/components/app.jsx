import React from "react";
import GreetingContainer from "../components/greeting/greeting_container";
import {AuthRoute} from "../util/route_util";
import LoginContainer from "./login/login_container";
import SignupContainer from "./signup/signup_container";
import Modal from "../components/modal/modal";


// don't need routes for login and signup b/c modal
class App extends React.Component {

    render() {
        return (
            <div>
                <Modal />
                <header>
                    <div className="container">
                        <a href="localhost:3000/"><img src={window.logoURL} /></a>
                        <GreetingContainer />
                    </div>
                </header>
                <footer>
                    <div className="container">
                        <img src={window.footerLogoURL} />
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;