class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :title, :content, :user_id, :game_id, :date

    belongs_to :user
    belongs_to :game

    # fetched reviews render json with id title content user_id game_id and date
    # fetched reviews include associated user and game
  end
  