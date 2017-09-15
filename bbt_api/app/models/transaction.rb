class Transaction < ApplicationRecord
  belongs_to :inventory
  belongs_to :user
  belongs_to :store
## Validations/Assosciations ENTER HERE
end
