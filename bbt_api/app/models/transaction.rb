class Transaction < ApplicationRecord
  belongs_to :sale
  belongs_to :user
  belongs_to :store
## Validations/Assosciations ENTER HERE
end
