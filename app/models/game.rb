class Game < ApplicationRecord

    belongs_to :developer
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
end
