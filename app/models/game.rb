class Game < ApplicationRecord

    belongs_to :developer
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    # a game belongs to a devloper; represented with game table row developer_id
    # a game is associated with having many reveiws, which will be destroyed if the game it belongs to is destroyed
    # a game has users through reviews; represented by reviews table row user_id
end
