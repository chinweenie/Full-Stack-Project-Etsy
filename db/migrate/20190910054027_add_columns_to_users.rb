class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string
    add_column :users, :city, :string
    add_column :users, :birthday, :date
    add_column :users, :about, :text
  end

end
