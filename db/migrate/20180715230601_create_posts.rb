class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body
      t.integer :user_id, null:false
      t.string :image_file_name,null:false
      t.string :image_content_type,null:false
      t.integer :image_file_size,null:false

      t.timestamps
    end
  end
end
