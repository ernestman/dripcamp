class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :campground_id, null: false
      t.integer :user_id, null: false
      t.integer :num_guests, null: false
      t.float :booked_price, null: false
      t.date :checkin_date, null: false
      t.date :checkout_date, null: false

      t.timestamps
    end
    add_index :bookings, :campground_id
    add_index :bookings, :user_id
  end
end
