class AddShopIdToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :shop_id, :integer, index: true
    add_column :products, :category_id, :integer, index: true
  end
  
end
