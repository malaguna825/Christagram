class Post < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :author,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User

  has_one_attached :photo
end
