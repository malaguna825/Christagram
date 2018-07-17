class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :index
  end

  # def show
  #   @post = Post.find(params[:id])
  #   render :show
  # end

  # def create
  #   @post = Post.new(post_params)
  #   @post.user_id = current_user.id
  #   if @post.save
  #     render :show
  #   else
  #     render json: @post.errors.full_messages, status: 401
  #   end
  # end
  #
  # def update
  #   if @post = current_user.posts.find(params[:id])
  #     render :show
  #   else
  #     render json: @post.errors.full_messages, status:401
  #   end
  # end
  #
  # def destroy
  #   @post = current_user.posts.find(params[:id])
  #  if @post
  #    @post.destroy
  #    render :show
  #  else
  #    render json: ['Error destroying the post'], status: 401
  #  end
  # end
  #
  def post_params
    params.require(:post).permit(:body)
  end

end
