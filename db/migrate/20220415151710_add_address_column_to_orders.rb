class AddAddressColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :user_address_id, :integer
  end
end
