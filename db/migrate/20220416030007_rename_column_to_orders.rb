class RenameColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    rename_column :orders, :tax, :total_tax
  end
end
