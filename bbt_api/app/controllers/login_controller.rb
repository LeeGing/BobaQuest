
class LoginController < ApplicationController
  def token

    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { access_token: "token", username: user.username }

    else
      render json: { errors: "Invalid username or password" }, status: :unauthorized
    end
  end
end
