class Api::CampgroundsController < ApplicationController

    def index 
        @campgrounds = Campground.all
    end

    def show
        @campground = Campground.find(params[:id])
    end


    private
    def campground_params
        params.require(:campground).permit(
            :host_id, :name, :location, :price, :latitude, :longitude,
            :min_nights, :max_guests, :num_sites, :cabin, :parking, :campfires,
            :toilets, :pets, :wifi, :bins, :potable_water, :showers,
            :picnic_table, :kitchen, :activities, :checkin_time, :checkout_time, 
            :description
        )
    end

end
