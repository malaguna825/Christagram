class Post < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :image_file_name
    remove_column :posts, :image_content_type
    remove_column :posts, :image_file_size
  end
end
