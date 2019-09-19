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
            num_guests: 0
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
            this.props.newBooking(booking);
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


        return (
            <div className="book-form-container">
                <div className="book-form-top">
                    <h1>${campground.price}</h1>
                    <p>per night</p>
                </div>
                <form className="book-form">
                    <div className="book-input">
                        <input
                            type="date"
                            onChange={this.handleInput("checkin_date")}
                            value={this.state.checkin_date}
                            placeholder="Select date"
                        />
                        <input
                            type="date"
                            onChange={this.handleInput("checkout_date")}
                            value={this.state.checkout_date}
                            placeholder="Select date"
                        />
                        <input
                            type="number"
                            onChange={this.handleInput("num_guests")}
                            value={this.state.num_guests}
                            placeholder="Guests"
                        />
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