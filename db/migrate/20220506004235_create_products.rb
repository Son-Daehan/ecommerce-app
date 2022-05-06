class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price, precision:9, scale:2
      t.text :description
      t.string :category
      t.string :image
      t.timestamps
    end
  end
end
