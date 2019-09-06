class AddColumnToTable < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :quantity, :integer
  end
end
