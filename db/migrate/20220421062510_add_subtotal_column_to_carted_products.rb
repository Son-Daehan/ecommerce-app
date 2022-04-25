class AddSubtotalColumnToCartedProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :carted_products, :carted_subtotal, :decimal, precision: 9, scale: 2
  end
end
