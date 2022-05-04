class UserAddress < ApplicationRecord

    belongs_to :user
    has_one :tax
    has_one :order

end
