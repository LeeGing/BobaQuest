class Drink < ApplicationRecord
  has_many :sales, dependent: :destroy
## Validations/Assosciations ENTER HERE
end
