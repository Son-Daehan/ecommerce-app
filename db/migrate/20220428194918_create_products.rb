class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :price
      t.string :description
      t.string :category
      t.string :image

      t.timestamps
    end
  end
end
