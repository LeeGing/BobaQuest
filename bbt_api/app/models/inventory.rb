class Inventory < ApplicationRecord
  belongs_to :store, optional: true
  belongs_to :drink, optional: true
  has_many :transactions
## Validations/Assosciations ENTER HERE
end
