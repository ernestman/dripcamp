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
        // debugger
        const {currentUser} = this.props;
        // debugger
        if (currentUser === undefined) {
            return <Redirect to="/" />
        } else {
            // debugger
            const months = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
            const joinDate = new Date(currentUser.created_at);
            const month = months[joinDate.getMonth()];
            const year = joinDate.getFullYear().toString();

            return (
                <div className="user-show-main">
                    <div className="user-info-container">
                        <div className="user-info-main">
                            <div className="user-info-top">
                                <div className="user-icon">
                                    Icon
                                </div>
                                <div className="user-info-name">
                                    <p>Welcome back, </p>
                                    <h1>{currentUser.first_name} {currentUser.last_name[0]}.</h1>
                                </div>
                            </div>
                            <div className="user-info">
                                <p><i className="fas fa-heart fa-xs"></i>&nbsp;&nbsp;Dripcamper since: {month} {year}</p>
                            </div>
                        </div>
                        <div className="user-info-bottom">
                            <p>Trusted Dripcamper</p>
                            <p><i className="fas fa-check-circle fa-xs">&nbsp;&nbsp;</i>Email:&nbsp;<span>{currentUser.email}</span></p>
                        </div>
                    </div>
                    <div className="booking-info-container">
                        <h1>Placeholder for User Bookings</h1>
                    </div>
                </div>
            )
        }
    }

}

export default UserShow;