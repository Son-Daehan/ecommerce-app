class CreateUserAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :user_addresses do |t|

      t.timestamps
    end
  end
end
