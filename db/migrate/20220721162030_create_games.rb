class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :release_year
      t.string :genre
      t.boolean :multiplayer
      t.string :image
      t.string :platform
      t.integer :developer_id

      t.timestamps
    end
  end
end
