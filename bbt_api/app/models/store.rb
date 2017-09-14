class Store < ApplicationRecord
  has_many :sales, dependent: :destroy
  has_many :transactions, dependent: :destroy
## Validations/Assosciations ENTER HERE

end
