import React from "react";
import {Redirect} from "react-router-dom";


class UserShow extends React.Component {

    componentDidMount() {
        // debugger
        window.scrollTo(0, 0);
        if (!this.props.currentUser) {
            return <Redirect to="/" />
        }
        
        this.props.fetchUser(this.props.currentUser.id)
    }

    render() {
        
        const {currentUser} = this.props;
        // debugger
        if (currentUser === undefined) {
            return <Redirect to="/" />
        }

        return (
            <div className="user-show-main">
                <div className="user-info-container">
                    <div className="user-icon">
                        <h1>Placeholder for User Icon</h1>
                    </div>
                    <h1>Welcome back, </h1>
                    <h1>{currentUser.first_name} {currentUser.last_name[0]}.</h1>
                    <h2>{currentUser.email}</h2>
                    <h3>Dripcamper since: {currentUser.created_at}</h3>
                </div>
                <div className="booking-info-container">
                    <h1>Placeholder for Booking info</h1>
                </div>
            </div>
        )

    }

}

export default UserShow;