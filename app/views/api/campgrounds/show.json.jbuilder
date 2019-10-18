

json.campgrounds do
    json.set! @campground.id do
        json.extract! @campground,
            :id, :host_id, :name, :location, :price, :latitude, :longitude,
            :min_nights, :max_guests, :num_sites, :cabin, :parking, :campfires,
            :toilets, :pets, :wifi, :bins, :potable_water, :showers,
            :picnic_table, :kitchen, :activities, :checkin_time, :checkout_time,
            :description, :host, :bookings
            json.photoUrls @campground.photos.map { |file| url_for(file) }
            json.hostImgUrl url_for(@campground.host.avi_photo)
    end
end


json.reviews do
    @campground.reviews.each do |review|
        json.set! review.id do
            json.extract! review,
                :id, :author_id, :campground_id, :helpful_count, :body, :created_at
                json.author_first review.author.first_name
                json.author_last review.author.last_name
                json.photoUrl url_for(review.author.avi_photo)
        end
    end
end


