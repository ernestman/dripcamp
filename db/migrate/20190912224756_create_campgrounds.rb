class CreateCampgrounds < ActiveRecord::Migration[5.2]
  def change
    create_table :campgrounds do |t|
      t.integer :host_id, null: false
      t.string :name, null: false
      t.string :location, null: false
      t.float :price, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :min_nights, null: false
      t.integer :max_guests, null: false
      t.integer :num_sites, null: false
      t.boolean :cabin, null: false, default: false
      t.boolean :parking, null: false, default: false
      t.boolean :campfires, null: false, default: false
      t.boolean :toilets, null: false, default: false
      t.boolean :pets, null: false, default: false
      t.boolean :wifi, null: false, default: false
      t.boolean :bins, null: false, default: false
      t.boolean :potable_water, null: false, default: false
      t.boolean :showers, null: false, default: false
      t.boolean :picnic_table, null: false, default: false
      t.boolean :kitchen, null: false, default: true
      t.string :activities, array: true, default: []
      t.string :checkin_time, null: false
      t.string :checkout_time, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :campgrounds, :host_id
  end
end
