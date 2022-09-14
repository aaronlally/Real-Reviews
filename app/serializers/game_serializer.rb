class GameSerializer < ActiveModel::Serializer
    attributes :id, :name, :release_year, :genre, :multiplayer, :image, :platform, :developer_id
  
    belongs_to :developer
    has_many :reviews

    # fetched games will render json with id name release_year genre multiplayer image platform and developer id
    # fetched games will include any associated reviews
    # fetched game will include associated developer
  end
  