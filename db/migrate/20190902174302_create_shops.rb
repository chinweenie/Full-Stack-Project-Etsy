class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name
      t.integer :owner_id
      t.timestamps
    end
    add_index :shops, :owner_id
  end
end
