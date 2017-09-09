class UsersController < ApplicationController ##change UsersController to UserController
  def show
    user = User.find(params[:id]) ##FIX TO:  User.find_by_id(params[:id]) ALSO users become user
    render json: user ## users --> user
  end

end
