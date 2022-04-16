class AddColumnToAddress < ActiveRecord::Migration[6.1]
  def change
    add_column :user_addresses, :ship_to, :boolean
  end
end
