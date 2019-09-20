# json.extract! @user,
#     :id, :email, :first_name, :last_name, :zipcode, :hosted_campgrounds,
    # :bookings, :created_at

json.users do 
    json.set! @user.id do
        json.extract! @user,
            :id, :email, :first_name, :last_name, :zipcode, :created_at
            json.photoUrl @user.avi_photo
    end
end 

json.bookings do
    @user.bookings.each do |booking|
        json.set! booking.id do
            json.extract! booking,
                :id, :campground_id, :user_id, :num_guests, :booked_price,
                :checkin_date, :checkout_date, :created_at
                
        end
    end
end

json.campgrounds do
    @user.booked_campgrounds.each do |campground|
        json.set! campground.id do
            json.extract! campground,
                :id, :name, :location
                json.photoUrls campground.photos.map { |file| url_for(file) }
        end
    end
end


# :id, :host_id, :name, :location, :price, :latitude, :longitude,
# :min_nights, :max_guests, :num_sites, :cabin, :parking, :campfires,
# :toilets, :pets, :wifi, :bins, :potable_water, :showers,
# :picnic_table, :kitchen, :activities, :checkin_time, :checkout_time,
# :description, :host, :bookings
# json.photoUrls campground.photos.map { |file| url_for(file) }