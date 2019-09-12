import React from "react";
import {Link} from "react-router-dom";

class signupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zipcode: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.createUser(user)
            .then( () => dispatch(this.props.closeModal()))
    }

    handleInput(type) {
        return(event) => {
            this.setState({[type]: event.target.value})
        }
    }

    handleRedirect(event) {
        event.preventDefault();
        this.props.clearErrors();
        this.props.openModal("login");
    }

    render() {
        const {errors} = this.props;

        const firstNameErrors = [];
        const lastNameErrors = [];
        const emailErrors = [];
        const passwordErrors = [];

        errors.forEach(error => {
            if (error.includes("First")) {
                firstNameErrors.push(error);
                firstNameErrors.map( err => (
                    <li>{err}</li>
                ))
            } else if (error.includes("Last")) {
                lastNameErrors.push(error);
                lastNameErrors.map( err => (
                    <li>{err}</li>
                ))
            } else if (error.includes("Email")) {
                emailErrors.push(error);
                emailErrors.map( err => (
                    <li>{err}</li>
                ))
            } else if (error.includes("Password")) {
                passwordErrors.push(error);
                passwordErrors.map( err => (
                    <li>{err}</li>
                ))
            }
        })

        return (
            <div className="session-form">
                <b>Join Dripcamp</b>
                <h2>Discover the best camping near me</h2>
                <form>
                    <input 
                    type="text"
                    onChange={this.handleInput("first_name")}
                    value={this.state.first_name}
                    placeholder="First name..."
                    />
                    <ul>{firstNameErrors}</ul>
                        <input
                        type="text"
                        onChange={this.handleInput("last_name")}
                        value={this.state.last_name}
                        placeholder={"Last name..."}
                        />
                    <ul>{lastNameErrors}</ul>
                        <input
                        type="text"
                        onChange={this.handleInput("email")}
                        value={this.state.email}
                        placeholder="Email address..."
                        />
                    <ul>{emailErrors}</ul>
                        <input
                        type="password"
                        onChange={this.handleInput("password")}
                        value={this.state.password}
                        placeholder="Password..."
                        />
                    <ul>{passwordErrors}</ul>
                        <input
                        type="text"
                        onChange={this.handleInput("zipcode")}
                        value={this.state.zipcode}
                        placeholder="Zip code (optional)..."
                        />
                    <button className="login-signup-button" onClick={this.handleSubmit}>Join Dripcamp</button>
                </form>

                <div className="form-redirect">
                    <p>Already a Dripcamper?</p>
                    <button className="redirect-button" onClick={this.handleRedirect}>Log in!</button>
                </div>
            </div>
        )
    }
}

export default signupForm;