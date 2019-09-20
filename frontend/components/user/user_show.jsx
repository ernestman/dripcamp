import React from "react";
import {Redirect, Link} from "react-router-dom";


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // debugger
        window.scrollTo(0, 0);
        if (!this.props.currentUser) {
            return <Redirect to="/" />
        }

        this.props.clearCampgrounds();
        this.props.clearBookings();
        this.props.fetchUser(this.props.currentUser.id);
    }

    handleDelete(bookingId) {
        // debugger
        event.preventDefault();
        this.props.destroyBooking(bookingId)
    }

    render() {
        // debugger
        const {currentUser, bookings, booked_campgrounds} = this.props;
        // debugger
        // if (!currentUser || Object.keys(currentUser).length === 0) {
        if (!currentUser) {
            return <Redirect to="/" />
        } else {

            const months = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
            const joinDate = new Date(currentUser.created_at);
            const month = months[joinDate.getMonth()];
            const year = joinDate.getFullYear().toString();

            // debugger
            
            const myBookings = bookings.map( book => (
                
                    <div key={book.id} className="booking-main">
                        <img className="booking-img" src={booked_campgrounds[book.campground_id].photoUrls[0]}/>
                        <div className="booking-info">
                            <h1>Campground: &nbsp;{booked_campgrounds[book.campground_id].name}</h1>
                            <h2>Location: &nbsp;{booked_campgrounds[book.campground_id].location}</h2>
                            <p><span>Check-in:</span>&nbsp; {book.checkin_date}</p>
                            <p><span>Check-out:</span>&nbsp; {book.checkout_date}</p>
                            <p><span>Guests:</span>&nbsp; {book.num_guests}</p>
                        </div>
                        <button onClick={() => this.handleDelete(book.id)} className="booking-delete">Cancel</button>
                    </div>
            ))

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
                                <p><i className="fas fa-heart fa-xs"></i>&nbsp;&nbsp;Dripcamper since:&nbsp;{month} {year}</p>
                            </div>
                        </div>
                        <div className="user-info-bottom">
                            <p>Trusted Dripcamper</p>
                            <p><i className="fas fa-check-circle fa-xs">&nbsp;&nbsp;</i>Email:&nbsp;<span>{currentUser.email}</span></p>
                        </div>
                    </div>
                    <div className="booking-info-container">
                        <p id="booking-header">My Bookings</p>

                        <div className="booking-container">
                            {myBookings}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

UserShow.defaultProps = {
    currentUser: {},
    bookings: {},
    booked_campgrounds: {}
}
export default UserShow;