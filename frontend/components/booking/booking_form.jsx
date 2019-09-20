import React from "react";
import {Redirect} from "react-router-dom";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: null,
            // this.props.currentUser.id,
            campground_id: this.props.campground.id,
            booked_price: this.props.campground.price,
            checkin_date: "",
            checkout_date: "",
            num_guests: this.props.campground.max_guests
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        
    }

    handleSubmit(event) {
        event.preventDefault();
        // debugger
        if (this.props.currentUser) {
            const currentUserId = this.props.currentUser.id
            this.setState({user_id: currentUserId})
            const booking = Object.assign({}, this.state);
            this.props.newBooking(booking)
                // .then( () => this.props.history.push(`/users/${currentUserId}`))
            return <Redirect to={`/users/${currentUserId}`}/>
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
        // debugger

        return (
            <div className="book-form-container">
                <div className="book-form-top">
                    <h1>${campground.price}</h1>
                    <p>per night</p>
                </div>
                <form className="book-form">
                    <div className="book-input-container">
                        <div className="input-label-container">
                            <p id="checkin-label">Check-in</p>
                            <p id="checkout-label">Check-out</p>
                            <p id="guests-label">Guests</p>
                        </div>
                        <div className="book-input">
                            <input
                                id="checkin"
                                type="date"
                                onChange={this.handleInput("checkin_date")}
                                value={this.state.checkin_date}
                                placeholder="Select date"
                            />
                            <input
                                id="checkout"
                                type="date"
                                onChange={this.handleInput("checkout_date")}
                                value={this.state.checkout_date}
                                placeholder="Select date"
                            />
                            <input
                                id="guests"
                                type="number"
                                onChange={this.handleInput("num_guests")}
                                value={this.state.num_guests}
                                // placeholder="Guests"
                                name="quantity"
                                max={max}
                                min="1"
                            />
                        </div>
                    </div>
                    <div className="book-bottom">
                        <h2>{campground.min_nights} nights minimum stay</h2>
                        <button className="book-button" onClick={this.handleSubmit}>Instant Book</button>
                    </div>
                </form>
            </div>
        )


    }
}

export default BookingForm