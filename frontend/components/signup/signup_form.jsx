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
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.createUser(user);
    }

    handleInput(type) {
        return(event) => {
            this.setState({[type]: event.target.value})
        }
    }

    render() {
        const {errors} = this.props;
        const myErrors = errors.map(error => (
            <li>{error}</li>
        ))


        return (
            <div>
                <h2>Sign Up:</h2>
                <h4>{myErrors}</h4>
                <form>
                    <label>First name
                        <input 
                        type="text"
                        onChange={this.handleInput("first_name")}
                        value={this.state.first_name}
                        />
                    </label>
                    <br/>
                    <label>Last name
                        <input
                        type="text"
                        onChange={this.handleInput("last_name")}
                        value={this.state.last_name}
                        />
                    </label>
                    <br/>
                    <label>Email address
                        <input
                        type="text"
                        onChange={this.handleInput("email")}
                        value={this.state.email}
                        />
                    </label>
                    <br/>
                    <label>Password
                        <input
                        type="password"
                        onChange={this.handleInput("password")}
                        value={this.state.password}
                        />
                    </label>
                    <br/>
                    <label>Zip code
                        <input
                        type="text"
                        onChange={this.handleInput("zipcode")}
                        value={this.state.zipcode}
                        />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default signupForm;