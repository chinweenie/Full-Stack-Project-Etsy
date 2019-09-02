class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :favorites, :favoriteable_id, :favoritable_id
    rename_column :favorites, :favoriteable_type, :favoritable_type
    rename_column :users, :usename, :username
  end
end
