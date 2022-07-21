class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :content
      t.integer :user_id
      t.integer :game_id
      t.string :date

      t.timestamps
    end
  end
end
