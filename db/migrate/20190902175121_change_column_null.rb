class ChangeColumnNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :rating, false
    change_column_null :reviews, :body, false
    change_column_null :reviews, :product_id, false
    change_column_null :reviews, :user_id, false

    change_column_null :cart_items, :product_id, false
    change_column_null :cart_items, :quantity, false

    change_column_null :shops, :name, false
    change_column_null :shops, :owner_id, false
  end
end
