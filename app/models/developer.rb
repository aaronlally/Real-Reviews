class Developer < ApplicationRecord
    has_many :games, dependent: :destroy

    # a developer is associated with having many games; represented by games having a table row for developer_id
    # games associated with a developer will be destroyed if the developer is destroyed
end
