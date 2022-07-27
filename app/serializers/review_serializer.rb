class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :title, :content, :user_id, :game_id, :date

    belongs_to :user
    belongs_to :game
  end
  