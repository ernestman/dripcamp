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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
