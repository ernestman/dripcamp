import React from "react";

class ReviewUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateBody: this.props.review.body
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    handleInput(event) {
        this.setState( {updateBody: event.target.value} )
    }

    handleUpdate(event) {
        event.preventDefault();

        const updatedReview = {
            id: this.props.review.id,
            author_id: this.props.review.author_id,
            campground_id: this.props.review.campground_id,
            body: this.state.updateBody
        }

        this.props.updateReview(updatedReview)
            .then(this.props.closeModal())
    }


    render() {

        const {review} = this.props;
        const dateOptions = { month: "short", day: "numeric", year: "numeric" };


        return (
            <div className="review-update-container">
                <div className="review-head">
                    <h1 id="review-edit-name">{review.author_first} {review.author_last[0]}.</h1>
                    <h2 id="review-edit-date">Submitted {new Date(review.created_at).toLocaleDateString("en-US", dateOptions)}</h2>
                </div>
                <form className="review-form">
                    <textarea
                        id="form-body"
                        cols="30"
                        rows="10"
                        value={this.state.updateBody}
                        onChange={this.handleInput}
                    >
                    </textarea>
                </form>
                <div className="review-button" id="edit-review-btn" onClick={this.handleUpdate}>Update</div>
            </div>
        )


    }
}

export default ReviewUpdate;