class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
  end

  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end

end
