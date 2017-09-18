class Drink < ApplicationRecord
  has_many :inventories, dependent: :destroy
## Validations/Assosciations ENTER HERE
end
