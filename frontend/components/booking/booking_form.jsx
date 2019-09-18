import React from "react";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            // user_id: 
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
        const booking = Object.assign({}, this.state);
        this.props.newBooking(booking);
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
                <h1>{campground.price}</h1>
                <form>
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
                    <button onClick={this.handleSubmit}>
                        Instant Book
                    </button>
                </form>
            </div>
        )


    }
}

export default BookingForm