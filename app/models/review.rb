class Review < ApplicationRecord
    belongs_to :game
    belongs_to :user

    validates :title, presence: true
    validates :content, presence: true
    validates :date, presence: true

    # a review has a game_id and a user_id it is associated with
    # a review must have a title content and date to be created or updated successfully
end
