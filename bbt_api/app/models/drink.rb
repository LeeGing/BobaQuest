class Drink < ApplicationRecord
  has_many :inventories, dependent: :destroy
end
