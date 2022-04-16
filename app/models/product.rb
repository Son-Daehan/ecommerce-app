class Product < ApplicationRecord
    belongs_to :supplier
    has_many :images
    has_many :carted_products
    has_many :orders, through: :carted_products
end
