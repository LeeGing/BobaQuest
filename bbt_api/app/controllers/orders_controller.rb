
class OrdersController < ApplicationController
	def index
		@orders = Order.all
		render json: @orders
		# render json: {no: 'fucking way'}
	end

	def show
		# todo: look shit up in DB, return as JSON
		params[:id]
		# called on order confirmation page
		# order.find(id)
		render json
	end

	def create
		@order = params[:order]
    @user = params[:user]
		@orderdata = Order.new(order: @order, user_id: @user )
		@orderdata.save;
    # set up current user method. 
    # render json: { order: @order, user: @user } ## NOT RIGHT PROBABLY - JERmyEY
    ##probably should push it into database. m,nhvkjvi
  end

  # def order_params
  #   params.require(:user).permit(:name, :username)
  #   params.require(:order)
  # end

 
end