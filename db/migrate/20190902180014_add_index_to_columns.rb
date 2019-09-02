class AddIndexToColumns < ActiveRecord::Migration[5.2]
  def change
    add_index :products, :shop_id
    add_index :products, :category_id
    change_column_null :products, :shop_id, false
    change_column_null :products, :category_id, false
    change_column_null :favorites, :favoriteable_id, false
    change_column_null :favorites, :favoriteable_type, false
  end
end
