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
        this.handleRedirect = this.handleRedirect.bind(this);
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
            password: "password"
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

    handleRedirect(event) {
        event.preventDefault();
        this.props.clearErrors();
        this.props.openModal("signup")
    }

    render() {
        const {errors} = this.props;
        // const myErrors = errors.map(error => (
        //     <li>{error}</li>
        // ))
        const myErrors = errors[0];

        return (
            <div className="session-form">
                <b>Welcome back!</b>
                <h2>It's about time for another camping trip</h2>
                <button className="demo-button" onClick={this.handleDemoUser}>Demo User</button>
                <form>
                    <input
                        type="text"
                        onChange={this.handleInput("email")}
                        value={this.state.email}
                        placeholder="Email address"
                        />

                        <ul>{myErrors}</ul>
                    <input
                        type="password"
                        onChange={this.handleInput("password")}
                        value={this.state.password}
                        placeholder="Password"
                        />
                    <br/>
                    <button className="login-signup-button" onClick={this.handleSubmit}>Log In</button>
                </form>

                <div className="form-redirect">
                    <p>Don't have a Dripcamp account?</p>
                    <button className="redirect-button" onClick={this.handleRedirect}>Sign up!</button>
                </div>
            </div>
        )
    }
}

export default loginForm;