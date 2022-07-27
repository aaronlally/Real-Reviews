class GameSerializer < ActiveModel::Serializer
    attributes :id, :name, :release_year, :genre, :multiplayer, :image, :platform, :developer_id
  
    belongs_to :developer
    has_many :reviews
  end
  