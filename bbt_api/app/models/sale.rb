class Sale < ApplicationRecord
  belongs_to :store, optional: true
  belongs_to :drink, optional: true
## Validations/Assosciations ENTER HERE
end
