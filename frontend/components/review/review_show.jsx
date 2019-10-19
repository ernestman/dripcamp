import React from "react";

class ReviewShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            body: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(reviewId) {
        event.preventDefault();
        this.props.destroyReview(reviewId);
    }

    handleInput(event) {
        this.setState({body: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.currentUserId) {
            const writtenReview = {
                author_id: this.props.currentUserId,
                campground_id: this.props.campground.id,
                body: this.state.body
            }

            this.props.newReview(writtenReview);
            this.setState({ body: "" })

        } else {
            this.props.openModal("login")
        }
    }

    render() {
        
        const {campground, reviews, currentUserId} = this.props;

        const myReviews = reviews.map( review => {
            const dateOptions = { month: "long", day: "numeric", year: "numeric" };
            const deleteButton = (review && currentUserId && currentUserId === review.author_id) ? (
                <div className="review-button" onClick={() => this.handleDelete(review.id)}>Remove</div>
            ) : (
                <div></div>
            )
            return (
                <div key={review.id} className="review-item">
                    <div className="review-avi">
                        <img id="review-img" src={review.photoUrl}/>
                    </div>
                    <div className="review-body">
                        <div className="review-head">
                            <div className="review-name">
                                <div className="review-icon">
                                    <i id="thumbs-up" className="fas fa-thumbs-up fa-xs"></i>
                                </div>
                                <h1>
                                    {review.author_first} {review.author_last[0]}. <span>recommends this listing</span>
                                </h1>
                            </div>
                            <h2>{new Date(review.created_at).toLocaleDateString("en-US", dateOptions)}</h2>
                        </div>
                        <div id="review-text">{review.body}</div>
                        <div className="review-foot">
                            <div className="review-button">Helpful {review.helpful_count}</div>
                            {deleteButton}
                        </div>
                    </div>
                </div>
            )    
        })

        return (
            <div className="reviews-container">
                <h1 id="num-reviews">{myReviews.length} {myReviews.length === 1 ? "Written review" : "Written reviews"}</h1>
                <div className="review-main">{myReviews}</div>
                <div className="review-form-container">
                    <h1>Write a review</h1>
                    <form className="review-form">
                        <textarea
                            id="form-body"
                            onChange={this.handleInput}
                            value={this.state.body}
                            cols="30"
                            rows="10"
                            placeholder="Talk about your experience..."
                        >
                        </textarea>
                        <div className="review-button" onClick={this.handleSubmit}>Submit review</div>
                    </form>
                </div>
            </div>
        )

    }




}

export default ReviewShow;