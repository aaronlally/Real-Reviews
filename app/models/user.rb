class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews, dependent: :destroy

    validates :username, uniqueness: true, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
end
