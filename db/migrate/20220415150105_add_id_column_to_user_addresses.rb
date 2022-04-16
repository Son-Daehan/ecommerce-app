class AddIdColumnToUserAddresses < ActiveRecord::Migration[6.1]
  def change
    add_column :user_addresses, :tax_id, :integer
  end
end
