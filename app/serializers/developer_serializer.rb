class DeveloperSerializer < ActiveModel::Serializer
    attributes :id, :name, :founding_year
  
    has_many :games
  end
  