class RemoveColumnToUserAddresses < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_addresses, :ship_to, :integer
  end
end
