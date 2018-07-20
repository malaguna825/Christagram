class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @post = @like.post
      render "api/posts/show"
    end
  end

  def destroy
    @like = Like.find_by(post_id: params[:id], user_id: current_user.id)
    @like.destroy
    @post = @like.post
    render "api/posts/show"
  end

  def like_params
    params.require(:like).permit(:post_id)
  end

end
