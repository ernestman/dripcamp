class AddRatingToCampground < ActiveRecord::Migration[5.2]
  def change
    add_column :campgrounds, :rating, :integer
  end
end
