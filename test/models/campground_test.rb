# == Schema Information
#
# Table name: campgrounds
#
#  id            :bigint           not null, primary key
#  host_id       :integer          not null
#  name          :string           not null
#  location      :string           not null
#  price         :float            not null
#  latitude      :float            not null
#  longitude     :float            not null
#  min_nights    :integer          not null
#  max_guests    :integer          not null
#  num_sites     :integer          not null
#  cabin         :boolean          default(FALSE), not null
#  parking       :boolean          default(FALSE), not null
#  campfires     :boolean          default(FALSE), not null
#  toilets       :boolean          default(FALSE), not null
#  pets          :boolean          default(FALSE), not null
#  wifi          :boolean          default(FALSE), not null
#  bins          :boolean          default(FALSE), not null
#  potable_water :boolean          default(FALSE), not null
#  showers       :boolean          default(FALSE), not null
#  picnic_table  :boolean          default(FALSE), not null
#  kitchen       :boolean          default(TRUE), not null
#  activities    :string           default([]), is an Array
#  checkin_time  :string           not null
#  checkout_time :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class CampgroundTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
