class AddTotalColumnToCartedProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :carted_products, :total_price, :decimal, precision: 9, scale: 2
  end
end
