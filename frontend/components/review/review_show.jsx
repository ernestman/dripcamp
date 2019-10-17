import React from "react";

class ReviewShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(reviewId) {
        event.preventDefault();
        this.props.destroyReview(reviewId);
    }

    render() {
        
        const {campground, reviews, currentUserId} = this.props;

        if (!campground.reviewIds || Object.keys(reviews).length === 0) {
            return null;
        }

        const myReviews = campground.reviewIds.map( id => {
            const review = reviews[id];
            const dateOptions = { month: "long", day: "numeric", year: "numeric" };
            const deleteButton = (currentUserId === review.author_id) ? (
                <div className="review-button" onClick={() => this.handleDelete(id)}>Remove</div>
            ) : (
                <div></div>
            )
            return (
                <div key={id} className="review-main">
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
                <h1>{myReviews.length} {myReviews.length === 1 ? "Written review" : "Written reviews"}</h1>
                {myReviews}
            </div>
        )

    }




}

export default ReviewShow;