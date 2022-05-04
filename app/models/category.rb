class Category < ApplicationRecord
    has_many :products, through: :product_category
    has_many :product_categories
end
