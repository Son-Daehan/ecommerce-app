class AddColumnToUserAddresses < ActiveRecord::Migration[6.1]
  def change
    add_column :user_addresses, :street_name, :string
    add_column :user_addresses, :city, :string
    add_column :user_addresses, :region, :string
    add_column :user_addresses, :country, :string
    add_column :user_addresses, :postal_code, :string
  end
end
