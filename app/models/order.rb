class Order < ApplicationRecord
    belongs_to :user
    has_many :carted_products
    has_many :products, through: :carted_products
    belongs_to :user_address
    belongs_to :tax
    
end
