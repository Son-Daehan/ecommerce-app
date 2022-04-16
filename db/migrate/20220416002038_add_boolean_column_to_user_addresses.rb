class AddBooleanColumnToUserAddresses < ActiveRecord::Migration[6.1]
  def change
    add_column :shipping_addresses, :ship_to, :boolean
  end
end
