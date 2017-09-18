class Store < ApplicationRecord
  has_many :inventories, dependent: :destroy
end
