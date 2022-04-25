class AddUrlColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :url, :string
  end
end
