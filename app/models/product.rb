class Product < ApplicationRecord

    has_many :carted_products
    has_many :images
    has_many :orders, through: :carted_products
    has_many :categories, through: :product_category
    has_many :product_categories

    require "http"

    def self.get_products
        response = HTTP.get("https://fakestoreapi.com/products")
        return response.parse
    end

end
