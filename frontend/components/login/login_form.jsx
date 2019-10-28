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
            .then( () => this.props.closeModal())
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then( () => this.props.closeModal())
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
                <h1>Welcome back!</h1>
                <h2>It's about time for another camping trip</h2>
                <div className="demo-button" onClick={this.handleDemoUser}>
                    Demo User
                </div>
                <div className="or">
                    <span>or</span>
                </div>
                <form>
                    <div className="session-form-input">
                        <input
                            type="text"
                            onChange={this.handleInput("email")}
                            value={this.state.email}
                            placeholder="Email address"
                        />
                    </div>

                    <div className="errors-cont">
                        <ul>{myErrors}</ul>
                    </div>
                    <div className="session-form-input">
                        <input
                            type="password"
                            onChange={this.handleInput("password")}
                            value={this.state.password}
                            placeholder="Password"
                        />
                    </div>
                    <button className="login-signup-button" onClick={this.handleSubmit}>
                        Log In
                    </button>
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

// let stateEmail = "";
        // for (let i = 0; i < demoUser["email"].length; i++) {
        //     stateEmail += demoUser["email"][i];
        //     // console.log(stateEmail)
        //     this.set

        //     setTimeout(this.setState({ "email": stateEmail }), 2000)
        //     console.log(this.state.email)
        // }

        // let statePassword = "";
        // for (let i = 0; i < demoUser["password"].length; i++) {
        //     statePassword += demoUser["password"][i];
        //     // console.log(statePassword)
        //     // debugger
        //     setTimeout(this.setState({ "password": statePassword }), 2000)
        //     console.log(this.state.password)
        // }