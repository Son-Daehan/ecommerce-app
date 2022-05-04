class AddMultipleColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :category, :string
    add_column :products, :image, :string
    add_column :products, :rating, :string
  end
end
