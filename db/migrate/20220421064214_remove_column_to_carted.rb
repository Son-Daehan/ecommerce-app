class RemoveColumnToCarted < ActiveRecord::Migration[6.1]
  def change
    remove_column :carted_products, :carted_subtotal, :decimal , prescision: 9, scale: 2
  end
end
