@campgrounds.each do |campground| 
    json.set! campground.id do
        json.extract! campground,
            :id, :host_id, :name, :location, :price, :latitude, :longitude,
            :min_nights, :max_guests, :num_sites, :cabin, :parking, :campfires,
            :toilets, :pets, :wifi, :bins, :potable_water, :showers,
            :picnic_table, :kitchen, :activities, :checkin_time, :checkout_time,
            :description
    end
end