class CreateDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.integer :founding_year

      t.timestamps
    end
  end
end
