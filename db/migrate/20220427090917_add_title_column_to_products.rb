class AddTitleColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :title, :string
  end
end
