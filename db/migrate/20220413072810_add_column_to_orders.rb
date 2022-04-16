class AddColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :subtotal, :decimal, precision: 9, scale: 2
    add_column :orders, :tax, :decimal, precision: 9, scale: 2
    add_column :orders, :total, :decimal, precision: 9, scale: 2
  end
end
