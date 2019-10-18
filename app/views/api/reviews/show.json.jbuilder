json.extract! @review,
    :id, :author_id, :campground_id, :helpful_count, :body, :created_at
    json.author_first @review.author.first_name
    json.author_last @review.author.last_name
    json.photoUrl url_for(@review.author.avi_photo)