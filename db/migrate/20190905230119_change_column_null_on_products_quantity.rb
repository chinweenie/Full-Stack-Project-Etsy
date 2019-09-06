class ChangeColumnNullOnProductsQuantity < ActiveRecord::Migration[5.2]
  def change
    change_column_null :products, :quantity, true
  end
end
