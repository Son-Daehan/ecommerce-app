class RemoveColumnToTaxes < ActiveRecord::Migration[6.1]
  def change
    remove_column :taxes, :user_address_id
  end
end
