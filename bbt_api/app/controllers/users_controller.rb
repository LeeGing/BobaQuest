require 'pry'

class UsersController < ApplicationController ##change UsersController to UserController

  def show
    user = User.find(params[:id]) ##FIX TO:  User.find_by_id(params[:id]) ALSO users become user
    render json: user ## users --> user
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
