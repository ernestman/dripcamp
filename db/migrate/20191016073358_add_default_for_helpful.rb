class AddDefaultForHelpful < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :helpful_count
    add_column :reviews, :helpful_count, :integer, null: false, default: 0
  end
end
