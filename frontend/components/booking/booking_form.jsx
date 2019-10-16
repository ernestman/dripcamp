import React from "react";
import {withRouter} from "react-router-dom";

import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";

import { DateRangePicker } from "react-dates";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        let currentUserId;
        if (this.props.currentUser) {
            currentUserId = this.props.currentUser.id;
        }
        this.state = {
            user_id: currentUserId,
            campground_id: this.props.campground.id,
            booked_price: this.props.campground.price,
            startDate: null,
            endDate: null,
            focusedInput: null,
            num_guests: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.currentUser) {
            
            const booking = {
                user_id: this.state.user_id,
                campground_id: this.state.campground_id,
                booked_price: this.state.booked_price,
                checkin_date: this.state.startDate._d,
                checkout_date: this.state.endDate._d,
                num_guests: this.state.num_guests
            }

            this.props.newBooking(booking)
            this.props.history.push(`/users/${booking.user_id}`)
            // return <Redirect to={`/users/${currentUserId}`}/>
        } else {
            this.props.openModal("login");
        }
    }

    handleInput(type) {
        return(event) => {
            this.setState({[type]: event.target.value})
        }
    }
    
    render() {

        const {campground, errors} = this.props;
        const max = String(campground.max_guests);

        return (
            <div className="book-form-container">
                <div className="book-form-top">
                    <h1>${campground.price}</h1>
                    <p>per night</p>
                </div>
                <form className="book-form">
                    <div className="input-label-container">
                        <div className="input-label" id="checkin-label">Check-in</div>
                        <div className="input-label" id="checkout-label">Check-out</div>
                        <div className="input-label" id="guests-label">Guests</div>
                    </div>
                    <div className="book-input-container">
                        <DateRangePicker
                            startDateId="startDate"
                            startDate={this.state.startDate}
                            endDateId="endDate"
                            endDate={this.state.endDate}
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }) }
                            focusedInput={this.state.focusedInput}
                            onFocusChange={ (focusedInput) => this.setState({ focusedInput }) }
                            startDatePlaceholderText={"Select date"}
                            endDatePlaceholderText={"Select date"}
                        />
                        <div className="book-guests">
                            <input
                                id="guests"
                                type="number"
                                onChange={this.handleInput("num_guests")}
                                value={this.state.num_guests}
                                name="quantity"
                                max={max}
                                min="1"
                            />
                        </div>
                        
                    </div>
                    <div className="book-bottom">
                        <h2>{campground.min_nights === 1 ? campground.min_nights + " night minimum stay." : campground.min_nights + " nights minimum stay."}</h2>
                        <button className="book-button" onClick={this.handleSubmit}>Instant Book</button>
                    </div>
                    
                </form>
            </div>
        )

    }
}

export default withRouter(BookingForm);