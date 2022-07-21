class Review < ApplicationRecord
    belongs_to :game
    belongs_to :user

    validates :title, presence: true
    validates :content, presence: true
    validates :date, presence: true
end
