import React from "react";
import {Link} from "react-router-dom";

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleInput(type) {
        return (event) => {
            this.setState({[type]: event.target.value})
        }
    }

    handleDemoUser(event) {
        event.preventDefault();
        const demoUser = {
            email: "guest@aa.io",
            password: "111111"
        }
        this.props.login(demoUser)
            .then( () => dispatch(this.props.closeModal()))
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then( () => dispatch(this.props.closeModal()))
    }

    render() {
        const {errors} = this.props;
        const myErrors = errors.map(error => (
            <li>{error}</li>
        ))
        return (
            <div className="session-form">
                <b>Welcome back!</b>
                <h2>It's about time for another camping trip</h2>
                <button className="demo-button" onClick={this.handleDemoUser}>Demo User</button>
                    <ul>{myErrors}</ul>
                <form>
                    <label>
                        <input
                            type="text"
                            onChange={this.handleInput("email")}
                            value={this.state.email}
                            placeholder="Email address"
                            />
                    </label>
                    <br/>
                    <label>
                        <input
                            type="password"
                            onChange={this.handleInput("password")}
                            value={this.state.password}
                            placeholder="Password"
                            />
                    </label>
                    <br/>
                    <button className="login-signup-button" onClick={this.handleSubmit}>Log In</button>
                </form>
                {/* <Link to="/signup">Sign Up</Link> */}
            </div>
        )
    }
}

export default loginForm;