class User < ApplicationRecord
    # a user has an encrypted password via bcrypt gem
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews, dependent: :destroy

    validates :username, uniqueness: true, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    # a user is associated with having many reviews and games each will be destroyed if the user is destroyed
    # a user must have a unique username, a first name and a last name to be created or updated
    

end
