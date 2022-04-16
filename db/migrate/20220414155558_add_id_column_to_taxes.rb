class AddIdColumnToTaxes < ActiveRecord::Migration[6.1]
  def change
    add_column :taxes, :user_address_id, :integer
  end
end
