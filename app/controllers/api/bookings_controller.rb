class Api::BookingsController < ApplicationController

    def create
        @booking = Booking.create(booking_params)

        if @booking.save 
        else
        end
    end

    def index
        @bookings = Booking.all
    end

    def show

    end

    def update

    end

    def destroy

    end


    private
    def booking_params
        params.require(:booking).permit(
            :campground_id, :user_id, :num_guests, :booked_price, :checkin_date,
            :checkout_date
        )
    end

end
