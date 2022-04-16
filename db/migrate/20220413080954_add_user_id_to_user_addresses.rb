class AddUserIdToUserAddresses < ActiveRecord::Migration[6.1]
  def change
    add_column :user_addresses, :user_id, :integer
  end
end
