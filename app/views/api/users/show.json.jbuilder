# json.extract! @user,
#     :id, :email, :first_name, :last_name, :zipcode, :hosted_campgrounds,
    # :bookings, :created_at

json.users do 
    json.set! @user.id do
        json.extract! @user,
            :id, :email, :first_name, :last_name, :zipcode, :created_at
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
            json.campground_name campground.name
            json.campground_location campground.location
        end
    end
end