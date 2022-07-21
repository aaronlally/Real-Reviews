class GameSerializer < ActiveModel::Serializer
    attributes :id, :name, :release_year, :genre, :multiplayer, :image, :platform, :developer_id
  
  end
  