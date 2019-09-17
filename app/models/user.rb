# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zipcode         :integer
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :first_name, :last_name, :email, :session_token, :password_digest, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil unless @user
        @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    # has_one_attached :avi_photo

    has_many :hosted_campgrounds,
        foreign_key: :host_id,
        class_name: "Campground"

    has_many :bookings, 
        foreign_key: :user_id,
        class_name: "Booking"

end
