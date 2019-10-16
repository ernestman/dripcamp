# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  campground_id :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  helpful_count :integer          default(0), not null
#

class Review < ApplicationRecord

    validates :author_id, :campground_id, :helpful_count, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    belongs_to :campground,
        foreign_key: :campground_id,
        class_name: "Campground"

end
