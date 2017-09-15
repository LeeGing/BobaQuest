class Store < ApplicationRecord
  has_many :inventories, dependent: :destroy
  has_many :transactions, dependent: :destroy

## Validations/Assosciations ENTER HERE

end
