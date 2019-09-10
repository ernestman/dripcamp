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
        this.props.createUser(user)
            .then( () => dispatch(this.props.closeModal()))
    }

    handleInput(type) {
        return(event) => {
            this.setState({[type]: event.target.value})
        }
    }

    render() {
        const {errors} = this.props;
        const myErrors = errors.map(error => (
            <ul>{error}</ul>
        ))


        return (
            <div className="session-form">
                <h4>{myErrors}</h4>
                <br/>
                <form>
                    <label> 
                        <input 
                        type="text"
                        onChange={this.handleInput("first_name")}
                        value={this.state.first_name}
                        placeholder="First name..."
                        />
                    </label>
                    <br/>
                    <label> 
                        <input
                        type="text"
                        onChange={this.handleInput("last_name")}
                        value={this.state.last_name}
                        placeholder={"Last name..."}
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                        type="text"
                        onChange={this.handleInput("email")}
                        value={this.state.email}
                        placeholder="Email address..."
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                        type="password"
                        onChange={this.handleInput("password")}
                        value={this.state.password}
                        placeholder="Password..."
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                        type="text"
                        onChange={this.handleInput("zipcode")}
                        value={this.state.zipcode}
                        placeholder="Zip code..."
                        />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <br/>
                {/* <Link to="/login">Log In</Link> */}
            </div>
        )
    }
}

export default signupForm;