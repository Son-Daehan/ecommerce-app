class AddColumnToTaxes < ActiveRecord::Migration[6.1]
  def change
    add_column :taxes, :state_tax_rate, :decimal, precision: 9, scale: 2
    add_column :taxes, :local_tax_rate, :decimal, precision: 9, scale: 2
    add_column :taxes, :total_tax_rate, :decimal, precision: 9, scale: 2
  end
end
