class PointsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    trans = user.transactions
    sumPoint = trans.sum(:transpoint)
    render json: sumPoint
  end
end
