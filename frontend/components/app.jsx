import React from "react";
import GreetingContainer from "../components/greeting/greeting_container";
import {AuthRoute} from "../util/route_util";
import LoginContainer from "./login/login_container";
import SignupContainer from "./signup/signup_container";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <h1>Hipcamp baby</h1>
                    <GreetingContainer />
                </header>

                <AuthRoute path="/login" component={LoginContainer}/>
                <AuthRoute path="/signup" component={SignupContainer}/>
            </div>
        )
    }
}

export default App;