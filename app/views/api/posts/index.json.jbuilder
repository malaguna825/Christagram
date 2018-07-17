

  @posts.includes(:author).each do |post|
    json.set! post.id do
      json.extract! post, :id, :body
      json.extract! post.author, :username
      json.photoUrl url_for(post.photo)

    end
  end
