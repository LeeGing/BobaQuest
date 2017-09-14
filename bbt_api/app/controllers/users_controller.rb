require 'pry'

class UsersController < ApplicationController ##change UsersController to UserController

  def show
    user = User.find(params[:id]).as_json ##FIX TO:  User.find_by_id(params[:id]) ALSO users become user
    user["achievements"] = [
      'http://firstlineresponse.co.uk/wp-content/uploads/2016/06/level-3.png', 
      'https://pbs.twimg.com/profile_images/729625984253693952/kJw_4Vwb_400x400.jpg'
    ]
    render json: user
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



# 22
# down vote
# accepted
# item = Item.find(params[:id])
# item["message"] = "it works"
# render :json => item.to_json

# transaction.create , logic of conditional statement,
#       When we create a new transaction, we will 

# inserting in the link table, linking user to achievements
#   association has_many_through on users. USERS HAS MANY ACHIVEMENT USERS, 

#   USERS HAS MANY ACHIEVEMNTS THROUGH ACHIVEMENT USERS
#   jbuilder

# specify users achievements to be serialized 

# could define as json in model itself and specify what models to include.
#   easier than jbuilder but less maintailable. 

#   jonathan julian.com rails to json on json

