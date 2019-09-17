# == Schema Information
#
# Table name: bookings
#
#  id            :bigint           not null, primary key
#  campground_id :integer          not null
#  user_id       :integer          not null
#  num_guests    :integer          not null
#  booked_price  :float            not null
#  checkin_date  :date             not null
#  checkout_date :date             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ApplicationRecord

    validates :campground_id, :user_id, :num_guests, :booked_price,
        :checkin_date, :checkout_date, presence: true

    belongs_to :campground,
        foreign_key: :campground_id,
        class_name: "Campground"

    belongs_to :bookee,
    foreign_key: :user_id,
    class_name: "User"

end
