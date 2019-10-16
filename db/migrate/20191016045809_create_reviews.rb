class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :campground_id, null: false
      t.integer :helpful_count, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :campground_id
  end
end
