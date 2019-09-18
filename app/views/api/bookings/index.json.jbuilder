@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking,
            :id, :campground_id, :user_id, :num_guests, :booked_price,
            :checkin_date, :checkout_date, :created_at, :updated_at
            json.campground_name booking.campground.name
            json.campground_location booking.campground.location
    end
end