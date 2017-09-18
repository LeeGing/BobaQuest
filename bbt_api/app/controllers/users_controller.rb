require 'pry'

class UsersController < ApplicationController ##change UsersController to UserController

  def show
    user = User.find(params[:id]).as_json ##returns a hash
    ##FIX TO:  User.find_by_id(params[:id]) ALSO users become user
      # user["achievements"] = [
      #   'http://firstlineresponse.co.uk/wp-content/uploads/2016/06/level-3.png', 
      #   'https://pbs.twimg.com/profile_images/729625984253693952/kJw_4Vwb_400x400.jpg'
      # ] ##Adds achievements as a key for JSON object
      # user["ach1"] = 
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
