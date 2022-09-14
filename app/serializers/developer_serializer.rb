class DeveloperSerializer < ActiveModel::Serializer
    attributes :id, :name, :founding_year
  
    has_many :games
    # developers fetched will be dispaly with elements id name and founding_year with respective values
    # developers fetched will include associated games
  end
  