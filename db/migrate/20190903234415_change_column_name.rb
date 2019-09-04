class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :fname
  end
end
