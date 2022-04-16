class AddCodeColumnToTaxes < ActiveRecord::Migration[6.1]
  def change
    add_column :taxes, :postal_code, :string
  end
end
