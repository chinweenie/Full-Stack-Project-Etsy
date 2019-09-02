class AddIndexToUserId < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, :user_id
  end
end
