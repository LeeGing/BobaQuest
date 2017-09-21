require 'pry'

class UsersController < ApplicationController

  def show
    user = User.find(params[:id]).as_json
    render json: user

  end

  def find_by_username
    @user = User.where(username: params[:username])

    render json: @user
  end

  def create
    @user = User.new(user_params)
    @user.save;
    redirect_to "http://localhost:4100/"
  end

private
  def user_params
    params.require(:user).permit(:name, :email, :password, :username)
  end
end
