class Order < ApplicationRecord
    belongs_to :user
    has_many :carted_products
    has_many :products, through: :carted_products
    belongs_to :user_address
    belongs_to :tax
    
    validate :cart_is_not_empty

    def cart_is_not_empty
        if self.total == 0
            errors.add("You do not have any carted products.")
        end
    end

end
