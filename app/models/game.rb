class Game < ApplicationRecord

    belongs_to :developer
    has_many :reviews
    has_many :users, through: :reviews
end
