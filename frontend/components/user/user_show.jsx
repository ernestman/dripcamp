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
        this.props.clearBookings();
        this.props.clearCampgrounds();
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
        // if (!currentUser || Object.keys(currentUser).length === 0) {
        if (!currentUser) {
            return <Redirect to="/" />
        } else if (Object.keys(booked_campgrounds).length <= 1) {
            return null;
        } else {

            const months = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
            const joinDate = new Date(currentUser.created_at);
            const month = months[joinDate.getMonth()];
            const year = joinDate.getFullYear().toString();

            const myBookings = bookings.map( book => (
    
                    <div key={book.id} className="booking-main">
                        <img className="booking-img" src={booked_campgrounds[book.campground_id].photoUrls[0]}/>
                        <div className="booking-info">
                            <div className="booking-location">
                                <h1>{booked_campgrounds[book.campground_id].name}</h1>
                                <h2>{booked_campgrounds[book.campground_id].location}</h2>
                            </div>
                            <div className="booking-details">
                                <div className="book-details">
                                    <span>Check-in</span>
                                    {new Date(book.checkin_date).toDateString().slice(4)}
                                </div>
                                <div className="book-details">
                                    <span>Check-out</span>
                                    {new Date(book.checkout_date).toDateString().slice(4)}
                                </div>
                                <div className="book-details">
                                    <span>Guests</span>
                                    {book.num_guests}
                                </div>
                            </div>
                            <button onClick={() => this.handleDelete(book.id)} className="booking-delete">Cancel</button>
                        </div>
                    </div>
            ))

            // debugger

            return (
                <div className="user-show-main">
                    <div className="user-info-container">
                        <div className="user-info-main">
                            <div className="user-info-top">
                                <div className="user-icon">
                                    <img id="user-img"src={currentUser.photoUrl}/>
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