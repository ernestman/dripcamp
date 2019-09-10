import React from "react";
import {Link} from "react-router-dom";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser, signOut} = this.props;
        const display = currentUser ? (
            <div>
                <h3>Welcome, {currentUser.first_name}!</h3>
                <button onClick={signOut}>Sign Out</button>
            </div>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <br/>
                <Link to="/login">Log In</Link>
            </div>
        );


        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Greeting;