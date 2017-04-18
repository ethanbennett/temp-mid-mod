class AddCountToLinks < ActiveRecord::Migration[5.0]
  def change
    add_column :links, :count, :integer, :default => 0
  end
end
