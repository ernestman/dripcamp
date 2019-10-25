// import React from "react";

// class BookingItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDelete = this.handleDelete.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchUser(this.props.currentUser.id)
//     }   

    
//     handleDelete(bookingId) {
//         event.preventDefault();
//         this.props.destroyBooking(bookingId);
//     }

//     render() {

//         const {destroyBooking, book, bookedCampgrounds} = this.props;

//         if (!bookedCampgrounds) {
//             return <div></div>
//         }
    
//         return (
//             <div className="booking-main">
//                 <img className="booking-img" src={bookedCampgrounds[book.campground_id].photoUrls[0]} />
//                 <div className="booking-info">
//                     <div className="booking-location">
//                         <h1>{bookedCampgrounds[book.campground_id].name}</h1>
//                         <h2>{bookedCampgrounds[book.campground_id].location}</h2>
//                     </div>
//                     <div className="booking-details">
//                         <div className="book-details">
//                             <span>Check-in</span>
//                             {new Date(book.checkin_date).toDateString().slice(4)}
//                         </div>
//                         <div className="book-details">
//                             <span>Check-out</span>
//                             {new Date(book.checkout_date).toDateString().slice(4)}
//                         </div>
//                         <div className="book-details">
//                             <span>Guests</span>
//                             {book.num_guests}
//                         </div>
//                     </div>
//                     <button onClick={() => handleDelete(book.id)} className="booking-delete">Cancel</button>
//                 </div>
//             </div>
    
//         )
//     }
// }

// export default BookingItem;