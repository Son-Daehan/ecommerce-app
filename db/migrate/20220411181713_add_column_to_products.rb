class AddColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :price, :decimal, precision: 9, scale: 2
  end
end
