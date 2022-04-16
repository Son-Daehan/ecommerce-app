class AddTaxColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :tax_id, :integer
  end
end
