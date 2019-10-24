class Api::BookingsController < ApplicationController

    before_action :require_logged_in

    def create
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id

        if @booking.save 
            render :show
        else
            render json: @booking.errors.full_messages, status: 401
        end
    end

    def show
        @booking = current_user.bookings.find(params[:id])
    end

    # def edit
    #     @booking = currentUser.bookings.find(params[:id])
    # end

    def update
        @booking = currentUser.bookings.find(params[:id])

        if @booking.update_attributes(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @booking = Booking.find(params[:id])
        
        @booking.destroy

        render json: @booking
    end
    
    
    private
    def booking_params
        params.require(:booking).permit(
            :campground_id, :user_id, :num_guests, :booked_price, :checkin_date,
            :checkout_date
        )
    end
    
end
