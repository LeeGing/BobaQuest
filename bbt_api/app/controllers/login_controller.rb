
class LoginController < ApplicationController
  def token

    user = User.find_by(email: params[:username])
    if user && user.authenticate(params[:password])
      render json: { access_token: "token" }
    else
      render json: { errors: "Invalid username or password" }, status: :unauthorized
    end
  end
end
