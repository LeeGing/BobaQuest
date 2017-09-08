class UsersController < ApplicationController ##change UsersController to UserController
  def index
    users = User.all ##FIX TO:  User.find_by_id(params[:id]) ALSO users become user
    render json: users ## users --> user
  end
end
