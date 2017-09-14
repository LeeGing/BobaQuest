class User < ApplicationRecord
  has_secure_password
  has_many :transactions, dependent: :destroy

## Validations/Assosciations ENTER HERE


end