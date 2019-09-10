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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (event) => {
            this.setState({[type]: event.target.value})
        }
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
            <ul>{error}</ul>
        ))
        return (
            <div className="session-form">
                <h4>{myErrors}</h4>
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
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                <br/>
                {/* <Link to="/signup">Sign Up</Link> */}
            </div>
        )
    }
}

export default loginForm;