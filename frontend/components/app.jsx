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
                        <img src="/assets/logo.png" />
                        <GreetingContainer />
                    </div>
                </header>
                <footer>
                    <div className="container">
                        <img src="/assets/footer_logo.svg" />
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;