class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username

  has_many :reviews

  # fetched users will display with id first_name last_name and username
  # fetched users will dispaly with associated reviews
end
