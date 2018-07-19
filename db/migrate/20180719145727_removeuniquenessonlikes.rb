class Removeuniquenessonlikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, column: :post_id
    remove_index :likes, column: :user_id
  end
end
