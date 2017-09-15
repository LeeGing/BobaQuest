
class OrdersController < ApplicationController
	def index
		@orders = Order.all
		render json: @orders
		# render json: {no: 'fucking way'}
	end

	def show
		# todo: look shit up in DB, return as JSON
	end

	def create
    @order = params[:order]
    @user = params[:user]
    render json: { order: @order, user: @user } ## NOT RIGHT PROBABLY - JERmyEY
    ##probably should push it into database. 


  end

end
